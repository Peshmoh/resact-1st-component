import React from 'react';

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-menu">
        <div className="navbar-start">
          <a className="navbar-item" href="/">
            HOME
          </a>
          <a className="navbar-item" href="/create">
            CREATE
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
