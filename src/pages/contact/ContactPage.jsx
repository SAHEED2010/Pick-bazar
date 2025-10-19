import React from 'react'
import { Link } from 'react-router-dom'

const ContactPage = () => {
  return (
      <div className=' text-3xl text-center m-5 ml-[15rem] font-semibold bg-gray-600 '>
          <h1>Welcome to contact page</h1>
          <p>contact page</p>
          <Link to="/">Go to Home</Link>
    </div>
  )
}

export default ContactPage