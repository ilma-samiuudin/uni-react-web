import React from 'react';
import Navbar from './components/Header/Navbar';
import Hero from './sections/Hero/Hero';
import Stats from './sections/Stats/Stats';
import About from './sections/About/About';
import CampusLife from './sections/StudentLife/CampusLife';
import PortalForm from './sections/Admissions/PortalForm';
import Contact from './sections/Contact/Contact';
import Footer from './components/Footer/Footer';
import './styles/theme.css'; 

function LocalAcademicsFallback() {
  return (
    <section id="academics" className="w-full py-16 sm:py-24 md:py-28 bg-slate-50 px-4 sm:px-6 lg:px-8 overflow-hidden">
      <div className="w-full max-w-7xl mx-auto">
        <div className="text-center max-w-2xl mx-auto mb-12 sm:mb-16">
          <span className="text-blue-700 text-xs font-black tracking-widest uppercase block mb-2">Faculty Specifications</span>
          <h2 className="text-2xl sm:text-4xl lg:text-5xl font-black text-slate-900 tracking-tight leading-tight">Our Accredited Programs</h2>
        </div>
        
        {/* Dynamic Grid: 1 Column on Mobile, 2 on Tablet, 3 on Laptops/Desktop */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 w-full">
          <div className="bg-white p-6 rounded-2xl border border-slate-200/60 shadow-sm flex flex-col justify-between">
            <div>
              <h4 className="font-bold text-lg text-slate-800 mb-2">BS Computer Science</h4>
              <p className="text-xs text-slate-500 leading-relaxed">4 Years Track • Cloud Infrastructure & Machine Learning Node Systems.</p>
            </div>
            <div className="mt-6 pt-4 border-t border-slate-100 flex justify-between items-center text-xs font-bold text-slate-900">
              <span>PKR 1,400,000</span>
              <span className="text-blue-600 cursor-pointer hover:underline">Brochure &darr;</span>
            </div>
          </div>
          <div className="bg-white p-6 rounded-2xl border border-slate-200/60 shadow-sm flex flex-col justify-between">
            <div>
              <h4 className="font-bold text-lg text-slate-800 mb-2">BS Software Engineering</h4>
              <p className="text-xs text-slate-500 leading-relaxed">4 Years Track • Systems Architecture & Production Deployment Models.</p>
            </div>
            <div className="mt-6 pt-4 border-t border-slate-100 flex justify-between items-center text-xs font-bold text-slate-900">
              <span>PKR 1,350,000</span>
              <span className="text-blue-600 cursor-pointer hover:underline">Brochure &darr;</span>
            </div>
          </div>
          <div className="bg-white p-6 rounded-2xl border border-slate-200/60 shadow-sm flex flex-col justify-between md:col-span-2 lg:col-span-1">
            <div>
              <h4 className="font-bold text-lg text-slate-800 mb-2">MBA Corporate Track</h4>
              <p className="text-xs text-slate-500 leading-relaxed">2 Years Track • Venture Capital Allocation & Product Management Operations.</p>
            </div>
            <div className="mt-6 pt-4 border-t border-slate-100 flex justify-between items-center text-xs font-bold text-slate-900">
              <span>PKR 950,000</span>
              <span className="text-blue-600 cursor-pointer hover:underline">Brochure &darr;</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default function App() {
  return (
    // Is master wrapper core blocks se completely content cutting hamesha ke liye ban ho jayegi
    <div className="w-full min-h-screen bg-white text-slate-800 antialiased font-sans overflow-x-hidden selection:bg-blue-600 selection:text-white">
      <Navbar />
      <main className="w-full block overflow-x-hidden">
        <Hero />
        <Stats />
        <About />
        <LocalAcademicsFallback />
        <CampusLife />
        <PortalForm />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
