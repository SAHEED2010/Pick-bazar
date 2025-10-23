import React from "react";
import {
  Facebook,
  Twitter,
  Instagram,
  Mail,
  Phone,
  MapPin,
} from "lucide-react";
import { useSelector } from "react-redux";

const Footer = () => {
  const theme = useSelector((state) => state.theme.mode);

  return (
    <footer
      className={`${
        theme === "light"
          ? "bg-white text-gray-800 border-gray-200"
          : "bg-gray-900 text-gray-200 border-gray-700"
      } border-t mt-10 shadow-inner transition-all duration-300`}
    >
      <div className="max-w-7xl mx-auto px-6 py-12 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10">
        {/* ==================== 1️⃣ Logo & Contact ==================== */}
        <div>
          <div className="flex items-center gap-2 mb-4">
            <div className="w-[12rem] h-15 flex items-center justify-center rounded-full font-bold text-l">
              <img src="src/assets/Logo-new (1).webp" alt="Logo" />
            </div>
          </div>

          {/* ✅ Text color switches manually */}
          <p
            className={`text-sm flex items-start gap-2 mb-2 ${
              theme === "light" ? "text-gray-600" : "text-gray-400"
            }`}
          >
            <MapPin size={16} className="mt-0.5" /> NY State Thruway, New York,
            USA
          </p>

          <p
            className={`text-sm flex items-center gap-2 mb-1 ${
              theme === "light" ? "text-gray-600" : "text-gray-400"
            }`}
          >
            <Mail size={16} /> demo@demo.com
          </p>

          <p
            className={`text-sm flex items-center gap-2 ${
              theme === "light" ? "text-gray-600" : "text-gray-400"
            }`}
          >
            <Phone size={16} /> +129290122122
          </p>

          {/* ✅ Social Icons */}
          <div
            className={`flex gap-3 mt-4 ${
              theme === "light" ? "text-gray-600" : "text-gray-400"
            }`}
          >
            {[Facebook, Twitter, Instagram].map((Icon, i) => (
              <a
                key={i}
                href="#"
                className={`hover:text-emerald-600 transition ${
                  theme === "light"
                    ? "hover:text-emerald-600"
                    : "hover:text-emerald-400"
                }`}
              >
                <Icon size={18} />
              </a>
            ))}
          </div>
        </div>

        {/* ==================== 2️⃣ Explore ==================== */}
        <div>
          <h3 className="font-semibold mb-4 uppercase tracking-wide">
            Explore
          </h3>
          <ul
            className={`space-y-3 text-sm ${
              theme === "light" ? "text-gray-600" : "text-gray-400"
            }`}
          >
            {["Shops", "Authors", "Flash Deals", "Coupon"].map((item) => (
              <li key={item}>
                <a
                  href="#"
                  className={`hover:text-emerald-600 transition ${
                    theme === "light"
                      ? "hover:text-emerald-600"
                      : "hover:text-emerald-400"
                  }`}
                >
                  {item}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* ==================== 3️⃣ Customer Service ==================== */}
        <div>
          <h3 className="font-semibold mb-4 uppercase tracking-wide">
            Customer Service
          </h3>
          <ul
            className={`space-y-3 text-sm ${
              theme === "light" ? "text-gray-600" : "text-gray-400"
            }`}
          >
            {[
              "FAQ & Helps",
              "Vendor Refund Policies",
              "Customer Refund Policies",
            ].map((item) => (
              <li key={item}>
                <a
                  href="#"
                  className={`hover:text-emerald-600 transition ${
                    theme === "light"
                      ? "hover:text-emerald-600"
                      : "hover:text-emerald-400"
                  }`}
                >
                  {item}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* ==================== 4️⃣ Our Information ==================== */}
        <div>
          <h3 className="font-semibold mb-4 uppercase tracking-wide">
            Our Information
          </h3>
          <ul
            className={`space-y-3 text-sm ${
              theme === "light" ? "text-gray-600" : "text-gray-400"
            }`}
          >
            {[
              "Manufacturers",
              "Privacy Policies",
              "Terms & Conditions",
              "Contact Us",
            ].map((item) => (
              <li key={item}>
                <a
                  href="#"
                  className={`hover:text-emerald-600 transition ${
                    theme === "light"
                      ? "hover:text-emerald-600"
                      : "hover:text-emerald-400"
                  }`}
                >
                  {item}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* ==================== Bottom Copyright ==================== */}
      <div
        className={`py-4 text-center text-sm border-t ${
          theme === "light"
            ? "text-gray-500 border-gray-200"
            : "text-gray-400 border-gray-700"
        }`}
      >
        © {new Date().getFullYear()}{" "}
        <span
          className={`font-semibold ${
            theme === "light" ? "text-emerald-600" : "text-emerald-400"
          }`}
        >
          PickBazar
        </span>
        . All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
