import React, { useState, useEffect, useRef } from 'react';
import { ChevronDown, ChevronLeft, Menu, LogOut, Circle, BarChart3, Server, Building, Video, Users, Smartphone, Store, CreditCard, 
  DollarSign,
  ShoppingCart,
  Ticket,
  Settings
} from 'lucide-react';
import { Link } from 'react-router-dom';

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
          
          { name: 'Get All Leads', url: 'GetAllLeads' },
          { name: 'Leads Details', url: 'LeadsDetails' },
        ]
      },
      {
        category: 'Marketing Agents',
        items: [
          { name: 'Get All Agents', url: 'GetAllAgents' },
          { name: 'Agent Details', url: 'AgentsDetails' },
          { name: 'Register Devices Count', url: 'RegisterDevicesCount' },
          { name: 'Track Location', url: 'TrackLocation' },
          { name: 'Search Shop', url: 'SearchShop' },
          { name: 'KYC Pending', url: 'KYCPending' }
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
          { name: 'Get All Services', url: 'GetAllServices' },
          { name: 'Service By Id', url: 'GetServicesByID' }
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
      { name: 'Merchant by Details', url: 'MerchantDetails' },
      { name: 'Set Location', url: 'setlocation' },
      { name: 'Verify Flags', url: 'VerifyFlags' },
      { name: 'Transaction Details', url: 'TransactionDetails' },
      
      { name: 'Download Report', url: 'DownloadReport' }
    ]
  },
  {
    id: 'settlements',
    title: 'Settlements',
    icon: CreditCard,
    hasDropdown: true,
    subItems: [
      { name: 'Settlements By Status', url: 'SettlementsByStatus' },
      { name: 'Settlements By Action', url: 'SettlementsByAction' },
      { name: 'Settlements By Phone', url: 'SettlementsByPhoneNumber' }
    ]
  },
