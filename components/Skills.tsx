"use client"

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Users, TrendingUp, LineChart, Code } from 'lucide-react'
import Image from 'next/image'

interface Skill {
  id: number
  icon: JSX.Element
  name: string
  description: string
  color: string
  bgColor: string
  ringColor: string
  backgroundImage: string
}

export default function Skills(): JSX.Element {
  const [selectedSkill, setSelectedSkill] = useState<number | null>(null)

  const skills: Skill[] = [
    {
      id: 1,
      icon: <Users className="w-6 h-6" />,
      name: "Team Management",
      description: "Leading and mentoring high-performing teams to achieve business objectives",
      color: "text-blue-500",
      bgColor: "bg-blue-50",
      ringColor: "ring-blue-500",
      backgroundImage: "/team-management-bg.png"
    },
    {
      id: 2,
      icon: <TrendingUp className="w-6 h-6" />,
      name: "KPI Monitoring and Optimization",
      description: "Tracking and improving key performance indicators for business growth",
      color: "text-green-500",
      bgColor: "bg-green-50",
      ringColor: "ring-green-500",
      backgroundImage: "/kpi-monitoring-bg.png"
    },
    {
      id: 3,
      icon: <LineChart className="w-6 h-6" />,
      name: "Strategic Account Planning",
      description: "Developing and executing strategies for account success",
      color: "text-purple-500",
      bgColor: "bg-purple-50",
      ringColor: "ring-purple-500",
      backgroundImage: "/strategic-planning-bg.png"
    },
    {
      id: 4,
      icon: <Code className="w-6 h-6" />,
      name: "Frontend Development AI tools",
      description: "Leveraging AI tools for modern frontend development",
      color: "text-red-500",
      bgColor: "bg-red-50",
      ringColor: "ring-red-500",
      backgroundImage: "/frontend-dev-bg.png"
    }
  ]

  return (
    <div className="space-y-12 flex flex-col items-center relative">
      {/* Background Images */}
      <AnimatePresence>
        {selectedSkill && (
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 0.8, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            transition={{ duration: 0.5 }}
            className="fixed md:bottom-0 md:right-0 top-24 right-0 w-full md:w-1/2 h-1/3 md:h-1/2 pointer-events-none z-0"
          >
            <Image
              src={skills[selectedSkill - 1].backgroundImage}
              alt=""
              fill
              className="object-contain"
              priority
            />
          </motion.div>
        )}
      </AnimatePresence>

      {/* Skills Grid */}
      <div className="w-full max-w-md z-10">
        <div className="grid grid-cols-2 gap-4">
          {skills.map((skill) => (
            <motion.button
              key={skill.id}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              onClick={() => setSelectedSkill(selectedSkill === skill.id ? null : skill.id)}
              className={`flex flex-col items-center p-4 rounded-2xl transition-all duration-300 ${
                selectedSkill === skill.id
                  ? `${skill.bgColor} ring-2 ${skill.ringColor}`
                  : 'bg-white hover:bg-gray-50'
              } shadow-lg`}
            >
              <motion.div 
                className={`${skill.color} mb-2`}
                animate={{ 
                  rotate: selectedSkill === skill.id ? 360 : 0,
                  scale: selectedSkill === skill.id ? 1.2 : 1
                }}
                transition={{ duration: 0.5 }}
              >
                {skill.icon}
              </motion.div>
              <span className={`text-sm font-medium ${skill.color} text-center`}>
                {skill.name}
              </span>
              <AnimatePresence>
                {selectedSkill === skill.id && (
                  <motion.p
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.3 }}
                    className="text-xs text-gray-600 mt-2 text-center"
                  >
                    {skill.description}
                  </motion.p>
                )}
              </AnimatePresence>
            </motion.button>
          ))}
        </div>
      </div>
    </div>
  )
} 