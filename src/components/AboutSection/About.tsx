"use client"

import * as React from "react"
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar"
import { Slider } from "@/components/ui/slider"

import "./About.css"

const skills = [
  { label: "Responsive Web Design", value: 100 },
  { label: "UI/UX Strategy", value: 85 },
  { label: "Custom Web Applications", value: 100 },
  { label: "SEO & Accessibility", value: 100 }
] as const

export function AboutSection() {
  const [progressValues, setProgressValues] = React.useState<number[]>(Array(skills.length).fill(0))

  React.useEffect(() => {
    const interval = setInterval(() => {
      setProgressValues(prev =>
        prev.map((val, i) => {
          const target = skills[i].value
          if (val < target) return val + 1
          return val
        })
      )
    }, 25)

    return () => clearInterval(interval)
  }, [])

  return (
    <section id="about" className="max-w-7xl mx-auto px-6 py-16 flex flex-col md:flex-row items-center gap-8">
      <div className="w-full md:w-1/2 flex justify-center md:justify-start">
        <Avatar className="w-100 h-100">
          <AvatarImage src="/assets/images/about-img.png" alt="Profile Image" />
          <AvatarFallback>AboutImage</AvatarFallback>
        </Avatar>
      </div>

      <div className="w-full md:w-1/2 space-y-6">
        <h2 className="text-3xl font-bold text-white">About Us</h2>
        <p className="leading-relaxed text-white">
          With a passion for design and precision engineering, our team delivers sleek, 
          high-performance websites that reflect your brand and captivate your audience. 
          Whether you’re launching a startup, scaling a business, or reimagining your online presence, 
          PdevTech brings your vision to life with clean code, bold creativity, and user-first thinking.
        </p>

        {skills.map(({ label }, index) => (
          <div key={label} className="space-y-2">
            <div className="flex items-center">
              <span className="font-medium text-white">{label}</span>
            </div>
            <Slider
              value={[progressValues[index]]}
              max={100}
              step={1}
              disabled
              className="about-slider w-full pointer-events-none"
            />
          </div>
        ))}
      </div>
    </section>
  )
}