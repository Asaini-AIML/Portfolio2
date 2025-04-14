import React from 'react';
import { BsOctagon } from "react-icons/bs";

const HeroPic = () => {
  return (
    <div className="relative h-full flex items-center justify-center">
      <img
        src="/images/Untitled_design__6_-removebg-preview (1).png"
        alt="Anubhav Saini"
        className="max-h-[450px] w-auto"
      />
      <div className="absolute -z-10 flex justify-center items-center animate-pulse">
        <BsOctagon className="md:h-[70%] sm:h-[120%] min-h-[450px] w-auto text-cyan blur-md animate-[spin_20s_linear_infinite]" />
      </div>
    </div>
  );
};

export default HeroPic;
