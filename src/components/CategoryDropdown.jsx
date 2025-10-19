import { useState } from "react";
import {
  Apple,
  Cake,
  Brush,
  Briefcase,
  Shirt,
  Armchair,
  ShoppingBag,
  ChevronDown,
} from "lucide-react";

const categories = [
  { name: "Grocery", icon: <Apple className="w-5 h-5" /> },
  { name: "Bakery", icon: <Cake className="w-5 h-5" /> },
  { name: "Makeup", icon: <Brush className="w-5 h-5" /> },
  { name: "Bags", icon: <Briefcase className="w-5 h-5" /> },
  { name: "Clothing", icon: <Shirt className="w-5 h-5" /> },
  { name: "Furniture", icon: <Armchair className="w-5 h-5" /> },
  { name: "Daily Needs", icon: <ShoppingBag className="w-5 h-5" /> },
];

const CategoryDropdown = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [selected, setSelected] = useState(categories[1]); // Default to Bakery

  return (
    <div className="relative inline-block text-left">
      {/* Dropdown button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center gap-2 px-3 py-2 border border-gray-300 rounded-md  bg-white hover:bg-gray-50"
      >
        <span className="text-green-600 flex items-center gap-2">
          {selected.icon}
          {selected.name}
        </span>
        <ChevronDown
          className={`w-4 h-4 transition-transform ${
            isOpen ? "rotate-180" : "rotate-0"
          }`}
        />
      </button>

      {/* Dropdown menu */}
      {isOpen && (
        <div className="absolute left-0 mt-2 w-44 bg-white  rounded-lg shadow-lg max-h-60 overflow-y-auto z-10">
          {categories.map((item) => (
            <button
              key={item.name}
              onClick={() => {
                setSelected(item);
                setIsOpen(false);
              }}
              className="flex items-center w-full gap-3 px-4 py-2 hover:bg-green-50 text-gray-700"
            >
              {item.icon}
              <span>{item.name}</span>
            </button>
          ))}
        </div>
      )}
    </div>
  );
};

export default CategoryDropdown;
