import React from 'react'
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux';

const Offer = () => {

  const theme = useSelector((state) => state.theme.mode);

  return (
    <div className={` w-full h-screen text-3xl text-center   font-semibold ${theme === "light" ? "bg-white text-gray-800" : "bg-gray-800 text-white"} `}>
      <h1>Welcome to off page</h1>
      <p>Offer page</p>
      <Link to="/">Go to Home</Link>
    </div>
  );
}

export default Offer