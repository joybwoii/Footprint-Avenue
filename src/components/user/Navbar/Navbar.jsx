import  'react'
import './Navbar.css'
import { BsHandbagFill } from "react-icons/bs";
import { FaUser } from "react-icons/fa6";


function Navbar() {
  return (
    <nav className="navbar">
            <div className="navbar-brand">
                <img src="/assets/site-logo.svg" alt="PLASHOE Logo" /> {/* Replace with actual logo or text */}
            </div>
            <ul className="nav-categories">
                <li>MEN</li>
                <li>WOMEN</li>
                <li>COLLECTION</li>
                <li>LOOKBOOK</li>
                <li>SALE</li>
            </ul>
            <ul className="nav-options">
                <li>OUR STORY</li>
                <li>CONTACT</li>
            </ul>
            <ul className="nav-icons">
                <li><BsHandbagFill className="cart-icon" /></li>
                <li><FaUser className="user-icon" /></li>
            </ul>
        </nav>

  )
}
export default Navbar
