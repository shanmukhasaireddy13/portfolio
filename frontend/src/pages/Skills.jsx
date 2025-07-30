import React, { useEffect, useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { Code, Zap, Database, Brain, Globe, Cpu, Smartphone, Palette, Award, Target, Users, Lightbulb } from 'lucide-react'

const Skills = () => {
  const skillCategories = [
    {
      category: "Programming Languages",
      icon: Code,
      bgColor: "bg-blue-100 dark:bg-blue-900/20",
      color: "text-blue-600 dark:text-blue-400",
      skills: [
        { name: "C", percentage: 85 },
        { name: "C++", percentage: 80 },
        { name: "Python", percentage: 90 },
        { name: "Java", percentage: 75 },
        { name: "JavaScript", percentage: 85 },
        { name: "HTML", percentage: 95 },
        { name: "CSS", percentage: 90 }
      ]
    },
    {
      category: "Frameworks & Technologies",
      icon: Zap,
      bgColor: "bg-purple-100 dark:bg-purple-900/20",
      color: "text-purple-600 dark:text-purple-400",
      skills: [
        { name: "React", percentage: 90 },
        { name: "Node.js", percentage: 85 },
        { name: "Express", percentage: 80 },
        { name: "Flutter", percentage: 85 },
        { name: "Firebase", percentage: 80 },
        { name: "TensorFlow.js", percentage: 75 },
        { name: "MongoDB", percentage: 80 },
        { name: "Tailwind CSS", percentage: 90 }
      ]
    },
    {
      category: "Tools & Platforms",
      icon: Database,
      bgColor: "bg-green-100 dark:bg-green-900/20",
      color: "text-green-600 dark:text-green-400",
      skills: [
        { name: "Git & GitHub", percentage: 85 },
        { name: "VS Code", percentage: 95 },
        { name: "Postman", percentage: 80 },
        { name: "Figma", percentage: 70 },
        { name: "Adobe XD", percentage: 65 },
        { name: "Jira", percentage: 75 },
        { name: "Docker", percentage: 60 },
        { name: "AWS", percentage: 65 }
      ]
    }
  ]

  const softSkills = [
    { name: "Problem Solving", icon: Brain, percentage: 90 },
    { name: "Team Collaboration", icon: Users, percentage: 85 },
    { name: "Communication", icon: Globe, percentage: 80 },
    { name: "Critical Thinking", icon: Cpu, percentage: 85 },
    { name: "Adaptability", icon: Smartphone, percentage: 90 },
    { name: "Creativity", icon: Palette, percentage: 75 }
  ]

  const achievements = [
    {
      title: "IBM Generative AI Explorer Certificate",
      year: "2025",
      icon: Award,
      gradient: "from-blue-500 to-purple-600",
      description: "Certified in Generative AI technologies and applications"
    },
    {
      title: "S (A+) Grades",
      year: "2023-2024",
      icon: Target,
      gradient: "from-green-500 to-emerald-600",
      description: "Python Programming, DSA, Java Programming, Web Programming"
    },
    {
      title: "Academic Excellence",
      year: "2023-2024",
      icon: Lightbulb,
      gradient: "from-yellow-500 to-orange-600",
      description: "CGPA: 9.01/10 at VIT Chennai"
    },
    {
      title: "Perfect SSC Score",
      year: "2021",
      icon: Award,
      gradient: "from-purple-500 to-pink-600",
      description: "GPA: 10/10 in SSC Board Examination"
    }
  ]

  const additionalSkills = [
    "Puppeteer", "JWT Authentication", "bcrypt", "PDFKit", "Multer", 
    "Google Gemini API", "Computer Vision", "RESTful APIs", "GraphQL",
    "Redux", "Context API", "Hooks", "TypeScript", "Next.js", "Vue.js",
    "Angular", "Django", "Flask", "PostgreSQL", "MySQL", "Redis",
    "WebRTC", "Socket.io", "Jest", "Cypress", "Webpack", "Vite",
    "NPM", "Yarn", "ESLint", "Prettier", "Husky", "CI/CD"
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
            My <span className="text-primary-600 dark:text-primary-400">Skills</span>
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            A comprehensive overview of my technical expertise, soft skills, and achievements in the field of computer science and software development.
          </p>
        </motion.div>

        {/* Technical Skills */}
        <div className="grid lg:grid-cols-3 gap-8 mb-16">
          {skillCategories.map((category, categoryIndex) => {
            const Icon = category.icon
            return (
              <motion.div
                key={categoryIndex}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: categoryIndex * 0.2 }}
                className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-8 hover:shadow-xl transition-all duration-300"
              >
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-8 flex items-center">
                  <div className={`w-10 h-10 ${category.bgColor} rounded-lg flex items-center justify-center mr-4`}>
                    <Icon className={`w-6 h-6 ${category.color}`} />
                  </div>
                  {category.category}
                </h2>
                <div className="space-y-6">
                  {category.skills.map((skill, skillIndex) => (
                    <motion.div
                      key={skillIndex}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.6, delay: skillIndex * 0.1 }}
                    >
                      <div className="flex justify-between items-center mb-2">
                        <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
                          {skill.name}
                        </span>
                        <span className="text-sm font-semibold text-primary-600 dark:text-primary-400">
                          {skill.percentage}%
                        </span>
                      </div>
                      <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2 overflow-hidden">
                        <motion.div
                          className="h-2 rounded-full bg-gradient-to-r from-primary-600 to-secondary-600"
                          initial={{ width: 0 }}
                          whileInView={{ width: `${skill.percentage}%` }}
                          transition={{ duration: 1, delay: skillIndex * 0.1, ease: "easeOut" }}
                        />
                      </div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            )
          })}
        </div>

        {/* Soft Skills */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-16"
        >
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white text-center mb-12">
            Soft <span className="text-primary-600 dark:text-primary-400">Skills</span>
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {softSkills.map((skill, index) => {
              const Icon = skill.icon
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6 hover:shadow-xl transition-all duration-300 group"
                >
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 bg-primary-100 dark:bg-primary-900/20 rounded-lg flex items-center justify-center mr-4 group-hover:bg-primary-200 dark:group-hover:bg-primary-900/30 transition-colors duration-300">
                      <Icon className="w-6 h-6 text-primary-600 dark:text-primary-400" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900 dark:text-white">{skill.name}</h3>
                      <div className="flex items-center space-x-2">
                        <div className="flex-1 bg-gray-200 dark:bg-gray-700 rounded-full h-2 overflow-hidden">
                          <motion.div
                            className="h-2 rounded-full bg-gradient-to-r from-green-500 to-emerald-600"
                            initial={{ width: 0 }}
                            whileInView={{ width: `${skill.percentage}%` }}
                            transition={{ duration: 1, delay: index * 0.1, ease: "easeOut" }}
                          />
                        </div>
                        <span className="text-sm font-semibold text-green-600 dark:text-green-400">
                          {skill.percentage}%
                        </span>
                      </div>
                    </div>
                  </div>
                </motion.div>
              )
            })}
          </div>
        </motion.div>

        {/* Achievements */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-16"
        >
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white text-center mb-12">
            <span className="text-primary-600 dark:text-primary-400">Achievements</span> & Certifications
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            {achievements.map((achievement, index) => {
              const Icon = achievement.icon
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-8 hover:shadow-xl transition-all duration-300 group"
                >
                  <div className="flex items-start space-x-4">
                    <div className={`w-16 h-16 bg-gradient-to-r ${achievement.gradient} rounded-xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300`}>
                      <Icon className="w-8 h-8 text-white" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                        {achievement.title}
                      </h3>
                      <p className="text-gray-600 dark:text-gray-300 mb-3">
                        {achievement.description}
                      </p>
                      <span className="inline-block bg-primary-100 dark:bg-primary-900/20 text-primary-600 dark:text-primary-400 px-3 py-1 rounded-full text-sm font-medium">
                        {achievement.year}
                      </span>
                    </div>
                  </div>
                </motion.div>
              )
            })}
          </div>
        </motion.div>

        {/* Additional Skills & Tools */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white text-center mb-12">
            Additional <span className="text-primary-600 dark:text-primary-400">Skills</span> & Tools
          </h2>
          <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-8">
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
              {additionalSkills.map((skill, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.4, delay: index * 0.05 }}
                  className="bg-gray-50 dark:bg-gray-700 rounded-lg px-4 py-3 text-center hover:bg-primary-50 dark:hover:bg-primary-900/20 transition-colors duration-300 group"
                >
                  <span className="text-sm font-medium text-gray-700 dark:text-gray-300 group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors duration-300">
                    {skill}
                  </span>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  )
}

export default Skills 