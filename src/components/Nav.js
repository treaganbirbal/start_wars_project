import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = (props) => {
  return (
  <div className='navbar'>
    <Link>Characters</Link>
    <Link>Planets</Link>
    <Link>Vehicles</Link>

  </div>
)
}

export default Navbar;
