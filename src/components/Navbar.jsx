// "use client";

// import React, { useState } from "react";
// import { Button, Link } from "@heroui/react";
// import { Menu, X } from "lucide-react";

// export default function AppNavbar() {
//     const [isMenuOpen, setIsMenuOpen] = useState(false);

//     const navLinks = [
//         { label: "Browse Jobs", href: "/jobs" },
//         { label: "Company", href: "/company" },
//         { label: "Pricing", href: "/pricing" },
//     ];

//     return (
//         <nav className="sticky top-0 z-50 w-full bg-[#18181b] border-b border-neutral-800 text-white">
//             <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//                 <div className="flex items-center justify-between h-16">

//                     {/* LEFT SECTION: Brand Logo */}
//                     <div className="flex items-center gap-2.5">
//                         {/* Rounded gradient logo icon */}
//                         <div className="w-7 h-7 bg-linear-to-br from-purple-500 to-pink-500 rounded-md flex items-center justify-center shadow-md shrink-0 font-bold text-white text-sm">
//                             H
//                         </div>
//                         {/* Brand name: "Programming" white, "Hero" muted — on one line */}
//                         <span className="font-semibold text-sm whitespace-nowrap">
//                             Hire{" "}
//                             <span className="text-neutral-400 font-medium">Loop</span>
//                         </span>
//                     </div>

//                     {/* DESKTOP RIGHT SECTION: Capsule with nav links + divider + auth */}
//                     <div className="hidden sm:flex items-center gap-5 bg-neutral-900/60 px-5 py-2 rounded-full border border-neutral-800/80">
//                         {/* Nav Links */}
//                         <div className="flex items-center gap-5">
//                             {navLinks.map((link) => (
//                                 <Link
//                                     key={link.label}
//                                     href={link.href}
//                                     className="text-sm font-medium text-neutral-300 hover:text-white transition-colors"
//                                 >
//                                     {link.label}
//                                 </Link>
//                             ))}
//                         </div>

//                         {/* Vertical Divider */}
//                         <div className="w-px h-4 bg-neutral-700" />

//                         {/* Auth Actions */}
//                         <div className="flex items-center gap-4">
//                             <Link
//                                 href="/auth/signin"
//                                 className="text-sm font-semibold text-purple-400 hover:text-purple-300 transition-colors"
//                             >
//                                 Sign In
//                             </Link>
//                             <Button
//                                 as={Link}
//                                 href="/auth/signup"
//                                 size="sm"
//                                 className="bg-white text-black font-semibold text-sm px-4 h-8 rounded-lg hover:bg-neutral-100 transition-colors min-w-0"
//                             >
//                                 Get Started
//                             </Button>
//                         </div>
//                     </div>

//                     {/* MOBILE TOGGLE BUTTON */}
//                     <div className="flex sm:hidden">
//                         <button
//                             onClick={() => setIsMenuOpen(!isMenuOpen)}
//                             type="button"
//                             className="inline-flex items-center justify-center p-2 rounded-md text-neutral-400 hover:text-white hover:bg-neutral-800 focus:outline-none"
//                             aria-controls="mobile-menu"
//                             aria-expanded={isMenuOpen}
//                         >
//                             <span className="sr-only">Open main menu</span>
//                             {isMenuOpen ? (
//                                 <X className="block h-6 w-6" />
//                             ) : (
//                                 <Menu className="block h-6 w-6" />
//                             )}
//                         </button>
//                     </div>
//                 </div>
//             </div>

//             {/* MOBILE DROPDOWN MENU */}
//             {isMenuOpen && (
//                 <div
//                     id="mobile-menu"
//                     className="sm:hidden bg-[#18181b] border-t border-neutral-800 px-4 pt-4 pb-6 space-y-3 shadow-xl"
//                 >
//                     {navLinks.map((link) => (
//                         <Link
//                             key={link.label}
//                             href={link.href}
//                             className="block text-base font-medium text-neutral-300 hover:text-white py-2 border-b border-neutral-800/50"
//                             onClick={() => setIsMenuOpen(false)}
//                         >
//                             {link.label}
//                         </Link>
//                     ))}
//                     <div className="pt-4 flex flex-col gap-3">
//                         <Link
//                             href="/login"
//                             className="text-center font-semibold text-purple-400 py-2 hover:text-purple-300"
//                             onClick={() => setIsMenuOpen(false)}
//                         >
//                             Sign In
//                         </Link>
//                         <Button
//                             as={Link}
//                             href="/auth/signup"
//                             className="w-full bg-white text-black font-semibold text-sm py-5 rounded-xl"
//                             onClick={() => setIsMenuOpen(false)}
//                         >
//                             Get Started
//                         </Button>
//                     </div>
//                 </div>
//             )}
//         </nav>
//     );
// }

