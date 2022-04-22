import React from "react";
import { Link } from 'react-router-dom';
import './Header.css'

const Header = () => {
  return (
    <div className='header'>
    <Link to="/"style={{color: "#9C5020", textDecoration:"none"}}>
      <h1>sensi</h1>
    </Link>
    <Link to='/entries'>
      <button
        className='entries-button'
      >entries</button>
    </Link>
    </div>
  )
}

export default Header;