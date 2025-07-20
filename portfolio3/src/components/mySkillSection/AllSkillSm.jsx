import React from 'react';
import { TiHtml5 } from "react-icons/ti";
import { FaCss3Alt } from "react-icons/fa6";
import { IoLogoNodejs } from "react-icons/io";
import { IoLogoReact } from "react-icons/io5";
import { TbBrandJavascript } from "react-icons/tb";
import { RiTailwindCssFill } from "react-icons/ri";
// import SingleSkill from './SingleSkill'; // No need if not using it
import { motion } from 'framer-motion';
import { fadeIn } from '../../framerMotion/Variant';
const skills = [
  { name: "HTML", icon: TiHtml5 },
  { name: "CSS", icon: FaCss3Alt },
  { name: "JavaScript", icon: TbBrandJavascript },
  { name: "React", icon: IoLogoReact },
  { name: "Node.js", icon: IoLogoNodejs },
  { name: "TailWind", icon: RiTailwindCssFill }
];

const AllSkillSm = () => {
  return (
    <div className="grid md:grid-cols-4 sm:grid-cols-2 gap-2 my-12">
      {skills.map((item, index) => (
        <motion.div variants={fadeIn('up', 0.4)}
                      initial='hidden'
                      whileInView='show'
                      viewport={{ once: false, amount: 0.7 }} key={index} className="flex flex-col items-center">
          <item.icon className="text-7xl text-orange" />
          <p className="text-center mt-4 text-white">{item.name}</p>
        </motion.div>
      ))}
    </div>
  );
};

export default AllSkillSm;
