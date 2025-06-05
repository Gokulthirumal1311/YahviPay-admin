import React, { useEffect, useState } from "react";
import { Flag, BarChart3, Users, ShoppingCart } from "lucide-react";

export default function DashboardCards() {
  const [stats, setStats] = useState({
    businessCount: 0,
    orderCount: 0,
    unpaidLoans: 0,
    ticketsCount: 0,
  });

 

  const cards = [
    {
      title: "Business",
      value: stats.businessCount,
      iconBg: "bg-blue-500",
      
      percentColor: "text-green-600",
      icon: <Flag className="text-white w-5 h-5" />,
    },
    {
      title: "Orders",
      value: stats.orderCount,
      iconBg: "bg-pink-500",
    
      icon: <ShoppingCart className="text-white w-5 h-5" />,
    },
    {
      title: "Unpaid Loans",
      value: stats.unpaidLoans,
      iconBg: "bg-red-500",

      icon: <BarChart3 className="text-white w-5 h-5" />,
    },
    {
      title: "Tickets Count",
      value: stats.ticketsCount,
      iconBg: "bg-orange-500",

      icon: <Users className="text-white w-5 h-5" />,
    },
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 p-6">
      {cards.map((item, index) => (
        <div
          key={index}
          className="flex flex-col justify-between bg-white rounded-xl p-5 shadow-md"
        >
          <div className="flex items-center gap-4">
            <div
              className={`w-12 h-12 rounded-lg flex items-center justify-center ${item.iconBg}`}
            >
              {item.icon}
            </div>
            <div>
              <p className="text-sm text-gray-500 font-medium">{item.title}</p>
              <h3 className="text-xl font-semibold text-gray-800">
                {item.value}
              </h3>
            </div>
          </div>
          
        </div>
      ))}
    </div>
  );
}
