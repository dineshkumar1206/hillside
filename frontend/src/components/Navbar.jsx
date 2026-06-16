import React, { useState, useEffect, useRef } from 'react';
import Dropdown from './Dropdown';

export default function Navbar() {
  // Desktop properties dropdown state
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);

  // Mobile menu sidebar drawer state
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  // Mobile internal properties accordion toggle state
  const [isMobilePropOpen, setIsMobilePropOpen] = useState(false);
  
  const mobileMenuRef = useRef(null);

  // Toggle desktop properties dropdown
  const handleToggle = (e) => {
    e.preventDefault();
    setIsOpen(!isOpen);
  };

  // Toggle mobile internal accordion menu panel explicitly
  const handleMobilePropToggle = (e) => {
    e.preventDefault();
    setIsMobilePropOpen(!isMobilePropOpen);
  };

  // Close menus automatically if a user clicks outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false);
      }
      if (isMobileMenuOpen && mobileMenuRef.current && !mobileMenuRef.current.contains(event.target) && !event.target.closest('.mobile-toggle-btn')) {
        setIsMobileMenuOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [isMobileMenuOpen]);

  return (
    /* UPDATED STYLING:
      - Changed to 'sticky top-0 left-0' so it stays locked at the top of the viewport.
      - Fixed background to solid white ('bg-white') with a clean bottom shadow ('shadow-sm').
    */
    <nav className="w-full bg-gray-50 sticky top-0 left-0 z-50 px-6 py-3 md:px-16 shadow-sm transition-all duration-300">
      {/* Boxed Inner Container matching your Hero width */}
      <div className="max-w-7xl mx-auto flex items-center justify-between relative">
        
        {/* Left Side: Logo Container - Pinned Left */}
        <a href="/" className="flex items-center z-10 hover:opacity-90 transition-opacity">
          <img 
            src="/hillside/Hillsite-Favicon.webp" 
            alt="Real Estate Logo" 
            className="w-25 h-25 object-contain" 
          />
        </a>

        {/* Center: Desktop Navigation Links */}
        <div className="hidden md:flex absolute inset-0 items-center justify-center pointer-events-none">
          {/* Base text set uniformly to text-black */}
          <div className="flex items-center space-x-8 font-medium transition-colors duration-300 pointer-events-auto text-black">
            <a href="/" className="hover:text-green-500 transition-colors">Home</a>
            
            {/* <div className="relative py-2" ref={dropdownRef}>
              <button 
                onClick={handleToggle}
                className={`hover:text-green-500 font-semibold transition-colors flex items-center gap-1 cursor-pointer outline-none ${
                  isOpen ? 'text-green-500' : 'text-black'
                }`}
              >
                Properties
                <svg ... />
              </button>
            </div> */}

            <a href="/about" className="hover:text-green-500 transition-colors">About Us</a>
            <a href="/contact" className="hover:text-green-500 transition-colors">Contact Us</a>
          </div>
        </div>

        {/* Right Side Balance Spacer for Desktop */}
        <div className="w-20 h-20 invisible hidden md:block"></div>

        {/* Hamburger Button — Changed base color to text-black to match white header theme */}
        <button
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className="mobile-toggle-btn block md:hidden p-2 pr-1 hover:text-green-500 focus:outline-none cursor-pointer z-50 mr-1 text-black transition-colors duration-300"
          aria-label="Toggle navigation menu"
        >
          {isMobileMenuOpen ? (
            <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <line x1="18" y1="6" x2="6" y2="18"></line>
              <line x1="6" y1="6" x2="18" y2="18"></line>
            </svg>
          ) : (
            <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
              <line x1="4" y1="6" x2="20" y2="6"></line>
              <line x1="4" y1="12" x2="20" y2="12"></line>
              <line x1="4" y1="18" x2="20" y2="18"></line>
            </svg>
          )}
        </button>

      </div>

      {/* --- MOBILE SLIDEOUT DRAWER --- */}
      <div
        ref={mobileMenuRef}
        className={`fixed top-0 right-0 h-screen w-72 bg-white shadow-2xl transform transition-transform duration-300 ease-in-out z-40 md:hidden pt-24 ${
          isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div className="flex flex-col p-6 space-y-5 font-medium text-lg text-black">
          <a href="/" onClick={() => setIsMobileMenuOpen(false)} className="hover:text-green-500 transition-colors pb-2 border-b border-orange-100/30">Home</a>
          <a href="/about" onClick={() => setIsMobileMenuOpen(false)} className="hover:text-green-500 transition-colors pb-2 border-b border-orange-100/30">About Us</a>
          <a href="/contact" onClick={() => setIsMobileMenuOpen(false)} className="hover:text-green-500 transition-colors">Contact Us</a>
        </div>
      </div>
    </nav>
  );
}