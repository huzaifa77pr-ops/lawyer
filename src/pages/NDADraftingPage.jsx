import React, { useEffect, useState, useRef } from 'react';
import { 
  ArrowRight, Search, CheckCircle, Zap, Database, 
  Shield, FileText, ChevronDown, Award, Briefcase, Target, 
  ShieldAlert, ClipboardCheck, Layers, FileSearch, 
  Landmark, Bookmark, Lightbulb, 
  ShieldCheck, FileCheck, Gavel, Lock, FileSignature, 
  Users, Scale, Clock, Terminal, Globe, PenTool
} from 'lucide-react';

const NDADraftingPage = () => {
  const [activeFaq, setActiveFaq] = useState(null);
  const [visibleSections, setVisibleSections] = useState({
    hero: false,
    intro: false,
    whatIs: false,
    services: false,
    process: false,
    legal: false,
    whoNeeds: false,
    deliverables: false,
    whyChoose: false,
    faq: false,
    cta: false
  });

  const sectionRefs = {
    hero: useRef(null),
    intro: useRef(null),
    whatIs: useRef(null),
    services: useRef(null),
    process: useRef(null),
    legal: useRef(null),
    whoNeeds: useRef(null),
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

  const coreServices = [
    {
      id: "4.1",
      title: "Custom NDA Drafting",
      desc: "We create tailored NDAs based on your specific business needs, ensuring full protection of specialized data.",
      deliverable: "Fully customized NDA document",
      icon: FileSignature,
      anim: "animate-fade-in-top-left"
    },
    {
      id: "4.2",
      title: "NDA Review & Risk Analysis",
      desc: "Already have an NDA? We analyze it for risks, missing protections, and potential loopholes.",
      deliverable: "Detailed review report + recommendations",
      icon: Search,
      anim: "animate-fade-in-up"
    },
    {
      id: "4.3",
      title: "Mutual & One-Way NDA Drafting",
      desc: "Drafting both Mutual NDAs for partnership and One-Way NDAs for single party disclosure situations.",
      deliverable: "Structured agreement based on use-case",
      icon: Layers,
      anim: "animate-fade-in-top-right"
    },
    {
      id: "4.4",
      title: "NDA for Startups & Investors",
      desc: "Protect your intellectual property during funding rounds, pitch presentations, and VC discussions.",
      deliverable: "Startup-focused NDA",
      icon: Target,
      anim: "animate-fade-in-bottom-left"
    },
    {
      id: "4.5",
      title: "NDA for Employees & Contractors",
      desc: "Secure internal business info with specialized confidentiality clauses for staff and external vendors.",
      deliverable: "Employment-focused NDA",
      icon: Users,
      anim: "animate-fade-in-bottom-right"
    }
  ];

  const deliverables = [
    { title: "Custom NDA document", icon: FileSignature },
    { title: "NDA review report", icon: FileSearch },
    { title: "Risk analysis summary", icon: ShieldAlert },
    { title: "Clause improvement suggestions", icon: PenTool },
    { title: "Ready-to-sign agreement", icon: FileCheck }
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
             <img src="/nda.jpg" alt="NDA Drafting Services" className="w-full h-full object-cover object-center transition-transform duration-[20s] group-hover:scale-110" />
             <div className="absolute inset-0 bg-gradient-to-t from-[#2A454E] via-[#2A454E]/70 to-transparent"></div>
          </div>


          <div className="relative z-10 px-4 sm:px-6 lg:px-8 max-w-[90rem] mx-auto w-full">
            <div className="max-w-4xl">
              <div className={`flex items-center gap-4 mb-6 transition-all duration-1000 ${visibleSections.hero ? 'animate-fade-in-right' : 'opacity-0'}`}>
                <div className="h-[1px] w-12 bg-[#A07A41]"></div>
                <span className="text-[#A07A41] uppercase tracking-[0.4em] text-[10px] font-bold">Confidentiality Protection</span>
              </div>
              
              <h1 className={`text-4xl md:text-5xl lg:text-7xl font-serif font-bold text-white leading-tight mb-8 tracking-tight transition-all duration-1000 ${visibleSections.hero ? 'opacity-100' : 'opacity-0'}`}>
                <span className="block animate-fade-in-top-left">UK NDA Drafting</span>
                <span className="block italic font-light text-[#A07A41] animate-fade-in-up animation-delay-200">& Review Services</span>
              </h1>
              
              <p className={`text-gray-300 text-base md:text-xl font-sans font-light leading-relaxed max-w-2xl mb-10 border-l-2 border-[#A07A41]/30 pl-8 transition-all duration-1000 ${visibleSections.hero ? 'animate-fade-in-left animation-delay-400' : 'opacity-0'}`}>
                Protect your confidential information with professionally drafted Non-Disclosure Agreements tailored to UK law and business needs.
              </p>

              <div className={`grid sm:grid-cols-3 gap-4 mb-12 transition-all duration-1000 ${visibleSections.hero ? 'animate-fade-in-bottom-right animation-delay-500' : 'opacity-0'}`}>
                {[
                  { icon: FileSignature, text: "Custom DNA Drafting" },
                  { icon: Search, text: "Risk Analysis" },
                  { icon: ShieldCheck, text: "Legally Sound" }
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-4 p-4 bg-[#2A454E]/60 border border-white/10 rounded-2xl backdrop-blur-sm shadow-xl">
                    <item.icon className="h-5 w-5 text-[#A07A41]" />
                    <span className="text-xs font-medium tracking-wide text-gray-200">{item.text}</span>
                  </div>
                ))}
              </div>

              <div className={`transition-all duration-1000 ${visibleSections.hero ? 'animate-fade-in-up animation-delay-600' : 'opacity-0'}`}>
                <a href="#contact" className="group relative inline-flex items-center gap-4 px-10 py-5 bg-[#A07A41] text-black font-bold uppercase tracking-widest text-xs rounded-xl transition-all duration-500 hover:bg-white hover:scale-105 shadow-2xl">
                  <span>Request NDA Drafting</span>
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
          className="relative py-24 lg:py-40 bg-[#2A454E] overflow-hidden"
        >
          <div className="px-4 sm:px-6 lg:px-8 max-w-[90rem] mx-auto z-10 relative">
            <div className={`grid lg:grid-cols-2 gap-20 items-center ${visibleSections.intro ? 'animate-fade-in-bottom-left' : 'opacity-0'}`}>
              
              <div className="relative group">
                <div className="aspect-[4/5] rounded-[3rem] overflow-hidden border border-[#A07A41]/20 relative bg-[#2A454E] flex items-center justify-center">
                   <img src="/nd1.jpg" alt="NDA Strategy" className="w-full h-full object-cover object-center transition-all duration-1000 group-hover:scale-105 grayscale group-hover:grayscale-0" />
                   <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-[#1B2D33]/40 to-[#1B2D33]"></div>
                </div>
              </div>


              <div className={`${visibleSections.intro ? 'animate-fade-in-top-right' : 'opacity-0'}`}>
                <div className="flex items-center gap-4 mb-8">
                  <div className="h-[1px] w-12 bg-[#A07A41]"></div>
                  <span className="text-[#A07A41] uppercase tracking-[0.4em] text-xs font-bold">Safeguard Your Assets</span>
                </div>
                <h2 className="text-3xl md:text-5xl font-serif font-bold text-white leading-tight mb-10">
                  Protect Your Info <br />
                  <span className="italic font-light text-[#A07A41]">Before Issues Arise.</span>
                </h2>
                <div className="space-y-8">
                  <p className="text-gray-300 text-base md:text-lg font-sans font-light leading-relaxed">
                    Confidential information is one of the most valuable assets in any business. Without proper legal protection, sensitive data can be exposed, misused, or lead to costly disputes.
                  </p>
                  
                  <p className="text-gray-300 text-base md:text-lg font-sans font-light leading-relaxed">
                    H&S CO provides professional NDA drafting and review services tailored for UK businesses, startups, and legal professionals. We ensure your agreements are clear, enforceable, and aligned with UK legal standards.
                  </p>
                  
                  <div className="p-8 bg-[#1B2D33]/50 backdrop-blur-xl border-l-4 border-[#A07A41] rounded-r-2xl relative overflow-hidden group">
                    <div className="relative z-10 flex items-start gap-4">
                       <Lock className="h-6 w-6 text-[#A07A41] shrink-0 mt-1" />
                       <div>
                         <p className="text-lg font-serif italic text-white leading-tight">
                           Our Focus: <span className="text-[#A07A41] font-bold text-xl uppercase ml-2 tracking-widest">Enforceability.</span>
                         </p>
                       </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 3. What is an NDA */}
        <section 
          ref={sectionRefs.whatIs}
          data-section="whatIs"
          className="relative py-28 bg-[#1B2D33] overflow-hidden border-y border-white/5"
        >
          <div className="px-4 sm:px-6 lg:px-8 max-w-[90rem] mx-auto relative z-10">
            <div className={`grid lg:grid-cols-2 gap-16 items-center ${visibleSections.whatIs ? 'animate-fade-in-up' : 'opacity-0'}`}>
              <div>
                <span className="text-[#A07A41] uppercase tracking-[0.4em] text-[10px] font-bold mb-4 block">Definition & Purpose</span>
                <h2 className="text-3xl md:text-5xl font-serif font-bold text-white mb-8 tracking-tight">What is an <br /><span className="italic font-light text-[#A07A41]">NDA?</span></h2>
                <p className="text-gray-300 text-lg font-light leading-relaxed mb-8">
                  A Non-Disclosure Agreement (NDA) is a legally binding contract that protects confidential information from being disclosed to unauthorized parties.
                </p>
              </div>
              
              <div className="grid sm:grid-cols-2 gap-6">
                {[
                  { title: "Business Partnerships", icon: Briefcase },
                  { title: "Employment Agreements", icon: Users },
                  { title: "Investor Discussions", icon: Landmark },
                  { title: "Client Engagements", icon: ShieldCheck }
                ].map((item, i) => (
                  <div key={i} className="flex flex-col gap-4 p-8 bg-[#2A454E] border border-white/5 rounded-3xl hover:border-[#A07A41]/50 transition-all duration-300 shadow-xl">
                    <div className="h-12 w-12 rounded-xl bg-[#1B2D33] flex items-center justify-center">
                       <item.icon className="h-6 w-6 text-[#A07A41]" />
                    </div>
                    <span className="text-white font-serif font-bold text-sm leading-snug">{item.title}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* 4. Core Services */}
        <section 
          ref={sectionRefs.services}
          data-section="services"
          className="relative py-24 lg:py-40 bg-[#2A454E] overflow-hidden"
        >
          <div className="px-4 sm:px-6 lg:px-8 max-w-[90rem] mx-auto relative z-10">
            <div className="mb-24 flex flex-col md:flex-row md:items-end justify-between gap-8">
              <div className="max-w-3xl border-l-[3px] border-[#A07A41] pl-8">
                <span className="text-[#A07A41] uppercase tracking-[0.4em] text-xs font-bold mb-4 block">Core Services</span>
                <h2 className="text-3xl md:text-6xl font-serif font-bold text-white tracking-tight">Our NDA <span className="italic font-light text-[#A07A41]">Solutions.</span></h2>
              </div>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {coreServices.map((service, i) => (
                <div 
                  key={i} 
                  className={`group relative p-10 bg-[#1B2D33] border border-white/5 rounded-3xl hover:-translate-y-2 hover:bg-[#1B2D33]/80 hover:border-[#A07A41]/30 transition-all duration-500 overflow-hidden ${visibleSections.services ? service.anim : 'opacity-0'}`}
                  style={{ animationDelay: `${i * 150}ms` }}
                >
                  <div className="absolute -bottom-10 -right-20 opacity-[0.03] group-hover:opacity-[0.1] transition-all duration-700 group-hover:scale-125">
                    <service.icon size={200} className="text-[#A07A41]" />
                  </div>
                  
                  <div className="relative z-10 flex flex-col h-full">
                    <div className="flex justify-between items-start mb-8">
                      <div className="w-14 h-14 bg-[#2A454E] rounded-xl flex items-center justify-center group-hover:bg-[#A07A41] transition-colors duration-500 border border-[#A07A41]/10 group-hover:border-transparent">
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

        {/* 5. Our Process */}
        <section 
          ref={sectionRefs.process}
          data-section="process"
          className="relative py-24 lg:py-40 bg-[#1B2D33] border-y border-white/5"
        >
          <div className="px-4 sm:px-6 lg:px-8 max-w-[90rem] mx-auto">
            <div className="grid lg:grid-cols-2 gap-20 items-center">
              
              <div className={`${visibleSections.process ? 'animate-fade-in-top-left' : 'opacity-0'}`}>
                <div className="mb-16">
                  <span className="text-[#A07A41] uppercase tracking-[0.4em] text-xs font-bold mb-4 block">Trust Builder</span>
                  <h2 className="text-3xl md:text-5xl font-serif font-bold text-white mb-6">Our Drafting <span className="italic font-light text-[#A07A41]">Process.</span></h2>
                </div>
                
                <div className="space-y-6 relative border-l border-white/10 ml-4 py-4">
                  {[
                    "Understand your requirement",
                    "Identify risk areas",
                    "Draft or review NDA",
                    "Ensure legal clarity & enforceability",
                    "Deliver ready-to-use agreement"
                  ].map((step, i) => (
                    <div key={i} className={`relative pl-10 ${visibleSections.process ? 'animate-fade-in-left' : 'opacity-0'}`} style={{ animationDelay: `${i * 150}ms` }}>
                       <div className="absolute -left-2 top-1 w-4 h-4 bg-[#2A454E] border-2 border-[#A07A41] rounded-full shadow-[0_0_15px_rgba(160,122,65,0.4)]"></div>
                       <h4 className="text-xl font-serif font-bold text-gray-200 tracking-tight">{step}</h4>
                    </div>
                  ))}
                </div>
              </div>

               <div className={`${visibleSections.process ? 'animate-fade-in-bottom-right' : 'opacity-0'} flex flex-col gap-12`}>
                 <div className="aspect-video w-full rounded-[2rem] bg-[#2A454E] border border-white/10 flex items-center justify-center relative overflow-hidden shadow-2xl group">
                    <img src="/nd2.jpg" alt="NDA Workflow" className="w-full h-full object-cover object-center transition-all duration-1000 group-hover:scale-105 grayscale group-hover:grayscale-0" />
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-[#1B2D33]/40 to-[#1B2D33] opacity-40 pointer-events-none"></div>
                 </div>
              </div>

            </div>
          </div>
        </section>

        {/* 6. Legal Framework & Standards */}
        <section 
          ref={sectionRefs.legal}
          data-section="legal"
          className="py-24 bg-[#2A454E] border-b border-white/5"
        >
          <div className="px-4 sm:px-6 lg:px-8 max-w-[90rem] mx-auto text-center">
            <div className={`max-w-4xl mx-auto ${visibleSections.legal ? 'animate-fade-in-up' : 'opacity-0'}`}>
               <span className="text-[#A07A41] uppercase tracking-[0.4em] text-xs font-bold mb-6 block">Legal Standards</span>
               <h2 className="text-3xl md:text-5xl font-serif font-bold text-white mb-8">Frameworks <span className="italic font-light text-[#A07A41]">& Compliance.</span></h2>
               <p className="text-gray-400 text-lg font-light mb-12 leading-relaxed">
                 Our NDA services align with UK legal requirements and best practices, ensuring enforceability and clarity.
               </p>
               <div className="grid sm:grid-cols-2 gap-6">
                  <div className="p-8 bg-[#1B2D33] rounded-3xl border border-white/5 flex items-center gap-6">
                     <span className="text-[#A07A41] font-bold text-3xl opacity-20 italic">01</span>
                     <p className="text-white font-serif font-bold text-xl uppercase tracking-widest">UK GDPR</p>
                  </div>
                  <div className="p-8 bg-[#1B2D33] rounded-3xl border border-white/5 flex items-center gap-6">
                     <span className="text-[#A07A41] font-bold text-3xl opacity-20 italic">02</span>
                     <p className="text-white font-serif font-bold text-xl uppercase tracking-widest">Data Protection Act 2018</p>
                  </div>
               </div>
            </div>
          </div>
        </section>

        {/* 7. Who Needs an NDA */}
        <section 
          ref={sectionRefs.whoNeeds}
          data-section="whoNeeds"
          className="py-24 lg:py-40 bg-[#1B2D33] overflow-hidden"
        >
          <div className="px-4 sm:px-6 lg:px-8 max-w-[90rem] mx-auto">
             <div className="grid lg:grid-cols-2 gap-20 items-center">
                <div className={`${visibleSections.whoNeeds ? 'animate-fade-in-left' : 'opacity-0'}`}>
                   <span className="text-[#A07A41] uppercase tracking-[0.4em] text-xs font-bold mb-6 block">Strategic Necessity</span>
                   <h2 className="text-3xl md:text-5xl font-serif font-bold text-white mb-8">Who Needs an <span className="italic font-light text-[#A07A41]">NDA.</span></h2>
                   <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      {[ 
                        "Startups & Entrepreneurs", "Businesses & Companies", 
                        "Employers & HR Teams", "Freelancers & Consultants", 
                        "Legal Professionals" 
                      ].map((item, i) => (
                        <div key={i} className="flex items-center gap-4 p-4 bg-[#2A454E]/40 border border-white/5 rounded-xl">
                           <CheckCircle size={16} className="text-[#A07A41]" />
                           <span className="text-sm font-medium text-gray-200">{item}</span>
                        </div>
                      ))}
                   </div>
                </div>
                <div className={`${visibleSections.whoNeeds ? 'animate-fade-in-right' : 'opacity-0'}`}>
                   <div className="aspect-square rounded-[3rem] overflow-hidden bg-[#2A454E] border border-white/10 relative">
                      <img src="/nd3.jpg" alt="NDA Necessity" className="w-full h-full object-cover grayscale opacity-60" />
                      <div className="absolute inset-0 bg-gradient-to-t from-[#1B2D33] via-transparent to-transparent"></div>
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
          <div className="px-4 sm:px-6 lg:px-8 max-w-[90rem] mx-auto text-center">
             <div className="mb-24">
                <span className="text-[#A07A41] uppercase tracking-[0.4em] text-xs font-bold mb-4 block">Concrete Outputs</span>
                <h3 className="text-3xl md:text-5xl font-serif font-bold text-white mb-6">Service <span className="italic font-light text-[#A07A41]">Deliverables.</span></h3>
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
             <div className="bg-[#2A454E]/40 border border-[#A07A41]/20 rounded-[3rem] p-10 lg:p-20 relative overflow-hidden shadow-2xl">
                <div className={`text-center mb-16 relative z-10 ${visibleSections.whyChoose ? 'animate-fade-in-up' : 'opacity-0'}`}>
                   <span className="text-[#A07A41] uppercase tracking-[0.4em] text-xs font-bold mb-4 block">Proven Authority</span>
                   <h2 className="text-3xl md:text-5xl font-serif font-bold text-white">Why Choose <span className="italic font-light text-[#A07A41]">H&S CO.</span></h2>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 relative z-10">
                   {[
                     { title: "UK-Focused Drafting", desc: "Explicitly tailored for the UK jurisdiction and legal standards." },
                     { title: "Enforceable Agreements", desc: "Clear, simple, yet powerful language to ensure absolute compliance." },
                     { title: "Risk-Focused Approach", desc: "Identifying and closing loopholes before they become liability risks." },
                     { title: "Fast Turnaround", desc: "Drafting-room excellence delivered within 24–72 hours." }
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
              <span className="text-[#A07A41] uppercase tracking-[0.3em] text-[10px] font-bold mb-6 block">FAQ</span>
              <h2 className="text-3xl md:text-5xl font-serif font-bold text-white tracking-tight">Common <span className="italic font-light text-[#A07A41]">Questions.</span></h2>
            </div>

            <div className="space-y-4">
              {[
                { q: "What is an NDA used for?", a: "To protect confidential information from unauthorized disclosure." },
                { q: "Are NDAs legally enforceable in the UK?", a: "Yes, if properly drafted and compliant with UK law." },
                { q: "Do I need a lawyer for an NDA?", a: "Professional drafting ensures stronger protection and fewer risks." },
                { q: "How long does it take to draft an NDA?", a: "Typically 24–72 hours." }
              ].map((faq, index) => (
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
            <div className={`max-w-5xl mx-auto p-16 lg:p-24 bg-[#2A454E]/60 border border-[#A07A41]/10 rounded-[3rem] backdrop-blur-2xl relative overflow-hidden shadow-2xl ${visibleSections.cta ? 'animate-fade-in-up' : 'opacity-0'}`}>
              <div className="absolute -top-10 -left-10 opacity-[0.03]"><Lock size={300} className="text-[#A07A41]" /></div>
              
              <span className="text-[#A07A41] uppercase tracking-[0.5em] text-[10px] font-bold mb-10 block">Final Conversion</span>
              <h2 className="text-3xl md:text-6xl font-serif font-bold text-white mb-10 leading-tight">
                Protect Your Information — <br />
                <span className="italic font-light text-[#A07A41]">Request NDA Service Now.</span>
              </h2>
              
              <div className="flex flex-col sm:flex-row justify-center items-center gap-8 mt-12">
                <a href="#contact" className="group relative flex items-center justify-center gap-4 px-12 py-6 bg-[#A07A41] text-black font-bold uppercase text-xs rounded-xl transition-all duration-500 hover:scale-105 hover:bg-white">
                  <span>Start Protected Drafting</span>
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

export default NDADraftingPage;
