"use client"

import React, { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

export default function ContactSection() {
  const [email, setEmail] = useState("")
  const [message, setMessage] = useState("")
  const [success, setSuccess] = useState(false)
  const [loading, setLoading] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)

    const res = await fetch("https://formsubmit.co/ajax/perfectadewale31@gmail.com", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify({
        email,
        message,
      }),
    })

    const data = await res.json()

    if (data.success === "true") {
      setSuccess(true)
      setEmail("")
      setMessage("")
    }

    setLoading(false)
  }

  return (
    <section id="contact" className="max-w-7xl mx-auto px-6 py-16 text-center">
      <h2 className="text-4xl text-white font-bold mb-4">Let's Work Together</h2>
      <p className="text-base text-white mb-8">
        Ready to bring your digital ideas to life? At PdevTech, we collaborate with you to design and build modern, responsive, and impactful websites that align perfectly with your vision and goals.
      </p>

      <form onSubmit={handleSubmit} className="mt-10 flex flex-col items-center gap-4">
        <Input
          type="email"
          name="email"
          placeholder="Your Email"
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="h-12 w-full sm:w-[450px] rounded-lg border border-gray-300 bg-gray-50 placeholder-gray-400 px-6"
        />

        <textarea
          name="message"
          placeholder="Your Message"
          required
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          rows={5}
          className="w-full sm:w-[450px] rounded-lg border border-gray-300 bg-gray-50 placeholder-gray-400 px-6 py-4 resize-none"
        ></textarea>

        <Button
          type="submit"
          disabled={loading}
          className="h-12 px-8 rounded-lg bg-white text-black hover:bg-gray-100"
        >
          {loading ? "Sending..." : "Send Message"}
        </Button>

        {success && (
          <p className="text-green-400 text-sm mt-2">✅ Your message was sent successfully!</p>
        )}
      </form>
    </section>
  )
}