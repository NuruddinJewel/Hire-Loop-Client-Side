"use client";

import React from 'react';
import { BiBriefcaseAlt2 } from "react-icons/bi";
import { HiOutlineBuildingOffice2 } from "react-icons/hi2";
import { FiSearch, FiStar } from "react-icons/fi";
import Image from 'next/image';
import { motion } from "framer-motion";
// import { motion } from "motion/react";
const Stats = () => {
    const statsData = [
        {
            id: 1,
            value: "50K",
            label: "Active Jobs",
            icon: <BiBriefcaseAlt2 className="h-4 w-4 text-neutral-400 group-hover:text-white transition-colors" />
        },
        {
            id: 2,
            value: "12K",
            label: "Companies",
            icon: <HiOutlineBuildingOffice2 className="h-4 w-4 text-neutral-400 group-hover:text-white transition-colors" />
        },
        {
            id: 3,
            value: "2M",
            label: "Job Seekers",
            icon: <FiSearch className="h-4 w-4 text-neutral-400 group-hover:text-white transition-colors" />
        },
        {
            id: 4,
            value: "97%",
            label: "Satisfaction Rate",
            icon: <FiStar className="h-4 w-4 text-neutral-400 group-hover:text-white transition-colors" />
        }
    ];

    return (
        <section className="relative w-full bg-[#0a0a0a] text-white py-24 overflow-hidden">

            {/* GLOBE BACKGROUND — fade in + subtle float animation */}
            <motion.div
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 0.45, y: 0 }}
                transition={{ duration: 1.2, ease: "easeOut" }}
                className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-[900px] h-[520px] pointer-events-none z-0 mix-blend-screen select-none"
            >
                {/* Continuous float loop */}
                <motion.div
                    animate={{ y: [0, -12, 0] }}
                    transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                    className="relative w-full h-full"
                >
                    <Image
                        src="/images/globe1.png"
                        alt="Globe background"
                        fill
                        priority
                        className="object-contain object-top"
                    />
                </motion.div>
            </motion.div>

            {/* MAIN CONTENT */}
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">

                {/* HEADING — underline */}
                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-60px" }}
                    transition={{ duration: 0.6, ease: "easeOut" }}
                    className="text-2xl sm:text-3xl lg:text-4xl font-normal text-neutral-300 max-w-2xl mx-auto leading-relaxed mb-20 pt-2"
                >
                    Assisting over{" "}
                    <span className="text-white font-medium">
                        15,000 job seekers
                    </span>{" "}
                    find their dream positions.
                </motion.h2>

                {/* STATS CARD GRID */}
                <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-60px" }}
                    variants={{
                        hidden: {},
                        visible: {
                            transition: {
                                staggerChildren: 0.1,
                            },
                        },
                    }}
                    className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6"
                >
                    {statsData.map((stat) => (
                        <motion.div
                            key={stat.id}
                            variants={{
                                hidden: { opacity: 0, y: 30, scale: 0.95 },
                                visible: {
                                    opacity: 1,
                                    y: 0,
                                    scale: 1,
                                    transition: { duration: 0.5, ease: "easeOut" },
                                },
                            }}
                            whileHover={{
                                y: -6,
                                scale: 1.03,
                                transition: { duration: 0.25, ease: "easeOut" },
                            }}
                            whileTap={{ scale: 0.97 }}
                            className="flex flex-col justify-between items-start p-6 min-h-[195px] bg-gradient-to-b from-[#141416]/90 to-[#0f0f11]/95 border border-neutral-800/60 backdrop-blur-sm rounded-2xl hover:border-purple-500/30 hover:shadow-[0_0_30px_rgba(168,85,247,0.08),0_12px_40px_rgba(0,0,0,0.6)] group cursor-default transition-all duration-300"
                        >
                            {/* Icon Wrapper */}
                            <div className="p-2.5 bg-neutral-900/60 border border-neutral-800/60 rounded-xl group-hover:bg-purple-950/40 group-hover:border-purple-800/40 transition-all duration-300">
                                {stat.icon}
                            </div>

                            {/* Value + Label */}
                            <div className="text-left space-y-1 w-full mt-6">
                                <motion.span
                                    initial={{ opacity: 0 }}
                                    whileInView={{ opacity: 1 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.4, delay: 0.15 }}
                                    className="block text-4xl font-bold tracking-tight text-white font-sans"
                                >
                                    {stat.value}
                                </motion.span>
                                <span className="block text-xs font-light text-neutral-400 tracking-wide">
                                    {stat.label}
                                </span>
                            </div>
                        </motion.div>
                    ))}
                </motion.div>

            </div>
        </section>
    );
};

export default Stats;

