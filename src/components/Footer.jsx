"use client";

import React from 'react';
import { Link } from "@heroui/react";
// Importing reliable brand icons from react-icons
import { FaFacebookF, FaPinterestP, FaLinkedinIn } from "react-icons/fa6";

const Footer = () => {
    const footerSections = [
        {
            title: "Product",
            links: [
                { label: "Job discovery", href: "/jobs" },
                { label: "Worker AI", href: "/worker-ai" },
                { label: "Companies", href: "/companies" },
                { label: "Salary data", href: "/salary" }
            ]
        },
        {
            title: "Navigations",
            links: [
                { label: "Help center", href: "/help" },
                { label: "Career library", href: "/library" },
                { label: "Contact", href: "/contact" }
            ]
        },
        {
            title: "Resources",
            links: [
                { label: "Brand Guideline", href: "/brand" },
                { label: "Newsroom", href: "/news" }
            ]
        }
    ];

    const socialIcons = [
        { icon: <FaFacebookF className="h-4 w-4" />, href: "https://facebook.com", bg: "bg-neutral-900 text-neutral-400 hover:text-white" },
        { icon: <FaPinterestP className="h-4 w-4" />, href: "https://pinterest.com", bg: "bg-purple-600 text-white hover:bg-purple-500" },
        { icon: <FaLinkedinIn className="h-4 w-4" />, href: "https://linkedin.com", bg: "bg-neutral-900 text-neutral-400 hover:text-white" }
    ];

    return (
        <footer className="w-full bg-[#0a0a0a] border-t border-neutral-900 text-white pt-16 pb-8">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

                {/* TOP SECTION: Branding & Link Matrix */}
                <div className="grid grid-cols-1 md:grid-cols-12 gap-10 md:gap-4 pb-12">

                    {/* Brand Meta Column */}
                    <div className="md:col-span-5 space-y-4">
                        <div className="flex items-center gap-3">
                            <div className="w-8 h-8 bg-gradient-to-tr from-purple-600 to-pink-500 rounded-lg flex items-center justify-center font-bold text-sm text-white shadow-md">
                                H
                            </div>
                            <div className="font-bold text-sm leading-tight tracking-wide">
                                <span>Hire</span>
                                <br />
                                <span className="text-neutral-400 font-medium">Loop</span>
                            </div>
                        </div>
                        <p className="text-neutral-400 text-sm max-w-sm leading-relaxed font-light">
                            The AI-native career platform. Built for people who take their work seriously.
                        </p>
                    </div>

                    {/* Nav Links Column Matrix */}
                    <div className="md:col-span-7 grid grid-cols-2 sm:grid-cols-3 gap-8">
                        {footerSections.map((section) => (
                            <div key={section.title} className="flex flex-col gap-3">
                                <h4 className="text-purple-500 font-semibold text-sm tracking-wide">
                                    {section.title}
                                </h4>
                                <ul className="space-y-2.5">
                                    {section.links.map((link) => (
                                        <li key={link.label}>
                                            <Link
                                                href={link.href}
                                                className="text-neutral-400 hover:text-white text-sm transition-colors duration-200 block font-light"
                                            >
                                                {link.label}
                                            </Link>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        ))}
                    </div>
                </div>

                {/* BOTTOM SECTION: Socials & Copyright/Legal Actions */}
                <div className="border-t border-neutral-900 pt-8 flex flex-col-reverse gap-6 sm:flex-row sm:items-center sm:justify-between">

                    {/* Social Container */}
                    <div className="flex items-center gap-3">
                        {socialIcons.map((social, index) => (
                            <a
                                key={index}
                                href={social.href}
                                target="_blank"
                                rel="noopener noreferrer"
                                className={`w-9 h-9 flex items-center justify-center rounded-lg transition-all duration-200 border border-neutral-800/60 ${social.bg}`}
                            >
                                {social.icon}
                            </a>
                        ))}
                    </div>

                    {/* Meta/Legal links */}
                    <div className="flex flex-col sm:flex-row items-start sm:items-center gap-2 sm:gap-6 text-xs text-neutral-500 font-light">
                        <p>© Copyright 2026 — Hire Loop</p>
                        <div className="flex items-center gap-4">
                            <Link href="/terms" className="text-xs text-neutral-500 hover:text-neutral-300 font-light">
                                Terms & Policy
                            </Link>
                            <span className="text-neutral-700 hidden sm:inline">•</span>
                            <Link href="/privacy" className="text-xs text-neutral-500 hover:text-neutral-300 font-light">
                                Privacy Guideline
                            </Link>
                        </div>
                    </div>

                </div>
            </div>
        </footer>
    );
};

export default Footer;