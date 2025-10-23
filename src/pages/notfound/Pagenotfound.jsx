import React from 'react'
import {Link} from 'react-router-dom'

 
const Pagenotfound = () => {
  return (
      <div className='container p-72 text-center bg-gray-100'>
          <h1>Sorry, page not found.</h1>

          <Link to="/"> Go back home</Link>
    </div>
  )
}

export default Pagenotfound