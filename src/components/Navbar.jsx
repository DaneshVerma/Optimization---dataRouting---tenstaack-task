import React from 'react'
import { NavLink } from 'react-router'

const Navbar = () => {
  return (
    <div className='w-1/4 h-ful gap-3 flex flex-col'>
      <ul className='flex flex-col'>
        <NavLink to="/">Home</NavLink>
        <NavLink to="/users">Users</NavLink>
        <NavLink to="/addusers">Add Users</NavLink>
      </ul>
    </div>
  )
}

export default Navbar
