import React, { useState, useEffect, useRef } from 'react';
import { 
  ChevronDown, 
  ChevronLeft, 
  Menu, 
  LogOut, 
  Circle,
  BarChart3,
  Server,
  Building,
  Video,
  Users,
  Smartphone,
  Store,
  CreditCard,
  DollarSign,
  ShoppingCart,
  Ticket,
  Settings
} from 'lucide-react';
import { useNavigate, useLocation } from 'react-router-dom';

const menuItems = [
  {
    id: 'admin-dashboard',
    title: 'Admin Dashboard',
    icon: BarChart3,
    hasDropdown: false,
    pageUrl: 'AdminDashboard'
  },
//   {
//     id: 'server-metrix',
//     title: 'Server Metrix',
//     icon: Server,
//     hasDropdown: false,
//     pageUrl: 'ServerMetrix'
//   },
//   {
//     id: 'unmapped-business',
//     title: 'Un-mapped Business',
//     icon: Building,
//     hasDropdown: false,
//     pageUrl: 'UnmappedBusiness'
//   },
//   {
//     id: 'video-kyc',
//     title: 'Video Kyc',
//     icon: Video,
//     hasDropdown: false,
//     pageUrl: 'https://kyc.mykaasu.com/sender',
//     isExternal: true
//   },
  {
    id: 'employee-agent',
    title: 'Employee Agent',
    icon: Users,
    hasDropdown: true,
    subItems: [
      {
        category: 'Lead',
        items: [
          { name: 'All Agents', url: 'AllAgents' },
          { name: 'Add Leads', url: 'addleads' },
          { name: 'Get All Leads', url: 'getallleads' }
        ]
      },
      {
        category: 'Marketing Agents',
        items: [
          { name: 'Search Shop', url: 'SearchShop' },
          { name: 'Agent', url: 'Agent' },
          { name: 'Registered Device Count By Agent', url: 'RegisteredDeviceCountByAgent' },
          { name: 'Track Location', url: 'tracklocation' },
          { name: 'KycPending', url: 'getkycpending' }
        ]
      },
      {
        category: 'Loan Agents',
        items: [
          { name: 'Loan Agent Count', url: 'LoanAgentCount' }
        ]
      }
    ]
  },
  {
    id: 'device-services',
    title: 'Device & Services',
    icon: Smartphone,
    hasDropdown: true,
    subItems: [
      {
        category: 'Device Management',
        items: [
          { name: 'Add Devices', url: 'AddDevice' },
          { name: 'Search Devices', url: 'SearchDevice' },
          { name: 'Get Devices By Phone', url: 'DeviceDetails' }
        ]
      },
      {
        category: 'Services',
        items: [
          { name: 'Get All Services', url: 'getallservices' },
          { name: 'Service By Id', url: 'ServiceById' }
        ]
      }
    ]
  },
  {
    id: 'merchant',
    title: 'Merchant',
    icon: Store,
    hasDropdown: true,
    subItems: [
      { name: 'All Merchant by phone', url: 'AllMerchantAccount' },
      { name: 'User Details', url: 'UserDetails' },
      { name: 'Business Details', url: 'BusinessDetails' },
      { name: 'KYC Details', url: 'KycDetails' },
      { name: 'Agents Details', url: 'AgentsDetails' },
      { name: 'Charges', url: 'Charges' },
      { name: 'Set LoanCode', url: 'SetLoanCode' },
      { name: 'Set BusinessVPA', url: 'SetBusinessVpa' },
      { name: 'Set Marketing Agents', url: 'setmarketing' },
      { name: 'Activate/Deactivate Account', url: 'activate-deactivate' },
      { name: 'Status', url: 'accountstatus' },
      { name: 'Set Location', url: 'setlocation' },
      { name: 'Verify Flags', url: 'verifyflags' },
      { name: 'Transaction Details', url: 'TransactionDetails' },
      { name: 'Download Report', url: 'report' }
    ]
  },
  {
    id: 'settlements',
    title: 'Settlements',
    icon: CreditCard,
    hasDropdown: true,
    subItems: [
      { name: 'Settlements Summary By Status', url: 'SettlementDetailsByStatus' },
      { name: 'Settlements Summary By Action', url: 'SettlementDetailsByAction' },
      { name: 'Settlements Summary By Phone', url: 'SettlementDetailsByPhone' }
    ]
  },
  {
    id: 'loans',
    title: 'Loans',
    icon: DollarSign,
    hasDropdown: true,
    subItems: [
      { name: 'New Loans', url: 'newloans' },
      { name: 'Get Unpaid Loans', url: 'getunpaidloans' },
      { name: 'Create Loans', url: 'CreateLoans' },
      { name: 'Loan Details', url: 'loandetails' },
      { name: 'Loans Details By Phone', url: 'loansbyphone' },
      { name: 'Loans Details By Status', url: 'loanbystatus' },
      { name: 'Get Verify Loans', url: 'verifiedloans' },
      { name: 'Followup Loans', url: 'followuploans' },
      { name: 'Above Followup Counter (5)', url: 'getabovecounter' }
    ]
  },
  {
    id: 'orders',
    title: 'Order Details',
    icon: ShoppingCart,
    hasDropdown: true,
    subItems: [
      { name: 'New Orders', url: 'neworders' },
      { name: 'Create Orders', url: 'createorders' },
      { name: 'Get Orders By Phone', url: 'getordersphone' },
      { name: 'Get Orders By Status', url: 'getordersstatus' }
    ]
  },
  {
    id: 'tickets',
    title: 'Tickets',
    icon: Ticket,
    hasDropdown: true,
    subItems: [
      { name: 'New Tickets Status', url: 'NewticketsStatus' },
      { name: 'Create Tickets', url: 'createtickets' },
      { name: 'Get Tickets By Phone', url: 'getticketsphone' }
    ]
  },
  {
    id: 'tools',
    title: 'Tools',
    icon: Settings,
    hasDropdown: true,
    subItems: [
      {
        category: 'Image Link',
        items: [
          { name: 'Get Image Link', url: 'imglink' },
          { name: 'Image-base64', url: 'imagebase64' }
        ]
      },
      {
        category: 'Verification',
        items: [
          { name: 'Aadhaar', url: 'aadhaarverify' },
          { name: 'Bank', url: 'bankverify' },
          { name: 'GST', url: 'gstverify' },
          { name: 'Pincode', url: 'pincodeverify' }
        ]
      }
    ]
  }
];

