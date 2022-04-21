import React from "react";
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <div>
    <Link to="/"style={{color: "#9C5020", textDecoration:"none"}}>
      <h1>sensi</h1>
    </Link>
    <Link to='/entries'>
      <button>entries</button>
    </Link>
    </div>
  )
}

export default Header;