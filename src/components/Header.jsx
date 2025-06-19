import React, { useState } from 'react'
import { Menu, ChevronDown, LogOut } from 'lucide-react';

export const Header = () => {

    const [sidebarOpen, setSidebarOpen] = useState(false);

    const [username, setUsername] = useState('Admin User');

    const toggleSidebar = () => {
        setSidebarOpen(!sidebarOpen);
    };
    const handleSignOut = () => {
        alert('Sign out clicked');
    };
    return (
    <>
        <header className="layout-header header-background-color">
                <div className="flex items-center justify-between px-6 py-4">
                    <div className="flex items-center space-x-4">
                        <div className="flex items-center space-x-3">
                            <div className="w-10 h-10 rounded-full flex items-center justify-center shadow-lg">
                                {/* <span className="text-white font-bold text-lg">YP</span> */}
                                <img src="https://www.yahvipay.com/assets/favIconYahvi.png" alt="" className='rounded-full'/>
                                {/* <link rel="icon" type="image/png" href="assets/favIconYahvi.png" style="width: 32px; height: 32px; border-radius: 50%; display: block;"></link> */}
                            </div>
                            <div className="hidden lg:block">
                                <h1 className="text-xl font-bold text-gray-800">YahviPay Admin</h1>
                                <p className="text-sm text-gray-500">Management Portal</p>
                            </div>
                        </div>
                        <button
                            onClick={toggleSidebar}
                            className="ml-4 p-2 text-gray-600 hover:text-gray-900 hover:bg-gray-100 rounded-lg transition-colors lg:hidden"
                        >
                            <Menu size={20} />
                        </button>
                    </div>

                    <nav className="ml-auto">
                        <div className="relative group">
                            <div className="flex items-center space-x-3 px-4 py-2 rounded-lg hover:bg-gray-50 cursor-pointer transition-colors">
                                <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-blue-600 rounded-full flex items-center justify-center">
                                    <span className="text-white font-semibold text-sm">
                                        {username.charAt(0).toUpperCase()}
                                    </span>
                                </div>
                                <div className="hidden md:block text-left">
                                    <div className="text-sm font-semibold text-gray-800">{username}</div>
                                    <div className="text-xs text-gray-500">Administrator</div>
                                </div>
                                <ChevronDown size={16} className="text-gray-500 group-hover:text-gray-700" />
                            </div>
                            
                            <div className="absolute right-0 mt-2 w-56 bg-white rounded-xl shadow-lg border border-gray-200 py-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
                                <div className="px-4 py-3 border-b border-gray-100">
                                    <div className="text-sm font-semibold text-gray-900">{username}</div>
                                    <div className="text-xs text-gray-500">administrator@mykaasu.com</div>
                                </div>
                                <button
                                    onClick={handleSignOut}
                                    className="w-full flex items-center space-x-3 px-4 py-3 text-sm text-gray-700 hover:bg-red-50 hover:text-red-600 transition-colors"
                                >
                                    <LogOut size={16} />
                                    <span>Sign Out</span>
                                </button>
                            </div>
                        </div>
                    </nav>
                </div>
        </header>
    </>
    )
}
