import React from 'react';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';
import { projects } from '../data/projects';
import { motion } from 'framer-motion';


const Projects = () => {
  const [hoveredIndex, setHoveredIndex] = React.useState(null);
  const [position, setPosition] = React.useState({ x: 0, y: 0 });

  

  const handleMouseMove = (e, index, ref) => {
    const bounds = ref.current.getBoundingClientRect();
    setPosition({ x: e.clientX - bounds.left, y: e.clientY - bounds.top });
    setHoveredIndex(index);
  };

  return (
    
    <motion.div
                initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
                duration: 0.4,
                scale: { type: "spring", visualDuration: 0.4, bounce: 0.5 },
            }}
 className=""
    id='projects'>
                      <div className="w-full h-[1px] bg-black mt-20 mb-10 "></div>

      <div className="flex flex-col items-center text-sm">
                            <h2 className="text-[50px] font-medium pb-10 pt-4 dark:text-white text-[#222]">
Projects</h2>

      </div>
          <div className="flex justify-center items-center gap-8 flex-wrap py-10 transition duration-500">
      {projects.map((person, index) => {
        const cardRef = React.createRef();

        return (
          <div
            key={index}
            ref={cardRef}
            onMouseMove={(e) => handleMouseMove(e, index, cardRef)}
            onMouseEnter={() => setHoveredIndex(index)}
            onMouseLeave={() => setHoveredIndex(null)}
            className="relative w-80 h-auto rounded-xl p-0.5 bg-white  backdrop-blur-md text-gray-800 overflow-hidden shadow-lg cursor-pointer dark:bg-black "
          >
            {hoveredIndex === index && (
              <div
                className="pointer-events-none blur-xl bg-gradient-to-r from-blue-400 via-indigo-500 to-purple-500 size-60 absolute z-0 transition-opacity duration-300"
                style={{
                  top: position.y - 120,
                  left: position.x - 120
                }}
              />
            )}

            <div className="relative z-10 bg-white dark:bg-[#222]  w-full rounded-[10px] flex flex-col items-center justify-center text-center">
              <img src={person.image} alt={person.name} className=" w-full h-40 object-cover rounded-t-[10px]" />
              
              <div className="p-6 w-full flex flex-col items-center justify-center text-center">
                <h2 className="text-2xl font-bold text-gray-800 mb-1 dark:text-white">{person.name}</h2>
                
                <p className="text-sm text-gray-500 mb-4 px-4 dark:text-white">{person.projectDesc}</p>

                {/* Project Info */}
                <div className="w-full bg-gray-50 dark:bg-[#111]    p-4 rounded-lg shadow-sm border text-left">
                  {/* GitHub & Demo Icons */}
                  <div className="flex justify-between items-center px-1">
                    <a
                      href={person.githubLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-800 hover:text-black transition hover:scale-105 dark:text-slate-100 duration-500"
                      title="View on GitHub"
                    >
                      <FaGithub size={22} />
                    </a>
                    <a
                      href={person.demoLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-indigo-600 hover:text-indigo-800 transition duration-500"
                      title="Live Demo"
                    >
                      <FaExternalLinkAlt size={20} />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </div>
    </motion.div>
  );
};

export default Projects;
