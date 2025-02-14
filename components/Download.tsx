"use client"

import { motion } from "framer-motion"
import { FileDown } from "lucide-react"
import { Playfair_Display } from "next/font/google"

const playfair = Playfair_Display({ subsets: ["latin"] })

export default function Download(): JSX.Element {
  return (
    <div className="space-y-12 flex flex-col items-center">
      <div className="w-full max-w-md">
        <motion.button
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          onClick={() => window.open('/DanieleZamboni_CV.pdf', '_blank')}
          className="w-full bg-white hover:bg-gray-50 text-gray-800 font-semibold py-4 px-8 rounded-full shadow-md hover:shadow-lg transition-all duration-300 ease-in-out flex justify-between items-center"
        >
          <span className={`${playfair.className} text-xl`}>Download CV</span>
          <FileDown className="h-6 w-6" />
        </motion.button>
      </div>
    </div>
  )
} 