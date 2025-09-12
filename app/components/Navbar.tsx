// app/components/Navbar.tsx
'use client';

import { useState, useEffect } from 'react';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled ? 'bg-white/98' : 'bg-white/95'
    } backdrop-blur-md border-b border-yellow-200`}>
      <div className="max-w-6xl mx-auto px-8 py-4 flex justify-between items-center">
        <button 
          onClick={() => scrollToSection('home')}
          className="text-2xl font-bold text-yellow-600 hover:text-yellow-700 transition-colors"
        >
          Portfolio
        </button>
        
        <ul className="hidden md:flex space-x-8">
          {['Home', 'About', 'Projects', 'Contact'].map((item) => (
            <li key={item}>
              <button
                onClick={() => scrollToSection(item.toLowerCase())}
                className="text-gray-800 hover:text-yellow-600 font-medium transition-colors relative group"
              >
                {item}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-yellow-400 transition-all duration-300 group-hover:w-full"></span>
              </button>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}