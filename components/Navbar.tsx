"use client"

import Link from "next/link"
import ContactMenu from "./ContactMenu"

export default function Navbar(): JSX.Element {
  return (
    <div className="fixed top-0 left-0 right-0 z-50">
      <nav className="bg-background/80 backdrop-blur-sm border-b border-border/20">
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
            
            <div className="flex items-center gap-4">
              <Link 
                href="/case-study" 
                className="px-6 py-2 text-sm font-medium text-foreground hover:text-primary transition-all duration-200 rounded-lg hover:bg-primary/10 border border-transparent hover:border-primary/20"
              >
                Case Study
              </Link>
              <ContactMenu />
            </div>
          </div>
        </div>
      </nav>
      <div className="h-8 bg-gradient-to-b from-background/80 to-transparent" />
    </div>
  )
} 