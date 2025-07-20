import React from 'react'
import { FaArrowRight } from "react-icons/fa";
import SingleExperience from './SingleExperience'
import { motion } from 'framer-motion';
import { fadeIn } from '../../framerMotion/Variant';
import { div } from 'framer-motion/client';
const experienceList = [
  {
    job: 'Front-End Developer',
    company: 'Tech Solutions',
    Date: '2022 - Present',
    responsibilities: [
      'Developed responsive web applications using React and JavaScript',
      'Collaborated with designers to create user-friendly interfaces',
      'Optimized web applications for maximum speed and scalability'
    ]
  },
  {
    job: 'Back-End Developer',
    company: 'Tech Solutions LLP',
    Date: '2021 - 2022',
    responsibilities: [
      'Built REST APIs using Node.js and Express',
      'Integrated MongoDB for data persistence',
      'Improved backend performance and security'
    ]
  },
  {
    job: 'Node.js Developer',
    company: 'Tech Solutions CPP',
    Date: '2020 - 2021',
    responsibilities: [
      'Managed server-side logic using Node.js',
      'Created real-time services with WebSockets',
      'Wrote unit tests and maintained code quality'
    ]
  }
];

const AllExperience = () => {
  return (
    <div className='flex md:flex-row sm:flex-col items-center justify-between flex-wrap gap-4'>
      {experienceList.map((item, index) => (
        <div key={index} className='flex items-center gap-4'>
          <SingleExperience experience={item} />
          {index < experienceList.length - 1 && (
          <motion.div   variants={fadeIn('right', 0.4)}
                          initial='hidden'
                          whileInView='show'
                          viewport={{ once: false, amount: 0 }}>  <FaArrowRight className='text-6xl text-orange lg:block sm:hidden' /></motion.div>
          )}
         
        </div>
      ))}
    </div>
  )
}

export default AllExperience
