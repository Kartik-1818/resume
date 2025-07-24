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

  const linkClass = `block px-4 py-2 text-gray-700 hover:text-yellow-500 transition font-medium`;

  return (
    <nav className="sticky top-0 z-50 bg-white/60 backdrop-blur-md shadow-sm">
      <div className="max-w-7xl mx-auto px-4 py-3 flex justify-between items-center">

        {/* Logo */}
        <div className="text-2xl font-bold tracking-tight text-gray-800">
          Kartik <span className="text-yellow-500">Jhamb</span>
        </div>

        {/* Hamburger */}
        <div className="md:hidden">
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="text-2xl text-gray-700"
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

        {/* Socials (Desktop) */}
        <div className="hidden md:flex items-center space-x-4 text-xl text-gray-600">
          <a href="https://www.linkedin.com/in/kartik-jhamb-b68a96326" target="_blank" rel="noopener noreferrer" className="hover:text-blue-600"><FaLinkedin /></a>
          <a href="https://www.instagram.com/kartikj_1718" target="_blank" rel="noopener noreferrer" className="hover:text-pink-500"><FaInstagram /></a>
          <a href="https://wa.me/918209552235" target="_blank" rel="noopener noreferrer" className="hover:text-green-500"><FaWhatsapp /></a>
          <a href="https://github.com/Kartik-1818" target="_blank" rel="noopener noreferrer" className="hover:text-black"><FaGithub /></a>
        </div>
      </div>

      {/* Mobile Dropdown */}
      {isMenuOpen && (
        <div className="md:hidden bg-white/80 backdrop-blur-sm px-4 pb-4 shadow rounded-b-lg animate-fadeIn">
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

            {/* Socials */}
            <div className="flex justify-center space-x-4 text-xl mt-3">
              <a href="https://www.linkedin.com/in/kartik-jhamb-b68a96326" target="_blank" rel="noopener noreferrer" className="hover:text-blue-600"><FaLinkedin /></a>
              <a href="https://www.instagram.com/kartikj_1718" target="_blank" rel="noopener noreferrer" className="hover:text-pink-500"><FaInstagram /></a>
              <a href="https://wa.me/918209552235" target="_blank" rel="noopener noreferrer" className="hover:text-green-500"><FaWhatsapp /></a>
              <a href="https://github.com/Kartik-1818" target="_blank" rel="noopener noreferrer" className="hover:text-black"><FaGithub /></a>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}
