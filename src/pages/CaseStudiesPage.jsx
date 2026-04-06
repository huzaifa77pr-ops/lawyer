import React, { useEffect } from 'react';
import { 
  Database, BookOpen, UserCheck, AlertCircle, ArrowRight, CheckSquare, 
  FileSearch, Briefcase, ShieldCheck, Layers, Activity, ShieldAlert,
  Mail, Phone, Clock, MapPin, Globe, Award
} from 'lucide-react';

const CaseStudiesPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const cases = [
    {
      id: 1,
      title: "UK Student Visa Application Support",
      sub: "Document Preparation Support",
      situation: "The client was applying for a UK student visa but was unsure about the required supporting documents and financial evidence.",
      challenges: [
        "Incomplete financial documentation",
        "Lack of clarity in supporting evidence",
        "Risk of application refusal"
      ],
      approach: [
        "Provided a tailored document checklist",
        "Reviewed financial and supporting documents",
        "Guided the client on proper submission"
      ],
      outcome: "The client submitted a complete and well-structured application, reducing the risk of delays and refusal.",
      image: "/case1.jpg",
      animText: "animate-fade-in-top-left",
      animImg: "animate-fade-in-bottom-right"
    },
    {
      id: 2,
      title: "Spouse Visa Application (Complex Case)",
      sub: "Supporting Documentation",
      situation: "The client needed to provide strong evidence of a genuine relationship for a spouse visa application.",
      challenges: [
        "Insufficient supporting documents",
        "Weak presentation of relationship evidence"
      ],
      approach: [
        "Organized relationship evidence",
        "Structured supporting documents clearly",
        "Provided guidance on additional documentation"
      ],
      outcome: "The client presented a clear and comprehensive application with properly structured evidence.",
      image: "/case2.jpg",
      animText: "animate-fade-in-bottom-left",
      animImg: "animate-fade-in-top-right",
      align: "right"
    },
    {
      id: 3,
      title: "Visa Refusal & Appeal Documentation",
      sub: "Appeal Documentation Support",
      situation: "The client’s visa application was refused due to insufficient supporting evidence.",
      challenges: [
        "Missing key documents",
        "Weak explanation of case"
      ],
      approach: [
        "Reviewed refusal reasons",
        "Identified missing documents",
        "Structured appeal documentation"
      ],
      outcome: "The client submitted a stronger and more complete appeal file addressing previous issues.",
      image: "/case3.jpg",
      animText: "animate-fade-in-bottom-right",
      animImg: "animate-fade-in-top-left"
    },
    {
      id: 4,
      title: "Immigration Form Error Correction",
      sub: "Immigration Form Review – Error Prevention",
      situation: "The client had completed their visa application forms but was unsure about accuracy.",
      challenges: [
        "Incorrect entries",
        "Inconsistent information"
      ],
      approach: [
        "Reviewed form responses",
        "Corrected inconsistencies",
        "Ensured alignment with documents"
      ],
      outcome: "The client submitted a more accurate and consistent application.",
      image: "/case4.jpg",
      animText: "animate-fade-in-top-right",
      animImg: "animate-fade-in-bottom-left",
      align: "right"
    }
  ];

  return (
    <div className="min-h-screen bg-[#1B2D33] flex flex-col overflow-x-hidden text-white font-sans selection:bg-[#A07A41] selection:text-black">
      <main className="flex-grow">
        
        {/* 1. Hero Section - AUTHORITY + PROOF */}
        <section className="relative min-h-[85vh] flex items-center justify-center pt-32 pb-16 overflow-hidden bg-[#1B2D33]">
          <div 
             className="absolute inset-0 z-0 opacity-20 bg-cover bg-center transition-transform duration-[12s] scale-110 animate-[ken-burns_12s_linear_infinite]"
             style={{ backgroundImage: 'url("/case.jpg")' }}
          >
             <div className="absolute inset-0 bg-[#1B2D33]/70 backdrop-blur-[1px]"></div>
          </div>
          
          <div className="relative z-10 px-4 sm:px-6 lg:px-8 max-w-[85rem] mx-auto w-full text-center">
             <div className="animate-fade-in-down">
                <div className="inline-flex items-center gap-3 mb-8 px-5 py-2 bg-white/5 border border-white/10 rounded-full backdrop-blur-3xl shadow-xl">
                   <Database size={12} className="text-[#A07A41]" />
                   <span className="text-[#A07A41] uppercase tracking-[0.4em] text-[10px] font-black italic">Client Intelligence UK</span>
                </div>
                
                <h1 className="text-3xl md:text-5xl lg:text-6xl font-serif font-bold text-white leading-[1.1] mb-10 tracking-tighter decoration-[#A07A41]/10 underline underline-offset-[24px] decoration-4">
                   Case Studies – <br />
                   <span className="italic font-light text-[#A07A41] lowercase">Real Outcomes.</span>
                </h1>
                
                <p className="text-gray-300 text-sm md:text-base font-sans font-light leading-relaxed mb-12 max-w-2xl mx-auto italic opacity-80 border-x border-[#A07A41]/10 px-8 lg:px-16">
                   Explore how we have supported clients across a range of legal and immigration matters in the UK. We focus on real scenarios where documentation quality turned the tide.
                </p>

                <div className="flex flex-col sm:flex-row justify-center gap-8 items-center mb-12">
                   <div className="flex items-center gap-3 text-white/30 text-[10px] font-black uppercase tracking-widest italic border-b border-white/10 pb-1">
                      <Globe size={14} className="text-[#A07A41]" />
                      Global Precedents
                   </div>
                   <div className="flex items-center gap-3 text-white/30 text-[10px] font-black uppercase tracking-widest italic border-b border-white/10 pb-1">
                      <Award size={14} className="text-[#A07A41]" />
                      Outcome Mapping
                   </div>
                </div>

                <div role="button" className="group relative inline-flex items-center justify-center gap-4 px-12 py-5 bg-[#1B2D33] border border-white/10 text-white font-bold tracking-[0.3em] uppercase text-[11px] rounded transition-all duration-300 hover:bg-[#A07A41] cursor-pointer shadow-2xl overflow-hidden hover:scale-105 active:scale-95 shadow-inner">
                   <span className="relative z-10 font-bold">Explore The Archives</span>
                   <ArrowRight size={16} className="relative z-10 transform group-hover:translate-x-1 transition-transform duration-300" />
                </div>
             </div>
          </div>
        </section>

        {/* 2. Introduction Section - THE CREDIBILITY BANNER */}
        <section className="relative py-24 bg-white/[0.02] border-y border-white/5 overflow-hidden">
           <div className="max-w-4xl mx-auto px-4 text-center animate-fade-in-up">
              <h2 className="text-[#A07A41] text-[10px] md:text-[11px] uppercase tracking-[0.5em] font-black mb-8 italic">Our Strategic Approach</h2>
              <h3 className="text-2xl md:text-4xl font-serif font-bold text-white mb-8 tracking-tighter italic">No fake guarantees. <br /><span className="text-[#A07A41]">Realistic tone.</span></h3>
              <p className="text-gray-300 text-sm md:text-base font-sans font-light leading-relaxed opacity-70 italic border-x-2 border-[#A07A41]/10 px-8 max-w-2xl mx-auto mb-16">
                 Every case is different. We focus on understanding the specific situation, identifying risks, and providing structured support to improve the overall quality of the application.
              </p>
              <div className="inline-flex items-center gap-6 text-white/20 text-[10px] font-black italic tracking-widest">
                 <ShieldCheck size={20} className="text-[#A07A41] opacity-40" />
                 Professional Credibility
                 <Activity size={20} className="text-[#A07A41] opacity-40" />
              </div>
           </div>
        </section>

        {/* 3. Case Studies - THE ALTERNATING SPOTLIGHT */}
        <section className="relative py-24 lg:py-48 bg-[#1B2D33] overflow-hidden">
           <div className="max-w-[85rem] mx-auto px-4">
              <div className="space-y-32 lg:space-y-64">
                 {cases.map((cs, i) => (
                    <div key={i} className={`flex flex-col lg:flex-row items-center gap-20 lg:gap-32 ${cs.align === 'right' ? 'lg:flex-row-reverse' : ''}`}>
                       
                       {/* Text Side (RESPONSIVE TEXT SIZE) */}
                       <div className={`lg:w-1/2 ${cs.animText}`}>
                          <div className="inline-block p-1 bg-[#A07A41]/10 rounded-full px-8 py-2 text-[#A07A41] font-black uppercase text-[10px] tracking-widest mb-10 border border-[#A07A41]/20 shadow-sm">Case Investigation 0{i+1}</div>
                          <h3 className="text-2xl md:text-4xl lg:text-5xl font-serif font-bold text-white tracking-tighter leading-tight mb-10 italic">{cs.title}</h3>
                          
                          <div className="space-y-12">
                             <div className="group">
                                <h4 className="text-white font-serif font-bold text-base md:text-xl lg:text-2xl italic uppercase tracking-tighter mb-4 flex items-center gap-3 group-hover:text-[#A07A41] transition-colors leading-none">
                                   <AlertCircle size={20} className="text-[#A07A41]" />
                                   Client Situation
                                </h4>
                                <p className="text-gray-300 text-sm md:text-base lg:text-base italic font-light leading-relaxed border-l-2 border-[#A07A41]/20 pl-8 opacity-80 italic italic italic">{cs.situation}</p>
                             </div>

                             <div className="group">
                                <h4 className="text-white font-serif font-bold text-base md:text-xl lg:text-2xl italic uppercase tracking-tighter mb-6 flex items-center gap-3 group-hover:text-[#A07A41] transition-colors leading-none">
                                   <Layers size={20} className="text-[#A07A41]" />
                                   The Challenges
                                </h4>
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 ml-8">
                                   {cs.challenges.map((ch, idx) => (
                                      <div key={idx} className="flex items-center gap-4 text-gray-500 text-[10px] md:text-xs font-black uppercase tracking-widest italic p-4 bg-white/[0.02] border border-white/5 rounded-2xl group-hover:border-[#A07A41]/20 transition-all shadow-inner font-sans">
                                         <span className="h-1.5 w-1.5 rounded-full bg-[#A07A41] shadow-2xl"></span>
                                         {ch}
                                      </div>
                                   ))}
                                </div>
                             </div>

                             <div className="group p-8 md:p-14 bg-white/[0.01] border border-white/5 rounded-[4rem] shadow-shadow-big relative overflow-hidden group hover:border-[#A07A41]/20 transition-all duration-700">
                                <div className="absolute top-0 right-0 p-12 opacity-[0.04] scale-[4] group-hover:text-[#A07A41] transition-all duration-700 pointer-events-none"><FileSearch size={100} /></div>
                                <h4 className="text-[#A07A41] text-lg md:text-2xl font-serif font-bold italic uppercase tracking-tighter mb-6 relative z-10 leading-none">Our Approach</h4>
                                <ul className="space-y-4 relative z-10 ml-4">
                                   {cs.approach.map((ap, idx) => (
                                      <li key={idx} className="flex items-start gap-4 text-gray-400 text-sm md:text-base lg:text-base font-sans font-light italic leading-tight italic underline decoration-white/5 underline-offset-8 decoration-dotted decoration-1">
                                         <CheckSquare size={16} className="text-[#A07A41] shrink-0 mt-1" />
                                         {ap}
                                      </li>
                                   ))}
                                </ul>
                             </div>

                             <div className="group p-8 md:p-10 bg-[#A07A41]/5 border-l-4 border-[#A07A41] rounded-[2rem] shadow-2xl shadow-black/40">
                                <h4 className="text-white font-serif font-bold text-base md:text-xl italic uppercase tracking-tighter mb-4 leading-none uppercase">The Outcome</h4>
                                <p className="text-gray-200 text-sm md:text-base lg:text-base font-sans font-light italic leading-relaxed opacity-90 italic italic">{cs.outcome}</p>
                             </div>
                          </div>
                       </div>

                       {/* Image Side (MULTI-DIRECTIONAL) */}
                       <div className={`lg:w-1/2 ${cs.animImg}`}>
                          <div className="relative p-2 bg-white/5 border border-white/10 rounded-[4rem] shadow-biggest overflow-hidden group backdrop-blur-sm">
                             <img src={cs.image} alt={cs.title} className="w-full h-[400px] lg:h-[600px] object-cover rounded-[3.5rem] grayscale group-hover:grayscale-0 transition-all duration-[2.5s] scale-110 group-hover:scale-100" />
                             <div className="absolute inset-0 bg-[#1B2D33]/30 group-hover:bg-transparent transition-all duration-1000"></div>
                             <div className="absolute top-10 right-10 p-4 bg-black/60 backdrop-blur-3xl border border-[#A07A41]/20 rounded-full text-[#A07A41] shadow-2xl group-hover:scale-110 transition-transform"><Briefcase size={22} /></div>
                             <div className="absolute bottom-10 left-10 p-8 bg-black/80 backdrop-blur-3xl border-l-[3px] border-[#A07A41] max-w-[280px] shadow-biggest translate-y-12 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-700">
                                <p className="text-white font-serif italic text-xs italic italic leading-relaxed">"Verification identified hidden application risks in under {cs.challenges.length * 4} hours of forensic research."</p>
                             </div>
                          </div>
                       </div>

                    </div>
                 ))}
              </div>
           </div>
        </section>

        {/* 4. Why They Matter - THE TRUST GRID */}
        <section className="relative py-24 lg:py-[15rem] bg-[#1B2D33] overflow-hidden border-y border-white/5 shadow-inner">
           <div className="px-4 sm:px-6 lg:px-8 max-w-[85rem] mx-auto text-center mb-32 animate-fade-in-up">
              <span className="text-[#A07A41] uppercase tracking-[0.8em] text-[10px] font-black mb-10 block font-serif underline decoration-[#A07A41]/10 underline-offset-8">Authority Mapping</span>
              <h2 className="text-4xl md:text-6xl font-serif font-bold text-white tracking-tight italic uppercase drop-shadow-biggest">Why These <br /><span className="italic font-light text-[#A07A41]">Studies Matter.</span></h2>
           </div>

           <div className="px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-10 animate-fade-in-bottom-left">
              {[
                { t: "Cross-Sector Insight", d: "Demonstrating our ability to handle different types of cases with a structured and practical approach." },
                { t: "Risk Reduction Focus", d: "Our goal is always on improving documentation quality and reducing the threat of application refusal." },
                { t: "Structured Storytelling", d: "We turn complex legal challenges into clear, evidential narratives that decision-makers understand." }
              ].map((item, i) => (
                 <div key={i} className="group p-12 bg-white/[0.02] border border-white/10 rounded-[4rem] hover:bg-[#A07A41] transition-all duration-700 shadow-biggest text-center group shadow-white/5">
                    <BookOpen size={30} className="text-[#A07A41] group-hover:text-black mx-auto mb-10 transition-colors duration-500" />
                    <h4 className="text-white font-serif font-bold text-lg md:text-2xl italic uppercase group-hover:text-black mb-6 tracking-tighter leading-tight transition-colors">{item.t}</h4>
                    <p className="text-gray-400 text-sm md:text-base font-sans font-light italic leading-relaxed group-hover:text-black/70 italic transition-colors leading-loose underline decoration-white/5 underline-offset-4 decoration-dotted decoration-1">{item.d}</p>
                 </div>
              ))}
           </div>
        </section>

        {/* 5. Disclaimer - THE INSET ALERT */}
        <section className="relative py-20 lg:py-40 bg-[#1B2D33] overflow-hidden border-b border-white/5 shadow-inner">
           <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 animate-fade-in-top-right">
              <div className="p-12 md:p-[5rem] bg-[#2A454E]/10 border border-[#A07A41]/20 rounded-[5rem] text-center backdrop-blur-3xl shadow-biggest group hover:border-[#A07A41] transition-all duration-700">
                 <ShieldAlert size={40} className="text-[#A07A41] mx-auto mb-10 opacity-50 transition-transform group-hover:rotate-12 group-hover:scale-125 duration-700" />
                 <h2 className="text-[#A07A41] text-lg md:text-2xl lg:text-3xl font-serif font-bold mb-6 italic uppercase tracking-[0.4em] font-black underline decoration-[#A07A41]/10">Case Evidence Disclaimer.</h2>
                 <p className="text-gray-300 text-sm md:text-base lg:text-lg font-sans font-light leading-relaxed opacity-70 italic shadow-sm italic underline decoration-white/5 decoration-dotted underline-offset-8 decoration-2">
                    The case studies presented are for illustrative purposes only. Outcomes may vary. We <strong className="text-white font-bold opacity-100 shadow-biggest underline decoration-[#A07A41]/30">do not guarantee the success</strong> of any application or legal matter.
                 </p>
              </div>
           </div>
        </section>

        {/* 6. Call to Action - THE PROFESSIONAL HUB */}
        <section className="relative py-24 lg:py-[20rem] bg-[#1B2D33] overflow-hidden">
           <div 
              className="absolute inset-0 z-0 opacity-[0.25] bg-cover bg-center transition-transform duration-[12s] animate-[ken-burns_12s_linear_infinite]"
              style={{ backgroundImage: 'url("/case.jpg")' }}
           >
              <div className="absolute inset-0 bg-[#1B2D33]/80 backdrop-blur-[2px]"></div>
           </div>
           <div className="max-w-[85rem] mx-auto px-4 sm:px-6 lg:px-8 animate-fade-in-bottom-right relative z-10 text-center">
              <div className="p-16 md:p-32 bg-white/[0.01] border border-white/10 rounded-[6rem] backdrop-blur-3xl relative overflow-hidden shadow-biggest group shadow-inner">
                 <div className="absolute top-0 left-0 p-40 opacity-[0.03] scale-[6] rotate-[-15deg] transition-transform duration-[8s] group-hover:text-[#A07A41] pointer-events-none"><UserCheck size={300} /></div>
                 
                 <h2 className="text-4xl md:text-7xl lg:text-9xl font-serif font-bold text-white mb-16 tracking-tighter leading-none italic uppercase decoration-[#A07A41]/10 underline underline-offset-[48px] decoration-8">Discuss <br /><span className="italic font-light text-[#A07A41] lowercase drop-shadow-biggest tracking-widest">Your Case.</span></h2>
                 
                 <p className="text-gray-300 text-sm md:text-xl font-sans font-light italic leading-relaxed mb-20 max-w-2xl mx-auto opacity-70 border-b border-white/5 pb-20 italic">
                    If you need professional support with your application or documentation, contact us today to discuss your situation in a structured, authority-focused setting.
                 </p>

                 <div className="flex flex-col md:flex-row items-center justify-center gap-10 md:gap-24 mb-24">
                    <div className="flex items-center gap-5 group cursor-pointer">
                       <Mail size={24} className="text-[#A07A41]" />
                       <span className="text-white font-serif font-bold text-base md:text-3xl italic group-hover:text-[#A07A41] transition-transform group-hover:translate-x-1 underline decoration-white/10 underline-offset-8 decoration-2 italic italic">legal@hsco.co</span>
                    </div>
                    <div className="flex items-center gap-5 group cursor-pointer">
                       <Phone size={24} className="text-[#A07A41]" />
                       <span className="text-white font-serif font-bold text-base md:text-3xl italic group-hover:text-[#A07A41] transition-transform group-hover:translate-x-1 underline decoration-white/10 underline-offset-8 decoration-2 italic italic">+44 20 745 9210</span>
                    </div>
                 </div>

                 <div role="button" className="group relative inline-flex items-center justify-center gap-6 px-16 py-8 bg-[#1B2D33] border border-white/10 text-white font-bold tracking-[0.4em] uppercase text-[12px] md:text-[15px] rounded transition-all duration-300 hover:bg-[#A07A41] cursor-pointer shadow-biggest overflow-hidden hover:scale-110 active:scale-95 shadow-inner">
                    <span className="relative z-10 font-black tracking-widest">Discuss My Case</span>
                    <ArrowRight size={22} className="relative z-10 transform group-hover:translate-x-1 transition-transform duration-500" />
                 </div>
              </div>
           </div>
        </section>

      </main>
    </div>
  );
};

export default CaseStudiesPage;
