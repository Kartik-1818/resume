import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import {
  FaLinkedin,
  FaInstagram,
  FaWhatsapp,
  FaGithub,
  FaBars,
  FaTimes,
} from 'react-icons/fa';

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const linkClass =
    'px-4 py-2 text-white hover:text-yellow-400 font-medium transition duration-200';

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/About' },
    { name: 'Projects', path: '/Projects' },
    { name: 'Skills & Education', path: '/skillsEdu' },
    { name: 'Contact', path: '/Contact' },
  ];

  return (
    <nav className="bg-gradient-to-br from-[#c8ffaa] via-[#d9ffe6] to-[#f0fff9] text-black sticky top-0 z-50 shadow-md">
      <div className="max-w-7xl mx-auto px-4 py-3 flex justify-between items-center">

        {/* Logo */}
        <div className="text-2xl font-bold font-cursive tracking-wide">
          Kartik Jhamb
        </div>

        {/* Mobile menu icon */}
        <div className="md:hidden">
          <button
            className="text-2xl focus:outline-none"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>

        {/* Desktop nav */}
        <div className="hidden md:flex items-center gap-6">
          {navLinks.map(({ name, path }) => (
            <NavLink
              key={name}
              to={path}
              className={({ isActive }) =>
                isActive
                  ? `${linkClass} text-yellow-400 font-semibold`
                  : linkClass
              }
            >
              {name}
            </NavLink>
          ))}
        </div>

        {/* Social Icons (Desktop) */}
        <div className="hidden md:flex items-center gap-3 text-xl pr-2">
          <a
            href="https://www.linkedin.com/in/kartik-jhamb-b68a96326"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-blue-400"
          >
            <FaLinkedin />
          </a>
          <a
            href="https://www.instagram.com/kartikj_1718"
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
            className="hover:text-gray-300"
          >
            <FaGithub />
          </a>
        </div>
      </div>

      {/* Mobile dropdown menu */}
      {isMenuOpen && (
        <div className="md:hidden px-4 pb-4 flex flex-col gap-4 animate-slideDown">
          {navLinks.map(({ name, path }) => (
            <NavLink
              key={name}
              to={path}
              onClick={() => setIsMenuOpen(false)}
              className={({ isActive }) =>
                isActive
                  ? `${linkClass} text-yellow-400 font-semibold`
                  : linkClass
              }
            >
              {name}
            </NavLink>
          ))}

          <div className="flex gap-4 text-2xl mt-2 justify-center">
            <a
              href="https://www.linkedin.com/in/kartik-jhamb-b68a96326"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-blue-400"
            >
              <FaLinkedin />
            </a>
            <a
              href="https://www.instagram.com/kartikj_1718"
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
              className="hover:text-gray-300"
            >
              <FaGithub />
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}
