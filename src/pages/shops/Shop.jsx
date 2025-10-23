import React from "react";
import shopData from "../../mockdata/Shopdata";
import { MapPin } from "lucide-react"; // ✨ Added location icon for styling
import Footer from "../../components/Footer";

const Shops = () => {
  return (
    <>
      <div className="max-w-7xl mx-auto px-6 py-10">
        {/* ✨ Page title styled */}
        <h1 className="text-gray-800 dark:text-gray-100 font-bold text-3xl mb-8 text-center">
          All Shops
        </h1>

        {/* ✨ Grid layout for shop cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {shopData.map((shop) => (
            <div
              key={shop.id}
              className="bg-white dark:bg-gray-900 shadow-md hover:shadow-lg border border-gray-100 dark:border-gray-700 rounded-2xl overflow-hidden transition-all duration-300 group"
            >
              {/* ✨ Shop Image */}
              <div className="overflow-hidden">
                <img
                  src={shop.imgUrl}
                  alt={shop.name}
                  className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>

              {/* ✨ Shop Details */}
              <div className="p-4">
                <h2 className="text-lg font-semibold text-gray-800 dark:text-gray-100 mb-2">
                  {shop.name}
                </h2>

                {/* ✨ Location info with icon */}
                <p className="text-sm text-gray-600 dark:text-gray-400 flex items-center gap-1">
                  <MapPin size={15} className="text-emerald-600" />
                  {shop.Location}
                </p>

                {/* ✨ Optional View Button */}
                <button className="mt-4 bg-emerald-600 text-white text-sm px-4 py-2 rounded-lg hover:bg-emerald-700 transition-all">
                  Visit Shop
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="mt-[7rem]">
          <Footer />
      </div>
    </>
  );
};

export default Shops;
