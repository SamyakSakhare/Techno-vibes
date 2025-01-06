import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { FiMenu, FiX } from 'react-icons/fi';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    let lastScrollY = window.scrollY;

    const handleScroll = () => {
      if (window.scrollY > lastScrollY) {
        // Scrolling down
        setIsVisible(false);
      } else {
        // Scrolling up
        setIsVisible(true);
      }
      lastScrollY = window.scrollY;
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed w-full z-50 transition-transform duration-500 ${isVisible ? 'translate-y-0' : '-translate-y-full'} bg-transparent shadow-lg`}>
      <div className="container mx-auto px-6 py-4 flex justify-between items-center">
        <Link to="/" className="text-white text-3xl font-bold font-EFCO tracking-widest">
          Techno Vibes
        </Link>
        <div className="md:hidden">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-white focus:outline-none"
          >
            {isOpen ? <FiX className="w-8 h-8" /> : <FiMenu className="w-8 h-8" />}
          </button>
        </div>
        <div className={`hidden md:flex md:items-center space-x-8`}>
          <Link to="/about" className="text-white  font-EFCO tracking-wider text-xl transition duration-300 transform hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-r hover:from-green-400 hover:to-blue-500">About</Link>
          <Link to="/search" className="text-white font-EFCO tracking-wider text-xl transition duration-300 transform hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-r hover:from-green-400 hover:to-blue-500">Search</Link>
          <Link to="/famous-artists" className="text-white font-EFCO tracking-wider text-xl transition duration-300 transform hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-r hover:from-green-400 hover:to-blue-500">Famous Artists</Link>
          <Link to="/contact" className="text-white font-EFCO tracking-wider text-xl transition duration-300 transform hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-r hover:from-green-400 hover:to-blue-500">Contact</Link>
        </div>
      </div>
      {isOpen && (
        <div className="md:hidden bg-transparent">
          <div className="px-6 pb-6 flex flex-col space-y-4">
            <Link
              to="/about"
              className="text-white mt-3 font-EFCO tracking-wider text-xl transition duration-500 transform hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-r hover:from-green-400 hover:to-blue-500"
              onClick={() => setIsOpen(false)}
            >
              About
            </Link>
            <Link
              to="/search"
              className="text-white font-EFCO tracking-wider text-xl transition duration-500 transform hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-r hover:from-green-400 hover:to-blue-500"
              onClick={() => setIsOpen(false)}
            >
              Search
            </Link>
            <Link
              to="/famous-artists"
              className="text-white font-EFCO tracking-wider text-xl transition duration-500 transform hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-r hover:from-green-400 hover:to-blue-500"
              onClick={() => setIsOpen(false)}
            >
              Famous Artists
            </Link>
            <Link
              to="/contact"
              className="text-white font-EFCO tracking-wider text-xl transition duration-500 transform hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-r hover:from-green-400 hover:to-blue-500"
              onClick={() => setIsOpen(false)}
            >
              Contact
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
