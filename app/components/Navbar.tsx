"use client";

import { useState, useEffect } from "react";

export default function Navbar() {
  const [activeSection, setActiveSection] = useState("services");

  const navItems = [
    { id: "experience", label: "EXPERIENCE" },
    { id: "services", label: "SERVICES" },
    { id: "works", label: "WORKS" },
    { id: "contact", label: "CONTACT" },
  ];

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      // Get the navbar height to offset the scroll position
      const navbarHeight = 80;
      const elementPosition = element.offsetTop - navbarHeight;

      window.scrollTo({
        top: elementPosition,
        behavior: "smooth",
      });

      setActiveSection(sectionId);
    }
  };

  // Track scroll position to update active section
  useEffect(() => {
    const handleScroll = () => {
      const sections = navItems.map((item) => item.id);
      const scrollPosition = window.scrollY + 100; // Offset for better detection

      for (const sectionId of sections) {
        const element = document.getElementById(sectionId);
        if (element) {
          const offsetTop = element.offsetTop;
          const offsetBottom = offsetTop + element.offsetHeight;

          if (scrollPosition >= offsetTop && scrollPosition < offsetBottom) {
            setActiveSection(sectionId);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // Call once to set initial state

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b border-gray-200/50">
      <div className="relative flex justify-between items-center px-12 py-6 overflow-hidden">
        {/* Subtle background effects */}
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-gray-50/30 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-1000 pointer-events-none"></div>

        {/* Floating particles */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          {[...Array(4)].map((_, i) => (
            <div
              key={i}
              className="absolute w-1 h-1 bg-gray-300 rounded-full opacity-20 animate-pulse"
              style={{
                left: `${15 + i * 25}%`,
                top: `${20 + (i % 2) * 60}%`,
                animationDelay: `${i * 1.5}s`,
                animationDuration: `${4 + i * 0.5}s`,
              }}
            />
          ))}
        </div>

        {/* Logo */}
        <div className="relative group">
          <div
            className="text-2xl font-bold text-gray-800 transition-all duration-300 group-hover:scale-105 cursor-pointer"
            style={{ fontFamily: "cursive" }}
            onClick={() => scrollToSection("services")}
          >
            Aakash
          </div>
          <div className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-gray-800 to-gray-600 group-hover:w-full transition-all duration-300"></div>
        </div>

        {/* Navigation Items */}
        <div className="relative flex items-center space-x-8 backdrop-blur-sm bg-white/30 rounded-full px-6 py-2 border border-gray-200/50">
          {navItems.map((item) => (
            <button
              key={item.id}
              className={`relative text-sm font-medium transition-all duration-300 px-3 py-2 rounded-full group ${
                item.id === activeSection
                  ? "text-gray-800"
                  : "text-gray-500 hover:text-gray-800"
              }`}
              onClick={() => scrollToSection(item.id)}
            >
              <span className="relative z-10">{item.label}</span>

              {/* Active indicator */}
              {item.id === activeSection && (
                <div className="absolute inset-0 bg-gray-800/10 rounded-full backdrop-blur-sm border border-gray-800/20 animate-pulse"></div>
              )}

              {/* Hover effect */}
              <div className="absolute inset-0 bg-gray-100/50 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-200"></div>

              {/* Bottom border for active state */}
              {item.id === activeSection && (
                <div className="absolute -bottom-1 left-1/2 transform -translate-x-1/2 w-4 h-0.5 bg-gray-800 rounded-full"></div>
              )}
            </button>
          ))}
        </div>

        {/* Contact Info */}
        <div className="relative flex items-center space-x-4 group">
          <span className="text-sm font-medium text-gray-800 transition-all duration-300 group-hover:text-gray-600">
            +91 9064387318
          </span>

          <div className="relative w-6 h-6 border border-gray-400 rounded-full flex items-center justify-center transition-all duration-300 hover:border-gray-600 hover:shadow-md hover:scale-110 cursor-pointer group">
            <div className="absolute inset-0 bg-gradient-to-br from-gray-100 to-gray-200 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-200"></div>
            <svg
              className="relative z-10 transition-transform duration-200 group-hover:scale-110"
              width="12"
              height="12"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
            </svg>

            {/* Ripple effect on hover */}
            <div className="absolute inset-0 rounded-full border-2 border-gray-400 opacity-0 group-hover:opacity-100 group-hover:scale-150 transition-all duration-300"></div>
          </div>
        </div>
      </div>
    </nav>
  );
}
