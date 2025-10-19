import React from "react";
import { ShoppingCart } from "lucide-react";
import Products from "../mockdata/Product";

const ProductGrid = ({ onAddToCart, cart }) => {
  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      <div className="overflow-y-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {Products.map((item) => {
          // ✅ Find if this product exists in cart
          const cartItem = cart.items.find((i) => i.id === item.id);
          const quantity = cartItem ? cartItem.quantity : 0;

          return (
            <div
              key={item.id}
              className="bg-white h-100 shadow-md overflow-hidden relative hover:shadow-lg transition-all duration-300"
            >
              {/* Discount Badge */}
              <div className="absolute top-3 right-3 bg-yellow-400 text-white px-2 py-1 text-xs font-semibold rounded-full">
                {item.discount}%
              </div>

              {/* Image */}
              <img
                src={item.image}
                alt={item.name}
                className="w-full h-58 object-cover"
              />

              {/* Details */}
              <div className="p-4 flex flex-col justify-between h-[150px]">
                <h2 className="font-medium text-gray-800">{item.name}</h2>

                {/* ✅ Show quantity if in cart */}
                {quantity > 0 ? (
                  <p className="text-sm text-emerald-600 font-semibold">
                    {quantity} pc{quantity > 1 ? "s" : ""}
                  </p>
                ) : (
                  <p className="text-sm text-gray-500">1 pc</p>
                )}

                {/* Price */}
                <div className="mt-2">
                  <p className="text-gray-400 line-through text-sm">
                    ${item.oldPrice}
                  </p>
                  <div className="flex mt-3">
                    <p className="text-emerald-600 font-bold">${item.price}</p>
                    <button
                      onClick={() => onAddToCart(item)}
                      className="w-[6rem] flex items-center justify-center gap-2 bg-white border border-gray-300 rounded-lg text-emerald-600 hover:bg-emerald-600 hover:text-white py-2 rounded-lg ml-20 transition-all"
                    >
                      <ShoppingCart size={18} />
                      <span>Cart</span>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ProductGrid;
