import { Play, Check } from 'lucide-react';
import Image from 'next/image';
import home_decor from '../public/home_decor.png'

const Hero =() => {
  return (
    <section className="bg-gray-900 text-white pt-20 pb-36.5 px-6 overflow-hidden">
      <div className="container">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          
          {/* Left Content */}
          <div className="z-10">
            {/* Subtitle */}
            <div className="mb-8">
              <p className="text-orange-500 text-sm font-semibold mb-2">Innovation At Work</p>
              <div className="w-16 h-1 bg-orange-500"></div>
            </div>

            {/* Main Heading */}
            <h1 className="text-5xl lg:text-6xl font-bold mb-8 leading-tight">
              <span style={{
                WebkitTextStroke: '1px white',
                color: 'transparent',
              }}>
                Empowering
              
              <br />
              Fixing</span> <span className="text-white">business<br />success</span>
            </h1>

            {/* Features List */}
            <div className="space-y-4 mb-8">
              <div className="flex items-start gap-3">
                <Check className="text-orange-500 shrink-0 mt-1" size={20} />
                <p className="text-gray-300">Bringing back the functionality you need Repair</p>
              </div>
              <div className="flex items-start gap-3">
                <Check className="text-orange-500 shrink-0 mt-1" size={20} />
                <p className="text-gray-300">Reliable repairs for a seamless experience</p>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-6 items-start sm:items-center">
              <button className="bg-orange-500 hover:bg-orange-600 transition-colors px-8 py-4 font-bold text-white flex items-center gap-2">
                READ MORE
                <span>→</span>
              </button>
              <button className="flex items-center gap-3 group cursor-pointer">
                <div className="w-14 h-14 bg-white rounded-full flex items-center justify-center group-hover:bg-orange-500 transition-colors">
                  <Play className="text-gray-900 group-hover:text-white ml-1" size={24} fill="currentColor" />
                </div>
                <span className="font-semibold">See How It Works</span>
              </button>
            </div>
          </div>

          {/* Right Side - Dot Pattern */}
          <div className="relative h-96 lg:h-full flex items-center justify-center">
            {/* Animated Dot Grid */}
            <div>
              <Image 
                src={home_decor} 
                alt="Home Decor"
                width={985}
                height={751}
              />
            </div>

            {/* Decorative circles in corners */}
            <div className="absolute top-20 left-10 w-24 h-24 border-2 border-orange-500/30 rounded-full"></div>
            <div className="absolute bottom-32 right-20 w-20 h-20 border-2 border-purple-500/20 rounded-full"></div>
            <div className="absolute top-40 right-10 w-16 h-16 border-2 border-gray-700/50 rounded-full"></div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero