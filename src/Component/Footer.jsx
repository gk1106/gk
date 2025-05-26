import { FaLinkedin, FaGithub } from "react-icons/fa";


const Footer = () => {
  return (
    <footer className="backdrop-blur-lg bg-black border-t border-white/20 text-black py-6 px-4">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
        
        {/* Copyright */}
        <p className="text-sm text-white/60 text-center md:text-left">
          &copy; {new Date().getFullYear()} Ganeshkumar V. All rights reserved.
        </p>

        {/* Icons & Resume */}
        <div className="flex items-center gap-6">
          {/* LinkedIn */}
          <a
            href="https://www.linkedin.com/in/gk1106/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white hover:text-blue-400 text-2xl transition-transform hover:scale-125"
            title="LinkedIn"
          >
            <FaLinkedin />
          </a>

          {/* GitHub */}
          <a
            href="https://github.com/gk1106"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white hover:text-gray-400 text-2xl transition-transform hover:scale-125"
            title="GitHub"
          >
            <FaGithub />
          </a>

          {/* Resume Download */}
          <a
            href="/Ganeshkumar-Resume-2025.pdf"
            download
            className="bg-pink-600 hover:bg-pink-700 text-white px-4 py-2 rounded-lg text-sm font-semibold transition-all shadow-md hover:shadow-lg"
          >
            Download Resume
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
