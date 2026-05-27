"use client";

import React from 'react';
import { Button } from "@heroui/react";
import { FiArrowUpRight, FiMapPin, FiBriefcase } from "react-icons/fi";
import { BiDollar } from "react-icons/bi";

const Roles = () => {
    const rolesData = [
        {
            id: 1,
            title: "Frontend Developer",
            description: "Showcase your commitment to diversity and inclusion by building scalable web applications.",
            location: "New York, USA",
            type: "Hybrid",
            salary: "$25–$40/hour"
        },
        {
            id: 2,
            title: "UI/UX Designer",
            description: "Craft high-fidelity prototypes, user personas, and wireframes for next-gen platform workflows.",
            location: "Remote, Global",
            type: "Full-time",
            salary: "$35–$55/hour"
        },
        {
            id: 3,
            title: "Backend Engineer",
            description: "Design fault-tolerant microservices, maintain REST/GraphQL APIs, and optimize latency workflows.",
            location: "San Francisco, USA",
            type: "On-site",
            salary: "$45–$70/hour"
        },
        {
            id: 4,
            title: "Full Stack Developer",
            description: "Bridge user-facing elements with server-side logic using modern React frameworks and Node.js ecosystems.",
            location: "London, UK",
            type: "Hybrid",
            salary: "$40–$65/hour"
        },
        {
            id: 5,
            title: "DevOps & Scalability Specialist",
            description: "Automate CI/CD pipelines, manage Kubernetes orchestration, and handle cloud multi-region scale configurations.",
            location: "Remote",
            type: "Contract",
            salary: "$55–$85/hour"
        },
        {
            id: 6,
            title: "Database Administrator",
            description: "Maintain transactional integrity, execute complex query sharding, and scale distributed MongoDB or SQL instances.",
            location: "Austin, USA",
            type: "Remote",
            salary: "$38–$50/hour"
        }
    ];

    return (
        <section className="relative w-full bg-[#0a0a0a] text-white py-24 overflow-hidden">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

                {/* 1. TOP SECTION HEADER */}
                <div className="text-center mb-16">
                    <div className="inline-flex items-center gap-1.5 mb-4">
                        <span className="w-1.5 h-1.5 bg-purple-500 rounded-sm" />
                        <span className="text-[10px] font-semibold uppercase tracking-[0.25em] text-purple-400 font-mono">
                            Smart Job Discovery
                        </span>
                        <span className="w-1.5 h-1.5 bg-purple-500 rounded-sm" />
                    </div>
                    <h2 className="text-3xl sm:text-4xl lg:text-5xl font-semibold tracking-tight text-white max-w-2xl mx-auto leading-tight">
                        The roles {"you'd"} never <br />
                        find by searching
                    </h2>
                </div>

                {/* 2. ROLES GRID LAYOUT (3 Columns on Desktop, 1 on Mobile) */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
                    {rolesData.map((role) => (
                        <div
                            key={role.id}
                            className="flex flex-col justify-between items-start p-8 min-h-[300px] bg-[#141416]/40 border border-neutral-800/60 rounded-3xl transition-all duration-300 hover:border-neutral-700/60 hover:bg-[#141416]/70 group"
                        >
                            {/* Card Content Top */}
                            <div className="w-full text-left space-y-4">
                                <h3 className="text-xl sm:text-2xl font-medium tracking-tight text-white group-hover:text-purple-400 transition-colors">
                                    {role.title}
                                </h3>
                                <p className="text-neutral-400 text-xs sm:text-sm font-light leading-relaxed tracking-wide min-h-[48px]">
                                    {role.description}
                                </p>

                                {/* Meta Tags Grid  */}
                                <div className="flex flex-wrap gap-2 pt-2">
                                    <div className="inline-flex items-center gap-1.5 bg-neutral-900/60 border border-neutral-800/80 px-3 py-1 rounded-full text-[11px] text-neutral-300">
                                        <FiMapPin className="text-purple-400 text-xs" />
                                        {role.location}
                                    </div>
                                    <div className="inline-flex items-center gap-1.5 bg-neutral-900/60 border border-neutral-800/80 px-3 py-1 rounded-full text-[11px] text-neutral-300">
                                        <FiBriefcase className="text-purple-400 text-xs" />
                                        {role.type}
                                    </div>
                                    <div className="inline-flex items-center gap-1 w-full text-[11px] text-neutral-400 pt-1 px-1">
                                        <BiDollar className="text-purple-400 text-sm" />
                                        <span>{role.salary}</span>
                                    </div>
                                </div>
                            </div>

                            {/* Card Apply Button Bottom */}
                            <div className="w-full pt-6 border-t border-neutral-900/10 mt-6 text-left">
                                <button className="inline-flex items-center gap-2 text-xs font-medium text-neutral-300 group-hover:text-white transition-colors duration-200 cursor-pointer">
                                    Apply Now
                                    <FiArrowUpRight className="text-sm transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                                </button>
                            </div>
                        </div>
                    ))}
                </div>

                {/* 3. CENTERED BOTTOM BUTTON: "View all job open" */}
                <div className="flex justify-center">
                    <Button
                        className="bg-white hover:bg-neutral-200 text-black font-medium px-8 h-12 text-sm rounded-xl shadow-lg transition-all duration-300 hover:scale-[1.02]"
                    >
                        View all job open
                    </Button>
                </div>

            </div>
        </section>
    );
};

export default Roles;