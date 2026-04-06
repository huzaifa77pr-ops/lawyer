import React, { useEffect, useState, useRef } from 'react';
import { 
  ArrowRight, Scale, Gavel, Search, CheckCircle, Zap, Database, 
  Shield, FileText, ChevronDown, Award, Briefcase, Frame, Target, 
  ShieldAlert, ClipboardCheck, Crosshair, Layers, Map, FileSearch, 
  ArrowLeftRight, FileCode, SplitSquareHorizontal, Landmark, Globe, 
  Bookmark, Edit3, LibraryBig, PenTool, Lightbulb, Presentation, TextSelect
} from 'lucide-react';

const AnnotatedLegalBibliographyPage = () => {
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
      q: "What is an annotated legal bibliography?",
      a: "A structured list of legal sources, each with concise explanations (annotations) detailing their relevance, content, and utility."
    },
    {
      q: "Do you include case law and statutes?",
      a: "Yes, we comprehensively curate case law, statutory acts, and vital secondary sources to support your specific strategy."
    },
    {
      q: "How detailed are annotations?",
      a: "Concise but highly informative and practical. We strip away the fluff to focus on what matters to your case."
    },
    {
      q: "How fast is delivery?",
      a: "Depending on scale, we typically deliver within 24–72 hours, ensuring you have the materials exactly when you need them."
    }
  ];

  const coreServices = [
    {
      id: "4.1",
      title: "Case Law Bibliography with Annotations",
      desc: "List relevant case law with precise, short summaries of each case and an explanation of their direct relevance to your legal issue.",
      deliverable: "Annotated case law list",
      icon: Bookmark,
      anim: "animate-fade-in-top-left"
    },
    {
      id: "4.2",
      title: "Statutory Sources Bibliography",
      desc: "Comprehensive annotation of Acts and regulations (e.g., Companies Act 2006, Human Rights Act 1998) including section references.",
      deliverable: "Annotated statutory list",
      icon: Landmark,
      anim: "animate-fade-in-up"
    },
    {
      id: "4.3",
      title: "Secondary Sources & Legal Commentary",
      desc: "Curate authoritative legal journals, scholarly articles, commentaries, and expert opinions that support the primary legal arguments.",
      deliverable: "Annotated secondary source list",
      icon: LibraryBig,
      anim: "animate-fade-in-top-right"
    },
    {
      id: "4.4",
      title: "Issue-Based Source Compilation",
      desc: "Sources are systematically grouped by legal issue, with relevance clearly explained for each issue ensuring easy navigation.",
      deliverable: "Topic-based bibliography",
      icon: Layers,
      anim: "animate-fade-in-bottom-left"
    },
    {
      id: "4.5",
      title: "Research Support & Source Guidance",
      desc: "Expert guidance on which sources to leverage first, prioritizing key authorities to provide reliable research direction support.",
      deliverable: "Research guidance notes",
      icon: Target,
      anim: "animate-fade-in-bottom-right"
    }
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
             <img src="/bibhero.jpg" alt="Annotated Legal Bibliography" className="w-full h-full object-cover object-center transition-transform duration-[20s] group-hover:scale-110" />
             <div className="absolute inset-0 bg-gradient-to-t from-[#2A454E] via-[#2A454E]/70 to-transparent"></div>
          </div>

          <div className="relative z-10 px-4 sm:px-6 lg:px-8 max-w-[90rem] mx-auto w-full">
            <div className="max-w-4xl">
              <div className={`flex items-center gap-4 mb-6 transition-all duration-1000 ${visibleSections.hero ? 'animate-fade-in-right' : 'opacity-0'}`}>
                <div className="h-[1px] w-12 bg-[#A07A41]"></div>
                <span className="text-[#A07A41] uppercase tracking-[0.4em] text-[10px] font-bold">Curated Output</span>
              </div>
              
              <h1 className={`text-4xl md:text-5xl lg:text-7xl font-serif font-bold text-white leading-tight mb-8 tracking-tight transition-all duration-1000 ${visibleSections.hero ? 'opacity-100' : 'opacity-0'}`}>
                <span className="block animate-fade-in-top-left">Annotated Legal</span>
                <span className="block italic font-light text-[#A07A41] animate-fade-in-up animation-delay-200">Bibliography Services</span>
                <span className="block animate-fade-in-bottom-right animation-delay-300 text-3xl md:text-4xl lg:text-5xl mt-2">UK Legal Sector</span>
              </h1>
              
              <p className={`text-gray-300 text-base md:text-xl font-sans font-light leading-relaxed max-w-2xl mb-10 border-l-2 border-[#A07A41]/30 pl-8 transition-all duration-1000 ${visibleSections.hero ? 'animate-fade-in-left animation-delay-400' : 'opacity-0'}`}>
                Curated and explained legal sources with expert annotations — helping solicitors and legal professionals quickly identify relevant authorities.
              </p>

              <div className={`grid sm:grid-cols-3 gap-4 mb-12 transition-all duration-1000 ${visibleSections.hero ? 'animate-fade-in-bottom-left animation-delay-500' : 'opacity-0'}`}>
                {[
                  { icon: Layers, text: "Structured Source Lists" },
                  { icon: Edit3, text: "Expert Annotations" },
                  { icon: Zap, text: "Saves Research Time" }
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-4 p-4 bg-[#1B2D33]/60 border border-white/10 rounded-2xl backdrop-blur-sm shadow-xl">
                    <item.icon className="h-5 w-5 text-[#A07A41]" />
                    <span className="text-xs font-medium tracking-wide text-gray-200">{item.text}</span>
                  </div>
                ))}
              </div>

              <div className={`transition-all duration-1000 ${visibleSections.hero ? 'animate-fade-in-up animation-delay-600' : 'opacity-0'}`}>
                <a href="#contact" className="group relative inline-flex items-center gap-4 px-10 py-5 bg-[#A07A41] text-black font-bold uppercase tracking-widest text-xs rounded-xl transition-all duration-500 hover:bg-white hover:scale-105 shadow-2xl">
                  <span>Request Annotated Bibliography</span>
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
          <div className="px-4 sm:px-6 lg:px-8 max-w-[90rem] mx-auto z-10 relative">
            <div className={`grid lg:grid-cols-2 gap-20 items-center ${visibleSections.intro ? 'animate-fade-in-bottom-right' : 'opacity-0'}`}>
              
              <div className="relative group">
                <div className="aspect-[4/5] rounded-[3rem] overflow-hidden border border-[#A07A41]/20 relative bg-[#16272D] flex items-center justify-center">
                   <img src="/bib1.jpg" alt="Curated Legal Sources Representation" className="w-full h-full object-cover object-center transition-all duration-1000 group-hover:scale-105 grayscale group-hover:grayscale-0" />
                   <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-[#1B2D33]/40 to-[#1B2D33]"></div>
                </div>
                <div className="absolute -bottom-10 -right-10 bg-[#2A454E] p-6 lg:p-8 rounded-3xl border border-white/10 shadow-2xl animate-fade-in-top-left animation-delay-500 hidden sm:block">
                  <div className="flex items-center gap-4">
                    <TextSelect className="h-10 w-10 text-[#A07A41]" />
                    <div>
                      <p className="text-white font-bold text-sm">Relevant Context</p>
                      <p className="text-gray-400 text-xs">Annotated for clarity</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className={`${visibleSections.intro ? 'animate-fade-in-top-right' : 'opacity-0'}`}>
                <div className="flex items-center gap-4 mb-8">
                  <div className="h-[1px] w-12 bg-[#A07A41]"></div>
                  <span className="text-[#A07A41] uppercase tracking-[0.4em] text-xs font-bold">Overview</span>
                </div>
                <h2 className="text-3xl md:text-5xl font-serif font-bold text-white leading-tight mb-10">
                  Curate the Chaos. <br />
                  <span className="italic font-light text-[#A07A41]">Save Precious Time.</span>
                </h2>
                <div className="space-y-8">
                  <p className="text-gray-300 text-base md:text-lg font-sans font-light leading-relaxed">
                    H&S CO provides annotated legal bibliography services for UK solicitors, law firms, and legal researchers. We rapidly <span className="text-white font-medium italic underline decoration-[#A07A41]/50 underline-offset-4">compile relevant legal sources</span> and provide extremely clear annotations explaining their exact relevance and strategic application.
                  </p>
                  
                  <p className="text-gray-300 text-base md:text-lg font-sans font-light leading-relaxed">
                    Using globally trusted platforms like Westlaw UK, LexisNexis UK, and BAILII, we stringently ensure that all provided sources are definitively accurate, authoritative, and immediately useful for your specific argument.
                  </p>
                  
                  <div className="p-8 bg-[#2A454E]/50 backdrop-blur-xl border-l-4 border-[#A07A41] rounded-r-2xl relative overflow-hidden group">
                    <div className="relative z-10 flex items-start gap-4">
                       <Zap className="h-6 w-6 text-[#A07A41] shrink-0 mt-1" />
                       <div>
                         <p className="text-lg font-serif italic text-white leading-tight">
                           Our Strict Goal: <span className="text-[#A07A41] font-bold">Save your time and improve research quality.</span>
                         </p>
                       </div>
                    </div>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* 3. What is an Annotated Legal Bibliography */}
        <section 
          ref={sectionRefs.definition}
          data-section="definition"
          className="relative py-28 bg-[#2A454E] overflow-hidden border-y border-white/5"
        >
          <div className="absolute top-0 right-1/4 w-[1px] h-full bg-gradient-to-b from-transparent via-[#A07A41]/40 to-transparent"></div>
          
          <div className={`px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto text-center relative z-10 ${visibleSections.definition ? 'animate-fade-in-down' : 'opacity-0'}`}>
            <span className="text-[#A07A41] uppercase tracking-[0.4em] text-[10px] font-bold mb-8 block">Simplifying Complexity</span>
            <div className="relative">
              <span className="absolute -top-10 -left-10 text-[120px] font-serif italic text-[#16272D]/50 leading-none z-0">"</span>
              <h2 className="text-white/90 font-serif text-3xl md:text-5xl font-light mb-8 leading-snug italic relative z-10">
                An annotated legal bibliography is a <span className="text-white font-medium">structured list of legal sources</span>, each accompanied by a brief explanation (annotation) describing its relevance, content, and usefulness.
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
                <span className="text-[#A07A41] uppercase tracking-[0.4em] text-xs font-bold mb-4 block">How We Deliver Excellence</span>
                <h2 className="text-3xl md:text-6xl font-serif font-bold text-white tracking-tight">Structured <span className="italic font-light text-[#A07A41]">Curation.</span></h2>
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
                    <service.icon size={200} className="text-[#A07A41]" />
                  </div>
                  
                  <div className="relative z-10 flex flex-col h-full">
                    <div className="flex justify-between items-start mb-8">
                      <div className="w-14 h-14 bg-[#16272D] rounded-xl flex items-center justify-center group-hover:bg-[#A07A41] transition-colors duration-500 border border-[#A07A41]/10 group-hover:border-transparent">
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

        {/* 5. Research Methodology & 6. Tools */}
        <section 
          ref={sectionRefs.methodology}
          data-section="methodology"
          className="relative py-24 lg:py-40 bg-[#2A454E] border-y border-white/5"
        >
          <div className="px-4 sm:px-6 lg:px-8 max-w-[90rem] mx-auto">
            
            <div className="grid lg:grid-cols-2 gap-20 items-center">
              
              {/* Methodology Flow */}
              <div className={`${visibleSections.methodology ? 'animate-fade-in-left' : 'opacity-0'}`}>
                <div className="mb-16">
                  <span className="text-[#A07A41] uppercase tracking-[0.4em] text-xs font-bold mb-4 block">Proven Framework</span>
                  <h2 className="text-3xl md:text-5xl font-serif font-bold text-white mb-6">Research <span className="italic font-light text-[#A07A41]">Methodology.</span></h2>
                </div>
                
                <div className="space-y-6 relative border-l border-white/10 ml-4 py-4">
                  {[
                    "Understand legal topic",
                    "Identify relevant sources",
                    "Evaluate authority and relevance",
                    "Write concise annotations",
                    "Deliver structured bibliography"
                  ].map((step, i) => (
                    <div key={i} className={`relative pl-10 ${visibleSections.methodology ? 'animate-fade-in-left' : 'opacity-0'}`} style={{ animationDelay: `${i * 150}ms` }}>
                       <div className="absolute -left-2 top-1 w-4 h-4 bg-[#16272D] border-2 border-[#A07A41] rounded-full shadow-[0_0_15px_rgba(160,122,65,0.4)]"></div>
                       <h4 className="text-xl font-serif font-bold text-gray-200 tracking-tight">{step}</h4>
                    </div>
                  ))}
                </div>
              </div>

               {/* Right side: Image Placeholder + Tools Below */}
               <div className={`${visibleSections.methodology ? 'animate-fade-in-right' : 'opacity-0'} flex flex-col gap-12`}>
                 
                 <div className="aspect-video w-full rounded-[2rem] bg-[#16272D] border border-white/10 flex items-center justify-center relative overflow-hidden shadow-2xl group cursor-pointer">
                    <img src="/bib2.jpg" alt="Methodology Structure" className="w-full h-full object-cover object-center transition-all duration-1000 group-hover:scale-105 grayscale group-hover:grayscale-0" />
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-[#1B2D33]/40 to-[#1B2D33] opacity-40 pointer-events-none"></div>
                 </div>

                 {/* Tools */}
                 <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
                    {[
                      { name: "Westlaw UK", icon: Database },
                      { name: "LexisNexis UK", icon: Search },
                      { name: "BAILII", icon: Award },
                      { name: "UK Parliament", icon: Landmark }
                    ].map((tool, i) => (
                      <div key={i} className="flex items-center gap-3 p-4 bg-[#1B2D33]/40 border border-[#A07A41]/20 rounded-xl">
                         <tool.icon className="h-5 w-5 text-[#A07A41] shrink-0" />
                         <h4 className="text-xs font-bold text-white shrink-0">{tool.name}</h4>
                      </div>
                    ))}
                 </div>

              </div>
            </div>
          </div>
        </section>

        {/* 7. Practice Areas */}
        <section 
          ref={sectionRefs.practiceAreas}
          data-section="practiceAreas"
          className="py-20 lg:py-32 bg-[#1B2D33] border-y border-white/5"
        >
          <div className="px-4 sm:px-6 lg:px-8 max-w-[90rem] mx-auto text-center">
            <span className="text-[#A07A41] uppercase tracking-[0.4em] text-xs font-bold mb-6 block">Targeted Scope</span>
            <h3 className="text-3xl md:text-5xl font-serif font-bold text-white mb-12 tracking-tight leading-tight">Focus <span className="italic font-light text-[#A07A41]">Areas.</span></h3>
            <div className="flex flex-wrap justify-center gap-4 max-w-4xl mx-auto">
               {[
                 "Civil Litigation", 
                 "Contract Law", 
                 "Employment Law", 
                 "Corporate Law", 
                 "Immigration Law"
               ].map((area, i) => (
                 <div key={i} className={`px-10 py-5 bg-[#2A454E]/40 border border-white/10 rounded-full flex items-center gap-3 hover:bg-[#A07A41]/20 transition-all duration-300 ${visibleSections.practiceAreas ? 'animate-fade-in-up' : 'opacity-0'}`} style={{ animationDelay: `${i * 100}ms` }}>
                    <Scale className="w-5 h-5 text-[#A07A41]" />
                    <span className="text-white font-medium text-sm md:text-base tracking-wide">{area}</span>
                 </div>
               ))}
            </div>
          </div>
        </section>

        {/* 8. Deliverables */}
        <section 
          ref={sectionRefs.deliverables}
          data-section="deliverables"
          className="relative py-24 lg:py-40 bg-[#2A454E] overflow-hidden"
        >
          <div className="px-4 sm:px-6 lg:px-8 max-w-[90rem] mx-auto z-10 relative">
             <div className="text-center mb-24">
                <span className="text-[#A07A41] uppercase tracking-[0.4em] text-xs font-bold mb-4 block">Expected Value</span>
                <h3 className="text-3xl md:text-5xl font-serif font-bold text-white mb-6 tracking-tight">Tangible <span className="italic font-light text-[#A07A41]">Deliverables.</span></h3>
             </div>
             
             <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-4">
                {[
                  { title: "Annotated case law bibliography", icon: Bookmark },
                  { title: "Statutory source list", icon: FileText },
                  { title: "Secondary source annotations", icon: LibraryBig },
                  { title: "Issue-based bibliography", icon: Layers },
                  { title: "Research guidance notes", icon: Edit3 }
                ].map((item, i) => (
                  <div 
                    key={i} 
                    className={`p-8 bg-[#1B2D33]/40 border border-white/5 rounded-3xl text-center group hover:bg-[#16272D] hover:border-[#A07A41]/50 transition-all duration-500 ${visibleSections.deliverables ? (i%2!==0 ? 'animate-fade-in-top-left' : 'animate-fade-in-bottom-right') : 'opacity-0'}`}
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
             <div className="bg-[#2A454E]/40 border border-[#A07A41]/20 rounded-[3rem] p-10 lg:p-20 relative overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.3)]">
                <div className="absolute top-0 right-0 p-10 opacity-5"><Lightbulb size={300} /></div>
                
                <div className={`text-center mb-16 relative z-10 ${visibleSections.whyChoose ? 'animate-fade-in-down' : 'opacity-0'}`}>
                   <span className="text-[#A07A41] uppercase tracking-[0.4em] text-xs font-bold mb-4 block">Our Unique Value</span>
                   <h2 className="text-3xl md:text-5xl font-serif font-bold text-white">Why Choose <span className="italic font-light text-[#A07A41]">Us.</span></h2>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 relative z-10">
                   {[
                     { title: "Carefully Curated", desc: "Meticulously selected legal sources prioritizing absolute relevance." },
                     { title: "Clear Annotations", desc: "Concise yet highly dense explanations maximizing strategic impact." },
                     { title: "Relevance > Volume", desc: "We focus on what exactly matters, eliminating irrelevant source bloat." },
                     { title: "Saves Real Time", desc: "Extremely optimized output layout saves immense time for legal pros." }
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
            <div className={`text-center mb-24 ${visibleSections.faq ? 'animate-fade-in-top-left' : 'opacity-0'}`}>
              <span className="text-[#A07A41] uppercase tracking-[0.3em] text-[10px] font-bold mb-6 block">Clarification</span>
              <h2 className="text-3xl md:text-5xl font-serif font-bold text-white tracking-tight">Bibliography <span className="italic font-light text-[#A07A41]">FAQ.</span></h2>
            </div>

            <div className="space-y-4">
              {faqs.map((faq, index) => (
                <div 
                  key={index} 
                  className={`border border-[#A07A41]/10 rounded-2xl bg-[#1B2D33]/40 overflow-hidden ${visibleSections.faq ? (index%2===0 ? 'animate-fade-in-left' : 'animate-fade-in-right') : 'opacity-0'}`} 
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
            <div className={`max-w-5xl mx-auto p-16 lg:p-24 bg-[#2A454E]/60 border border-[#A07A41]/10 rounded-[3rem] backdrop-blur-2xl relative overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.5)] ${visibleSections.cta ? 'animate-fade-in-up' : 'opacity-0'}`}>
              <div className="absolute -top-10 -left-10 opacity-[0.03]"><LibraryBig size={300} className="text-[#A07A41]" /></div>
              
              <span className="text-[#A07A41] uppercase tracking-[0.5em] text-[10px] font-bold mb-10 block">Build Your Arsenal</span>
              <h2 className="text-3xl md:text-6xl font-serif font-bold text-white mb-10 leading-tight">
                Get Curated Legal Sources <br />
                <span className="italic font-light text-[#A07A41]">With Expert Annotations.</span>
              </h2>
              
              <div className="flex flex-col sm:flex-row justify-center items-center gap-8 mt-12">
                <a href="#contact" className="group relative flex items-center justify-center gap-4 px-12 py-6 bg-[#A07A41] text-black font-bold tracking-[0.1em] uppercase text-xs rounded-xl shadow-2xl transition-all duration-500 hover:scale-105 hover:bg-white">
                  <span>Submit Your Research Topic</span>
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

export default AnnotatedLegalBibliographyPage;
