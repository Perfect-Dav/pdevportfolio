"use client"

import * as React from "react"
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar"
import { Slider } from "@/components/ui/slider"

import "./About.css"

const skills = [
  { label: "UX", value: 80 },
  { label: "Website Design", value: 70 },
  { label: "App Design", value: 65 },
  { label: "Graphic Design", value: 90 },
] as const

export function AboutSection() {
  return (
    <section className="max-w-7xl mx-auto px-6 py-16 flex flex-col md:flex-row items-center gap-8">
      <div className="w-full md:w-1/2 flex justify-center md:justify-start">
        <Avatar className="w-100 h-100">
          <AvatarImage src="/assets/images/about-img.png" alt="Profile Image" />
          <AvatarFallback>AboutImage</AvatarFallback>
        </Avatar>
      </div>

      <div className="w-full md:w-1/2 space-y-6">
        <h2 className="text-3xl font-bold">About Me</h2>
        <p className="leading-relaxed text-gray-600">
          Lorem ipsum dolor sit amet consectetur. Tristique amet sed massa nibh
          lectus netus in. Aliquet donec morbi convallis pretium. Turpis tempus
          pharetra.
        </p>

        {skills.map(({ label, value }) => (
          <div key={label} className="space-y-2">
            <div className="flex items-center justify-between">
              <span className="font-medium">{label}</span>
            </div>

            <Slider
              defaultValue={[value]}
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