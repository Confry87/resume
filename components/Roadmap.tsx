"use client"

import { useState, useEffect } from "react"
import { Playfair_Display } from "next/font/google"
import { ChevronDown, ChevronUp, Award } from "lucide-react"
import { motion } from "framer-motion"

const playfair = Playfair_Display({ subsets: ["latin"] })

interface ExperienceItemProps {
  title: string
  company: string
  period: string
  description?: string
  achievements?: string[]
}

export default function Roadmap(): JSX.Element {
  const [isOpen, setIsOpen] = useState(false)
  const [showAchievements, setShowAchievements] = useState(false)

  useEffect(() => {
    setShowAchievements(false)
    return () => {
      setShowAchievements(false)
    }
  }, [])

  return (
    <div className="space-y-12 flex flex-col items-center">
      <div className={`w-full transition-all duration-300 ${isOpen ? 'max-w-4xl' : 'max-w-md'}`}>
        <motion.button
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          onClick={() => setIsOpen(!isOpen)}
          className="w-full bg-white hover:bg-gray-50 text-gray-800 font-semibold py-4 px-8 rounded-full shadow-md hover:shadow-lg transition-all duration-300 ease-in-out flex justify-between items-center"
        >
          <span className={`${playfair.className} text-xl`}>My Experience Roadmap</span>
          {isOpen ? <ChevronUp className="h-6 w-6" /> : <ChevronDown className="h-6 w-6" />}
        </motion.button>

        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
            className="mt-6 bg-white p-8 border border-gray-200 rounded-2xl shadow-lg w-full"
          >
            <div className="space-y-8 relative">
              <div className="absolute left-4 top-0 h-full w-0.5 bg-gray-200" />
              <motion.div whileHover={{ x: 10 }} transition={{ duration: 0.2 }}>
                <ExperienceItem
                  title="Store Manager"
                  company="Gottardo Spa"
                  period="Jan 2016 - Present"
                  description="In my role at Gottardo SPA, I successfully led teams to deliver several high-impact projects on time and streamlined processes to improve efficiency. This experience has equipped me with several skills, including:"
                  achievements={[
                    "Team leading, with a focus on training and mentoring high-performing, cohesive and goal-oriented workforces",
                    "KPI Monitoring and Optimization, aimed at enhancing profitability and operational efficiency",
                    "Budget management and financial reporting, prioritizing costs reduction and ideal resource allocation strategies",
                    "Supply Chain Coordination and goods management flow, monitoring stock levels and ensuring optimal availability"
                  ]}
                />
              </motion.div>
              <motion.div whileHover={{ x: 10 }} transition={{ duration: 0.2 }}>
                <ExperienceItem
                  title="3rd-Party Cosmetic Product Manufacturing and Distribution"
                  company="Dandy Srl"
                  period="Mar 2008 - Dec 2015"
                  achievements={[
                    "Tailoring production processes to meet specific client requirements while adhering to the highest quality standards",
                    "Strategic Account Planning, developing and executing account strategies to drive customer lineup success, aligning with organizational objectives",
                    "Cross-Functional Collaboration across several internal teams including marketing, operations, and customer support"
                  ]}
                />
              </motion.div>
              <motion.div whileHover={{ x: 10 }} transition={{ duration: 0.2 }}>
                <ExperienceItem
                  title="Chemical and Biological Laboratory Technician"
                  company="Merck RBM"
                  period="Oct 2006 - Mar 2008"
                />
              </motion.div>
            </div>
          </motion.div>
        )}
      </div>

      <div className={`w-full transition-all duration-300 ${showAchievements ? 'max-w-4xl' : 'max-w-md'}`}>
        <motion.button
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          onClick={() => setShowAchievements(!showAchievements)}
          className="w-full bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white font-semibold py-4 px-8 rounded-full shadow-md hover:shadow-lg transition-all duration-300 ease-in-out flex justify-between items-center"
        >
          <div className="flex items-center space-x-3">
            <Award className="h-6 w-6" />
            <span className={`${playfair.className} text-xl`}>Notable Achievements</span>
          </div>
          {showAchievements ? <ChevronUp className="h-6 w-6" /> : <ChevronDown className="h-6 w-6" />}
        </motion.button>

        {showAchievements && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
            className="mt-6 bg-white p-8 border border-gray-200 rounded-2xl shadow-lg w-full"
          >
            <div className="space-y-6">
              <p className="text-gray-700 text-lg italic">
                Among my achievements, I want to highlight:
              </p>
              <ul className="space-y-6">
                <motion.li
                  whileHover={{ x: 10 }}
                  className="flex items-start space-x-4 text-gray-700"
                >
                  <span className="text-blue-500 text-2xl leading-none mt-1">•</span>
                  <span className="flex-1">
                    Successfully led a team of 15 employees, by implementing forward-thinking productivity management, optimizing resources allocation and labor cost reduction. Thanks to all those measures, I consistently managed to achieve 2-5% YoY budget savings.
                  </span>
                </motion.li>
                <motion.li
                  whileHover={{ x: 10 }}
                  className="flex items-start space-x-4 text-gray-700"
                >
                  <span className="text-blue-500 text-2xl leading-none mt-1">•</span>
                  <span className="flex-1">
                    Successfully improved the store's turnover classification in 2022 and 2023, by boosting annual sales by 20% through enhanced customer engagement, optimized inventory management, and team performance.
                  </span>
                </motion.li>
              </ul>
            </div>
          </motion.div>
        )}
      </div>
    </div>
  )
}

function ExperienceItem({ title, company, period, description, achievements = [] }: ExperienceItemProps): JSX.Element {
  return (
    <div className="relative pl-16">
      <div className="absolute left-0 top-1.5 w-8 h-8 bg-white border-2 border-gray-300 rounded-full flex items-center justify-center">
        <div className="w-3 h-3 bg-blue-500 rounded-full" />
      </div>
      <h3 className={`text-xl font-semibold ${playfair.className}`}>{title}</h3>
      <p className="text-gray-600">
        {company} | {period}
      </p>
      {description && <p className="mt-2 text-gray-700">{description}</p>}
      {achievements.length > 0 && (
        <ul className="list-disc list-inside mt-2">
          {achievements.map((achievement, index) => (
            <li key={index}>{achievement}</li>
          ))}
        </ul>
      )}
    </div>
  )
}

