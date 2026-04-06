import React, { useEffect, useState, useRef } from 'react';
import { 
  ArrowRight, Search, CheckCircle, Zap, Database, 
  Shield, FileText, ChevronDown, Award, Briefcase, Target, 
  ShieldAlert, ClipboardCheck, Layers, FileSearch, 
  Landmark, Bookmark, Lightbulb, 
  ShieldCheck, FileCheck, Gavel
} from 'lucide-react';

const ExpertWitnessResearchPage = () => {
  const [activeFaq, setActiveFaq] = useState(null);
  const [visibleSections, setVisibleSections] = useState({
    hero: false,
    intro: false,
    pains: false,
    coreServices: false,
    methodology: false,
    tools: false,
    expertTypes: false,
    deliverables: false,
    whyChoose: false,
    faq: false,
    cta: false
  });

  const sectionRefs = {
    hero: useRef(null),
    intro: useRef(null),
    pains: useRef(null),
    coreServices: useRef(null),
    methodology: useRef(null),
    tools: useRef(null),
    expertTypes: useRef(null),
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
      q: "How do you find expert witnesses in the UK?",
      a: "Through verified databases, court records, and professional registers."
    },
    {
      q: "Do you check expert credibility?",
      a: "Yes, including qualifications, history, and courtroom performance."
    },
    {
      q: "Can you find experts for niche cases?",
      a: "Yes, across multiple specialized domains."
    },
    {
      q: "How long does it take?",
      a: "Typically 24–72 hours."
    }
  ];

  const coreServices = [
    {
      id: "4.1",
      title: "Case-Specific Expert Identification",
      desc: "Experts matched to your exact legal issue. Not generic directories — targeted selection.",
      deliverable: "Shortlist of relevant experts",
      icon: Target,
      anim: "animate-fade-in-top-left"
    },
    {
      id: "4.2",
      title: "Credential & Background Verification",
      desc: "We verify qualifications, certifications, professional registrations, and disciplinary history.",
      deliverable: "Verified expert profile",
      icon: ShieldCheck,
      anim: "animate-fade-in-up"
    },
    {
      id: "4.3",
      title: "Litigation & Courtroom Performance Analysis",
      desc: "Past testimony performance, cross-examination outcomes, and judicial treatment of expert opinions.",
      deliverable: "Reliability & credibility assessment",
      icon: FileSearch,
      anim: "animate-fade-in-top-right"
    },
    {
      id: "4.4",
      title: "Conflict of Interest Screening",
      desc: "We ensure no hidden affiliations, no bias risks, and full independence.",
      deliverable: "Conflict-free validation",
      icon: ShieldAlert,
      anim: "animate-fade-in-bottom-left"
    },
    {
      id: "4.5",
      title: "Expert Shortlisting & Recommendation",
      desc: "Top expert options (ranked), strengths & weaknesses, and suitability for your case.",
      deliverable: "Decision-ready report",
      icon: ClipboardCheck,
      anim: "animate-fade-in-bottom-right"
    }
  ];

  const expertTypes = [
    { title: "Medical Experts", icon: Search },
    { title: "Financial & Accounting", icon: Landmark },
    { title: "Engineering Experts", icon: Briefcase },
    { title: "Digital & Cyber Experts", icon: Database },
    { title: "Forensic Specialists", icon: Search },
    { title: "Property & Valuation", icon: Landmark }
  ];

  const deliverables = [
    { title: "Expert witness shortlist", icon: Briefcase },
    { title: "Credential verification report", icon: ShieldCheck },
    { title: "Litigation history analysis", icon: FileSearch },
    { title: "Conflict of interest check", icon: ShieldAlert },
    { title: "Final recommendation memo", icon: FileCheck }
  ];

  return (
    <div className="min-h-screen bg-[#2A454E] flex flex-col overflow-x-hidden text-white font-sans">
      <main className="flex-grow">
        
        {/* 1. Hero Section */}
        <section 
          ref={sectionRefs.hero}
          data-section="hero"
          className="relative min-h-[100vh] flex items-center pt-32 pb-24 overflow-hidden bg-[#1B2D33]"
        >
          <div className="absolute inset-0 z-0 opacity-40 group">
             <img src="/lawhero.jpg" alt="Expert Witness Research" className="w-full h-full object-cover object-center transition-transform duration-[20s] group-hover:scale-110" />
             <div className="absolute inset-0 bg-gradient-to-t from-[#2A454E] via-[#2A454E]/70 to-transparent"></div>
          </div>


          <div className="relative z-10 px-4 sm:px-6 lg:px-8 max-w-[90rem] mx-auto w-full">
            <div className="max-w-4xl">
              <div className={`flex items-center gap-4 mb-6 transition-all duration-1000 ${visibleSections.hero ? 'animate-fade-in-right' : 'opacity-0'}`}>
                <div className="h-[1px] w-12 bg-[#A07A41]"></div>
                <span className="text-[#A07A41] uppercase tracking-[0.4em] text-[10px] font-bold">Expert Verification</span>
              </div>
              
              <h1 className={`text-4xl md:text-5xl lg:text-7xl font-serif font-bold text-white leading-tight mb-8 tracking-tight transition-all duration-1000 ${visibleSections.hero ? 'opacity-100' : 'opacity-0'}`}>
                <span className="block animate-fade-in-top-left">UK Expert Witness</span>
                <span className="block italic font-light text-[#A07A41] animate-fade-in-up animation-delay-200">Research & Verification</span>
              </h1>
              
              <p className={`text-gray-300 text-base md:text-xl font-sans font-light leading-relaxed max-w-2xl mb-10 border-l-2 border-[#A07A41]/30 pl-8 transition-all duration-1000 ${visibleSections.hero ? 'animate-fade-in-left animation-delay-400' : 'opacity-0'}`}>
                Identify, vet, and shortlist credible expert witnesses with proven litigation experience — ensuring reliable, court-ready testimony.
              </p>

              <div className={`grid sm:grid-cols-3 gap-4 mb-12 transition-all duration-1000 ${visibleSections.hero ? 'animate-fade-in-bottom-left animation-delay-500' : 'opacity-0'}`}>
                {[
                  { icon: ShieldCheck, text: "Verified Credentials" },
                  { icon: Gavel, text: "Litigation Analysis" },
                  { icon: Target, text: "Case-Specific Matching" }
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-4 p-4 bg-[#1B2D33]/60 border border-white/10 rounded-2xl backdrop-blur-sm shadow-xl">
                    <item.icon className="h-5 w-5 text-[#A07A41]" />
                    <span className="text-xs font-medium tracking-wide text-gray-200">{item.text}</span>
                  </div>
                ))}
              </div>

              <div className={`transition-all duration-1000 ${visibleSections.hero ? 'animate-fade-in-up animation-delay-600' : 'opacity-0'}`}>
                <a href="#contact" className="group relative inline-flex items-center gap-4 px-10 py-5 bg-[#A07A41] text-black font-bold uppercase tracking-widest text-xs rounded-xl transition-all duration-500 hover:bg-white hover:scale-105 shadow-2xl">
                  <span>Request Expert Witness Research</span>
                  <ArrowRight className="h-5 w-5 group-hover:translate-x-2 transition-transform" />
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* 2. Problem-Oriented Introduction */}
        <section 
          ref={sectionRefs.intro}
          data-section="intro"
          className="relative py-24 lg:py-40 bg-[#2A454E] overflow-hidden"
        >
          <div className="px-4 sm:px-6 lg:px-8 max-w-[90rem] mx-auto z-10 relative">
            <div className={`grid lg:grid-cols-2 gap-20 items-center ${visibleSections.intro ? 'animate-fade-in-bottom-right' : 'opacity-0'}`}>
              
              <div className="relative group">
                <div className="aspect-[4/5] rounded-[3rem] overflow-hidden border border-[#A07A41]/20 relative bg-[#2A454E] flex items-center justify-center">
                   <img src="/hee1.jpg" alt="Strategic Expert Analysis" className="w-full h-full object-cover object-center transition-all duration-1000 group-hover:scale-105 grayscale group-hover:grayscale-0" />
                   <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-[#1B2D33]/40 to-[#1B2D33]"></div>
                </div>

                <div className="absolute -bottom-10 -right-10 bg-[#2A454E] p-6 lg:p-8 rounded-3xl border border-white/10 shadow-2xl animate-fade-in-top-left animation-delay-500 hidden sm:block">
                  <div className="flex items-center gap-4">
                    <Award className="h-10 w-10 text-[#A07A41]" />
                    <div>
                      <p className="text-white font-bold text-sm">Court Ready</p>
                      <p className="text-gray-400 text-xs">Vetted Professionals</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className={`${visibleSections.intro ? 'animate-fade-in-top-right' : 'opacity-0'}`}>
                <div className="flex items-center gap-4 mb-8">
                  <div className="h-[1px] w-12 bg-[#A07A41]"></div>
                  <span className="text-[#A07A41] uppercase tracking-[0.4em] text-xs font-bold">The Challenge</span>
                </div>
                <h2 className="text-3xl md:text-5xl font-serif font-bold text-white leading-tight mb-10">
                  Integrity Beyond <br />
                  <span className="italic font-light text-[#A07A41]">Mere Availability.</span>
                </h2>
                <div className="space-y-8">
                  <p className="text-gray-300 text-base md:text-lg font-sans font-light leading-relaxed">
                    Selecting the wrong expert witness can <span className="text-white font-medium">weaken legal arguments</span>, reduce credibility, and negatively impact case outcomes.
                  </p>
                  
                  <p className="text-gray-300 text-base md:text-lg font-sans font-light leading-relaxed">
                    H&S CO provides expert witness research that focuses on credibility, relevance, and courtroom reliability — not just availability.
                  </p>

                  <p className="text-gray-300 text-base md:text-lg font-sans font-light leading-relaxed">
                    Using trusted platforms like <span className="text-white font-medium italic underline decoration-[#A07A41]/50 underline-offset-4">Westlaw UK and LexisNexis UK</span>, we ensure every expert is qualified, independent, and litigation-ready.
                  </p>
                  
                  <div className="p-8 bg-[#2A454E]/50 backdrop-blur-xl border-l-4 border-[#A07A41] rounded-r-2xl relative overflow-hidden group">
                    <div className="relative z-10 flex items-start gap-4">
                       <Zap className="h-6 w-6 text-[#A07A41] shrink-0 mt-1" />
                       <div>
                         <p className="text-lg font-serif italic text-white leading-tight">
                           The Outcome: <span className="text-[#A07A41] font-bold">You get experts you can actually rely on in court.</span>
                         </p>
                       </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 3. What This Service Actually Solves */}
        <section 
          ref={sectionRefs.pains}
          data-section="pains"
          className="relative py-28 bg-[#2A454E] overflow-hidden border-y border-white/5"
        >
          <div className="absolute top-0 right-1/4 w-[1px] h-full bg-gradient-to-b from-transparent via-[#A07A41]/40 to-transparent"></div>
          
          <div className="px-4 sm:px-6 lg:px-8 max-w-[90rem] mx-auto relative z-10">
            <div className={`grid lg:grid-cols-2 gap-16 items-center ${visibleSections.pains ? 'animate-fade-in-up' : 'opacity-0'}`}>
              <div>
                <span className="text-[#A07A41] uppercase tracking-[0.4em] text-[10px] font-bold mb-4 block">Pain Points vs Solutions</span>
                <h2 className="text-3xl md:text-5xl font-serif font-bold text-white mb-8 tracking-tight">Bridging the Gap in <br /><span className="italic font-light text-[#A07A41]">Expert Selection.</span></h2>
              </div>
              
              <div className="grid sm:grid-cols-2 gap-6">
                {[
                  { title: "Finding relevant experts", icon: Search },
                  { title: "Risk of unverified professionals", icon: ShieldAlert },
                  { title: "Lack of court performance insight", icon: Search },
                  { title: "Hidden conflicts of interest", icon: ShieldAlert }
                ].map((item, i) => (
                  <div key={i} className="flex flex-col gap-4 p-6 bg-[#1B2D33] border border-white/5 rounded-2xl hover:border-[#A07A41]/50 transition-all duration-300">
                    <div className="h-10 w-10 rounded-lg bg-[#2A454E] flex items-center justify-center">
                       {item.icon ? <item.icon className="h-5 w-5 text-[#A07A41]" /> : <ShieldAlert className="h-5 w-5 text-[#A07A41]" />}
                    </div>
                    <span className="text-gray-300 font-medium text-sm leading-snug">{item.title}</span>
                  </div>
                ))}
              </div>
            </div>
            
            <div className={`mt-16 text-center ${visibleSections.pains ? 'animate-fade-in-down animation-delay-500' : 'opacity-0'}`}>
               <p className="text-xl md:text-3xl font-serif italic text-white/80">
                 Identify potential risks before they impact your litigation strategy.
               </p>
            </div>
          </div>
        </section>

        {/* 4. Core Services */}
        <section 
          ref={sectionRefs.coreServices}
          data-section="coreServices"
          className="relative py-24 lg:py-40 bg-[#1B2D33] overflow-hidden"
        >
          <div className="px-4 sm:px-6 lg:px-8 max-w-[90rem] mx-auto relative z-10">
            <div className="mb-24 flex flex-col md:flex-row md:items-end justify-between gap-8">
              <div className="max-w-3xl border-l-[3px] border-[#A07A41] pl-8">
                <span className="text-[#A07A41] uppercase tracking-[0.4em] text-xs font-bold mb-4 block">Reframed for Value</span>
                <h2 className="text-3xl md:text-6xl font-serif font-bold text-white tracking-tight">Primary <span className="italic font-light text-[#A07A41]">Services.</span></h2>
              </div>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {coreServices.map((service, i) => (
                <div 
                  key={i} 
                  className={`group relative p-10 bg-[#2A454E]/30 border border-white/5 rounded-3xl hover:-translate-y-2 hover:bg-[#2A454E]/60 hover:border-[#A07A41]/30 transition-all duration-500 overflow-hidden ${visibleSections.coreServices ? service.anim : 'opacity-0'}`}
                  style={{ animationDelay: `${i * 150}ms` }}
                >
                  <div className="absolute -bottom-10 -right-20 opacity-[0.03] group-hover:opacity-[0.1] transition-all duration-700 group-hover:scale-125">
                    <service.icon size={200} className="text-[#A07A41]" />
                  </div>
                  
                  <div className="relative z-10 flex flex-col h-full">
                    <div className="flex justify-between items-start mb-8">
                      <div className="w-14 h-14 bg-[#1B2D33] rounded-xl flex items-center justify-center group-hover:bg-[#A07A41] transition-colors duration-500 border border-[#A07A41]/10 group-hover:border-transparent">
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

        {/* 5. Research Methodology & 6. Data Sources */}
        <section 
          ref={sectionRefs.methodology}
          data-section="methodology"
          className="relative py-24 lg:py-40 bg-[#2A454E] border-y border-white/5"
        >
          <div className="px-4 sm:px-6 lg:px-8 max-w-[90rem] mx-auto">
            <div className="grid lg:grid-cols-2 gap-20 items-center">
              
              <div className={`${visibleSections.methodology ? 'animate-fade-in-left' : 'opacity-0'}`}>
                <div className="mb-16">
                  <span className="text-[#A07A41] uppercase tracking-[0.4em] text-xs font-bold mb-4 block">Trust Builder</span>
                  <h2 className="text-3xl md:text-5xl font-serif font-bold text-white mb-6">Research <span className="italic font-light text-[#A07A41]">Methodology.</span></h2>
                </div>
                
                <div className="space-y-6 relative border-l border-white/10 ml-4 py-4">
                  {[
                    "Understand case requirements",
                    "Define expert criteria",
                    "Search verified sources",
                    "Evaluate credibility & experience",
                    "Screen conflicts",
                    "Deliver ranked shortlist"
                  ].map((step, i) => (
                    <div key={i} className={`relative pl-10 ${visibleSections.methodology ? 'animate-fade-in-left' : 'opacity-0'}`} style={{ animationDelay: `${i * 150}ms` }}>
                       <div className="absolute -left-2 top-1 w-4 h-4 bg-[#2A454E] border-2 border-[#A07A41] rounded-full shadow-[0_0_15px_rgba(160,122,65,0.4)]"></div>
                       <h4 className="text-xl font-serif font-bold text-gray-200 tracking-tight">{step}</h4>
                    </div>
                  ))}
                </div>
              </div>

               <div className={`${visibleSections.methodology ? 'animate-fade-in-right' : 'opacity-0'} flex flex-col gap-12`}>
                 <div className="aspect-video w-full rounded-[2rem] bg-[#1B2D33] border border-white/10 flex items-center justify-center relative overflow-hidden shadow-2xl group">
                    <img src="/hee2.jpg" alt="Scientific Vetting" className="w-full h-full object-cover object-center transition-all duration-1000 group-hover:scale-105 grayscale group-hover:grayscale-0" />
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-[#2A454E]/40 to-[#2A454E] opacity-40 pointer-events-none"></div>
                 </div>


                 <div>
                    <h4 className="text-[#A07A41] uppercase tracking-[0.2em] text-[10px] font-bold mb-6">Data Sources & Tools</h4>
                    <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
                       {[
                         { name: "Westlaw UK", icon: Database },
                         { name: "LexisNexis UK", icon: Search },
                         { name: "Court Judgments", icon: Gavel },
                         { name: "Professional Bodies", icon: Landmark }
                       ].map((tool, i) => (
                         <div key={i} className="flex items-center gap-3 p-4 bg-[#1B2D33] border border-[#A07A41]/20 rounded-xl">
                            <tool.icon className="h-5 w-5 text-[#A07A41] shrink-0" />
                            <h4 className="text-xs font-bold text-white shrink-0">{tool.name}</h4>
                         </div>
                       ))}
                    </div>
                 </div>
              </div>
            </div>
          </div>
        </section>

        {/* 7. Types of Experts Covered */}
        <section 
          ref={sectionRefs.expertTypes}
          data-section="expertTypes"
          className="py-20 lg:py-32 bg-[#2A454E] border-y border-white/5"
        >
          <div className="px-4 sm:px-6 lg:px-8 max-w-[90rem] mx-auto">
            <div className="text-center mb-16">
              <span className="text-[#A07A41] uppercase tracking-[0.4em] text-xs font-bold mb-6 block">Specialized Domains</span>
              <h3 className="text-3xl md:text-5xl font-serif font-bold text-white mb-12 tracking-tight leading-tight">Types of Experts <span className="italic font-light text-[#A07A41]">Covered.</span></h3>
            </div>
            
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
               {expertTypes.map((type, i) => (
                  <div key={i} className={`p-8 bg-[#1B2D33] border border-white/10 rounded-3xl flex flex-col items-center gap-6 hover:bg-[#A07A41]/10 hover:border-[#A07A41]/30 transition-all duration-300 group ${visibleSections.expertTypes ? 'animate-fade-in-up' : 'opacity-0'}`} style={{ animationDelay: `${i * 100}ms` }}>
                    <div className="w-16 h-16 rounded-2xl bg-[#2A454E] flex items-center justify-center group-hover:bg-[#A07A41] transition-all duration-500">
                      <type.icon className="w-8 h-8 text-[#A07A41] group-hover:text-black transition-colors" />
                    </div>
                    <span className="text-white font-serif font-bold text-sm text-center tracking-wide">{type.title}</span>
                 </div>
               ))}
            </div>
          </div>
        </section>

        {/* 8. Deliverables */}
        <section 
          ref={sectionRefs.deliverables}
          data-section="deliverables"
          className="relative py-24 lg:py-40 bg-[#2A454E] overflow-hidden"
        >
          <div className="px-4 sm:px-6 lg:px-8 max-w-[90rem] mx-auto z-10 relative">
             <div className="text-center mb-24">
                <span className="text-[#A07A41] uppercase tracking-[0.4em] text-xs font-bold mb-4 block">Concrete Outputs</span>
                <h3 className="text-3xl md:text-5xl font-serif font-bold text-white mb-6 tracking-tight">Service <span className="italic font-light text-[#A07A41]">Deliverables.</span></h3>
             </div>
             
             <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-4">
                {deliverables.map((item, i) => (
                  <div 
                    key={i} 
                    className={`p-8 bg-[#1B2D33] border border-white/5 rounded-3xl text-center group hover:bg-[#2A454E] hover:border-[#A07A41]/50 transition-all duration-500 flex flex-col justify-between ${visibleSections.deliverables ? (i%2!==0 ? 'animate-fade-in-top-left' : 'animate-fade-in-bottom-right') : 'opacity-0'}`}
                    style={{ animationDelay: `${i * 100}ms` }}
                  >
                     <div className="w-16 h-16 mx-auto bg-[#2A454E] rounded-full flex items-center justify-center mb-6 group-hover:bg-[#A07A41] transition-colors duration-500 shadow-xl">
                        <item.icon className="h-6 w-6 text-[#A07A41] group-hover:text-black transition-colors" />
                     </div>
                     <p className="text-sm font-serif font-bold text-gray-200 group-hover:text-white transition-colors leading-tight">{item.title}</p>
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
             <div className="bg-[#2A454E]/40 border border-[#A07A41]/20 rounded-[3rem] p-10 lg:p-20 relative overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.3)]">
                <div className="absolute top-0 right-0 p-10 opacity-5"><Lightbulb size={300} /></div>
                
                <div className={`text-center mb-16 relative z-10 ${visibleSections.whyChoose ? 'animate-fade-in-down' : 'opacity-0'}`}>
                   <span className="text-[#A07A41] uppercase tracking-[0.4em] text-xs font-bold mb-4 block">Positioning Section</span>
                   <h2 className="text-3xl md:text-5xl font-serif font-bold text-white">Why Choose <span className="italic font-light text-[#A07A41]">H&S CO.</span></h2>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 relative z-10">
                   {[
                     { title: "Litigation Reliability", desc: "Focus on whether they can withstand cross-examination, not just availability." },
                     { title: "Structured Evaluation", desc: "Every expert undergoes a rigorous, multi-stage vetting process." },
                     { title: "Risk-Focused Selection", desc: "Proactively identifying potential biases and conflicts before they become issues." },
                     { title: "Fast Delivery", desc: "Research-backed results delivered within 24–72 hours for urgent cases." }
                   ].map((item, i) => (
                      <div 
                        key={i} 
                        className={`p-8 bg-[#2A454E] rounded-3xl border border-white/5 hover:border-[#A07A41]/50 transition-all duration-300 ${visibleSections.whyChoose ? 'animate-fade-in-up' : 'opacity-0'}`}
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
              <span className="text-[#A07A41] uppercase tracking-[0.3em] text-[10px] font-bold mb-6 block">SEO Boost</span>
              <h2 className="text-3xl md:text-5xl font-serif font-bold text-white tracking-tight">Common <span className="italic font-light text-[#A07A41]">Questions.</span></h2>
            </div>

            <div className="space-y-4">
              {faqs.map((faq, index) => (
                <div 
                  key={index} 
                  className={`border border-[#A07A41]/10 rounded-2xl bg-[#1B2D33] overflow-hidden ${visibleSections.faq ? (index%2===0 ? 'animate-fade-in-left' : 'animate-fade-in-right') : 'opacity-0'}`} 
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
            <div className={`max-w-5xl mx-auto p-16 lg:p-24 bg-[#2A454E]/60 border border-[#A07A41]/10 rounded-[3rem] backdrop-blur-2xl relative overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.5)] ${visibleSections.cta ? 'animate-fade-in-up' : 'opacity-0'}`}>
              <div className="absolute -top-10 -left-10 opacity-[0.03]"><Briefcase size={300} className="text-[#A07A41]" /></div>
              
              <span className="text-[#A07A41] uppercase tracking-[0.5em] text-[10px] font-bold mb-10 block">Final Conversion</span>
              <h2 className="text-3xl md:text-6xl font-serif font-bold text-white mb-10 leading-tight">
                Choose the Right Expert — <br />
                <span className="italic font-light text-[#A07A41]">Strengthen Your Case.</span>
              </h2>
              
              <div className="flex flex-col sm:flex-row justify-center items-center gap-8 mt-12">
                <a href="#contact" className="group relative flex items-center justify-center gap-4 px-12 py-6 bg-[#A07A41] text-black font-bold tracking-[0.1em] uppercase text-xs rounded-xl shadow-2xl transition-all duration-500 hover:scale-105 hover:bg-white">
                  <span>Request Expert Witness Research</span>
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

export default ExpertWitnessResearchPage;
