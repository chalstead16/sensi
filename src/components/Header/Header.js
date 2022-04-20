import React from "react";
import { Link } from 'react-router-dom';


const Header = () => {
  return (
    <div>
    <Link to="/">
      <h1>sensi</h1>
    </Link>
    <Link to='/entries'>
      <button>Entries</button>
    </Link>
    </div>
  )
}

export default Header;