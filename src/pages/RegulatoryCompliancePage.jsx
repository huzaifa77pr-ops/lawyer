import React, { useEffect, useState, useRef } from 'react';
import { 
  ArrowRight, BookOpen, Scale, Gavel, Search, CheckCircle, Scroll, Zap, Database, 
  Layout, Shield, FileText, ChevronDown, MessageSquare, Book, Activity, 
  Target, Globe, ExternalLink, Award, ShieldAlert, FileCheck, ClipboardCheck
} from 'lucide-react';

const RegulatoryCompliancePage = () => {
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
      q: "What is regulatory compliance research?",
      a: "It involves identifying and analyzing laws, rules, and standards to ensure that a business or legal case meets all necessary UK legal requirements."
    },
    {
      q: "Do you provide risk analysis?",
      a: "Yes, we specifically highlight compliance risks, potential areas of non-compliance, and the legal consequences of failing to meet regulations."
    },
    {
      q: "Can you help with industry-specific regulations?",
      a: "Absolutely. Our research is tailored to your specific sector, whether it's corporate finance, employment, immigration, or specialized industries."
    },
    {
      q: "How often do regulations change?",
      a: "UK regulations change regularly. We provide dedicated update tracking to ensure your policies and practices remain current with the latest statutory shifts."
    }
  ];

  const coreServices = [
    {
      id: "4.1",
      title: "Industry-Specific Compliance Research",
      desc: "Identify regulations relevant to specific industries, analyze legal obligations, and provide precise compliance requirements.",
      examples: ["Corporate compliance", "Employment regulations", "Immigration rules"],
      deliverable: "Industry-specific compliance report",
      icon: Layout,
      anim: "animate-fade-in-top-left"
    },
    {
      id: "4.2",
      title: "Regulatory Framework Analysis",
      desc: "Deep analysis of regulatory bodies and rules, with a breakdown of legal frameworks and their applicability to your operations.",
      deliverable: "Regulatory framework summary",
      icon: Shield,
      anim: "animate-fade-in-top-right"
    },
    {
      id: "4.3",
      title: "Compliance Risk Identification",
      desc: "Detailed identification of legal risks, highlighting non-compliance areas and potential penalties or consequences.",
      deliverable: "Risk assessment report",
      icon: ShieldAlert,
      anim: "animate-fade-in-bottom-left"
    },
    {
      id: "4.4",
      title: "Policy & Procedure Research Support",
      desc: "Foundational research for internal policies, compliance guidelines, and ensuring strict regulatory alignment.",
      deliverable: "Policy support document",
      icon: ClipboardCheck,
      anim: "animate-fade-in-bottom-right"
    },
    {
      id: "4.5",
      title: "Ongoing Regulatory Updates & Monitoring",
      desc: "Monitoring shifts in UK regulations, providing updates on new legal requirements and detailed impact analysis.",
      deliverable: "Regulatory update brief",
      icon: Activity,
      anim: "animate-fade-in-up"
    }
  ];

  return (
    <div className="min-h-screen bg-[#2A454E] flex flex-col overflow-x-hidden text-white font-sans">
      <main className="flex-grow">
        
        {/* 1. Hero Section */}
        <section 
          ref={sectionRefs.hero}
          data-section="hero"
          className="relative min-h-[90vh] flex items-center pt-32 pb-24 overflow-hidden"
        >
          <div className="absolute inset-0 z-0 opacity-40">
             <img src="/qhe.jpg" alt="Compliance Background" className="w-full h-full object-cover object-center" />
             <div className="absolute inset-0 bg-gradient-to-b from-[#2A454E] via-[#2A454E]/60 to-[#2A454E]"></div>
          </div>

          <div className="relative z-10 px-4 sm:px-6 lg:px-8 max-w-[90rem] mx-auto w-full">
            <div className="max-w-4xl">
              <div className={`flex items-center gap-4 mb-6 transition-all duration-1000 ${visibleSections.hero ? 'animate-fade-in-right' : 'opacity-0'}`}>
                <div className="h-[1px] w-12 bg-[#A07A41]"></div>
                <span className="text-[#A07A41] uppercase tracking-[0.4em] text-[10px] font-bold">UK Regulatory Defense</span>
              </div>
              
              <h1 className={`text-4xl md:text-5xl lg:text-7xl font-serif font-bold text-white leading-tight mb-8 tracking-tight transition-all duration-1000 ${visibleSections.hero ? 'opacity-100' : 'opacity-0'}`}>
                <span className="block animate-fade-in-right">UK Regulatory</span>
                <span className="block italic font-light text-[#A07A41] animate-fade-in-right animation-delay-200">Compliance Research</span>
                <span className="block animate-fade-in-right animation-delay-300 text-3xl md:text-4xl lg:text-5xl mt-2">Services for Businesses</span>
              </h1>
              
              <p className={`text-gray-300 text-base md:text-xl font-sans font-light leading-relaxed max-w-2xl mb-12 border-l-2 border-[#A07A41]/30 pl-8 transition-all duration-1000 ${visibleSections.hero ? 'animate-fade-in-right animation-delay-400' : 'opacity-0'}`}>
                Stay compliant with UK laws and regulations through precise, research-driven legal insights tailored for businesses and law firms.
              </p>

              <div className={`grid sm:grid-cols-3 gap-6 mb-12 transition-all duration-1000 ${visibleSections.hero ? 'animate-fade-in-right animation-delay-500' : 'opacity-0'}`}>
                {[
                  { icon: Layout, text: "Industry-Specific Research" },
                  { icon: Gavel, text: "UK Statutory Requirements" },
                  { icon: ShieldAlert, text: "Risk-Focused Legal Analysis" }
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-4 p-4 bg-[#1B2D33]/40 border border-white/10 rounded-2xl backdrop-blur-sm hover:border-[#A07A41]/50 transition-colors">
                    <item.icon className="h-5 w-5 text-[#A07A41]" />
                    <span className="text-xs font-medium tracking-wide text-gray-200">{item.text}</span>
                  </div>
                ))}
              </div>

              <div className={`transition-all duration-1000 ${visibleSections.hero ? 'animate-fade-in-right animation-delay-600' : 'opacity-0'}`}>
                <a href="#contact" className="group relative inline-flex items-center gap-4 px-10 py-5 bg-[#A07A41] text-black font-bold uppercase tracking-widest text-xs rounded-xl transition-all duration-500 hover:bg-white hover:scale-105 shadow-xl">
                  <span>Request Compliance Research</span>
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
          className="relative py-24 lg:py-40 bg-[#2A454E] border-t border-white/10 overflow-hidden"
        >
          <div className="px-4 sm:px-6 lg:px-8 max-w-[90rem] mx-auto">
            <div className={`grid lg:grid-cols-2 gap-20 items-center ${visibleSections.intro ? 'animate-fade-in-left' : 'opacity-0'}`}>
              <div className="relative group">
                <div className="aspect-[4/5] rounded-[3rem] overflow-hidden border border-white/10 relative bg-[#16272D]">
                   <img src="/q1.jpg" alt="Compliance Framework Visualization" className="w-full h-full object-cover object-center transition-all duration-1000 group-hover:scale-105 grayscale group-hover:grayscale-0" />
                   <div className="absolute inset-0 bg-gradient-to-t from-[#2A454E] via-transparent to-transparent"></div>
                </div>
              </div>

              <div className={`${visibleSections.intro ? 'animate-fade-in-right' : 'opacity-0'}`}>
                <div className="flex items-center gap-4 mb-8">
                  <div className="h-[1px] w-12 bg-[#A07A41]"></div>
                  <span className="text-[#A07A41] uppercase tracking-[0.4em] text-xs font-bold">Introduction</span>
                </div>
                <h2 className="text-3xl md:text-5xl font-serif font-bold text-white leading-tight mb-10">
                  Strategic Regulatory <br />
                  <span className="italic font-light text-[#A07A41]">Framework Analysis.</span>
                </h2>
                <div className="space-y-8">
                  <p className="text-gray-300 text-base md:text-lg font-sans font-light leading-relaxed">
                    H&S CO provides regulatory compliance research for UK businesses, solicitors, and legal teams. We analyze regulatory frameworks using authoritative sources including <span className="text-white font-medium italic underline decoration-[#A07A41]/50 underline-offset-8">UK Parliament, Westlaw UK, and LexisNexis UK</span>.
                  </p>
                  
                  <div className="p-8 bg-[#1B2D33]/60 backdrop-blur-xl border border-[#A07A41]/30 rounded-2xl relative overflow-hidden group">
                    <Zap className="absolute -right-10 -bottom-10 h-40 w-40 text-[#A07A41]/5 group-hover:rotate-12 transition-transform duration-1000" />
                    <div className="relative z-10">
                       <p className="text-lg md:text-2xl font-serif italic text-white leading-tight mb-4">
                        We don’t just explain laws — we identify what you <span className="text-[#A07A41] font-bold">must do</span> to stay compliant.
                       </p>
                       <div className="flex items-center gap-4 text-[#A07A41] font-bold uppercase tracking-widest text-[10px]">
                          <span>Actionable Insight</span>
                          <div className="w-1.5 h-1.5 bg-[#A07A41]/30 rounded-full"></div>
                          <span>Risk Mitigation</span>
                       </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 3. Definition Banner */}
        <section 
          ref={sectionRefs.definition}
          data-section="definition"
          className="relative py-20 bg-[#1B2D33] overflow-hidden border-y border-white/5"
        >
          <div className="absolute inset-0 opacity-5 flex items-center justify-around pointer-events-none">
             <ClipboardCheck size={250} className="text-[#A07A41]" />
             <FileCheck size={250} className="text-[#A07A41]" />
          </div>
          <div className={`px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto text-center relative z-10 ${visibleSections.definition ? 'animate-fade-in-up' : 'opacity-0'}`}>
            <h2 className="text-white/90 font-serif text-2xl md:text-4xl font-light mb-8 leading-relaxed italic">
              Regulatory compliance research involves identifying and interpreting legal rules, regulations, and industry standards to ensure that a business or legal case meets UK legal requirements.
            </h2>
          </div>
        </section>

        {/* 4. Core Services */}
        <section 
          ref={sectionRefs.coreServices}
          data-section="coreServices"
          className="relative py-24 lg:py-40 bg-[#2A454E] overflow-hidden"
        >
          <div className="px-4 sm:px-6 lg:px-8 max-w-[90rem] mx-auto text-center">
            <div className="mb-24">
              <span className="text-[#A07A41] uppercase tracking-[0.4em] text-xs font-bold mb-4 block">Our Expertise</span>
              <h2 className="text-3xl md:text-6xl font-serif font-bold text-white mb-6 tracking-tight">Compliance <span className="italic font-light text-[#A07A41]">Architects.</span></h2>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 text-left">
              {coreServices.map((service, i) => (
                <div 
                  key={i} 
                  className={`group relative p-10 bg-[#1B2D33]/40 border border-white/5 rounded-3xl hover:bg-[#1B2D33]/60 hover:border-[#A07A41]/30 transition-all duration-500 overflow-hidden ${visibleSections.coreServices ? service.anim : 'opacity-0'}`}
                  style={{ animationDelay: `${i * 150}ms` }}
                >
                  <div className="absolute top-0 right-0 p-8 opacity-[0.03] group-hover:opacity-[0.07] transition-opacity">
                    <service.icon size={100} className="text-[#A07A41]" />
                  </div>
                  
                  <div className="relative z-10">
                    <div className="w-14 h-14 bg-[#A07A41]/10 rounded-xl flex items-center justify-center mb-10 group-hover:bg-[#A07A41] transition-all duration-500 group-hover:scale-110">
                      <service.icon className="h-6 w-6 text-[#A07A41] group-hover:text-black transition-colors" />
                    </div>
                    
                    <span className="text-[#A07A41] font-bold text-[10px] uppercase tracking-widest mb-4 block font-sans">{service.id}</span>
                    <h3 className="text-xl font-serif font-bold text-white mb-6 leading-tight group-hover:text-[#A07A41] transition-colors">{service.title}</h3>
                    <p className="text-gray-400 font-sans font-light leading-relaxed mb-8 text-base">
                      {service.desc}
                    </p>

                    {service.examples && (
                      <div className="flex flex-wrap gap-2 mb-10">
                        {service.examples.map((ex, j) => (
                          <span key={j} className="px-3 py-1 bg-[#2A454E]/50 rounded-full text-[9px] uppercase tracking-widest font-bold text-gray-500 border border-white/5">
                            {ex}
                          </span>
                        ))}
                      </div>
                    )}

                    <div className="pt-8 border-t border-white/10 flex items-center justify-between">
                      <div>
                        <span className="block text-[10px] uppercase tracking-widest text-[#A07A41] mb-1 font-bold">Deliverable</span>
                        <span className="text-white text-sm font-medium">{service.deliverable}</span>
                      </div>
                      <div className="p-2.5 bg-white/5 rounded-full group-hover:bg-[#A07A41] group-hover:text-black transition-all">
                        <ArrowRight size={14} />
                      </div>
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
          className="relative py-24 lg:py-40 bg-[#1B2D33] border-y border-white/5"
        >
          <div className="px-4 sm:px-6 lg:px-8 max-w-[90rem] mx-auto">
            <div className="flex flex-col lg:flex-row gap-20 items-start">
              <div className="lg:w-1/3 sticky top-32">
                <h2 className="text-3xl md:text-5xl font-serif font-bold text-white leading-tight mb-8">
                  Authority <br />
                  <span className="italic font-light text-[#A07A41]">Verification.</span>
                </h2>
                <div className="aspect-square rounded-3xl overflow-hidden border border-white/10 mb-8 sm:block hidden group bg-[#16272D]">
                   <img src="/q2.jpg" alt="Step-by-Step Risk Assessment" className="w-full h-full object-cover object-center transition-all duration-1000 group-hover:scale-105 grayscale group-hover:grayscale-0" />
                </div>
                <div className="p-8 bg-[#2A454E]/40 border border-[#A07A41]/20 rounded-2xl relative overflow-hidden">
                   <h4 className="text-white font-bold uppercase tracking-widest text-[10px] mb-4">Precision Metric</h4>
                   <p className="text-gray-400 text-sm font-light italic leading-relaxed">Full alignment with SRA and UK Financial Conduct Authority standards for research integrity.</p>
                </div>
              </div>

              <div className="lg:w-2/3 grid sm:grid-cols-1 gap-4">
                {[
                  { title: "Understand Business Requirement", desc: "Consultation to define the specific operational or legal scope requiring compliance research." },
                  { title: "Identify Applicable Regulations", desc: "Comprehensive mapping of primary and secondary UK statutes affecting your sector." },
                  { title: "Analyze Compliance Obligations", desc: "Deep dive into regulatory rules to extract actionable 'must-do' requirements." },
                  { title: "Assess Risks and Gaps", desc: "Comparison of current state vs mandatory requirements to highlight critical legal exposure." },
                  { title: "Deliver Structured Report", desc: "Providing a citation-backed compliance brief ready for board-level review." }
                ].map((item, i) => (
                  <div 
                    key={i} 
                    className={`flex items-center gap-8 p-10 bg-[#2A454E]/30 border border-white/5 rounded-3xl hover:border-[#A07A41]/30 transition-all ${visibleSections.methodology ? 'animate-fade-in-right' : 'opacity-0'}`}
                    style={{ animationDelay: `${i * 150}ms` }}
                  >
                    <span className="hidden sm:block text-[#A07A41] font-serif italic text-4xl opacity-20">{i + 1}</span>
                    <div className="flex-grow">
                      <h4 className="text-lg font-bold text-white mb-2 uppercase tracking-tight">{item.title}</h4>
                      <p className="text-gray-400 font-sans font-light text-sm leading-relaxed">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* 6. Tools & Legal Sources */}
        <section 
          ref={sectionRefs.tools}
          data-section="tools"
          className="py-24 lg:py-40 bg-[#2A454E]"
        >
          <div className="px-4 sm:px-6 lg:px-8 max-w-[90rem] mx-auto text-center">
            <span className="text-[#A07A41] uppercase tracking-[0.4em] text-xs font-bold mb-8 block">Authoritative sources</span>
            <h3 className="text-3xl md:text-5xl font-serif font-bold text-white mb-20 tracking-tight leading-tight">Verified <span className="italic font-light text-[#A07A41]">Legal Engines.</span></h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
               {[
                 { name: "Westlaw UK", icon: Database },
                 { name: "LexisNexis UK", icon: Search },
                 { name: "BAILII", icon: BookOpen },
                 { name: "UK Parliament", icon: Gavel }
               ].map((tool, i) => (
                 <div 
                  key={i} 
                  className={`flex flex-col items-center group ${visibleSections.tools ? 'animate-fade-in-up' : 'opacity-0'}`}
                  style={{ animationDelay: `${i * 200}ms` }}
                >
                    <div className="w-20 h-20 rounded-full border border-white/10 flex items-center justify-center mb-6 group-hover:border-[#A07A41] group-hover:scale-110 transition-all duration-500">
                       <tool.icon className="h-8 w-8 text-gray-500 group-hover:text-[#A07A41] transition-colors" />
                    </div>
                    <h4 className="text-lg font-serif font-bold text-white tracking-tight">{tool.name}</h4>
                 </div>
               ))}
            </div>
          </div>
        </section>

        {/* 7. Practice Areas / Industries */}
        <section 
          ref={sectionRefs.practiceAreas}
          data-section="practiceAreas"
          className="relative py-24 lg:py-40 bg-[#1B2D33]"
        >
          <div className="px-4 sm:px-6 lg:px-8 max-w-[90rem] mx-auto text-center">
             <div className="max-w-4xl mx-auto">
                <span className="text-[#A07A41] uppercase tracking-[0.4em] text-xs font-bold mb-4 block">Scope of expertise</span>
                <h2 className="text-3xl md:text-5xl font-serif font-bold text-white mb-12 tracking-tight">Focused <span className="italic font-light text-[#A07A41]">Industry Coverage.</span></h2>
                <div className="flex flex-wrap justify-center gap-6">
                   {["Corporate & Business Law", "Employment Law", "Immigration Compliance", "Contract Law", "Civil Litigation"].map((area, i) => (
                     <div key={i} className={`px-10 py-5 bg-[#2A454E]/40 border border-white/5 rounded-2xl flex items-center gap-4 hover:border-[#A07A41]/40 transition-all ${visibleSections.practiceAreas ? 'animate-fade-in-up' : 'opacity-0'}`} style={{ animationDelay: `${i * 100}ms` }}>
                        <div className="w-2 h-2 bg-[#A07A41] rounded-full"></div>
                        <span className="text-gray-300 font-medium tracking-wide text-sm">{area}</span>
                     </div>
                   ))}
                </div>
             </div>
          </div>
        </section>

        {/* 8. Deliverables */}
        <section 
          ref={sectionRefs.deliverables}
          data-section="deliverables"
          className="py-24 bg-[#2A454E] border-t border-white/5"
        >
          <div className="px-4 sm:px-6 lg:px-8 max-w-[90rem] mx-auto text-center">
             <div className="mb-20">
                <h3 className="text-3xl md:text-5xl font-serif font-bold text-white mb-6 tracking-tight">Concrete <span className="italic font-light text-[#A07A41]">Deliverables.</span></h3>
                <p className="text-gray-500 uppercase tracking-widest text-[10px] font-bold">What you receive upon completion</p>
             </div>
             
             <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-6">
                {[
                  "Compliance research report",
                  "Risk assessment document",
                  "Regulatory framework analysis",
                  "Policy support notes",
                  "Legal update briefs"
                ].map((item, i) => (
                  <div 
                    key={i} 
                    className={`p-10 bg-[#1B2D33]/30 border border-white/10 rounded-2xl text-center group hover:bg-[#A07A41] transition-all duration-500 ${visibleSections.deliverables ? 'animate-fade-in-up' : 'opacity-0'}`}
                    style={{ animationDelay: `${i * 100}ms` }}
                  >
                     <FileText className="h-8 w-8 text-[#A07A41] group-hover:text-black mx-auto mb-6 transition-colors" />
                     <p className="text-base font-serif font-bold text-white group-hover:text-black transition-colors leading-tight">{item}</p>
                  </div>
                ))}
             </div>
          </div>
        </section>

        {/* 9. Why Choose H&S CO */}
        <section 
          ref={sectionRefs.whyChoose}
          data-section="whyChoose"
          className="relative py-24 lg:py-40 bg-[#1B2D33] overflow-hidden"
        >
          <div className="px-4 sm:px-6 lg:px-8 max-w-[90rem] mx-auto">
             <div className="text-center mb-24">
                <span className="text-[#A07A41] uppercase tracking-[0.4em] text-xs font-bold mb-4 block">Proven Positioning</span>
                <h2 className="text-3xl md:text-5xl font-serif font-bold text-white mb-6">Expertise <span className="italic font-light text-[#A07A41]">Verified.</span></h2>
             </div>

             <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                {[
                  { title: "UK-Focused expertise", desc: "Deep understanding of the UK's unique regulatory landscape." },
                  { title: "Risk-based analysis", desc: "Prioritizing critical legal exposure and compliance gaps." },
                  { title: "Accurate, up-to-date", desc: "Reflecting current statutory and parliamentary shifts." },
                  { title: "Structured outputs", desc: "Actionable briefs ready for immediate implementation." }
                ].map((item, i) => (
                  <div 
                    key={i} 
                    className={`p-10 bg-[#2A454E]/20 border-l-2 border-[#A07A41] rounded-r-3xl hover:bg-[#2A454E]/40 transition-all ${visibleSections.whyChoose ? 'animate-fade-in-left' : 'opacity-0'}`}
                    style={{ animationDelay: `${i * 150}ms` }}
                  >
                     <h4 className="text-xl font-serif font-bold text-white mb-4 tracking-tight leading-snug">{item.title}</h4>
                     <p className="text-gray-400 font-sans font-light text-sm leading-relaxed">{item.desc}</p>
                  </div>
                ))}
             </div>
          </div>
        </section>

        {/* 10. FAQ Section */}
        <section 
          ref={sectionRefs.faq}
          data-section="faq"
          className="relative py-24 lg:py-40 bg-[#2A454E] overflow-hidden border-t border-white/5"
        >
          <div className="relative z-10 px-4 sm:px-6 lg:px-8 max-w-[50rem] mx-auto">
            <div className={`text-center mb-24 ${visibleSections.faq ? 'animate-fade-in-down' : 'opacity-0'}`}>
              <div className="flex items-center justify-center gap-4 mb-6">
                <div className="h-[1px] w-12 bg-[#A07A41]"></div>
                <span className="text-[#A07A41] uppercase tracking-[0.3em] text-[10px] font-bold">Frequently Asked</span>
                <div className="h-[1px] w-12 bg-[#A07A41]"></div>
              </div>
              <h2 className="text-3xl md:text-5xl font-serif font-bold text-white mb-4 tracking-tight">Compliance <span className="italic font-light text-[#A07A41]">FAQ.</span></h2>
            </div>

            <div className="space-y-4">
              {faqs.map((faq, index) => (
                <div 
                  key={index} 
                  className={`overflow-hidden border-b border-white/10 ${visibleSections.faq ? 'animate-fade-in-up' : 'opacity-0'}`} 
                  style={{ animationDelay: `${index * 150}ms` }}
                >
                  <button 
                    onClick={() => setActiveFaq(activeFaq === index ? null : index)}
                    className="w-full py-8 flex items-center justify-between group px-1"
                  >
                    <span className={`text-left text-lg md:text-xl font-serif transition-colors ${activeFaq === index ? 'text-[#A07A41]' : 'text-gray-200'}`}>{faq.q}</span>
                    <div className={`shrink-0 p-2 rounded-full border border-white/10 group-hover:border-[#A07A41] transition-all duration-300 ${activeFaq === index ? 'bg-[#A07A41] border-[#A07A41] rotate-180' : ''}`}>
                      <ChevronDown className={`h-4 w-4 transition-colors ${activeFaq === index ? 'text-black' : 'text-[#A07A41]'}`} />
                    </div>
                  </button>
                  <div className={`transition-all duration-500 ease-in-out px-1 ${activeFaq === index ? 'max-h-96 pb-10 opacity-100' : 'max-h-0 opacity-0'}`}>
                    <p className="text-gray-400 text-sm md:text-lg font-sans font-light leading-relaxed">{faq.a}</p>
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
          <div className="absolute inset-x-0 bottom-0 top-1/2 bg-gradient-to-t from-[#16272D]/40 to-transparent"></div>
          <div className="relative z-10 px-4 sm:px-6 lg:px-8 max-w-[90rem] mx-auto text-center">
            <div className={`max-w-5xl mx-auto p-16 lg:p-24 bg-[#1B2D33]/60 border border-white/10 rounded-[3rem] backdrop-blur-2xl relative overflow-hidden ${visibleSections.cta ? 'animate-fade-in-up' : 'opacity-0'}`}>
              <div className="absolute -top-10 -left-10 opacity-5"><Shield size={200} className="text-[#A07A41]" /></div>
              
              <span className="text-[#A07A41] uppercase tracking-[0.5em] text-[10px] font-bold mb-10 block">Stay Ahead of Change</span>
              <h2 className="text-3xl md:text-6xl font-serif font-bold text-white mb-10 leading-tight">
                Secure Your <br />
                <span className="italic font-light text-[#A07A41]">Regulatory Standing.</span>
              </h2>
              <p className="text-gray-300 text-base md:text-xl font-sans font-light leading-relaxed mb-16 max-w-3xl mx-auto border-l-2 border-[#A07A41]/30 px-8">
                 Mitigate legal risk with exhaustive UK regulatory compliance research. Build a resilient framework with H&S CO.
              </p>
              
              <div className="flex flex-col sm:flex-row justify-center items-center gap-8">
                <a href="#contact" className="group relative flex items-center justify-center gap-4 px-12 py-6 bg-[#A07A41] text-black font-bold tracking-[0.1em] uppercase text-xs rounded-xl shadow-2xl transition-all duration-500 hover:scale-105 hover:bg-white">
                  <span>Contact Our Team</span>
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

export default RegulatoryCompliancePage;
