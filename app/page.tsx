// app/page.tsx
'use client';

import { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import Contact from './components/Contact';

export default function Home() {
  return (
    <main className="min-h-screen bg-yellow-400">
      <div className="max-w-7xl mx-auto p-6">
        <div className="bg-gray-100 rounded-3xl min-h-screen overflow-hidden">
          <Navbar />
          <Hero />
          <About />
          <Projects />
          <Contact />
        </div>
      </div>
    </main>
  );
}