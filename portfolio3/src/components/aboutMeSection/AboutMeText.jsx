import React from "react";

const AboutMeText = () => {
  return (
    <div className="flex flex-col md:item-start sm:item-center md:text-left sm:text-center">
      <h2 className="text-6xl text-cyan mb-10">About Me</h2>
      <p className="text-white">
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Vel odio
        adipisci atque dolorum excepturi maxime quia in id eius veritatis nobis
        voluptate, ipsa molestiae reprehenderit provident laudantium sapiente
        tenetur inventore obcaecati mollitia repudiandae cupiditate explicabo.
        Error dolorem minus corporis. Facilis dolor exercitationem aperiam quo
        vitae est recusandae architecto doloribus iste soluta, beatae impedit,
        ipsam laudantium voluptates ducimus quam saepe sed aspernatur minima
        aliquid quas unde! Ad tempore hic exercitationem molestias voluptate
        quas maiores sapiente cumque architecto doloribus excepturi in
        quibusdam, deleniti consequatur dolore unde? Dolores sit excepturi
        dolor, harum, qui perspiciatis ipsum quibusdam obcaecati quae minus non
        velit officia aliquam!
      </p>
      <button className="border border-orange rounded-full py-2 px-4 text-lg flex items-center mt-10 hover:bg-orange transition-all duration-500 cursor-pointer md:self-start sm:self-center text-white hover:text-cyan">My Project</button>
    </div>
  );
};

export default AboutMeText;
