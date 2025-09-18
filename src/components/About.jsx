import React from "react";
import { cv, pro } from "../assets";
import { useThemeContext } from "../context/ThemeContext";
import { FaFacebookSquare, FaLinkedin } from "react-icons/fa";
import { motion } from 'framer-motion';

import {
  FaSquareGithub,
  FaSquareInstagram,
  FaSquareWhatsapp,
} from "react-icons/fa6";

const About = () => {
  const { theme } = useThemeContext();
  const [hoveredIndex, setHoveredIndex] = React.useState(null);

  const handleMouseMove = (e, index, ref) => {
    const bounds = ref.current.getBoundingClientRect();
    setPosition({ x: e.clientX - bounds.left, y: e.clientY - bounds.top });
    setHoveredIndex(index);
  };
  

  return (
    <motion.div
      id="/"
      className="container mx-auto grid grid-cols-1 md:grid-cols-2 items-center gap-12 py-20 px-6   "
                  initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
                duration: 0.4,
                scale: { type: "spring", visualDuration: 0.4, bounce: 0.5 },
            }}

    >
      <style>{`
                @keyframes rotate {
                    100% {
                        transform: rotate(1turn);
                    }
                }
            
                .rainbow::before {
                    content: '';
                    position: absolute;
                    z-index: -2;
                    left: -50%;
                    top: -50%;
                    width: 200%;
                    height: 200%;
                    background-position: 100% 50%;
                    background-repeat: no-repeat;
                    background-size: 50% 30%;
                    filter: blur(6px);
                    background-image: linear-gradient(#FFF);
                    animation: rotate 4s linear infinite;
                }
            `}</style>

      {/* Text Section */}
      <div className="text-slate-800 dark:text-slate-100 flex flex-col gap-6 max-w-xl">
        <h3 className="text-3xl font-bold   ">Portfolio - Mohamed Abdullah</h3>
        <h1 className="text-4xl md:text-4xl font-bold leading-tight font-mono">
          Front-End Developer
        </h1>

        <p className="text-sm md:text-mono leading-relaxed text-slate-800 dark:text-slate-100">
          Front-End Developer with 2+ years of experience in building
          user-friendly and responsive web interfaces.
          <br />• <strong>Tech Stack:</strong> HTML5, CSS3, Bootstrap,
          JavaScript (ES6), React.js, Tailwind CSS, Redux Toolkit ,Firebase
          <br />• <strong>UI/UX Tools:</strong> Figma, Adobe XD
          <br />
          • Strong expertise in responsive web design, performance optimization,
          and integrating RESTful APIs.
          <br />• Passionate about writing clean, maintainable code and
          delivering seamless user experiences across all devices.
        </p>
        <div className="flex flex-wrap gap-4 mt-4">
          <a
            className="text-[40px] text-[#222] hover:text-[#333] hover:scale-105  transition duration-500  dark:text-slate-100 dark:hover:text-slate-400"
            target="_blank"
            href="https://www.facebook.com/MohamedAbdullahh22"
          >
            <FaFacebookSquare />
          </a>
          <a
            className="text-[40px] text-[#111] hover:text-[#222] hover:scale-105 transition duration-500 dark:text-slate-100 dark:hover:text-slate-400"
            target="_blank"
            href="https://www.instagram.com/mohamed_abd_3"
          >
            <FaSquareInstagram />
          </a>
          <a
            className="text-[40px] text-[#111] hover:text-[#222] hover:scale-105 transition duration-500 dark:text-slate-100 dark:hover:text-slate-400"
            target="_blank"
            href="https://github.com/Mohamedabdullah222"
          >
            <FaSquareGithub />
          </a>
          <a
            className="text-[40px] text-[#111] hover:text-[#222] hover:scale-105 transition duration-500 dark:text-slate-100 dark:hover:text-slate-400"
            target="_blank"
            href="https://www.linkedin.com/in/mohamed-abdullah-m/"
          >
            <FaLinkedin />
          </a>
          <a
            className="text-[40px] text-[#111] hover:text-[#222] hover:scale-105 transition duration-500 dark:text-slate-100 dark:hover:text-slate-400"
            target="_blank"
            href="https://Wa.me/+201019564363"
          >
            <FaSquareWhatsapp />
          </a>
        </div>

        {/* Buttons */}
        <div className="flex flex-wrap gap-4 mt-4">
<div className="rainbow relative z-0 bg-white/15 overflow-hidden p-0.5 flex items-center justify-center rounded-full hover:scale-105 transition duration-300 active:scale-100">
  <a href={cv} download>
    <button className="px-8 text-sm py-3 text-white rounded-full font-medium bg-gray-900/80 backdrop-blur">
      Download CV
    </button>
  </a>
</div>


          <a
            href={cv}
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-3 border border-[#111] text-[#111] hover:bg-[#222] dark:border-[#fff]
             dark:text-[#fff] dark:hover:bg-gray-900/80 dark:hover:text-[white]
              hover:text-white rounded-full transition duration-500 "
          >
            View CV
          </a>
        </div>
      </div>

      {/* Image Section */}
      <div className="flex justify-center">
        <img
          src={pro}
          alt="JavaScript Logo"
          className="rounded-2xl  object-cover shadow-lg border-2 sm:w-64 sm:h-64 md:w-64 md:h-64 xl:w-96 xl:h-96  lg:w-64 lg:h-64:"
        />
      </div>
    </motion.div>
  );
};

export default About;
