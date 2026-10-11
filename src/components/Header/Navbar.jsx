import React, { useState } from 'react';
import { AnimatePresence, motion, useReducedMotion } from 'framer-motion';
import { Link } from 'react-scroll';
import { FaGraduationCap, FaBars, FaTimes, FaMoon, FaSun } from 'react-icons/fa';

export default function Navbar({ isDarkMode, onToggleTheme }) {
  const [navActive, setNavActive] = useState(false);
  const prefersReducedMotion = useReducedMotion();
  const sections = ['home', 'about', 'academics', 'campus life', 'admissions', 'contact'];

  return (
    <nav className="fixed top-0 left-0 w-full bg-sand/95 dark:bg-espresso-dark/95 backdrop-blur-md shadow-sm z-50 px-4 sm:px-6 py-4 flex justify-between items-center border-b border-espresso/10 dark:border-sand/10 transition-colors duration-300">
      <div className="flex items-center space-x-2 text-espresso-dark dark:text-sand font-black text-lg sm:text-xl tracking-tight cursor-pointer">
        <FaGraduationCap className="text-3xl text-espresso-light" />
        <div className="flex flex-col leading-none">
          <span>INDUS VISTA</span>
          <span className="text-[10px] text-brass font-bold tracking-widest uppercase">University</span>
        </div>
      </div>
      <div className="hidden lg:flex lg:space-x-5 xl:space-x-8 font-semibold text-sm text-espresso-dark/75 dark:text-sand/75">
        {sections.map((target) => (
          <Link key={target} to={target.replace(' ', '')} spy={true} smooth={true} offset={-80} duration={600} className="hover:text-brass transition-colors cursor-pointer capitalize active:text-espresso">
            {target}
          </Link>
        ))}
      </div>

      <button
        type="button"
        aria-label={`Switch to ${isDarkMode ? 'light' : 'dark'} mode`}
        onClick={onToggleTheme}
        className="ml-auto mr-4 lg:ml-0 lg:mr-0 p-2 rounded-full text-espresso-dark dark:text-brass-light hover:bg-espresso/10 dark:hover:bg-white/10 transition-colors"
      >
        {isDarkMode ? <FaSun aria-hidden="true" /> : <FaMoon aria-hidden="true" />}
      </button>

      <button
        type="button"
        aria-label={navActive ? 'Close navigation menu' : 'Open navigation menu'}
        aria-expanded={navActive}
        className="lg:hidden text-xl cursor-pointer text-espresso-dark dark:text-sand"
        onClick={() => setNavActive(!navActive)}
      >
        {navActive ? <FaTimes /> : <FaBars />}
      </button>

      <AnimatePresence>
        {navActive && (
        <motion.div
          initial={prefersReducedMotion ? false : { opacity: 0, y: -8 }}
          animate={{ opacity: 1, y: 0 }}
          exit={prefersReducedMotion ? undefined : { opacity: 0, y: -8 }}
          transition={{ duration: prefersReducedMotion ? 0 : 0.18, ease: 'easeOut' }}
          className="absolute top-full left-0 w-full bg-sand-card dark:bg-espresso shadow-xl flex flex-col space-y-4 p-6 font-semibold border-t border-espresso/10 dark:border-sand/10 lg:hidden"
        >
          {sections.map((target) => (
            <Link key={target} to={target.replace(' ', '')} spy={true} smooth={true} offset={-80} duration={600} onClick={() => setNavActive(false)} className="text-espresso-dark dark:text-sand hover:text-brass cursor-pointer capitalize text-base">
              {target}
            </Link>
          ))}
        </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
