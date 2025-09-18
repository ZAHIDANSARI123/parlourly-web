import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';

const Navbar: React.FC = () => {
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
    <nav className="bg-pink-50 text-white p-4 relative">
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-xl font-bold text-black">
          <Link to="/" className="hover:text-gray-300">Parlourly</Link>
        </div>
        <div ref={menuRef}>
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-black focus:outline-none focus:ring-2 focus:ring-gray-300 rounded"
            aria-expanded={isOpen}
            aria-label="Toggle navigation menu"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
          <ul
            className={`md:flex space-x-6 text-black ${isOpen ? 'block' : 'hidden'} md:block flex-col md:flex-row absolute md:relative top-full left-0 w-full md:w-auto bg-pink-50 md:bg-transparent p-4 md:p-0 z-10 transition-all duration-300 ease-in-out ${isOpen ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-2'}`}
          >
            <li><Link to="/services" className="hover:text-gray-300 block py-2 md:py-0 transition-colors duration-200" onClick={() => setIsOpen(false)}>Services</Link></li>
            <li><Link to="/how-it-works" className="hover:text-gray-300 block py-2 md:py-0 transition-colors duration-200" onClick={() => setIsOpen(false)}>How it works</Link></li>
            <li><Link to="/why-us" className="hover:text-gray-300 block py-2 md:py-0 transition-colors duration-200" onClick={() => setIsOpen(false)}>Why us?</Link></li>
            <li><Link to="/faqs" className="hover:text-gray-300 block py-2 md:py-0 transition-colors duration-200" onClick={() => setIsOpen(false)}>FAQs</Link></li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
