import React from "react";
import icon1 from "../assets/images/image 71 (Traced).png";
import icon2 from "../assets/images/image 68 (Traced).png";
import icon3 from "../assets/images/image 70 (Traced).png";
import icon4 from "../assets/images/image 69.png";
import icon5 from "../assets/images/bxs_videos.png";
import money from "../assets/images/money.png";
import group from "../assets/images/Group.png";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const Services = () => {
  const [ref, inView] = useInView({ thresold: 0.8, triggerOnce: true });

  const fadeUpVariant = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
    transition: { duration: 0.8 },
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
      x: 20,
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
    <section className="bg-black flex justify-center">
      <div className="container mx-auto max-w-[1240px] py-16 px-4 lg:px-0 text-center">
        <motion.h1
          initial="hidden"
          animate="visible"
          variants={fadeUpVariant}
          className="inline-block w-full font-bold bg-gradient-to-r from-blue-600 to-red-600 text-transparent  text-6xl bg-clip-text py-4"
        >
          What makes us better?
        </motion.h1>
        <motion.div
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 py-10"
          ref={ref}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          variants={containervariants}
        >
          <motion.div
            className="bg-gradient-to-r from-black to-yellow-950 p-8 rounded-md text-center text-white border border-white"
            variants={itemVariants}
          >
            <div className="flex flex-col items-center space-y-4">
              <div className="relative">
                <img
                  src={money}
                  alt=""
                  className="absolute top-3 inset-0 mx-auto"
                />
                <img src={group} alt="" className="block w-full h-full" />
              </div>
            </div>
            <h4 className="font-bold text-xl py-2">EARN MONEY</h4>
            <p className="text-left">
              You can earn money directly from the platform through
              monetization. As a creator you will now be able to get paid per
              view and earn income without long requirements, FOLLOWER count, or
              strict terms and conditions, what you make is what you earn with
              BEYOND.
            </p>
          </motion.div>

          <motion.div
            className="bg-gradient-to-r from-black to-yellow-950 p-8 rounded-md text-center text-white border border-white"
            variants={itemVariants}
          >
            <div className="flex flex-col items-center space-y-4">
              <div className="relative">
                <img
                  src={icon2}
                  alt=""
                  className="absolute top-5 inset-0 mx-auto"
                />
                <img src={group} alt="" className="block w-full h-full" />
              </div>
            </div>
            <h4 className="font-bold text-xl py-2">RECIEVE REWARDS</h4>
            <p className="text-left">
              BEYOND gives opportunity to all users, not just the top content
              creators. We are a platform that aims to provide rewards for
              activity on the platform on top of providing content. How we do
              this is provide reward points to users who are interactive, these
              points can be redeemed for DeFi products, which then can be turned
              into income.
            </p>
          </motion.div>
          <motion.div
            className="bg-gradient-to-r from-black to-yellow-950 p-8 rounded-md text-center text-white border border-white"
            variants={itemVariants}
          >
            <div className="flex flex-col items-center space-y-4">
              <div className="relative">
                <img
                  src={icon1}
                  alt=""
                  className="absolute top-5 inset-0 mx-auto"
                />
                <img src={group} alt="" className="block w-full h-full" />
              </div>
            </div>
            <h4 className="font-bold text-xl py-2">CONNECT TO WEB3</h4>
            <p className="text-left">
              Enjoy a mainstream social media platform with block w-fullchain
              integration. Now you can access both real world and digital world
              with BEYOND. It does not require you to have any knowledge in the
              digital space, yet you will be benefiting from what crypto has to
              offer.
            </p>
          </motion.div>
          <motion.div
            className="bg-gradient-to-r from-black to-yellow-950 p-8 rounded-md text-center text-white border border-white"
            variants={itemVariants}
          >
            <div className="flex flex-col items-center space-y-4">
              <div className="relative">
                <img
                  src={icon4}
                  alt=""
                  className="absolute top-5 inset-0 mx-auto"
                />
                <img src={group} alt="" className="block w-full h-full" />
              </div>
            </div>
            <h4 className="font-bold text-xl py-2">LESS FEES</h4>
            <p className="text-left">
              Majority of subscription paying platforms are roughly at the 20%
              mark, which is a large chunk out for content creators. We will be
              implementing crypto payments allowing users to alternatively
              receive payments through toke/coin, the benefit is they will only
              be charged 1% allowing creators to save 19% more on their hard
              earned tips and subscriptions.
            </p>
          </motion.div>
          <motion.div
            className="bg-gradient-to-r from-black to-yellow-950 p-8 rounded-md text-center text-white border border-white"
            variants={itemVariants}
          >
            <div className="flex flex-col items-center space-y-4">
              <div className="relative">
                <img
                  src={icon3}
                  alt=""
                  className="absolute top-5 inset-0 mx-auto"
                />
                <img src={group} alt="" className="block w-full h-full" />
              </div>
            </div>
            <h4 className="font-bold text-xl py-2">GET PAYING SUBSCRIBERS</h4>
            <p className="text-left">
              Growing your social presence? Let us make it more rewarding for
              you! Now you will have the option to allow your FOLLOWERS to
              subscribe to you monthly. You can share hidden and exclusive
              content to paying subscribers only, while still being able to
              share publicly to your public FOLLOWERS. You as a creator can now
              cater to all aspects of your FOLLOWING without the need to
              disburse them across different socials.
            </p>
          </motion.div>
          <motion.div
            className="bg-gradient-to-r from-black to-yellow-950 p-8 rounded-md text-center text-white border border-white"
            variants={itemVariants}
          >
            <div className="flex flex-col items-center space-y-4">
              <div className="relative">
                <img
                  src={icon5}
                  alt=""
                  className="absolute top-5 inset-0 mx-auto"
                />
                <img src={group} alt="" className="block w-full h-full" />
              </div>
            </div>
            <h4 className="font-bold text-xl py-2">GET PAID ON YOUR VIDEOS</h4>
            <p className="text-left">
              What makes BEYOND more exceptional, is that you can now receive
              paid tips from anyone on the platform. Since you will have an
              access to all users of the entire platform, every time you post
              publicly you might just receive a random tip from someone across
              the other side of the globe... so be sure to keep posting!
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Services;
