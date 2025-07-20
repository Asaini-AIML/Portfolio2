import React from 'react';
import { motion } from 'framer-motion';
import { fadeIn } from '../../framerMotion/Variant';
const SingleExperience = ({ experience }) => {
  if (!experience) return null; // safety check

  return (
    <motion.div   variants={fadeIn('right', 0.4)}
                    initial='hidden'
                    whileInView='show'
                    viewport={{ once: false, amount: 0 }} className='md:h-[350px] md:w-[240px] sm:h-full sm:w-full border-2 border-orange rounded-2xl mt-12 p-4 border-dotted hover:shadow-lg hover:scale-105 transition-transform duration-300'>
      <p className='font-bold text-cyan text-lg'>{experience.job}</p>
      <p className='text-orange font-medium'>{experience.company}</p>
      <p className='text-lightOrange text-sm'>{experience.Date}</p>
      <ul className='list-disc mt-4 pl-4 text-white text-sm space-y-1'>
        {experience.responsibilities?.map((resp, index) => (
          <li key={index}>{resp}</li>
        ))}
      </ul>
    </motion.div>
  );
};

export default SingleExperience;
