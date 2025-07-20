import React from 'react'
import ExperienceInfo from './ExperienceInfo'

const ExperienceTopLeft = () => {
  return (
    <div className='flex flex-col gap-6 w-[300px]'>
      <p className='text-orange font-bold uppercase text-3xl font-special text-center '>LEARNING & BUILDING SINCE 2021</p>
      <div className='flex justify-center items-center gap-4'>
        <ExperienceInfo number="6+" text='Certificates'/>
        <p className='font-bold text-6xl text-lightBrown'></p>
        <ExperienceInfo number="5+" text='PROJECTS' />
      </div>
      <p className='text-center text-white '>Built real-world full-stack projects and earned certifications in C++, React, JavaScript, and Problem Solving. Passionate about creating user-friendly web applications.</p>
      <ExperienceInfo number="300+" text='LeetCode Problem'/>

    </div>
  )
}

export default ExperienceTopLeft