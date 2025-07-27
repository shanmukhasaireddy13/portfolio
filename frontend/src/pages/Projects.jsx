import React, { useState, useEffect, useRef } from 'react'
import { motion } from 'framer-motion'

const containerVariants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.13,
    },
  },
}

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  show: { opacity: 1, y: 0, transition: { type: 'spring', stiffness: 80, damping: 18 } },
}

const Projects = () => {
  const [activeFilter, setActiveFilter] = useState('all')
  const [animatedProjects, setAnimatedProjects] = useState({})
  const featuredRef = useRef(null)
  const allProjectsRef = useRef(null)

  useEffect(() => {
    const projectObserver = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const projectId = entry.target.dataset.projectId
          setAnimatedProjects(prev => ({ ...prev, [projectId]: true }))
        }
      })
    }, { threshold: 0.3 })

    const projectElements = document.querySelectorAll('[data-project-id]')
    projectElements.forEach(el => projectObserver.observe(el))

    return () => projectObserver.disconnect()
  }, [])

  const projects = [
    {
      id: 1,
      title: "Leave It For Me",
      category: "fullstack",
      image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=500&h=300&fit=crop",
      description: "A comprehensive academic assistant system for VIT students, featuring a MERN web application and Flutter mobile app to manage assignments and deadlines with real-time LMS integration.",
      technologies: ["React", "Node.js", "Express", "MongoDB", "Flutter", "Firebase", "Puppeteer"],
      liveUrl: "#",
      githubUrl: "#",
      featured: true,
      highlights: [
        "Integrated LMS Moodle and VTOP platforms for real-time scraping",
        "Secure JWT authentication with multi-device login",
        "Flutter app with Firebase Cloud Messaging for notifications",
        "React admin dashboard with real-time analytics"
      ]
    },
    {
      id: 2,
      title: "InfraVision",
      category: "ai",
      image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=500&h=300&fit=crop",
      description: "AI-based infrastructure monitoring system that detects and classifies infrastructure issues from uploaded images using TensorFlow.js and Google Gemini for multilingual complaint generation.",
      technologies: ["React", "Node.js", "TensorFlow.js", "Google Gemini", "Tailwind CSS", "PDFKit"],
      liveUrl: "#",
      githubUrl: "#",
      featured: true,
      highlights: [
        "Custom-trained TensorFlow.js model for client-side classification",
        "Multilingual support (Telugu, Hindi, Tamil, Kannada, Malayalam, English)",
        "Voice-to-text, text-to-speech, and chat assistant features",
        "Professional PDF export with GPS-based location detection"
      ]
    }
  ]

  const filters = [
    { id: 'all', label: 'All Projects' },
    { id: 'fullstack', label: 'Full Stack' },
    { id: 'ai', label: 'AI/ML' },
    { id: 'mobile', label: 'Mobile' }
  ]

  const filteredProjects = activeFilter === 'all' 
    ? projects 
    : projects.filter(project => project.category === activeFilter)

  return (
    <motion.div
      className="min-h-screen bg-gray-50 pt-20"
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.2 }}
      variants={containerVariants}
    >
      <motion.div variants={containerVariants} className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Header */}
        <motion.div variants={fadeUp} className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            My <span className="text-primary gradient-text">Projects</span>
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Here are some of the projects I've worked on. Each one represents a unique challenge and learning experience.
          </p>
        </motion.div>

        {/* Filter Buttons */}
        <motion.div variants={fadeUp} className="flex flex-wrap justify-center gap-4 mb-12">
          {filters.map((filter) => (
            <motion.button
              key={filter.id}
              onClick={() => setActiveFilter(filter.id)}
              variants={fadeUp}
              className={`px-6 py-3 rounded-lg font-medium transition-all duration-300 transform hover:scale-105 ${
                activeFilter === filter.id
                  ? 'bg-primary text-white shadow-lg'
                  : 'bg-white text-gray-600 hover:bg-gray-100 shadow-md'
              }`}
              style={{ outline: 'none', border: 'none' }}
            >
              {filter.label}
            </motion.button>
          ))}
        </motion.div>

        {/* Featured Projects */}
        <motion.div ref={featuredRef} variants={fadeUp} className="mb-16">
          <h2 className="text-2xl font-bold text-gray-900 mb-8">Featured Projects</h2>
          <div className="grid lg:grid-cols-2 gap-8">
            {projects.filter(p => p.featured).map((project) => (
              <motion.div
                key={project.id}
                className="bg-white rounded-2xl shadow-lg overflow-hidden hover-lift group"
                data-project-id={project.id}
                variants={fadeUp}
                initial="hidden"
                whileInView="show"
                viewport={{ once: false, amount: 0.2 }}
              >
                <div className="relative h-64 overflow-hidden">
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                  <div className="absolute bottom-4 left-4 right-4">
                    <h3 className="text-white text-xl font-bold mb-2">{project.title}</h3>
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.slice(0, 3).map((tech, index) => (
                        <span key={index} className="bg-white/20 text-white text-xs px-2 py-1 rounded-full">
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
                <div className="p-6">
                  <p className="text-gray-600 mb-4 line-clamp-3">{project.description}</p>
                  {/* Project Highlights */}
                  <div className="mb-4">
                    <h4 className="font-semibold text-gray-900 mb-2">Key Features:</h4>
                    <ul className="space-y-1">
                      {project.highlights.slice(0, 2).map((highlight, index) => (
                        <li key={index} className="text-sm text-gray-600 flex items-start">
                          <span className="text-primary mr-2">•</span>
                          {highlight}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="flex gap-3">
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-primary text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-primary/90 transition-colors duration-300"
                    >
                      Live Demo
                    </a>
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="border border-gray-300 text-gray-700 px-4 py-2 rounded-lg text-sm font-medium hover:bg-gray-50 transition-colors duration-300"
                    >
                      View Code
                    </a>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* All Projects Grid */}
        <motion.div ref={allProjectsRef} variants={fadeUp}>
          <h2 className="text-2xl font-bold text-gray-900 mb-8">All Projects</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project) => (
              <motion.div
                key={project.id}
                className="bg-white rounded-xl shadow-md overflow-hidden hover-lift group"
                data-project-id={project.id}
                variants={fadeUp}
                initial="hidden"
                whileInView="show"
                viewport={{ once: false, amount: 0.2 }}
              >
                <div className="relative h-48 overflow-hidden">
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute top-3 right-3">
                    <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                      project.category === 'fullstack' ? 'bg-purple-100 text-purple-800' :
                      project.category === 'ai' ? 'bg-green-100 text-green-800' :
                      'bg-blue-100 text-blue-800'
                    }`}>
                      {project.category === 'fullstack' ? 'Full Stack' :
                       project.category === 'ai' ? 'AI/ML' : 'Mobile'}
                    </span>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-lg font-bold text-gray-900 mb-2">{project.title}</h3>
                  <p className="text-gray-600 text-sm mb-4 line-clamp-2">{project.description}</p>
                  <div className="flex flex-wrap gap-1 mb-4">
                    {project.technologies.map((tech, index) => (
                      <span key={index} className="bg-gray-100 text-gray-700 text-xs px-2 py-1 rounded">
                        {tech}
                      </span>
                    ))}
                  </div>
                  <div className="flex gap-2">
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 bg-primary text-white text-center py-2 rounded-lg text-sm font-medium hover:bg-primary/90 transition-colors duration-300"
                    >
                      Demo
                    </a>
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 border border-gray-300 text-gray-700 text-center py-2 rounded-lg text-sm font-medium hover:bg-gray-50 transition-colors duration-300"
                    >
                      Code
                    </a>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Call to Action */}
        <motion.div variants={fadeUp} className="mt-16 text-center">
          <div className="bg-gradient-to-r from-primary to-purple-600 rounded-2xl p-8 text-white">
            <h3 className="text-2xl font-bold mb-4">Interested in working together?</h3>
            <p className="text-lg mb-6 opacity-90">
              Let's discuss your project and see how I can help bring your ideas to life.
            </p>
            <a
              href="#contact"
              onClick={e => { e.preventDefault(); document.getElementById('contact').scrollIntoView({ behavior: 'smooth' }) }}
              className="bg-white text-primary px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors duration-300"
            >
              Get In Touch
            </a>
          </div>
        </motion.div>
      </motion.div>
    </motion.div>
  )
}

export default Projects 