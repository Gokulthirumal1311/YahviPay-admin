import React, { useState } from "react";

export const QuickNav = ({ trigger, items = [] }) => {
  const [isOpen, setIsOpen] = useState(false);
  let closeTimeout;

  const handleMouseEnter = () => {
    clearTimeout(closeTimeout);
    setIsOpen(true);
  };

  const handleMouseLeave = () => {
    closeTimeout = setTimeout(() => {
      setIsOpen(false);
    }, 150);
  };

  return (
    <div
      className="relative inline-block"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <span className="text-blue-600 cursor-pointer">{trigger}</span>

      {isOpen && (
        <div className="absolute left-0 mt-2 flex flex-col bg-white shadow-md border rounded p-2 z-10 min-w-[180px] transition-all duration-200">
          {items.map(({ label, icon: Icon, onClick }, index) => (
            <button
              key={index}
              onClick={onClick}
              className="flex items-center gap-2 px-3 py-1 hover:bg-gray-100 text-sm text-gray-800"
            >
              {Icon && <Icon size={16} />}
              {label}
            </button>
          ))}
        </div>
      )}
    </div>
  );
};
