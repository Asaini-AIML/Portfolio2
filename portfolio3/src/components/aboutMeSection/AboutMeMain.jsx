import React from 'react'
import AboutMeText from './AboutMeText'
import AboutMeImage from './AboutMeImage'
import { motion } from 'framer-motion'
import { fadeIn } from '../../framerMotion/Variant'
const AboutMeMain = () => {
  return (
    <div id="about" className='flex md:flex-row sm:flex-col gap-12 max-w-[1200px] mx-auto mt-[100px] justify-center items-center'>
        <motion.div
        variants={fadeIn('right', 0.4)}
                initial='hidden'
                whileInView='show'
                viewport={{ once: false, amount: 0.7 }}>
          
        <AboutMeText/>
        </motion.div>
        <motion.div
        variants={fadeIn('left', 0.4)}
                initial='hidden'
                whileInView='show'
                viewport={{ once: false, amount: 0.7 }}
        >
        <AboutMeImage/>
        </motion.div>
    </div>
  )
}

export default AboutMeMain