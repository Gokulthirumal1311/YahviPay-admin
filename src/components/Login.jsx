
import React, { useEffect, useState } from 'react';
import { Sidebar } from './Sidebar';
// import { Sidebar } from './Sidebar';

function Login() {
  const [role, setRole] = useState('admin');

  useEffect(() => {
    const savedRole = localStorage.getItem('userRole');
    if (savedRole)setRole(savedRole);
  }, []);

  const handleRoleChange = (selectedRole) => {
    setRole(selectedRole);
    localStorage.setItem('userRole', selectedRole);
  };

  return (
    <div className="flex h-screen">
      <Sidebar role={role} />
      <div className="flex-1 p-6">
        <div className="flex justify-between items-center">
          <h1 className="text-3xl font-bold text-gray-800">YahviPay Dashboard</h1>
          <div className="flex gap-2">
            <button
              className={`px-4 py-1 rounded-full text-sm font-medium border ${
                role === 'admin' ? 'bg-blue-500 text-white' : 'text-gray-700 border-gray-300'
              }`}
              onClick={() => handleRoleChange('admin')}
            >
              Admin
            </button>
            <button
              className={`px-4 py-1 rounded-full text-sm font-medium border ${
                role === 'support' ? 'bg-blue-500 text-white' : 'text-gray-700 border-gray-300'
              }`}
              onClick={() => handleRoleChange('support')}
            >
              Support
            </button>
          </div>
        </div>

        <p className="mt-6 text-gray-600">
          Current role: <strong className="capitalize">{role}</strong>
        </p>
      </div>
    </div>
  );
}

export default Login;
