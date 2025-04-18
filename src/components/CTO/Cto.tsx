"use client"

import React from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

export default function ContactSection() {
  return (
    <section className="max-w-7xl mx-auto px-6 py-16 text-center">
      <h2 className="text-4xl font-bold mb-4">Lets Design Together</h2>
      <p className="text-base text-gray-600 mb-8">
        Lorem ipsum dolor sit amet consectetur. Tristique amet sed massa nibh lectus<br/>
         netus in. Aliquet donec morbi convallis pretium
      </p>
      <div className="mt-10 flex flex-col sm:flex-row justify-center items-center gap-4">
        <Input
          type="email"
          placeholder="Enter Your Email"
          className="h-12 w-full sm:w-[450px] rounded-lg border border-gray-300 bg-gray-50 placeholder-gray-400 px-6"
        />
        <Button className="h-12 px-8 rounded-lg bg-orange-500 text-white hover:bg-orange-600">
          Contact Me
        </Button>
      </div>
    </section>
  )
}