"use client";

import React from 'react';
import { BiBriefcaseAlt2 } from "react-icons/bi";
import { HiOutlineBuildingOffice2 } from "react-icons/hi2";
import { FiSearch, FiStar } from "react-icons/fi";
import Image from 'next/image';

const Stats = () => {
    const statsData = [
        {
            id: 1,
            value: "50K",
            label: "Active Jobs",
            icon: <BiBriefcaseAlt2 className="h-5 w-5 text-neutral-400" />
        },
        {
            id: 2,
            value: "12K",
            label: "Companies",
            icon: <HiOutlineBuildingOffice2 className="h-5 w-5 text-neutral-400" />
        },
        {
            id: 3,
            value: "2M",
            label: "Job Seekers",
            icon: <FiSearch className="h-5 w-5 text-neutral-400" />
        },
        {
            id: 4,
            value: "97%",
            label: "Satisfaction Rate",
            icon: <FiStar className="h-5 w-5 text-neutral-400" />
        }
    ];

    return (
        <section className="relative w-full bg-[#0a0a0a] text-white py-20 overflow-hidden">

            {/* GLOBE BACKGROUND */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-[900px] h-[420px] pointer-events-none z-0 opacity-60 select-none">
                <Image
                    src="/images/globe.png"
                    alt="Globe background"
                    fill
                    priority
                    className="object-top object-contain"
                />
            </div>

            {/* PURPLE AMBIENT GLOW — centered behind heading */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[320px] bg-indigo-700/30 blur-[100px] rounded-full pointer-events-none z-0" />

            {/* MAIN CONTENT */}
            <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">

                {/* HEADING */}
                <h2 className="text-xl sm:text-2xl lg:text-3xl font-normal text-neutral-300 max-w-xl mx-auto leading-relaxed mb-14 pt-4">
                    Assisting over{" "}
                    <span className="text-white font-semibold">
                        15,000 job seekers
                    </span>{" "}
                    find their dream positions.
                </h2>

                {/* STATS CARD GRID */}
                <div className="grid grid-cols-2 lg:grid-cols-4 gap-3">
                    {statsData.map((stat) => (
                        <div
                            key={stat.id}
                            className="flex flex-col justify-between items-start p-5 min-h-[160px] bg-[#111113] border border-neutral-800/70 rounded-2xl hover:border-neutral-700 transition-all duration-300 group"
                        >
                            {/* Icon — top left */}
                            <div className="text-neutral-400 group-hover:text-neutral-300 transition-colors">
                                {stat.icon}
                            </div>

                            {/* Value + Label — bottom left */}
                            <div className="text-left space-y-1 mt-8">
                                <span className="block text-4xl font-bold tracking-tight text-white">
                                    {stat.value}
                                </span>
                                <span className="block text-xs text-neutral-500 tracking-wide">
                                    {stat.label}
                                </span>
                            </div>
                        </div>
                    ))}
                </div>

            </div>
        </section>
    );
};

export default Stats;