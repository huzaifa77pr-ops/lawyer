import React, { useEffect, useRef, useState } from 'react';
import { Phone, Mail } from 'lucide-react';

const teamMembers = [
  {
    name: 'Abdul Rehman',
    role: 'Founder',
    specialization: 'Paralegal Expert',
    image: '/hd2.jpg',
    delay: 'animation-delay-200',
    animationClass: 'animate-fade-in-up-flip'
  },
  {
    name: 'Ibtisam Khan',
    role: 'Senior Paralegal Expert',
    specialization: 'Paralegal Expert',
    image: '/hd1.jpg',
    delay: 'animation-delay-400',
    animationClass: 'animate-fade-in-down-flip'
  },
  {
    name: 'Umer Wazir',
    role: 'Senior Paralegal Expert',
    specialization: 'Paralegal Expert',
    image: '/hd4.jpg',
    delay: 'animation-delay-600',
    animationClass: 'animate-fade-in-up-flip'
  },
  {
    name: 'Wajeeha Amin',
    role: 'Paralegal Assistant',
    specialization: 'Corporate & Finance Litigation',
    image: '/hd3.jpg',
    delay: 'animation-delay-800',
    animationClass: 'animate-fade-in-down-flip'
  }
];

const TeamSection = () => {
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
      { threshold: 0.15 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} id="team" className="relative bg-[#1B2D33] py-24 lg:py-32 overflow-hidden border-t border-white/10">
      <div className="max-w-[90rem] mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-16 md:mb-24">
          <div className={`flex items-center gap-3 mb-6 transition-all duration-1000 transform ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <div className="h-[1px] w-12 bg-[#A07A41]"></div>
            <span className="text-[#A07A41] uppercase tracking-[0.3em] text-xs font-bold font-sans">MEET OUR REPUTABLE TEAM</span>
            <div className="h-[1px] w-12 bg-[#A07A41]"></div>
          </div>
          
          <h2 className={`text-3xl md:text-5xl lg:text-6xl font-serif font-bold text-white leading-tight mb-6 max-w-4xl mx-auto ${isVisible ? 'animate-fade-in-up animation-delay-200' : 'opacity-0'}`}>
            The Experts Behind Your <br className="hidden md:block" />
            <span className="italic font-light text-[#A07A41]">Legal Success.</span>
          </h2>
          
          <p className={`text-gray-400 text-base md:text-lg font-sans font-light max-w-2xl ${isVisible ? 'animate-fade-in-up animation-delay-300' : 'opacity-0'}`}>
            Our board of principal partners possesses an unmatched record in the courtroom, leveraging decades of collective authority and strategic brilliance.
          </p>
        </div>

        {/* Team Grid - Matches FeaturedLawyers style */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {teamMembers.map((member, idx) => (
            <div 
              key={idx} 
              className={`group relative flex flex-col items-center cursor-pointer ${isVisible ? `${member.animationClass} ${member.delay}` : 'opacity-0'}`}
            >
              {/* Image Container with Hover Effects */}
              <div className="relative w-full aspect-[3/4] overflow-hidden bg-[#2A454E]/30 mb-6 shadow-2xl rounded-[2px] border border-white/10 group-hover:border-[#A07A41]/40 transition-colors duration-500">
                {/* Greyscale to Color overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#1B2D33] via-[#1B2D33]/40 to-transparent opacity-80 z-10 transition-opacity duration-500 group-hover:opacity-40"></div>
                
                <img 
                  src={member.image} 
                  alt={member.name} 
                  className="w-full h-full object-cover object-top grayscale group-hover:grayscale-0 transform group-hover:scale-110 transition-all duration-1000 ease-out"
                />

                {/* Hidden Hover Socials / Actions */}
                <div className="absolute bottom-6 left-0 w-full flex justify-center gap-4 z-20 opacity-0 translate-y-6 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500 delay-100">
                  <a href="#" className="p-3 rounded-full bg-[#1B2D33]/80 hover:bg-[#A07A41] text-white transition-colors border border-white/10 shadow-lg">
                    <Phone className="h-4 w-4" />
                  </a>
                  <a href="#" className="p-3 rounded-full bg-[#1B2D33]/80 hover:bg-[#A07A41] text-white transition-colors border border-white/10 shadow-lg">
                    <Mail className="h-4 w-4" />
                  </a>
                </div>
              </div>

              {/* Text Info (Always visible, styles change on hover) */}
              <div className="text-center w-full px-4">
                <p className="text-[#A07A41] text-[10px] font-bold uppercase tracking-[0.2em] mb-3">
                  {member.role}
                </p>
                <div className="flex flex-col items-center">
                  <h3 className="text-xl lg:text-2xl font-serif text-white mb-2 group-hover:text-[#A07A41] transition-colors duration-300">
                    {member.name}
                  </h3>
                  <div className="h-[2px] w-6 bg-white/20 group-hover:bg-[#A07A41] group-hover:w-16 transition-all duration-500 mb-3"></div>
                  <p className="text-gray-400 text-xs font-sans italic font-light line-clamp-1">
                    {member.specialization}
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

export default TeamSection;
