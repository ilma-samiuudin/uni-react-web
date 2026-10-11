import React from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import { useIntakeForm } from '../../hooks/useIntakeForm';
import { PROGRAMS } from '../Acedemics/Acedemics';
import { FaCheckCircle, FaLock } from 'react-icons/fa';

export default function PortalForm() {
  const { formData, submissionStatus, updateField, dispatchForm } = useIntakeForm();
  const prefersReducedMotion = useReducedMotion();
  const reveal = {
    initial: prefersReducedMotion ? false : { opacity: 0, y: 18 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, amount: 0.15 },
    transition: { duration: prefersReducedMotion ? 0 : 0.5, ease: 'easeOut' },
  };

  return (
    <section id="admissions" className="py-20 sm:py-28 bg-sand dark:bg-espresso-dark px-4 sm:px-6 transition-colors duration-300">
      <div className="max-w-4xl mx-auto">
        <motion.div {...reveal} className="text-center mb-12">
          <h2 className="text-3xl sm:text-5xl font-black text-slate-900 dark:text-sand tracking-tight mb-3">Online Admission Application Node</h2>
          <p className="text-slate-500 dark:text-sand/65 font-medium text-sm">Secure your baseline entry profile instantly. Processing takes 24 hours.</p>
        </motion.div>

        {submissionStatus ? (
          <motion.div {...reveal} className="bg-emerald-50 dark:bg-emerald-950 border border-emerald-200 dark:border-emerald-800 text-emerald-900 dark:text-emerald-100 p-8 rounded-2xl flex items-start space-x-4 shadow-sm max-w-2xl mx-auto">
            <FaCheckCircle className="text-3xl text-emerald-500 flex-shrink-0 mt-0.5" />
            <div>
              <h4 className="font-bold text-lg mb-1">Application Token Buffered!</h4>
              <p className="text-sm text-emerald-700 dark:text-emerald-200 leading-relaxed">Thank you, <span className="font-bold">{formData.fullName}</span>. Your digital secure credential baseline setup has been completed. Check your email inbox for tracking confirmations.</p>
            </div>
          </motion.div>
        ) : (
          <motion.form {...reveal} onSubmit={dispatchForm} className="bg-sand-card dark:bg-espresso p-5 sm:p-8 lg:p-12 rounded-3xl shadow-xl space-y-6 max-w-2xl mx-auto border border-espresso/10 dark:border-sand/10">
            <div className="grid sm:grid-cols-2 gap-6">
              <div>
                <label className="block text-[11px] font-black uppercase text-slate-400 dark:text-sand/55 mb-2 tracking-widest">Full Name (Metric Record)</label>
                <input type="text" name="fullName" required className="w-full p-3 bg-white dark:bg-espresso-dark border border-slate-200 dark:border-sand/15 rounded-xl focus:outline-none focus:border-espresso-light font-medium text-slate-700 dark:text-sand text-sm transition" placeholder="FULL NAME" value={formData.fullName} onChange={updateField} />
              </div>
              <div>
                <label className="block text-[11px] font-black uppercase text-slate-400 dark:text-sand/55 mb-2 tracking-widest">Active Email Axis</label>
                <input type="email" name="userEmail" required className="w-full p-3 bg-white dark:bg-espresso-dark border border-slate-200 dark:border-sand/15 rounded-xl focus:outline-none focus:border-espresso-light font-medium text-slate-700 dark:text-sand text-sm transition" placeholder="ENTRE EMAIL" value={formData.userEmail} onChange={updateField} />
              </div>
            </div>
            <div>
              <label className="block text-[11px] font-black uppercase text-slate-400 dark:text-sand/55 mb-2 tracking-widest">WhatsApp / Contact Vector</label>
              <input type="tel" name="cellPhone" required className="w-full p-3 bg-white dark:bg-espresso-dark border border-slate-200 dark:border-sand/15 rounded-xl focus:outline-none focus:border-espresso-light font-medium text-slate-700 dark:text-sand text-sm transition" placeholder="ENTRE NO" value={formData.cellPhone} onChange={updateField} />
            </div>
            <div>
              <label className="block text-[11px] font-black uppercase text-slate-400 dark:text-sand/55 mb-2 tracking-widest">Intended Target Faculty Program Track</label>
              <select name="targetTrack" className="w-full p-3 border border-slate-200 dark:border-sand/15 rounded-xl bg-sand-card dark:bg-espresso-dark focus:outline-none focus:border-espresso-light font-bold text-slate-700 dark:text-sand text-sm transition" value={formData.targetTrack} onChange={updateField}>
                {PROGRAMS.map((program) => (
                  <option key={program.id} value={program.id}>{program.title}</option>
                ))}
              </select>
            </div>
            <button type="submit" className="w-full bg-espresso hover:bg-espresso-light dark:bg-brass dark:hover:bg-brass-light text-white font-bold py-4 rounded-xl shadow-lg shadow-espresso/10 transition duration-300 flex justify-center items-center space-x-2 text-sm uppercase tracking-wider">
              <FaLock className="text-xs" /> <span>Lock Admission Entry Request</span>
            </button>
          </motion.form>
        )}
      </div>
    </section>
  );
}
