import React from "react";
import { NavLink } from "react-router-dom";
import "./Navbar.css";
import { useTheme } from "../ThemeContext";

const Navbar = () => {
  const { toggleDarkMode } = useTheme();

  return (
    <div>
      <nav className="navbar-container">
        <ul className="navbar-list">
          <li className="navbar-item"><NavLink to='/Home' className="navbar-link">Home</NavLink></li>
          <li className="navbar-item"><NavLink to='/product' className="navbar-link">Products</NavLink></li>
          <li className="navbar-item"><NavLink to='/contact' className="navbar-link">Contact</NavLink></li>
          <li className="navbar-item"><NavLink to='/' className="navbar-link">Login</NavLink></li>
        </ul>
        <NavLink to='#' className="navbar-theme-toggle" onClick={toggleDarkMode}>
          Toggle Dark Mode
        </NavLink>
      </nav>
    </div>
  );
};

export default Navbar;
