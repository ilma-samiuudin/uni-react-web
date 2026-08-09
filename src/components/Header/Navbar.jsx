import React, { useState } from 'react';
import { Link } from 'react-scroll';
import { FaGraduationCap, FaBars, FaTimes } from 'react-icons/fa';

export default function Navbar() {
  const [navActive, setNavActive] = useState(false);
  const sections = ['home', 'about', 'academics', 'campus life', 'admissions', 'contact'];

  return (
    <nav className="fixed top-0 left-0 w-full bg-white/95 backdrop-blur-md shadow-sm z-50 px-6 py-4 flex justify-between items-center border-b border-slate-100">
      <div className="flex items-center space-x-2 text-slate-900 font-black text-xl tracking-tight cursor-pointer">
        <FaGraduationCap className="text-3xl text-blue-700" />
        <div className="flex flex-col leading-none">
          <span>INDUS VISTA</span>
          <span className="text-[10px] text-slate-400 font-bold tracking-widest uppercase">University</span>
        </div>
      </div>
      
      {/* Desktop Navigation Link Cluster */}
      <div className="hidden lg:flex space-x-8 font-semibold text-sm text-slate-600">
        {sections.map((target) => (
          <Link key={target} to={target.replace(' ', '')} spy={true} smooth={true} offset={-80} duration={600} className="hover:text-blue-700 transition-colors cursor-pointer capitalize active:text-blue-800">
            {target}
          </Link>
        ))}
      </div>

      {/* Mobile Menu Activation Key */}
      <div className="lg:hidden text-xl cursor-pointer text-slate-900" onClick={() => setNavActive(!navActive)}>
        {navActive ? <FaTimes /> : <FaBars />}
      </div>

      {/* Fully Animated Mobile Dropdown Panel */}
      {navActive && (
        <div className="absolute top-full left-0 w-full bg-white shadow-xl flex flex-col space-y-4 p-6 font-semibold border-t border-slate-100 lg:hidden">
          {sections.map((target) => (
            <Link key={target} to={target.replace(' ', '')} spy={true} smooth={true} offset={-80} duration={600} onClick={() => setNavActive(false)} className="hover:text-blue-700 cursor-pointer capitalize text-base">
              {target}
            </Link>
          ))}
        </div>
      )}
    </nav>
  );
}
