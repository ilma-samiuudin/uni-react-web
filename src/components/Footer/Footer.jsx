import React from "react";
import { motion, useReducedMotion } from "framer-motion";
import {
  FaGraduationCap,
  FaFacebook,
  FaLinkedin,
  FaTwitter,
} from "react-icons/fa";

export default function Footer() {
  const prefersReducedMotion = useReducedMotion();

  return (
    <motion.footer
      initial={prefersReducedMotion ? false : { opacity: 0, y: 12 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.08 }}
      transition={{ duration: prefersReducedMotion ? 0 : 0.45, ease: "easeOut" }}
      className="bg-espresso-dark text-sand/70 pt-16 sm:pt-24 pb-10 sm:pb-12 px-4 sm:px-6 border-t border-espresso"
    >
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12 mb-12 sm:mb-16">
        <div className="space-y-4">
          <div className="flex items-center space-x-2 text-white font-black text-lg tracking-tight">
            <FaGraduationCap className="text-3xl text-brass-light" />
            <span>INDUS VISTA</span>
          </div>
          <p className="text-xs text-sand/65 leading-relaxed">
            A premium government chartered research hub dedicated to
            manufacturing top-tier technical and executive leadership profiles
            for global markets.
          </p>
        </div>
        <div className="space-y-3">
          <h4 className="text-sand font-bold text-xs uppercase tracking-widest">
            Faculties
          </h4>
          <ul className="text-xs space-y-2 font-medium">
            <li className="hover:text-brass-light cursor-pointer transition-colors">
              Computing & AI Operations
            </li>
            <li className="hover:text-brass-light cursor-pointer transition-colors">
              Business Strategy School
            </li>
            <li className="hover:text-brass-light cursor-pointer transition-colors">
              Robotics & Mechanical Nodes
            </li>
          </ul>
        </div>
        <div className="space-y-3">
          <h4 className="text-sand font-bold text-xs uppercase tracking-widest">
            Resources
          </h4>
          <ul className="text-xs space-y-2 font-medium">
            <li className="hover:text-brass-light cursor-pointer transition-colors">
              Academic Calendars
            </li>
            <li className="hover:text-brass-light cursor-pointer transition-colors">
              Student Management Portal
            </li>
            <li className="hover:text-brass-light cursor-pointer transition-colors">
              Research Publications
            </li>
          </ul>
        </div>
        <div className="space-y-4">
          <h4 className="text-sand font-bold text-xs uppercase tracking-widest">
            Institutional Handles
          </h4>
          <div className="flex space-x-4 text-xl text-sand/55">
            <FaFacebook className="hover:text-white cursor-pointer transition-colors" />
            <FaLinkedin className="hover:text-white cursor-pointer transition-colors" />
            <FaTwitter className="hover:text-white cursor-pointer transition-colors" />
          </div>
          <span className="block text-[10px] text-sand/45 font-bold">
            Intake Monitoring Node Active
          </span>
        </div>
      </div>

      <div className="max-w-7xl mx-auto pt-8 border-t border-sand/10 flex flex-col sm:flex-row justify-between items-center text-[11px] text-sand/50 font-bold gap-4">
        <p>
          &copy; 2026 Indus Vista University. Recognized by Higher Education
          Commission (HFS)
        </p>
        <div className="flex space-x-6">
          <span className="hover:text-sand/80 cursor-pointer">
            Security Protocols
          </span>
          <span className="hover:text-sand/80 cursor-pointer">
            Privacy Frameworks
          </span>
        </div>
      </div>
    </motion.footer>
  );
}
