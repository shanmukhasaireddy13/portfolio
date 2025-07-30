import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { ExternalLink, Github, Smartphone, Globe, Code, Database, Zap, Brain, Filter } from 'lucide-react'

const Projects = () => {
  const [activeFilter, setActiveFilter] = useState('all')

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
      github: "https://github.com/shanmukhasaireddy13/leave-it-for-me",
      live: "https://leave-it-for-me.vercel.app",
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
      live: "https://infravision.vercel.app",
      type: "web-app"
    },
    {
      id: 3,
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
      live: "https://campus-connect-app.web.app",
      type: "mobile-app"
    },
    {
      id: 4,
      title: "Todo List App",
      description: "A simple yet powerful todo list application with modern UI and local storage functionality.",
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
      live: "https://shanmukhasaireddy13.github.io/todo-list",
      type: "static-page"
    },
    {
      id: 5,
      title: "Weather App",
      description: "A weather application that provides real-time weather information with a beautiful and responsive interface.",
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
      live: "https://shanmukhasaireddy13.github.io/weather-app",
      type: "static-page"
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

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 pt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
            My <span className="text-primary-600 dark:text-primary-400">Projects</span>
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            A showcase of my work ranging from full-stack applications and AI-powered solutions to mobile apps and static websites.
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
                    ? 'bg-primary-600 text-white shadow-lg'
                    : 'bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700'
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
                className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 group"
              >
                {/* Project Image/Preview */}
                <div className="relative overflow-hidden h-48">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    onError={(e) => {
                      // If image fails to load, show a placeholder
                      e.target.style.display = 'none';
                      const placeholder = e.target.nextSibling;
                      if (placeholder) {
                        placeholder.style.display = 'flex';
                      }
                    }}
                  />
                  {/* Placeholder if image fails to load */}
                  <div 
                    className="w-full h-full bg-gradient-to-br from-primary-100 to-primary-200 dark:from-primary-900/20 dark:to-primary-800/20 flex items-center justify-center"
                    style={{ display: 'none' }}
                  >
                    <div className="text-center">
                      <Globe size={32} className="text-primary-600 dark:text-primary-400 mx-auto mb-2" />
                      <p className="text-sm text-primary-600 dark:text-primary-400 font-medium">{project.title}</p>
                    </div>
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  
                  {/* Category Badge */}
                  <div className="absolute top-4 left-4">
                    <div className="flex items-center space-x-2 bg-white/90 dark:bg-gray-800/90 backdrop-blur-sm px-3 py-1 rounded-full">
                      <CategoryIcon size={16} className="text-primary-600" />
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
                    {project.live && project.live !== "#" && (
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
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3 group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors duration-300">
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
                          className="px-3 py-1 bg-primary-100 dark:bg-primary-900/20 text-primary-600 dark:text-primary-400 text-xs font-medium rounded-full"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Features */}
                  <div className="space-y-2">
                    <h4 className="text-sm font-semibold text-gray-900 dark:text-white mb-2">Key Features:</h4>
                    <ul className="space-y-1">
                      {project.features.slice(0, 3).map((feature, featureIndex) => (
                        <li key={featureIndex} className="text-xs text-gray-600 dark:text-gray-400 flex items-start">
                          <span className="w-1.5 h-1.5 bg-primary-600 rounded-full mt-1.5 mr-2 flex-shrink-0" />
                          {feature}
                        </li>
                      ))}
                      {project.features.length > 3 && (
                        <li className="text-xs text-primary-600 dark:text-primary-400 font-medium">
                          +{project.features.length - 3} more features
                        </li>
                      )}
                    </ul>
                  </div>

                  {/* Project Links */}
                  <div className="flex space-x-3 mt-6 pt-4 border-t border-gray-200 dark:border-gray-700">
                    {project.github && (
                      <motion.a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center space-x-2 text-sm font-medium text-gray-700 dark:text-gray-300 hover:text-primary-600 dark:hover:text-primary-400 transition-colors duration-300"
                        whileHover={{ x: 2 }}
                      >
                        <Github size={16} />
                        <span>Code</span>
                      </motion.a>
                    )}
                    {project.live && project.live !== "#" && (
                      <motion.a
                        href={project.live}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center space-x-2 text-sm font-medium text-gray-700 dark:text-gray-300 hover:text-primary-600 dark:hover:text-primary-400 transition-colors duration-300"
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
                        className="flex items-center space-x-2 text-sm font-medium text-gray-700 dark:text-gray-300 hover:text-primary-600 dark:hover:text-primary-400 transition-colors duration-300"
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

        {/* Empty State */}
        {filteredProjects.length === 0 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center py-16"
          >
            <div className="text-gray-400 dark:text-gray-600 text-6xl mb-4">📁</div>
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
              No projects found
            </h3>
            <p className="text-gray-600 dark:text-gray-400">
              Try selecting a different filter to see more projects.
            </p>
          </motion.div>
        )}
      </div>
    </div>
  )
}

export default Projects 