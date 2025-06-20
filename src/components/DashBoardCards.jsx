import React, { useEffect, useState } from "react";
import { Store, ShoppingCart, DollarSign, Ticket } from "lucide-react";

import { getHomeSupport } from "../api/Api";

export default function DashBoardCards() {
  const [stats, setStats] = useState({
    businessCount: 0,
    orderCount: 0,
    unpaidLoans: 0,
    ticketsCount: 0,
  });

  const Headers = {
    "Content-Type": "application/json",
  };
  const payLoad = {
    csId: "admin"
  };

  useEffect(() => {
    const fetchDashboardStats = async () => {
      try {
        const data = await getHomeSupport(payLoad);
        console.log(data);
        if(data.Success) {
          setStats({
            businessCount: data.Success.businessCount || 0,
            orderCount: data.Success.orderCount || 0,
            unpaidLoans: data.Success.unpaidLoans || 0,
            ticketsCount: data.Success.ticketsCount || 0,
          });
        }
        else {
          console.log('Error', data.Error);
        }
      } catch (error) {
        console.error("Error fetching dashboard stats:", error);
      }
    };

    fetchDashboardStats();
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
    <div className="min-h-screen bg-gray-50 p-8">
      <div className="max-w-7xl mx-auto">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">
            Admin Dashboard
          </h1>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {cards.map((card, index) => (
            <div
              key={index}
              className="bg-white rounded-xl shadow-sm border border-gray-200 p-6  ml-7 hover:shadow-md transition-shadow duration-200"
            >
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="text-sm font-semibold text-gray-900 mb-2">
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
  );
}
