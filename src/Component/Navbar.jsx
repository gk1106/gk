import React from 'react';
import { Link } from 'react-scroll';
import ThemeToggle from '../Component/ThemeToggle';

const Navbar = () => {
  return (
    <nav className="fixed top-4 left-1/2 transform -translate-x-1/2 z-50 bg-white/10 backdrop-blur-md border border-white/20 rounded-full px-6 py-2 shadow-md">
      <ul className="flex items-center space-x-6 text-white text-sm md:text-base font-medium">
        <li>
          <Link
            to="hero"
            smooth={true}
            duration={500}
            className="cursor-pointer hover:text-pink-400"
          >
            Home
          </Link>
        </li>
        <li>
          <Link
            to="experience"
            smooth={true}
            duration={500}
            className="cursor-pointer hover:text-pink-400"
          >
            Experience
          </Link>
        </li>
        <li>
          <Link
            to="education"
            smooth={true}
            duration={500}
            className="cursor-pointer hover:text-pink-400"
          >
            Education
          </Link>
        </li>
        <li>
          <Link
            to="skills"
            smooth={true}
            duration={500}
            className="cursor-pointer hover:text-pink-400"
          >
            Skills
          </Link>
        </li>
        <li>
          <Link
            to="contact"
            smooth={true}
            duration={500}
            className="cursor-pointer hover:text-pink-400"
          >
            Contact
          </Link>
        </li>
        <li>
          <ThemeToggle className="hover:text-pink-400" />
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
