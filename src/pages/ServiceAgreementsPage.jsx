import React, { useEffect, useState, useRef } from 'react';
import { 
  ArrowRight, Search, CheckCircle, Zap, Database, 
  Shield, FileText, ChevronDown, Award, Briefcase, Target, 
  ShieldAlert, ClipboardCheck, Layers, FileSearch, 
  Users, Lock, FileSignature, Scale, Gavel, 
  Globe, ShieldCheck, Clock, ExternalLink, AlertCircle, 
  DollarSign, HelpCircle, Activity
} from 'lucide-react';

const ServiceAgreementsPage = () => {
  const [activeFaq, setActiveFaq] = useState(null);
  const [visibleSections, setVisibleSections] = useState({
    hero: false,
    problem: false,
    definition: false,
    services: false,
    process: false,
    framework: false,
    who: false,
    deliverables: false,
    why: false,
    faq: false,
    cta: false
  });

  const sectionRefs = {
    hero: useRef(null),
    problem: useRef(null),
    definition: useRef(null),
    services: useRef(null),
    process: useRef(null),
    framework: useRef(null),
    who: useRef(null),
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
      title: "Custom Agreement Drafting", 
      icon: FileSignature, 
      desc: "Model-specific drafting covering scope, payment milestones, and liability protection.",
      deliverable: "Fully enforceable contract",
      img: "/service-drafting.jpg"
    },
    { 
      title: "Agreement Review", 
      icon: Search, 
      desc: "Fix hidden risks, weak payment protection, and ambiguous wording for established firms.",
      deliverable: "Risk correction report",
      img: "/service-review.jpg"
    },
    { 
      title: "Freelancer & Client", 
      icon: Users, 
      desc: "Specialized for agencies and solo providers to protect project ownership and fees.",
      deliverable: "Clear protection agreement",
      img: "/service-freelance.jpg"
    },
    { 
      title: "B2B Service Contracts", 
      icon: Globe, 
      desc: "For vendor-supplier relationships with clear SLA definitions and penalty clauses.",
      deliverable: "B2B service framework",
      img: "/service-b2b.jpg"
    },
    { 
      title: "Service Level Agreements", 
      icon: Activity, 
      desc: "Defining measurable performance standards, uptime requirements, and KPIs.",
      deliverable: "SLA add-ons",
      img: "/service-sla.jpg"
    }
  ];

  const faqItems = [
    { q: "Do I really need a service agreement?", a: "Inevitably. Without one, payment disputes and scope creep are almost guaranteed in modern business." },
    { q: "Can you customize it?", a: "Yes. Every agreement is built from the ground up based on your actual business logic, not a generic template." },
    { q: "Do you support freelancers?", a: "Absolutely. We specialize in providing agencies and freelancers with robust payment-protection contracts." },
    { q: "How fast is delivery?", a: "Standard turnaround is 24 to 72 business hours depending on the research required." }
  ];

  return (
    <div className="min-h-screen bg-[#2A454E] flex flex-col overflow-x-hidden text-white font-sans selection:bg-[#A07A41] selection:text-black">
      <main className="flex-grow">
        
        {/* 1. Hero Section - FULL CENTERED GLASS MAPPING */}
        <section 
          ref={sectionRefs.hero}
          data-section="hero"
          className="relative min-h-screen flex items-center justify-center pt-32 pb-24 overflow-hidden bg-[#1B2D33]"
        >
          <div className="absolute inset-0 z-0 opacity-40">
             <img src="/agr.jpg" alt="Service Agreements" className="w-full h-full object-cover transition-transform duration-[30s] scale-110 hover:scale-100" />
             <div className="absolute inset-0 bg-[#1B2D33]/70 backdrop-blur-[2px]"></div>
          </div>


          <div className="relative z-10 px-4 sm:px-6 lg:px-8 max-w-[90rem] mx-auto w-full text-center">
            <div className={`max-w-5xl mx-auto p-12 lg:p-24 bg-[#2A454E]/40 border border-white/10 rounded-[5rem] backdrop-blur-3xl shadow-[0_50px_100px_rgba(0,0,0,0.5)] transition-all duration-1000 ${visibleSections.hero ? 'animate-fade-in-up' : 'opacity-0 scale-95'}`}>
              <div className="flex items-center justify-center gap-4 mb-10">
                <div className="h-[2px] w-12 bg-[#A07A41]"></div>
                <span className="text-[#A07A41] uppercase tracking-[0.6em] text-[10px] font-black">Contractual Security</span>
                <div className="h-[2px] w-12 bg-[#A07A41]"></div>
              </div>
              
              <h1 className="text-4xl md:text-5xl lg:text-7xl font-serif font-bold text-white leading-[1.1] mb-10 tracking-tight">
                <span className="block animate-fade-in-up">Service Agreement</span>
                <span className="block italic font-light text-[#A07A41] animate-fade-in-up animation-delay-200">Drafting & Review.</span>
              </h1>
              
              <p className="text-gray-300 text-base md:text-lg font-sans font-light leading-relaxed max-w-3xl mx-auto mb-12 animate-fade-in-up animation-delay-400">
                Legally binding service agreements that define scope, prevent disputes, and protect payments for high-performance businesses.
              </p>

              <div className="flex flex-wrap justify-center gap-10 mb-16 animate-fade-in-up animation-delay-600">
                 <div className="flex items-center gap-3">
                    <CheckCircle size={16} className="text-[#A07A41]" />
                    <span className="text-[9px] uppercase font-bold tracking-widest text-[#A07A41]">Custom Contracts</span>
                 </div>
                 <div className="flex items-center gap-3">
                    <CheckCircle size={16} className="text-[#A07A41]" />
                    <span className="text-[9px] uppercase font-bold tracking-widest text-[#A07A41]">UK Compliant</span>
                 </div>
                 <div className="flex items-center gap-3">
                    <CheckCircle size={16} className="text-[#A07A41]" />
                    <span className="text-[9px] uppercase font-bold tracking-widest text-[#A07A41]">Payment Protection</span>
                 </div>
              </div>

              <div className="animate-fade-in-up animation-delay-800">
                <a href="#contact" className="group relative inline-flex items-center justify-center gap-4 px-12 py-6 bg-[#A07A41] text-black font-bold uppercase tracking-[0.2em] text-[11px] rounded-full transition-all duration-500 hover:bg-white hover:scale-105 shadow-2xl">
                   <span>Create Your Agreement</span>
                   <ArrowRight className="h-4 w-4 transform group-hover:translate-x-2 transition-transform" />
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* 2. Problem Intro - DARK URGENCY MAPPING */}
        <section 
          ref={sectionRefs.problem}
          data-section="problem"
          className="relative py-24 lg:py-40 bg-[#1B2D33] overflow-hidden"
        >
          <div className="px-4 sm:px-6 lg:px-8 max-w-[90rem] mx-auto">
             <div className="grid lg:grid-cols-2 gap-20 items-center">
                <div className={`${visibleSections.problem ? 'animate-fade-in-left' : 'opacity-0'}`}>
                <span className="text-[#A07A41] uppercase tracking-[0.4em] text-xs font-bold mb-8 block flex items-center gap-3">
                   <AlertCircle size={18} />
                   The Commercial Risk
                </span>
                <h2 className="text-3xl md:text-5xl font-serif font-bold text-white leading-tight mb-10">
                   Unclear Agreements <br />
                   <span className="italic font-light text-[#A07A41]/80 uppercase">Destroy Progress.</span>
                </h2>

                   <p className="text-gray-400 text-lg font-sans font-light leading-relaxed mb-12 border-t border-white/5 pt-10">
                      Most business disputes don&apos;t happen because of bad services — they happen because of unclear agreements. A service agreement is not paperwork — it is business protection logic.
                   </p>
                </div>
                <div className="grid sm:grid-cols-2 gap-6">
                   {[
                     { t: "Payment Refusal", d: "Clients refuse payments due to ambiguous terms." },
                     { t: "Scope Creep", d: "Work expands endlessly without additional compensation." },
                     { t: "Deadline Disputes", d: "Timelines become arguments without clear governance." },
                     { t: "Ignored Duties", d: "Mutual responsibilities get ignored under pressure." }
                   ].map((item, i) => (
                      <div key={i} className={`p-8 bg-[#2A454E]/30 border border-[#A07A41]/10 rounded-3xl hover:border-[#A07A41]/40 transition-all ${visibleSections.problem ? 'animate-fade-in-up' : 'opacity-0'}`} style={{ animationDelay: `${i * 150}ms` }}>
                         <div className="h-8 w-8 rounded-lg bg-[#A07A41]/10 flex items-center justify-center mb-6 text-[#A07A41]"><AlertCircle size={18} /></div>
                         <h4 className="text-white font-serif font-bold mb-4 italic tracking-wide">{item.t}</h4>
                         <p className="text-gray-500 text-xs leading-relaxed">{item.d}</p>
                      </div>
                   ))}

                </div>
             </div>
          </div>
        </section>

        {/* 3. What is a Service Agreement - BLUEPRINT MAPPING */}
        <section 
          ref={sectionRefs.definition}
          data-section="definition"
          className="relative py-24 lg:py-40 bg-[#2A454E] overflow-hidden border-y border-white/5"
        >
           <div className="px-4 sm:px-6 lg:px-8 max-w-[90rem] mx-auto text-center">
              <div className={`mb-24 ${visibleSections.definition ? 'animate-fade-in-up' : 'opacity-0'}`}>
                 <span className="text-[#A07A41] uppercase tracking-[0.4em] text-[10px] font-bold mb-6 block">Foundational Clarity</span>
                 <h2 className="text-3xl md:text-6xl font-serif font-bold text-white tracking-tight">The Agreement <span className="italic font-light text-[#A07A41]">Blueprint.</span></h2>
              </div>

              <div className="grid lg:grid-cols-3 gap-12 items-center">
                 <div className="space-y-6">
                    {[ "Scope of Work", "Payment Structure" ].map((text, i) => (
                       <div key={i} className={`p-10 bg-[#1B2D33]/60 border border-white/5 rounded-[2.5rem] group hover:border-[#A07A41] transition-all ${visibleSections.definition ? 'animate-fade-in-left' : 'opacity-0'}`}>
                          <div className="text-left">
                             <div className="text-[#A07A41] font-serif font-black text-2xl mb-2">0{i+1}</div>
                             <span className="text-gray-300 font-bold uppercase tracking-widest text-[11px]">{text}</span>
                          </div>
                       </div>
                    ))}
                 </div>
                 <div className={`relative px-4 ${visibleSections.definition ? 'animate-fade-in-up' : 'opacity-0'}`}>
                    <div className="aspect-square rounded-full border-2 border-dashed border-[#A07A41]/30 flex items-center justify-center relative p-8">
                       <div className="absolute inset-0 animate-spin-slow opacity-20"><Globe size={null} className="w-full h-full text-[#A07A41]" /></div>
                       <div className="relative z-10 text-center">
                          <Scale className="mx-auto mb-8 text-[#A07A41]" size={64} />
                          <p className="text-lg font-serif font-bold leading-relaxed italic text-white/90">
                             &quot;If it is not written properly, it is not enforceable in real dispute resolution.&quot;
                          </p>
                       </div>
                    </div>
                 </div>
                 <div className="space-y-6">
                    {[ "Delivery Timelines", "Legal Provisions" ].map((text, i) => (
                       <div key={i} className={`p-10 bg-[#1B2D33]/60 border border-white/5 rounded-[2.5rem] group hover:border-[#A07A41] transition-all ${visibleSections.definition ? 'animate-fade-in-right' : 'opacity-0'}`}>
                          <div className="text-right">
                             <div className="text-[#A07A41] font-serif font-black text-2xl mb-2">0{i+3}</div>
                             <span className="text-gray-300 font-bold uppercase tracking-widest text-[11px]">{text}</span>
                          </div>
                       </div>
                    ))}
                 </div>
              </div>
           </div>
        </section>

        {/* 4. Core Services - LATERAL IMAGE-CARD MAPPING */}
        <section 
          ref={sectionRefs.services}
          data-section="services"
          className="relative py-24 lg:py-40 bg-[#1B2D33] overflow-hidden"
        >
          <div className="px-4 sm:px-6 lg:px-8 max-w-[90rem] mx-auto mb-32">
             <div className={`text-left max-w-4xl ${visibleSections.services ? 'animate-fade-in-left' : 'opacity-0'}`}>
                <span className="text-[#A07A41] uppercase tracking-[0.5em] text-[10px] font-bold mb-6 block">Analytical Solutions</span>
                <h2 className="text-4xl md:text-6xl lg:text-7xl font-serif font-bold text-white tracking-tight leading-tight">Service Agreement <br /><span className="italic font-light text-[#A07A41]">Categories.</span></h2>
             </div>
          </div>

          <div className="px-4 sm:px-6 lg:px-8 max-w-[90rem] mx-auto grid lg:grid-cols-2 gap-32">
             <div className="space-y-8">
                {coreServices.map((service, i) => (
                  <div key={i} className={`p-10 bg-[#2A454E]/40 border border-white/5 rounded-[3rem] group hover:bg-[#A07A41] transition-all duration-500 cursor-help ${visibleSections.services ? 'animate-fade-in-left' : 'opacity-0'}`} style={{ animationDelay: `${i * 100}ms` }}>
                    <div className="flex items-center gap-8">
                       <div className="h-16 w-16 bg-[#1B2D33] rounded-2xl flex items-center justify-center text-[#A07A41] group-hover:bg-white group-hover:text-black transition-all">
                          <service.icon size={28} />
                       </div>
                       <div>
                          <h3 className="text-2xl font-serif font-bold text-white group-hover:text-black transition-colors mb-2">{service.title}</h3>
                          <p className="text-gray-400 text-sm group-hover:text-black/80 transition-colors">{service.desc}</p>
                       </div>
                    </div>
                  </div>
                ))}
             </div>
             <div className={`hidden lg:block ${visibleSections.services ? 'animate-fade-in-right' : 'opacity-0'}`}>
                <div className="sticky top-40 aspect-square rounded-[5rem] overflow-hidden border border-[#A07A41]/20 group shadow-2xl">
                   <img src="/agr1.jpg" alt="Strategic Drafting" className="w-full h-full object-cover transition-all duration-1000 group-hover:scale-105 grayscale group-hover:grayscale-0 shadow-inner" />
                   <div className="absolute inset-0 bg-gradient-to-t from-[#1B2D33] via-transparent to-transparent opacity-60"></div>
                </div>

             </div>

          </div>
        </section>

        {/* 5. Our Process - CIRCULAR ORBIT MAPPING */}
        <section 
          ref={sectionRefs.process}
          data-section="process"
          className="relative py-24 lg:py-40 bg-[#2A454E] overflow-hidden border-y border-white/5"
        >
          <div className="px-4 sm:px-6 lg:px-8 max-w-[90rem] mx-auto flex flex-col lg:flex-row items-center gap-20">
             <div className={`lg:w-1/2 ${visibleSections.process ? 'animate-fade-in-left' : 'opacity-0'}`}>
                <span className="text-[#A07A41] uppercase tracking-[0.4em] text-xs font-bold mb-6 block">Drafting Lifecycle</span>
                <h2 className="text-3xl md:text-5xl lg:text-7xl font-serif font-bold text-white mb-10 leading-tight">The Path to <br /><span className="italic font-light text-[#A07A41]">Enforceability.</span></h2>
             </div>
             <div className="lg:w-1/2 grid grid-cols-2 gap-4 relative">
                {[ 
                  "Requirement Analysis", "Risk Identification", 
                  "Contract Drafting", "Legal Clause Optimization", 
                  "Final Delivery" 
                ].map((step, i) => (
                  <div key={i} className={`p-10 bg-[#1B2D33]/60 border border-white/5 rounded-3xl group hover:border-[#A07A41] transition-all ${visibleSections.process ? 'animate-fade-in-up' : 'opacity-0'} ${i === 4 ? 'col-span-2' : ''}`} style={{ animationDelay: `${i * 100}ms` }}>
                     <span className="text-[#A07A41] font-serif font-black text-xs mb-4 block tracking-tighter italic">STEP 0{i+1}</span>
                     <h4 className="text-white font-bold uppercase tracking-widest text-[10px] sm:text-xs">{step}</h4>
                  </div>
                ))}
             </div>
          </div>
        </section>

        {/* 6. Legal Framework - SEAL OF QUALITY MAPPING */}
        <section 
          ref={sectionRefs.framework}
          data-section="framework"
          className="relative py-24 lg:py-40 bg-[#1B2D33] overflow-hidden"
        >
           <div className="px-4 sm:px-6 lg:px-8 max-w-[90rem] mx-auto text-center">
              <div className={`inline-block p-12 lg:p-24 border border-[#A07A41]/10 rounded-full relative group shadow-2xl ${visibleSections.framework ? 'animate-fade-in-up' : 'opacity-0'}`}>
                 <div className="absolute inset-0 bg-[#A07A41]/5 rounded-full blur-3xl group-hover:bg-[#A07A41]/10 transition-all"></div>
                 <span className="text-[#A07A41] uppercase tracking-[0.6em] text-[10px] font-black mb-10 block">Authority Alignment</span>
                 <h2 className="text-3xl md:text-5xl font-serif font-bold text-white mb-12 tracking-tight">Legal <span className="italic font-light text-[#A07A41]">Architecture.</span></h2>
                 <div className="flex flex-wrap justify-center gap-12">
                    {[ "Contract Law UK", "UK GDPR", "Consumer Rights 2015" ].map((law, i) => (
                       <div key={i} className="flex flex-col items-center gap-4">
                          <ShieldCheck className="text-[#A07A41]" size={32} />
                          <span className="text-gray-300 font-serif font-bold italic text-xs tracking-widest">{law}</span>
                       </div>
                    ))}
                 </div>
              </div>
           </div>
        </section>

        {/* 7. Who This Is For - DYNAMIC RIBBON MAPPING */}
        <section 
          ref={sectionRefs.who}
          data-section="who"
          className="relative py-24 lg:py-40 bg-[#2A454E] overflow-hidden border-y border-white/5"
        >
          <div className="px-4 sm:px-6 lg:px-8 max-w-[90rem] mx-auto">
             <div className="flex flex-col lg:flex-row items-center justify-between gap-16">
                <div className={`lg:w-1/3 ${visibleSections.who ? 'animate-fade-in-left' : 'opacity-0'}`}>
                   <span className="text-[#A07A41] uppercase tracking-[0.4em] text-xs font-bold mb-6 block">Industry Verticals</span>
                   <h2 className="text-4xl md:text-6xl font-serif font-bold text-white leading-tight">Partnership <br /><span className="italic font-light text-[#A07A41]">Network.</span></h2>
                </div>
                <div className="lg:w-2/3 flex flex-wrap gap-4 justify-center lg:justify-end">
                   {[ "Freelancers", "Agencies", "SaaS Companies", "Consultants", "SMEs", "IT Providers" ].map((sector, i) => (
                      <div key={i} className={`px-10 py-6 bg-[#1B2D33] border border-white/5 rounded-2xl hover:bg-[#A07A41] group transition-all duration-500 shadow-xl ${visibleSections.who ? 'animate-fade-in-right' : 'opacity-0'}`} style={{ animationDelay: `${i * 100}ms` }}>
                         <span className="text-gray-300 font-bold uppercase tracking-[0.3em] text-[10px] group-hover:text-black transition-colors">{sector}</span>
                      </div>
                   ))}
                </div>
             </div>
          </div>
        </section>

        {/* 8. What You Get & 9. Why Businesses Use Us - THE VAULT MAPPING */}
        <section className="relative py-24 lg:py-40 bg-[#1B2D33] overflow-hidden">
           <div className="px-4 sm:px-6 lg:px-8 max-w-[90rem] mx-auto grid lg:grid-cols-2 gap-20">
              <div ref={sectionRefs.deliverables} data-section="deliverables" className={`${visibleSections.deliverables ? 'animate-fade-in-left' : 'opacity-0'}`}>
                 <span className="text-[#A07A41] uppercase tracking-[0.5em] text-[10px] font-bold mb-10 block">Standard Package</span>
                 <h2 className="text-3xl md:text-5xl font-serif font-bold text-white mb-12 tracking-tight">Contract <span className="italic font-light text-[#A07A41]">Deliverables.</span></h2>
                 <div className="grid gap-4">
                    {[ "Custom Service Agreement", "Legal Review Report", "Risk Breakdown", "Editable Final Doc", "SLA Add-ons" ].map((doc, i) => (
                       <div key={i} className="flex items-center gap-6 p-8 bg-[#2A454E]/40 border border-white/5 rounded-3xl group hover:border-[#A07A41] transition-all">
                          <FileSignature className="text-[#A07A41]" size={20} />
                          <span className="text-gray-200 font-sans font-bold uppercase tracking-widest text-xs">{doc}</span>
                       </div>
                    ))}
                 </div>
              </div>
              <div ref={sectionRefs.why} data-section="why" className={`lg:pt-24 ${visibleSections.why ? 'animate-fade-in-right' : 'opacity-0'}`}>
                 <div className="p-12 lg:p-20 bg-[#2A454E]/20 border border-[#A07A41]/20 rounded-[4rem] relative overflow-hidden group">
                    <div className="absolute top-0 right-0 p-12 opacity-[0.05] group-hover:opacity-[0.1] transition-all"><DollarSign size={200} className="text-[#A07A41]" /></div>
                    <span className="text-[#A07A41] uppercase tracking-[0.4em] text-[10px] font-bold mb-8 block uppercase font-serif">Strategic Advantage</span>
                    <h2 className="text-3xl md:text-5xl font-serif font-bold text-white mb-10 leading-tight italic underline decoration-[#A07A41]/20 underline-offset-8">Payment Clarity & Protection.</h2>
                    <div className="space-y-6">
                       {[ "Fewer operational disputes", "Guaranteed payment cycles", "Defined legal responsibilities", "Pre-problem protection" ].map((point, i) => (
                          <div key={i} className="flex items-center gap-4">
                             <div className="h-1.5 w-1.5 rounded-full bg-[#A07A41]"></div>
                             <span className="text-gray-400 font-sans text-sm font-light uppercase tracking-tighter">{point}</span>
                          </div>
                       ))}
                    </div>
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
            <div className={`text-center mb-24 ${visibleSections.faq ? 'animate-fade-in-up' : 'opacity-0'}`}>
              <span className="text-[#A07A41] uppercase tracking-[0.4em] text-[10px] font-bold mb-6 block">Structural Assurance</span>
              <h2 className="text-3xl md:text-5xl font-serif font-bold text-white tracking-tight">Analytical <span className="italic font-light text-[#A07A41]">Clarifications.</span></h2>
            </div>

            <div className="space-y-4">
              {faqItems.map((faq, index) => (
                <div 
                  key={index} 
                  className={`border border-[#A07A41]/10 rounded-[2.5rem] bg-[#1B2D33]/30 overflow-hidden ${visibleSections.faq ? 'animate-fade-in-up' : 'opacity-0'}`} 
                  style={{ animationDelay: `${index * 150}ms` }}
                >
                  <button 
                    onClick={() => setActiveFaq(activeFaq === index ? null : index)}
                    className="w-full p-10 flex items-center justify-between group"
                  >
                    <span className={`text-left text-lg font-serif transition-colors ${activeFaq === index ? 'text-[#A07A41]' : 'text-gray-200'}`}>{faq.q}</span>
                    <div className={`shrink-0 p-3 rounded-xl border border-white/10 group-hover:border-[#A07A41] transition-all duration-300 ${activeFaq === index ? 'bg-[#A07A41] border-[#A07A41] rotate-180' : ''}`}>
                      <ChevronDown className={`h-4 w-4 transition-colors ${activeFaq === index ? 'text-black' : 'text-[#A07A41]'}`} />
                    </div>
                  </button>
                  <div className={`transition-all duration-500 ease-in-out px-10 ${activeFaq === index ? 'max-h-96 pb-10 opacity-100' : 'max-h-0 opacity-0 overflow-hidden'}`}>
                    <p className="text-gray-400 text-sm md:text-base font-sans font-light leading-relaxed italic border-l-2 border-[#A07A41]/30 pl-8">{faq.a}</p>
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
          className="relative py-24 lg:py-32 bg-[#1B2D33] overflow-hidden"
        >
          <div className="absolute inset-0 bg-[#A07A41]/5 opacity-30"></div>
          <div className="relative z-10 px-4 sm:px-6 lg:px-8 max-w-[90rem] mx-auto text-center">
            <div className={`max-w-6xl mx-auto p-16 lg:p-24 bg-[#2A454E]/40 border border-white/10 rounded-[5rem] backdrop-blur-3xl relative overflow-hidden shadow-2xl ${visibleSections.cta ? 'animate-fade-in-up' : 'opacity-0'}`}>
              <div className="absolute bottom-0 left-0 p-24 opacity-5 pointer-events-none translate-y-24"><Scale size={400} /></div>
              <span className="text-[#A07A41] uppercase tracking-[0.4em] text-[10px] font-bold mb-10 block">Economic Preservation</span>
              <h2 className="text-4xl md:text-7xl font-serif font-bold text-white mb-10 leading-tight tracking-tight">Stop Losing Money Due <br /><span className="italic font-light text-[#A07A41]">To Unclear Agreements.</span></h2>

              <p className="text-gray-400 font-sans text-xl mb-12 max-w-2xl mx-auto leading-relaxed border-t border-white/5 pt-10">
                 Get legally structured service agreements that protect your work, your payments, and your business relationships.
              </p>
              <div className="flex flex-col sm:flex-row justify-center items-center gap-10">
                <a href="#contact" className="group relative flex items-center justify-center gap-4 px-12 py-6 bg-[#A07A41] text-black font-bold uppercase tracking-widest text-[12px] rounded-full transition-all duration-500 hover:scale-105 hover:bg-white shadow-[0_20px_60px_rgba(160,122,65,0.4)] w-full sm:w-auto">
                  <span>Create Your Service Agreement Now</span>
                  <ArrowRight className="h-5 w-5 group-hover:translate-x-3 transition-transform" />
                </a>
              </div>
            </div>
          </div>
        </section>

      </main>
    </div>
  );
};

export default ServiceAgreementsPage;
