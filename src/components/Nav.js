import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = (props) => {
  return (
  <div className='navbar'>
    <Link to='/films'>Films</Link>
    <Link to='/people'>People</Link>
    <Link to='/planets'>Planets</Link>
    <Link to='/species'>Species</Link>
    <Link to='/vehicles'>Vehicles</Link>

  </div>
)
}

export default Navbar;
