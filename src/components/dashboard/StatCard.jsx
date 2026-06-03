import React from 'react';

const StatCard = ({ value, label, icon }) => {
    return (
        <div className="flex flex-col justify-between items-start p-6 min-h-[160px] bg-gradient-to-b from-[#141416]/90 to-[#0f0f11]/95 border border-neutral-800/60 backdrop-blur-sm rounded-2xl hover:border-neutral-700/80 hover:shadow-[0_12px_40px_rgba(0,0,0,0.5)] group cursor-default transition-all duration-300">

            {/* Icon Wrapper */}
            <div className="p-2.5 bg-neutral-900/60 border border-neutral-800/60 rounded-xl group-hover:bg-neutral-800/60 group-hover:border-neutral-700/60 transition-all duration-300">
                {icon}
            </div>

            {/* Text */}
            <div className="text-left space-y-1 w-full mt-5">
                <span className="block text-xs font-light text-neutral-400 tracking-wide">
                    {label}
                </span>
                <span className="block text-3xl font-bold tracking-tight text-white font-sans">
                    {value}
                </span>
            </div>
        </div>
    );
};

export default StatCard;