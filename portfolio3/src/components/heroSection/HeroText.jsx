import React from 'react';
import { motion } from 'framer-motion'; // ✅ CORRECTED
import { fadeIn } from '../../framerMotion/Variant';

const HeroText = () => {
  return (
    <div className='flex flex-col gap-4 h-full justify-center md:text-left sm:text-center overflow-hidden'>
      <motion.h2
        variants={fadeIn('left', 0.6)}
        initial='hidden'
        whileInView='show'
        viewport={{ once: false, amount: 0 }}
        className='lg:text-2xl sm:text-xl uppercase text-cyan'
      >
       SOFTWARE & WEB DEVELOPER

      </motion.h2>

      <motion.h1
        variants={fadeIn('right', 0.4)}
        initial='hidden'
        whileInView='show'
        viewport={{ once: false, amount: 0 }}
        className='md:text-[2.8rem] lg:text-6xl sm:text-4xl font-bold font-special text-orange'
      >
        Anubhav Saini
      </motion.h1>

      <motion.p
        variants={fadeIn('left', 0.6)}
        initial='hidden'
        whileInView='show'
        viewport={{ once: false, amount: 0 }}
        className='text-lg mt-4 text-white'
      >
       Turning ideas into full-stack solutions <br /> using React, Node.js, and AI.
      </motion.p>
    </div>
  );
};

export default HeroText;
