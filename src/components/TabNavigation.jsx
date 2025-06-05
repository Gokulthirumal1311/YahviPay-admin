import { useRef } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
const TabNavigation = ({ tabs, activeTab, setActiveTab }) => {
  const scrollRef = useRef(null);
  const scroll = (scrollOffset) => {
    scrollRef.current.scrollBy({
      left: scrollOffset,
      behavior: "smooth",
    });
  };
  return (
    <div className="relative">
      {/* Left Scroll Button */}
      <button
        onClick={() => scroll(-150)}
        className="absolute left-2 top-1/2 transform -translate-y-1/2 z-10 bg-white/80  hover:bg-white/90 text-gray-600 hover:text-gray-800 rounded-full p-2 shadow-lg hover:shadow-xl transition-all duration-200"
      >
        <ChevronLeft size={20} />
      </button>
      {/* Tab Navigation */}
      <div className="bg-purple-50 p-2 rounded-lg overflow-x-auto no-scrollbar" ref={scrollRef}>
        <div className="flex space-x-1 flex-nowrap gap-y-3 whitespace-nowrap">
          {tabs.map((tab, index) => (
            <button
              key={index}
              onClick={() => setActiveTab(tab.id)}
              className={`px-6 py-3 rounded-lg font-medium transition-all duration-200 ${
                activeTab === tab.id
                  ? "bg-blue-500 text-white shadow-md"
                  : "text-gray-600 hover:text-gray-800 hover:bg-white/50"
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>
      </div>
      {/* Right Scroll Button */}
      <button
        onClick={() => scroll(150)}
        className="absolute right-2 top-1/2 transform -translate-y-1/2 z-10 bg-white/80  hover:bg-white/90 text-gray-600 hover:text-gray-800 rounded-full p-2 shadow-lg hover:shadow-xl transition-all duration-200"
      >
        <ChevronRight size={20} />
      </button>
    </div>
  );
};
export default TabNavigation;
