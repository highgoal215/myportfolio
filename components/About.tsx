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
        <p className="text-gray-300 text-center ">
          With a strong background in full-stack development, my expertise lies
          particularly in blockchain technology. I specialize in creating secure
          decentralized applications, designing and implementing blockchain
          solutions, and programming smart contracts. My toolkit includes
          proficiency in Hardhat, Remix, and web3.js, which are essential for
          modern blockchain development.
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
