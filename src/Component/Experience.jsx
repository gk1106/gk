import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { FaBriefcase } from "react-icons/fa";

gsap.registerPlugin(ScrollTrigger);

const experiences = [
  {
    role: "Software Developer I",
    company: "Muthu Soft Labs Private Ltd",
    location: "Chennai, TamilNadu, India",
    duration: "June 2024 – Present",
  },
  {
    role: "Software Developer",
    company: "UNANU Technologies Private Ltd",
    location: "Chennai, TamilNadu, India",
    duration: "January 2024 – May 2024",
  },
  {
    role: "Graduate Trainee",
    company: "Tata Consultancy Services (TCS)",
    location: "Chennai, TamilNadu, India",
    duration: "March 2022 – April 2023",
  },
];

const Experience = () => {
  const sectionRef = useRef(null);

  useEffect(() => {
    const boxes = sectionRef.current.querySelectorAll(".exp-box");

    boxes.forEach((box, i) => {
      gsap.fromTo(
        box,
        { opacity: 0, y: 50 },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          delay: i * 0.2,
          scrollTrigger: {
            trigger: box,
            start: "top 80%",
            toggleActions: "play none none reverse",
          },
        }
      );
    });
  }, []);

  return (
    <div id="experience" ref={sectionRef} className="bg-black text-white py-20 px-4 md:px-10">
      <h2 className="text-4xl font-bold text-center mb-12">💼 Experience</h2>
      <div className="relative border-l border-pink-500 max-w-4xl mx-auto space-y-10 pl-6 ">
        {experiences.map((exp, idx) => (
          <div key={idx} className="exp-box relative">
            <span className="absolute -left-[12px] top-1.5 w-6 h-6 bg-pink-600 rounded-full flex items-center justify-center text-white">
              <FaBriefcase size={12} />
            </span>
            <div className="glass p-6 rounded-lg hover:scale-[1.02] transition-all duration-300 ml-5">
              <h3 className="text-xl font-semibold">{exp.role}</h3>
              <p className="text-pink-400">{exp.company}</p>
              <p className="text-white/70 text-sm">{exp.location}</p>
              <p className="text-white/50 text-sm">{exp.duration}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Experience;
