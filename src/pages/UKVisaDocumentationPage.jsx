import React, { useEffect, useState } from 'react';
import { 
  Globe, Plane, FileCheck, AlertTriangle, GraduationCap, 
  Briefcase, Users, CheckCircle, Clock, ArrowRight, 
  ShieldAlert, Mail, Phone, ChevronDown, Info, Landmark,
  Search, ShieldCheck
} from 'lucide-react';

const UKVisaDocumentationPage = () => {
  const [activeFaq, setActiveFaq] = useState(null);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const visaTypes = [
    { t: "Student Visas", i: GraduationCap, d: "Tier 4 & short-term study" },
    { t: "Work Visas", i: Briefcase, d: "Skilled Worker & Health Care" },
    { t: "Family & Spouse", i: Users, d: "Marriage & dependent visas" },
    { t: "Visitor Visas", i: Plane, d: "Tourism & short business stay" },
    { t: "Business & Investor", i: Landmark, d: "Innovator & high-value routes" }
  ];

  return (
    <div className="min-h-screen bg-[#1B2D33] flex flex-col overflow-x-hidden text-white font-sans selection:bg-[#A07A41] selection:text-black">
      <main className="flex-grow">
        
        {/* 1. Hero Section */}
        <section className="relative min-h-[85vh] flex items-center justify-center pt-32 pb-16 overflow-hidden bg-[#1B2D33]">
          <div 
             className="absolute inset-0 z-0 opacity-15 bg-cover bg-center transition-transform duration-[6s] scale-110 animate-[ken-burns_10s_linear_infinite]"
             style={{ backgroundImage: 'url("/imm.jpg")' }}
          >
             <div className="absolute inset-0 bg-[#1B2D33]/75 backdrop-blur-[1px]"></div>
          </div>

          <div className="relative z-10 px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto text-center">
             <div className="animate-fade-in-down">
                <div className="inline-flex items-center gap-2 px-5 py-1.5 border border-[#A07A41]/30 rounded-full bg-white/5 backdrop-blur-md mb-8">
                   <div className="h-1 w-1 rounded-full bg-[#A07A41] animate-pulse"></div>
                   <span className="text-[#A07A41] uppercase tracking-[0.4em] text-[9px] font-black italic">Immigration Support UK</span>
                </div>
                
                <h1 className="text-3xl md:text-5xl lg:text-6xl font-serif font-bold text-white leading-[1.1] mb-8 tracking-tighter decoration-[#A07A41]/10 underline underline-offset-[20px] decoration-4">
                   UK VISA <br />
                   <span className="italic font-light text-[#A07A41]">Documentation.</span>
                </h1>
                
                <p className="text-gray-400 text-xs md:text-sm lg:text-base font-sans font-light leading-relaxed mb-12 max-w-xl mx-auto italic opacity-80 border-l border-r border-[#A07A41]/20 px-8">
                   Professional assistance in preparing accurate and complete UK visa application documents. Ensuring absolute compliance with immigration requirements.
                </p>

                <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
                   <div role="button" className="group relative flex items-center justify-center gap-4 px-10 py-5 bg-[#1B2D33] border border-white/10 text-white font-bold tracking-widest uppercase text-[10px] rounded transition-all duration-300 hover:bg-[#A07A41] cursor-pointer shadow-2xl overflow-hidden animate-fade-in-up">
                      <span className="relative z-10">Start Process</span>
                      <ArrowRight size={14} className="relative z-10 transform group-hover:translate-x-1 transition-transform duration-300" />
                   </div>
                   <div className="flex items-center gap-2 text-white/30 text-[8px] font-black uppercase tracking-widest italic">
                      <Clock size={12} className="text-[#A07A41]" />
                      24H Initial Review
                   </div>
                </div>
             </div>
          </div>
        </section>

        {/* 2. Why Documentation Matters */}
        <section className="relative py-20 lg:py-32 bg-[#1B2D33] overflow-hidden">
           <div className="max-w-[80rem] mx-auto px-4 sm:px-6 lg:px-8 animate-fade-in-left">
              <div className="bg-white/[0.02] rounded-[3.5rem] overflow-hidden border border-white/5 shadow-2xl relative">
                 <div className="grid lg:grid-cols-2">
                    <div className="p-10 md:p-16 flex flex-col justify-center">
                       <h2 className="text-white text-2xl md:text-4xl font-serif font-bold mb-8 tracking-tighter italic leading-tight">
                          Why <span className="text-[#A07A41]">Accuracy</span> <br />is Vital.
                       </h2>
                       <p className="text-gray-400 text-xs md:text-[13px] leading-relaxed italic font-light italic mb-8 opacity-80 border-l border-[#A07A41] pl-8">
                          Incorrect or incomplete documentation is one of the most common reasons for UK visa refusals. Even small errors can lead to rejections.
                       </p>
                       <div className="bg-[#A07A41]/10 border border-[#A07A41]/30 p-8 rounded-[2.5rem] group hover:bg-[#A07A41] transition-all duration-500">
                          <div className="flex items-center gap-4 mb-4">
                             <AlertTriangle size={20} className="text-[#A07A41] group-hover:text-black" />
                             <span className="text-white font-black group-hover:text-black uppercase text-[9px] tracking-widest italic">The Hard Reality</span>
                          </div>
                          <p className="text-[#A07A41] group-hover:text-black font-serif italic text-lg transition-all group-hover:font-black">"One mistake = Rejection."</p>
                       </div>
                    </div>
                    <div className="relative min-h-[300px] bg-[#1B2D33]">
                       <div className="absolute inset-0 bg-cover bg-center grayscale brightness-50 transition-all duration-1000" style={{ backgroundImage: 'url("/imm1.jpg")' }}></div>
                       <div className="absolute inset-0 bg-gradient-to-r from-[#1B2D33] via-[#1B2D33]/60 to-transparent"></div>
                       <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                          <ShieldAlert size={120} className="text-[#A07A41] opacity-5" />
                       </div>
                    </div>
                 </div>
              </div>
           </div>
        </section>

        {/* 3. Types of Visas */}
        <section className="relative py-20 lg:py-32 bg-[#1B2D33] overflow-hidden border-y border-white/5">
           <div className="px-4 sm:px-6 lg:px-8 max-w-[90rem] mx-auto text-center mb-24 animate-fade-in-up">
              <span className="text-[#A07A41] uppercase tracking-[0.5em] text-[9px] font-black mb-6 block font-serif">Compliance Scope</span>
              <h2 className="text-3xl md:text-5xl font-serif font-bold text-white tracking-tight italic">Applications <span className="italic font-light text-[#A07A41]">Supported.</span></h2>
           </div>

           <div className="px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-5 gap-4 md:gap-6 animate-fade-in-right">
              {visaTypes.map((visa, i) => (
                 <div key={i} className="group p-8 bg-white/[0.02] border border-white/5 rounded-[3rem] text-center hover:border-[#A07A41]/40 transition-all duration-700 shadow-xl">
                    <div className="h-14 w-14 bg-[#2A454E] rounded-[1.2rem] flex items-center justify-center text-[#A07A41] mx-auto mb-6 group-hover:bg-[#A07A41] group-hover:text-black group-hover:rotate-12 transition-all">
                       <visa.i size={20} />
                    </div>
                    <h4 className="text-white font-serif font-bold text-sm md:text-base italic mb-2 tracking-tighter uppercase">{visa.t}</h4>
                    <span className="text-gray-600 text-[8px] uppercase font-black tracking-widest">{visa.d}</span>
                 </div>
              ))}
           </div>
        </section>

        {/* 4. Required Documents */}
        <section className="relative py-20 lg:py-40 bg-[#1B2D33] overflow-hidden">
           <div className="px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto animate-fade-in-right">
              <div className="mb-20 text-center">
                 <h2 className="text-3xl md:text-4xl font-serif font-bold text-white tracking-tight italic">Essential <br /><span className="italic font-light text-[#A07A41]">Checklist.</span></h2>
              </div>
              
              <div className="relative space-y-10">
                 <div className="absolute left-6 top-1 bottom-1 w-[1px] bg-gradient-to-b from-[#A07A41] via-[#A07A41]/5 to-[#A07A41] hidden md:block opacity-20"></div>
                 
                 {[
                   { t: "Valid Passport", d: "Current and historical travel documents required.", i: Globe },
                   { t: "Financial Proof", d: "Certified bank statements & proof of funds.", i: Landmark },
                   { t: "Proof of Accommodation", d: "Legal housing confirmations or host letters.", i: CheckCircle },
                   { t: "Employment / Study Documents", d: "CAS letters, work contracts, or enrollment proofs.", i: GraduationCap },
                   { t: "Invitation Letters", d: "Formal sponsorship letters from UK entities.", i: Mail },
                   { t: "Supporting Evidence", d: "Varies significantly based on the specific visa category.", i: Info }
                 ].map((doc, i) => (
                    <div key={i} className="flex gap-8 md:gap-14 items-start group">
                       <div className="h-10 w-10 shrink-0 bg-[#2A454E] border border-[#A07A41]/30 rounded-[1.1rem] flex items-center justify-center text-[#A07A41] z-10 transition-all group-hover:rotate-[360deg] group-hover:bg-[#A07A41] group-hover:text-black duration-700 shadow-xl">
                          <doc.i size={16} />
                       </div>
                       <div className="pt-2 border-b border-white/5 pb-10 w-full group-hover:border-[#A07A41]/20 transition-colors">
                          <h4 className="text-white font-serif font-bold text-lg italic mb-2 tracking-tighter uppercase group-hover:text-[#A07A41] transition-colors">{doc.t}</h4>
                          <p className="text-gray-500 text-xs font-sans font-light italic leading-relaxed opacity-70 italic">{doc.d}</p>
                       </div>
                    </div>
                 ))}
              </div>
           </div>
        </section>

        {/* 5. Our Services */}
        <section className="relative py-20 lg:py-40 bg-[#1B2D33] overflow-hidden border-y border-white/5">
           <div className="px-4 sm:px-6 lg:px-8 max-w-[90rem] mx-auto text-center mb-24 animate-fade-in-up">
              <span className="text-[#A07A41] uppercase tracking-[0.5em] text-[9px] font-black mb-10 block font-serif">Direct Support</span>
              <h2 className="text-4xl md:text-5xl font-serif font-bold text-white tracking-tight italic opacity-90">Expert <span className="italic font-light text-[#A07A41]">Documentation.</span></h2>
           </div>

           <div className="px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-5 animate-fade-in-up">
              {[
                { t: "Tailored Checklist", d: "Visa-specific document guide.", img: "/imm2.jpg" },
                { t: "Verification Review", d: "Professional evidence auditing.", img: "/imm3.jpg" },
                { t: "Gap Identification", d: "Spotting weak or missing proof.", img: "/imm4.jpg" },
                { t: "Format Guidance", d: "Compliance with UKVI standards.", img: "/imm5.jpg" },
                { t: "Risk Mitigation", d: "Minimizing refusal trajectories.", img: "/imm1.jpg" }
              ].map((service, i) => (
                 <div key={i} className="group relative h-[420px] md:h-[550px] rounded-[3.5rem] overflow-hidden transition-all duration-1000 border border-white/5 shadow-2xl">
                    <div className="absolute inset-0">
                       <img src={service.img} alt={service.t} className="w-full h-full object-cover grayscale brightness-50 group-hover:grayscale-0 group-hover:scale-110 transition-all duration-[2s]" />
                       <div className="absolute inset-0 bg-gradient-to-t from-[#1B2D33] via-[#1B2D33]/40 to-transparent"></div>
                    </div>
                    <div className="absolute bottom-0 left-0 p-8 w-full z-10 transition-all group-hover:pb-12 flex flex-col justify-end min-h-[40%]">
                       <div className="h-[2px] w-10 bg-[#A07A41] mb-6 group-hover:w-full transition-all duration-700"></div>
                       <h4 className="text-white font-serif font-bold text-lg mb-4 italic group-hover:text-[#A07A41] transition-colors">{service.t}</h4>
                       <p className="text-gray-400 text-[10px] font-sans font-light italic h-0 opacity-0 group-hover:h-auto group-hover:opacity-90 transition-all duration-500">{service.d}</p>
                    </div>
                 </div>
              ))}
           </div>
        </section>

        {/* 6. Why Choose Us */}
        <section className="relative py-24 lg:py-48 bg-[#1B2D33] overflow-hidden">
           <div className="px-4 sm:px-6 lg:px-8 max-w-[80rem] mx-auto flex flex-col lg:flex-row items-center gap-24 md:gap-32 animate-fade-in-left">
              <div className="lg:w-1/2">
                 <h2 className="text-3xl md:text-6xl font-serif font-bold text-white mb-10 tracking-tighter leading-none italic">The H&S <br /><span className="text-[#A07A41]">Standard.</span></h2>
                 <p className="text-gray-400 text-xs md:text-sm italic mb-14 opacity-70 leading-loose border-l-2 border-[#A07A41] pl-10 font-light italic">
                    Knowledge of UK visa requirements, extreme attention to detail, and confidential handling of your immigration documents.
                 </p>
                 <div className="grid grid-cols-2 gap-6 md:gap-10">
                    {[
                      { l: "Deep Knowledge", s: "UKVI Compliance" },
                      { l: "Detail Focused", s: "Error-Free focus" }
                    ].map((m, i) => (
                       <div key={i} className="p-8 bg-white/[0.03] rounded-[3rem] border border-white/5 group hover:border-[#A07A41] transition-all duration-500 shadow-2xl">
                          <ShieldCheck className="text-[#A07A41] mb-5 transition-transform group-hover:scale-125" size={24} />
                          <h4 className="text-white font-serif font-bold text-base md:text-lg italic group-hover:text-[#A07A41] mb-1">{m.l}</h4>
                          <span className="text-[8px] uppercase font-black text-gray-600 tracking-[0.3em]">{m.s}</span>
                       </div>
                    ))}
                 </div>
              </div>

              <div className="lg:w-1/2 p-20 md:p-32 bg-white/[0.02] rounded-[7rem] relative flex items-center justify-center group shadow-inner border border-white/5">
                 <div className="absolute inset-0 border-[2px] border-dashed border-[#A07A41]/10 rounded-[7rem] rotate-[15deg] transition-transform duration-[15s] group-hover:rotate-0"></div>
                 <Landmark size={150} className="text-[#A07A41] transition-transform duration-700 group-hover:scale-110 opacity-30 shadow-2xl" />
              </div>
           </div>
        </section>

        {/* 7. Our Process */}
        <section className="relative py-20 lg:py-40 bg-[#1B2D33] overflow-hidden border-t border-white/5">
           <div className="px-4 sm:px-6 lg:px-8 max-w-[90rem] mx-auto text-center mb-32 animate-fade-in-up">
              <span className="text-[#A07A41] uppercase tracking-[0.5em] text-[10px] font-black mb-10 block font-serif">Workflow Mapping</span>
              <h2 className="text-4xl md:text-5xl font-serif font-bold text-white tracking-tight italic">Efficient <span className="italic font-light text-[#A07A41]">Execution.</span></h2>
           </div>

           <div className="px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-6 animate-fade-in-up">
              {[ "Initial Consult", "Custom Checklist", "Review & Verify", "Final Preparation" ].map((step, i) => (
                 <div key={i} className="group p-10 bg-white/[0.03] border border-white/5 rounded-[3.5rem] text-center relative transition-all duration-700 hover:bg-[#A07A41] shadow-2xl group shadow-inner">
                    <div className="text-5xl md:text-7xl font-serif font-black text-[#A07A41]/10 italic mb-8 group-hover:text-black transition-colors duration-500 italic">0{i+1}</div>
                    <h4 className="text-white font-serif font-bold text-[13px] md:text-base italic group-hover:text-black mb-6 transition-colors duration-500 tracking-tighter uppercase leading-tight italic underline decoration-[#A07A41]/30 group-hover:decoration-black">{step}</h4>
                    <div className="h-[2px] w-14 bg-[#A07A41] mx-auto group-hover:bg-black group-hover:w-full transition-all duration-1000 rounded-full"></div>
                 </div>
              ))}
           </div>
        </section>

        {/* 8. Disclaimer */}
        <section className="relative py-20 lg:py-40 bg-[#1B2D33] overflow-hidden border-y border-white/5 shadow-inner">
           <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 animate-fade-in-up">
              <div className="p-10 md:p-20 bg-white/[0.03] border-l-4 border-[#A07A41] rounded-[3.5rem] relative overflow-hidden flex flex-col md:flex-row items-center gap-12 backdrop-blur-xl shadow-2xl">
                 <div className="md:w-1/4 flex justify-center">
                    <ShieldAlert size={70} className="text-[#A07A41] opacity-50" />
                 </div>
                 <div className="md:w-3/4 text-center md:text-left">
                    <h2 className="text-[#A07A41] text-xl font-serif font-bold mb-6 italic uppercase tracking-widest leading-none">Important Legal Notice.</h2>
                    <p className="text-gray-400 text-xs md:text-[15px] leading-relaxed italic font-light italic leading-loose opacity-70">
                       We assist with document preparation but <strong className="text-white font-bold underline decoration-[#A07A41]/20">do not guarantee visa approval</strong>. All final decisions are made solely by UK Visas and Immigration (UKVI).
                    </p>
                 </div>
              </div>
           </div>
        </section>

        {/* 9. FAQ Section */}
        <section className="relative py-24 lg:py-48 bg-[#1B2D33] overflow-hidden">
           <div className="px-4 sm:px-6 lg:px-8 max-w-[50rem] mx-auto">
              <div className="text-center mb-32 animate-fade-in-up">
                 <h2 className="text-4xl md:text-5xl font-serif font-bold text-white tracking-tight relative z-10 italic drop-shadow-2xl">Procedural <br /><span className="italic font-light text-[#A07A41]">Knowledge.</span></h2>
              </div>

              <div className="space-y-6">
                 {[
                   { q: "Can incorrect documents cause visa rejection?", a: "Yes, incomplete or inaccurate documents are one of the primary reasons for UK visa refusals. Even small errors can lead to immediate rejections." },
                   { q: "Do you submit the visa application for me?", a: "We provide complete preparation and review. Direct submission handling depends on the complexity of your specific case." },
                   { q: "How long does document preparation take?", a: "Preparation typically takes a few business days once we have all your information." },
                   { q: "What happens if a document is missing?", a: "We identify gaps during our review phase and advise on how to obtain or prepare appropriate alternatives." }
                 ].map((faq, index) => (
                    <div 
                       key={index} 
                       className="border border-[#A07A41]/20 rounded-[3.5rem] bg-white/[0.02] shadow-2xl transition-all duration-1000 animate-fade-in-up md:opacity-100" 
                    >
                       <button 
                         onClick={() => setActiveFaq(activeFaq === index ? null : index)}
                         className="w-full p-10 md:p-14 flex items-center justify-between group outline-none"
                       >
                         <span className={`text-left text-[13px] md:text-lg font-serif transition-colors font-bold italic tracking-tight ${activeFaq === index ? 'text-[#A07A41]' : 'text-gray-300'}`}>{faq.q}</span>
                         <div className={`shrink-0 p-4 rounded-2xl border border-white/5 transition-all duration-500 ${activeFaq === index ? 'bg-[#A07A41] rotate-180 border-[#A07A41]' : 'group-hover:border-[#A07A41]'}`}>
                            <ChevronDown className={`h-5 w-5 transition-colors ${activeFaq === index ? 'text-black' : 'text-[#A07A41]'}`} />
                         </div>
                       </button>
                       <div className={`transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] px-10 md:px-14 ${activeFaq === index ? 'max-h-[800px] pb-14 opacity-100' : 'max-h-0 opacity-0 overflow-hidden'}`}>
                          <p className="text-gray-500 text-xs md:text-sm font-sans font-light leading-relaxed italic border-l-2 border-[#A07A41]/20 pl-8 opacity-70 italic">{faq.a}</p>
                       </div>
                    </div>
                 ))}
              </div>
           </div>
        </section>

        {/* 10. Call to Action */}
        <section className="relative py-24 lg:py-60 bg-[#1B2D33] overflow-hidden border-t border-white/5">
           <div 
              className="absolute inset-0 z-0 opacity-20 bg-cover bg-center transition-transform duration-[10s] animate-[ken-burns_10s_linear_infinite]"
              style={{ backgroundImage: 'url("/imm.jpg")' }}
           >
              <div className="absolute inset-0 bg-[#1B2D33]/80 backdrop-blur-[2px]"></div>
           </div>

           <div className="relative z-10 max-w-[85rem] mx-auto px-4 sm:px-6 lg:px-8 animate-fade-in-up">
              <div className="p-14 md:p-32 bg-white/[0.02] border border-white/10 rounded-[6rem] backdrop-blur-3xl relative overflow-hidden shadow-big text-center group shadow-2xl">
                 <div className="absolute top-0 right-0 p-40 opacity-[0.03] scale-[5] rotate-[-25deg] transition-transform duration-[5s] group-hover:text-[#A07A41] pointer-events-none"><Globe size={300} /></div>
                 
                 <h2 className="text-3xl md:text-6xl lg:text-7xl font-serif font-bold text-white mb-14 tracking-tighter leading-none italic uppercase underline decoration-[#A07A41]/10 underline-offset-[30px] decoration-8">Secure Your <br /><span className="italic font-light text-[#A07A41] lowercase drop-shadow-xl">Approval.</span></h2>
                 
                 <p className="text-gray-400 text-[13px] md:text-xl font-sans font-light italic leading-relaxed mb-20 max-w-3xl mx-auto opacity-70">
                    Ensure your visa application documents are accurate and complete. Don't risk a refusal over a simple documentation error.
                 </p>

                 <div className="flex flex-col md:flex-row items-center justify-center gap-14 mb-20">
                    <div className="flex flex-col items-center gap-3 group cursor-pointer">
                       <Mail size={24} className="text-[#A07A41] transition-transform group-hover:-translate-y-2" />
                       <span className="text-white font-serif font-bold text-lg md:text-2xl italic border-b border-transparent group-hover:border-[#A07A41] transition-all">legal@hsco.co</span>
                    </div>
                    <div className="h-10 w-[1px] bg-white/10 hidden md:block"></div>
                    <div className="flex flex-col items-center gap-3 group cursor-pointer">
                       <Phone size={24} className="text-[#A07A41] transition-transform group-hover:-translate-y-2" />
                       <span className="text-white font-serif font-bold text-lg md:text-2xl italic border-b border-transparent group-hover:border-[#A07A41] transition-all">+44 20 745 9210</span>
                    </div>
                 </div>

                 <div role="button" className="group relative inline-flex items-center justify-center gap-3 px-16 py-8 bg-[#1B2D33] border border-white/10 text-white font-bold tracking-widest uppercase text-[11px] md:text-[13px] rounded transition-all duration-300 hover:bg-[#A07A41] cursor-pointer shadow-[0_60px_100px_rgba(160,122,65,0.3)] hover:bg-white hover:rounded-[5rem]">
                    <span>Start Your Visa Process</span>
                    <ArrowRight className="h-6 w-6" />
                 </div>
              </div>
           </div>
        </section>

      </main>
    </div>
  );
};

export default UKVisaDocumentationPage;
