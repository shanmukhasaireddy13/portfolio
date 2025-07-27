import React, { useRef, useEffect, useState, createContext, useContext } from 'react'
import Home from './pages/Home'
import About from './pages/About'
import Skills from './pages/Skills'
import Projects from './pages/Projects'
import Contact from './pages/Contact'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

const SECTIONS = [
  { id: 'home', label: 'Home', Component: Home },
  { id: 'about', label: 'About', Component: About },
  { id: 'skills', label: 'Skills', Component: Skills },
  { id: 'projects', label: 'Projects', Component: Projects },
  { id: 'contact', label: 'Contact', Component: Contact },
]

const NAVBAR_HEIGHT = 64 // px (h-16)

// Theme context for dark/light mode
const ThemeContext = createContext()
export const useTheme = () => useContext(ThemeContext)

const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState(() => {
    if (typeof window !== 'undefined') {
      const stored = localStorage.getItem('theme')
      if (stored) return stored
      if (window.matchMedia('(prefers-color-scheme: dark)').matches) return 'dark'
    }
    return 'light'
  })

  useEffect(() => {
    if (theme === 'dark') {
      document.documentElement.classList.add('dark')
    } else {
      document.documentElement.classList.remove('dark')
    }
    localStorage.setItem('theme', theme)
  }, [theme])

  const toggleTheme = () => setTheme(t => (t === 'dark' ? 'light' : 'dark'))

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  )
}

const App = () => {
  const sectionRefs = useRef(SECTIONS.map(() => React.createRef()))
  const [activeSection, setActiveSection] = useState('home')
  const debounceTimeout = useRef(null)

  // IntersectionObserver for active section
  useEffect(() => {
    const handleIntersect = (entries) => {
      let maxRatio = 0
      let current = 'home'
      entries.forEach(entry => {
        if (entry.isIntersecting && entry.intersectionRatio > maxRatio) {
          maxRatio = entry.intersectionRatio
          current = entry.target.id
        }
      })
      if (debounceTimeout.current) clearTimeout(debounceTimeout.current)
      debounceTimeout.current = setTimeout(() => {
        setActiveSection(current)
      }, 60)
    }
    const observer = new window.IntersectionObserver(handleIntersect, {
      root: null,
      rootMargin: `-${NAVBAR_HEIGHT}px 0px 0px 0px`,
      threshold: Array.from({ length: 21 }, (_, i) => i / 20),
    })
    sectionRefs.current.forEach(ref => {
      if (ref.current) observer.observe(ref.current)
    })
    return () => {
      observer.disconnect()
      if (debounceTimeout.current) clearTimeout(debounceTimeout.current)
    }
  }, [])

  // Scroll to section
  const scrollToSection = (id) => {
    const idx = SECTIONS.findIndex(s => s.id === id)
    const ref = sectionRefs.current[idx]
    if (ref && ref.current) {
      ref.current.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <ThemeProvider>
      <div className='min-h-screen bg-gray-50 dark:bg-[#18181b] text-gray-900 dark:text-gray-100 snap-y snap-mandatory scroll-smooth transition-colors duration-500'>
        <ToastContainer />
        <Navbar
          sections={SECTIONS}
          activeSection={activeSection}
          onNavClick={scrollToSection}
        />
        {SECTIONS.map(({ id, Component }, idx) => (
          <section
            key={id}
            id={id}
            ref={sectionRefs.current[idx]}
            className="snap-start min-h-screen h-screen pt-16 flex flex-col justify-center overflow-hidden"
            style={{ scrollSnapAlign: 'start' }}
          >
            <Component />
          </section>
        ))}
        <Footer />
      </div>
    </ThemeProvider>
  )
}

export default App

