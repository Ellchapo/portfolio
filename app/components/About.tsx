// app/components/About.tsx
'use client';
import { useState, useEffect } from 'react';

const skills = [
  {
    title: 'Frontend Development',
    description: 'React.js, Next.js, TypeScript, JavaScript ES6+',
    icon: '⚛️',
    color: 'from-teal-500 to-emerald-600',
    bgColor: 'bg-teal-50',
    borderColor: 'border-teal-200',
    iconBg: 'bg-teal-100'
  },
  {
    title: 'UI/UX Implementation',
    description: 'Tailwind CSS, Responsive Design, Modern UI Libraries',
    icon: '🎨',
    color: 'from-emerald-500 to-green-600',
    bgColor: 'bg-emerald-50',
    borderColor: 'border-emerald-200',
    iconBg: 'bg-emerald-100'
  },
  {
    title: 'Performance Optimization',
    description: 'Code Splitting, SSR, SEO, Web Vitals',
    icon: '⚡',
    color: 'from-yellow-500 to-orange-500',
    bgColor: 'bg-yellow-50',
    borderColor: 'border-yellow-200',
    iconBg: 'bg-yellow-100'
  },
  {
    title: 'Development Tools',
    description: 'Git, Webpack, Vite, npm/yarn, Chrome DevTools',
    icon: '🛠️',
    color: 'from-blue-500 to-teal-600',
    bgColor: 'bg-blue-50',
    borderColor: 'border-blue-200',
    iconBg: 'bg-blue-100'
  }
];

export default function About() {
  const [isVisible, setIsVisible] = useState(false);
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    const section = document.getElementById('about-section');
    if (section) observer.observe(section);

    return () => observer.disconnect();
  }, []);

  return (
    <section 
       id="services"
      className="relative px-8 lg:px-12 py-20 bg-gradient-to-br from-gray-50 via-white to-teal-50/30 rounded-t-3xl mt-16 overflow-hidden"
    >
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-teal-100 to-emerald-200 rounded-full blur-3xl opacity-30" />
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-gradient-to-br from-emerald-100 to-teal-200 rounded-full blur-3xl opacity-20" />
        
        {/* Animated particles */}
        <div className="absolute top-20 left-1/4 w-2 h-2 bg-teal-400 rounded-full animate-pulse opacity-40" />
        <div className="absolute bottom-40 right-1/3 w-3 h-3 bg-emerald-400 rounded-full animate-pulse opacity-30" style={{ animationDelay: '1s' }} />
        <div className="absolute top-1/2 right-20 w-1 h-1 bg-orange-400 rounded-full animate-pulse opacity-50" style={{ animationDelay: '2s' }} />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Header Section */}
        <div className={`text-center mb-20 transition-all duration-1000 ease-out ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
          <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-teal-500 to-emerald-600 rounded-2xl mb-6 shadow-lg">
            <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.78 0-2.678-2.153-1.415-3.414l5-5A2 2 0 009 11.172V5z" />
            </svg>
          </div>
          
          <h2 className="text-4xl lg:text-5xl font-bold bg-gradient-to-r from-slate-800 to-slate-600 bg-clip-text text-transparent mb-6">
            My Services
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
            I specialize in creating modern, responsive web applications using cutting-edge technologies 
            that deliver exceptional user experiences.
          </p>
          
          {/* Decorative line */}
          <div className="flex items-center justify-center mt-8">
            <div className="w-12 h-1 bg-gradient-to-r from-teal-500 to-emerald-600 rounded-full" />
            <div className="w-3 h-3 bg-gradient-to-r from-teal-500 to-emerald-600 rounded-full mx-4" />
            <div className="w-12 h-1 bg-gradient-to-r from-teal-500 to-emerald-600 rounded-full" />
          </div>
        </div>

        {/* Skills Grid */}
        <div className="grid md:grid-cols-2 gap-8 lg:gap-10">
          {skills.map((skill, index) => (
            <div
              key={index}
              className={`group relative transition-all duration-700 ease-out ${
                isVisible ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'
              }`}
              style={{ transitionDelay: `${index * 200}ms` }}
              onMouseEnter={() => setHoveredCard(index)}
              onMouseLeave={() => setHoveredCard(null)}
            >
              {/* Glow effect */}
              <div className={`absolute -inset-1 bg-gradient-to-r ${skill.color} rounded-3xl blur opacity-0 group-hover:opacity-20 transition-all duration-500`} />
              
              {/* Main card */}
              <div className={`relative p-8 lg:p-10 ${skill.bgColor} border ${skill.borderColor} rounded-3xl hover:shadow-2xl hover:shadow-teal-500/10 transition-all duration-500 transform hover:scale-105 backdrop-blur-sm`}>
                {/* Card background pattern */}
                <div className="absolute top-0 right-0 w-32 h-32 opacity-5">
                  <svg viewBox="0 0 100 100" className="w-full h-full">
                    <defs>
                      <pattern id={`pattern-${index}`} x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse">
                        <circle cx="10" cy="10" r="2" fill="currentColor" />
                      </pattern>
                    </defs>
                    <rect width="100" height="100" fill={`url(#pattern-${index})`} />
                  </svg>
                </div>

                {/* Icon container */}
                <div className="relative z-10 mb-6">
                  <div className={`inline-flex items-center justify-center w-16 h-16 ${skill.iconBg} rounded-2xl shadow-lg group-hover:shadow-xl transition-all duration-300 group-hover:scale-110`}>
                    <span className="text-3xl filter group-hover:drop-shadow-lg transition-all duration-300">
                      {skill.icon}
                    </span>
                  </div>
                  
                  {/* Floating badge */}
                  <div className={`absolute -top-2 -right-2 w-6 h-6 bg-gradient-to-r ${skill.color} rounded-full opacity-0 group-hover:opacity-100 transition-all duration-300 transform group-hover:scale-100 scale-0`}>
                    <div className="w-full h-full rounded-full animate-ping bg-white/30" />
                  </div>
                </div>

                {/* Content */}
                <div className="relative z-10">
                  <h3 className="text-2xl font-bold mb-4 text-slate-800 group-hover:text-slate-900 transition-colors duration-300">
                    {skill.title}
                  </h3>
                  <p className="text-slate-600 text-lg leading-relaxed group-hover:text-slate-700 transition-colors duration-300">
                    {skill.description}
                  </p>
                </div>

                {/* Hover arrow */}
                <div className="absolute bottom-6 right-6 transform translate-x-4 opacity-0 group-hover:translate-x-0 group-hover:opacity-100 transition-all duration-300">
                  <div className={`w-10 h-10 bg-gradient-to-r ${skill.color} rounded-full flex items-center justify-center shadow-lg`}>
                    <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </div>
                </div>

                {/* Progress indicator */}
                <div className={`absolute bottom-0 left-0 h-1 bg-gradient-to-r ${skill.color} rounded-bl-3xl transition-all duration-700 ${hoveredCard === index ? 'w-full' : 'w-0'}`} />
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA Section */}
        <div className={`text-center mt-20 transition-all duration-1000 ease-out ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`} style={{ transitionDelay: '800ms' }}>
          <div className="inline-flex items-center space-x-4 bg-white/80 backdrop-blur-md border border-teal-200 rounded-2xl px-8 py-4 shadow-lg hover:shadow-xl transition-all duration-300 group cursor-pointer">
            <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse" />
            <span className="text-slate-700 font-medium">Ready to work together?</span>
            <div className="w-8 h-8 bg-gradient-to-r from-teal-500 to-emerald-600 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
              <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}