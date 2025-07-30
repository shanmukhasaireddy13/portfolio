import React from 'react'
import { motion } from 'framer-motion'
import { Calendar, MapPin, GraduationCap, Award, Users, Code, Brain, Rocket } from 'lucide-react'

const About = () => {
  const experiences = [
    {
      title: "Full Stack Developer",
      company: "Freelance Projects",
      period: "2023 - Present",
      description: "Developing full-stack applications using React, Node.js, and modern web technologies. Specializing in AI-powered solutions and responsive web design."
    },
    {
      title: "Mobile App Developer",
      company: "Personal Projects",
      period: "2023 - Present",
      description: "Building cross-platform mobile applications using Flutter and Firebase. Creating intuitive user experiences with modern mobile development practices."
    },
    {
      title: "AI/ML Enthusiast",
      company: "Personal Projects",
      period: "2023 - Present",
      description: "Working on AI-powered applications including infrastructure monitoring systems and computer vision projects using TensorFlow.js and Google Gemini."
    }
  ]

  const education = [
    {
      degree: "Bachelor of Technology in Computer Science and Engineering",
      school: "Vellore Institute of Technology, Chennai",
      period: "Aug 2023 - May 2027",
      description: "CGPA: 9.01/10 - Secured S (A+) grades in Python Programming, Data Structures and Algorithms, Java Programming, and Web Programming."
    },
    {
      degree: "M.P.C (Mathematics, Physics, Chemistry)",
      school: "Sri Chaitanya Junior College, Hyderabad",
      period: "Jun 2021 - Apr 2023",
      description: "Score: 952/1000 - Strong foundation in mathematics and sciences."
    },
    {
      degree: "SSC Board",
      school: "Narayana Olympiad School, Proddatur",
      period: "Jul 2020 - May 2021",
      description: "GPA: 10/10 - Perfect academic record with excellent performance."
    }
  ]

  const stats = [
    { icon: Calendar, label: "Experience", value: "3+ Years", color: "text-blue-600" },
    { icon: Code, label: "Projects", value: "6+", color: "text-purple-600" },
    { icon: Brain, label: "Skills", value: "15+", color: "text-green-600" },
    { icon: Award, label: "Achievements", value: "5+", color: "text-yellow-600" }
  ]

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
            About <span className="text-primary-600 dark:text-primary-400">Me</span>
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            A passionate B.Tech Computer Science student with a strong foundation in full-stack development, mobile development, and AI technologies.
          </p>
        </motion.div>

        {/* Stats Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16"
        >
          {stats.map((stat, index) => {
            const Icon = stat.icon
            return (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white dark:bg-gray-800 rounded-2xl p-6 text-center shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <Icon className={`w-8 h-8 mx-auto mb-3 ${stat.color}`} />
                <div className="text-2xl font-bold text-gray-900 dark:text-white mb-1">
                  {stat.value}
                </div>
                <div className="text-sm text-gray-600 dark:text-gray-400">
                  {stat.label}
                </div>
              </motion.div>
            )
          })}
        </motion.div>

        {/* Main Content */}
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Left Column - Personal Info */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="bg-gradient-to-br from-blue-50 to-purple-50 dark:from-gray-800 dark:to-gray-800 rounded-2xl p-8 mb-8 hover:shadow-xl transition-all duration-300"
            >
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 flex items-center">
                <Users className="w-6 h-6 mr-3 text-primary-600" />
                Who I Am
              </h2>
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-6">
                I'm a dedicated Computer Science student at VIT Chennai with a passion for creating innovative 
                web applications and AI-powered solutions. My journey in technology started with a strong 
                foundation in programming fundamentals and has evolved into expertise in full-stack development.
              </p>
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-6">
                I specialize in React, Node.js, Flutter, and modern web technologies, with a particular interest in 
                AI and machine learning. My projects demonstrate my ability to build scalable applications 
                that solve real-world problems, from academic management systems to AI-powered infrastructure monitoring.
              </p>
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                I'm always excited to take on new challenges and collaborate with talented teams to build 
                innovative solutions that make a difference in people's lives.
              </p>
            </motion.div>

            {/* Personal Details */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-8 hover:shadow-xl transition-all duration-300"
            >
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-6 flex items-center">
                <MapPin className="w-5 h-5 mr-3 text-primary-600" />
                Personal Details
              </h3>
              <div className="space-y-4">
                <div className="flex items-center">
                  <span className="text-primary-600 dark:text-primary-400 font-semibold w-24">Name:</span>
                  <span className="text-gray-700 dark:text-gray-300">S Shanmukha Sai Reddy</span>
                </div>
                <div className="flex items-center">
                  <span className="text-primary-600 dark:text-primary-400 font-semibold w-24">Email:</span>
                  <span className="text-gray-700 dark:text-gray-300">s.shanmukhasaireddy13@gmail.com</span>
                </div>
                <div className="flex items-center">
                  <span className="text-primary-600 dark:text-primary-400 font-semibold w-24">Phone:</span>
                  <span className="text-gray-700 dark:text-gray-300">+91 7207174919</span>
                </div>
                <div className="flex items-center">
                  <span className="text-primary-600 dark:text-primary-400 font-semibold w-24">Location:</span>
                  <span className="text-gray-700 dark:text-gray-300">Chennai, India</span>
                </div>
                <div className="flex items-center">
                  <span className="text-primary-600 dark:text-primary-400 font-semibold w-24">Languages:</span>
                  <span className="text-gray-700 dark:text-gray-300">Telugu (Native), English (Fluent), Hindi (Intermediate), French (Basic)</span>
                </div>
                <div className="flex items-center">
                  <span className="text-primary-600 dark:text-primary-400 font-semibold w-24">CGPA:</span>
                  <span className="text-gray-700 dark:text-gray-300">9.01/10</span>
                </div>
              </div>
            </motion.div>
          </motion.div>

          {/* Right Column - Experience & Education */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            {/* Experience */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-8 hover:shadow-xl transition-all duration-300"
            >
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 flex items-center">
                <Rocket className="w-6 h-6 mr-3 text-primary-600" />
                Experience
              </h3>
              <div className="space-y-6">
                {experiences.map((exp, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.2 }}
                    className="border-l-4 border-primary-600 pl-6 hover:border-primary-500 transition-colors duration-300"
                  >
                    <div className="flex justify-between items-start mb-2">
                      <h4 className="text-lg font-semibold text-gray-900 dark:text-white">{exp.title}</h4>
                      <span className="text-sm text-gray-500 dark:text-gray-400 bg-gray-100 dark:bg-gray-700 px-3 py-1 rounded-full">
                        {exp.period}
                      </span>
                    </div>
                    <p className="text-primary-600 dark:text-primary-400 font-medium mb-2">{exp.company}</p>
                    <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed">{exp.description}</p>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Education */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-8 hover:shadow-xl transition-all duration-300"
            >
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 flex items-center">
                <GraduationCap className="w-6 h-6 mr-3 text-primary-600" />
                Education
              </h3>
              <div className="space-y-6">
                {education.map((edu, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.2 }}
                    className="border-l-4 border-primary-600 pl-6 hover:border-primary-500 transition-colors duration-300"
                  >
                    <div className="flex justify-between items-start mb-2">
                      <h4 className="text-lg font-semibold text-gray-900 dark:text-white">{edu.degree}</h4>
                      <span className="text-sm text-gray-500 dark:text-gray-400 bg-gray-100 dark:bg-gray-700 px-3 py-1 rounded-full">
                        {edu.period}
                      </span>
                    </div>
                    <p className="text-primary-600 dark:text-primary-400 font-medium mb-2">{edu.school}</p>
                    <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed">{edu.description}</p>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </motion.div>
        </div>
        
        {/* Skills Preview */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mt-16 text-center"
        >
          <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-8">What I Do Best</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { title: 'Full Stack Development', icon: '⚛️', desc: 'React, Node.js, MongoDB' },
              { title: 'Mobile Development', icon: '📱', desc: 'Flutter, Firebase' },
              { title: 'AI & Machine Learning', icon: '🤖', desc: 'TensorFlow.js, Computer Vision' },
              { title: 'Problem Solving', icon: '🧩', desc: 'DSA, LeetCode' }
            ].map((skill, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white dark:bg-gray-800 rounded-xl shadow-md p-6 hover:shadow-xl transition-all duration-300 group"
              >
                <div className="w-12 h-12 bg-primary-100 dark:bg-primary-900/20 rounded-lg flex items-center justify-center mx-auto mb-4 group-hover:bg-primary-200 dark:group-hover:bg-primary-900/30 transition-colors duration-300">
                  <span className="text-primary-600 text-xl group-hover:scale-110 transition-transform duration-300">{skill.icon}</span>
                </div>
                <h4 className="font-semibold text-gray-900 dark:text-white mb-2">{skill.title}</h4>
                <p className="text-sm text-gray-600 dark:text-gray-300">{skill.desc}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  )
}

export default About
