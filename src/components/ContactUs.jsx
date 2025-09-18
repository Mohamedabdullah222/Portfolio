import React from 'react'
import { useForm, ValidationError } from '@formspree/react';
import { motion } from 'framer-motion';


function ContactForm() {
  const [state, handleSubmit] = useForm("mnnbeaay");

  if (state.succeeded) {
    return <p>Thanks for joining!</p>;
  }

  return (
    <motion.div
    initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
                duration: 0.4,
                scale: { type: "spring", visualDuration: 0.4, bounce: 0.5 },
            }}
    id='contact'>
      <style>{`
        .button-wrapper::before {
          animation: spin-gradient 4s linear infinite;
        }

        @keyframes spin-gradient {
          from {
            transform: rotate(0deg);
          }
          to {
            transform: rotate(360deg);
          }
        }
      `}</style>

      <form onSubmit={handleSubmit} className="flex flex-col items-center text-sm">
        <div className="w-full h-[1px] bg-black mt-10 mb-10"></div>

        <h2 className="text-[50px] font-medium pb-10 pt-4 dark:text-white text-[#222]">Contact Us</h2>

        <div className="flex flex-col md:flex-row items-center gap-8 w-[350px] md:w-[700px]">
          <div className="w-full">
            <label className="text-gray-900 dark:text-white" htmlFor="name">Your Name</label>
            <input
              className="h-12 p-2 mt-2 w-full border border-gray-500/30 rounded outline-none focus:border-indigo-300 dark:text-white dark:bg-[#333] transition duration-500"
              id="name"
              type="text"
              name="name"
              required
            />
            <ValidationError prefix="Name" field="name" errors={state.errors} />
          </div>

          <div className="w-full">
            <label className="text-gray-900 dark:text-white" htmlFor="email">Your Email</label>
            <input
              className="h-12 p-2 mt-2 w-full border border-gray-500/30 rounded outline-none focus:border-indigo-300 dark:text-white dark:bg-[#333] transition duration-500"
              id="email"
              type="email"
              name="email"
              required
            />
            <ValidationError prefix="Email" field="email" errors={state.errors} />
          </div>
        </div>

        <div className="mt-6 w-[350px] md:w-[700px]">
          <label className="text-gray-900 dark:text-white" htmlFor="message">Message</label>
          <textarea
            className="w-full mt-2 p-2 h-40 border border-gray-500/30 rounded resize-none outline-none focus:border-indigo-300 dark:text-white dark:bg-[#333] transition duration-500"
            id="message"
            name="message"
            required
          />
          <ValidationError prefix="Message" field="message" errors={state.errors} />
        </div>

        <div className="relative inline-block p-0.5 mt-5 mb-6 rounded-full overflow-hidden hover:scale-105 transition duration-500 active:scale-100 before:content-[''] before:absolute before:inset-0 before:bg-[conic-gradient(from_0deg,_#00F5FF,_#00F5FF30,_#00F5FF)] button-wrapper">
          <button
            type="submit"
            disabled={state.submitting}
            className="relative z-10 bg-gray-800 text-white rounded-full w-56 h-12 px-4 py-3 font-medium text-sm transition duration-500"
          >
            Send Message
          </button>
        </div>
      </form>

      <div className="w-full h-[1px] bg-black"></div>
    </motion.div>
  );
}

export default ContactForm;