//2
// "use client";

// import React, { useState } from "react";
// import { Button, Link } from "@heroui/react";
// import { Menu, X } from "lucide-react";

// export default function AppNavbar() {
//     const [isMenuOpen, setIsMenuOpen] = useState(false);

//     const navLinks = [
//         { label: "Browse Jobs", href: "/jobs" },
//         { label: "Company", href: "/company" },
//         { label: "Pricing", href: "/pricing" },
//     ];

//     return (
//         <nav className="sticky top-0 z-50 w-full bg-[#18181b] border-b border-neutral-800 text-white">
//             <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//                 <div className="flex items-center justify-between h-16">

//                     {/* LEFT SECTION: Brand Logo */}
//                     <div className="flex items-center gap-2.5">
//                         <div className="w-7 h-7 bg-gradient-to-br from-purple-500 to-pink-500 rounded-md flex items-center justify-center shadow-md shrink-0 font-bold text-white text-sm">
//                             H
//                         </div>
//                         <span className="font-semibold text-sm whitespace-nowrap">
//                             Hire{" "}
//                             <span className="text-neutral-400 font-medium">Loop</span>
//                         </span>
//                     </div>

//                     {/* DESKTOP RIGHT SECTION */}
//                     <div className="hidden sm:flex items-center gap-5 bg-neutral-900/60 px-5 py-2 rounded-full border border-neutral-800/80">
//                         {/* Nav Links */}
//                         <div className="flex items-center gap-5">
//                             {navLinks.map((link) => (
//                                 <Link
//                                     key={link.label}
//                                     href={link.href}
//                                     className="text-sm font-medium text-neutral-300 hover:text-white transition-colors"
//                                 >
//                                     {link.label}
//                                 </Link>
//                             ))}
//                         </div>

//                         {/* Vertical Divider */}
//                         <div className="w-px h-4 bg-neutral-700" />

//                         {/* Auth Actions */}
//                         <div className="flex items-center gap-4">
//                             <Link
//                                 href="/auth/signin"
//                                 className="text-sm font-semibold text-purple-400 hover:text-purple-300 transition-colors"
//                             >
//                                 Sign In
//                             </Link>
//                             <Button
//                                 as={Link}
//                                 href="/auth/signup"
//                                 size="sm"
//                                 className="bg-white text-black font-semibold text-sm px-4 h-8 rounded-lg hover:bg-neutral-100 transition-colors min-w-0"
//                             >
//                                 Get Started
//                             </Button>
//                         </div>
//                     </div>

//                     {/* MOBILE TOGGLE BUTTON */}
//                     <div className="flex sm:hidden">
//                         <button
//                             onClick={() => setIsMenuOpen(!isMenuOpen)}
//                             type="button"
//                             className="inline-flex items-center justify-center p-2 rounded-md text-neutral-400 hover:text-white hover:bg-neutral-800 focus:outline-none"
//                             aria-controls="mobile-menu"
//                             aria-expanded={isMenuOpen}
//                         >
//                             <span className="sr-only">Open main menu</span>
//                             {isMenuOpen ? (
//                                 <X className="block h-6 w-6" />
//                             ) : (
//                                 <Menu className="block h-6 w-6" />
//                             )}
//                         </button>
//                     </div>
//                 </div>
//             </div>

//             {/* MOBILE DROPDOWN MENU */}
//             {isMenuOpen && (
//                 <div
//                     id="mobile-menu"
//                     className="sm:hidden bg-[#18181b] border-t border-neutral-800 px-4 pt-4 pb-6 space-y-3 shadow-xl"
//                 >
//                     {navLinks.map((link) => (
//                         <Link
//                             key={link.label}
//                             href={link.href}
//                             className="block text-base font-medium text-neutral-300 hover:text-white py-2 border-b border-neutral-800/50"
//                             onClick={() => setIsMenuOpen(false)}
//                         >
//                             {link.label}
//                         </Link>
//                     ))}
//                     <div className="pt-4 flex flex-col gap-3">
//                         <Link
//                             href="/auth/signin"
//                             className="text-center font-semibold text-purple-400 py-2 hover:text-purple-300"
//                             onClick={() => setIsMenuOpen(false)}
//                         >
//                             Sign In
//                         </Link>
//                         <Button
//                             as={Link}
//                             href="/auth/signup"
//                             className="w-full bg-white text-black font-semibold text-sm py-5 rounded-xl"
//                             onClick={() => setIsMenuOpen(false)}
//                         >
//                             Get Started
//                         </Button>
//                     </div>
//                 </div>
//             )}
//         </nav>
//     );
// }


