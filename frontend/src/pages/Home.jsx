import React from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'

const containerVariants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.18,
    },
  },
}

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  show: { opacity: 1, y: 0, transition: { type: 'spring', stiffness: 80, damping: 18 } },
}

const Home = () => {
  return (
    <motion.div
      className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 via-white to-purple-50 dark:from-[#23232e] dark:via-[#18181b] dark:to-[#23232e] relative overflow-hidden"
      initial="hidden"
      animate="show"
      variants={containerVariants}
    >
      {/* Animated background elements */}
      <motion.div className="absolute inset-0 overflow-hidden" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1 }}>
        <motion.div className="absolute top-20 left-20 w-72 h-72 bg-primary/10 dark:bg-primary/20 rounded-full blur-3xl animate-pulse" initial={{ scale: 0.7, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} transition={{ delay: 0.2, duration: 1, type: 'spring' }} />
        <motion.div className="absolute bottom-20 right-20 w-96 h-96 bg-purple-500/10 dark:bg-purple-800/20 rounded-full blur-3xl animate-pulse delay-1000" initial={{ scale: 0.7, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} transition={{ delay: 0.4, duration: 1, type: 'spring' }} />
        <motion.div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-blue-500/5 dark:bg-blue-900/10 rounded-full blur-2xl animate-pulse delay-500" initial={{ scale: 0.7, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} transition={{ delay: 0.6, duration: 1, type: 'spring' }} />
      </motion.div>

      <motion.div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 relative z-10" variants={containerVariants}>
        <div className="text-center">
          {/* Profile Image with floating animation */}
          <motion.div className="mb-8" variants={fadeUp} whileHover={{ scale: 1.08, rotate: 2 }}>
            <motion.div className="w-32 h-32 mx-auto rounded-full bg-gradient-to-r from-primary to-purple-600 p-1 shadow-2xl" animate={{ y: [0, -10, 0] }} transition={{ repeat: Infinity, duration: 2, ease: 'easeInOut' }}>
              <div className="w-full h-full rounded-full bg-white dark:bg-[#23232e] flex items-center justify-center">
                <span className="text-4xl font-bold text-primary">S</span>
              </div>
            </motion.div>
          </motion.div>

          {/* Main Heading with staggered animation */}
          <motion.h1 variants={fadeUp} className="text-4xl md:text-6xl font-bold text-gray-900 dark:text-gray-100 mb-6">
            Hi, I'm <span className="text-primary gradient-text">S Shanmukha Sai Reddy</span>
          </motion.h1>

          {/* Subtitle with typewriter effect */}
          <motion.p variants={fadeUp} className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 mb-8 max-w-3xl mx-auto">
            Full Stack Developer & AI Enthusiast
          </motion.p>

          {/* Description */}
          <motion.p variants={fadeUp} className="text-lg text-gray-500 dark:text-gray-400 mb-12 max-w-2xl mx-auto">
            B.Tech Computer Science student at VIT Chennai, passionate about creating innovative web applications 
            and AI-powered solutions. Specializing in React, Node.js, and modern web technologies.
          </motion.p>

          {/* CTA Buttons with hover effects */}
          <motion.div variants={fadeUp} className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link
              to="#projects"
              onClick={e => { e.preventDefault(); document.getElementById('projects').scrollIntoView({ behavior: 'smooth' }) }}
              className="group bg-primary text-white px-8 py-4 rounded-lg font-semibold hover:bg-primary/90 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl relative overflow-hidden"
            >
              <span className="relative z-10">View My Work</span>
              <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-primary transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>
            </Link>
            <Link
              to="#contact"
              onClick={e => { e.preventDefault(); document.getElementById('contact').scrollIntoView({ behavior: 'smooth' }) }}
              className="group border-2 border-primary text-primary px-8 py-4 rounded-lg font-semibold hover:bg-primary hover:text-white transition-all duration-300 transform hover:scale-105 relative overflow-hidden"
            >
              <span className="relative z-10">Get In Touch</span>
              <div className="absolute inset-0 bg-primary transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>
            </Link>
          </motion.div>

          {/* Social Links with staggered animation */}
          <motion.div variants={fadeUp} className="mt-16 flex justify-center space-x-6">
            <a
              href="https://github.com/shanmukhasaireddy13"
              target="_blank"
              rel="noopener noreferrer"
              className="social-link group"
            >
              <svg className="w-6 h-6 transition-all duration-300 group-hover:scale-110" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
              </svg>
            </a>
            <a
              href="https://www.linkedin.com/in/s-shanmukha-sai-reddy-9b9818282/"
              target="_blank"
              rel="noopener noreferrer"
              className="social-link group"
            >
              <svg className="w-6 h-6 transition-all duration-300 group-hover:scale-110" fill="currentColor" viewBox="0 0 24 24">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
              </svg>
            </a>
            <a
              href="https://leetcode.com/u/shanmukha_sai_reddy/"
              target="_blank"
              rel="noopener noreferrer"
              className="social-link group"
            >
              <svg className="w-6 h-6 transition-all duration-300 group-hover:scale-110" fill="currentColor" viewBox="0 0 24 24">
                <path d="M13.483 0a1.374 1.374 0 0 0-.961.438L7.116 6.226l-3.854 4.126a1.653 1.653 0 0 0 0 2.227 1.506 1.506 0 0 0 2.2 0l2.604-2.788 3.695 3.956a1.731 1.731 0 0 0 2.499.003l6.687-7.164A1.365 1.365 0 0 0 22.5.806a1.38 1.38 0 0 0-.393-.957A1.374 1.374 0 0 0 13.483 0zM10.5 5.445a1.038 1.038 0 0 1 .866.444l3.213 4.439a.995.995 0 0 1-.153 1.279l-.73.823a.996.996 0 0 1-1.279.153l-3.213-4.44a1.038 1.038 0 0 1 .444-.866l.852-.372z"/>
              </svg>
            </a>
          </motion.div>

          {/* Scroll Indicator with physics-like animation */}
          <motion.div variants={fadeUp} className="mt-20">
            <motion.div className="w-6 h-10 border-2 border-gray-400 dark:border-gray-700 rounded-full flex justify-center relative" animate={{ y: [0, 10, 0] }} transition={{ repeat: Infinity, duration: 1.5, ease: 'easeInOut' }}>
              <div className="w-1 h-3 bg-gray-400 dark:bg-gray-500 rounded-full mt-2 animate-pulse"></div>
              <div className="absolute inset-0 border-2 border-primary rounded-full opacity-0 animate-ping"></div>
            </motion.div>
          </motion.div>
    </div>
      </motion.div>
    </motion.div>
  )
}

export default Home
