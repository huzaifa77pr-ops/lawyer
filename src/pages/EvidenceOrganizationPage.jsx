import React, { useEffect, useState, useRef } from 'react';
import { 
  ArrowRight, FileText, Database, ShieldCheck, AlertCircle, 
  ChevronDown, Scale, Target, ListChecks, CheckCircle2, 
  Layers, Lock, Share2, Search, Filter, 
  Grid, HardDrive, Compass, Layout
} from 'lucide-react';

const EvidenceOrganizationPage = () => {
  const [section1Visible, setSection1Visible] = useState(false);
  const [section2Visible, setSection2Visible] = useState(false);
  const [section3Visible, setSection3Visible] = useState(false);
  const [section4Visible, setSection4Visible] = useState(false);
  const [section5Visible, setSection5Visible] = useState(false);
  const [section6Visible, setSection6Visible] = useState(false);
  const [activeFaq, setActiveFaq] = useState(null);

  const section1Ref = useRef(null);
  const section2Ref = useRef(null);
  const section3Ref = useRef(null);
  const section4Ref = useRef(null);
  const section5Ref = useRef(null);
  const section6Ref = useRef(null);

  useEffect(() => {
    window.scrollTo(0, 0);

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            if (entry.target === section1Ref.current) setSection1Visible(true);
            if (entry.target === section2Ref.current) setSection2Visible(true);
            if (entry.target === section3Ref.current) setSection3Visible(true);
            if (entry.target === section4Ref.current) setSection4Visible(true);
            if (entry.target === section5Ref.current) setSection5Visible(true);
            if (entry.target === section6Ref.current) setSection6Visible(true);
          }
        });
      },
      { threshold: 0.1 }
    );

    [section1Ref, section2Ref, section3Ref, section4Ref, section5Ref, section6Ref].forEach(ref => {
      if (ref.current) observer.observe(ref.current);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <div className="min-h-screen bg-[#1B2D33] flex flex-col overflow-hidden text-white font-sans selection:bg-[#A07A41] selection:text-black">
      <main className="flex-grow">
        
        {/* ——— HERO SECTION ——— */}
        <section 
          ref={section1Ref}
          className="relative min-h-[90vh] flex items-center pt-32 lg:pt-40 pb-24 overflow-hidden"
        >
          {/* SEO Hidden Content */}
          <div className="hidden">
            <h1>Evidence Management & Case File Organisation (UK Legal Support)</h1>
            <h2>evidence organization UK, case file management UK, legal evidence support</h2>
            <p>Structured, indexed, and professionally organised legal evidence for stronger case preparation in the UK.</p>
          </div>

          {/* Background Elements */}
          <div className="absolute inset-0 z-0">
            <div className={`absolute inset-0 bg-[#1B2D33] transition-opacity duration-1000 ${section1Visible ? 'opacity-30' : 'opacity-0'}`}>
              <div className="absolute inset-0 bg-cover bg-center animate-[ken-burns_20s_linear_infinite]" style={{ backgroundImage: 'url("https://images.unsplash.com/photo-1544027993-37dbfe43562a?auto=format&fit=crop&q=80")' }}></div>
            </div>
            <div className="absolute inset-0 bg-gradient-to-b from-[#1B2D33] via-transparent to-[#1B2D33] z-10"></div>
          </div>

          <div className="absolute left-[5%] top-0 bottom-0 w-px bg-[#A07A41]/20 hidden lg:block z-20"></div>

          <div className="relative z-20 px-4 sm:px-6 lg:px-8 max-w-[85rem] mx-auto w-full">
            <div className="grid lg:grid-cols-12 gap-16 items-center">
              <div className={`lg:col-span-8 ${section1Visible ? 'animate-fade-in-left' : 'opacity-0'}`}>
                <div className="inline-flex items-center gap-3 mb-8 px-4 py-1.5 bg-white/5 border border-white/10 rounded-full backdrop-blur-3xl shadow-xl">
                  <Database size={10} className="text-[#A07A41]" />
                  <span className="text-[#A07A41] uppercase tracking-[0.4em] text-[8px] font-black italic">Precision Indexing Schema</span>
                </div>
                
                <h1 className="text-3xl md:text-5xl lg:text-7xl font-serif font-bold text-white leading-[1.05] mb-8 tracking-tighter">
                  Evidence <br />
                  <span className="italic font-light text-[#A07A41]">Management.</span>
                </h1>
                
                <div className="flex gap-8 items-start mb-10 border-l border-[#A07A41]/30 pl-8">
                  <div className="max-w-xl">
                    <p className="text-gray-400 text-xs md:text-sm font-light leading-relaxed mb-6 italic opacity-80 decoration-[#A07A41]/20 underline underline-offset-8">
                      Structured, indexed, and professionally organised legal evidence for stronger case preparation.
                    </p>
                    <p className="text-gray-500 text-[10px] md:text-xs font-light leading-relaxed">
                      We organise legal evidence into clear, structured, and indexed case files so solicitors, barristers, and clients can quickly access what matters most.
                    </p>
                  </div>
                </div>

                <div className="flex flex-wrap gap-6 items-center">
                  <a href="#cta" className="px-10 py-5 bg-[#1B2D33] border border-white/10 text-white font-bold tracking-[0.3em] uppercase text-[10px] rounded hover:bg-[#A07A41] transition-all duration-300 shadow-2xl hover:scale-105 active:scale-95 shadow-inner">
                    Organise My Case Files
                  </a>
                  <div className="flex items-center gap-2 text-white/30 text-[8px] font-black uppercase tracking-widest italic border-b border-white/10 pb-0.5">
                    <ShieldCheck size={12} className="text-[#A07A41]" />
                    Centralized Case Intelligence
                  </div>
                </div>
              </div>

              <div className={`lg:col-span-4 hidden lg:block relative ${section1Visible ? 'animate-fade-in-bottom-right animation-delay-300' : 'opacity-0'}`}>
                 <div className="relative p-2 bg-white/5 border border-white/10 rounded-[4rem] shadow-shadow-big overflow-hidden group">
                    <img src="https://images.unsplash.com/photo-1544027993-37dbfe43562a?auto=format&fit=crop&q=80" alt="Evidence Files" className="w-full h-[500px] object-cover rounded-[3.5rem] grayscale group-hover:grayscale-0 transition-all duration-[2s]" />
                    <div className="absolute inset-0 bg-[#1B2D33]/40 group-hover:opacity-0 transition-opacity"></div>
                 </div>
              </div>
            </div>
          </div>
        </section>

        {/* ——— WHAT & WHY (SPLIT GRID) ——— */}
        <section ref={section2Ref} className="relative py-24 bg-white/[0.02] border-y border-white/5 overflow-hidden">
           <div className="px-4 sm:px-6 lg:px-8 max-w-[85rem] mx-auto grid lg:grid-cols-2 gap-24 items-center">
              <div className={`${section2Visible ? 'animate-fade-in-left' : 'opacity-0'}`}>
                 <h2 className="text-[#A07A41] text-[8px] md:text-[9px] uppercase tracking-[0.5em] font-black italic mb-8 block">Fundamental Structure</h2>
                 <h3 className="text-2xl md:text-5xl font-serif font-bold text-white tracking-widest italic uppercase mb-10 leading-none">The Core Of <br /><span className="italic font-light text-[#A07A41]">Case Clarity.</span></h3>
                 <p className="text-gray-300 text-sm md:text-base font-serif italic italic font-light italic leading-loose opacity-80 border-l border-[#A07A41]/30 pl-8 mb-12">
                    Evidence organisation is the process of structuring all case-related materials into a logical, searchable, and easy-to-navigate system. Without structure, evidence is useless in real legal strategy.
                 </p>
                 <div className="grid grid-cols-2 gap-4">
                    {[ "Documents", "Emails", "Statements", "Reports", "Digital Evidence", "Court submissions" ].map((item, i) => (
                       <div key={i} className="flex items-center gap-3 text-gray-500 text-[9px] font-black uppercase tracking-widest italic border border-white/5 p-4 rounded-xl hover:bg-[#A07A41] hover:text-black transition-all">
                          <CheckCircle2 size={12} className="text-[#A07A41] group-hover:text-black" />
                          {item}
                       </div>
                    ))}
                 </div>
              </div>

              <div className={`${section2Visible ? 'animate-fade-in-right animation-delay-300' : 'opacity-0'}`}>
                 <div className="p-10 lg:p-14 bg-black/40 border border-[#A07A41]/20 rounded-[4rem] group hover:border-[#A07A41] transition-all relative overflow-hidden">
                    <div className="absolute top-0 right-0 p-8 opacity-[0.03] scale-[4] group-hover:text-red-500 transition-all"><AlertCircle size={60} /></div>
                    <h4 className="text-white text-lg font-serif font-bold mb-10 italic uppercase tracking-tighter border-b border-white/5 pb-4">Critical Risk Indicators</h4>
                    <div className="space-y-6 mb-12">
                       {[ "Missed key facts", "Weak legal arguments", "Wasted professional time", "Increased case liability" ].map((risk, i) => (
                          <div key={i} className="flex items-center justify-between text-gray-400 group-hover:text-red-200 transition-colors">
                             <span className="text-[10px] md:text-sm italic font-light">{risk}</span>
                             <AlertCircle size={14} className="text-red-500/30 group-hover:text-red-500 transition-all" />
                          </div>
                       ))}
                    </div>
                    <div className="p-6 bg-[#A07A41]/5 rounded-3xl border border-[#A07A41]/10">
                       <p className="text-[#A07A41] font-serif italic text-base leading-relaxed text-center italic">
                          “If your evidence is messy, your case looks weak—even if you are right.”
                       </p>
                    </div>
                 </div>
              </div>
           </div>
        </section>

        {/* ——— TYPES WE ORGANISE (ISOMETRIC MAPPING) ——— */}
        <section ref={section3Ref} className="relative py-24 lg:py-40 bg-[#1B2D33] overflow-hidden">
           <div className="px-4 sm:px-6 lg:px-8 max-w-[85rem] mx-auto text-center mb-24 animat-fade-in-up">
              <h2 className="text-2xl md:text-5xl font-serif font-bold text-white tracking-widest italic uppercase mb-12 leading-none">Evidence <br /><span className="italic font-light text-[#A07A41]">Ontology.</span></h2>
           </div>

           <div className="px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
              {[
                { t: "Witness Statements", i: FileText },
                { t: "Contracts & Agreements", i: Lock },
                { t: "Emails & Correspondence", i: Share2 },
                { t: "Financial Records", i: Scale },
                { t: "Photographic Evidence", i: Grid },
                { t: "Audio / Video Material", i: HardDrive },
                { t: "Court Documents", i: ShieldCheck }
              ].map((item, i) => (
                 <div key={i} className={`p-10 bg-white/[0.02] border border-white/5 rounded-[3rem] text-center hover:bg-black transition-all duration-700 shadow-big group ${section3Visible ? 'animate-fade-in-up' : 'opacity-0'}`} style={{ animationDelay: `${i * 100}ms` }}>
                    <item.i size={20} className="text-[#A07A41] mx-auto mb-6 group-hover:rotate-12 transition-transform" />
                    <span className="text-gray-400 text-[9px] md:text-[10px] font-sans font-black italic uppercase tracking-[0.2em] opacity-70 group-hover:text-[#A07A41] transition-all">{item.t}</span>
                 </div>
              ))}
           </div>
        </section>

        {/* ——— OUR SYSTEM (CORE HUB VIEW) ——— */}
        <section ref={section4Ref} className="relative py-24 lg:py-48 bg-[#1B2D33] overflow-hidden border-y border-white/5 bg-white/[0.01]">
           <div className="px-4 sm:px-6 lg:px-8 max-w-[85rem] mx-auto">
              <div className="grid lg:grid-cols-2 gap-20 items-center">
                 <div className={`relative ${section4Visible ? 'animate-fade-in-left' : 'opacity-0'}`}>
                    <div className="p-12 lg:p-20 bg-white/[0.02] border border-white/5 rounded-[5rem] relative overflow-hidden group shadow-shadow-big">
                       <h3 className="text-white text-lg font-serif font-bold mb-10 italic uppercase border-b border-white/10 pb-4">The Logic Hub</h3>
                       <div className="space-y-8 relative">
                          <div className="absolute left-[15px] top-6 bottom-6 w-px bg-[#A07A41]/20 group-hover:bg-[#A07A41] transition-colors"></div>
                          {[
                            { t: "Chronological Order", d: "Time-based linear file construction." },
                            { t: "Issue-Based Grouping", d: "Categorization by legal point or claim." },
                            { t: "Dynamic Tagging", d: "Multi-layered metadata for fast search." },
                            { t: "Indexed Architecture", d: "Folders within folders for deep scale." },
                            { t: "Cross-Referencing", d: "Linking documents to statements/evidence." }
                          ].map((item, i) => (
                             <div key={i} className="flex items-start gap-10 group/item transition-transform hover:translate-x-3 duration-500">
                                <div className="h-8 w-8 bg-black shrink-0 border border-white/5 rounded-full flex items-center justify-center text-[#A07A41] font-serif font-bold text-xs group-hover/item:border-[#A07A41] transition-colors">{i+1}</div>
                                <div>
                                   <h4 className="text-[#A07A41] font-serif font-bold text-[11px] uppercase group-hover/item:text-white transition-colors tracking-tight italic mb-1">{item.t}</h4>
                                   <p className="text-gray-600 text-[9px] uppercase font-black tracking-widest group-hover/item:text-gray-400 transition-colors italic leading-none">{item.d}</p>
                                </div>
                             </div>
                          ))}
                       </div>
                    </div>
                 </div>

                 <div className={`${section4Visible ? 'animate-fade-in-right' : 'opacity-0'}`}>
                    <span className="text-[#A07A41] uppercase tracking-[0.6em] text-[8px] font-black mb-8 block font-serif">Structural Operationality</span>
                    <h2 className="text-3xl md:text-6xl font-serif font-bold text-white tracking-tighter italic uppercase mb-12 leading-none">
                       Systemic <br /><span className="italic font-light text-[#A07A41]">Architecture.</span>
                    </h2>
                    <p className="text-gray-500 text-[10px] md:text-xs font-sans font-light italic leading-loose opacity-70 border-l border-[#A07A41] pl-8 mb-12 italic">
                       Our result oriented system makes everything logically connected and searchable instantly.
                    </p>
                    <div className="flex items-center gap-4 p-8 bg-white/[0.03] border border-white/10 rounded-[3rem] group cursor-pointer hover:bg-[#A07A41] transition-all duration-700 shadow-big outline-none">
                       <Layout size={24} className="text-[#A07A41] group-hover:text-black group-hover:scale-110 transition-all" />
                       <span className="text-white text-[10px] uppercase font-black tracking-widest group-hover:text-black italic">"Transforming scattered chaos into digital order"</span>
                    </div>
                 </div>
              </div>
           </div>
        </section>

        {/* ——— PROCESS, BENEFITS & PROBLEMS (GRID MAP) ——— */}
        <section ref={section5Ref} className="relative py-24 lg:py-48 bg-[#1B2D33] overflow-hidden">
           <div className="px-4 sm:px-6 lg:px-8 max-w-[85rem] mx-auto text-center mb-32 animat-fade-in-up">
              <h2 className="text-2xl md:text-5xl font-serif font-bold text-white tracking-widest italic uppercase mb-12 leading-none underline decoration-[#A07A41]/10 underline-offset-[20px] decoration-8">Operational <br /><span className="italic font-light text-[#A07A41]">Pipeline.</span></h2>
           </div>

           <div className="px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-12">
              {/* Process */}
              <div className={`${section5Visible ? 'animate-fade-in-up' : 'opacity-0'}`}>
                 <h3 className="text-[#A07A41] text-[9px] uppercase font-black tracking-[0.4em] mb-12 italic border-b border-[#A07A41]/10 pb-4">Our Lifecycle</h3>
                 <div className="space-y-4">
                    {[ "Collect case materials", "Review for relevance", "Categorise by issue", "Build structured system", "Deliver summary map" ].map((step, i) => (
                       <div key={i} className="flex items-center gap-6 p-6 bg-white/[0.02] border border-white/5 rounded-3xl hover:bg-black transition-all group">
                          <span className="text-[#A07A41] font-serif font-black italic opacity-30 group-hover:opacity-100">{i+1}</span>
                          <span className="text-gray-400 text-[10px] md:text-[11px] uppercase tracking-widest italic transition-colors group-hover:text-white">{step}</span>
                       </div>
                    ))}
                 </div>
              </div>

              {/* Benefits */}
              <div className={`${section5Visible ? 'animate-fade-in-up animation-delay-200' : 'opacity-0'}`}>
                 <h3 className="text-[#A07A41] text-[9px] uppercase font-black tracking-[0.4em] mb-12 italic border-b border-[#A07A41]/10 pb-4">Value Proposition</h3>
                 <div className="grid grid-cols-1 gap-4">
                    {[ "Faster case prep", "Reduced confusion", "Stronger argument building", "Barrister accessibility", "Absolute case clarity" ].map((b, i) => (
                       <div key={i} className="flex items-center gap-6 p-6 bg-white/[0.02] border border-white/5 rounded-3xl hover:bg-[#A07A41] transition-all group shadow-big">
                          <CheckCircle2 size={16} className="text-[#A07A41] group-hover:text-black shrink-0 transition-colors" />
                          <span className="text-gray-400 text-[10px] md:text-[11px] uppercase tracking-widest italic font-bold group-hover:text-black transition-colors">{b}</span>
                       </div>
                    ))}
                 </div>
              </div>

              {/* Problems Fixed */}
              <div className={`${section5Visible ? 'animate-fade-in-up animation-delay-400' : 'opacity-0'}`}>
                 <h3 className="text-red-500 text-[9px] uppercase font-black tracking-[0.4em] mb-12 italic border-b border-red-500/10 pb-4 italic">Reality Check</h3>
                 <div className="space-y-4">
                    {[ "Missing/Duplicated docs", "No timeline structure", "Unclear relevance", "Disorganised digital files", "Mixed-up categories" ].map((p, i) => (
                       <div key={i} className="flex items-center gap-6 p-6 bg-red-500/5 border border-red-500/10 rounded-3xl hover:bg-black transition-all group">
                          <AlertCircle size={16} className="text-red-500/30 group-hover:text-red-500 shrink-0 transition-colors" />
                          <span className="text-gray-500 text-[10px] md:text-[11px] uppercase tracking-widest italic transition-colors group-hover:text-red-200">{p}</span>
                       </div>
                    ))}
                 </div>
              </div>
           </div>
        </section>

        {/* ——— WHO NEEDS THIS & DISCLAIMER ——— */}
        <section ref={section6Ref} className="relative py-24 lg:py-48 bg-[#1B2D33] overflow-hidden border-y border-white/5">
           <div className="px-4 sm:px-6 lg:px-8 max-w-[85rem] mx-auto grid lg:grid-cols-2 gap-20 items-center">
              <div className={`${section6Visible ? 'animate-fade-in-left' : 'opacity-0'}`}>
                 <h3 className="text-[#A07A41] text-[9px] uppercase font-black tracking-[0.4em] mb-12 italic font-serif">Demographic Target</h3>
                 <h2 className="text-2xl md:text-5xl font-serif font-bold text-white tracking-widest italic uppercase mb-16 leading-none">Who Needs <br /><span className="italic font-light text-[#A07A41]">Our Support?</span></h2>
                 <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                    {[ "Solicitors & Law Firms", "Immigration Cases", "Civil Disputes", "Appeal Cases", "Complex Docs", "Self-represented" ].map((u, i) => (
                       <div key={i} className="p-6 bg-white/[0.02] border border-white/5 rounded-2xl text-center hover:bg-white/[0.04] transition-all group">
                          <span className="text-gray-500 text-[9px] font-black uppercase tracking-widest group-hover:text-white transition-colors">{u}</span>
                       </div>
                    ))}
                 </div>
              </div>

              <div className={`${section6Visible ? 'animate-fade-in-right animation-delay-300' : 'opacity-0'}`}>
                 <div className="p-10 lg:p-14 bg-[#2A454E]/20 border border-[#A07A41]/20 rounded-[4rem] text-center backdrop-blur-3xl shadow-big group hover:border-[#A07A41] transition-all duration-700">
                    <Lock size={30} className="text-[#A07A41] mx-auto mb-6 opacity-40 group-hover:rotate-12 transition-transform shadow-inner" />
                    <h2 className="text-[#A07A41] text-xs font-serif font-bold mb-4 italic uppercase tracking-[0.3em] font-black underline underline-offset-8">Administrative Protocol.</h2>
                    <p className="text-gray-400 text-[10px] md:text-xs leading-relaxed italic font-light opacity-80 italic underline decoration-white/5 decoration-dotted underline-offset-4">
                       This service provides administrative and document organisation support only. We do not provide legal advice or legal representation.
                    </p>
                 </div>
              </div>
           </div>
        </section>

        {/* ——— FAQ SECTION (CENTERED) ——— */}
        <section className="relative py-24 lg:py-48 bg-[#1B2D33] overflow-hidden border-b border-white/10 shadow-big">
           <div className="px-4 sm:px-6 lg:px-8 max-w-[50rem] mx-auto text-center">
              <div className="text-center mb-24 animate-fade-in-up">
                 <h2 className="text-3xl md:text-5xl font-serif font-bold text-white tracking-tight italic uppercase font-black underline decoration-[#A07A41]/10 underline-offset-[24px] decoration-8">Structuring <br /><span className="italic font-light text-[#A07A41]">Briefing.</span></h2>
              </div>

              <div className="space-y-4 text-left">
                 {[
                   { q: "Is this the same as legal advice?", a: "No. Our services are strictly administrative and technical. We help you structure, index, and organize your files so they are ready for legal professionals." },
                   { q: "Can this help my solicitor?", a: "Extremely. Solicitors and Barristers spend significant billable hours searching for documents. By providing them an indexed, structured file, you save them time and reduce your costs." },
                   { q: "Do you handle digital and physical files?", a: "Yes. We can index physical document sets into digital archives and organize existing digital case folders into a cohesive, searchable workspace." }
                 ].map((faq, index) => (
                    <div key={index} className="border border-[#A07A41]/10 px-6 md:px-8 rounded-[3rem] bg-white/[0.03] overflow-hidden transition-all duration-1000 md:opacity-100 shadow-xl shadow-inner scroll-smooth">
                       <button 
                         onClick={() => setActiveFaq(activeFaq === index ? null : index)}
                         className="w-full py-10 md:py-12 flex items-center justify-between group outline-none"
                       >
                         <span className={`text-left text-[11px] md:text-sm font-serif font-bold italic tracking-tighter ${activeFaq === index ? 'text-[#A07A41]' : 'text-gray-300'}`}>{faq.q}</span>
                         <div className={`shrink-0 p-3 rounded-2xl border border-white/5 transition-all duration-500 shadow-inner ${activeFaq === index ? 'bg-[#A07A41] rotate-180 border-[#A07A41]' : 'group-hover:border-[#A07A41]'}`}>
                            <ChevronDown className={`h-4 w-4 transition-colors ${activeFaq === index ? 'text-black' : 'text-[#A07A41]'}`} />
                         </div>
                       </button>
                       <div className={`transition-all duration-700 ease-[cubic-bezier(0.2,1,0.2,1)] px-8 md:px-14 ${activeFaq === index ? 'max-h-[500px] pb-12 opacity-100' : 'max-h-0 opacity-0 overflow-hidden'}`}>
                          <p className="text-gray-500 text-[10px] md:text-xs font-sans font-light italic border-l-2 border-[#A07A41]/20 pl-8 opacity-80 leading-relaxed italic">{faq.a}</p>
                       </div>
                    </div>
                 ))}
              </div>
           </div>
        </section>

        {/* ——— CALL TO ACTION ——— */}
        <section id="cta" className="relative py-32 lg:py-64 bg-[#1B2D33] overflow-hidden">
           <div className="absolute inset-0 z-0 opacity-[0.2] bg-cover bg-center animate-[ken-burns_20s_linear_infinite]" style={{ backgroundImage: 'url("https://images.unsplash.com/photo-1521587760476-6c12a4b040da?auto=format&fit=crop&q=80")' }}>
              <div className="absolute inset-0 bg-[#1B2D33]/80 backdrop-blur-[2px]"></div>
           </div>
           
           <div className="max-w-[85rem] mx-auto px-4 sm:px-6 lg:px-8 animate-fade-in-up relative z-10 text-center">
              <div className="p-16 md:p-32 bg-white/[0.01] border border-white/10 rounded-[6rem] backdrop-blur-3xl relative overflow-hidden shadow-big group shadow-inner">
                 <div className="absolute top-0 right-0 p-40 opacity-[0.03] scale-[6] rotate-[15deg] transition-all duration-[10s] group-hover:text-[#A07A41] pointer-events-none"><HardDrive size={300} /></div>
                 
                 <h2 className="text-3xl md:text-5xl lg:text-7xl font-serif font-bold text-white mb-10 tracking-tighter leading-none italic uppercase decoration-[#A07A41]/10 underline underline-offset-[36px] decoration-8 hover:decoration-[#A07A41] transition-all duration-1000">Court-Ready <br /><span className="italic font-light text-[#A07A41] lowercase drop-shadow-big italic">Excellence.</span></h2>
                 
                 <p className="text-gray-400 text-[10px] md:text-sm font-sans font-light italic leading-relaxed mb-16 max-w-xl mx-auto opacity-70 italic border-b border-white/5 pb-10">
                    Turn scattered documents into a structured, court-ready system that improves clarity and efficiency.
                 </p>

                 <div role="button" className="group relative inline-flex items-center justify-center gap-4 px-12 py-5 bg-[#1B2D33] border border-white/10 text-white font-bold tracking-[0.3em] uppercase text-[10px] md:text-[12px] rounded transition-all duration-300 hover:bg-[#A07A41] cursor-pointer shadow-big overflow-hidden hover:scale-110 active:scale-95 shadow-inner">
                    <span className="relative z-10 font-black tracking-widest">Organise My Case Files</span>
                    <ArrowRight size={16} className="relative z-10 transform group-hover:translate-x-1 transition-transform duration-300" />
                 </div>
              </div>
           </div>
        </section>

      </main>
    </div>
  );
};

export default EvidenceOrganizationPage;
