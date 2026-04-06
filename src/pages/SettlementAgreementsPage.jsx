import React, { useEffect, useState } from 'react';
import { 
  Scale, FileText, Users, ShieldAlert, CheckSquare, 
  Briefcase, Clock, ArrowRight, HelpCircle, Mail, 
  Phone, ShieldCheck, Gavel, Search, ChevronDown, Info
} from 'lucide-react';

const SettlementAgreementsPage = () => {
  const [activeFaq, setActiveFaq] = useState(null);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const services = [
    { t: "Agreement Review", d: "Meticulous legal analysis of your document.", img: "/set1.jpg" },
    { t: "Explanation of Terms", d: "Clear, plain-English breakdown of all clauses.", img: "/set2.jpg" },
    { t: "Negotiation Support", d: "Maximizing your compensation and benefits.", img: "/set3.jpg" },
    { t: "Specialist Rights Advice", d: "Ensuring your statutory rights are maintained.", img: "/set4.jpg" },
    { t: "Urgent Turnaround", d: "Fast 24-48h completion for critical cases.", img: "/set5.jpg" }
  ];

  return (
    <div className="min-h-screen bg-[#1B2D33] flex flex-col overflow-x-hidden text-white font-sans selection:bg-[#A07A41] selection:text-black">
      <main className="flex-grow">
        
        {/* 1. Hero Section */}
        <section className="relative min-h-[90vh] flex items-center pt-32 pb-16 overflow-hidden">
          <div className="absolute inset-0 z-0 opacity-15 bg-cover bg-center animate-fade-in" style={{ backgroundImage: 'url("/set.jpg")' }}>
             <div className="absolute inset-0 bg-[#050505]/80 backdrop-blur-[3px]"></div>
          </div>

          <div className="relative z-10 px-4 sm:px-6 lg:px-8 max-w-[90rem] mx-auto w-full">
             <div className="flex flex-col lg:flex-row items-center justify-between gap-16 md:gap-24">
                <div className="lg:w-1/2 animate-fade-in-up">
                   <div className="flex items-center gap-4 mb-8">
                      <span className="h-[1px] w-12 bg-[#A07A41]"></span>
                      <span className="text-[#A07A41] uppercase tracking-[0.4em] text-[10px] font-black italic">Employment Law Direct</span>
                   </div>
                   <h1 className="text-4xl md:text-5xl lg:text-7xl font-serif font-bold text-white leading-[1.1] mb-10 tracking-tighter">
                      Settlement <br />
                      <span className="italic font-light text-[#A07A41]">Agreements UK.</span>
                   </h1>
                   <p className="text-gray-400 text-xs md:text-sm lg:text-lg font-sans font-light leading-relaxed mb-12 max-w-xl italic border-l-2 border-[#A07A41] pl-8">
                      Expert legal advice on employment settlement agreements for employees and employers. Professional guidance ensuring your rights are protected and valid under UK employment law.
                   </p>
                   <div className="flex flex-wrap gap-4">
                      {[ "Redundancy", "Dispute Resolution", "Employment Rights" ].map((tag, i) => (
                         <div key={i} className="px-6 py-3 bg-white/5 border border-white/10 rounded-xl text-[9px] font-black uppercase tracking-widest text-[#A07A41] italic">{tag}</div>
                      ))}
                   </div>
                </div>

                <div className="lg:w-1/3 animate-fade-in-up animation-delay-300">
                   <div className="p-10 md:p-16 bg-[#2A454E]/40 border border-white/10 rounded-[4rem] backdrop-blur-3xl relative overflow-hidden group shadow-2xl">
                      <div className="absolute top-0 right-0 p-8 opacity-5 scale-[2] text-[#A07A41]"><Users size={150} /></div>
                      <h3 className="text-white text-xl md:text-2xl font-serif font-bold mb-8 italic italic group-hover:text-black">Solicitor Review.</h3>
                      <p className="text-gray-400 text-xs italic mb-10">We prioritize urgency and legal precision. Get your agreement reviewed within 24–48 hours.</p>
                      <div role="button" className="inline-flex items-center gap-4 px-10 py-5 bg-[#A07A41] text-black font-black uppercase text-[10px] tracking-widest rounded-full transition-all hover:scale-105 cursor-pointer shadow-[0_20px_40px_rgba(160,122,65,0.2)]">
                         <span>Get Started</span>
                         <ArrowRight size={14} />
                      </div>
                   </div>
                </div>
             </div>
          </div>
        </section>

        {/* 2. What is a Settlement Agreement */}
        <section className="relative py-24 lg:py-40 bg-[#2A454E]/20 border-y border-white/5 overflow-hidden">
           <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 animate-fade-in-up">
              <div className="p-12 md:p-24 bg-white/5 border border-white/10 rounded-[4rem] relative overflow-hidden flex flex-col md:flex-row items-center gap-16">
                 <div className="md:w-1/3">
                    <div className="h-32 w-32 bg-[#A07A41]/20 rounded-full flex items-center justify-center text-[#A07A41] mx-auto md:mx-0 shadow-2xl">
                       <FileText size={48} />
                    </div>
                 </div>
                 <div className="md:w-2/3 text-center md:text-left">
                    <h2 className="text-white text-2xl md:text-4xl font-serif font-bold mb-8 italic text-[#A07A41]">What is a Settlement Agreement?</h2>
                    <p className="text-gray-400 text-xs md:text-lg leading-relaxed italic font-light italic leading-loose">
                       A settlement agreement is a legally binding contract between an employer and an employee. It is typically used to resolve disputes or end employment on agreed terms, often involving compensation in exchange for waiving certain legal claims.
                    </p>
                    <div className="mt-10 p-6 bg-[#A07A41] text-black rounded-2xl inline-block font-black uppercase text-[10px] tracking-widest italic shadow-2xl">
                       The Reality: You get money — You give up rights.
                    </div>
                 </div>
              </div>
           </div>
        </section>

        {/* 3. When Are They Used? */}
        <section className="relative py-24 lg:py-40 bg-[#1B2D33] overflow-hidden">
           <div className="px-4 sm:px-6 lg:px-8 max-w-[90rem] mx-auto text-center mb-32 animate-fade-in-up">
              <span className="text-[#A07A41] uppercase tracking-[0.4em] text-[10px] font-black mb-8 block font-serif">Scenario Guide</span>
              <h2 className="text-3xl md:text-5xl font-serif font-bold text-white tracking-tight italic">When is an Agreement <span className="italic font-light text-[#A07A41]">Offered?</span></h2>
           </div>

           <div className="px-4 sm:px-6 lg:px-8 max-w-[90rem] mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
              {[
                { t: "Redundancy", i: Briefcase, d: "Ending employment" },
                { t: "Workplace Disputes", i: Gavel, d: "Resolving conflicts" },
                { t: "Unfair Dismissal", i: ShieldAlert, d: "Claims resolution" },
                { t: "Discrimination", i: HelpCircle, d: "Grievance cases" },
                { t: "Mutual Termination", i: Users, d: "Agreeing transfer" }
              ].map((item, i) => (
                 <div key={i} className="p-10 bg-white/5 border border-white/5 rounded-[3rem] text-center group hover:border-[#A07A41]/40 transition-all duration-700 animate-fade-in-up shadow-2xl" style={{ animationDelay: `${i * 100}ms` }}>
                    <div className="h-16 w-16 bg-[#2A454E] rounded-[2rem] flex items-center justify-center text-[#A07A41] mx-auto mb-8 transition-transform group-hover:rotate-12 group-hover:bg-[#A07A41] group-hover:text-black">
                       <item.i size={24} />
                    </div>
                    <h4 className="text-white font-serif font-bold text-sm md:text-lg italic mb-2 tracking-tighter uppercase">{item.t}</h4>
                    <span className="text-gray-600 text-[10px] uppercase font-black tracking-widest">{item.d}</span>
                 </div>
              ))}
           </div>
        </section>

        {/* 4. Why Independent Legal Advice is Mandatory */}
        <section className="relative py-24 lg:py-40 bg-[#2A454E]/10 overflow-hidden">
           <div className="px-4 sm:px-6 lg:px-8 max-w-[90rem] mx-auto grid lg:grid-cols-2 gap-20 items-center animate-fade-in-up">
              <div className="p-12 md:p-24 bg-[#A07A41]/10 border-2 border-[#A07A41] rounded-[4rem] relative overflow-hidden group">
                 <div className="absolute top-0 right-0 p-12 opacity-5 scale-[3] text-[#A07A41]"><ShieldCheck size={200} /></div>
                 <h2 className="text-[#A07A41] text-3xl md:text-5xl font-serif font-bold mb-10 italic">Mandatory <br />Independent Advice.</h2>
                 <p className="text-gray-300 text-xs md:text-lg leading-relaxed italic mb-12">
                    Under UK law, a settlement agreement is <strong className="text-white uppercase decoration-[#A07A41] underline underline-offset-4">only legally valid</strong> if the employee receives independent legal advice from a qualified solicitor or adviser.
                 </p>
                 <div className="flex items-center gap-4 text-[#A07A41] text-[10px] font-black uppercase tracking-widest italic">
                    <span className="h-[1px] w-12 bg-[#A07A41]"></span>
                    UK Employment Rights Act Requirement
                 </div>
              </div>

              <div className="space-y-12">
                 {[
                   { t: "Terms Awareness", d: "Ensuring you fully understand the long-term impact of every clause.", i: Search },
                   { t: "Rights Protection", d: "Guaranteeing your statutory and contractual rights are preserved.", i: Scale },
                   { t: "Offer Audit", d: "Verifying if the compensation offered is statistically fair.", i: ShieldCheck }
                 ].map((item, i) => (
                    <div key={i} className="flex gap-8 group">
                       <div className="h-12 w-12 shrink-0 border border-[#A07A41]/30 rounded-2xl flex items-center justify-center text-[#A07A41] group-hover:bg-[#A07A41] group-hover:text-black transition-all shadow-xl">
                          <item.i size={20} />
                       </div>
                       <div>
                          <h4 className="text-white font-serif font-bold text-lg italic mb-2 tracking-tighter uppercase">{item.t}</h4>
                          <p className="text-gray-500 text-xs italic leading-relaxed border-l-2 border-white/5 pl-6 group-hover:border-[#A07A41] transition-all">{item.d}</p>
                       </div>
                    </div>
                 ))}
              </div>
           </div>
        </section>

        {/* 5. Our Services */}
        <section className="relative py-24 lg:py-40 bg-[#1B2D33] overflow-hidden">
           <div className="px-4 sm:px-6 lg:px-8 max-w-[90rem] mx-auto text-center mb-32 animate-fade-in-up">
              <span className="text-[#A07A41] uppercase tracking-[0.4em] text-[10px] font-black mb-8 block font-serif">Legal Mastery</span>
              <h2 className="text-3xl md:text-6xl font-serif font-bold text-white tracking-tight italic uppercase">Our <span className="italic font-light text-[#A07A41]">Services.</span></h2>
           </div>

           <div className="px-4 sm:px-6 lg:px-8 max-w-[90rem] mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
              {services.map((service, i) => (
                 <div key={i} className="group relative h-[400px] md:h-[600px] rounded-[3rem] overflow-hidden transition-all duration-700 animate-fade-in-up shadow-2xl" style={{ animationDelay: `${i * 100}ms` }}>
                    <div className="absolute inset-0">
                       <img src={service.img} alt={service.t} className="w-full h-full object-cover grayscale transition-all duration-[1s] group-hover:grayscale-0 group-hover:scale-110" />
                       <div className="absolute inset-0 bg-gradient-to-t from-[#1B2D33] via-[#1B2D33]/40 to-transparent"></div>
                    </div>
                    <div className="absolute bottom-0 left-0 p-8 w-full z-10 transition-all duration-500">
                       <div className="h-[2px] w-12 bg-[#A07A41] mb-6 group-hover:w-full transition-all duration-700"></div>
                       <h4 className="text-white font-serif font-bold text-xl mb-4 italic group-hover:text-[#A07A41] transition-colors">{service.t}</h4>
                       <p className="text-gray-400 text-xs font-sans font-light leading-relaxed italic opacity-0 group-hover:opacity-100 transition-all duration-500 h-0 group-hover:h-auto">{service.d}</p>
                    </div>
                 </div>
              ))}
           </div>
        </section>

        {/* 6. FAQ Section */}
        <section className="relative py-24 lg:py-40 bg-[#2A454E]/10 overflow-hidden border-t border-white/10">
           <div className="px-4 sm:px-6 lg:px-8 max-w-[50rem] mx-auto animate-fade-in-up">
              <div className="text-center mb-24">
                 <h2 className="text-3xl md:text-5xl font-serif font-bold text-white tracking-tight italic">Common <span className="italic font-light text-[#A07A41]">Queries.</span></h2>
              </div>

              <div className="space-y-4">
                 {[
                   { q: "Do I need a solicitor for a settlement agreement?", a: "Yes. In the UK, independent legal advice from a qualified solicitor is the legal prerequisite to make a settlement agreement valid and binding." },
                   { q: "How long does the completion process take?", a: "Typically within 24 to 48 hours for standard reviews. Urgent cases can be prioritized." },
                   { q: "Is the legal fee covered by my employer?", a: "Most employers provide a contribution toward your legal costs in the agreement, often covering the full fee." },
                   { q: "Can I negotiate the financial offer?", a: "Yes. If the offer is unfair, we can provide strategic counter-offer support." }
                 ].map((faq, index) => (
                    <div 
                       key={index} 
                       className="border border-[#A07A41]/10 rounded-[2.5rem] bg-[#1B2D33] overflow-hidden shadow-2xl" 
                    >
                       <button 
                         onClick={() => setActiveFaq(activeFaq === index ? null : index)}
                         className="w-full p-8 flex items-center justify-between group outline-none"
                       >
                         <span className={`text-left text-sm md:text-base font-serif transition-colors font-bold italic ${activeFaq === index ? 'text-[#A07A41]' : 'text-gray-200'}`}>{faq.q}</span>
                         <ChevronDown className={`h-4 w-4 transition-transform ${activeFaq === index ? 'rotate-180 text-[#A07A41]' : 'text-gray-500'}`} />
                       </button>
                       <div className={`transition-all duration-500 ease-in-out px-8 ${activeFaq === index ? 'max-h-[500px] pb-10 opacity-100 mt-2' : 'max-h-0 opacity-0 overflow-hidden'}`}>
                          <p className="text-gray-400 text-xs md:text-sm font-sans font-light italic border-l-2 border-[#A07A41]/30 pl-8">{faq.a}</p>
                       </div>
                    </div>
                 ))}
              </div>
           </div>
        </section>

        {/* 7. Call to Action */}
        <section className="relative py-24 lg:py-40 bg-[#1B2D33] overflow-hidden">
           <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 animate-fade-in-up">
              <div className="p-12 md:p-32 bg-[#2A454E]/40 border border-white/10 rounded-[5rem] backdrop-blur-3xl relative overflow-hidden shadow-2xl text-center">
                 <div className="absolute top-0 right-0 p-32 opacity-5 scale-[4]"><Users size={200} /></div>
                 <h2 className="text-4xl md:text-7xl font-serif font-bold text-white mb-10 tracking-tighter leading-none italic uppercase">Get Expert <span className="italic font-light text-[#A07A41] lowercase">Advice.</span></h2>
                 <p className="text-gray-300 text-sm md:text-xl font-sans font-light italic mb-16 max-w-2xl mx-auto opacity-70">
                    If you’ve been offered a settlement agreement, don’t sign it without understanding your rights. Contact us today for fast, professional legal advice.
                 </p>
                 <div role="button" className="inline-flex items-center gap-6 px-16 py-8 bg-[#A07A41] text-black font-black uppercase text-[12px] tracking-widest rounded-full transition-all hover:scale-105 cursor-pointer shadow-[0_45px_90px_rgba(160,122,65,0.4)]">
                    <span>Contact Us Now</span>
                    <ArrowRight className="h-5 w-5" />
                 </div>
              </div>
           </div>
        </section>

      </main>
    </div>
  );
};

export default SettlementAgreementsPage;
