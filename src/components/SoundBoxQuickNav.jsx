import { Store, Megaphone } from 'lucide-react';

export const SoundBoxQuickNav=({ soundBoxId })=>{
  return (
    <div className="relative group inline-block">
      {/* Hover Target */}
      <span className="text-blue-600 cursor-pointer">
        {soundBoxId}
      </span>

      {/* Hover Content */}
      <div className="absolute left-0 mt-2 hidden group-hover:flex flex-col bg-white shadow-md border rounded p-2 z-10 min-w-[180px]">
        <button className="flex items-center gap-2 px-3 py-1 hover:bg-gray-100 text-sm text-gray-800">
          <Store size={16} />
          Merchant Store
        </button>
        <button className="flex items-center gap-2 px-3 py-1 hover:bg-gray-100 text-sm text-gray-800">
          <Megaphone size={16} />
          Marketing Agent
        </button>
      </div>
    </div>
  );
}