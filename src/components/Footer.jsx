import React from "react";
import { useThemeContext } from "../context/ThemeContext";
import { FaFacebookSquare, FaLinkedin } from "react-icons/fa";
import {
  FaSquareGithub,
  FaSquareInstagram,
  FaSquareWhatsapp,
} from "react-icons/fa6";
import { navLinks } from "../data/navLinks";

const Footer = () => {
  const { theme } = useThemeContext();

  return (
    <>
          <style>{`
                @import url('https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap');
            
                * {
                    font-family: 'Poppins', sans-serif;
                }
            `}</style>
      <div className="w-full h-[1px]  "></div>


      <footer className="flex flex-col bg-slate-200 items-center justify-around w-full py-16 text-sm text-gray-800/70 dark:bg-[#1e26299a] ">
        <div className="flex items-center gap-8  ">
                  {navLinks.map((link) => (
            <a key={link.name} href={link.href} className="font-medium text-gray-900 hover:text-black dark:text-slate-100 dark:hover:text-slate-400 transition duration-500">
              {link.name}
            </a>
                  ))}

        </div>
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
        <p className="mt-8 text-center dark:text-slate-100 text-gray-900">
          Copyright © 2025 <a href="https://github.com/Mohamedabdullah222"
          target="_blank">Mohamed Abdullah</a>. All
          rights reservered.
        </p>
      </footer>
    </>
  );
};

export default Footer;
