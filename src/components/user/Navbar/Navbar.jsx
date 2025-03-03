import React from 'react';
import './Navbar.css';
import { BsHandbagFill } from "react-icons/bs";
import { FaUser } from "react-icons/fa6";
import { Link } from 'react-router-dom';

function Navbar() {
    return (
        <nav className="navbar">
            <Link to="/" className="navbar-brand">
                <img src="/assets/site-logo.svg" alt="PLASHOE Logo" />
            </Link>
            <ul className="nav-categories">
                <li><Link to="/products">MEN</Link></li>
                <li><Link to="/products">WOMEN</Link></li>
                <li><Link to="/products">COLLECTION</Link></li>
                <li><Link to="/products">LOOKBOOK</Link></li>
                <li><Link to="/products">SALE</Link></li>
            </ul>
            <ul className="nav-options">
                <li><Link to="/about">OUR STORY</Link></li>
                <li><Link to="/contact">CONTACT</Link></li>
            </ul>
            <ul className="nav-icons">
                <li><Link to="/cart"><BsHandbagFill className="cart-icon" /></Link></li>
                <li><Link to="/profile"><FaUser className="user-icon" /></Link></li>
            </ul>
        </nav>
    );
}

export default Navbar;