// app/components/Hero.tsx
'use client';

export default function Hero() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="min-h-screen bg-gradient-to-br from-yellow-50 to-yellow-200 flex items-center relative overflow-hidden">
      {/* Animated background pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="w-full h-full bg-repeat animate-float" 
             style={{
               backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23FFD700' fill-opacity='0.3'%3E%3Ccircle cx='10' cy='10' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
             }}
        />
      </div>

      <div className="max-w-6xl mx-auto px-8 grid md:grid-cols-2 gap-16 items-center relative z-10">
        <div className="space-y-6">
          <h1 className="text-5xl md:text-6xl font-black bg-gradient-to-r from-gray-800 to-yellow-600 bg-clip-text text-transparent leading-tight">
            Hi, I'm Aakash Singh
          </h1>
          <p className="text-xl md:text-2xl text-gray-600 font-light">
            Frontend Developer | React.js & Next.js Specialist
          </p>
          <p className="text-lg text-gray-600 leading-relaxed">
            I create beautiful, functional, and user-centered digital experiences with React.js and Next.js. 
            With expertise in modern frontend technologies and a passion for clean, responsive design, 
            I bring ideas to life through elegant code.
          </p>
          
          <div className="flex flex-wrap gap-4 pt-4">
            <button
              onClick={() => scrollToSection('projects')}
              className="bg-yellow-400 hover:bg-yellow-500 text-gray-800 px-8 py-4 rounded-full font-semibold transition-all duration-300 transform hover:-translate-y-1 hover:shadow-xl"
            >
              View My Work
            </button>
            <button
              onClick={() => scrollToSection('contact')}
              className="border-2 border-yellow-400 hover:bg-yellow-400 text-gray-800 px-8 py-4 rounded-full font-semibold transition-all duration-300 transform hover:-translate-y-1"
            >
              Get In Touch
            </button>
          </div>
        </div>

        <div className="flex justify-center">
          <div className="bg-white p-8 rounded-3xl shadow-2xl transform rotate-3 hover:rotate-0 hover:scale-105 transition-all duration-300">
            <div className="w-48 h-48 bg-gradient-to-br from-yellow-400 to-yellow-300 rounded-full flex items-center justify-center text-6xl mb-4">
              👨‍💻
            </div>
            <h3 className="text-2xl font-bold text-center mb-2">Aakash Singh</h3>
            <p className="text-gray-600 text-center">Frontend Developer</p>
          </div>
        </div>
      </div>
    </section>
  );
}