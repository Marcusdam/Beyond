import React, { useRef } from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import SocialImg from "../assets/images/socialImage.png";
import Image1 from "../assets/images/13 1.png";
import Image2 from "../assets/images/17 1.png";
import Button from "./Button";

const Social = () => {
  const [Ref, inView] = useInView({ threshold: 0.1, triggerOnce: true})
  const leftVariants ={ 
    hidden: {opacity: 0, x: -100, transition:{duration: 0.6}},
    visible: {opacity: 1, x: 0, transition: {duration: 0.6}}
  }
  const rightVariants ={ 
    hidden: {opacity: 0, x: 100, transition:{duration: 0.6}},
    visible: {opacity: 1, x: 0, transition: {duration: 0.6}}
  }
 
 
  return (
    <section
      style={{ 
        
        backgroundImage: `url(${SocialImg}), linear-gradient(rgba(255, 182, 193, 0.5), rgba(0, 0, 109, 0.5))`, 
        backgroundSize: "cover", 
        backgroundPosition: "center", 
       
        
      }}
      
      className="relative py-16"
      
    >
      <div  className="grid lg:grid-cols-2 gap-10">
        <motion.div className="px-4 lg:px-14 " 
        ref={Ref}
        initial='hidden'
        animate={inView? "visible": "hidden"}
        variants ={leftVariants}
        >
          <h1 className="text-5xl md:text-6xl font-semibold font-Rubik text-transparent bg-gradient-to-t from-[#00FFB2] to-[#3CADFF] bg-clip-text">
            LET SOCIAL MEDIA  
            <br /> 
            <span className="bg-gradient-to-t from-[#3CADFF] to-[#00FFB2] text-transparent bg-clip-text">WORK FOR YOU</span>
          </h1>
          <p className="text-white text-lg md:text-xl leading-relaxed  py-4 mb-10">
            Why not use a social media platform that can benefit you! How do we do
            it you ask? By simply being interactive on the platform such as
            commenting and liking a video, will build up reward points that you
            can redeem for NFTs/GameFi and DeFi products, turning your many daily
            hours of social media screen time into income.
          </p>
          <Button text="DOWNLOAD THE APP" className=""/>
        </motion.div>
        <motion.div className=" relative px-0"
        ref={Ref}
        initial ="hidden"
        animate={inView? 'visible' : 'hidden'}
        variants={rightVariants}
        >
        <img src={Image2} alt="img" className="absolute -top-40 md:-top-72 w-full" />
          <img src={Image1} alt="img" className=" relative top-28  right-20 md:right-40 w-full" />
          
        </motion.div>
      </div>
    </section>
  );
};

export default Social;
