"use client"

import { Playfair_Display, Lato } from "next/font/google"
import Roadmap from "../components/Roadmap"
import Navbar from "@/components/Navbar"
import Download from "@/components/Download"
import Footer from "@/components/Footer"
import Image from "next/image"
import { motion } from "framer-motion"
import Skills from "@/components/Skills"

const playfair = Playfair_Display({ subsets: ["latin"] })
const lato = Lato({ subsets: ["latin"], weight: ["400", "700"] })

export default function Home() {
  return (
    <>
      <Navbar />
      <main className={`min-h-screen flex flex-col justify-center bg-[#f5f5ee] ${lato.className}`}>
        {/* Prima sezione: Intro */}
        <section className="flex items-center justify-center py-24">
          <div className="flex flex-col md:flex-row items-center gap-16 px-8 max-w-4xl">
            <motion.div 
              className="flex-shrink-0"
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ 
                duration: 0.5,
                ease: "easeOut"
              }}
              whileHover={{ scale: 1.05 }}
            >
              <Image
                src="/profile.jpg"
                alt="Daniele Zamboni"
                width={300}
                height={300}
                className="rounded-full shadow-lg"
                priority
              />
            </motion.div>
            <div className="flex-1">
              <h1 className={`mb-8 text-center md:text-left ${playfair.className}`}>
                <span className="text-7xl font-bold">Hi</span>
                <span className="text-5xl">, I'm Daniele</span>
              </h1>
              <p className="text-xl text-center md:text-left">
                I bridge business and technology to drive growth, optimize solutions, and deliver lasting value.
              </p>
            </div>
          </div>
        </section>

        {/* Sezione: Roadmap, Download e Skills */}
        <section className="flex items-center justify-center">
          <div className="space-y-16 w-full px-8">
            <Roadmap />
            <Download />
            <Skills />
          </div>
        </section>

        <Footer />
      </main>
    </>
  )
}

