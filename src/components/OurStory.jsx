import React, { useState, useEffect, useRef } from 'react';

const StatRing = ({ targetPercentage, label, direction }) => {
  const [percentage, setPercentage] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const ringRef = useRef(null);

  const radius = 40;
  const circumference = 2 * Math.PI * radius;
  // Initially offset is full circumference, when visible it drops down to the target offset
  const strokeDashoffset = isVisible ? circumference - (percentage / 100) * circumference : circumference;

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.3 }
    );

    if (ringRef.current) observer.observe(ringRef.current);
    
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!isVisible) return;

    let startTimestamp = null;
    const duration = 2000; // 2 seconds animation

    const step = (timestamp) => {
      if (!startTimestamp) startTimestamp = timestamp;
      const progress = Math.min((timestamp - startTimestamp) / duration, 1);
      
      // Easing function: easeOutQuart
      const easeOutQuart = 1 - Math.pow(1 - progress, 4);
      
      const currentVal = Math.floor(easeOutQuart * targetPercentage);
      setPercentage(currentVal === 0 && targetPercentage > 0 ? 1 : currentVal);

      if (progress < 1) {
        window.requestAnimationFrame(step);
      } else {
        setPercentage(targetPercentage);
      }
    };

    window.requestAnimationFrame(step);
  }, [isVisible, targetPercentage]);

  const slideClass = direction === 'left' 
    ? (isVisible ? 'translate-x-0 opacity-100' : '-translate-x-32 opacity-0')
    : (isVisible ? 'translate-x-0 opacity-100' : 'translate-x-32 opacity-0');

  return (
    <div ref={ringRef} className={`flex items-center gap-4 group transition-all duration-[1500ms] ease-out ${slideClass}`}>
      <div className="relative w-20 h-20 md:w-24 md:h-24 flex-shrink-0">
        <svg className="w-full h-full transform -rotate-90" viewBox="0 0 100 100">
          <circle 
            cx="50" 
            cy="50" 
            r={radius} 
            stroke="rgba(160, 122, 65, 0.2)" 
            strokeWidth="4" 
            fill="none" 
            className="transition-colors duration-300 group-hover:stroke-[rgba(160,122,65,0.4)]"
          />
          <circle 
            cx="50" 
            cy="50" 
            r={radius} 
            stroke="#A07A41" 
            strokeWidth="4" 
            fill="none" 
            strokeDasharray={circumference} 
            strokeDashoffset={strokeDashoffset} 
            strokeLinecap="round"
            className="transition-all duration-[2000ms] ease-out"
          />
        </svg>
        <div className="absolute inset-0 flex items-center justify-center">
          <span className="text-white font-serif text-lg md:text-xl transition-transform duration-300 group-hover:scale-110">{percentage}%</span>
        </div>
      </div>
      <div className="flex flex-col">
        {label.split(' ').map((word, index) => (
          <span key={index} className="text-white font-serif text-sm md:text-base tracking-[0.1em] uppercase leading-snug">
            {word}
          </span>
        ))}
      </div>
    </div>
  );
};

const OurStory = () => {
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
        <section ref={sectionRef} className="py-20 md:py-32 bg-[#2A454E] border-b border-[#A07A41]/10 overflow-hidden">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                
                {/* Top Section: Image & Text */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center mb-20 md:mb-32">
                    
                    {/* Image Side - Slides down from top */}
                    <div className={`relative group overflow-hidden rounded-sm shadow-2xl transition-all duration-[1500ms] ease-out ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-32'}`}>
                        {/* Decorative background element behind image */}
                        <div className="absolute -inset-4 bg-[#A07A41]/10 translate-x-4 translate-y-4 -z-10 transition-transform duration-500 group-hover:translate-x-6 group-hover:translate-y-6 rounded-sm"></div>
                        
                        <img 
                            src="/sca.jpg" 
                            alt="Scales of Justice" 
                            className="w-full h-auto object-cover transform transition-transform duration-700 group-hover:scale-105"
                        />
                        
                        {/* Subtle overlay for premium feel */}
                        <div className="absolute inset-0 bg-gradient-to-t from-[#2A454E]/40 to-transparent mix-blend-multiply opacity-50"></div>
                    </div>

                    {/* Text Side - Slides up from bottom */}
                    <div className={`transition-all duration-[1500ms] ease-out ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-32'}`}>
                        <div className="flex items-center gap-4 mb-6">
                            <h3 className="text-[#A07A41] uppercase tracking-[0.2em] text-sm font-bold font-sans">Our Story</h3>
                        </div>
                        
                        <h2 className="text-3xl md:text-5xl font-serif font-bold text-white leading-tight mb-8">
                            HOW WE BECAME <br className="hidden md:block" />
                            REPUTABLE & TRUSTED
                        </h2>
                        
                        <div className="space-y-6 text-gray-300 font-sans font-light leading-relaxed text-sm md:text-base">
                            <p>
                                Since our inception, H&S Co. has empowered leading UK law firms with unparalleled paralegal support. We understand that meticulous preparation is the foundation of any successful legal practice, seamlessly integrating with your team to handle complex cases with full confidence.
                            </p>
                            <p>
                                Built on excellence, confidentiality, and precision, we are more than just assistants—we are your trusted legal partners. Our highly trained professionals expertly navigate the demanding UK legal landscape, ensuring every document and strategy meets the highest industry standards.
                            </p>
                        </div>
                    </div>
                </div>

                {/* Bottom Section: Circular Stats */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-4 overflow-hidden py-4">
                    <StatRing targetPercentage={35} label="Corporate Law" direction="left" />
                    <StatRing targetPercentage={65} label="Relations Law" direction="left" />
                    <StatRing targetPercentage={65} label="Purchase Law" direction="right" />
                    <StatRing targetPercentage={65} label="Public Law" direction="right" />
                </div>
                
            </div>
        </section>
    );
};

export default OurStory;
