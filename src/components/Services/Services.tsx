"use client"

import * as React from "react"
import Image from "next/image"
import { Card, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"

import "./Services.css"

const services = [
  {
    title: "Custom Web Development",
    description: "Scalable, high-performing websites tailored to your business needs.",
    imageSrc: "/assets/images/web.svg",
    alt: "Custom Web Development",
  },
  {
    title: "UI/UX Design",
    description: "Intuitive, engaging user experiences aligned with your brand.",
    imageSrc: "/assets/images/uiux.svg",
    alt: "UI/UX Design",
  },
  {
    title: "E-commerce Solutions",
    description: "Complete storefront and payment system integration.",
    imageSrc: "/assets/images/app.svg",
    alt: "E-commerce Solutions",
  },
  {
    title: "Website Maintenance",
    description: "Ongoing updates, backups, and performance monitoring.",
    imageSrc: "/assets/images/graphic.svg",
    alt: "Website Maintenance",
  },
] as const

export function Services() {
  return (
    <section id="services" className="max-w-7xl mx-auto px-6 py-16">
      <div className="text-center mb-12">
        <h2 className="text-4xl font-bold text-white">Services</h2>
        <p className="mt-4 text-base text-white max-w-2xl mx-auto">
          Discover what we offer to take your brand to the next level in the digital space.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {services.map(({ title, description, imageSrc, alt }) => (
          <Card key={title} className="bg-[#1f2639] text-white text-left rounded-2xl">
            <div className="flex justify-start">
              <Image
                src={imageSrc}
                alt={alt}
                width={47}
                height={47}
                className="object-contain card-img"
              />
            </div>

            <CardHeader className="pt-1">
              <CardTitle className="text-lg font-semibold text-white">{title}</CardTitle>
              <CardDescription className="mt-2 text-sm text-gray-300">
                {description}
              </CardDescription>
            </CardHeader>
          </Card>
        ))}
      </div>
    </section>
  )
}