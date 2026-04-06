import React, { useEffect, useRef, useState } from 'react';
import { ShieldCheck, FileText, Search, Briefcase, Scale, ArrowRight, BookOpen, Clock } from 'lucide-react';
import { Link } from 'react-router-dom';

const practices = [
  {
    icon: Search,
    title: 'Legal Research',
    description: 'Comprehensive research using Westlaw, LexisNexis, and BAILII to identify precedents, statutes, and regulatory frameworks for your cases.',
    link: '/services/legal-research',
    delay: 'animation-delay-200',
    animationClass: 'animate-fade-in-right',
    isInternal: true
  },
  {
    icon: FileText,
    title: 'Document Drafting',
    description: 'High-precision drafting of pleadings, witness statements, affidavits, and legal notices tailored to UK Civil Procedure Rules (CPR).',
    link: '/services/document-drafting',
    delay: 'animation-delay-300',
    animationClass: 'animate-fade-in-up',
    isInternal: true
  },
  {
    icon: Briefcase,
    title: 'Case Preparation',
    description: 'End-to-end case file organization, preparation of trial bundles, and chronological analysis to streamline your courtroom presentation.',
    link: '/services/case-preparation',
    isInternal: true,
    delay: 'animation-delay-400',
    animationClass: 'animate-fade-in-left'
  },
  {
    icon: Scale,
    title: 'Contract Review',
    description: 'Thorough analysis of commercial contracts, lease agreements, and NDAs to identify risks and ensure full regulatory compliance.',
    link: '/services/contract-review',
    isInternal: true,
    delay: 'animation-delay-500',
    animationClass: 'animate-fade-in-right'
  },
  {
    icon: Clock,
    title: 'Fast Turnaround',
    description: 'We understand the pressure of deadlines. Our team delivers high-quality legal work within strict timeframes to keep your firm moving.',
    link: '/services/fast-turnaround',
    isInternal: true,
    delay: 'animation-delay-600',
    animationClass: 'animate-fade-in-down'
  },
  {
    icon: ShieldCheck,
    title: 'Compliance & Audit',
    description: 'Ensuring all outsourced legal work adheres to SRA standards and your firm’s internal quality and confidentiality protocols.',
    link: '/services/compliance-audit',
    isInternal: true,
    delay: 'animation-delay-700',
    animationClass: 'animate-fade-in-left'
  }
];

const PracticeAreas = () => {
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
    <section ref={sectionRef} id="why-choose-us" className="relative bg-[#2A454E] py-24 lg:py-32 overflow-hidden border-t border-white/10">
      <div className="max-w-[90rem] mx-auto px-4 sm:px-6 lg:px-8">

        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-16 md:mb-24">
          <div className={`flex items-center gap-3 mb-6 transition-all duration-1000 transform ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <div className="h-[1px] w-12 bg-[#A07A41]"></div>
            <span className="text-[#A07A41] uppercase tracking-widest text-sm font-semibold">Our Expertise</span>
            <div className="h-[1px] w-12 bg-[#A07A41]"></div>
          </div>

          <h2 className={`text-3xl md:text-5xl lg:text-6xl font-serif font-bold text-white leading-tight mb-6 max-w-4xl ${isVisible ? 'animate-fade-in-up animation-delay-200' : 'opacity-0'}`}>
            Specialized Paralegal Support for <br className="hidden sm:block" />
            <span className="italic font-light text-[#A07A41]">Modern UK Law Firms.</span>
          </h2>

          <p className={`text-gray-400 text-base md:text-lg font-sans font-light max-w-2xl ${isVisible ? 'animate-fade-in-up animation-delay-400' : 'opacity-0'}`}>
            We provide elite legal assistance, allowing lawyers and advocates to focus on strategy while we handle the meticulous preparation and research required for success.
          </p>
        </div>

        {/* Practice Areas Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {practices.map((practice, idx) => (
            <div
              key={idx}
              className={`group relative bg-[#1B2D33] border border-white/10 p-8 sm:p-10 hover:border-[#A07A41]/50 transition-all duration-500 overflow-hidden cursor-pointer shadow-[0_4px_30px_rgba(0,0,0,0.2)] ${isVisible ? `${practice.animationClass} ${practice.delay}` : 'opacity-0'}`}
            >
              <div className="absolute inset-0 bg-gradient-to-b from-[#A07A41]/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none"></div>

              <div className="mb-5 lg:mb-6 rounded-full bg-[#1B2D33] border border-white/10 p-4 group-hover:border-[#A07A41] transition-all duration-500 shadow-[0_0_20px_rgba(0,0,0,0.2)]">
                <practice.icon className="h-10 w-10 text-gray-500 group-hover:text-[#A07A41] transition-colors duration-500 relative z-10" strokeWidth={1.5} />
              </div>

              <h3 className="text-xl md:text-2xl font-serif text-white mb-4 group-hover:text-[#A07A41] transition-colors duration-300 relative z-10">
                {practice.title}
              </h3>

              <p className="text-gray-400 font-sans text-sm md:text-base leading-relaxed mb-8 relative z-10 font-light">
                {practice.description}
              </p>

              {practice.isInternal ? (
                <Link
                  to={practice.link}
                  className="inline-flex items-center text-[#A07A41] text-xs uppercase tracking-widest font-semibold pb-1 border-b border-transparent group-hover:border-[#A07A41]/30 transition-all duration-300 relative z-10"
                >
                  Learn More
                  <ArrowRight className="h-4 w-4 ml-2 opacity-50 group-hover:opacity-100 transform -translate-x-2 group-hover:translate-x-1 transition-all duration-500" />
                </Link>
              ) : (
                <a
                  href={practice.link}
                  className="inline-flex items-center text-[#A07A41] text-xs uppercase tracking-widest font-semibold pb-1 border-b border-transparent group-hover:border-[#A07A41]/30 transition-all duration-300 relative z-10"
                >
                  Learn More
                  <ArrowRight className="h-4 w-4 ml-2 opacity-50 group-hover:opacity-100 transform -translate-x-2 group-hover:translate-x-1 transition-all duration-500" />
                </a>
              )}
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default PracticeAreas;
