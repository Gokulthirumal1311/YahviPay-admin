import React, { useState } from 'react';
import { ChevronDown, ChevronLeft, BarChart3, Users, MessageSquare, User, Layers, Palette, PieChart, Type, MousePointer, Table, FileText, Receipt, UserCircle } from 'lucide-react';

const Layout = () => {
  const [activeDropdown, setActiveDropdown] = useState(null);
  const [isCollapsed, setIsCollapsed] = useState(false);

  const menuItems = [
    {
      id: 'dashboard',
      title: 'Dashboard',
      icon: Table,
      hasDropdown: false,
    },
    {
      id: 'social-apps',
      title: 'Server Metrix',
      icon: Table,
      hasDropdown: true,
      subItems: ['Server Status', 'Performance Metrics', 'System Health']
    },
    {
      id: 'contacts',
      title: 'Un-mapped Business',
      icon: Table,
      hasDropdown: false
    },
    {
      id: 'components',
      title: 'Video Kyc',
      icon: Table,
      hasDropdown: false,
    },
    {
      id: 'ui-elements',
      title: 'Employee Agent',
      icon: Table,
      hasDropdown: true,
      subItems: ['All Agents', 'Add leads', 'Get All leads']
    },
    {
      id: 'chart',
      title: 'Device & Services',
      icon: Table,
      hasDropdown: true,
      subItems: ['Add Devices', 'Search Devices', 'Get Devices By Phone']
    },
    {
      id: 'font-icons',
      title: 'Merchant',
      icon: Table,
      hasDropdown: true,
      subItems: ['All Merchant by phone', 'User Details', 'Business Details']
    },
    {
      id: 'drag-drop',
      title: 'Settlements',
      icon: Table,
      hasDropdown: true,
      subItems: ['Settlements Summary By Status', 'Settlements Summary By Action', 'Settlements Summary By Phone']
    },
    {
      id: 'tables',
      title: 'Loans',
      icon: Table,
      hasDropdown: true,
      subItems: ['New Loans', 'get Unpaid Loans', 'Create Loans']
    },
    {
      id: 'forms',
      title: 'Order Details',
      icon: Table,
      hasDropdown: true,
      subItems: ['New Orders', 'Create Orders', 'Get Orders By Phone', 'Get Orders By Status']
    },
    {
      id: 'invoice',
      title: 'Tickets',
      icon: Table,
      hasDropdown: true,
      subItems: ['New Ticket Status', 'Create Tickets', 'Get Tickets By Phone']
    },
    {
      id: 'user-profile',
      title: 'Tools',
      icon: Table,
      hasDropdown: true,
      subItems: ['Get Image Link', 'Image-base64']
    }
  ];

  const handleDropdownClick = (itemId) => {
    if (activeDropdown === itemId) {
      setActiveDropdown(null);
    } else {
      setActiveDropdown(itemId);
    }
  };

  const handleSingleItemClick = (itemId) => {
    setActiveDropdown(null);
    console.log(`Navigating to ${itemId}`);
  };

  return (
    <div className={`bg-white border-r border-gray-200 transition-all duration-300 ${isCollapsed ? 'w-16' : 'w-64'} h-screen flex flex-col`}>
      {/* Header */}
      <div className="p-4 border-b border-gray-200 flex items-center justify-between">
        {!isCollapsed && (
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center">
              <div className="w-4 h-4 bg-white rounded transform rotate-45"></div>
            </div>
            <span className="text-xl font-semibold text-gray-800">YahviPay Admin</span>
          </div>
        )}
        <button
          onClick={() => setIsCollapsed(!isCollapsed)}
          className="p-1 rounded-lg hover:bg-gray-100 transition-colors"
        >
          <ChevronLeft className={`w-5 h-5 text-gray-500 transition-transform ${isCollapsed ? 'rotate-180' : ''}`} />
        </button>
      </div>

      {/* Navigation */}
      <div className="flex-1 overflow-y-auto py-4">
        {/* Apps Section */}
        {/* {!isCollapsed && (
          <div className="px-4 mb-2">
            <span className="text-xs font-medium text-gray-400 uppercase tracking-wider">Apps</span>
          </div>
        )}
         */}
        <nav className="space-y-1 px-2">
          {menuItems.slice(0, 3).map((item) => (
            <div key={item.id}>
              <button
                onClick={() => item.hasDropdown ? handleDropdownClick(item.id) : handleSingleItemClick(item.id)}
                className={`w-full flex items-center justify-between px-3 py-2.5 text-left rounded-lg transition-colors group hover:bg-gray-50 ${
                  activeDropdown === item.id ? 'bg-gray-50' : ''
                }`}
              >
                <div className="flex items-center space-x-3">
                  <item.icon className="w-5 h-5 text-gray-500" />
                  {!isCollapsed && (
                    <span className="text-gray-700 font-medium">{item.title}</span>
                  )}
                </div>
                {item.hasDropdown && !isCollapsed && (
                  <ChevronDown className={`w-4 h-4 text-gray-400 transition-transform ${
                    activeDropdown === item.id ? 'rotate-180' : ''
                  }`} />
                )}
              </button>
              
              {/* Dropdown Items */}
              {item.hasDropdown && activeDropdown === item.id && !isCollapsed && (
                <div className="ml-8 mt-1 space-y-1">
                  {item.subItems.map((subItem, index) => (
                    <button
                      key={index}
                      className="block w-full text-left px-3 py-2 text-sm text-gray-600 rounded-lg hover:bg-gray-50 transition-colors"
                    >
                      {subItem}
                    </button>
                  ))}
                </div>
              )}
            </div>
          ))}
        </nav>

        {/* More Section */}
        {/* {!isCollapsed && (
          <div className="px-4 mt-6 mb-2">
            <span className="text-xs font-medium text-gray-400 uppercase tracking-wider">More</span>
          </div>
        )} */}
        
        <nav className="space-y-1 px-2">
          {menuItems.slice(3).map((item) => (
            <div key={item.id}>
              <button
                onClick={() => item.hasDropdown ? handleDropdownClick(item.id) : handleSingleItemClick(item.id)}
                className={`w-full flex items-center justify-between px-3 py-2.5 text-left rounded-lg transition-colors group hover:bg-gray-50 ${
                  activeDropdown === item.id ? 'bg-gray-50' : ''
                }`}
              >
                <div className="flex items-center space-x-3">
                  <item.icon className="w-5 h-5 text-gray-500" />
                  {!isCollapsed && (
                    <span className="text-gray-700 font-medium">{item.title}</span>
                  )}
                </div>
                {item.hasDropdown && !isCollapsed && (
                  <ChevronDown className={`w-4 h-4 text-gray-400 transition-transform ${
                    activeDropdown === item.id ? 'rotate-180' : ''
                  }`} />
                )}
              </button>
              
              {/* Dropdown Items */}
              {item.hasDropdown && activeDropdown === item.id && !isCollapsed && (
                <div className="ml-8 mt-1 space-y-1">
                  {item.subItems.map((subItem, index) => (
                    <button
                      key={index}
                      className="block w-full text-left px-3 py-2 text-sm text-gray-600 rounded-lg hover:bg-gray-50 transition-colors"
                    >
                      {subItem}
                    </button>
                  ))}
                </div>
              )}
            </div>
          ))}
        </nav>
      </div>
    </div>
  );
};

export default Layout;