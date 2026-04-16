import React, { useEffect, useState, useRef } from 'react';
import { 
  ArrowRight, FileText, Users, ShieldCheck, AlertCircle, 
  ChevronDown, Scale, Zap, CheckCircle2, Search, 
  MessageSquare, BookOpen, Lock, Fingerprint
} from 'lucide-react';

const WitnessStatementDraftingPage = () => {
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
            <h1>Witness Statement Drafting (UK) – Professional Legal Support</h1>
            <h2>witness statement drafting UK, legal witness statement UK, statement drafting service UK</h2>
            <p>Clear, accurate, and professionally structured witness statements for legal and immigration matters in the UK.</p>
          </div>

          {/* Background Elements */}
          <div className="absolute inset-0 z-0">
            <div className={`absolute inset-0 bg-[#1B2D33] transition-opacity duration-1000 ${section1Visible ? 'opacity-40' : 'opacity-0'}`}>
              <div className="absolute inset-0 bg-cover bg-center opacity-30 animate-[ken-burns_12s_linear_infinite]" style={{ backgroundImage: 'url("https://images.unsplash.com/photo-1589829545856-d10d557cf95f?auto=format&fit=crop&q=80")' }}></div>
            </div>
            <div className="absolute inset-0 bg-gradient-to-b from-[#1B2D33] via-transparent to-[#1B2D33] z-10"></div>
          </div>

          <div className="absolute right-[10%] top-0 bottom-0 w-px bg-[#A07A41]/20 hidden lg:block z-20"></div>

          <div className="relative z-20 px-4 sm:px-6 lg:px-8 max-w-[85rem] mx-auto w-full">
            <div className="grid lg:grid-cols-12 gap-16 items-center">
              <div className={`lg:col-span-8 ${section1Visible ? 'animate-fade-in-left' : 'opacity-0'}`}>
                <div className="inline-flex items-center gap-3 mb-8 px-4 py-1.5 bg-white/5 border border-white/10 rounded-full backdrop-blur-3xl shadow-xl">
                  <Fingerprint size={10} className="text-[#A07A41]" />
                  <span className="text-[#A07A41] uppercase tracking-[0.4em] text-[8px] font-black italic">Verification Protocol UK</span>
                </div>
                
                <h1 className="text-3xl md:text-5xl lg:text-7xl font-serif font-bold text-white leading-[1.05] mb-8 tracking-tighter">
                  Witness Statement <br />
                  <span className="italic font-light text-[#A07A41]">Drafting.</span>
                </h1>
                
                <div className="flex gap-8 items-start mb-10 border-l border-[#A07A41]/30 pl-8">
                  <div className="max-w-xl">
                    <p className="text-gray-400 text-xs md:text-sm font-light leading-relaxed mb-6 italic opacity-80">
                      Clear, accurate, and professionally structured witness statements for legal and immigration matters.
                    </p>
                    <p className="text-gray-500 text-[10px] md:text-xs font-light leading-relaxed">
                      We assist in drafting witness statements that present facts clearly and consistently, helping ensure your statement is credible and easy to understand.
                    </p>
                  </div>
                </div>

                <div className="flex flex-wrap gap-6 items-center">
                  <a href="#cta" className="px-10 py-5 bg-[#1B2D33] border border-white/10 text-white font-bold tracking-[0.3em] uppercase text-[10px] rounded hover:bg-[#A07A41] transition-all duration-300 shadow-2xl hover:scale-105 active:scale-95 shadow-inner">
                    Draft My Statement
                  </a>
                  <div className="flex items-center gap-2 text-white/30 text-[8px] font-black uppercase tracking-widest italic border-b border-white/10 pb-0.5">
                    <ShieldCheck size={12} className="text-[#A07A41]" />
                    Factual Credibility Focused
                  </div>
                </div>
              </div>

              <div className={`lg:col-span-4 hidden lg:block relative ${section1Visible ? 'animate-fade-in-bottom-right animation-delay-300' : 'opacity-0'}`}>
                <div className="relative p-2 bg-white/5 border border-white/10 rounded-[3rem] shadow-shadow-big overflow-hidden group">
                  <img src="https://images.unsplash.com/photo-1585829365295-ab7cd400c167?auto=format&fit=crop&q=80" alt="Drafting Testimony" className="w-full h-[500px] object-cover rounded-[2.5rem] grayscale group-hover:grayscale-0 transition-all duration-[2s] group-hover:scale-105" />
                  <div className="absolute inset-0 bg-[#1B2D33]/40 group-hover:bg-transparent transition-all duration-1000"></div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 2. WHAT IS A WITNESS STATEMENT? & 3. WHEN NEEDED */}
        <section ref={section2Ref} className="relative py-24 bg-white/[0.02] border-y border-white/5 overflow-hidden">
           <div className="px-4 sm:px-6 lg:px-8 max-w-[85rem] mx-auto text-center mb-20 animate-fade-in-up">
              <span className="text-[#A07A41] uppercase tracking-[0.5em] text-[8px] font-black italic">Context Awareness</span>
              <h2 className="text-2xl md:text-5xl font-serif font-bold text-white tracking-widest italic uppercase mb-16">Definitions <br /><span className="italic font-light text-[#A07A41]">& Utility.</span></h2>
           </div>

           <div className="px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
              <div className={`lg:col-span-12 ${section2Visible ? 'animate-fade-in-up' : 'opacity-0'}`}>
                 <div className="p-12 bg-white/[0.02] border border-white/5 rounded-[4rem] relative overflow-hidden group hover:border-[#A07A41]/20 transition-all duration-700">
                    <div className="grid md:grid-cols-2 gap-16">
                       <div>
                          <h4 className="text-[#A07A41] font-serif font-bold text-lg italic uppercase mb-6 underline decoration-[#A07A41]/10">What is a Witness Statement?</h4>
                          <p className="text-gray-300 text-sm md:text-base font-serif italic italic font-light italic leading-loose opacity-80 border-l border-[#A07A41]/30 pl-8">
                             A witness statement is a written account of facts based on a person’s knowledge or experience. It is used as evidence in legal or immigration matters and must be accurate, clear, and consistent.
                          </p>
                       </div>
                       <div>
                          <h4 className="text-[#A07A41] font-serif font-bold text-lg italic uppercase mb-6 underline decoration-[#A07A41]/10">When Are They Required?</h4>
                          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                             {[ "Court proceedings", "Immigration & visa cases", "Appeal cases", "Family or civil disputes", "Factual evidence situations" ].map((tag, i) => (
                                <div key={i} className="flex items-center gap-3 text-gray-500 text-[10px] md:text-[11px] uppercase tracking-widest font-black italic border-b border-white/5 pb-2 opacity-70 hover:opacity-100 transition-opacity">
                                   <div className="w-1.5 h-1.5 rounded-full bg-[#A07A41]"></div>
                                   {tag}
                                </div>
                             ))}
                          </div>
                       </div>
                    </div>
                 </div>
              </div>
           </div>
        </section>

        {/* 4. WHY PROPER DRAFTING (THE CRITICAL RISK) */}
        <section ref={section3Ref} className="relative py-24 lg:py-48 bg-[#1B2D33] overflow-hidden">
           <div className="px-4 sm:px-6 lg:px-8 max-w-[85rem] mx-auto">
              <div className="flex flex-col lg:flex-row items-center gap-20">
                 <div className={`lg:w-1/2 ${section3Visible ? 'animate-fade-in-left' : 'opacity-0'}`}>
                    <h2 className="text-[#A07A41] text-[8px] md:text-[9px] uppercase tracking-[0.6em] font-black mb-10 italic">Risk Mitigation Suite</h2>
                    <h3 className="text-2xl md:text-5xl font-serif font-bold text-white tracking-tighter italic uppercase mb-8">Why Statement <br /><span className="italic font-light text-[#A07A41]">Drafting Matters?</span></h3>
                    <p className="text-gray-400 text-xs md:text-sm font-sans font-light leading-loose mb-10 opacity-70 italic border-l border-[#A07A41] pl-8">
                       A poorly written statement can create confusion, reduce credibility, or contradict other evidence, potentially damaging your entire case.
                    </p>
                    <div className="p-8 bg-black border border-white/10 rounded-[2.5rem] shadow-shadow-big">
                       <p className="text-[#A07A41] font-serif italic text-lg leading-relaxed">
                          “If your statement is unclear or inconsistent, it can damage your case.”
                       </p>
                    </div>
                 </div>
                 <div className={`lg:w-1/2 grid grid-cols-1 gap-6 ${section3Visible ? 'animate-fade-in-right animation-delay-300' : 'opacity-0'}`}>
                    {[
                      { t: "Confusion", d: "Leading to avoidable misunderstandings.", i: AlertCircle },
                      { t: "Reduced Credibility", d: "When facts aren't presented professionally.", i: ShieldCheck },
                      { t: "Contradictions", d: "Accidental clashes with other evidence.", i: Scale },
                      { t: "Weakening the Case", d: "Ensuring your strongest points aren't lost.", i: Zap }
                    ].map((item, i) => (
                       <div key={i} className="flex gap-8 group items-center p-8 bg-white/[0.02] border border-white/5 rounded-[2.5rem] hover:bg-[#A07A41] transition-all duration-700 shadow-big">
                          <item.i size={20} className="text-[#A07A41] group-hover:text-black shrink-0 transition-transform group-hover:rotate-12" />
                          <div>
                             <h4 className="text-white font-serif font-bold text-xs md:text-sm italic uppercase tracking-tighter group-hover:text-black mb-1 transition-colors">{item.t}</h4>
                             <p className="text-gray-600 text-[8px] md:text-[10px] uppercase font-black tracking-widest group-hover:text-black/60 italic leading-tight transition-colors">{item.d}</p>
                          </div>
                       </div>
                    ))}
                 </div>
              </div>
           </div>
        </section>

        {/* 5. WHAT MAKES A STRONG STATEMENT & 6. OUR SERVICES (CORE) */}
        <section ref={section4Ref} className="relative py-24 lg:py-48 bg-[#1B2D33] overflow-hidden border-y border-white/5 bg-white/[0.01]">
            <div className="px-4 sm:px-6 lg:px-8 max-w-[85rem] mx-auto text-center mb-24">
               <h2 className={`text-2xl md:text-5xl font-serif font-bold text-white tracking-widest italic uppercase mb-12 ${section4Visible ? 'animate-fade-in-up' : 'opacity-0'}`}>Our <span className="italic font-light text-[#A07A41]">Drafting Pipeline.</span></h2>
            </div>
            
            <div className="px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12">
               {/* Metrics */}
               <div className={`p-12 lg:p-16 bg-white/[0.02] border border-white/5 rounded-[4rem] hover:bg-white/[0.04] transition-all duration-1000 ${section4Visible ? 'animate-fade-in-left' : 'opacity-0'}`}>
                  <h3 className="text-[#A07A41] text-[10px] uppercase font-black tracking-[0.4em] mb-12 italic border-b border-[#A07A41]/20 pb-4">Professional Metrics</h3>
                  <div className="space-y-8">
                     {[ "Clear and factual content", "Logical structure and sequence", "Document consistency", "Simple and precise language", "Focus on relevant details" ].map((spec, i) => (
                        <div key={i} className="flex items-center gap-6 group">
                           <div className="h-6 w-6 bg-[#A07A41]/10 rounded-full flex items-center justify-center text-[#A07A41] group-hover:bg-[#A07A41] group-hover:text-black transition-all duration-500 shadow-inner"><CheckCircle2 size={12} /></div>
                           <span className="text-gray-400 text-[10px] md:text-xs font-sans font-light italic uppercase tracking-widest opacity-80 group-hover:opacity-100 group-hover:text-white transition-all">{spec}</span>
                        </div>
                     ))}
                  </div>
               </div>

               {/* Services */}
               <div className={`p-12 lg:p-16 bg-[#1B2D33] border border-[#A07A41]/20 rounded-[4rem] shadow-shadow-big relative group hover:border-[#A07A41] transition-all duration-700 ${section4Visible ? 'animate-fade-in-right animation-delay-300' : 'opacity-0'}`}>
                  <div className="absolute top-0 right-0 p-12 opacity-[0.03] scale-[4] group-hover:text-[#A07A41] transition-all pointer-events-none"><MessageSquare size={60} /></div>
                  <h3 className="text-white text-[10px] uppercase font-black tracking-[0.4em] mb-12 italic border-b border-white/10 pb-4">Services Provided</h3>
                  <div className="space-y-6">
                     {[
                       { t: "Logical Structuring", d: "Presenting facts clearly and professionally." },
                       { t: "Chronological Order", d: "Organizing your case history in sequence." },
                       { t: "Consistency Audit", d: "Ensuring alignment with supporting docs." },
                       { t: "Professional Drafting", d: "Readable, accurate, and evidence-focused." },
                       { t: "Iterative Refinement", d: "Reviewing and polishing for credibility." }
                     ].map((service, i) => (
                        <div key={i} className="group p-6 bg-white/[0.02] border border-white/5 rounded-3xl hover:bg-black transition-all duration-500 shadow-big flex justify-between items-center px-8">
                           <div>
                              <h4 className="text-white font-serif font-bold text-xs md:text-sm italic uppercase tracking-tighter group-hover:text-[#A07A41] transition-colors">{service.t}</h4>
                              <p className="text-gray-600 text-[8px] uppercase font-black tracking-widest group-hover:text-white/60 transition-colors italic">{service.d}</p>
                           </div>
                           <ArrowRight size={14} className="text-[#A07A41] opacity-0 group-hover:opacity-100 transition-opacity translate-x-4 group-hover:translate-x-0 group-hover:duration-500" />
                        </div>
                     ))}
                  </div>
               </div>
            </div>
        </section>

        {/* 7. COMMON MISTAKES & 8. PROCESS */}
        <section ref={section5Ref} className="relative py-24 lg:py-48 bg-[#1B2D33] overflow-hidden">
           <div className="px-4 sm:px-6 lg:px-8 max-w-[85rem] mx-auto grid lg:grid-cols-2 gap-20">
              {/* Mistakes */}
              <div className={`${section5Visible ? 'animate-fade-in-left' : 'opacity-0'}`}>
                 <h2 className="text-[#A07A41] text-[8px] md:text-[9px] uppercase tracking-[0.6em] font-black mb-10 italic">Common Failure Triggers</h2>
                 <h3 className="text-2xl md:text-4xl font-serif font-bold text-white tracking-tighter italic uppercase mb-12">Mistakes We <br /><span className="italic font-light text-[#A07A41]">Help Avoid.</span></h3>
                 <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    {[
                      { t: "Irrelevant Info", d: "Distracting from central facts." },
                      { t: "Inconsistency", d: "Contradictions that kill trust." },
                      { t: "Poor Structure", d: "Confusing chronological flows." },
                      { t: "High Emotion", d: "Subjectivity that obscures truth." }
                    ].map((m, i) => (
                       <div key={i} className="p-8 bg-white/[0.02] border border-white/10 rounded-[2.5rem] hover:bg-red-500/10 transition-all duration-700 shadow-big group text-center">
                          <AlertCircle size={20} className="text-red-500/40 group-hover:text-red-500 mx-auto mb-6 transition-transform group-hover:rotate-12" />
                          <h4 className="text-white font-serif font-bold text-xs uppercase group-hover:text-red-200 mb-2 italic tracking-tighter">{m.t}</h4>
                          <p className="text-gray-500 text-[8px] md:text-[9px] uppercase font-black tracking-widest group-hover:text-red-100/60 italic leading-tight">{m.d}</p>
                       </div>
                    ))}
                 </div>
              </div>

              {/* Process */}
              <div className={`${section5Visible ? 'animate-fade-in-right animation-delay-300' : 'opacity-0'}`}>
                 <h2 className="text-[#A07A41] text-[8px] md:text-[9px] uppercase tracking-[0.6em] font-black mb-10 italic">Operational Logic</h2>
                 <h3 className="text-2xl md:text-4xl font-serif font-bold text-white tracking-tighter italic uppercase mb-12">Our <br /><span className="italic font-light text-[#A07A41]">Process.</span></h3>
                 <div className="space-y-4">
                    {[ "Understand your situation", "Review your documents", "Draft your witness statement", "Final review and delivery" ].map((step, i) => (
                       <div key={i} className="flex items-center gap-8 p-10 bg-white/[0.02] border border-white/5 rounded-[3rem] hover:bg-black transition-all duration-500 shadow-shadow-big group overflow-hidden relative">
                          <div className="absolute top-0 right-0 p-8 opacity-[0.05] scale-[4] group-hover:text-[#A07A41] transition-all pointer-events-none italic font-serif font-black">{i+1}</div>
                          <div className="h-10 w-10 bg-[#A07A41]/10 rounded-full flex items-center justify-center text-[#A07A41] group-hover:bg-[#A07A41] group-hover:text-black transition-colors shadow-inner font-serif font-bold text-sm">{i+1}</div>
                          <span className="text-gray-400 text-[10px] md:text-xs font-sans font-light italic uppercase tracking-[0.2em] group-hover:text-white transition-colors">{step}</span>
                       </div>
                    ))}
                 </div>
              </div>
           </div>
        </section>

        {/* 9. DISCLAIMER (CRITICAL) */}
        <section ref={section6Ref} className="relative py-16 lg:py-32 bg-[#1B2D33] overflow-hidden border-y border-white/5">
           <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className={`p-8 md:p-14 bg-[#2A454E]/20 border border-[#A07A41]/20 rounded-[3rem] text-center backdrop-blur-3xl shadow-big group hover:border-[#A07A41] transition-all duration-700 ${section6Visible ? 'animate-fade-in-up' : 'opacity-0'}`}>
                 <div className="flex items-center justify-center gap-4 mb-6 relative">
                    <Lock size={30} className="text-[#A07A41] opacity-40 group-hover:rotate-12 transition-transform" />
                 </div>
                 <h2 className="text-[#A07A41] text-xs font-serif font-bold mb-4 italic uppercase tracking-[0.3em] font-black">Legal Disclaimer.</h2>
                 <p className="text-gray-400 text-[10px] md:text-xs leading-relaxed italic font-light opacity-80 italic underline decoration-white/5 decoration-dotted underline-offset-4">
                    Our witness statement drafting service is limited to document preparation and support. It does not constitute legal advice or legal representation. For legal proceedings, you should consult a qualified solicitor.
                 </p>
              </div>
           </div>
        </section>

        {/* 10. FAQ SECTION */}
        <section className="relative py-24 lg:py-48 bg-[#1B2D33] overflow-hidden border-b border-white/10 shadow-big">
           <div className="px-4 sm:px-6 lg:px-8 max-w-[50rem] mx-auto">
              <div className="text-center mb-24 animate-fade-in-up">
                 <h2 className="text-3xl md:text-5xl font-serif font-bold text-white tracking-tight italic uppercase font-black underline decoration-[#A07A41]/10 underline-offset-[24px] decoration-8">Credibility <br /><span className="italic font-light text-[#A07A41]">Briefing.</span></h2>
              </div>

              <div className="space-y-4">
                 {[
                   { q: "Can I write my own witness statement?", a: "Yes, you can, but common mistakes in structure, clarity, or consistency can affect your credibility. Professional support ensures your statement is clear and factual." },
                   { q: "Is a witness statement legally binding?", a: "It is considered evidence submitted to a court or authority and must be truthful and accurate to the best of your knowledge." },
                   { q: "How long does drafting take?", a: "Typically, it takes 3–5 business days, depending on the complexity of the circumstances and the amount of supporting documentation to review." }
                 ].map((faq, index) => (
                    <div key={index} className="border border-[#A07A41]/10 px-6 md:px-8 rounded-[3rem] bg-white/[0.03] overflow-hidden transition-all duration-1000 animate-fade-in-up md:opacity-100 shadow-xl shadow-inner">
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
           <div className="absolute inset-0 z-0 opacity-[0.2] bg-cover bg-center animate-[ken-burns_12s_linear_infinite]" style={{ backgroundImage: 'url("https://images.unsplash.com/photo-1589829545856-d10d557cf95f?auto=format&fit=crop&q=80")' }}>
              <div className="absolute inset-0 bg-[#1B2D33]/80 backdrop-blur-[2px]"></div>
           </div>
           
           <div className="max-w-[85rem] mx-auto px-4 sm:px-6 lg:px-8 animate-fade-in-up relative z-10 text-center">
              <div className="p-16 md:p-32 bg-white/[0.01] border border-white/10 rounded-[6rem] backdrop-blur-3xl relative overflow-hidden shadow-big group shadow-inner">
                 <div className="absolute top-0 right-0 p-40 opacity-[0.03] scale-[6] rotate-[15deg] transition-all duration-[10s] group-hover:text-[#A07A41] pointer-events-none"><Fingerprint size={300} /></div>
                 
                 <h2 className="text-3xl md:text-5xl lg:text-7xl font-serif font-bold text-white mb-10 tracking-tighter leading-none italic uppercase decoration-[#A07A41]/10 underline underline-offset-[36px] decoration-8">Credible <br /><span className="italic font-light text-[#A07A41] lowercase drop-shadow-big">Testimony.</span></h2>
                 
                 <p className="text-gray-400 text-[10px] md:text-sm font-sans font-light italic leading-relaxed mb-16 max-w-xl mx-auto opacity-70 italic border-b border-white/5 pb-10">
                    Ensure your statement is clear, accurate, and credible. Contact us today for professional drafting support.
                 </p>

                 <div role="button" className="group relative inline-flex items-center justify-center gap-4 px-12 py-5 bg-[#1B2D33] border border-white/10 text-white font-bold tracking-[0.3em] uppercase text-[10px] md:text-[12px] rounded transition-all duration-300 hover:bg-[#A07A41] cursor-pointer shadow-big overflow-hidden hover:scale-110 active:scale-95 shadow-inner">
                    <span className="relative z-10 font-black tracking-widest">Draft My Statement</span>
                    <ArrowRight size={16} className="relative z-10 transform group-hover:translate-x-1 transition-transform duration-300" />
                 </div>
              </div>
           </div>
        </section>

      </main>
    </div>
  );
};

export default WitnessStatementDraftingPage;
