import React, { useEffect, useRef, useState } from 'react';
import { Quote, Star } from 'lucide-react';

const testimonials = [
  {
    text: "When everything was on the line, Prime Law UK delivered. Their strategic brilliance and unyielding defense saved my business from an otherwise catastrophic takeover. Exceptional intellect at work.",
    client: "James L.",
    role: "CEO, Tech Innovations",
    delay: 'animation-delay-200',
    animationClass: 'animate-fade-in-left'
  },
  {
    text: "The compassion intertwined with their aggressive courtroom tactics gave me exactly what I needed during an impossible international divorce trial. They protected my future and my assets flawlessly.",
    client: "Emily R.",
    role: "Private Client",
    delay: 'animation-delay-300',
    animationClass: 'animate-fade-in-up'
  },
  {
    text: "They simply orchestrate favorable outcomes. I walked into the courtroom anxious, and left entirely vindicated. Their deep understanding of property law is terrifyingly good. Worth every penny.",
    client: "Arthur P.",
    role: "Real Estate Developer",
    delay: 'animation-delay-400',
    animationClass: 'animate-fade-in-right'
  }
];

const Testimonials = () => {
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
    <section ref={sectionRef} id="testimonials" className="relative bg-[#2A454E] py-24 lg:py-32 overflow-hidden border-t border-white/10">
      
      {/* Decorative Background Quote watermark */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-[0.03] pointer-events-none">
        <Quote className="w-[800px] h-[800px] text-[#A07A41]" />
      </div>

      <div className="max-w-[90rem] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-16 md:mb-24">
          <div className={`relative z-10 bg-[#1B2D33] border border-white/10 p-8 md:p-12 lg:p-16 shadow-2xl transition-all duration-[1200ms] ${isVisible ? 'opacity-100 scale-100 translate-y-0' : 'opacity-0 scale-95 translate-y-10'}`}>
            <div className="flex items-center gap-3 mb-6">
              <div className="h-[1px] w-12 bg-[#A07A41]"></div>
              <span className="text-[#A07A41] uppercase tracking-widest text-sm font-semibold">Client Testimonials</span>
              <div className="h-[1px] w-12 bg-[#A07A41]"></div>
            </div>
            
            <h2 className="text-3xl md:text-5xl lg:text-6xl font-serif font-bold text-white leading-tight max-w-3xl">
              Excellence Spoken by <br className="hidden sm:block" />
              <span className="italic font-light text-[#A07A41]">Those We Defend.</span>
            </h2>
          </div>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12 relative">
          {testimonials.map((item, idx) => (
            <div 
              key={idx} 
              className={`relative bg-[#1B2D33] border border-white/10 p-8 sm:p-10 lg:p-12 hover:border-[#A07A41]/50 transition-all duration-500 shadow-[0_10px_30px_rgba(0,0,0,0.2)] hover:shadow-[0_10px_40px_rgba(160,122,65,0.1)] flex flex-col justify-between ${idx === 1 ? 'md:-translate-y-8' : ''} ${isVisible ? `${item.animationClass} ${item.delay}` : 'opacity-0'}`}
            >
              <div>
                <div className="flex gap-1 mb-8">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-[#A07A41] text-[#A07A41]" />
                  ))}
                </div>
                
                <Quote className="h-8 w-8 text-[#A07A41]/30 mb-6 absolute top-8 right-8" />
                
                <p className="text-gray-300 font-serif italic text-lg sm:text-xl leading-relaxed mb-10 font-light z-10 relative">
                  "{item.text}"
                </p>
              </div>
              
              <div className="border-t border-[#A07A41]/10 pt-6 flex items-center gap-4">
                <div className="h-10 w-10 rounded bg-[#2A454E] border border-[#A07A41]/30 flex items-center justify-center">
                  <span className="text-[#A07A41] font-serif font-bold text-lg">{item.client.charAt(0)}</span>
                </div>
                <div>
                  <h4 className="text-white font-sans uppercase tracking-[0.15em] font-bold text-xs mb-1">
                    {item.client}
                  </h4>
                  <p className="text-[#A07A41] text-[11px] uppercase tracking-widest">
                    {item.role}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Testimonials;
