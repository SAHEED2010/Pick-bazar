import { useState, useRef, useEffect } from "react";

const pages = [
  "Flash Sale",
  "Manufacturers/Publishers",
  "Authors",
  "FAQ",
  "Terms & Conditions",
  "Customer Refund Policy",
  "Vendor Refund Policy",
];

const PagesDropdown = () => {
  const [isOpen, setIsOpen] = useState(false);
  const menuRef = useRef();

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (menuRef.current && !menuRef.current.contains(e.target)) {
        setIsOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div className="relative inline-block mt-2" ref={menuRef}>
      {/* You already have the button, so just toggle isOpen when clicked */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="text-gray-600 hover:text-green-600     font-medium flex items-center gap-1"
      >
        Pages
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className={`w-4 h-4 transition-transform ${
            isOpen ? "rotate-180" : "rotate-0"
          }`}
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={2}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M19 9l-7 7-7-7"
          />
        </svg>
      </button>

      {/* Dropdown menu */}
      {isOpen && (
        <div className="absolute left-0 mt-2 w-64 bg-white  rounded-lg shadow-lg z-20">
          {pages.map((item) => (
            <button
              key={item}
              className="w-full text-left px-4 py-2 text-gray-700 hover:bg-green-50"
            >
              {item}
            </button>
          ))}
        </div>
      )}
    </div>
  );
};

export default PagesDropdown;
