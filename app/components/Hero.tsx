// app/components/Hero.tsx
"use client";
import Image from "next/image";
import { useState, useEffect } from "react";
import photo from "../components/assets/Capturebackgrd (1).jpg";

export default function Hero() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <section className="relative min-h-screen overflow-hidden bg-gradient-to-br from-gray-50 via-white to-gray-100">
      {/* Dynamic Background Elements */}
      <div className="absolute inset-0">
        {/* Animated gradient orbs */}
        <div 
          className="absolute w-96 h-96 bg-gradient-to-r from-teal-300 to-emerald-400 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse"
          style={{
            top: '20%',
            left: '20%',
            transform: `translate(${mousePosition.x * 0.02}px, ${mousePosition.y * 0.02}px)`,
            animation: 'float 6s ease-in-out infinite'
          }}
        />
        <div 
          className="absolute w-96 h-96 bg-gradient-to-r from-orange-300 to-yellow-400 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse"
          style={{
            top: '60%',
            right: '20%',
            transform: `translate(${-mousePosition.x * 0.01}px, ${-mousePosition.y * 0.01}px)`,
            animation: 'float 8s ease-in-out infinite reverse'
          }}
        />
        <div 
          className="absolute w-96 h-96 bg-gradient-to-r from-blue-300 to-teal-400 rounded-full mix-blend-multiply filter blur-xl opacity-15 animate-pulse"
          style={{
            bottom: '20%',
            left: '50%',
            transform: `translate(${mousePosition.x * 0.015}px, ${mousePosition.y * 0.015}px)`,
            animation: 'float 7s ease-in-out infinite'
          }}
        />
        
        {/* Grid pattern overlay */}
        <div className="absolute inset-0 opacity-10" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23047857' fill-opacity='0.3'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
        }} />
      </div>

      <div className="relative z-10 px-8 lg:px-12 py-16 grid lg:grid-cols-2 gap-16 items-center min-h-screen">
        {/* Left Content */}
        <div className={`space-y-8 transition-all duration-1000 ease-out ${isVisible ? 'translate-x-0 opacity-100' : '-translate-x-20 opacity-0'}`}>
          <div className="space-y-6">
            {/* Greeting with typing effect */}
            <div className="relative">
              <h1 className="text-5xl lg:text-7xl font-bold text-slate-800 leading-tight mb-6">
                Hey There,
                <br />
                I'm <span className="bg-gradient-to-r from-teal-600 to-emerald-600 bg-clip-text text-transparent">Aakash</span>
              </h1>
              {/* Animated cursor */}
              <div className="absolute -right-2 top-0 w-1 h-16 bg-teal-600 animate-pulse" />
            </div>

            <p className="text-lg lg:text-xl text-slate-600 mb-8 leading-relaxed max-w-2xl">
              I create <span className="text-teal-600 font-semibold">beautiful</span>, <span className="text-emerald-600 font-semibold">functional</span>, and <span className="text-orange-600 font-semibold">user-centered</span> digital
              experiences with React.js and Next.js. And I love what I do.
            </p>

            {/* Glassmorphism contact card */}
            <div className="inline-flex items-center space-x-3 bg-white/60 backdrop-blur-md border border-teal-200 rounded-xl px-6 py-3 hover:bg-white/80 transition-all duration-300 group cursor-pointer shadow-lg">
              <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse" />
              <p className="text-teal-700 font-medium">aakash.singh@gmail.com</p>
              <svg className="w-4 h-4 text-teal-600 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </div>
          </div>

          {/* Enhanced Experience Badge */}
          <div className="flex items-center space-x-8">
            <div className="relative group">
              {/* Background glow */}
              <div className="absolute -inset-2 bg-gradient-to-r from-teal-400 to-emerald-500 rounded-lg blur opacity-20 group-hover:opacity-40 transition duration-1000" />
              
              {/* Main badge */}
              <div className="relative bg-white/80 backdrop-blur-md border border-teal-200 rounded-lg p-6 hover:scale-105 transition-all duration-300 shadow-lg">
                <div className="flex items-baseline space-x-2">
                  <div className="text-5xl lg:text-6xl font-bold bg-gradient-to-r from-teal-600 to-emerald-600 bg-clip-text text-transparent">3+</div>
                  <div className="text-orange-500 text-lg">★</div>
                </div>
                <div className="text-sm text-slate-600 uppercase tracking-wider font-semibold mt-2">
                  YEARS
                  <br />
                  <span className="text-teal-600">EXPERIENCE</span>
                </div>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <button className="group relative px-8 py-3 bg-gradient-to-r from-teal-600 to-emerald-600 rounded-full font-semibold text-white hover:shadow-2xl hover:shadow-teal-500/25 transition-all duration-300 hover:scale-105">
                <span className="relative z-10">View My Work</span>
                <div className="absolute inset-0 bg-gradient-to-r from-teal-700 to-emerald-700 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </button>
              
              <button className="px-8 py-3 border border-teal-300 rounded-full font-semibold text-teal-700 backdrop-blur-sm hover:bg-teal-50 transition-all duration-300 hover:scale-105">
                Get In Touch
              </button>
            </div>
          </div>
        </div>

        {/* Right Content - Enhanced Profile Image */}
        <div className={`relative transition-all duration-1000 ease-out delay-300 ${isVisible ? 'translate-x-0 opacity-100' : 'translate-x-20 opacity-0'}`}>
          {/* Floating elements */}
          <div className="absolute -top-10 -left-10 w-20 h-20 bg-gradient-to-r from-teal-400 to-emerald-500 rounded-full opacity-40 animate-bounce" />
          <div className="absolute -bottom-16 -right-16 w-24 h-24 bg-gradient-to-r from-orange-400 to-yellow-500 rounded-full opacity-30 animate-bounce" style={{ animationDelay: '2s' }} />
          <div className="absolute top-1/3 -left-6 w-12 h-12 bg-gradient-to-r from-blue-400 to-teal-500 rounded-full opacity-35 animate-pulse" />

          {/* Artistic Brush Stroke Background */}
          <div className="absolute inset-0 flex items-center justify-center">
            <svg
              width="500"
              height="400"
              viewBox="0 0 500 400"
              className="absolute"
            >
              {/* <defs>
                <linearGradient
                  id="brushGradient"
                  x1="0%"
                  y1="0%"
                  x2="100%"
                  y2="100%"
                >
                  <stop offset="0%" stopColor="#047857" />
                  <stop offset="50%" stopColor="#059669" />
                  <stop offset="100%" stopColor="#10b981" />
                </linearGradient>
              </defs> */}
              
              {/* Top brush strokes */}
              <path
                d="M80 50 Q120 40 180 45 Q240 50 300 40 Q360 30 420 35"
                stroke="url(#brushGradient)"
                strokeWidth="25"
                strokeLinecap="round"
                fill="none"
                opacity="0.9"
              />
              <path
                d="M90 80 Q150 70 220 75 Q290 80 350 70 Q400 65 450 70"
                stroke="url(#brushGradient)"
                strokeWidth="30"
                strokeLinecap="round"
                fill="none"
                opacity="0.8"
              />
              <path
                d="M70 110 Q130 100 200 105 Q270 110 330 100 Q380 95 430 100"
                stroke="url(#brushGradient)"
                strokeWidth="20"
                strokeLinecap="round"
                fill="none"
                opacity="0.7"
              />

              {/* Bottom brush strokes */}
              <path
                d="M60 290 Q120 300 190 295 Q260 290 320 300 Q380 310 440 305"
                stroke="url(#brushGradient)"
                strokeWidth="28"
                strokeLinecap="round"
                fill="none"
                opacity="0.8"
              />
              <path
                d="M80 320 Q140 330 210 325 Q280 320 340 330 Q400 340 460 335"
                stroke="url(#brushGradient)"
                strokeWidth="22"
                strokeLinecap="round"
                fill="none"
                opacity="0.9"
              />
              <path
                d="M50 350 Q110 360 180 355 Q250 350 310 360 Q370 370 430 365"
                stroke="url(#brushGradient)"
                strokeWidth="18"
                strokeLinecap="round"
                fill="none"
                opacity="0.7"
              />

              {/* Side brush strokes */}
              <path
                d="M50 120 Q60 180 55 240 Q50 300 60 350"
                stroke="url(#brushGradient)"
                strokeWidth="15"
                strokeLinecap="round"
                fill="none"
                opacity="0.6"
              />
              <path
                d="M450 100 Q440 160 445 220 Q450 280 440 340"
                stroke="url(#brushGradient)"
                strokeWidth="12"
                strokeLinecap="round"
                fill="none"
                opacity="0.6"
              />
            </svg>
          </div>

          {/* Main Profile Image Container */}
          <div className="relative z-10 flex items-center justify-center group">
            <div className="relative">
              {/* Simple image container without rotating border */}
              <div className="relative bg-gradient-to-br from-teal-400 to-emerald-500 rounded-full p-1 shadow-2xl transform group-hover:scale-105 transition-all duration-500">
                <div className="relative bg-white rounded-full p-2">
                  <Image
                    src={photo}
                    alt="Aakash Singh"
                    width={300}
                    height={300}
                    className="object-cover rounded-full filter group-hover:brightness-110 transition-all duration-500"
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Enhanced Certification Badge */}
          <div className="absolute -bottom-4 z-10 left-82 group cursor-pointer">
            {/* Glow effect */}
            <div className="absolute -inset-2 bg-gradient-to-r from-teal-400 to-emerald-500 rounded-2xl blur opacity-0 group-hover:opacity-50 transition duration-500" />
            
            {/* Badge */}
            <div className="relative bg-white/80 backdrop-blur-md rounded-2xl p-6 border border-teal-200 hover:bg-white/90 transition-all duration-300 hover:scale-110 shadow-lg">
              <div className="w-20 h-20 flex items-center justify-center">
                <div className="text-center">
                  <div className="w-10 h-10 bg-gradient-to-r from-teal-500 to-emerald-600 rounded-full mx-auto mb-2 flex items-center justify-center group-hover:rotate-12 transition-transform duration-300">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="white">
                      <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                    </svg>
                  </div>
                  <div className="text-xs text-slate-700 font-bold leading-tight tracking-wide">
                    <div className="text-teal-600">REACT & NEXTJS</div>
                    <div>SPECIALIST</div>
                    <div className="text-emerald-600">FRONTEND</div>
                    <div>DEVELOPER</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}