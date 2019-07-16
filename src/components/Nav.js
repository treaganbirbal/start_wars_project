import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = (props) => {
  return (
  <div className='navbar'>
    <Link>Films</Link>
    <Link>People</Link>
    <Link>Planets</Link>
    <Link>Species</Link>
    <Link>Vehicles</Link>

  </div>
)
}

export default Navbar;
