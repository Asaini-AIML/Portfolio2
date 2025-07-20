import React from "react";

const AboutMeText = () => {
   const handleClick = () => {
    const contactSection = document.getElementById('projects');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };
  return (
    <div className="flex flex-col md:item-start sm:item-center md:text-left sm:text-center">
      <h2 className="text-6xl text-cyan mb-10">About Me</h2>
      <p className="text-white">
        I'm a Full Stack Developer with a strong focus on frontend development using React and JavaScript. I have a solid foundation in C++, Data Structures, and Algorithms, which enables me to write clean, optimized, and efficient code.

I enjoy building responsive, user-friendly web applications and take pride in delivering intuitive UI and smooth functionality. I'm passionate about continuous learning and always eager to take on new challenges that help me grow as a developer.
      </p>
      <button  onClick={handleClick} className="border border-orange rounded-full py-2 px-4 text-lg flex items-center mt-10 hover:bg-orange transition-all duration-500 cursor-pointer md:self-start sm:self-center text-white hover:text-cyan">My Project</button>
    </div>
  );
};

export default AboutMeText;
