import React from "react";
import Button from "./Button";
import Image from "../assets/images/african-young-man-s-portrait-dark-studio-background-neon-concept-human-emotions-facial-expression-youth-sales-ad 1.png";
import { useInView } from "react-intersection-observer";
import { motion } from "framer-motion";


const Update = () => {
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
    <section className="bg-black">
      <div className="container mx-auto max-w-[1240px] grid md:grid-cols-2 items-center px-4 lg:px-0">
        <motion.div
        ref={Ref}
        initial='hidden'
        animate={inView? "visible": "hidden"}
        variants ={leftVariants}
        >
          <h1 className="text-5xl lg:text-6xl text-white font-bold font-Rubik mb-20">
            Follow us on <br />{" "}
            <span className="text-[#00FFB2] "> Telegram to</span> <br />{" "}
            <span className="bg-gradient-to-t from-[#00FFB2] to-[#3CADFF] text-transparent inline-block bg-clip-text">
              see Every
            </span>{" "} <br />
            Update First
          </h1>
          <Button text="JOIN TELEGRAM" />
        </motion.div>

        <motion.div 
        ref={Ref}
        initial ="hidden"
        animate={inView? 'visible' : 'hidden'}
        variants={rightVariants}
        >
          <img src={Image} alt="" />
        </motion.div>
      </div>
    </section>
  );
};

export default Update;
