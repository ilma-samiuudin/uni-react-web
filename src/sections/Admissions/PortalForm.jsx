import React from 'react';
import { useIntakeForm } from '../../hooks/useIntakeForm';
import { FaCheckCircle, FaLock } from 'react-icons/fa';

export default function PortalForm() {
  const { formData, submissionStatus, updateField, dispatchForm } = useIntakeForm();

  return (
    <section id="admissions" className="py-28 bg-slate-100 px-6">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-5xl font-black text-slate-900 tracking-tight mb-3">Online Admission Application Node</h2>
          <p className="text-slate-500 font-medium text-sm">Secure your baseline entry profile instantly. Processing takes 24 hours.</p>
        </div>

        {submissionStatus ? (
          <div className="bg-emerald-50 border border-emerald-200 text-emerald-900 p-8 rounded-2xl flex items-start space-x-4 shadow-sm max-w-2xl mx-auto">
            <FaCheckCircle className="text-3xl text-emerald-500 flex-shrink-0 mt-0.5" />
            <div>
              <h4 className="font-bold text-lg mb-1">Application Token Buffered!</h4>
              <p className="text-sm text-emerald-700 leading-relaxed">Thank you, <span className="font-bold">{formData.fullName}</span>. Your digital secure credential baseline setup has been completed. Check your email inbox for tracking confirmations.</p>
            </div>
          </div>
        ) : (
          <form onSubmit={dispatchForm} className="bg-white p-8 sm:p-12 rounded-3xl shadow-xl space-y-6 max-w-2xl mx-auto border border-slate-200/40">
            <div className="grid sm:grid-cols-2 gap-6">
              <div>
                <label className="block text-[11px] font-black uppercase text-slate-400 mb-2 tracking-widest">Full Name (Metric Record)</label>
                <input type="text" name="fullName" required className="w-full p-3 border border-slate-200 rounded-xl focus:outline-none focus:border-blue-600 font-medium text-slate-700 text-sm transition" placeholder="FULL NAME" value={formData.fullName} onChange={updateField} />
              </div>
              <div>
                <label className="block text-[11px] font-black uppercase text-slate-400 mb-2 tracking-widest">Active Email Axis</label>
                <input type="email" name="userEmail" required className="w-full p-3 border border-slate-200 rounded-xl focus:outline-none focus:border-blue-600 font-medium text-slate-700 text-sm transition" placeholder="ENTRE EMAIL" value={formData.userEmail} onChange={updateField} />
              </div>
            </div>
            <div>
              <label className="block text-[11px] font-black uppercase text-slate-400 mb-2 tracking-widest">WhatsApp / Contact Vector</label>
              <input type="tel" name="cellPhone" required className="w-full p-3 border border-slate-200 rounded-xl focus:outline-none focus:border-blue-600 font-medium text-slate-700 text-sm transition" placeholder="ENTRE NO" value={formData.cellPhone} onChange={updateField} />
            </div>
            <div>
              <label className="block text-[11px] font-black uppercase text-slate-400 mb-2 tracking-widest">Intended Target Faculty Program Track</label>
              <select name="targetTrack" className="w-full p-3 border border-slate-200 rounded-xl bg-white focus:outline-none focus:border-blue-600 font-bold text-slate-700 text-sm transition" value={formData.targetTrack} onChange={updateField}>
                <option value="bs-cs">BS Computer Science</option>
                <option value="bs-se">BS Software Engineering</option>
                <option value="bs-ds">BS Data Science</option>
                <option value="bba">BBA Executive</option>
              </select>
            </div>
            <button type="submit" className="w-full bg-blue-700 hover:bg-blue-600 text-white font-bold py-4 rounded-xl shadow-lg shadow-blue-700/10 transition duration-300 flex justify-center items-center space-x-2 text-sm uppercase tracking-wider">
              <FaLock className="text-xs" /> <span>Lock Admission Entry Request</span>
            </button>
          </form>
        )}
      </div>
    </section>
  );
}
