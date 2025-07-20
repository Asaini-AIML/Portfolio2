import React from 'react';
import { MdOutlineEmail } from 'react-icons/md';
import { FaSquarePhone, FaLocationDot } from 'react-icons/fa6';
import SingleInfo from './SingleInfo';

const ContactInfo = () => {
  return (
    <div className='flex flex-col text-white gap-4'>
      <SingleInfo
        text='nav.saini2004@gmail.com'
        Image={MdOutlineEmail}
        href='mailto:nav.saini2004@gmail.com'
      />
      <SingleInfo
        text='+91 6396948244'
        Image={FaSquarePhone}
        href='tel:+916396948244'
      />
      <SingleInfo
        text='Noida, India'
        Image={FaLocationDot}
      />
    </div>
  );
};

export default ContactInfo;
