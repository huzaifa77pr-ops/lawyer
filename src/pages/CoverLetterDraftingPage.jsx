import React, { useEffect, useState } from 'react';
import { 
  FileSignature, PenTool, MessageSquare, AlertTriangle, CheckCircle, 
  Clock, ShieldAlert, ArrowRight, Mail, Phone, ChevronDown, 
  Info, Layers, Type, ShieldCheck, Lock
} from 'lucide-react';

const CoverLetterDraftingPage = () => {
  const [activeFaq, setActiveFaq] = useState(null);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-[#1B2D33] flex flex-col overflow-x-hidden text-white font-sans selection:bg-[#A07A41] selection:text-black">
      <main className="flex-grow">
        
        {/* 1. Hero Section - THE SPLIT CANVAS */}
        <section className="relative min-h-[90vh] flex items-center pt-32 pb-16 overflow-hidden bg-[#1B2D33]">
          <div 
             className="absolute inset-0 z-0 opacity-15 bg-cover bg-center transition-transform duration-[12s] scale-110 animate-[ken-burns_12s_linear_infinite]"
             style={{ backgroundImage: 'url("/cov.jpg")' }}
          >
             <div className="absolute inset-0 bg-[#1B2D33]/70 backdrop-blur-[2px]"></div>
          </div>
          
          <div className="absolute right-0 top-0 bottom-0 w-2/5 bg-[#A07A41]/5 skew-x-[-12deg] translate-x-32 hidden lg:block border-l border-white/5"></div>

          <div className="relative z-10 px-4 sm:px-6 lg:px-8 max-w-[90rem] mx-auto w-full">
             <div className="flex flex-col lg:flex-row items-center gap-20">
                <div className="lg:w-3/5 animate-fade-in-top-left">
                   <div className="inline-flex items-center gap-3 mb-10 px-5 py-2 bg-white/5 border border-white/10 rounded-full backdrop-blur-3xl">
                      <PenTool size={12} className="text-[#A07A41]" />
                      <span className="text-[#A07A41] uppercase tracking-[0.5em] text-[9px] font-black italic">Persuasion Mapping UK</span>
                   </div>
                   
                   <h1 className="text-4xl md:text-6xl lg:text-7xl font-serif font-bold text-white leading-[1.1] mb-10 tracking-tighter decoration-[#A07A41]/10 underline underline-offset-[24px] decoration-8">
                      Cover Letter <br />
                      <span className="italic font-light text-[#A07A41] lowercase">Drafting.</span>
                   </h1>
                   
                   <p className="text-gray-400 text-xs md:text-sm lg:text-base font-sans font-light leading-relaxed mb-12 max-w-xl italic opacity-80 border-l-2 border-[#A07A41]/30 pl-10">
                      Clear, structured, and professional cover letters that strengthen your application. We help you effectively tell your story to the decision-makers.
                   </p>

                   <div className="flex flex-wrap gap-6 items-center">
                      <div role="button" className="group relative inline-flex items-center justify-center gap-4 px-12 py-5 bg-[#1B2D33] border border-white/10 text-white font-bold tracking-[0.2em] uppercase text-[11px] rounded transition-all duration-500 hover:bg-[#A07A41] cursor-pointer shadow-3xl overflow-hidden hover:scale-105 active:scale-95">
                         <span className="relative z-10">Get My Letter</span>
                         <ArrowRight size={14} className="relative z-10 transform group-hover:translate-x-1 transition-transform duration-300" />
                      </div>
                      <div className="flex items-center gap-3 text-white/30 text-[9px] font-black uppercase tracking-widest italic border-b border-white/10 pb-0.5">
                         <FileSignature size={14} className="text-[#A07A41]" />
                         Custom Drafting
                      </div>
                   </div>
                </div>

                <div className="lg:w-2/5 relative hidden lg:block animate-fade-in-bottom-right">
                   <div className="relative p-1 bg-gradient-to-br from-[#A07A41]/40 to-transparent rounded-2xl shadow-biggest overflow-hidden group">
                      <img src="/cov.jpg" alt="Drafting" className="w-full h-auto rounded-xl grayscale group-hover:grayscale-0 transition-all duration-[2s] scale-110 group-hover:scale-100" />
                      <div className="absolute inset-0 bg-[#1B2D33]/40 group-hover:bg-transparent transition-all duration-700"></div>
                      <div className="absolute bottom-10 left-10 p-8 bg-black/60 backdrop-blur-3xl border-l-4 border-[#A07A41] max-w-[250px] shadow-2xl">
                         <p className="text-white font-serif italic text-sm italic italic leading-relaxed">"Strong letters turn lists of data into compelling stories."</p>
                      </div>
                   </div>
                </div>
             </div>
          </div>
        </section>

        {/* 2. Why it Matters - THE NARRATIVE FOCUS (CENTERED) */}
        <section className="relative py-24 lg:py-48 bg-[#1B2D33] overflow-hidden">
           <div className="container mx-auto px-4 text-center animate-fade-in-up">
              <h2 className="text-white text-3xl md:text-5xl font-serif font-bold tracking-tighter leading-tight mb-12 italic">
                 The Story Behind <br /><span className="text-[#A07A41]">The Evidence.</span>
              </h2>
              <div className="max-w-3xl mx-auto p-12 md:p-20 bg-white/[0.01] border border-white/5 rounded-[4rem] shadow-big relative group hover:border-[#A07A41]/20 transition-all duration-700 overflow-hidden">
                 <div className="absolute -top-10 -left-10 p-20 opacity-5 scale-2 group-hover:rotate-6 transition-transform duration-1000"><MessageSquare size={150} /></div>
                 <p className="text-gray-400 text-xs md:text-sm lg:text-lg leading-relaxed italic font-light italic mb-12 opacity-80">
                    A cover letter connects all your documents and explains your case clearly. Without it, decision-makers struggle to understand your situation, leading to delays.
                 </p>
                 <div className="inline-block p-1 bg-[#A07A41] rounded-full px-10 py-3 text-black font-black uppercase text-[10px] tracking-widest shadow-xl shadow-[#A07A41]/10">
                    The Narrative Truth
                 </div>
                 <p className="mt-8 text-[#A07A41] font-serif italic text-lg md:text-xl italic">"Documents alone don’t tell your story—your cover letter does."</p>
              </div>
           </div>
        </section>

        {/* 3. When You Need One - THE FLOATING CARDS (BOTTOM-LEFT) */}
        <section className="relative py-24 lg:py-48 bg-[#1B2D33] overflow-hidden border-y border-white/5 bg-white/[0.01]">
           <div className="px-4 sm:px-6 lg:px-8 max-w-[90rem] mx-auto text-center mb-32 animate-fade-in-up">
              <span className="text-[#A07A41] uppercase tracking-[0.5em] text-[9px] font-black mb-8 block font-serif underline decoration-[#A07A41]/20 decoration-2 underline-offset-8">Critical Use Cases</span>
              <h2 className="text-3xl md:text-5xl font-serif font-bold text-white tracking-tight italic uppercase">When is a Letter <br /><span className="italic font-light text-[#A07A41]">Essential?</span></h2>
           </div>

           <div className="px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto flex flex-wrap justify-center gap-6 animate-fade-in-bottom-left">
              {[
                { t: "Visa Applications", s: "Student, Work, or Spouse routes.", i: Layers },
                { t: "Complex Cases", s: "Handling historic complications.", i: AlertTriangle },
                { t: "Gap Explanations", s: "Filling the silence in your timeline.", i: Clock },
                { t: "Legal Submissions", s: "Formal clarifications for authorities.", i: FileSignature },
                { t: "Document Logic", s: "Explaining unusual proof methods.", i: Info }
              ].map((item, i) => (
                 <div key={i} className="group p-10 bg-white/[0.02] border border-white/10 rounded-[3rem] hover:bg-black transition-all duration-700 shadow-2xl relative overflow-hidden w-full md:w-[320px] flex flex-col justify-end min-h-[300px] hover:-translate-y-4">
                    <div className="absolute top-10 left-10 text-[#A07A41] opacity-20 group-hover:opacity-100 group-hover:rotate-12 transition-all duration-700 shrink-0">
                       <item.i size={40} strokeWidth={1.5} />
                    </div>
                    <div className="mt-20">
                       <h4 className="text-white font-serif font-bold text-base md:text-lg italic mb-2 tracking-tighter uppercase leading-tight">{item.t}</h4>
                       <p className="text-gray-500 text-[10px] md:text-xs font-sans font-light italic leading-relaxed opacity-70 italic shadow-sm italic leading-tight underline decoration-white/5 decoration-dotted">{item.s}</p>
                    </div>
                 </div>
              ))}
           </div>
        </section>

        {/* 4. Strong Letter Elements - THE TECHNICAL CHECKLIST (TOP-RIGHT) */}
        <section className="relative py-24 lg:py-48 bg-[#1B2D33] overflow-hidden border-b border-white/5">
           <div className="px-4 sm:px-6 lg:px-8 max-w-[85rem] mx-auto animate-fade-in-top-right">
              <div className="flex flex-col lg:flex-row items-center gap-24">
                 <div className="lg:w-1/2">
                    <h2 className="text-white text-3xl md:text-5xl lg:text-6xl font-serif font-bold tracking-tighter leading-[0.9] mb-12 italic">
                       Anatomy of <br /><span className="text-[#A07A41]">Excellence.</span>
                    </h2>
                    <p className="text-gray-400 text-xs md:text-sm font-sans font-light leading-loose mb-12 opacity-60 border-l border-[#A07A41] pl-10 italic">
                       What makes an effective cover letter? We ensure every draft hits these core pillars to maximize your impact on the decision-maker.
                    </p>
                    <div role="button" className="group relative inline-flex items-center justify-center gap-2 px-10 py-5 bg-[#1B2D33] border border-white/10 text-white font-bold tracking-widest uppercase text-[9px] rounded-sm transition-all duration-500 hover:bg-[#A07A41] cursor-pointer shadow-xl overflow-hidden active:scale-95">
                       <span>Learn More</span>
                       <ArrowRight size={14} className="transform group-hover:translate-x-1 transition-transform" />
                    </div>
                 </div>
                 <div className="lg:w-1/2 grid grid-cols-1 md:grid-cols-2 gap-6">
                    {[
                      { t: "Logical Flow", d: "Clear and linear structure.", i: Type },
                      { t: "Total Accuracy", d: "Consistent data points.", i: CheckCircle },
                      { t: "Strong Persona", d: "Personalized explanation.", i: Layers },
                      { l: "High Tone", d: "Professional UKVI language.", i: ShieldCheck }
                    ].map((item, i) => (
                       <div key={i} className="p-8 md:p-12 bg-white/[0.03] border border-white/10 rounded-[3rem] group hover:bg-[#A07A41] transition-all duration-700 shadow-2xl text-center">
                          <item.i size={30} className="text-[#A07A41] group-hover:text-black transition-colors shrink-0 mx-auto mb-8" />
                          <h4 className="text-white font-serif font-bold text-base md:text-lg italic uppercase tracking-tighter group-hover:text-black mb-2 leading-tight">{item.t || item.l}</h4>
                          <p className="text-gray-600 text-[8px] md:text-[9px] uppercase font-black tracking-widest group-hover:text-black/60 leading-tight italic">{item.d}</p>
                       </div>
                    ))}
                 </div>
              </div>
           </div>
        </section>

        {/* 5. Our Core Services - THE SLIDING DRAWER (BOTTOM-RIGHT) */}
        <section className="relative py-24 lg:py-48 bg-[#1B2D33] overflow-hidden">
           <div className="px-4 sm:px-6 lg:px-8 max-w-[90rem] mx-auto text-center mb-32 animate-fade-in-up">
              <span className="text-[#A07A41] uppercase tracking-[0.8em] text-[9px] font-black mb-10 block font-serif">Service Suite</span>
              <h2 className="text-4xl md:text-6xl font-serif font-bold text-white tracking-tight italic uppercase drop-shadow-2xl opacity-90">Drafting <br /><span className="italic font-light text-[#A07A41]">Solutions.</span></h2>
           </div>

           <div className="px-4 sm:px-6 lg:px-8 max-w-[95rem] mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6 animate-fade-in-bottom-right">
              {[
                { t: "Custom Drafting", d: "Based on your unique case.", img: "/cov1.jpg" },
                { t: "Case Integration", d: "Linking your evidences logic.", img: "/cov2.jpg" },
                { t: "Formal Structure", d: "Adhering to UK legal standards.", img: "/cov3.jpg" },
                { t: "Refined Review", d: "Refining for maximum clarity.", img: "/cov4.jpg" },
                { t: "Final Polishing", d: "Ready for direct submission.", img: "/cov5.jpg" }
              ].map((service, i) => (
                 <div key={i} className="group relative h-[450px] md:h-[600px] rounded-[4rem] overflow-hidden transition-all duration-1000 border border-white/5 shadow-biggest bg-black/40">
                    <div className="absolute inset-0">
                       <img src={service.img} alt={service.t} className="w-full h-full object-cover grayscale brightness-[0.35] group-hover:grayscale-0 group-hover:scale-110 transition-all duration-[2.5s]" />
                       <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent"></div>
                    </div>
                    <div className="absolute bottom-0 left-0 p-10 w-full z-10 transition-all group-hover:pb-16 flex flex-col justify-end min-h-[50%]">
                       <div className="h-0.5 w-12 bg-[#A07A41] mb-10 group-hover:w-full transition-all duration-700"></div>
                       <h4 className="text-white font-serif font-bold text-xl md:text-2xl mb-4 italic group-hover:text-[#A07A41] drop-shadow-xl">{service.t}</h4>
                       <p className="text-gray-400 text-xs font-sans font-light italic h-0 opacity-0 group-hover:h-auto group-hover:opacity-90 transition-all duration-500 delay-150 italic leading-tight uppercase tracking-widest">{service.d}</p>
                    </div>
                 </div>
              ))}
           </div>
        </section>

        {/* 6. Common Mistakes - THE RED FLAG LIST (TOP-LEFT) */}
        <section className="relative py-24 lg:py-48 bg-[#1B2D33] overflow-hidden border-y border-white/5 bg-white/[0.01]">
           <div className="px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto animate-fade-in-top-left">
              <div className="mb-24 text-center">
                 <h2 className="text-3xl md:text-5xl font-serif font-bold text-white tracking-tight italic uppercase underline decoration-[#A07A41]/10 underline-offset-[20px] decoration-4">Errors <br /><span className="italic font-light text-[#A07A41]">Avoided.</span></h2>
              </div>
              
              <div className="space-y-6">
                 {[
                   { t: "Generic Templates", d: " decision-makers spot copy-pasted content instantly." },
                   { t: "Missing Context", d: "Leaving too many questions unanswered for the reviewer." },
                   { t: "Data Discrepancy", d: "Conflicts between the letter and your documents." },
                   { t: "Poor Hierarchy", d: "Hiding major facts in long, confusing paragraphs." },
                   { t: "Excessive Length", d: "Diluting the impact of your case with filler content." }
                 ].map((item, i) => (
                    <div key={i} className="flex gap-10 group items-center p-8 bg-white/[0.02] border border-white/5 rounded-[2.5rem] hover:border-red-500/20 hover:bg-black transition-all duration-500">
                       <div className="h-12 w-12 shrink-0 bg-red-500/10 border border-red-500/20 rounded-full flex items-center justify-center text-red-500 text-xs font-black italic group-hover:bg-red-500 group-hover:text-white transition-all">!</div>
                       <div>
                          <h4 className="text-white font-serif font-bold text-base md:text-lg italic mb-1 uppercase tracking-tighter group-hover:text-red-400 transition-colors">{item.t}</h4>
                          <p className="text-gray-500 text-[10px] md:text-xs font-sans font-light italic leading-relaxed opacity-70 italic leading-tight">{item.d}</p>
                       </div>
                    </div>
                 ))}
              </div>
           </div>
        </section>

        {/* 7. Process - THE VERTICAL CONNECTOR (BOTTOM-RIGHT) */}
        <section className="relative py-24 lg:py-48 bg-[#1B2D33] overflow-hidden">
           <div className="px-4 sm:px-6 lg:px-8 max-w-[85rem] mx-auto animate-fade-in-bottom-right">
              <div className="flex flex-col lg:flex-row items-center gap-16 md:gap-32">
                 <div className="lg:w-1/3">
                    <h2 className="text-3xl md:text-5xl lg:text-6xl font-serif font-bold text-white mb-10 tracking-tighter leading-[0.9] italic">Service <br /><span className="text-[#A07A41]">Evolution.</span></h2>
                    <p className="text-gray-400 text-xs md:text-sm italic mb-12 opacity-60 leading-loose border-l border-[#A07A41] pl-8 italic">
                       We follow a structured journey from understanding your case to delivering a final, polished masterpiece.
                    </p>
                 </div>
                 <div className="lg:w-2/3 space-y-12 relative">
                    <div className="absolute left-[24px] md:left-[35px] top-4 bottom-4 w-px bg-[#A07A41]/10"></div>
                    {[
                      { t: "Case Intake", d: "Diving into your specific visa or legal context." },
                      { t: "Evidence Review", d: "Aligning the narrative with your metadata." },
                      { t: "Legal Drafting", d: "Creating the structure and persuasive flow." },
                      { t: "Final Refined Delivery", d: "Quality control and final formatting." }
                    ].map((step, i) => (
                       <div key={i} className="flex gap-10 items-start relative z-10 group">
                          <div className="h-12 w-12 md:h-20 md:w-20 shrink-0 bg-[#1B2D33] border-2 border-white/10 rounded-full flex items-center justify-center text-[#A07A41] font-serif font-black italic text-xl group-hover:bg-[#A07A41] group-hover:text-black transition-all duration-500 shadow-biggest">0{i+1}</div>
                          <div className="mt-2 md:mt-6">
                             <h4 className="text-white font-serif font-bold text-base md:text-xl italic uppercase tracking-tighter group-hover:text-[#A07A41] mb-2 leading-tight transition-colors">{step.t}</h4>
                             <p className="text-gray-600 text-[9px] md:text-[11px] uppercase font-black tracking-widest group-hover:text-white/60 leading-tight italic transition-colors italic">{step.d}</p>
                          </div>
                       </div>
                    ))}
                 </div>
              </div>
           </div>
        </section>

        {/* 8. Disclaimer - THE MINIMAL BANNER (CENTERED) */}
        <section className="relative py-20 lg:py-32 bg-[#1B2D33] overflow-hidden border-y border-white/5 backdrop-blur-3xl shadow-big">
           <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 animate-fade-in-up">
              <div className="p-8 md:p-14 bg-white/[0.02] border border-[#A07A41]/20 rounded-[3rem] relative overflow-hidden flex flex-col md:flex-row items-center gap-10 text-center md:text-left hover:shadow-[0_0_50px_rgba(160,122,65,0.1)] transition-all duration-700">
                 <div className="md:w-1/5 flex justify-center">
                    <ShieldAlert size={40} className="text-[#A07A41] opacity-50" />
                 </div>
                 <div className="md:w-4/5">
                    <h2 className="text-[#A07A41] text-lg font-serif font-bold mb-3 italic uppercase tracking-[0.3em] leading-none mb-6">Support Guidance.</h2>
                    <p className="text-gray-400 text-xs md:text-sm leading-relaxed italic font-light italic leading-loose opacity-70 italic shadow-sm italic underline decoration-white/5 decoration-dotted underline-offset-4">
                       Our cover letter service is for guidance only. It <strong className="text-white font-black underline decoration-[#A07A41]/10">does not guarantee approval</strong> by any decision-making body.
                    </p>
                 </div>
              </div>
           </div>
        </section>

        {/* 9. FAQ Section (TOP-RIGHT) */}
        <section className="relative py-24 lg:py-48 bg-[#1B2D33] overflow-hidden border-b border-white/10 shadow-big">
           <div className="px-4 sm:px-6 lg:px-8 max-w-[50rem] mx-auto">
              <div className="text-center mb-24 animate-fade-in-top-right">
                 <h2 className={`text-4xl md:text-6xl font-serif font-bold text-white tracking-tight relative z-10 italic uppercase font-black`}>Logic <br /><span className="italic font-light text-[#A07A41]">Briefing.</span></h2>
              </div>

              <div className="space-y-4 md:space-y-6">
                 {[
                   { q: "Is a cover letter required for UK visa applications?", a: "Not always mandatory, but highly recommended in many cases to explain complexities or provide context to the Home Office." },
                   { q: "Can I write my own cover letter?", a: "Yes, but mistakes or unclear explanations can affect your application. Professional drafting ensures a strong Case-Presentation." },
                   { q: "How long does the drafting take?", a: "Most customized cover letters are drafted and delivered within 1–3 business days depending on complexity." },
                   { q: "Do you integrate my supporting evidence?", a: "Yes, we cross-reference all your key evidence within the letter to create a cohesive and strong application narrative." }
                 ].map((faq, index) => (
                    <div 
                       key={index} 
                       className="border border-[#A07A41]/10 px-8 md:px-12 rounded-[3.5rem] bg-white/[0.03] overflow-hidden transition-all duration-1000 animate-fade-in-up md:opacity-100 shadow-big" 
                    >
                       <button 
                         onClick={() => setActiveFaq(activeFaq === index ? null : index)}
                         className="w-full p-10 md:p-16 flex items-center justify-between group outline-none"
                       >
                         <span className={`text-left text-xs md:text-lg font-serif transition-colors font-bold italic tracking-tight ${activeFaq === index ? 'text-[#A07A41]' : 'text-gray-300'}`}>{faq.q}</span>
                         <div className={`shrink-0 p-4 rounded-full border border-white/5 transition-all duration-500 ${activeFaq === index ? 'bg-[#A07A41] rotate-180 border-[#A07A41]' : 'group-hover:border-[#A07A41]'}`}>
                            <ChevronDown className={`h-4 w-4 transition-colors ${activeFaq === index ? 'text-black' : 'text-[#A07A41]'}`} />
                         </div>
                       </button>
                       <div className={`transition-all duration-700 ease-[cubic-bezier(0.2,1,0.2,1)] px-10 md:px-16 ${activeFaq === index ? 'max-h-[500px] pb-16 opacity-100' : 'max-h-0 opacity-0 overflow-hidden'}`}>
                          <p className="text-gray-500 text-[11px] md:text-sm font-sans font-light italic border-l-2 border-[#A07A41]/20 pl-10 opacity-80 leading-relaxed italic italic">{faq.a}</p>
                       </div>
                    </div>
                 ))}
              </div>
           </div>
        </section>

        {/* 10. Call to Action */}
        <section className="relative py-24 lg:py-64 bg-[#1B2D33] overflow-hidden">
           <div 
              className="absolute inset-0 z-0 opacity-[0.25] bg-cover bg-center transition-transform duration-[10s] animate-[ken-burns_10s_linear_infinite]"
              style={{ backgroundImage: 'url("/cov.jpg")' }}
           >
              <div className="absolute inset-0 bg-[#1B2D33]/80 backdrop-blur-[2px]"></div>
           </div>
           <div className="max-w-[85rem] mx-auto px-4 sm:px-6 lg:px-8 animate-fade-in-bottom-left relative z-10">
              <div className="p-16 md:p-32 bg-white/[0.02] border border-white/10 rounded-[6rem] backdrop-blur-3xl relative overflow-hidden shadow-big text-center group shadow-white/5">
                 <div className="absolute top-0 right-0 p-40 opacity-[0.03] scale-[6] rotate-[-15deg] transition-transform duration-[8s] group-hover:text-[#A07A41] pointer-events-none"><PenTool size={300} /></div>
                 
                 <h2 className="text-4xl md:text-7xl font-serif font-bold text-white mb-12 tracking-tighter leading-none italic uppercase decoration-[#A07A41]/10 underline underline-offset-[36px] decoration-8">Perfectly <br /><span className="italic font-light text-[#A07A41] lowercase drop-shadow-biggest">Drafted.</span></h2>
                 
                 <p className="text-gray-400 text-xs md:text-xl font-sans font-light italic leading-relaxed mb-20 max-w-2xl mx-auto opacity-70 border-b border-white/5 pb-12">
                    Make your application clear, strong, and easy to understand. Contact us today for professional drafting support.
                 </p>

                 <div className="flex flex-col md:flex-row items-center justify-center gap-16 mb-20">
                    <div className="flex items-center gap-4 group cursor-pointer">
                       <Mail size={22} className="text-[#A07A41]" />
                       <span className="text-white font-serif font-bold text-sm md:text-2xl italic group-hover:text-[#A07A41] transition-transform group-hover:translate-x-1 underline decoration-white/5 decoration-dotted">legal@hsco.co</span>
                    </div>
                    <div className="flex items-center gap-4 group cursor-pointer">
                       <Phone size={22} className="text-[#A07A41]" />
                       <span className="text-white font-serif font-bold text-sm md:text-2xl italic group-hover:text-[#A07A41] transition-transform group-hover:translate-x-1 underline decoration-white/5 decoration-dotted">+44 20 745 9210</span>
                    </div>
                 </div>

                 <div role="button" className="group relative inline-flex items-center justify-center gap-5 px-16 py-7 bg-[#1B2D33] border border-white/10 text-white font-bold tracking-[0.3em] uppercase text-[12px] md:text-[14px] rounded transition-all duration-500 hover:bg-[#A07A41] cursor-pointer shadow-biggest overflow-hidden hover:scale-110 active:scale-95 shadow-inner">
                    <span className="relative z-10 font-black">Get My Cover Letter</span>
                    <ArrowRight size={18} className="relative z-10 transform group-hover:translate-x-1 transition-transform duration-500" />
                 </div>
              </div>
           </div>
        </section>

      </main>
    </div>
  );
};

export default CoverLetterDraftingPage;
