// app/components/Contact.tsx
'use client';

import { useState } from 'react';

interface ContactInfo {
  icon: string;
  title: string;
  value: string;
}

const contactInfo: ContactInfo[] = [
  { icon: '📧', title: 'Email', value: 'aakash.singh@example.com' },
  { icon: '📱', title: 'Phone', value: '+1 (555) 123-4567' },
  { icon: '📍', title: 'Location', value: 'Your City, Country' }
];

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
    <section id="contact" className="py-24 bg-white">
      <div className="max-w-6xl mx-auto px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
            Let's Work Together
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Have a project in mind? Let's discuss how we can bring your ideas to life.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-16">
          <div className="space-y-8">
            {contactInfo.map((info, index) => (
              <div key={index} className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-yellow-400 rounded-full flex items-center justify-center text-xl">
                  {info.icon}
                </div>
                <div>
                  <h4 className="font-semibold text-lg">{info.title}</h4>
                  <p className="text-gray-600">{info.value}</p>
                </div>
              </div>
            ))}
          </div>

          <form onSubmit={handleSubmit} className="bg-yellow-50 p-8 rounded-2xl">
            <div className="mb-6">
              <label htmlFor="name" className="block text-sm font-semibold mb-2">
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 border border-yellow-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-400"
              />
            </div>

            <div className="mb-6">
              <label htmlFor="email" className="block text-sm font-semibold mb-2">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 border border-yellow-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-400"
              />
            </div>

            <div className="mb-6">
              <label htmlFor="message" className="block text-sm font-semibold mb-2">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                rows={5}
                required
                className="w-full px-4 py-3 border border-yellow-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-400 resize-none"
              />
            </div>

            <button
              type="submit"
              className="w-full bg-yellow-400 hover:bg-yellow-500 text-gray-800 py-4 rounded-lg font-semibold transition-all duration-300 transform hover:-translate-y-1 hover:shadow-lg"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}