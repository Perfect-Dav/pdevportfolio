"use client"

import Image from "next/image"
import Link from "next/link"
import { IoLogoFacebook } from "react-icons/io5"
import { FaTwitter, FaLinkedin } from "react-icons/fa"
import { FiInstagram } from "react-icons/fi"

const NAV_LINKS = [
  { label: "Home", href: "/" },
  { label: "About Me", href: "/about" },
  { label: "Services", href: "/services" },
  { label: "Projects", href: "/projects" },
  { label: "Testimonials", href: "/testimonials" },
  { label: "Contact", href: "/contact" },
]

const SOCIAL_LINKS = [
  { href: "https://facebook.com/", Icon: IoLogoFacebook },
  { href: "https://twitter.com/", Icon: FaTwitter },
  { href: "https://instagram.com/", Icon: FiInstagram },
  { href: "https://linkedin.com/", Icon: FaLinkedin },
]

export default function Footer() {
  return (
    <footer>
      <div className="bg-gray-50 py-8 px-6">
        <div className="flex flex-col items-center space-y-6">
          <div className="flex items-center space-x-2">
            <Image
              src="/assets/images/Logo.svg"
              alt="FawziUiUx Logo"
              width={64}
              height={64}
              className="w-[250px] h-[150px]"
            />
          </div>

          <ul className="flex flex-wrap justify-center mb-15 space-x-8 text-black-700">
            {NAV_LINKS.map((link) => (
              <li className="footer-links pr-[30px] tracking-[0.03em] font-poppins" key={link.href}>
                <Link
                  href={link.href}
                  className="hover:text-gray-900 transition"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>

          <div className="flex justify-center space-x-1">
            {SOCIAL_LINKS.map(({ href, Icon }) => (
              <Link
                key={href}
                href={href}
                target="_blank"
                aria-label={href}
              >
                <div className="w-10 h-10 rounded-full flex items-center justify-center">
                  <Icon className="w-5 h-5 text-black" />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>

      <div className="bg-[#545454] py-4">
        <p className="text-center text-sm text-gray-200">
          © 2023{" "}
          <span className="text-orange-500 font-semibold">
            FawziUiUx
          </span>{" "}
          All Rights Reserved , Inc.
        </p>
      </div>
    </footer>
  )
}