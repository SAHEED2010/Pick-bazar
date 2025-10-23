import React from "react";
import Button from "./Button";
import PagesDropdown from "./PagesDropdown";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { toggleMode } from "../redux/reducer/themeSlice";

const NavBar = () => {
  // Get current theme (light or dark) from Redux
  const theme = useSelector((state) => state.theme.mode);

  // Get dispatch to toggle theme
  const dispatch = useDispatch();

  return (
    // ✅ Removed `text-black` because it was overriding dark mode text color
    <nav
      className={`p-4 flex justify-between items-center h-[60px] sticky top-0 z-[1000] ${
        theme === "light"
          ? "bg-white text-gray-800" // Light mode background + text
          : "bg-gray-800 text-white" // Dark mode background + text
      }`}
    >
      {/* ---------- Left side (Logo + Nav Links + Buttons) ---------- */}
      <div className="flex items-center">
        {/* ---------- Logo ---------- */}
        <Link to="/">
          <img
            className="w-30 h-7 ml-5"
            src="src/assets/Logo-new (1).webp"
            alt="Site Logo"
          />
        </Link>

        <Button />

        {/* ---------- Main Navigation Links ---------- */}
        {/* ✅ Replaced fixed text color with conditional text color */}
        <div className="ml-[23rem] flex space-x-10 font-semibold">
          <Link
            to="/shops"
            className={`mt-2 ${
              theme === "light" ? "text-gray-600" : "text-gray-200"
            }`}
          >
            Shop
          </Link>

          <Link
            to="/offer"
            className={`mt-2 ${
              theme === "light" ? "text-gray-600" : "text-gray-200"
            }`}
          >
            Offers
          </Link>

          <Link
            to="/contact"
            className={`mt-2 ${
              theme === "light" ? "text-gray-600" : "text-gray-200"
            }`}
          >
            Contact
          </Link>

          <PagesDropdown />
        </div>

        {/* ---------- Action Buttons ---------- */}
        <Link
          to="/join"
          className="rounded-md bg-emerald-600 px-3 py-2 mt-2 ml-3 h-8 mr-3 text-sm font-medium text-white"
        >
          Join
        </Link>

        <Link
          className="rounded-md bg-emerald-600 px-3 ml-3 py-2 h-10 mt-1 text-sm font-medium text-white"
          to="/sellers"
        >
          Become a seller
        </Link>
      </div>

      {/* ---------- Theme Toggle Button ---------- */}
      <div>
        <button
          onClick={() => dispatch(toggleMode())} // ✅ Dispatch Redux toggle
          className="rounded-md bg-emerald-600 px-3 ml-3 py-2 h-10 mt-1 text-sm font-medium text-white"
        >
          Theme: {theme === "light" ? "Light" : "Dark"}
        </button>
      </div>
    </nav>
  );
};

export default NavBar;
