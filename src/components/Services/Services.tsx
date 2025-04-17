"use client"

import * as React from "react"
import Image from "next/image"
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card"

import "./Services.css"

const services = [
  {
    title: "UI/UX",
    description:
      "Lorem ipsum dolor sit amet consectetur. Morbi diam nisi nam diam interdum.",
    imageSrc: "/assets/images/uiux.svg",
    alt: "UI/UX service",
  },
  {
    title: "Web Design",
    description:
      "Lorem ipsum dolor sit amet consectetur. Morbi diam nisi nam diam interdum.",
    imageSrc: "/assets/images/web.svg",
    alt: "Web Design service",
  },
  {
    title: "App Design",
    description:
      "Lorem ipsum dolor sit amet consectetur. Morbi diam nisi nam diam interdum.",
    imageSrc: "/assets/images/app.svg",
    alt: "App Design service",
  },
  {
    title: "Graphic Design",
    description:
      "Lorem ipsum dolor sit amet consectetur. Morbi diam nisi nam diam interdum.",
    imageSrc: "/assets/images/graphic.svg",
    alt: "Graphic Design service",
  },
] as const

export function Services() {
  return (
    <section className="max-w-7xl mx-auto px-6 py-16">
      <div className="text-center mb-12">
        <h2 className="text-4xl font-bold">Services</h2>
        <p className="mt-4 text-base text-gray-600 max-w-2xl mx-auto">
          Lorem ipsum dolor sit amet consectetur. Tristique amet sed massa nibh
          lectus netus in. Aliquet donec morbi convallis pretium.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {services.map(({ title, description, imageSrc, alt }) => (
          <Card key={title} className="bg-[#F8F8F8] text-left rounded-2xl">
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
              <CardTitle className="text-lg font-semibold">{title}</CardTitle>
              <CardDescription className="mt-2 text-sm text-gray-600">
                {description}
              </CardDescription>
            </CardHeader>
          </Card>
        ))}
      </div>
    </section>
  )
}
