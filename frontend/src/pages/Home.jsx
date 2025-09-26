import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { 
  Download, MapPin, Mail, Phone, Github, Linkedin, Code, ChevronDown, ArrowRight,
  ExternalLink, Smartphone, Globe, Database, Brain, Filter, User, Award, BookOpen,
  Monitor, Zap, Target, Calendar, GraduationCap, Star, Trophy, Heart, Send,
  CheckCircle, Coffee, Lightbulb, Briefcase, School
} from 'lucide-react'
import Typewriter from 'typewriter-effect'

const Home = () => {
  const [isVisible, setIsVisible] = useState(false)
  const [activeFilter, setActiveFilter] = useState('all')
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState(null) // 'success', 'error', null

  useEffect(() => {
    setIsVisible(true)
  }, [])

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  const scrollToNextSection = () => {
    scrollToSection('about')
  }

  // Projects data with updated links
  const projects = [
    {
      id: 1,
      title: "Leave It For Me",
      description: "A comprehensive full-stack academic assistant system for VIT students, featuring a MERN web application and Flutter mobile app to manage assignments and deadlines.",
      image: "/images/projects/leave-it-for-me.png",
      category: "fullstack",
      technologies: ["React", "Node.js", "Express", "MongoDB", "Flutter", "Firebase"],
      features: [
        "LMS Moodle and VTOP integration with Puppeteer",
        "JWT authentication with email verification",
        "Real-time push notifications",
        "Admin dashboard with analytics",
        "Multi-device login support",
        "Background job scheduling"
      ],
      github: "https://github.com/saireddy123456/leaveitforme-link/raw/main/releases/leaveitforme-latest.apk",
      live: "https://new-project-frontend-0roz.onrender.com/",
      type: "web-app",
      hasMobileApp: true,
      mobileAppUrl: "https://github.com/saireddy123456/leaveitforme-link/raw/main/releases/leaveitforme-latest.apk"
    },
    {
      id: 2,
      title: "InfraVision",
      description: "AI-based infrastructure monitoring system that detects and classifies infrastructure issues from uploaded images using computer vision and Google Gemini.",
      image: "/images/projects/infravision.png",
      category: "ai-ml",
      technologies: ["React", "Node.js", "TensorFlow.js", "Google Gemini", "MongoDB", "Tailwind CSS"],
      features: [
        "Custom-trained TensorFlow.js model",
        "Multilingual complaint generation",
        "GPS-based location detection",
        "Voice-to-text and text-to-speech",
        "Professional PDF export",
        "Drag-and-drop interface"
      ],
      github: "https://github.com/shanmukhasaireddy13/infravision",
      live: "https://infravison.onrender.com/",
      type: "web-app"
    },
    {
      id: 3,
      title: "Weather Card",
      description: "A beautiful and responsive weather application that provides real-time weather information with modern UI design and smooth animations.",
      image: "/images/projects/weather-app.png",
      category: "static",
      technologies: ["HTML", "CSS", "JavaScript", "Weather API"],
      features: [
        "Real-time weather data",
        "Location-based weather",
        "5-day forecast",
        "Weather icons and animations",
        "Responsive design",
        "Search functionality"
      ],
      github: "https://github.com/shanmukhasaireddy13/weather-app",
      live: "https://shanmukhasaireddy13.github.io/Weather-card/",
      type: "static-page"
    },
    {
      id: 4,
      title: "To-Do List",
      description: "A simple yet powerful todo list application with modern UI and local storage functionality for task management.",
      image: "/images/projects/todo-list.png",
      category: "static",
      technologies: ["HTML", "CSS", "JavaScript", "Local Storage"],
      features: [
        "Add, edit, and delete tasks",
        "Mark tasks as complete",
        "Local storage persistence",
        "Responsive design",
        "Clean and intuitive UI",
        "Task filtering"
      ],
      github: "https://github.com/shanmukhasaireddy13/todo-list",
      live: "https://shanmukhasaireddy13.github.io/To-Do-List/",
      type: "static-page"
    },
    {
      id: 5,
      title: "Campus Connect",
      description: "A Flutter mobile application designed to enhance campus connectivity and communication among students and faculty.",
      image: "/images/projects/campus-connect.png",
      category: "mobile",
      technologies: ["Flutter", "Firebase", "Dart", "Cloud Firestore"],
      features: [
        "Real-time messaging",
        "Event management",
        "Student directory",
        "Push notifications",
        "Cross-platform compatibility",
        "Offline support"
      ],
      github: "https://github.com/shanmukhasaireddy13/campus-connect",
      live: "#",
      type: "mobile-app"
    }
  ]

  const filters = [
    { id: 'all', label: 'All Projects', icon: Filter },
    { id: 'fullstack', label: 'Full Stack', icon: Database },
    { id: 'ai-ml', label: 'AI/ML', icon: Brain },
    { id: 'mobile', label: 'Mobile Apps', icon: Smartphone },
    { id: 'static', label: 'Static Pages', icon: Globe },
    { id: 'web', label: 'Web Apps', icon: Globe },
    { id: 'flutter', label: 'Flutter', icon: Smartphone }
  ]

  const filteredProjects = activeFilter === 'all' 
    ? projects 
    : projects.filter(project => {
        if (activeFilter === 'web') return project.type === 'web-app'
        if (activeFilter === 'flutter') return project.technologies.includes('Flutter')
        return project.category === activeFilter
      })

  const getCategoryIcon = (type) => {
    switch (type) {
      case 'web-app': return Globe
      case 'mobile-app': return Smartphone
      case 'static-page': return Code
      default: return Code
    }
  }

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsSubmitting(true)
    setSubmitStatus(null)

    try {
      // Using EmailJS for real-time email sending
      const templateParams = {
        from_name: formData.name,
        from_email: formData.email,
        message: formData.message,
        to_name: 'Shanmukha Sai Reddy'
      }

      // You can use EmailJS or any other email service
      // For now, we'll simulate the email sending
      await new Promise(resolve => setTimeout(resolve, 2000)) // Simulate API call
      
      // If using EmailJS, uncomment and configure:
      // await emailjs.send(
      //   'YOUR_SERVICE_ID',
      //   'YOUR_TEMPLATE_ID',
      //   templateParams,
      //   'YOUR_PUBLIC_KEY'
      // )

      setSubmitStatus('success')
      setFormData({ name: '', email: '', message: '' })
      
      // Reset status after 3 seconds
      setTimeout(() => setSubmitStatus(null), 3000)
    } catch (error) {
      console.error('Error sending email:', error)
      setSubmitStatus('error')
      
      // Reset status after 3 seconds
      setTimeout(() => setSubmitStatus(null), 3000)
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <div className="">
      {/* Hero Section */}
      <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden bg-gradient-to-br from-gray-50 via-white to-blue-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900">
      {/* Animated Background */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Gradient Orbs */}
        <motion.div
          className="absolute top-20 left-20 w-72 h-72 bg-gradient-to-r from-blue-400/20 to-purple-600/20 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.6, 0.3],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute bottom-20 right-20 w-96 h-96 bg-gradient-to-r from-purple-400/20 to-pink-600/20 rounded-full blur-3xl"
          animate={{
            scale: [1.2, 1, 1.2],
            opacity: [0.2, 0.5, 0.2],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 2,
          }}
        />
        
        {/* Floating Particles */}
        {[...Array(30)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 bg-blue-500/30 dark:bg-blue-400/30 rounded-full"
            initial={{
              x: Math.random() * window.innerWidth,
              y: Math.random() * window.innerHeight,
            }}
            animate={{
              y: [null, Math.random() * -100 - 50],
              opacity: [0, 1, 0],
            }}
            transition={{
              duration: Math.random() * 10 + 10,
              repeat: Infinity,
              delay: Math.random() * 5,
            }}
          />
        ))}
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center min-h-screen py-20">
          {/* Left Side - Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="space-y-8"
          >
            {/* Greeting */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="flex items-center space-x-4"
            >
              <div className="h-0.5 w-16 bg-gradient-to-r from-blue-500 to-purple-600"></div>
              <span className="text-blue-600 dark:text-blue-400 font-medium tracking-wider">HELLO THERE!</span>
            </motion.div>

            {/* Name & Title */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.8 }}
            >
              <h1 className="text-5xl lg:text-7xl font-bold text-gray-900 dark:text-white leading-tight">
                I'm{' '}
                <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 bg-clip-text text-transparent">
                  Shanmukha
                </span>
                <br />
                <span className="text-3xl lg:text-5xl text-gray-600 dark:text-gray-300">
                  Sai Reddy
                </span>
              </h1>
            </motion.div>

            {/* Dynamic Role */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.6 }}
              className="text-xl lg:text-2xl text-gray-600 dark:text-gray-300 font-medium"
            >
              <Typewriter
                options={{
                  strings: [
                    'B.Tech Computer Science Student',
                    'Full Stack Developer',
                    'AI/ML Enthusiast',
                    'Mobile App Developer',
                    'Problem Solver'
                  ],
                  autoStart: true,
                  loop: true,
                  delay: 75,
                  deleteSpeed: 50,
                }}
              />
            </motion.div>

            {/* Description */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.6 }}
              className="text-lg text-gray-600 dark:text-gray-400 leading-relaxed max-w-xl"
            >
              Computer Science student at VIT Chennai with a passion for creating innovative 
              web applications and AI-powered solutions. CGPA: 9.01/10 with expertise in 
              React, Node.js, Flutter, and modern web technologies.
            </motion.p>

            {/* Contact Info */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7, duration: 0.6 }}
              className="flex flex-wrap gap-6 text-sm text-gray-600 dark:text-gray-400"
            >
              <div className="flex items-center space-x-2">
                <MapPin size={16} className="text-blue-500" />
                <span>Chennai, India</span>
              </div>
              <div className="flex items-center space-x-2">
                <Phone size={16} className="text-green-500" />
                <span>+91 7207174919</span>
              </div>
              <div className="flex items-center space-x-2">
                <Mail size={16} className="text-red-500" />
                <span>s.shanmukhasaireddy13@gmail.com</span>
              </div>
            </motion.div>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8, duration: 0.6 }}
              className="flex flex-col sm:flex-row gap-4 pt-4"
            >
              <motion.button
                onClick={() => scrollToSection('projects')}
                className="group relative px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-xl font-semibold shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <span className="relative z-10 flex items-center space-x-2">
                  <span>View My Work</span>
                  <Code size={18} />
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-pink-600 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>
              </motion.button>
              
              <motion.a
                href="https://drive.google.com/file/d/1T2ovn3WbnFihBeRqjgH686bbYwPWVpcF/view?usp=drive_link"
                onClick={(e) => {
                  // e.preventDefault()
                  // Here you would typically trigger a download of your resume
                  console.log('Resume download triggered')
                }}
                className="group flex items-center space-x-2 px-8 py-4 border-2 border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 rounded-xl font-semibold hover:border-blue-500 hover:text-blue-500 dark:hover:text-blue-400 transition-all duration-300"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <span>Download Resume</span>
                <Download size={18} className="group-hover:animate-bounce" />
              </motion.a>
            </motion.div>

            {/* Social Links */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.9, duration: 0.6 }}
              className="flex space-x-6 pt-4"
            >
              {[
                { href: "https://github.com/shanmukhasaireddy13", icon: Github, color: "hover:text-gray-900 dark:hover:text-white" },
                { href: "https://www.linkedin.com/in/s-shanmukha-sai-reddy-9b9818282/", icon: Linkedin, color: "hover:text-blue-600" },
                { href: "https://leetcode.com/u/shanmukha_sai_reddy/", icon: Code, color: "hover:text-yellow-600" },
              ].map((social, index) => {
                const Icon = social.icon
                return (
                  <motion.a
                    key={index}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`p-3 rounded-full bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-400 ${social.color} transition-all duration-300 transform hover:scale-110 hover:shadow-lg`}
                    whileHover={{ y: -2 }}
                    whileTap={{ scale: 0.95 }}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 1 + index * 0.1, duration: 0.4 }}
                  >
                    <Icon size={20} />
                  </motion.a>
                )
              })}
            </motion.div>
          </motion.div>

          {/* Right Side - Visual */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.3 }}
            className="relative flex justify-center items-center"
          >
            {/* Profile Container */}
            <div className="relative">
              {/* Animated Ring */}
              <motion.div
                className="absolute inset-0 rounded-full"
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
              >
                <div className="w-96 h-96 rounded-full border-4 border-dashed border-blue-500/30 dark:border-blue-400/30"></div>
              </motion.div>
              
              {/* Main Profile Circle */}
              <motion.div
                className="relative w-80 h-80 rounded-full bg-gradient-to-br from-blue-500 via-purple-600 to-indigo-600 p-1 shadow-2xl"
                animate={{
                  boxShadow: [
                    "0 25px 50px -12px rgba(59, 130, 246, 0.25)",
                    "0 25px 50px -12px rgba(147, 51, 234, 0.25)",
                    "0 25px 50px -12px rgba(59, 130, 246, 0.25)",
                  ],
                }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              >
                <div className="w-full h-full rounded-full bg-white dark:bg-gray-900 flex items-center justify-center relative overflow-hidden">
                  {/* Placeholder for actual photo */}
                  <div className="text-8xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                    SSR
                  </div>
                  
                  {/* Floating Tech Icons */}
                  {[
                    { icon: "⚛️", position: "top-4 right-8", delay: 0 },
                    { icon: "🌐", position: "top-16 left-4", delay: 0.5 },
                    { icon: "📱", position: "bottom-16 right-4", delay: 1 },
                    { icon: "🤖", position: "bottom-4 left-8", delay: 1.5 },
                  ].map((item, index) => (
                    <motion.div
                      key={index}
                      className={`absolute ${item.position} text-2xl`}
                      animate={{
                        y: [0, -10, 0],
                        rotate: [0, 10, -10, 0],
                      }}
                      transition={{
                        duration: 3,
                        repeat: Infinity,
                        delay: item.delay,
                        ease: "easeInOut",
                      }}
                    >
                      {item.icon}
                    </motion.div>
                  ))}
                </div>
              </motion.div>
              
              {/* Background Blur Effect */}
              <div className="absolute inset-0 rounded-full bg-gradient-to-br from-blue-500/20 to-purple-600/20 blur-3xl scale-110 -z-10"></div>
            </div>
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5, duration: 0.6 }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center space-y-2 cursor-pointer"
          onClick={scrollToNextSection}
        >
          <span className="text-sm text-gray-500 dark:text-gray-400">Scroll to explore</span>
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
            className="p-2 rounded-full bg-white dark:bg-gray-800 shadow-lg hover:shadow-xl transition-all duration-300"
          >
            <ChevronDown size={20} className="text-gray-600 dark:text-gray-400" />
          </motion.div>
        </motion.div>
      </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-white dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
              About <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Me</span>
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              Passionate Computer Science student specializing in AI and Robotics with a drive for innovation
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left side - Image and stats */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="relative"
            >
              <div className="bg-gradient-to-br from-blue-500 to-purple-600 rounded-2xl p-8 text-white">
                <div className="flex items-center space-x-4 mb-6">
                  <GraduationCap size={32} />
                  <div>
                    <h3 className="text-2xl font-bold">Education</h3>
                    <p className="opacity-90">VIT Chennai</p>
                  </div>
                </div>
                <div className="space-y-4">
                  <div className="flex justify-between items-center">
                    <span>B.Tech Computer Science</span>
                    <span className="font-semibold">2023-2027</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span>Specialization: AI & Robotics</span>
                    <span className="font-semibold">CGPA: 9.01/10</span>
                  </div>
                  <div className="pt-4 border-t border-white/20">
                    <p className="text-sm opacity-90">
                      Focused on artificial intelligence, machine learning, robotics, and software development
                    </p>
                  </div>
                </div>
              </div>

              {/* Stats cards */}
              <div className="grid grid-cols-2 gap-4 mt-6">
                <div className="bg-gray-100 dark:bg-gray-800 rounded-xl p-6 text-center">
                  <div className="text-3xl font-bold text-blue-600 dark:text-blue-400 mb-2">5+</div>
                  <p className="text-gray-600 dark:text-gray-400">Projects Completed</p>
                </div>
                <div className="bg-gray-100 dark:bg-gray-800 rounded-xl p-6 text-center">
                  <div className="text-3xl font-bold text-purple-600 dark:text-purple-400 mb-2">10+</div>
                  <p className="text-gray-600 dark:text-gray-400">Technologies</p>
                </div>
              </div>
            </motion.div>

            {/* Right side - Content */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="space-y-6"
            >
              <div>
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">My Journey</h3>
                <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                  I'm a dedicated Computer Science student at VIT Chennai, specializing in AI and Robotics. 
                  With a strong academic record (CGPA: 9.01/10), I'm passionate about creating innovative 
                  solutions that bridge technology and real-world problems.
                </p>
              </div>

              <div>
                <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">What I Do</h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {[
                    { icon: Globe, title: 'Full Stack Development', desc: 'MERN Stack Applications' },
                    { icon: Brain, title: 'AI/ML Solutions', desc: 'Computer Vision & NLP' },
                    { icon: Smartphone, title: 'Mobile Development', desc: 'Flutter & React Native' },
                    { icon: Database, title: 'Backend Systems', desc: 'Node.js & Database Design' }
                  ].map((item, index) => {
                    const Icon = item.icon
                    return (
                      <div key={index} className="flex items-start space-x-3 p-4 bg-gray-50 dark:bg-gray-800 rounded-lg">
                        <Icon size={20} className="text-blue-600 dark:text-blue-400 mt-1" />
                        <div>
                          <h5 className="font-medium text-gray-900 dark:text-white">{item.title}</h5>
                          <p className="text-sm text-gray-600 dark:text-gray-400">{item.desc}</p>
                        </div>
                      </div>
                    )
                  })}
                </div>
              </div>

              <div>
                <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">Technical Skills</h4>
                <div className="flex flex-wrap gap-2">
                  {['React', 'Node.js', 'Python', 'Flutter', 'MongoDB', 'JavaScript', 'TensorFlow', 'Firebase', 'Git', 'Docker'].map((skill, index) => (
                    <span key={index} className="px-3 py-1 bg-blue-100 dark:bg-blue-900/20 text-blue-600 dark:text-blue-400 rounded-full text-sm font-medium">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 bg-gray-50 dark:bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
              My <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Projects</span>
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              A showcase of my work ranging from full-stack applications and AI-powered solutions to mobile apps
            </p>
          </motion.div>

          {/* Filters */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="flex flex-wrap justify-center gap-4 mb-12"
          >
            {filters.map((filter) => {
              const Icon = filter.icon
              return (
                <motion.button
                  key={filter.id}
                  onClick={() => setActiveFilter(filter.id)}
                  className={`flex items-center space-x-2 px-6 py-3 rounded-xl font-medium transition-all duration-300 ${
                    activeFilter === filter.id
                      ? 'bg-blue-600 text-white shadow-lg'
                      : 'bg-white dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-600'
                  }`}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Icon size={18} />
                  <span>{filter.label}</span>
                </motion.button>
              )
            })}
          </motion.div>

          {/* Projects Grid */}
          <motion.div
            layout
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {filteredProjects.map((project, index) => {
              const CategoryIcon = getCategoryIcon(project.type)
              return (
                <motion.div
                  key={project.id}
                  layout
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="bg-white dark:bg-gray-700 rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 group"
                >
                  {/* Project iframe */}
                  <div className="relative overflow-hidden h-48">
                    <iframe
                      src={project.live !== "#" ? project.live : project.github}
                      title={project.title}
                      className="w-full h-full border-0 group-hover:scale-105 transition-transform duration-500"
                      loading="lazy"
                      sandbox="allow-scripts allow-same-origin allow-forms allow-popups"
                      onLoad={(e) => {
                        // Hide fallback image when iframe loads successfully
                        const fallbackImg = e.target.nextSibling;
                        if (fallbackImg) {
                          fallbackImg.style.display = 'none';
                        }
                      }}
                      onError={(e) => {
                        // Show fallback image when iframe fails
                        e.target.style.display = 'none';
                        const fallbackImg = e.target.nextSibling;
                        if (fallbackImg) {
                          fallbackImg.style.display = 'block';
                        }
                      }}
                    />
                    {/* Fallback image if iframe fails to load */}
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                      style={{ display: 'block' }}
                      onError={(e) => {
                        // If both iframe and fallback image fail, show a placeholder
                        e.target.style.display = 'none';
                        const placeholder = e.target.nextSibling;
                        if (placeholder) {
                          placeholder.style.display = 'flex';
                        }
                      }}
                    />
                    {/* Placeholder if both iframe and image fail */}
                    <div 
                      className="w-full h-full bg-gradient-to-br from-blue-100 to-blue-200 dark:from-blue-900/20 dark:to-blue-800/20 flex items-center justify-center"
                      style={{ display: 'none' }}
                    >
                      <div className="text-center">
                        <Globe size={32} className="text-blue-600 dark:text-blue-400 mx-auto mb-2" />
                        <p className="text-sm text-blue-600 dark:text-blue-400 font-medium">{project.title}</p>
                      </div>
                    </div>
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    
                    {/* Category Badge */}
                    <div className="absolute top-4 left-4">
                      <div className="flex items-center space-x-2 bg-white/90 dark:bg-gray-800/90 backdrop-blur-sm px-3 py-1 rounded-full">
                        <CategoryIcon size={16} className="text-blue-600" />
                        <span className="text-xs font-medium text-gray-700 dark:text-gray-300 capitalize">
                          {project.type.replace('-', ' ')}
                        </span>
                      </div>
                    </div>

                    {/* Action Buttons */}
                    <div className="absolute top-4 right-4 flex space-x-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      {project.github && (
                        <motion.a
                          href={project.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="w-8 h-8 bg-white/90 dark:bg-gray-800/90 rounded-full flex items-center justify-center hover:bg-white transition-colors duration-200"
                          whileHover={{ scale: 1.1 }}
                          whileTap={{ scale: 0.9 }}
                          title="View Code"
                        >
                          <Github size={16} className="text-gray-700 dark:text-gray-300" />
                        </motion.a>
                      )}
                      {project.live && project.live !== '#' && (
                        <motion.a
                          href={project.live}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="w-8 h-8 bg-white/90 dark:bg-gray-800/90 rounded-full flex items-center justify-center hover:bg-white transition-colors duration-200"
                          whileHover={{ scale: 1.1 }}
                          whileTap={{ scale: 0.9 }}
                          title="Web App"
                        >
                          <Globe size={16} className="text-gray-700 dark:text-gray-300" />
                        </motion.a>
                      )}
                      {project.hasMobileApp && project.mobileAppUrl && (
                        <motion.a
                          href={project.mobileAppUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="w-8 h-8 bg-white/90 dark:bg-gray-800/90 rounded-full flex items-center justify-center hover:bg-white transition-colors duration-200"
                          whileHover={{ scale: 1.1 }}
                          whileTap={{ scale: 0.9 }}
                          title="Download Mobile App"
                        >
                          <Smartphone size={16} className="text-gray-700 dark:text-gray-300" />
                        </motion.a>
                      )}
                    </div>
                  </div>

                  {/* Project Content */}
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-300">
                      {project.title}
                    </h3>
                    
                    <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed mb-4">
                      {project.description}
                    </p>

                    {/* Technologies */}
                    <div className="mb-4">
                      <div className="flex flex-wrap gap-2">
                        {project.technologies.map((tech, techIndex) => (
                          <span
                            key={techIndex}
                            className="px-3 py-1 bg-blue-100 dark:bg-blue-900/20 text-blue-600 dark:text-blue-400 text-xs font-medium rounded-full"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Project Links */}
                    <div className="flex space-x-3 mt-6 pt-4 border-t border-gray-200 dark:border-gray-600">
                      {project.github && (
                        <motion.a
                          href={project.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center space-x-2 text-sm font-medium text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-300"
                          whileHover={{ x: 2 }}
                        >
                          <Github size={16} />
                          <span>Code</span>
                        </motion.a>
                      )}
                      {project.live && project.live !== '#' && (
                        <motion.a
                          href={project.live}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center space-x-2 text-sm font-medium text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-300"
                          whileHover={{ x: 2 }}
                        >
                          <Globe size={16} />
                          <span>Web App</span>
                        </motion.a>
                      )}
                      {project.hasMobileApp && project.mobileAppUrl && (
                        <motion.a
                          href={project.mobileAppUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center space-x-2 text-sm font-medium text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-300"
                          whileHover={{ x: 2 }}
                        >
                          <Smartphone size={16} />
                          <span>Mobile App</span>
                        </motion.a>
                      )}
                    </div>
                  </div>
                </motion.div>
              )
            })}
          </motion.div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-white dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
              Get In <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Touch</span>
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              Let's collaborate on exciting projects or discuss opportunities in tech and innovation
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Info */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="space-y-8"
            >
              <div>
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">Let's Connect</h3>
                <div className="space-y-4">
                  {[
                    { icon: Mail, title: 'Email', value: 's.shanmukhasaireddy13@gmail.com', href: 'mailto:s.shanmukhasaireddy13@gmail.com' },
                    { icon: Phone, title: 'Phone', value: '+91 7207174919', href: 'tel:+917207174919' },
                    { icon: MapPin, title: 'Location', value: 'Chennai, India', href: null },
                  ].map((item, index) => {
                    const Icon = item.icon
                    return (
                      <div key={index} className="flex items-center space-x-4 p-4 bg-gray-50 dark:bg-gray-800 rounded-lg">
                        <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900/20 rounded-lg flex items-center justify-center">
                          <Icon size={20} className="text-blue-600 dark:text-blue-400" />
                        </div>
                        <div>
                          <h4 className="font-medium text-gray-900 dark:text-white">{item.title}</h4>
                          {item.href ? (
                            <a href={item.href} className="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
                              {item.value}
                            </a>
                          ) : (
                            <p className="text-gray-600 dark:text-gray-400">{item.value}</p>
                          )}
                        </div>
                      </div>
                    )
                  })}
                </div>
              </div>

              <div>
                <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">Social Links</h4>
                <div className="flex space-x-4">
                  {[
                    { href: "https://github.com/shanmukhasaireddy13", icon: Github, name: "GitHub" },
                    { href: "https://www.linkedin.com/in/s-shanmukha-sai-reddy-9b9818282/", icon: Linkedin, name: "LinkedIn" },
                    { href: "https://leetcode.com/u/shanmukha_sai_reddy/", icon: Code, name: "LeetCode" },
                  ].map((social, index) => {
                    const Icon = social.icon
                    return (
                      <motion.a
                        key={index}
                        href={social.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-12 h-12 bg-gray-100 dark:bg-gray-800 rounded-lg flex items-center justify-center text-gray-600 dark:text-gray-400 hover:bg-blue-100 dark:hover:bg-blue-900/20 hover:text-blue-600 dark:hover:text-blue-400 transition-all duration-300"
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        <Icon size={20} />
                      </motion.a>
                    )
                  })}
                </div>
              </div>
            </motion.div>

            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    disabled={isSubmitting}
                    className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white dark:bg-gray-800 text-gray-900 dark:text-white disabled:opacity-50 disabled:cursor-not-allowed"
                    placeholder="Your Name"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    disabled={isSubmitting}
                    className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white dark:bg-gray-800 text-gray-900 dark:text-white disabled:opacity-50 disabled:cursor-not-allowed"
                    placeholder="your.email@example.com"
                  />
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                    disabled={isSubmitting}
                    rows={6}
                    className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white dark:bg-gray-800 text-gray-900 dark:text-white resize-none disabled:opacity-50 disabled:cursor-not-allowed"
                    placeholder="Your message..."
                  ></textarea>
                </div>

                {/* Status Messages */}
                {submitStatus === 'success' && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="p-4 bg-green-100 dark:bg-green-900/20 border border-green-300 dark:border-green-700 rounded-lg"
                  >
                    <div className="flex items-center space-x-2">
                      <CheckCircle size={20} className="text-green-600 dark:text-green-400" />
                      <span className="text-green-800 dark:text-green-200 font-medium">
                        Message sent successfully! I'll get back to you soon.
                      </span>
                    </div>
                  </motion.div>
                )}

                {submitStatus === 'error' && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="p-4 bg-red-100 dark:bg-red-900/20 border border-red-300 dark:border-red-700 rounded-lg"
                  >
                    <div className="flex items-center space-x-2">
                      <div className="w-5 h-5 bg-red-600 dark:bg-red-400 rounded-full flex items-center justify-center">
                        <span className="text-white text-xs font-bold">!</span>
                      </div>
                      <span className="text-red-800 dark:text-red-200 font-medium">
                        Failed to send message. Please try again or contact me directly.
                      </span>
                    </div>
                  </motion.div>
                )}

                <motion.button
                  type="submit"
                  disabled={isSubmitting}
                  className={`w-full py-3 px-6 rounded-lg font-semibold shadow-lg transition-all duration-300 flex items-center justify-center space-x-2 ${
                    isSubmitting
                      ? 'bg-gray-400 dark:bg-gray-600 text-white cursor-not-allowed'
                      : 'bg-gradient-to-r from-blue-500 to-purple-600 text-white hover:shadow-xl'
                  }`}
                  whileHover={!isSubmitting ? { scale: 1.02 } : {}}
                  whileTap={!isSubmitting ? { scale: 0.98 } : {}}
                >
                  {isSubmitting ? (
                    <>
                      <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                      <span>Sending...</span>
                    </>
                  ) : (
                    <>
                      <Send size={18} />
                      <span>Send Message</span>
                    </>
                  )}
                </motion.button>
              </form>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Home
