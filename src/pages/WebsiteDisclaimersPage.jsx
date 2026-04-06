import React, { useEffect, useState, useRef } from 'react';
import { 
  AlertTriangle, Scale, Users, Search, ShieldAlert, 
  ExternalLink, Gavel, Mail, Phone, ArrowRight,
  ShieldCheck, Info, FileText, Globe, Clock, CheckCircle, ChevronDown
} from 'lucide-react';


const WebsiteDisclaimersPage = () => {
  const [activeFaq, setActiveFaq] = useState(null);
  const [visibleSections, setVisibleSections] = useState({});


  const sectionRefs = {
    hero: useRef(null),
    noadvice: useRef(null),
    relationship: useRef(null),
    accuracy: useRef(null),
    liability: useRef(null),
    external: useRef(null),
    regulatory: useRef(null),
    contact: useRef(null)
  };

  useEffect(() => {
    window.scrollTo(0, 0);

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            const section = entry.target.getAttribute('data-section');
            if (section) {
              setVisibleSections(prev => ({
                ...prev,
                [section]: true
              }));
            }
          }
        });
      },
      { threshold: 0.1 }
    );

    Object.values(sectionRefs).forEach(ref => {
      if (ref.current) observer.observe(ref.current);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <div className="min-h-screen bg-[#2A454E] flex flex-col overflow-x-hidden text-white font-sans selection:bg-[#A07A41] selection:text-black">
      <main className="flex-grow">
        
        {/* 1. Hero Section - PARALLAX OVERLAY FLOW */}
        <section 
          ref={sectionRefs.hero}
          data-section="hero"
          className="relative min-h-[90vh] flex items-center justify-center pt-32 pb-16 overflow-hidden bg-[#1B2D33]"
        >
          <div 
             className="absolute inset-0 z-0 opacity-40 bg-cover bg-center bg-scroll md:bg-fixed scale-110"
             style={{ backgroundImage: 'url("/qq.jpg")' }}
          >
             <div className="absolute inset-0 bg-[#1B2D33]/40"></div>
          </div>

          <div className={`relative z-10 px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto text-center transition-all duration-1000 ${visibleSections.hero ? 'animate-fade-in-up' : 'opacity-0 translate-y-[100px]'}`}>
             <div className="inline-flex items-center gap-4 mb-8 px-6 py-2 bg-white/5 border border-white/10 rounded-full">
                <AlertTriangle size={14} className="text-[#A07A41]" />
                <span className="text-[#A07A41] uppercase tracking-[0.5em] text-[8px] font-black italic">Structural Integrity Matrix</span>
             </div>
             
             <h1 className="text-3xl md:text-5xl lg:text-7xl font-serif font-bold text-white leading-[1] mb-8 tracking-tighter">
                Website <br />
                <span className="italic font-light text-[#A07A41]">Disclaimer.</span>
             </h1>
             
             <p className="text-gray-300 text-xs md:text-sm lg:text-base font-sans font-light leading-relaxed max-w-3xl mx-auto mb-12 border-y border-white/10 py-8 px-4 italic">
                Important information regarding the use of this website and its content. The information provided on this website is for general informational purposes only and does not constitute legal advice.
             </p>

             <div className="flex flex-wrap justify-center gap-4 mb-10">
                {[ "UK Legal Disclaimer", "No Legal Advice UK", "Law Firm Matrix" ].map((tag, i) => (
                   <span key={i} className="text-[8px] font-black uppercase text-gray-500 tracking-[0.3em]">{tag}</span>
                ))}
             </div>
          </div>
        </section>

        {/* 2. No Legal Advice Section - THE RED LINE FLOW */}
        <section 
          ref={sectionRefs.noadvice}
          data-section="noadvice"
          className="relative py-24 lg:py-40 bg-[#2A454E] overflow-hidden"
        >
           <div className="px-4 sm:px-6 lg:px-8 max-w-[90rem] mx-auto flex flex-col lg:flex-row items-center gap-20">
              <div className={`lg:w-1/2 transition-all duration-1000 ${visibleSections.noadvice ? 'animate-fade-in-left' : 'opacity-0 translate-x-[-150px] translate-y-[-150px]'}`}>
                 <h2 className="text-2xl md:text-4xl font-serif font-bold text-white mb-8 leading-tight">No Legal <br /><span className="italic font-light text-[#A07A41]">Advice.</span></h2>
                 <div className="h-1 w-24 bg-[#A07A41] mb-8"></div>
                 <p className="text-gray-400 text-xs md:text-sm font-sans font-light leading-relaxed mb-10 italic border-l-4 border-[#A07A41] pl-6">
                    The content on this website is provided for general information only and should not be relied upon as legal advice. You should not act or refrain from acting based on any information on this site without seeking professional legal advice from a qualified solicitor regulated by the **Solicitors Regulation Authority (SRA)** in the United Kingdom.
                 </p>
                 <div className="flex items-center gap-6 opacity-30">
                    <Scale size={32} className="text-[#A07A41]" />
                    <Gavel size={32} className="text-[#A07A41]" />
                 </div>
              </div>

              <div className={`lg:w-1/2 p-10 md:p-16 lg:p-20 bg-[#1B2D33] rounded-[3rem] md:rounded-[4rem] relative overflow-hidden backdrop-blur-2xl border border-white/5 transition-all duration-1000 ${visibleSections.noadvice ? 'animate-fade-in-right' : 'opacity-0 translate-x-[150px] translate-y-[150px]'}`}>
                 <div className="absolute top-0 right-0 p-12 opacity-5 scale-[2]"><AlertTriangle size={150} className="text-[#A07A41]" /></div>
                 <div className="relative z-10 space-y-6">
                    <h4 className="text-white font-serif font-bold text-lg md:text-xl uppercase italic tracking-widest text-[#A07A41]">Critical Protection.</h4>
                    <p className="text-gray-500 font-sans text-[9px] md:text-[10px] uppercase tracking-widest font-black leading-relaxed">Acting without a qualified solicitor regulated by the SRA creates extreme legal risk. Our website acts as a repository of knowledge, not a substitute for direct litigation counsel.</p>
                 </div>
              </div>
           </div>
        </section>

        {/* 3. No Lawyer-Client Relationship - CONNECTIVITY MATRIX FLOW */}
        <section 
          ref={sectionRefs.relationship}
          data-section="relationship"
          className="relative py-24 lg:py-40 bg-[#1B2D33] overflow-hidden border-y border-white/5"
        >
           <div className={`px-4 sm:px-6 lg:px-8 max-w-[90rem] mx-auto text-center mb-16 md:mb-24 transition-all duration-1000 ${visibleSections.relationship ? 'animate-fade-in-up' : 'opacity-0 translate-x-[150px] translate-y-[150px]'}`}>
              <span className="text-[#A07A41] uppercase tracking-[0.4em] text-[9px] font-black mb-6 block font-serif">Relationship Boundaries</span>
              <h2 className="text-3xl md:text-5xl font-serif font-bold text-white tracking-tight">No Lawyer-Client <span className="italic font-light text-[#A07A41]">Relationship.</span></h2>
           </div>

           <div className="px-4 sm:px-6 lg:px-8 max-w-[60rem] mx-auto relative">
              <div className="absolute top-1/2 left-0 w-full h-[1px] bg-white/10 hidden md:block"></div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 relative z-10">
                 <div className={`p-8 md:p-12 bg-[#2A454E]/40 border border-white/10 rounded-2xl md:rounded-[3rem] text-center transition-all duration-1000 ${visibleSections.relationship ? 'animate-fade-in-left' : 'opacity-0 translate-x-[-100px]'}`}>
                    <Users className="text-[#A07A41] mb-8 md:mb-10 mx-auto" size={24} />
                    <p className="text-gray-400 text-[10px] md:text-xs italic leading-relaxed font-sans">Your use of this website, including contacting us through forms, emails, or messages, does not create a solicitor-client relationship.</p>
                 </div>
                 <div className={`p-8 md:p-12 bg-[#A07A41] text-black rounded-2xl md:rounded-[3rem] text-center transition-all duration-1000 ${visibleSections.relationship ? 'animate-fade-in-right' : 'opacity-0 translate-x-[100px]'}`}>
                    <FileText className="text-black mb-8 md:mb-10 mx-auto" size={24} />
                    <p className="text-black font-serif font-bold text-xs md:text-sm italic leading-relaxed">A formal relationship is only established once a written agreement has been signed between you and our firm.</p>
                 </div>
              </div>
           </div>
        </section>

        {/* 4. Accuracy of Information - DYNAMIC GAUGE FLOW */}
        <section 
          ref={sectionRefs.accuracy}
          data-section="accuracy"
          className="relative py-24 lg:py-40 bg-[#2A454E] overflow-hidden"
        >
           <div className="px-4 sm:px-6 lg:px-8 max-w-[90rem] mx-auto grid lg:grid-cols-2 gap-20 items-center">
              <div className={`order-2 lg:order-1 transition-all duration-1000 ${visibleSections.accuracy ? 'animate-fade-in-left' : 'opacity-0 translate-x-[-150px] translate-y-[150px]'}`}>
                 <div className="p-10 md:p-16 border-2 border-white/5 rounded-[3rem] md:rounded-[5rem] relative bg-[#1B2D33]/40 backdrop-blur-3xl group">
                    <div className="absolute top-0 right-0 p-12 opacity-5"><Search size={100} /></div>
                    <h3 className="text-white text-xl md:text-3xl font-serif font-bold mb-8 italic">Accuracy Thresholds.</h3>
                    <p className="text-gray-500 text-[10px] md:text-sm lg:text-base leading-relaxed mb-10 italic font-sans font-light">
                       While we strive to keep the information on this website accurate and up to date, we make no guarantees or warranties of any kind, express or implied, about the completeness, accuracy, reliability, or availability of the content.
                    </p>
                    <div className="flex items-center gap-6">
                       <span className="text-[#A07A41] text-[9px] uppercase font-black tracking-widest italic border-r border-white/10 pr-6">Legal Change Constant</span>
                       <Clock size={16} className="text-[#A07A41]" />
                    </div>
                 </div>
              </div>

              <div className={`order-1 lg:order-2 transition-all duration-1000 ${visibleSections.accuracy ? 'animate-fade-in-right' : 'opacity-0 translate-x-[150px] translate-y-[150px]'}`}>
                 <span className="text-[#A07A41] uppercase tracking-[0.4em] text-[9px] font-black mb-6 block font-serif">Reality Check Matrix</span>
                 <h2 className="text-2xl md:text-4xl font-serif font-bold text-white mb-8 leading-tight">Truth You <br /><span className="italic font-light text-[#A07A41]">Shouldn't Ignore.</span></h2>
                 <p className="text-gray-400 text-[10px] md:text-xs italic leading-relaxed max-w-sm mb-10">Law changes constantly. Our digital repository acts as a snapshot, not an eternal truth.</p>
              </div>
           </div>
        </section>

        {/* 5. Limitation of Liability - SHIELDED ENCLOSURE FLOW */}
        <section 
          ref={sectionRefs.liability}
          data-section="liability"
          className="relative py-24 lg:py-40 bg-[#1B2D33] overflow-hidden border-y border-white/5"
        >
           <div className={`max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center transition-all duration-1000 ${visibleSections.liability ? 'animate-fade-in-up' : 'opacity-0 translate-x-[-150px] translate-y-[-150px]'}`}>
              <ShieldAlert className="text-[#A07A41] mx-auto mb-10" size={40} />
              <h2 className="text-3xl md:text-5xl font-serif font-bold text-white mb-10 tracking-tight leading-tight">Limitation of <span className="italic font-light text-[#A07A41]">Liability.</span></h2>
              <div className="p-10 md:p-20 border border-white/10 rounded-[2rem] md:rounded-[4rem] bg-[#2A454E]/20 relative overflow-hidden">
                 <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-[#A07A41]/10 to-transparent opacity-30"></div>
                 <p className="text-gray-300 text-xs md:text-lg font-serif italic leading-relaxed relative z-10">
                    "We shall not be held liable for any loss or damage, including without limitation indirect or consequential loss, arising from the use of this website or reliance on its content."
                 </p>
                 <div className="mt-10 flex justify-center gap-4 relative z-10">
                    {[1,2,3].map(i => <div key={i} className="h-[1px] w-6 bg-[#A07A41]/30"></div>)}
                 </div>
              </div>
              <p className="mt-10 text-gray-600 text-[9px] uppercase font-black tracking-widest italic opacity-40">Blunt reality: Without this clause, you are exposed to litigation risk.</p>
           </div>
        </section>

        {/* 6. External Links - PORTAL ENTRY FLOW */}
        <section 
          ref={sectionRefs.external}
          data-section="external"
          className="relative py-24 lg:py-40 bg-[#2A454E] overflow-hidden"
        >
           <div className="px-4 sm:px-6 lg:px-8 max-w-[90rem] mx-auto flex flex-col lg:flex-row items-center gap-20">
              <div className={`lg:w-1/2 transition-all duration-1000 ${visibleSections.external ? 'animate-fade-in-left' : 'opacity-0 translate-x-[-200px]'}`}>
                 <span className="text-[#A07A41] uppercase tracking-[0.4em] text-[9px] font-black mb-6 block font-serif">Third-Party Gravity</span>
                 <h2 className="text-2xl md:text-4xl font-serif font-bold text-white mb-8 leading-tight italic decoration-[#A07A41] underline underline-offset-[12px]">External Portals.</h2>
                 <p className="text-gray-400 text-[10px] md:text-sm lg:text-base leading-relaxed mb-10 italic border-l-2 border-[#A07A41] pl-6 md:pl-8">
                    This website may contain links to external websites that are not provided or maintained by us. We do not guarantee the accuracy or reliability of any information on third-party sites.
                 </p>
                 <div className="flex items-center gap-4 opacity-50">
                    <ExternalLink size={20} className="text-[#A07A41]" />
                    <span className="text-[9px] font-black uppercase tracking-widest">Exit point identified</span>
                 </div>
              </div>

              <div className={`lg:w-1/2 grid grid-cols-2 gap-4 transition-all duration-1000 ${visibleSections.external ? 'animate-fade-in-right' : 'opacity-0 translate-x-[200px]'}`}>
                 {[1,2,3,4].map(i => (
                    <div key={i} className="aspect-square bg-[#1B2D33] border border-white/5 rounded-2xl md:rounded-3xl flex items-center justify-center group overflow-hidden">
                       <ExternalLink className="text-gray-800 group-hover:text-[#A07A41] transition-all group-hover:scale-125" size={32} />
                    </div>
                 ))}
              </div>
           </div>
        </section>

        {/* 7. Regulatory Information - SRA PILLAR FLOW */}
        <section 
          ref={sectionRefs.regulatory}
          data-section="regulatory"
          className="relative py-24 lg:py-40 bg-[#1B2D33] overflow-hidden border-y border-white/5"
        >
           <div className="px-4 sm:px-6 lg:px-8 max-w-[90rem] mx-auto">
              <div className={`flex flex-col lg:flex-row items-stretch border-x border-white/10 transition-all duration-1000 ${visibleSections.regulatory ? 'animate-fade-in-up' : 'opacity-0 translate-y-[150px]'}`}>
                 <div className="lg:w-1/3 p-10 md:p-16 lg:p-20 flex flex-col justify-center border-b lg:border-b-0 lg:border-r border-white/10 text-center lg:text-left">
                    <Scale size={40} className="text-[#A07A41] mb-10 mx-auto lg:mx-0" />
                    <h3 className="text-white text-xl md:text-3xl font-serif font-bold italic mb-4 uppercase leading-tight tracking-tighter">SRA Regulated <br /> Solicitor.</h3>
                    <span className="text-gray-500 font-black uppercase tracking-[0.4em] text-[8px] md:text-[9px]">UK Specific Standard</span>
                 </div>
                 <div className="lg:w-2/3 p-10 md:p-20 lg:p-24 bg-[#2A454E]/40 backdrop-blur-3xl flex flex-col justify-center">
                    <h2 className="text-white font-serif font-bold text-xl md:text-3xl mb-8 italic">Regulatory Integrity.</h2>
                    <p className="text-gray-400 text-xs md:text-sm lg:text-lg leading-relaxed mb-10 italic border-l-4 border-[#A07A41] pl-8 md:pl-10 max-w-3xl">
                       Where applicable, our legal services are provided by solicitors regulated by the **Solicitors Regulation Authority (SRA)** in England and Wales. Details of our regulatory status can be provided upon request.
                    </p>
                    <div className="flex flex-wrap gap-4 justify-center lg:justify-start">
                       {[ "SRA Regulated Law Firm", "UK Solicitor Regulation", "Solicitors England & Wales" ].map((tag, i) => (
                          <span key={i} className="px-4 py-2 bg-white/5 rounded-full text-[8px] font-black uppercase text-[#A07A41] tracking-widest border border-[#A07A41]/20">{tag}</span>
                       ))}
                    </div>
                 </div>
              </div>
              <p className="mt-10 text-center text-gray-500 font-sans text-[10px] uppercase tracking-widest italic opacity-40">UK audience expects this badge of professionalism.</p>
           </div>
        </section>

        {/* FAQ SECTION - ACCORDION FLOW */}
        <section className="relative py-24 bg-[#2A454E] overflow-hidden">
           <div className="px-4 sm:px-6 lg:px-8 max-w-[90rem] mx-auto">
              <div className="text-center mb-16 md:mb-24">
                 <span className="text-[#A07A41] uppercase tracking-[0.4em] text-[9px] font-black mb-6 block font-serif">Knowledge Base</span>
                 <h2 className="text-3xl md:text-5xl font-serif font-bold text-white tracking-tight italic">Frequently <br /><span className="italic font-light text-[#A07A41]">Asked Questions.</span></h2>
              </div>

              <div className="max-w-4xl mx-auto space-y-4">
                 {[
                   { q: "Is the information on this website considered legal advice?", a: "No. All content on this platform is for general informational purposes only and should not be relied upon as legal advice tailored to your specific case." },
                   { q: "Does filling out a contact form establish a lawyer-client relationship?", a: "No. A solicitor-client relationship is only created once a formal written agreement is signed by both you and the firm." },
                   { q: "Are you regulated in the United Kingdom?", a: "Yes, our legal services are provided by solicitors regulated by the Solicitors Regulation Authority (SRA) in England and Wales." },
                   { q: "Can I rely on third-party links provided on this site?", a: "No. We do not provide or maintain external sites and cannot guarantee the accuracy or safety of their content." },
                   { q: "How current is the information provided here?", a: "We strive for accuracy, but law changes constantly. Information is provided as a snapshot and may not reflect the absolute latest legal developments." }
                 ].map((faq, i) => (
                    <div key={i} className={`border border-[#A07A41]/10 rounded-[2.5rem] bg-[#1B2D33]/60 overflow-hidden transition-all duration-700 ${visibleSections.hero ? 'animate-fade-in-up' : 'opacity-0 translate-y-10'}`} style={{ animationDelay: `${i * 150}ms` }}>
                       <button 
                         onClick={() => setActiveFaq(activeFaq === i ? null : i)}
                         className="w-full p-8 md:p-10 flex items-center justify-between group"
                       >
                         <span className={`text-left text-sm md:text-base font-serif transition-colors font-bold italic ${activeFaq === i ? 'text-[#A07A41]' : 'text-gray-200'}`}>{faq.q}</span>
                         <div className={`shrink-0 p-3 rounded-xl border border-white/10 group-hover:border-[#A07A41] transition-all duration-300 ${activeFaq === i ? 'bg-[#A07A41] border-[#A07A41] rotate-180' : ''}`}>
                            <ChevronDown className={`h-4 w-4 transition-colors ${activeFaq === i ? 'text-black' : 'text-[#A07A41]'}`} />
                         </div>
                       </button>
                       <div className={`transition-all duration-500 ease-in-out px-8 md:px-10 ${activeFaq === i ? 'max-h-[500px] pb-10 opacity-100' : 'max-h-0 opacity-0 overflow-hidden'}`}>
                          <p className="text-gray-400 text-xs md:text-sm font-sans font-light leading-relaxed italic border-l-2 border-[#A07A41]/30 pl-8">{faq.a}</p>
                       </div>
                    </div>
                 ))}
              </div>
           </div>
        </section>


        {/* 8. Contact Section - DIRECT ACCESS FLOW */}

        <section 
          ref={sectionRefs.contact}
          data-section="contact"
          className="relative py-24 lg:py-40 bg-[#2A454E] overflow-hidden"
        >
           <div className={`max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 transition-all duration-1000 ${visibleSections.contact ? 'animate-fade-in-up' : 'opacity-0 translate-x-[150px] translate-y-[150px]'}`}>
              <div className="p-12 md:p-32 bg-[#1B2D33] rounded-[6rem] relative overflow-hidden flex flex-col lg:flex-row items-center gap-20 shadow-2xl border border-white/5">
                 <div className="lg:w-2/3 relative z-10">
                    <span className="text-[#A07A41] uppercase tracking-[0.5em] text-[10px] font-black mb-10 block font-serif">Litigation Gateway</span>
                    <h2 className="text-4xl md:text-7xl font-serif font-bold text-white mb-10 tracking-tighter leading-none">Connect with <br /><span className="italic font-light text-[#A07A41]">Global Counsel.</span></h2>
                    <p className="text-gray-400 text-sm md:text-lg italic leading-relaxed border-l-2 border-[#A07A41] pl-10 mb-12">
                       If you require legal advice tailored to your specific situation, please contact us directly to speak with a qualified legal professional.
                    </p>
                    
                    <div className="space-y-8 mb-12">
                       <div className="flex items-center gap-8 group cursor-pointer">
                          <div className="h-16 w-16 rounded-full border border-white/5 flex items-center justify-center text-[#A07A41] group-hover:bg-[#A07A41] group-hover:text-black transition-all"><Mail size={24} /></div>
                          <div>
                             <span className="text-gray-500 text-[9px] uppercase font-black block mb-1">Email Access</span>
                             <p className="text-white text-xl font-serif font-bold italic tracking-wide group-hover:text-[#A07A41] transition-all">legal@hsco-co.com</p>
                          </div>
                       </div>
                       <div className="flex items-center gap-8 group cursor-pointer">
                          <div className="h-16 w-16 rounded-full border border-white/5 flex items-center justify-center text-[#A07A41] group-hover:bg-[#A07A41] group-hover:text-black transition-all"><Phone size={24} /></div>
                          <div>
                             <span className="text-gray-500 text-[9px] uppercase font-black block mb-1">Direct Dial</span>
                             <p className="text-white text-xl font-serif font-bold italic tracking-wide group-hover:text-[#A07A41] transition-all">+44 20 7946 0123</p>
                          </div>
                       </div>
                    </div>
                 </div>

                 <div className="lg:w-1/3 relative z-10 flex flex-col items-center">
                    <div role="button" className="group relative flex items-center justify-center gap-6 px-16 py-8 bg-[#A07A41] text-black font-black uppercase text-[12px] tracking-widest rounded-full transition-all hover:scale-105 cursor-pointer shadow-[0_45px_90px_rgba(160,122,65,0.3)] w-full text-center hover:bg-white hover:rounded-[3rem]">
                       <span>Request Consultation</span>
                       <ArrowRight className="h-5 w-5 group-hover:translate-x-3 transition-transform" />
                    </div>
                 </div>

                 <div className="absolute top-0 right-0 p-32 opacity-[0.02] pointer-events-none scale-[4]"><Gavel size={null} /></div>
              </div>
           </div>
        </section>

      </main>
    </div>
  );
};

export default WebsiteDisclaimersPage;
