import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';

const Navbar: React.FC<{ gender: 'female' | 'male' }> = ({ gender }) => {
  const [isOpen, setIsOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setIsOpen(false);
      }
    };

    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside);
      document.addEventListener('keydown', handleEscape);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      document.removeEventListener('keydown', handleEscape);
    };
  }, [isOpen]);

  return (
    <nav className="sticky top-0 z-50 bg-white/80 backdrop-blur-md shadow-sm p-4">
      <div className="container mx-auto flex justify-between items-center">
        <div className="flex items-center text-2xl font-bold text-gray-800">
          <Link to="/" className={`flex items-center transition-colors ${gender === 'female' ? 'hover:text-pink-600' : 'hover:text-blue-600'}`}>
            <img src="/logo.png" alt="Parlourly Logo" className="w-18 h-16 mr-2" />
            <div className="flex flex-col items-start gap-1">
              <span>Parlourly</span>
              <span className={`text-xs font-bold -mt-1 ${gender === 'female' ? 'text-pink-500' : 'text-blue-500'}`}>
                {gender === 'female' ? 'Your Next Beauty Destination' : 'Your Grooming Hub'}
              </span>
            </div>
          </Link>
        </div>
        <div ref={menuRef}>
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-gray-800 focus:outline-none focus:ring-2 focus:ring-pink-500 rounded"
            aria-expanded={isOpen}
            aria-label="Toggle navigation menu"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"} />
            </svg>
          </button>
          <ul
            className={`
              md:flex md:items-center md:space-x-8 font-semibold text-gray-900
              ${isOpen ? 'block' : 'hidden'}
              absolute md:relative top-full left-0 w-full md:w-auto
              bg-white/95 md:bg-transparent backdrop-blur-md md:backdrop-blur-none
              p-6 md:p-0 mt-2 md:mt-0 rounded-lg md:rounded-none shadow-lg md:shadow-none
              transition-transform duration-300 ease-in-out z-40
              ${isOpen ? 'transform opacity-100 scale-100' : 'transform opacity-0 scale-95'} md:opacity-100 md:scale-100
            `}
          >
            <li><Link to="/services" className={`block py-2 transition-colors ${gender === 'female' ? 'hover:text-pink-600' : 'hover:text-blue-600'}`} onClick={() => setIsOpen(false)}>Services</Link></li>
            <li><Link to="/how-it-works" className={`block py-2 transition-colors ${gender === 'female' ? 'hover:text-pink-600' : 'hover:text-blue-600'}`} onClick={() => setIsOpen(false)}>How it works</Link></li>
            <li><Link to="/why-us" className={`block py-2 transition-colors ${gender === 'female' ? 'hover:text-pink-600' : 'hover:text-blue-600'}`} onClick={() => setIsOpen(false)}>Why us?</Link></li>
            <li><Link to="/faqs" className={`block py-2 transition-colors ${gender === 'female' ? 'hover:text-pink-600' : 'hover:text-blue-600'}`} onClick={() => setIsOpen(false)}>FAQs</Link></li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
