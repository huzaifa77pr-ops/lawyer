import React, { useEffect, useState, useRef } from 'react';
import { 
  ArrowRight, FileSearch, HardDrive, ShieldCheck, AlertCircle, 
  ChevronDown, Search, Inbox, Filter, BarChart, 
  FileStack, Lock, Database, LayoutGrid
} from 'lucide-react';

const DiscoverySupportPage = () => {
  const [section1Visible, setSection1Visible] = useState(false);
  const [section2Visible, setSection2Visible] = useState(false);
  const [section3Visible, setSection3Visible] = useState(false);
  const [section4Visible, setSection4Visible] = useState(false);
  const [section5Visible, setSection5Visible] = useState(false);
  const [section6Visible, setSection6Visible] = useState(false);
  const [activeFaq, setActiveFaq] = useState(null);

  const section1Ref = useRef(null);
  const section2Ref = useRef(null);
  const section3Ref = useRef(null);
  const section4Ref = useRef(null);
  const section5Ref = useRef(null);
  const section6Ref = useRef(null);

  useEffect(() => {
    window.scrollTo(0, 0);

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            if (entry.target === section1Ref.current) setSection1Visible(true);
            if (entry.target === section2Ref.current) setSection2Visible(true);
            if (entry.target === section3Ref.current) setSection3Visible(true);
            if (entry.target === section4Ref.current) setSection4Visible(true);
            if (entry.target === section5Ref.current) setSection5Visible(true);
            if (entry.target === section6Ref.current) setSection6Visible(true);
          }
        });
      },
      { threshold: 0.1 }
    );

    [section1Ref, section2Ref, section3Ref, section4Ref, section5Ref, section6Ref].forEach(ref => {
      if (ref.current) observer.observe(ref.current);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <div className="min-h-screen bg-[#1B2D33] flex flex-col overflow-hidden text-white font-sans selection:bg-[#A07A41] selection:text-black">
      <main className="flex-grow">
        
        {/* 1. HERO SECTION */}
        <section 
          ref={section1Ref}
          className="relative min-h-[90vh] flex items-center pt-32 lg:pt-40 pb-24 overflow-hidden"
        >
          {/* SEO Hidden Content */}
          <div className="hidden">
            <h1>Discovery & Document Disclosure Support (UK)</h1>
            <h2>document disclosure UK, discovery process UK legal, litigation document disclosure support</h2>
            <p>Professional support in organizing, reviewing, and preparing documents for disclosure in UK legal matters.</p>
          </div>

          {/* Background Elements */}
          <div className="absolute inset-0 z-0">
            <div className={`absolute inset-0 bg-[#1B2D33] transition-opacity duration-1000 ${section1Visible ? 'opacity-30' : 'opacity-0'}`}>
               <div className="absolute inset-0 bg-cover bg-center opacity-40 animate-[ken-burns_15s_linear_infinite]" style={{ backgroundImage: 'url("https://images.unsplash.com/photo-1450101499163-c8848c66ca85?auto=format&fit=crop&q=80")' }}></div>
            </div>
            <div className="absolute inset-0 bg-gradient-to-r from-[#1B2D33] via-[#1B2D33]/80 to-transparent z-10"></div>
          </div>

          <div className="absolute left-[5%] top-0 bottom-0 w-px bg-[#A07A41]/20 hidden lg:block z-20"></div>

          <div className="relative z-20 px-4 sm:px-6 lg:px-8 max-w-[85rem] mx-auto w-full">
            <div className="grid lg:grid-cols-12 gap-16 items-center">
              <div className={`lg:col-span-8 ${section1Visible ? 'animate-fade-in-left' : 'opacity-0'}`}>
                <div className="inline-flex items-center gap-3 mb-8 px-4 py-1.5 bg-white/5 border border-white/10 rounded-full backdrop-blur-3xl">
                  <FileSearch size={10} className="text-[#A07A41]" />
                  <span className="text-[#A07A41] uppercase tracking-[0.4em] text-[8px] font-black italic">Information Retrieval UK</span>
                </div>
                
                <h1 className="text-3xl md:text-5xl lg:text-7xl font-serif font-bold text-white leading-[1.05] mb-8 tracking-tighter">
                  Discovery & <br />
                  <span className="italic font-light text-[#A07A41]">Disclosure.</span>
                </h1>
                
                <div className="flex gap-8 items-start mb-10 border-l border-[#A07A41]/30 pl-8">
                  <div className="max-w-xl">
                    <p className="text-gray-400 text-xs md:text-sm font-light leading-relaxed mb-6 italic opacity-80">
                      Professional support in organizing, reviewing, and preparing documents for disclosure in legal matters.
                    </p>
                    <p className="text-gray-500 text-[10px] md:text-xs font-light leading-relaxed">
                      We assist clients in managing document disclosure requirements, ensuring information is properly organized, relevant documents are identified, and materials are prepared for legal review.
                    </p>
                  </div>
                </div>

                <div className="flex flex-wrap gap-6 items-center">
                  <a href="#cta" className="px-10 py-5 bg-[#1B2D33] border border-white/10 text-white font-bold tracking-[0.3em] uppercase text-[10px] rounded hover:bg-[#A07A41] transition-all duration-300 shadow-2xl hover:scale-105 active:scale-95 shadow-inner">
                    Get Disclosure Support
                  </a>
                  <div className="flex items-center gap-2 text-white/30 text-[8px] font-black uppercase tracking-widest italic border-b border-white/10 pb-0.5">
                    <Database size={12} className="text-[#A07A41]" />
                    Structured File Analysis
                  </div>
                </div>
              </div>

              <div className={`lg:col-span-4 hidden lg:block relative ${section1Visible ? 'animate-fade-in-bottom-right animation-delay-300' : 'opacity-0'}`}>
                <div className="relative p-2 bg-white/5 border border-white/10 rounded-[3rem] shadow-shadow-big overflow-hidden group">
                  <img src="https://images.unsplash.com/photo-1544027993-37dbfe43562a?auto=format&fit=crop&q=80" alt="Discovery Process" className="w-full h-[550px] object-cover rounded-[2.5rem] grayscale group-hover:grayscale-0 transition-all duration-[2s] group-hover:scale-105" />
                  <div className="absolute inset-0 bg-[#1B2D33]/40 group-hover:opacity-0 transition-opacity"></div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 2. WHAT IS DISCLOSURE & 3. WHY CRITICAL */}
        <section ref={section2Ref} className="relative py-24 bg-white/[0.02] border-y border-white/5 overflow-hidden">
           <div className="px-4 sm:px-6 lg:px-8 max-w-[85rem] mx-auto">
              <div className="grid lg:grid-cols-2 gap-20 items-stretch">
                 <div className={`flex flex-col justify-center ${section2Visible ? 'animate-fade-in-left' : 'opacity-0'}`}>
                    <span className="text-[#A07A41] uppercase tracking-[0.5em] text-[8px] font-black italic mb-6">Procedural Integrity</span>
                    <h2 className="text-2xl md:text-4xl font-serif font-bold text-white tracking-widest italic uppercase mb-8">What is <br /><span className="italic font-light text-[#A07A41]">Document Disclosure?</span></h2>
                    <p className="text-gray-300 text-sm md:text-base font-serif italic italic font-light italic leading-loose opacity-80 border-l border-[#A07A41]/30 pl-8 mb-8">
                       Document disclosure (discovery) is the process of identifying and sharing relevant documents in a legal case. It ensures that all parties have access to the information necessary for fair proceedings.
                    </p>
                    <div className="mt-auto p-8 bg-black/40 border border-[#A07A41]/20 rounded-[2.5rem] shadow-big group hover:border-[#A07A41] transition-all">
                       <p className="text-[#A07A41] font-serif italic text-lg opacity-80 group-hover:opacity-100 italic transition-opacity">
                          “Missing or incorrect disclosure can seriously damage your case.”
                       </p>
                    </div>
                 </div>

                 <div className={`grid grid-cols-1 gap-6 ${section2Visible ? 'animate-fade-in-right animation-delay-300' : 'opacity-0'}`}>
                    <div className="p-10 bg-white/[0.03] border border-white/10 rounded-[3rem] group hover:bg-[#A07A41] transition-all duration-700">
                       <AlertCircle size={30} className="text-[#A07A41] group-hover:text-black mb-6 transition-transform group-hover:rotate-12" />
                       <h4 className="text-white font-serif font-bold text-lg italic uppercase tracking-tighter group-hover:text-black mb-4 transition-colors">Risk Identification</h4>
                       <ul className="space-y-4">
                          {[ "Harm to your primary case", "Procedural delays or sanctions", "Reduced credibility in court" ].map((risk, i) => (
                             <li key={i} className="flex items-center gap-3 text-gray-400 text-[10px] md:text-[11px] uppercase tracking-widest font-black italic group-hover:text-black/60 transition-colors">
                                <div className="w-1.2 h-1.2 rounded-full bg-[#A07A41] group-hover:bg-black"></div>
                                {risk}
                             </li>
                          ))}
                       </ul>
                    </div>
                    <div className="p-2 bg-white/5 border border-white/10 rounded-[3rem] overflow-hidden group">
                       <img src="https://images.unsplash.com/photo-1589829545856-d10d557cf95f?auto=format&fit=crop&q=80" alt="Disclosure Risks" className="w-full h-40 object-cover grayscale group-hover:grayscale-0 transition-all duration-[2s] rounded-[2.5rem]" />
                    </div>
                 </div>
              </div>
           </div>
        </section>

        {/* 4. TYPES OF DOCUMENTS (GRID MAPPING) */}
        <section ref={section3Ref} className="relative py-24 lg:py-40 bg-[#1B2D33] overflow-hidden">
           <div className="px-4 sm:px-6 lg:px-8 max-w-[85rem] mx-auto text-center mb-24">
              <h2 className={`text-2xl md:text-5xl font-serif font-bold text-white tracking-widest italic uppercase mb-12 ${section3Visible ? 'animate-fade-in-up' : 'opacity-0'}`}>Types of <span className="italic font-light text-[#A07A41]">Evidence.</span></h2>
           </div>

           <div className="px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-6">
              {[
                { t: "Emails", i: Inbox },
                { t: "Contracts", i: ShieldCheck },
                { t: "Finance", i: BarChart },
                { t: "Reports", i: HardDrive },
                { t: "Evidence", i: Database }
              ].map((item, i) => (
                 <div key={i} className={`p-10 bg-white/[0.02] border border-white/5 rounded-[2.5rem] text-center hover:bg-black transition-all duration-700 shadow-big group ${section3Visible ? 'animate-fade-in-up' : 'opacity-0'}`} style={{ animationDelay: `${i * 100}ms` }}>
                    <item.i size={20} className="text-[#A07A41] mx-auto mb-6 group-hover:scale-125 transition-transform" />
                    <span className="text-gray-400 text-[10px] md:text-xs font-sans font-light italic uppercase tracking-widest opacity-70 group-hover:text-[#A07A41] transition-all">{item.t}</span>
                 </div>
              ))}
           </div>
        </section>

        {/* 5. OUR SERVICES (CORE ARCHIVE VIEW) */}
        <section ref={section4Ref} className="relative py-24 lg:py-48 bg-[#1B2D33] overflow-hidden border-y border-white/5 bg-white/[0.01]">
           <div className="px-4 sm:px-6 lg:px-8 max-w-[85rem] mx-auto">
              <div className="grid lg:grid-cols-2 gap-20 items-center">
                 <div className={`${section4Visible ? 'animate-fade-in-left' : 'opacity-0'}`}>
                    <span className="text-[#A07A41] uppercase tracking-[0.6em] text-[8px] font-black mb-8 block font-serif">Services Architecture</span>
                    <h2 className="text-3xl md:text-6xl font-serif font-bold text-white tracking-tighter italic uppercase mb-12 leading-none">
                       Disclosure & Support <br /><span className="italic font-light text-[#A07A41]">Services.</span>
                    </h2>
                    <div className="space-y-4">
                       {[
                         "Organizing large volumes of documents",
                         "Identifying relevant materials",
                         "Structuring documents for review",
                         "Preparing disclosure-ready files",
                         "Highlighting gaps or missing documents"
                       ].map((service, i) => (
                          <div key={i} className="flex gap-6 group items-center p-6 bg-white/[0.03] border border-white/5 rounded-[2.5rem] hover:bg-[#A07A41] transition-all duration-700 shadow-big">
                             <div className="h-6 w-6 shrink-0 bg-[#A07A41]/10 rounded-full flex items-center justify-center text-[#A07A41] group-hover:bg-black group-hover:text-[#A07A41] transition-colors"><Filter size={12} /></div>
                             <span className="text-gray-400 text-[10px] md:text-xs font-sans font-light italic opacity-80 group-hover:text-black uppercase tracking-widest transition-colors font-black">{service}</span>
                          </div>
                       ))}
                    </div>
                 </div>

                 <div className={`relative ${section4Visible ? 'animate-fade-in-right' : 'opacity-0'}`}>
                    <div className="p-12 lg:p-20 bg-white/[0.02] border border-white/5 rounded-[4rem] relative overflow-hidden group">
                       <h3 className="text-white text-lg font-serif font-bold mb-10 italic uppercase border-b border-white/10 pb-4">Managing Complexity</h3>
                       <div className="space-y-8">
                          {[
                            { t: "Logical Categorization", d: "Sorting by date, relevance, and type." },
                            { t: "Structured File Systems", d: "Scalable directory architectures." },
                            { t: "Consistency Verification", d: "Ensuring no clashing materials." },
                            { t: "Navigational Flow", d: "Making searchability instant." }
                          ].map((item, i) => (
                             <div key={i} className="group transition-transform hover:translate-x-3 duration-500">
                                <h4 className="text-[#A07A41] font-serif font-bold text-xs uppercase group-hover:text-white transition-colors tracking-tight italic mb-1">{item.t}</h4>
                                <p className="text-gray-500 text-[9px] uppercase font-black tracking-widest group-hover:text-gray-400 transition-colors italic leading-none">{item.d}</p>
                             </div>
                          ))}
                       </div>
                    </div>
                    <div className="absolute -bottom-10 -right-10 p-10 bg-[#A07A41] rounded-[3rem] shadow-2xl z-20 hidden md:block animate-bounce shadow-[0_0_30px_#A07A41]/50">
                       <LayoutGrid size={30} className="text-black" />
                    </div>
                 </div>
              </div>
           </div>
        </section>

        {/* 7. MISTAKES & 8. PROCESS (MAPPING STYLE) */}
        <section ref={section5Ref} className="relative py-24 lg:py-48 bg-[#1B2D33] overflow-hidden">
           <div className="px-4 sm:px-6 lg:px-8 max-w-[85rem] mx-auto grid lg:grid-cols-2 gap-20">
              {/* Mistakes */}
              <div className={`${section5Visible ? 'animate-fade-in-left' : 'opacity-0'}`}>
                 <h2 className="text-red-500 uppercase tracking-[0.6em] text-[8px] font-black mb-10 italic">Critical Failure Points</h2>
                 <h3 className="text-2xl md:text-4xl font-serif font-bold text-white tracking-tighter italic uppercase mb-12">Disclosure <br /><span className="italic font-light text-[#A07A41]">Mistakes.</span></h3>
                 <div className="space-y-6">
                    {[ "Missing key documents", "Including irrelevant info", "Poor file organization", "Inconsistent documentation" ].map((m, i) => (
                       <div key={i} className="flex items-center justify-between p-8 bg-white/[0.02] border border-white/5 rounded-[2.5rem] hover:bg-red-500/10 transition-all duration-700 shadow-big group px-12">
                          <span className="text-white text-[10px] md:text-xs font-sans font-light italic uppercase tracking-widest group-hover:text-red-200 transition-colors">{m}</span>
                          <AlertCircle size={16} className="text-red-500/30 group-hover:text-red-500 transition-transform group-hover:rotate-45" />
                       </div>
                    ))}
                 </div>
              </div>

              {/* Process */}
              <div className={`${section5Visible ? 'animate-fade-in-right animation-delay-300' : 'opacity-0'}`}>
                 <h2 className="text-[#A07A41] text-[8px] md:text-[9px] uppercase tracking-[0.6em] font-black mb-10 italic">Operational Sifting</h2>
                 <h3 className="text-2xl md:text-4xl font-serif font-bold text-white tracking-tighter italic uppercase mb-12">Our <br /><span className="italic font-light text-[#A07A41]">Process.</span></h3>
                 <div className="relative">
                    <div className="absolute left-[30px] top-6 bottom-6 w-px bg-white/5"></div>
                    {[ "Review Documents", "Identify Relevant Materials", "Organize & Structure Files", "Prepare Ready Documents" ].map((step, i) => (
                       <div key={i} className="flex items-center gap-10 p-8 bg-white/[0.01] border border-white/5 rounded-[2.5rem] mb-4 hover:bg-black transition-all duration-500 shadow-shadow-big group relative ml-15 overflow-hidden">
                          <div className="absolute top-0 right-0 p-8 opacity-[0.05] scale-[4] group-hover:text-[#A07A41] transition-all pointer-events-none italic font-serif font-black">{i+1}</div>
                          <div className="h-10 w-10 shrink-0 bg-[#A07A41]/10 rounded-full flex items-center justify-center text-[#A07A41] group-hover:bg-[#A07A41] group-hover:text-black transition-colors shadow-inner font-serif font-bold text-xs">{i+1}</div>
                          <span className="text-gray-400 text-[10px] md:text-xs font-sans font-light italic uppercase tracking-[0.2em] group-hover:text-white transition-colors">{step}</span>
                       </div>
                    ))}
                 </div>
              </div>
           </div>
        </section>

        {/* 9. DISCLAIMER */}
        <section ref={section6Ref} className="relative py-16 lg:py-32 bg-[#1B2D33] overflow-hidden border-y border-white/5">
           <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className={`p-8 md:p-14 bg-[#2A454E]/20 border border-[#A07A41]/20 rounded-[3rem] text-center backdrop-blur-3xl shadow-big group hover:border-[#A07A41] transition-all duration-700 ${section6Visible ? 'animate-fade-in-up' : 'opacity-0'}`}>
                 <Lock size={30} className="text-[#A07A41] mx-auto mb-6 opacity-40 group-hover:rotate-12 transition-transform" />
                 <h2 className="text-[#A07A41] text-xs font-serif font-bold mb-4 italic uppercase tracking-[0.3em] font-black underline decoration-[#A07A41]/10 underline-offset-8">Disclosure Disclaimer.</h2>
                 <p className="text-gray-400 text-[10px] md:text-xs leading-relaxed italic font-light opacity-80 italic italic border-b border-white/5 pb-4">
                    Our disclosure support services focus on document organization and preparation only. We do not provide legal advice or determine legal obligations for disclosure. You should consult a qualified solicitor for legal guidance.
                 </p>
              </div>
           </div>
        </section>

        {/* 10. FAQ SECTION */}
        <section className="relative py-24 lg:py-48 bg-[#1B2D33] overflow-hidden border-b border-white/10 shadow-big">
           <div className="px-4 sm:px-6 lg:px-8 max-w-[50rem] mx-auto">
              <div className="text-center mb-24 animate-fade-in-up">
                 <h2 className="text-3xl md:text-5xl font-serif font-bold text-white tracking-tight italic uppercase font-black underline decoration-[#A07A41]/10 underline-offset-[24px] decoration-8">Information <br /><span className="italic font-light text-[#A07A41]">Briefing.</span></h2>
              </div>

              <div className="space-y-4">
                 {[
                   { q: "What is the purpose of document disclosure?", a: "The purpose is to ensure all relevant information—both helpful and harmful to a case—is shared fairly between parties to ensure justice and transparency in proceedings." },
                   { q: "Can missing documents affect my case?", a: "Yes, failing to disclose relevant documents can lead to court sanctions, cost penalties, and can significantly damage your overall credibility and case outcome." },
                   { q: "Do you decide what must be disclosed?", a: "No, we assist with the technical organization, identifying potential materials, and preparation only. Final decisions on disclosure obligations should be made by your legal solicitor." }
                 ].map((faq, index) => (
                    <div key={index} className="border border-[#A07A41]/10 px-6 md:px-8 rounded-[3rem] bg-white/[0.03] overflow-hidden transition-all duration-1000 md:opacity-100 shadow-xl shadow-inner scroll-smooth">
                       <button 
                         onClick={() => setActiveFaq(activeFaq === index ? null : index)}
                         className="w-full py-10 md:py-12 flex items-center justify-between group outline-none"
                       >
                         <span className={`text-left text-[11px] md:text-sm font-serif font-bold italic tracking-tighter ${activeFaq === index ? 'text-[#A07A41]' : 'text-gray-300'}`}>{faq.q}</span>
                         <div className={`shrink-0 p-3 rounded-2xl border border-white/5 transition-all duration-500 shadow-inner ${activeFaq === index ? 'bg-[#A07A41] rotate-180 border-[#A07A41]' : 'group-hover:border-[#A07A41]'}`}>
                            <ChevronDown className={`h-4 w-4 transition-colors ${activeFaq === index ? 'text-black' : 'text-[#A07A41]'}`} />
                         </div>
                       </button>
                       <div className={`transition-all duration-700 ease-[cubic-bezier(0.2,1,0.2,1)] px-8 md:px-14 ${activeFaq === index ? 'max-h-[500px] pb-12 opacity-100' : 'max-h-0 opacity-0 overflow-hidden'}`}>
                          <p className="text-gray-500 text-[10px] md:text-xs font-sans font-light italic border-l-2 border-[#A07A41]/20 pl-8 opacity-80 leading-relaxed italic">{faq.a}</p>
                       </div>
                    </div>
                 ))}
              </div>
           </div>
        </section>

        {/* 11. CALL TO ACTION */}
        <section id="cta" className="relative py-32 lg:py-64 bg-[#1B2D33] overflow-hidden">
           <div className="absolute inset-0 z-0 opacity-[0.2] bg-cover bg-center animate-[ken-burns_15s_linear_infinite]" style={{ backgroundImage: 'url("https://images.unsplash.com/photo-1544027993-37dbfe43562a?auto=format&fit=crop&q=80")' }}>
              <div className="absolute inset-0 bg-[#1B2D33]/80 backdrop-blur-[2px]"></div>
           </div>
           
           <div className="max-w-[85rem] mx-auto px-4 sm:px-6 lg:px-8 animate-fade-in-up relative z-10 text-center">
              <div className="p-16 md:p-32 bg-white/[0.01] border border-white/10 rounded-[6rem] backdrop-blur-3xl relative overflow-hidden shadow-big group shadow-inner">
                 <div className="absolute top-0 right-0 p-40 opacity-[0.03] scale-[6] rotate-[15deg] transition-all duration-[10s] group-hover:text-[#A07A41] pointer-events-none"><FileStack size={300} /></div>
                 
                 <h2 className="text-3xl md:text-5xl lg:text-7xl font-serif font-bold text-white mb-10 tracking-tighter leading-none italic uppercase decoration-[#A07A41]/10 underline underline-offset-[36px] decoration-8">Structured <br /><span className="italic font-light text-[#A07A41] lowercase drop-shadow-big">Discovery.</span></h2>
                 
                 <p className="text-gray-400 text-[10px] md:text-sm font-sans font-light italic leading-relaxed mb-16 max-w-xl mx-auto opacity-70 italic border-b border-white/5 pb-10">
                    Ensure your documents are properly organized and ready for disclosure. Contact us today for structured and reliable support.
                 </p>

                 <div role="button" className="group relative inline-flex items-center justify-center gap-4 px-12 py-5 bg-[#1B2D33] border border-white/10 text-white font-bold tracking-[0.3em] uppercase text-[10px] md:text-[12px] rounded transition-all duration-300 hover:bg-[#A07A41] cursor-pointer shadow-big overflow-hidden hover:scale-110 active:scale-95 shadow-inner">
                    <span className="relative z-10 font-black tracking-widest">Get Disclosure Support</span>
                    <ArrowRight size={16} className="relative z-10 transform group-hover:translate-x-1 transition-transform duration-300" />
                 </div>
              </div>
           </div>
        </section>

      </main>
    </div>
  );
};

export default DiscoverySupportPage;
