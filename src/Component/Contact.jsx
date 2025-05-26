import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';
import { motion } from 'framer-motion';

const Contact = () => {
  const vantaRef = useRef(null);
  const vantaEffect = useRef(null);

  useEffect(() => {
    const script = document.createElement('script');
    script.src = '/vanta.globe.min.js';
    script.async = true;

    script.onload = () => {
      if (window.VANTA && window.VANTA.GLOBE && !vantaEffect.current) {
        vantaEffect.current = window.VANTA.GLOBE({
          el: vantaRef.current,
          THREE,
          mouseControls: true,
          touchControls: true,
          gyroControls: false,
          minHeight: 200.0,
          minWidth: 200.0,
          scale: 1.0,
          scaleMobile: 1.0,
          color2: 0xffffff,
          size: 1.6,
        });
      }
    };

    document.body.appendChild(script);

    return () => {
      if (vantaEffect.current) vantaEffect.current.destroy();
    };
  }, []);

  return (
    <div ref={vantaRef} id="contact" className="min-h-screen flex items-center justify-center">
  <motion.form 
    className="glass p-10 w-full md:w-1/2 max-w-xl text-white ml-10 mr-auto"
    initial={{ opacity: 0, x: -50 }}
    animate={{ opacity: 1, x: 0 }}
    transition={{ duration: 1 }}
  >
    <h2 className="text-3xl font-bold mb-6 text-center">Contact Me</h2>
    <input
      type="text"
      placeholder="Your Name"
      className="w-full p-3 mb-4 rounded-lg bg-white/20 placeholder-white/70"
    />
    <input
      type="email"
      placeholder="Your Email"
      className="w-full p-3 mb-4 rounded-lg bg-white/20 placeholder-white/70"
    />
    <textarea
      rows="4"
      placeholder="Your Message"
      className="w-full p-3 mb-4 rounded-lg bg-white/20 placeholder-white/70"
    ></textarea>
    <button
      type="submit"
      className="w-full p-3 rounded-lg bg-pink-600 hover:bg-pink-700 transition font-semibold"
    >
      Send Message
    </button>
  </motion.form>


    </div>
  );
};

export default Contact;
