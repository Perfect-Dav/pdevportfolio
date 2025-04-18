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

const testimonials = [
  {
    quote:
      "Lorem ipsum dolor sit amet consectetur. In enim cursus odio accumsan. Id leo urna velit neque mattis id tellus arcu condimentum.",
    name: "John Doe",
    role: "CEO",
    imageSrc: "/assets/images/testimonials/image1.png",
  },
  {
    quote:
      "Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco.",
    name: "Jane Smith",
    role: "CTO",
    imageSrc: "/assets/images/testimonials/image2.png",
  },
  {
    quote:
      "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
    name: "Alice Johnson",
    role: "Product Manager",
    imageSrc: "/assets/images/testimonials/image1.png",
  },
  {
    quote:
      "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
    name: "Alice Johnson",
    role: "Product Manager",
    imageSrc: "/assets/images/testimonials/image2.png",
  }
]

export default function TestimonialSection() {
  const autoplay = React.useRef(
    Autoplay({ delay: 4000, stopOnInteraction: false })
  )
  const [selected, setSelected] = React.useState(0)
  const emblaApiRef = React.useRef<any>(null)

  return (
    <section className="max-w-7xl mx-auto px-6 py-16">
      <div className="text-center mb-8">
        <h2 className="text-4xl font-bold">Testimonials</h2>
        <p className="mt-2 text-gray-600 font-light">Lorem ipsum dolor sit amet consectetur. Tristique amet sed massa nibh lectus <br/>
         netus in. Aliquet donec morbi convallis pretium</p>
      </div>

      <Carousel
        plugins={[autoplay.current]}
        opts={{ align: "center", loop: true }}
        onMouseEnter={autoplay.current.stop}
        onMouseLeave={autoplay.current.reset}
        setApi={(api) => {
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
                    <div className="flex items-center mb-[-20px]">
                      <div className="w-28 h-28 relative flex-shrink-0 mr-8">
                        <Image
                          src={t.imageSrc}
                          alt={t.name}
                          fill
                          className="rounded-full object-cover"
                        />
                      </div>
                      <div className="flex-1">
                        <p className="text-gray-700 font-light text-lg leading-relaxed">
                          <span className="text-4xl text-orange-500 align-top">“</span>
                          {t.quote}
                          <span className="text-4xl text-orange-500 align-top ml-1">”</span>
                        </p>
                      </div>
                    </div>
                    <div className="mt-1 ml-36 text-left">
                      <p className="font-semibold text-gray-900">{t.name}</p>
                      <p className="text-sm text-gray-500">{t.role}</p>
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
            className={`w-8 h-2 rounded-full transition ${
              i === selected ? "bg-orange-500" : "bg-gray-300"
            }`}
          />
        ))}
      </div>
    </section>
  )
}