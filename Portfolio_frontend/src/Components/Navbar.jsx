import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { FaLinkedin, FaInstagram, FaWhatsapp, FaGithub, FaBars, FaTimes } from 'react-icons/fa';

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const linkClass =
    'px-3 py-2 hover:text-yellow-400 transition-colors duration-200';

  return (
    <nav className="bg-[#102E50] text-white p-4 flex flex-col md:flex-row md:justify-between items-center gap-4 md:gap-8 text-lg">

      {/* Logo / Branding */}
      <div className="flex justify-between w-full md:w-auto items-center">
        <div className="text-2xl font-semibold font-cursive">Kartik Jhamb</div>
        <button 
          className="md:hidden p-2 text-2xl" 
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <FaTimes /> : <FaBars />}
        </button>
      </div>

      {/* Main Nav Links */}
      <div className={`flex flex-col md:flex-row md:justify-center gap-4 md:gap-8 transition-all duration-300 md:block ${isMenuOpen ? 'block' : 'hidden'}`}>
        <NavLink
          to="/"
          className={({ isActive }) =>
            isActive ? `${linkClass} text-yellow-400 font-semibold` : linkClass
          }
        >
          Home
        </NavLink>
        <NavLink
          to="/About"
          className={({ isActive }) =>
            isActive ? `${linkClass} text-yellow-400 font-semibold` : linkClass
          }
        >
          About
        </NavLink>
        <NavLink
          to="/Projects"
          className={({ isActive }) =>
            isActive ? `${linkClass} text-yellow-400 font-semibold` : linkClass
          }
        >
          Projects
        </NavLink>
        <NavLink
          to="/skillsEdu"
          className={({ isActive }) =>
            isActive ? `${linkClass} text-yellow-400 font-semibold` : linkClass
          }
        >
          Skills & Education
        </NavLink>
        <NavLink
          to="/Contact"
          className={({ isActive }) =>
            isActive ? `${linkClass} text-yellow-400 font-semibold` : linkClass
          }
        >
          Contact
        </NavLink>
      </div>

      {/* Social Icons */}
      <div className="flex gap-2 text-xl pr-4">
        <a
          href="https://www.linkedin.com/in/kartik-jhamb-b68a96326?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-blue-400"
        >
          <FaLinkedin />
        </a>
        <a
          href="https://www.instagram.com/kartikj_1718?igsh=MWdycjV3dG9laWh6eQ=="
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-pink-400"
        >
          <FaInstagram />
        </a>
        <a
          href="https://wa.me/918209552235"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-green-400"
        >
          <FaWhatsapp />
        </a>
        <a
          href="https://github.com/Kartik-1818"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-gray-400"
        >
          <FaGithub />
        </a>
      </div>
    </nav>
  );
}
