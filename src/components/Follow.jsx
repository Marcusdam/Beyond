import React from 'react'
import SocialImg from "../assets/images/socialImage.png";
import Image from '../assets/images/21 1.png';
import Button from './Button';
import { useInView } from 'react-intersection-observer';
import { delay, motion } from 'framer-motion';

const Follow = () => {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 });

  const textVariant = {
    hidden: { opacity: 0, y: 10 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.001 } }
  };

  const imageVariant = {
    hidden: { opacity: 0, y: 100 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, delay: 1  } }
  };
  const containervariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.8,
      },
    },
  };
  const itemVariants = {
    hidden: {
      opacity: 0,
      x: 0,
    },
    visible: {
      opacity: 1,
      x: 0,
    },
    transition: {
      duration: 1,
    },
  };
  return (
    <section

      style={{ 
        
        backgroundImage: `url(${SocialImg}), linear-gradient(rgba(255, 182, 193, 0.5), rgba(0, 0, 109, 0.5))`, 
        backgroundSize: "cover", 
        backgroundPosition: "center", 
        
      }}
      className="relative"
    >
     {/* <div className="container mx-auto max-w-[1240px] px-4 lg:px-0">
     <div className="grid md:grid-cols-2  items-center py-16 lg:py-0">
        <motion.div className="" 
        ref={ref}
        initial= 'hidden'
        animate={inView ? 'visible': 'hidden'}
        variants={textVariant}
        >
          <h1 className="text-6xl font-semibold font-Rubikll' text-white">
          FOLLOW FOR  <br /> MORE
        </h1>
        <motion.form action="" className='flex flex-col py-8 space-y-2 ' 
        ref={ref}
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
        variants={containervariants}
        >
        <motion.div variants={itemVariants}><input type="text" placeholder='Name' className='bg-pink-500 bg-opacity-40 p-2 rounded-md border border-gray-600 text-white w-full md:w-96'/></motion.div>
        <motion.div variants={itemVariants}><input type="email" placeholder='Email' className='bg-pink-500 bg-opacity-40 p-2 rounded-md border border-gray-600 text-white w-full md:w-96'/></motion.div>
        <motion.div variants={itemVariants}><input type="phone" placeholder='Phone' className='bg-pink-500 bg-opacity-40 p-2 rounded-md border border-gray-600 text-white w-full md:w-96'/></motion.div>
        <motion.div  variants={itemVariants}className='pb-10'><input type="text" placeholder='Location' className='bg-pink-500 bg-opacity-40 p-2 rounded-md border border-gray-600 text-white w-full md:w-96'/></motion.div>

        <Button text="SUBMIT" />
        </motion.form>
          
          
        </motion.div>
        <motion.div className=""
        ref={ref}
        initial='hidden'
        animate={inView ? 'visible' : 'hidden'}
        variants={imageVariant}
        >
            <img src={Image} alt="" className='w-full h-auto object-cover ml-20'/>
        </motion.div>
        
      </div>
     </div> */}
    </section>
  )
}

export default Follow