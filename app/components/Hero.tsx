// app/components/Hero.tsx
'use client';

export default function Hero() {
  return (
    <section className="px-12 py-16 grid grid-cols-2 gap-16 items-center min-h-[80vh]">
      {/* Left Content */}
      <div className="space-y-8">
        <div>
          <h1 className="text-6xl font-bold text-gray-800 leading-tight mb-6">
            Hey There,<br />
            I'm Aakash
          </h1>
          <p className="text-lg text-gray-600 mb-8">
            I create beautiful, functional, and user-centered digital experiences with React.js and Next.js.
            And I love what I do.
          </p>
          <p className="text-orange-500 font-medium">
            aakash.singh@gmail.com
          </p>
        </div>

        {/* Experience Badge */}
        <div className="flex items-center space-x-8">
          <div>
            <div className="text-6xl font-bold text-gray-800">3+</div>
            <div className="text-sm text-gray-600 uppercase tracking-wide">
              YEARS<br />EXPERIENCE
            </div>
          </div>
        </div>
      </div>

      {/* Right Content - Profile Image */}
      <div className="relative">
        {/* Artistic Paint Strokes Background */}
        <div className="absolute inset-0 flex items-center justify-center">
          <svg width="400" height="400" viewBox="0 0 400 400" className="absolute">
            <defs>
              <linearGradient id="paintGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#2D7D7D" />
                <stop offset="100%" stopColor="#4A9D9D" />
              </linearGradient>
            </defs>
            {/* Paint stroke paths */}
            <path
              d="M50 100 Q150 80 250 120 Q350 140 380 200 Q360 250 300 280 Q200 300 150 250 Q100 200 50 150 Z"
              fill="url(#paintGradient)"
              opacity="0.8"
            />
            <path
              d="M80 150 Q180 130 280 170 Q320 200 300 250 Q250 280 200 260 Q150 240 120 200 Z"
              fill="url(#paintGradient)"
              opacity="0.6"
            />
            <path
              d="M120 200 Q220 180 320 220 Q350 250 320 300 Q270 320 220 300 Q170 280 120 250 Z"
              fill="url(#paintGradient)"
              opacity="0.4"
            />
          </svg>
        </div>

        {/* Profile Image Placeholder */}
        <div className="relative z-10 flex items-center justify-center">
          <div className="w-80 h-80 bg-yellow-400 rounded-full flex items-center justify-center overflow-hidden">
            <div className="text-8xl">👨‍💻</div>
          </div>
        </div>

        {/* Certification Badge */}
        <div className="absolute bottom-8 right-8 bg-white rounded-full p-4 shadow-lg">
          <div className="w-16 h-16 flex items-center justify-center">
            <div className="text-center">
              <div className="w-8 h-8 bg-gray-800 rounded-full mx-auto mb-1 flex items-center justify-center">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="white">
                  <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                </svg>
              </div>
              <div className="text-xs text-gray-800 font-bold leading-tight">
                REACT & NEXTJS<br />
                SPECIALIST<br />
                FRONTEND<br />
                DEVELOPER
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}