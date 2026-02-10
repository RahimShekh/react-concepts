import React from 'react'
import { Outlet, useNavigate } from 'react-router-dom'

function Service() {
  const navigate = useNavigate();

  return (
    <div className='ml-70'>
      <h1 className='text-3xl font-light mb-3'>Our Services</h1>
      <button onClick={()=>navigate("/Service/details")}
      className='px-3 py-2 text-black bg-amber-50 rounded-md'>
        more Details
      </button>
      <button onClick={()=>navigate("/Service/update")}
      className='px-3 py-2 ml-5 text-black bg-amber-50 rounded-md'>
        more update
      </button>
      <hr className='mt-10' />
      <Outlet />
    </div>
  )
}

export default Service