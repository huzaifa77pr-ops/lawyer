import React, { useEffect, useRef, useState } from 'react';
import { Users, Activity, Hammer, Scale, Heart, Briefcase } from 'lucide-react';

const practices = [
  {
    title: 'Labor',
    description: 'Deliver strategic legal advice, practical guidance, and compliant solutions to protect your workforce rights.',
    icon: Users,
    startClass: '-translate-y-[100vh] translate-x-[100vw] opacity-0' // Extreme Top Right
  },
  {
    title: 'Medical & Health Care',
    description: 'Providing regulatory support, dispute resolution, and risk management for healthcare professionals.',
    icon: Activity,
    startClass: '-translate-y-[100vh] -translate-x-[100vw] opacity-0' // Extreme Top Left
  },
  {
    title: 'Mining',
    description: 'Assisting licensing, contract compliance, operational disputes, and regulatory mining obligations.',
    icon: Hammer,
    startClass: 'translate-y-[100vh] translate-x-[100vw] opacity-0' // Extreme Bottom Right
  },
  {
    title: 'Civil & Criminal',
    description: 'Representing clients in litigation, defense strategies, negotiations, and courtroom advocacy.',
    icon: Scale,
    startClass: 'translate-y-[100vh] -translate-x-[100vw] opacity-0' // Extreme Bottom Left
  },
  {
    title: 'Family & Marriage',
    description: 'Handling divorce, custody, inheritance planning, and confidential family legal matters.',
    icon: Heart,
    startClass: '-translate-y-[100vh] translate-x-0 opacity-0' // Extreme Top
  },
  {
    title: 'Corporate & Investment',
    description: 'Advising transactions, compliance structuring, shareholder matters, and investment protection.',
    icon: Briefcase,
    startClass: 'translate-y-[100vh] translate-x-0 opacity-0' // Extreme Bottom
  }
];

const AreaOfPractice = () => {
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
      { threshold: 0.1 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} className="py-20 md:py-32 bg-[#2A454E] border-b border-white/5 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row gap-16 lg:gap-12">
          
          {/* Left Column: Title (Slides from pure Right) */}
          <div className={`w-full lg:w-1/3 transition-all duration-[1500ms] ease-out ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-[100vw]'}`}>
            <div className="inline-block px-4 py-1.5 bg-[#1B2D33] rounded text-sm text-gray-200 font-sans tracking-wide mb-8">
              Practice Area
            </div>
            <h2 className="text-3xl md:text-5xl font-serif font-medium text-white leading-tight">
              Experienced Lawyers Protecting Your Rights
            </h2>
          </div>

          {/* Right Column: Grid */}
          <div className="w-full lg:w-2/3">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-12">
              {practices.map((practice, index) => (
                <div 
                  key={index} 
                  className={`flex gap-6 group transition-all duration-[1500ms] ease-out ${isVisible ? 'translate-y-0 translate-x-0 opacity-100' : practice.startClass}`}
                  style={{ 
                    transitionDelay: `${index * 150}ms`
                  }}
                >
                  {/* Icon Box */}
                  <div className="flex-shrink-0">
                    <div className="w-16 h-16 rounded-xl bg-[#1B2D33] flex items-center justify-center transition-all duration-300 group-hover:-translate-y-2 group-hover:bg-[#A07A41]">
                      <practice.icon className="w-8 h-8 text-white transition-colors duration-300" strokeWidth={1.5} />
                    </div>
                  </div>

                  {/* Text */}
                  <div>
                    <h3 className="text-xl font-sans font-medium text-white mb-3 transition-colors duration-300 group-hover:text-[#A07A41]">
                      {practice.title}
                    </h3>
                    <p className="text-gray-400 text-sm md:text-base leading-relaxed font-light">
                      {practice.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default AreaOfPractice;
