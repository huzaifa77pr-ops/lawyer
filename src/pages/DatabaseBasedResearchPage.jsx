import React, { useEffect, useState, useRef } from 'react';
import { 
  ArrowRight, BookOpen, Scale, Gavel, Search, CheckCircle, Scroll, Zap, Database, 
  Layout, Shield, FileText, ChevronDown, MessageSquare, Book, Activity, 
  Target, Globe, ExternalLink, Award, FileCheck
} from 'lucide-react';

const DatabaseBasedResearchPage = () => {
  const [activeFaq, setActiveFaq] = useState(null);
  const [visibleSections, setVisibleSections] = useState({
    hero: false,
    intro: false,
    whyMatter: false,
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
    whyMatter: useRef(null),
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
      q: "Do you use Westlaw and LexisNexis for research?",
      a: "Yes, we exclusively use licensed UK versions of both Westlaw and LexisNexis to ensure all results are accurate, authoritative, and up-to-date."
    },
    {
      q: "Why are these databases important?",
      a: "They provide reliable, up-to-date legal information that open-access tools often miss, including specialized commentary and citation tracking."
    },
    {
      q: "Can you verify case validity?",
      a: "Yes, we use advanced citation tracking (like Westlaw's Case Analysis and LexisNexis' Citator) to verify the legal standing and validity of any case."
    },
    {
      q: "How fast is delivery?",
      a: "Typically within 24–72 hours, depending on the scope of the research and the depth of the database analysis required."
    }
  ];

  const coreServices = [
    {
      id: "4.1",
      title: "Advanced Case Law Research",
      desc: "Deep case law search using advanced filters to identify leading & recent judgments and extract key principles.",
      deliverable: "Comprehensive case law report",
      icon: Search,
      anim: "animate-fade-in-top-left"
    },
    {
      id: "4.2",
      title: "Statutory & Regulatory Research",
      desc: "Analysis of UK Acts & regulations with section-by-section breakdown cross-referenced with case law.",
      deliverable: "Statutory analysis document",
      icon: Book,
      anim: "animate-fade-in-top-right"
    },
    {
      id: "4.3",
      title: "Citation & Precedent Tracking",
      desc: "Tracking how cases are cited, identifying influential precedents, and checking case validity status.",
      deliverable: "Citation analysis report",
      icon: Database,
      anim: "animate-fade-in-bottom-left"
    },
    {
      id: "4.4",
      title: "Legal Issue-Based Research",
      desc: "Research based on specific legal problems, identification of relevant authorities, and focused legal insights.",
      deliverable: "Issue-specific research brief",
      icon: Target,
      anim: "animate-fade-in-bottom-right"
    },
    {
      id: "4.5",
      title: "Case Summaries & Legal Insights",
      desc: "Concise summaries of cases with key legal takeaways and their practical implications for your client.",
      deliverable: "Structured case summaries",
      icon: FileText,
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
          className="relative min-h-[90vh] flex items-center pt-32 pb-24 overflow-hidden"
        >
          <div className="absolute inset-0 z-0">
             <img 
               src="/hero4.jpg" 
               alt="Legal Research Background" 
               className="w-full h-full object-cover opacity-60"
             />
             <div className="absolute inset-0 bg-gradient-to-b from-[#2A454E] via-[#2A454E]/40 to-[#2A454E]"></div>
          </div>

          <div className="relative z-10 px-4 sm:px-6 lg:px-8 max-w-[90rem] mx-auto w-full">
            <div className="max-w-4xl">
              <div className={`flex items-center gap-4 mb-6 transition-all duration-1000 ${visibleSections.hero ? 'animate-fade-in-right' : 'opacity-0'}`}>
                <div className="h-[1px] w-12 bg-[#A07A41]"></div>
                <span className="text-[#A07A41] uppercase tracking-[0.4em] text-[10px] font-bold font-sans">Premium Research</span>
              </div>
              
              <h1 className={`text-3xl md:text-5xl lg:text-7xl font-serif font-bold text-white leading-tight mb-8 tracking-tight transition-all duration-1000 ${visibleSections.hero ? 'opacity-100' : 'opacity-0'}`}>
                <span className="block animate-fade-in-right">Westlaw & LexisNexis</span>
                <span className="block italic font-light text-[#A07A41] animate-fade-in-right animation-delay-200">Legal Research</span>
                <span className="block animate-fade-in-right animation-delay-300 text-2xl md:text-3xl lg:text-4xl mt-2 text-white/80 uppercase tracking-widest">Services UK</span>
              </h1>
              
              <p className={`text-gray-300 text-base md:text-lg font-sans font-light leading-relaxed max-w-2xl mb-12 border-l-2 border-[#A07A41]/30 pl-8 transition-all duration-1000 ${visibleSections.hero ? 'animate-fade-in-right animation-delay-400' : 'opacity-0'}`}>
                Advanced legal research powered by industry-leading databases — delivering precise, citation-backed insights for UK solicitors and law firms.
              </p>

              <div className={`grid sm:grid-cols-3 gap-6 mb-12 transition-all duration-1000 ${visibleSections.hero ? 'animate-fade-in-right animation-delay-500' : 'opacity-0'}`}>
                {[
                  { icon: Database, text: "Premium Legal Databases" },
                  { icon: CheckCircle, text: "Accurate Case Law & Statutes" },
                  { icon: Gavel, text: "Reliable, Court-Ready Outputs" }
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-4 p-4 bg-[#1B2D33]/40 border border-white/10 rounded-2xl backdrop-blur-sm hover:border-[#A07A41]/50 transition-colors">
                    <item.icon className="h-5 w-5 text-[#A07A41]" />
                    <span className="text-xs font-medium tracking-wide text-gray-200">{item.text}</span>
                  </div>
                ))}
              </div>

              <div className={`transition-all duration-1000 ${visibleSections.hero ? 'animate-fade-in-right animation-delay-600' : 'opacity-0'}`}>
                <a href="#contact" className="group relative inline-flex items-center gap-4 px-10 py-5 bg-[#A07A41] text-black font-bold uppercase tracking-widest text-xs rounded-xl transition-all duration-500 hover:bg-white hover:scale-105 shadow-xl">
                  <span>Request Database-Based Research</span>
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
                  <span className="text-[#A07A41] uppercase tracking-[0.4em] text-xs font-bold font-sans">Overview</span>
                </div>
                <h2 className="text-3xl md:text-5xl font-serif font-bold text-white leading-tight mb-10">
                  Precision Research <br />
                  <span className="italic font-light text-[#A07A41]">Powered by Insight.</span>
                </h2>
                <div className="space-y-8">
                  <p className="text-gray-300 text-base md:text-lg font-sans font-light leading-relaxed font-sans">
                    H&S CO provides high-level legal research using premium platforms such as <span className="text-white font-medium italic underline decoration-[#A07A41]/50 underline-offset-8">Westlaw UK and LexisNexis UK</span>, alongside open-access resources like BAILII.
                  </p>
                  <p className="text-gray-300 text-base md:text-lg font-sans font-light leading-relaxed">
                    We go beyond basic searches — delivering filtered, relevant, and authority-backed legal insights that support real legal work.
                  </p>
                  
                  <div className="p-8 bg-[#1B2D33]/60 backdrop-blur-xl border border-[#A07A41]/30 rounded-2xl relative overflow-hidden group">
                    <Zap className="absolute -right-10 -bottom-10 h-40 w-40 text-[#A07A41]/5 group-hover:rotate-12 transition-transform duration-1000" />
                    <div className="relative z-10 flex flex-wrap gap-x-8 gap-y-4">
                       <div className="flex items-center gap-3">
                          <CheckCircle className="h-5 w-5 text-[#A07A41]" />
                          <span className="text-white font-bold uppercase tracking-widest text-[10px]">Accuracy</span>
                       </div>
                       <div className="flex items-center gap-3">
                          <CheckCircle className="h-5 w-5 text-[#A07A41]" />
                          <span className="text-white font-bold uppercase tracking-widest text-[10px]">Relevance</span>
                       </div>
                       <div className="flex items-center gap-3">
                          <CheckCircle className="h-5 w-5 text-[#A07A41]" />
                          <span className="text-white font-bold uppercase tracking-widest text-[10px]">Usability</span>
                       </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="relative group">
                <div className="aspect-[4/5] rounded-[3rem] overflow-hidden border border-white/10 relative bg-[#16272D]">
                   <img 
                     src="/h1.jpg" 
                     alt="Platform Data Visualization" 
                     className="w-full h-full object-cover grayscale transition-all duration-1000 group-hover:grayscale-0 group-hover:scale-110" 
                   />
                   <div className="absolute inset-0 bg-gradient-to-t from-[#2A454E]/80 via-transparent to-transparent group-hover:from-transparent transition-all duration-1000"></div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 3. Why Westlaw & LexisNexis Matter */}
        <section 
          ref={sectionRefs.whyMatter}
          data-section="whyMatter"
          className="relative py-24 lg:py-40 bg-[#1B2D33] overflow-hidden border-y border-white/5"
        >
          <div className="px-4 sm:px-6 lg:px-8 max-w-[90rem] mx-auto">
            <div className={`grid lg:grid-cols-2 gap-20 items-center ${visibleSections.whyMatter ? 'animate-fade-in-up' : 'opacity-0'}`}>
              <div className="order-2 lg:order-1">
                 <div className="grid grid-cols-2 gap-6">
                    {[
                      { icon: Gavel, title: "Authoritative", text: "Verified UK case law & legislation." },
                      { icon: Database, title: "Advanced", text: "Advanced filtering and citation tracking." },
                      { icon: Activity, title: "Verified", text: "Up-to-date legal content." }
                    ].map((item, i) => (
                      <div key={i} className={`p-8 bg-[#2A454E]/40 border border-white/10 rounded-2xl ${i === 0 ? 'col-span-2' : ''}`}>
                         <item.icon className="h-8 w-8 text-[#A07A41] mb-6" />
                         <h4 className="text-white font-serif font-bold text-lg mb-2">{item.title}</h4>
                         <p className="text-gray-400 text-sm font-sans font-light leading-relaxed">{item.text}</p>
                      </div>
                    ))}
                 </div>
              </div>

              <div className="order-1 lg:order-2">
                <span className="text-[#A07A41] uppercase tracking-[0.4em] text-xs font-bold mb-4 block">Proven Value</span>
                <h2 className="text-3xl md:text-5xl font-serif font-bold text-white mb-8 tracking-tight leading-tight">
                  Why Premium <br />
                  <span className="italic font-light text-[#A07A41]">Databases Matter.</span>
                </h2>
                <p className="text-gray-300 text-base md:text-lg font-sans font-light leading-relaxed mb-10">
                   Open-access tools often miss critical nuances. Premium legal databases provide the authoritative infrastructure required for high-stakes litigation.
                </p>
                <div className="space-y-4">
                   {["Reliable Outputs", "Court-Acceptable Citations", "Strategically Useful Insights"].map((point, i) => (
                     <div key={i} className="flex items-center gap-4">
                        <div className="w-1.5 h-1.5 bg-[#A07A41] rounded-full"></div>
                        <span className="text-white font-medium font-serif text-xl italic">{point}</span>
                     </div>
                   ))}
                </div>
              </div>
            </div>
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
              <span className="text-[#A07A41] uppercase tracking-[0.4em] text-xs font-bold mb-4 block">Core Services</span>
              <h2 className="text-4xl md:text-6xl font-serif font-bold text-white mb-6 tracking-tight">Database-Driven <span className="italic font-light text-[#A07A41]">Solutions.</span></h2>
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
                    
                    <span className="text-[#A07A41] font-bold text-[10px] uppercase tracking-widest mb-4 block">{service.id}</span>
                    <h3 className="text-xl font-serif font-bold text-white mb-6 leading-tight group-hover:text-[#A07A41] transition-colors">{service.title}</h3>
                    <p className="text-gray-400 font-sans font-light leading-relaxed mb-8 text-base">
                      {service.desc}
                    </p>

                    <div className="pt-8 border-t border-white/10 flex items-center justify-between">
                      <div>
                        <span className="block text-[10px] uppercase tracking-widest text-[#A07A41] mb-1 font-bold">Deliverable</span>
                        <span className="text-white text-sm font-medium">{service.deliverable}</span>
                      </div>
                      <div className="p-2.5 bg-white/5 rounded-full group-hover:bg-[#A07A41] group-hover:text-black transition-all">
                        <ExternalLink size={14} />
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
                  <span className="italic font-light text-[#A07A41]">Builder.</span>
                </h2>
                <div className="aspect-square rounded-3xl overflow-hidden border border-white/10 mb-8 sm:block hidden group">
                   <img src="/h2.jpg" alt="Methodology Visualization" className="w-full h-full object-cover grayscale transition-all duration-1000 group-hover:grayscale-0 group-hover:scale-105" />
                </div>
                <div className="p-8 bg-[#2A454E]/40 border border-[#A07A41]/20 rounded-2xl relative overflow-hidden">
                   <div className="absolute top-0 right-0 p-4 opacity-10">
                      <Shield size={60} className="text-[#A07A41]" />
                   </div>
                   <h4 className="text-white font-bold uppercase tracking-widest text-[10px] mb-4">Verification Layer</h4>
                   <p className="text-gray-400 text-sm font-light italic leading-relaxed">Multi-dimensional cross-referencing between case law and current statutes.</p>
                </div>
              </div>

              <div className="lg:w-2/3 grid sm:grid-cols-1 gap-4">
                {[
                  { title: "Understand Legal Query", desc: "Collaborating with your team to define precise legal research objectives." },
                  { title: "Use Advanced Database Filters", desc: "Navigating Westlaw & LexisNexis with expert Boolean and structural filtering." },
                  { title: "Identify Authoritative Sources", desc: "Sourcing primary legislation and binding court decisions from the highest UK judicial committees." },
                  { title: "Verify Citations & Relevance", desc: "Manual and automated validation of case standing (neutral/positive/overruled)." },
                  { title: "Deliver Structured Report", desc: "Providing citation-ready documents including full ratios and analysis." }
                ].map((item, i) => (
                  <div 
                    key={i} 
                    className={`flex items-center gap-8 p-10 bg-[#2A454E]/30 border border-white/5 rounded-3xl hover:border-[#A07A41]/30 transition-all ${visibleSections.methodology ? 'animate-fade-in-right' : 'opacity-0'}`}
                    style={{ animationDelay: `${i * 150}ms` }}
                  >
                    <span className="hidden sm:block text-[#A07A41] font-serif italic text-4xl opacity-30">{i + 1}</span>
                    <div className="flex-grow">
                      <h4 className="text-lg font-bold text-white mb-2 uppercase tracking-tight">{item.title}</h4>
                      <p className="text-gray-400 font-sans font-light text-sm leading-relaxed">{item.desc}</p>
                    </div>
                    <CheckCircle className="h-5 w-5 text-[#A07A41]/40 shrink-0" />
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
          className="py-24 lg:py-40 bg-[#2A454E]"
        >
          <div className="px-4 sm:px-6 lg:px-8 max-w-[90rem] mx-auto text-center">
            <span className="text-[#A07A41] uppercase tracking-[0.4em] text-xs font-bold mb-8 block">Highlight Strength</span>
            <h3 className="text-3xl md:text-5xl font-serif font-bold text-white mb-20 tracking-tight">Authoritative <span className="italic font-light text-[#A07A41]">Infrastructure.</span></h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
               {[
                 { name: "Westlaw UK", icon: Database, desc: "Primary resource for refined case law research." },
                 { name: "LexisNexis UK", icon: Search, desc: "Detailed statutory and practitioners' commentary." },
                 { name: "BAILII", icon: BookOpen, desc: "British and Irish Legal Information Institute access." }
               ].map((tool, i) => (
                 <div 
                  key={i} 
                  className={`flex flex-col items-center group ${visibleSections.tools ? 'animate-fade-in-up' : 'opacity-0'}`}
                  style={{ animationDelay: `${i * 200}ms` }}
                >
                    <div className="w-24 h-24 rounded-full border border-white/10 flex items-center justify-center mb-8 group-hover:border-[#A07A41] group-hover:scale-110 transition-all duration-500">
                       <tool.icon className="h-10 w-10 text-gray-500 group-hover:text-[#A07A41] transition-colors" />
                    </div>
                    <h4 className="text-2xl font-serif font-bold text-white mb-4 tracking-tight">{tool.name}</h4>
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
          <div className="px-4 sm:px-6 lg:px-8 max-w-[90rem] mx-auto text-center">
             <div className="grid lg:grid-cols-2 gap-16 items-center">
                <div className={`text-left ${visibleSections.practiceAreas ? 'animate-fade-in-left' : 'opacity-0'}`}>
                   <span className="text-[#A07A41] uppercase tracking-[0.4em] text-xs font-bold mb-4 block">Practice Domains</span>
                   <h2 className="text-3xl md:text-5xl font-serif font-bold text-white mb-10 leading-tight">
                      Focused <br />
                      <span className="italic font-light text-[#A07A41]">Case Coverage.</span>
                   </h2>
                   <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      {["Corporate Law", "Civil Litigation", "Employment Law", "Contract Law", "Immigration Law"].map((area, i) => (
                        <div key={i} className={`px-6 py-4 bg-[#2A454E]/40 border border-white/5 rounded-xl flex items-center gap-4 hover:border-[#A07A41]/40 transition-all`}>
                           <div className="w-1.5 h-1.5 bg-[#A07A41] rounded-full"></div>
                           <span className="text-gray-300 font-medium tracking-wide text-sm">{area}</span>
                        </div>
                      ))}
                   </div>
                </div>
                <div className={`aspect-video rounded-3xl overflow-hidden border border-white/10 shadow-2xl transition-all duration-1000 group ${visibleSections.practiceAreas ? 'animate-fade-in-right' : 'opacity-0'}`}>
                   <img src="/h3.jpg" alt="Practice Area Context" className="w-full h-full object-cover grayscale transition-all duration-1000 group-hover:grayscale-0 group-hover:scale-110" />
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
                <h3 className="text-3xl md:text-5xl font-serif font-bold text-white mb-6 tracking-tight">Work <span className="italic font-light text-[#A07A41]">Products.</span></h3>
             </div>
             
             <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-6">
                {[
                  "Case law research report",
                  "Statutory analysis",
                  "Citation tracking report",
                  "Legal issue brief",
                  "Case summaries"
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
                <span className="text-[#A07A41] uppercase tracking-[0.4em] text-xs font-bold mb-4 block">Proven Experience</span>
                <h2 className="text-3xl md:text-5xl font-serif font-bold text-white mb-6">Expertise <span className="italic font-light text-[#A07A41]">Verified.</span></h2>
             </div>

             <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                {[
                  { title: "Premium Access", desc: "Exclusive use of licensed Westlaw and LexisNexis portals." },
                  { title: "Precise Results", desc: "Advanced filtering techniques used for pin-point accuracy." },
                  { title: "Verifiable Research", desc: "Full bibliographic and citation backing for all insights." },
                  { title: "Rapid Execution", desc: "Fast turnaround (24-72h) with structured work products." }
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
              <h2 className="text-3xl md:text-5xl font-serif font-bold text-white mb-4 tracking-tight">Database Research <span className="italic font-light text-[#A07A41]">FAQ.</span></h2>
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
          <div className="absolute inset-0 z-0">
             <img src="/h4.jpg" alt="Final CTA Visual" className="w-full h-full object-cover opacity-20" />
             <div className="absolute inset-0 bg-gradient-to-t from-[#2A454E] via-[#2A454E]/80 to-[#2A454E]"></div>
          </div>
          <div className="relative z-10 px-4 sm:px-6 lg:px-8 max-w-[90rem] mx-auto text-center">
            <div className={`max-w-5xl mx-auto p-16 lg:p-24 bg-[#1B2D33]/60 border border-white/10 rounded-[3rem] backdrop-blur-2xl relative overflow-hidden ${visibleSections.cta ? 'animate-fade-in-up' : 'opacity-0'}`}>
              <div className="absolute -top-10 -left-10 opacity-5"><MessageSquare size={200} className="text-[#A07A41]" /></div>
              
              <span className="text-[#A07A41] uppercase tracking-[0.5em] text-[10px] font-bold mb-10 block">Build Your Argument</span>
              <h2 className="text-3xl md:text-6xl font-serif font-bold text-white mb-10 leading-tight">
                Database-Backed <br />
                <span className="italic font-light text-[#A07A41]">Legal Prowess.</span>
              </h2>
              <p className="text-gray-300 text-base md:text-xl font-sans font-light leading-relaxed mb-16 max-w-3xl mx-auto border-l-2 border-[#A07A41]/30 px-8">
                Surfacing accurate, authoritative legal intelligence for UK solicitors and barristers. 
              </p>
              
              <div className="flex flex-col sm:flex-row justify-center items-center gap-8">
                <a href="#contact" className="group relative flex items-center justify-center gap-4 px-12 py-6 bg-[#A07A41] text-black font-bold tracking-[0.1em] uppercase text-xs rounded-xl shadow-2xl transition-all duration-500 hover:scale-105 hover:bg-white">
                  <span>Contact Our Analysts</span>
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

export default DatabaseBasedResearchPage;
