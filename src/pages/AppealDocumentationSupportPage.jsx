import React, { useEffect, useState } from 'react';
import { 
  Gavel, Scale, FileWarning, ShieldAlert, CheckCircle, Clock, 
  ArrowRight, Mail, Phone, ChevronDown, Info, FileText, 
  LayoutGrid, Target, ShieldCheck, Lock
} from 'lucide-react';

const AppealDocumentationSupportPage = () => {
  const [activeFaq, setActiveFaq] = useState(null);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-[#1B2D33] flex flex-col overflow-x-hidden text-white font-sans selection:bg-[#A07A41] selection:text-black">
      <main className="flex-grow">
        
        {/* 1. Hero Section - THE VERTICAL BLADE (TOP-RIGHT) */}
        <section className="relative min-h-[85vh] flex items-center pt-32 pb-16 overflow-hidden bg-[#1B2D33]">
          <div 
             className="absolute inset-0 z-0 opacity-20 bg-cover bg-center transition-transform duration-[12s] scale-110 animate-[ken-burns_12s_linear_infinite]"
             style={{ backgroundImage: 'url("/den.jpg")' }}
          >
             <div className="absolute inset-0 bg-[#1B2D33]/70 backdrop-blur-[1px]"></div>
          </div>
          
          <div className="absolute right-[10%] top-0 bottom-0 w-px bg-[#A07A41]/20 hidden lg:block z-20 shadow-[0_0_15px_rgba(160,122,65,0.3)]">
             <div className="absolute top-[30%] -left-[1px] w-[3px] h-[3px] rounded-full bg-[#A07A41] animate-ping"></div>
          </div>

          <div className="relative z-10 px-4 sm:px-6 lg:px-8 max-w-[85rem] mx-auto w-full">
             <div className="flex flex-col lg:flex-row items-center gap-20">
                <div className="lg:w-3/5 animate-fade-in-top-right">
                   <div className="inline-flex items-center gap-3 mb-8 px-4 py-1.5 bg-white/5 border border-white/10 rounded-full backdrop-blur-3xl shadow-xl">
                      <Gavel size={10} className="text-[#A07A41]" />
                      <span className="text-[#A07A41] uppercase tracking-[0.4em] text-[8px] font-black italic">Recovery Suite UK</span>
                   </div>
                   
                   <h1 className="text-3xl md:text-5xl lg:text-6xl font-serif font-bold text-white leading-[1.1] mb-8 tracking-tighter decoration-[#A07A41]/10 underline underline-offset-[20px] decoration-4">
                      Appeal <br />
                      <span className="italic font-light text-[#A07A41] lowercase">Documentation.</span>
                   </h1>
                   
                   <p className="text-gray-400 text-xs md:text-sm font-sans font-light leading-relaxed mb-10 max-w-lg italic opacity-80 border-l border-[#A07A41]/30 pl-8">
                      Refusal is not the final outcome. We help you organize and prepare professional documentation to effectively support your immigration and legal appeals.
                   </p>

                   <div className="flex flex-wrap gap-6 items-center">
                      <div role="button" className="group relative inline-flex items-center justify-center gap-3 px-10 py-5 bg-[#1B2D33] border border-white/10 text-white font-bold tracking-[0.3em] uppercase text-[10px] rounded transition-all duration-300 hover:bg-[#A07A41] cursor-pointer shadow-2xl overflow-hidden hover:scale-105 active:scale-95 shadow-inner">
                         <span className="relative z-10 font-bold">Start Appeal Support</span>
                         <ArrowRight size={14} className="relative z-10 transform group-hover:translate-x-1 transition-transform duration-300" />
                      </div>
                      <div className="flex items-center gap-2 text-white/30 text-[8px] font-black uppercase tracking-widest italic border-b border-white/10 pb-0.5">
                         <ShieldCheck size={12} className="text-[#A07A41]" />
                         Professional Advocacy
                      </div>
                   </div>
                </div>

                <div className="lg:w-2/5 relative animate-fade-in-bottom-left">
                   <div className="relative p-1.5 bg-white/5 border border-white/10 rounded-[2.5rem] shadow-shadow-big overflow-hidden group backdrop-blur-sm">
                      <img src="/den1.jpg" alt="Appeal Support" className="w-full h-[400px] object-cover rounded-[2rem] grayscale group-hover:grayscale-0 transition-all duration-[2s] group-hover:scale-105" />
                      <div className="absolute inset-0 bg-[#1B2D33]/30 group-hover:bg-transparent transition-all duration-700"></div>
                      <div className="absolute top-8 right-8 p-3 bg-black/60 backdrop-blur-3xl border border-[#A07A41]/20 rounded-full text-[#A07A41] shadow-2xl">
                         <Scale size={20} />
                      </div>
                   </div>
                </div>
             </div>
          </div>
        </section>

        {/* 2. Understanding Appeals - THE DEFINITION BANNER (TOP-DOWN) */}
        <section className="relative py-16 bg-white/[0.02] border-y border-white/5 overflow-hidden animate-fade-in-down">
           <div className="max-w-4xl mx-auto px-4 text-center">
              <h2 className="text-[#A07A41] text-[8px] md:text-[9px] uppercase tracking-[0.5em] font-black mb-6 italic">Context Awareness</h2>
              <p className="text-gray-300 text-sm md:text-base font-serif italic italic font-light italic leading-loose opacity-80 border-x-2 border-[#A07A41]/10 px-8 max-w-2xl mx-auto">
                 An appeal is a formal request to challenge a decision made on your application. It requires clear documentation and evidence to demonstrate why the original decision should be reconsidered.
              </p>
           </div>
        </section>

        {/* 3. Why Appeals Fail - THE RISK BLOCKS (BOTTOM-RIGHT) */}
        <section className="relative py-20 lg:py-40 bg-[#1B2D33] overflow-hidden">
           <div className="px-4 sm:px-6 lg:px-8 max-w-[85rem] mx-auto text-center mb-24 animate-fade-in-up">
              <span className="text-[#A07A41] uppercase tracking-[0.6em] text-[8px] font-black mb-8 block font-serif">Failure Metrics</span>
              <h2 className="text-2xl md:text-5xl font-serif font-bold text-white tracking-tighter italic uppercase">Why Many Appeals <br /><span className="italic font-light text-[#A07A41]">Are Unsuccessful?</span></h2>
           </div>

           <div className="px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 animate-fade-in-bottom-right">
              {[
                { t: "Weak Evidence", s: "Missing key supporting proofs.", i: FileWarning },
                { t: "Poor Structure", d: "Disorganized documentation flows.", i: LayoutGrid },
                { t: "Unaddressed Reasons", d: "Ignoring the original refusal logic.", i: ShieldAlert },
                { t: "Unclear Data", d: "Consistency errors across documents.", i: Info }
              ].map((item, i) => (
                 <div key={i} className="group p-8 bg-white/[0.02] border border-white/5 rounded-[2.5rem] hover:bg-[#A07A41] transition-all duration-700 shadow-big relative overflow-hidden text-center group">
                    <item.i size={20} className="text-[#A07A41] group-hover:text-black mx-auto mb-6 transition-transform group-hover:rotate-[360deg] duration-1000 shrink-0" />
                    <h4 className="text-white font-serif font-bold text-xs md:text-sm italic mb-2 tracking-tighter uppercase group-hover:text-black">{item.t}</h4>
                    <p className="text-gray-500 text-[10px] font-sans font-light italic leading-relaxed opacity-70 group-hover:text-black/60 italic leading-tight">{item.s || item.d}</p>
                 </div>
              ))}
           </div>
           
           <div className="mt-20 text-center animate-fade-in-up">
              <p className="text-[#A07A41] font-serif italic text-base md:text-lg opacity-60 underline underline-offset-4 decoration-[#A07A41]/10">"If you don't fix the original problem, your appeal will fail again."</p>
           </div>
        </section>

        {/* 4. Key Documents - THE STAGGERED STACK (TOP-LEFT) */}
        <section className="relative py-20 lg:py-40 bg-[#1B2D33] overflow-hidden border-y border-white/5 bg-white/[0.01]">
           <div className="px-4 sm:px-6 lg:px-8 max-w-[85rem] mx-auto animate-fade-in-top-left">
              <div className="flex flex-col lg:flex-row items-center gap-20">
                 <div className="lg:w-1/2">
                    <h2 className="text-white text-2xl md:text-5xl font-serif font-bold tracking-tighter leading-[0.9] mb-10 italic">
                       Critical <br /><span className="text-[#A07A41]">Documentation.</span>
                    </h2>
                    <p className="text-gray-400 text-xs md:text-sm font-sans font-light leading-loose mb-10 opacity-60 border-l border-[#A07A41] pl-8 italic">
                       Professional preparation requires specific, high-authority documents to address refusal triggers. These are your real tools for appeal success.
                    </p>
                    <div role="button" className="group relative inline-flex items-center justify-center gap-3 px-10 py-5 bg-[#1B2D33] border border-white/10 text-white font-bold tracking-widest uppercase text-[9px] rounded-sm transition-all duration-300 hover:bg-[#A07A41] cursor-pointer shadow-xl overflow-hidden active:scale-95 shadow-inner">
                       <span>Get Checklist</span>
                       <ArrowRight size={14} className="transform group-hover:translate-x-1 transition-transform" />
                    </div>
                 </div>
                 <div className="lg:w-1/2 flex flex-col gap-4">
                    {[
                      { t: "Refusal Decision Letter", d: "Analysis of original grounds." },
                      { t: "Targeted Counter-Proof", d: "Directly addressing refusal points." },
                      { t: "Financial Evidence Suite", d: "Updated assets & logs." },
                      { t: "Personal Appeal Narrative", d: "Professional cover letter support." }
                    ].map((item, i) => (
                       <div key={i} className="flex gap-6 group items-center p-6 bg-white/[0.03] border border-white/5 rounded-[2rem] hover:ml-6 hover:bg-black transition-all duration-500 shadow-big">
                          <div className="h-8 w-8 shrink-0 bg-[#A07A41]/10 rounded-full flex items-center justify-center text-[#A07A41] group-hover:bg-[#A07A41] group-hover:text-black transition-colors shadow-inner"><FileText size={16} /></div>
                          <div>
                             <h4 className="text-white font-serif font-bold text-sm md:text-base italic uppercase tracking-tighter group-hover:text-[#A07A41] mb-0.5 transition-colors leading-tight">{item.t}</h4>
                             <p className="text-gray-600 text-[8px] md:text-[9px] uppercase font-black tracking-widest group-hover:text-white/60 leading-tight italic transition-colors italic">{item.d}</p>
                          </div>
                       </div>
                    ))}
                 </div>
              </div>
           </div>
        </section>

        {/* 6. Strengthening Your Appeal - THE FOCUS HUB (CENTERED) */}
        <section className="relative py-20 lg:py-48 bg-[#1B2D33] overflow-hidden border-y border-white/5 bg-white/[0.01]">
           <div className="px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto text-center animate-fade-in-up">
              <h2 className="text-2xl md:text-5xl font-serif font-bold text-white tracking-tighter italic uppercase mb-16 underline decoration-[#A07A41]/10 underline-offset-[24px] decoration-8">Strategic <br /><span className="italic font-light text-[#A07A41]">Advantage.</span></h2>
              
                 {[
                   { t: "Refusal Drill-Down", d: "We focus 100% on the reasons for your original rejection." },
                   { t: "Cross-Data Audit", d: "Ensuring every date, amount, and fact matches your new evidence." },
                   { t: "High-Authority Tone", d: "Presenting your situation in professional court-ready language." },
                   { t: "Logical Mapping", d: "Ensuring the decision-maker follows your case flow easily." }
                 ].map((item, i) => (
                    <div key={i} className="group p-10 bg-white/[0.02] border border-white/5 rounded-[3rem] hover:bg-[#A07A41] hover:border-[#A07A41] transition-all duration-700 shadow-big text-center group overflow-hidden relative">
                       <div className="absolute top-0 right-0 p-8 opacity-[0.03] scale-[3] group-hover:text-[#1B2D33] transition-all duration-700 pointer-events-none"><Target size={80} /></div>
                       <h4 className="text-[#A07A41] font-serif font-bold text-base md:text-lg italic uppercase group-hover:text-[#1B2D33] mb-3 transition-colors relative z-10">{item.t}</h4>
                       <p className="text-gray-500 text-[10px] md:text-xs font-sans font-light italic leading-relaxed group-hover:text-[#1B2D33]/70 italic leading-loose relative z-10 opacity-70">{item.d}</p>
                    </div>
                 ))}
           </div>
        </section>

        {/* 7. Process - THE TIMELINE PATH (BOTTOM-LEFT) */}
        <section className="relative py-20 lg:py-40 bg-[#1B2D33] overflow-hidden border-b border-white/5">
           <div className="px-4 sm:px-6 lg:px-8 max-w-[90rem] mx-auto text-center mb-24 animate-fade-in-up">
              <span className="text-[#A07A41] uppercase tracking-[0.8em] text-[9px] font-black mb-8 block font-serif">Recovery Protocol</span>
              <h2 className="text-3xl md:text-5xl font-serif font-bold text-white tracking-tight italic uppercase opacity-90">Documentation <br /><span className="italic font-light text-[#A07A41]">Evolution.</span></h2>
           </div>

           <div className="px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-6 animate-fade-in-bottom-left">
              {[ "Grounds Analysis", "Expert Drafting", "Evidence Mapping", "Outcome Ready" ].map((step, i) => (
                 <div key={i} className="group p-10 bg-white/[0.03] border border-white/5 rounded-[3rem] text-center relative transition-all duration-700 hover:bg-[#A07A41] shadow-2xl group">
                    <div className="text-4xl md:text-6xl font-serif font-black text-[#A07A41]/10 italic mb-8 group-hover:text-black transition-colors duration-500 italic">0{i+1}</div>
                    <h4 className="text-white font-serif font-bold text-xs md:text-sm italic group-hover:text-black mb-6 transition-colors duration-500 tracking-tighter uppercase leading-tight italic underline decoration-[#A07A41]/10 group-hover:decoration-black">{step}</h4>
                    <div className="h-0.5 w-10 bg-[#A07A41] mx-auto group-hover:bg-black group-hover:w-full transition-all duration-1000 rounded-full"></div>
                 </div>
              ))}
           </div>
        </section>

        {/* 8. Disclaimer - THE INSET ALERT (TOP-RIGHT) */}
        <section className="relative py-16 lg:py-32 bg-[#1B2D33] overflow-hidden border-y border-white/5">
           <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 animate-fade-in-top-right">
              <div className="p-8 md:p-14 bg-[#2A454E]/20 border border-[#A07A41]/20 rounded-[3rem] text-center backdrop-blur-3xl shadow-big group hover:border-[#A07A41] transition-all duration-700">
                 <ShieldAlert size={40} className="text-[#A07A41] mx-auto mb-6 opacity-40 transition-transform group-hover:rotate-12 group-hover:scale-110" />
                 <h2 className="text-[#A07A41] text-lg font-serif font-bold mb-4 italic uppercase tracking-[0.3em] font-black">Legal Disclaimer.</h2>
                 <p className="text-gray-400 text-xs md:text-sm leading-relaxed italic font-light leading-relaxed opacity-70 italic shadow-sm italic underline decoration-white/5 decoration-dotted underline-offset-4">
                    We assist with appeal documentation preparation but <strong className="text-white font-bold">do not guarantee success</strong>. Final decisions are made by relevant authorities or courts.
                 </p>
              </div>
           </div>
        </section>

        {/* 9. FAQ Section (CENTERED) */}
        <section className="relative py-24 lg:py-48 bg-[#1B2D33] overflow-hidden border-b border-white/10 shadow-big">
           <div className="px-4 sm:px-6 lg:px-8 max-w-[50rem] mx-auto">
              <div className="text-center mb-24 animate-fade-in-up">
                 <h2 className={`text-3xl md:text-5xl font-serif font-bold text-white tracking-tight relative z-10 italic uppercase font-black`}>Logic <br /><span className="italic font-light text-[#A07A41]">Briefing.</span></h2>
              </div>

              <div className="space-y-4 md:space-y-6">
                 {[
                   { q: "Can I appeal a visa refusal?", a: "Yes, in many cases. The decision letter you received will specify whether you have a right of appeal or an administrative review." },
                   { q: "Can new documents improve my appeal?", a: "Strong, new supporting evidence is critical if it addresses the specific reasons for your original refusal." },
                   { q: "Do you guarantee success?", a: "No, we cannot guarantee outcomes as court decisions are independent. We provide the strongest possible documentation to maximize your chances." },
                   { q: "How long does the documentation take?", a: "Appeal files are complex. We typically require 5–10 business days for complete preparation and organization." }
                 ].map((faq, index) => (
                    <div 
                       key={index} 
                       className="border border-[#A07A41]/10 px-6 md:px-8 rounded-[3rem] bg-white/[0.03] overflow-hidden transition-all duration-1000 animate-fade-in-up md:opacity-100 shadow-xl" 
                    >
                       <button 
                         onClick={() => setActiveFaq(activeFaq === index ? null : index)}
                         className="w-full p-8 md:p-14 flex items-center justify-between group outline-none"
                       >
                         <span className={`text-left text-[10px] md:text-base font-serif transition-colors font-bold italic tracking-tighter ${activeFaq === index ? 'text-[#A07A41]' : 'text-gray-300'}`}>{faq.q}</span>
                         <div className={`shrink-0 p-3 rounded-2xl border border-white/5 transition-all duration-500 shadow-inner ${activeFaq === index ? 'bg-[#A07A41] rotate-180 border-[#A07A41]' : 'group-hover:border-[#A07A41]'}`}>
                            <ChevronDown className={`h-4 w-4 transition-colors ${activeFaq === index ? 'text-black' : 'text-[#A07A41]'}`} />
                         </div>
                       </button>
                       <div className={`transition-all duration-700 ease-[cubic-bezier(0.2,1,0.2,1)] px-8 md:px-14 ${activeFaq === index ? 'max-h-[600px] pb-14 opacity-100' : 'max-h-0 opacity-0 overflow-hidden'}`}>
                          <p className="text-gray-500 text-[9px] md:text-xs font-sans font-light italic border-l-2 border-[#A07A41]/20 pl-8 opacity-80 leading-relaxed italic italic">{faq.a}</p>
                       </div>
                    </div>
                 ))}
              </div>
           </div>
        </section>

        {/* 10. Call to Action (TOP-DOWN) */}
        <section className="relative py-24 lg:py-60 bg-[#1B2D33] overflow-hidden">
           <div 
              className="absolute inset-0 z-0 opacity-[0.2] bg-cover bg-center transition-transform duration-[12s] animate-[ken-burns_12s_linear_infinite]"
              style={{ backgroundImage: 'url("/den.jpg")' }}
           >
              <div className="absolute inset-0 bg-[#1B2D33]/80 backdrop-blur-[2px]"></div>
           </div>
           <div className="max-w-[85rem] mx-auto px-4 sm:px-6 lg:px-8 animate-fade-in-down relative z-10 text-center">
              <div className="p-12 md:p-24 bg-white/[0.01] border border-white/10 rounded-[5rem] backdrop-blur-3xl relative overflow-hidden shadow-big group shadow-inner">
                 <div className="absolute top-0 right-0 p-40 opacity-[0.03] scale-[6] rotate-[15deg] transition-transform duration-[8s] group-hover:text-[#A07A41] pointer-events-none"><Gavel size={300} /></div>
                 
                 <h2 className="text-3xl md:text-5xl lg:text-7xl font-serif font-bold text-white mb-10 tracking-tighter leading-none italic uppercase decoration-[#A07A41]/10 underline underline-offset-[36px] decoration-8">Appeal <br /><span className="italic font-light text-[#A07A41] lowercase drop-shadow-big">Recovery.</span></h2>
                 
                 <p className="text-gray-400 text-[10px] md:text-sm font-sans font-light italic leading-relaxed mb-16 max-w-xl mx-auto opacity-70 border-b border-white/5 pb-12 italic">
                    Don’t let a refusal be the final outcome. Get professional support to prepare strong and well-structured appeal documentation today.
                 </p>

                 <div className="flex flex-col md:flex-row items-center justify-center gap-10 mb-16">
                    <div className="flex items-center gap-4 group cursor-pointer">
                       <Mail size={18} className="text-[#A07A41]" />
                       <span className="text-white font-serif font-bold text-sm md:text-xl italic group-hover:text-[#A07A41] transition-transform group-hover:translate-x-1 underline decoration-white/10 decoration-1 underline-offset-4">legal@hsco.co</span>
                    </div>
                    <div className="flex items-center gap-4 group cursor-pointer">
                       <Phone size={18} className="text-[#A07A41]" />
                       <span className="text-white font-serif font-bold text-sm md:text-xl italic group-hover:text-[#A07A41] transition-transform group-hover:translate-x-1 underline decoration-white/10 decoration-1 underline-offset-4">+44 20 745 9210</span>
                    </div>
                 </div>

                 <div role="button" className="group relative inline-flex items-center justify-center gap-4 px-12 py-5 bg-[#1B2D33] border border-white/10 text-white font-bold tracking-[0.3em] uppercase text-[10px] md:text-[12px] rounded transition-all duration-300 hover:bg-[#A07A41] cursor-pointer shadow-big overflow-hidden hover:scale-110 active:scale-95 shadow-inner">
                    <span className="relative z-10 font-black tracking-widest">Start Appeal Support</span>
                    <ArrowRight size={16} className="relative z-10 transform group-hover:translate-x-1 transition-transform duration-300" />
                 </div>
              </div>
           </div>
        </section>

      </main>
    </div>
  );
};

export default AppealDocumentationSupportPage;
