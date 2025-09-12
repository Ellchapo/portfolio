
// app/components/Contact.tsx
'use client';

import { useState } from 'react';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert("Thank you for your message! I'll get back to you soon.");
    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <section className="px-12 py-16 bg-gray-900 text-white rounded-t-3xl mt-16">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">
            Let's Work Together
          </h2>
          <p className="text-lg text-gray-300">
            Have a project in mind? Let's discuss how we can bring your ideas to life.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          <div>
            <h3 className="text-2xl font-bold mb-6">Get In Touch</h3>
            <div className="space-y-4">
              <div className="flex items-center space-x-4">
                <div className="w-8 h-8 bg-yellow-400 rounded-full flex items-center justify-center text-gray-900">
                  📧
                </div>
                <span>aakash.singh@gmail.com</span>
              </div>
              <div className="flex items-center space-x-4">
                <div className="w-8 h-8 bg-yellow-400 rounded-full flex items-center justify-center text-gray-900">
                  📱
                </div>
                <span>+91 9876543210</span>
              </div>
              <div className="flex items-center space-x-4">
                <div className="w-8 h-8 bg-yellow-400 rounded-full flex items-center justify-center text-gray-900">
                  📍
                </div>
                <span>India</span>
              </div>
            </div>

            <div className="mt-8 flex space-x-4">
              <a href="https://github.com/Ellchapo" className="w-10 h-10 bg-yellow-400 text-gray-900 rounded-full flex items-center justify-center hover:bg-yellow-500 transition-colors">
                🐙
              </a>
              <a href="#" className="w-10 h-10 bg-yellow-400 text-gray-900 rounded-full flex items-center justify-center hover:bg-yellow-500 transition-colors">
                💼
              </a>
              <a href="#" className="w-10 h-10 bg-yellow-400 text-gray-900 rounded-full flex items-center justify-center hover:bg-yellow-500 transition-colors">
                🐦
              </a>
            </div>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <input
                type="text"
                name="name"
                placeholder="Your Name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg focus:outline-none focus:border-yellow-400 text-white placeholder-gray-400"
              />
            </div>
            <div>
              <input
                type="email"
                name="email"
                placeholder="Your Email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg focus:outline-none focus:border-yellow-400 text-white placeholder-gray-400"
              />
            </div>
            <div>
              <textarea
                name="message"
                placeholder="Your Message"
                rows={5}
                value={formData.message}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg focus:outline-none focus:border-yellow-400 text-white placeholder-gray-400 resize-none"
              />
            </div>
            <button
              type="submit"
              className="w-full bg-yellow-400 text-gray-900 py-3 rounded-lg font-semibold hover:bg-yellow-500 transition-colors"
            >
              Send Message
            </button>
          </form>
        </div>

        <div className="text-center mt-16 pt-8 border-t border-gray-800">
          <p className="text-gray-400">© 2024 Aakash Singh. All rights reserved.</p>
        </div>
      </div>
    </section>
  );
}