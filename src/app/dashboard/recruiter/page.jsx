'use client'
import React from 'react';
import { FiCheckCircle, FiFileText, FiUsers, FiZap } from 'react-icons/fi';
import DashboardStats from '@/components/dashboard/DashboardStats';
import { authClient } from '@/lib/auth-client';

const recruiterStats = [
    {
        id: 1,
        value: "48",
        label: "Total Job Posts",
        icon: <FiFileText className="h-4 w-4 text-neutral-400 group-hover:text-white transition-colors" />
    },
    {
        id: 2,
        value: "1,284",
        label: "Total Applicants",
        icon: <FiUsers className="h-4 w-4 text-neutral-400 group-hover:text-white transition-colors" />
    },
    {
        id: 3,
        value: "18",
        label: "Active Jobs",
        icon: <FiZap className="h-4 w-4 text-neutral-400 group-hover:text-white transition-colors" />
    },
    {
        id: 4,
        value: "32",
        label: "Jobs Closed",
        icon: <FiCheckCircle className="h-4 w-4 text-neutral-400 group-hover:text-white transition-colors" />
    }
];

const RecruiterPage = () => {
    const { data: session, isPending } = authClient.useSession();

    if (isPending) {
        return (
            <div className="flex h-screen items-center justify-center bg-[#0a0a0a]">
                <p className="text-neutral-400">Loading...</p>
            </div>
        );
    }

    if (!session) {
        return (
            <div className="flex h-screen items-center justify-center bg-[#0a0a0a]">
                <p className="text-red-400">Access Denied. Please log in.</p>
            </div>
        );
    }

    const user = session.user;

    return (
        <div className="min-h-screen bg-[#0a0a0a] text-white p-8">
            <h2 className="text-4xl font-bold text-white">
                Welcome Back, {user?.name || 'Recruiter'}
            </h2>
            <p className="mt-2 text-neutral-500">Manage your job postings here.</p>
            <DashboardStats statsData={recruiterStats} />
        </div>
    );
};

export default RecruiterPage;