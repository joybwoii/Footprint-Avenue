import  'react'
import './Navbar.css'
import { BsHandbagFill } from "react-icons/bs";
import { FaUser } from "react-icons/fa6";


function Navbar() {
  return (
    <div>
     <header className='header'>
      <div>
     <div className='logo'>
      <img src="/assets/site-logo.svg" alt="" />
     </div>
     <ul className='categories'>
        <li>MEN</li>
        <li>WOMEN</li>
        <li>COLLECTION</li>
        <li>LOOKBOOK</li>
        <li>SALE</li>
      </ul>
      <div>
        <ul className='options'>
        <li>OUR STORY</li>
        <li>CONTACT</li>
        </ul>
      </div>
        <div className='other'>
        <BsHandbagFill />
        <FaUser />
        </div>
    </div>
     </header>
    </div>
  )
}
export default Navbar
