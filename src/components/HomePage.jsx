import React from 'react';
import Header from './Header';
import Hero from './Hero';
import About from './About';
import Experience from './Experience';
import Projects from './Projects';
import Education from './Education';
import Skills from './Skills';
import Contact from './Contact';
import Footer from './Footer';
import BoidSimulation from './BoidSimulation';

const HomePage = () => {
  return (
    <div className="min-h-screen bg-black text-white relative overflow-hidden">
      <BoidSimulation />
      <div className="relative z-10">
        <Header />
        <Hero />
        <About />
        <Experience />
        <Projects />
        <Education />
        <Skills />
        <Contact />
        <Footer />
      </div>
    </div>
  );
};

export default HomePage;