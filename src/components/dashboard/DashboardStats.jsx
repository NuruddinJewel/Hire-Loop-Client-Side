import React from 'react';
import StatCard from './StatCard';

const DashboardStats = ({ statsData = [] }) => {
    return (
        <section className="w-full text-white py-10">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
                    {statsData.map((stat) => (
                        <StatCard
                            key={stat.id}
                            value={stat.value}
                            label={stat.label}
                            icon={stat.icon}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default DashboardStats;