import React from 'react';
import { motion } from 'framer-motion';

const statsInventory = [
  { metric: "145+", parameter: "Industrial Case Partnerships" },
  { metric: "96.4%", parameter: "Immediate Placement" },
  { metric: "80M+", parameter: "Scholarship Funds" },
  { metric: "Tier-1", parameter: "National HEC Status" }
];

export default function Stats() {
  return (
    <section className="w-full bg-slate-900 py-12 sm:py-16 px-4 sm:px-6 lg:px-8 border-y border-slate-800 overflow-hidden">
      {/* 2 columns on small screens, 4 columns on desktop layouts */}
      <div className="w-full max-w-7xl mx-auto grid grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
        {statsInventory.map((item, idx) => (
          <motion.div key={idx} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: idx * 0.1 }} className="text-center p-2">
            <div className="text-2xl sm:text-4xl md:text-5xl font-black text-blue-500 mb-1 sm:mb-2">{item.metric}</div>
            <div className="text-[10px] sm:text-xs md:text-sm font-bold text-slate-400 uppercase tracking-widest leading-snug">{item.parameter}</div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}


