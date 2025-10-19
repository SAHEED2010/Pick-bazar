import React from 'react'
import {
  Backpack,
  Cake,
  Brush,
  Briefcase,
  BriefcaseBusiness,
  Wallet,
  CreditCard,
  ShoppingBag,
  ChevronDown,
} from "lucide-react";
const BagCategoryList = () => {
  return (
    <div>
      <div className='max-h-full gap-3.5'>
        <div className="font-semibold m-9 text-gray-800 flex items-center gap-2">
          <Briefcase className="w-5 h-5" /> <p>Hand bags</p>
        </div>
        <div className="font-semibold m-9 text-gray-800 flex items-center gap-2">
          <BriefcaseBusiness className="w-5 h-5" />

          <p>Laptop bags</p>
        </div>
        <div className="font-semibold m-9 text-gray-800 flex items-center gap-2">
          <Backpack className="w-5 h-5" />
          <p>Shoulder bags</p>
        </div>
        <div className="font-semibold m-9 text-gray-800 flex items-center gap-2">
          <Wallet className="w-5 h-5" />
          <p>Purse</p>
        </div>

        <div className="font-semibold m-9 text-gray-800 flex items-center gap-2">
          <CreditCard className="w-5 h-5" />
          <p>wallet</p>
        </div>
      </div>
    </div>
  );
}

export default BagCategoryList