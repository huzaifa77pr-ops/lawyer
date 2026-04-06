import React, { useEffect, useRef, useState } from 'react';
import { ArrowUpRight, CheckCircle2, TrendingUp, Building } from 'lucide-react';

const cases = [
  {
    category: 'Property Law',
    icon: Building,
    title: 'Commercial Estate Dispute',
    highlight: 'Won multi-million property dispute in just 2 months.',
    description: 'Successfully defended our client against a hostile land takeover attempt by a commercial giant, securing absolute ownership and all legal fees.',
    result: '$4.2M Asset Protected',
    delay: 'animation-delay-200',
    animationClass: 'animate-fade-in-left',
    image: '/p1.jpg'
  },
  {
    category: 'Corporate Defense',
    icon: TrendingUp,
    title: 'Merger & Acquisition Litigation',
    highlight: 'Settled hostile takeover out of court, saving $8M.',
    description: 'Negotiated an aggressive out-of-court settlement for a tech startup facing intellectual property suppression by a leading conglomerate.',
    result: 'Favorable Settlement',
    delay: 'animation-delay-300',
    animationClass: 'animate-fade-in-up',
    image: '/p2.jpg'
  },
  {
    category: 'Family & Assets',
    icon: CheckCircle2,
    title: 'High-Net-Worth Divorce',
    highlight: 'Secured full custody and 70% of prime international assets.',
    description: 'Navigated an incredibly complex international jurisdiction divorce, ensuring the safety of our client and the preservation of generational wealth.',
    result: 'Total Custody Won',
    delay: 'animation-delay-400',
    animationClass: 'animate-fade-in-right',
    image: '/p3.jpg'
  }
];

const CaseHighlights = () => {
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
    <section ref={sectionRef} id="case-studies" className="relative bg-[#2A454E] py-24 lg:py-32 overflow-hidden border-t border-white/10">
      
      {/* Background pattern for luxury feel */}
      <div className="absolute inset-0 opacity-[0.02] pointer-events-none" style={{ backgroundImage: 'linear-gradient(#A07A41 1px, transparent 1px), linear-gradient(90deg, #A07A41 1px, transparent 1px)', backgroundSize: '40px 40px' }}></div>

      <div className="max-w-[90rem] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 lg:mb-20 gap-8 border-b border-[#A07A41]/20 pb-12">
          <div className="flex flex-col items-start w-full md:w-1/2">
            <div className={`flex items-center gap-3 mb-6 transition-all duration-1000 transform ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'}`}>
              <div className="h-[1px] w-12 bg-[#A07A41]"></div>
              <span className="text-[#A07A41] uppercase tracking-widest text-sm font-semibold">Our Track Record</span>
            </div>
            
            <h2 className={`text-3xl md:text-5xl lg:text-6xl font-serif font-bold text-white leading-tight ${isVisible ? 'animate-fade-in-up animation-delay-200' : 'opacity-0'}`}>
              Landmark <br className="hidden sm:block" />
              <span className="italic font-light text-[#A07A41]">Victories.</span>
            </h2>
          </div>
          
          <div className={`w-full md:w-1/2 flex justify-start md:justify-end ${isVisible ? 'animate-fade-in-right animation-delay-400' : 'opacity-0'}`}>
            <a 
              href="#all-cases" 
              className="group flex items-center gap-3 px-6 py-3 bg-[#1B2D33] border border-white/10 text-white hover:bg-[#A07A41] hover:text-[#1B2D33] font-bold tracking-[0.1em] uppercase text-xs transition-all duration-300 rounded shadow-[0_0_20px_rgba(0,0,0,0.1)]"
            >
              View All Case Studies
              <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
            </a>
          </div>
        </div>

        {/* Highlight Cards Grid - 3D Flip Construction */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-8 min-h-[400px]">
          {cases.map((caseItem, idx) => (
            <div 
              key={idx} 
              className={`group [perspective:2000px] cursor-pointer w-full h-[400px] sm:h-[450px] ${isVisible ? `${caseItem.animationClass} ${caseItem.delay}` : 'opacity-0'}`}
            >
              {/* Internal Flipping Container */}
              <div className="relative w-full h-full transition-transform duration-[800ms] [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)] shadow-[0_10px_30px_rgba(0,0,0,0.8)] group-hover:shadow-[0_20px_40px_rgba(160,122,65,0.2)]">
                
                {/* Front Face: Image */}
                <div className="absolute inset-0 w-full h-full [backface-visibility:hidden] bg-[#1B2D33] border border-white/10 rounded-[2px] overflow-hidden">
                  {/* Dark gradient mapping at bottom of the image for robust legibility */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#1B2D33] via-[#1B2D33]/40 to-transparent z-10"></div>
                  <img 
                    src={caseItem.image} 
                    alt={caseItem.title} 
                    className="w-full h-full object-cover object-top opacity-85"
                  />
                  {/* Front Face Title Block Overlay */}
                  <div className="absolute bottom-0 left-0 w-full p-6 sm:p-8 z-20 flex justify-between items-end border-b-2 border-transparent group-hover:border-[#A07A41] transition-all duration-500">
                    <div>
                      <span className="text-[#A07A41] text-xs uppercase tracking-widest font-bold mb-2 block">
                        {caseItem.category}
                      </span>
                      <h3 className="text-2xl font-serif text-white max-w-[90%] leading-tight">
                        {caseItem.title}
                      </h3>
                    </div>
                    <caseItem.icon className="h-8 w-8 text-[#A07A41] opacity-70" strokeWidth={1.5} />
                  </div>
                </div>

                {/* Back Face: Text Content Data */}
                <div className="absolute inset-0 w-full h-full [backface-visibility:hidden] [transform:rotateY(180deg)] bg-[#1B2D33] border border-white/10 rounded-[2px] p-6 sm:p-8 flex flex-col justify-between">
                  <div>
                    <h3 className="text-2xl font-serif text-[#A07A41] mb-5">
                      Case Brief
                    </h3>
                    
                    <p className="text-white font-serif italic text-lg sm:text-xl leading-snug mb-5 border-l-2 border-[#A07A41] pl-4">
                      "{caseItem.highlight}"
                    </p>
                    
                    <p className="text-gray-300 font-sans text-sm sm:text-base leading-relaxed font-light">
                      {caseItem.description}
                    </p>
                  </div>
                  
                  {/* Verdict Footer */}
                  <div className="mt-auto border-t border-white/10 pt-5">
                    <div className="flex items-center gap-3">
                      <div className="h-1.5 w-1.5 rounded-full bg-green-500 animate-pulse shadow-[0_0_10px_rgba(34,197,94,0.6)]"></div>
                      <span className="text-white uppercase font-bold text-[11px] tracking-widest">
                        Verdict: <span className="text-[#A07A41] ml-1">{caseItem.result}</span>
                      </span>
                    </div>
                  </div>
                </div>

              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default CaseHighlights;
