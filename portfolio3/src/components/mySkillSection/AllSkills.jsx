import React from 'react'
import { TiHtml5 } from "react-icons/ti";
import { FaCss3Alt } from "react-icons/fa6";
import { IoLogoNodejs } from "react-icons/io";
import { IoLogoReact } from "react-icons/io5";
import { TbBrandJavascript } from "react-icons/tb";
import { RiTailwindCssFill } from "react-icons/ri";
import { DiMongodb } from "react-icons/di";
import { SiMysql } from "react-icons/si";
import { FaGithub } from "react-icons/fa";
import { SiCplusplus } from 'react-icons/si';  
import SingleSkill from './SingleSkill';
import { motion } from 'framer-motion';
import { fadeIn } from '../../framerMotion/Variant'; 

const skills=[
  {
    name: "C++",
    
    icon: SiCplusplus
  },

  {
    name: "HTML",
    
    icon: TiHtml5
  },
  {
    name: "CSS",
    
    icon:FaCss3Alt
  },
  {
    name: "JAVASCRIPT",
    
    icon: TbBrandJavascript
  },
  {
    name: "REACT",
    
    icon: IoLogoReact
  },
  {
    name: "NODE.JS",
  
    icon: IoLogoNodejs
  },
  {
    name:"TAILWIND",
    icon:RiTailwindCssFill
  },
   {
    name: "MONGODB",
    
    icon: DiMongodb
  },
   {
    name: "SQL",
    
    icon: SiMysql
  },
   {
    name: "GITHUB",
    
    icon: FaGithub
  },
]
const AllSkills = () => {
  return (
    <div className='flex items-center justify-center relative gap-2 max-w-[1200px] mx-auto'>
{skills.map((item,index)=>{
    return(
      <motion.div
      variants={fadeIn('up', `0.${index}`)}
                    initial='hidden'
                    whileInView='show'
                    viewport={{ once: false, amount: 0 }}
      >
     <SingleSkill key={index} text={item.name} imgSvg={<item.icon/>}/>
     </motion.div>
)
})}
    </div>
  )
}

export default AllSkills