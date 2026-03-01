"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu, X } from "lucide-react";

const navLinks = [
    { label: "Home", href: "#home" },
    { label: "Why Quantum?", href: "#why-quantum" },
    { label: "Courses", href: "#courses" },
    { label: "Tutorial Papers", href: "#papers" },
    { label: "Team", href: "#team" },
    { label: "Our Mission", href: "#mission" },
];

export default function Navbar() {
    const [scrolled, setScrolled] = useState(false);
    const [mobileOpen, setMobileOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => setScrolled(window.scrollY > 50);
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
        // Only handle hash links on the main page
        if (href.startsWith("#")) {
            e.preventDefault();
            const target = document.querySelector(href);
            if (target) {
                target.scrollIntoView({ behavior: "smooth" });
            }
            setMobileOpen(false);
        }
    };

    return (
        <nav
            className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled
                ? "bg-background/80 backdrop-blur-xl border-b border-white/5"
                : "bg-transparent"
                }`}
        >
            <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
                {/* Logo */}
                <Link href="/" className="flex items-center">
                    <Image
                        src="/gyqs-logo.jpg"
                        alt="GYQS"
                        width={200}
                        height={72}
                        className="h-20 w-auto object-contain"
                        priority
                    />
                </Link>

                {/* Desktop Nav */}
                <div className="hidden md:flex items-center gap-8">
                    {navLinks.map((link) => (
                        <a
                            key={link.href}
                            href={link.href}
                            onClick={(e) => handleNavClick(e, link.href)}
                            className="text-sm text-white/70 hover:text-white transition-colors duration-200 relative group"
                        >
                            {link.label}
                            <span className="absolute -bottom-1 left-0 w-0 h-[2px] bg-gradient-to-r from-accent-pink to-accent-purple group-hover:w-full transition-all duration-300" />
                        </a>
                    ))}
                </div>

                {/* Mobile Hamburger */}
                <button
                    className="md:hidden text-white/80 hover:text-white transition-colors"
                    onClick={() => setMobileOpen(!mobileOpen)}
                    aria-label="Toggle menu"
                >
                    {mobileOpen ? <X size={24} /> : <Menu size={24} />}
                </button>
            </div>

            {/* Mobile Drawer */}
            <div
                className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out ${mobileOpen ? "max-h-96 border-b border-white/5" : "max-h-0"
                    }`}
            >
                <div className="px-6 pb-6 pt-2 bg-background/95 backdrop-blur-xl flex flex-col gap-4">
                    {navLinks.map((link) => (
                        <a
                            key={link.href}
                            href={link.href}
                            onClick={(e) => handleNavClick(e, link.href)}
                            className="text-white/70 hover:text-white transition-colors py-2 border-b border-white/5 last:border-0"
                        >
                            {link.label}
                        </a>
                    ))}
                </div>
            </div>
        </nav>
    );
}
