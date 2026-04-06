import React, { useEffect, useState, useRef } from 'react';
import { 
  ArrowRight, Scale, Gavel, Search, CheckCircle, Zap, Database, 
  Shield, FileText, ChevronDown, Award,
  Target, ShieldAlert, ClipboardCheck, Crosshair, Layers, 
  Map, FileSearch
} from 'lucide-react';

const LegalIssueIdentificationPage = () => {
  const [activeFaq, setActiveFaq] = useState(null);
  const [visibleSections, setVisibleSections] = useState({
    hero: false,
    intro: false,
    definition: false,
    coreServices: false,
    methodology: false,
    tools: false,
    practiceAreas: false,
    deliverables: false,
    whyChoose: false,
    faq: false,
    cta: false
  });

  const sectionRefs = {
    hero: useRef(null),
    intro: useRef(null),
    definition: useRef(null),
    coreServices: useRef(null),
    methodology: useRef(null),
    tools: useRef(null),
    practiceAreas: useRef(null),
    deliverables: useRef(null),
    whyChoose: useRef(null),
    faq: useRef(null),
    cta: useRef(null)
  };

  useEffect(() => {
    window.scrollTo(0, 0);

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            const section = entry.target.getAttribute('data-section');
            if (section) {
              setVisibleSections(prev => ({
                ...prev,
                [section]: true
              }));
            }
          }
        });
      },
      { threshold: 0.1 }
    );

    Object.values(sectionRefs).forEach(ref => {
      if (ref.current) observer.observe(ref.current);
    });

    return () => observer.disconnect();
  }, []);

  const faqs = [
    {
      q: "What is legal issue identification?",
      a: "It is the rigorous process of analyzing raw case facts to determine and isolate the key legal questions that must be addressed in a dispute, case, or legal matter."
    },
    {
      q: "Why is issue identification important?",
      a: "Accurately identifying correct legal issues from the outset forms the essential foundation for subsequent legal research, case strategy, and building compelling legal arguments."
    },
    {
      q: "Do you support complex cases?",
      a: "Yes, we specialize in multi-issue scenarios where complex operational, factual, and legal domains overlap, requiring precise extraction of actionable questions."
    },
    {
      q: "How fast is delivery?",
      a: "Depending on case complexity, we typically provide a structured legal issue framework within 24–72 hours to keep your strategy moving swiftly."
    }
  ];

  const coreServices = [
    {
      id: "4.1",
      title: "Fact Analysis & Breakdown",
      desc: "Review case facts in detail to separate relevant from irrelevant information and identify elements of legal significance.",
      deliverable: "Structured fact analysis document",
      icon: FileSearch,
      anim: "animate-fade-in-top-left"
    },
    {
      id: "4.2",
      title: "Key Legal Issues Extraction",
      desc: "Extract primary and supporting legal issues and frame them into clear, actionable legal questions for attorneys.",
      deliverable: "Issue list with legal framing",
      icon: Target,
      anim: "animate-fade-in-up"
    },
    {
      id: "4.3",
      title: "Issue Framing for Research",
      desc: "Convert issues into targeted research questions aligned with relevant areas of law, preparing the ground for case law and statutory exploration.",
      deliverable: "Research-ready issue framework",
      icon: Crosshair,
      anim: "animate-fade-in-top-right"
    },
    {
      id: "4.4",
      title: "Case Strategy Support",
      desc: "Identify the strongest legal angles from isolated issues, highlight potential factual weaknesses, and support robust argument development.",
      deliverable: "Issue-based strategy notes",
      icon: Shield,
      anim: "animate-fade-in-bottom-left"
    },
    {
      id: "4.5",
      title: "Multi-Issue Case Structuring",
      desc: "Organize overlapping legal issues logically and prioritize them based on strategic importance for complex litigation or advisory work.",
      deliverable: "Structured issue map",
      icon: Layers,
      anim: "animate-fade-in-bottom-right"
    }
  ];

  return (
    <div className="min-h-screen bg-[#2A454E] flex flex-col overflow-x-hidden text-white font-sans">
      <main className="flex-grow">
        
        {/* 1. Hero Section */}
        <section 
          ref={sectionRefs.hero}
          data-section="hero"
          className="relative min-h-[100vh] flex items-center pt-32 pb-24 overflow-hidden"
        >
          <div className="absolute inset-0 z-0 opacity-50">
             <img src="/leg.jpg" alt="Legal Issue Identification" className="w-full h-full object-cover object-center" />
             <div className="absolute inset-0 bg-gradient-to-t from-[#2A454E] via-[#2A454E]/80 to-[#16272D]/60"></div>
          </div>

          <div className="relative z-10 px-4 sm:px-6 lg:px-8 max-w-[90rem] mx-auto w-full">
            <div className="max-w-4xl">
              <div className={`flex items-center gap-4 mb-6 transition-all duration-1000 ${visibleSections.hero ? 'animate-fade-in-left' : 'opacity-0'}`}>
                <div className="h-[1px] w-12 bg-[#A07A41]"></div>
                <span className="text-[#A07A41] uppercase tracking-[0.4em] text-[10px] font-bold">UK Solicitors & Law Firms</span>
              </div>
              
              <h1 className={`text-4xl md:text-5xl lg:text-7xl font-serif font-bold text-white leading-tight mb-8 tracking-tight transition-all duration-1000 ${visibleSections.hero ? 'opacity-100' : 'opacity-0'}`}>
                <span className="block animate-fade-in-top-left">Legal Issue</span>
                <span className="block italic font-light text-[#A07A41] animate-fade-in-up animation-delay-200">Identification Services</span>
                <span className="block animate-fade-in-bottom-right animation-delay-300 text-3xl md:text-4xl lg:text-5xl mt-2">For UK Legal Teams</span>
              </h1>
              
              <p className={`text-gray-300 text-base md:text-xl font-sans font-light leading-relaxed max-w-2xl mb-10 border-l-2 border-[#A07A41]/30 pl-8 transition-all duration-1000 ${visibleSections.hero ? 'animate-fade-in-left animation-delay-400' : 'opacity-0'}`}>
                Accurately identify key legal issues from complex facts to build stronger case strategies and unassailable legal arguments.
              </p>

              <div className={`grid sm:grid-cols-3 gap-4 mb-12 transition-all duration-1000 ${visibleSections.hero ? 'animate-fade-in-bottom-left animation-delay-500' : 'opacity-0'}`}>
                {[
                  { icon: Target, text: "Clear Issue Spotting" },
                  { icon: Layers, text: "Structured Problem Breakdown" },
                  { icon: Gavel, text: "Foundation for legal arguments" }
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-4 p-4 bg-[#1B2D33]/60 border border-white/10 rounded-2xl backdrop-blur-sm">
                    <item.icon className="h-5 w-5 text-[#A07A41]" />
                    <span className="text-xs font-medium tracking-wide text-gray-200">{item.text}</span>
                  </div>
                ))}
              </div>

              <div className={`transition-all duration-1000 ${visibleSections.hero ? 'animate-fade-in-up animation-delay-600' : 'opacity-0'}`}>
                <a href="#contact" className="group relative inline-flex items-center gap-4 px-10 py-5 bg-[#A07A41] text-black font-bold uppercase tracking-widest text-xs rounded-xl transition-all duration-500 hover:bg-white hover:scale-105 shadow-xl">
                  <span>Submit Your Case Details</span>
                  <ArrowRight className="h-5 w-5 group-hover:translate-x-2 transition-transform" />
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* 2. Introduction / Overview */}
        <section 
          ref={sectionRefs.intro}
          data-section="intro"
          className="relative py-24 lg:py-40 bg-[#1B2D33] overflow-hidden"
        >
          <div className="absolute top-0 right-0 p-32 opacity-[0.02] pointer-events-none">
            <Scale size={400} className="text-[#A07A41] rotate-12" />
          </div>
          <div className="px-4 sm:px-6 lg:px-8 max-w-[90rem] mx-auto z-10 relative">
            <div className={`grid lg:grid-cols-2 gap-20 items-center ${visibleSections.intro ? 'animate-fade-in-bottom-left' : 'opacity-0'}`}>
              <div className="relative group">
                <div className="aspect-[4/5] rounded-[3rem] overflow-hidden border border-[#A07A41]/20 relative bg-[#16272D]">
                   <img src="/3hero.jpg" alt="Case Strategy" className="w-full h-full object-cover object-center transition-all duration-1000 group-hover:scale-110 grayscale group-hover:grayscale-0" />
                   <div className="absolute inset-0 bg-gradient-to-t from-[#1B2D33] via-transparent to-transparent"></div>
                </div>
                <div className="absolute -bottom-10 -right-10 bg-[#2A454E] p-8 rounded-3xl border border-white/10 shadow-2xl animate-fade-in-top-left animation-delay-500 hidden sm:block">
                  <div className="flex items-center gap-4">
                    <Crosshair className="h-10 w-10 text-[#A07A41]" />
                    <div>
                      <p className="text-white font-bold text-sm">Strategic Focus</p>
                      <p className="text-gray-400 text-xs">Clarity from complexity</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className={`${visibleSections.intro ? 'animate-fade-in-top-right' : 'opacity-0'}`}>
                <div className="flex items-center gap-4 mb-8">
                  <div className="h-[1px] w-12 bg-[#A07A41]"></div>
                  <span className="text-[#A07A41] uppercase tracking-[0.4em] text-xs font-bold">Overview</span>
                </div>
                <h2 className="text-3xl md:text-5xl font-serif font-bold text-white leading-tight mb-10">
                  Isolate Critical <br />
                  <span className="italic font-light text-[#A07A41]">Legal Angles.</span>
                </h2>
                <div className="space-y-8">
                  <p className="text-gray-300 text-base md:text-lg font-sans font-light leading-relaxed">
                    H&S CO provides professional legal issue identification services for UK solicitors, law firms, and legal teams. We rigorously analyze factual scenarios to <span className="text-white font-medium italic underline decoration-[#A07A41]/50 underline-offset-4">extract core legal issues</span> that form the strict foundation of robust legal research and overall case strategy.
                  </p>
                  
                  <p className="text-gray-300 text-base md:text-lg font-sans font-light leading-relaxed">
                    Using authoritative, trusted resources like Westlaw UK and LexisNexis UK, we ensure every identified issue is legally relevant, precise, and actionable for your team.
                  </p>
                  
                  <div className="p-8 bg-[#2A454E]/40 backdrop-blur-xl border-l-4 border-[#A07A41] rounded-r-2xl relative overflow-hidden group">
                    <div className="relative z-10 flex items-start gap-4">
                       <Zap className="h-6 w-6 text-[#A07A41] shrink-0 mt-1" />
                       <div>
                         <p className="text-lg md:text-xl font-serif italic text-white leading-tight">
                           Goal: <span className="text-[#A07A41] font-bold">Turn complex facts into clear legal questions.</span>
                         </p>
                       </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 3. What is Legal Issue Identification */}
        <section 
          ref={sectionRefs.definition}
          data-section="definition"
          className="relative py-28 bg-[#2A454E] overflow-hidden border-y border-white/5"
        >
          <div className="absolute top-0 right-1/4 w-[1px] h-full bg-gradient-to-b from-transparent via-white/10 to-transparent"></div>
          <div className="absolute top-0 left-1/4 w-[1px] h-full bg-gradient-to-b from-transparent via-white/10 to-transparent"></div>
          
          <div className={`px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto text-center relative z-10 ${visibleSections.definition ? 'animate-fade-in-up' : 'opacity-0'}`}>
            <span className="text-[#A07A41] uppercase tracking-[0.4em] text-[10px] font-bold mb-8 block">The Core Principle</span>
            <div className="relative">
              <span className="absolute -top-10 -left-10 text-[120px] font-serif italic text-white/5 leading-none">"</span>
              <h2 className="text-white/90 font-serif text-3xl md:text-5xl font-light mb-8 leading-snug italic relative z-10">
                Legal issue identification is the <span className="text-white font-medium">process of analyzing facts</span> to determine the key legal questions that must be addressed in a case or legal matter.
              </h2>
              <span className="absolute -bottom-20 -right-10 text-[120px] font-serif italic text-[#A07A41]/10 leading-none">"</span>
            </div>
          </div>
        </section>

        {/* 4. Core Services */}
        <section 
          ref={sectionRefs.coreServices}
          data-section="coreServices"
          className="relative py-24 lg:py-40 bg-[#1B2D33] overflow-hidden"
        >
          <div className="absolute inset-0 opacity-[0.02] bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-white via-[#16272D] to-[#16272D]"></div>
          
          <div className="px-4 sm:px-6 lg:px-8 max-w-[90rem] mx-auto relative z-10">
            <div className="mb-24 flex flex-col md:flex-row md:items-end justify-between gap-8">
              <div className="max-w-3xl">
                <span className="text-[#A07A41] uppercase tracking-[0.4em] text-xs font-bold mb-4 block">Where We Deliver Value</span>
                <h2 className="text-3xl md:text-6xl font-serif font-bold text-white tracking-tight">Structured <span className="italic font-light text-[#A07A41]">Analysis.</span></h2>
              </div>
              <p className="text-gray-400 max-w-md text-sm md:text-base border-l border-[#A07A41]/30 pl-6 h-fit">
                We break down dense factual matrices into discrete, research-ready legal questions, setting optimal parameters for your litigation strategy.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {coreServices.map((service, i) => (
                <div 
                  key={i} 
                  className={`group relative p-10 bg-[#2A454E]/40 border border-white/5 rounded-3xl hover:-translate-y-2 hover:bg-[#2A454E]/60 hover:border-[#A07A41]/30 transition-all duration-500 overflow-hidden ${visibleSections.coreServices ? service.anim : 'opacity-0'}`}
                  style={{ animationDelay: `${i * 150}ms` }}
                >
                  <div className="absolute -bottom-10 -right-10 opacity-[0.03] group-hover:opacity-[0.1] transition-opacity duration-700 group-hover:scale-150">
                    <service.icon size={150} className="text-[#A07A41]" />
                  </div>
                  
                  <div className="relative z-10 flex flex-col h-full">
                    <div className="flex justify-between items-start mb-8">
                      <div className="w-14 h-14 bg-[#A07A41]/10 rounded-xl flex items-center justify-center group-hover:bg-[#A07A41] transition-colors duration-500">
                        <service.icon className="h-6 w-6 text-[#A07A41] group-hover:text-black transition-colors" />
                      </div>
                      <span className="text-white/20 font-serif italic text-3xl font-bold group-hover:text-[#A07A41]/30 transition-colors">{service.id}</span>
                    </div>
                    
                    <h3 className="text-2xl font-serif font-bold text-white mb-4 leading-tight group-hover:text-[#A07A41] transition-colors">{service.title}</h3>
                    <p className="text-gray-400 font-sans font-light leading-relaxed mb-10 flex-grow">
                      {service.desc}
                    </p>

                    <div className="pt-6 border-t border-white/5 group-hover:border-[#A07A41]/30 transition-colors">
                      <span className="block text-[10px] uppercase tracking-widest text-[#A07A41] mb-2 font-bold flex items-center gap-2">
                        <CheckCircle size={12} /> Deliverable
                      </span>
                      <span className="text-white text-sm font-medium">{service.deliverable}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 5. Research Methodology */}
        <section 
          ref={sectionRefs.methodology}
          data-section="methodology"
          className="relative py-24 lg:py-40 bg-[#2A454E] border-t border-white/5"
        >
          <div className="px-4 sm:px-6 lg:px-8 max-w-[90rem] mx-auto">
            <div className="text-center mb-24">
               <span className="text-[#A07A41] uppercase tracking-[0.4em] text-xs font-bold mb-4 block">Proven Process</span>
               <h2 className="text-3xl md:text-5xl font-serif font-bold text-white mb-6">Execution <span className="italic font-light text-[#A07A41]">Methodology.</span></h2>
            </div>
            
            <div className="relative max-w-5xl mx-auto">
              <div className="absolute left-[50%] top-0 bottom-0 w-[1px] bg-gradient-to-b from-[#A07A41]/0 via-[#A07A41]/50 to-[#A07A41]/0 hidden md:block"></div>
              
              <div className="space-y-12 relative z-10">
                {[
                  { title: "Review factual background", num: "01", align: "right", anim: "animate-fade-in-left" },
                  { title: "Identify relevant legal domains", num: "02", align: "left", anim: "animate-fade-in-right" },
                  { title: "Extract key legal issues", num: "03", align: "right", anim: "animate-fade-in-left" },
                  { title: "Frame issues clearly", num: "04", align: "left", anim: "animate-fade-in-right" },
                  { title: "Deliver structured output", num: "05", align: "right", anim: "animate-fade-in-left" }
                ].map((step, i) => (
                  <div key={i} className={`flex flex-col md:flex-row items-center justify-between gap-8 md:gap-0 ${visibleSections.methodology ? step.anim : 'opacity-0'}`} style={{ animationDelay: `${i * 150}ms` }}>
                    
                    <div className={`w-full md:w-[45%] text-center md:text-${step.align === 'right' ? 'right' : 'left'} ${step.align === 'left' ? 'md:order-3' : 'md:order-1'} p-8 bg-[#1B2D33]/60 border border-white/5 rounded-3xl hover:border-[#A07A41]/40 transition-colors`}>
                       <h4 className="text-xl font-serif font-bold text-white tracking-tight">{step.title}</h4>
                    </div>
                    
                    <div className="hidden md:flex w-[10%] order-2 justify-center">
                       <div className="w-16 h-16 rounded-full bg-[#16272D] border-2 border-[#A07A41] flex items-center justify-center text-[#A07A41] font-serif italic text-xl font-bold z-10 shadow-[0_0_20px_rgba(160,122,65,0.3)]">
                          {step.num}
                       </div>
                    </div>
                    
                    <div className={`hidden md:block w-[45%] ${step.align === 'left' ? 'order-1' : 'order-3'}`}></div>
                    
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* 6. Tools & Legal Sources & 7. Practice Areas */}
        <section 
          ref={sectionRefs.tools}
          data-section="tools"
          className="py-24 lg:py-40 bg-[#1B2D33] border-y border-white/5"
        >
          <div className="px-4 sm:px-6 lg:px-8 max-w-[90rem] mx-auto">
            <div className="grid lg:grid-cols-2 gap-20">
               
               {/* Tools */}
               <div className={`${visibleSections.tools ? 'animate-fade-in-top-left' : 'opacity-0'}`}>
                 <span className="text-[#A07A41] uppercase tracking-[0.4em] text-xs font-bold mb-6 block">Legal Tech</span>
                 <h3 className="text-3xl md:text-5xl font-serif font-bold text-white mb-12 tracking-tight leading-tight">Authority <br/><span className="italic font-light text-[#A07A41]">Engines.</span></h3>
                 <div className="flex flex-col gap-6">
                    {[
                      { name: "Westlaw UK", icon: Database },
                      { name: "LexisNexis UK", icon: Search }
                    ].map((tool, i) => (
                      <div key={i} className="flex items-center gap-6 p-6 bg-[#2A454E]/30 border border-white/5 rounded-2xl hover:bg-[#2A454E]/60 transition-all">
                         <div className="w-16 h-16 rounded-full bg-[#1B2D33] border border-[#A07A41]/30 flex items-center justify-center flex-shrink-0">
                            <tool.icon className="h-6 w-6 text-[#A07A41]" />
                         </div>
                         <h4 className="text-2xl font-serif font-bold text-white">{tool.name}</h4>
                      </div>
                    ))}
                 </div>
               </div>

               {/* Practice Areas */}
               <div className={`${visibleSections.tools ? 'animate-fade-in-bottom-right' : 'opacity-0'} animation-delay-300`}>
                 <span className="text-[#A07A41] uppercase tracking-[0.4em] text-xs font-bold mb-6 block">Targeted Scope</span>
                 <h3 className="text-3xl md:text-5xl font-serif font-bold text-white mb-12 tracking-tight leading-tight">Core <span className="italic font-light text-[#A07A41]">Practice Areas.</span></h3>
                 <div className="flex flex-wrap gap-4">
                    {[
                      "Civil Litigation", 
                      "Contract Law", 
                      "Employment Law", 
                      "Corporate Law", 
                      "Immigration Law"
                    ].map((area, i) => (
                      <div key={i} className="px-8 py-4 bg-[#2A454E]/40 border border-[#A07A41]/20 rounded-full flex items-center gap-3 hover:bg-[#A07A41]/10 transition-all">
                         <Map className="w-4 h-4 text-[#A07A41]" />
                         <span className="text-white font-medium text-sm tracking-wide">{area}</span>
                      </div>
                    ))}
                 </div>
               </div>

            </div>
          </div>
        </section>

        {/* 8. Deliverables */}
        <section 
          ref={sectionRefs.deliverables}
          data-section="deliverables"
          className="relative py-24 lg:py-40 bg-[#2A454E] overflow-hidden"
        >
          <div className="absolute right-0 top-1/2 -translate-y-1/2 w-1/3 aspect-square bg-[#A07A41]/5 rounded-full blur-[120px] pointer-events-none"></div>
          <div className="absolute left-0 bottom-0 w-1/4 aspect-square bg-[#16272D]/50 rounded-full blur-[100px] pointer-events-none"></div>

          <div className="px-4 sm:px-6 lg:px-8 max-w-[90rem] mx-auto z-10 relative">
             <div className="text-center mb-24">
                <span className="text-[#A07A41] uppercase tracking-[0.4em] text-xs font-bold mb-4 block">Tangible Value</span>
                <h3 className="text-3xl md:text-5xl font-serif font-bold text-white mb-6 tracking-tight">Structured <span className="italic font-light text-[#A07A41]">Deliverables.</span></h3>
             </div>
             
             <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-4">
                {[
                  { title: "Legal issue identification report", icon: FileText },
                  { title: "Fact analysis document", icon: ClipboardCheck },
                  { title: "Issue framework for research", icon: Crosshair },
                  { title: "Case structuring notes", icon: Layers },
                  { title: "Strategy support brief", icon: ShieldAlert }
                ].map((item, i) => (
                  <div 
                    key={i} 
                    className={`p-8 bg-[#1B2D33]/40 border border-white/5 rounded-3xl text-center group hover:bg-[#1B2D33] hover:border-[#A07A41]/50 transition-all duration-500 hover:-translate-y-3 ${visibleSections.deliverables ? (i%2===0 ? 'animate-fade-in-top-right' : 'animate-fade-in-bottom-left') : 'opacity-0'}`}
                    style={{ animationDelay: `${i * 100}ms` }}
                  >
                     <div className="w-16 h-16 mx-auto bg-[#2A454E] rounded-full flex items-center justify-center mb-6 group-hover:bg-[#A07A41] transition-colors duration-500">
                        <item.icon className="h-6 w-6 text-[#A07A41] group-hover:text-black transition-colors" />
                     </div>
                     <p className="text-base font-serif font-bold text-white leading-tight">{item.title}</p>
                  </div>
                ))}
             </div>
          </div>
        </section>

        {/* 9. Why Choose H&S CO */}
        <section 
          ref={sectionRefs.whyChoose}
          data-section="whyChoose"
          className="relative py-24 lg:py-32 bg-[#1B2D33] overflow-hidden border-t border-white/5"
        >
          <div className="px-4 sm:px-6 lg:px-8 max-w-[90rem] mx-auto">
             <div className="bg-[#2A454E]/40 border border-[#A07A41]/20 rounded-[3rem] p-10 lg:p-20 relative overflow-hidden">
                <div className="absolute top-0 right-0 p-10 opacity-5"><Award size={200} /></div>
                
                <div className={`text-center mb-16 relative z-10 ${visibleSections.whyChoose ? 'animate-fade-in-down' : 'opacity-0'}`}>
                   <span className="text-[#A07A41] uppercase tracking-[0.4em] text-xs font-bold mb-4 block">H&S Co. Advantage</span>
                   <h2 className="text-3xl md:text-5xl font-serif font-bold text-white">Why Choose <span className="italic font-light text-[#A07A41]">Us.</span></h2>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 relative z-10">
                   {[
                     { title: "Precise Issue Spotting", desc: "Expert extraction from highly convoluted and complex case facts." },
                     { title: "Research-Ready", desc: "Structured outputs that immediately fuel effective legal research." },
                     { title: "UK-Focused Logic", desc: "Deep alignment with UK legal standards and procedural requirements." },
                     { title: "Strategic Foundation", desc: "Building the bedrock for winning legal arguments." }
                   ].map((item, i) => (
                     <div 
                       key={i} 
                       className={`p-8 bg-[#16272D]/60 rounded-3xl border border-white/5 hover:border-[#A07A41]/50 transition-all duration-300 ${visibleSections.whyChoose ? 'animate-fade-in-up' : 'opacity-0'}`}
                       style={{ animationDelay: `${i * 150}ms` }}
                     >
                        <CheckCircle className="text-[#A07A41] h-8 w-8 mb-6" />
                        <h4 className="text-xl font-serif font-bold text-white mb-4 tracking-tight leading-snug">{item.title}</h4>
                        <p className="text-gray-400 font-sans font-light text-sm leading-relaxed">{item.desc}</p>
                     </div>
                   ))}
                </div>
             </div>
          </div>
        </section>

        {/* 10. FAQ Section */}
        <section 
          ref={sectionRefs.faq}
          data-section="faq"
          className="relative py-24 lg:py-40 bg-[#2A454E] overflow-hidden"
        >
          <div className="relative z-10 px-4 sm:px-6 lg:px-8 max-w-[50rem] mx-auto">
            <div className={`text-center mb-24 ${visibleSections.faq ? 'animate-fade-in-top-left' : 'opacity-0'}`}>
              <span className="text-[#A07A41] uppercase tracking-[0.3em] text-[10px] font-bold mb-6 block">Clarification</span>
              <h2 className="text-3xl md:text-5xl font-serif font-bold text-white tracking-tight">Identification <span className="italic font-light text-[#A07A41]">FAQ.</span></h2>
            </div>

            <div className="space-y-4">
              {faqs.map((faq, index) => (
                <div 
                  key={index} 
                  className={`border border-white/10 rounded-2xl bg-[#1B2D33]/40 overflow-hidden ${visibleSections.faq ? (index%2===0 ? 'animate-fade-in-left' : 'animate-fade-in-right') : 'opacity-0'}`} 
                  style={{ animationDelay: `${index * 150}ms` }}
                >
                  <button 
                    onClick={() => setActiveFaq(activeFaq === index ? null : index)}
                    className="w-full p-8 flex items-center justify-between group"
                  >
                    <span className={`text-left text-lg font-serif transition-colors ${activeFaq === index ? 'text-[#A07A41]' : 'text-gray-200'}`}>{faq.q}</span>
                    <div className={`shrink-0 p-2 rounded-full border border-white/10 group-hover:border-[#A07A41] transition-all duration-300 ${activeFaq === index ? 'bg-[#A07A41] border-[#A07A41] rotate-180' : ''}`}>
                      <ChevronDown className={`h-4 w-4 transition-colors ${activeFaq === index ? 'text-black' : 'text-[#A07A41]'}`} />
                    </div>
                  </button>
                  <div className={`transition-all duration-500 ease-in-out px-8 ${activeFaq === index ? 'max-h-96 pb-8 opacity-100' : 'max-h-0 opacity-0 overflow-hidden'}`}>
                    <p className="text-gray-400 text-sm md:text-base font-sans font-light leading-relaxed">{faq.a}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 11. Final CTA */}
        <section 
          ref={sectionRefs.cta}
          data-section="cta"
          className="relative py-24 lg:py-40 bg-[#1B2D33] overflow-hidden border-t border-white/5"
        >
          <div className="absolute inset-x-0 bottom-0 top-1/2 bg-gradient-to-t from-[#16272D]/40 to-transparent"></div>
          <div className="relative z-10 px-4 sm:px-6 lg:px-8 max-w-[90rem] mx-auto text-center">
            <div className={`max-w-5xl mx-auto p-16 lg:p-24 bg-[#2A454E]/60 border border-white/10 rounded-[3rem] backdrop-blur-2xl relative overflow-hidden ${visibleSections.cta ? 'animate-fade-in-bottom-right' : 'opacity-0'}`}>
              <div className="absolute -top-10 -left-10 opacity-[0.03]"><Target size={250} className="text-[#A07A41]" /></div>
              
              <span className="text-[#A07A41] uppercase tracking-[0.5em] text-[10px] font-bold mb-10 block">Accelerate Your Strategy</span>
              <h2 className="text-3xl md:text-6xl font-serif font-bold text-white mb-10 leading-tight">
                Clarify Complex Facts <br />
                <span className="italic font-light text-[#A07A41]">Instantly.</span>
              </h2>
              <p className="text-gray-300 text-base md:text-xl font-sans font-light leading-relaxed mb-16 max-w-3xl mx-auto border-l-2 border-[#A07A41]/30 px-8">
                 Submit your case details and let our experts extract the critical legal issues to focus your subsequent research.
              </p>
              
              <div className="flex flex-col sm:flex-row justify-center items-center gap-8">
                <a href="#contact" className="group relative flex items-center justify-center gap-4 px-12 py-6 bg-[#A07A41] text-black font-bold tracking-[0.1em] uppercase text-xs rounded-xl shadow-2xl transition-all duration-500 hover:scale-105 hover:bg-white">
                  <span>Submit Case Details</span>
                  <ArrowRight className="h-4 w-4 group-hover:translate-x-1.5 transition-transform" />
                </a>
              </div>
            </div>
          </div>
        </section>

      </main>
    </div>
  );
};

export default LegalIssueIdentificationPage;
