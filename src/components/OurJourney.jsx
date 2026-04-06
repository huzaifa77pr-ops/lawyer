import React, { useEffect, useRef, useState } from 'react';
import { Award, Building, Globe, Star } from 'lucide-react';

const milestones = [
  {
    year: '1995',
    title: 'Founding of H&S Co.',
    description: 'Our firm was established in London with a vision to provide world-class legal assistance and paralegal support to growing firms.',
    icon: Building,
    pos: 'left'
  },
  {
    year: '2005',
    title: 'Excellence In Advocacy Award',
    description: 'Recognized by the legal community for our outstanding contributions to criminal defense and complex litigation research.',
    icon: Award,
    pos: 'right'
  },
  {
    year: '2012',
    title: 'Nationwide Expansion',
    description: 'Successfully expanded our operations across the United Kingdom, opening specialized branches in Manchester and Birmingham.',
    icon: Globe,
    pos: 'left'
  },
  {
    year: '2024',
    title: 'Defining Legal Standard',
    description: 'Today, we stands as a beacon of legal integrity, digital preparation, and unparalleled client success in the modern era.',
    icon: Star,
    pos: 'right'
  }
];

const OurJourney = () => {
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
        <section ref={sectionRef} className="py-24 md:py-32 bg-[#2A454E] border-b border-[#A07A41]/10 overflow-hidden">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                
                {/* Section Header (Slides from extreme Right) */}
                <div className={`text-center mb-16 md:mb-24 transition-all duration-[1500ms] ease-out ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-[100vw]'}`}>
                    <div className="flex items-center justify-center gap-4 mb-6">
                        <div className="h-[1px] w-8 bg-[#A07A41]"></div>
                        <h3 className="text-[#A07A41] uppercase tracking-[0.3em] text-xs font-bold font-sans">Our Evolution</h3>
                        <div className="h-[1px] w-8 bg-[#A07A41]"></div>
                    </div>
                    
                    <h2 className="text-3xl md:text-5xl lg:text-6xl font-serif font-bold text-white leading-tight max-w-4xl mx-auto">
                        A Decades-Long Commitment <br className="hidden md:block" />
                        To <span className="italic font-light text-[#A07A41]">Justice.</span>
                    </h2>
                </div>

                {/* Timeline Body */}
                <div className="relative mt-20">
                    
                    {/* Center Vertical Line (Only on lg+) */}
                    <div className="hidden lg:block absolute left-1/2 top-0 bottom-0 w-[1px] bg-[#A07A41]/30 -translate-x-1/2"></div>
                    
                    <div className="space-y-12 lg:space-y-0">
                        {milestones.map((ms, index) => (
                            <div key={index} className="relative lg:h-64 flex items-center lg:justify-between group">
                                
                                {/* Timeline Card */}
                                <div 
                                    className={`w-full lg:w-[45%] p-8 bg-[#1B2D33]/40 border border-white/5 rounded-sm hover:border-[#A07A41]/40 transition-all duration-700 shadow-xl lg:group-hover:-translate-y-2
                                    ${ms.pos === 'left' 
                                        ? `lg:text-right transition-all duration-[1500ms] ease-out ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-[100vw]'}` 
                                        : `lg:ml-auto transition-all duration-[1500ms] ease-out ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-[100vw]'}`}
                                    `}
                                    style={{ transitionDelay: `${index * 200}ms` }}
                                >
                                    <div className={`flex flex-col ${ms.pos === 'left' ? 'lg:items-end' : 'items-start'} gap-4 mb-4`}>
                                        <div className="p-3 bg-[#A07A41]/10 rounded-sm">
                                            <ms.icon className="h-6 w-6 text-[#A07A41]" strokeWidth={1.5} />
                                        </div>
                                        <span className="text-[#A07A41] font-serif text-3xl font-bold">{ms.year}</span>
                                    </div>
                                    <h4 className="text-xl font-serif font-bold text-white mb-3 tracking-wide group-hover:text-[#A07A41] transition-colors duration-300">{ms.title}</h4>
                                    <p className="text-gray-400 font-sans font-light leading-relaxed text-sm md:text-base">
                                        {ms.description}
                                    </p>
                                </div>

                                {/* Central Dot (Only on lg+) */}
                                <div className="hidden lg:flex absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-4 h-4 bg-[#1B2D33] border-2 border-[#A07A41] rounded-full z-10 group-hover:scale-150 group-hover:bg-[#A07A41] transition-all duration-500"></div>
                            </div>
                        ))}
                    </div>

                </div>
                
            </div>
        </section>
    );
};

export default OurJourney;
