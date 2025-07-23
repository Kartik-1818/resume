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

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/About' },
    { name: 'Projects', path: '/Projects' },
    { name: 'Skills & Education', path: '/skillsEdu' },
    { name: 'Contact', path: '/Contact' },
  ];

  const linkClass = `block px-4 py-2 text-gray-800 hover:text-yellow-500 font-medium transition`;

  return (
    <nav className="bg-gradient-to-br from-[#c8ffaa] via-[#d9ffe6] to-[#f0fff9] sticky top-0 z-50 shadow-md">
      <div className="max-w-7xl mx-auto px-4 py-3 flex justify-between items-center">

        {/* Logo */}
        <div className="text-2xl font-extrabold text-black tracking-tight">
          Kartik Jhamb
        </div>

        {/* Hamburger for mobile */}
        <div className="md:hidden">
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="text-2xl text-gray-800 focus:outline-none"
          >
            {isMenuOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center space-x-6">
          {navLinks.map(({ name, path }) => (
            <NavLink
              key={name}
              to={path}
              className={({ isActive }) =>
                `${linkClass} ${isActive ? 'text-yellow-500 font-semibold' : ''}`
              }
            >
              {name}
            </NavLink>
          ))}
        </div>

        {/* Social Icons */}
        <div className="hidden md:flex items-center space-x-4 text-xl text-gray-700">
          <a href="https://www.linkedin.com/in/kartik-jhamb-b68a96326" target="_blank" rel="noopener noreferrer" className="hover:text-blue-600"><FaLinkedin /></a>
          <a href="https://www.instagram.com/kartikj_1718" target="_blank" rel="noopener noreferrer" className="hover:text-pink-500"><FaInstagram /></a>
          <a href="https://wa.me/918209552235" target="_blank" rel="noopener noreferrer" className="hover:text-green-500"><FaWhatsapp /></a>
          <a href="https://github.com/Kartik-1818" target="_blank" rel="noopener noreferrer" className="hover:text-gray-800"><FaGithub /></a>
        </div>
      </div>

      {/* Mobile Dropdown */}
      {isMenuOpen && (
        <div className="md:hidden bg-white/80 backdrop-blur-md px-4 pb-4 rounded-b-md shadow animate-fadeIn">
          <div className="flex flex-col space-y-3">
            {navLinks.map(({ name, path }) => (
              <NavLink
                key={name}
                to={path}
                onClick={() => setIsMenuOpen(false)}
                className={({ isActive }) =>
                  `${linkClass} ${isActive ? 'text-yellow-500 font-semibold' : ''}`
                }
              >
                {name}
              </NavLink>
            ))}

            <div className="flex justify-center space-x-4 text-xl mt-2">
              <a href="https://www.linkedin.com/in/kartik-jhamb-b68a96326" target="_blank" rel="noopener noreferrer" className="hover:text-blue-600"><FaLinkedin /></a>
              <a href="https://www.instagram.com/kartikj_1718" target="_blank" rel="noopener noreferrer" className="hover:text-pink-500"><FaInstagram /></a>
              <a href="https://wa.me/918209552235" target="_blank" rel="noopener noreferrer" className="hover:text-green-500"><FaWhatsapp /></a>
              <a href="https://github.com/Kartik-1818" target="_blank" rel="noopener noreferrer" className="hover:text-gray-800"><FaGithub /></a>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}
