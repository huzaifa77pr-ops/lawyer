import React from 'react';
import { ArrowRight, Briefcase, ShieldCheck, Scale } from 'lucide-react';

const Hero = () => {
  return (
    <section id="home" className="relative min-h-screen flex flex-col overflow-hidden bg-[#2A454E]">
      
      {/* Background Image Layer */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-r from-[#2A454E]/90 via-[#2A454E]/50 to-transparent z-10" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#2A454E]/50 via-transparent to-transparent z-10" />
        {/* The user specifically mentioned image is in public folder as hero.jpg */}
        <img
          src="/hero.jpg"
          alt="Premium Law Firm Presentation"
          className="w-full h-full object-cover object-center opacity-85 scale-105 animate-[kenburns_20s_ease-out_forwards]"
        />
      </div>

      <div className="relative z-20 w-full max-w-[90rem] mx-auto px-4 sm:px-6 lg:px-8 pt-32 lg:pt-48 pb-20">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-8 items-center">
          
          {/* Left Side: Content */}
          <div className="max-w-3xl">
            {/* Animated Top Label */}
            <div className="flex items-center gap-4 mb-6 animate-fade-in-up">
              <div className="h-[2px] w-12 bg-[#A07A41]"></div>
              <span className="text-[#A07A41] uppercase tracking-[0.2em] text-sm md:text-xs font-bold font-sans">
                Est. 1995 • Serving Across The UK
              </span>
            </div>

            {/* Main Title with staggered custom animations */}
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-serif font-bold text-white leading-[1.1] mb-6 tracking-tight">
              <span className="block animate-fade-in-right animation-delay-200">
                Elite Paralegal
              </span>
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-[#C29D64] via-[#A07A41] to-[#785A2D] animate-fade-in-up animation-delay-400">
                Services UK.
              </span>
            </h1>

            {/* Description with delay */}
            <p className="text-base md:text-lg text-gray-300 mb-10 max-w-2xl font-light leading-relaxed animate-fade-in-up animation-delay-500 font-sans">
              Scale your firm with H&S Co. specialized paralegal support. We empower lawyers, barristers, and law firms across the United Kingdom to reduce workloads and increase billable efficiency through strategic legal assistance.
            </p>

            {/* Call to Actions with delay sliding from left */}
            <div className="flex flex-col sm:flex-row gap-5 animate-fade-in-left animation-delay-700">
              <a 
                href="#consultation" 
                className="group relative flex items-center justify-center gap-3 px-8 py-4 bg-[#1B2D33] border border-white/10 text-white font-bold tracking-widest uppercase text-xs md:text-sm rounded transition-all duration-300 hover:bg-[#A07A41] shadow-[0_0_20px_rgba(0,0,0,0.1)] overflow-hidden"
              >
                <span className="relative z-10">Book Free Consultation</span>
                <ArrowRight className="h-4 w-4 relative z-10 transform group-hover:translate-x-1 transition-transform duration-300" />
              </a>
            </div>

            {/* Trust Indicators with delay */}
            <div className="mt-16 sm:mt-20 grid grid-cols-2 md:grid-cols-3 gap-8 md:gap-12 border-t border-[#A07A41]/20 pt-10 animate-fade-in-up animation-delay-700">
              <div className="flex items-center gap-4">
                <Scale className="h-10 w-10 text-[#A07A41]" strokeWidth={1.5} />
                <div>
                  <h4 className="text-white font-serif font-bold text-xl md:text-2xl">25+</h4>
                  <p className="text-gray-400 text-xs md:text-sm uppercase tracking-wider font-sans">Years Experience</p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <ShieldCheck className="h-10 w-10 text-[#A07A41]" strokeWidth={1.5} />
                <div>
                  <h4 className="text-white font-serif font-bold text-xl md:text-2xl">98%</h4>
                  <p className="text-gray-400 text-xs md:text-sm uppercase tracking-wider font-sans">Success Rate</p>
                </div>
              </div>
              <div className="hidden md:flex items-center gap-4">
                <Briefcase className="h-10 w-10 text-[#A07A41]" strokeWidth={1.5} />
                <div>
                  <h4 className="text-white font-serif font-bold text-xl md:text-2xl">10k+</h4>
                  <p className="text-gray-400 text-xs md:text-sm uppercase tracking-wider font-sans">Cases Resolved</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Side: Skewed Panels (Parallelogram Style as per SS) */}
          <div className="relative flex h-[400px] sm:h-[500px] lg:h-[600px] items-center justify-center lg:justify-end overflow-hidden pr-0 lg:pr-4 mt-12 lg:mt-0 animate-fade-in-up md:animate-none">
            <div className="flex items-center -space-x-4 sm:-space-x-6 lg:-space-x-8">
              
              {/* Panel 1 - Slide from Left */}
              <div 
                className="relative w-24 sm:w-32 lg:w-40 h-[240px] sm:h-[300px] lg:h-[380px] skew-x-[-15deg] border border-white/10 overflow-hidden bg-[#1B2D33] shadow-2xl transition-transform duration-500 hover:scale-105"
                style={{ animation: 'slide-left-full 1.5s cubic-bezier(0.22, 1, 0.36, 1) forwards' }}
              >
                <div className="absolute inset-0 skew-x-[15deg] w-[180%] h-full left-[-40%]">
                  <img src="/hd1.jpg" alt="Professional 1" className="w-full h-full object-cover object-top" />
                </div>
              </div>

              {/* Panel 2 - Slide from Right */}
              <div 
                className="relative w-28 sm:w-36 lg:w-48 h-[280px] sm:h-[350px] lg:h-[440px] skew-x-[-15deg] border border-white/20 overflow-hidden bg-[#1B2D33] shadow-2xl z-10 transition-transform duration-500 hover:scale-105"
                style={{ animation: 'slide-right-full 1.8s cubic-bezier(0.22, 1, 0.36, 1) forwards', animationDelay: '0.1s' }}
              >
                <div className="absolute inset-0 skew-x-[15deg] w-[240%] h-full left-[-70%]">
                  <img src="/hd3.jpg" alt="Professional 2" className="w-full h-full object-cover object-top" />
                </div>
              </div>

              {/* Panel 3 - Slide from Left (Tallest) */}
              <div 
                className="relative w-32 sm:w-40 lg:w-52 h-[320px] sm:h-[420px] lg:h-[500px] skew-x-[-15deg] border border-white/30 overflow-hidden bg-[#1B2D33] shadow-2xl z-20 transition-transform duration-500 hover:scale-105"
                style={{ animation: 'slide-left-full 2s cubic-bezier(0.22, 1, 0.36, 1) forwards', animationDelay: '0.2s' }}
              >
                <div className="absolute inset-0 skew-x-[15deg] w-[180%] h-full left-[-40%]">
                  <img src="/hd2.jpg" alt="Professional 3" className="w-full h-full object-cover object-top" />
                </div>
              </div>

              {/* Panel 4 - Slide from Right */}
              <div 
                className="relative w-28 sm:w-32 lg:w-44 h-[250px] sm:h-[320px] lg:h-[390px] skew-x-[-15deg] border border-white/10 overflow-hidden bg-[#1B2D33] shadow-2xl transition-transform duration-500 hover:scale-105"
                style={{ animation: 'slide-right-full 2.2s cubic-bezier(0.22, 1, 0.36, 1) forwards', animationDelay: '0.3s' }}
              >
                <div className="absolute inset-0 skew-x-[15deg] w-[180%] h-full left-[-40%]">
                  <img src="/hd4.jpg" alt="Professional 4" className="w-full h-full object-cover object-top" />
                </div>
              </div>

            </div>
            
            {/* Soft Glow behind the panels */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-[#A07A41]/5 rounded-full blur-[100px] -z-10"></div>
          </div>

        </div>
      </div>

      {/* Custom Keyframe Animations */}
      <style dangerouslySetInnerHTML={{
        __html: `
        @keyframes kenburns {
          0% { transform: scale(1.05); }
          100% { transform: scale(1.1); }
        }
        @keyframes slide-left-full {
          0% { transform: translateX(-100vw) skewX(-15deg); opacity: 0; }
          100% { transform: translateX(0) skewX(-15deg); opacity: 1; }
        }
        @keyframes slide-right-full {
          0% { transform: translateX(100vw) skewX(-15deg); opacity: 0; }
          100% { transform: translateX(0) skewX(-15deg); opacity: 1; }
        }
      `}} />
    </section>
  );
};

export default Hero;
