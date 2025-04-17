import * as React from "react"
import { Button } from "@/components/ui/button"
import { Avatar, AvatarImage } from "@/components/ui/avatar"
import { IoLogoFacebook } from "react-icons/io5"
import { FaTwitter, FaLinkedin } from "react-icons/fa"
import { FiInstagram } from "react-icons/fi"

import "./Hero.css"

// Hero title lines
const titleLines = [
    { text: "UI & UX", className: "block" },
    { text: "Designer", className: "block md:inline-block md:ml-25" },
] as const

// Social icons
const socialLinks = [
    { Icon: IoLogoFacebook, href: "#", label: "Facebook" },
    { Icon: FaTwitter, href: "#", label: "Twitter" },
    { Icon: FiInstagram, href: "#", label: "Instagram" },
    { Icon: FaLinkedin, href: "#", label: "LinkedIn" },
] as const

export function Hero() {
    return (
        <section className="px-6 py-16 max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between">
            <div className="w-full md:w-1/2 text-center md:text-left space-y-4">
                <p className="text-lg font-poppins font-semibold">Hi I am</p>
                <h2 className="text-3xl md:text-4xl font-poppins font-normal text-[#FD6F00]">
                    Fawzi Sayed
                </h2>
                <h1 className="text-4xl md:text-6xl font-bold leading-tight">
                    {titleLines.map(({ text, className }) => (
                        <span key={text} className={className}>
                            {text}
                        </span>
                    ))}
                </h1>
                <p className="max-w-md text-base leading-relaxed hero-text">
                    Lorem ipsum dolor sit amet consectetur. Tristique amet sed massa nibh lectus netus in. Aliquet donec morbi convallis pretium. Turpis tempus pharetra.
                </p>
                <Button className="hero-btn w-[150px] h-[50px] bg-[#FD6F00] hover:bg-[#e65c00] text-white font-poppins font-normal">
                    Hire Me
                </Button>
            </div>

            <div className="w-full md:w-1/2 flex flex-col items-center mt-8 md:mt-0">
                <Avatar className="w-90 h-100">
                    <AvatarImage src="/assets/images/hero-img.png" alt="Profile Image" />
                </Avatar>
                <div className="flex mt-4">
                    {socialLinks.map(({ Icon, href, label }) => (
                        <Button
                            key={label}
                            asChild
                            variant="ghost"
                            className="p-2 hover:text-[#FFFFFF]"
                        >
                            <a href={href} aria-label={label}>
                                <Icon className="hero-icons" size={25} />
                            </a>
                        </Button>
                    ))}
                </div>
            </div>
        </section>
    )
}