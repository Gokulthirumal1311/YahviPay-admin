import React, { useEffect, useState } from 'react'
import { Layout } from './Layout/Layout'
import { Store, ShoppingCart, DollarSign, Ticket } from 'lucide-react';

const pageContent = {
    "title": "Admin Dashboard",

    "subTitle": "A summary dashboard displaying total count of businesses, orders, loans, and tickets.",
    "noDataFoundDescription" : "Please enter the Agent ID to see the Details."
}
export const AdminDashboard = () => {
    const [stats, setStats] = useState({
        businessCount: 0,
        orderCount: 0,
        unpaidLoans: 0,
        ticketsCount: 0,
    });

    useEffect(() => {
        const sampleData = {
            unpaidLoans: 0,
            orderCount: 6,
            businessCount: 78,
            ticketsCount: 1,
        };

        setStats(sampleData);
    }, []);

    const cards = [
        {
            title: "Business",
            value: stats.businessCount,
            icon: <Store className="text-blue-600 w-8 h-8" />,
            iconBg: "bg-blue-50",
        },
        {
            title: "Orders",
            value: stats.orderCount,
            icon: <ShoppingCart className="text-blue-600 w-8 h-8" />,
            iconBg: "bg-blue-50",
        },
        {
            title: "Unpaid Loans",
            value: stats.unpaidLoans,
            icon: <DollarSign className="text-blue-600 w-8 h-8" />,
            iconBg: "bg-blue-50",
        },
        {
            title: "Tickets Count",
            value: stats.ticketsCount,
            icon: <Ticket className="text-blue-600 w-8 h-8" />,
            iconBg: "bg-blue-50",
        },
    ];

    return (

        <Layout >

            <div className="">
                <div className="">
                    <div className="mb-8">
                        <h2 className="text-xl font-bold text-gray-800 mb-0.5" >{pageContent.title}</h2>
                        <h4 className='text-md font-semibold text-gray-500 mb-5'>{pageContent.subTitle}</h4>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {cards.map((card, index) => (
                            <div
                                key={index}
                                className="bg-white rounded-xl shadow-sm border border-gray-200 p-6 hover:shadow-md transition-shadow duration-200"
                            >
                                <div className="flex items-center justify-between">
                                    <div>
                                        <h3 className="text-sm font-semibold text-gray-800 mb-2">
                                            {card.title}
                                        </h3>
                                        <p className="text-4xl font-bold text-gray-900">
                                            {card.value}
                                        </p>
                                    </div>
                                    <div className={`p-3 rounded-lg ${card.iconBg}`}>
                                        {card.icon}
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </Layout>
    );
}