"use client";

import React, { useState } from "react";
import { Button, Link } from "@heroui/react";
import NextLink from "next/link";
import { Menu, X } from "lucide-react";

export default function AppNavbar() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const navLinks = [
        { label: "Browse Jobs", href: "/jobs" },
        { label: "Company", href: "/company" },
        { label: "Pricing", href: "/pricing" },
    ];

    return (
        <nav className="sticky top-0 z-50 w-full bg-[#18181b] border-b border-neutral-800 text-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-16">

                    {/* LEFT SECTION: Brand Logo */}
                    <div className="flex items-center gap-2.5">
                        <div className="w-7 h-7 bg-gradient-to-br from-purple-500 to-pink-500 rounded-md flex items-center justify-center shadow-md shrink-0 font-bold text-white text-sm">
                            H
                        </div>
                        <span className="font-semibold text-sm whitespace-nowrap">
                            Hire{" "}
                            <span className="text-neutral-400 font-medium">Loop</span>
                        </span>
                    </div>

                    {/* DESKTOP RIGHT SECTION */}
                    <div className="hidden sm:flex items-center gap-5 bg-neutral-900/60 px-5 py-2 rounded-full border border-neutral-800/80">
                        {/* Nav Links */}
                        <div className="flex items-center gap-5">
                            {navLinks.map((link) => (
                                <Link
                                    key={link.label}
                                    href={link.href}
                                    className="text-sm font-medium text-neutral-300 hover:text-white transition-colors"
                                >
                                    {link.label}
                                </Link>
                            ))}
                        </div>

                        {/* Vertical Divider */}
                        <div className="w-px h-4 bg-neutral-700" />

                        {/* Auth Actions */}
                        <div className="flex items-center gap-4">
                            <Link
                                href="/auth/signin"
                                className="text-sm font-semibold text-purple-400 hover:text-purple-300 transition-colors"
                            >
                                Sign In
                            </Link>
                            <NextLink href="/auth/signup">
                                <Button
                                    size="sm"
                                    className="bg-white text-black font-semibold text-sm px-4 h-8 rounded-lg hover:bg-neutral-100 transition-colors min-w-0"
                                >
                                    Get Started
                                </Button>
                            </NextLink>
                        </div>
                    </div>

                    {/* MOBILE TOGGLE BUTTON */}
                    <div className="flex sm:hidden">
                        <button
                            onClick={() => setIsMenuOpen(!isMenuOpen)}
                            type="button"
                            className="inline-flex items-center justify-center p-2 rounded-md text-neutral-400 hover:text-white hover:bg-neutral-800 focus:outline-none"
                            aria-controls="mobile-menu"
                            aria-expanded={isMenuOpen}
                        >
                            <span className="sr-only">Open main menu</span>
                            {isMenuOpen ? (
                                <X className="block h-6 w-6" />
                            ) : (
                                <Menu className="block h-6 w-6" />
                            )}
                        </button>
                    </div>
                </div>
            </div>

            {/* MOBILE DROPDOWN MENU */}
            {isMenuOpen && (
                <div
                    id="mobile-menu"
                    className="sm:hidden bg-[#18181b] border-t border-neutral-800 px-4 pt-4 pb-6 space-y-3 shadow-xl"
                >
                    {navLinks.map((link) => (
                        <Link
                            key={link.label}
                            href={link.href}
                            className="block text-base font-medium text-neutral-300 hover:text-white py-2 border-b border-neutral-800/50"
                            onClick={() => setIsMenuOpen(false)}
                        >
                            {link.label}
                        </Link>
                    ))}
                    <div className="pt-4 flex flex-col gap-3">
                        <Link
                            href="/auth/signin"
                            className="text-center font-semibold text-purple-400 py-2 hover:text-purple-300"
                            onClick={() => setIsMenuOpen(false)}
                        >
                            Sign In
                        </Link>
                        <NextLink href="/auth/signup" className="w-full">
                            <Button
                                className="w-full bg-white text-black font-semibold text-sm py-5 rounded-xl"
                                onClick={() => setIsMenuOpen(false)}
                            >
                                Get Started
                            </Button>
                        </NextLink>
                    </div>
                </div>
            )}
        </nav>
    );
}