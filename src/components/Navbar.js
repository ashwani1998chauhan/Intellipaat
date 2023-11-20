import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
    return (
        <div>
            <nav className="navbar-container">
                <ul className="navbar-list">
                    <li className="navbar-item"><Link to='/Home' className="navbar-link">Home</Link></li>
                    <li className="navbar-item"><Link to='/product' className="navbar-link">Products</Link></li>
                    <li className="navbar-item"><Link to='/contact' className="navbar-link">Contact</Link></li>
                    <li className="navbar-item"><Link to='/' className="navbar-link">Login</Link></li>
                </ul>
            </nav>
        </div>
    );
};

export default Navbar;
