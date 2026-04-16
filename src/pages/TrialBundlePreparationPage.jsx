import React, { useEffect, useState, useRef } from 'react';
import { 
  ArrowRight, FileText, Briefcase, ShieldCheck, AlertCircle, 
  ChevronDown, Scale, Plus, ListOrdered, GraduationCap, 
  Package, Lock, Bookmark, FolderSync, Zap
} from 'lucide-react';

const TrialBundlePreparationPage = () => {
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
        
        {/* 1. HERO SECTION */}
        <section 
          ref={section1Ref}
          className="relative min-h-[90vh] flex items-center pt-32 lg:pt-40 pb-24 overflow-hidden"
        >
          {/* SEO Hidden Content */}
          <div className="hidden">
            <h1>Trial Bundle Preparation (UK) – Professional Court Support</h1>
            <h2>trial bundle preparation UK, court bundle preparation UK, legal document bundle UK</h2>
            <p>Professional preparation of clear, structured, and court-ready trial bundles for UK legal proceedings.</p>
          </div>

          {/* Background Elements */}
          <div className="absolute inset-0 z-0 opacity-20">
            <div className={`absolute inset-0 bg-[#1B2D33] transition-opacity duration-1000 ${section1Visible ? 'opacity-100' : 'opacity-0'}`}>
              <div className="absolute inset-0 bg-cover bg-center animate-[ken-burns_20s_linear_infinite]" style={{ backgroundImage: 'url("https://images.unsplash.com/photo-1589829545856-d10d557cf95f?auto=format&fit=crop&q=80")' }}></div>
            </div>
            <div className="absolute inset-0 bg-gradient-to-b from-[#1B2D33] via-transparent to-[#1B2D33] z-10"></div>
          </div>

          <div className="absolute left-[10%] top-0 bottom-0 w-px bg-[#A07A41]/20 hidden lg:block z-20"></div>

          <div className="relative z-20 px-4 sm:px-6 lg:px-8 max-w-[85rem] mx-auto w-full">
            <div className="grid lg:grid-cols-12 gap-16 items-center">
              <div className={`lg:col-span-8 ${section1Visible ? 'animate-fade-in-left' : 'opacity-0'}`}>
                <div className="inline-flex items-center gap-3 mb-8 px-4 py-1.5 bg-white/5 border border-white/10 rounded-full backdrop-blur-3xl shadow-xl">
                  <Package size={10} className="text-[#A07A41]" />
                  <span className="text-[#A07A41] uppercase tracking-[0.4em] text-[8px] font-black italic">Judicial Standard UK</span>
                </div>
                
                <h1 className="text-3xl md:text-5xl lg:text-7xl font-serif font-bold text-white leading-[1.05] mb-8 tracking-tighter">
                  Trial Bundle <br />
                  <span className="italic font-light text-[#A07A41]">Preparation.</span>
                </h1>
                
                <div className="flex gap-8 items-start mb-10 border-l border-[#A07A41]/30 pl-8">
                  <div className="max-w-xl">
                    <p className="text-gray-400 text-xs md:text-sm font-light leading-relaxed mb-6 italic opacity-80">
                      Professional preparation of clear, structured, and court-ready trial bundles.
                    </p>
                    <p className="text-gray-500 text-[10px] md:text-xs font-light leading-relaxed">
                      We assist in organizing and preparing trial bundles that present your case documents in a logical, accessible, and professional format for court proceedings.
                    </p>
                  </div>
                </div>

                <div className="flex flex-wrap gap-6 items-center">
                  <a href="#cta" className="px-10 py-5 bg-[#1B2D33] border border-white/10 text-white font-bold tracking-[0.3em] uppercase text-[10px] rounded hover:bg-[#A07A41] transition-all duration-300 shadow-2xl hover:scale-105 active:scale-95 shadow-inner">
                    Prepare My Trial Bundle
                  </a>
                  <div className="flex items-center gap-2 text-white/30 text-[8px] font-black uppercase tracking-widest italic border-b border-white/10 pb-0.5">
                    <ShieldCheck size={12} className="text-[#A07A41]" />
                    Court-Ready Validation
                  </div>
                </div>
              </div>

              <div className={`lg:col-span-4 hidden lg:block relative ${section1Visible ? 'animate-fade-in-bottom-right animation-delay-300' : 'opacity-0'}`}>
                <div className="relative p-2 bg-white/5 border border-white/10 rounded-[3rem] shadow-shadow-big overflow-hidden group">
                  <img src="https://images.unsplash.com/photo-1505664194779-8beaceb93744?auto=format&fit=crop&q=80" alt="Trial Bundle" className="w-full h-[500px] object-cover rounded-[2.5rem] grayscale group-hover:grayscale-0 transition-all duration-[2s] group-hover:scale-105" />
                  <div className="absolute inset-0 bg-[#1B2D33]/40 group-hover:opacity-0 transition-opacity"></div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 2. WHAT IS A TRIAL BUNDLE? & 3. WHY MATTERS */}
        <section ref={section2Ref} className="relative py-24 bg-white/[0.02] border-y border-white/5 overflow-hidden">
           <div className="px-4 sm:px-6 lg:px-8 max-w-[85rem] mx-auto text-center mb-20">
              <span className={`text-[#A07A41] uppercase tracking-[0.5em] text-[8px] font-black italic mb-6 block ${section2Visible ? 'animate-fade-in-down' : 'opacity-0'}`}>Definition & Impact</span>
              <h2 className={`text-2xl md:text-5xl font-serif font-bold text-white tracking-widest italic uppercase mb-16 ${section2Visible ? 'animate-fade-in-up' : 'opacity-0'}`}>The Central <br /><span className="italic font-light text-[#A07A41]">Archive.</span></h2>
           </div>

           <div className="px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
              <div className={`${section2Visible ? 'animate-fade-in-left' : 'opacity-0'}`}>
                 <div className="p-10 lg:p-14 bg-white/[0.02] border border-white/5 rounded-[4rem] group hover:border-[#A07A41]/20 transition-all duration-700 h-full flex flex-col justify-center">
                    <h4 className="text-[#A07A41] text-lg font-serif font-bold mb-6 italic uppercase tracking-tighter underline underline-offset-8 decoration-[#A07A41]/10">What is a Trial Bundle?</h4>
                    <p className="text-gray-300 text-sm md:text-base font-serif italic italic font-light italic leading-loose opacity-80 border-l border-[#A07A41]/30 pl-8">
                       A trial bundle is a collection of all relevant documents required for a court case, organized into a structured format. It typically includes evidence, pleadings, witness statements, and supporting materials.
                    </p>
                 </div>
              </div>

              <div className={`${section2Visible ? 'animate-fade-in-right' : 'opacity-0'}`}>
                 <h4 className="text-white text-[10px] uppercase font-black tracking-[0.4em] mb-10 italic border-b border-white/5 pb-4">Critical Warning Factors</h4>
                 <div className="space-y-6">
                    {[
                      { t: "Procedural Confusion", d: "Disorganization leads to mass confusion during hearings.", i: AlertCircle },
                      { t: "Case Delays", d: "Poor bundles are the primary cause of case adjournment.", i: Scale },
                      { t: "Weakened Presentation", d: "Your arguments lose power if evidence is hard to find.", i: Zap }
                    ].map((item, i) => (
                       <div key={i} className="flex gap-8 group items-center p-8 bg-black/40 border border-white/5 rounded-[2.5rem] hover:bg-[#A07A41] transition-all duration-700 shadow-big">
                          <item.i size={20} className="text-[#A07A41] group-hover:text-black shrink-0 transition-transform group-hover:rotate-12" />
                          <div>
                             <h4 className="text-white font-serif font-bold text-xs uppercase tracking-tighter group-hover:text-black mb-1 transition-colors">{item.t}</h4>
                             <p className="text-gray-600 text-[8px] md:text-[9px] uppercase font-black tracking-widest group-hover:text-black/60 italic leading-tight transition-colors">{item.d}</p>
                          </div>
                       </div>
                    ))}
                 </div>
              </div>
           </div>

           <div className={`mt-24 text-center ${section2Visible ? 'animate-fade-in-up animation-delay-600' : 'opacity-0'}`}>
              <p className="text-[#A07A41] italic font-serif text-lg opacity-80 border-b border-[#A07A41]/20 pb-2 inline-block">
                “If your bundle is disorganized, your case looks unprepared.”
              </p>
           </div>
        </section>

        {/* 4. WHAT IS INCLUDED (STACKED LEDGER STYLE) */}
        <section ref={section3Ref} className="relative py-24 lg:py-48 bg-[#1B2D33] overflow-hidden">
           <div className="px-4 sm:px-6 lg:px-8 max-w-[85rem] mx-auto text-center mb-24 animate-fade-in-up">
              <h2 className="text-2xl md:text-5xl font-serif font-bold text-white tracking-widest italic uppercase mb-12">Constituent <br /><span className="italic font-light text-[#A07A41]">Materials.</span></h2>
           </div>

           <div className="px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto flex flex-col gap-4 relative z-10">
              {[
                { t: "Pleadings & Statements of Case", d: "Initial legal framework and claims." },
                { t: "Witness Statements", d: "Formal factual testimonies." },
                { t: "Supporting Evidence & Documents", i: ShieldCheck, d: "Verification and proof materials." },
                { t: "Correspondence", d: "Relevant case-related communications." },
                { t: "Chronologies & Timelines", d: "Sequential history of events." }
              ].map((item, i) => (
                 <div key={i} className={`group flex flex-col md:flex-row items-center justify-between p-10 bg-white/[0.02] border border-white/5 rounded-[3rem] hover:bg-black transition-all duration-700 shadow-big px-16 ${section3Visible ? 'animate-fade-in-up' : 'opacity-0'}`} style={{ animationDelay: `${i * 150}ms` }}>
                    <div className="flex items-center gap-10">
                       <span className="text-[#A07A41] font-serif font-bold text-sm h-12 w-12 rounded-full border border-[#A07A41]/30 flex items-center justify-center group-hover:bg-[#A07A41] group-hover:text-black transition-all">0{i+1}</span>
                       <div>
                          <h4 className="text-white font-serif font-bold text-sm md:text-base italic uppercase group-hover:text-[#A07A41] mb-1 transition-colors">{item.t}</h4>
                          <p className="text-gray-600 text-[8px] md:text-[9px] uppercase font-black tracking-widest group-hover:text-white/60 italic leading-none transition-colors">{item.d}</p>
                       </div>
                    </div>
                    <FileText size={20} className="text-[#A07A41] opacity-0 group-hover:opacity-100 transition-all translate-x-4 group-hover:translate-x-0 hidden md:block" />
                 </div>
              ))}
           </div>
        </section>

        {/* 5. OUR SERVICES (CORE) */}
        <section ref={section4Ref} className="relative py-24 lg:py-40 bg-[#1B2D33] overflow-hidden border-y border-white/5 bg-white/[0.01]">
           <div className="px-4 sm:px-6 lg:px-8 max-w-[85rem] mx-auto">
              <div className="grid lg:grid-cols-2 gap-20 items-center">
                 <div className={`relative ${section4Visible ? 'animate-fade-in-left' : 'opacity-0'}`}>
                    <div className="relative z-10 p-2 bg-white/5 border border-white/10 rounded-[3rem] shadow-shadow-big overflow-hidden group">
                       <img src="https://images.unsplash.com/photo-1589829085413-56de8ae18c73?auto=format&fit=crop&q=80" alt="Bundle Curation" className="w-full h-full object-cover rounded-[2.5rem] grayscale group-hover:grayscale-0 transition-all duration-[2s]" />
                       <div className="absolute inset-0 bg-[#A07A41]/10"></div>
                    </div>
                    <div className="absolute -top-10 -left-10 p-10 bg-[#A07A41] rounded-[3rem] shadow-2xl z-20 hidden md:block shadow-[0_0_30px_#A07A41]/50 italic font-black text-black">
                       <Bookmark size={30} />
                    </div>
                 </div>

                 <div className={`${section4Visible ? 'animate-fade-in-right' : 'opacity-0'}`}>
                    <span className="text-[#A07A41] uppercase tracking-[0.6em] text-[8px] font-black mb-8 block font-serif italic">Operational Capability</span>
                    <h2 className="text-3xl md:text-6xl font-serif font-bold text-white tracking-tighter italic uppercase mb-12">
                       Our Preparation <br /><span className="italic font-light text-[#A07A41]">Services.</span>
                    </h2>
                    <div className="space-y-4">
                       {[
                         "Organizing & structuring case documents",
                         "Indexing and numbering pages",
                         "Creating clear sections and categories",
                         "Ensuring consistency across documents",
                         "Preparing bundles ready for court use"
                       ].map((service, i) => (
                          <div key={i} className="flex gap-6 group items-center p-6 bg-white/[0.03] border border-white/5 rounded-[2.5rem] hover:bg-black transition-all duration-700 shadow-big">
                             <div className="h-6 w-6 shrink-0 bg-[#A07A41]/10 rounded-full flex items-center justify-center text-[#A07A41] group-hover:bg-[#A07A41] group-hover:text-black transition-colors"><Plus size={12} /></div>
                             <span className="text-gray-400 text-[10px] md:text-xs font-sans font-light italic opacity-80 group-hover:text-[#A07A41] transition-all uppercase tracking-widest">{service}</span>
                          </div>
                       ))}
                    </div>
                 </div>
              </div>
           </div>
        </section>

        {/* 6. FEATURES & 7. MISTAKES (GRID MAP) */}
        <section ref={section5Ref} className="relative py-24 lg:py-48 bg-[#1B2D33] overflow-hidden">
            <div className="px-4 sm:px-6 lg:px-8 max-w-[85rem] mx-auto text-center mb-24">
               <h2 className={`text-2xl md:text-5xl font-serif font-bold text-white tracking-widest italic uppercase mb-12 ${section5Visible ? 'animate-fade-in-up' : 'opacity-0'}`}>Standards <br /><span className="italic font-light text-[#A07A41]">& Failures.</span></h2>
            </div>

            <div className="px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 relative z-10">
               {/* Features */}
               <div className={`p-12 lg:p-16 bg-white/[0.02] border border-white/5 rounded-[4rem] hover:bg-white/[0.04] transition-all duration-1000 ${section5Visible ? 'animate-fade-in-left' : 'opacity-0'}`}>
                  <h3 className="text-[#A07A41] text-[10px] uppercase font-black tracking-[0.4em] mb-12 italic border-b border-[#A07A41]/20 pb-4">Professional Benchmark</h3>
                  <div className="grid grid-cols-1 gap-4">
                     {[ "Clear indexing system", "Logical document order", "Page numbering & referencing", "Easy navigation / Quick access", "Clean professional presentation" ].map((spec, i) => (
                        <div key={i} className="flex items-center gap-6 group border-b border-white/5 pb-4 opacity-70 hover:opacity-100 transition-opacity">
                           <ListOrdered size={14} className="text-[#A07A41]" />
                           <span className="text-gray-400 text-[11px] font-sans font-light italic uppercase tracking-widest">{spec}</span>
                        </div>
                     ))}
                  </div>
               </div>

               {/* Mistakes */}
               <div className={`p-12 lg:p-16 bg-[#1B2D33] border border-red-500/20 rounded-[4rem] group hover:border-red-500 transition-all duration-700 shadow-shadow-big ${section5Visible ? 'animate-fade-in-right animation-delay-300' : 'opacity-0'}`}>
                  <h3 className="text-red-500 text-[10px] uppercase font-black tracking-[0.4em] mb-12 italic border-b border-red-500/10 pb-4 italic">Common Fatal Errors</h3>
                  <div className="space-y-6">
                     {[ "Missing documents", "Incorrect indexing", "Poor organization", "Duplicate or irrelevant files" ].map((error, i) => (
                        <div key={i} className="flex items-center justify-between p-4 bg-red-500/5 border border-red-500/10 rounded-2xl group-hover:bg-red-500/10 transition-all duration-500">
                           <span className="text-gray-400 text-[10px] md:text-xs font-sans font-light italic uppercase tracking-widest group-hover:text-red-100 transition-all">{error}</span>
                           <AlertCircle size={14} className="text-red-500/40 group-hover:text-red-500 transition-transform group-hover:rotate-45" />
                        </div>
                     ))}
                  </div>
               </div>
            </div>

            {/* 8. OUR PROCESS */}
            <div className="px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto mt-32">
               <div className="flex flex-col md:flex-row gap-1 border-t border-white/10 pt-20">
                  {[ "Review Documents", "Identify Relevant Materials", "Organize & Structure", "Deliver Ready File" ].map((step, i) => (
                     <div key={i} className={`flex-1 p-10 bg-white/[0.01] hover:bg-[#A07A41] transition-all duration-700 border border-white/5 rounded-[3rem] group text-center lg:text-left ${section5Visible ? 'animate-fade-in-up' : 'opacity-0'}`} style={{ animationDelay: `${i * 200}ms` }}>
                        <span className="text-[#A07A41] group-hover:text-black font-black font-serif italic text-3xl opacity-30 group-hover:opacity-100 mb-6 block transition-all">0{i+1}</span>
                        <h4 className="text-white font-serif font-bold h-12 text-xs md:text-sm italic uppercase tracking-tighter group-hover:text-black leading-tight transition-all">{step}</h4>
                     </div>
                  ))}
               </div>
            </div>
        </section>

        {/* 9. DISCLAIMER */}
        <section ref={section6Ref} className="relative py-16 lg:py-32 bg-[#1B2D33] overflow-hidden border-y border-white/5">
           <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className={`p-8 md:p-14 bg-[#2A454E]/20 border border-[#A07A41]/20 rounded-[3rem] text-center backdrop-blur-3xl shadow-big group hover:border-[#A07A41] transition-all duration-700 ${section6Visible ? 'animate-fade-in-up' : 'opacity-0'}`}>
                 <div className="flex items-center justify-center gap-4 mb-6 relative">
                    <Lock size={30} className="text-[#A07A41] opacity-40 group-hover:rotate-12 transition-transform" />
                 </div>
                 <h2 className="text-[#A07A41] text-xs font-serif font-bold mb-4 italic uppercase tracking-[0.3em] font-black underline underline-offset-8">Critical Disclaimer.</h2>
                 <p className="text-gray-400 text-[10px] md:text-xs leading-relaxed italic font-light opacity-80 italic underline decoration-white/5 decoration-dotted underline-offset-4">
                    Our trial bundle preparation service focuses on document organization and presentation. We do not provide legal advice or legal representation. For legal matters, you should consult a qualified solicitor.
                 </p>
              </div>
           </div>
        </section>

        {/* 10. FAQ SECTION */}
        <section className="relative py-24 lg:py-48 bg-[#1B2D33] overflow-hidden border-b border-white/10 shadow-big">
           <div className="px-4 sm:px-6 lg:px-8 max-w-[50rem] mx-auto">
              <div className="text-center mb-24 animate-fade-in-up">
                 <h2 className="text-3xl md:text-5xl font-serif font-bold text-white tracking-tight italic uppercase font-black underline decoration-[#A07A41]/10 underline-offset-[24px] decoration-8">Litigation <br /><span className="italic font-light text-[#A07A41]">Briefing.</span></h2>
              </div>

              <div className="space-y-4">
                 {[
                   { q: "What is the purpose of a trial bundle?", a: "The purpose is to present all relevant Case Law, Pleadings, and Evidence in a structured, paginated, and indexed format so the Judge and all parties can easily refer to documents during the hearing." },
                   { q: "Can poor bundle preparation affect my case?", a: "Absolutely. A disorganized bundle causes delays, frustrates the court, and may even lead to evidence being disregarded if it cannot be found efficiently." },
                   { q: "Do you provide legal advice?", a: "No. We specialize in the administrative and organizational side of trial bundles. All legal strategy and advice should be obtained from a practicing solicitor." }
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

        {/* 11. CALL TO ACTION */}
        <section id="cta" className="relative py-32 lg:py-64 bg-[#1B2D33] overflow-hidden">
           <div className="absolute inset-0 z-0 opacity-[0.2] bg-cover bg-center animate-[ken-burns_15s_linear_infinite]" style={{ backgroundImage: 'url("https://images.unsplash.com/photo-1589829545856-d10d557cf95f?auto=format&fit=crop&q=80")' }}>
              <div className="absolute inset-0 bg-[#1B2D33]/80 backdrop-blur-[2px]"></div>
           </div>
           
           <div className="max-w-[85rem] mx-auto px-4 sm:px-6 lg:px-8 animate-fade-in-up relative z-10 text-center">
              <div className="p-16 md:p-32 bg-white/[0.01] border border-white/10 rounded-[6rem] backdrop-blur-3xl relative overflow-hidden shadow-big group shadow-inner">
                 <div className="absolute top-0 right-0 p-40 opacity-[0.03] scale-[6] rotate-[15deg] transition-all duration-[10s] group-hover:text-[#A07A41] pointer-events-none"><FolderSync size={300} /></div>
                 
                 <h2 className="text-3xl md:text-5xl lg:text-7xl font-serif font-bold text-white mb-10 tracking-tighter leading-none italic uppercase decoration-[#A07A41]/10 underline underline-offset-[36px] decoration-8 hover:decoration-[#A07A41] transition-all duration-1000">Court-Ready <br /><span className="italic font-light text-[#A07A41] lowercase drop-shadow-big">Execution.</span></h2>
                 
                 <p className="text-gray-400 text-[10px] md:text-sm font-sans font-light italic leading-relaxed mb-16 max-w-xl mx-auto opacity-70 italic border-b border-white/5 pb-10">
                    Ensure your case is presented clearly and effectively in court. Contact us today for professional trial bundle preparation support.
                 </p>

                 <div role="button" className="group relative inline-flex items-center justify-center gap-4 px-12 py-5 bg-[#1B2D33] border border-white/10 text-white font-bold tracking-[0.3em] uppercase text-[10px] md:text-[12px] rounded transition-all duration-300 hover:bg-[#A07A41] cursor-pointer shadow-big overflow-hidden hover:scale-110 active:scale-95 shadow-inner">
                    <span className="relative z-10 font-black tracking-widest">Prepare My Trial Bundle</span>
                    <ArrowRight size={16} className="relative z-10 transform group-hover:translate-x-1 transition-transform duration-300" />
                 </div>
              </div>
           </div>
        </section>

      </main>
    </div>
  );
};

export default TrialBundlePreparationPage;
