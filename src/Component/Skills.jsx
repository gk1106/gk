import React, { useState } from "react";
import { Tab, TabGroup, TabList, TabPanels, TabPanel } from "@headlessui/react";
import { motion } from "framer-motion";
import {
  FaJava, FaReact, FaGitAlt, FaDocker, FaLinux, FaAws,FaBootstrap
} from "react-icons/fa";
import {
  SiSpring,
  SiHibernate,
  SiJavascript,
  SiTailwindcss,
  SiMysql,
  SiMongodb,
  SiJquery,
  SiMui,
} from "react-icons/si";

const categories = {
  "Languages & Frameworks": [
    { name: "Java", icon: <FaJava /> },
    { name: "Spring Boot", icon: <SiSpring /> },
    { name: "Hibernate", icon: <SiHibernate /> },
    { name: "JavaScript", icon: <SiJavascript /> },
  ],
  Frontend: [
    { name: "React.js", icon: <FaReact /> },
    { name: "Tailwind CSS", icon: <SiTailwindcss /> },
    { name: "Bootstrap", icon: <FaBootstrap /> },
    { name: "Material UI", icon: <SiMui /> },
    { name: "jQuery", icon: <SiJquery /> },
  ],
  Backend: [
    { name: "Spring Security", icon: <SiSpring /> },
    { name: "Microservices", icon: <FaJava /> },
  ],
  Database: [
    { name: "MySQL", icon: <SiMysql /> },
    { name: "MongoDB", icon: <SiMongodb /> },
  ],
  DevOps: [
    { name: "Linux", icon: <FaLinux /> },
    { name: "Docker", icon: <FaDocker /> },
    { name: "GitHub / GitLab", icon: <FaGitAlt /> },
    { name: "AWS", icon: <FaAws /> },
  ],
};

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

const Skills = () => {
  const [selectedIndex, setSelectedIndex] = useState(0);

  return (
    <div id="skills" className="min-h-screen bg-black text-white py-16 px-4 md:px-10">
      <h2 className="text-4xl font-bold text-center mb-12">🚀 My Skills</h2>

      <TabGroup selectedIndex={selectedIndex} onChange={setSelectedIndex}>
        <TabList className="flex flex-wrap justify-center gap-3 mb-8">
          {Object.keys(categories).map((category) => (
            <Tab
              key={category}
              className={({ selected }) =>
                classNames(
                  "px-4 py-2 text-sm md:text-base font-semibold rounded-full transition duration-300",
                  selected
                    ? "bg-white text-black shadow-md"
                    : "bg-white/10 text-white hover:bg-white/20"
                )
              }
            >
              {category}
            </Tab>
          ))}
        </TabList>

        <TabPanels>
          {Object.values(categories).map((skills, idx) => (
            <TabPanel key={idx}>
              <motion.div
                className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 max-w-6xl mx-auto"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
              >
                {skills.map((skill, index) => (
                  <motion.div
                    key={index}
                    className="glass p-6 rounded-xl text-center shadow-lg cursor-pointer"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.05 }}
                  >
                    {/* <div className="text-5xl mb-4 text-pink-400 mx-auto">{skill.icon}</div> */}
                    <div className="flex items-center justify-center text-5xl mb-4 text-pink-400">
  {skill.icon}
</div>

                    <h4 className="text-lg font-semibold">{skill.name}</h4>
                  </motion.div>
                ))}
              </motion.div>
            </TabPanel>
          ))}
        </TabPanels>
      </TabGroup>
    </div>
  );
};

export default Skills;
