import React, { useState, useEffect } from 'react'
import { useTheme } from '../App'

const Navbar = ({ sections = [], activeSection, onNavClick }) => {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const { theme, toggleTheme } = useTheme()

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      scrolled ? 'bg-white/95 dark:bg-[#23232e]/80 backdrop-blur-md shadow-lg' : 'bg-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <a href="#home" className="flex items-center space-x-2" onClick={e => { e.preventDefault(); onNavClick('home'); }}>
            <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-lg">S</span>
            </div>
            <span className="text-xl font-bold text-gray-800 dark:text-gray-100">Portfolio</span>
          </a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {sections.map((item) => (
              <button
                key={item.id}
                onClick={() => onNavClick(item.id)}
                className={`text-sm font-medium transition-colors duration-200 focus:outline-none ${
                  activeSection === item.id
                    ? 'text-primary underline underline-offset-8 decoration-2'
                    : 'text-gray-600 dark:text-gray-300 hover:text-primary'
                }`}
                style={{ background: 'none', border: 'none', padding: 0, cursor: 'pointer' }}
              >
                {item.label}
              </button>
            ))}
            {/* Theme Toggle */}
            <button
              aria-label={theme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode'}
              onClick={toggleTheme}
              className="ml-6 p-2 rounded-full border border-gray-200 dark:border-gray-700 bg-gray-100 dark:bg-[#23232e] text-gray-700 dark:text-gray-200 hover:bg-primary/10 hover:dark:bg-primary/20 transition-all duration-300 focus:outline-none"
            >
              <span className="sr-only">Toggle theme</span>
              <span className="inline-block align-middle transition-transform duration-300">
                {theme === 'dark' ? (
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M21 12.79A9 9 0 1111.21 3a7 7 0 109.79 9.79z" /></svg>
                ) : (
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><circle cx="12" cy="12" r="5" /><path strokeLinecap="round" strokeLinejoin="round" d="M12 1v2m0 18v2m11-11h-2M3 12H1m16.95 6.95l-1.41-1.41M6.34 6.34L4.93 4.93m12.02 0l-1.41 1.41M6.34 17.66l-1.41 1.41" /></svg>
                )}
              </span>
            </button>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 rounded-md text-gray-600 dark:text-gray-300 hover:text-primary focus:outline-none"
          >
            <svg
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {isOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden bg-white dark:bg-[#23232e] border-t border-gray-200 dark:border-gray-700">
            <div className="px-2 pt-2 pb-3 space-y-1">
              {sections.map((item) => (
                <button
                  key={item.id}
                  onClick={() => { setIsOpen(false); onNavClick(item.id); }}
                  className={`block px-3 py-2 rounded-md text-base font-medium transition-colors duration-200 w-full text-left ${
                    activeSection === item.id
                      ? 'text-primary bg-primary/10 dark:bg-primary/20'
                      : 'text-gray-600 dark:text-gray-300 hover:text-primary hover:bg-gray-50 dark:hover:bg-gray-800'
                  }`}
                  style={{ background: 'none', border: 'none', cursor: 'pointer' }}
                >
                  {item.label}
                </button>
              ))}
              {/* Theme Toggle Mobile */}
              <button
                aria-label={theme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode'}
                onClick={() => { setIsOpen(false); toggleTheme(); }}
                className="mt-2 p-2 rounded-full border border-gray-200 dark:border-gray-700 bg-gray-100 dark:bg-[#23232e] text-gray-700 dark:text-gray-200 hover:bg-primary/10 hover:dark:bg-primary/20 transition-all duration-300 focus:outline-none w-full flex items-center justify-center"
              >
                <span className="sr-only">Toggle theme</span>
                <span className="inline-block align-middle transition-transform duration-300">
                  {theme === 'dark' ? (
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M21 12.79A9 9 0 1111.21 3a7 7 0 109.79 9.79z" /></svg>
                  ) : (
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><circle cx="12" cy="12" r="5" /><path strokeLinecap="round" strokeLinejoin="round" d="M12 1v2m0 18v2m11-11h-2M3 12H1m16.95 6.95l-1.41-1.41M6.34 6.34L4.93 4.93m12.02 0l-1.41 1.41M6.34 17.66l-1.41 1.41" /></svg>
                  )}
                </span>
              </button>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}

export default Navbar
