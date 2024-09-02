import React, { useEffect, useState } from "react";
import Logo from "../assets/images/beyond-removebg-preview 3.png";
import FooterBg from "../assets/images/image 55.png";
import GooglePlay from "../assets/images/image 57.png";
import AppStore from "../assets/images/image 58.png";
import Navbar from "./Navbar";
import { PiMouseScrollThin } from "react-icons/pi";



const Footer = () => {
  const [isVisible, setIsVisible ] = useState(false)

  const toggleVisibility = () =>{
    if(window.scrollY > 500){
      setIsVisible(true)
    }
    else{
      setIsVisible(false)
    }
  }
  useEffect(()=>{
    window.addEventListener('scroll', toggleVisibility)
    return () => window.removeEventListener('scroll', toggleVisibility)
  },[])
  return (
    <section className="bg-black" >
      <div className=" bg-center bg-no-repeat" style={{
      backgroundImage: `url(${FooterBg}) `,
      backgroundSize: "cover",
    }}>
      <div
        className="container mx-auto max-w-[1240px] px-4  lg:px-0 "
        
      >
        <div className="flex justify-center items-center">
          <div className="py-10">
            <h1 className="text-7xl font-semibold text-center text-white font-Rubik">
              Bey
              <span className="-mx-2 inline-block align-middle">
                <img src={Logo} alt="logo" className="inline align-middle" />
              </span>
              nd
            </h1>
            <div className="flex justify-center items-center mt-4 ">
              <img src={GooglePlay} alt="google play" className="w-48" />
              <img src={AppStore} alt="app store" className="w-48" />
            </div>
          </div>
        </div>
      </div>
      </div>
      
      <div className="py-6 " style={{
    background: "linear-gradient(to top, rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.2))",
  }}>
      <nav>
      <ul className="text-white flex flex-col gap-6 md:gap-0 md:flex-row justify-center md:items-center ">
  {["Home", "App", "Features", "About Us", "Team", "Contact"].map((item, index) => (
    <li key={index} className="pl-10 md:pl-4">
      <a href="#">{item}</a>
      {index < 5 && <span className="pl-4 hidden md:inline">|</span>}
    </li>
  ))}
</ul>

            

        </nav>
        <button
  className={`fixed bottom-4 right-6 p-3 rounded-full text-white transition-opacity duration-300 ease-in-out ${ isVisible ? "opacity-100" : 'opacity-0 pointer-events-none'}`}
  onClick={() => window.scrollTo({top: 0, behavior: "smooth"})} style={{
    borderImage: 'linear-gradient(to right, red, blue) 1',
    borderRadius: '9999px',
  }}
>
  <PiMouseScrollThin size={40} />
</button>

      </div>
    </section>
  );
};

export default Footer;
