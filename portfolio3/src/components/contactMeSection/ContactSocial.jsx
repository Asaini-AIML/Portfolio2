import React from 'react'
import SingleContactSocial from './SingleContactSocial'
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaSquareWhatsapp } from "react-icons/fa6";

import { FaSquareXTwitter } from "react-icons/fa6";
const ContactSocial = () => {
  return (
    <div className='flex gap-4'>
        <SingleContactSocial link="https://github.com/Asaini-AIML" Icon={ FaGithub}/>
                <SingleContactSocial link="https://www.linkedin.com/in/anubhav-saini-asaini-04254324b/" Icon={FaLinkedin}/>
                        <SingleContactSocial link="https://x.com/Anubhav10759075" Icon={FaSquareXTwitter}/>
                         <SingleContactSocial link="https://wa.me/916396948244" Icon={FaSquareWhatsapp}/>
                        
        
    </div>
  )
}

export default ContactSocial