"use client";

import React from 'react';
import { Button } from "@heroui/react";
import Image from 'next/image';

const Account = () => {
    return (
        <section className="relative w-full bg-[#0a0a0a] text-white pt-32 pb-40 overflow-hidden flex flex-col items-center justify-center">

            {/* 1. HUGE GRID ARCH BACKGROUND — Perfectly synced  */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-[1500px] h-[650px] pointer-events-none z-0 opacity-40 mix-blend-screen select-none">
                <Image
                    src="/images/galaxy.png"
                    alt="Cyber network curve grid"
                    fill
                    priority
                    className="object-top object-cover scale-[1.3] sm:scale-[1.1] md:scale-100"
                />
            </div>

            {/* 2. CORE BACKDROP PURPLE GLOW */}
            <div className="absolute top-[40px] left-1/2 -translate-x-1/2 w-[300px] sm:w-[600px] h-[250px] bg-purple-600/20 blur-[130px] rounded-full pointer-events-none z-0" />

            {/* MAIN TEXT AND BUTTON CONTAINER */}
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 flex flex-col items-center text-center">

                {/* 3. MAIN ACTION TITLE */}
                <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white mb-5 leading-tight max-w-2xl">
                    Your next role is <br className="hidden sm:inline" /> already looking for you
                </h2>

                {/* 4. SUBTITLE PARAGRAPH */}
                <p className="text-neutral-400 text-xs sm:text-sm max-w-lg mx-auto leading-relaxed font-light tracking-wide mb-10">
                    Build a profile in three minutes. The matches start arriving tomorrow morning.
                </p>

                {/* 5. DUAL CAPULE BUTTON MATRIX */}
                <div className="flex flex-col sm:flex-row items-center justify-center gap-4 w-full sm:w-auto">
                    {/* Primary White Button */}
                    <Button
                        className="w-full sm:w-auto bg-white hover:bg-neutral-200 text-black font-medium h-11 px-7 text-xs rounded-xl shadow-xl transition-all duration-300 hover:scale-[1.02]"
                    >
                        Create a free account
                    </Button>

                    {/* Secondary Dark/Bordered Button */}
                    <Button
                        className="w-full sm:w-auto bg-[#141416]/40 hover:bg-[#141416]/80 text-neutral-300 hover:text-white font-medium h-11 px-7 text-xs rounded-xl border border-neutral-800/80 hover:border-neutral-700/80 backdrop-blur-sm transition-all duration-300"
                    >
                        View pricing
                    </Button>
                </div>

            </div>
        </section>
    );
};

export default Account;