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

  // Track scroll position
  const [isScrolled, setIsScrolled] = useState(false);

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

  // Monitor scroll position
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

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
    /* 
      CHANGES MADE HERE:
      1. Changed 'sticky' to 'absolute' so it floats OVER the Hero section rather than pushing it down.
      2. Dynamic background transitions cleanly from 'bg-transparent' to 'bg-white' on scroll.
    */
    <nav className={`w-full absolute top-0 left-0 z-50 px-6 py-3 md:px-16 transition-all duration-300 ${
      isScrolled ? '!fixed bg-white shadow-md' : 'bg-transparent'
    }`}>
      {/* Boxed Inner Container matching your Hero width */}
      <div className="max-w-7xl mx-auto flex items-center justify-between relative">
        
        {/* Left Side: Logo Container - Pinned Left */}
        {/* <a href="/" className="flex items-center z-10 hover:opacity-90 transition-opacity">
          <img 
            src="/hillside/Hillsite-Favicon.webp" 
            alt="Real Estate Logo" 
            className="w-25 h-25 object-contain" 
          />
        </a> */}

        {/* Center: Desktop Navigation Links */}
        {/* 
          CHANGES MADE HERE: 
          Dynamically changes text to 'text-white' when transparent at the top, 
          and switches back to 'text-gray-800' once you scroll and the background turns white.
        */}
        <div className="hidden md:flex absolute inset-0 items-center justify-center pointer-events-none">
          <div className={`flex items-center space-x-8 font-medium transition-colors duration-300 pointer-events-auto ${
            isScrolled ? 'text-gray-800' : 'text-white drop-shadow-sm'
          }`}>
            <a href="/" className="hover:text-green-300 transition-colors">Home</a>
            
            {/* <div className="relative py-2" ref={dropdownRef}>
              <button 
                onClick={handleToggle}
                className={`hover:text-blue-600 font-semibold transition-colors flex items-center gap-1 cursor-pointer outline-none ${
                  isOpen ? 'text-blue-600' : isScrolled ? 'text-gray-800' : 'text-white'
                }`}
              >
                Properties
                <svg ... />
              </button>
            </div> */}

            <a href="/about" className="hover:text-green-300 transition-colors">About Us</a>
            <a href="/contact" className="hover:text-green-300 transition-colors">Contact Us</a>
          </div>
        </div>

        {/* Right Side Balance Spacer for Desktop */}
        <div className="w-20 h-20 invisible hidden md:block"></div>

        {/* Hamburger Button — Dynamic color styling for mobile clarity */}
        <button
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className={`mobile-toggle-btn block md:hidden p-2 pr-1 hover:text-blue-600 focus:outline-none cursor-pointer z-50 mr-1 transition-colors duration-300 ${
            isScrolled || isMobileMenuOpen ? 'text-gray-800' : 'text-white'
          }`}
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
        <div className="flex flex-col p-6 space-y-5 font-medium text-lg text-gray-800">
          <a href="/" onClick={() => setIsMobileMenuOpen(false)} className="hover:text-blue-600 transition-colors pb-2 border-b border-orange-100/30">Home</a>
          <a href="/about" onClick={() => setIsMobileMenuOpen(false)} className="hover:text-blue-600 transition-colors pb-2 border-b border-orange-100/30">About Us</a>
          <a href="/contact" onClick={() => setIsMobileMenuOpen(false)} className="hover:text-blue-600 transition-colors">Contact Us</a>
        </div>
      </div>
    </nav>
  );
}