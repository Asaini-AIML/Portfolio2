import React from 'react'
import ProjectText from './ProjectText'
import SingleProject from './SingleProject'
import { motion } from 'framer-motion'
import { fadeIn } from '../../framerMotion/Variant'
const projects = [
    {
        name: 'Project 1',
        year: 'Mar 2022',
        align: "right",
        image: '/images/website-img-1.jpg', // remove 'public/' part
        link: "#",
    },
    {
        name: 'Project 2',
        year: 'Apr 2022',
        align: "left",
        image: '/images/website-img-2.webp',
        link: "#",
    },
     {
        name: 'Project 3',
        year: 'Apr 2025',
        align: "right",
        image: '/images/website-img-3.jpg',
        link: "#",
    },
     {
        name: 'Project 4',
        year: 'Apr 2024',
        align: "left",
        image: 'public/images/about-me.jpg',
        link: "#",
    }

    
]

const ProjectMain = () => {
    return (
        <div id='projects' className='max-w-[1200px] mx-auto px-4'>
        <motion.div   variants={fadeIn('up', 0.4)}
                        initial='hidden'
                        whileInView='show'
                        viewport={{ once: false, amount: 0 }}>   <ProjectText /></motion.div> 
            <div className='flex flex-col gap-20 max-w-[900px] mx-auto mt-12'>
                {projects.map((item, index) => (
                    <SingleProject
                        key={index}
                        name={item.name}
                        year={item.year}
                        align={item.align}
                        image={item.image}
                        link={item.link}
                    />
                ))}
            </div>
        </div>
    )
}

export default ProjectMain;
