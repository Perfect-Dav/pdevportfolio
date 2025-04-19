import * as React from "react"
import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Sheet, SheetTrigger, SheetContent, SheetHeader, SheetTitle } from "@/components/ui/sheet"
import { Menu } from "lucide-react"

import "./Navbar.css"

const navLinks = [
    { label: "Home", href: "/" },
    { label: "About Me", href: "/about" },
    { label: "Services", href: "/services" },
    { label: "Projects", href: "/projects" },
    { label: "Testimonials", href: "/testimonials" },
    { label: "Contact", href: "/contact" },
];

export function Navbar() {
    return (
        <header className="w-full px-4 py-2 flex items-center justify-between relative">
            <div className="flex items-center md:ml-2">
                <Image
                    src="/assets/images/Logo.svg"
                    alt="Logo"
                    width={279}
                    height={67}
                    className="mr-2 md:ml-[50px]"
                />
            </div>

            <nav className="hidden md:flex absolute inset-y-0 left-1/2 transform -translate-x-1/2 items-center gap-6">
                {navLinks.map((link) => (
                    <Link
                        key={link.href}
                        href={link.href}
                        className="tracking-[0.03em] font-poppins font-normal"
                    >
                        {link.label}
                    </Link>
                ))}
            </nav>

            <div className="hidden md:block mr-2">
                <Button className="bg-orange-500 mr-[50px] font-normal downloadButton font-poppins hover:bg-orange-600 text-white">
                    Download CV
                </Button>
            </div>

            {/* Mobile Sidebar Navigation */}
            <div className="md:hidden mr-2">
                <Sheet>
                    <SheetTrigger asChild>
                        <Button variant="ghost">
                            <Menu className="h-6 w-6" />
                        </Button>
                    </SheetTrigger>
                    <SheetContent side="left" className="p-4">
                        {/* Invisible title for screen readers */}
                        <SheetHeader>
                            <SheetTitle className="sr-only">Navigation Menu</SheetTitle>
                        </SheetHeader>

                        <nav className="flex flex-col gap-4">
                            {navLinks.map((link) => (
                                <Link
                                    key={link.href}
                                    href={link.href}
                                    className="tracking-[0.03em] font-poppins font-normal"
                                >
                                    {link.label}
                                </Link>
                            ))}
                            <button className="w-[188px] h-[52px] bg-[#FD6F00] hover:bg-[#e65c00] text-white font-poppins font-normal">
                                Download CV
                            </button>
                        </nav>
                    </SheetContent>
                </Sheet>
            </div>
        </header>
    )
}