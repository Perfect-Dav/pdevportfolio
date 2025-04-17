"use client"

import * as React from "react"
import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs"

const categories = ["All", "UI/UX", "Web Design", "App Design", "Graphic Design"] as const

const projects = [
  {
    category: "Web Design",
    imageSrc: "/assets/images/projects/aircalling.png",
    title: "AirCalling Landing Page Design",
    subtitle: "Web Design",
  },
  {
    category: "Web Design",
    imageSrc: "/assets/images/projects/business.png",
    title: "Business Landing Page Design",
    subtitle: "Web Design",
  },
  {
    category: "Web Design",
    imageSrc: "/assets/images/projects/ecom.png",
    title: "Ecom Web Page Design",
    subtitle: "Web Design",
  }
] as const

export function Projects() {
    return (
      <section className="max-w-7xl mx-auto px-6 py-16">
        <div className="text-center mb-8 space-y-2">
          <h2 className="text-4xl font-bold">My Projects</h2>
          <p className="text-base pt-2 font-light text-gray-600">
          Lorem ipsum dolor sit amet consectetur. Mollis erat duis aliquam mauris est risus lectus. <br /> Phasellus consequat urna tellus
          </p>
        </div>
  
        <Tabs defaultValue="Web Design">
          <TabsList className="inline-flex mx-auto mb-8 space-x-4 bg-transparent p-0">
            {categories.map((cat) => (
              <TabsTrigger
                key={cat}
                value={cat}
                className="
                  flex-initial
                  px-4 py-2
                  rounded-lg
                  border border-gray-200
                  bg-white text-gray-800
                  hover:bg-gray-50
                  data-[state=active]:bg-orange-500
                  data-[state=active]:text-white
                  data-[state=active]:border-transparent
                  transition
                "
              >
                {cat}
              </TabsTrigger>
            ))}
          </TabsList>
  
          {categories.map((cat) => (
            <TabsContent key={cat} value={cat} className="!p-0">
              <div className="flex justify-center space-x-6 overflow-x-auto pb-4">
                {(cat === "All" ? projects : projects.filter((p) => p.category === cat))
                  .map((proj, idx) => (
                    <Card key={idx} className="min-w-[300px] flex-shrink-0 rounded-xl border-none shadow-none">
                      <div className="relative w-full h-64">
                        <Image
                          src={proj.imageSrc}
                          alt={proj.title}
                          fill
                          className="object-cover rounded-t-xl"
                        />
                      </div>
                      <CardContent className="p-4">
                        <p className="text-sm text-orange-500 font-light">
                          {proj.subtitle}
                        </p>
                        <h3 className="mt-1 text-lg font-semibold">
                          {proj.title}
                        </h3>
                      </CardContent>
                    </Card>
                  ))}
              </div>
            </TabsContent>
          ))}
        </Tabs>
      </section>
    )
  }