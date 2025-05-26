import React, { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import * as THREE from 'three';

const name = "GANESH KUMAR".split("");
const letterAnimation = {
  hidden: { opacity: 0, y: 20 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.05,
      duration: 0.4,
    },
  }),
};


const Hero = () => {

    
  const vantaRef = useRef(null);
  const vantaEffect = useRef(null);

  useEffect(() => {
    const script = document.createElement('script');
    script.src = '/vanta.halo.min.js';
    script.async = true;

    script.onload = () => {
      if (window.VANTA && window.VANTA.HALO && !vantaEffect.current) {
        vantaEffect.current = window.VANTA.HALO({
          el: vantaRef.current,
          THREE,
          mouseControls: true,
          touchControls: true,
          gyroControls: false,
          minHeight: 200.0,
          minWidth: 200.0,
          backgroundColor: 0x431313,
          size: 2.4,
        });
      }
    };

    document.body.appendChild(script);

    return () => {
      if (vantaEffect.current) vantaEffect.current.destroy();
    };
  }, []);

  return (
   <div id="hero" ref={vantaRef} className="min-h-screen flex items-center justify-center px-4">
      <motion.div
        className="glass p-10 md:p-16 w-full max-w-3xl text-white text-center rounded-2xl shadow-xl"
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        <h1 className="text-4xl md:text-6xl font-extrabold mb-6">
          Hi, I'm{" "}
          <span className="text-pink-400 inline-flex">
            {name.map((char, index) => (
              <motion.span
                key={index}
                custom={index}
                variants={letterAnimation}
                initial="hidden"
                animate="visible"
                className="inline-block"
              >
                {char === " " ? "\u00A0" : char}
              </motion.span>
            ))}
          </span>
        </h1>
        <p className="text-xl md:text-2xl text-white/80">
          Full Stack Developer passionate about building scalable web applications.
        </p>
      </motion.div>
    </div>

  );
};

export default Hero;
