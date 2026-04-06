import React, { useEffect, useRef, useState } from 'react';
import { Shield, Target, Star, Lock, Heart, Award } from 'lucide-react';

const values = [
  {
    title: 'Integrity',
    description: 'We uphold the highest ethical standards, ensuring honesty and transparency in every legal partnership.',
    icon: Shield,
    delay: '100',
    startPos: '-translate-x-[100vw] -translate-y-[100vh]' // Top Left
  },
  {
    title: 'Precision',
    description: 'Meticulous attention to detail is our hallmark, from complex research to precise document drafting.',
    icon: Target,
    delay: '250',
    startPos: 'translate-x-[100vw] -translate-y-[100vh]' // Top Right
  },
  {
    title: 'Excellence',
    description: 'We are committed to delivering elite paralegal support that exceeds industry expectations every time.',
    icon: Star,
    delay: '400',
    startPos: '-translate-x-[100vw] translate-y-[100vh]' // Bottom Left
  },
  {
    title: 'Confidentiality',
    description: 'Protecting your firm’s sensitive data and case information with ironclad security and discretion.',
    icon: Lock,
    delay: '550',
    startPos: 'translate-x-[100vw] translate-y-[100vh]' // Bottom Right
  },
  {
    title: 'Client-Centric',
    description: 'Our strategies are built around your firm’s specific needs, ensuring a seamless and helpful integration.',
    icon: Heart,
    delay: '700',
    startPos: 'translate-y-[-100vh]' // Top
  },
  {
    title: 'Professionalism',
    description: 'A dedicated team of experts who navigate the UK legal landscape with absolute skill and decorum.',
    icon: Award,
    delay: '850',
    startPos: 'translate-y-[100vh]' // Bottom
  }
];

const CoreValues = () => {
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
                
                {/* Section Header - Slides from extreme Right */}
                <div className={`text-center mb-16 md:mb-24 transition-all duration-[1500ms] ease-out ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-[100vw]'}`}>
                    <div className="flex items-center justify-center gap-4 mb-6">
                        <div className="h-[1px] w-8 bg-[#A07A41]"></div>
                        <h3 className="text-[#A07A41] uppercase tracking-[0.3em] text-xs font-bold font-sans">Our Core Values</h3>
                        <div className="h-[1px] w-8 bg-[#A07A41]"></div>
                    </div>
                    
                    <h2 className="text-3xl md:text-5xl lg:text-6xl font-serif font-bold text-white leading-tight max-w-4xl mx-auto">
                        Built on Trust, Integrity <br className="hidden md:block" />
                        & <span className="italic font-light text-[#A07A41]">Legal Excellence.</span>
                    </h2>
                </div>

                {/* Values Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12">
                    {values.map((value, index) => (
                        <div 
                            key={index}
                            className={`group relative transition-all duration-[1500ms] ease-out ${isVisible ? 'opacity-100 translate-x-0 translate-y-0' : `opacity-0 ${value.startPos}`}`}
                            style={{ 
                                transitionDelay: `${value.delay}ms`,
                            }}
                        >
                            {/* Card Content */}
                            <div className="flex flex-col h-full bg-[#1B2D33]/40 p-8 rounded-sm border border-white/5 hover:border-[#A07A41]/30 transition-all duration-500 hover:shadow-2xl hover:shadow-black/20 group-hover:-translate-y-2">
                                <div className="mb-6 inline-flex items-center justify-center w-14 h-14 bg-[#1B2D33] rounded-sm group-hover:bg-[#A07A41] transition-colors duration-500">
                                    <value.icon className="h-7 w-7 text-[#A07A41] group-hover:text-white transition-colors duration-500" strokeWidth={1.5} />
                                </div>
                                
                                <h4 className="text-xl font-serif font-bold text-white mb-4 tracking-wide group-hover:text-[#A07A41] transition-colors duration-300">
                                    {value.title}
                                </h4>
                                
                                <p className="text-gray-400 font-sans font-light leading-relaxed text-sm md:text-base">
                                    {value.description}
                                </p>
                            </div>
                            
                            {/* Subtle background glow on hover */}
                            <div className="absolute inset-0 -z-10 bg-[#A07A41]/5 blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
                        </div>
                    ))}
                </div>
                
            </div>
        </section>
    );
};

export default CoreValues;
