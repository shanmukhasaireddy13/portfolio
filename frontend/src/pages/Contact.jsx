import React, { useState, useEffect, useRef } from 'react'
import { toast } from 'react-toastify'
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

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  })

  const [isSubmitting, setIsSubmitting] = useState(false)
  const contactInfoRef = useRef(null)
  const socialRef = useRef(null)
  const availabilityRef = useRef(null)
  const ctaRef = useRef(null)

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Simulate form submission
    setTimeout(() => {
      toast.success('Message sent successfully! I\'ll get back to you soon.')
      setFormData({ name: '', email: '', subject: '', message: '' })
      setIsSubmitting(false)
    }, 2000)
  }

  const contactInfo = [
    {
      icon: "📧",
      title: "Email",
      value: "s.shanmukhasaireddy13@gmail.com",
      link: "mailto:s.shanmukhasaireddy13@gmail.com"
    },
    {
      icon: "📱",
      title: "Phone",
      value: "+91 7207174919",
      link: "tel:+917207174919"
    },
    {
      icon: "📍",
      title: "Location",
      value: "Chennai, India",
      link: "#"
    }
  ]

  const socialLinks = [
    {
      name: "GitHub",
      url: "https://github.com/shanmukhasaireddy13",
      icon: (
        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
        </svg>
      )
    },
    {
      name: "LinkedIn",
      url: "https://www.linkedin.com/in/s-shanmukha-sai-reddy-9b9818282/",
      icon: (
        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
          <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
        </svg>
      )
    },
    {
      name: "LeetCode",
      url: "https://leetcode.com/u/shanmukha_sai_reddy/",
      icon: (
        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
          <path d="M13.483 0a1.374 1.374 0 0 0-.961.438L7.116 6.226l-3.854 4.126a1.653 1.653 0 0 0 0 2.227 1.506 1.506 0 0 0 2.2 0l2.604-2.788 3.695 3.956a1.731 1.731 0 0 0 2.499.003l6.687-7.164A1.365 1.365 0 0 0 22.5.806a1.38 1.38 0 0 0-.393-.957A1.374 1.374 0 0 0 13.483 0zM10.5 5.445a1.038 1.038 0 0 1 .866.444l3.213 4.439a.995.995 0 0 1-.153 1.279l-.73.823a.996.996 0 0 1-1.279.153l-3.213-4.44a1.038 1.038 0 0 1 .444-.866l.852-.372z"/>
        </svg>
      )
    }
  ]

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
            Get In <span className="text-primary gradient-text">Touch</span>
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            I'm always interested in new opportunities and exciting projects. 
            Let's discuss how we can work together!
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16">
          {/* Contact Form */}
          <motion.div variants={fadeUp} className="bg-white rounded-2xl shadow-lg p-8 hover-lift">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Send Me a Message</h2>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                    Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-colors duration-300"
                    placeholder="Your name"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                    Email *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-colors duration-300"
                    placeholder="your.email@example.com"
                  />
                </div>
              </div>
              
    <div>
                <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-2">
                  Subject *
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-colors duration-300"
                  placeholder="What's this about?"
                />
        </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                  Message *
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={6}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-colors duration-300 resize-none"
                  placeholder="Tell me about your project or opportunity..."
                />
              </div>
              
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-primary text-white py-3 px-6 rounded-lg font-semibold hover:bg-primary/90 transition-colors duration-300 disabled:opacity-50 disabled:cursor-not-allowed transform hover:scale-105"
              >
                {isSubmitting ? 'Sending...' : 'Send Message'}
              </button>
            </form>
          </motion.div>

          {/* Contact Information */}
          <div className="space-y-8">
            {/* Contact Details */}
            <motion.div ref={contactInfoRef} variants={fadeUp} className="bg-white rounded-2xl shadow-lg p-8 hover-lift">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Contact Information</h2>
              <div className="space-y-6">
                {contactInfo.map((info, index) => (
                  <motion.div key={index} variants={fadeUp} className="flex items-center space-x-4 group">
                    <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center group-hover:bg-primary/20 transition-colors duration-300">
                      <span className="text-2xl group-hover:scale-110 transition-transform duration-300">{info.icon}</span>
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900">{info.title}</h3>
                      <a
                        href={info.link}
                        className="text-primary hover:text-primary/80 transition-colors duration-300"
                      >
                        {info.value}
                      </a>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Social Links */}
            <motion.div ref={socialRef} variants={fadeUp} className="bg-white rounded-2xl shadow-lg p-8 hover-lift">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Follow Me</h2>
              <div className="flex space-x-4">
                {socialLinks.map((social, index) => (
                  <motion.a
                    key={index}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-12 h-12 bg-gray-100 rounded-lg flex items-center justify-center text-gray-600 hover:bg-primary hover:text-white transition-all duration-300 transform hover:scale-110"
                    variants={fadeUp}
                  >
                    {social.icon}
                  </motion.a>
                ))}
              </div>
            </motion.div>

            {/* Availability */}
            <motion.div ref={availabilityRef} variants={fadeUp} className="bg-gradient-to-r from-primary to-purple-600 rounded-2xl p-8 text-white hover-lift">
              <h3 className="text-xl font-bold mb-4">Current Availability</h3>
              <p className="mb-4 opacity-90">
                I'm currently available for freelance projects, internships, and full-time opportunities.
              </p>
              <div className="flex items-center space-x-2">
                <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse"></div>
                <span className="text-sm">Available for new projects</span>
              </div>
            </motion.div>
            </div>
        </div>
      
        {/* Additional Info */}
        <motion.div ref={ctaRef} variants={fadeUp} className="mt-16 text-center">
          <div className="bg-white rounded-2xl shadow-lg p-8 hover-lift">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Let's Work Together</h3>
            <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
              Whether you have a specific project in mind or just want to explore potential collaborations, 
              I'd love to hear from you. I'm always open to discussing new opportunities and challenges.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <span className="bg-gray-100 text-gray-700 px-4 py-2 rounded-full text-sm">
                Full Stack Development
              </span>
              <span className="bg-gray-100 text-gray-700 px-4 py-2 rounded-full text-sm">
                AI/ML Projects
              </span>
              <span className="bg-gray-100 text-gray-700 px-4 py-2 rounded-full text-sm">
                Mobile Development
              </span>
              <span className="bg-gray-100 text-gray-700 px-4 py-2 rounded-full text-sm">
                Problem Solving
              </span>
            </div>
    </div>
        </motion.div>
      </motion.div>
    </motion.div>
  )
}

export default Contact
