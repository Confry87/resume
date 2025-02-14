"use client"

import Link from "next/link"
import ContactMenu from "./ContactMenu"

export default function Navbar(): JSX.Element {
  return (
    <div className="fixed top-0 left-0 right-0 z-50">
      <nav className="bg-[#f5f5ee]/80 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-24">
            <div className="flex-shrink-0 transition-transform hover:scale-105">
              <Link href="/">
                <img
                  src="/signature.png"
                  alt="Daniele Zamponi signature"
                  className="h-16 md:h-20"
                />
              </Link>
            </div>
            
            <ContactMenu />
          </div>
        </div>
      </nav>
      <div className="h-8 bg-gradient-to-b from-[#f5f5ee]/80 to-transparent" />
    </div>
  )
} 