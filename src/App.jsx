import React, { useState } from 'react';
import Navbar from './components/Header/Navbar';
import Hero from './sections/Hero/Hero';
import Stats from './sections/Stats/Stats';
import About from './sections/About/About';
import Academics from './sections/Acedemics/Acedemics';
import CampusLife from './sections/StudentLife/CampusLife';
import PortalForm from './sections/Admissions/PortalForm';
import Contact from './sections/Contact/Contact';
import Footer from './components/Footer/Footer';
import './styles/theme.css';

export default function App() {
  const [isDarkMode, setIsDarkMode] = useState(() => (
    window.localStorage.getItem('theme') !== 'light'
  ));

  const toggleTheme = () => {
    setIsDarkMode((currentMode) => {
      const nextMode = !currentMode;
      window.localStorage.setItem('theme', nextMode ? 'dark' : 'light');
      return nextMode;
    });
  };

  const themeClass = isDarkMode
    ? 'dark bg-espresso-dark text-sand'
    : 'bg-sand text-espresso-dark';

  return (
    <div className={`w-full min-h-screen antialiased font-sans overflow-x-hidden selection:bg-brass selection:text-white ${themeClass}`}>
      <Navbar isDarkMode={isDarkMode} onToggleTheme={toggleTheme} />
      <main className="w-full block overflow-x-hidden">
        <Hero />
        <Stats />
        <About />
        <Academics />
        <CampusLife />
        <PortalForm />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
