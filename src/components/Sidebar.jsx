import React from 'react';

export const Sidebar = ({ role }) => {
  return (
    <div className="w-64 bg-gray-800 text-white h-screen p-4">
      <h2 className="text-xl font-semibold mb-6">YahviPay</h2>
      <nav className="space-y-3">
        <div>Dashboard</div>
        <div>Transactions</div>
        {role === 'admin' && <div>Admin Panel</div>}
        {role === 'support' && <div>Support Tickets</div>}
        <div>Settings</div>
      </nav>
    </div>
  );
};
