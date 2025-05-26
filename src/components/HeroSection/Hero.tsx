"use client"
import * as React from "react"
import { useTypewriter, Cursor } from 'react-simple-typewriter'
import { Button } from "@/components/ui/button"
import { Avatar, AvatarImage } from "@/components/ui/avatar"
import { IoLogoFacebook } from "react-icons/io5"
import { FaTwitter, FaLinkedin } from "react-icons/fa"
import { FiInstagram } from "react-icons/fi"

import "./Hero.css"

// Social icons
const socialLinks = [
    //{ Icon: IoLogoFacebook, href: "#", label: "Facebook" },
    { Icon: FaTwitter, href: "https://x.com/perfect_adewale", label: "Twitter" },
    //{ Icon: FiInstagram, href: "#", label: "Instagram" },
    { Icon: FaLinkedin, href: "#", label: "LinkedIn" },
] as const

export function Hero() {
    const [text] = useTypewriter({
      words: [
        'Welcome to PdevTech',
        'Your Web Development Experts',
        'Where Design Meets Innovation',
        'Building Intuitive Interfaces',
        'Transforming Ideas into Engaging Experiences',
      ],
      loop: false,
      typeSpeed: 70,
      deleteSpeed: 50,
      delaySpeed: 1500,
    })

    const fullText = "At PdevTech, we craft bespoke websites that engage your audience and drive growth. From responsive design to seamless functionality, every project is tailored to bring your vision to life.";
    const [typedText, setTypedText] = React.useState("");

    React.useEffect(() => {
      let index = 0;
      const interval = setInterval(() => {
        setTypedText((prev: string) => prev + fullText[index]);
        index += 1;
        if (index >= fullText.length) clearInterval(interval);
      }, 50);
      return () => clearInterval(interval);
    }, []);

    return (
        <section className="px-6 py-16 max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between text-white">
            <div className="w-full md:w-1/2 text-center md:text-left space-y-4">
                <div className="space-y-4">
                  <h2 className="text-3xl md:text-4xl font-poppins font-normal">
                    {text}
                    <Cursor cursorStyle="|" />
                  </h2>
                </div>
                <p className="max-w-md text-base leading-relaxed">
                  {typedText}
                </p>
                <Button className="hero-btn w-[150px] h-[50px] bg-white text-gray-900 hover:bg-gray-100 font-poppins font-normal">
                    <a href="#contact">Contact Us</a>
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