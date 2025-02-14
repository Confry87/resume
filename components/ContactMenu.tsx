"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Mail, Phone, Linkedin, Github, Contact } from "lucide-react"

export default function ContactMenu(): JSX.Element {
  const [isOpen, setIsOpen] = useState(false)

  const contacts = [
    {
      icon: <Mail className="w-5 h-5" />,
      label: "Email",
      value: "daniele.zamboni87@gmail.com",
      href: "mailto:daniele.zamboni87@gmail.com",
    },
    {
      icon: <Phone className="w-5 h-5" />,
      label: "Phone",
      value: "+39 392 244 7651",
      href: "tel:+393922447651",
    },
    {
      icon: <Linkedin className="w-5 h-5" />,
      label: "LinkedIn",
      href: "https://linkedin.com/in/your-profile",
    },
    {
      icon: <Github className="w-5 h-5" />,
      label: "GitHub",
      href: "https://github.com/your-username",
    },
  ]

  return (
    <div className="relative">
      <motion.button
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center space-x-2 px-4 py-2 rounded-full bg-white/50 hover:bg-white/80 transition-colors"
      >
        <Contact className="w-6 h-6" />
        <span className="text-sm font-medium">Contact Me</span>
      </motion.button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute right-0 mt-2 w-72 rounded-xl bg-white shadow-lg ring-1 ring-black ring-opacity-5"
          >
            <div className="py-2">
              {contacts.map((contact, index) => (
                <motion.a
                  key={index}
                  href={contact.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ x: 5 }}
                  className="flex items-center space-x-3 px-4 py-3 hover:bg-gray-50 transition-colors"
                >
                  {contact.icon}
                  <div className="flex flex-col">
                    <span className="text-sm font-medium text-gray-900">{contact.label}</span>
                    {contact.value && (
                      <span className="text-sm text-gray-500">{contact.value}</span>
                    )}
                  </div>
                </motion.a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
} 