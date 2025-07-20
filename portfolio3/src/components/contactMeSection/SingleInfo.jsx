import React from 'react';

const SingleInfo = ({ text, Image, href }) => {
  const content = (
    <div className="flex gap-4 items-center justify-start group transition-transform duration-300 hover:scale-[1.03]">
      <Image className="text-3xl text-orange group-hover:text-cyan-400 transition-colors duration-300" />
      <p className="text-base group-hover:text-cyan-300 transition-colors duration-300">{text}</p>
    </div>
  );

  return href ? (
    <a href={href} target="_blank" rel="noopener noreferrer">
      {content}
    </a>
  ) : (
    content
  );
};

export default SingleInfo;
