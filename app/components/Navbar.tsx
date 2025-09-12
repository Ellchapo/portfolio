// app/components/Navbar.tsx
'use client';

import { useState } from 'react';

export default function Navbar() {
  const [activeSection, setActiveSection] = useState('services');

  const navItems = [
    { id: 'services', label: 'SERVICES', active: true },
    { id: 'works', label: 'WORKS', active: false },
    { id: 'notes', label: 'NOTES', active: false },
    { id: 'experience', label: 'EXPERIENCE', active: false },
  ];

  return (
    <nav className="flex justify-between items-center px-12 py-8">
      {/* Logo */}
      <div className="text-2xl font-bold text-gray-800" style={{ fontFamily: 'cursive' }}>
        Aakash
      </div>

      {/* Navigation Items */}
      <div className="flex items-center space-x-8">
        {navItems.map((item) => (
          <button
            key={item.id}
            className={`text-sm font-medium transition-colors ${
              item.id === 'services'
                ? 'text-gray-800 border-b-2 border-gray-800 pb-1'
                : 'text-gray-500 hover:text-gray-800'
            }`}
            onClick={() => setActiveSection(item.id)}
          >
            {item.label}
          </button>
        ))}
      </div>

      {/* Contact Info */}
      <div className="flex items-center space-x-4">
        <span className="text-sm font-medium text-gray-800">+91 9876543210</span>
        <div className="w-6 h-6 border border-gray-400 rounded-full flex items-center justify-center">
          <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/>
          </svg>
        </div>
      </div>
    </nav>
  );
}