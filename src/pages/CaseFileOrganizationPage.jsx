import React, { useEffect, useState } from 'react';
import { 
  FolderOpen, FileSearch, Layers, ShieldCheck, LayoutGrid, 
  UserCheck, Briefcase, Clock, ArrowRight, Mail, Phone, 
  ChevronDown, Info, Lock, Scale, CheckCircle, FileText, Search,
  MapPin, ShieldAlert
} from 'lucide-react';

const CaseFileOrganizationPage = () => {
  const [activeFaq, setActiveFaq] = useState(null);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-[#1B2D33] flex flex-col overflow-x-hidden text-white font-sans selection:bg-[#A07A41] selection:text-black">
      <main className="flex-grow">
        
        {/* 1. Hero Section - THE ASYMMETRIC OVERLAY */}
        <section className="relative min-h-[85vh] flex items-center pt-32 pb-16 overflow-hidden bg-[#1B2D33]">
          <div 
             className="absolute inset-0 z-0 opacity-20 bg-cover bg-center transition-transform duration-[10s] scale-110 animate-[ken-burns_10s_linear_infinite]"
             style={{ backgroundImage: 'url("/case.jpg")' }}
          >
             <div className="absolute inset-0 bg-[#1B2D33]/60 backdrop-blur-[2px]"></div>
          </div>
          
          <div className="absolute right-0 top-0 bottom-0 w-1/4 bg-[#A07A41]/10 skew-x-[-15deg] translate-x-20 hidden lg:block border-l border-white/5"></div>

          <div className="relative z-10 px-4 sm:px-6 lg:px-8 max-w-[90rem] mx-auto w-full">
             <div className="max-w-2xl animate-fade-in-top-left">
                <div className="inline-flex items-center gap-3 mb-8 px-4 py-1.5 bg-white/5 border border-white/10 rounded-full">
                   <FolderOpen size={12} className="text-[#A07A41]" />
                   <span className="text-[#A07A41] uppercase tracking-[0.4em] text-[8px] font-black italic">Structural Mapping UK</span>
                </div>
                
                <h1 className="text-3xl md:text-5xl lg:text-6xl font-serif font-bold text-white leading-[1.1] mb-8 tracking-tighter">
                   Case File <br />
                   <span className="italic font-light text-[#A07A41]">Organization.</span>
                </h1>
                
                <p className="text-gray-400 text-xs md:text-sm font-sans font-light leading-relaxed mb-10 max-w-lg italic opacity-80 border-l border-[#A07A41] pl-8">
                   Structured and professional organization of legal and immigration case files. We help you take control of your legal documents into clear, structured files.
                </p>

                <div className="flex flex-wrap gap-5 items-center">
                   <div role="button" className="group relative inline-flex items-center justify-center gap-3 px-10 py-5 bg-[#1B2D33] border border-white/10 text-white font-bold tracking-widest uppercase text-[10px] rounded transition-all duration-300 hover:bg-[#A07A41] cursor-pointer shadow-2xl overflow-hidden hover:scale-105 active:scale-95">
                      <span className="relative z-10">Get Organized Now</span>
                      <ArrowRight size={14} className="relative z-10 transform group-hover:translate-x-1 transition-transform duration-300" />
                   </div>
                   <div className="flex items-center gap-3 text-white/30 text-[8px] font-black uppercase tracking-widest italic border-b border-white/10 pb-0.5">
                      <Lock size={12} className="text-[#A07A41]" />
                      Confidentiality First
                   </div>
                </div>
             </div>
          </div>
        </section>

        {/* 2. Why Organization Matters - THE CONTRAST PANEL */}
        <section className="relative py-20 lg:py-32 bg-[#1B2D33] overflow-hidden border-y border-white/5 shadow-inner">
           <div className="max-w-[85rem] mx-auto px-4 sm:px-6 lg:px-8 animate-fade-in-bottom-right">
              <div className="flex flex-col lg:flex-row items-center gap-20">
                 <div className="lg:w-1/2 relative group">
                    <div className="absolute -inset-10 bg-[#A07A41]/10 rounded-full blur-[100px] animate-pulse"></div>
                    <h2 className="text-white text-2xl md:text-5xl font-serif font-bold tracking-tighter leading-[1.1] mb-8 italic">
                       The Power of <br /><span className="text-[#A07A41]">Order.</span>
                    </h2>
                    <p className="text-gray-400 text-xs md:text-sm leading-loose italic font-light italic mb-8 opacity-70 border-l-4 border-red-500/30 pl-8">
                       Disorganized documents lead to delays, missed information, and unnecessary stress. In legal matters, missing or poor structure can negatively impact your case.
                    </p>
                    <div className="inline-block p-8 bg-white/[0.03] border-l-8 border-[#A07A41] rounded-[2.5rem] shadow-3xl hover:bg-white hover:border-black transition-all group duration-700">
                       <p className="text-[#A07A41] group-hover:text-black font-serif italic text-lg md:text-xl transition-all">"If your documents are a mess, your case looks weak."</p>
                    </div>
                 </div>
                 <div className="lg:w-1/2 grid grid-cols-1 md:grid-cols-2 gap-6">
                    {[
                      { l: "Identity Profile", s: "Passports & IDs", i: UserCheck },
                      { l: "Financial Ledger", s: "Records & Proofs", i: Scale }
                    ].map((item, i) => (
                       <div key={i} className="p-10 bg-white/[0.02] border border-white/5 rounded-[3rem] text-center hover:bg-black group transition-all duration-700 shadow-2xl">
                          <item.i size={24} className="text-[#A07A41] mx-auto mb-6 transition-transform group-hover:rotate-[360deg] duration-1000" />
                          <h4 className="text-white font-serif font-bold text-sm md:text-base uppercase mb-1">{item.l}</h4>
                          <span className="text-gray-600 text-[8px] uppercase font-black tracking-widest">{item.s}</span>
                       </div>
                    ))}
                 </div>
              </div>
           </div>
        </section>

        {/* 3. Who Needs This Service - THE OFFSET TILES */}
        <section className="relative py-20 lg:py-32 bg-[#1B2D33] overflow-hidden">
           <div className="px-4 sm:px-6 lg:px-8 max-w-[90rem] mx-auto text-center mb-24 animate-fade-in-up">
              <span className="text-[#A07A41] uppercase tracking-[0.4em] text-[8px] font-black mb-6 block font-serif">Audience Targeting</span>
              <h2 className="text-2xl md:text-5xl font-serif font-bold text-white tracking-tight italic uppercase">Who Can <span className="italic font-light text-[#A07A41]">Benefit?</span></h2>
           </div>

           <div className="px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 animate-fade-in-top-right">
              {[
                { t: "Immigration Clients", s: "Visa & residency applicants.", i: MapPin },
                { t: "Legal Litigants", s: "Court & proceedings context.", i: Scale },
                { t: "Managed Compliance", s: "Corporate data organization.", i: Briefcase },
                { t: "Private Archives", s: "Volume document management.", i: Layers }
              ].map((item, i) => (
                 <div key={i} className="group p-8 bg-white/[0.03] border border-white/5 rounded-[3rem] hover:border-[#A07A41]/40 transition-all duration-700 shadow-2xl relative overflow-hidden h-[250px] flex flex-col justify-end">
                    <div className="absolute top-8 left-8 text-[#A07A41]/10 group-hover:text-[#A07A41] group-hover:rotate-12 transition-all duration-700">
                       <item.i size={50} strokeWidth={1} />
                    </div>
                    <div>
                       <h4 className="text-white font-serif font-bold text-sm md:text-base italic mb-1 tracking-tighter uppercase">{item.t}</h4>
                       <p className="text-gray-500 text-[9px] font-sans font-light italic leading-relaxed opacity-70 italic">{item.s}</p>
                    </div>
                 </div>
              ))}
           </div>
        </section>

        {/* 4. What We Organize - THE FILE DRAWER LIST */}
        <section className="relative py-20 lg:py-40 bg-[#1B2D33] overflow-hidden border-t border-white/5">
           <div className="px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto animate-fade-in-bottom-left">
              <div className="mb-20 text-center">
                 <h2 className="text-3xl md:text-4xl font-serif font-bold text-white tracking-tight italic uppercase">Specifics <br /><span className="italic font-light text-[#A07A41]">Organized.</span></h2>
              </div>
              
              <div className="grid md:grid-cols-2 gap-x-16 gap-y-8">
                 {[
                   { t: "Identity Profile", d: "Passports, ID cards, bio-data." },
                   { t: "Financial Universe", d: "Bank records, funds, assets." },
                   { t: "Legal Thread", d: "Official correspondence & notices." },
                   { t: "Immigration Archive", d: "Visas, permits, historic drafts." },
                   { t: "Evidence Vault", d: "Critical supporting material." },
                   { t: "Compliance Log", d: "Business filing & regulations." }
                 ].map((item, i) => (
                    <div key={i} className="flex gap-8 group items-center border-b border-white/5 pb-8 hover:border-[#A07A41] transition-all duration-500">
                       <div className="text-[#A07A41] font-serif font-black italic text-3xl opacity-10 group-hover:opacity-40 transition-opacity italic">0{i+1}</div>
                       <div>
                          <h4 className="text-white font-serif font-bold text-base md:text-lg italic mb-1 uppercase tracking-tighter group-hover:text-[#A07A41] transition-colors">{item.t}</h4>
                          <p className="text-gray-500 text-[9px] md:text-xs font-sans font-light italic leading-relaxed opacity-70 italic leading-tight">{item.d}</p>
                       </div>
                    </div>
                 ))}
              </div>
           </div>
        </section>

        {/* 5. Our Core Services - THE HEX GRID */}
        <section className="relative py-20 lg:py-40 bg-[#1B2D33] overflow-hidden">
           <div className="px-4 sm:px-6 lg:px-8 max-w-[90rem] mx-auto text-center mb-32 animate-fade-in-up">
              <span className="text-[#A07A41] uppercase tracking-[0.5em] text-[9px] font-black mb-8 block font-serif">Structural Engineering</span>
              <h2 className="text-3xl md:text-5xl font-serif font-bold text-white tracking-tight italic opacity-90">The Organization <span className="italic font-light text-[#A07A41]">Suite.</span></h2>
           </div>

           <div className="px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-5 animate-fade-in-down">
              {[
                { t: "Categorization", d: "Logical sorting of messy files.", img: "/case1.jpg" },
                { t: "Structuring", d: "Architectural document mapping.", img: "/case2.jpg" },
                { t: "Indexing", d: "Precise labeling for access.", img: "/case3.jpg" },
                { t: "Deficiency Search", d: "Identifying missing proof gaps.", img: "/case4.jpg" },
                { t: "Preparation", d: "Ready for legal submission.", img: "/case5.jpg" }
              ].map((service, i) => (
                 <div key={i} className="group relative h-[400px] md:h-[520px] rounded-[3.5rem] overflow-hidden transition-all duration-1000 border border-white/5 shadow-2xl">
                    <div className="absolute inset-0">
                       <img src={service.img} alt={service.t} className="w-full h-full object-cover grayscale brightness-[0.3] group-hover:grayscale-0 group-hover:scale-110 transition-all duration-[2s]" />
                       <div className="absolute inset-0 bg-gradient-to-t from-[#1B2D33] via-transparent to-transparent"></div>
                    </div>
                    <div className="absolute bottom-0 left-0 p-8 w-full z-10 transition-all group-hover:pb-12 flex flex-col justify-end min-h-[50%]">
                       <div className="h-0.5 w-10 bg-[#A07A41] mb-6 group-hover:w-full transition-all duration-700"></div>
                       <h4 className="text-white font-serif font-bold text-lg md:text-xl mb-3 italic group-hover:text-[#A07A41]">{service.t}</h4>
                       <p className="text-gray-400 text-[10px] md:text-xs font-sans font-light italic h-0 opacity-0 group-hover:h-auto group-hover:opacity-90 transition-all duration-500 delay-100 italic leading-tight">{service.d}</p>
                    </div>
                 </div>
              ))}
           </div>
        </section>

        {/* 6. Benefits - THE TIMELINE PROGRESSION */}
        <section className="relative py-20 lg:py-32 bg-[#1B2D33] overflow-hidden border-y border-white/5">
           <div className={`px-4 sm:px-6 lg:px-8 max-w-[85rem] mx-auto animate-fade-in-bottom-right`}>
              <div className="flex flex-col lg:flex-row items-center gap-20">
                 <div className="lg:w-1/3">
                    <h2 className="text-3xl md:text-5xl font-serif font-bold text-white mb-8 tracking-tighter leading-[0.9] italic">Benefits of <br /><span className="text-[#A07A41]">Structure.</span></h2>
                    <p className="text-gray-400 text-xs md:text-sm italic mb-10 opacity-60 leading-loose border-l border-[#A07A41] pl-8 italic">
                       Translate organized files into real-world legal advantages. Clarity leads to confidence during official reviews.
                    </p>
                    <div role="button" className="group relative inline-flex items-center justify-center gap-2 px-8 py-4 bg-[#1B2D33] border border-white/10 text-white font-bold tracking-widest uppercase text-[9px] rounded-sm transition-all duration-300 hover:bg-[#A07A41] cursor-pointer shadow-xl overflow-hidden active:scale-95">
                       <span>Get Started</span>
                       <ArrowRight size={12} className="transform group-hover:translate-x-1 transition-transform" />
                    </div>
                 </div>
                 <div className="lg:w-2/3 grid grid-cols-1 md:grid-cols-2 gap-6">
                    {[
                      { t: "Fast Access", d: "No more hunting for documents.", i: Clock },
                      { t: "Error Reduction", d: "Gaps identified before filing.", i: ShieldCheck },
                      { t: "Elite Presentation", d: "Reviewers see total clarity.", i: Layers },
                      { l: "Less Stress", d: "Confidence in your case file.", i: ShieldCheck }
                    ].map((item, i) => (
                       <div key={i} className="flex gap-6 items-start p-6 md:p-8 bg-white/[0.02] border border-white/5 rounded-[2.5rem] group hover:bg-[#A07A41] transition-all duration-500 group">
                          <item.i size={20} className="text-[#A07A41] group-hover:text-black transition-colors shrink-0" />
                          <div>
                             <h4 className="text-white font-serif font-bold text-base md:text-lg italic uppercase tracking-tighter group-hover:text-black mb-1 leading-tight">{item.t || item.l}</h4>
                             <p className="text-gray-600 text-[8px] md:text-[9px] uppercase font-black tracking-widest group-hover:text-black/60 leading-tight italic">{item.d}</p>
                          </div>
                       </div>
                    ))}
                 </div>
              </div>
           </div>
        </section>

        {/* 7. Process - THE NUMBERED FLOW */}
        <section className="relative py-20 lg:py-40 bg-[#1B2D33] overflow-hidden">
           <div className="px-4 sm:px-6 lg:px-8 max-w-[90rem] mx-auto text-center mb-32 animate-fade-in-top-left">
              <span className="text-[#A07A41] uppercase tracking-[0.5em] text-[9px] font-black mb-8 block font-serif">Execution Workflow</span>
              <h2 className="text-3xl md:text-5xl font-serif font-bold text-white tracking-tight italic uppercase">Organization <br /><span className="italic font-light text-[#A07A41]">Protocol.</span></h2>
           </div>

           <div className="px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-6 animate-fade-in-top-left">
              {[ "Initial Consult", "Registry Intake", "Sorting Logic", "File Delivery" ].map((step, i) => (
                 <div key={i} className="group p-10 bg-white/[0.03] border border-white/5 rounded-[3rem] text-center relative transition-all duration-700 hover:bg-[#A07A41] shadow-2xl group">
                    <div className="text-4xl md:text-6xl font-serif font-black text-[#A07A41]/10 italic mb-8 group-hover:text-black transition-colors duration-500 italic">0{i+1}</div>
                    <h4 className="text-white font-serif font-bold text-xs md:text-sm italic group-hover:text-black mb-6 transition-colors duration-500 tracking-tighter uppercase leading-tight italic underline decoration-[#A07A41]/30 group-hover:decoration-black">{step}</h4>
                    <div className="h-[1px] w-12 bg-[#A07A41] mx-auto group-hover:bg-black group-hover:w-full transition-all duration-1000 rounded-full"></div>
                 </div>
              ))}
           </div>
        </section>

        {/* 8. Disclaimer - THE SIDEBAR NOTE */}
        <section className="relative py-20 lg:py-32 bg-[#1B2D33] overflow-hidden border-y border-white/5 backdrop-blur-3xl">
           <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 animate-fade-in-up">
              <div className="p-8 md:p-14 bg-white/[0.02] border border-[#A07A41]/20 rounded-[3rem] relative overflow-hidden flex flex-col md:flex-row items-center gap-10 text-center md:text-left hover:border-[#A07A41] transition-all duration-500">
                 <div className="md:w-1/4 flex justify-center">
                    <ShieldAlert size={50} className="text-[#A07A41] opacity-50" />
                 </div>
                 <div className="md:w-3/4">
                    <h2 className="text-[#A07A41] text-lg font-serif font-bold mb-3 italic uppercase tracking-widest leading-none">Compliance.</h2>
                    <p className="text-gray-400 text-xs md:text-sm leading-relaxed italic font-light italic leading-loose opacity-70 italic shadow-sm italic underline decoration-white/5">
                       Our service focuses on structuring documents. It <strong className="text-white font-bold">does not constitute legal advice</strong>.
                    </p>
                 </div>
              </div>
           </div>
        </section>

        {/* 9. FAQ Section */}
        <section className="relative py-24 lg:py-48 bg-[#1B2D33] overflow-hidden border-b border-white/10 shadow-big">
           <div className="px-4 sm:px-6 lg:px-8 max-w-[50rem] mx-auto">
              <div className="text-center mb-24 animate-fade-in-top-right">
                 <h2 className={`text-3xl md:text-5xl font-serif font-bold text-white tracking-tight relative z-10 italic uppercase`}>Logic <br /><span className="italic font-light text-[#A07A41]">Clarified.</span></h2>
              </div>

              <div className="space-y-4 md:space-y-6">
                 {[
                   { q: "Do you provide legal advice with this service?", a: "No, this service is focused strictly on the professional organization, sorting, and indexing of your documents." },
                   { q: "Can you help identify missing documents?", a: "Yes, we can highlight obvious gaps in your file, such as missing bank statements or passport pages, to help you prepare before submission." },
                   { q: "Is my information kept confidential?", a: "Extremely. All client documents are handled within a secure environment and are managed with strict confidentiality protocols." },
                   { q: "How long does the organization take?", a: "Typically, organizing a full case file takes 3–7 business days, depending on the volume and initial quality of your documents." }
                 ].map((faq, index) => (
                    <div 
                       key={index} 
                       className="border border-[#A07A41]/10 px-6 md:px-8 rounded-[3rem] bg-white/[0.03] overflow-hidden transition-all duration-1000 animate-fade-in-up md:opacity-100 shadow-xl" 
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
                          <p className="text-gray-500 text-[10px] md:text-xs font-sans font-light italic border-l-2 border-[#A07A41]/20 pl-8 opacity-80 italic leading-relaxed">{faq.a}</p>
                       </div>
                    </div>
                 ))}
              </div>
           </div>
        </section>

        {/* 10. Call to Action */}
        <section className="relative py-24 lg:py-60 bg-[#1B2D33] overflow-hidden">
           <div 
              className="absolute inset-0 z-0 opacity-[0.25] bg-cover bg-center transition-transform duration-[10s] animate-[ken-burns_10s_linear_infinite]"
              style={{ backgroundImage: 'url("/case.jpg")' }}
           >
              <div className="absolute inset-0 bg-[#1B2D33]/70 backdrop-blur-[2px]"></div>
           </div>
           <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 animate-fade-in-bottom-left relative z-10">
              <div className="p-12 md:p-24 bg-white/[0.02] border border-white/10 rounded-[5rem] backdrop-blur-3xl relative overflow-hidden shadow-big text-center group shadow-[0_80px_100px_rgba(0,0,0,0.5)]">
                 <div className="absolute top-0 right-0 p-40 opacity-[0.03] scale-[5] rotate-[-25deg] transition-transform duration-[5s] group-hover:text-[#A07A41] pointer-events-none"><FolderOpen size={300} /></div>
                 
                 <h2 className="text-3xl md:text-5xl lg:text-6xl font-serif font-bold text-white mb-10 tracking-tighter leading-none italic uppercase underline decoration-[#A07A41]/10 underline-offset-[24px] decoration-8">Get <br /><span className="italic font-light text-[#A07A41] lowercase drop-shadow-2xl">Organized.</span></h2>
                 
                 <p className="text-gray-400 text-xs md:text-lg font-sans font-light italic leading-relaxed mb-16 max-w-xl mx-auto opacity-70">
                    Take control of your documents and present your case with clarity and confidence today.
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
                    <span className="relative z-10 font-bold">Get Organized Now</span>
                    <ArrowRight size={16} className="relative z-10 transform group-hover:translate-x-1 transition-transform duration-300" />
                 </div>
              </div>
           </div>
        </section>

      </main>
    </div>
  );
};

export default CaseFileOrganizationPage;
