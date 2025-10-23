import React from "react";
import { ShoppingBag , X } from "lucide-react";
import Card from "./ProductGrid";
import { useSelector } from "react-redux";


const SideBtn = ({  onClick }) => {
 const cart = useSelector((state) => state.cart);
  const itemCount = cart.items.length;
  const totalAmount = cart.total;

  
  return (
    <>
      <button
        className="fixed bottom-55 left-315 bg-emerald-600 text-white p-4 h-[100px] w-[120px] mt- rounded-lg font-bold z-30 cursor-pointer"
        onClick={onClick}
      >
        <p className="flex gap-1">
          <ShoppingBag className="w-4 mt-1 h-4 " /> {itemCount} Item{itemCount >=2 ? 's' : ''}
        </p>

        <div className="bg-white mt-4 rounded-sm text-emerald-600 font-bold w-[65px] h-[30px] item-center mr-3 ">
          <p>${isNaN(totalAmount) ? "0.00" : totalAmount.toFixed(2)}</p>
        </div>
      </button>
    </>
  );
};

export default SideBtn;
