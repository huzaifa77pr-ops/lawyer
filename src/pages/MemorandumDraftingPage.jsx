import React, { useEffect, useState, useRef } from 'react';
import { 
  ArrowRight, Search, CheckCircle, Zap, Database, 
  Shield, FileText, ChevronDown, Award, Briefcase, Target, 
  ShieldAlert, ClipboardCheck, Layers, FileSearch, 
  BookOpen, Scale, Gavel, Activity, Users, 
  Globe, ShieldCheck, Clock, ExternalLink, GraduationCap
} from 'lucide-react';

const MemorandumDraftingPage = () => {
  const [activeFaq, setActiveFaq] = useState(null);
  const [visibleSections, setVisibleSections] = useState({
    hero: false,
    intro: false,
    whatIs: false,
    services: false,
    process: false,
    framework: false,
    areas: false,
    deliverables: false,
    why: false,
    faq: false,
    cta: false
  });

  const sectionRefs = {
    hero: useRef(null),
    intro: useRef(null),
    whatIs: useRef(null),
    services: useRef(null),
    process: useRef(null),
    framework: useRef(null),
    areas: useRef(null),
    deliverables: useRef(null),
    why: useRef(null),
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

  const coreServices = [
    { 
      title: "Legal Issue Analysis (IRAC)", 
      icon: Layers, 
      desc: "Structured using the IRAC method (Issue, Rule, Application, Conclusion) for logical clarity.",
      deliverable: "Clear, structured legal analysis" 
    },
    { 
      title: "Research Integration", 
      icon: Search, 
      desc: "Arguments backed by Westlaw UK and LexisNexis UK for statutory and case law authority.",
      deliverable: "Authority-backed memorandum" 
    },
    { 
      title: "Argument Development", 
      icon: Gavel, 
      desc: "Focus on logical reasoning and strong legal arguments to develop clear, winning conclusions.",
      deliverable: "Argument-focused memo" 
    },
    { 
      title: "Case-Specific Drafting", 
      icon: Target, 
      desc: "Tailored memorandums based on specific facts, legal issues, and distinct client requirements.",
      deliverable: "Custom legal memorandum" 
    },
    { 
      title: "Internal Legal Advisory", 
      icon: GraduationCap, 
      desc: "Memorandums for internal decisions, risk analysis, and high-level strategic planning.",
      deliverable: "Advisory memo" 
    }
  ];

  const faqItems = [
    { q: "What is a memorandum of law?", a: "A document that analyzes specific legal issues by applying relevant laws and judicial reasoning to a set of facts." },
    { q: "Do you use IRAC structure?", a: "Yes, we exclusively utilize the IRAC structure to ensure logical clarity and a standardized professional format." },
    { q: "Can you support case preparation?", a: "Precisely. Our memorandums are specifically tailored for litigation strategy and internal case preparation." },
    { q: "How long does it take?", a: "Standard turnaround is 24–72 business hours depending on the research complexity." }
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
             <img src="/me.jpg" alt="Legal Memorandums" className="w-full h-full object-cover transition-transform duration-[20s] group-hover:scale-110" />
             <div className="absolute inset-0 bg-gradient-to-t from-[#2A454E] via-[#2A454E]/70 to-transparent"></div>
          </div>


          <div className="relative z-10 px-4 sm:px-6 lg:px-8 max-w-[90rem] mx-auto w-full">
            <div className="max-w-4xl mx-auto lg:mx-0 text-center lg:text-left">
              <div className={`flex items-center justify-center lg:justify-start gap-4 mb-6 transition-all duration-1000 ${visibleSections.hero ? 'animate-fade-in-right' : 'opacity-0'}`}>
                <div className="h-[1px] w-12 bg-[#A07A41]"></div>
                <span className="text-[#A07A41] uppercase tracking-[0.4em] text-[10px] font-bold">Scientific Legal Analysis</span>
              </div>
              
              <h1 className={`text-4xl md:text-5xl lg:text-7xl font-serif font-bold text-white leading-tight mb-8 tracking-tight transition-all duration-1000 ${visibleSections.hero ? 'opacity-100' : 'opacity-0'}`}>
                <span className="block animate-fade-in-top-left text-[#A07A41] italic font-light">UK Memorandums</span>
                <span className="block animate-fade-in-up animation-delay-200">Of Law Services.</span>
              </h1>
              
              <p className={`text-gray-300 text-base md:text-xl font-sans font-light leading-relaxed max-w-2xl mb-12 border-l-2 border-[#A07A41]/30 pl-8 transition-all duration-1000 ${visibleSections.hero ? 'animate-fade-in-left animation-delay-400' : 'opacity-0'}`}>
                Clear, structured, and research-backed legal memorandums to support case strategy, legal arguments, and critical decision-making.
              </p>

              <div className={`flex flex-wrap justify-center lg:justify-start gap-6 transition-all duration-1000 ${visibleSections.hero ? 'animate-fade-in-up animation-delay-600' : 'opacity-0'}`}>
                <a href="#contact" className="group relative inline-flex items-center justify-center gap-3 px-8 py-4 bg-[#A07A41] text-black font-bold uppercase tracking-widest text-[11px] rounded-xl transition-all duration-500 hover:bg-white hover:scale-105 shadow-2xl w-full sm:w-auto">
                   <FileText className="h-4 w-4" />
                   <span>Request Memorandum</span>
                   <ArrowRight className="h-4 w-4 group-hover:translate-x-2 transition-transform" />
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* 2. Introduction / Overview */}
        <section 
          ref={sectionRefs.intro}
          data-section="intro"
          className="relative py-24 lg:py-40 bg-[#2A454E] overflow-hidden"
        >
          <div className="px-4 sm:px-6 lg:px-8 max-w-[90rem] mx-auto z-10 relative">
            <div className={`grid lg:grid-cols-2 gap-20 items-center ${visibleSections.intro ? 'animate-fade-in-bottom-right' : 'opacity-0'}`}>
              
              <div className="relative group p-4 border border-[#A07A41]/20 rounded-[4rem]">
                <div className="aspect-[4/5] rounded-[3.5rem] overflow-hidden bg-[#2A454E] relative">
                   <img src="/me1.jpg" alt="Deep Legal Analysis" className="w-full h-full object-cover transition-all duration-1000 group-hover:scale-105 grayscale group-hover:grayscale-0" />
                   <div className="absolute inset-0 bg-gradient-to-tr from-[#1B2D33] via-transparent to-transparent"></div>
                </div>

              </div>

              <div className={`${visibleSections.intro ? 'animate-fade-in-top-left' : 'opacity-0'}`}>
                <div className="flex items-center gap-4 mb-8">
                  <div className="h-[1px] w-12 bg-[#A07A41]"></div>
                  <span className="text-[#A07A41] uppercase tracking-[0.4em] text-xs font-bold">Research Excellence</span>
                </div>
                <h2 className="text-3xl md:text-5xl font-serif font-bold text-white leading-tight mb-8">
                  The Architecture of <br />
                  <span className="italic font-light text-[#A07A41]">Legal Reasoning.</span>
                </h2>
                <div className="space-y-6">
                  <p className="text-gray-300 text-lg font-sans font-light leading-relaxed border-t border-white/5 pt-8">
                    Legal decisions depend on clear analysis and strong legal reasoning. A poorly structured memorandum can weaken arguments and lead to incorrect conclusions during high-stakes litigation.
                  </p>
                  <p className="text-gray-300 text-lg font-sans font-light leading-relaxed">
                    H&S CO provides professional memorandums of law tailored for UK solicitors and legal teams. We deliver well-researched, logically structured documents that serve as the foundation for real legal work.
                  </p>
                  <div className="flex items-center gap-10 pt-8 justify-center lg:justify-start">
                     <div className="text-center group">
                        <Scale className="h-10 w-10 text-[#A07A41] mx-auto mb-3 group-hover:scale-110 transition-transform" />
                        <p className="text-[10px] uppercase tracking-widest text-gray-400 font-bold">IRAC Certified</p>
                     </div>
                     <div className="h-12 w-[1px] bg-white/10"></div>
                     <div className="text-center group">
                        <Award className="h-10 w-10 text-[#A07A41] mx-auto mb-3 group-hover:scale-110 transition-transform" />
                        <p className="text-[10px] uppercase tracking-widest text-gray-400 font-bold">Analysis Expert</p>
                     </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 3. What is a Memorandum */}
        <section 
          ref={sectionRefs.whatIs}
          data-section="whatIs"
          className="relative py-24 bg-[#1B2D33] overflow-hidden border-y border-white/5"
        >
           <div className="px-4 sm:px-6 lg:px-8 max-w-[60rem] mx-auto text-center z-10 relative">
              <div className={`${visibleSections.whatIs ? 'animate-fade-in-up' : 'opacity-0'}`}>
                 <span className="text-[#A07A41] uppercase tracking-[0.5em] text-[10px] font-bold mb-6 block">Definition</span>
                 <h2 className="text-3xl md:text-5xl font-serif font-bold text-white mb-10 leading-tight">Reasoned <span className="italic font-light text-[#A07A41]">Conclusions.</span></h2>
                 <p className="text-gray-300 text-xl font-sans font-light leading-relaxed italic border-t border-white/5 pt-12">
                   &quot;A memorandum of law is a structured document that analyzes legal issues using relevant statutes, case law, and principles to provide a reasoned conclusion for case preparation, research, or litigation strategy.&quot;
                 </p>
              </div>
           </div>
        </section>

        {/* 4. Our Services (CORE SECTION) */}
        <section 
          ref={sectionRefs.services}
          data-section="services"
          className="relative py-24 lg:py-40 bg-[#2A454E] overflow-hidden"
        >
          <div className="px-4 sm:px-6 lg:px-8 max-w-[90rem] mx-auto text-center mb-24">
             <span className={`text-[#A07A41] uppercase tracking-[0.5em] text-[10px] font-bold mb-6 block ${visibleSections.services ? 'animate-fade-in-up' : 'opacity-0'}`}>Analytical Suite</span>
             <h2 className={`text-4xl md:text-6xl font-serif font-bold text-white tracking-tight ${visibleSections.services ? 'animate-fade-in-up' : 'opacity-0'}`}>Scope of <span className="italic font-light text-[#A07A41]">Drafting.</span></h2>
          </div>

          <div className="px-4 sm:px-6 lg:px-8 max-w-[90rem] mx-auto grid md:grid-cols-2 lg:grid-cols-3 gap-8 text-center">
            {coreServices.map((service, i) => (
              <div 
                key={i} 
                className={`group p-12 bg-[#1B2D33]/60 border border-white/5 rounded-[2.5rem] hover:bg-[#A07A41] hover:border-transparent transition-all duration-500 overflow-hidden relative ${visibleSections.services ? (i%2===0 ? 'animate-fade-in-top-left' : 'animate-fade-in-bottom-right') : 'opacity-0'}`}
                style={{ animationDelay: `${i * 100}ms` }}
              >
                 <div className="relative z-10 flex flex-col h-full">
                    <div className="w-16 h-16 bg-[#2A454E] rounded-2xl flex items-center justify-center mb-10 border border-[#A07A41]/10 group-hover:bg-white transition-all shadow-xl mx-auto">
                       <service.icon className="h-7 w-7 text-[#A07A41] group-hover:text-black transition-colors" />
                    </div>
                    <h3 className="text-2xl font-serif font-bold text-white mb-6 tracking-tight group-hover:text-black transition-colors">{service.title}</h3>
                    <p className="text-gray-400 font-sans font-light leading-relaxed text-sm mb-8 group-hover:text-black/80 transition-colors uppercase tracking-[0.1em]">{service.desc}</p>
                    <div className="mt-auto border-t border-white/5 pt-6 group-hover:border-black/10 transition-colors">
                       <span className="text-[10px] uppercase font-bold tracking-widest text-[#A07A41] group-hover:text-black italic">Deliverable: {service.deliverable}</span>
                    </div>
                 </div>
                 <div className="absolute -bottom-8 -right-8 opacity-[0.03] group-hover:opacity-[0.1] transition-all">
                    <service.icon size={180} />
                 </div>
              </div>
            ))}
          </div>
        </section>

        {/* 5. Our Process */}
        <section 
          ref={sectionRefs.process}
          data-section="process"
          className="relative py-24 lg:py-40 bg-[#1B2D33] overflow-hidden border-y border-white/5"
        >
          <div className="px-4 sm:px-6 lg:px-8 max-w-[90rem] mx-auto">
             <div className="text-center mb-20 max-w-3xl mx-auto">
                <span className={`text-[#A07A41] uppercase tracking-[0.4em] text-xs font-bold mb-6 block ${visibleSections.process ? 'animate-fade-in-up' : 'opacity-0'}`}>Research Methodology</span>
                <h2 className={`text-3xl md:text-5xl font-serif font-bold text-white tracking-tight ${visibleSections.process ? 'animate-fade-in-up' : 'opacity-0'}`}>Step-by-Step <span className="italic font-light text-[#A07A41]">Execution.</span></h2>
             </div>

             <div className="grid md:grid-cols-6 gap-4">
                {[
                  { step: "01", title: "Review Issue", icon: Search },
                  { step: "02", title: "Conduct Research", icon: BookOpen },
                  { step: "03", title: "Identify Laws", icon: ShieldCheck },
                  { step: "04", title: "Apply IRAC", icon: Layers },
                  { step: "05", title: "Draft Memo", icon: FileText },
                  { step: "06", title: "Final Deliver", icon: CheckCircle }
                ].map((item, i) => (
                  <div key={i} className={`flex flex-col items-center text-center p-6 bg-[#2A454E]/20 border border-white/5 rounded-3xl group ${visibleSections.process ? 'animate-fade-in-up' : 'opacity-0'}`} style={{ animationDelay: `${i * 150}ms` }}>
                     <div className="w-12 h-12 bg-[#1B2D33] rounded-xl flex items-center justify-center mb-6 border border-[#A07A41]/10 group-hover:bg-[#A07A41] group-hover:scale-110 transition-all duration-500">
                        <item.icon className="h-5 w-5 text-[#A07A41] group-hover:text-black transition-colors" />
                     </div>
                     <span className="text-[#A07A41] font-bold italic text-xs mb-3 tracking-widest leading-none">{item.step}</span>
                     <h4 className="text-white font-serif font-bold text-[10px] sm:text-xs tracking-tight uppercase">{item.title}</h4>
                  </div>
                ))}
             </div>
          </div>
        </section>

        {/* 6. Legal Framework & Sources */}
        <section 
          ref={sectionRefs.framework}
          data-section="framework"
          className="relative py-24 lg:py-40 bg-[#2A454E] overflow-hidden"
        >
          <div className="px-4 sm:px-6 lg:px-8 max-w-[90rem] mx-auto flex flex-col lg:flex-row gap-20 items-center">
             <div className={`w-full lg:w-1/2 ${visibleSections.framework ? 'animate-fade-in-left' : 'opacity-0'}`}>
                <span className="text-[#A07A41] uppercase tracking-[0.4em] text-xs font-bold mb-6 block font-serif">Structural Alignment</span>
                <h2 className="text-3xl md:text-5xl font-serif font-bold text-white mb-10 leading-tight">Legal Framework & <br /><span className="italic font-light text-[#A07A41]">Authority Sources.</span></h2>
                <p className="text-gray-300 text-lg leading-relaxed font-light mb-10 border-l-2 border-[#A07A41]/30 pl-8">
                   Our analytical documents are constructed using the most trusted UK legal platforms to ensure absolute source accuracy and doctrinal integrity.
                </p>
                <div className="grid sm:grid-cols-2 gap-6">
                   {[ "Westlaw UK", "LexisNexis UK", "BAILII", "Statutory Provisions" ].map((source, i) => (
                      <div key={i} className="flex items-center gap-4 p-5 bg-[#1B2D33] rounded-2xl border border-white/5 hover:border-[#A07A41] transition-all">
                         <div className="h-1.5 w-1.5 rounded-full bg-[#A07A41]"></div>
                         <span className="text-gray-300 font-serif font-bold italic text-sm tracking-widest">{source}</span>
                      </div>
                   ))}
                </div>
             </div>
             <div className={`w-full lg:w-1/2 ${visibleSections.framework ? 'animate-fade-in-right' : 'opacity-0'}`}>
                <div className="relative group rounded-[4rem] overflow-hidden border border-white/10 shadow-2xl">
                   <img src="/me2.jpg" alt="Source Depth" className="w-full aspect-[16/10] object-cover grayscale group-hover:grayscale-0 transition-all duration-1000" />
                   <div className="absolute inset-0 bg-[#A07A41]/5 mix-blend-overlay"></div>
                </div>

             </div>
          </div>
        </section>

        {/* 7. Practice Areas */}
        <section 
          ref={sectionRefs.areas}
          data-section="areas"
          className="relative py-24 lg:py-40 bg-[#1B2D33] overflow-hidden border-y border-white/5"
        >
          <div className="px-4 sm:px-6 lg:px-8 max-w-[90rem] mx-auto flex flex-col lg:flex-row gap-12 items-center mb-24 text-center lg:text-left">
             <div className={`w-full lg:w-1/2 ${visibleSections.areas ? 'animate-fade-in-left' : 'opacity-0'}`}>
                <span className="text-[#A07A41] uppercase tracking-[0.4em] text-xs font-bold mb-6 block">Expertise Categories</span>
                <h2 className="text-4xl md:text-6xl font-serif font-bold text-white tracking-tight">Practice <span className="italic font-light text-[#A07A41]">Specializations.</span></h2>
             </div>
             <div className={`w-full lg:w-1/2 ${visibleSections.areas ? 'animate-fade-in-right' : 'opacity-0'}`}>
                <div className="aspect-video rounded-[2.5rem] overflow-hidden group relative border border-white/10">
                   <img src="/me3.jpg" alt="Analytical Coverage" className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-1000" />
                   <div className="absolute inset-0 bg-gradient-to-t from-[#1B2D33]/60 via-transparent to-transparent"></div>
                </div>
             </div>
          </div>


          <div className="px-4 sm:px-6 lg:px-8 max-w-[80rem] mx-auto grid grid-cols-2 lg:grid-cols-5 gap-6">
             {[ "Civil Litigation", "Contract Law", "Employment Law", "Corporate Law", "Immigration Law" ].map((item, i) => (
                <div key={i} className={`p-10 bg-[#2A454E]/30 border border-white/5 rounded-3xl hover:bg-[#A07A41] group transition-all duration-500 text-center ${visibleSections.areas ? 'animate-fade-in-up' : 'opacity-0'}`} style={{ animationDelay: `${i * 100}ms` }}>
                   <BookOpen className="mx-auto mb-6 text-[#A07A41] group-hover:text-black transition-colors" size={32} />
                   <span className="text-gray-300 font-bold uppercase tracking-[0.3em] text-[9px] group-hover:text-black transition-colors">{item}</span>
                </div>
             ))}
          </div>
        </section>

        {/* 8. Deliverables & 9. Why Choose */}
        <section 
          data-section="deliverables"
          className="relative py-24 lg:py-40 bg-[#2A454E] overflow-hidden"
        >
          <div className="px-4 sm:px-6 lg:px-8 max-w-[90rem] mx-auto grid lg:grid-cols-2 gap-20">
             {/* 8. Deliverables */}
             <div ref={sectionRefs.deliverables} className={`${visibleSections.deliverables ? 'animate-fade-in-left' : 'opacity-0'}`}>
                <span className="text-[#A07A41] uppercase tracking-[0.4em] text-[10px] font-bold mb-8 block">Project Outputs</span>
                <h2 className="text-3xl font-serif font-bold text-white mb-10 tracking-tight leading-tight">Key <span className="italic font-light text-[#A07A41]">Deliverables.</span></h2>
                <div className="grid grid-cols-2 gap-4">
                   {[ "Legal Memorandum", "Issue Analysis", "Case Law Refs", "Research Reasoning", "Recommendations" ].map((text, i) => (
                      <div key={i} className="p-6 bg-[#1B2D33]/60 border border-white/5 rounded-2xl flex items-center gap-4 group hover:border-[#A07A41]/30 transition-all">
                         <div className="h-2 w-2 rounded-full bg-[#A07A41] group-hover:scale-150 transition-all"></div>
                         <span className="text-gray-300 font-sans font-light text-xs tracking-widest uppercase">{text}</span>
                      </div>
                   ))}
                </div>
             </div>

             {/* 9. Why Choose */}
             <div ref={sectionRefs.why} data-section="why" className={`${visibleSections.why ? 'animate-fade-in-right' : 'opacity-0'}`}>
                <span className="text-[#A07A41] uppercase tracking-[0.4em] text-[10px] font-bold mb-8 block font-serif">Analytical Competitive Edge</span>
                <h2 className="text-3xl font-serif font-bold text-white mb-10 tracking-tight leading-tight">Why Choose <span className="italic font-light text-[#A07A41]">H&S CO.</span></h2>
                <div className="space-y-6">
                   <div className="flex items-start gap-4">
                      <div className="h-6 w-6 mt-1 flex items-center justify-center shrink-0 border border-[#A07A41]/40 rounded-full"><div className="h-2 w-2 bg-[#A07A41] rounded-full"></div></div>
                      <p className="text-gray-300 text-base leading-relaxed font-light uppercase tracking-tighter text-[11px] font-bold">Standardized IRAC-based analytical drafting methodology.</p>
                   </div>
                   <div className="flex items-start gap-4">
                      <div className="h-6 w-6 mt-1 flex items-center justify-center shrink-0 border border-[#A07A41]/40 rounded-full"><div className="h-2 w-2 bg-[#A07A41] rounded-full"></div></div>
                      <p className="text-gray-300 text-base leading-relaxed font-light uppercase tracking-tighter text-[11px] font-bold">Sophisticated focus on doctrinal integrity and legal reasoning.</p>
                   </div>
                   <div className="flex items-start gap-4">
                      <div className="h-6 w-6 mt-1 flex items-center justify-center shrink-0 border border-[#A07A41]/40 rounded-full"><div className="h-2 w-2 bg-[#A07A41] rounded-full"></div></div>
                      <p className="text-gray-300 text-base leading-relaxed font-light uppercase tracking-tighter text-[11px] font-bold">Comprehensive, authority-backed analysis of complex facts.</p>
                   </div>
                </div>
             </div>
          </div>
        </section>

        {/* 10. FAQ Section */}
        <section 
          ref={sectionRefs.faq}
          data-section="faq"
          className="relative py-24 lg:py-40 bg-[#1B2D33] overflow-hidden"
        >
          <div className="relative z-10 px-4 sm:px-6 lg:px-8 max-w-[50rem] mx-auto">
            <div className={`text-center mb-24 ${visibleSections.faq ? 'animate-fade-in-top-left' : 'opacity-0'}`}>
              <span className="text-[#A07A41] uppercase tracking-[0.3em] text-[10px] font-bold mb-6 block">Structural Assurance</span>
              <h2 className="text-3xl md:text-5xl font-serif font-bold text-white tracking-tight">Common <span className="italic font-light text-[#A07A41]">Questions.</span></h2>
            </div>

            <div className="space-y-4">
              {faqItems.map((faq, index) => (
                <div 
                  key={index} 
                  className={`border border-[#A07A41]/10 rounded-2xl bg-[#2A454E]/30 overflow-hidden ${visibleSections.faq ? (index%2===0 ? 'animate-fade-in-left' : 'animate-fade-in-right') : 'opacity-0'}`} 
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
                    <p className="text-gray-400 text-sm md:text-base font-sans font-light leading-relaxed italic border-l border-[#A07A41]/30 pl-6">{faq.a}</p>
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
          className="relative py-24 lg:py-40 bg-[#2A454E] overflow-hidden"
        >
          <div className="absolute inset-0 bg-[#A07A41]/5 opacity-30"></div>
          <div className="relative z-10 px-4 sm:px-6 lg:px-8 max-w-[90rem] mx-auto text-center">
            <div className={`max-w-4xl mx-auto p-16 lg:p-24 bg-[#1B2D33]/60 border border-[#A07A41]/10 rounded-[4rem] backdrop-blur-2xl relative overflow-hidden shadow-2xl ${visibleSections.cta ? 'animate-fade-in-up' : 'opacity-0'}`}>
              <span className="text-[#A07A41] uppercase tracking-[0.4em] text-[10px] font-bold mb-8 block">Execution Ready</span>
              <h2 className="text-4xl md:text-6xl font-serif font-bold text-white mb-10 leading-tight tracking-tight">Access Clear Legal Analysis <br /><span className="italic font-light text-[#A07A41]">For Your Case.</span></h2>
              <p className="text-gray-400 font-sans text-lg mb-12 max-w-2xl mx-auto leading-relaxed border-t border-white/5 pt-10">
                 Make better legal decisions with professionally drafted memorandums. Doctrinal integrity meets winning legal strategy.
              </p>
              <div className="flex flex-col sm:flex-row justify-center items-center gap-8">
                <a href="#contact" className="group relative flex items-center justify-center gap-3 px-10 py-5 bg-[#A07A41] text-black font-bold uppercase tracking-widest text-[11px] rounded-xl transition-all duration-500 hover:scale-105 hover:bg-white shadow-2xl w-full sm:w-auto">
                  <span>Request Legal Memorandum Now</span>
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

export default MemorandumDraftingPage;
