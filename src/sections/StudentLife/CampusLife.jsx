import React from 'react';
import { motion } from 'framer-motion';

const spaceHighlights = [
  { icon: "🧪", label: "Quantum Computation Hub", detail: "Houses supercomputing racks and modern research nodes." },
  { icon: "📚", label: "Central Electronic Library", detail: "24/7 digital connectivity linking to global journal access libraries." },
  { icon: "⚽", label: "Olympic Sports Complex", detail: "Dedicated indoor courts, running tracking loops and open turf areas." }
];

export default function CampusLife() {
  return (
    <section id="campuslife" className="py-28 bg-white px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-12 gap-12 items-center">
          
          <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="lg:col-span-5">
            <span className="text-blue-600 text-xs font-bold tracking-widest uppercase block mb-2">Life Beyond Textbooks</span>
            <h2 className="text-3xl sm:text-5xl font-black text-slate-900 tracking-tight mb-6">Our Infrastructure Architecture</h2>
            <p className="text-slate-600 leading-relaxed text-sm sm:text-base mb-8">
              A balanced mindset requires a world-class physical ecosystem. Our main square integrates secure tech spaces with high-end recreational arenas to drive holistic growth.
            </p>
            <div className="space-y-4">
              {spaceHighlights.map((fac, idx) => (
                <div key={idx} className="flex gap-4 p-4 border border-slate-100 rounded-xl hover:bg-slate-50 transition-colors">
                  <span className="text-2xl">{fac.icon}</span>
                  <div>
                    <h4 className="font-bold text-slate-800 text-sm">{fac.label}</h4>
                    <p className="text-xs text-slate-500 mt-0.5">{fac.detail}</p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Premium Image Placement Grid Layout */}
          <motion.div initial={{ opacity: 0, scale: 0.95 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="lg:col-span-7 grid grid-cols-12 gap-4">
            
            {/* Box 1: Auditorium */}
            <div className="col-span-8 h-64 overflow-hidden rounded-2xl shadow-md border border-slate-100">
              <img 
                src="https://s3.amazonaws.com/cms.ipressroom.com/401/files/202306/CampusConvo_LnS_FINAL.jpg"
                alt="Main Engineering Auditorium Block" 
                className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-500" 
              />
            </div>
            
            {/* Box 2: Robotics Lab */}
            <div className="col-span-4 h-64 overflow-hidden rounded-2xl border border-slate-100">
              <img 
                src="https://tse1.mm.bing.net/th/id/OIP.Fr2QI03MGNFbbPxhD9STTwHaE0?r=0&pid=Api&h=220&P=0" 
                alt="Robotics Lab Node" 
                className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-500" 
              />
            </div>
            
            {/* Box 3: Cafeteria */}
            <div className="col-span-4 h-48 overflow-hidden rounded-2xl border border-slate-100">
              <img 
                src="https://tse2.mm.bing.net/th/id/OIP.11zM3xlpEkiB2TSuWJj4iQHaDt?r=0&pid=Api&h=220&P=0" 
                alt="Cafeteria Lounge" 
                className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-500" 
              />
            </div>
            
            {/* Box 4: Open Green Quadrangle */}
            <div className="col-span-8 h-48 overflow-hidden rounded-2xl shadow-md border border-slate-100">
              <img 
                src="https://quadrealresidential.com/wp-content/uploads/2025/10/091-Quadreal-Georgian-Court-Estates-scaled.jpg" 
                alt="Open Green Quadrangle Court" 
                className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-500" 
              />
            </div>

          </motion.div>

        </div>
      </div>
    </section>
  );
}
