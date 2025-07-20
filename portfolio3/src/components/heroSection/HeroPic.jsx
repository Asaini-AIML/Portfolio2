import React from 'react';
import { BsOctagon } from "react-icons/bs";
import { motion } from 'framer-motion';
import { fadeIn } from '../../framerMotion/Variant';
const HeroPic = () => {
  return (
    <motion.div 
     variants={fadeIn('left', 0.4)}
            initial='hidden'
            whileInView='show'
            viewport={{ once: false, amount: 0 }}
    className="relative h-full flex items-center justify-center">
      <img
        src="/images/Untitled_design__6_-removebg-preview (1).png"
        alt="Anubhav Saini"
        className="max-h-[450px] w-auto"
      />
      <div className="absolute -z-10 flex justify-center items-center animate-pulse">
        <BsOctagon className="md:h-[70%] sm:h-[120%] min-h-[450px] w-auto text-cyan blur-md animate-[spin_20s_linear_infinite]" />
      </div>
    </motion.div>
  );
};

export default HeroPic;
