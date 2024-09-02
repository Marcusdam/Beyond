import React, { useState } from 'react';
import HeroBg from "../assets/images/NEON BG.png"
import { HiOutlineMenuAlt3 } from "react-icons/hi";
import { MdOutlineClose } from "react-icons/md";

import Logo from "../assets/images/beyond-removebg-preview 3.png"
import { Link } from 'react-router-dom';


const Navbar = () => {
    const[isOpen, setIsOpen] = useState(false)
    const HandleToggle = () =>{
        setIsOpen(!isOpen)
    }
    const staggerVariants = {
      hidden:{opacity: 0},
      visible: {opacity: 1, transition:{staggerChildrn: 0.1}}
    }
  return (
   <div style={{backgroundImage: `url(${HeroBg})`}} >
     <div className='max-w-[1240px]  mx-auto px-4 sticky top-0 h-24 flex justify-between items-center text-white z-50' >
        <div className=''>
            <Link to='/'><img src={Logo} alt="" className='-ml-3 w-20 h-auto'/></Link>

        </div>
        
        
        <div className='flex items-center space-x-10'>
        <nav className={`md:flex justify-center space-x-6 ${isOpen ? "block" : "hidden"} md:block`}>
            <ul className={`md:flex md:items-center gap-4 ${isOpen ? "absolute top-[100px] left-0 w-full h-screen space-y-6 px-6 py-8 bg-black md:bg-transparent" : ""}}`}>
                <li><a href="#">Home</a></li>
                <li><a href="#">App</a></li>
                <li><a href="#">Features</a></li>
                <li><a href="#">About Us</a></li>
                <li><a href="#">Team</a></li>
                <li><a href="#">Contact</a></li>
            </ul>
            
            

        </nav>
        <div className='flex items-center gap-8 md:mr-0' >
        <button
      className="px-4 py-2 rounded-full font-semibold text-white  border-2 "
      style={{
        borderImage: 'linear-gradient(to right, red, blue) 1',
        borderRadius: '9999px',
      }}
    >
      DOWNLOAD DECK
    </button>

            <div className='text-white md:hidden' onClick={HandleToggle}>
            {isOpen ?  <MdOutlineClose size={40} /> : <HiOutlineMenuAlt3 size={40} />

            }
            </div>
            </div>
        </div>
       
    </div>
   </div>
  )
}

export default Navbar