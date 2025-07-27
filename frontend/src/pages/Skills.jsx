import React, { useEffect, useRef, useState } from 'react'
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

const Skills = () => {
  const [animatedSkills, setAnimatedSkills] = useState({})
  const skillsRef = useRef(null)
  const softSkillsRef = useRef(null)
  const infoRef = useRef(null)

  useEffect(() => {
    const skillObserver = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const skillName = entry.target.dataset.skill
          setAnimatedSkills(prev => ({ ...prev, [skillName]: true }))
        }
      })
    }, { threshold: 0.5 })

    const skillElements = document.querySelectorAll('[data-skill]')
    skillElements.forEach(el => skillObserver.observe(el))

    return () => skillObserver.disconnect()
  }, [])

  const skillCategories = [
    {
      category: "Programming Languages",
      skills: [
        { name: "C", level: 85, icon: "🔵" },
        { name: "C++", level: 80, icon: "🔵" },
        { name: "Python", level: 90, icon: "🐍" },
        { name: "Java", level: 85, icon: "☕" },
        { name: "JavaScript", level: 90, icon: "🟨" },
        { name: "HTML/CSS", level: 95, icon: "🌐" }
      ]
    },
    {
      category: "Frameworks & Technologies",
      skills: [
        { name: "React", level: 90, icon: "⚛️" },
        { name: "Node.js", level: 85, icon: "🟢" },
        { name: "Express", level: 80, icon: "🚀" },
        { name: "Flutter", level: 75, icon: "📱" },
        { name: "Firebase", level: 80, icon: "🔥" },
        { name: "TensorFlow.js", level: 70, icon: "🤖" }
      ]
    },
    {
      category: "Databases & Tools",
      skills: [
        { name: "MongoDB", level: 85, icon: "🍃" },
        { name: "Tailwind CSS", level: 90, icon: "🎨" },
        { name: "Git", level: 85, icon: "📝" },
        { name: "VS Code", level: 95, icon: "💻" },
        { name: "Postman", level: 80, icon: "📮" },
        { name: "LeetCode", level: 75, icon: "🧩" }
      ]
    }
  ]

  const softSkills = [
    { name: "Problem Solving", level: 90 },
    { name: "Team Collaboration", level: 85 },
    { name: "Communication", level: 80 },
    { name: "Time Management", level: 85 },
    { name: "Adaptability", level: 90 },
    { name: "Leadership", level: 75 }
  ]

  return (
    <motion.div
      className="min-h-screen bg-gray-50 dark:bg-[#18181b] pt-20"
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.2 }}
      variants={containerVariants}
    >
      <motion.div variants={containerVariants} className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Header */}
        <motion.div variants={fadeUp} className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-gray-100 mb-6">
            My <span className="text-primary gradient-text">Skills</span>
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Here are the technologies and tools I work with to bring ideas to life.
          </p>
        </motion.div>

        {/* Technical Skills */}
        <motion.div ref={skillsRef} variants={fadeUp} className="space-y-12 mb-16">
          {skillCategories.map((category, categoryIndex) => (
            <motion.div key={categoryIndex} variants={fadeUp} className="bg-white dark:bg-[#23232e] rounded-2xl shadow-lg p-8 hover-lift">
              <h2 className="text-2xl font-bold text-gray-900 dark:text-gray-100 mb-8 flex items-center">
                <span className="mr-3">{category.category === "Programming Languages" ? "💻" : 
                  category.category === "Frameworks & Technologies" ? "⚙️" : "🛠️"}</span>
                {category.category}
              </h2>
              <div className="grid md:grid-cols-2 gap-8">
                {category.skills.map((skill, skillIndex) => (
                  <motion.div key={skillIndex} variants={fadeUp} className="space-y-3" data-skill={skill.name}>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-3">
                        <span className="text-2xl">{skill.icon}</span>
                        <span className="font-semibold text-gray-900 dark:text-gray-100">{skill.name}</span>
                      </div>
                      <span className="text-sm font-medium text-primary">{skill.level}%</span>
                    </div>
                    <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2 overflow-hidden">
                      <motion.div
                        className={`h-2 rounded-full transition-all duration-1000 ease-out ${
                          animatedSkills[skill.name] 
                            ? 'bg-gradient-to-r from-primary to-purple-600' 
                            : 'bg-gray-300 dark:bg-gray-800'
                        }`}
                        style={{ 
                          width: animatedSkills[skill.name] ? `${skill.level}%` : '0%',
                          transitionDelay: `${skillIndex * 100}ms`
                        }}
                        animate={{ width: animatedSkills[skill.name] ? `${skill.level}%` : '0%' }}
                        transition={{ type: 'spring', stiffness: 60, damping: 18 }}
                      ></motion.div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Soft Skills */}
        <motion.div ref={softSkillsRef} variants={fadeUp} className="bg-white dark:bg-[#23232e] rounded-2xl shadow-lg p-8 mb-16 hover-lift">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-gray-100 mb-8 flex items-center">
            <span className="mr-3">🤝</span>
            Soft Skills
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            {softSkills.map((skill, index) => (
              <motion.div key={index} variants={fadeUp} className="space-y-3" data-skill={skill.name}>
                <div className="flex items-center justify-between">
                  <span className="font-semibold text-gray-900 dark:text-gray-100">{skill.name}</span>
                  <span className="text-sm font-medium text-primary">{skill.level}%</span>
                </div>
                <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2 overflow-hidden">
                  <motion.div
                    className={`h-2 rounded-full transition-all duration-1000 ease-out ${
                      animatedSkills[skill.name] 
                        ? 'bg-gradient-to-r from-green-500 to-blue-500' 
                        : 'bg-gray-300 dark:bg-gray-800'
                    }`}
                    style={{ 
                      width: animatedSkills[skill.name] ? `${skill.level}%` : '0%',
                      transitionDelay: `${index * 100}ms`
                    }}
                    animate={{ width: animatedSkills[skill.name] ? `${skill.level}%` : '0%' }}
                    transition={{ type: 'spring', stiffness: 60, damping: 18 }}
                  ></motion.div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Additional Info */}
        <motion.div ref={infoRef} variants={fadeUp} className="grid md:grid-cols-3 gap-8">
          <motion.div variants={fadeUp} className="bg-gradient-to-br from-blue-50 to-blue-100 dark:from-[#23232e] dark:to-[#23232e] rounded-2xl p-8 text-center hover-lift">
            <div className="w-16 h-16 bg-blue-500 rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-white text-2xl">📚</span>
            </div>
            <h3 className="text-xl font-bold text-gray-900 dark:text-gray-100 mb-2">Academic Excellence</h3>
            <p className="text-gray-600 dark:text-gray-300">
              CGPA: 9.01/10 with S (A+) grades in Python, DSA, Java, and Web Programming.
            </p>
          </motion.div>

          <motion.div variants={fadeUp} className="bg-gradient-to-br from-purple-50 to-purple-100 dark:from-[#23232e] dark:to-[#23232e] rounded-2xl p-8 text-center hover-lift">
            <div className="w-16 h-16 bg-purple-500 rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-white text-2xl">🎯</span>
            </div>
            <h3 className="text-xl font-bold text-gray-900 dark:text-gray-100 mb-2">Problem Solver</h3>
            <p className="text-gray-600 dark:text-gray-300">
              Active on LeetCode with strong problem-solving skills and algorithmic thinking.
            </p>
          </motion.div>

          <motion.div variants={fadeUp} className="bg-gradient-to-br from-green-50 to-green-100 dark:from-[#23232e] dark:to-[#23232e] rounded-2xl p-8 text-center hover-lift">
            <div className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-white text-2xl">🚀</span>
            </div>
            <h3 className="text-xl font-bold text-gray-900 dark:text-gray-100 mb-2">AI Enthusiast</h3>
            <p className="text-gray-600 dark:text-gray-300">
              Working on AI-powered projects with TensorFlow.js and computer vision applications.
            </p>
          </motion.div>
        </motion.div>
      </motion.div>
    </motion.div>
  )
}

export default Skills 