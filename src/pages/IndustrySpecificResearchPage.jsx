import React, { useEffect, useState, useRef } from 'react';
import { 
  ArrowRight, Scale, Gavel, Search, CheckCircle, Zap, Database, 
  Shield, ShieldCheck, FileText, ChevronDown, Award, Briefcase, Factory,
  Target, ShieldAlert, ClipboardCheck, Crosshair, Layers, 
  Map, FileSearch, ArrowLeftRight, FileCode, SplitSquareHorizontal,
  Landmark, Globe, Users, TrendingUp, Presentation, CheckSquare
} from 'lucide-react';

const IndustrySpecificResearchPage = () => {
  const [activeFaq, setActiveFaq] = useState(null);
  const [visibleSections, setVisibleSections] = useState({
    hero: false,
    intro: false,
    definition: false,
    coreServices: false,
    industries: false,
    methodology: false,
    tools: false,
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
    industries: useRef(null),
    methodology: useRef(null),
    tools: useRef(null),
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
      q: "What is industry-specific legal research?",
      a: "Legal research tailored to a particular business sector, ensuring highly relevant insights rather than generic advice."
    },
    {
      q: "Do you cover multiple industries?",
      a: "Yes, including corporate, employment, immigration, civil litigation, and contract law."
    },
    {
      q: "Can you identify industry risks?",
      a: "Yes, our targeted research focuses heavily on identifying regulatory compliance and procedural legal risks."
    },
    {
      q: "How fast is delivery?",
      a: "Typically within 24–72 hours, delivering actionable reports straight to your inbox."
    }
  ];

  const coreServices = [
    {
      id: "4.1",
      title: "Sector-Based Legal Analysis",
      desc: "Analyze legal frameworks for specific industries, identify applicable laws, and deeply focus on sector-specific legal challenges.",
      deliverable: "Industry-focused legal report",
      icon: Briefcase,
      anim: "animate-fade-in-top-left"
    },
    {
      id: "4.2",
      title: "Regulatory & Compliance Research",
      desc: "Determine industry-specific compliance requirements, outline legal obligations, and comprehensively identify operational risks.",
      deliverable: "Compliance-focused report",
      icon: ClipboardCheck,
      anim: "animate-fade-in-up"
    },
    {
      id: "4.3",
      title: "Case Law Research by Sector",
      desc: "Identify relevant cases within their respective industries, analyze court decisions impacting the sector, and extract practical insights.",
      deliverable: "Sector-specific case law report",
      icon: Scale,
      anim: "animate-fade-in-top-right"
    },
    {
      id: "4.4",
      title: "Legal Issue Identification",
      desc: "Identify common legal issues within a target sector, highlighting potential roadblocks and supporting critical business decisions.",
      deliverable: "Industry issue analysis",
      icon: Target,
      anim: "animate-fade-in-bottom-left"
    },
    {
      id: "4.5",
      title: "Risk & Legal Impact Analysis",
      desc: "Identify legal exposure in an industry, critically evaluate potential consequences, and provide preventive insights.",
      deliverable: "Legal risk report",
      icon: ShieldAlert,
      anim: "animate-fade-in-bottom-right"
    }
  ];

  const industries = [
    { name: "Corporate & Business Law", desc: "Company regulations, Contracts & governance", icon: Landmark },
    { name: "Employment Law", desc: "Workplace compliance, Employee rights & disputes", icon: Users },
    { name: "Immigration Law", desc: "Visa regulations, Sponsorship compliance", icon: Globe },
    { name: "Contract Law", desc: "Commercial agreements, Breach and enforcement", icon: FileText },
    { name: "Civil Litigation", desc: "Disputes and claims, Court proceedings", icon: Gavel }
  ];

  return (
    <div className="min-h-screen bg-[#2A454E] flex flex-col overflow-x-hidden text-white font-sans">
      <main className="flex-grow">
        
        {/* 1. Hero Section */}
        <section 
          ref={sectionRefs.hero}
          data-section="hero"
          className="relative min-h-[100vh] flex items-center pt-32 pb-24 overflow-hidden bg-[#16272D]"
        >
          <div className="absolute inset-0 z-0 opacity-40 group">
             <img src="/heroo.jpg" alt="Industry-Specific Legal Research" className="w-full h-full object-cover object-center transition-transform duration-[20s] group-hover:scale-110" />
             <div className="absolute inset-0 bg-gradient-to-t from-[#2A454E] via-[#2A454E]/70 to-transparent"></div>
          </div>

          <div className="relative z-10 px-4 sm:px-6 lg:px-8 max-w-[90rem] mx-auto w-full">
            <div className="max-w-4xl">
              <div className={`flex items-center gap-4 mb-6 transition-all duration-1000 ${visibleSections.hero ? 'animate-fade-in-left' : 'opacity-0'}`}>
                <div className="h-[1px] w-12 bg-[#A07A41]"></div>
                <span className="text-[#A07A41] uppercase tracking-[0.4em] text-[10px] font-bold">UK Specific Analysis</span>
              </div>
              
              <h1 className={`text-4xl md:text-5xl lg:text-7xl font-serif font-bold text-white leading-tight mb-8 tracking-tight transition-all duration-1000 ${visibleSections.hero ? 'opacity-100' : 'opacity-0'}`}>
                <span className="block animate-fade-in-top-left">Industry-Specific</span>
                <span className="block italic font-light text-[#A07A41] animate-fade-in-up animation-delay-200">Legal Research</span>
                <span className="block animate-fade-in-bottom-right animation-delay-300 text-3xl md:text-4xl lg:text-5xl mt-2">Services in UK</span>
              </h1>
              
              <p className={`text-gray-300 text-base md:text-xl font-sans font-light leading-relaxed max-w-2xl mb-10 border-l-2 border-[#A07A41]/30 pl-8 transition-all duration-1000 ${visibleSections.hero ? 'animate-fade-in-right animation-delay-400' : 'opacity-0'}`}>
                Targeted legal research tailored to specific industries — delivering precise, relevant, and actionable legal insights.
              </p>

              <div className={`grid sm:grid-cols-3 gap-4 mb-12 transition-all duration-1000 ${visibleSections.hero ? 'animate-fade-in-bottom-left animation-delay-500' : 'opacity-0'}`}>
                {[
                  { icon: Factory, text: "Industry-Focused Analysis" },
                  { icon: Briefcase, text: "Sector-Specific Laws" },
                  { icon: ShieldCheck, text: "Compliance-Driven" }
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-4 p-4 bg-[#1B2D33]/60 border border-white/10 rounded-2xl backdrop-blur-sm shadow-xl">
                    <item.icon className="h-5 w-5 text-[#A07A41]" />
                    <span className="text-xs font-medium tracking-wide text-gray-200">{item.text}</span>
                  </div>
                ))}
              </div>

              <div className={`transition-all duration-1000 ${visibleSections.hero ? 'animate-fade-in-up animation-delay-600' : 'opacity-0'}`}>
                <a href="#contact" className="group relative inline-flex items-center gap-4 px-10 py-5 bg-[#A07A41] text-black font-bold uppercase tracking-widest text-xs rounded-xl transition-all duration-500 hover:bg-white hover:scale-105 shadow-2xl">
                  <span>Request Industry-Specific Research</span>
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
          <div className="absolute left-0 bottom-0 p-32 opacity-[0.02] pointer-events-none">
            <Factory size={400} className="text-[#A07A41]" />
          </div>
          <div className="px-4 sm:px-6 lg:px-8 max-w-[90rem] mx-auto z-10 relative">
            <div className={`grid lg:grid-cols-2 gap-20 items-center ${visibleSections.intro ? 'animate-fade-in-bottom-right' : 'opacity-0'}`}>
              
              <div className="order-2 lg:order-1 relative group">
                <div className="aspect-[4/5] rounded-[3rem] overflow-hidden border border-[#A07A41]/20 relative bg-[#16272D] flex items-center justify-center">
                   <img src="/her1.jpg" alt="Legal Research Sector Representation" className="w-full h-full object-cover object-center transition-all duration-1000 group-hover:scale-105 grayscale group-hover:grayscale-0" />
                   <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-[#1B2D33]/40 to-[#1B2D33]"></div>
                </div>
                <div className="absolute -bottom-10 -right-10 bg-[#2A454E] p-6 lg:p-8 rounded-3xl border border-white/10 shadow-2xl animate-fade-in-top-left animation-delay-500 hidden sm:block">
                  <div className="flex items-center gap-4">
                    <Target className="h-10 w-10 text-[#A07A41]" />
                    <div>
                      <p className="text-white font-bold text-sm">Actionable Insights</p>
                      <p className="text-gray-400 text-xs">Relevant to your market</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className={`order-1 lg:order-2 ${visibleSections.intro ? 'animate-fade-in-top-right' : 'opacity-0'}`}>
                <div className="flex items-center gap-4 mb-8">
                  <div className="h-[1px] w-12 bg-[#A07A41]"></div>
                  <span className="text-[#A07A41] uppercase tracking-[0.4em] text-xs font-bold">Overview</span>
                </div>
                <h2 className="text-3xl md:text-5xl font-serif font-bold text-white leading-tight mb-10">
                  Specialized Focus, <br />
                  <span className="italic font-light text-[#A07A41]">Not Generic Analysis.</span>
                </h2>
                <div className="space-y-8">
                  <p className="text-gray-300 text-base md:text-lg font-sans font-light leading-relaxed">
                    H&S CO provides specialized legal research tailored to specific industries across the UK. Instead of generic legal analysis, we strictly focus on <span className="text-white font-medium italic underline decoration-[#A07A41]/50 underline-offset-4">industry-relevant laws, regulations, and case law</span> that directly impact your business operations or legal matter.
                  </p>
                  
                  <p className="text-gray-300 text-base md:text-lg font-sans font-light leading-relaxed">
                    Using trusted platforms like Westlaw UK, LexisNexis UK, and BAILII, we deliver highly focused, practical, and application-ready decisions tailored to your exact niche.
                  </p>
                  
                  <div className="p-8 bg-[#2A454E]/50 backdrop-blur-xl border-l-4 border-[#A07A41] rounded-r-2xl relative overflow-hidden group">
                    <div className="relative z-10 flex items-start gap-4">
                       <Zap className="h-6 w-6 text-[#A07A41] shrink-0 mt-1" />
                       <div>
                         <p className="text-lg font-serif italic text-white leading-tight">
                           Goal: <span className="text-[#A07A41] font-bold">Make legal research relevant to your industry, not generic.</span>
                         </p>
                       </div>
                    </div>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* 3. What is Industry-Specific Legal Research? */}
        <section 
          ref={sectionRefs.definition}
          data-section="definition"
          className="relative py-28 bg-[#2A454E] overflow-hidden border-y border-white/5"
        >
          <div className="absolute top-0 left-1/4 w-[1px] h-full bg-gradient-to-b from-transparent via-[#A07A41]/20 to-transparent"></div>
          <div className="absolute top-0 right-1/4 w-[1px] h-full bg-gradient-to-b from-transparent via-[#A07A41]/20 to-transparent"></div>
          
          <div className={`px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto text-center relative z-10 ${visibleSections.definition ? 'animate-fade-in-up' : 'opacity-0'}`}>
            <span className="text-[#A07A41] uppercase tracking-[0.4em] text-[10px] font-bold mb-8 block">Fundamental Approach</span>
            <div className="relative">
              <span className="absolute -top-10 -left-10 text-[120px] font-serif italic text-[#1B2D33]/40 leading-none z-0">"</span>
              <h2 className="text-white/90 font-serif text-3xl md:text-5xl font-light mb-8 leading-snug italic relative z-10">
                Industry-specific legal research involves analyzing laws, regulations, and case law that apply to a <span className="text-white font-medium">particular sector</span>, ensuring accurate and highly relevant legal guidance.
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
          <div className="px-4 sm:px-6 lg:px-8 max-w-[90rem] mx-auto relative z-10">
            <div className="mb-24 flex flex-col md:flex-row md:items-end justify-between gap-8">
              <div className="max-w-3xl border-l-[3px] border-[#A07A41] pl-8">
                <span className="text-[#A07A41] uppercase tracking-[0.4em] text-xs font-bold mb-4 block">Where We Deliver Value</span>
                <h2 className="text-3xl md:text-6xl font-serif font-bold text-white tracking-tight">Core <span className="italic font-light text-[#A07A41]">Services.</span></h2>
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
                    <service.icon size={180} className="text-[#A07A41]" />
                  </div>
                  
                  <div className="relative z-10 flex flex-col h-full">
                    <div className="flex justify-between items-start mb-8">
                      <div className="w-14 h-14 bg-[#16272D] rounded-xl flex items-center justify-center group-hover:bg-[#A07A41] transition-colors duration-500 border border-[#A07A41]/20 group-hover:border-transparent">
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
                        <CheckSquare size={12} /> Deliverable
                      </span>
                      <span className="text-white text-sm font-medium">{service.deliverable}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 5. Key Industries Covered */}
        <section 
          ref={sectionRefs.industries}
          data-section="industries"
          className="relative py-24 lg:py-40 bg-[#2A454E] overflow-hidden border-t border-white/5"
        >
          <div className="px-4 sm:px-6 lg:px-8 max-w-[90rem] mx-auto z-10 relative">
             <div className="text-center mb-20">
                <span className="text-[#A07A41] uppercase tracking-[0.4em] text-xs font-bold mb-4 block">Targeted Expertise</span>
                <h2 className="text-3xl md:text-5xl font-serif font-bold text-white mb-6">Key Industries <span className="italic font-light text-[#A07A41]">Covered.</span></h2>
                <p className="text-gray-300 font-light max-w-2xl mx-auto">We don't claim to know every industry. We focus deeply on specific sectors to guarantee precision and trust.</p>
             </div>
             
             <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
                {industries.map((ind, i) => (
                  <div 
                    key={i} 
                    className={`bg-[#1B2D33]/60 p-8 rounded-2xl border border-[#A07A41]/10 hover:border-[#A07A41]/40 hover:bg-[#16272D] transition-all group ${visibleSections.industries ? (i%2!==0 ? 'animate-fade-in-down' : 'animate-fade-in-up') : 'opacity-0'}`}
                    style={{ animationDelay: `${i * 100}ms` }}
                  >
                     <ind.icon className="h-10 w-10 text-[#A07A41] mb-6 group-hover:scale-110 transition-transform duration-500" />
                     <h4 className="text-xl font-serif font-bold text-white mb-4 leading-tight">{ind.name}</h4>
                     <p className="text-sm font-light text-gray-400">{ind.desc}</p>
                  </div>
                ))}
             </div>
          </div>
        </section>

        {/* 6. Research Methodology & 7. Tools */}
        <section 
          ref={sectionRefs.methodology}
          data-section="methodology"
          className="relative py-24 lg:py-40 bg-[#1B2D33] border-y border-white/5"
        >
          <div className="px-4 sm:px-6 lg:px-8 max-w-[90rem] mx-auto">
            
            <div className="grid lg:grid-cols-2 gap-20">
              
               {/* Image & Tools Left Side */}
              <div className={`${visibleSections.methodology ? 'animate-fade-in-left' : 'opacity-0'} flex flex-col gap-12`}>
                 
                 <div className="aspect-video w-full rounded-[2rem] bg-[#2A454E] border border-[#A07A41]/20 flex items-center justify-center relative overflow-hidden shadow-2xl group cursor-pointer">
                    <img src="/her2.jpg" alt="Strategic Process Representation" className="w-full h-full object-cover object-center transition-all duration-1000 group-hover:scale-105 grayscale group-hover:grayscale-0" />
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-[#1B2D33]/40 to-[#1B2D33] opacity-50 pointer-events-none"></div>
                 </div>

                 {/* Tools */}
                 <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
                    {[
                      { name: "Westlaw UK", icon: Database },
                      { name: "LexisNexis UK", icon: Search },
                      { name: "BAILII", icon: Gavel },
                      { name: "UK Parliament", icon: Landmark }
                    ].map((tool, i) => (
                      <div key={i} className="flex flex-col items-center gap-3 p-4 bg-[#16272D]/60 border border-white/5 rounded-xl text-center">
                         <div className="w-10 h-10 rounded-full bg-[#1B2D33] border border-[#A07A41]/10 flex items-center justify-center">
                            <tool.icon className="h-4 w-4 text-[#A07A41]" />
                         </div>
                         <h4 className="text-xs font-bold text-gray-300">{tool.name}</h4>
                      </div>
                    ))}
                 </div>

              </div>

              {/* Methodology Flow Right Side */}
              <div className={`${visibleSections.methodology ? 'animate-fade-in-right' : 'opacity-0'}`}>
                <div className="mb-12">
                  <span className="text-[#A07A41] uppercase tracking-[0.4em] text-xs font-bold mb-4 block">Methodology</span>
                  <h2 className="text-3xl md:text-5xl font-serif font-bold text-white mb-6">Strategic <span className="italic font-light text-[#A07A41]">Process.</span></h2>
                </div>
                
                <div className="space-y-4">
                  {[
                    "Understand industry context",
                    "Identify relevant laws & regulations",
                    "Analyze industry case law",
                    "Evaluate commercial & legal risks",
                    "Deliver structured legal report"
                  ].map((step, i) => (
                    <div key={i} className={`flex items-center gap-6 p-6 bg-[#2A454E]/30 rounded-2xl border border-white/5 ${visibleSections.methodology ? 'animate-fade-in-right' : 'opacity-0'}`} style={{ animationDelay: `${i * 150}ms` }}>
                       <div className="w-10 h-10 rounded-full border border-[#A07A41] flex items-center justify-center shrink-0">
                          <span className="text-[#A07A41] font-bold text-sm">0{i+1}</span>
                       </div>
                       <h4 className="text-lg font-bold text-white tracking-tight">{step}</h4>
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
          className="relative py-24 lg:py-32 bg-[#2A454E] overflow-hidden"
        >
          <div className="px-4 sm:px-6 lg:px-8 max-w-[90rem] mx-auto z-10 relative">
             <div className="text-center mb-24">
                <span className="text-[#A07A41] uppercase tracking-[0.4em] text-xs font-bold mb-4 block">Output Value</span>
                <h3 className="text-3xl md:text-5xl font-serif font-bold text-white mb-6 tracking-tight">Concrete <span className="italic font-light text-[#A07A41]">Deliverables.</span></h3>
             </div>
             
             <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-4">
                {[
                  { title: "Industry-specific legal report", icon: FileText },
                  { title: "Compliance analysis", icon: ClipboardCheck },
                  { title: "Case law insights", icon: Presentation },
                  { title: "Risk assessment report", icon: ShieldAlert },
                  { title: "Legal issue analysis", icon: Crosshair }
                ].map((item, i) => (
                  <div 
                    key={i} 
                    className={`p-8 bg-[#1B2D33]/40 border border-white/5 rounded-3xl text-center group hover:bg-[#16272D] hover:border-[#A07A41]/50 transition-all duration-500 ${visibleSections.deliverables ? (i%2!==0 ? 'animate-fade-in-top-right' : 'animate-fade-in-bottom-left') : 'opacity-0'}`}
                    style={{ animationDelay: `${i * 100}ms` }}
                  >
                     <div className="w-16 h-16 mx-auto bg-[#2A454E] rounded-full flex items-center justify-center mb-6 group-hover:bg-[#A07A41] transition-colors duration-500 shadow-lg">
                        <item.icon className="h-6 w-6 text-[#A07A41] group-hover:text-black transition-colors" />
                     </div>
                     <p className="text-base font-serif font-bold text-gray-200 group-hover:text-white transition-colors leading-tight">{item.title}</p>
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
                <div className="absolute top-0 right-0 p-10 opacity-5"><Target size={300} /></div>
                
                <div className={`text-center mb-16 relative z-10 ${visibleSections.whyChoose ? 'animate-fade-in-down' : 'opacity-0'}`}>
                   <span className="text-[#A07A41] uppercase tracking-[0.4em] text-xs font-bold mb-4 block">No Generic Garbage</span>
                   <h2 className="text-3xl md:text-5xl font-serif font-bold text-white">Why Choose <span className="italic font-light text-[#A07A41]">Us.</span></h2>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 relative z-10">
                   {[
                     { title: "Industry Focused", desc: "True industry-focused legal expertise, avoiding broad generalities." },
                     { title: "Highly Relevant", desc: "Actionable and immediately relevant research, not just copy-pasted statutes." },
                     { title: "Risk-Based", desc: "We prioritize identifying commercial and procedural legal risks." },
                     { title: "Actionable Outputs", desc: "Structured outputs engineered for direct implementation by legal teams." }
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
            <div className={`text-center mb-24 ${visibleSections.faq ? 'animate-fade-in-top-right' : 'opacity-0'}`}>
              <span className="text-[#A07A41] uppercase tracking-[0.3em] text-[10px] font-bold mb-6 block">Queries Resolved</span>
              <h2 className="text-3xl md:text-5xl font-serif font-bold text-white tracking-tight">Research <span className="italic font-light text-[#A07A41]">FAQ.</span></h2>
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
            <div className={`max-w-5xl mx-auto p-16 lg:p-24 bg-[#2A454E]/60 border border-white/10 rounded-[3rem] backdrop-blur-2xl relative overflow-hidden shadow-2xl ${visibleSections.cta ? 'animate-fade-in-up' : 'opacity-0'}`}>
              <div className="absolute -top-10 -left-10 opacity-[0.03]"><Globe size={300} className="text-[#A07A41]" /></div>
              
              <span className="text-[#A07A41] uppercase tracking-[0.5em] text-[10px] font-bold mb-10 block">Elevate Your Position</span>
              <h2 className="text-3xl md:text-6xl font-serif font-bold text-white mb-10 leading-tight">
                Get Legal Insights Tailored <br />
                <span className="italic font-light text-[#A07A41]">To Your Industry.</span>
              </h2>
              
              <div className="flex flex-col sm:flex-row justify-center items-center gap-8 mt-12">
                <a href="#contact" className="group relative flex items-center justify-center gap-4 px-12 py-6 bg-[#A07A41] text-black font-bold tracking-[0.1em] uppercase text-xs rounded-xl shadow-2xl transition-all duration-500 hover:scale-105 hover:bg-white">
                  <span>Submit Your Requirement</span>
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

export default IndustrySpecificResearchPage;
