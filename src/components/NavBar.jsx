import React from "react";
import Button from "./Button";
import PagesDropdown from "./PagesDropdown";
import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <nav className="p-4 text-black  flex justify-between items-center  h-[60px] sticky bg-white top-0 z-[1000]">
      <div className="flex item ">
        <Link to="/">
          <img
            className=" w-30 ml h-7 ml-5"
            src="src/assets/Logo-new (1).webp"
            alt=""
          />
        </Link>

        <Button />

        <div className=" ml-[23rem] flex space-x-10 font-semibold text-gray-600">
          <Link to="/shops" className="mt-2 ">
            Shop
          </Link>
          <Link to="/offer" className="mt-2">
            Offers
          </Link>
          <Link to="/contact" className="mt-2">
            Contact
          </Link>
          <PagesDropdown />
        </div>

        <Link
          to="/join"
          className="rounded-md bg-emerald-600 px-3 py-2 mt-2 ml-3 h-8 mr-3 text-sm font-medium text-white"
          bgcolor="green"
          text="white"
          wid="5rem"
        >
          Join
        </Link>
        <Link
          className="rounded-md bg-emerald-600 px-3 ml-3 py-2 h-10 mt-1  text-sm font-medium text-white "
          to="/sellers"
          wid="10rem"
          bgcolor="green"
          text="white"
        >
          Become a seller
        </Link>
      </div>
    </nav>
  );
};

export default NavBar;
