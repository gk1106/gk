import React, { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const educationData = [
  {
    degree: "Master of Computer Applications",
    school: "Madras University, Chennai",
    year: "2022 – 2024"
  },
  {
    degree: "Bachelor of Science in Computer Science",
    school: "SRM University, Chennai",
    year: "2018 – 2021"
  }
];

const Education = () => {
  const eduRefs = useRef([]);

  useEffect(() => {
    eduRefs.current.forEach((el, i) => {
      gsap.fromTo(
        el,
        { opacity: 0, x: i % 2 === 0 ? -100 : 100 },
        {
          opacity: 1,
          x: 0,
          duration: 1,
          ease: "power2.out",
          scrollTrigger: {
            trigger: el,
            start: "top 85%",
            toggleActions: "play none none reverse"
          }
        }
      );
    });
  }, []);

  return (
    <div className="min-h-screen bg-black text-white py-16 px-8" id="education">
      <h2 className="text-4xl font-bold mb-12 text-center">🎓 Education</h2>
      <div className="max-w-4xl mx-auto space-y-10">
        {educationData.map((edu, index) => (
          <motion.div
            key={index}
            ref={el => eduRefs.current[index] = el}
            className="glass p-6 rounded-xl shadow-xl"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
          >
            <h3 className="text-2xl font-semibold">{edu.degree}</h3>
            <p className="text-lg text-white/70">{edu.school}</p>
            <span className="text-sm text-white/50">{edu.year}</span>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Education;
