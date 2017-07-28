import React  from 'react';
import { Link } from 'react-router-dom';

import './AppHeader.css';

function AppHeader() {
  return (
    <header className="nav-bar">
      <nav className="nav-links">
        <Link to="/" className="title">Books</Link>
        <Link to="/about" className="link _pull-right">About</Link>
      </nav>
    </header>
  )
}

export default AppHeader;
