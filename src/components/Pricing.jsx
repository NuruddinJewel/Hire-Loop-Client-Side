"use client";

import React, { useState } from 'react';
import { Button } from "@heroui/react";
import { FiArrowRight, FiPlus } from "react-icons/fi";
import { LuCrown, LuSparkles } from "react-icons/lu";
import { IoFlashOutline } from "react-icons/io5";

const Pricing = () => {
    const [isYearly, setIsYearly] = useState(false);
    const plans = [
        {
            id: "starter",
            name: "Starter",
            icon: <LuCrown className="text-purple-400 text-sm" />,
            monthlyPrice: 0,
            yearlyPrice: 0,
            subtitle: "Start building your insights hub:",
            features: [
                "Daily AI match brief (top 5)",
                "Verified salary bands",
                "Company insight dashboards",
                "1-click apply, unlimited"
            ],
            isPopular: false
        },
        {
            id: "growth",
            name: "Growth",
            icon: <LuSparkles className="text-purple-400 text-sm" />,
            monthlyPrice: 17,
            yearlyPrice: 12, // $12/month if billed yearly
            subtitle: "Start building your insights hub:",
            features: [
                "Daily AI match brief (top 5)",
                "Verified salary bands",
                "Company insight dashboards",
                "1-click apply, unlimited"
            ],
            isPopular: true
        },
        {
            id: "premium",
            name: "Premium",
            icon: <IoFlashOutline className="text-purple-400 text-sm" />,
            monthlyPrice: 99,
            yearlyPrice: 75,
            subtitle: "Start building your insights hub:",
            features: [
                "Everything in Pro",
                "Multi-profile career portfolios",
                "Shared talent rooms",
                "Recruiter view (read-only)"
            ],
            isPopular: false
        }
    ];

    return (
        <section className="relative w-full bg-[#0a0a0a] text-white py-24 overflow-hidden">
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

                {/* 1. SECTION HEADER */}
                <div className="text-center mb-10">
                    <div className="inline-flex items-center gap-1.5 mb-4">
                        <span className="w-1.5 h-1.5 bg-purple-500 rounded-sm" />
                        <span className="text-[10px] font-semibold uppercase tracking-[0.25em] text-purple-400 font-mono">
                            Pricing
                        </span>
                        <span className="w-1.5 h-1.5 bg-purple-500 rounded-sm" />
                    </div>
                    <h2 className="text-3xl sm:text-4xl lg:text-5xl font-semibold tracking-tight text-white max-w-xl mx-auto leading-tight">
                        Pay for the leverage, <br />not the listings
                    </h2>
                </div>

                {/* 2. CAPSULE TOGGLE SWITCH (Monthly / Yearly 25%) */}
                <div className="flex justify-center mb-16">
                    <div className="bg-[#141416] p-1 rounded-full border border-neutral-800/80 flex items-center relative">
                        <button
                            onClick={() => setIsYearly(false)}
                            className={`px-5 py-2 text-xs font-medium rounded-full transition-all duration-300 ${!isYearly ? 'bg-white text-black shadow-md' : 'text-neutral-400 hover:text-white'
                                }`}
                        >
                            Monthly
                        </button>
                        <button
                            onClick={() => setIsYearly(true)}
                            className={`px-5 py-2 text-xs font-medium rounded-full transition-all duration-300 flex items-center gap-1.5 ${isYearly ? 'bg-white text-black shadow-md' : 'text-neutral-400 hover:text-white'
                                }`}
                        >
                            Yearly
                            <span className={`text-[9px] px-1.5 py-0.5 rounded-full font-bold font-mono ${isYearly ? 'bg-purple-600 text-white' : 'bg-purple-600/20 text-purple-400'
                                }`}>
                                25%
                            </span>
                        </button>
                    </div>
                </div>

                {/* 3. PRICING CARDS GRID */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-stretch">
                    {plans.map((plan) => {
                        const currentPrice = isYearly ? plan.yearlyPrice : plan.monthlyPrice;

                        return (
                            <div
                                key={plan.id}
                                className={`flex flex-col justify-between p-8 rounded-3xl border transition-all duration-300 ${plan.isPopular
                                    ? 'bg-[#141416]/60 border-neutral-700/80 shadow-[0_20px_50px_rgba(0,0,0,0.4)] scale-[1.02] md:scale-[1.03]'
                                    : 'bg-[#141416]/30 border-neutral-800/60 hover:border-neutral-700/50'
                                    }`}
                            >
                                {/* Upper Content */}
                                <div>
                                    {/* Card Header: Name, Icon & Price */}
                                    <div className="flex justify-between items-center mb-8">
                                        <div className="flex items-center gap-2">
                                            <div className="p-2 bg-neutral-900/80 border border-neutral-800 rounded-xl">
                                                {plan.icon}
                                            </div>
                                            <span className="text-lg font-medium text-neutral-200">{plan.name}</span>
                                        </div>
                                        <div className="text-right flex items-baseline">
                                            <span className="text-4xl font-bold tracking-tight text-white">
                                                ${currentPrice}
                                            </span>
                                            <span className="text-xs text-neutral-500 font-light ml-1">
                                                /month
                                            </span>
                                        </div>
                                    </div>

                                    {/* Features Headline */}
                                    <p className="text-neutral-300 text-sm font-medium mb-6 text-left">
                                        {plan.subtitle}
                                    </p>

                                    {/* Features Bullet List (+ instead of checks) */}
                                    <ul className="space-y-4 text-left mb-10">
                                        {plan.features.map((feature, idx) => (
                                            <li key={idx} className="flex items-start gap-3 text-xs sm:text-sm text-neutral-400 font-light">
                                                <FiPlus className="text-neutral-500 mt-0.5 shrink-0 text-base" />
                                                <span className="leading-tight">{feature}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>

                                {/* Bottom Action Button */}
                                <div className="w-full">
                                    <Button
                                        className={`w-full h-12 rounded-xl text-xs font-medium transition-all duration-300 flex items-center justify-between px-5 ${plan.isPopular
                                            ? 'bg-white hover:bg-neutral-200 text-black shadow-lg'
                                            : 'bg-[#262629] hover:bg-neutral-800 text-neutral-300 border border-neutral-800/40'
                                            }`}
                                    >
                                        <span>Choose This Plan</span>
                                        <FiArrowRight className="text-sm" />
                                    </Button>
                                </div>
                            </div>
                        );
                    })}
                </div>

            </div>
        </section>
    );
};

export default Pricing;