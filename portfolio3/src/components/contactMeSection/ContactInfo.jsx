import React from 'react'
import { MdOutlineEmail } from "react-icons/md";
import { FaSquarePhone } from "react-icons/fa6";
import { FaLocationDot } from "react-icons/fa6";
import SingleInfo from './SingleInfo';
const ContactInfo = () => {
  return (
    <div className='flex flex-col text-white gap-4'>
        <SingleInfo text="anubhav@gmail.com" Image={MdOutlineEmail } />
         <SingleInfo text="+91 XXXXXXX44" Image={FaSquarePhone} />
          <SingleInfo text="India,Earth" Image={FaLocationDot } />




    </div>
  )
}

export default ContactInfo