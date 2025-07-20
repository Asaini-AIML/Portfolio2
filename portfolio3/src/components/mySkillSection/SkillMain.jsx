import React from 'react'
import SkillText from './SkillText'
import AllSkills from './AllSkills'
import AllSkillSm from './AllSkillSm';
import { motion } from 'framer-motion';
import { fadeIn } from '../../framerMotion/Variant';
const SkillMain = () => {
  return (
    <div id="skills">
      <div className="max-w-[1200px] px-4 mx-auto min-h-[600px] relative overflow-hidden">
      <motion.div
       variants={fadeIn('down', 0.4)}
              initial='hidden'
              whileInView='show'
              viewport={{ once: false, amount: 0 }}
      > <SkillText /></motion.div> 
        {/* Now inside the relative parent */}
        <div className="bottom-[50px] absolute left-[50%] -translate-x-[50%] lg:block sm:hidden ">
         <AllSkills />
        </div>
        <div className='sm:block lg:hidden'>
            <AllSkillSm/>
        </div>
      </div>
    </div>
  );
};

export default SkillMain;
