import React from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import { Link } from 'react-scroll';

export default function Hero() {
  const prefersReducedMotion = useReducedMotion();
  const reveal = (delay = 0) => ({
    initial: prefersReducedMotion ? false : { opacity: 0, y: 12 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: prefersReducedMotion ? 0 : 0.45, delay, ease: 'easeOut' },
  });

  return (
    <section id="home" className="w-full relative min-h-[88vh] flex items-center bg-espresso-dark text-white pt-28 pb-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(128,100,53,0.2),transparent_55%)]" />
      <div className="absolute -bottom-40 -left-40 w-72 h-72 sm:w-[30rem] sm:h-[30rem] bg-brass/10 rounded-full blur-3xl pointer-events-none" />

      <div className="w-full max-w-7xl mx-auto relative z-10">
        <div className="max-w-4xl">
          <motion.div
            {...reveal()}
            className="flex items-center gap-3 text-brass-light text-[10px] sm:text-xs font-bold uppercase tracking-[0.2em] mb-6 sm:mb-8"
          >
            <span className="w-8 h-px bg-brass-light" aria-hidden="true" />
            Your next chapter starts here
          </motion.div>

          <motion.h1
            {...reveal(0.08)}
            className="text-[clamp(1.75rem,8vw,4rem)] sm:text-6xl lg:text-7xl font-black tracking-tight text-white mb-6 leading-[1.08]"
          >
            Learn with purpose.
            <span className="block text-brass-light mt-2">Shape what comes next.</span>
          </motion.h1>

          <motion.p
            {...reveal(0.16)}
            className="text-sm sm:text-base md:text-lg text-sand/75 max-w-2xl mb-9 sm:mb-10 font-medium leading-relaxed"
          >
            Explore degree programs, build practical skills, and prepare for the opportunities ahead at Indus Vista University.
          </motion.p>

          <motion.div
            {...reveal(0.24)}
            className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 sm:gap-4"
          >
            <Link to="academics" smooth={true} offset={-80} duration={600} className="inline-flex justify-center items-center bg-brass hover:bg-brass-light text-white font-bold px-6 sm:px-7 py-3.5 rounded-xl shadow-lg shadow-brass/15 transition-colors cursor-pointer text-center text-sm">
              Explore programs
            </Link>
            <Link to="admissions" smooth={true} offset={-80} duration={600} className="inline-flex justify-center items-center bg-white/5 hover:bg-white/10 text-sand font-bold px-6 sm:px-7 py-3.5 rounded-xl border border-sand/20 transition-colors cursor-pointer text-center text-sm">
              Apply for admission
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
