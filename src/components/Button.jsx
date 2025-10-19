import React from 'react'
import Drpdown from './PagesDropdown';
import CategoryDropdown from './CategoryDropdown';

const Button = ({ children,  bgcolor,wid,height, text,}) => {
  return (
      <button style={{ backgroundColor: bgcolor, width:wid, height:height , color:text   }} className=" text-emerald-600 font-semibold border border-gray-300 py-2 px-4 rounded ml-7 w-[120px] h-10 flex items-center justify-center mb-2 ">
          {children || <CategoryDropdown    /> }
    </button>
  );
}

export default Button