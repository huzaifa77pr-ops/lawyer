import React, { useEffect, useState } from 'react';
import { 
  FileEdit, ClipboardCheck, AlertCircle, Calendar, MapPin, 
  UserPlus, Repeat, ShieldAlert, Search, Users, CheckSquare, 
  Mail, Phone, ChevronDown, Info, ArrowRight, Clock, ShieldCheck,
  Edit3, Link2, Layout, CheckCircle
} from 'lucide-react';

const ImmigrationFormsPreparationPage = () => {
  const [activeFaq, setActiveFaq] = useState(null);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const formTypes = [
    { t: "Visa Applications", d: "Student, Work, Visitor" },
    { t: "Family & Spouse", d: "Spousal & dependent routes" },
    { t: "Indefinite Leave", d: "ILR & Settlement forms" },
    { t: "Extensions", d: "Renewal & stay extensions" },
    { t: "Sponsorship", d: "Employer & Sponsor forms" }
  ];

  return (
    <div className="min-h-screen bg-[#1B2D33] flex flex-col overflow-x-hidden text-white font-sans selection:bg-[#A07A41] selection:text-black">
      <main className="flex-grow">
        
        {/* 1. Hero Section - THE LEFT-HEAVY SPLIT */}
        <section className="relative min-h-[85vh] flex items-center pt-32 pb-16 overflow-hidden bg-[#1B2D33]">
          <div 
             className="absolute inset-0 z-0 opacity-15 bg-cover bg-right transition-transform duration-[8s] scale-110 animate-[ken-burns_10s_linear_infinite]"
             style={{ backgroundImage: 'url("/ee.jpg")' }}
          >
             <div className="absolute inset-0 bg-gradient-to-r from-[#1B2D33] via-[#1B2D33]/60 to-transparent"></div>
          </div>

          <div className="relative z-10 px-4 sm:px-6 lg:px-8 max-w-[90rem] mx-auto w-full">
             <div className="max-w-xl animate-fade-in-left">
                <div className="flex items-center gap-3 mb-8">
                   <div className="h-1 w-6 bg-[#A07A41]"></div>
                   <span className="text-[#A07A41] uppercase tracking-[0.4em] text-[9px] font-black italic">Form Precision UK</span>
                </div>
                
                <h1 className="text-3xl md:text-5xl font-serif font-bold text-white leading-[1.1] mb-8 tracking-tighter decoration-[#A07A41]/10 underline underline-offset-[20px] decoration-4">
                   Immigration <br />
                   <span className="italic font-light text-[#A07A41]">Forms Prep.</span>
                </h1>
                
                <p className="text-gray-400 text-xs md:text-sm font-sans font-light leading-relaxed mb-10 max-w-lg italic opacity-80 border-l border-[#A07A41]/30 pl-8">
                   Accurate and professional assistance with completing complex UK immigration forms correctly. Reducing errors and improving the chances of a smooth application process.
                </p>

                <div className="flex flex-wrap gap-5 items-center">
                   <div role="button" className="group relative inline-flex items-center justify-center gap-3 px-10 py-5 bg-[#1B2D33] border border-white/10 text-white font-bold tracking-widest uppercase text-[10px] rounded transition-all duration-300 hover:bg-[#A07A41] cursor-pointer shadow-2xl overflow-hidden hover:scale-105">
                      <span className="relative z-10">Get Started Now</span>
                      <ArrowRight size={14} className="relative z-10 transform group-hover:translate-x-1 transition-transform duration-300" />
                   </div>
                   <div className="flex items-center gap-2 text-white/30 text-[8px] font-black uppercase tracking-widest italic">
                      <Clock size={12} className="text-[#A07A41]" />
                      Fast Response
                   </div>
                </div>
             </div>
          </div>
        </section>

        {/* 2. Why Accuracy Matters - THE WARNING GRID */}
        <section className="relative py-20 lg:py-32 bg-[#1B2D33] overflow-hidden border-y border-white/5 shadow-inner">
           <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 animate-fade-in-up">
              <div className="grid lg:grid-cols-2 gap-16 items-center">
                 <div className="space-y-8">
                    <h2 className="text-white text-2xl md:text-4xl font-serif font-bold tracking-tighter italic leading-tight">
                       Why <span className="text-[#A07A41]">Form Accuracy</span> <br />is Vital.
                    </h2>
                    <p className="text-gray-400 text-xs md:text-sm leading-relaxed italic font-light italic opacity-70 italic">
                       UK immigration forms are detailed and complex. Small mistakes like incorrect dates or missing information can lead to outright refusal.
                    </p>
                    <div className="p-8 bg-white/[0.03] border-l-4 border-red-500/50 rounded-2xl group hover:bg-[#A07A41] transition-all duration-500">
                       <span className="text-red-500/80 group-hover:text-black font-black uppercase text-[9px] tracking-widest block mb-2">Notice</span>
                       <p className="text-white group-hover:text-black font-serif italic text-lg transition-all">"Wrong form = Rejected application."</p>
                    </div>
                 </div>
                 <div className="grid grid-cols-2 gap-4 md:gap-6">
                    {[
                      { l: "Rejections", i: ShieldAlert },
                      { l: "Time Delays", i: Clock },
                      { l: "Extra Costs", i: Repeat },
                      { l: "Visa Denials", i: AlertCircle }
                    ].map((item, i) => (
                       <div key={i} className="p-8 bg-white/[0.02] border border-white/5 rounded-[3rem] text-center group hover:border-[#A07A41]/40 transition-all duration-500 shadow-xl">
                          <item.i size={20} className="text-[#A07A41] mx-auto mb-4 group-hover:scale-125" />
                          <span className="text-white font-serif font-bold text-xs tracking-widest group-hover:text-[#A07A41]">{item.l}</span>
                       </div>
                    ))}
                 </div>
              </div>
           </div>
        </section>

        {/* 3. Types of Forms */}
        <section className="relative py-20 lg:py-32 bg-[#1B2D33] overflow-hidden">
           <div className="px-4 sm:px-6 lg:px-8 max-w-[90rem] mx-auto text-center mb-24 animate-fade-in-up">
              <span className="text-[#A07A41] uppercase tracking-[0.4em] text-[9px] font-black mb-6 block font-serif">Compliance Scope</span>
              <h2 className="text-3xl md:text-5xl font-serif font-bold text-white tracking-tight italic uppercase">Forms <span className="italic font-light text-[#A07A41]">Handled.</span></h2>
           </div>

           <div className="px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-5 gap-4 md:gap-6 animate-fade-in-right">
              {formTypes.map((form, i) => (
                 <div key={i} className="group p-8 bg-white/[0.03] border border-white/5 rounded-[3rem] text-center hover:bg-[#1B2D33] hover:border-[#A07A41]/40 transition-all duration-700 shadow-2xl flex flex-col justify-between">
                    <div className="h-14 w-14 bg-[#2A454E] rounded-[1.2rem] flex items-center justify-center text-[#A07A41] mx-auto mb-8 group-hover:bg-[#A07A41] group-hover:text-black group-hover:rotate-[20deg] transition-all">
                       <FileEdit size={20} />
                    </div>
                    <div>
                       <h4 className="text-white font-serif font-bold text-sm md:text-base italic mb-2 tracking-tighter uppercase">{form.t}</h4>
                       <span className="text-gray-600 text-[8px] uppercase font-black tracking-widest">{form.d}</span>
                    </div>
                 </div>
              ))}
           </div>
        </section>

        {/* 4. Common Mistakes */}
        <section className="relative py-20 lg:py-40 bg-[#1B2D33] overflow-hidden border-t border-white/5 text-center md:text-left">
           <div className="px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto animate-fade-in-left">
              <div className="mb-20">
                 <h2 className="text-3xl md:text-4xl font-serif font-bold text-white tracking-tight italic uppercase">Mistakes We <br /><span className="italic font-light text-[#A07A41]">Eliminate.</span></h2>
              </div>
              
              <div className="grid md:grid-cols-2 gap-8 md:gap-14">
                 {[
                   { t: "Incorrect Personal Details", d: "Small typos in names or ID numbers cause instant delays." },
                   { t: "Missing Supporting Info", d: "Forgetting even one reference field can trigger a refill." },
                   { t: "Inconsistent Answers", d: "Logic conflicts across different sections are high-risk." },
                   { t: "Wrong Date Formats", d: "UK DD/MM/YYYY vs international MM/DD confusion." },
                   { t: "Improper Referencing", d: "Failure to link documents to specific sections." },
                   { t: "Omitted Case History", d: "Hiding or forgetting previous visa refusals." }
                 ].map((mistake, i) => (
                    <div key={i} className="flex gap-6 group items-start border-l border-[#A07A41]/10 pl-8 hover:border-[#A07A41] transition-all duration-500 py-3">
                       <div className="h-7 w-7 shrink-0 bg-[#A07A41]/10 rounded-full flex items-center justify-center text-[#A07A41] group-hover:bg-[#A07A41] group-hover:text-black transition-all">
                          <AlertCircle size={12} />
                       </div>
                       <div>
                          <h4 className="text-white font-serif font-bold text-sm md:text-base italic mb-1 tracking-tighter uppercase group-hover:text-[#A07A41] transition-colors">{mistake.t}</h4>
                          <p className="text-gray-500 text-[9px] md:text-xs font-sans font-light italic leading-relaxed opacity-70 italic">{mistake.d}</p>
                       </div>
                    </div>
                 ))}
              </div>
           </div>
        </section>

        {/* 5. Our Services - THE DIAGONAL SLICE */}
        <section className="relative py-20 lg:py-40 bg-[#1B2D33] overflow-hidden">
           <div className="px-4 sm:px-6 lg:px-8 max-w-[90rem] mx-auto text-center mb-32 animate-fade-in-up">
              <span className="text-[#A07A41] uppercase tracking-[0.5em] text-[9px] font-black mb-8 block font-serif">Execution Focus</span>
              <h2 className="text-3xl md:text-5xl font-serif font-bold text-white tracking-tight italic opacity-90">Our Prep <span className="italic font-light text-[#A07A41]">Method.</span></h2>
           </div>

           <div className="px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6 animate-fade-in-up">
              {[
                { t: "Assisted Completion", d: "Step-by-step drafting support.", i: Edit3 },
                { t: "Information Audit", d: "Rigorous review of data.", i: Search },
                { t: "Cross-Checking", d: "Verification vs Evidence.", i: Link2 },
                { t: "Formatting Help", d: "Guidance on UKVI answers.", i: Layout },
                { t: "Final Validation", d: "Pre-submission error check.", i: CheckCircle }
              ].map((service, index) => (
                 <div key={index} className="group p-10 bg-white/[0.03] border border-white/5 rounded-[3.5rem] text-center hover:bg-[#A07A41] transition-all duration-700 shadow-2xl relative overflow-hidden flex flex-col justify-between min-h-[280px]">
                    <div className="h-12 w-12 bg-[#2A454E] rounded-xl flex items-center justify-center text-[#A07A41] mx-auto mb-8 transition-all group-hover:bg-black group-hover:text-white group-hover:rotate-12 duration-500">
                       <service.i size={20} />
                    </div>
                    <div>
                       <h4 className="text-white font-serif font-bold text-[15px] md:text-lg mb-3 italic group-hover:text-black transition-colors">{service.t}</h4>
                       <p className="text-gray-500 text-[10px] font-sans font-light italic leading-relaxed group-hover:text-black/80 transition-colors">{service.d}</p>
                    </div>
                    <div className="absolute -bottom-4 -right-4 text-[#A07A41]/5 group-hover:text-black/10 transition-colors pointer-events-none">
                       <service.i size={120} strokeWidth={1} />
                    </div>
                 </div>
              ))}
           </div>
        </section>

        {/* 6. Why Choose Us */}
        <section className="relative py-24 lg:py-48 bg-[#1B2D33] overflow-hidden border-y border-white/5">
           <div className="px-4 sm:px-6 lg:px-8 max-w-[80rem] mx-auto grid lg:grid-cols-2 items-center gap-24 md:gap-32 animate-fade-in-right">
              <div>
                 <h2 className="text-3xl md:text-6xl font-serif font-bold text-white mb-10 tracking-tighter leading-none italic animate-pulse-slow">Trusted <br /><span className="text-[#A07A41]">Execution.</span></h2>
                 <p className="text-gray-400 text-xs md:text-sm italic mb-12 opacity-70 leading-loose border-l border-[#A07A41] pl-8 font-light italic">
                    Careful attention to legal detail, deep understanding of UK immigration processes, and confidential handling of your sensitive personal data.
                 </p>
                 <div className="space-y-6 md:space-y-10">
                    {[
                      { l: "Detail Oriented", s: "Every box checked twice" },
                      { l: "UKVI Focused", s: "Compliance-first logic" }
                    ].map((m, i) => (
                       <div key={i} className="flex items-center gap-6 group">
                          <div className="h-12 w-12 shrink-0 bg-white/[0.03] border border-white/10 rounded-xl flex items-center justify-center text-[#A07A41] group-hover:bg-[#A07A41] group-hover:text-black transition-all">
                             <ShieldCheck size={20} />
                          </div>
                          <div>
                             <h4 className="text-white font-serif font-bold text-lg italic mb-0.5 uppercase tracking-tighter">{m.l}</h4>
                             <span className="text-[8px] uppercase font-black text-gray-600 tracking-[0.4em]">{m.s}</span>
                          </div>
                       </div>
                    ))}
                 </div>
              </div>

              <div className="p-20 md:p-32 bg-white/[0.02] rounded-[7rem] relative flex items-center justify-center group shadow-inner border border-white/5">
                 <div className="absolute inset-0 border border-dashed border-[#A07A41]/10 rounded-[7rem] rotate-[-15deg] transition-transform duration-[15s] group-hover:rotate-0"></div>
                 <ClipboardCheck size={160} className="text-[#A07A41] transition-transform duration-700 group-hover:scale-110 opacity-30 shadow-2xl" />
              </div>
           </div>
        </section>

        {/* 7. Our Process */}
        <section className="relative py-20 lg:py-40 bg-[#1B2D33] overflow-hidden">
           <div className="px-4 sm:px-6 lg:px-8 max-w-[90rem] mx-auto text-center mb-32 animate-fade-in-up">
              <span className="text-[#A07A41] uppercase tracking-[0.6em] text-[9px] font-black mb-10 block font-serif">Workflow Mapping</span>
              <h2 className="text-4xl md:text-6xl font-serif font-bold text-white tracking-tight italic">Immigration <span className="italic font-light text-[#A07A41]">Velocity.</span></h2>
           </div>

           <div className="px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-6 animate-fade-in-up">
              {[ "Initial Consult", "Detail Registry", "Form Completion", "Final Verification" ].map((step, i) => (
                 <div key={i} className="group p-10 bg-white/[0.03] border border-white/10 rounded-[3.5rem] text-center relative transition-all duration-700 hover:bg-[#A07A41] shadow-2xl">
                    <div className="text-5xl md:text-7xl font-serif font-black text-[#A07A41]/10 italic mb-8 group-hover:text-black transition-colors duration-500 italic">0{i+1}</div>
                    <h4 className="text-white font-serif font-bold text-[13px] md:text-base italic group-hover:text-black mb-6 transition-colors duration-500 tracking-tighter uppercase leading-tight italic underline decoration-[#A07A41]/30 group-hover:decoration-black">{step}</h4>
                    <div className="h-[1px] w-12 bg-[#A07A41] mx-auto group-hover:bg-black group-hover:w-full transition-all duration-700 rounded-full"></div>
                 </div>
              ))}
           </div>
        </section>

        {/* 8. Disclaimer */}
        <section className="relative py-20 lg:py-32 bg-[#1B2D33] overflow-hidden border-y border-white/5">
           <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 animate-fade-in-up">
              <div className="p-10 md:p-16 bg-[#2A454E]/20 border border-[#A07A41]/20 rounded-[3rem] text-center backdrop-blur-xl shadow-2xl group hover:border-[#A07A41] transition-all duration-500">
                 <ShieldAlert size={40} className="text-[#A07A41] mx-auto mb-6 opacity-60 transition-transform group-hover:scale-125" />
                 <h2 className="text-[#A07A41] text-lg md:text-xl font-serif font-bold mb-4 italic uppercase tracking-widest italic">Disclaimer.</h2>
                 <p className="text-gray-400 text-xs md:text-sm leading-relaxed italic font-light italic leading-loose opacity-80 italic">
                    We assist with completing forms but <strong className="text-white">do not guarantee approval</strong>. Final decisions are made solely by UK Visas and Immigration (UKVI).
                 </p>
              </div>
           </div>
        </section>

        {/* 9. FAQ Section */}
        <section className="relative py-24 lg:py-48 bg-[#1B2D33] overflow-hidden border-b border-white/10 shadow-big">
           <div className="px-4 sm:px-6 lg:px-8 max-w-[50rem] mx-auto">
              <div className="text-center mb-32 animate-fade-in-up">
                 <h2 className={`text-3xl md:text-5xl font-serif font-bold text-white tracking-tight italic uppercase`}>Compliance <br /><span className="italic font-light text-[#A07A41]">Briefing.</span></h2>
              </div>

              <div className="space-y-4 md:space-y-6">
                 {[
                   { q: "Can I fill immigration forms myself?", a: "Yes, you can. However, UKVI forms are notoriously complex and unforgiving. Even a minor oversight in date formats or inconsistencies can lead to delays or refusal." },
                   { q: "Do you submit the forms on my behalf?", a: "We primarily assist with the meticulous preparation and review. Whether we handle the direct submission depends on your specific case and the service level you select." },
                   { q: "How long does the service typically take?", a: "Most form preparation and auditing is completed within 2–5 business days, depending on the complexity of your visa route." },
                   { q: "What if my case has previous refusals?", a: "We specialize in auditing forms for those with complex histories to ensure past refusals are declared correctly and addressed with legal clarity." }
                 ].map((faq, index) => (
                    <div 
                       key={index} 
                       className="border border-[#A07A41]/10 px-8 rounded-[3rem] bg-white/[0.03] overflow-hidden animate-fade-in-up md:opacity-100" 
                    >
                       <button 
                         onClick={() => setActiveFaq(activeFaq === index ? null : index)}
                         className="w-full p-10 md:p-14 flex items-center justify-between group outline-none"
                       >
                         <span className={`text-left text-[13px] md:text-lg font-serif transition-colors font-bold italic tracking-tight ${activeFaq === index ? 'text-[#A07A41]' : 'text-gray-300'}`}>{faq.q}</span>
                         <div className={`shrink-0 p-3 rounded-2xl border border-white/5 transition-all duration-500 ${activeFaq === index ? 'bg-[#A07A41] rotate-180 border-[#A07A41]' : 'group-hover:border-[#A07A41]'}`}>
                            <ChevronDown className={`h-4 w-4 transition-colors ${activeFaq === index ? 'text-black' : 'text-[#A07A41]'}`} />
                         </div>
                       </button>
                       <div className={`transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] px-10 md:px-14 ${activeFaq === index ? 'max-h-[800px] pb-14 opacity-100' : 'max-h-0 opacity-0 overflow-hidden'}`}>
                          <p className="text-gray-500 text-[10px] md:text-sm font-sans font-light italic leading-relaxed border-l-2 border-[#A07A41]/20 pl-8 opacity-80 italic italic">{faq.a}</p>
                       </div>
                    </div>
                 ))}
              </div>
           </div>
        </section>

        {/* 10. Call to Action */}
        <section className="relative py-24 lg:py-60 bg-[#1B2D33] overflow-hidden border-t border-white/10">
           <div className="max-w-[75rem] mx-auto px-4 sm:px-6 lg:px-8 animate-fade-in-up">
              <div className="p-12 md:p-24 bg-white/[0.02] border border-white/10 rounded-[5rem] backdrop-blur-3xl relative overflow-hidden shadow-2xl text-center group">
                 <div className="absolute top-0 right-0 p-40 opacity-[0.03] scale-[5] rotate-[25deg] transition-transform duration-[5s] group-hover:text-[#A07A41] pointer-events-none"><FileEdit size={300} /></div>
                 
                 <h2 className="text-3xl md:text-5xl lg:text-6xl font-serif font-bold text-white mb-10 tracking-tighter leading-none italic uppercase underline decoration-[#A07A41]/10 underline-offset-[24px] decoration-8">Precision <br /><span className="italic font-light text-[#A07A41] lowercase drop-shadow-2xl">Required.</span></h2>
                 
                 <p className="text-gray-400 text-xs md:text-lg font-sans font-light italic leading-relaxed mb-16 max-w-xl mx-auto opacity-70">
                    Avoid costly mistakes in your application. Contact us today for professional assistance with your UK immigration forms.
                 </p>

                 <div className="flex flex-col md:flex-row items-center justify-center gap-10 mb-16">
                    <div className="flex items-center gap-4 group cursor-pointer">
                       <Mail size={18} className="text-[#A07A41]" />
                       <span className="text-white font-serif font-bold text-sm md:text-xl italic group-hover:text-[#A07A41] transition-transform group-hover:translate-x-1">legal@hsco.co</span>
                    </div>
                    <div className="flex items-center gap-4 group cursor-pointer">
                       <Phone size={18} className="text-[#A07A41]" />
                       <span className="text-white font-serif font-bold text-sm md:text-xl italic group-hover:text-[#A07A41] transition-transform group-hover:translate-x-1">+44 20 745 9210</span>
                    </div>
                 </div>

                 <div role="button" className="group relative inline-flex items-center justify-center gap-3 px-10 py-5 bg-[#1B2D33] border border-white/10 text-white font-bold tracking-widest uppercase text-[10px] md:text-[13px] rounded transition-all duration-300 hover:bg-[#A07A41] cursor-pointer shadow-2xl overflow-hidden hover:scale-105">
                    <span className="relative z-10">Get Started Now</span>
                    <ArrowRight size={16} className="relative z-10 transform group-hover:translate-x-1 transition-transform duration-300" />
                 </div>
              </div>
           </div>
        </section>

      </main>
    </div>
  );
};

export default ImmigrationFormsPreparationPage;
