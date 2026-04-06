import React, { useEffect, useState } from 'react';
import { 
  ListChecks, FileCheck, AlertCircle, Users, Briefcase, GraduationCap, 
  Home, Search, FileText, CheckCircle, Clock, ShieldAlert, 
  ArrowRight, Mail, Phone, ChevronDown, Info, ShieldCheck, Lock
} from 'lucide-react';

const SupportingDocumentChecklistsPage = () => {
  const [activeFaq, setActiveFaq] = useState(null);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-[#1B2D33] flex flex-col overflow-x-hidden text-white font-sans selection:bg-[#A07A41] selection:text-black">
      <main className="flex-grow">
        
        {/* 1. Hero Section - THE CENTERED MAJESTY (TOP-DOWN) */}
        <section className="relative min-h-[85vh] flex items-center justify-center pt-32 pb-16 overflow-hidden bg-[#1B2D33]">
          <div 
             className="absolute inset-0 z-0 opacity-20 bg-cover bg-center transition-transform duration-[10s] scale-110 animate-[ken-burns_10s_linear_infinite]"
             style={{ backgroundImage: 'url("/doc.jpg")' }}
          >
             <div className="absolute inset-0 bg-[#1B2D33]/70 backdrop-blur-[1px]"></div>
          </div>

          <div className="relative z-10 px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto text-center animate-fade-in-down">
             <div className="inline-flex items-center gap-2 px-4 py-1.5 border border-[#A07A41]/30 rounded-full bg-white/5 backdrop-blur-md mb-8">
                <ListChecks size={12} className="text-[#A07A41]" />
                <span className="text-[#A07A41] uppercase tracking-[0.4em] text-[8px] font-black italic">Compliance Mapping UK</span>
             </div>
             
             <h1 className="text-3xl md:text-5xl lg:text-7xl font-serif font-bold text-white leading-[1.1] mb-8 tracking-tighter decoration-[#A07A41]/10 underline underline-offset-[20px] decoration-4">
                Document <br />
                <span className="italic font-light text-[#A07A41]">Checklists.</span>
             </h1>
             
             <p className="text-gray-400 text-xs md:text-sm lg:text-base font-sans font-light leading-relaxed mb-12 max-w-2xl mx-auto italic opacity-80 px-4">
                Accurate, tailored checklists to ensure your UK immigration or legal application is complete and compliant. We help you avoid missing documents that could delay your future.
             </p>

             <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
                <div role="button" className="group relative inline-flex items-center justify-center gap-3 px-10 py-5 bg-[#1B2D33] border border-white/10 text-white font-bold tracking-widest uppercase text-[10px] rounded transition-all duration-300 hover:bg-[#A07A41] cursor-pointer shadow-2xl overflow-hidden hover:scale-105 active:scale-95 animate-fade-in-up">
                   <span className="relative z-10">Get My Checklist</span>
                   <ArrowRight size={14} className="relative z-10 transform group-hover:translate-x-1 transition-transform duration-300" />
                </div>
                <div className="flex items-center gap-2 text-white/30 text-[8px] font-black uppercase tracking-widest italic animate-fade-in-up">
                   <ShieldCheck size={12} className="text-[#A07A41]" />
                   Error-Free Focus
                </div>
             </div>
          </div>
        </section>

        {/* 2. Why Checklists Matter - THE WARNING TIMELINE (BOTTOM-RIGHT) */}
        <section className="relative py-24 lg:py-40 bg-[#1B2D33] overflow-hidden border-y border-white/5 shadow-inner">
           <div className="max-w-[85rem] mx-auto px-4 sm:px-6 lg:px-8 animate-fade-in-bottom-right">
              <div className="flex flex-col lg:flex-row items-center gap-24">
                 <div className="lg:w-1/2">
                    <h2 className="text-white text-3xl md:text-5xl font-serif font-bold tracking-tighter leading-[1.1] mb-10 italic">
                       Why Checklists <br /><span className="text-[#A07A41]">Are Essential.</span>
                    </h2>
                    <p className="text-gray-400 text-xs md:text-sm leading-relaxed italic font-light italic mb-10 opacity-70 border-l-4 border-red-500/30 pl-8">
                       Most UK application refusals happen due to missing documents or incorrect formatting. "Even strong applications fail because of small document mistakes."
                    </p>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                       {[
                         { l: "Missing Documents", i: AlertCircle },
                         { l: "Incorrect Formatting", i: FileText },
                         { l: "Weak Evidence", i: ShieldAlert },
                         { l: "Inconsistencies", i: Search }
                       ].map((item, i) => (
                          <div key={i} className="flex items-center gap-4 p-5 bg-white/[0.02] border border-white/5 rounded-2xl group hover:border-[#A07A41]/40 transition-all duration-500">
                             <item.i size={16} className="text-[#A07A41] transition-transform group-hover:scale-125" />
                             <span className="text-white font-serif font-bold text-xs italic tracking-tighter group-hover:text-[#A07A41]">{item.l}</span>
                          </div>
                       ))}
                    </div>
                 </div>
                 <div className="lg:w-1/2 relative bg-white/[0.01] p-12 md:p-20 rounded-[4rem] text-center group overflow-hidden border border-white/5 shadow-2xl">
                    <div className="absolute top-0 right-0 p-40 opacity-5 scale-2 group-hover:rotate-12 transition-transform duration-1000"><AlertCircle size={200} /></div>
                    <FileCheck size={120} className="text-[#A07A41] mx-auto mb-10 group-hover:scale-110 transition-transform duration-700" />
                    <p className="text-white font-serif italic text-xl md:text-2xl leading-relaxed italic border-t border-white/5 pt-8">The Hard Truth: Small errors cost thousands in re-application fees.</p>
                 </div>
              </div>
           </div>
        </section>

        {/* 3. Who Needs This Service - THE QUADRANT GRID (TOP-RIGHT) */}
        <section className="relative py-24 lg:py-40 bg-[#1B2D33] overflow-hidden">
           <div className="px-4 sm:px-6 lg:px-8 max-w-[90rem] mx-auto text-center mb-32 animate-fade-in-up">
              <span className="text-[#A07A41] uppercase tracking-[0.5em] text-[8px] font-black mb-8 block font-serif">Audience Mapping</span>
              <h2 className="text-3xl md:text-5xl font-serif font-bold text-white tracking-tight italic uppercase">Who Needs <br /><span className="italic font-light text-[#A07A41]">This Support?</span></h2>
           </div>

           <div className="px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 animate-fade-in-top-right">
              {[
                { t: "Student Applicants", s: "CAS & educational proof.", i: GraduationCap },
                { t: "Work Visa Seekers", s: "Employer & skill evidencing.", i: Briefcase },
                { t: "Family / Spouse", s: "Relationship & finance logs.", i: Users },
                { t: "Settlement / ILR", s: "Residence & continuous stay.", i: Home }
              ].map((item, i) => (
                 <div key={i} className="group p-8 bg-white/[0.03] border border-white/5 rounded-[3rem] hover:bg-black transition-all duration-700 shadow-2xl relative overflow-hidden h-[280px] flex flex-col justify-end">
                    <div className="absolute -top-4 -right-4 text-[#A07A41]/5 group-hover:text-[#A07A41]/10 group-hover:rotate-12 transition-all duration-1000">
                       <item.i size={150} strokeWidth={1} />
                    </div>
                    <div className="relative z-10">
                       <h4 className="text-white font-serif font-bold text-base md:text-lg italic mb-2 tracking-tighter uppercase">{item.t}</h4>
                       <p className="text-gray-500 text-[10px] font-sans font-light italic leading-relaxed opacity-70 italic">{item.s}</p>
                    </div>
                 </div>
              ))}
           </div>
        </section>

        {/* 4. What Checklists Include - THE BLUEPRINT LAYOUT (BOTTOM-LEFT) */}
        <section className="relative py-24 lg:py-48 bg-[#1B2D33] overflow-hidden border-t border-white/5 bg-white/[0.01]">
           <div className="px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto animate-fade-in-bottom-left">
              <div className="mb-24 text-center">
                 <h2 className="text-3xl md:text-5xl font-serif font-bold text-white tracking-tight italic uppercase">Checklist <br /><span className="italic font-light text-[#A07A41]">Architecture.</span></h2>
              </div>
              
              <div className="grid md:grid-cols-2 gap-x-20 gap-y-12">
                 {[
                   { t: "Personalized Mapping", d: "Document list based on your visa route." },
                   { t: "Primary Certificates", d: "Passports, IDs, and core requirements." },
                   { t: "Financial Audit", d: "Bank statement & asset evidence logic." },
                   { t: "Supporting Portfolio", d: "Suggestions for high-impact evidence." },
                   { t: "Formatting Support", d: "UKVI standard submission guidance." },
                   { t: "Gap Analysis", d: "Identifying what's missing early." }
                 ].map((item, i) => (
                    <div key={i} className="flex gap-10 group items-center border-b border-white/5 pb-10 hover:border-[#A07A41] transition-all duration-500">
                       <div className="h-10 w-10 shrink-0 bg-white/[0.03] border border-white/10 rounded-full flex items-center justify-center text-[#A07A41] text-sm font-black italic group-hover:bg-[#A07A41] group-hover:text-black transition-all">0{i+1}</div>
                       <div>
                          <h4 className="text-white font-serif font-bold text-base md:text-lg italic mb-1 uppercase tracking-tighter group-hover:text-[#A07A41] transition-colors">{item.t}</h4>
                          <p className="text-gray-500 text-[9px] md:text-xs font-sans font-light italic leading-relaxed opacity-70 italic leading-tight">{item.d}</p>
                       </div>
                    </div>
                 ))}
              </div>
           </div>
        </section>

        {/* 5. Our Approach - THE VERTICAL PILLARS (TOP-DOWN) */}
        <section className="relative py-24 lg:py-48 bg-[#1B2D33] overflow-hidden">
           <div className="px-4 sm:px-6 lg:px-8 max-w-[90rem] mx-auto text-center mb-32 animate-fade-in-up">
              <span className="text-[#A07A41] uppercase tracking-[0.8em] text-[9px] font-black mb-10 block font-serif">Methodology</span>
              <h2 className="text-4xl md:text-6xl font-serif font-bold text-white tracking-tight italic opacity-90 uppercase">How We <span className="italic font-light text-[#A07A41]">Prepare.</span></h2>
           </div>

           <div className="px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 animate-fade-in-down">
              {[
                { t: "Visa Category", d: "Strict alignment with your route.", img: "/doc1.jpg" },
                { t: "Personal Situation", d: "Accounting for your specifics.", img: "/doc2.jpg" },
                { t: "UKVI Standards", d: "Updated to Home Office logic.", img: "/doc3.jpg" },
                { t: "Risk Mitigation", d: "Spotting potential flags.", img: "/doc4.jpg" }
              ].map((service, i) => (
                 <div key={i} className="group relative h-[450px] md:h-[550px] rounded-[4.5rem] overflow-hidden transition-all duration-1000 border border-white/5 shadow-3xl">
                    <div className="absolute inset-0">
                       <img src={service.img} alt={service.t} className="w-full h-full object-cover grayscale brightness-[0.3] group-hover:grayscale-0 group-hover:scale-110 transition-all duration-[2s]" />
                       <div className="absolute inset-0 bg-gradient-to-t from-[#1B2D33] via-transparent to-transparent"></div>
                    </div>
                    <div className="absolute bottom-0 left-0 p-10 w-full z-10 transition-all group-hover:pb-16 flex flex-col justify-end min-h-[45%]">
                       <div className="h-0.5 w-10 bg-[#A07A41] mb-8 group-hover:w-full transition-all duration-700"></div>
                       <h4 className="text-white font-serif font-bold text-lg md:text-xl mb-4 italic group-hover:text-[#A07A41]">{service.t}</h4>
                       <p className="text-gray-400 text-xs font-sans font-light italic h-0 opacity-0 group-hover:h-auto group-hover:opacity-90 transition-all duration-500 delay-100 italic leading-tight">{service.d}</p>
                    </div>
                 </div>
              ))}
           </div>
        </section>

        {/* 6. Benefits - THE OUTCOMES GRID (BOTTOM-RIGHT) */}
        <section className="relative py-24 lg:py-48 bg-[#1B2D33] overflow-hidden border-y border-white/5">
           <div className="px-4 sm:px-6 lg:px-8 max-w-[85rem] mx-auto animate-fade-in-bottom-right">
              <div className="grid lg:grid-cols-2 gap-20 items-center">
                 <div>
                    <h2 className="text-3xl md:text-5xl lg:text-7xl font-serif font-bold text-white mb-10 tracking-tighter leading-[0.9] italic">Measurable <br /><span className="text-[#A07A41]">Outcomes.</span></h2>
                    <p className="text-gray-400 text-xs md:text-sm italic mb-12 opacity-60 leading-loose border-l border-[#A07A41] pl-8 italic">
                       Don't just list documents—ensure they tell the right story to the reviewer. Professional checklists result in faster approvals and significantly less stress.
                    </p>
                 </div>
                 <div className="grid grid-cols-2 gap-6">
                    {[
                      { t: "Reduced Risk", d: "Fewer refusal paths.", i: ShieldCheck },
                      { t: "Total Clarity", d: "No more guesswork.", i: Info },
                      { t: "Faster Prep", d: "Efficient collection.", i: Clock },
                      { t: "Confidentiality", d: "Secure handling.", i: Lock }
                    ].map((item, i) => (
                       <div key={i} className="group p-8 bg-white/[0.03] border border-white/10 rounded-[3rem] text-center hover:bg-[#A07A41] transition-all duration-500 shadow-2xl overflow-hidden relative">
                          <item.i size={24} className="text-[#A07A41] mx-auto mb-6 group-hover:text-black transition-colors" />
                          <h4 className="text-white font-serif font-bold text-sm italic uppercase tracking-tighter group-hover:text-black mb-2">{item.t}</h4>
                          <p className="text-gray-600 text-[8px] uppercase font-black tracking-widest group-hover:text-black/60 leading-tight italic">{item.d}</p>
                       </div>
                    ))}
                 </div>
              </div>
           </div>
        </section>

        {/* 7. Process - THE STEP-BY-STEP FLOW (TOP-LEFT) */}
        <section className="relative py-20 lg:py-40 bg-[#1B2D33] overflow-hidden">
           <div className="px-4 sm:px-6 lg:px-8 max-w-[90rem] mx-auto text-center mb-32 animate-fade-in-top-left">
              <span className="text-[#A07A41] uppercase tracking-[0.5em] text-[9px] font-black mb-8 block font-serif">Workflow Logic</span>
              <h2 className="text-3xl md:text-5xl font-serif font-bold text-white tracking-tight italic uppercase">Document <br /><span className="italic font-light text-[#A07A41]">Roadmap.</span></h2>
           </div>

           <div className="px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-6 animate-fade-in-top-left">
              {[ "Route Selection", "Requirements Audit", "Checklist Prep", "Outcome Delivery" ].map((step, i) => (
                 <div key={i} className="group p-10 bg-white/[0.03] border border-white/5 rounded-[3.5rem] text-center relative transition-all duration-700 hover:bg-[#A07A41] shadow-2xl group shadow-inner">
                    <div className="text-5xl md:text-7xl font-serif font-black text-[#A07A41]/10 italic mb-8 group-hover:text-black transition-colors duration-500 italic">0{i+1}</div>
                    <h4 className="text-white font-serif font-bold text-xs md:text-sm italic group-hover:text-black mb-6 transition-colors duration-500 tracking-tighter uppercase leading-tight italic underline decoration-[#A07A41]/30 group-hover:decoration-black">{step}</h4>
                    <div className="h-[1px] w-12 bg-[#A07A41] mx-auto group-hover:bg-black group-hover:w-full transition-all duration-1000 rounded-full"></div>
                 </div>
              ))}
           </div>
        </section>

        {/* 8. Disclaimer - THE CENTERED ALERT (CENTERED) */}
        <section className="relative py-20 lg:py-32 bg-[#1B2D33] overflow-hidden border-y border-white/5">
           <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 animate-fade-in-up">
              <div className="p-10 md:p-16 bg-[#2A454E]/20 border border-[#A07A41]/20 rounded-[3rem] text-center backdrop-blur-xl shadow-2xl group hover:border-[#A07A41] transition-all duration-500">
                 <ShieldAlert size={40} className="text-[#A07A41] mx-auto mb-6 opacity-60 transition-transform group-hover:scale-125" />
                 <h2 className="text-[#A07A41] text-lg md:text-xl font-serif font-bold mb-4 italic uppercase tracking-widest italic">Compliance.</h2>
                 <p className="text-gray-400 text-xs md:text-sm leading-relaxed italic font-light leading-loose opacity-80 italic shadow-sm italic underline decoration-white/5">
                    Our checklists are for guidance purposes only and <strong className="text-white font-bold underline decoration-[#A07A41]/20">do not guarantee approval</strong> of any application.
                 </p>
              </div>
           </div>
        </section>

        {/* 9. FAQ Section (TOP-RIGHT) */}
        <section className="relative py-24 lg:py-48 bg-[#1B2D33] overflow-hidden border-b border-white/10 shadow-big">
           <div className="px-4 sm:px-6 lg:px-8 max-w-[50rem] mx-auto">
              <div className="text-center mb-24 animate-fade-in-top-right">
                 <h2 className={`text-3xl md:text-5xl font-serif font-bold text-white tracking-tight relative z-10 italic uppercase font-black`}>Logic <br /><span className="italic font-light text-[#A07A41]">Briefing.</span></h2>
              </div>

              <div className="space-y-4 md:space-y-6">
                 {[
                   { q: "Are your checklists generic?", a: "No. Unlike free versions found online, our checklists are prepared specifically for your personal situation and visa category." },
                   { q: "Can a checklist guarantee visa approval?", a: "No checklist can guarantee success, as final decisions rest with UKVI. However, our lists significantly reduce documentation errors." },
                   { q: "Do you help with missing documents?", a: "Yes, we advise on strong alternatives or supporting evidence if a primary document is unavailable for your case." },
                   { q: "How quickly will I receive my checklist?", a: "Most customized roadmaps are delivered within 48 to 72 hours of your information being analyzed." }
                 ].map((faq, index) => (
                    <div 
                       key={index} 
                       className="border border-[#A07A41]/10 px-6 md:px-8 rounded-[3rem] bg-white/[0.03] overflow-hidden transition-all duration-1000 animate-fade-in-up md:opacity-100 shadow-xl shadow-[#000]/10" 
                    >
                       <button 
                         onClick={() => setActiveFaq(activeFaq === index ? null : index)}
                         className="w-full p-8 md:p-14 flex items-center justify-between group outline-none"
                       >
                         <span className={`text-left text-xs md:text-base font-serif transition-colors font-bold italic tracking-tight ${activeFaq === index ? 'text-[#A07A41]' : 'text-gray-300'}`}>{faq.q}</span>
                         <div className={`shrink-0 p-3 rounded-2xl border border-white/5 transition-all duration-500 ${activeFaq === index ? 'bg-[#A07A41] rotate-180 border-[#A07A41]' : 'group-hover:border-[#A07A41]'}`}>
                            <ChevronDown className={`h-4 w-4 transition-colors ${activeFaq === index ? 'text-black' : 'text-[#A07A41]'}`} />
                         </div>
                       </button>
                       <div className={`transition-all duration-700 ease-[cubic-bezier(0.2,1,0.2,1)] px-8 md:px-14 ${activeFaq === index ? 'max-h-[500px] pb-14 opacity-100' : 'max-h-0 opacity-0 overflow-hidden'}`}>
                          <p className="text-gray-500 text-[11px] md:text-xs font-sans font-light italic border-l-2 border-[#A07A41]/20 pl-8 opacity-80 leading-relaxed italic italic">{faq.a}</p>
                       </div>
                    </div>
                 ))}
              </div>
           </div>
        </section>

        {/* 10. Call to Action (BOTTOM-LEFT) */}
        <section className="relative py-24 lg:py-60 bg-[#1B2D33] overflow-hidden">
           <div 
              className="absolute inset-0 z-0 opacity-[0.25] bg-cover bg-center transition-transform duration-[10s] animate-[ken-burns_10s_linear_infinite]"
              style={{ backgroundImage: 'url("/doc.jpg")' }}
           >
              <div className="absolute inset-0 bg-[#1B2D33]/80 backdrop-blur-[2px]"></div>
           </div>
           <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 animate-fade-in-bottom-left relative z-10">
              <div className="p-12 md:p-24 bg-white/[0.02] border border-white/10 rounded-[5rem] backdrop-blur-3xl relative overflow-hidden shadow-2xl text-center group">
                 <div className="absolute top-0 right-0 p-40 opacity-[0.03] scale-[5] rotate-[15deg] transition-transform duration-[5s] group-hover:text-[#A07A41] pointer-events-none"><ListChecks size={300} /></div>
                 
                 <h2 className="text-3xl md:text-5xl lg:text-7xl font-serif font-bold text-white mb-10 tracking-tighter leading-none italic uppercase decoration-[#A07A41]/10 underline underline-offset-[24px] decoration-8">Tailored <br /><span className="italic font-light text-[#A07A41] lowercase drop-shadow-2xl">Checklists.</span></h2>
                 
                 <p className="text-gray-400 text-xs md:text-lg font-sans font-light italic leading-relaxed mb-16 max-w-xl mx-auto opacity-70">
                    Avoid mistakes before you apply. Contact us to receive a tailored supporting document checklist today.
                 </p>

                 <div className="flex flex-col md:flex-row items-center justify-center gap-12 mb-16">
                    <div className="flex items-center gap-3 group cursor-pointer">
                       <Mail size={18} className="text-[#A07A41]" />
                       <span className="text-white font-serif font-bold text-sm md:text-xl italic group-hover:text-[#A07A41] transition-transform group-hover:translate-x-1">legal@hsco.co</span>
                    </div>
                    <div className="flex items-center gap-3 group cursor-pointer">
                       <Phone size={18} className="text-[#A07A41]" />
                       <span className="text-white font-serif font-bold text-sm md:text-xl italic group-hover:text-[#A07A41] transition-transform group-hover:translate-x-1">+44 20 745 9210</span>
                    </div>
                 </div>

                 <div role="button" className="group relative inline-flex items-center justify-center gap-3 px-10 py-5 bg-[#1B2D33] border border-white/10 text-white font-bold tracking-widest uppercase text-[10px] md:text-[13px] rounded transition-all duration-300 hover:bg-[#A07A41] cursor-pointer shadow-2xl overflow-hidden hover:scale-110 active:scale-95">
                    <span className="relative z-10 font-bold">Get My Checklist</span>
                    <ArrowRight size={16} className="relative z-10 transform group-hover:translate-x-1 transition-transform duration-300" />
                 </div>
              </div>
           </div>
        </section>

      </main>
    </div>
  );
};

export default SupportingDocumentChecklistsPage;
