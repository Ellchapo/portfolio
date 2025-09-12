// app/components/Projects.tsx
'use client';

const projects = [
  {
    title: 'Food Order App',
    description: 'A comprehensive food ordering platform with admin dashboard and order tracking.',
    image: '🍕',
    tags: ['React.js', 'Admin Panel', 'Full Stack'],
    liveUrl: 'https://dev.admin.digitalbusinessculture.co.za/',
    featured: true
  },
  {
    title: 'TipTop Taxi App',
    description: 'Professional taxi booking platform with real-time tracking for Sydney operations.',
    image: '🚕',
    tags: ['React.js', 'Real-time', 'Maps API'],
    liveUrl: 'https://dev.tiptopmaxisydney.com.au',
    featured: true
  },
  {
    title: 'OYB - On Your Bike',
    description: 'Modern cycling platform with responsive design and smooth UX.',
    image: '🚴',
    tags: ['React.js', 'Responsive', 'UX/UI'],
    liveUrl: 'https://www.onyourbike.com/',
    featured: false
  },
  {
    title: 'MaxBet09',
    description: 'Gaming platform with interactive UI and user authentication.',
    image: '🎰',
    tags: ['React.js', 'Interactive UI', 'Authentication'],
    liveUrl: 'https://maxbet9.fairgame.club/login',
    featured: false
  },
  {
    title: 'Base Kamp',
    description: 'Membership platform with user dashboard and modern UI design.',
    image: '🏕️',
    tags: ['React.js', 'Dashboard', 'Modern UI'],
    liveUrl: 'https://panel.basekamp.co.uk/member/signup',
    featured: false
  },
  {
    title: 'Digital Business Culture',
    description: 'Modern business website with Next.js and server-side rendering.',
    image: '🏢',
    tags: ['Next.js', 'SSR', 'SEO'],
    liveUrl: 'https://lucent-zuccutto-c1f64c.netlify.app',
    featured: true
  }
];

export default function Projects() {
  return (
    <section className="px-12 py-16">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">
            Featured Works
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Here are some of my recent projects showcasing modern frontend development.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className={`group cursor-pointer ${
                project.featured ? 'md:col-span-2 lg:col-span-1' : ''
              }`}
            >
              <div className="bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 transform group-hover:-translate-y-2">
                <div className="aspect-video bg-gradient-to-br from-yellow-200 to-yellow-400 flex items-center justify-center text-4xl">
                  {project.image}
                </div>
                
                <div className="p-6">
                  <h3 className="font-bold text-lg mb-2 text-gray-800">
                    {project.title}
                  </h3>
                  <p className="text-gray-600 text-sm mb-4">
                    {project.description}
                  </p>
                  
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tags.map((tag, tagIndex) => (
                      <span
                        key={tagIndex}
                        className="bg-gray-100 text-gray-700 px-2 py-1 rounded-full text-xs"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-orange-500 font-medium text-sm hover:text-orange-600 transition-colors"
                  >
                    View Project →
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <a
            href="https://github.com/Ellchapo?tab=repositories"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center px-8 py-3 bg-gray-800 text-white rounded-full hover:bg-gray-900 transition-colors font-medium"
          >
            View All Projects on GitHub
            <svg className="ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
}