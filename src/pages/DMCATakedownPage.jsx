import React, { useEffect, useState, useRef } from 'react';
import { 
  ArrowRight, Search, CheckCircle, 
  ChevronDown, AlertCircle, ShieldCheck, Send, 
  Target, Eye, Link as LinkIcon, HardDrive
} from 'lucide-react';

const DMCATakedownPage = () => {
  const [activeFaq, setActiveFaq] = useState(null);
  
  const [visibleSections, setVisibleSections] = useState({
    hero: true,
    what: false,
    when: false,
    types: false,
    process: false,
    google: false,
    why: false,
    legal: false,
    faq: false,
    cta: false
  });

  const sectionRefs = {
    hero: useRef(null),
    what: useRef(null),
    when: useRef(null),
    types: useRef(null),
    process: useRef(null),
    google: useRef(null),
    why: useRef(null),
    legal: useRef(null),
    faq: useRef(null),
    cta: useRef(null)
  };

  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = "DMCA Takedown Services UK | Copyright Removal | H&S Co.";

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const section = entry.target.getAttribute('data-section');
          if (section) {
            setVisibleSections(prev => ({ ...prev, [section]: true }));
          }
        }
      });
    }, { threshold: 0.1 });

    Object.values(sectionRefs).forEach(ref => {
      if (ref.current) observer.observe(ref.current);
    });

    return () => observer.disconnect();
  }, []);

  const dmcaProcess = [
    { s: "Step 01", t: "Case Evaluation", d: "We verify ownership and assess infringement validity with extreme precision." },
    { s: "Step 02", t: "Evidence Collection", d: "Gathering proof including URLs, timestamps, and original legal ownership data." },
    { s: "Step 03", t: "Legal Notice Drafting", d: "Preparing a legally accurate DMCA notice to avoid rejection by platform providers." },
    { s: "Step 04", t: "Submission", d: "Notices are sent to hosting providers, website owners, and global search engines." },
    { s: "Step 05", t: "Follow-Up", d: "Escalating cases through platform enforcement channels if notices are ignored." }
  ];

  return (
    <div className="min-h-screen bg-[#2A454E] flex flex-col overflow-x-hidden text-white font-sans">
      <style>
        {`
          @keyframes fade-in-up { from { opacity: 0; transform: translateY(40px); } to { opacity: 1; transform: translateY(0); } }
          @keyframes fade-in-down { from { opacity: 0; transform: translateY(-40px); } to { opacity: 1; transform: translateY(0); } }
          @keyframes fade-in-left { from { opacity: 0; transform: translateX(-40px); } to { opacity: 1; transform: translateX(0); } }
          @keyframes fade-in-right { from { opacity: 0; transform: translateX(40px); } to { opacity: 1; transform: translateX(0); } }
          @keyframes fade-in-top-left { from { opacity: 0; transform: translate(-40px, -40px); } to { opacity: 1; transform: translate(0, 0); } }
          @keyframes fade-in-bottom-right { from { opacity: 0; transform: translate(40px, 40px); } to { opacity: 1; transform: translate(0, 0); } }
          
          .animate-fade-in-up { animation: fade-in-up 1.2s cubic-bezier(0.22, 1, 0.36, 1) forwards; }
          .animate-fade-in-down { animation: fade-in-down 1.2s cubic-bezier(0.22, 1, 0.36, 1) forwards; }
          .animate-fade-in-left { animation: fade-in-left 1.2s cubic-bezier(0.22, 1, 0.36, 1) forwards; }
          .animate-fade-in-right { animation: fade-in-right 1.2s cubic-bezier(0.22, 1, 0.36, 1) forwards; }
          .animate-fade-in-top-left { animation: fade-in-top-left 1.2s cubic-bezier(0.22, 1, 0.36, 1) forwards; }
          .animate-fade-in-bottom-right { animation: fade-in-bottom-right 1.2s cubic-bezier(0.22, 1, 0.36, 1) forwards; }
          
          .animation-delay-200 { animation-delay: 0.2s; }
          .animation-delay-400 { animation-delay: 0.4s; }
          .animation-delay-600 { animation-delay: 0.6s; }
        `}
      </style>
      
      <main className="flex-grow">
        
        {/* 1. HERO SECTION */}
        <section ref={sectionRefs.hero} data-section="hero" className="relative min-h-[95vh] flex items-center pt-32 pb-24 bg-[#1B2D33]">
          <div className="absolute inset-0 z-0">
             <img src="/hero.jpg" alt="DMCA Hero" className="w-full h-full object-cover opacity-25" />
             <div className="absolute inset-0 bg-gradient-to-r from-[#1B2D33]/95 via-[#1B2D33]/60 to-transparent"></div>
          </div>
          <div className="relative z-10 px-4 sm:px-6 lg:px-8 max-w-[90rem] mx-auto w-full">
            <div className="max-w-4xl">
              <div className="flex items-center gap-4 mb-8 animate-fade-in-up">
                <div className="h-[2px] w-12 bg-[#A07A41]"></div>
                <span className="text-[#A07A41] uppercase tracking-[0.4em] text-[10px] sm:text-xs font-bold font-sans">Enforcement + Global Protection</span>
              </div>
              
              <h1 className="text-4xl sm:text-5xl md:text-6xl font-serif font-bold text-white leading-[1.1] mb-8 tracking-tight animate-fade-in-left animation-delay-200">
                DMCA Takedown Services UK – <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#C29D64] via-[#A07A41] to-[#785A2D]">Remove Copyright Infringement Fast.</span>
              </h1>
              
              <p className="text-base md:text-lg text-gray-300 font-sans font-light leading-relaxed max-w-2xl mb-12 border-l border-[#A07A41]/30 pl-8 animate-fade-in-up animation-delay-400">
                Take control of your digital assets. We issue legally compliant DMCA takedown notices to remove stolen content, images, videos, and copyrighted material across global platforms.
              </p>

              <div className="flex flex-col sm:flex-row gap-5 mb-20 animate-fade-in-right animation-delay-600">
                <button className="group relative flex items-center justify-center gap-3 px-10 py-5 bg-[#1B2D33] border border-white/10 text-white font-bold tracking-widest uppercase text-xs md:text-sm rounded transition-all duration-300 hover:bg-[#A07A41] shadow-[0_0_20px_rgba(0,0,0,0.1)] overflow-hidden">
                  <span className="relative z-10">Submit DMCA Request</span>
                  <ArrowRight className="h-4 w-4 relative z-10 transform group-hover:translate-x-2 transition-transform duration-300" />
                </button>
                <div className="flex flex-col justify-center">
                   <p className="text-[#A07A41] text-[10px] font-black uppercase tracking-[0.3em] mb-1">Speak to a Legal Expert</p>
                   <p className="text-white/40 text-[10px] italic">Verified Removal Services</p>
                </div>
              </div>

              <div className="grid grid-cols-2 sm:grid-cols-3 gap-12 border-t border-white/10 pt-12 animate-fade-in-up animation-delay-700">
                 {[
                   { t: "UK-based support", s: "Local Legal Team" },
                   { t: "Fast processing", s: "24–72 Hour Window" },
                   { t: "High success rate", s: "Success Optimized" }
                 ].map((item, i) => (
                   <div key={i} className="space-y-1">
                      <span className="text-white font-serif font-bold text-lg block">{item.t}</span>
                      <span className="text-[#A07A41] text-[10px] font-black uppercase tracking-widest">{item.s}</span>
                   </div>
                 ))}
              </div>
            </div>
          </div>
        </section>

        {/* 2. WHAT IS A DMCA TAKEDOWN */}
        <section ref={sectionRefs.what} data-section="what" className="py-16 md:py-24 bg-[#2A454E] overflow-hidden">
          <div className="px-4 sm:px-6 lg:px-8 max-w-[90rem] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
             <div className={`${visibleSections.what ? 'animate-fade-in-left' : 'opacity-0'}`}>
                <h2 className="text-3xl md:text-5xl font-serif font-bold text-white mb-8 md:mb-10 tracking-tight leading-tight uppercase">
                   What is a <br />
                   <span className="italic font-light text-[#A07A41]">DMCA Takedown Notice?</span>
                </h2>
                <div className="space-y-6 text-gray-300 font-light text-base md:text-lg leading-relaxed">
                   <p>A DMCA (Digital Millennium Copyright Act) takedown notice is a formal legal request used to remove copyrighted content that has been published without authorization.</p>
                   <p className="bg-[#1B2D33]/60 p-6 md:p-8 rounded-2xl border-l-4 border-[#A07A41] italic">
                      Although it originates from U.S. law, it is widely used by UK businesses to enforce rights on international platforms such as search engines, hosting providers, and content-sharing websites.
                   </p>
                </div>
                <div className="mt-12 grid grid-cols-1 sm:grid-cols-3 gap-4">
                   {[
                     "Remove copied website content",
                     "Take down stolen images/videos",
                     "De-index infringing pages"
                   ].map((item, i) => (
                     <div key={i} className="flex flex-col p-6 bg-[#1B2D33] border border-white/5 rounded-2xl relative overflow-hidden group">
                        <div className="absolute top-0 right-0 w-8 h-8 bg-[#A07A41]/10 rounded-bl-3xl group-hover:bg-[#A07A41] transition-all"></div>
                        <ShieldCheck className="h-6 w-6 text-[#A07A41] mb-4 group-hover:text-black transition-colors" />
                        <span className="text-white font-bold text-xs leading-relaxed group-hover:text-[#A07A41] transition-colors">{item}</span>
                     </div>
                   ))}
                </div>
             </div>
             <div className={`${visibleSections.what ? 'animate-fade-in-right' : 'opacity-0'}`}>
                <img src="/agg.jpg" alt="Copyright Law" className="rounded-3xl shadow-biggest h-[300px] md:h-[500px] w-full object-cover grayscale transition-all duration-1000 hover:grayscale-0" />
             </div>
          </div>
        </section>

        {/* 3. WHEN YOU NEED A DMCA TAKEDOWN */}
        <section ref={sectionRefs.when} data-section="when" className="py-16 md:py-24 bg-[#1B2D33] border-y border-white/5 relative">
          <div className="px-4 sm:px-6 lg:px-8 max-w-[90rem] mx-auto text-center">
             <div className={`mb-12 md:mb-16 ${visibleSections.when ? 'animate-fade-in-down' : 'opacity-0'}`}>
                <h2 className="text-3xl md:text-6xl font-serif font-bold text-white mb-6 tracking-tight leading-tight uppercase">
                   When Should You <br />
                   <span className="italic font-light text-[#A07A41]">Use a DMCA Takedown?</span>
                </h2>
                <p className="text-gray-500 max-w-xl mx-auto font-light text-sm italic px-4">Delaying action only increases damage—both financially and in search rankings.</p>
             </div>
             
             <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                {[
                  { t: "Content Duplication", d: "Your website content is duplicated on another site without consent." },
                  { t: "Asset Theft", d: "Your images, videos, or designs are used without permission." },
                  { t: "Unauthorized Sale", d: "Your digital products are being redistributed or resold." },
                  { t: "Piracy Platforms", d: "Your content appears on piracy or unauthorized sharing platforms." }
                ].map((item, i) => (
                  <div key={i} className={`p-8 md:p-10 bg-[#2A454E]/30 border border-white/5 rounded-2xl text-left border-b-4 border-b-transparent hover:border-b-[#A07A41] transition-all duration-500 ${visibleSections.when ? 'animate-fade-in-up' : 'opacity-0'}`} style={{ animationDelay: `${i * 150}ms` }}>
                     <AlertCircle className="h-6 w-6 md:h-8 md:w-8 text-[#A07A41] mb-6 md:mb-8" />
                     <h4 className="text-white font-serif font-bold text-xl mb-4 leading-tight">{item.t}</h4>
                     <p className="text-gray-400 text-xs md:text-sm font-light leading-relaxed font-sans">{item.d}</p>
                  </div>
                ))}
             </div>
          </div>
        </section>

        {/* 4. TYPES OF COPYRIGHT INFRINGEMENT WE HANDLE */}
        <section ref={sectionRefs.types} data-section="types" className="py-16 md:py-24 bg-[#2A454E] overflow-hidden">
          <div className="px-4 sm:px-6 lg:px-8 max-w-[90rem] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center text-center lg:text-left">
             <div className={`${visibleSections.types ? 'animate-fade-in-left' : 'opacity-0'}`}>
                <div className="relative">
                   <img src="/doc.jpg" alt="Documentation" className="rounded-[2.5rem] md:rounded-[4rem] shadow-biggest h-[300px] md:h-[550px] w-full object-cover grayscale brightness-75" />
                   <div className="absolute -bottom-6 -right-6 md:-bottom-10 md:-right-10 bg-[#A07A41] p-8 md:p-12 rounded-2xl md:rounded-3xl hidden md:block border border-black/10">
                      <Target className="h-8 w-8 md:h-12 md:w-12 text-black" />
                   </div>
                </div>
             </div>
             <div className={`${visibleSections.types ? 'animate-fade-in-right' : 'opacity-0'}`}>
                <h2 className="text-3xl md:text-5xl font-serif font-bold text-white mb-8 md:mb-10 tracking-tight leading-tight uppercase">
                   Types of Copyright <br />
                   <span className="italic font-light text-[#A07A41]">Infringement We Handle.</span>
                </h2>
                <div className="space-y-4">
                   {[
                     "Website content and blog plagiarism",
                     "Images, graphics, and photography theft",
                     "Video and course piracy",
                     "Software and code duplication",
                     "Unauthorized digital downloads"
                   ].map((item, i) => (
                     <div key={i} className="flex items-center gap-4 md:gap-6 p-4 md:p-6 bg-[#1B2D33]/40 border border-white/5 rounded-2xl hover:bg-[#1B2D33] transition-all group">
                        <CheckCircle className="h-5 w-5 text-[#A07A41] shrink-0" />
                        <span className="text-gray-200 text-sm md:text-base font-light group-hover:text-white transition-colors">{item}</span>
                     </div>
                   ))}
                </div>
             </div>
          </div>
        </section>

        {/* 5. OUR DMCA TAKEDOWN PROCESS */}
        <section ref={sectionRefs.process} data-section="process" className="py-16 md:py-24 bg-[#1B2D33] border-y border-white/5 relative">
          <div className="px-4 sm:px-6 lg:px-8 max-w-[90rem] mx-auto">
             <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
                <div className={`${visibleSections.process ? 'animate-fade-in-top-left' : 'opacity-0'}`}>
                   <h2 className="text-3xl md:text-7xl font-serif font-bold text-white mb-8 md:mb-10 tracking-tighter leading-none uppercase italic">Process.</h2>
                   <img src="/saa3.jpg" alt="Systematic Process" className="rounded-2xl md:rounded-3xl brightness-50 w-full h-[300px] md:h-[400px] object-cover skew-y-1" />
                </div>
                <div className="space-y-4">
                  {dmcaProcess.map((item, i) => (
                    <div key={i} className={`p-8 md:p-10 bg-[#2A454E]/20 border border-white/5 rounded-2xl md:rounded-3xl backdrop-blur-md group hover:bg-[#A07A41] transition-all duration-700 ${visibleSections.process ? 'animate-fade-in-bottom-right' : 'opacity-0'}`} style={{ animationDelay: `${i * 200}ms` }}>
                       <div className="flex justify-between items-start mb-6">
                          <span className="text-[#A07A41] font-black text-[10px] md:text-xs uppercase tracking-[0.4em] group-hover:text-black transition-colors">{item.s}</span>
                          <span className="w-8 h-8 md:w-10 md:h-10 rounded-full border border-white/10 flex items-center justify-center text-white/20 group-hover:border-black/20 group-hover:text-black font-black text-[10px] md:text-xs">{i+1}</span>
                       </div>
                       <h4 className="text-xl md:text-2xl font-serif font-bold text-white mb-2 tracking-tight group-hover:text-black transition-colors">{item.t}</h4>
                       <p className="text-gray-400 font-sans font-light text-xs md:text-sm italic group-hover:text-black/80 leading-relaxed">{item.d}</p>
                    </div>
                  ))}
                </div>
             </div>
          </div>
        </section>

        {/* 6. GOOGLE & PLATFORM REMOVALS */}
        <section ref={sectionRefs.google} data-section="google" className="py-24 bg-[#2A454E]">
          <div className="px-4 sm:px-6 lg:px-8 max-w-[90rem] mx-auto text-center">
             <div className={`mb-20 ${visibleSections.google ? 'animate-fade-in-down' : 'opacity-0'}`}>
                <h2 className="text-3xl md:text-5xl font-serif font-bold text-white mb-6 tracking-tight leading-tight">
                   Search Engine & <br />
                   <span className="italic font-light text-[#A07A41]">Platform Takedowns.</span>
                </h2>
                <p className="text-gray-400 max-w-2xl mx-auto font-light leading-relaxed italic border-x border-[#A07A41]/30 px-10">We handle takedown requests across the entire digital supply chain, from search listing de-indexing to server-level content removal.</p>
             </div>
             
             <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                {[
                  { t: "Search Engines", s: "Google De-indexing", i: Search },
                  { t: "Hosting Providers", s: "Server Level Action", i: HardDrive },
                  { t: "Social Platforms", s: "Shared Content Removal", i: Eye },
                  { t: "Direct Websites", s: "Owner Communications", i: LinkIcon }
                ].map((item, i) => (
                  <div key={i} className={`p-10 bg-[#1B2D33] border border-white/10 rounded-3xl hover:border-[#A07A41] transition-all duration-700 hover:-translate-y-4 ${visibleSections.google ? 'animate-fade-in-up' : 'opacity-0'}`} style={{ animationDelay: `${i * 150}ms` }}>
                     <div className="w-16 h-16 bg-[#2A454E] rounded-full flex items-center justify-center mx-auto mb-8 border border-white/5">
                        <item.i className="h-7 w-7 text-[#A07A41]" />
                     </div>
                     <h4 className="text-white font-serif font-bold text-xl mb-2">{item.t}</h4>
                     <span className="text-[#A07A41] text-[10px] uppercase font-black tracking-widest leading-none">{item.s}</span>
                  </div>
                ))}
             </div>
          </div>
        </section>

        {/* 7. WHY CHOOSE OUR DMCA SERVICES */}
        <section ref={sectionRefs.why} data-section="why" className="py-24 bg-[#1B2D33] overflow-hidden">
          <div className="px-4 sm:px-6 lg:px-8 max-w-[90rem] mx-auto grid lg:grid-cols-2 gap-24 items-center">
             <div className={`${visibleSections.why ? 'animate-fade-in-left' : 'opacity-0'}`}>
                <h2 className="text-3xl md:text-5xl font-serif font-bold text-white mb-10 tracking-tight leading-tight">
                   Why Choose Our <br />
                   <span className="italic font-light text-[#A07A41]">DMCA Takedown Services?</span>
                </h2>
                <div className="space-y-6">
                   {[
                     { t: "Professionally Drafted", d: "Legally compliant notices designed for maximum approval." },
                     { t: "Higher Success Rates", d: "Superior impact compared to basic templated submissions." },
                     { t: "Global Experience", d: "Extensive experience with international hosting regulations." },
                     { t: "Risk Reduction", d: "Minimizing the risk of counter-notices and disputes." }
                   ].map((item, i) => (
                     <div key={i} className="flex gap-8 group">
                        <div className="h-10 w-10 shrink-0 flex items-center justify-center font-serif text-2xl font-black text-[#A07A41]/10 group-hover:text-[#A07A41] transition-all">0{i+1}</div>
                        <div>
                           <h4 className="text-white font-bold text-lg mb-1 group-hover:text-[#A07A41] transition-colors">{item.t}</h4>
                           <p className="text-gray-400 text-sm font-light italic leading-loose">{item.d}</p>
                        </div>
                     </div>
                   ))}
                </div>
             </div>
             <div className={`${visibleSections.why ? 'animate-fade-in-right' : 'opacity-0'}`}>
                <div className="p-12 bg-[#2A454E]/30 rounded-[4rem] border border-white/5 relative">
                   <p className="text-white/60 font-sans font-light text-lg leading-relaxed italic border-l-4 border-[#A07A41] pl-8">
                      Most DIY DMCA requests fail due to improper formatting or weak legal claims. We ensure every submission is built for success.
                   </p>
                </div>
             </div>
          </div>
        </section>

        {/* 8. LEGAL COMPLIANCE & RISK PROTECTION */}
        <section ref={sectionRefs.legal} data-section="legal" className="py-24 bg-[#2A454E] border-y border-white/5">
           <div className="px-4 sm:px-6 lg:px-8 max-w-[90rem] mx-auto text-center">
              <div className={`mb-20 ${visibleSections.legal ? 'animate-fade-in-down' : 'opacity-0'}`}>
                 <h2 className="text-3xl md:text-5xl font-serif font-bold text-white mb-6 tracking-tight leading-tight">
                    Legal Compliance & <br />
                    <span className="italic font-light text-[#A07A41]">Risk Protection.</span>
                 </h2>
              </div>
              
              <div className="grid md:grid-cols-2 gap-20 items-center">
                 <div className="bg-[#1B2D33] p-12 rounded-3xl border border-white/5 text-left animate-fade-in-left">
                    <span className="text-red-500 font-black text-[10px] uppercase tracking-[0.4em] block mb-8 underline">The Danger of Incorrect Submissions</span>
                    <div className="space-y-6">
                       {[
                         "Immediate rejection by major platforms",
                         "Legal counter-notices from infringers",
                         "Potential liability for false or misleading claims"
                       ].map((v, i) => (
                         <div key={i} className="flex items-center gap-4">
                            <AlertCircle className="h-5 w-5 text-red-500 shrink-0" />
                            <span className="text-gray-200 font-light text-base">{v}</span>
                         </div>
                       ))}
                    </div>
                 </div>
                 <div className="space-y-6 text-left animate-fade-in-right">
                    <h4 className="text-2xl font-serif font-bold text-white mb-6">Our Commitment to Accuracy.</h4>
                    <p className="text-gray-400 font-sans font-light text-base leading-relaxed italic mb-10 border-b border-white/5 pb-10">
                       We ensure all notices are accurate, legally valid, and properly structured to protect you from counter-action.
                    </p>
                    <p className="text-gray-300 font-sans font-light text-lg leading-relaxed italic">
                       In addition to DMCA takedowns, we assist with <strong>trademark objection response UK</strong>, <strong>UKIPO objection reply</strong>, and broader <strong>intellectual property dispute UK</strong> matters, ensuring complete legal protection.
                    </p>
                 </div>
              </div>
           </div>
        </section>

        {/* 9. FAQ Section */}
        <section ref={sectionRefs.faq} data-section="faq" className="py-24 bg-[#1B2D33]">
           <div className="px-4 sm:px-6 lg:px-8 max-w-[55rem] mx-auto text-center">
              <div className="mb-20">
                 <h2 className={`text-4xl md:text-6xl font-serif font-bold text-white mb-6 leading-tight tracking-tight uppercase ${visibleSections.faq ? 'animate-fade-in-down' : 'opacity-0'}`}>
                    Frequently Asked <span className="italic font-light text-[#A07A41]">Questions.</span>
                 </h2>
              </div>
              <div className="space-y-4 text-left">
                {[
                  { q: "Is DMCA valid in the UK?", a: "Yes, especially when dealing with global platforms and US-based service providers. It is the gold standard for global digital asset removal." },
                  { q: "How fast can content be removed?", a: "Typically within 24–72 hours depending on the platform's response time and the validity of the evidence submitted." },
                  { q: "Can Google remove infringing pages?", a: "Yes, we handle DMCA-based de-indexing requests directly to Google to remove links from search results." },
                  { q: "What happens if the infringer disputes the claim?", a: "We guide you through the counter-notice phase, further escalation through legal channels, and additional enforcement steps." }
                ].map((faq, i) => (
                   <div key={i} className={`border border-white/5 rounded-3xl bg-[#2A454E]/40 backdrop-blur-md overflow-hidden hover:border-[#A07A41]/30 transition-all duration-500 ${visibleSections.faq ? 'animate-fade-in-up' : 'opacity-0'}`} style={{ animationDelay: `${i * 100}ms` }}>
                    <button onClick={() => setActiveFaq(activeFaq === i ? null : i)} className="w-full p-10 flex items-center justify-between group">
                      <span className={`text-left text-xl md:text-2xl font-serif font-bold transition-all duration-500 ${activeFaq === i ? 'text-[#A07A41]' : 'text-gray-200 group-hover:text-white'}`}>{faq.q}</span>
                      <ChevronDown className={`h-6 w-6 text-[#A07A41] transition-transform duration-500 ${activeFaq === i ? 'rotate-180 text-white' : ''}`} />
                    </button>
                    <div className={`transition-all duration-700 ease-in-out px-10 ${activeFaq === i ? 'max-h-[500px] pb-10 opacity-100' : 'max-h-0 opacity-0 overflow-hidden'}`}>
                      <p className="border-t border-white/5 pt-10 text-gray-400 text-lg leading-relaxed font-light italic">{faq.a}</p>
                    </div>
                  </div>
                ))}
              </div>
           </div>
        </section>

        {/* 10. FINAL CTA */}
        <section ref={sectionRefs.cta} data-section="cta" className="relative py-40 bg-[#1B2D33] text-center overflow-hidden">
          <div className="absolute inset-0 z-0">
             <img src="/lawhero.jpg" alt="Final CTA DMCA" className="w-full h-full object-cover opacity-10" />
          </div>
          <div className="relative z-10 px-4 sm:px-6 lg:px-8 max-w-[85rem] mx-auto">
            <div className={`transition-all duration-1000 ${visibleSections.cta ? 'animate-fade-in-up' : 'opacity-0'}`}>
              <h2 className="text-4xl md:text-7xl font-serif font-bold text-white mb-10 leading-[1.05] tracking-tight uppercase">
                Start Your DMCA <br />
                <span className="italic font-light text-[#A07A41]">Takedown Today.</span>
              </h2>
              <p className="text-gray-300 mb-16 max-w-2xl mx-auto font-light text-base md:text-lg leading-relaxed italic border-l-2 border-[#A07A41] pl-8">
                 Every day your content remains stolen, you lose traffic, authority, and revenue. Take immediate legal action with our expert team.
              </p>
              
              <div className="flex flex-col sm:flex-row justify-center items-center gap-8">
                <button className="group relative flex items-center justify-center gap-3 px-12 py-6 bg-[#1B2D33] border border-white/10 text-white font-bold tracking-widest uppercase text-xs md:text-sm rounded transition-all duration-300 hover:bg-[#A07A41] shadow-[0_0_20px_rgba(0,0,0,0.1)] overflow-hidden">
                   <span className="relative z-10">Submit Your Case</span>
                   <ArrowRight className="h-6 w-6 relative z-10 transform group-hover:translate-x-2 transition-transform duration-300" />
                </button>
                <div className="flex flex-col items-center sm:items-start group cursor-pointer">
                   <p className="text-[#A07A41] font-black text-xl italic mb-1 group-hover:text-white transition-colors uppercase tracking-[0.2em]">Contact Our Team</p>
                   <div className="h-[2px] w-full bg-[#A07A41]/10 group-hover:bg-[#A07A41] transition-all"></div>
                </div>
              </div>
            </div>
          </div>
        </section>

      </main>
    </div>
  );
};

export default DMCATakedownPage;
