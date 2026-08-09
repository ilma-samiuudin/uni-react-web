import React from 'react';
import { motion } from 'framer-motion';

export default function About() {
  return (
    <section id="about" className="py-32 bg-white px-6 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        
        {/* Top Header Layer */}
        <div className="text-center max-w-2xl mx-auto mb-20">
          <span className="text-blue-700 text-xs font-black tracking-widest uppercase block mb-3">Institutional Profile</span>
          <h2 className="text-3xl sm:text-5xl font-black text-slate-900 tracking-tight">A Legacy of Pure Academic Excellence</h2>
        </div>

        {/* Core Double Grid Structural Array */}
        <div className="grid lg:grid-cols-12 gap-16 items-center">
          
          {/* Text Analytics Panel */}
          <motion.div initial={{ opacity: 0, x: -40 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="lg:col-span-7 space-y-6">
            <h3 className="text-2xl font-bold text-slate-800">Shaping Innovation Through Rigorous Research</h3>
            <p className="text-slate-600 leading-relaxed text-sm sm:text-base">
              Indus Vista University stands as a premier government-chartered seat of higher learning. Founded with a critical vision to fuse heavy industrial automation insights with raw textbook methodologies, our university prepares market-ready professionals.
            </p>
            <p className="text-slate-600 leading-relaxed text-sm sm:text-base">
              Our dynamic multi-disciplinary training labs allow students to co-author papers with global research leads, bridging the crucial gap between student ideation and commercial application deployments.
            </p>
            <div className="border-l-4 border-blue-600 pl-4 bg-slate-50 p-5 rounded-r-2xl border-dashed">
              <p className="italic text-slate-700 font-semibold text-sm sm:text-base">
                "Education is not merely data storage within human faculties; it is the calculated execution of critical problem-solving skills under dynamic real-world constraints."
              </p>
              <span className="block text-xs font-black uppercase text-slate-400 mt-2 tracking-wider">— Office of the Vice Chancellor</span>
            </div>
          </motion.div>

          {/* Graphical Premium Visual Frame Container */}
          <motion.div initial={{ opacity: 0, x: 40 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="lg:col-span-5 relative">
            <div className="absolute -inset-2 bg-gradient-to-tr from-blue-600 to-indigo-600 rounded-3xl blur opacity-20" />
    
            <div className="relative h-96 rounded-3xl overflow-hidden border border-slate-200 shadow-2xl group">
            
              <img 
                src="https://www.shutterstock.com/blog/wp-content/uploads/sites/5/2017/08/featuredcampuses.jpg?resize=1250,1120"
                alt="The Central Quad Arena" 
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/40 to-transparent flex flex-col justify-end p-8 text-left">
                <h4 className="text-white font-black text-xl mb-1">The Central Quad Arena</h4>
                <p className="text-xs text-slate-200 max-w-xs leading-relaxed opacity-90">
                  Spanning over wide acres of hyper-connected tech facilities, featuring enterprise-grade compute structures and smart digital lounges.
                </p>
              </div>

            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
