import React from 'react';
import { motion } from 'framer-motion';
import { fadeIn } from '../../framerMotion/Variant';
import { FaArrowRight } from 'react-icons/fa';

// Certificate Data
const certificateList = [
  {
    title: 'React Certificate',
    image: 'images/ReactCertificate.png',
  },
  {
    title: 'JavaScript Certificate',
    image: 'images/JavaScript.png',
  },
  {
    title: 'SQL Certificate',
    image: 'images/SqlCertificate.png',
  },
  {
    title: 'MERN Training',
    image: 'images/MernTraining.png',
  }
];

const AllExperience = () => {
  return (
    <div className="flex flex-wrap justify-center gap-8 items-center py-10">
      {certificateList.map((item, index) => (
        <div key={index} className="flex items-center gap-4 bg-darkBrown ">
          {/* Certificate Card */}
          <motion.div
            variants={fadeIn('up', 0.2 * index)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.3 }}
            className="shadow-md rounded-lg overflow-hidden text-center"
          >
            <img
              src={item.image}
              alt={item.title}
              className="w-full max-w-[280px] h-[180px] object-cover rounded-md border border-gray-600 shadow-lg transition-transform duration-300 hover:scale-105"
            />
            <p className="text-white  text-sm bg-lightBrown">{item.title}</p>
          </motion.div>

          {/* Arrow Between Cards */}
          {index < certificateList.length - 1 && (
            <motion.div
              variants={fadeIn('right', 0.3)}
              initial="hidden"
              whileInView="show"
              viewport={{ once: false, amount: 0 }}
            >
              <FaArrowRight className="text-4xl text-orange lg:block sm:hidden" />
            </motion.div>
          )}
        </div>
      ))}
    </div>
  );
};

export default AllExperience;
