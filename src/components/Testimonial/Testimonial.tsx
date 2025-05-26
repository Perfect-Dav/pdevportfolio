"use client"

import * as React from "react"
import Autoplay from "embla-carousel-autoplay"
import Image from "next/image"
import { Card } from "@/components/ui/card"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel"
import type { EmblaCarouselType } from 'embla-carousel'

const testimonials = [
  {
    quote:
      "Working with PdevTech was the best decision for our startup. Their team understood our vision and delivered a responsive website that brought real results.",
    name: "Sarah Ahmed",
    role: "Founder, LaunchSphere",
    imageSrc: "/assets/images/testimonials/image1.png",
  },
  {
    quote:
      "From design to launch, PdevTech was flawless. Their creativity and technical skills helped our e-commerce brand shine in a competitive market.",
    name: "Michael Ofori",
    role: "CEO, StyleCartel",
    imageSrc: "/assets/images/testimonials/image2.png",
  },
  {
    quote:
      "We needed a reliable web dev partner, and PdevTech came through. They built a user-friendly dashboard and offered continuous support throughout.",
    name: "Tosin Balogun",
    role: "Operations Lead, TaskPro",
    imageSrc: "/assets/images/testimonials/image1.png",
  },
  {
    quote:
      "The landing page PdevTech created for us was clean, fast, and effective. We saw a jump in conversion rates almost immediately.",
    name: "Linda Mba",
    role: "Marketing Director, NovaPay",
    imageSrc: "/assets/images/testimonials/image2.png",
  }
]

export default function TestimonialSection() {
  const autoplay = React.useRef(
    Autoplay({ delay: 4000, stopOnInteraction: false })
  )
  const [selected, setSelected] = React.useState(0)
  const emblaApiRef = React.useRef<EmblaCarouselType | undefined>(undefined)

  return (
    <section id="testimonials" className="max-w-7xl mx-auto px-6 py-16">
      <div className="text-center mb-8">
        <h2 className="text-4xl text-white font-bold">Testimonials</h2>
        <p className="mt-2 text-white font-light">
          Hear from our satisfied clients who’ve partnered with PdevTech to bring their digital visions to life.
          From startups to established brands, we deliver web solutions that make an impact.
        </p>
      </div>

      <Carousel
        plugins={[autoplay.current]}
        opts={{ align: "center", loop: true }}
        onMouseEnter={autoplay.current.stop}
        onMouseLeave={autoplay.current.reset}
        setApi={(api: EmblaCarouselType | undefined) => {
          if (!api) return
          emblaApiRef.current = api
          api.on("select", () => setSelected(api.selectedScrollSnap()))
        }}
        className="relative overflow-hidden"
      >
        <CarouselContent className="w-full">
          {testimonials.map((t, i) => {
            const isActive = i === selected
            return (
              <CarouselItem
                key={i}
                className={`
                  snap-center flex-shrink-0 w-full
                  transition-transform transition-opacity
                  ${isActive
                    ? "scale-100 opacity-100 z-10"
                    : "scale-90 opacity-20 z-0"}
                `}
              >
                <div className="w-full max-w-[800px] mx-auto">
                  <Card className="bg-gray-50 border-none shadow-none rounded-xl p-10">
                    <div className="flex flex-col md:flex-row items-start md:items-center">
                      <div className="w-28 h-28 relative flex-shrink-0 mb-4 md:mb-0 md:mr-8">
                        <Image
                          src={t.imageSrc}
                          alt={t.name}
                          fill
                          className="rounded-full object-cover"
                        />
                      </div>
                      <div className="flex-1 text-left space-y-4">
                        <p className="text-gray-700 font-light text-lg leading-relaxed">
                          <span className="text-4xl text-orange-500 align-top">“</span>
                          {t.quote}
                          <span className="text-4xl text-orange-500 align-top ml-1">”</span>
                        </p>
                        <div>
                          <p className="font-semibold text-gray-900">{t.name}</p>
                          <p className="text-sm text-gray-500">{t.role}</p>
                        </div>
                      </div>
                    </div>
                  </Card>
                </div>
              </CarouselItem>
            )
          })}
        </CarouselContent>
      </Carousel>

      <div className="flex justify-center mt-6 space-x-2">
        {testimonials.map((_, i) => (
          <button
            key={i}
            onClick={() => emblaApiRef.current?.scrollTo(i)}
            className={`w-8 h-2 rounded-full transition ${i === selected ? "bg-orange-500" : "bg-gray-300"
              }`}
          />
        ))}
      </div>
    </section>
  )
}