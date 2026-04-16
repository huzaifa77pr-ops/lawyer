import React, { useEffect, useState, useRef } from 'react';
import { 
  ArrowRight, FileText, Zap, ShieldCheck, AlertCircle, 
  ChevronDown, Scale, Target, ListChecks, CheckCircle2, 
  Layers, Lock, Quote, Microscope, Search, ClipboardList
} from 'lucide-react';

const DepositionSummariesPage = () => {
  const [section1Visible, setSection1Visible] = useState(false);
  const [section2Visible, setSection2Visible] = useState(false);
  const [section3Visible, setSection3Visible] = useState(false);
  const [section4Visible, setSection4Visible] = useState(false);
  const [section5Visible, setSection5Visible] = useState(false);
  const [section6Visible, setSection6Visible] = useState(false);
  const [section7Visible, setSection7Visible] = useState(false);
  const [activeFaq, setActiveFaq] = useState(null);

  const section1Ref = useRef(null);
  const section2Ref = useRef(null);
  const section3Ref = useRef(null);
  const section4Ref = useRef(null);
  const section5Ref = useRef(null);
  const section6Ref = useRef(null);
  const section7Ref = useRef(null);

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
            if (entry.target === section7Ref.current) setSection7Visible(true);
          }
        });
      },
      { threshold: 0.1 }
    );

    [section1Ref, section2Ref, section3Ref, section4Ref, section5Ref, section6Ref, section7Ref].forEach(ref => {
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
            <h1>Deposition & Transcript Summaries (UK & International)</h1>
            <h2>deposition summaries UK, legal transcript summaries UK, witness testimony summary UK</h2>
            <p>Clear, structured summaries of witness testimony and legal transcripts for efficient case review in the UK and internationally.</p>
          </div>

          {/* Background Elements */}
          <div className="absolute inset-0 z-0">
            <div className={`absolute inset-0 bg-[#1B2D33] transition-opacity duration-1000 ${section1Visible ? 'opacity-30' : 'opacity-0'}`}>
              <div className="absolute inset-0 bg-cover bg-center animate-[ken-burns_18s_linear_infinite]" style={{ backgroundImage: 'url("https://images.unsplash.com/photo-1505664194779-8beaceb93744?auto=format&fit=crop&q=80")' }}></div>
            </div>
            <div className="absolute inset-0 bg-gradient-to-b from-[#1B2D33] via-transparent to-[#1B2D33] z-10"></div>
          </div>

          <div className="absolute right-[10%] top-0 bottom-0 w-px bg-[#A07A41]/10 hidden lg:block z-20"></div>

          <div className="relative z-20 px-4 sm:px-6 lg:px-8 max-w-[85rem] mx-auto w-full text-center lg:text-left">
            <div className="grid lg:grid-cols-12 gap-16 items-center">
              <div className={`lg:col-span-8 ${section1Visible ? 'animate-fade-in-left' : 'opacity-0'}`}>
                <div className="inline-flex items-center gap-3 mb-8 px-4 py-1.5 bg-white/5 border border-white/10 rounded-full backdrop-blur-3xl shadow-xl mx-auto lg:mx-0">
                  <Microscope size={10} className="text-[#A07A41]" />
                  <span className="text-[#A07A41] uppercase tracking-[0.4em] text-[8px] font-black italic">Granular Testimony Review</span>
                </div>
                
                <h1 className="text-3xl md:text-5xl lg:text-7xl font-serif font-bold text-white leading-[1.05] mb-8 tracking-tighter">
                  Deposition & <br />
                  <span className="italic font-light text-[#A07A41]">Transcript Summaries.</span>
                </h1>
                
                <div className="flex gap-8 items-start mb-10 border-l border-[#A07A41]/30 pl-8 mx-auto lg:mx-0 max-w-2xl text-left">
                  <div className="max-w-xl">
                    <p className="text-gray-400 text-xs md:text-sm font-light leading-relaxed mb-6 italic opacity-80">
                      Clear, structured summaries of witness testimony and legal transcripts for efficient case review.
                    </p>
                    <p className="text-gray-500 text-[10px] md:text-xs font-light leading-relaxed">
                      We assist in summarizing depositions and legal transcripts into concise, easy-to-understand formats, helping legal professionals and clients quickly identify key information.
                    </p>
                  </div>
                </div>

                <div className="flex flex-wrap gap-6 items-center justify-center lg:justify-start">
                  <a href="#cta" className="px-10 py-5 bg-[#1B2D33] border border-white/10 text-white font-bold tracking-[0.3em] uppercase text-[10px] rounded hover:bg-[#A07A41] transition-all duration-300 shadow-2xl hover:scale-105 active:scale-95 shadow-inner">
                    Get Summary Support
                  </a>
                  <div className="flex items-center gap-2 text-white/30 text-[8px] font-black uppercase tracking-widest italic border-b border-white/10 pb-0.5">
                    <ShieldCheck size={12} className="text-[#A07A41]" />
                    Distilled Case Intelligence
                  </div>
                </div>
              </div>

              <div className={`lg:col-span-4 hidden lg:block relative ${section1Visible ? 'animate-fade-in-bottom-right animation-delay-300' : 'opacity-0'}`}>
                 <div className="relative p-2 bg-white/5 border border-white/10 rounded-[3rem] shadow-shadow-big overflow-hidden group">
                    <img src="https://images.unsplash.com/photo-1544027993-37dbfe43562a?auto=format&fit=crop&q=80" alt="Transcript Summary" className="w-full h-[500px] object-cover rounded-[2.5rem] grayscale group-hover:grayscale-0 transition-all duration-[2s]" />
                    <div className="absolute inset-0 bg-[#A07A41]/10"></div>
                 </div>
              </div>
            </div>
          </div>
        </section>

        {/* ——— WHAT ARE SUMMARIES & WHY IMPORTANT ——— */}
        <section ref={section2Ref} className="relative py-24 bg-white/[0.02] border-y border-white/5 overflow-hidden">
           <div className="px-4 sm:px-6 lg:px-8 max-w-[85rem] mx-auto">
              <div className="grid lg:grid-cols-2 gap-20 items-stretch">
                 <div className={`flex flex-col justify-center ${section2Visible ? 'animate-fade-in-left' : 'opacity-0'}`}>
                    <span className="text-[#A07A41] uppercase tracking-[0.5em] text-[8px] font-black italic mb-6">Distillation Logic</span>
                    <h2 className="text-2xl md:text-4xl font-serif font-bold text-white tracking-widest italic uppercase mb-8">What are <br /><span className="italic font-light text-[#A07A41]">Transcript Summaries?</span></h2>
                    <p className="text-gray-300 text-sm md:text-base font-serif italic italic font-light italic leading-loose opacity-80 border-l border-[#A07A41]/30 pl-8 mb-8">
                       Deposition or transcript summaries are condensed versions of recorded testimony or legal proceedings. They highlight key facts, statements, and relevant points from lengthy documents.
                    </p>
                    <div className="p-8 bg-black/40 border border-[#A07A41]/20 rounded-[2.5rem] shadow-big group hover:border-[#A07A41] transition-all">
                       <p className="text-[#A07A41] font-serif italic text-lg opacity-80 italic transition-opacity">
                          “No one wants to read 200 pages to find 5 important points.”
                       </p>
                    </div>
                 </div>

                 <div className={`grid grid-cols-1 gap-6 ${section2Visible ? 'animate-fade-in-right animation-delay-300' : 'opacity-0'}`}>
                    <div className="p-10 bg-white/[0.03] border border-white/10 rounded-[3rem] group hover:bg-[#A07A41] transition-all duration-700 h-full flex flex-col justify-center">
                       <h4 className="text-white font-serif font-bold text-lg italic uppercase tracking-tighter group-hover:text-black mb-8 transition-colors">Why Summaries Matter</h4>
                       <div className="space-y-6">
                           {[
                             { t: "Missed Details", d: "Lengthy transcripts hide critical evidence.", i: AlertCircle },
                             { t: "Time Efficiency", d: "Reviewing 200+ pages manually is non-vialble.", i: Zap },
                             { t: "Argument Clarity", d: "Identifying key lines for legal strategy.", i: Scale }
                           ].map((item, i) => (
                              <div key={i} className="flex items-start gap-4 transition-transform group-hover:translate-x-2 duration-500">
                                 <item.i size={16} className="text-[#A07A41] group-hover:text-black mt-1" />
                                 <div>
                                    <h5 className="text-white text-[10px] md:text-xs font-serif font-bold italic uppercase tracking-widest group-hover:text-black/80">{item.t}</h5>
                                    <p className="text-gray-500 text-[8px] uppercase font-black tracking-widest group-hover:text-black/60 italic leading-none">{item.d}</p>
                                 </div>
                              </div>
                           ))}
                       </div>
                    </div>
                 </div>
              </div>
           </div>
        </section>

        {/* ——— WHEN SUMMARIES ARE USED (HORIZONTAL STRIP) ——— */}
        <section ref={section3Ref} className="relative py-24 lg:py-40 bg-[#1B2D33] overflow-hidden">
           <div className="px-4 sm:px-6 lg:px-8 max-w-[85rem] mx-auto text-center mb-24">
              <h2 className={`text-2xl md:text-5xl font-serif font-bold text-white tracking-widest italic uppercase mb-12 ${section3Visible ? 'animate-fade-in-up' : 'opacity-0'}`}>Case <span className="italic font-light text-[#A07A41]">Usage.</span></h2>
           </div>

           <div className="px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-4">
              {[
                { t: "Case Prep", i: ClipboardList },
                { t: "Appeals", i: ShieldCheck },
                { t: "Complex Disputes", i: Layers },
                { t: "Witness Review", i: FileText },
                { t: "Evidence Support", i: Microscope }
              ].map((item, i) => (
                 <div key={i} className={`p-10 bg-white/[0.02] border border-white/5 rounded-[2.5rem] text-center hover:bg-[#A07A41] transition-all duration-700 shadow-big group ${section3Visible ? 'animate-fade-in-up' : 'opacity-0'}`} style={{ animationDelay: `${i * 100}ms` }}>
                    <item.i size={20} className="text-[#A07A41] mx-auto mb-6 group-hover:text-black transition-transform group-hover:scale-110" />
                    <span className="text-gray-400 text-[9px] md:text-[10px] font-sans font-black italic uppercase tracking-[0.3em] opacity-70 group-hover:text-black transition-all">{item.t}</span>
                 </div>
              ))}
           </div>
        </section>

        {/* ——— OUR SERVICES (CORE CONCISE VIEW) ——— */}
        <section ref={section4Ref} className="relative py-24 lg:py-48 bg-[#1B2D33] overflow-hidden border-y border-white/5 bg-white/[0.01]">
           <div className="px-4 sm:px-6 lg:px-8 max-w-[85rem] mx-auto">
              <div className="grid lg:grid-cols-2 gap-20 items-center">
                 <div className={`${section4Visible ? 'animate-fade-in-left' : 'opacity-0'}`}>
                    <span className="text-[#A07A41] uppercase tracking-[0.6em] text-[8px] font-black mb-8 block font-serif">Services Architecture</span>
                    <h2 className="text-3xl md:text-6xl font-serif font-bold text-white tracking-tighter italic uppercase mb-12 leading-none">
                       Summary & Analysis <br /><span className="italic font-light text-[#A07A41]">Expertise.</span>
                    </h2>
                    <div className="space-y-4">
                       {[
                         "Summarizing lengthy transcripts into key points",
                         "Highlighting important facts and statements",
                         "Structuring summaries for easy reference",
                         "Organizing information logically",
                         "Preparing summaries for case use"
                       ].map((service, i) => (
                          <div key={i} className="flex gap-6 group items-center p-6 bg-white/[0.03] border border-white/5 rounded-[2.5rem] hover:bg-[#A07A41] transition-all duration-700 shadow-big">
                             <div className="h-6 w-6 shrink-0 bg-[#A07A41]/10 rounded-full flex items-center justify-center text-[#A07A41] group-hover:bg-black group-hover:text-[#A07A41] transition-colors shadow-inner"><Target size={12} /></div>
                             <span className="text-gray-400 text-[10px] md:text-xs font-sans font-light italic opacity-80 group-hover:text-black uppercase tracking-widest">{service}</span>
                          </div>
                       ))}
                    </div>
                 </div>

                 <div className={`grid grid-cols-1 sm:grid-cols-2 gap-6 ${section4Visible ? 'animate-fade-in-right animation-delay-300' : 'opacity-0'}`}>
                    <div className="p-10 border border-white/5 bg-white/[0.01] rounded-[3rem] hover:border-[#A07A41] transition-all group">
                       <h4 className="text-[#A07A41] font-serif font-bold text-xs uppercase mb-8 italic tracking-widest">Summary Formats</h4>
                       <ul className="space-y-4">
                          {[ "Chronological summaries", "Issue-based summaries", "Key point summaries", "Page-by-page breakdowns" ].map((type, i) => (
                             <li key={i} className="text-gray-500 text-[9px] uppercase font-black tracking-widest border-b border-white/5 pb-2 group-hover:text-white transition-colors">{type}</li>
                          ))}
                       </ul>
                    </div>
                    <div className="p-10 border border-white/5 bg-[#A07A41]/5 rounded-[3rem] hover:border-[#A07A41] transition-all group">
                       <h4 className="text-[#A07A41] font-serif font-bold text-xs uppercase mb-8 italic tracking-widest">Strategic Benefits</h4>
                       <ul className="space-y-4">
                          {[ "Massive time savings", "Improved comprehension", "Better decision-making", "Enhanced organization" ].map((benefit, i) => (
                             <li key={i} className="text-gray-500 text-[9px] uppercase font-black tracking-widest border-b border-white/5 pb-2 group-hover:text-white transition-colors italic">{benefit}</li>
                          ))}
                       </ul>
                    </div>
                 </div>
              </div>
           </div>
        </section>

        {/* ——— MISTAKES & PROCESS (MAPPING STYLE) ——— */}
        <section ref={section5Ref} className="relative py-24 lg:py-48 bg-[#1B2D33] overflow-hidden">
           <div className="px-4 sm:px-6 lg:px-8 max-w-[85rem] mx-auto text-center mb-24 animat-fade-in-up">
              <h2 className="text-2xl md:text-5xl font-serif font-bold text-white tracking-widest italic uppercase mb-12">Workflow <br /><span className="italic font-light text-[#A07A41]">Integrity.</span></h2>
           </div>

           <div className="px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto flex flex-col gap-16">
              {/* Mistakes */}
              <div className={`${section5Visible ? 'animate-fade-in-left' : 'opacity-0'}`}>
                 <h2 className="text-red-500 uppercase tracking-[0.6em] text-[8px] font-black mb-10 italic">Common Summary Mistakes</h2>
                 <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                    {[ "Missing key info", "Over-summarizing", "Lack of structure", "Irrelevant content" ].map((m, i) => (
                       <div key={i} className="p-8 bg-white/[0.02] border border-red-500/10 rounded-[2.5rem] hover:bg-red-500/10 transition-all duration-700 shadow-big group text-center">
                          <AlertCircle size={20} className="text-red-500/40 group-hover:text-red-500 mx-auto mb-4 transition-transform group-hover:rotate-12" />
                          <h4 className="text-white font-serif font-bold text-[9px] uppercase group-hover:text-red-200 tracking-widest italic leading-tight">{m}</h4>
                       </div>
                    ))}
                 </div>
              </div>

              {/* Our Process */}
              <div className={`${section5Visible ? 'animate-fade-in-right animation-delay-300' : 'opacity-0'}`}>
                 <h2 className="text-[#A07A41] uppercase tracking-[0.6em] text-[8px] font-black mb-10 italic">The Distillation Cycle</h2>
                 <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                    {[ "Review Documents", "Identify Key Issues", "Prepare Structured Summary", "Deliver Clear Output" ].map((step, i) => (
                       <div key={i} className="flex flex-col items-center justify-center p-10 bg-white/[0.01] border border-white/5 rounded-[3rem] hover:bg-[#A07A41] transition-all duration-700 group text-center shadow-inner relative overflow-hidden">
                          <span className="text-[#A07A41] group-hover:text-black font-black font-serif italic text-3xl opacity-30 group-hover:opacity-100 mb-6 transition-all">{i+1}</span>
                          <h4 className="text-white font-serif font-bold text-[10px] md:text-xs italic uppercase tracking-tighter group-hover:text-black leading-tight transition-all">{step}</h4>
                          <div className="absolute inset-0 bg-white/5 opacity-0 group-hover:opacity-10 transition-opacity"></div>
                       </div>
                    ))}
                 </div>
              </div>
           </div>
        </section>

        {/* ——— DISCLAIMER ——— */}
        <section ref={section6Ref} className="relative py-16 lg:py-32 bg-[#1B2D33] overflow-hidden border-y border-white/5 shadow-inner">
           <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className={`p-8 md:p-14 bg-[#A07A41]/5 border border-[#A07A41]/20 rounded-[3rem] text-center backdrop-blur-3xl shadow-big group hover:border-[#A07A41] transition-all duration-700 font-serif font-light italic text-[#A07A41] ${section6Visible ? 'animate-fade-in-up' : 'opacity-0'}`}>
                 <Lock size={30} className="text-[#A07A41] mx-auto mb-6 opacity-40 group-hover:rotate-12 transition-transform" />
                 <h2 className="text-[#A07A41] text-xs font-bold mb-4 italic uppercase tracking-[0.3em] font-black">Analysis Disclaimer.</h2>
                 <p className="text-gray-400 text-[10px] md:text-xs leading-relaxed italic font-light opacity-80 italic underline decoration-white/5 decoration-dotted underline-offset-4 mb-4">
                    Our deposition and transcript summary services are for document analysis and preparation only. We do not provide legal advice or legal representation.
                 </p>
              </div>
           </div>
        </section>

        {/* ——— FAQ SECTION ——— */}
        <section ref={section7Ref} className="relative py-24 lg:py-48 bg-[#1B2D33] overflow-hidden border-b border-white/10 shadow-big">
           <div className="px-4 sm:px-6 lg:px-8 max-w-[50rem] mx-auto">
              <div className="text-center mb-24 animate-fade-in-up">
                 <h2 className="text-3xl md:text-5xl font-serif font-bold text-white tracking-tight italic uppercase font-black underline decoration-[#A07A41]/10 underline-offset-[24px] decoration-8">Summary <br /><span className="italic font-light text-[#A07A41]">Briefing.</span></h2>
              </div>

              <div className="space-y-4">
                 {[
                   { q: "Are depositions common in the UK?", a: "Depositions are more common in international (e.g., US-linked) cases, but transcript summaries of UK court proceedings, hearings, and interviews are widely used by legal professionals." },
                   { q: "Can summaries replace full transcripts?", a: "No, summaries are used for quick reference, issue identification, and strategic planning only. For formal court citation, the full transcript should always be available." },
                   { q: "How long does it take?", a: "It depends heavily on document length and complexity. We typically deliver structured summaries within 3–7 business days for standard-sized transcripts." }
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
           <div className="absolute inset-0 z-0 opacity-[0.2] bg-cover bg-center animate-[ken-burns_15s_linear_infinite]" style={{ backgroundImage: 'url("https://images.unsplash.com/photo-1589829545856-d10d557cf95f?auto=format&fit=crop&q=80")' }}>
              <div className="absolute inset-0 bg-[#1B2D33]/80 backdrop-blur-[2px]"></div>
           </div>
           
           <div className="max-w-[85rem] mx-auto px-4 sm:px-6 lg:px-8 animate-fade-in-up relative z-10 text-center">
              <div className="p-16 md:p-32 bg-white/[0.01] border border-white/10 rounded-[6rem] backdrop-blur-3xl relative overflow-hidden shadow-big group shadow-inner">
                 <div className="absolute top-0 right-0 p-40 opacity-[0.03] scale-[6] rotate-[15deg] transition-all duration-[10s] group-hover:text-[#A07A41] pointer-events-none"><Quote size={300} /></div>
                 
                 <h2 className="text-3xl md:text-5xl lg:text-7xl font-serif font-bold text-white mb-10 tracking-tighter leading-none italic uppercase decoration-[#A07A41]/10 underline underline-offset-[36px] decoration-8">Concise <br /><span className="italic font-light text-[#A07A41] lowercase drop-shadow-big italic">Summaries.</span></h2>
                 
                 <p className="text-gray-400 text-[10px] md:text-sm font-sans font-light italic leading-relaxed mb-16 max-w-xl mx-auto opacity-70 italic border-b border-white/5 pb-10">
                    Save time and improve your case preparation with professionally structured summaries. Contact us today.
                 </p>

                 <div role="button" className="group relative inline-flex items-center justify-center gap-4 px-12 py-5 bg-[#1B2D33] border border-white/10 text-white font-bold tracking-[0.3em] uppercase text-[10px] md:text-[12px] rounded transition-all duration-300 hover:bg-[#A07A41] cursor-pointer shadow-big overflow-hidden hover:scale-110 active:scale-95 shadow-inner">
                    <span className="relative z-10 font-black tracking-widest">Get Summary Support</span>
                    <ArrowRight size={16} className="relative z-10 transform group-hover:translate-x-1 transition-transform duration-300" />
                 </div>
              </div>
           </div>
        </section>

      </main>
    </div>
  );
};

export default DepositionSummariesPage;
