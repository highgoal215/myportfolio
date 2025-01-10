import React from "react";

const About: React.FC<{}> = () => {
  return (
    <section
      id="about"
      className="flex flex-col items-center justify-center h-full relative overflow-hidden pt-[35px] "
      style={{ transform: "scale(0.9" }}
    >
      <div className="flex flex-col  justify-around flex-wrap items-center   max-w-[900px]">
        <h1 className="text-white font-semibold text-6xl">ABOUT ME</h1>
        <p className=" tracking-[0.5em] text-transparent font-light pb-5  bg-clip-text bg-gradient-to-r from-purple-700 to-orange-500  text-1xl">
          EXPLORE NOW
        </p>
        <p className="text-blue-300 text-center text-2xl">
        A seasoned Blockchain and AI Engineer with 8 years of extensive experience in developing innovative solutions that leverage blockchain technology and artificial intelligence. 
        Proficient in designing decentralized applications, implementing smart contracts, and creating machine learning models to drive data-driven decision-making.
        Demonstrated expertise in various industries, including finance and supply chain management, with a strong focus on enhancing operational efficiency and security. 
        Skilled in multiple programming languages and frameworks such as Solidity, Python, and React. 
        Passionate about leveraging emerging technologies to solve complex problems and committed to continuous learning and improvement
          <br />
          <br />
          Committed to the advancement of blockchain technology, I am always
          exploring and learning to refine my skills.
        </p>
      </div>
    </section>
  );
};

export default About;
