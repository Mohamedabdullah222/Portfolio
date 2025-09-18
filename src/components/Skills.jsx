import React from "react";
import { useThemeContext } from "../context/ThemeContext";
import { companyLogos } from "../data/companyLogos";
import { motion } from 'framer-motion';

const Skills = () => {
  const { theme } = useThemeContext();


  return (
    <motion.div
    initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
                duration: 0.4,
                scale: { type: "spring", visualDuration: 0.4, bounce: 0.5 },
            }}
    id="skills">
      <div className="w-full h-[1px] bg-black mt-10 mb-10"></div>

      <div className="flex flex-col items-center text-sm">
        <h2 className="text-[50px] font-medium pb-20 pt-4 dark:text-white text-[#222]">
          Skills
        </h2>
      </div>

<style>{`
  .marquee-inner {
    display: flex;
    height: 100%;
    animation: marqueeScroll 15s linear infinite;
    align-items: center; 
  }

  .marquee:hover .marquee-inner {
    animation-play-state: paused;
  }

  @keyframes marqueeScroll {
    0% {
      transform: translateX(0%);
    }
    100% {
      transform: translateX(-50%);
    }
  }
`}</style>

<div className="marquee overflow-hidden w-full relative max-w-6xl mx-auto select-none h-32">
  {/* Gradient left */}
  <div className="absolute left-0 top-0 h-full w-20 z-10 pointer-events-none bg-gradient-to-r from-[#333] dark:from-white to-transparent" />

  {/* Scrolling content */}
  <div className="marquee-inner min-w-[200%]">
    <div className="flex gap-10 px-10">
      {[...companyLogos, ...companyLogos].map((company, index) => (
        <div
          key={index}
          className="flex flex-col items-center text-center w-24"
        >
          <img
            src={company.image}
            alt={`${company.name} logo`}
            className="w-10 h-10 object-contain mb-1"
            draggable={false}
          />
          <span className="text-lg text-[#333] dark:text-white">
            {company.name}
          </span>
        </div>
      ))}
    </div>
  </div>

  {/* Gradient right */}
  <div className="absolute right-0 top-0 h-full w-20  z-10 pointer-events-none bg-gradient-to-l from-[#333] dark:from-white to-transparent" />
</div>
    </motion.div>
  );
};

export default Skills;
