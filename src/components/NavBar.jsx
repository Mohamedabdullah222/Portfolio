import React, { useEffect, useState } from 'react';
import { Menu, X } from "lucide-react";
import { useThemeContext } from "../context/ThemeContext";
import { navLinks } from "../data/navLinks";
import { Link } from "react-router-dom";
import ThemeToggle from '../context/ThemeToggle';
import { logo } from '../assets';

const NavBar = () => {
  const [openMobileMenu, setOpenMobileMenu] = useState(false);
  const { theme } = useThemeContext();

  useEffect(() => {
    document.body.classList.toggle("overflow-hidden", openMobileMenu);
  }, [openMobileMenu]);

  return (
<nav className={`fixed top-0 z-50 w-full py-4 ${openMobileMenu ? '' : 'backdrop-blur'}`}>
    <div className="container mx-auto flex items-center justify-between px-6 ">

                  <style>{`
                @keyframes shine {
                    0% {
                        background-position: 0% 50%;
                    }
            
                    50% {
                        background-position: 100% 50%;
                    }
            
                    100% {
                        background-position: 0% 50%;
                    }
                }
            
                .button-bg {
                    background: conic-gradient(from 0deg, #00F5FF, #000, #000, #00F5FF, #000, #000, #000, #00F5FF);
                    background-size: 300% 300%;
                    animation: shine 6s ease-out infinite;
                }
            `}</style>

      <Link className='flex gap-2 items-center font-bold text-lg ' to="/">
        <img className="h-9 w-auto shrink-0 rounded-full  " src={logo} alt="Logo" width={140} height={40} />
        <p>Mohamed Abdullah</p>
      </Link>

      {/* Desktop Nav */}
      <div className="hidden items-center md:gap-8 lg:gap-9 md:flex lg:pl-20">
        {navLinks.map((link) => (
  <a key={link.name} href={link.href} className="hover:text-slate-600 dark:hover:text-slate-300 transition duration-500">
    {link.name}
  </a>
        ))}
      </div>

      {/* Mobile Menu */}
      <div className={`fixed inset-0 flex flex-col items-center justify-center gap-6 text-lg font-medium bg-white/60 dark:bg-black/40 backdrop-blur-md md:hidden transition duration-500 ${openMobileMenu ? "translate-x-0" : "-translate-x-full"}`}>
              {navLinks.map((link) => (
  <a key={link.name} href={link.href}>
    {link.name}
  </a>
        ))}
            <div className="button-bg rounded-full p-0.5 hover:scale-105 transition duration-500 active:scale-100">
              <a href="#contact">


                <button className="px-8 text-sm py-2.5 text-white rounded-full font-medium bg-gray-800 transition duration-500">
                    Get started
                </button>
              </a>
            </div>        <div className="absolute top-4 right-4">
          <button className="aspect-square size-10 p-1 items-center justify-center bg-[#222] hover:bg-[#111] transition duration-500 text-white rounded-md flex" onClick={() => setOpenMobileMenu(false)} aria-label="Close menu">
            <X size={24} />
          </button>
        </div>
      </div>

      <div className="flex items-center gap-4">
        <ThemeToggle />

            <div className=" hidden md:block button-bg rounded-full p-0.5 hover:scale-105 transition duration-500 active:scale-100">
              <a href="#contact">

                <button className="px-8 text-sm py-2.5 text-white rounded-full font-medium bg-gray-800 transition duration-500">
                    Get started
                </button>
              </a>
            </div>

        <button onClick={() => setOpenMobileMenu(!openMobileMenu)} className="md:hidden transition duration-500" aria-label="Open menu">
          <Menu size={26} />
        </button>
      </div>
      </div>

    </nav>
  );
};

export default NavBar;
