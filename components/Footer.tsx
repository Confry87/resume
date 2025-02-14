"use client"

import { motion } from "framer-motion"

export default function Footer(): JSX.Element {
  const currentYear = new Date().getFullYear()
  
  return (
    <motion.footer 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5, delay: 0.2 }}
      className="w-full py-6 mt-12 text-center text-gray-600 text-sm"
    >
      <p>© {currentYear} Daniele Zamboni. All rights reserved.</p>
    </motion.footer>
  )
} 