"use client"

import { useEffect, useRef, useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Target, Phone, HandshakeIcon, TrendingUp } from "lucide-react"

export function IntroSection() {
  const [isVisible, setIsVisible] = useState(false)
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.1 },
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => observer.disconnect()
  }, [])

  const stats = [
    { icon: Target, label: "Lead Qualification", value: "87%", color: "text-primary" },
    { icon: Phone, label: "Call-to-Meeting Rate", value: "34%", color: "text-secondary" },
    { icon: HandshakeIcon, label: "Deal Closure", value: "€2.5M", color: "text-accent" },
    { icon: TrendingUp, label: "Sales Cycle", value: "4 mesi", color: "text-chart-4" },
  ]

  return (
    <section ref={sectionRef} className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className={`transition-all duration-1000 ${isVisible ? "animate-slide-up" : "opacity-0"}`}>
          {/* Header */}
          <div className="text-center mb-16">
            <Badge variant="secondary" className="mb-6 px-6 py-3 text-lg rounded-full">
              SFIDA SALES ACCOUNT EXECUTIVE
            </Badge>
            {/* Title removed as requested */}
          </div>

          {/* Stats Grid removed as requested */}

          {/* Mission Statement removed - moved to dedicated BDR roadmap section */}
        </div>
      </div>
    </section>
  )
}
