import React, { useEffect, useState, useRef } from 'react';
import { 
  ArrowRight, Search, CheckCircle, Zap, Database, 
  Shield, FileText, ChevronDown, Award, Briefcase, Target, 
  ShieldAlert, ClipboardCheck, Layers, FileSearch, 
  Cloud, Lock, Settings, Users, Activity, Layout, 
  Globe, ShieldCheck, Clock, ExternalLink
} from 'lucide-react';

const SaaSAgreementDraftingPage = () => {
  const [activeFaq, setActiveFaq] = useState(null);
  const [visibleSections, setVisibleSections] = useState({
    hero: false,
    intro: false,
    scope: false,
    features: false,
    process: false,
    who: false,
    risk: false,
    quality: false,
    cta: false,
    faq: false
  });

  const sectionRefs = {
    hero: useRef(null),
    intro: useRef(null),
    scope: useRef(null),
    features: useRef(null),
    process: useRef(null),
    who: useRef(null),
    risk: useRef(null),
    quality: useRef(null),
    cta: useRef(null),
    faq: useRef(null)
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

  const scopeItems = [
    { title: "SaaS Agreements", icon: Cloud, desc: "Comprehensive master service agreements for software-as-a-service platforms." },
    { title: "Software Licensing", icon: Lock, desc: "Drafting proprietary and open-source licensing models for UK entities." },
    { title: "Terms of Service", icon: Layout, desc: "User-centric Terms and Conditions for SaaS platforms and marketplaces." },
    { title: "Service Level Agreements (SLAs)", icon: Activity, desc: "Drafting uptime, availability, and support resolution commitment clauses." },
    { title: "Data Processing (GDPR)", icon: Database, desc: "GDPR-focused data processing agreements reflecting current UK laws." },
    { title: "EULAs & Custom Clauses", icon: Settings, desc: "End User Licence Agreements and hyper-specific bespoke SaaS clauses." }
  ];

  const valuePoints = [
    { title: "UK-Compliant & Practical", icon: Shield },
    { title: "Risk & Liability Allocation", icon: ShieldAlert },
    { title: "GDPR & Data Alignment", icon: Globe },
    { title: "Precise Legal Language", icon: FileText },
    { title: "Fast & Reliable Turnaround", icon: Clock },
    { title: "Client-Specific Models", icon: Target }
  ];

  const faqItems = [
    { q: "Do you draft SaaS agreements under UK law?", a: "Yes, all our SaaS and technology agreements are meticulously structured in line with current UK legal and commercial standards for the tech sector." },
    { q: "Can agreements be tailored to specific SaaS platforms?", a: "Absolutely. We customize each document based on the specific architecture, billing model, and operational workflow of the platform in question." },
    { q: "Do you include GDPR and data protection clauses?", a: "Yes, data protection compliance is a core component of our drafting process. We ensure all SaaS agreements reflect the latest UK GDPR obligations." },
    { q: "What is the typical turnaround time?", a: "We typically deliver initial drafts within 24–48 hours, depending on the complexity of the business model and specific platform requirements." }
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
             <img src="/saashero.jpg" alt="SaaS Agreements" className="w-full h-full object-cover transition-transform duration-[20s] group-hover:scale-110" />
             <div className="absolute inset-0 bg-gradient-to-t from-[#2A454E] via-[#2A454E]/70 to-transparent"></div>
          </div>


          <div className="relative z-10 px-4 sm:px-6 lg:px-8 max-w-[90rem] mx-auto w-full text-center lg:text-left">
            <div className="max-w-4xl mx-auto lg:mx-0">
              <div className={`flex items-center justify-center lg:justify-start gap-4 mb-6 transition-all duration-1000 ${visibleSections.hero ? 'animate-fade-in-right' : 'opacity-0'}`}>
                <div className="h-[1px] w-12 bg-[#A07A41]"></div>
                <span className="text-[#A07A41] uppercase tracking-[0.4em] text-[10px] font-bold">Tech Legal Support</span>
              </div>
              
              <h1 className={`text-4xl md:text-5xl lg:text-7xl font-serif font-bold text-white leading-tight mb-8 tracking-tight transition-all duration-1000 ${visibleSections.hero ? 'opacity-100' : 'opacity-0'}`}>
                <span className="block animate-fade-in-top-left">SaaS Agreement</span>
                <span className="block italic font-light text-[#A07A41] animate-fade-in-up animation-delay-200 uppercase tracking-tighter">Drafting Services.</span>
              </h1>
              
              <p className={`text-gray-300 text-base md:text-xl font-sans font-light leading-relaxed max-w-2xl mb-12 border-l-2 border-[#A07A41]/30 pl-8 transition-all duration-1000 ${visibleSections.hero ? 'animate-fade-in-left animation-delay-400' : 'opacity-0'}`}>
                Specialist legal drafting support for UK law firms and technology clients. Delivering commercially practical SaaS documentation with precision and speed.
              </p>

              <div className={`flex flex-wrap justify-center lg:justify-start gap-6 transition-all duration-1000 ${visibleSections.hero ? 'animate-fade-in-up animation-delay-600' : 'opacity-0'}`}>
                <a href="#contact" className="group relative inline-flex items-center justify-center gap-3 px-8 py-4 bg-[#A07A41] text-black font-bold uppercase tracking-widest text-[11px] rounded-xl transition-all duration-500 hover:bg-white hover:scale-105 shadow-2xl w-full sm:w-auto">
                  <span>Request a Quote</span>
                  <ArrowRight className="h-4 w-4 group-hover:translate-x-2 transition-transform" />
                </a>
                <a href="#contact" className="group relative inline-flex items-center justify-center gap-3 px-8 py-4 border border-white/20 text-white font-bold uppercase tracking-widest text-[11px] rounded-xl transition-all duration-500 hover:border-[#A07A41] hover:text-[#A07A41] w-full sm:w-auto">
                  <span>Speak to Us</span>
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
              
              <div className="relative group p-4 border border-[#A07A41]/20 rounded-[3.5rem]">
                <div className="aspect-square rounded-[3rem] overflow-hidden bg-[#2A454E] relative">
                   <img src="/saa1.jpg" alt="Tech Legal Strategy" className="w-full h-full object-cover transition-all duration-1000 group-hover:scale-105 grayscale group-hover:grayscale-0" />
                   <div className="absolute inset-0 bg-gradient-to-t from-[#1B2D33] via-transparent to-transparent"></div>
                </div>
              </div>


              <div className={`${visibleSections.intro ? 'animate-fade-in-top-left' : 'opacity-0'}`}>
                <div className="flex items-center gap-4 mb-8">
                  <div className="h-[1px] w-12 bg-[#A07A41]"></div>
                  <span className="text-[#A07A41] uppercase tracking-[0.4em] text-xs font-bold">Innovation Support</span>
                </div>
                <h2 className="text-3xl md:text-5xl font-serif font-bold text-white leading-tight mb-8">
                  Future-Proofing Tech with <br />
                  <span className="italic font-light text-[#A07A41]">Commercial Legal Drafting.</span>
                </h2>
                <div className="space-y-6">
                  <p className="text-gray-300 text-lg font-sans font-light leading-relaxed">
                    SaaS agreements are the legal backbone of any software or technology business. They govern everything from license scope to data protection and service levels. We act as a reliable outsourcing partner for UK law firms, providing clarity and risk management in every draft.
                  </p>
                  <p className="text-gray-300 text-lg font-sans font-light leading-relaxed">
                    Our focus is on delivering documents that are not only legally sound but also commercially practical, allowing technology companies to operate with confidence in a highly regulated landscape.
                  </p>
                  <div className="grid sm:grid-cols-2 gap-8 pt-6">
                     <div className="flex items-center gap-4 group">
                        <div className="h-10 w-10 rounded-full border border-[#A07A41]/30 flex items-center justify-center group-hover:bg-[#A07A41] group-hover:border-transparent transition-all">
                           <ShieldCheck size={18} className="text-[#A07A41] group-hover:text-black" />
                        </div>
                        <span className="text-gray-200 font-bold uppercase tracking-widest text-[10px]">Risk Mitigation</span>
                     </div>
                     <div className="flex items-center gap-4 group">
                        <div className="h-10 w-10 rounded-full border border-[#A07A41]/30 flex items-center justify-center group-hover:bg-[#A07A41] group-hover:border-transparent transition-all">
                           <Globe size={18} className="text-[#A07A41] group-hover:text-black" />
                        </div>
                        <span className="text-gray-200 font-bold uppercase tracking-widest text-[10px]">GDPR Compliance</span>
                     </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 3. Scope of Services */}
        <section 
          ref={sectionRefs.scope}
          data-section="scope"
          className="relative py-24 lg:py-40 bg-[#1B2D33] overflow-hidden border-y border-white/5"
        >
          <div className="px-4 sm:px-6 lg:px-8 max-w-[90rem] mx-auto text-center mb-24">
             <span className={`text-[#A07A41] uppercase tracking-[0.5em] text-[10px] font-bold mb-6 block ${visibleSections.scope ? 'animate-fade-in-up' : 'opacity-0'}`}>Tech Inventory</span>
             <h2 className={`text-4xl md:text-6xl font-serif font-bold text-white tracking-tight ${visibleSections.scope ? 'animate-fade-in-up' : 'opacity-0'}`}>Scope of <span className="italic font-light text-[#A07A41]">Services.</span></h2>
          </div>

          <div className="px-4 sm:px-6 lg:px-8 max-w-[90rem] mx-auto grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {scopeItems.map((item, i) => (
              <div 
                key={i} 
                className={`group p-12 bg-[#2A454E]/30 border border-white/5 rounded-[2.5rem] hover:bg-[#2A454E]/60 hover:border-[#A07A41]/30 transition-all duration-500 overflow-hidden relative ${visibleSections.scope ? (i%2===0 ? 'animate-fade-in-top-left' : 'animate-fade-in-bottom-right') : 'opacity-0'}`}
                style={{ animationDelay: `${i * 100}ms` }}
              >
                <div className="relative z-10">
                   <div className="w-16 h-16 bg-[#1B2D33] rounded-2xl flex items-center justify-center mb-10 group-hover:bg-[#A07A41] transition-all duration-500 shadow-xl overflow-hidden group-hover:scale-110">
                      <item.icon className="h-7 w-7 text-[#A07A41] group-hover:text-black transition-colors" />
                   </div>
                   <h3 className="text-2xl font-serif font-bold text-white mb-6 tracking-tight group-hover:text-[#A07A41] transition-colors">{item.title}</h3>
                   <p className="text-gray-400 font-sans font-light leading-relaxed text-sm">{item.desc}</p>
                </div>
                <div className="absolute -bottom-8 -right-8 opacity-[0.02] group-hover:opacity-[0.05] transition-all duration-700">
                   <item.icon size={180} />
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* 4. Key Features / Value Proposition */}
        <section 
          ref={sectionRefs.features}
          data-section="features"
          className="relative py-24 lg:py-40 bg-[#2A454E] overflow-hidden"
        >
          <div className="px-4 sm:px-6 lg:px-8 max-w-[90rem] mx-auto">
             <div className="text-center mb-20 max-w-3xl mx-auto">
                <span className={`text-[#A07A41] uppercase tracking-[0.4em] text-xs font-bold mb-6 block ${visibleSections.features ? 'animate-fade-in-up' : 'opacity-0'}`}>Our Value</span>
                <h3 className={`text-3xl md:text-5xl font-serif font-bold text-white tracking-tight ${visibleSections.features ? 'animate-fade-in-up' : 'opacity-0'}`}>Commercially Practical <br /><span className="italic font-light text-[#A07A41]">Asset Protection.</span></h3>
             </div>
             
             <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-12">
                {valuePoints.map((point, i) => (
                  <div key={i} className={`flex items-start gap-6 group ${visibleSections.features ? 'animate-fade-in-up' : 'opacity-0'}`} style={{ animationDelay: `${i * 100}ms` }}>
                     <div className="mt-1 h-12 w-12 shrink-0 rounded-2xl bg-[#1B2D33] border border-[#A07A41]/10 flex items-center justify-center group-hover:bg-[#A07A41] transition-all">
                        <point.icon className="h-5 w-5 text-[#A07A41] group-hover:text-black transition-colors" />
                     </div>
                     <div>
                        <h4 className="text-white font-serif font-bold text-xl mb-2 tracking-tight group-hover:text-[#A07A41] transition-colors">{point.title}</h4>
                        <p className="text-gray-400 text-sm font-sans font-light leading-relaxed italic border-l border-white/5 pl-4 ml-1">Strategic legal precision tailored for the UK SaaS market.</p>
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
          className="relative py-24 lg:py-40 bg-[#1B2D33] overflow-hidden border-y border-white/5"
        >
          <div className="px-4 sm:px-6 lg:px-8 max-w-[90rem] mx-auto">
             <div className="grid lg:grid-cols-2 gap-20 items-center mb-24">
                <div className={`${visibleSections.process ? 'animate-fade-in-left' : 'opacity-0'}`}>
                   <span className="text-[#A07A41] uppercase tracking-[0.4em] text-xs font-bold mb-6 block">Structural Lifecycle</span>
                   <h2 className="text-3xl md:text-5xl font-serif font-bold text-white mb-8">How Our <span className="italic font-light text-[#A07A41]">Process Works.</span></h2>
                   <p className="text-gray-400 text-lg font-light leading-relaxed max-w-xl">
                      A simple, structured workflow designed to turn complex business models into clear, enforceable SaaS documentation within days.
                   </p>
                </div>
                <div className={`${visibleSections.process ? 'animate-fade-in-right' : 'opacity-0'}`}>
                   <div className="aspect-video rounded-[3rem] bg-[#2A454E] border border-white/5 relative overflow-hidden group">
                      <img src="/saa2.jpg" alt="SaaS Drafting Workflow" className="w-full h-full object-cover transition-all duration-1000 group-hover:scale-105 grayscale group-hover:grayscale-0" />
                      <div className="absolute inset-0 bg-gradient-to-t from-[#1B2D33]/60 via-transparent to-transparent"></div>
                   </div>
                </div>
             </div>

             <div className="grid md:grid-cols-5 gap-6">
                {[
                  { step: "01", title: "Business Model Review", icon: Search },
                  { step: "02", title: "Requirement Analysis", icon: Target },
                  { step: "03", title: "Expert Drafting", icon: FileText },
                  { step: "04", title: "Quality Review", icon: ShieldCheck },
                  { step: "05", title: "Final Delivery", icon: CheckCircle }
                ].map((item, i) => (
                  <div key={i} className={`flex flex-col items-center text-center p-8 bg-[#2A454E]/20 border border-white/10 rounded-3xl group hover:bg-[#2A454E]/40 transition-all duration-500 overflow-hidden relative ${visibleSections.process ? 'animate-fade-in-up' : 'opacity-0'}`} style={{ animationDelay: `${i * 150}ms` }}>
                     <div className="w-14 h-14 bg-[#1B2D33] rounded-2xl flex items-center justify-center mb-8 relative border border-[#A07A41]/10 group-hover:bg-[#A07A41] transition-all duration-500">
                        <item.icon className="h-6 w-6 text-[#A07A41] group-hover:text-black transition-colors" />
                     </div>
                     <span className="text-[#A07A41] font-serif font-bold italic text-sm mb-4 tracking-widest">{item.step}</span>
                     <h4 className="text-white font-serif font-bold text-sm tracking-tight leading-snug">{item.title}</h4>
                  </div>
                ))}
             </div>
          </div>
        </section>

        {/* 6. Who We Work With */}
        <section 
          ref={sectionRefs.who}
          data-section="who"
          className="relative py-24 lg:py-40 bg-[#2A454E] overflow-hidden"
        >
          <div className="px-4 sm:px-6 lg:px-8 max-w-[90rem] mx-auto text-center">
             <span className={`text-[#A07A41] uppercase tracking-[0.4em] text-xs font-bold mb-6 block ${visibleSections.who ? 'animate-fade-in-up' : 'opacity-0'}`}>Our Clients</span>
             <h2 className={`text-3xl md:text-6xl font-serif font-bold text-white mb-20 tracking-tight ${visibleSections.who ? 'animate-fade-in-up' : 'opacity-0'}`}>Who We <span className="italic font-light text-[#A07A41]">Serve.</span></h2>
             
             <div className="grid lg:grid-cols-2 gap-20 items-center mb-20">
                <div className={`${visibleSections.who ? 'animate-fade-in-left' : 'opacity-0'}`}>
                   <div className="aspect-[4/3] rounded-[3rem] overflow-hidden border border-[#A07A41]/20 group relative">
                      <img src="/saa3.jpg" alt="Technology Partners" className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-1000" />
                      <div className="absolute inset-0 bg-gradient-to-tr from-[#1B2D33]/40 via-transparent to-transparent"></div>
                   </div>
                </div>
                <div className="grid grid-cols-2 gap-6">
                   {[ "UK Law Firms", "Technology Lawyers", "SaaS Companies", "Legal Consultants" ].map((item, i) => (
                      <div key={i} className={`p-8 bg-[#1B2D33]/60 border border-white/5 rounded-[2rem] hover:bg-[#A07A41] group transition-all duration-500 overflow-hidden relative ${visibleSections.who ? 'animate-fade-in-right' : 'opacity-0'}`} style={{ animationDelay: `${i * 100}ms` }}>
                         <Users size={24} className="text-[#A07A41] group-hover:text-black mx-auto mb-4 transition-colors" />
                         <span className="text-gray-300 font-bold uppercase tracking-widest text-[10px] group-hover:text-black transition-colors block text-center">{item}</span>
                      </div>
                   ))}
                </div>
             </div>

          </div>
        </section>

        {/* 7. Risk & Compliance Focus */}
        <section 
          ref={sectionRefs.risk}
          data-section="risk"
          className="relative py-24 lg:py-40 bg-[#1B2D33] overflow-hidden border-y border-white/5"
        >
          <div className="px-4 sm:px-6 lg:px-8 max-w-[90rem] mx-auto grid lg:grid-cols-2 gap-20 items-center">
             <div className={`${visibleSections.risk ? 'animate-fade-in-left' : 'opacity-0'}`}>
                <span className="text-[#A07A41] uppercase tracking-[0.4em] text-xs font-bold mb-6 block">Critical Focus</span>
                <h2 className="text-3xl md:text-5xl font-serif font-bold text-white mb-10 leading-tight">Risk & <span className="italic font-light text-[#A07A41]">Compliance Obligations.</span></h2>
                <div className="grid gap-6">
                   {[
                     "Limitation of liability & commercial risk exposure",
                     "Data protection obligations & DPA drafting",
                     "Service availability & uptime terms (SLAs)",
                     "Intellectual property protection & ownership",
                     "Termination protocols and exit provisions"
                   ].map((text, i) => (
                     <div key={i} className="flex items-center gap-4 group">
                        <div className="h-6 w-6 rounded-full bg-[#A07A41]/10 flex items-center justify-center group-hover:bg-[#A07A41] transition-all">
                           <CheckCircle size={12} className="text-[#A07A41] group-hover:text-black" />
                        </div>
                        <p className="text-gray-300 font-serif font-bold italic text-sm tracking-wide">{text}</p>
                     </div>
                   ))}
                </div>
             </div>
             <div className={`${visibleSections.risk ? 'animate-fade-in-right' : 'opacity-0'}`}>
                <div className="relative p-12 lg:p-20 bg-[#2A454E]/30 rounded-[4rem] border border-[#A07A41]/20 overflow-hidden shadow-2xl backdrop-blur-xl">
                   <div className="absolute top-0 right-0 p-8 opacity-10"><ShieldCheck size={250} className="text-[#A07A41]" /></div>
                   <h4 className="text-3xl font-serif font-bold text-white mb-8 relative z-10">Bulletproof <br /><span className="text-[#A07A41]">Tech Contracts.</span></h4>
                   <p className="text-gray-400 font-sans font-light leading-relaxed italic border-l-2 border-[#A07A41]/40 pl-6">
                      SaaS agreement drafting specialists focusing on UK jurisdiction and cross-border tech compliance. Our commercially practical approach reduces negotiation time and legal friction.
                   </p>
                </div>
             </div>
          </div>
        </section>

        {/* 8. Quality Assurance Section */}
        <section 
          ref={sectionRefs.quality}
          data-section="quality"
          className="relative py-24 bg-[#2A454E] border-b border-white/5"
        >
          <div className="px-4 sm:px-6 lg:px-8 max-w-[90rem] mx-auto text-center">
             <div className={`${visibleSections.quality ? 'animate-fade-in-up' : 'opacity-0'}`}>
                <div className="flex justify-center gap-12 mb-12 flex-wrap">
                   {[ "Consistent Drafting", "Legal Precision", "UK Statutory Alignment" ].map((text, i) => (
                     <div key={i} className="flex items-center gap-4">
                        <Award className="text-[#A07A41] h-5 w-5" />
                        <span className="text-[#A07A41] uppercase tracking-[0.3em] font-bold text-[10px]">{text}</span>
                     </div>
                   ))}
                </div>
                <h3 className="text-gray-300 text-lg md:text-xl font-sans font-light leading-relaxed max-w-4xl mx-auto border-t border-white/5 pt-12">
                   Quality is not an after-thought; it is integrated into every step of our drafting. Every SaaS agreement reflects current UK regulations and a commercially practical approach to software sales and distribution.
                </h3>
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
              <span className="text-[#A07A41] uppercase tracking-[0.3em] text-[10px] font-bold mb-6 block">Tech Support FAQ</span>
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
                    <p className="text-gray-400 text-sm md:text-base font-sans font-light leading-relaxed italic pl-6 border-l border-[#A07A41]/30">{faq.a}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 9. Full Call to Action (CTA) */}
        <section 
          ref={sectionRefs.cta}
          data-section="cta"
          className="relative py-24 lg:py-40 bg-[#2A454E] overflow-hidden"
        >
          <div className="absolute -bottom-20 -left-20 w-[600px] h-[600px] bg-[#A07A41]/5 blur-[150px] rounded-full"></div>
          <div className="relative z-10 px-4 sm:px-6 lg:px-8 max-w-[90rem] mx-auto text-center">
            <div className={`max-w-4xl mx-auto p-16 lg:p-24 bg-[#1B2D33]/60 border border-[#A07A41]/10 rounded-[4rem] backdrop-blur-2xl relative overflow-hidden shadow-2xl ${visibleSections.cta ? 'animate-fade-in-up' : 'opacity-0'}`}>
              <span className="text-[#A07A41] uppercase tracking-[0.4em] text-[10px] font-bold mb-8 block">Execution Ready</span>
              <h2 className="text-4xl md:text-6xl font-serif font-bold text-white mb-10 leading-tight tracking-tight">Need Reliable SaaS <br /><span className="italic font-light text-[#A07A41]">Agreement Drafting?</span></h2>
              <p className="text-gray-400 font-sans text-lg mb-12 max-w-2xl mx-auto leading-relaxed border-t border-white/5 pt-10">
                 Partner with H&S Co. Today for commercially practical, legally compliant SaaS documentation that protects your assets and your clients.
              </p>
              <div className="flex flex-col sm:flex-row justify-center items-center gap-8">
                <a href="#contact" className="group relative flex items-center justify-center gap-3 px-10 py-5 bg-[#A07A41] text-black font-bold uppercase tracking-widest text-[11px] rounded-xl transition-all duration-500 hover:scale-105 hover:bg-white shadow-2xl w-full sm:w-auto">
                  <span>Request a Quote</span>
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

export default SaaSAgreementDraftingPage;
