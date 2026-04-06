import React, { useEffect, useState } from 'react';
import { 
  Scale, Gavel, FileText, CheckCircle, 
  Clock, ShieldCheck, Mail, Phone, ArrowRight,
  ChevronDown, Info, Search, Users
} from 'lucide-react';

const AffidavitsDeclarationsPage = () => {
  const [activeFaq, setActiveFaq] = useState(null);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const services = [
    { t: "Preparation of Affidavits", d: "Detailed, sworn statements drafted to satisfy high-level evidentiary standards.", img: "/aff1.jpg" },
    { t: "Statutory Declarations", d: "Legally binding declarations for non-court matters (names, nationality, business).", img: "/aff2.jpg" },
    { t: "Swearing & Affirming", d: "Support in coordination with Commissioners for Oaths for the legal swearing process.", img: "/aff3.jpg" },
    { t: "Exhibits & Attachments", d: "Correct indexing and validation of supporting evidence attached to your statements.", img: "/aff4.jpg" },
    { t: "International Usability", d: "Advisory on preparing declarations for use in foreign jurisdictions or legal processes.", img: "/aff5.jpg" }
  ];

  return (
    <div className="min-h-screen bg-[#1B2D33] flex flex-col overflow-x-hidden text-white font-sans selection:bg-[#A07A41] selection:text-black">
      <main className="flex-grow">
        
        {/* 1. Hero Section */}
        <section className="relative min-h-[90vh] flex items-center pt-32 pb-16 overflow-hidden bg-[#1B2D33]">
          <div className="absolute inset-0 z-0 opacity-15 bg-cover bg-center animate-fade-in" style={{ backgroundImage: 'url("/aff.jpg")' }}>
             <div className="absolute inset-0 bg-[#050505]/85 backdrop-blur-[4px]"></div>
          </div>

          <div className="relative z-10 px-4 sm:px-6 lg:px-8 max-w-[90rem] mx-auto w-full">
             <div className="flex flex-col lg:flex-row items-center justify-between gap-16 md:gap-24">
                <div className="lg:w-1/2 animate-fade-in-up">
                   <div className="flex items-center gap-4 mb-10 text-[#A07A41]">
                      <span className="h-[1px] w-12 bg-current"></span>
                      <span className="uppercase tracking-[0.5em] text-[10px] font-black italic">H&S Evidence & Attestations</span>
                   </div>
                   
                   <h1 className="text-3xl md:text-5xl lg:text-7xl font-serif font-bold text-white leading-[1.1] mb-12 tracking-tighter">
                      Affidavits & <br />
                      <span className="italic font-light text-[#A07A41]">Declarations UK.</span>
                   </h1>
                   
                   <p className="text-gray-400 text-xs md:text-sm lg:text-lg font-sans font-light leading-relaxed mb-14 max-w-xl italic flex items-center gap-8">
                      <span className="h-20 w-[1px] bg-white/20 shrink-0"></span>
                      Professional assistance in drafting and witnessing legally binding statements across the United Kingdom. Expert support for legal, business, and personal matters.
                   </p>

                   <div className="flex flex-wrap gap-4 overflow-hidden">
                      {[ "Section 448 Companies Act", "Oaths Act 1888", "Civil Procedure Rules" ].map((tag, i) => (
                         <div key={i} className="px-6 py-4 bg-[#A07A41]/10 border border-[#A07A41]/30 rounded-2xl text-[9px] font-black uppercase tracking-widest text-[#A07A41]">{tag}</div>
                      ))}
                   </div>
                </div>

                <div className="lg:w-1/3 animate-fade-in-up animation-delay-300">
                   <div className="p-12 md:p-16 bg-[#2A454E]/50 border border-white/10 rounded-[5rem] backdrop-blur-3xl relative overflow-hidden group shadow-2xl">
                      <div className="absolute top-0 right-0 p-12 opacity-5 scale-[2] text-[#A07A41]"><Scale size={180} /></div>
                      <h3 className="text-white text-xl md:text-2xl font-serif font-bold mb-10 italic uppercase tracking-tighter group-hover:text-black">Professional Review.</h3>
                      <p className="text-gray-400 text-xs md:text-sm italic mb-12 leading-relaxed opacity-80 group-hover:text-black">We provide expert support in preparing affidavits and statutory declarations for use in both legal and commercial settings.</p>
                      <div role="button" className="inline-flex items-center gap-6 px-14 py-7 bg-[#A07A41] text-black font-black uppercase text-[10px] tracking-[0.2em] rounded-full transition-all hover:scale-105 cursor-pointer shadow-[0_30px_60px_rgba(160,122,65,0.4)]">
                         <span>Get Started</span>
                         <ArrowRight size={16} />
                      </div>
                   </div>
                </div>
             </div>
          </div>
        </section>

        {/* 2. Binary Comparison - What is an Affidavit? */}
        <section className="relative py-24 lg:py-48 bg-[#1B2D33] overflow-hidden border-y border-white/5">
           <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 animate-fade-in-up">
              <div className="grid lg:grid-cols-2 gap-2 shadow-2xl rounded-[5rem] overflow-hidden border border-white/5">
                 <div className="p-12 md:p-24 bg-[#2A454E]/40 border-r border-white/10 group hover:bg-[#A07A41] transition-all duration-700">
                    <div className="h-20 w-20 bg-[#A07A41]/20 rounded-[2rem] flex items-center justify-center text-[#A07A41] mb-12 group-hover:bg-black group-hover:text-white transition-all">
                       <Gavel size={32} />
                    </div>
                    <h2 className="text-white text-2xl md:text-5xl font-serif font-bold mb-10 italic tracking-tighter group-hover:text-black">What is an <br />Affidavit?</h2>
                    <p className="text-gray-400 text-xs md:text-lg leading-relaxed italic font-light italic leading-loose opacity-70 group-hover:text-black/80 transition-colors">
                       An affidavit is a written statement of facts that is sworn or affirmed to be true before someone with authority to administer an oath, such as a solicitor or Commissioner for Oaths.
                    </p>
                 </div>
                 <div className="p-12 md:p-24 bg-[#1B2D33] group hover:bg-[#A07A41] transition-all duration-700">
                    <div className="h-20 w-20 bg-[#A07A41]/20 rounded-[2rem] flex items-center justify-center text-[#A07A41] mb-12 group-hover:bg-black group-hover:text-white transition-all">
                       <FileText size={32} />
                    </div>
                    <h2 className="text-white text-2xl md:text-5xl font-serif font-bold mb-10 italic tracking-tighter group-hover:text-black">What is a <br />Statutory Dec?</h2>
                    <p className="text-gray-400 text-xs md:text-lg leading-relaxed italic font-light italic leading-loose opacity-70 group-hover:text-black/80 transition-colors">
                       Under the Statutory Declarations Act 1835, this is a written statement of fact made by a person who solemnly and sincerely declares that it is true. Used when no court proceedings are active.
                    </p>
                 </div>
              </div>
           </div>
        </section>

        {/* 3. When Are They Used? */}
        <section className="relative py-24 lg:py-48 bg-[#2A454E]/10 overflow-hidden">
           <div className="px-4 sm:px-6 lg:px-8 max-w-[90rem] mx-auto text-center mb-40 animate-fade-in-up">
              <span className="text-[#A07A41] uppercase tracking-[0.6em] text-[10px] font-black mb-12 block font-serif">Legal Use Cases</span>
              <h2 className="text-3xl md:text-7xl font-serif font-bold text-white tracking-tight italic uppercase">When Do You <span className="italic font-light text-[#A07A41]">Need These?</span></h2>
           </div>

           <div className="px-4 sm:px-6 lg:px-8 max-w-[90rem] mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                { t: "Immigration & Nationality", i: Search, d: "Confirming identity or relationship facts for Home Office use." },
                { t: "Property Development", i: Briefcase, d: "Confirming land use or addressing title disputes in real estate." },
                { t: "Business & Corporate", i: Users, d: "Declarations of insolvency status or corporate board decisions." },
                { t: "Financial Evidence", i: ShieldCheck, d: "Attesting to assets or confirming lost financial documentation." }
              ].map((item, i) => (
                 <div key={i} className="group p-12 bg-[#1B2D33] border border-white/5 rounded-[4rem] text-center hover:border-[#A07A41]/40 transition-all duration-700 animate-fade-in-up shadow-2xl" style={{ animationDelay: `${i * 100}ms` }}>
                    <div className="h-16 w-16 bg-[#2A454E] rounded-[2rem] flex items-center justify-center text-[#A07A41] mx-auto mb-10 transition-transform group-hover:rotate-12 group-hover:bg-[#A07A41] group-hover:text-black">
                       <item.i size={24} />
                    </div>
                    <h4 className="text-white font-serif font-bold text-base md:text-xl italic mb-4 tracking-tighter uppercase">{item.t}</h4>
                    <span className="text-gray-500 text-[11px] uppercase font-black tracking-widest">{item.d}</span>
                 </div>
              ))}
           </div>
        </section>

        {/* 4. Our Services / Service Pillars */}
        <section className="relative py-24 lg:py-48 bg-[#1B2D33] overflow-hidden border-y border-white/5 shadow-2xl">
           <div className="px-4 sm:px-6 lg:px-8 max-w-[90rem] mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
              {services.map((service, i) => (
                 <div key={i} className="group relative h-[500px] md:h-[650px] rounded-[4.5rem] overflow-hidden transition-all duration-700 animate-fade-in-up" style={{ animationDelay: `${i * 100}ms` }}>
                    <div className="absolute inset-0">
                       <img src={service.img} alt={service.t} className="w-full h-full object-cover grayscale transition-all duration-[1s] group-hover:grayscale-0 group-hover:scale-110" />
                       <div className="absolute inset-0 bg-gradient-to-t from-[#1B2D33] via-[#1B2D33]/40 to-transparent"></div>
                    </div>
                    <div className="absolute bottom-0 left-0 p-12 w-full z-10 transition-all group-hover:pb-16 duration-500">
                       <div className="h-[2px] w-12 bg-[#A07A41] mb-8 group-hover:w-full transition-all duration-[1s]"></div>
                       <h4 className="text-white font-serif font-bold text-xl md:text-2xl mb-6 italic tracking-tighter group-hover:text-[#A07A41] transition-colors">{service.t}</h4>
                       <p className="text-gray-400 text-[11px] md:text-[13px] font-sans font-light leading-relaxed italic h-0 opacity-0 group-hover:h-auto group-hover:opacity-90 transition-all duration-500">{service.d}</p>
                    </div>
                 </div>
              ))}
           </div>
        </section>

        {/* 5. Process Flow */}
        <section className="relative py-24 lg:py-48 bg-[#2A454E]/10 overflow-hidden">
           <div className="px-4 sm:px-6 lg:px-8 max-w-[90rem] mx-auto text-center mb-40 animate-fade-in-up">
              <span className="text-[#A07A41] uppercase tracking-[0.8em] text-[10px] font-black mb-12 block font-serif underline decoration-1 underline-offset-8">Execution Ladder</span>
              <h2 className="text-4xl md:text-7xl font-serif font-bold text-white tracking-tight italic opacity-90 drop-shadow-2xl uppercase">Expert <span className="italic font-light text-[#A07A41]">Execution.</span></h2>
           </div>

           <div className="px-4 sm:px-6 lg:px-8 max-w-[90rem] mx-auto grid grid-cols-1 md:grid-cols-4 gap-12">
              {[ "Discovery of Facts", "Drafting Phase", "Review & Calibration", "Signing & Sealing" ].map((step, i) => (
                 <div key={i} className="group p-14 bg-[#1B2D33] border border-white/5 rounded-[4rem] text-center relative transition-all duration-700 hover:bg-[#A07A41] shadow-2xl animate-fade-in-up" style={{ animationDelay: `${i * 100}ms` }}>
                    <div className="text-6xl md:text-8xl font-serif font-black text-[#A07A41]/10 italic mb-10 group-hover:text-black transition-colors duration-500 italic">0{i+1}</div>
                    <h4 className="text-white font-serif font-bold text-xl italic group-hover:text-black mb-8 transition-colors duration-500 italic uppercase underline decoration-[#A07A41]/30 group-hover:decoration-black">{step}</h4>
                    <div className="h-[2px] w-16 bg-[#A07A41] mx-auto group-hover:bg-black group-hover:w-full transition-all duration-[1s] rounded-full"></div>
                 </div>
              ))}
           </div>
        </section>

        {/* 6. FAQ Section */}
        <section className="relative py-24 lg:py-48 bg-[#1B2D33] overflow-hidden border-t border-white/10">
           <div className="px-4 sm:px-6 lg:px-8 max-w-[55rem] mx-auto animate-fade-in-up">
              <div className="text-center mb-32">
                 <h2 className="text-3xl md:text-6xl font-serif font-bold text-white tracking-tight relative z-10 italic drop-shadow-[0_0_20px_rgba(160,122,65,0.2)] uppercase">Procedural <span className="italic font-light text-[#A07A41]">FAQs.</span></h2>
              </div>

              <div className="space-y-6">
                 {[
                   { q: "Is a statutory declaration the same as an affidavit?", a: "No. While both are legally binding, an affidavit is sworn or affirmed in the presence of a liquidator/solicitor for court use, whereas a statutory declaration is widely used in commercial or administrative matters outside of court." },
                   { q: "Who can witness a statutory declaration in the UK?", a: "In the UK, this can be witnessed by a solicitor, a Justice of the Peace, a Commissioner for Oaths, or a Notary Public." },
                   { q: "Can we use these documents overseas?", a: "Yes, but they may need ‘Legalisation’ or an ‘Apostille’ via the Foreign & Commonwealth Office to be recognized in foreign jurisdictions. We can assist in preparing them for such processes." },
                   { q: "How long does the drafting process take?", a: "A standard affidavit or declaration can be drafted and ready for review within 24 hours of receiving all relevant factual information from the client." }
                 ].map((faq, index) => (
                    <div 
                       key={index} 
                       className="border border-[#A07A41]/10 rounded-[3rem] bg-[#1B2D33] overflow-hidden shadow-big group transition-all" 
                    >
                       <button 
                         onClick={() => setActiveFaq(activeFaq === index ? null : index)}
                         className="w-full p-10 md:p-14 flex items-center justify-between group outline-none"
                       >
                         <span className={`text-left text-sm md:text-xl font-serif transition-colors font-bold italic tracking-tight ${activeFaq === index ? 'text-[#A07A41]' : 'text-gray-300'}`}>{faq.q}</span>
                         <ChevronDown className={`h-5 w-5 transition-transform duration-500 ${activeFaq === index ? 'rotate-180 text-[#A07A41]' : 'text-gray-600'}`} />
                       </button>
                       <div className={`transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] px-10 md:px-14 ${activeFaq === index ? 'max-h-[800px] pb-14 opacity-100' : 'max-h-0 opacity-0 overflow-hidden'}`}>
                          <p className="text-gray-500 text-xs md:text-base font-sans font-light leading-relaxed italic border-l-2 border-[#A07A41]/40 pl-10 opacity-90">{faq.a}</p>
                       </div>
                    </div>
                 ))}
              </div>
           </div>
        </section>

        {/* 7. Call to Action */}
        <section className="relative py-24 lg:py-60 bg-[#2A454E]/10 overflow-hidden">
           <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 animate-fade-in-up shadow-2xl">
              <div className="p-14 md:p-32 bg-[#1B2D33] border border-white/5 rounded-[6rem] md:rounded-[9rem] backdrop-blur-3xl relative overflow-hidden shadow-2xl text-center group">
                 <div className="absolute top-0 right-0 p-40 opacity-[0.03] scale-[4] rotate-[-25deg] transition-transform duration-[5s] group-hover:text-[#A07A41]"><Scale size={300} /></div>
                 
                 <h2 className="text-4xl md:text-7xl lg:text-9xl font-serif font-bold text-white mb-14 tracking-tighter leading-none italic uppercase decoration-[#A07A41]/10 underline underline-offset-[24px] decoration-4">Attestation <br /><span className="italic font-light text-[#A07A41] lowercase">Ready.</span></h2>
                 
                 <p className="text-gray-300 text-sm md:text-2xl font-sans font-light italic leading-relaxed mb-20 max-w-3xl mx-auto opacity-60">
                    Prepare your evidence with professional legal precision. Our UK-based experts ensure your declarations are compliant, binding, and ready for official use.
                 </p>

                 <div className="flex flex-col md:flex-row items-center justify-center gap-14 mb-20">
                    <div className="flex flex-col items-center gap-3">
                       <Mail size={24} className="text-[#A07A41]" />
                       <span className="text-white font-serif font-bold text-lg md:text-2xl italic">legal@hsco.co</span>
                    </div>
                    <div className="flex flex-col items-center gap-3">
                       <Phone size={24} className="text-[#A07A41]" />
                       <span className="text-white font-serif font-bold text-lg md:text-2xl italic">+44 20 745 9210</span>
                    </div>
                 </div>

                 <div role="button" className="inline-flex items-center gap-8 px-20 py-10 bg-[#A07A41] text-black font-black uppercase text-[12px] md:text-[14px] tracking-[0.4em] rounded-[4rem] transition-all hover:scale-110 cursor-pointer shadow-[0_50px_100px_rgba(160,122,65,0.4)] hover:bg-white">
                    <span>Expert Attestation</span>
                    <ArrowRight className="h-6 w-6" />
                 </div>
              </div>
           </div>
        </section>

      </main>
    </div>
  );
};

export default AffidavitsDeclarationsPage;
