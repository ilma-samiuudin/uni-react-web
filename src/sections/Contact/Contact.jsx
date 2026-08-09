import React from "react";
import { FaPhoneAlt, FaEnvelopeOpen, FaMapMarkedAlt } from "react-icons/fa";

export default function Contact() {
  return (
    <section id="contact" className="py-28 bg-slate-900 text-white px-6">
      <div className="max-w-4xl mx-auto space-y-12">
        {/* Top Header Section */}
        <div className="text-center space-y-3">
          <span className="text-blue-500 text-xs font-bold uppercase tracking-widest block">
            Central Help Desk
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight">
            Connect With Our Admissions Board
          </h2>
          <p className="text-slate-400 text-sm max-w-xl mx-auto leading-relaxed">
            Official response protocols are active from Monday to Friday (09:00
            AM to 05:00 PM).
          </p>
        </div>
        {/* Contact Info Cards Grid */}
        <div className="grid md:grid-cols-3 gap-6 pt-4">
          {/* Helpline Card */}
          <div className="flex flex-col items-center text-center p-6 bg-slate-800/40 rounded-2xl border border-slate-800 hover:border-slate-700 transition duration-300">
            <div className="p-3 bg-blue-500/10 rounded-xl mb-4">
              <FaPhoneAlt className="text-xl text-blue-500" />
            </div>
            <h4 className="text-xs uppercase text-slate-400 font-bold tracking-wider mb-1">
              Helpline
            </h4>
            <p className="text-sm font-semibold text-slate-200">
              +92 3101207912
            </p>
          </div>
          {/* Corporate Email Card */}
          <div className="flex flex-col items-center text-center p-6 bg-slate-800/40 rounded-2xl border border-slate-800 hover:border-slate-700 transition duration-300">
            <div className="p-3 bg-blue-500/10 rounded-xl mb-4">
              <FaEnvelopeOpen className="text-xl text-blue-500" />
            </div>
            <h4 className="text-xs uppercase text-slate-400 font-bold tracking-wider mb-1">
              Corporate Email
            </h4>
            <p className="text-sm font-semibold text-slate-200 break-all">
              ilmaansari26.edu@gamil.com
            </p>
          </div>
          {/* Main Campus Axis Card */}
          <div className="flex flex-col items-center text-center p-6 bg-slate-800/40 rounded-2xl border border-slate-800 hover:border-slate-700 transition duration-300">
            <div className="p-3 bg-blue-500/10 rounded-xl mb-4">
              <FaMapMarkedAlt className="text-xl text-blue-500" />
            </div>
            <h4 className="text-xs uppercase text-slate-400 font-bold tracking-wider mb-1">
              Main Campus Axis
            </h4>
            <p className="text-sm font-semibold text-slate-300 leading-relaxed">
              Main University Road Karachi,Pakistan
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
