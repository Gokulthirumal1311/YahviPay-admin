import { useState } from 'react';
import { Link } from 'react-router-dom';

const TabNavigation = ({ tabs, activeTab, setActiveTab }) => {

  return (

    <div className="">
      {/* Tab Navigation */}
      <div className="bg-purple-50 p-2 rounded-lg">
        <div className="flex space-x-1 flex-wrap gap-y-3">
          { tabs.map((tab, index) => (
            <button
              key={index}
              onClick={() => setActiveTab(tab.id)}
              className={`px-5 py-2 rounded-lg font-medium transition-all duration-200 ${
                activeTab === tab.id
                  ? 'bg-blue-500 text-white shadow-md'
                  : 'text-gray-600 hover:text-gray-800 hover:bg-white/50'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TabNavigation;