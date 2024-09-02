import React from "react";
import Logo from "../assets/images/beyond-removebg-preview 3.png";
import HeroBg from "../assets/images/NEON BG.png";
import HeroImg from "../assets/images/19 1 (1).png";
import GooglePlay from "../assets/images/image 57.png";
import AppStore from "../assets/images/image 58.png";
import {motion} from "framer-motion"
import { useInView } from 'react-intersection-observer';

const Hero = () => {
  // const leftVariants ={
  //   hidden: {opacity: 0, y: 200},
  //   visible: {opacity: 1, y: 0,  transition:{duration: 0.8}}
  // }
  // const rightVariants ={
  //   hidden: {opacity: 0, y: 200},
  //   visible: {opacity: 1, y: 0,  transition:{duration: 0.8}}
  // }

  // const [Ref, inView] = useInView({triggerOnce: true, threshold: 0.1})
  return (
    <section
      className=" bg-contain"
      style={{ backgroundImage: `url(${HeroBg})` }}
    >
      <div className="container mx-auto max-w-[1240px] px-4 py-16 grid md:grid-cols-2 items-center">
        <div
        
        className="">
          <div className="py-10">
            <h1 className="text-5xl md:text-7xl font-semibold text-white font-Rubik">
              Bey
              <span className="-mx-2 inline-block align-middle">
                <img
                  src={Logo}
                  alt="logo"
                  className="inline align-middle"
                />
              </span>
              nd
            </h1>
            <p className="text-6xl pt-4 font-semibold bg-gradient-to-r from-red-600 to-blue-700 inline-block text-transparent bg-clip-text">
              SOCIAL <br />
              MEDIA
            </p>
            <p className="text-white text-5xl">THAT PAYS</p>
          </div>
          <div className="">
            <span className="text-white ">
              The app will operate on Android, IOS and Web3.
            </span>
            
              <div className="flex justify-center items-center">
              <img src={GooglePlay} alt="google play" className="w-48" />
              <img src={AppStore} alt="app store" className="w-48" />
              </div>
           
          </div>
        </div>
        <div 
        
        className="flex justify-center items-center">
          <img src={HeroImg} alt="hero image" className="mr-24 md:mr-0"/>
        </div>
      </div>
    </section>
  );
};

export default Hero;
