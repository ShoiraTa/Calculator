import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

function Header() {
  return (
    <header className="header">
      <Link className="logo" to="/Calculator/">Math Magicians</Link>
      <nav>
        <Link className="link" to="/Calculator/">Home</Link>
        <Link className="link" to="/Calculator/app">Calculator</Link>
        <Link className="link" to="/Calculator/quotes">Quote</Link>
      </nav>
    </header>
  );
}

export default Header;
