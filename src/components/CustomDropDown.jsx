import { Fragment } from "react";
import { Menu, MenuButton, MenuItem, MenuItems, Transition } from "@headlessui/react";
import { ChevronDown, Check } from "lucide-react";

const statusOptions = [
  { label: "CUSTOMER", value: "customer" },
  { label: "SYSTEM", value: "system" },
];

export default function CustomDropdown({ selected, setSelected }) {
  return (
    <Menu as="div" className="relative inline-block text-left">
      <div>
        <MenuButton className="inline-flex items-center justify-between w-52 rounded-xl border border-gray-300 bg-white/20 backdrop-blur-md px-4 py-2 text-sm font-medium text-gray-800 shadow-lg hover:shadow-xl hover:bg-white/30 transition duration-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2">
          {selected || "Select Status"}
          <ChevronDown className="ml-2 h-4 w-4 transition-transform duration-200 group-hover:rotate-180" />
        </MenuButton>
      </div>

      <Transition
        as={Fragment}
        enter="transition ease-out duration-150"
        enterFrom="opacity-0 scale-90"
        enterTo="opacity-100 scale-100"
        leave="transition ease-in duration-100"
        leaveFrom="opacity-100 scale-100"
        leaveTo="opacity-0 scale-90"
      >
        <MenuItems className="absolute z-20 mt-2 w-52 origin-top-right rounded-xl bg-white/90 backdrop-blur-md shadow-2xl ring-1 ring-black/10 focus:outline-none">
          <div className="p-1">
            {statusOptions.map((option) => (
              <MenuItem key={option.value}>
                {({ active }) => (
                  <button
                    onClick={() => setSelected(option.label)}
                    className={`${
                      active
                        ? "bg-gradient-to-r from-blue-600 to-indigo-500 text-white"
                        : "text-gray-800"
                    } group flex w-full items-center rounded-lg px-4 py-2 text-sm transition duration-200`}
                  >
                    {selected === option.label && (
                      <Check className="mr-2 h-4 w-4 text-green-500" />
                    )}
                    {option.label}
                  </button>
                )}
              </MenuItem>
            ))}
          </div>
        </MenuItems>
      </Transition>
    </Menu>
  );
}
