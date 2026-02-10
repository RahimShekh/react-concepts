import React from 'react'
import { NavLink } from 'react-router-dom'

function Nav() {
  return (
    <div className='flex justify-center gap-10 p-10'>
        <NavLink className={(e)=>e.isActive ?"text-blue-200":""} to="/">Home</NavLink>
        <NavLink className={(e)=>e.isActive ?"text-blue-200":""} to="/Product">Product</NavLink>
        <NavLink className={(e)=>e.isActive ?"text-blue-200":""} to="/Service">Service</NavLink>
        <NavLink className={(e)=>e.isActive ?"text-blue-200":""} to="/About">About</NavLink>
    </div>
  )
}

export default Nav