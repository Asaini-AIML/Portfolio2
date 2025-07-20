import React from 'react'
import ContactForm from './ContactForm'

const ContactMeLeft = () => {
  return (
    <div className='flex flex-col gap-8 w-full'>
      <div>
        <h2 className='text-orange text-3xl mb-4'>Get In Touch</h2>
        <p className='text-white'>Whether it’s a job opportunity, a project, or just a hello
          <br />
           — I’d love to hear from you.
        </p>

      </div>
      <ContactForm/>
    </div>
  )
}

export default ContactMeLeft