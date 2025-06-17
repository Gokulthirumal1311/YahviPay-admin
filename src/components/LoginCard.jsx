import React, { useState } from 'react';

export const LoginCard = () => {
  const [role, setRole] = useState('admin');

  const handleRoleChange = (selectedRole) => {
    setRole(selectedRole);
  };

  return (
    <>
      <h3 className="mb-6 text-xl font-medium text-center text-gray-500 dark:text-gray-200">
        YahviPay Admin
      </h3>

      <div className="w-full max-w-sm mx-auto overflow-hidden bg-white rounded-lg shadow-md dark:bg-gray-800">
        <div className="px-6 py-4">
          <div className="flex justify-center mx-auto mb-4">
            <img
              className="w-auto h-7 sm:h-8"
              src="https://www.yahvipay.com/assets/favIconYahvi.png"
              alt="Logo"
            />
          </div>

          {/* Role Toggle */}
          <div className="flex justify-center gap-4 mb-4">
            <button
              className={`px-4 py-1 rounded-full text-sm font-medium border ${
                role === 'admin'
                  ? 'bg-blue-500 text-white'
                  : 'text-gray-600 border-gray-300'
              }`}
              onClick={() => handleRoleChange('admin')}
              type="button"
            >
              Admin
            </button>
            <button
              className={`px-4 py-1 rounded-full text-sm font-medium border ${
                role === 'support'
                  ? 'bg-blue-500 text-white'
                  : 'text-gray-600 border-gray-300'
              }`}
              onClick={() => handleRoleChange('support')}
              type="button"
            >
              Support
            </button>
          </div>

          <h3 className="text-xl font-medium text-center text-gray-600 dark:text-gray-200">
            Login to Your {role === 'admin' ? 'Admin' : 'Support'} Account
          </h3>
          <p className="mt-1 text-center text-gray-500 dark:text-gray-400">
            Enter your username & password to login
          </p>

          <form>
            <div className="w-full mt-4">
              <input
                type="text"
                placeholder="Username"
                aria-label="Username"
                className="block w-full px-4 py-2 mt-2 text-gray-700 placeholder-gray-500 bg-white border rounded-lg dark:bg-gray-800 dark:border-gray-600 dark:placeholder-gray-400 focus:border-blue-400 dark:focus:border-blue-300 focus:ring-opacity-40 focus:outline-none focus:ring focus:ring-blue-300"
              />
            </div>

            <div className="w-full mt-4">
              <input
                type="password"
                placeholder="Password"
                aria-label="Password"
                className="block w-full px-4 py-2 mt-2 text-gray-700 placeholder-gray-500 bg-white border rounded-lg dark:bg-gray-800 dark:border-gray-600 dark:placeholder-gray-400 focus:border-blue-400 dark:focus:border-blue-300 focus:ring-opacity-40 focus:outline-none focus:ring focus:ring-blue-300"
              />
            </div>

            <div className="flex items-center justify-between mt-6">
              <button
                type="submit"
                className="w-full px-6 py-2 text-sm font-medium tracking-wide text-white transition-colors duration-300 transform bg-blue-500 rounded-lg hover:bg-blue-400 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-50"
              >
                Login as {role.charAt(0).toUpperCase() + role.slice(1)}
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};
