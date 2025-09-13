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
    <section className="relative px-12 py-16 overflow-hidden " id="works">
      {/* Subtle animated background elements */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-20 w-72 h-72 bg-yellow-200 rounded-full filter blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-20 w-80 h-80 bg-orange-200 rounded-full filter blur-3xl animate-pulse" style={{animationDelay: '3s'}}></div>
      </div>

      {/* Floating particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(10)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-orange-300 rounded-full opacity-20 animate-bounce"
            style={{
              left: `${5 + i * 10}%`,
              top: `${10 + (i % 5) * 18}%`,
              animationDelay: `${i * 0.8}s`,
              animationDuration: `${3.5 + i * 0.4}s`
            }}
          />
        ))}
      </div>

      <div className="relative max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <div className="inline-block mb-6">
            <span className="px-6 py-2 bg-orange-500/10 text-orange-500 rounded-full text-sm font-medium border border-orange-500/20 backdrop-blur-sm">
              My Work
            </span>
          </div>
          <h2 className="text-4xl font-bold text-gray-800 mb-4 bg-gradient-to-r from-gray-800 to-gray-600 bg-clip-text text-transparent">
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
              <div className="relative bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-500 transform group-hover:-translate-y-3 group-hover:scale-105 border border-gray-100/50 backdrop-blur-sm">
                {/* Hover overlay effect */}
                <div className="absolute inset-0 bg-gradient-to-br from-orange-500/5 to-yellow-400/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                
                <div className="relative aspect-video bg-gradient-to-br from-yellow-200 to-yellow-400 flex items-center justify-center text-4xl overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-br from-transparent to-black/10"></div>
                  <span className="relative z-10 transform group-hover:scale-110 transition-transform duration-300">
                    {project.image}
                  </span>
                  {/* Animated shine effect */}
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
                </div>
                
                <div className="relative p-6 bg-white/80 backdrop-blur-sm">
                  <div className="flex items-start justify-between mb-2">
                    <h3 className="font-bold text-lg text-gray-800 group-hover:text-orange-500 transition-colors duration-200">
                      {project.title}
                    </h3>
                    {project.featured && (
                      <span className="px-2 py-1 bg-orange-100 text-orange-600 text-xs rounded-full font-medium">
                        Featured
                      </span>
                    )}
                  </div>
                  
                  <p className="text-gray-600 text-sm mb-4 leading-relaxed">
                    {project.description}
                  </p>
                  
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tags.map((tag, tagIndex) => (
                      <span
                        key={tagIndex}
                        className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-xs font-medium hover:bg-orange-100 hover:text-orange-700 transition-colors duration-200"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center text-orange-500 font-medium text-sm hover:text-orange-600 transition-all duration-200 group-hover:translate-x-1"
                  >
                    <span>View Project</span>
                    <svg className="ml-1 w-4 h-4 transform group-hover:translate-x-1 transition-transform duration-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </a>
                </div>

                {/* Corner accent */}
                <div className="absolute top-0 right-0 w-0 h-0 border-l-[30px] border-l-transparent border-t-[30px] border-t-orange-200 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <div className="relative inline-block">
            <a
              href="https://github.com/Ellchapo?tab=repositories"
              target="_blank"
              rel="noopener noreferrer"
              className="group relative inline-flex items-center px-8 py-3 bg-gray-800 text-white rounded-full hover:bg-gray-900 transition-all duration-300 font-medium overflow-hidden hover:shadow-lg hover:shadow-gray-800/25"
            >
              <span className="relative z-10 flex items-center">
                View All Projects on GitHub
                <svg className="ml-2 w-4 h-4 transform group-hover:translate-x-1 transition-transform duration-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </span>
              {/* Button shine effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-700"></div>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}