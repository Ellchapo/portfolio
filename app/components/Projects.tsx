// app/components/Projects.tsx
'use client';

interface Project {
  emoji: string;
  title: string;
  description: string;
  tags: string[];
  liveUrl?: string;
  githubUrl: string;
}

const projects: Project[] = [
  {
    emoji: '🍕',
    title: 'Food Order App',
    description: 'A comprehensive food ordering platform with admin dashboard, user management, and order tracking. Built as a self-project showcasing full-stack capabilities with React.js frontend.',
    tags: ['React.js', 'Admin Panel', 'Responsive', 'Full Stack'],
    liveUrl: 'https://dev.admin.digitalbusinessculture.co.za/',
    githubUrl: 'https://github.com/Ellchapo?tab=repositories'
  },
  {
    emoji: '🚕',
    title: 'TipTop Taxi App',
    description: 'A professional taxi booking platform developed for DupleIt Solutions using React.js. Features real-time booking, driver tracking, and payment integration for Sydney operations.',
    tags: ['React.js', 'Real-time', 'Payment', 'Maps API'],
    liveUrl: 'https://dev.tiptopmaxisydney.com.au',
    githubUrl: 'https://github.com/Ellchapo?tab=repositories'
  },
  {
    emoji: '🚴',
    title: 'OYB - On Your Bike',
    description: 'A modern cycling platform built with React.js, featuring responsive design, smooth user experience, and optimized performance for bike enthusiasts and services.',
    tags: ['React.js', 'Responsive', 'UX/UI', 'Performance'],
    liveUrl: 'https://www.onyourbike.com/',
    githubUrl: 'https://github.com/Ellchapo?tab=repositories'
  },
  {
    emoji: '🏢',
    title: 'Digital Business Culture',
    description: 'A modern business website developed for DupleIt Solutions using Next.js, featuring server-side rendering, smooth animations, and optimized performance.',
    tags: ['Next.js', 'SSR', 'Animation', 'SEO'],
    liveUrl: 'https://lucent-zuccutto-c1f64c.netlify.app',
    githubUrl: 'https://github.com/Ellchapo?tab=repositories'
  },
  {
    emoji: '🎰',
    title: 'MaxBet09',
    description: 'A gaming platform built with React.js showcasing advanced frontend development skills with interactive UI components, real-time features, and smooth user authentication.',
    tags: ['React.js', 'Interactive UI', 'Authentication', 'Gaming'],
    liveUrl: 'https://maxbet9.fairgame.club/login',
    githubUrl: 'https://github.com/Ellchapo?tab=repositories'
  },
  {
    emoji: '🏕️',
    title: 'Base Kamp',
    description: 'A membership platform built with React.js featuring user registration, member dashboard, and secure authentication with modern UI/UX design principles.',
    tags: ['React.js', 'Authentication', 'Dashboard', 'Modern UI'],
    liveUrl: 'https://panel.basekamp.co.uk/member/signup',
    githubUrl: 'https://github.com/Ellchapo?tab=repositories'
  }
];

export default function Projects() {
  return (
    <section id="projects" className="py-24 bg-yellow-50">
      <div className="max-w-6xl mx-auto px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
            Featured Projects
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Here are some of my recent projects that showcase my skills and creativity.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl overflow-hidden shadow-lg hover:-translate-y-2 transition-all duration-300 hover:shadow-2xl"
            >
              <div className="h-48 bg-gradient-to-br from-yellow-300 to-yellow-400 flex items-center justify-center text-6xl">
                {project.emoji}
              </div>
              
              <div className="p-8">
                <h3 className="text-2xl font-bold mb-4">{project.title}</h3>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  {project.description}
                </p>
                
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tags.map((tag, tagIndex) => (
                    <span
                      key={tagIndex}
                      className="bg-yellow-200 text-gray-800 px-3 py-1 rounded-full text-sm font-medium"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                
                <div className="flex gap-4">
                  {project.liveUrl && (
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-yellow-600 hover:text-yellow-700 font-semibold transition-colors"
                    >
                      Live Demo
                    </a>
                  )}
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-yellow-600 hover:text-yellow-700 font-semibold transition-colors"
                  >
                    GitHub
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center">
          <h3 className="text-2xl font-bold mb-4">More Projects</h3>
          <p className="text-gray-600 mb-8">
            Check out my GitHub for 20+ additional projects showcasing various technologies and skills
          </p>
          <a
            href="https://github.com/Ellchapo?tab=repositories"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-yellow-400 hover:bg-yellow-500 text-gray-800 px-8 py-4 rounded-full font-semibold transition-all duration-300 transform hover:-translate-y-1 hover:shadow-xl inline-block"
          >
            View All Projects on GitHub 🚀
          </a>
        </div>
      </div>
    </section>
  );
}