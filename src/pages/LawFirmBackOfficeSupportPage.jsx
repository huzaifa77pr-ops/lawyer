import React, { useEffect, useState, useRef } from 'react';
import { 
  ArrowRight, Search, CheckCircle, 
  ChevronDown, AlertCircle, ShieldCheck, Send, 
  Target, Eye, Link as LinkIcon, HardDrive, 
  Users, Briefcase, FileText, ClipboardList, 
  Layout, Settings, Shield, Clock
} from 'lucide-react';

const LawFirmBackOfficeSupportPage = () => {
  const [activeFaq, setActiveFaq] = useState(null);
  
  const [visibleSections, setVisibleSections] = useState({
    hero: true,
    what: true,
    who: true,
    handle: true,
    how: true,
    whyOutsource: true,
    benefits: true,
    whyChoose: true,
    legal: true,
    faq: true,
    cta: true
  });

  const sectionRefs = {
    hero: useRef(null),
    what: useRef(null),
    who: useRef(null),
    handle: useRef(null),
    how: useRef(null),
    whyOutsource: useRef(null),
    benefits: useRef(null),
    whyChoose: useRef(null),
    legal: useRef(null),
    faq: useRef(null),
    cta: useRef(null)
  };

  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = "Law Firm Back-Office Support Services UK | H&S Co.";

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const section = entry.target.getAttribute('data-section');
          if (section) {
            setVisibleSections(prev => ({ ...prev, [section]: true }));
          }
        }
      });
    }, { threshold: 0.1 });

    Object.values(sectionRefs).forEach(ref => {
      if (ref.current) observer.observe(ref.current);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <div className="min-h-screen bg-[#2A454E] flex flex-col overflow-x-hidden text-white font-sans">
      <style>
        {`
          @keyframes fade-in-up { from { opacity: 0; transform: translateY(40px); } to { opacity: 1; transform: translateY(0); } }
          @keyframes fade-in-down { from { opacity: 0; transform: translateY(-40px); } to { opacity: 1; transform: translateY(0); } }
          @keyframes fade-in-left { from { opacity: 0; transform: translateX(-40px); } to { opacity: 1; transform: translateX(0); } }
          @keyframes fade-in-right { from { opacity: 0; transform: translateX(40px); } to { opacity: 1; transform: translateX(0); } }
          @keyframes fade-in-top-left { from { opacity: 0; transform: translate(-40px, -40px); } to { opacity: 1; transform: translate(0, 0); } }
          @keyframes fade-in-top-right { from { opacity: 0; transform: translate(40px, -40px); } to { opacity: 1; transform: translate(0, 0); } }
          @keyframes fade-in-bottom-left { from { opacity: 0; transform: translate(-40px, 40px); } to { opacity: 1; transform: translate(0, 0); } }
          @keyframes fade-in-bottom-right { from { opacity: 0; transform: translate(40px, 40px); } to { opacity: 1; transform: translate(0, 0); } }
          
          .animate-fade-in-up { animation: fade-in-up 1.2s cubic-bezier(0.22, 1, 0.36, 1) forwards; }
          .animate-fade-in-down { animation: fade-in-down 1.2s cubic-bezier(0.22, 1, 0.36, 1) forwards; }
          .animate-fade-in-left { animation: fade-in-left 1.2s cubic-bezier(0.22, 1, 0.36, 1) forwards; }
          .animate-fade-in-right { animation: fade-in-right 1.2s cubic-bezier(0.22, 1, 0.36, 1) forwards; }
          .animate-fade-in-top-left { animation: fade-in-top-left 1.2s cubic-bezier(0.22, 1, 0.36, 1) forwards; }
          .animate-fade-in-top-right { animation: fade-in-top-right 1.2s cubic-bezier(0.22, 1, 0.36, 1) forwards; }
          .animate-fade-in-bottom-left { animation: fade-in-bottom-left 1.2s cubic-bezier(0.22, 1, 0.36, 1) forwards; }
          .animate-fade-in-bottom-right { animation: fade-in-bottom-right 1.2s cubic-bezier(0.22, 1, 0.36, 1) forwards; }
          
          .animation-delay-200 { animation-delay: 0.2s; }
          .animation-delay-400 { animation-delay: 0.4s; }
          .animation-delay-600 { animation-delay: 0.6s; }
          .animation-delay-800 { animation-delay: 0.8s; }
        `}
      </style>
      
      <main className="flex-grow">
        
        {/* 1. HERO SECTION */}
        <section ref={sectionRefs.hero} data-section="hero" className="relative min-h-[95vh] flex items-center pt-32 pb-24 bg-[#1B2D33]">
          <div className="absolute inset-0 z-0">
             <img src="/aa.jpg" alt="Law Firm Back-Office Support hero" className="w-full h-full object-cover opacity-20" />
             <div className="absolute inset-0 bg-gradient-to-r from-[#1B2D33] via-[#1B2D33]/70 to-transparent"></div>
          </div>
          <div className="relative z-10 px-4 sm:px-6 lg:px-8 max-w-[90rem] mx-auto w-full">
            <div className="max-w-4xl">
              <div className="flex items-center gap-4 mb-8 animate-fade-in-top-left">
                <div className="h-[2px] w-12 bg-[#A07A41]"></div>
                <span className="text-[#A07A41] uppercase tracking-[0.4em] text-[10px] sm:text-xs font-bold font-sans">Operational Legal Excellence</span>
              </div>
              
              <h1 className="text-4xl sm:text-5xl md:text-6xl font-serif font-bold text-white leading-[1.1] mb-8 tracking-tight animate-fade-in-left animation-delay-200">
                Law Firm Back-Office <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#C29D64] via-[#A07A41] to-[#785A2D]">Support Services UK.</span>
              </h1>
              
              <p className="text-base md:text-lg text-gray-300 font-sans font-light leading-relaxed max-w-2xl mb-12 animate-fade-in-bottom-left animation-delay-400">
                Operational, administrative, and legal workflow support designed to help law firms scale efficiently, reduce workload pressure, and improve case handling capacity.
              </p>

              <div className="flex flex-col sm:flex-row gap-5 mb-20 animate-fade-in-right animation-delay-600">
                <button className="group relative flex items-center justify-center gap-3 px-10 py-5 bg-[#1B2D33] border border-white/10 text-white font-bold tracking-widest uppercase text-xs md:text-sm rounded transition-all duration-300 hover:bg-[#A07A41] shadow-[0_0_20px_rgba(0,0,0,0.1)] overflow-hidden">
                  <span className="relative z-10">Get Back-Office Support</span>
                  <ArrowRight className="h-4 w-4 relative z-10 transform group-hover:translate-x-2 transition-transform duration-300" />
                </button>
                <div className="flex flex-col justify-center">
                   <p className="text-[#A07A41] text-[10px] font-black uppercase tracking-[0.3em] mb-1">Book Consultation</p>
                   <p className="text-white/40 text-[10px] italic">Efficiency Strategy Session</p>
                </div>
              </div>

              <div className="grid grid-cols-2 lg:grid-cols-3 gap-12 border-t border-white/10 pt-12 animate-fade-in-up animation-delay-600">
                 {[
                   { t: "UK legal workflow experience", s: "Local Domain Expertise" },
                   { t: "Confidential & structured support", s: "Security First" },
                   { t: "Scalable law firm solutions", s: "Capacity-Driven" }
                 ].map((item, idx) => (
                   <div key={idx} className="space-y-1">
                      <span className="text-white font-serif font-bold text-lg block">{item.t}</span>
                      <span className="text-[#A07A41]/50 text-[10px] font-black uppercase tracking-widest leading-none">{item.s}</span>
                   </div>
                 ))}
              </div>
            </div>
          </div>
        </section>

        {/* 2. WHAT IS BACK-OFFICE SUPPORT */}
        <section ref={sectionRefs.what} data-section="what" className="py-16 md:py-24 bg-[#2A454E] overflow-hidden">
           <div className="px-4 sm:px-6 lg:px-8 max-w-[90rem] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
              <div className={`${visibleSections.what ? 'animate-fade-in-left' : 'opacity-0'}`}>
                 <h2 className="text-3xl md:text-5xl font-serif font-bold text-white mb-8 tracking-tight leading-tight uppercase">
                   What is Law Firm <br />
                   <span className="italic font-light text-[#A07A41]">Back-Office Support?</span>
                 </h2>
                 <div className="space-y-6 text-gray-300 font-light text-base md:text-lg leading-relaxed border-l-4 border-white/5 pl-6 md:pl-8 italic mb-10 md:mb-12">
                   <p>Law firm back-office support refers to the operational and administrative services that help legal teams manage documentation, case workflows, compliance tasks, and client servicing behind the scenes.</p>
                   <p>It is not client-facing legal work—it is the infrastructure that keeps a law firm running efficiently.</p>
                 </div>
                 <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {[
                      "Case file management",
                      "Legal documentation processing",
                      "Administrative workflow support",
                      "Compliance and reporting assistance"
                    ].map((item, idx) => (
                      <div key={idx} className="flex items-center gap-4 p-5 bg-[#1B2D33] rounded-2xl border border-white/5 group hover:border-[#A07A41]/30 transition-all">
                         <div className="w-8 h-8 shrink-0 rounded-full bg-[#2A454E] flex items-center justify-center font-serif font-black text-[#A07A41] group-hover:bg-[#A07A41] group-hover:text-black transition-all text-xs">0{idx+1}</div>
                         <span className="text-gray-200 group-hover:text-white font-bold text-sm">{item}</span>
                      </div>
                    ))}
                 </div>
              </div>
              <div className={`${visibleSections.what ? 'animate-fade-in-right' : 'opacity-0'}`}>
                 <div className="relative group">
                    <img src="/doc.jpg" alt="Back-office operations" className="rounded-3xl shadow-biggest h-[300px] md:h-[550px] w-full object-cover grayscale transition-all duration-1000 group-hover:grayscale-0" />
                    <div className="absolute top-6 right-6 md:top-10 md:right-10 bg-[#A07A41] p-6 md:p-10 rounded-2xl md:rounded-3xl hidden md:block border border-black/10">
                       <Settings className="h-6 w-6 md:h-10 md:w-10 text-black" />
                    </div>
                 </div>
              </div>
           </div>
        </section>

        {/* 3. WHO THIS IS FOR */}
        <section ref={sectionRefs.who} data-section="who" className="py-16 md:py-24 bg-[#1B2D33] border-y border-white/5">
          <div className="px-4 sm:px-6 lg:px-8 max-w-[90rem] mx-auto text-center">
             <div className={`mb-12 md:mb-20 ${visibleSections.who ? 'animate-fade-in-down' : 'opacity-0'}`}>
                <h2 className="text-3xl md:text-6xl font-serif font-bold text-white mb-6 uppercase tracking-tight leading-tight">
                   Who Needs <span className="italic font-light text-[#A07A41]">Back-Office Legal Support?</span>
                </h2>
                <p className="text-gray-500 max-w-xl mx-auto font-light text-sm italic px-4"> 👉 If your firm is struggling with admin overload, this is built for you.</p>
             </div>
             
             <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
                {[
                  { t: "SME Law Firms", d: "Scaling beyond manual systems to automated, professional support.", ani: "animate-fade-in-top-left" },
                  { t: "Solo Solicitors", d: "Managing high case volumes without the overhead of in-house staff.", ani: "animate-fade-in-up" },
                  { t: "Scaling Practices", d: "Expanding capacity without the risk of administrative collapse.", ani: "animate-fade-in-down" },
                  { t: "Overloaded Teams", d: "Relieving pressure on paralegals to focus on more complex tasks.", ani: "animate-fade-in-right" },
                  { t: "Focused Teams", d: "Providing specialized support for IP and litigation-heavy firms.", ani: "animate-fade-in-bottom-right" }
                ].map((item, idx) => (
                  <div key={idx} className={`p-8 md:p-10 bg-[#2A454E]/20 border border-white/5 rounded-3xl hover:border-[#A07A41] transition-all duration-500 ${visibleSections.who ? item.ani : 'opacity-0'}`} style={{ animationDelay: `${idx * 150}ms` }}>
                     <div className="text-[#A07A41] font-black text-[10px] uppercase tracking-[0.4em] mb-8 block">Target Workflow</div>
                     <h4 className="text-white font-serif font-bold text-xl mb-4 leading-tight">{item.t}</h4>
                     <p className="text-gray-400 text-sm font-light leading-relaxed italic">{item.d}</p>
                  </div>
                ))}
             </div>
          </div>
        </section>

        {/* 4. WHAT WE HANDLE */}
        <section ref={sectionRefs.handle} data-section="handle" className="py-16 md:py-24 bg-[#2A454E] overflow-hidden">
           <div className="px-4 sm:px-6 lg:px-8 max-w-[90rem] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
              <div className={`${visibleSections.handle ? 'animate-fade-in-bottom-left' : 'opacity-0'}`}>
                 <img src="/saa.jpg" alt="Handling legal docs" className="rounded-[2.5rem] md:rounded-[4rem] h-[300px] md:h-[600px] w-full object-cover brightness-75 grayscale hover:grayscale-0 transition-all duration-700" />
              </div>
              <div className={`${visibleSections.handle ? 'animate-fade-in-top-right' : 'opacity-0'}`}>
                 <h2 className="text-3xl md:text-5xl font-serif font-bold text-white mb-8 md:mb-10 tracking-tight uppercase">
                    What Our Back-Office <br />
                    <span className="italic font-light text-[#A07A41]">Support Includes.</span>
                 </h2>
                 <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-6">
                    {[
                      { t: "Case File Management", i: Layout, ani: "animate-fade-in-left" },
                      { t: "Doc Preparation Support", i: FileText, ani: "animate-fade-in-right" },
                      { t: "Notice Template Drafting", i: ClipboardList, ani: "animate-fade-in-up" },
                      { t: "IP & DMCA Documentation", i: Send, ani: "animate-fade-in-down" },
                      { t: "Client Onboarding Docs", i: Users, ani: "animate-fade-in-top-left" },
                      { t: "Workflow Coordination", i: Settings, ani: "animate-fade-in-bottom-right" }
                    ].map((v, idx) => {
                      const Icon = v.i;
                      return (
                        <div key={idx} className={`flex flex-col p-6 md:p-8 bg-[#1B2D33] rounded-2xl md:rounded-3xl group hover:bg-[#A07A41] transition-all duration-500 ${visibleSections.handle ? v.ani : 'opacity-0'}`} style={{ animationDelay: `${idx * 100}ms` }}>
                           <Icon className="h-5 w-5 md:h-6 md:w-6 text-[#A07A41] group-hover:text-black mb-4 md:mb-6 transition-colors" />
                           <span className="text-white group-hover:text-black font-bold text-xs md:text-sm tracking-widest uppercase transition-colors">{v.t}</span>
                        </div>
                      );
                    })}
                 </div>
              </div>
           </div>
        </section>

        {/* 5. HOW IT WORKS */}
        <section ref={sectionRefs.how} data-section="how" className="py-16 md:py-24 bg-[#1B2D33]">
           <div className="px-4 sm:px-6 lg:px-8 max-w-[90rem] mx-auto text-center">
              <div className={`mb-12 md:mb-20 ${visibleSections.how ? 'animate-fade-in-down' : 'opacity-0'}`}>
                 <h2 className="text-3xl md:text-6xl font-serif font-bold text-white mb-6 uppercase tracking-tight">Structured <span className="italic font-light text-[#A07A41]">Execution Protocol.</span></h2>
                 <p className="text-gray-500 max-w-xl mx-auto font-light text-sm italic px-4">Integrating seamlessly with your firm's DNA.</p>
              </div>
              
              <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 text-left">
                 {[
                   { t: "Workflow Assessment", d: "We analyze your firm’s operational bottlenecks and resource gaps.", ani: "animate-fade-in-left" },
                   { t: "Task Structuring", d: "We define which tasks can be delegated safely and optimized.", ani: "animate-fade-in-top-left" },
                   { t: "Support Integration", d: "Our team integrates into your existing systems and processes.", ani: "animate-fade-in-up" },
                   { t: "Daily/Weekly Execution", d: "Tasks are handled consistently based on predefined priorities.", ani: "animate-fade-in-top-right" },
                   { t: "Reporting & Optimization", d: "You receive routine updates and continuous efficiency insights.", ani: "animate-fade-in-right" }
                 ].map((step, idx) => (
                   <div key={idx} className={`p-8 md:p-10 bg-[#2A454E]/20 border border-white/5 rounded-3xl relative overflow-hidden flex flex-col hover:border-[#A07A41] transition-all duration-500 ${visibleSections.how ? step.ani : 'opacity-0'}`} style={{ animationDelay: `${idx * 150}ms` }}>
                      <div className="text-[#A07A41] font-black text-2xl font-serif italic mb-6">0{idx+1}</div>
                      <h4 className="text-white font-serif font-bold text-xl mb-4 leading-tight">{step.t}</h4>
                      <p className="text-gray-400 text-sm font-light leading-relaxed italic">{step.d}</p>
                   </div>
                 ))}
              </div>
           </div>
        </section>

        {/* 6. WHY OUTSOURCE */}
        <section ref={sectionRefs.whyOutsource} data-section="whyOutsource" className="py-16 md:py-24 bg-[#2A454E] overflow-hidden border-y border-white/5">
           <div className="px-4 sm:px-6 lg:px-8 max-w-[90rem] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 items-center">
              <div className={`${visibleSections.whyOutsource ? 'animate-fade-in-top-left' : 'opacity-0'}`}>
                 <h2 className="text-3xl md:text-5xl font-serif font-bold text-white mb-8 md:mb-10 tracking-tight uppercase leading-tight">
                    Why Law Firms <br />
                    <span className="italic font-light text-[#A07A41]">Outsource Back-Office.</span>
                 </h2>
                 <p className="text-[#A07A41] text-sm md:text-base font-bold italic mb-10 border-l-2 border-[#A07A41] pl-6 animate-pulse">👉 This is not cost-cutting—it’s capacity expansion.</p>
                 <div className="space-y-6">
                    {[
                      { t: "Administrative Relief", d: "Reduces internal administrative burden significantly." },
                      { t: "Solicitor Focus", d: "Frees solicitors to focus purely on billable legal work." },
                      { t: "Processing Speed", d: "Improves case processing speed and turnaround times." },
                      { t: "Bottleneck Removal", d: "Eliminates operational bottlenecks in file handling." },
                      { t: "Scalability", d: "Scales firm capacity without hiring full-time staff." }
                    ].map((item, idx) => (
                      <div key={idx} className={`flex gap-6 group border-b border-white/5 pb-6 last:border-0 ${visibleSections.whyOutsource ? 'animate-fade-in-right' : ''}`} style={{ animationDelay: `${idx * 150}ms` }}>
                         <CheckCircle className="h-5 w-5 text-[#A07A41] shrink-0 mt-1" />
                         <div>
                            <h4 className="text-white font-bold text-lg mb-1 group-hover:text-[#A07A41] transition-colors">{item.t}</h4>
                            <p className="text-gray-400 text-sm font-light leading-relaxed">{item.d}</p>
                         </div>
                      </div>
                    ))}
                 </div>
              </div>
              <div className={`${visibleSections.whyOutsource ? 'animate-fade-in-bottom-right' : 'opacity-0'}`}>
                 <div className="relative">
                    <img src="/saa2.jpg" alt="Efficiency results" className="rounded-[2.5rem] md:rounded-[4rem] h-[500px] w-full object-cover grayscale opacity-40 shadow-big" />
                    <div className="absolute inset-0 flex flex-col justify-center items-center p-12 text-center">
                       <Clock className="h-16 w-16 text-[#A07A41] mb-8" />
                       <p className="text-white text-2xl font-serif italic mb-2 tracking-tight">"Efficiency regained."</p>
                       <p className="text-[#A07A41] uppercase tracking-widest text-xs font-black">Back-Office Integration</p>
                    </div>
                 </div>
              </div>
           </div>
        </section>

        {/* 7. KEY BENEFITS */}
        <section ref={sectionRefs.benefits} data-section="benefits" className="py-24 bg-[#1B2D33]">
           <div className="px-4 sm:px-6 lg:px-8 max-w-[90rem] mx-auto">
              <div className={`text-center mb-20 ${visibleSections.benefits ? 'animate-fade-in-down' : 'opacity-0'}`}>
                 <h2 className="text-3xl md:text-5xl font-serif font-bold text-white mb-6 uppercase tracking-tight">Strategic <span className="italic font-light text-[#A07A41]">Impact Benefits.</span></h2>
              </div>
              
              <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-8">
                {[
                  { t: "Faster Case Turnaround", d: "Accelerated workflows from intake to completion.", ani: "animate-fade-in-left" },
                  { t: "Documentation Accuracy", d: "Process-driven handling reduces typing/clerical errors.", ani: "animate-fade-in-top-left" },
                  { t: "Reduced Pressure", d: "Lower burnout rates for in-house legal staff.", ani: "animate-fade-in-up" },
                  { t: "Better Systems", d: "Implementation of superior structured management systems.", ani: "animate-fade-in-top-right" },
                  { t: "Zero Overhead", d: "High-level support without fixed employee costs.", ani: "animate-fade-in-right" }
                ].map((item, idx) => (
                  <div key={idx} className={`p-10 bg-[#2A454E]/40 border border-white/5 rounded-3xl group hover:border-[#A07A41] transition-all duration-700 ${visibleSections.benefits ? item.ani : 'opacity-0'}`} style={{ animationDelay: `${idx * 150}ms` }}>
                     <Target className="h-10 w-10 text-[#A07A41] mb-10 group-hover:scale-110 transition-transform" />
                     <h4 className="text-white font-serif font-bold text-xl mb-4 group-hover:text-[#A07A41] transition-colors leading-tight">{item.t}</h4>
                     <p className="text-gray-500 font-sans font-light text-sm italic group-hover:text-white/80 transition-colors leading-relaxed">{item.d}</p>
                  </div>
                ))}
              </div>
           </div>
        </section>

        {/* 8. WHY CHOOSE US */}
        <section ref={sectionRefs.whyChoose} data-section="whyChoose" className="py-16 md:py-24 bg-[#2A454E] overflow-hidden border-y border-white/5">
           <div className="px-4 sm:px-6 lg:px-8 max-w-[90rem] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 items-center">
              <div className={`${visibleSections.whyChoose ? 'animate-fade-in-bottom-left' : 'opacity-0'}`}>
                 <div className="relative">
                    <img src="/hero.jpg" alt="Why Choose Us" className="rounded-[2.5rem] md:rounded-[4rem] h-[300px] md:h-[500px] w-full object-cover grayscale brightness-50" />
                    <div className="absolute inset-0 flex flex-col justify-center items-center p-8 md:p-12 text-center">
                       <Briefcase className="h-10 w-10 md:h-12 md:w-12 text-[#A07A41] mb-6 animate-pulse" />
                       <p className="text-white text-base md:text-lg font-light italic leading-loose px-4 max-w-sm">"Most providers fail because they treat law firms like normal businesses. They’re not."</p>
                    </div>
                 </div>
              </div>
              <div className={`${visibleSections.whyChoose ? 'animate-fade-in-top-right' : 'opacity-0'}`}>
                 <h2 className="text-3xl md:text-5xl font-serif font-bold text-white mb-8 md:mb-10 tracking-tight uppercase leading-tight">
                    Why Choose Our <br />
                    <span className="italic font-light text-[#A07A41]">Law Firm Support?</span>
                 </h2>
                 <div className="space-y-8">
                    {[
                      { t: "Deep Legal Workflow Intelligence", d: "We understand solicitors' precise operational needs." },
                      { t: "Process-Driven Execution", d: "Structured handling of every task, from filing to drafting." },
                      { t: "Secure & Confidential Handling", d: "High-level security protocols for all firm documentation." },
                      { t: "Specialized IP/Dispute Experience", d: "Expertise in complex DMCA, IP, and litigation workflows." }
                    ].map((item, idx) => (
                      <div key={idx} className={`flex gap-6 md:gap-8 group border-b border-white/5 pb-6 last:border-0 ${visibleSections.whyChoose ? 'animate-fade-in-right' : ''}`} style={{ animationDelay: `${idx * 200}ms` }}>
                         <div className="h-10 w-10 shrink-0 bg-[#1B2D33] rounded-xl flex items-center justify-center text-[#A07A41] font-bold group-hover:bg-[#A07A41] group-hover:text-black transition-all">0{idx+1}</div>
                         <div>
                            <h4 className="text-white font-bold text-lg mb-1 group-hover:text-[#A07A41] transition-colors">{item.t}</h4>
                            <p className="text-gray-400 text-sm font-light leading-relaxed">{item.d}</p>
                         </div>
                      </div>
                    ))}
                 </div>
              </div>
           </div>
        </section>

        {/* 9. CONFIDENTIALITY & COMPLIANCE */}
        <section ref={sectionRefs.legal} data-section="legal" className="py-16 md:py-24 bg-[#1B2D33]">
           <div className="px-4 sm:px-6 lg:px-8 max-w-[90rem] mx-auto text-center">
              <div className={`mb-12 md:mb-20 ${visibleSections.legal ? 'animate-fade-in-down' : 'opacity-0'}`}>
                 <h2 className="text-3xl md:text-5xl font-serif font-bold text-white mb-6 uppercase tracking-tight leading-tight">Confidentiality <span className="text-[#A07A41] italic">& Legal Compliance.</span></h2>
              </div>
              
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
                 <div className={`bg-[#2A454E]/20 p-8 md:p-12 rounded-[2rem] md:rounded-[3.5rem] text-left border border-white/5 ${visibleSections.legal ? 'animate-fade-in-left' : 'opacity-0'}`}>
                    <span className="text-[#A07A41] font-black text-[10px] uppercase tracking-[0.4em] mb-8 md:mb-10 block">Security Framework</span>
                    <div className="space-y-5 md:space-y-6">
                       {[
                         "Secure handling of all legal documents",
                         "Confidential internal workflow processes",
                         "Non-disclosure based service operations",
                         "Structured compliance with UK legal expectations"
                       ].map((v, i) => (
                         <div key={i} className="flex items-center gap-4 md:gap-6 group">
                            <ShieldCheck className="h-5 w-5 md:h-6 md:w-6 text-[#A07A41]/10 group-hover:text-[#A07A41] transition-colors" />
                            <span className="text-gray-300 font-light text-base md:text text-lg italic group-hover:text-white transition-colors">{v}</span>
                         </div>
                       ))}
                    </div>
                 </div>
                 <div className={`space-y-8 md:space-y-10 text-left px-4 md:px-0 ${visibleSections.legal ? 'animate-fade-in-right' : 'opacity-0'}`}>
                    <p className="text-gray-400 font-sans font-light text-base md:text-lg leading-relaxed italic border-l-2 border-[#A07A41] pl-6 md:pl-8">
                       Our back-office support also assists with <strong>trademark objection response UK</strong>, <strong>UKIPO objection reply</strong>, and internal preparation for <strong>intellectual property dispute UK</strong> cases requiring structured <strong>legal response trademark UK</strong> workflows. We provide comprehensive <strong>trademark refusal response UK</strong> and <strong>trademark application support UK</strong> administrative aid.
                    </p>
                    <div className="flex items-center gap-10">
                       <Shield className="h-10 w-10 md:h-12 md:w-12 text-white/5" />
                       <div className="h-[1px] flex-grow bg-white/5"></div>
                    </div>
                 </div>
              </div>
           </div>
        </section>

        {/* 10. FAQ SECTION */}
        <section ref={sectionRefs.faq} data-section="faq" className="py-24 bg-[#2A454E]">
           <div className="px-4 sm:px-6 lg:px-8 max-w-[55rem] mx-auto text-center">
              <div className="mb-20">
                 <h2 className={`text-4xl md:text-6xl font-serif font-bold text-white mb-6 leading-tight tracking-tight uppercase ${visibleSections.faq ? 'animate-fade-in-down' : 'opacity-0'}`}>
                    Back-Office <span className="italic font-light text-[#A07A41]">F.A.Q.</span>
                 </h2>
              </div>
              <div className="space-y-4 text-left">
                {[
                  { q: "Is this legal outsourcing?", a: "No, this is operational and administrative support, not legal representation. We provide the infrastructure for your solicitors to perform their legal duty efficiently." },
                  { q: "Can you integrate with our existing systems?", a: "Yes, our support is highly adaptable. We work with your existing case management software, communication tools, and internal firm protocols." },
                  { q: "Do you handle client-facing legal work?", a: "No, our team focuses exclusively on back-office and internal operations. We support the firm, while the firm supports the end client." },
                  { q: "Is this suitable for small firms?", a: "ABSOLUTELY. It is especially beneficial for boutique and small firms scaling beyond solo operations without wanting high fixed overheads." }
                ].map((faq, idx) => (
                   <div key={idx} className={`border border-white/5 rounded-3xl bg-[#1B2D33]/40 backdrop-blur-md overflow-hidden hover:border-[#A07A41]/30 transition-all duration-500 ${visibleSections.faq ? 'animate-fade-in-up' : 'opacity-0'}`} style={{ animationDelay: `${idx * 100}ms` }}>
                    <button onClick={() => setActiveFaq(activeFaq === idx ? null : idx)} className="w-full p-10 flex items-center justify-between group">
                      <span className={`text-left text-xl md:text-2xl font-serif font-bold transition-all duration-500 ${activeFaq === idx ? 'text-[#A07A41]' : 'text-gray-200 group-hover:text-white'}`}>{faq.q}</span>
                      <ChevronDown className={`h-6 w-6 text-[#A07A41] transition-transform duration-500 ${activeFaq === idx ? 'rotate-180 text-white' : ''}`} />
                    </button>
                    <div className={`transition-all duration-700 ease-in-out px-10 ${activeFaq === idx ? 'max-h-[500px] pb-10 opacity-100' : 'max-h-0 opacity-0 overflow-hidden'}`}>
                      <p className="border-t border-white/5 pt-10 text-gray-400 text-lg leading-relaxed font-light italic">{faq.a}</p>
                    </div>
                  </div>
                ))}
              </div>
           </div>
        </section>

        {/* 11. FINAL CTA */}
        <section ref={sectionRefs.cta} data-section="cta" className="relative py-40 bg-[#1B2D33] text-center overflow-hidden">
          <div className="absolute inset-0 z-0">
             <img src="/saa3.jpg" alt="Final CTA Back-Office" className="w-full h-full object-cover opacity-10" />
          </div>
          <div className="relative z-10 px-4 sm:px-6 lg:px-8 max-w-[85rem] mx-auto">
            <div className={`transition-all duration-1000 ${visibleSections.cta ? 'animate-fade-in-up' : 'opacity-0'}`}>
              <h2 className="text-4xl md:text-7xl font-serif font-bold text-white mb-10 leading-[1.05] tracking-tight uppercase">
                Streamline Your Law <br />
                <span className="italic font-light text-[#A07A41]">Firm Operations.</span>
              </h2>
              <p className="text-gray-300 mb-16 max-w-2xl mx-auto font-light text-base md:text-lg leading-relaxed italic border-l-2 border-[#A07A41] pl-8">
                Stop losing time on repetitive administrative work. Build a scalable legal operation with structured back-office support.
              </p>
              
              <div className="flex flex-col sm:flex-row justify-center items-center gap-10">
                <button className="group relative flex items-center justify-center gap-3 px-12 py-6 bg-[#1B2D33] border border-white/10 text-white font-bold tracking-widest uppercase text-xs md:text-sm rounded transition-all duration-300 hover:bg-[#A07A41] shadow-[0_0_20px_rgba(0,0,0,0.1)] overflow-hidden">
                   <span className="relative z-10 font-black">Get Support Plan</span>
                   <ArrowRight className="h-6 w-6 relative z-10 transform group-hover:translate-x-1 transition-transform duration-300" />
                </button>
                <div className="flex flex-col items-center sm:items-start group cursor-pointer">
                   <p className="text-[#A07A41] font-black text-2xl italic mb-1 group-hover:text-white transition-colors">Speak to Consultant</p>
                   <div className="h-[2px] w-full bg-[#A07A41]/10 group-hover:bg-[#A07A41] transition-all"></div>
                </div>
              </div>
            </div>
          </div>
        </section>

      </main>
    </div>
  );
};

export default LawFirmBackOfficeSupportPage;
