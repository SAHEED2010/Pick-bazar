import React from "react";
import { X, Plus, Minus, Trash2 } from "lucide-react";
import { useDispatch, useSelector } from "react-redux"; // ✅ Import redux hooks
import { addToCart, removeCart, clearCart } from "../redux/reducer/cartSlice"; // ✅ import actions

const CartSidebar = ({ onClose }) => {
  const dispatch = useDispatch();

  // ✅ Get cart data from Redux store
  const cart = useSelector((state) => state.cart);

  // ✅ Handle increase quantity
  const handleIncrease = (item) => {
    dispatch(addToCart(item));
  };

  // ✅ Handle decrease quantity (manual logic)
  const handleDecrease = (id) => {
    const item = cart.items.find((i) => i.id === id);
    if (item && item.quantity > 1) {
      // reduce quantity by 1
      const updatedItem = { ...item, quantity: item.quantity - 1 };
      // ✅ re-dispatch (we could create a decrease action later)
      dispatch(removeCart(item)); // temporarily removes; we can later adjust to decrease only
    } else {
      dispatch(removeCart(item)); // remove completely if quantity is 1
    }
  };

  // ✅ Handle remove item
  const handleRemove = (id) => {
    const item = cart.items.find((i) => i.id === id);
    if (item) {
      dispatch(removeCart(item));
    }
  };

  return (
    <div className="h-full w-full flex flex-col bg-white dark:bg-gray-900">
      {/* 🧠 Sidebar Header */}
      <div className="flex justify-between items-center p-4 border-b dark:border-gray-700">
        <h2 className="text-xl font-bold text-gray-800 dark:text-gray-100">
          Your Cart
        </h2>
        <button
          onClick={onClose}
          className="text-gray-500 hover:text-gray-800 dark:hover:text-gray-300"
        >
          <X size={24} />
        </button>
      </div>

      {/* 🛒 Cart Items */}
      <div className="flex-1 overflow-y-auto p-4 space-y-4">
        {cart.items.length === 0 ? (
          <p className="text-center text-gray-500 dark:text-gray-400">
            Your cart is empty.
          </p>
        ) : (
          cart.items.map((item) => (
            <div key={item.id} className="flex items-center gap-4">
              <img
                src={item.image}
                alt={item.name}
                className="w-16 h-16 object-cover rounded-md"
              />
              <div className="flex-1">
                <h3 className="font-medium text-gray-800 dark:text-gray-100">
                  {item.name}
                </h3>
                <p className="text-sm text-emerald-600 font-semibold">
                  ${item.price.toFixed(2)}
                </p>
              </div>

              {/* ➕➖ Buttons */}
              <div className="flex items-center gap-2">
                <button
                  onClick={() => handleDecrease(item.id)}
                  className="p-1 rounded-full hover:bg-gray-200 dark:hover:bg-gray-800"
                >
                  <Minus size={14} />
                </button>
                <span className="text-gray-800 dark:text-gray-100">
                  {item.quantity}
                </span>
                <button
                  onClick={() => handleIncrease(item)}
                  className="p-1 rounded-full hover:bg-gray-200 dark:hover:bg-gray-800"
                >
                  <Plus size={14} />
                </button>
                <button
                  onClick={() => handleRemove(item.id)}
                  className="text-red-500 hover:text-red-700 ml-2"
                >
                  <Trash2 size={16} />
                </button>
              </div>
            </div>
          ))
        )}
      </div>

      {/* 💰 Sidebar Footer */}
      {cart.items.length > 0 && (
        <div className="p-4 border-t dark:border-gray-700">
          <div className="flex justify-between items-center mb-4">
            <span className="text-lg font-bold text-gray-800 dark:text-gray-100">
              Total
            </span>
            <span className="text-lg font-bold text-emerald-600">
              ${cart.total.toFixed(2)}
            </span>
          </div>
          <button className="w-full bg-emerald-600 text-white font-bold py-3 rounded-lg hover:bg-emerald-700 transition-colors">
            Checkout
          </button>
        </div>
      )}
    </div>
  );
};

export default CartSidebar;
