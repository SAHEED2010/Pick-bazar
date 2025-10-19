import React from 'react'
import { Link } from 'react-router-dom'

const Shops = () => {
  return (
    <div className=" text-3xl text-center m-5 ml-[15rem] font-semibold bg-emerald-600  text-white">
      <h1>Welcome to Shop page</h1>
      <p>shop page</p>
      <Link to="/">Go to Home</Link>
    </div>
  );
}

export default Shops