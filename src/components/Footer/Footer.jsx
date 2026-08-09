import React from "react";
import {
  FaGraduationCap,
  FaFacebook,
  FaLinkedin,
  FaTwitter,
} from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-slate-950 text-slate-400 pt-24 pb-12 px-6 border-t border-slate-900">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
       {/* Identity Unit Column */}
        <div className="space-y-4">
          <div className="flex items-center space-x-2 text-white font-black text-lg tracking-tight">
            <FaGraduationCap className="text-3xl text-blue-600" />
            <span>INDUS VISTA</span>
          </div>
          <p className="text-xs text-slate-500 leading-relaxed">
            A premium government chartered research hub dedicated to
            manufacturing top-tier technical and executive leadership profiles
            for global markets.
          </p>
        </div>
       {/* Dynamic Navigations Categories Column links 1 */}
        <div className="space-y-3">
          <h4 className="text-white font-bold text-xs uppercase tracking-widest text-slate-200">
            Faculties
          </h4>
          <ul className="text-xs space-y-2 font-medium">
            <li className="hover:text-blue-500 cursor-pointer transition-colors">
              Computing & AI Operations
            </li>
            <li className="hover:text-blue-500 cursor-pointer transition-colors">
              Business Strategy School
            </li>
            <li className="hover:text-blue-500 cursor-pointer transition-colors">
              Robotics & Mechanical Nodes
            </li>
          </ul>
        </div>
        {/* Resources Columns link array 2 */}
        <div className="space-y-3">
          <h4 className="text-white font-bold text-xs uppercase tracking-widest text-slate-200">
            Resources
          </h4>
          <ul className="text-xs space-y-2 font-medium">
            <li className="hover:text-blue-500 cursor-pointer transition-colors">
              Academic Calendars
            </li>
            <li className="hover:text-blue-500 cursor-pointer transition-colors">
              Student Management Portal
            </li>
            <li className="hover:text-blue-500 cursor-pointer transition-colors">
              Research Publications
            </li>
          </ul>
        </div>
        {/* Institutional Social Framework Grid Links Card */}
        <div className="space-y-4">
          <h4 className="text-white font-bold text-xs uppercase tracking-widest text-slate-200">
            Institutional Handles
          </h4>
          <div className="flex space-x-4 text-xl text-slate-500">
            <FaFacebook className="hover:text-white cursor-pointer transition-colors" />
            <FaLinkedin className="hover:text-white cursor-pointer transition-colors" />
            <FaTwitter className="hover:text-white cursor-pointer transition-colors" />
          </div>
          {/* FIXED: Added missing opening span tag */}
          <span className="block text-[10px] text-slate-600 font-bold">
            Intake Monitoring Node Active
          </span>
        </div>
      </div>

      <div className="max-w-7xl mx-auto pt-8 border-t border-slate-900/60 flex flex-col sm:flex-row justify-between items-center text-[11px] text-slate-600 font-bold gap-4">
        <p>
          &copy; 2026 Indus Vista University. Recognized by Higher Education
          Commission (HFS)
        </p>
        <div className="flex space-x-6">
          <span className="hover:text-slate-400 cursor-pointer">
            Security Protocols
          </span>
          <span className="hover:text-slate-400 cursor-pointer">
            Privacy Frameworks
          </span>
        </div>
      </div>
    </footer>
  );
}
