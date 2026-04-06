import React, { useEffect, useState, useRef } from 'react';
import { 
  ArrowRight, Search, CheckCircle, Zap, Database, 
  Shield, FileText, ChevronDown, Award, Briefcase, Target, 
  ShieldAlert, ClipboardCheck, Layers, FileSearch, 
  Users, Lock, FileSignature, Scale, Gavel, 
  Globe, ShieldCheck, Clock, ExternalLink
} from 'lucide-react';

const EmploymentContractsPage = () => {
  const [activeFaq, setActiveFaq] = useState(null);
  const [visibleSections, setVisibleSections] = useState({
    hero: false,
    intro: false,
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
    intro: useRef(null),
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

  const serviceCategories = [
    { 
      title: "Custom Drafting", 
      icon: FileSignature, 
      desc: "Tailored contracts defining job roles, compensation, and duties with 100% legal compliance.",
      deliverable: "Fully customized contract",
      img: "/co2.jpg"
    },
    { 
      title: "Contract Review", 
      icon: Search, 
      desc: "Detailed risk analysis for existing agreements, identifying missing clauses and weak points.",
      deliverable: "Review report + improvements",
      img: "/co3.jpg"
    },
    { 
      title: "Standard Contracts", 
      icon: Users, 
      desc: "Precision drafting for permanent employees and fixed-term roles for structural clarity.",
      deliverable: "Role-specific contract",
      img: "/co4.jpg"
    },
    { 
      title: "Protective Clauses", 
      icon: Lock, 
      desc: "Advanced confidentiality, non-compete restrictions, and statutory data protection provisions.",
      deliverable: "Protective contract clauses",
      img: "/co5.jpg"
    },
    { 
      title: "Contractor Agreements", 
      icon: Briefcase, 
      desc: "Specialized service agreements for non-employees, covering scope of work and liability.",
      deliverable: "Contractor agreement",
      img: "/co6.jpg"
    }

  ];

  const faqItems = [
    { q: "Is an employment contract legally required in the UK?", a: "Yes, employers are legally required to provide employees with a written statement of employment particulars." },
    { q: "Can you review existing contracts?", a: "Absolutely. we conduct deep-dive risk assessments to ensure your current templates meet today's UK standards." },
    { q: "Do you include confidentiality clauses?", a: "Yes, we customize intellectual property and confidentiality provisions based on your specific industry risks." },
    { q: "How long does it take?", a: "Most employment contracts and reviews are delivered within 24 to 72 business hours." }
  ];

  return (
    <div className="min-h-screen bg-[#2A454E] flex flex-col overflow-x-hidden text-white font-sans selection:bg-[#A07A41] selection:text-black">
      <main className="flex-grow">
        
        {/* 1. Hero Section - NEW ASYMMETRIC MAPPING */}
        <section 
          ref={sectionRefs.hero}
          data-section="hero"
          className="relative min-h-screen flex items-center overflow-hidden bg-[#1B2D33]"
        >
          <div className="absolute top-0 right-0 w-1/2 h-full z-0 opacity-40">
             <img src="/co.jpg" alt="Workplace Compliance" className="w-full h-full object-cover transition-transform duration-[20s] hover:scale-110" />
             <div className="absolute inset-0 bg-gradient-to-l from-transparent via-[#1B2D33]/80 to-[#1B2D33]"></div>
          </div>


          <div className="relative z-10 px-4 sm:px-6 lg:px-8 max-w-[90rem] mx-auto w-full grid lg:grid-cols-12 gap-12">
            <div className="lg:col-span-8 flex flex-col justify-center">
              <div className={`flex items-center gap-4 mb-10 transition-all duration-1000 ${visibleSections.hero ? 'animate-fade-in-right' : 'opacity-0'}`}>
                <div className="h-[2px] w-16 bg-[#A07A41]"></div>
                <span className="text-[#A07A41] uppercase tracking-[0.5em] text-xs font-serif font-black">Industrial Legal Support</span>
              </div>
              
              <h1 className={`text-3xl md:text-5xl lg:text-7xl font-serif font-bold text-white leading-[1.1] mb-12 tracking-tighter transition-all duration-1000 ${visibleSections.hero ? 'opacity-100' : 'opacity-0'}`}>
                <span className="block animate-fade-in-top-left italic font-light text-[#A07A41]">UK Employment</span>
                <span className="block animate-fade-in-up animation-delay-200 uppercase">Contracts.</span>
              </h1>

              
              <div className={`max-w-2xl border-l-4 border-[#A07A41] pl-10 transition-all duration-1000 ${visibleSections.hero ? 'animate-fade-in-left animation-delay-400' : 'opacity-0'}`}>
                <p className="text-gray-300 text-base md:text-lg font-sans font-light leading-relaxed mb-12">
                  Create clear, legally compliant employment contracts that protect your business, define roles, and reduce workplace disputes.
                </p>

                <div className="flex flex-col sm:flex-row gap-8">
                   <div className="flex items-center gap-3">
                      <CheckCircle size={18} className="text-[#A07A41]" />
                      <span className="text-[10px] uppercase font-bold tracking-widest text-gray-400">Custom Drafting</span>
                   </div>
                   <div className="flex items-center gap-3">
                      <CheckCircle size={18} className="text-[#A07A41]" />
                      <span className="text-[10px] uppercase font-bold tracking-widest text-gray-400">Risk Analysis</span>
                   </div>
                   <div className="flex items-center gap-3">
                      <CheckCircle size={18} className="text-[#A07A41]" />
                      <span className="text-[10px] uppercase font-bold tracking-widest text-gray-400">UK Law Compliant</span>
                   </div>
                </div>
              </div>

              <div className={`mt-16 transition-all duration-1000 ${visibleSections.hero ? 'animate-fade-in-up animation-delay-600' : 'opacity-0'}`}>
                <a href="#contact" className="group relative inline-flex items-center gap-4 px-10 py-6 bg-[#A07A41] text-black font-bold uppercase tracking-[0.2em] text-[12px] rounded-full transition-all duration-500 hover:bg-white hover:px-14 shadow-[0_20px_50px_rgba(160,122,65,0.3)]">
                   <span>Request Contract Drafting</span>
                   <ArrowRight className="h-5 w-5 transform group-hover:translate-x-3 transition-transform" />
                </a>
              </div>
            </div>
          </div>
          
          <div className="absolute bottom-12 left-8 hidden lg:block opacity-20">
             <div className="flex flex-col gap-4 text-[10px] tracking-[0.5em] font-bold text-gray-400 vertical-text uppercase">
                SCROLL TO EXPLORE
             </div>
          </div>
        </section>

        {/* 2. Introduction / Overview - 3 COLUMN MAPPING */}
        <section 
          ref={sectionRefs.intro}
          data-section="intro"
          className="relative py-24 lg:py-40 bg-[#2A454E] overflow-hidden"
        >
          <div className="px-4 sm:px-6 lg:px-8 max-w-[90rem] mx-auto">
             <div className="grid lg:grid-cols-3 gap-16 items-start">
                <div className={`${visibleSections.intro ? 'animate-fade-in-up' : 'opacity-0'}`}>
                   <span className="text-[#A07A41] uppercase tracking-[0.4em] text-xs font-bold mb-8 block">The Mandate</span>
                   <h2 className="text-2xl md:text-4xl font-serif font-bold text-white leading-tight mb-8">Role Definition & <span className="italic font-light text-[#A07A41]">Compliance.</span></h2>
                </div>

                <div className={`lg:mt-24 space-y-8 ${visibleSections.intro ? 'animate-fade-in-up animation-delay-200' : 'opacity-0'}`}>
                   <p className="text-gray-300 text-lg font-sans font-light leading-relaxed">
                      Employment contracts define the crucial relationship between employers and employees. Poorly drafted agreements can lead to disputes and legal risks that destabilize operations.
                   </p>
                   <div className="h-[1px] w-full bg-white/10"></div>
                   <p className="text-gray-400 text-base italic leading-relaxed">
                      👉 Goal: To protect both parties and prevent future organizational conflicts.
                   </p>
                </div>
                <div className={`${visibleSections.intro ? 'animate-fade-in-up animation-delay-400' : 'opacity-0'}`}>
                   <div className="relative p-6 border border-[#A07A41]/10 rounded-[3rem] group overflow-hidden shadow-2xl">
                      <img src="/co1.jpg" alt="Legal Review" className="w-full aspect-[4/5] object-cover rounded-[2.5rem] grayscale group-hover:grayscale-0 transition-all duration-1000 shadow-xl" />
                      <div className="absolute inset-0 bg-[#A07A41]/5 mix-blend-overlay"></div>
                   </div>

                </div>
             </div>
          </div>
        </section>

        {/* 3. What is an Employment Contract - GRID CARD MAPPING */}
        <section 
          ref={sectionRefs.definition}
          data-section="definition"
          className="relative py-24 lg:py-40 bg-[#1B2D33] overflow-hidden border-y border-white/5"
        >
           <div className="px-4 sm:px-6 lg:px-8 max-w-[90rem] mx-auto">
              <div className="text-center mb-24">
                 <span className={`text-[#A07A41] uppercase tracking-[0.4em] text-[10px] font-bold mb-6 block ${visibleSections.definition ? 'animate-fade-in-up' : 'opacity-0'}`}>Contract Anatomy</span>
                 <h2 className={`text-3xl md:text-5xl font-serif font-bold text-white tracking-tight ${visibleSections.definition ? 'animate-fade-in-up' : 'opacity-0'}`}>What defines the <span className="italic font-light text-[#A07A41]">Agreement?</span></h2>
              </div>


              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 items-center">
                 <div className="lg:col-span-1 space-y-4">
                    {[ "Job role and responsibilities", "Salary and benefits structure" ].map((item, i) => (
                       <div key={i} className={`p-10 bg-[#2A454E]/40 border border-white/5 rounded-[2.5rem] flex items-center justify-between group hover:border-[#A07A41]/40 transition-all ${visibleSections.definition ? 'animate-fade-in-left' : 'opacity-0'}`} style={{ animationDelay: `${i * 100}ms` }}>
                          <span className="text-white font-serif font-bold tracking-wide">{item}</span>
                          <CheckCircle className="text-[#A07A41] shrink-0" size={20} />
                       </div>
                    ))}
                 </div>
                 <div className="lg:col-span-1">
                    <div className={`relative p-8 bg-[#A07A41] rounded-[3.5rem] text-black text-center shadow-2xl transition-all duration-1000 ${visibleSections.definition ? 'animate-fade-in-up' : 'opacity-0 shadow-none scale-95'}`}>
                       <FileSignature size={48} className="mx-auto mb-8" />
                       <p className="text-lg font-serif font-bold leading-relaxed tracking-tight italic">
                          &quot;An employment contract is a legally binding agreement outlining rights, responsibilities, and mutual obligations.&quot;
                       </p>
                    </div>
                 </div>
                 <div className="lg:col-span-1 space-y-4">
                    {[ "Termination conditions", "Confidentiality obligations" ].map((item, i) => (
                       <div key={i} className={`p-10 bg-[#2A454E]/40 border border-white/5 rounded-[2.5rem] flex items-center justify-between group hover:border-[#A07A41]/40 transition-all ${visibleSections.definition ? 'animate-fade-in-right' : 'opacity-0'}`} style={{ animationDelay: `${i * 100}ms` }}>
                          <span className="text-white font-serif font-bold tracking-wide">{item}</span>
                          <CheckCircle className="text-[#A07A41] shrink-0" size={20} />
                       </div>
                    ))}
                 </div>
              </div>
           </div>
        </section>

        {/* 4. Our Services - ZIG ZAG MAPPING */}
        <section 
          ref={sectionRefs.services}
          data-section="services"
          className="relative py-24 lg:py-40 bg-[#2A454E] overflow-hidden"
        >
          <div className="px-4 sm:px-6 lg:px-8 max-w-[90rem] mx-auto text-center mb-40">
             <span className={`text-[#A07A41] uppercase tracking-[0.5em] text-[10px] font-bold mb-6 block ${visibleSections.services ? 'animate-fade-in-up' : 'opacity-0'}`}>Service Portfolio</span>
             <h2 className={`text-3xl md:text-5xl font-serif font-bold text-white tracking-tight ${visibleSections.services ? 'animate-fade-in-up' : 'opacity-0'}`}>Core Drafting <span className="italic font-light text-[#A07A41]">Solutions.</span></h2>
          </div>


          <div className="space-y-32">
             {serviceCategories.map((service, i) => (
               <div 
                 key={i} 
                 className={`px-4 sm:px-6 lg:px-8 max-w-[90rem] mx-auto grid lg:grid-cols-2 gap-20 items-center ${visibleSections.services ? 'opacity-100' : 'opacity-0'}`}
               >
                  <div className={`${i % 2 === 0 ? 'lg:order-1' : 'lg:order-2'} ${visibleSections.services ? (i % 2 === 0 ? 'animate-fade-in-left' : 'animate-fade-in-right') : ''}`}>
                     <div className="relative group rounded-[3.5rem] overflow-hidden border border-[#A07A41]/20 shadow-2xl aspect-[16/10]">
                        <img src={service.img} alt={service.title} className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-1000 group-hover:scale-105" />
                        <div className="absolute inset-0 bg-[#A07A41]/5 mix-blend-overlay"></div>
                     </div>
                  </div>
                  <div className={`${i % 2 === 0 ? 'lg:order-2' : 'lg:order-1'} ${visibleSections.services ? (i % 2 === 0 ? 'animate-fade-in-right' : 'animate-fade-in-left') : ''}`}>
                     <div className="flex items-center gap-6 mb-8">
                        <div className="w-16 h-16 bg-[#1B2D33] rounded-2xl flex items-center justify-center border border-[#A07A41]/30 text-[#A07A41]">
                           <service.icon size={28} />
                        </div>
                        <h3 className="text-2xl md:text-4xl font-serif font-bold text-white tracking-tight">{service.title}</h3>
                     </div>
                     <p className="text-gray-300 text-lg font-sans font-light leading-relaxed mb-10 border-l-2 border-[#A07A41]/30 pl-8">
                        {service.desc}
                     </p>

                     <div className="flex items-center gap-4">
                        <div className="px-6 py-3 bg-[#1B2D33] border border-white/10 rounded-full">
                           <span className="text-[10px] uppercase font-black tracking-[0.3em] text-[#A07A41]">Deliverable: {service.deliverable}</span>
                        </div>
                     </div>
                  </div>
               </div>
             ))}
          </div>
        </section>

        {/* 5. Our Process - VERTICAL TIMELINE MAPPING */}
        <section 
          ref={sectionRefs.process}
          data-section="process"
          className="relative py-24 lg:py-40 bg-[#1B2D33] overflow-hidden"
        >
          <div className="px-4 sm:px-6 lg:px-8 max-w-[90rem] mx-auto flex flex-col lg:flex-row gap-20">
             <div className={`lg:w-1/3 ${visibleSections.process ? 'animate-fade-in-left' : 'opacity-0'}`}>
                <span className="text-[#A07A41] uppercase tracking-[0.4em] text-xs font-bold mb-6 block">Execution Cycle</span>
                <h2 className="text-3xl md:text-5xl font-serif font-bold text-white mb-10 leading-tight">Our Trust <br /><span className="italic font-light text-[#A07A41]">Builder.</span></h2>
                <div className="h-2 w-40 bg-[#A07A41] rounded-full"></div>
             </div>

             
             <div className="lg:w-2/3 space-y-12 relative lg:pl-12">
                <div className="absolute left-0 lg:left-12 top-0 w-[1px] h-full bg-[#A07A41]/20"></div>
                {[
                  { title: "Define Requirements", text: "Identify your specific business needs and organizational hierarchy." },
                  { title: "Legal Obligations", text: "Deep analysis of UK compliance points relevant to the job role." },
                  { title: "Strategic Drafting", icon: Layers, text: "Creating or reviewing the contract with clear, enforceable language." },
                  { title: "Compliance Pass", text: "Final pass ensuring all statutory workplace standards are met." },
                  { title: "Operational Delivery", text: "Final handover of ready-to-use, legally robust documentation." }
                ].map((step, i) => (
                  <div key={i} className={`relative lg:pl-28 ${visibleSections.process ? 'animate-fade-in-up' : 'opacity-0'}`} style={{ animationDelay: `${i * 150}ms` }}>
                     <div className="absolute left-[-4px] lg:left-[44px] top-4 w-2 h-2 rounded-full bg-[#A07A41] shadow-[0_0_15px_rgba(160,122,65,1)]"></div>
                     <div className="p-10 bg-[#2A454E]/40 border border-white/5 rounded-[2.5rem] group hover:border-[#A07A41]/40 transition-all hover:-translate-y-2 duration-500">
                        <span className="text-[#A07A41] font-bold italic text-sm mb-4 block">PHASE 0{i+1}</span>
                        <h4 className="text-2xl font-serif font-bold text-white mb-4 transition-colors group-hover:text-[#A07A41]">{step.title}</h4>
                        <p className="text-gray-400 font-sans font-light leading-relaxed">{step.text}</p>
                     </div>
                  </div>
                ))}
             </div>
          </div>
        </section>

        {/* 6. Legal Framework & Compliance - FLOATING CARD MAPPING */}
        <section 
          ref={sectionRefs.framework}
          data-section="framework"
          className="relative py-24 lg:py-40 bg-[#2A454E] overflow-hidden border-y border-white/5"
        >
          <div className="px-4 sm:px-6 lg:px-8 max-w-[90rem] mx-auto flex flex-col lg:flex-row items-center gap-20">
             <div className={`w-full lg:w-1/2 ${visibleSections.framework ? 'animate-fade-in-left' : 'opacity-0'}`}>
                <div className="relative p-12 lg:p-24 bg-[#1B2D33] rounded-[4rem] border border-[#A07A41]/10 shadow-[0_40px_100px_rgba(0,0,0,0.5)] overflow-hidden group">
                   <div className="absolute top-0 right-0 p-12 opacity-[0.03] rotate-12 group-hover:rotate-0 transition-all duration-1000 scale-[3]">
                      <Gavel size={150} className="text-[#A07A41]" />
                   </div>
                   <span className="text-[#A07A41] uppercase tracking-[0.5em] text-[10px] font-bold mb-10 block">Statutory Compliance</span>
                   <h2 className="text-2xl md:text-4xl font-serif font-bold text-white mb-10 leading-tight">Legal Framework & <br /><span className="italic font-light text-[#A07A41]">Reliability.</span></h2>
                   <div className="space-y-6">

                      {[ "Employment Rights Act 1996", "Equality Act 2010", "UK GDPR Integration" ].map((law, i) => (
                         <div key={i} className="flex items-center gap-4 group">
                            <ShieldCheck className="text-[#A07A41] h-5 w-5" />
                            <span className="text-gray-300 font-serif font-bold italic text-sm tracking-[0.2em] uppercase">{law}</span>
                         </div>
                      ))}
                   </div>
                </div>
             </div>
             <div className={`w-full lg:w-1/2 ${visibleSections.framework ? 'animate-fade-in-right' : 'opacity-0'}`}>
                <div className="grid grid-cols-2 gap-4">
                   <div className="aspect-square rounded-[3rem] overflow-hidden border border-white/10 group">
                      <img src="/co7.jpg" alt="Workplace Law" className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-1000" />
                   </div>
                   <div className="aspect-square rounded-[3rem] overflow-hidden border border-white/10 group mt-12">
                      <img src="/co8.jpg" alt="Rights Review" className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-1000" />
                   </div>
                </div>

             </div>
          </div>
        </section>

        {/* 7. Who Needs This Service - MASONRY MAPPING */}
        <section 
          ref={sectionRefs.who}
          data-section="who"
          className="relative py-24 lg:py-40 bg-[#1B2D33] overflow-hidden"
        >
          <div className="px-4 sm:px-6 lg:px-8 max-w-[90rem] mx-auto text-center mb-24">
             <span className={`text-[#A07A41] uppercase tracking-[0.4em] text-xs font-bold mb-6 block ${visibleSections.who ? 'animate-fade-in-up' : 'opacity-0'}`}>Target Verticals</span>
             <h2 className={`text-3xl md:text-5xl font-serif font-bold text-white tracking-tight ${visibleSections.who ? 'animate-fade-in-up' : 'opacity-0'}`}>Partnership <span className="italic font-light text-[#A07A41]">Landscape.</span></h2>
          </div>


          <div className="px-4 sm:px-6 lg:px-8 max-w-[90rem] mx-auto flex flex-wrap justify-center gap-4">
             {[ "Businesses", "Startups", "HR Departments", "Employers", "Freelancers", "Companies", "Entrepreneurs", "Contractors" ].map((item, i) => (
                <div key={i} className={`px-12 py-8 bg-[#2A454E]/40 border border-white/5 rounded-full group hover:bg-[#A07A41] hover:-translate-y-2 transition-all duration-500 shadow-xl ${visibleSections.who ? 'animate-fade-in-up' : 'opacity-0'}`} style={{ animationDelay: `${i * 100}ms` }}>
                   <span className="text-gray-300 font-serif font-black uppercase tracking-[0.3em] text-[10px] group-hover:text-black transition-colors">{item}</span>
                </div>
             ))}
          </div>
        </section>

        {/* 8. Deliverables & 9. Why Choose - STACKED SPLIT MAPPING */}
        <section className="relative py-24 lg:py-40 bg-[#2A454E] overflow-hidden">
          <div className="px-4 sm:px-6 lg:px-8 max-w-[90rem] mx-auto">
             <div className="grid lg:grid-cols-2 gap-32">
                {/* 8. Deliverables */}
                <div ref={sectionRefs.deliverables} data-section="deliverables" className={`${visibleSections.deliverables ? 'animate-fade-in-left' : 'opacity-0'}`}>
                   <span className="text-[#A07A41] uppercase tracking-[0.4em] text-[10px] font-bold mb-10 block">Final Assets</span>
                   <h2 className="text-3xl md:text-5xl font-serif font-bold text-white mb-12 tracking-tight">Project <span className="italic font-light text-[#A07A41]">Deliverables.</span></h2>
                   <div className="grid gap-4">

                      {[ 
                        { title: "Employment Contract", icon: FileText },
                        { title: "Review Report", icon: Search },
                        { title: "Risk Analysis Summary", icon: ShieldAlert },
                        { title: "Clause Improvements", icon: Layers },
                        { title: "Ready-to-Sign Edition", icon: CheckCircle }
                      ].map((item, i) => (
                         <div key={i} className="flex items-center justify-between p-8 bg-[#1B2D33]/60 rounded-3xl border-l-4 border-[#A07A41] group hover:bg-[#1B2D33] transition-all">
                            <span className="text-gray-200 font-sans font-bold uppercase tracking-widest text-xs">{item.title}</span>
                            <item.icon size={20} className="text-[#A07A41]" />
                         </div>
                      ))}
                   </div>
                </div>

                {/* 9. Why Choose */}
                <div ref={sectionRefs.why} data-section="why" className={`lg:pt-24 ${visibleSections.why ? 'animate-fade-in-right' : 'opacity-0'}`}>
                   <span className="text-[#A07A41] uppercase tracking-[0.4em] text-[10px] font-bold mb-10 block font-serif">Competitive Strategy</span>
                   <h2 className="text-3xl md:text-5xl font-serif font-bold text-white mb-12 tracking-tight">Why <span className="italic font-light text-[#A07A41]">H&S CO?</span></h2>
                   <div className="space-y-12">

                      {[
                        { title: "UK Expertise", text: "Deep knowledge of localized employment laws and regulatory shifts." },
                        { title: "Risk-Based Drafting", text: "Identifying liability before it becomes a structural legal issue." },
                        { title: "Express Turnaround", text: "Delivery of professional drafts within 24–72 hours as standard." }
                      ].map((point, i) => (
                         <div key={i} className="relative pl-12 group">
                            <div className="absolute left-0 top-1 w-6 h-[1px] bg-[#A07A41] group-hover:w-10 transition-all"></div>
                            <h4 className="text-white font-serif font-bold text-xl mb-3 tracking-tight group-hover:text-[#A07A41] transition-colors uppercase italic">{point.title}</h4>
                            <p className="text-gray-400 font-sans font-light leading-relaxed">{point.text}</p>
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
          className="relative py-24 lg:py-40 bg-[#1B2D33] overflow-hidden border-y border-white/5"
        >
          <div className="relative z-10 px-4 sm:px-6 lg:px-8 max-w-[50rem] mx-auto">
            <div className={`text-center mb-24 ${visibleSections.faq ? 'animate-fade-in-up' : 'opacity-0'}`}>
              <span className="text-[#A07A41] uppercase tracking-[0.3em] text-[10px] font-bold mb-6 block">Structural Assurance</span>
              <h2 className="text-3xl md:text-5xl font-serif font-bold text-white tracking-tight underline decoration-[#A07A41]/20 underline-offset-[20px]">Common <span className="italic font-light text-[#A07A41]">Questions.</span></h2>
            </div>

            <div className="space-y-4">
              {faqItems.map((faq, index) => (
                <div 
                  key={index} 
                  className={`border border-[#A07A41]/10 rounded-[2.5rem] bg-[#2A454E]/30 overflow-hidden ${visibleSections.faq ? 'animate-fade-in-up' : 'opacity-0'}`} 
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
          className="relative py-24 lg:py-40 bg-[#2A454E] overflow-hidden"
        >
          <div className="absolute inset-0 z-0 opacity-10">
             <img src="/co9.jpg" alt="Final Assets" className="w-full h-full object-cover grayscale" />
          </div>
          <div className="relative z-10 px-4 sm:px-6 lg:px-8 max-w-[90rem] mx-auto text-center">
            <div className={`max-w-5xl mx-auto p-16 lg:p-32 bg-[#1B2D33]/60 border border-[#A07A41]/10 rounded-[5rem] backdrop-blur-3xl relative overflow-hidden shadow-2xl ${visibleSections.cta ? 'animate-fade-in-up' : 'opacity-0'}`}>
              <div className="absolute top-0 right-0 p-12 opacity-5"><FileSignature size={300} /></div>

              <span className="text-[#A07A41] uppercase tracking-[0.4em] text-[10px] font-bold mb-8 block">Operational Readiness</span>
              <h2 className="text-3xl md:text-6xl font-serif font-bold text-white mb-10 leading-tight tracking-tight">Protect Your Business <br /><span className="italic font-light text-[#A07A41]">Ensure Compliance.</span></h2>
              <p className="text-gray-400 font-sans text-lg mb-12 max-w-2xl mx-auto leading-relaxed italic">
                 Avoid disputes and ensure organizational stability with professionally drafted agreements.
              </p>

              <div className="flex flex-col sm:flex-row justify-center items-center gap-10">
                <a href="#contact" className="group relative flex items-center justify-center gap-4 px-12 py-6 bg-[#A07A41] text-black font-bold uppercase tracking-widest text-[11px] rounded-full transition-all duration-500 hover:scale-105 hover:bg-white shadow-[0_20px_60px_rgba(160,122,65,0.4)] w-full sm:w-auto">
                  <span>Request Employment Contract Now</span>
                  <ArrowRight className="h-5 w-5 group-hover:translate-x-2 transition-transform" />
                </a>
              </div>
            </div>
          </div>
        </section>

      </main>
    </div>
  );
};

export default EmploymentContractsPage;
