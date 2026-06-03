import { Sidebar } from '@/components/dashboard/Sidebar';
import React from 'react';

const DashboardLayout = ({ children }) => {
    return (
        <div>
            <div className='flex min-h-screen'>
                <Sidebar />
                <div className='flex-1'>{children}</div>
            </div>
        </div>
    );
};

export default DashboardLayout;