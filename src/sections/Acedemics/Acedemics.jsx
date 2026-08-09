import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const programmaticDatabase = [
  { code: "computing", title: "BS Computer Science", timeline: "4 Years", expense: "PKR 1,400,000", focus: "Artificial Intelligence & Core Computing" },
  { code: "computing", title: "BS Software Engineering", timeline: "4 Years", expense: "PKR 1,350,000", focus: "Enterprise Cloud Architectures" },
  { code: "computing", title: "BS Data Science", timeline: "4 Years", expense: "PKR 1,380,000", focus: "Advanced Predictive Modeling" },
  { code: "business", title: "BBA Executive Program", timeline: "4 Years", expense: "PKR 1,100,000", focus: "Strategic Product Management" },
  { code: "business", title: "MBA Post-Graduate Track", timeline: "2 Years", expense: "PKR 950,000", focus: "Global Venture Capital Assets" },
  { code: "engineering", title: "BS Electrical Engineering", timeline: "4 Years", expense: "PKR 1,250,000", focus: "Robotics & Microcontroller Units" }
];

export default function Academics() {
  const [filterQuery, setFilterQuery] = useState("");
  const [departmentTab, setDepartmentTab] = useState("all");

  const filteredSet = programmaticDatabase.filter(item => {
    const queryMatch = item.title.toLowerCase().includes(filterQuery.toLowerCase()) || item.focus.toLowerCase().includes(filterQuery.toLowerCase());
    const tabMatch = departmentTab === "all" || item.code === departmentTab;
    return queryMatch && tabMatch;
  });

  return (
    <section id="academics" className="py-28 bg-slate-50 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-blue-700 text-xs font-bold tracking-widest uppercase block mb-2">Faculty Specifications</span>
          <h2 className="text-3xl sm:text-5xl font-black text-slate-900 tracking-tight mb-4">Our Accredited Degree Operations</h2>
          <p className="text-slate-500 font-medium text-sm sm:text-base">Filter through rigorous scientific tracks to pinpoint your target professional discipline.</p>
        </div>

        {/* Real-time Custom Search Engine Input Array Bar */}
        <div className="bg-white p-4 rounded-2xl shadow-sm border border-slate-200/80 max-w-4xl mx-auto mb-12 flex flex-col md:flex-row gap-4 items-center">
          <input type="text" placeholder="Type core discipline (e.g. Enterprise Cloud, Data Science...)" className="w-full md:flex-1 p-3.5 border border-slate-200 rounded-xl focus:outline-none focus:border-blue-600 text-sm font-semibold text-slate-700 placeholder-slate-400" value={filterQuery} onChange={(e) => setFilterQuery(e.target.value)} />
          <div className="flex gap-2 w-full md:w-auto overflow-x-auto whitespace-nowrap">
            {['all', 'computing', 'business', 'engineering'].map((tab) => (
              <button key={tab} onClick={() => setDepartmentTab(tab)} className={`px-4 py-2.5 rounded-xl text-xs font-bold uppercase tracking-wider transition-all ${departmentTab === tab ? 'bg-blue-600 text-white shadow-md' : 'bg-slate-100 text-slate-600 hover:bg-slate-200'}`}>
                {tab}
              </button>
            ))}
          </div>
        </div>
        <motion.div layout className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          <AnimatePresence mode="popLayout">
            {filteredSet.map((prog) => (
              <motion.div layout initial={{ opacity: 0, scale: 0.96 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: 0.96 }} transition={{ duration: 0.3 }} key={prog.title} className="bg-white p-6 rounded-2xl border border-slate-200/60 shadow-sm flex flex-col justify-between hover:shadow-lg transition-all group">
                <div>
                  <div className="flex justify-between items-center mb-4">
                    <span className="px-2.5 py-1 bg-slate-100 text-slate-600 font-bold text-[10px] uppercase rounded tracking-wider">{prog.code}</span>
                    <span className="text-slate-400 text-xs font-bold">{prog.timeline}</span>
                  </div>
                  <h3 className="text-xl font-bold text-slate-800 mb-2 group-hover:text-blue-700 transition-colors">{prog.title}</h3>
                  <p className="text-slate-500 text-xs font-medium mb-6 leading-relaxed">Matrix Core: {prog.focus}</p>
                </div>
                <div className="border-t border-slate-100 pt-4 flex justify-between items-center bg-slate-50/50 -mx-6 -mb-6 p-6 rounded-b-2xl">
                  <div>
                    <span className="text-[9px] text-slate-400 block font-bold uppercase tracking-wider">Total Degree Fee</span>
                    <strong className="text-base font-black text-slate-900">{prog.expense}</strong>
                  </div>
                  <a href="#" className="text-xs text-blue-600 font-bold hover:underline">Download Brochure &darr;</a>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}
