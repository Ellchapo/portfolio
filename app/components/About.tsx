// app/components/About.tsx
'use client';

import { useEffect, useRef } from 'react';

interface Skill {
  icon: string;
  title: string;
  description: string;
}

const skills: Skill[] = [
  {
    icon: '⚛️',
    title: 'React.js Development',
    description: 'React, Hooks, Context API, Redux, Component Architecture'
  },
  {
    icon: '🚀',
    title: 'Next.js Development',
    description: 'SSR, SSG, API Routes, App Router, Performance Optimization'
  },
  {
    icon: '🎨',
    title: 'Frontend Technologies',
    description: 'TypeScript, JavaScript ES6+, HTML5, CSS3, Tailwind CSS'
  },
  {
    icon: '🔧',
    title: 'Development Tools',
    description: 'Git, Webpack, Vite, npm/yarn, Chrome DevTools'
  }
];

export default function About() {
  return (
    <section id="about" className="py-24 bg-white">
      <div className="max-w-6xl mx-auto px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
            About Me
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            I'm passionate about creating digital solutions that make a difference. 
            Here are some of the technologies I work with.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {skills.map((skill, index) => (
            <div
              key={index}
              className="bg-yellow-50 p-8 rounded-2xl text-center hover:-translate-y-2 transition-all duration-300 hover:shadow-xl border border-yellow-200"
            >
              <div className="w-16 h-16 bg-yellow-400 rounded-full flex items-center justify-center text-2xl mx-auto mb-6">
                {skill.icon}
              </div>
              <h3 className="text-xl font-bold mb-4">{skill.title}</h3>
              <p className="text-gray-600">{skill.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}