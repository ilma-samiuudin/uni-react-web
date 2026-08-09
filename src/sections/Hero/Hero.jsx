import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-scroll';

export default function Hero() {
  return (
    <section id="home" className="w-full relative min-h-screen flex items-center justify-center bg-slate-950 text-white pt-24 pb-12 px-4 sm:px-6 lg:px-8 overflow-hidden">
      {/* Structural Visual Network Background Mesh */}
      <div className="absolute inset-0 bg-[radial-gradient(#1e293b_1px,transparent_1px)] [background-size:24px_24px] opacity-20" />
      <div className="absolute top-1/4 left-1/4 w-48 h-48 sm:w-96 sm:h-96 bg-blue-700/10 rounded-full blur-3xl pointer-events-none" />

      <div className="w-full max-w-5xl mx-auto text-center relative z-10 px-2">
        <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.5 }} className="inline-flex items-center px-3 py-1.5 bg-blue-500/10 border border-blue-500/20 text-blue-400 rounded-full text-[10px] sm:text-xs font-bold uppercase tracking-wider mb-6 sm:mb-8 max-w-full text-center">
          <span>Government Chartered Institution Status</span>
        </motion.div>
        <motion.h1 initial={{ opacity: 0, y: 25 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.2 }} className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-black tracking-tight text-white mb-6 sm:mb-8 leading-tight sm:leading-[1.05]">
          Inspiring Innovation. <br />
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-500 via-indigo-400 to-slate-400">Architecting Futures.</span>
        </motion.h1>

        <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.8, delay: 0.4 }} className="text-sm sm:text-base md:text-lg lg:text-xl text-slate-400 max-w-3xl mx-auto mb-10 sm:mb-12 font-medium leading-relaxed">
          Welcome to Indus Vista University. Experience an advanced multi-disciplinary educational landscape designed to integrate industry-expert mentorship with state-of-the-art computational infrastructure.
        </motion.p>

        {/* Responsive Flex Actions Buttons Group Stack */}
        <motion.div initial={{ opacity: 0, y: 15 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.6 }} className="flex flex-col sm:flex-row justify-center items-center gap-4 w-full max-w-md mx-auto sm:max-w-none">
          <Link to="admissions" smooth={true} offset={-80} duration={600} className="w-full sm:w-auto bg-blue-600 hover:bg-blue-500 text-white font-bold px-6 sm:px-8 py-3.5 sm:py-4 rounded-xl shadow-lg shadow-blue-600/10 transition-all cursor-pointer text-center text-sm sm:text-base">
            Apply Online Intake 2026
          </Link>
          <Link to="academics" smooth={true} offset={-80} duration={600} className="w-full sm:w-auto bg-slate-900 hover:bg-slate-800 text-slate-200 font-bold px-6 sm:px-8 py-3.5 sm:py-4 rounded-xl border border-slate-800 transition-all cursor-pointer text-center text-sm sm:text-base">
            Explore Faculty Catalogs
          </Link>
        </motion.div>
      </div>
    </section>
  );
}


