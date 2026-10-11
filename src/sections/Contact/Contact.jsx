import React from "react";
import { motion, useReducedMotion } from "framer-motion";
import { FaPhoneAlt, FaEnvelopeOpen, FaMapMarkedAlt } from "react-icons/fa";

export default function Contact() {
  const prefersReducedMotion = useReducedMotion();
  const reveal = {
    initial: prefersReducedMotion ? false : { opacity: 0, y: 14 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, amount: 0.2 },
    transition: { duration: prefersReducedMotion ? 0 : 0.45, ease: 'easeOut' },
  };

  return (
    <section id="contact" className="py-20 sm:py-28 bg-espresso-dark text-white px-4 sm:px-6">
      <div className="max-w-4xl mx-auto space-y-10 sm:space-y-12">
        <motion.div {...reveal} className="text-center space-y-3">
          <span className="text-brass-light text-xs font-bold uppercase tracking-widest block">
            Central Help Desk
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight">
            Connect With Our Admissions Board
          </h2>
          <p className="text-slate-400 text-sm max-w-xl mx-auto leading-relaxed">
            Official response protocols are active from Monday to Friday (09:00
            AM to 05:00 PM).
          </p>
        </motion.div>
        <div className="grid md:grid-cols-3 gap-6 pt-4">
          <motion.div {...reveal} transition={{ ...reveal.transition, delay: prefersReducedMotion ? 0 : 0.05 }} className="flex flex-col items-center text-center p-5 sm:p-6 bg-white/5 rounded-2xl border border-sand/10 hover:border-brass/60 transition duration-300">
            <div className="p-3 bg-brass/15 rounded-xl mb-4">
              <FaPhoneAlt className="text-xl text-brass-light" />
            </div>
            <h4 className="text-xs uppercase text-slate-400 font-bold tracking-wider mb-1">
              Helpline
            </h4>
            <a href="tel:+923101207912" className="text-sm font-semibold text-slate-300 hover:text-brass-light transition-colors">
              +92 3101207912
            </a>
          </motion.div>
          <motion.div {...reveal} transition={{ ...reveal.transition, delay: prefersReducedMotion ? 0 : 0.12 }} className="flex flex-col items-center text-center p-5 sm:p-6 bg-white/5 rounded-2xl border border-sand/10 hover:border-brass/60 transition duration-300">
            <div className="p-3 bg-brass/15 rounded-xl mb-4">
              <FaEnvelopeOpen className="text-xl text-brass-light" />
            </div>
            <h4 className="text-xs uppercase text-slate-400 font-bold tracking-wider mb-1">
              Corporate Email
            </h4>
            <a href="mailto:iilmaansari26@gmail.com" className="text-sm font-semibold text-slate-300 break-all hover:text-brass-light transition-colors">
              iilmaansari26@gmail.com
            </a>
          </motion.div>
          <motion.div {...reveal} transition={{ ...reveal.transition, delay: prefersReducedMotion ? 0 : 0.19 }} className="flex flex-col items-center text-center p-5 sm:p-6 bg-white/5 rounded-2xl border border-sand/10 hover:border-brass/60 transition duration-300">
            <div className="p-3 bg-brass/15 rounded-xl mb-4">
              <FaMapMarkedAlt className="text-xl text-brass-light" />
            </div>
            <h4 className="text-xs uppercase text-slate-400 font-bold tracking-wider mb-1">
              Main Campus Axis
            </h4>
            <p className="text-sm font-semibold text-slate-400 leading-relaxed">
              Main University Road Karachi,Pakistan
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
