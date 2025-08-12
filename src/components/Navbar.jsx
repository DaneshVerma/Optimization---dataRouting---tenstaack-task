import React from 'react'
import { NavLink } from 'react-router'

const Navbar = () => {
  return (
    <div className='w-1/3 gap-3 justify-between flex mr-5'>
      <ul className=' text-2xl w-full
      gap-3 flex flex-col'>
        <NavLink className="border-b w-full" to="/">Home</NavLink>
        <NavLink className="border-b w-full" to="/users">Users</NavLink>
        <NavLink className="border-b w-full" to="/addusers">Add Users</NavLink>
      </ul>
      <hr className='h-full w-[1px] bg-gray-400' />
    </div>
  )
}

export default Navbar
