import { personalInfo } from '@/lib/data';
import Image from 'next/image';

const Hero = () => {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center bg-gradient-to-br from-purple-50 via-lavender-50 to-purple-100 pt-16 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="text-center lg:text-left">
            <h1 className="text-5xl md:text-7xl font-bold text-gray-900 mb-6">
              Hi, I'm {personalInfo.name}
            </h1>
            
            <h2 className="text-2xl md:text-4xl font-semibold text-gray-700 mb-6">
              {personalInfo.title}
            </h2>
            
            <p className="text-lg text-gray-600 mb-8 max-w-2xl leading-relaxed">
              {personalInfo.bio}
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <a
                href="#projects"
                className="bg-gradient-to-r from-purple-600 to-violet-600 text-white px-8 py-4 rounded-xl font-semibold"
              >
                View My Work
              </a>
              
              <a
                href="#contact"
                className="border-2 border-purple-600 text-purple-600 px-8 py-4 rounded-xl font-semibold"
              >
                Let's Connect
              </a>
            </div>
          </div>

          {/* Avatar */}
          <div className="flex justify-center lg:justify-end">
            <div className="relative">
              <div className="w-80 h-80 rounded-full bg-gradient-to-br from-purple-400 via-violet-500 to-purple-600 p-1">
                <div className="w-full h-full rounded-full bg-white p-2">
                  <Image
                    src={personalInfo.avatar}
                    alt={personalInfo.name}
                    width={300}
                    height={300}
                    className="w-full h-full rounded-full object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
