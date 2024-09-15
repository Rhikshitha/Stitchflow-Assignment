import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import logo from '../assets/titleCard.png';
import '../styles/Navbar.css';

const Navbar: React.FC = () => {
  const location = useLocation();
  const getLinkClass = (path: string) => location.pathname === path ? 'navbar-link selected' : 'navbar-link';

  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <img src={logo} alt="App Logo" className="navbar-logo-img" />
      </div>
      <ul className="navbar-links">
        <li>
          <Link to="/" className={getLinkClass('/')}>Home</Link>
        </li>
        <li>
          <Link to="/add" className={getLinkClass('/add')}>Add Post</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
