import React, { useEffect, useState, useRef } from 'react';
import { 
  ArrowRight, BookOpen, Scale, Gavel, Search, CheckCircle, Scroll, Zap, Database, 
  Layout, Shield, FileText, ChevronDown, MessageSquare, Book
} from 'lucide-react';

const LegalPrecedentAnalysisPage = () => {
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
      q: "What is legal precedent in the UK?",
      a: "A legal principle established by court decisions that must or may be followed in future cases. It ensures consistency and predictability in the judicial system."
    },
    {
      q: "What is binding vs persuasive precedent?",
      a: "Binding precedents are decisions from higher courts (like the Supreme Court) that lower courts MUST follow. Persuasive precedents (from judicial committees or lower courts) MAY influence a decision but are not strictly mandatory."
    },
    {
      q: "Do you analyze case applicability?",
      a: "Yes, we deeply apply precedents to specific legal scenarios, providing legal briefs that highlight how a prior ruling directly impacts your client's unique facts."
    },
    {
      q: "How fast is delivery?",
      a: "Typically within 24–72 hours, depending on the complexity of the case hierarchy and the number of precedents involved."
    }
  ];

  const coreServices = [
    {
      id: "4.1",
      title: "Binding vs Persuasive Precedent Analysis",
      desc: "Identify binding precedents from higher courts and distinguish persuasive authorities.",
      courts: ["Supreme Court of the UK", "Court of Appeal", "High Court"],
      deliverable: "Precedent authority report",
      icon: Scale,
      anim: "animate-fade-in-top-left"
    },
    {
      id: "4.2",
      title: "Ratio Decidendi Extraction",
      desc: "Identification of core legal reasoning and separation of ratio vs obiter dicta.",
      deliverable: "Structured case reasoning summary",
      icon: Search,
      anim: "animate-fade-in-top-right"
    },
    {
      id: "4.3",
      title: "Case Comparison & Precedent Mapping",
      desc: "Comparing multiple relevant cases and identifying similarities and mapping trends.",
      deliverable: "Comparative case analysis report",
      icon: Layout,
      anim: "animate-fade-in-bottom-left"
    },
    {
      id: "4.4",
      title: "Application of Precedents to Your Case",
      desc: "Applying precedents to client-specific facts and identifying strongest arguments.",
      deliverable: "Argument-focused legal brief",
      icon: Database,
      anim: "animate-fade-in-bottom-right"
    },
    {
      id: "4.5",
      title: "Overruled & Distinguished Case Analysis",
      desc: "Identifying overruled cases and understanding distinguishing factors for validity check.",
      deliverable: "Precedent validity report",
      icon: Shield,
      anim: "animate-fade-in-up"
    }
  ];

  return (
    <div className="min-h-screen bg-[#2A454E] flex flex-col overflow-x-hidden text-white">
      <main className="flex-grow">
        
        {/* 1. Hero Section */}
        <section 
          ref={sectionRefs.hero}
          data-section="hero"
          className="relative min-h-[85vh] flex items-center pt-32 pb-24 overflow-hidden"
        >
          <div className="absolute inset-0 z-0">
             <img 
               src="/3hero.jpg" 
               alt="Legal Precedent Analysis" 
               className="w-full h-full object-cover opacity-60"
             />
             <div className="absolute inset-0 bg-gradient-to-b from-[#2A454E] via-[#2A454E]/40 to-[#2A454E]"></div>
          </div>

          <div className="relative z-10 px-4 sm:px-6 lg:px-8 max-w-[90rem] mx-auto w-full">
            <div className="max-w-4xl">
              <div className={`flex items-center gap-4 mb-6 transition-all duration-1000 ${visibleSections.hero ? 'animate-fade-in-right' : 'opacity-0'}`}>
                <div className="h-[1px] w-12 bg-[#A07A41]"></div>
                <span className="text-[#A07A41] uppercase tracking-[0.4em] text-[10px] font-bold font-sans">Legal Research</span>
              </div>
              
              <h1 className={`text-4xl md:text-5xl lg:text-7xl font-serif font-bold text-white leading-tight mb-8 tracking-tight transition-all duration-1000 ${visibleSections.hero ? 'opacity-100' : 'opacity-0'}`}>
                <span className="block animate-fade-in-right">UK Legal Precedent</span>
                <span className="block italic font-light text-[#A07A41] animate-fade-in-right animation-delay-200">Analysis Services</span>
                <span className="block animate-fade-in-right animation-delay-300 text-2xl md:text-4xl lg:text-5xl mt-2">for Solicitors & Law Firms</span>
              </h1>
              
              <p className={`text-gray-300 text-base md:text-lg font-sans font-light leading-relaxed max-w-2xl mb-12 border-l-2 border-[#A07A41]/30 pl-8 transition-all duration-1000 ${visibleSections.hero ? 'animate-fade-in-right animation-delay-400' : 'opacity-0'}`}>
                In-depth analysis of binding and persuasive precedents to strengthen legal arguments and case strategy.
              </p>

              <div className={`grid sm:grid-cols-3 gap-6 mb-12 transition-all duration-1000 ${visibleSections.hero ? 'animate-fade-in-right animation-delay-500' : 'opacity-0'}`}>
                {[
                  { icon: Gavel, text: "Binding & Persuasive ID" },
                  { icon: Scale, text: "Case Hierarchy Analysis" },
                  { icon: Search, text: "Argument-Focused Insights" }
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-4 p-4 bg-white/5 border border-white/10 rounded-2xl backdrop-blur-sm hover:border-[#A07A41]/50 transition-colors">
                    <item.icon className="h-5 w-5 text-[#A07A41]" />
                    <span className="text-xs font-medium tracking-wide text-gray-200">{item.text}</span>
                  </div>
                ))}
              </div>

              <div className={`transition-all duration-1000 ${visibleSections.hero ? 'animate-fade-in-right animation-delay-600' : 'opacity-0'}`}>
                <a href="#contact" className="group relative inline-flex items-center gap-4 px-10 py-5 bg-[#A07A41] text-black font-bold uppercase tracking-widest text-xs rounded-xl transition-all duration-500 hover:bg-white hover:scale-105 shadow-xl">
                  <span>Request Precedent Analysis</span>
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
              <div>
                <div className="flex items-center gap-4 mb-8">
                  <div className="h-[1px] w-12 bg-[#A07A41]"></div>
                  <span className="text-[#A07A41] uppercase tracking-[0.4em] text-xs font-bold font-sans">Strategic Insight</span>
                </div>
                <h2 className="text-3xl md:text-5xl font-serif font-bold text-white leading-tight mb-10">
                  Authoritative Analysis <br />
                  <span className="italic font-light text-[#A07A41]">from Global Platforms.</span>
                </h2>
                <div className="space-y-8">
                  <p className="text-gray-300 text-base md:text-lg font-sans font-light leading-relaxed">
                    H&S CO provides professional legal precedent analysis for UK solicitors, barristers, and legal teams. We analyze judicial decisions from authoritative courts and extract practical, argument-ready insights using trusted platforms like <span className="text-white font-medium italic underline decoration-[#A07A41]">Westlaw UK, LexisNexis UK, and BAILII</span>.
                  </p>
                  
                  <div className="p-10 bg-[#16272D]/60 backdrop-blur-xl border border-[#A07A41]/30 rounded-2xl relative overflow-hidden group">
                    <Zap className="absolute -right-10 -bottom-10 h-40 w-40 text-[#A07A41]/5 group-hover:rotate-12 transition-transform duration-1000" />
                    <div className="relative z-10">
                      <h4 className="text-[#A07A41] font-bold text-[10px] uppercase tracking-[0.3em] mb-4">Our Mission</h4>
                      <p className="text-xl md:text-3xl font-serif italic text-white leading-tight">
                        "Turn case law into usable <span className="text-[#A07A41]">legal strategy</span>."
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="relative">
                <div className="aspect-[4/5] rounded-3xl overflow-hidden border border-white/10 relative group bg-[#16272D]">
                  <img 
                    src="/3.jpg" 
                    alt="UK Legal Strategy" 
                    className="w-full h-full object-cover grayscale transition-all duration-1000 group-hover:grayscale-0 group-hover:scale-105" 
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#2A454E] via-transparent to-transparent"></div>
                  <div className="absolute bottom-12 left-12 right-12 p-8 bg-[#2A454E]/80 backdrop-blur-xl border border-white/10 rounded-xl shadow-2xl">
                     <p className="text-[#A07A41] font-bold text-[10px] uppercase tracking-widest mb-2">Court Authority</p>
                     <p className="text-gray-200 text-sm font-serif">Comprehensive tracking across Supreme Court and Court of Appeal rulings.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 3. What is Legal Precedent (Banner) */}
        <section 
          ref={sectionRefs.definition}
          data-section="definition"
          className="relative py-20 bg-[#1B2D33] overflow-hidden border-y border-white/5"
        >
          <div className="absolute inset-0 opacity-5 flex items-center justify-around pointer-events-none">
             <Scale size={250} className="text-[#A07A41]" />
             <Gavel size={250} className="text-[#A07A41]" />
          </div>
          <div className={`px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto text-center relative z-10 ${visibleSections.definition ? 'animate-fade-in-up' : 'opacity-0'}`}>
            <h2 className="text-white/90 font-serif text-2xl md:text-3xl font-light mb-8 leading-relaxed italic">
              Legal precedent analysis involves examining prior court decisions to determine their authority, relevance, and application to current legal issues.
            </h2>
            <div className="inline-flex items-center gap-6 text-[#A07A41] font-bold uppercase tracking-widest text-[10px]">
               <span>Authority Evaluation</span>
               <div className="w-1.5 h-1.5 bg-[#A07A41]/30 rounded-full"></div>
               <span>Relevance Mapping</span>
               <div className="w-1.5 h-1.5 bg-[#A07A41]/30 rounded-full"></div>
               <span>Strategic Application</span>
            </div>
          </div>
        </section>

        {/* 4. Core Services */}
        <section 
          ref={sectionRefs.coreServices}
          data-section="coreServices"
          className="relative py-24 lg:py-40 bg-[#2A454E] overflow-hidden"
        >
          <div className="px-4 sm:px-6 lg:px-8 max-w-[90rem] mx-auto">
            <div className="text-center mb-24">
              <span className="text-[#A07A41] uppercase tracking-[0.4em] text-xs font-bold mb-4 block">Our Expertise</span>
              <h2 className="text-3xl md:text-5xl font-serif font-bold text-white mb-6">Expert Precedent <span className="italic font-light text-[#A07A41]">Solutions.</span></h2>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {coreServices.map((service, i) => (
                <div 
                  key={i} 
                  className={`group relative p-10 bg-[#1B2D33]/40 border border-white/5 rounded-3xl hover:bg-[#1B2D33]/60 hover:border-[#A07A41]/30 transition-all duration-500 overflow-hidden ${visibleSections.coreServices ? service.anim : 'opacity-0'}`}
                  style={{ animationDelay: `${i * 200}ms` }}
                >
                  <div className="absolute top-0 right-0 p-8 opacity-[0.03] group-hover:opacity-[0.07] transition-opacity">
                    <service.icon size={100} className="text-[#A07A41]" />
                  </div>
                  
                  <div className="relative z-10">
                    <div className="w-14 h-14 bg-[#A07A41]/10 rounded-xl flex items-center justify-center mb-8 group-hover:bg-[#A07A41] transition-all duration-500 group-hover:scale-110">
                      <service.icon className="h-6 w-6 text-[#A07A41] group-hover:text-black transition-colors" />
                    </div>
                    
                    <span className="text-[#A07A41] font-bold text-[10px] uppercase tracking-widest mb-4 block">{service.id}</span>
                    <h3 className="text-xl font-serif font-bold text-white mb-6 leading-tight group-hover:text-[#A07A41] transition-colors">{service.title}</h3>
                    <p className="text-gray-400 font-sans font-light leading-relaxed mb-8 text-base">
                      {service.desc}
                    </p>

                    {service.courts && (
                      <div className="flex flex-wrap gap-2 mb-10">
                        {service.courts.map((court, j) => (
                          <span key={j} className="px-3 py-1 bg-[#2A454E]/50 rounded-full text-[9px] uppercase tracking-widest font-bold text-gray-500 border border-white/5">
                            {court}
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
                  Our Research <br />
                  <span className="italic font-light text-[#A07A41]">Methodology.</span>
                </h2>
                <p className="text-gray-400 text-base leading-relaxed mb-12">
                  A multi-layered verification process ensuring every precedent cited is valid, hierarchical, and strategically applicable.
                </p>
                <div className="p-8 bg-[#2A454E]/40 border border-[#A07A41]/20 rounded-2xl">
                   <div className="flex items-center gap-4 mb-4">
                      <CheckCircle className="h-5 w-5 text-[#A07A41]" />
                      <h4 className="text-white font-bold uppercase tracking-widest text-[10px]">Quality Standard</h4>
                   </div>
                   <p className="text-gray-400 text-sm font-light italic leading-relaxed">"No serious UK lawyer trusts a researcher without a rigorous, citation-backed process."</p>
                </div>
              </div>

              <div className="lg:w-2/3 grid sm:grid-cols-2 gap-8">
                {[
                  { step: "01", title: "Understand Legal Issue", desc: "Consultation to grasp the core dispute and specific legal questions." },
                  { step: "02", title: "Identify Precedents", desc: "Exhaustive search across UK case databases for relevant historical rulings." },
                  { step: "03", title: "Evaluate Authority", desc: "Analyzing court hierarchy to distinguish binding vs persuasive decisions." },
                  { step: "04", title: "Extract Principles", desc: "Isolating Ratio Decidendi from Obiter Dicta for focused legal reasoning." },
                  { step: "05", title: "Apply to Scenario", desc: "Mapping judicial principles directly to your client's specific factual context." },
                  { step: "06", title: "Deliver Analysis", desc: "Providing structured, citation-ready reports for your arguments." }
                ].map((item, i) => (
                  <div 
                    key={i} 
                    className={`p-10 bg-[#2A454E]/30 border border-white/5 rounded-3xl hover:border-[#A07A41]/30 transition-all ${visibleSections.methodology ? 'animate-fade-in-up' : 'opacity-0'}`}
                    style={{ animationDelay: `${i * 100}ms` }}
                  >
                    <span className="text-[#A07A41] font-serif italic text-3xl block mb-6">{item.step}</span>
                    <h4 className="text-lg font-bold text-white mb-4 uppercase tracking-tight">{item.title}</h4>
                    <p className="text-gray-400 font-sans font-light text-sm leading-relaxed">{item.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* 6. Tools & Databases */}
        <section 
          ref={sectionRefs.tools}
          data-section="tools"
          className="py-24 bg-[#2A454E]"
        >
          <div className="px-4 sm:px-6 lg:px-8 max-w-[90rem] mx-auto text-center">
            <h3 className={`text-gray-500 uppercase tracking-[0.5em] text-[10px] font-bold mb-16 ${visibleSections.tools ? 'animate-fade-in' : 'opacity-0'}`}>Authoritative Databases Utilized</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
               {[
                 { name: "Westlaw UK", icon: Database, desc: "Global standard for case law and statutory tracking." },
                 { name: "LexisNexis UK", icon: Search, desc: "In-depth legal commentary and authoritative analysis." },
                 { name: "BAILII", icon: BookOpen, desc: "British and Irish Legal Information Institute portal." }
               ].map((tool, i) => (
                 <div 
                  key={i} 
                  className={`flex flex-col items-center group ${visibleSections.tools ? 'animate-fade-in-up' : 'opacity-0'}`}
                  style={{ animationDelay: `${i * 200}ms` }}
                >
                    <div className="w-20 h-20 rounded-full border border-white/10 flex items-center justify-center mb-8 group-hover:border-[#A07A41] group-hover:scale-110 transition-all duration-500">
                       <tool.icon className="h-8 w-8 text-gray-500 group-hover:text-[#A07A41] transition-colors" />
                    </div>
                    <h4 className="text-xl font-serif font-bold text-white mb-4 tracking-tight">{tool.name}</h4>
                    <p className="text-gray-500 text-sm max-w-xs">{tool.desc}</p>
                 </div>
               ))}
            </div>
          </div>
        </section>

        {/* 7. Practice Areas */}
        <section 
          ref={sectionRefs.practiceAreas}
          data-section="practiceAreas"
          className="relative py-24 lg:py-40 bg-[#1B2D33]"
        >
          <div className="px-4 sm:px-6 lg:px-8 max-w-[90rem] mx-auto">
             <div className="grid lg:grid-cols-2 gap-20 items-center">
                <div className={`${visibleSections.practiceAreas ? 'animate-fade-in-left' : 'opacity-0'}`}>
                   <span className="text-[#A07A41] uppercase tracking-[0.4em] text-xs font-bold mb-4 block">Scope of Service</span>
                   <h2 className="text-3xl md:text-5xl font-serif font-bold text-white mb-10 leading-tight">
                      Focused Expertise Across <br />
                      <span className="italic font-light text-[#A07A41]">Legal Domains.</span>
                   </h2>
                   <div className="grid grid-cols-2 gap-4">
                      {["Civil Litigation", "Contract Law", "Employment Law", "Corporate Law", "Immigration Law", "Property Law"].map((area, i) => (
                        <div key={i} className="flex items-center gap-4 p-5 bg-[#2A454E]/30 border border-white/5 rounded-2xl hover:bg-[#A07A41]/5 hover:border-[#A07A41]/20 transition-all cursor-default">
                           <div className="w-1.5 h-1.5 bg-[#A07A41] rounded-full"></div>
                           <span className="text-gray-300 font-medium text-sm tracking-wide">{area}</span>
                        </div>
                      ))}
                   </div>
                </div>

                <div className={`relative ${visibleSections.practiceAreas ? 'animate-fade-in-right' : 'opacity-0'}`}>
                   <div className="aspect-video bg-[#2A454E]/50 rounded-3xl overflow-hidden border border-white/10 relative group">
                      <img 
                        src="/a3.jpg" 
                        alt="Specialized Practice Research" 
                        className="w-full h-full object-cover grayscale transition-all duration-1000 group-hover:grayscale-0 group-hover:scale-110" 
                      />
                      <div className="absolute inset-x-0 bottom-0 p-10 bg-gradient-to-t from-[#1B2D33] to-transparent">
                          <p className="text-gray-200 text-lg font-serif italic">Practice-specific precedent research for UK firms.</p>
                      </div>
                   </div>
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
                <p className="text-gray-500 uppercase tracking-widest text-[10px] font-bold font-sans">Final work products delivered</p>
             </div>
             
             <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-6">
                {[
                  "Precedent analysis report",
                  "Case comparison document",
                  "Legal argument brief",
                  "Ratio decidendi summary",
                  "Precedent validity report"
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
                <span className="text-[#A07A41] uppercase tracking-[0.4em] text-xs font-bold mb-4 block">Our Advantage</span>
                <h2 className="text-3xl md:text-5xl font-serif font-bold text-white mb-6">Expertise <span className="italic font-light text-[#A07A41]">Defined.</span></h2>
             </div>

             <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                {[
                  { title: "Hierarchical Insight", desc: "Deep understanding of UK court hierarchy and precedents." },
                  { title: "Actionable Analysis", desc: "Argument-focused analysis, not just simple case summaries." },
                  { title: "Verifiable Research", desc: "Every insight is citation-backed and easily verifiable." },
                  { title: "Rapid Execution", desc: "Fast turnaround (24-72h) with highly structured outputs." }
                ].map((item, i) => (
                  <div 
                    key={i} 
                    className={`p-10 bg-[#2A454E]/20 border-l-2 border-[#A07A41] rounded-r-3xl hover:bg-[#2A454E]/40 transition-all ${visibleSections.whyChoose ? 'animate-fade-in-left' : 'opacity-0'}`}
                    style={{ animationDelay: `${i * 150}ms` }}
                  >
                     <h4 className="text-xl font-serif font-bold text-white mb-4 tracking-tight">{item.title}</h4>
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
                <span className="text-[#A07A41] uppercase tracking-[0.3em] text-[10px] font-bold font-sans">Common Questions</span>
                <div className="h-[1px] w-12 bg-[#A07A41]"></div>
              </div>
              <h2 className="text-3xl md:text-5xl font-serif font-bold text-white mb-4 tracking-tight">Precedent Research <span className="italic font-light text-[#A07A41]">FAQ.</span></h2>
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
                    className="w-full py-8 flex items-center justify-between group"
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
          <div className="absolute inset-0 opacity-10 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-[#A07A41]/20 via-transparent to-transparent"></div>
          <div className="relative z-10 px-4 sm:px-6 lg:px-8 max-w-[90rem] mx-auto text-center">
            <div className={`max-w-5xl mx-auto p-16 lg:p-24 bg-[#1B2D33]/60 border border-white/10 rounded-[3rem] backdrop-blur-2xl relative overflow-hidden ${visibleSections.cta ? 'animate-fade-in-up' : 'opacity-0'}`}>
              <div className="absolute -top-10 -left-10 opacity-5"><MessageSquare size={200} className="text-[#A07A41]" /></div>
              
              <span className="text-[#A07A41] uppercase tracking-[0.5em] text-[10px] font-bold mb-10 block underline decoration-[#A07A41]/30 underline-offset-8">Partner with Experts</span>
              <h2 className="text-3xl md:text-5xl lg:text-6xl font-serif font-bold text-white mb-10 leading-tight">
                Strengthen Your Case with <br />
                <span className="italic font-light text-[#A07A41]">Expert Precedent Analysis.</span>
              </h2>
              <p className="text-gray-300 text-base md:text-xl font-sans font-light leading-relaxed mb-16 max-w-3xl mx-auto border-l-2 border-[#A07A41]/30 px-8">
                Reduce legal uncertainty. Build arguments that stand up to the most rigorous judicial scrutiny with H&S CO.
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

export default LegalPrecedentAnalysisPage;
