import React, { useEffect, useRef, useState } from 'react';
import { Award, BookOpen, Users } from 'lucide-react';

const AboutSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect(); // Triggers only once
        }
      },
      { threshold: 0.3 } // 30% of section needs to be visible
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} id="about" className="relative bg-[#2A454E] py-24 lg:py-32 overflow-hidden border-t border-white/10">
      <div className="max-w-[90rem] mx-auto px-4 sm:px-6 lg:px-8">

        <div className="grid lg:grid-cols-2 gap-16 items-center">

          {/* Left Column - Content */}
          <div className="order-2 lg:order-1 flex flex-col items-start w-full">
            <div className={`flex items-center gap-3 mb-6 transition-all duration-1000 transform ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'}`}>
              <div className="h-[1px] w-12 bg-[#A07A41]"></div>
              <span className="text-[#A07A41] uppercase tracking-widest text-sm font-semibold">Our Legacy</span>
            </div>

            <h2 className={`text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-white leading-tight mb-8 ${isVisible ? 'animate-fade-in-up animation-delay-200' : 'opacity-0'}`}>
              Specialized <span className="italic font-light text-[#A07A41]">Paralegal</span> <br />
              Support for Law Firms.
            </h2>

            <p className={`text-gray-400 text-base md:text-lg font-sans font-light leading-relaxed mb-10 max-w-xl ${isVisible ? 'animate-fade-in-right animation-delay-400' : 'opacity-0'}`}>
              H&S Co. is dedicated to providing high-performance legal assistance across the United Kingdom. We understand the pressure of the billable hour, which is why we’ve built a model that allows UK law firms to outsource legal work seamlessly, reducing overheads while maintaining elite standards of document drafting and case preparation.
            </p>

            {/* Animated Wrapper for features and buttons from left */}
            <div className={`w-full ${isVisible ? 'animate-fade-in-left animation-delay-700' : 'opacity-0'}`}>
              {/* List of features */}
              <div className="flex flex-col gap-6 mb-12 w-full max-w-xl">
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-12 h-12 rounded-full border border-white/10 flex items-center justify-center bg-[#1B2D33]">
                    <Award className="h-5 w-5 text-[#A07A41]" />
                  </div>
                  <div>
                    <h4 className="text-white font-serif font-medium text-lg mb-1">Award-Winning Partners</h4>
                    <p className="text-sm text-gray-300 font-sans leading-relaxed">Recognized by the legal community for outstanding achievements in corporate and criminal defense.</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-12 h-12 rounded-full border border-white/10 flex items-center justify-center bg-[#1B2D33]">
                    <Users className="h-5 w-5 text-[#A07A41]" />
                  </div>
                  <div>
                    <h4 className="text-white font-serif font-medium text-lg mb-1">Tailored Legal Strategy</h4>
                    <p className="text-sm text-gray-300 font-sans leading-relaxed">No two cases are alike. We build a personalized, comprehensive strategy entirely around yours.</p>
                  </div>
                </div>
              </div>

              <div className="flex items-center gap-6">
                <a
                  href="#team"
                  className="px-8 py-4 bg-[#1B2D33] border border-white/10 text-white hover:bg-[#A07A41] font-bold tracking-wide uppercase text-sm rounded transition-all duration-300 shadow-[0_0_15px_rgba(0,0,0,0.1)]"
                >
                  Meet The Partners
                </a>

                <div className="hidden sm:block">
                  <p className="text-[#A07A41] font-serif text-2xl italic tracking-wide">H&S Company</p>
                  <p className="text-gray-500 text-xs uppercase tracking-widest mt-1">Founding Board</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column - Images with Premium Layout */}
          <div className={`order-1 lg:order-2 relative w-full max-w-lg mx-auto lg:ml-auto lg:mr-0 mt-8 lg:mt-0 transition-all duration-[1500ms] ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'}`}>
            {/* Decorative Background Frame */}
            <div className="absolute -top-6 -right-6 lg:-right-8 -bottom-6 -left-6 lg:-left-8 border border-[#A07A41]/20 z-0"></div>

            {/* Main Focus Image Container - Flexible Height */}
            <div className="relative z-10 w-full shadow-2xl shadow-black overflow-hidden group">
              {/* Dark fade on image for legibility and theme mapping */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#2A454E]/80 via-transparent to-[#2A454E]/20 z-10 pointer-events-none"></div>
              <img
                src="/sec2.jpg"
                alt="Our Firm Presence"
                className="w-full h-auto max-h-[600px] object-cover object-center transform group-hover:scale-[1.03] transition-transform duration-1000"
              />
            </div>

            {/* Overlapping small accent block */}
            <div className="absolute -bottom-10 -left-4 sm:-left-12 z-20 bg-[#1B2D33] border border-white/10 p-6 md:p-8 shadow-2xl w-[80%] max-w-[260px]">
              <BookOpen className="h-8 w-8 text-[#A07A41] mb-4" strokeWidth={1.5} />
              <h3 className="font-serif text-xl sm:text-2xl text-white mb-2 leading-tight">Leading Legal Authority.</h3>
              <div className="h-[2px] w-8 bg-[#A07A41]"></div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default AboutSection;
