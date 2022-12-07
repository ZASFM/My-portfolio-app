import React,{useState} from 'react';
import {FaTimes,FaBars} from 'react-icons/fa';

const Navbar=()=>{
   const [nav,setNav]=useState(false);
   return (
      <div className='fixed w-full h-[80px] flex justify-between items-center px-4 bg-[#0a192f] text-gray-300'>
         <div>
            Shafi
         </div>

            <ul className='hidden md:flex'>
               <li>Home</li>
               <li>About</li>
               <li>Skills</li>
               <li>Work</li>
               <li>Contact</li>
            </ul>

         {/*Burger*/}
         <div className='md:hidden z-10 '>
            <FaBars/>
         </div>
         {/*mobile menu*/}
         <ul className='hidden absolute top-0 left-0 w-full h-screen bg-[#0a192f] flex flex-col justify-center items-center'>
            <li className='py-6 text-4xl'>Home</li>
            <li className='py-6 text-4xl'>About</li>
            <li className='py-6 text-4xl'>Skills</li>
            <li className='py-6 text-4xl'>Work</li>
            <li className='py-6 text-4xl'>Contact</li>
         </ul>
         {/*socials*/}
         <div className='hidden'></div>
      </div>
   )
}

export default Navbar;