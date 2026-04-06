import React, { useEffect, useRef, useState } from 'react';
import { Award, Zap, ShieldCheck, TrendingDown, Clock, Users } from 'lucide-react';

const stats = [
  {
    icon: TrendingDown,
    value: '40%+',
    label: 'Cost Reduction',
    delay: 'animation-delay-200',
    animationClass: 'animate-fade-in-top-left'
  },
  {
    icon: Clock,
    value: '24hr',
    label: 'Fast Turnaround',
    delay: 'animation-delay-300',
    animationClass: 'animate-fade-in-top-right'
  },
  {
    icon: Users,
    value: '500+',
    label: 'Firms Supported',
    delay: 'animation-delay-400',
    animationClass: 'animate-fade-in-bottom-left'
  },
  {
    icon: ShieldCheck,
    value: '100%',
    label: 'Confidentiality',
    delay: 'animation-delay-500',
    animationClass: 'animate-fade-in-bottom-right'
  }
];

const WhyChooseUs = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} id="why-choose-us" className="relative bg-[#2A454E] py-24 lg:py-32 overflow-hidden border-t border-white/10">
      
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-white/5 rounded-full blur-[120px] pointer-events-none translate-x-1/2 -translate-y-1/2"></div>
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-white/5 rounded-full blur-[120px] pointer-events-none -translate-x-1/2 translate-y-1/2"></div>

      <div className="max-w-[90rem] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        {/* Section Header */}
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 lg:mb-24 gap-8">
          <div className="flex flex-col items-start w-full md:w-3/5">
            <div className={`flex items-center gap-3 mb-6 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'}`}>
              <div className="h-[1px] w-12 bg-[#A07A41]"></div>
              <span className="text-[#A07A41] uppercase tracking-widest text-sm font-semibold">Excellence for Law Firms</span>
            </div>

            <h2 className={`text-3xl md:text-5xl lg:text-6xl font-serif font-bold text-white leading-tight ${isVisible ? 'animate-fade-in-up animation-delay-200' : 'opacity-0'}`}>
              Why High-Performance <br className="hidden sm:block" />
              <span className="italic font-light text-[#A07A41]">Firms Choose Us.</span>
            </h2>
          </div>

          <div className={`w-full md:w-2/5 ${isVisible ? 'animate-fade-in-right animation-delay-400' : 'opacity-0'}`}>
            <p className="text-gray-400 text-base md:text-lg font-sans font-light border-l border-[#A07A41]/30 pl-6 leading-relaxed">
              We operate at the highest echelons of legal support. By outsourcing legal work to H&S Co., your firm eliminates National Insurance, pension costs, and office overheads while gaining access to elite UK-specific legal intelligence.
            </p>
          </div>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 md:gap-x-12 md:gap-y-16 mt-16 pt-16 border-t border-gray-900">
          {stats.map((stat, idx) => (
            <div
              key={idx}
              className={`flex flex-col items-center sm:items-start text-center sm:text-left group ${isVisible ? `${stat.animationClass} ${stat.delay}` : 'opacity-0'}`}
            >
              <div className="mb-5 lg:mb-6 rounded-full bg-[#1B2D33] border border-white/10 p-4 group-hover:border-[#A07A41] transition-all duration-500 shadow-[0_0_20px_rgba(0,0,0,0.2)]">
                <stat.icon className="h-6 w-6 text-[#A07A41]" strokeWidth={1.5} />
              </div>

              <h3 className="text-3xl md:text-4xl lg:text-5xl font-serif font-bold text-transparent bg-clip-text bg-gradient-to-br from-white via-white to-gray-500 mb-2 md:mb-3 tracking-tight drop-shadow-lg transition-transform duration-500 group-hover:-translate-y-2">
                {stat.value}
              </h3>

              <div className="h-[1px] w-8 bg-[#A07A41] mb-4 md:mb-6 sm:ml-0 mx-auto transition-all duration-500 group-hover:w-16"></div>

              <p className="text-gray-400 text-sm md:text-base font-sans uppercase tracking-widest font-semibold">
                {stat.label}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default WhyChooseUs;
