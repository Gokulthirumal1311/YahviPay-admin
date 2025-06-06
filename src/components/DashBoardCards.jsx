import React, { useEffect, useState } from "react";
import { Flag, BarChart3, Users, ShoppingCart } from "lucide-react";

export default function DashboardCards() {
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
      iconBg: "bg-gradient-to-tr from-blue-500 to-blue-700",
      icon: <Flag className="text-white w-6 h-6" />,
    },
    {
      title: "Orders",
      value: stats.orderCount,
      iconBg: "bg-gradient-to-tr from-pink-500 to-pink-700",
      icon: <ShoppingCart className="text-white w-6 h-6" />,
    },
    {
      title: "Unpaid Loans",
      value: stats.unpaidLoans,
      iconBg: "bg-gradient-to-tr from-red-500 to-red-700",
      icon: <BarChart3 className="text-white w-6 h-6" />,
    },
    {
      title: "Tickets Count",
      value: stats.ticketsCount,
      iconBg: "bg-gradient-to-tr from-orange-500 to-orange-700",
      icon: <Users className="text-white w-6 h-6" />,
    },
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 p-8">
      {cards.map((item, index) => (
        <div
          key={index}
          className="flex flex-col justify-between bg-white/70 backdrop-blur-md border border-gray-200 rounded-2xl p-6 shadow-xl transition hover:scale-[1.02] hover:shadow-2xl group"
        >
          <div className="flex items-center gap-5">
            <div
              className={`w-14 h-14 rounded-xl flex items-center justify-center ${item.iconBg} shadow-lg`}
            >
              {item.icon}
            </div>
            <div>
              <p className="text-base text-gray-600 font-semibold">{item.title}</p>
              <h3 className="text-3xl font-bold text-gray-900">{item.value}</h3>
            </div>
          </div>
          <div className="mt-5 h-1 rounded-full bg-gradient-to-r from-indigo-500 to-blue-500 opacity-70 group-hover:opacity-100 transition" />
        </div>
      ))}
    </div>
  );
}