//   {
//     id: 'loans',
//     title: 'Loans',
//     icon: DollarSign,
//     hasDropdown: true,
//     subItems: [
//       { name: 'New Loans', url: 'newloans' },
//       { name: 'Get Unpaid Loans', url: 'getunpaidloans' },
//       { name: 'Create Loans', url: 'CreateLoans' },
//       { name: 'Loan Details', url: 'loandetails' },
//       { name: 'Loans Details By Phone', url: 'loansbyphone' },
//       { name: 'Loans Details By Status', url: 'loanbystatus' },
//       { name: 'Get Verify Loans', url: 'verifiedloans' },
//       { name: 'Followup Loans', url: 'followuploans' },
//       { name: 'Above Followup Counter (5)', url: 'getabovecounter' }
//     ]
//   },
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

    const [sidebarOpen, setSidebarOpen] = useState(false);
    const [activeDropdown, setActiveDropdown] = useState(null);
    const [currentPath, setCurrentPath] = useState('AdminDashboard'); // Default to admin dashboard
    
    const sidebarRef = useRef(null);
    const dropdownRefs = useRef({});

    const toggleSidebar = () => {
        setSidebarOpen(!sidebarOpen);
    };

    const handleDropdownClick = (itemId) => {
       setActiveDropdown(activeDropdown === itemId ? null : itemId);
    };

    const handleNavigation = (url, isExternal = false) => {
        if (isExternal) {
            window.open(url, '_blank', 'noopener,noreferrer');
        } 
        else {
            // Simulate navigation for demo
            setCurrentPath(url.toLowerCase());
        }
        setSidebarOpen(false);
    };

    const removeSlash = (path) => {
        return path.split("/").join("").toLowerCase();
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
        alert('Sign out clicked');
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
        // Auto-expand the section containing the current page
        const activeSection = findActiveSection(currentPath);
        if (activeSection) {
            setActiveDropdown(activeSection);
        }
    }, [currentPath]);

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
                <div className="ml-4 mt-3 space-y-1 pb-2">
                    {subItems.map((subItem, index) => {
                        if (subItem.category) {
                            // Nested category structure
                            return (
                                <div key={subItem.category}>
                                    <div className="py-3 text-md font-semibold text-gray-900 uppercase tracking-wider">
                                        {subItem.category}
                                    </div>
                                    {subItem.items.map((nestedItem, nestedIndex) => (
                                        <Link
                                            key={nestedIndex}
                                            onClick={() => handleNavigation(nestedItem.url)}
                                            to = {`/${nestedItem.url}`}
                                            className={`w-full flex items-center space-x-3 px-4 py-2.5 text-left h-full text-md rounded-lg transition-all duration-200 ${
                                                currentPath === removeSlash(nestedItem.url)
                                                    ? 'bg-blue-600 text-white font-medium shadow-sm'
                                                    : 'text-gray-800 hover:bg-gray-100 hover:text-gray-800'
                                            }`}
                                        >
                                            <div>
                                                <div className={`w-2 h-2 rounded-full ${
                                                    currentPath === removeSlash(nestedItem.url)
                                                        ? 'bg-white'
                                                        : 'bg-gray-400'
                                                }`} />
                                            </div>
                                            <span>{nestedItem.name}</span>
                                        </Link>
                                    ))}
                                </div>
                            );
                        } 
                        else {
                            // Simple structure
                            return (
                                <Link
                                    key={index}
                                    to = {`/${subItem.url}`}
                                    onClick={() => handleNavigation(subItem.url)}
                                    className={`w-full h-full flex items-center text-start space-x-3 py-3 px-2.5 text-md rounded-lg transition-all duration-200 ${
                                        currentPath === removeSlash(subItem.url)
                                            ? 'bg-blue-600 text-white font-medium shadow-sm'
                                            : 'text-gray-900 hover:bg-gray-100 hover:text-gray-800'
                                    }`}
                                >
                                    <div>
                                        <div className={`w-2 h-2 rounded-full ${
                                            currentPath === removeSlash(subItem.url)
                                                ? 'bg-white'
                                                : 'bg-gray-400'
                                        }`} />
                                    </div>
                                    <span>{subItem.name}</span>
                                </Link>
                            );
                        }
                    })}
                </div>
            </div>
        );
    };

    return (
        <>
            {/* Sidebar */}
            <div 
                ref={sidebarRef}
                className={`overflow-hidden overflow-y-auto scrollbar-thin fixed bottom-2 top-25 bg-white border-r border-gray-200 shadow-lg shadow-blue-100/50 backdrop-blur-sm transition-all duration-300 
                    w-72 ${ sidebarOpen ? 'translate-x-0' : '-translate-x-[110%]' } lg:translate-x-0 rounded-xl` }
            >
                {/* Navigation */}
                <div className="flex-1 py-6">
                    <nav className="space-y-4 px-4">
                        { menuItems.map((item) => (
                            <div key={item.id} className="group">
                                <Link 
                                    onClick={() => 
                                        item.hasDropdown 
                                            ? handleDropdownClick(item.id) 
                                            : handleNavigation(item.pageUrl, item.isExternal)
                                    }
                                    to={!item.hasDropdown && `/${item.pageUrl}`}
                                    className={`w-full flex items-center justify-between px-4 py-3 text-left rounded-xl font-medium transition-all duration-200 ${
                                        activeDropdown === item.id || currentPath === removeSlash(item.pageUrl || '') 
                                            ? 'bg-gradient-to-r from-blue-600 to-blue-700 text-white shadow-lg shadow-blue-200' 
                                            : 'text-gray-700 hover:bg-gray-100 hover:text-gray-900'
                                    }`}
                                >
                                    
                                    <div className="flex items-center space-x-3">
                                        <item.icon className={`w-5 h-5 ${
                                            activeDropdown === item.id || currentPath === removeSlash(item.pageUrl || '')
                                                ? 'text-white'
                                                : 'text-gray-500'
                                        }`} />
                                            <span className="text-sm">{item.title}</span>
                                        
                                    </div>
                                    {item.hasDropdown && (
                                        <ChevronDown 
                                            className={`w-4 h-4 transition-transform duration-300 ${
                                                activeDropdown === item.id ? 'rotate-180' : ''
                                            } ${
                                                activeDropdown === item.id 
                                                    ? 'text-white' 
                                                    : 'text-gray-400'
                                            }`} 
                                        />
                                    )}
                                </Link>
                                
                                {item.hasDropdown && renderSubItems(item.subItems, item.id)}
                            </div>
                        ))}
                    </nav>
                </div>
            </div>

            {/* Mobile Sidebar Overlay */}
            {sidebarOpen && (
                <div 
                    className="fixed inset-0 z-30 bg-black bg-opacity-50 lg:hidden transition-opacity duration-300"
                    onClick={toggleSidebar}
                />
            )}
        </>
    );
};