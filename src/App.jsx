import React from 'react';
import Hero from './Component/Hero';
import Education from './Component/Education';
import Skills from './Component/Skills';
import Contact from './Component/Contact';
import Navbar from './Component/Navbar';
import Footer from './Component/Footer';
import Experience from './Component/Experience';

function App() {
  return (
    <div>
      <Navbar />
      <Hero />
      <Experience />
      <Education />
      <Skills />
      <Contact />
      <Footer />
      
    </div>
  );
}

export default App;
