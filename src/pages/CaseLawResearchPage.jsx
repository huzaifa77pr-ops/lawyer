import React, { useEffect, useState, useRef } from 'react';
import { 
  ArrowRight, BookOpen, Clock, Gavel, Zap, Database, FileText, CheckCircle, Scale, Search, FileCheck, ClipboardCheck, Send
} from 'lucide-react';

const CaseLawResearchPage = () => {
  const [section2Visible, setSection2Visible] = useState(false);
  const [section3Visible, setSection3Visible] = useState(false);
  const [section4Visible, setSection4Visible] = useState(false);
  const [section5Visible, setSection5Visible] = useState(false);
  const section2Ref = useRef(null);
  const section3Ref = useRef(null);
  const section4Ref = useRef(null);
  const section5Ref = useRef(null);

  useEffect(() => {
    window.scrollTo(0, 0);

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            if (entry.target === section2Ref.current) setSection2Visible(true);
            if (entry.target === section3Ref.current) setSection3Visible(true);
            if (entry.target === section4Ref.current) setSection4Visible(true);
            if (entry.target === section5Ref.current) setSection5Visible(true);
          }
        });
      },
      { threshold: 0.2 }
    );

    if (section2Ref.current) observer.observe(section2Ref.current);
    if (section3Ref.current) observer.observe(section3Ref.current);
    if (section4Ref.current) observer.observe(section4Ref.current);
    if (section5Ref.current) observer.observe(section5Ref.current);

    return () => observer.disconnect();
  }, []);

  return (
    <div className="min-h-screen bg-[#2A454E] flex flex-col overflow-hidden text-white">
      <main className="flex-grow">
        
        {/* Hero Section */}
        <section 
          className="relative min-h-screen flex items-center pt-32 lg:pt-40 pb-24 overflow-hidden"
        >
          {/* Background Image with Overlay */}
          <div className="absolute inset-0 z-0">
            <img 
              src="/ser.jpg" 
              alt="Legal Research Background" 
              className="w-full h-full object-cover opacity-60"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-[#2A454E]/90 via-[#2A454E]/60 to-[#2A454E]"></div>
          </div>

          <div className="relative z-10 px-4 sm:px-6 lg:px-8 max-w-[90rem] mx-auto w-full">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <div className="flex items-center gap-4 mb-6 animate-fade-in-left">
                  <div className="h-[1px] w-10 bg-[#A07A41]"></div>
                  <span className="text-[#A07A41] uppercase tracking-[0.4em] text-[10px] font-bold font-sans">UK Legal Research</span>
                </div>
                
                <h1 className="text-3xl md:text-5xl lg:text-6xl font-serif font-bold text-white leading-tight mb-6 tracking-tight overflow-hidden">
                  <span className="block animate-fade-in-left">UK Legal & Case Law</span>
                  <span className="block italic font-light text-[#A07A41] animate-fade-in-right animation-delay-200">Research Services</span>
                  <span className="block animate-fade-in-left animation-delay-300">for Solicitors & Law Firms</span>
                </h1>
                
                <p className="text-gray-300 text-base md:text-lg font-sans font-light leading-relaxed max-w-xl mb-10 border-l-2 border-[#A07A41]/30 pl-5 animate-fade-in-left animation-delay-400">
                  Precise, citation-backed legal research across UK jurisdictions — delivered fast, reliable, and litigation-ready.
                </p>

                <div className="space-y-5 mb-10">
                  {[
                    { icon: Gavel, text: "UK Case Law Analysis (Supreme Court, High Court, Tribunal)", anim: 'animate-fade-in-right', delay: 'animation-delay-500' },
                    { icon: BookOpen, text: "Statutory Interpretation & Legal Opinions", anim: 'animate-fade-in-left', delay: 'animation-delay-600' },
                    { icon: Clock, text: "Fast Turnaround (24–72 hrs)", anim: 'animate-fade-in-right', delay: 'animation-delay-700' }
                  ].map((point, index) => (
                    <div key={index} className={`flex items-center gap-3.5 group ${point.anim} ${point.delay}`}>
                      <div className="p-1.5 bg-[#A07A41]/10 rounded-lg border border-[#A07A41]/20 group-hover:bg-[#A07A41] transition-colors duration-300">
                        <point.icon className="h-4 w-4 text-[#A07A41] group-hover:text-[#050505] transition-colors duration-300" />
                      </div>
                      <span className="text-gray-200 text-base font-sans font-light">{point.text}</span>
                    </div>
                  ))}
                </div>

                <div className="flex flex-wrap gap-5 animate-fade-in-left animation-delay-700">
                  <a 
                    href="/#contact" 
                    className="group relative flex items-center justify-center gap-3 px-8 py-4 bg-[#1B2D33] border border-white/10 text-white font-bold tracking-widest uppercase text-xs md:text-sm rounded transition-all duration-300 hover:bg-[#A07A41] shadow-[0_0_20px_rgba(0,0,0,0.1)] overflow-hidden"
                  >
                    <span className="relative z-10">Request Research Brief</span>
                    <ArrowRight className="h-4 w-4 relative z-10 transform group-hover:translate-x-1 transition-transform duration-300" />
                  </a>
                </div>
              </div>

              {/* Decorative side element - Image coming from Right */}
              <div className="hidden lg:block relative animate-fade-in-right animation-delay-500">
                <div className="relative">
                  <div className="absolute -inset-4 bg-[#A07A41]/10 blur-3xl rounded-full"></div>
                  <div className="relative aspect-square max-w-sm ml-auto border border-[#A07A41]/20 rounded-2xl p-1 bg-[#16272D]/50 backdrop-blur-xl overflow-hidden group">
                    <img 
                      src="/ser.jpg" 
                      alt="UK Legal Research" 
                      className="w-full h-full object-cover rounded-xl grayscale group-hover:grayscale-0 transition-all duration-1000 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#2A454E] to-transparent opacity-60"></div>
                    <div className="absolute bottom-6 left-6 right-6">
                      <div className="p-6 bg-[#2A454E]/60 backdrop-blur-md border border-white/10 rounded-xl">
                        <div className="flex items-center gap-3 mb-3">
                          <Zap className="h-5 w-5 text-[#A07A41]" />
                          <span className="text-white font-serif text-xl font-bold uppercase tracking-tight">Litigation Ready</span>
                        </div>
                        <p className="text-gray-300 text-xs font-sans font-light leading-relaxed">
                          Expert analysis for complex legal challenges in all UK jurisdictions.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Section 2: Overview */}
        <section ref={section2Ref} className="relative py-24 lg:py-32 bg-[#2A454E] overflow-hidden border-t border-white/10">
          <div className="relative z-10 px-4 sm:px-6 lg:px-8 max-w-[90rem] mx-auto">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              
              {/* Left Side: Images with corner entrances */}
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-4">
                  <div className={`aspect-[4/5] rounded-2xl overflow-hidden border border-white/10 group ${section2Visible ? 'animate-fade-in-top-left' : 'opacity-0'}`}>
                    <img 
                      src="https://images.unsplash.com/photo-1589829545856-d10d557cf95f?auto=format&fit=crop&q=80" 
                      alt="Legal Work" 
                      className="w-full h-full object-cover grayscale transition-all duration-700 group-hover:grayscale-0 group-hover:scale-105"
                    />
                  </div>
                  <div className={`aspect-square rounded-2xl overflow-hidden border border-white/10 group ${section2Visible ? 'animate-fade-in-bottom-left animation-delay-200' : 'opacity-0'}`}>
                    <img 
                      src="https://images.unsplash.com/photo-1450101499163-c8848c66ca85?auto=format&fit=crop&q=80" 
                      alt="Research" 
                      className="w-full h-full object-cover grayscale transition-all duration-700 group-hover:grayscale-0 group-hover:scale-105"
                    />
                  </div>
                </div>
                <div className="space-y-4 pt-12">
                  <div className={`aspect-square rounded-2xl overflow-hidden border border-white/10 group ${section2Visible ? 'animate-fade-in-top-right animation-delay-300' : 'opacity-0'}`}>
                    <img 
                      src="https://images.unsplash.com/photo-1505664194779-8beaceb93744?auto=format&fit=crop&q=80" 
                      alt="Lawyer" 
                      className="w-full h-full object-cover grayscale transition-all duration-700 group-hover:grayscale-0 group-hover:scale-105"
                    />
                  </div>
                  <div className={`aspect-[4/5] rounded-2xl overflow-hidden border border-white/10 group ${section2Visible ? 'animate-fade-in-bottom-right animation-delay-400' : 'opacity-0'}`}>
                    <img 
                      src="/sca.jpg" 
                      alt="Courts" 
                      className="w-full h-full object-cover grayscale transition-all duration-700 group-hover:grayscale-0 group-hover:scale-105"
                    />
                  </div>
                </div>
              </div>

              {/* Right Side: Content sliding from LEFT as requested */}
              <div className={`${section2Visible ? 'animate-fade-in-left animation-delay-500' : 'opacity-0'}`}>
                <div className="flex items-center gap-4 mb-6">
                  <div className="h-[1px] w-10 bg-[#A07A41]"></div>
                  <span className="text-[#A07A41] uppercase tracking-[0.4em] text-[10px] font-bold font-sans">Strategic Overview</span>
                </div>
                
                <h2 className="text-3xl md:text-5xl font-serif font-bold text-white mb-8 leading-tight">
                  What We <span className="italic font-light text-[#A07A41]">Actually Do.</span>
                </h2>
                
                <div className="space-y-6">
                  <p className="text-gray-300 text-base md:text-lg font-sans font-light leading-relaxed max-w-xl">
                    H&S CO provides structured legal research support tailored to UK solicitors, barristers, and legal teams. We deliver accurate, source-backed insights using authoritative databases like Westlaw UK, LexisNexis UK, and BAIILLII.
                  </p>
                  
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-6">
                    <div className="p-6 bg-[#1B2D33]/40 border border-white/5 rounded-xl hover:border-[#A07A41]/30 transition-colors">
                      <div className="w-10 h-10 bg-[#A07A41]/10 rounded-lg flex items-center justify-center mb-4">
                        <Database className="h-5 w-5 text-[#A07A41]" />
                      </div>
                      <h4 className="text-white font-bold text-sm uppercase tracking-wider mb-2">Authoritative Data</h4>
                      <p className="text-gray-400 text-xs font-sans font-light leading-relaxed">Access to premium platforms for verified citations and precedents.</p>
                    </div>
                    
                    <div className="p-6 bg-[#1B2D33]/40 border border-white/5 rounded-xl hover:border-[#A07A41]/30 transition-colors">
                      <div className="w-10 h-10 bg-[#A07A41]/10 rounded-lg flex items-center justify-center mb-4">
                        <Zap className="h-5 w-5 text-[#A07A41]" />
                      </div>
                      <h4 className="text-white font-bold text-sm uppercase tracking-wider mb-2">Tailored Insight</h4>
                      <p className="text-gray-400 text-xs font-sans font-light leading-relaxed">Research directly aligned with your specific case theory and jurisdiction.</p>
                    </div>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* Section 3: Case Law Research Deep Dive */}
        <section ref={section3Ref} className="relative py-24 lg:py-40 bg-[#2A454E] overflow-hidden border-t border-white/10">
          <div className="relative z-10 px-4 sm:px-6 lg:px-8 max-w-[90rem] mx-auto">
            <div className="grid lg:grid-cols-2 gap-20 items-center">
              
              {/* Left Side: Feature Points */}
              <div>
                <div className={`flex items-center gap-4 mb-8 ${section3Visible ? 'animate-fade-in-left' : 'opacity-0'}`}>
                  <div className="h-[1px] w-12 bg-[#A07A41]"></div>
                  <span className="text-[#A07A41] uppercase tracking-[0.4em] text-xs font-bold font-sans">Research Pillars</span>
                </div>
                
                <h2 className={`text-4xl md:text-6xl font-serif font-bold text-white leading-tight mb-12 ${section3Visible ? 'animate-fade-in-left animation-delay-200' : 'opacity-0'}`}>
                  UK Case Law <br />
                  <span className="italic font-light text-[#A07A41]">Search Architecture.</span>
                </h2>

                <div className="space-y-12">
                  {[
                    { title: "Identification of Leading Cases", text: "Finding the seminal and most recent judgements that define the current legal landscape.", anim: 'animate-fade-in-right' },
                    { title: "Ratio & Obiter Extraction", text: "Isolating the binding legal principles from persuasive judicial commentary.", anim: 'animate-fade-in-left' },
                    { title: "Precedent Mapping", text: "Visualizing case comparisons and tracing the evolution of judicial interpretation.", anim: 'animate-fade-in-right' },
                    { title: "Court Hierarchy Analysis", text: "Contextualizing relevance across the UK Supreme Court, High Court, and specialized Tribunals.", anim: 'animate-fade-in-left' }
                  ].map((item, index) => (
                    <div key={index} className={`flex gap-6 group ${section3Visible ? item.anim : 'opacity-0'}`} style={{ animationDelay: `${(index + 3) * 100}ms` }}>
                      <div className="text-2xl font-serif italic text-white/10 group-hover:text-[#A07A41]/40 transition-colors duration-500 pt-1">
                        {`0${index + 1}`}
                      </div>
                      <div>
                        <h4 className="text-xl font-bold text-white mb-3 tracking-tight font-sans bg-clip-text hover:text-[#A07A41] transition-all cursor-default">
                          {item.title}
                        </h4>
                        <p className="text-gray-400 font-sans font-light leading-relaxed max-w-lg">
                          {item.text}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Right Side: Deliverable Showcase */}
              <div className={`relative ${section3Visible ? 'animate-fade-in-left animation-delay-500' : 'opacity-0'}`}>
                <div className="absolute -inset-10 bg-[#A07A41]/5 blur-[100px] rounded-full pointer-events-none"></div>
                
                <div className="relative bg-[#16272D]/60 backdrop-blur-xl border border-[#A07A41]/20 rounded-3xl p-10 lg:p-16 shadow-2xl overflow-hidden group">
                  <div className="absolute top-0 right-0 p-8 opacity-5">
                    <FileText size={200} className="text-[#A07A41]" />
                  </div>
                  
                  <div className="relative z-10 flex flex-col items-center text-center">
                    <div className="w-20 h-20 bg-[#A07A41]/10 rounded-2xl flex items-center justify-center mb-8 border border-[#A07A41]/20 group-hover:scale-110 transition-transform">
                      <FileText className="h-10 w-10 text-[#A07A41]" />
                    </div>
                    
                    <span className="text-[#A07A41] text-xs font-bold uppercase tracking-[0.3em] mb-4">Official Deliverable</span>
                    <h3 className="text-3xl md:text-4xl font-serif font-bold text-white mb-6 leading-tight">
                      Structured Case <br />
                      <span className="italic font-light text-[#A07A41]">Summary Report.</span>
                    </h3>
                    
                    <p className="text-gray-400 text-sm font-sans font-light leading-relaxed mb-10 max-w-xs mx-auto">
                      Delivered in professional PDF or Doc format, ready for immediate inclusion in your brief or opinion.
                    </p>

                    <div className="flex flex-wrap justify-center gap-4">
                      <div className="flex items-center gap-2 px-4 py-2 bg-white/5 border border-white/10 rounded-full text-[10px] text-gray-300 font-bold tracking-widest uppercase">
                        <CheckCircle className="h-3 w-3 text-[#A07A41]" />
                        PDF Format
                      </div>
                      <div className="flex items-center gap-2 px-4 py-2 bg-white/5 border border-white/10 rounded-full text-[10px] text-gray-300 font-bold tracking-widest uppercase">
                        <CheckCircle className="h-3 w-3 text-[#A07A41]" />
                        DOCX Editable
                      </div>
                    </div>
                  </div>
                </div>

                <div className="mt-12 p-8 bg-[#1B2D33]/40 border-l-4 border-[#A07A41] rounded-r-xl">
                  <p className="text-gray-300 font-sans italic font-light leading-relaxed">
                    "We deliver the clarity needed to win complex legal arguments, ensuring every precedent cited is iron-clad and current."
                  </p>
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* Section 4: Statutory Law & Legal Opinions */}
        <section ref={section4Ref} className="relative py-24 lg:py-40 bg-[#2A454E] overflow-hidden border-t border-white/10">
          <div className="relative z-10 px-4 sm:px-6 lg:px-8 max-w-[90rem] mx-auto">
            <div className="grid lg:grid-cols-2 gap-20 items-center">
              
              {/* Left Side: Visual Statutory Stack */}
              <div className="relative order-2 lg:order-1">
                <div className="grid grid-cols-2 gap-6">
                  <div className="space-y-6 pt-12">
                    <div className={`p-8 bg-[#16272D]/60 backdrop-blur-xl border border-white/10 rounded-2xl group hover:border-[#A07A41]/40 transition-all duration-500 ${section4Visible ? 'animate-fade-in-down' : 'opacity-0'}`}>
                      <Scale className="h-10 w-10 text-[#A07A41] mb-6 group-hover:scale-110 transition-transform" />
                      <h4 className="text-white font-bold text-lg mb-2">Legislative Tracking</h4>
                      <p className="text-gray-400 text-xs font-sans font-light leading-relaxed">Analyzing the evolution of UK Acts and their current legal standing.</p>
                    </div>
                    <div className={`p-8 bg-[#1B2D33]/40 border border-white/10 rounded-2xl group hover:border-[#A07A41]/40 transition-all duration-500 ${section4Visible ? 'animate-fade-in-up animation-delay-200' : 'opacity-0'}`}>
                      <Search className="h-10 w-10 text-[#A07A41] mb-6 group-hover:scale-110 transition-transform" />
                      <h4 className="text-white font-bold text-lg mb-2">Complex Clause Analysis</h4>
                      <p className="text-gray-400 text-xs font-sans font-light leading-relaxed">Deconstructing intricate statutory language for case-specific clarity.</p>
                    </div>
                  </div>
                  <div className="space-y-6">
                    <div className={`p-8 bg-[#1B2D33]/40 border border-white/10 rounded-2xl group hover:border-[#A07A41]/40 transition-all duration-500 ${section4Visible ? 'animate-fade-in-down animation-delay-300' : 'opacity-0'}`}>
                      <FileCheck className="h-10 w-10 text-[#A07A41] mb-6 group-hover:scale-110 transition-transform" />
                      <h4 className="text-white font-bold text-lg mb-2">Regulatory Insight</h4>
                      <p className="text-gray-400 text-xs font-sans font-light leading-relaxed">Navigating UK statutory instruments and regulatory frameworks.</p>
                    </div>
                    <div className={`p-8 bg-[#16272D]/60 backdrop-blur-xl border border-white/10 rounded-2xl group hover:border-[#A07A41]/40 transition-all duration-500 ${section4Visible ? 'animate-fade-in-up animation-delay-400' : 'opacity-0'}`}>
                      <BookOpen className="h-10 w-10 text-[#A07A41] mb-6 group-hover:scale-110 transition-transform" />
                      <h4 className="text-white font-bold text-lg mb-2">Legal Opinion Drafting</h4>
                      <p className="text-gray-400 text-xs font-sans font-light leading-relaxed">Synthesizing findings into persuasive, citation-backed legal opinions.</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Right Side: Content */}
              <div className={`order-1 lg:order-2 ${section4Visible ? 'animate-fade-in-right' : 'opacity-0'}`}>
                <div className="flex items-center gap-4 mb-8">
                  <div className="h-[1px] w-12 bg-[#A07A41]"></div>
                  <span className="text-[#A07A41] uppercase tracking-[0.4em] text-xs font-bold font-sans">Primary Legislation</span>
                </div>
                
                <h2 className="text-4xl md:text-6xl font-serif font-bold text-white leading-tight mb-8">
                  Statutory Interpretation & <br />
                  <span className="italic font-light text-[#A07A41]">Regulatory Analysis.</span>
                </h2>

                <p className="text-gray-300 text-base md:text-lg font-sans font-light leading-relaxed mb-10 border-l-2 border-[#A07A41]/30 pl-6">
                  Beyond case law, your strategy often hinges on the precise interpretation of Acts and SIs. We provide in-depth statutory tracking to ensure your case is built on the most current version of the law.
                </p>

                <div className="space-y-6 mb-12">
                  <div className="flex items-center gap-4 p-5 bg-white/5 rounded-xl border border-white/10 group cursor-default">
                    <div className="w-1.5 h-1.5 bg-[#A07A41] rounded-full group-hover:scale-[2] transition-transform"></div>
                    <p className="text-gray-300 font-sans font-light">Analysis of UK Acts of Parliament & Statutory Instruments.</p>
                  </div>
                  <div className="flex items-center gap-4 p-5 bg-white/5 rounded-xl border border-white/10 group cursor-default">
                    <div className="w-1.5 h-1.5 bg-[#A07A41] rounded-full group-hover:scale-[2] transition-transform"></div>
                    <p className="text-gray-300 font-sans font-light">Historical legislative tracking and amendment verification.</p>
                  </div>
                  <div className="flex items-center gap-4 p-5 bg-white/5 rounded-xl border border-white/10 group cursor-default">
                    <div className="w-1.5 h-1.5 bg-[#A07A41] rounded-full group-hover:scale-[2] transition-transform"></div>
                    <p className="text-gray-300 font-sans font-light">Drafting of meticulous legal opinions for solicitor review.</p>
                  </div>
                </div>

                <div className="flex items-center">
                  <div className="flex -space-x-3">
                    {[1,2,3].map((i) => (
                      <div key={i} className="w-12 h-12 rounded-full border-2 border-[#2A454E] bg-[#1B2D33] overflow-hidden">
                        <img 
                          src={`https://images.unsplash.com/photo-${i === 1 ? '1507003211169-0a1dd7228f2d' : i === 2 ? '1573496359142-b8d87734a5a2' : '1500648767791-00dcc994a43e'}?auto=format&fit=crop&q=80`} 
                          alt="Legal Team member" 
                          className="w-full h-full object-cover"
                        />
                      </div>
                    ))}
                  </div>
                  <div className="ml-6">
                    <p className="text-white font-bold text-sm">Trusted by 200+ Solicitors</p>
                    <p className="text-gray-400 text-xs">For high-priority legislative research.</p>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* Section 5: Research Workflow & Final CTA */}
        <section ref={section5Ref} className="relative py-20 lg:py-40 bg-[#2A454E] overflow-hidden border-t border-white/10">
          {/* Decorative radial glow */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-[#A07A41]/5 blur-[120px] rounded-full pointer-events-none"></div>

          <div className="relative z-10 px-4 sm:px-6 lg:px-8 max-w-[90rem] mx-auto text-center">
            <div className={`mb-12 md:mb-20 ${section5Visible ? 'animate-fade-in-up' : 'opacity-0'}`}>
              <div className="flex items-center justify-center gap-3 md:gap-4 mb-6">
                <div className="h-[1px] w-8 md:w-12 bg-[#A07A41]"></div>
                <span className="text-[#A07A41] uppercase tracking-[0.2em] md:tracking-[0.4em] text-[10px] md:text-xs font-bold font-sans">Our Methodology</span>
                <div className="h-[1px] w-8 md:w-12 bg-[#A07A41]"></div>
              </div>
              
              <h2 className="text-3xl md:text-5xl lg:text-6xl font-serif font-bold text-white leading-tight mb-8">
                The H&S CO. Research <br />
                <span className="italic font-light text-[#A07A41]">Analytical Workflow.</span>
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12 lg:gap-16 relative">
              {/* Step 01 */}
              <div className={`relative px-6 py-10 md:px-8 md:py-12 bg-[#16272D]/60 backdrop-blur-xl border border-white/5 rounded-3xl group hover:border-[#A07A41]/40 transition-all duration-500 ${section5Visible ? 'animate-fade-in-left' : 'opacity-0'}`}>
                <div className="absolute top-0 right-0 p-6 text-3xl md:text-4xl font-serif italic text-white/5 group-hover:text-[#A07A41]/20 transition-colors">01</div>
                <div className="w-14 h-14 md:w-16 md:h-16 bg-[#A07A41]/10 rounded-2xl flex items-center justify-center mb-8 border border-[#A07A41]/20 group-hover:bg-[#A07A41] transition-all duration-500 mx-auto">
                  <ClipboardCheck className="h-7 w-7 md:h-8 md:w-8 text-[#A07A41] group-hover:text-[#050505] transition-colors" />
                </div>
                <h4 className="text-white font-bold text-lg md:text-xl mb-4 tracking-tight">Secure Instruction</h4>
                <p className="text-gray-400 text-xs md:text-sm font-sans font-light leading-relaxed">
                  Provide your specific case brief or legal research instruction via our encrypted portal or secure correspondence.
                </p>
              </div>

              {/* Step 02 */}
              <div className={`relative px-6 py-10 md:px-8 md:py-12 bg-[#1B2D33]/40 border border-white/5 rounded-3xl group hover:border-[#A07A41]/40 transition-all duration-500 ${section5Visible ? 'animate-fade-in-up animation-delay-200' : 'opacity-0'}`}>
                <div className="absolute top-0 right-0 p-6 text-3xl md:text-4xl font-serif italic text-white/5 group-hover:text-[#A07A41]/20 transition-colors">02</div>
                <div className="w-14 h-14 md:w-16 md:h-16 bg-[#A07A41]/10 rounded-2xl flex items-center justify-center mb-8 border border-[#A07A41]/20 group-hover:bg-[#A07A41] transition-all duration-500 mx-auto">
                  <Search className="h-7 w-7 md:h-8 md:w-8 text-[#A07A41] group-hover:text-[#050505] transition-colors" />
                </div>
                <h4 className="text-white font-bold text-lg md:text-xl mb-4 tracking-tight">Expert Analysis</h4>
                <p className="text-gray-400 text-xs md:text-sm font-sans font-light leading-relaxed">
                  Our team leverages Westlaw and LexisNexis to identify definitive precedents and complex statutory interpretations.
                </p>
              </div>

              {/* Step 03 */}
              <div className={`relative px-6 py-10 md:px-8 md:py-12 bg-[#16272D]/60 backdrop-blur-xl border border-white/5 rounded-3xl group hover:border-[#A07A41]/40 transition-all duration-500 ${section5Visible ? 'animate-fade-in-right' : 'opacity-0'} animation-delay-400`}>
                <div className="absolute top-0 right-0 p-6 text-3xl md:text-4xl font-serif italic text-white/5 group-hover:text-[#A07A41]/20 transition-colors">03</div>
                <div className="w-14 h-14 md:w-16 md:h-16 bg-[#A07A41]/10 rounded-2xl flex items-center justify-center mb-8 border border-[#A07A41]/20 group-hover:bg-[#A07A41] transition-all duration-500 mx-auto">
                  <Send className="h-7 w-7 md:h-8 md:w-8 text-[#A07A41] group-hover:text-[#050505] transition-colors" />
                </div>
                <h4 className="text-white font-bold text-lg md:text-xl mb-4 tracking-tight">Rapid Delivery</h4>
                <p className="text-gray-400 text-xs md:text-sm font-sans font-light leading-relaxed">
                  Receive a structured, litigation-ready PDF report with full legal citations, delivered within a 24-72 hour window.
                </p>
              </div>
            </div>

            {/* Final CTA Area */}
            <div className={`mt-16 md:mt-24 ${section5Visible ? 'animate-fade-in-up animation-delay-600' : 'opacity-0'}`}>
              <div className="max-w-3xl mx-auto p-8 md:p-16 bg-white/5 border border-white/10 rounded-3xl backdrop-blur-md">
                <h3 className="text-2xl md:text-4xl font-serif font-bold text-white mb-6">
                  Ready to Delegate Your <br />
                  <span className="italic font-light text-[#A07A41]">Legal Research Challenge?</span>
                </h3>
                <p className="text-gray-400 text-sm md:text-base font-sans font-light leading-relaxed mb-10 max-w-xl mx-auto">
                  Save billable hours and build stronger arguments with premium research support from H&S CO.
                </p>
                <div className="flex justify-center">
                  <a 
                    href="/#contact" 
                    className="group relative flex items-center justify-center gap-3 w-full sm:w-auto px-8 md:px-12 py-4 md:py-5 bg-[#1B2D33] border border-[#A07A41]/30 text-white font-bold tracking-widest uppercase text-xs md:text-sm rounded shadow-2xl transition-all duration-300 hover:bg-[#A07A41] hover:text-[#050505] overflow-hidden"
                  >
                    <span className="relative z-10 text-center">Request Research Brief Now</span>
                    <ArrowRight className="h-4 md:h-5 w-4 md:w-5 relative z-10 transform group-hover:translate-x-1 transition-transform duration-300" />
                  </a>
                </div>
                <div className="mt-8 flex flex-wrap items-center justify-center gap-4 md:gap-8 text-gray-500 text-[8px] md:text-[10px] font-bold tracking-[0.1em] md:tracking-widest uppercase italic">
                  <span>Elite Standards</span>
                  <div className="hidden sm:block w-1 h-1 bg-[#A07A41] rounded-full"></div>
                  <span>UK Jurisdiction</span>
                  <div className="hidden sm:block w-1 h-1 bg-[#A07A41] rounded-full"></div>
                  <span>Rapid Turnaround</span>
                </div>
              </div>
            </div>
          </div>
        </section>

      </main>
    </div>
  );
};

export default CaseLawResearchPage;
