// app/components/Footer.tsx
'use client';

export default function Footer() {
  const socialLinks = [
    { icon: '📧', href: 'mailto:aakash.singh@example.com' },
    { icon: '💼', href: 'https://linkedin.com/in/aakash-singh' },
    { icon: '🐙', href: 'https://github.com/Ellchapo' },
    { icon: '🐦', href: 'https://twitter.com/aakash_singh' }
  ];

  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="max-w-6xl mx-auto px-8 text-center">
        <div className="flex justify-center space-x-6 mb-8">
          {socialLinks.map((link, index) => (
            <a
              key={index}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className="w-12 h-12 bg-yellow-400 text-gray-800 rounded-full flex items-center justify-center text-xl hover:-translate-y-1 transition-all duration-300 hover:shadow-lg"
            >
              {link.icon}
            </a>
          ))}
        </div>
        
        <p className="text-gray-400">
          © 2024 Aakash Singh. All rights reserved.
        </p>
      </div>
    </footer>
  );
}