
// app/components/About.tsx
'use client';

const skills = [
  {
    title: 'Frontend Development',
    description: 'React.js, Next.js, TypeScript, JavaScript ES6+',
    icon: '⚛️'
  },
  {
    title: 'UI/UX Implementation',
    description: 'Tailwind CSS, Responsive Design, Modern UI Libraries',
    icon: '🎨'
  },
  {
    title: 'Performance Optimization',
    description: 'Code Splitting, SSR, SEO, Web Vitals',
    icon: '⚡'
  },
  {
    title: 'Development Tools',
    description: 'Git, Webpack, Vite, npm/yarn, Chrome DevTools',
    icon: '🛠️'
  }
];

export default function About() {
  return (
    <section className="px-12 py-16 bg-white rounded-t-3xl mt-16">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">
            My Services
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            I specialize in creating modern, responsive web applications using cutting-edge technologies.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {skills.map((skill, index) => (
            <div
              key={index}
              className="p-8 bg-gray-50 rounded-2xl hover:shadow-lg transition-all duration-300"
            >
              <div className="text-3xl mb-4">{skill.icon}</div>
              <h3 className="text-xl font-bold mb-3 text-gray-800">{skill.title}</h3>
              <p className="text-gray-600">{skill.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}