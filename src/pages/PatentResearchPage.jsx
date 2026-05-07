import React, { useEffect, useState, useRef } from 'react';
import { 
  ArrowRight, Search, CheckCircle, 
  ChevronDown, AlertCircle, ShieldCheck, Send, 
  HardDrive, Target, Eye
} from 'lucide-react';

const PatentResearchPage = () => {
  const [activeFaq, setActiveFaq] = useState(null);
  
  const [visibleSections, setVisibleSections] = useState({
    hero: true,
    what: false,
    services: false,
    process: false,
    who: false,
    reliable: false,
    benefits: false,
    form: false,
    faq: false,
    cta: false
  });

  const sectionRefs = {
    hero: useRef(null),
    what: useRef(null),
    services: useRef(null),
    process: useRef(null),
    who: useRef(null),
    reliable: useRef(null),
    benefits: useRef(null),
    form: useRef(null),
    faq: useRef(null),
    cta: useRef(null)
  };

  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = "Patent Research & Prior Art Analysis UK | H&S Co.";

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

  const coreServices = [
    {
      title: "Prior Art Search",
      desc: "Comprehensive analysis of existing patents and technical publications to identify similar inventions.",
      points: ["Global patent databases", "Technical publications", "Invention mapping"],
      icon: Search,
      anim: "animate-fade-in-left"
    },
    {
      title: "Novelty Assessment",
      desc: "Critical evaluation of original features to determine if your idea is truly new and unique.",
      points: ["Originality check", "Unique feature mapping", "Technical review"],
      icon: Search,
      anim: "animate-fade-in-right"
    },
    {
      title: "Patentability Analysis",
      desc: "Determining the likelihood of approval based on legal and technical evaluation of the invention.",
      points: ["Success probability", "Technical feasibility", "IP strategy"],
      icon: Target,
      anim: "animate-fade-in-left"
    },
    {
      title: "Risk & Conflict Analysis",
      desc: "Identifying potential infringement risks and overlapping patent claims to protect your investment.",
      points: ["Conflict detection", "Infringement risk", "Legal gap analysis"],
      icon: ShieldCheck,
      anim: "animate-fade-in-right"
    }
  ];

  return (
    <div className="min-h-screen bg-[#2A454E] flex flex-col overflow-x-hidden text-white font-sans">
      <style>
        {`
          @keyframes fade-in-up {
            from { opacity: 0; transform: translateY(30px); }
            to { opacity: 1; transform: translateY(0); }
          }
          @keyframes fade-in-down {
            from { opacity: 0; transform: translateY(-30px); }
            to { opacity: 1; transform: translateY(0); }
          }
          @keyframes fade-in-left {
            from { opacity: 0; transform: translateX(-30px); }
            to { opacity: 1; transform: translateX(0); }
          }
          @keyframes fade-in-right {
            from { opacity: 0; transform: translateX(30px); }
            to { opacity: 1; transform: translateX(0); }
          }
          .animate-fade-in-up { animation: fade-in-up 1s ease-out forwards; }
          .animate-fade-in-down { animation: fade-in-down 1s ease-out forwards; }
          .animate-fade-in-left { animation: fade-in-left 1s ease-out forwards; }
          .animate-fade-in-right { animation: fade-in-right 1s ease-out forwards; }
          .animation-delay-200 { animation-delay: 0.2s; }
          .animation-delay-400 { animation-delay: 0.4s; }
          .animation-delay-600 { animation-delay: 0.6s; }
        `}
      </style>
      
      <main className="flex-grow">
        
        {/* 1. HERO SECTION */}
        <section ref={sectionRefs.hero} data-section="hero" className="relative min-h-[95vh] flex items-center pt-32 pb-24 bg-[#1B2D33]">
          <div className="absolute inset-0 z-0">
             <img src="/hero4.jpg" alt="Patent Research Hero" className="w-full h-full object-cover opacity-25" />
             <div className="absolute inset-0 bg-gradient-to-b from-[#1B2D33]/40 via-[#2A454E]/90 to-[#2A454E]"></div>
          </div>
          <div className="relative z-10 px-4 sm:px-6 lg:px-8 max-w-[90rem] mx-auto w-full">
            <div className="max-w-4xl">
              <div className="flex items-center gap-5 mb-8 animate-fade-in-up">
                <div className="h-[2px] w-16 bg-[#A07A41]"></div>
                <span className="text-[#A07A41] uppercase tracking-[0.4em] text-[10px] sm:text-xs font-black">Innovation + Technical Authority</span>
              </div>
              
              <h1 className="text-4xl sm:text-5xl md:text-6xl font-serif font-bold text-white leading-[1.15] mb-8 tracking-tight animate-fade-in-left animation-delay-200">
                Patent Research Assistance & <br />
                <span className="italic font-light text-[#A07A41]">Prior Art Analysis (UK).</span>
              </h1>
              
              <p className="text-base md:text-lg text-gray-300 font-sans font-light leading-relaxed max-w-2xl mb-12 border-l border-white/10 pl-8 animate-fade-in-up animation-delay-400">
                Comprehensive patent research to assess novelty, identify prior art, and support successful patent strategies for creators and engineering teams.
              </p>

              <div className="flex flex-col sm:flex-row gap-6 animate-fade-in-right animation-delay-600">
                <button className="group relative flex items-center justify-center gap-3 px-10 py-5 bg-[#1B2D33] border border-white/10 text-white font-bold tracking-widest uppercase text-xs md:text-sm rounded transition-all duration-300 hover:bg-[#A07A41] shadow-[0_0_20px_rgba(0,0,0,0.1)] overflow-hidden">
                  <span className="relative z-10">Request Patent Research</span>
                  <ArrowRight className="h-5 w-5 relative z-10 transform group-hover:translate-x-1 transition-transform duration-300" />
                </button>
                <div className="flex flex-col justify-center">
                   <p className="text-[#A07A41] text-[10px] font-black uppercase tracking-widest mb-1">Expert Consultation</p>
                   <p className="text-white/60 text-xs font-light italic">Consult an IP Expert for free</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 2. WHAT IS PATENT RESEARCH & WHY IT MATTERS */}
        <section ref={sectionRefs.what} data-section="what" className="py-16 md:py-24 bg-[#2A454E] overflow-hidden">
          <div className="px-4 sm:px-6 lg:px-8 max-w-[90rem] mx-auto">
             <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
                <div className={`lg:col-span-5 space-y-4 ${visibleSections.what ? 'animate-fade-in-left' : 'opacity-0'}`}>
                   <img src="/agg1.jpg" alt="Technical Research" className="rounded-3xl shadow-biggest w-full h-[400px] object-cover grayscale transition-all duration-1000 hover:grayscale-0" />
                   <div className="grid grid-cols-2 gap-4">
                      <img src="/saa2.jpg" alt="Data" className="rounded-2xl h-[200px] w-full object-cover" />
                      <div className="bg-[#1B2D33] rounded-2xl p-8 flex flex-col justify-center border border-white/5 text-center">
                         <Search className="h-10 w-10 text-[#A07A41] mx-auto mb-4" />
                         <span className="text-white font-serif font-bold text-lg leading-tight">In-depth technical analysis</span>
                      </div>
                   </div>
                </div>

                <div className={`lg:col-span-7 ${visibleSections.what ? 'animate-fade-in-right' : 'opacity-0'}`}>
                   <h2 className="text-3xl md:text-5xl font-serif font-bold text-white mb-8 tracking-tight">
                     What Is <br />
                     <span className="italic font-light text-[#A07A41]">Patent Research?</span>
                   </h2>
                   <p className="text-gray-300 font-light text-base md:text-lg mb-10 leading-relaxed italic">
                     Patent research involves analysing existing patents, technical publications, and databases to determine technical landscape and novelty.
                   </p>
                   
                   <div className="space-y-4 mb-16">
                     {[
                       { t: "Novelty Check", d: "Whether an invention is truly new." },
                       { t: "Prior Art Analysis", d: "Whether similar ideas already exist in relevant domains." },
                       { t: "Legal Protectability", d: "Whether it can be legally protected under UK law." }
                     ].map((item, i) => (
                       <div key={i} className="flex items-center gap-6 p-6 bg-[#1B2D33]/40 border border-white/5 rounded-2xl">
                          <CheckCircle className="h-5 w-5 text-[#A07A41]" />
                          <div>
                            <span className="text-white font-serif font-bold block">{item.t}</span>
                            <span className="text-gray-500 text-sm font-light">{item.d}</span>
                          </div>
                       </div>
                     ))}
                   </div>

                   <h2 className="text-2xl md:text-4xl font-serif font-bold text-white mb-8 border-t border-white/5 pt-12">
                     Why Patent Research <br />
                     <span className="italic font-light text-[#A07A41]">Is Critical.</span>
                   </h2>
                   <div className="grid sm:grid-cols-2 gap-4">
                     {[
                       "Patent application rejection",
                       "Wasted time and money",
                       "Legal conflicts",
                       "Weak intellectual property protection",
                       "Loss of competitive advantage"
                     ].map((item, i) => (
                       <div key={i} className="flex items-center gap-4 text-gray-400">
                          <AlertCircle className="h-4 w-4 text-[#A07A41] shrink-0" />
                          <span className="text-sm font-light">{item}</span>
                       </div>
                     ))}
                   </div>
                </div>
             </div>
          </div>
        </section>

        {/* 3. CORE SERVICES */}
        <section ref={sectionRefs.services} data-section="services" className="py-24 bg-[#1B2D33] border-y border-white/5">
          <div className="px-4 sm:px-6 lg:px-8 max-w-[90rem] mx-auto">
             <div className="text-center mb-20">
                <h2 className="text-3xl md:text-6xl font-serif font-bold text-white mb-6 tracking-tight">
                   Our Patent <span className="italic font-light text-[#A07A41]">Research Services.</span>
                </h2>
             </div>
             <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
               {coreServices.map((item, i) => (
                 <div key={i} className={`flex flex-col p-10 bg-[#2A454E]/30 border border-white/5 rounded-3xl transition-all duration-700 hover:bg-[#2A454E] hover:border-[#A07A41]/50 ${visibleSections.services ? item.anim : 'opacity-0'}`} style={{ animationDelay: `${i * 150}ms` }}>
                    <div className="mb-10 p-5 bg-[#1B2D33] border border-white/10 rounded-2xl w-fit">
                       <item.icon className="h-10 w-10 text-[#A07A41]" />
                    </div>
                    <h3 className="text-2xl font-serif font-bold text-white mb-4 leading-tight">{item.title}</h3>
                    <p className="text-gray-400 text-sm leading-relaxed mb-10 font-light italic">{item.desc}</p>
                    <div className="mt-auto space-y-3 pt-8 border-t border-white/5">
                      {item.points.map((p, idx) => (
                        <div key={idx} className="flex items-center gap-3 text-[10px] sm:text-xs text-gray-500 font-black uppercase tracking-[0.2em]">
                          <CheckCircle className="h-3 w-3 text-[#A07A41]" />
                          {p}
                        </div>
                      ))}
                    </div>
                 </div>
               ))}
             </div>
          </div>
        </section>

        {/* 4. OUR PROCESS */}
        <section ref={sectionRefs.process} data-section="process" className="py-24 bg-[#2A454E] overflow-hidden relative">
          <div className="px-4 sm:px-6 lg:px-8 max-w-[90rem] mx-auto grid lg:grid-cols-2 gap-20 items-center">
             <div className={`${visibleSections.process ? 'animate-fade-in-left' : 'opacity-0'}`}>
                <h2 className="text-3xl md:text-6xl font-serif font-bold text-white mb-10 tracking-tight leading-tight">
                   How We Conduct <br />
                   <span className="italic font-light text-[#A07A41]">Patent Research.</span>
                </h2>
                <img src="/t1.jpg" alt="Testing and Lab" className="w-full h-[400px] rounded-[3rem] object-cover grayscale" />
             </div>

             <div className="space-y-12 relative border-l-2 border-[#A07A41]/20 pl-12 ml-6 lg:ml-0">
                {[
                  { step: "01", title: "Invention Understanding", desc: "We provide an exhaustive analysis of your specific idea, conceptual design, or technical project." },
                  { step: "02", title: "Database Search", desc: "Rigorous search across global patent offices (UKIPO, EPO, USPTO) and vast technical repositories." },
                  { step: "03", title: "Comparative Analysis", desc: "Technical mapping to differentiate your invention from existing state-of-the-art solutions." },
                  { step: "04", title: "Report & Recommendations", desc: "Concrete findings and strategic next steps ready for board-level decision making." }
                ].map((item, i) => (
                  <div key={i} className={`relative ${visibleSections.process ? 'animate-fade-in-right' : 'opacity-0'}`} style={{ animationDelay: `${i * 200}ms` }}>
                     <div className="text-[#A07A41] font-black text-xs uppercase tracking-[0.4em] mb-3">Step {item.step}</div>
                     <h4 className="text-2xl md:text-3xl font-serif font-bold text-white mb-4 tracking-tight leading-tight">{item.title}</h4>
                     <p className="text-gray-400 font-sans font-light text-base md:text-lg italic leading-relaxed max-w-lg">{item.desc}</p>
                  </div>
                ))}
             </div>
          </div>
        </section>

        {/* 5. WHO THIS SERVICE IS FOR */}
        <section ref={sectionRefs.who} data-section="who" className="py-24 bg-[#1B2D33]">
          <div className="px-4 sm:px-6 lg:px-8 max-w-[90rem] mx-auto text-center">
            <h2 className={`text-3xl md:text-5xl font-serif font-bold text-white mb-20 tracking-tight leading-tight ${visibleSections.who ? 'animate-fade-in-down' : 'opacity-0'}`}>
              Who Needs <br />
              <span className="italic font-light text-[#A07A41]">Patent Research Assistance?</span>
            </h2>
            <div className="flex flex-wrap justify-center gap-12">
              {[
                "Inventors", "Startups", "Engineers", "Research Orgs", "Tech Companies"
              ].map((item, i) => (
                <div key={i} className={`flex flex-col items-center group ${visibleSections.who ? 'animate-fade-in-up' : 'opacity-0'}`} style={{ animationDelay: `${i * 100}ms` }}>
                   <div className="w-24 h-24 sm:w-32 sm:h-32 rounded-full bg-[#2A454E] border border-white/5 flex items-center justify-center mb-6 group-hover:border-[#A07A41] group-hover:scale-110 transition-all duration-700">
                      <Target className="h-8 w-8 sm:h-12 sm:w-12 text-[#A07A41]" />
                   </div>
                   <span className="text-white font-serif font-bold text-sm sm:text-lg tracking-wide group-hover:text-[#A07A41] transition-colors">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 6. WHY CHOOSE OUR SERVICE */}
        <section ref={sectionRefs.reliable} data-section="reliable" className="py-24 bg-[#2A454E] border-y border-white/5">
          <div className="px-4 sm:px-6 lg:px-8 max-w-[90rem] mx-auto">
             <div className="grid lg:grid-cols-2 gap-20 items-center">
                <div className={`${visibleSections.reliable ? 'animate-fade-in-left' : 'opacity-0'}`}>
                   <h2 className="text-3xl md:text-6xl font-serif font-bold text-white mb-10 tracking-tight leading-tight">
                      Why Choose Our <br />
                      <span className="italic font-light text-[#A07A41]">Patent Services.</span>
                   </h2>
                </div>
                <div className="grid md:grid-cols-2 gap-4">
                  {[
                    { t: "Deep Prior Art Search", d: "Global databases + technical literature." },
                    { t: "Technical Litertaure", d: "Deep technical and legal understanding." },
                    { t: "Novelty Mapping", d: "Clear novelty evaluation of features." },
                    { t: "Actionable Briefs", d: "Ready for immediate implementation." },
                    { t: "Asset Security", d: "Confidential handling of your ideas." }
                  ].map((item, i) => (
                    <div key={i} className={`p-8 bg-[#1B2D33] border-l-2 border-[#A07A41] rounded-r-2xl ${visibleSections.reliable ? 'animate-fade-in-right' : 'opacity-0'}`} style={{ animationDelay: `${i * 100}ms` }}>
                       <h4 className="text-lg font-serif font-bold text-white mb-2 leading-tight tracking-wide">{item.t}</h4>
                       <p className="text-gray-500 text-xs font-light italic uppercase tracking-[0.15em]">{item.d}</p>
                    </div>
                  ))}
                </div>
             </div>
          </div>
        </section>

        {/* 7. BENEFITS */}
        <section ref={sectionRefs.benefits} data-section="benefits" className="py-24 bg-[#1B2D33]">
          <div className="px-4 sm:px-6 lg:px-8 max-w-[90rem] mx-auto grid lg:grid-cols-2 gap-20 items-center">
             <div className={`${visibleSections.benefits ? 'animate-fade-in-up' : 'opacity-0'}`}>
                <img src="/t2.jpg" alt="Scientific Research" className="rounded-[4rem] shadow-biggest w-full h-[500px] object-cover grayscale" />
             </div>
             <div className={`${visibleSections.benefits ? 'animate-fade-in-right' : 'opacity-0'}`}>
                <h2 className="text-3xl md:text-5xl font-serif font-bold text-white mb-10 leading-tight">
                   The Benefits of <br />
                   <span className="italic font-light text-[#A07A41]">Strategic Patent Research.</span>
                </h2>
                <div className="space-y-6">
                  {[
                    "Avoid application rejection & fees",
                    "Save massive development & legal time",
                    "Protect your technical innovation early",
                    "Drastically reduce legal and infringement risks",
                    "Make fully informed investments & IP choices"
                  ].map((item, i) => (
                    <div key={i} className="flex items-center gap-6 group">
                       <ShieldCheck className="h-6 w-6 text-[#A07A41]" />
                       <span className="text-xl font-light text-gray-300 group-hover:text-white transition-colors">{item}</span>
                    </div>
                  ))}
                </div>
             </div>
          </div>
        </section>

        {/* 8. FORM SECTION */}
        <section ref={sectionRefs.form} data-section="form" className="py-24 bg-[#2A454E]">
          <div className="px-4 sm:px-6 lg:px-8 max-w-[45rem] mx-auto">
             <div className={`bg-[#1B2D33] p-12 sm:p-20 rounded shadow-biggest border border-white/5 relative overflow-hidden ${visibleSections.form ? 'animate-fade-in-up' : 'opacity-0'}`}>
                
                <div className="text-center mb-16 relative z-10">
                   <h2 className="text-3xl md:text-4xl font-serif font-bold text-white mb-4 tracking-tight uppercase tracking-[0.2em]">
                      Request <span className="text-[#A07A41]">Patent Assistance.</span>
                   </h2>
                   <p className="text-gray-500 text-xs font-bold uppercase tracking-[0.3em]">Start your research consultation today</p>
                </div>

                <form className="space-y-6 relative z-10">
                  <div className="grid md:grid-cols-2 gap-6">
                     <input type="text" placeholder="Full Name" className="w-full bg-[#2A454E] border border-white/10 rounded p-5 text-white outline-none focus:border-[#A07A41] transition-all font-sans text-sm" />
                     <input type="text" placeholder="Contact Details" className="w-full bg-[#2A454E] border border-white/10 rounded p-5 text-white outline-none focus:border-[#A07A41] transition-all font-sans text-sm" />
                  </div>
                  <input type="text" placeholder="Type of Invention (e.g. Mechanical, Software, Chemical)" className="w-full bg-[#2A454E] border border-white/10 rounded p-5 text-white outline-none focus:border-[#A07A41] transition-all font-sans text-sm" />
                  <textarea rows="6" placeholder="Briefly describe your idea or concept..." className="w-full bg-[#2A454E] border border-white/10 rounded p-5 text-white outline-none focus:border-[#A07A41] transition-all font-sans text-sm"></textarea>
                  
                  <button className="w-full py-6 bg-[#A07A41] text-black font-black uppercase tracking-[0.3em] text-sm rounded shadow-2xl transition-all hover:bg-white flex items-center justify-center gap-5 mt-4">
                    <span>Submit Your Request</span>
                    <Send className="h-5 w-5" />
                  </button>
                </form>
             </div>
          </div>
        </section>

        {/* 9. FAQ Section */}
        <section ref={sectionRefs.faq} data-section="faq" className="py-24 bg-[#1B2D33]">
           <div className="px-4 sm:px-6 lg:px-8 max-w-[55rem] mx-auto text-center">
              <h2 className={`text-3xl md:text-6xl font-serif font-bold text-white mb-20 leading-tight tracking-tight ${visibleSections.faq ? 'animate-fade-in-up' : 'opacity-0'}`}>
                 Patent & Prior Art <br />
                 <span className="italic font-light text-[#A07A41]">Helpful Information.</span>
              </h2>
              <div className="space-y-6 text-left">
                {[
                  { q: "What is prior art?", a: "Prior art includes any evidence that your invention is already known. This could be existing patents, technical documents, or publicly available information in any form globally." },
                  { q: "Can you tell if my idea is patentable?", a: "We provide an exhaustive technical and legal assessment comparing your idea to existing prior art, allowing us to estimate the likelihood of successful patent grant." },
                  { q: "Do you file patents?", a: "We specialize in the meticulous research required for a successful filing. Once our report is final, you can take it to specialized patent attornies or offices for registration." },
                  { q: "Is my idea confidential?", a: "Yes. Every concept, file, and description shared with H&S Co. is handled under strict professional confidentiality agreements to protect your intellectual property." },
                  { q: "How long does research take?", a: "While simple searches take just a few days, complex engineering or software projects may take longer for a truly exhaustive global prior art mapping." }
                ].map((faq, i) => (
                   <div key={i} className={`border border-white/10 rounded bg-[#2A454E]/40 overflow-hidden group hover:border-[#A07A41]/40 transition-all ${visibleSections.faq ? 'animate-fade-in-up' : 'opacity-0'}`} style={{ animationDelay: `${i * 100}ms` }}>
                    <button onClick={() => setActiveFaq(activeFaq === i ? null : i)} className="w-full p-10 flex items-center justify-between group">
                      <span className={`text-left text-lg md:text-2xl font-serif font-bold transition-all ${activeFaq === i ? 'text-[#A07A41]' : 'text-gray-200 group-hover:text-white'}`}>{faq.q}</span>
                      <ChevronDown className={`h-6 w-6 text-[#A07A41] transition-transform duration-500 ${activeFaq === i ? 'rotate-180 text-white' : ''}`} />
                    </button>
                    <div className={`transition-all duration-500 px-10 ${activeFaq === i ? 'max-h-[500px] pb-10 opacity-100' : 'max-h-0 opacity-0 overflow-hidden'}`}>
                      <p className="text-gray-400 border-t border-white/5 pt-10 text-lg font-light leading-relaxed italic">{faq.a}</p>
                    </div>
                  </div>
                ))}
              </div>
           </div>
        </section>

        {/* 10. FINAL CTA */}
        <section ref={sectionRefs.cta} data-section="cta" className="relative py-40 bg-[#1B2D33] text-center overflow-hidden border-t border-white/5">
          <div className="absolute inset-0 z-0">
             <img src="/agg3.jpg" alt="Final CTA Patent" className="w-full h-full object-cover opacity-[0.05]" />
          </div>
          <div className="relative z-10 px-4 sm:px-6 lg:px-8 max-w-[90rem] mx-auto">
            <div className={`transition-all duration-1000 ${visibleSections.cta ? 'animate-fade-in-up' : 'opacity-0'}`}>
              <h2 className="text-3xl md:text-6xl font-serif font-bold text-white mb-10 leading-[1.15] tracking-tight">
                Know If Your Idea Is <br />
                <span className="italic font-light text-[#A07A41]">Truly New & Original.</span>
              </h2>
              <p className="text-gray-400 mb-16 max-w-2xl mx-auto font-light text-base md:text-xl leading-relaxed">Don’t invest blindly—get professional patent research first and build your innovation on solid ground.</p>
              
              <button className="px-14 py-6 bg-[#A07A41] text-black font-black tracking-[0.4em] uppercase text-xs md:text-sm rounded shadow-biggest transition-all hover:bg-white hover:scale-110 flex items-center justify-center gap-6 mx-auto group">
                 <span>Request Patent Research Today</span>
                 <ArrowRight className="h-7 w-7 group-hover:translate-x-3 transition-transform duration-500" />
              </button>
            </div>
          </div>
        </section>

      </main>
    </div>
  );
};

export default PatentResearchPage;
