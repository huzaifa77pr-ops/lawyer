import React, { useEffect, useState, useRef } from 'react';
import { 
  ArrowRight, FileText, Gavel, ShieldCheck, AlertCircle, 
  ChevronDown, Scale, Target, ListChecks, CheckCircle, 
  Layers, Lock, ExternalLink
} from 'lucide-react';

const DraftingPleadingsPage = () => {
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
            <h1>Drafting Pleadings for Legal Matters (UK) – Professional Support</h1>
            <h2>drafting pleadings UK, legal pleadings preparation UK, court document drafting UK</h2>
            <p>Professional support in preparing clear, structured, and well-presented legal pleadings for UK court proceedings.</p>
          </div>

          {/* Background Elements */}
          <div className="absolute inset-0 z-0 opacity-30">
            <div className={`absolute inset-0 bg-[#1B2D33] transition-opacity duration-1000 ${section1Visible ? 'opacity-100' : 'opacity-0'}`}>
              <div className="absolute inset-0 bg-cover bg-center animate-[ken-burns_15s_linear_infinite]" style={{ backgroundImage: 'url("https://images.unsplash.com/photo-1589829545856-d10d557cf95f?auto=format&fit=crop&q=80")' }}></div>
            </div>
            <div className="absolute inset-0 bg-gradient-to-b from-[#1B2D33] via-transparent to-[#1B2D33] z-10"></div>
          </div>

          <div className="absolute right-[10%] top-0 bottom-0 w-px bg-[#A07A41]/20 hidden lg:block z-20">
             <div className="absolute top-[40%] -left-1 w-2 h-2 rounded-full bg-[#A07A41] shadow-[0_0_10px_#A07A41]"></div>
          </div>

          <div className="relative z-20 px-4 sm:px-6 lg:px-8 max-w-[85rem] mx-auto w-full">
            <div className="grid lg:grid-cols-12 gap-16 items-center">
              <div className={`lg:col-span-7 ${section1Visible ? 'animate-fade-in-left' : 'opacity-0'}`}>
                <div className="inline-flex items-center gap-3 mb-8 px-4 py-1.5 bg-white/5 border border-white/10 rounded-full backdrop-blur-3xl shadow-xl">
                  <Gavel size={10} className="text-[#A07A41]" />
                  <span className="text-[#A07A41] uppercase tracking-[0.4em] text-[8px] font-black italic">Judiciary Support UK</span>
                </div>
                
                <h1 className="text-3xl md:text-5xl lg:text-7xl font-serif font-bold text-white leading-[1.05] mb-8 tracking-tighter">
                  Drafting <br />
                  <span className="italic font-light text-[#A07A41]">Pleadings.</span>
                </h1>
                
                <div className="flex gap-8 items-start mb-10 border-l border-[#A07A41]/30 pl-8">
                  <div className="max-w-xl">
                    <p className="text-gray-400 text-xs md:text-sm font-light leading-relaxed mb-6 italic opacity-80">
                      Professional support in preparing clear, structured, and well-presented legal pleadings.
                    </p>
                    <p className="text-gray-500 text-[10px] md:text-xs font-light leading-relaxed">
                      We assist in drafting legal pleadings that clearly outline your case, ensuring your arguments and supporting information are presented in a structured and professional manner.
                    </p>
                  </div>
                </div>

                <div className="flex flex-wrap gap-6 items-center">
                  <a href="#cta" className="px-10 py-5 bg-[#1B2D33] border border-white/10 text-white font-bold tracking-[0.3em] uppercase text-[10px] rounded hover:bg-[#A07A41] transition-all duration-300 shadow-2xl hover:scale-105 active:scale-95 shadow-inner">
                    Get Drafting Support
                  </a>
                  <div className="flex items-center gap-2 text-white/30 text-[8px] font-black uppercase tracking-widest italic border-b border-white/10 pb-0.5">
                    <ShieldCheck size={12} className="text-[#A07A41]" />
                    Evidence Consistency Verified
                  </div>
                </div>
              </div>

              <div className={`lg:col-span-5 hidden lg:block relative ${section1Visible ? 'animate-fade-in-bottom-right animation-delay-300' : 'opacity-0'}`}>
                <div className="relative p-2 bg-white/5 border border-white/10 rounded-[3rem] shadow-shadow-big overflow-hidden group">
                  <img src="https://images.unsplash.com/photo-1505664194779-8beaceb93744?auto=format&fit=crop&q=80" alt="Drafting Pleadings" className="w-full h-[550px] object-cover rounded-[2.5rem] grayscale group-hover:grayscale-0 transition-all duration-[2s] group-hover:scale-105" />
                  <div className="absolute inset-0 bg-[#1B2D33]/40 group-hover:opacity-0 transition-opacity"></div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ——— WHAT ARE PLEADINGS ——— */}
        <section ref={section2Ref} className="relative py-24 bg-white/[0.02] border-y border-white/5 overflow-hidden">
          <div className="relative z-10 px-4 sm:px-6 lg:px-8 max-w-[85rem] mx-auto text-center">
            <div className={`max-w-3xl mx-auto ${section2Visible ? 'animate-fade-in-up' : 'opacity-0'}`}>
              <h2 className="text-[#A07A41] text-[8px] md:text-[9px] uppercase tracking-[0.5em] font-black mb-6 italic">Fundamental Clarity</h2>
              <h3 className="text-2xl md:text-5xl font-serif font-bold text-white tracking-tighter italic uppercase mb-8">What Are Legal <br /><span className="italic font-light text-[#A07A41]">Pleadings?</span></h3>
              <p className="text-gray-300 text-sm md:text-base font-serif italic font-light italic leading-loose opacity-80 border-x-2 border-[#A07A41]/10 px-8">
                Pleadings are formal written documents submitted to a court that set out the parties’ claims, defences, and key facts of a case. These documents form the foundation of legal proceedings.
              </p>
            </div>
          </div>
        </section>

        {/* ——— TYPES OF PLEADINGS ——— */}
        <section ref={section3Ref} className="relative py-24 lg:py-40 bg-[#1B2D33] overflow-hidden">
           <div className="px-4 sm:px-6 lg:px-8 max-w-[85rem] mx-auto">
              <div className="flex flex-col lg:flex-row items-center gap-20">
                 <div className={`lg:w-1/2 ${section3Visible ? 'animate-fade-in-left' : 'opacity-0'}`}>
                    <span className="text-[#A07A41] uppercase tracking-[0.6em] text-[8px] font-black mb-8 block font-serif">Authority Suite</span>
                    <h2 className="text-3xl md:text-6xl font-serif font-bold text-white tracking-tighter leading-none italic uppercase mb-10">
                       Types Of <br /><span className="italic font-light text-[#A07A41]">Pleadings.</span>
                    </h2>
                    <p className="text-gray-500 text-[10px] md:text-xs font-sans font-light italic leading-loose opacity-70 border-l border-[#A07A41] pl-8 mb-12">
                       We provide expert assistance in preparing a wide variety of court-ready documents that build your case's framework.
                    </p>
                    <div className="flex items-center gap-4 p-6 bg-white/[0.03] border border-white/10 rounded-3xl group cursor-pointer hover:bg-[#A07A41] transition-all duration-500">
                       <FileText size={20} className="text-[#A07A41] group-hover:text-black" />
                       <span className="text-white text-[10px] uppercase font-black tracking-widest group-hover:text-black italic">"Foundation of your legal victory"</span>
                    </div>
                 </div>
                 
                 <div className={`lg:w-1/2 grid grid-cols-1 sm:grid-cols-2 gap-6 ${section3Visible ? 'animate-fade-in-right animation-delay-300' : 'opacity-0'}`}>
                    {[
                      { t: "Statements of Case", d: "Defining your primary claims." },
                      { t: "Defence Statements", d: "Responding to allegations." },
                      { t: "Witness Statements", d: "Formal factual testimonies." },
                      { t: "Court Applications", d: "Specific procedural requests." },
                      { t: "Written Submissions", d: "Supporting legal arguments." }
                    ].map((item, i) => (
                       <div key={i} className={`p-8 bg-white/[0.02] border border-white/5 rounded-[2.5rem] hover:bg-[#A07A41] transition-all duration-700 shadow-big group ${i === 4 ? 'sm:col-span-2' : ''}`}>
                          <div className="h-8 w-8 bg-[#A07A41]/10 rounded-full flex items-center justify-center text-[#A07A41] group-hover:bg-black group-hover:text-[#A07A41] mb-6 transition-colors duration-500 shadow-inner"><Layers size={14} /></div>
                          <h4 className="text-white font-serif font-bold text-xs md:text-sm italic uppercase tracking-tighter group-hover:text-black mb-2">{item.t}</h4>
                          <p className="text-gray-600 text-[8px] md:text-[9px] uppercase font-black tracking-widest group-hover:text-black/60 italic leading-tight transition-colors">{item.d}</p>
                       </div>
                    ))}
                 </div>
              </div>
           </div>
        </section>

        {/* ——— WHY PROPER DRAFTING MATTERS ——— */}
        <section ref={section4Ref} className="relative py-24 lg:py-48 bg-[#1B2D33] overflow-hidden border-y border-white/5 bg-white/[0.01]">
           <div className="px-4 sm:px-6 lg:px-8 max-w-[85rem] mx-auto text-center mb-24">
              <span className={`text-[#A07A41] uppercase tracking-[0.8em] text-[8px] font-black mb-8 block font-serif ${section4Visible ? 'animate-fade-in-down' : 'opacity-0'}`}>Critical Warning</span>
              <h2 className={`text-2xl md:text-5xl font-serif font-bold text-white tracking-widest italic uppercase mb-12 ${section4Visible ? 'animate-fade-in-up' : 'opacity-0'}`}>Why Proper Drafting <br /><span className="italic font-light text-[#A07A41]">Is Non-Negotiable.</span></h2>
           </div>

           <div className="px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                { t: "Confusion", d: "Poorly drafted pleadings can create massive confusion about your case facts.", i: AlertCircle },
                { t: "Weakened Arguments", d: "Ambiguous language can accidentally weaken your strongest legal points.", i: ShieldCheck },
                { t: "Court Delays", d: "Errors lead to unnecessary proceedings delays or complications.", i: Scale }
              ].map((item, i) => (
                 <div key={i} className={`group relative p-10 bg-white/[0.02] border border-white/10 rounded-[3rem] hover:bg-black transition-all duration-700 shadow-big text-center overflow-hidden ${section4Visible ? 'animate-fade-in-up' : 'opacity-0'}`} style={{ animationDelay: `${i * 150}ms` }}>
                    <div className="absolute top-0 right-0 p-8 opacity-[0.03] scale-[3] group-hover:text-[#A07A41] transition-transform duration-1000 -rotate-12"><item.i size={60} /></div>
                    <item.i size={24} className="text-[#A07A41] mx-auto mb-8 transition-transform group-hover:scale-110" />
                    <h4 className="text-white font-serif font-bold text-sm md:text-base italic uppercase group-hover:text-[#A07A41] mb-4 transition-colors">{item.t}</h4>
                    <p className="text-gray-500 text-[10px] md:text-xs font-sans font-light italic leading-loose opacity-70 border-t border-white/5 pt-6 group-hover:border-[#A07A41]/20 transition-colors italic leading-relaxed">
                       {item.d}
                    </p>
                 </div>
              ))}
           </div>
           
           <div className={`mt-20 text-center ${section4Visible ? 'animate-fade-in-up animation-delay-600' : 'opacity-0'}`}>
              <p className="text-[#A07A41] italic font-serif text-lg opacity-80 border-b border-[#A07A41]/20 pb-2 inline-block">
                “If your pleadings are unclear, your case looks weak.”
              </p>
           </div>
        </section>

        {/* ——— OUR SERVICES (THE CORE) ——— */}
        <section ref={section5Ref} className="relative py-24 lg:py-40 bg-[#1B2D33] overflow-hidden">
           <div className="px-4 sm:px-6 lg:px-8 max-w-[85rem] mx-auto">
              <div className="grid lg:grid-cols-2 gap-20 items-center">
                 <div className={`relative ${section5Visible ? 'animate-fade-in-left' : 'opacity-0'}`}>
                    <div className="relative z-10 p-2 bg-white/5 border border-white/10 rounded-[3rem] shadow-shadow-big overflow-hidden">
                       <img src="https://images.unsplash.com/photo-1589829085413-56de8ae18c73?auto=format&fit=crop&q=80" alt="Drafting Expertise" className="w-full h-[500px] object-cover rounded-[2.5rem] grayscale" />
                       <div className="absolute inset-0 bg-[#A07A41]/10"></div>
                    </div>
                    <div className="absolute -bottom-10 -left-10 p-10 bg-black border border-white/10 rounded-[3rem] shadow-2xl z-20 hidden md:block animate-pulse">
                       <Lock size={30} className="text-[#A07A41]" />
                    </div>
                 </div>

                 <div className={`${section5Visible ? 'animate-fade-in-right' : 'opacity-0'}`}>
                    <span className="text-[#A07A41] uppercase tracking-[0.6em] text-[8px] font-black mb-8 block font-serif italic">Operational Capability</span>
                    <h2 className="text-3xl md:text-6xl font-serif font-bold text-white tracking-tighter italic uppercase mb-12">
                       Our Drafting <br /><span className="italic font-light text-[#A07A41]">Services.</span>
                    </h2>
                    <div className="space-y-4">
                       {[
                         "Structuring of your legal arguments",
                         "Drafting clear and concise pleadings",
                         "Organizing facts and supporting details",
                         "Ensuring logical flow and consistency",
                         "Reviewing and refining documents"
                       ].map((service, i) => (
                          <div key={i} className="flex gap-6 group items-center p-6 bg-white/[0.03] border border-white/5 rounded-[2rem] hover:bg-[#A07A41] transition-all duration-500 shadow-big">
                             <div className="h-6 w-6 shrink-0 bg-[#A07A41]/10 rounded-full flex items-center justify-center text-[#A07A41] group-hover:bg-black group-hover:text-[#A07A41] transition-colors"><CheckCircle size={12} /></div>
                             <span className="text-gray-400 text-[10px] md:text-xs font-sans font-light italic opacity-80 group-hover:text-black uppercase tracking-widest">{service}</span>
                          </div>
                       ))}
                    </div>
                 </div>
              </div>
           </div>
        </section>

        {/* ——— STRONG PLEADING & PROCESS (MAPPING STYLE) ——— */}
        <section ref={section6Ref} className="relative py-24 lg:py-48 bg-[#1B2D33] overflow-hidden border-y border-white/5 bg-white/[0.01]">
            <div className="px-4 sm:px-6 lg:px-8 max-w-[85rem] mx-auto text-center mb-24">
              <h2 className={`text-2xl md:text-5xl font-serif font-bold text-white tracking-widest italic uppercase mb-12 ${section6Visible ? 'animate-fade-in-up' : 'opacity-0'}`}>Strength <br /><span className="italic font-light text-[#A07A41]">In Accuracy.</span></h2>
            </div>

            <div className="px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 relative z-10">
               {/* What Makes a Strong Pleading */}
               <div className={`p-10 lg:p-16 bg-white/[0.02] border border-white/5 rounded-[4rem] hover:bg-white/[0.04] transition-all duration-700 ${section6Visible ? 'animate-fade-in-left' : 'opacity-0'}`}>
                  <h3 className="text-[#A07A41] text-lg font-serif font-bold mb-10 italic uppercase tracking-tighter">Effective Pleading Metrics</h3>
                  <div className="grid grid-cols-1 gap-4">
                     {[ "Clear and precise language", "Logical structure of arguments", "Consistency with evidence", "Proper formatting & presentation", "Focus on relevant facts" ].map((spec, i) => (
                        <div key={i} className="flex items-center gap-4 text-gray-400 text-[10px] md:text-xs font-sans font-light italic border-b border-white/5 pb-4 opacity-70 hover:opacity-100 transition-opacity">
                           <Target size={14} className="text-[#A07A41]" />
                           {spec}
                        </div>
                     ))}
                  </div>
               </div>

               {/* Our Process */}
               <div className={`p-10 lg:p-16 bg-[#1B2D33] border border-[#A07A41]/20 rounded-[4rem] group hover:border-[#A07A41] transition-all duration-700 ${section6Visible ? 'animate-fade-in-right animation-delay-300' : 'opacity-0'}`}>
                  <h3 className="text-white text-lg font-serif font-bold mb-10 italic uppercase tracking-tighter">Our Delivery Logic</h3>
                  <div className="space-y-8 relative">
                     <div className="absolute left-[15px] top-6 bottom-6 w-px bg-white/10 group-hover:bg-[#A07A41]/30 transition-colors"></div>
                     {[ "Understand case details", "Review relevant documents", "Draft or refine pleadings", "Deliver structured documents" ].map((step, i) => (
                        <div key={i} className="flex items-center gap-8 relative z-10 transition-transform hover:translate-x-3 duration-500">
                           <div className="h-8 w-8 bg-black border border-white/10 rounded-full flex items-center justify-center text-[#A07A41] font-serif font-bold text-xs shadow-big group-hover:border-[#A07A41]">{i+1}</div>
                           <span className="text-gray-400 text-[10px] md:text-xs font-sans font-light italic uppercase tracking-widest">{step}</span>
                        </div>
                     ))}
                  </div>
               </div>
            </div>
        </section>

        {/* ——— DISCLAIMER ——— */}
        <section ref={section7Ref} className="relative py-16 lg:py-32 bg-[#1B2D33] overflow-hidden border-b border-white/5 shadow-inner">
           <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className={`p-8 md:p-14 bg-[#A07A41]/5 border border-[#A07A41]/30 rounded-[3rem] text-center backdrop-blur-3xl shadow-big group hover:border-[#A07A41] transition-all duration-700 ${section7Visible ? 'animate-fade-in-up' : 'opacity-0'}`}>
                 <AlertCircle size={30} className="text-[#A07A41] mx-auto mb-6 opacity-60 transition-transform group-hover:rotate-12" />
                 <h2 className="text-[#A07A41] text-xs font-serif font-bold mb-4 italic uppercase tracking-[0.3em] font-black">Legal Disclaimer.</h2>
                 <p className="text-gray-400 text-[10px] md:text-xs leading-relaxed italic font-light opacity-80 italic underline decoration-white/5 decoration-dotted underline-offset-4">
                    Our pleading drafting service is limited to document preparation and support. It does not constitute legal representation or formal legal advice. For court proceedings, you should seek advice from a qualified solicitor or legal professional.
                 </p>
              </div>
           </div>
        </section>

        {/* ——— FAQ SECTION (CENTERED) ——— */}
        <section className="relative py-24 lg:py-48 bg-[#1B2D33] overflow-hidden border-b border-white/10 shadow-big">
           <div className="px-4 sm:px-6 lg:px-8 max-w-[50rem] mx-auto">
              <div className="text-center mb-24 animate-fade-in-up">
                 <h2 className="text-3xl md:text-5xl font-serif font-bold text-white tracking-tight italic uppercase font-black underline decoration-[#A07A41]/10 underline-offset-[24px] decoration-8">Pleading <br /><span className="italic font-light text-[#A07A41]">Briefing.</span></h2>
              </div>

              <div className="space-y-4">
                 {[
                   { q: "Can you represent me in court?", a: "No, we provide drafting and documentation support only. We are not a law firm and cannot provide legal representation." },
                   { q: "Are pleadings required in all cases?", a: "Yes, in most formal legal proceedings, pleadings are mandatory to establish the claims and defences once a case has been filed." },
                   { q: "How long does drafting take?", a: "It depends on the complexity of your case, but we typically require 3–5 business days for a complete and thorough draft." }
                 ].map((faq, index) => (
                    <div key={index} className="border border-[#A07A41]/10 px-6 md:px-8 rounded-[3rem] bg-white/[0.03] overflow-hidden transition-all duration-700 shadow-xl">
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

        {/* ——— CTA SECTION (THE FINISH) ——— */}
        <section id="cta" className="relative py-32 lg:py-64 bg-[#1B2D33] overflow-hidden">
           <div className="absolute inset-0 z-0 opacity-[0.2] bg-cover bg-center animate-[ken-burns_15s_linear_infinite]" style={{ backgroundImage: 'url("https://images.unsplash.com/photo-1544027993-37dbfe43562a?auto=format&fit=crop&q=80")' }}>
              <div className="absolute inset-0 bg-[#1B2D33]/80 backdrop-blur-[2px]"></div>
           </div>
           
           <div className="max-w-[85rem] mx-auto px-4 sm:px-6 lg:px-8 animate-fade-in-up relative z-10 text-center">
              <div className="p-16 md:p-32 bg-white/[0.01] border border-white/10 rounded-[6rem] backdrop-blur-3xl relative overflow-hidden shadow-big group shadow-inner">
                 <div className="absolute top-0 right-0 p-40 opacity-[0.03] scale-[6] rotate-[15deg] transition-all duration-[10s] group-hover:text-[#A07A41] pointer-events-none"><Gavel size={300} /></div>
                 
                 <h2 className="text-3xl md:text-5xl lg:text-7xl font-serif font-bold text-white mb-10 tracking-tighter leading-none italic uppercase decoration-[#A07A41]/10 underline underline-offset-[36px] decoration-8 hover:decoration-[#A07A41] transition-all duration-1000">Drafting <br /><span className="italic font-light text-[#A07A41] lowercase drop-shadow-big">Excellence.</span></h2>
                 
                 <p className="text-gray-400 text-[10px] md:text-sm font-sans font-light italic leading-relaxed mb-16 max-w-xl mx-auto opacity-70 italic border-b border-white/5 pb-10 underline decoration-white/5 decoration-dotted underline-offset-8">
                    Ensure your case is presented clearly and professionally. Contact us today for structured and reliable pleading drafting assistance.
                 </p>

                 <div role="button" className="group relative inline-flex items-center justify-center gap-4 px-12 py-5 bg-[#1B2D33] border border-white/10 text-white font-bold tracking-[0.3em] uppercase text-[10px] md:text-[12px] rounded transition-all duration-300 hover:bg-[#A07A41] cursor-pointer shadow-big overflow-hidden hover:scale-110 active:scale-95 shadow-inner">
                    <span className="relative z-10 font-black tracking-widest">Get Drafting Support</span>
                    <ArrowRight size={16} className="relative z-10 transform group-hover:translate-x-1 transition-transform duration-300" />
                 </div>
              </div>
           </div>
        </section>

      </main>
    </div>
  );
};

export default DraftingPleadingsPage;
