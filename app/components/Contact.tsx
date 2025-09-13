'use client';

import { useState } from 'react';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [focusedField, setFocusedField] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    alert("Thank you for your message! I'll get back to you soon.");
    setFormData({ name: '', email: '', message: '' });
    setIsSubmitting(false);
  };

  return (
    <section className="relative px-12 py-16 bg-gray-900 text-white rounded-t-3xl mt-16 overflow-hidden">
      {/* Subtle animated background elements */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-10 left-10 w-64 h-64 bg-yellow-400 rounded-full filter blur-3xl animate-pulse"></div>
        <div className="absolute bottom-10 right-10 w-80 h-80 bg-yellow-400 rounded-full filter blur-3xl animate-pulse" style={{animationDelay: '2s'}}></div>
      </div>

      {/* Floating particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(8)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-yellow-400 rounded-full opacity-30 animate-bounce"
            style={{
              left: `${10 + i * 12}%`,
              top: `${15 + (i % 4) * 20}%`,
              animationDelay: `${i * 0.7}s`,
              animationDuration: `${4 + i * 0.3}s`
            }}
          />
        ))}
      </div>

      <div className="relative max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <div className="inline-block mb-4">
            <span className="px-6 py-2 bg-yellow-400/10 text-yellow-400 rounded-full text-sm font-medium border border-yellow-400/20 backdrop-blur-sm">
              Contact Me
            </span>
          </div>
          <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-white to-gray-200 bg-clip-text text-transparent">
            Let's Work Together
          </h2>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto">
            Have a project in mind? Let's discuss how we can bring your ideas to life.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          <div className="space-y-8">
            <div className="backdrop-blur-sm bg-white/5 p-6 rounded-xl border border-white/10 hover:bg-white/10 transition-all duration-300">
              <h3 className="text-2xl font-bold mb-6">Get In Touch</h3>
              <div className="space-y-4">
                <div className="flex items-center space-x-4 p-3 rounded-lg hover:bg-yellow-400/5 transition-colors group">
                  <div className="w-8 h-8 bg-yellow-400 rounded-full flex items-center justify-center text-gray-900 group-hover:scale-110 transition-transform duration-200">
                    📧
                  </div>
                  <span className="group-hover:text-yellow-400 transition-colors">aakash.singh@gmail.com</span>
                </div>
                <div className="flex items-center space-x-4 p-3 rounded-lg hover:bg-yellow-400/5 transition-colors group">
                  <div className="w-8 h-8 bg-yellow-400 rounded-full flex items-center justify-center text-gray-900 group-hover:scale-110 transition-transform duration-200">
                    📱
                  </div>
                  <span className="group-hover:text-yellow-400 transition-colors">+91 9876543210</span>
                </div>
                <div className="flex items-center space-x-4 p-3 rounded-lg hover:bg-yellow-400/5 transition-colors group">
                  <div className="w-8 h-8 bg-yellow-400 rounded-full flex items-center justify-center text-gray-900 group-hover:scale-110 transition-transform duration-200">
                    📍
                  </div>
                  <span className="group-hover:text-yellow-400 transition-colors">India</span>
                </div>
              </div>
            </div>

            <div className="backdrop-blur-sm bg-white/5 p-6 rounded-xl border border-white/10">
              <h4 className="text-lg font-semibold mb-4 text-gray-300">Follow Me</h4>
              <div className="flex space-x-4">
                <a 
                  href="https://github.com/Ellchapo" 
                  className="group w-10 h-10 bg-yellow-400 text-gray-900 rounded-full flex items-center justify-center hover:bg-yellow-500 transition-all duration-300 hover:scale-110 hover:shadow-lg hover:shadow-yellow-400/25"
                >
                  🐙
                </a>
                <a 
                  href="#" 
                  className="group w-10 h-10 bg-yellow-400 text-gray-900 rounded-full flex items-center justify-center hover:bg-yellow-500 transition-all duration-300 hover:scale-110 hover:shadow-lg hover:shadow-yellow-400/25"
                >
                  💼
                </a>
                <a 
                  href="#" 
                  className="group w-10 h-10 bg-yellow-400 text-gray-900 rounded-full flex items-center justify-center hover:bg-yellow-500 transition-all duration-300 hover:scale-110 hover:shadow-lg hover:shadow-yellow-400/25"
                >
                  🐦
                </a>
              </div>
            </div>
          </div>

          <div className="backdrop-blur-sm bg-white/5 p-6 rounded-xl border border-white/10">
            <div className="space-y-6">
              <div className="relative">
                <input
                  type="text"
                  name="name"
                  placeholder="Your Name"
                  value={formData.name}
                  onChange={handleChange}
                  onFocus={() => setFocusedField('name')}
                  onBlur={() => setFocusedField('')}
                  required
                  className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg focus:outline-none focus:border-yellow-400 focus:ring-2 focus:ring-yellow-400/20 text-white placeholder-gray-400 transition-all duration-300 hover:bg-gray-750"
                />
                <div className={`absolute inset-0 rounded-lg transition-all duration-300 pointer-events-none ${
                  focusedField === 'name' ? 'shadow-lg shadow-yellow-400/10' : ''
                }`}></div>
              </div>
              
              <div className="relative">
                <input
                  type="email"
                  name="email"
                  placeholder="Your Email"
                  value={formData.email}
                  onChange={handleChange}
                  onFocus={() => setFocusedField('email')}
                  onBlur={() => setFocusedField('')}
                  required
                  className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg focus:outline-none focus:border-yellow-400 focus:ring-2 focus:ring-yellow-400/20 text-white placeholder-gray-400 transition-all duration-300 hover:bg-gray-750"
                />
                <div className={`absolute inset-0 rounded-lg transition-all duration-300 pointer-events-none ${
                  focusedField === 'email' ? 'shadow-lg shadow-yellow-400/10' : ''
                }`}></div>
              </div>
              
              <div className="relative">
                <textarea
                  name="message"
                  placeholder="Your Message"
                  rows={5}
                  value={formData.message}
                  onChange={handleChange}
                  onFocus={() => setFocusedField('message')}
                  onBlur={() => setFocusedField('')}
                  required
                  className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg focus:outline-none focus:border-yellow-400 focus:ring-2 focus:ring-yellow-400/20 text-white placeholder-gray-400 resize-none transition-all duration-300 hover:bg-gray-750"
                />
                <div className={`absolute inset-0 rounded-lg transition-all duration-300 pointer-events-none ${
                  focusedField === 'message' ? 'shadow-lg shadow-yellow-400/10' : ''
                }`}></div>
              </div>
              
              <button
                type="button"
                onClick={handleSubmit}
                disabled={isSubmitting}
                className="group relative w-full bg-yellow-400 text-gray-900 py-3 rounded-lg font-semibold hover:bg-yellow-500 transition-all duration-300 overflow-hidden hover:shadow-lg hover:shadow-yellow-400/25 hover:scale-105 disabled:opacity-70 disabled:cursor-not-allowed disabled:hover:scale-100"
              >
                <span className="relative z-10 flex items-center justify-center space-x-2">
                  {isSubmitting ? (
                    <>
                      <div className="w-4 h-4 border-2 border-gray-900/30 border-t-gray-900 rounded-full animate-spin"></div>
                      <span>Sending...</span>
                    </>
                  ) : (
                    <>
                      <span>Send Message</span>
                      <span className="transition-transform duration-300 group-hover:translate-x-1">→</span>
                    </>
                  )}
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-700"></div>
              </button>
            </div>
          </div>
        </div>

        <div className="text-center mt-16 pt-8 border-t border-gray-800">
          <div className="backdrop-blur-sm bg-white/5 inline-block px-6 py-3 rounded-full border border-white/10">
            <p className="text-gray-400">© 2024 Aakash Singh. All rights reserved.</p>
          </div>
        </div>
      </div>
    </section>
  );
}