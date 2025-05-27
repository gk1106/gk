import React, { useEffect, useRef, useState } from 'react';
import * as THREE from 'three';
import { motion, AnimatePresence } from 'framer-motion';

const Contact = () => {
  const vantaRef = useRef(null);
  const vantaEffect = useRef(null);

  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [success, setSuccess] = useState(false);

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

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };
//https://gk-backend-vljl.onrender.com
//http://localhost:8089/api/contact
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await fetch("https://gk-backend-vljl.onrender.com/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      setFormData({ name: '', email: '', message: '' });
      setSuccess(true);
      setTimeout(() => setSuccess(false), 5000); // Hide after 5s
    } catch (error) {
      console.error("Submission failed", error);
    }
  };

  return (
<div ref={vantaRef} id="contact" className="min-h-screen flex items-center justify-start px-10 ">
  <motion.form 
    className="glass p-10 w-full md:w-1/2 max-w-xl text-white relative"
    initial={{ opacity: 0, x: -50 }}
    whileInView={{ opacity: 1, x: 0 }}
    transition={{ duration: 1 }}
    onSubmit={handleSubmit}
  >
    <h2 className="text-3xl font-bold mb-6 text-center">Contact Me</h2>

    <input
      name="name"
      value={formData.name}
      onChange={handleChange}
      type="text"
      placeholder="Your Name"
      className="w-full p-3 mb-4 rounded-lg bg-white/20 placeholder-white/70"
      required
    />
    <input
      name="email"
      value={formData.email}
      onChange={handleChange}
      type="email"
      placeholder="Your Email"
      className="w-full p-3 mb-4 rounded-lg bg-white/20 placeholder-white/70"
      required
    />
    <textarea
      name="message"
      value={formData.message}
      onChange={handleChange}
      rows="4"
      placeholder="Your Message"
      className="w-full p-3 mb-4 rounded-lg bg-white/20 placeholder-white/70"
      required
    ></textarea>
    <button
      type="submit"
      className="w-full p-3 rounded-lg bg-pink-600 hover:bg-pink-700 transition font-semibold"
    >
      Send Message
    </button>

    <AnimatePresence>
      {success && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 20 }}
          transition={{ duration: 0.5 }}
          className="absolute bottom-[-60px] left-1/2 transform -translate-x-1/2 bg-green-600 text-white px-4 py-2 rounded-lg shadow-lg"
        >
          🎉 Thanks! Our Captain will get in touch with you shortly.
        </motion.div>
      )}
    </AnimatePresence>
  </motion.form>
</div>

  );
};

export default Contact;
