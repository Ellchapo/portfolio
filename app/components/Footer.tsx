'use client';

export default function Footer() {
  const socialLinks = [
    { icon: '📧', href: 'mailto:aakash.singh@example.com', label: 'Email' },
    { icon: '💼', href: 'https://linkedin.com/in/aakash-singh', label: 'LinkedIn' },
    { icon: '🐙', href: 'https://github.com/Ellchapo', label: 'GitHub' },
    { icon: '🐦', href: 'https://twitter.com/aakash_singh', label: 'Twitter' }
  ];

  return (
    <footer className="relative bg-gray-900 text-white py-12 overflow-hidden" >
      {/* Animated background elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-5 left-10 w-32 h-32 bg-yellow-400 rounded-full filter blur-2xl animate-pulse"></div>
        <div className="absolute bottom-5 right-10 w-40 h-40 bg-yellow-400 rounded-full filter blur-2xl animate-pulse" style={{animationDelay: '2s'}}></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-24 h-24 bg-yellow-400 rounded-full filter blur-2xl animate-pulse" style={{animationDelay: '4s'}}></div>
      </div>

      {/* Floating particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(6)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-yellow-400 rounded-full opacity-30 animate-bounce"
            style={{
              left: `${15 + i * 15}%`,
              top: `${20 + (i % 3) * 25}%`,
              animationDelay: `${i * 0.6}s`,
              animationDuration: `${3 + i * 0.4}s`
            }}
          />
        ))}
      </div>

      <div className="relative max-w-6xl mx-auto px-8 text-center">
        {/* Enhanced social links */}
        <div className="flex justify-center space-x-6 mb-8">
          {socialLinks.map((link, index) => (
            <div key={index} className="relative group">
              <a
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="relative w-12 h-12 bg-yellow-400 text-gray-800 rounded-full flex items-center justify-center text-xl hover:-translate-y-2 transition-all duration-300 hover:shadow-lg hover:shadow-yellow-400/50 hover:scale-110 group"
                title={link.label}
              >
                <span className="relative z-10 transform group-hover:scale-110 transition-transform duration-200">
                  {link.icon}
                </span>
                
                {/* Glow effect */}
                <div className="absolute inset-0 bg-yellow-400 rounded-full opacity-0 group-hover:opacity-30 group-hover:scale-150 transition-all duration-300 blur-md"></div>
                
                {/* Ring effect */}
                <div className="absolute inset-0 border-2 border-yellow-400 rounded-full opacity-0 group-hover:opacity-50 group-hover:scale-125 transition-all duration-300"></div>
              </a>
              
              {/* Tooltip */}
              <div className="absolute -top-10 left-1/2 transform -translate-x-1/2 bg-gray-800 text-white text-xs px-3 py-1 rounded-lg opacity-0 group-hover:opacity-100 transition-all duration-200 pointer-events-none border border-gray-700">
                {link.label}
                <div className="absolute top-full left-1/2 transform -translate-x-1/2 w-2 h-2 bg-gray-800 rotate-45 border-r border-b border-gray-700"></div>
              </div>
            </div>
          ))}
        </div>
        
        {/* Enhanced copyright */}
        <div className="relative">
          <div className="backdrop-blur-sm bg-white/5 inline-block px-6 py-3 rounded-full border border-white/10">
            <p className="text-gray-400 text-sm">
              © 2024 <span className="text-yellow-400 font-medium">Aakash Singh</span>. All rights reserved.
            </p>
          </div>
          
          {/* Subtle pulse effect */}
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-yellow-400/5 to-transparent rounded-full animate-pulse"></div>
        </div>

        {/* Decorative elements */}
        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-yellow-400/30 to-transparent"></div>
        
        {/* Corner decorations */}
        <div className="absolute top-4 left-4 w-8 h-8 border-l-2 border-t-2 border-yellow-400/20 rounded-tl-lg"></div>
        <div className="absolute top-4 right-4 w-8 h-8 border-r-2 border-t-2 border-yellow-400/20 rounded-tr-lg"></div>
      </div>
    </footer>
  );
}