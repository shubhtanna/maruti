import React, { useState } from 'react'
import './Navbar.css';
import { MdClose } from "react-icons/md";
import { IoMenu } from "react-icons/io5";

const Navbar = () => {
   const [active, setActive] = useState('navBar');

   const showNav = () => {
      setActive('navBar activeNavbar');
   }

   const removeNav = () => {
      setActive('navBar');
   }
   return (
      <div className='header'>

         <div className='logoDiv'>
            <a href="/" className='logo'>
               <h2>Maruti</h2>
            </a>
         </div>

         <div className={active}>
            <ul className='navLists'>
               <li className='navItems'>
                  <a href="" className='navLink'>Home</a>
               </li>
               <li className='navItems'>
                  <a href="" className='navLink'>About</a>
               </li>
               <li className='navItems'>
                  <a href="" className='navLink'>Services</a>
               </li>
               <li className='navItems'>
                  <a href="" className='navLink'>Contact</a>
               </li>

            </ul>
       
            <div onClick={removeNav} className='closeNavbar'>
                     <MdClose  className="icon"/>
                  </div>
         </div>
         <div className='btnDiv'>
                  <button className='Btn'>Login </button>
                  <button className='Btn'>Sign Up</button>
                  

               </div>

         <div onClick={showNav} className='toggleNavbar'>
               <IoMenu className='icon'/>
            </div>


      </div>
   )
}

export default Navbar