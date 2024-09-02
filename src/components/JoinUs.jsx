import React, { useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import image from "../assets/images/asian-young-woman-s-portrait-dark-wall-neon-light-beautiful-female-model-with-headphones-concept-human-emotions-facial-expression-youth-sales-ad 2.png";
import Button from "./Button";

const JoinUs = () => {
 
  const { ref, inView } = useInView({triggerOnce: true,  threshold: 0.2 });

  

  const textVariant = {
    hidden: { opacity: 0, y: 150 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8 } }
  };

  const imageVariant = {
    hidden: { opacity: 0, y: 100 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8 } }
  };

  return (
    <section className="bg-black py-16">
      <div className="container px-4 lg:px-0">
        <div className="grid md:grid-cols-2 gap-8 items-center" ref={ref}>
          {/* Image Section */}
          <motion.div
            className="flex justify-center"
            variants={imageVariant}
            initial="hidden"
            animate={inView ? 'visible' : 'hidden'}
          >
            <img
              src={image}
              alt="Social media DeFi"
              className="w-full h-auto object-cover rounded-lg"
            />
          </motion.div>
          
          {/* Text and Button Section */}
          <motion.div
            className=" md:text-left md:pl-10"
            variants={textVariant}
            initial="hidden"
            animate={inView? 'visible' : 'hidden'}
          >
            <p className="text-white text-lg md:text-xl leading-relaxed">
              <span className="font-bold text-2xl">Beyond</span> is a social media DeFi that allows everyone to freely share
              content globally with minimal censorship, while maximizing rewards and
              income returns for people doing what they love.
            </p>
            <div className="mt-10 md:mt-12 md:text-right">
              <Button text="Join Us" />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default JoinUs;
