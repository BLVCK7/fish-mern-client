import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.scss';

const Navbar = () => {
  return (
    <div className="navbar">
      <Link to="/">Logo</Link>
      <ul className="menu">
        <Link to="/add-post">Add Post</Link>
        <Link to="/register">Register</Link>
      </ul>
    </div>
  );
};

export default Navbar;