export const SideNavBar = () => {
  const [isCollapsed, setIsCollapsed] = useState(false);
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);
  const [currentPath, setCurrentPath] = useState('');
  const [username, setUsername] = useState('');
  
  const sidebarRef = useRef(null);
  const dropdownRefs = useRef({});
  
  const navigate = useNavigate();
  const location = useLocation();

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  const toggleCollapse = () => {
    setIsCollapsed(!isCollapsed);
    if (!isCollapsed) {
      setActiveDropdown(null);
    }
  };

  const handleDropdownClick = (itemId) => {
    if (isCollapsed) return;
    
    if (activeDropdown === itemId) {
      setActiveDropdown(null);
    } else {
      setActiveDropdown(itemId);
    }
  };

  const handleNavigation = (url, isExternal = false) => {
    if (isExternal) {
      window.open(url, '_blank', 'noopener,noreferrer');
    } else {
      navigate(`/${url}`);
    }
    setSidebarOpen(false);
  };

  const removeSlash = (path) => {
    return path.split("/").join("");
  };

  const findActiveSection = (currentUrl) => {
    for (const item of menuItems) {
      if (item.pageUrl && removeSlash(item.pageUrl) === currentUrl) {
        return item.id;
      }
      if (item.subItems) {
        for (const subItem of item.subItems) {
          if (subItem.items) {
            for (const nestedItem of subItem.items) {
              if (removeSlash(nestedItem.url) === currentUrl) {
                return item.id;
              }
            }
          } else if (removeSlash(subItem.url) === currentUrl) {
            return item.id;
          }
        }
      }
    }
    return null;
  };

  const handleSignOut = () => {
    navigate("/");
    localStorage.clear();
  };

  // Animation helper for dropdowns
  const animateDropdown = (element, isExpanding) => {
    if (!element) return;
    
    if (isExpanding) {
      element.style.maxHeight = '0px';
      element.style.opacity = '0';
      requestAnimationFrame(() => {
        element.style.maxHeight = `${element.scrollHeight}px`;
        element.style.opacity = '1';
      });
    } else {
      element.style.maxHeight = `${element.scrollHeight}px`;
      requestAnimationFrame(() => {
        element.style.maxHeight = '0px';
        element.style.opacity = '0';
      });
    }
  };

  useEffect(() => {
    const user = localStorage.getItem("username");
    setUsername(user || "Admin User");
  }, []);

  useEffect(() => {
    if (!localStorage.getItem("apikey") || !localStorage.getItem("username")) {
      navigate("/");
    }
    const currentUrl = removeSlash(location.pathname);
    setCurrentPath(currentUrl);
    
    // Auto-expand the section containing the current page
    const activeSection = findActiveSection(currentUrl);
    if (activeSection && !isCollapsed) {
      setActiveDropdown(activeSection);
    }
  }, [location.pathname, navigate, isCollapsed]);

  // Handle dropdown animations
  useEffect(() => {
    Object.keys(dropdownRefs.current).forEach(key => {
      const element = dropdownRefs.current[key];
      if (element) {
        const isActive = activeDropdown === key;
        animateDropdown(element, isActive);
      }
    });
  }, [activeDropdown]);

  const renderSubItems = (subItems, itemId) => {
    if (!subItems) return null;

    return (
      <div
        ref={el => dropdownRefs.current[itemId] = el}
        className="overflow-hidden transition-all duration-300 ease-in-out"
        style={{ maxHeight: '0px', opacity: '0' }}
      >
        <div className="ml-8 mt-1 space-y-1 pb-2">
          {subItems.map((subItem, index) => {
            if (subItem.category) {
              // Nested category structure
              return (
                <div key={subItem.category}>
                  <div className="px-3 py-1 text-xs font-medium text-gray-400 uppercase tracking-wider">
                    {subItem.category}
                  </div>
                  {subItem.items.map((nestedItem, nestedIndex) => (
                    <button
                      key={nestedIndex}
                      onClick={() => handleNavigation(nestedItem.url)}
                      className={`w-full flex items-center space-x-2 px-3 py-2 text-sm rounded-lg transition-colors ${
                        currentPath === removeSlash(nestedItem.url)
                          ? 'bg-blue-50 text-blue-700 font-medium'
                          : 'text-gray-600 hover:bg-gray-50 hover:text-gray-900'
                      }`}
                    >
                      <Circle size={6} className="fill-current" />
                      <span>{nestedItem.name}</span>
                    </button>
                  ))}
                </div>
              );
            } else {
              // Simple structure
              return (
                <button
                  key={index}
                  onClick={() => handleNavigation(subItem.url)}
                  className={`w-full flex items-center space-x-2 px-3 py-2 text-sm rounded-lg transition-colors ${
                    currentPath === removeSlash(subItem.url)
                      ? 'bg-blue-50 text-blue-700 font-medium'
                      : 'text-gray-600 hover:bg-gray-50 hover:text-gray-900'
                  }`}
                >
                  <Circle size={6} className="fill-current" />
                  <span>{subItem.name}</span>
                </button>
              );
            }
          })}
        </div>
      </div>
    );
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-white shadow-sm border-b border-gray-200">
        <div className="flex items-center justify-between px-4 py-3">
          <div className="flex items-center">
            <div className="flex items-center space-x-3">
              <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-sm">MK</span>
              </div>
              {!isCollapsed && (
                <span className="hidden lg:block text-lg font-semibold text-gray-800">
                  MyKaasu Admin
                </span>
              )}
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
              <div className="flex items-center space-x-2 cursor-pointer">
                <span className="hidden md:block text-sm font-medium text-gray-700 group-hover:text-gray-900">
                  {username}
                </span>
                <ChevronDown size={16} className="text-gray-500 group-hover:text-gray-700" />
              </div>
              
              <div className="absolute right-0 mt-2 w-48 bg-white rounded-lg shadow-lg border border-gray-200 py-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                <div className="px-4 py-2 border-b border-gray-100">
                  <h6 className="text-sm font-medium text-gray-900">Support</h6>
                  <span className="text-xs text-gray-500">{username}</span>
                </div>
                <button
                  onClick={handleSignOut}
                  className="w-full flex items-center space-x-2 px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 transition-colors"
                >
                  <LogOut size={16} />
                  <span>Sign Out</span>
                </button>
              </div>
            </div>
          </nav>
        </div>
      </header>

      {/* Sidebar */}
      <aside 
        ref={sidebarRef}
        className={`fixed top-0 left-0 z-40 h-screen pt-16 bg-white border-r border-gray-200 transition-all duration-300 ${
          isCollapsed ? 'w-16' : 'w-64'
        } ${
          sidebarOpen ? 'translate-x-0' : '-translate-x-full'
        } lg:translate-x-0`}
      >
        {/* Collapse Toggle */}
        {/* <div className="hidden lg:flex justify-end p-2 border-b border-gray-200">
          <button
            onClick={toggleCollapse}
            className="p-1 rounded-lg hover:bg-gray-100 transition-colors"
          >
            <ChevronLeft 
              className={`w-5 h-5 text-gray-500 transition-transform duration-300 ${
                isCollapsed ? 'rotate-180' : ''
              }`} 
            />
          </button>
        </div> */}

        {/* Navigation */}
        <div className="flex-1 overflow-y-auto py-4">
          {/* Main Section */}
          {/* {!isCollapsed && (
            <div className="px-4 mb-2">
              <span className="text-xs font-medium text-gray-400 uppercase tracking-wider">Main</span>
            </div>
          )} */}
          
          <nav className="space-y-1 px-2">
            {menuItems.slice(0, 4).map((item) => (
              <div key={item.id}>
                <button
                  onClick={() => 
                    item.hasDropdown 
                      ? handleDropdownClick(item.id) 
                      : handleNavigation(item.pageUrl, item.isExternal)
                  }
                  className={`w-full flex items-center justify-between px-3 py-2.5 text-left rounded-lg transition-colors group hover:bg-gray-50 ${
                    activeDropdown === item.id || currentPath === removeSlash(item.pageUrl || '') 
                      ? 'bg-gray-50 text-blue-700' 
                      : 'text-gray-700'
                  }`}
                  title={isCollapsed ? item.title : ''}
                >
                  <div className="flex items-center space-x-3">
                    <item.icon className="w-5 h-5" />
                    {!isCollapsed && (
                      <span className="font-medium">{item.title}</span>
                    )}
                  </div>
                  {item.hasDropdown && !isCollapsed && (
                    <ChevronDown 
                      className={`w-4 h-4 text-gray-400 transition-transform duration-300 ${
                        activeDropdown === item.id ? 'rotate-180' : ''
                      }`} 
                    />
                  )}
                </button>
                
                {item.hasDropdown && !isCollapsed && renderSubItems(item.subItems, item.id)}
              </div>
            ))}
          </nav>

          {/* Management Section */}
          {/* {!isCollapsed && (
            <div className="px-4 mt-6 mb-2">
              <span className="text-xs font-medium text-gray-400 uppercase tracking-wider">Management</span>
            </div>
          )} */}
          
          <nav className="space-y-1 px-2">
            {menuItems.slice(4).map((item) => (
              <div key={item.id}>
                <button
                  onClick={() => 
                    item.hasDropdown 
                      ? handleDropdownClick(item.id) 
                      : handleNavigation(item.pageUrl, item.isExternal)
                  }
                  className={`w-full flex items-center justify-between px-3 py-2.5 text-left rounded-lg transition-colors group hover:bg-gray-50 ${
                    activeDropdown === item.id || currentPath === removeSlash(item.pageUrl || '') 
                      ? 'bg-gray-50 text-blue-700' 
                      : 'text-gray-700'
                  }`}
                  title={isCollapsed ? item.title : ''}
                >
                  <div className="flex items-center space-x-3">
                    <item.icon className="w-5 h-5" />
                    {!isCollapsed && (
                      <span className="font-medium">{item.title}</span>
                    )}
                  </div>
                  {item.hasDropdown && !isCollapsed && (
                    <ChevronDown 
                      className={`w-4 h-4 text-gray-400 transition-transform duration-300 ${
                        activeDropdown === item.id ? 'rotate-180' : ''
                      }`} 
                    />
                  )}
                </button>
                
                {item.hasDropdown && !isCollapsed && renderSubItems(item.subItems, item.id)}
              </div>
            ))}
          </nav>
        </div>
      </aside>

      {/* Main Content Area */}
      <main className={`pt-16 transition-all duration-300 ${isCollapsed ? 'lg:ml-16' : 'lg:ml-64'}`}>
        <div className="p-6">
          <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
            <h1 className="text-2xl font-bold text-gray-900 mb-4">Dashboard Content</h1>
            <p className="text-gray-600">
              Current page: <span className="font-medium text-blue-600">{currentPath}</span>
            </p>
            <p className="text-sm text-gray-500 mt-2">
              Sidebar can be collapsed on desktop and has smooth animations. Only one section can be expanded at a time.
            </p>
          </div>
        </div>
      </main>

      {/* Mobile Sidebar Overlay */}
      {sidebarOpen && (
        <div 
          className="fixed inset-0 z-30 bg-black bg-opacity-50 lg:hidden transition-opacity duration-300"
          onClick={toggleSidebar}
        />
      )}
    </div>
  );
}