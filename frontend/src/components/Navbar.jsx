
import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <nav className="bg-blue-700 text-white p-4 flex justify-center gap-10">
      <Link to="/">Home</Link>
      <Link to="/about">About</Link>
      <Link to="/contact">Contact</Link>
      <Link to="/service">Service</Link>
     
    </nav>
  )
}

export default Navbar
