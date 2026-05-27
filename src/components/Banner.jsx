"use client";

import React from 'react';
import { Button, Input } from "@heroui/react";
import { FiSearch } from "react-icons/fi";
import { SlLocationPin } from "react-icons/sl";

const Banner = () => {

    const trendingPositions = ["Product Designer", "AI Engineering", "Dev-ops Engineer"];

    return (
        <section className="relative w-full bg-[#0a0a0a] text-white pt-24 pb-20 overflow-hidden flex flex-col items-center justify-center min-h-[80vh]">


            <div className="absolute bottom-[-100px] left-1/2 -translate-x-1/2 w-[800px] h-[300px] bg-purple-900/10 blur-[120px] rounded-full pointer-events-none z-0" />

            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 flex flex-col items-center text-center">


                <div className="inline-flex items-center gap-2 bg-[#141416]/90 border border-neutral-800/80 px-4 py-1.5 rounded-full mb-8 shadow-sm">

                    <span className="text-sm">💼</span>
                    <span className="text-xs font-mono tracking-wider text-neutral-300 uppercase font-medium">
                        <span className="text-white font-bold">50,000+</span> New Jobs This Month
                    </span>
                </div>

                {/* 2. MAIN HEADING */}
                <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-white mb-6 leading-tight max-w-3xl">
                    Find Your Dream Job Today
                </h1>

                {/* 3. SUBTITLE TEXT */}
                <p className="text-neutral-400 text-sm sm:text-base max-w-2xl mx-auto leading-relaxed font-light mb-12">
                    HireLoop connects top talent with world-class companies. Browse thousands of
                    curated opportunities and land your next role — faster.
                </p>

                {/* 4. MAIN SEARCH BAR (The Unified Capsule Layout) */}
                <div className="w-full max-w-3xl bg-[#141416]/90 border border-neutral-800/80 p-2 rounded-full shadow-2xl flex flex-col sm:flex-row items-center gap-2 sm:gap-0 backdrop-blur-md mb-8">

                    {/* Left Field: Job Title Search */}
                    <div className="w-full flex items-center px-4 py-2 sm:py-0 border-b sm:border-b-0 sm:border-r border-neutral-800/80">
                        <FiSearch className="text-neutral-500 h-5 w-5 mr-3 flex-shrink-0" />
                        <input
                            type="text"
                            placeholder="Job title, skill or company"
                            className="w-full bg-transparent border-none text-white placeholder-neutral-500 text-sm focus:outline-none"
                        />
                    </div>

                    {/* Right Field: Location Search */}
                    <div className="w-full flex items-center px-4 py-2 sm:py-0">
                        <SlLocationPin className="text-neutral-500 h-5 w-5 mr-3 flex-shrink-0" />
                        <input
                            type="text"
                            placeholder="Location or Remote"
                            className="w-full bg-transparent border-none text-white placeholder-neutral-500 text-sm focus:outline-none"
                        />
                    </div>

                    {/* Blue Search Action Button */}
                    <Button
                        isIconOnly
                        className="w-full sm:w-12 h-12 bg-purple-600 hover:bg-purple-500 text-white rounded-full flex-shrink-0 transition-colors"
                        aria-label="Search jobs"
                    >
                        <FiSearch className="h-5 w-5 stroke-[2.5]" />
                    </Button>
                </div>

                {/* 5. TRENDING TAGS BAR */}
                <div className="flex flex-col sm:flex-row items-center justify-center gap-3 text-xs">
                    <span className="text-neutral-500 font-light tracking-wide">Trending Position</span>
                    <div className="flex flex-wrap justify-center gap-2">
                        {trendingPositions.map((position) => (
                            <button
                                key={position}
                                className="bg-[#141416] hover:bg-neutral-800 text-neutral-300 hover:text-white px-4 py-1.5 rounded-full border border-neutral-800 transition-colors duration-200 font-medium"
                            >
                                {position}
                            </button>
                        ))}
                    </div>
                </div>

            </div>
        </section>
    );
};

export default Banner;