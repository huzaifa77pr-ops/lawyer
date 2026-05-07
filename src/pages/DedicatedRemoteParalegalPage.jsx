import React, { useEffect, useState, useRef } from 'react';
import { 
  ArrowRight, Search, CheckCircle, 
  ChevronDown, AlertCircle, ShieldCheck, Send, 
  Target, Eye, Link as LinkIcon, HardDrive, 
  Users, Briefcase, FileText, ClipboardList
} from 'lucide-react';

const DedicatedRemoteParalegalPage = () => {
  const [activeFaq, setActiveFaq] = useState(null);
  
  const [visibleSections, setVisibleSections] = useState({
    hero: true,
    what: false,
    who: false,
    does: false,
    how: false,
    benefits: false,
    why: false,
    legal: false,
    faq: false,
    cta: false
  });

  const sectionRefs = {
    hero: useRef(null),
    what: useRef(null),
    who: useRef(null),
    does: useRef(null),
    how: useRef(null),
    benefits: useRef(null),
    why: useRef(null),
    legal: useRef(null),
    faq: useRef(null),
    cta: useRef(null)
  };

  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = "Dedicated Remote Paralegal Services UK | H&S Co.";

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

  return (
    <div className="min-h-screen bg-[#2A454E] flex flex-col overflow-x-hidden text-white font-sans">
      <style>
        {`
          @keyframes fade-in-up { from { opacity: 0; transform: translateY(40px); } to { opacity: 1; transform: translateY(0); } }
          @keyframes fade-in-down { from { opacity: 0; transform: translateY(-40px); } to { opacity: 1; transform: translateY(0); } }
          @keyframes fade-in-left { from { opacity: 0; transform: translateX(-40px); } to { opacity: 1; transform: translateX(0); } }
          @keyframes fade-in-right { from { opacity: 0; transform: translateX(40px); } to { opacity: 1; transform: translateX(0); } }
          @keyframes fade-in-top-left { from { opacity: 0; transform: translate(-40px, -40px); } to { opacity: 1; transform: translate(0, 0); } }
          @keyframes fade-in-top-right { from { opacity: 0; transform: translate(40px, -40px); } to { opacity: 1; transform: translate(0, 0); } }
          @keyframes fade-in-bottom-left { from { opacity: 0; transform: translate(-40px, 40px); } to { opacity: 1; transform: translate(0, 0); } }
          @keyframes fade-in-bottom-right { from { opacity: 0; transform: translate(40px, 40px); } to { opacity: 1; transform: translate(0, 0); } }
          
          .animate-fade-in-up { animation: fade-in-up 1.2s cubic-bezier(0.22, 1, 0.36, 1) forwards; }
          .animate-fade-in-down { animation: fade-in-down 1.2s cubic-bezier(0.22, 1, 0.36, 1) forwards; }
          .animate-fade-in-left { animation: fade-in-left 1.2s cubic-bezier(0.22, 1, 0.36, 1) forwards; }
          .animate-fade-in-right { animation: fade-in-right 1.2s cubic-bezier(0.22, 1, 0.36, 1) forwards; }
          .animate-fade-in-top-left { animation: fade-in-top-left 1.2s cubic-bezier(0.22, 1, 0.36, 1) forwards; }
          .animate-fade-in-top-right { animation: fade-in-top-right 1.2s cubic-bezier(0.22, 1, 0.36, 1) forwards; }
          .animate-fade-in-bottom-left { animation: fade-in-bottom-left 1.2s cubic-bezier(0.22, 1, 0.36, 1) forwards; }
          .animate-fade-in-bottom-right { animation: fade-in-bottom-right 1.2s cubic-bezier(0.22, 1, 0.36, 1) forwards; }
          
          .animation-delay-200 { animation-delay: 0.2s; }
          .animation-delay-400 { animation-delay: 0.4s; }
          .animation-delay-600 { animation-delay: 0.6s; }
          .animation-delay-800 { animation-delay: 0.8s; }
        `}
      </style>
      
      <main className="flex-grow">
        
        {/* 1. HERO SECTION */}
        <section ref={sectionRefs.hero} data-section="hero" className="relative min-h-[95vh] flex items-center pt-32 pb-24 bg-[#1B2D33]">
          <div className="absolute inset-0 z-0">
             <img src="/doc.jpg" alt="Dedicated Remote Paralegal" className="w-full h-full object-cover opacity-20" />
             <div className="absolute inset-0 bg-gradient-to-r from-[#1B2D33] via-[#1B2D33]/70 to-transparent"></div>
          </div>
          <div className="relative z-10 px-4 sm:px-6 lg:px-8 max-w-[90rem] mx-auto w-full">
            <div className="max-w-4xl">
              <div className="flex items-center gap-4 mb-8 animate-fade-in-top-left">
                <div className="h-[2px] w-12 bg-[#A07A41]"></div>
                <span className="text-[#A07A41] uppercase tracking-[0.4em] text-[10px] sm:text-xs font-bold font-sans">Bespoke Support Model</span>
              </div>
              
              <h1 className="text-4xl sm:text-5xl md:text-6xl font-serif font-bold text-white leading-[1.1] mb-8 tracking-tight animate-fade-in-left animation-delay-200">
                Dedicated Remote <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#C29D64] via-[#A07A41] to-[#785A2D]">Paralegal Services UK.</span>
              </h1>
              
              <p className="text-base md:text-lg text-gray-300 font-sans font-light leading-relaxed max-w-2xl mb-12 animate-fade-in-bottom-left animation-delay-400">
                Get a dedicated remote paralegal to support your legal operations, manage documentation, and assist with intellectual property enforcement and case preparation.
              </p>

              <div className="flex flex-col sm:flex-row gap-5 mb-20 animate-fade-in-right animation-delay-600">
                <button className="group relative flex items-center justify-center gap-3 px-10 py-5 bg-[#1B2D33] border border-white/10 text-white font-bold tracking-widest uppercase text-xs md:text-sm rounded transition-all duration-300 hover:bg-[#A07A41] shadow-[0_0_20px_rgba(0,0,0,0.1)] overflow-hidden">
                  <span className="relative z-10">Hire Remote Paralegal</span>
                  <ArrowRight className="h-4 w-4 relative z-10 transform group-hover:translate-x-2 transition-transform duration-300" />
                </button>
                <div className="flex flex-col justify-center">
                   <p className="text-[#A07A41] text-[10px] font-black uppercase tracking-[0.3em] mb-1">Book Consultation</p>
                   <p className="text-white/40 text-[10px] italic">Resource Planning Session</p>
                </div>
              </div>

              <div className="grid grid-cols-2 lg:grid-cols-3 gap-12 border-t border-white/10 pt-12 animate-fade-in-up animation-delay-600">
                 {[
                   { t: "UK legal support experience", s: "Local Expertise" },
                   { t: "Dedicated resource model", s: "Exclusive Focus" },
                   { t: "Flexible monthly engagement", s: "Scalable Support" }
                 ].map((item, idx) => (
                   <div key={idx} className="space-y-1">
                      <span className="text-white font-serif font-bold text-lg block">{item.t}</span>
                      <span className="text-[#A07A41]/50 text-[10px] font-black uppercase tracking-widest leading-none">{item.s}</span>
                   </div>
                 ))}
              </div>
            </div>
          </div>
        </section>

        {/* 2. WHAT IS A REMOTE PARALEGAL */}
        <section ref={sectionRefs.what} data-section="what" className="py-16 md:py-24 bg-[#2A454E] overflow-hidden">
           <div className="px-4 sm:px-6 lg:px-8 max-w-[90rem] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
              <div className={`${visibleSections.what ? 'animate-fade-in-left' : 'opacity-0'}`}>
                 <h2 className="text-3xl md:text-5xl font-serif font-bold text-white mb-8 tracking-tight leading-tight uppercase">
                   What is a Dedicated <br />
                   <span className="italic font-light text-[#A07A41]">Remote Paralegal?</span>
                 </h2>
                 <div className="space-y-6 text-gray-300 font-light text-base md:text-lg leading-relaxed border-l-4 border-white/5 pl-6 md:pl-8 italic mb-10 md:mb-12">
                   <p>A remote paralegal is a trained legal support professional who works remotely to assist with documentation, research, compliance preparation, and case management tasks.</p>
                   <p>Unlike traditional assistants, a dedicated remote paralegal becomes part of your workflow, helping with specialized legal execution.</p>
                 </div>
                 <div className="space-y-4">
                    {[
                      "Legal documentation preparation",
                      "IP infringement reporting support",
                      "Case file organization",
                      "Compliance research and drafting"
                    ].map((item, idx) => (
                      <div key={idx} className="flex items-center gap-4 md:gap-6 p-5 md:p-6 bg-[#1B2D33] rounded-2xl border border-white/5 group hover:border-[#A07A41]/30 transition-all">
                         <div className="w-8 h-8 md:w-10 md:h-10 shrink-0 rounded-full bg-[#2A454E] flex items-center justify-center font-serif font-black text-[#A07A41] group-hover:bg-[#A07A41] group-hover:text-black transition-all text-sm md:text-base">0{idx+1}</div>
                         <span className="text-gray-200 group-hover:text-white font-bold text-sm md:text-base">{item}</span>
                      </div>
                    ))}
                 </div>
              </div>
              <div className={`${visibleSections.what ? 'animate-fade-in-right' : 'opacity-0'}`}>
                 <div className="relative group">
                    <img src="/aa.jpg" alt="Dedicated Support" className="rounded-3xl shadow-biggest h-[300px] md:h-[550px] w-full object-cover grayscale transition-all duration-1000 group-hover:grayscale-0" />
                    <div className="absolute top-6 right-6 md:top-10 md:right-10 bg-[#A07A41] p-6 md:p-10 rounded-2xl md:rounded-3xl hidden md:block border border-black/10">
                       <Users className="h-6 w-6 md:h-10 md:w-10 text-black" />
                    </div>
                 </div>
              </div>
           </div>
        </section>

        {/* 3. WHO THIS IS FOR */}
        <section ref={sectionRefs.who} data-section="who" className="py-16 md:py-24 bg-[#1B2D33] border-y border-white/5">
          <div className="px-4 sm:px-6 lg:px-8 max-w-[90rem] mx-auto text-center">
             <div className={`mb-12 md:mb-20 ${visibleSections.who ? 'animate-fade-in-down' : 'opacity-0'}`}>
                <h2 className="text-3xl md:text-6xl font-serif font-bold text-white mb-6 uppercase tracking-tight leading-tight">
                   Who Needs A <span className="italic font-light text-[#A07A41]">Dedicated Resource?</span>
                </h2>
                <p className="text-gray-500 max-w-xl mx-auto font-light text-sm italic px-4"> 👉 If you only need one-time help, this is not the right service. This is for ongoing operational leverage.</p>
             </div>
             
             <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-5 gap-6">
                {[
                  { t: "Law Firms", d: "Needing extra legal support for case preparation and management.", ani: "animate-fade-in-top-left" },
                  { t: "Agencies", d: "Handling IP or brand protection clients with high documentation needs.", ani: "animate-fade-in-up" },
                  { t: "Startups", d: "Managing foundational legal documentation and compliance.", ani: "animate-fade-in-down" },
                  { t: "E-commerce", d: "Facing frequent infringement issues and market abuse.", ani: "animate-fade-in-bottom-right" },
                  { t: "Consultants", d: "Dealing with compliance-heavy work and complex frameworks.", ani: "animate-fade-in-right" }
                ].map((item, idx) => (
                  <div key={idx} className={`p-8 md:p-10 bg-[#2A454E]/20 border border-white/5 rounded-3xl hover:border-[#A07A41] transition-all duration-500 ${visibleSections.who ? item.ani : 'opacity-0'}`} style={{ animationDelay: `${idx * 150}ms` }}>
                     <div className="text-[#A07A41] font-black text-[10px] uppercase tracking-[0.4em] mb-8 block">Ideal Client</div>
                     <h4 className="text-white font-serif font-bold text-xl mb-4 leading-tight">{item.t}</h4>
                     <p className="text-gray-400 text-sm font-light leading-relaxed italic">{item.d}</p>
                  </div>
                ))}
             </div>
          </div>
        </section>

        {/* 4. WHAT A REMOTE PARALEGAL DOES */}
        <section ref={sectionRefs.does} data-section="does" className="py-16 md:py-24 bg-[#2A454E] overflow-hidden border-b border-white/5">
           <div className="px-4 sm:px-6 lg:px-8 max-w-[90rem] mx-auto">
             <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
                <div className={`${visibleSections.does ? 'animate-fade-in-top-left' : 'opacity-0'}`}>
                   <img src="/saa.jpg" alt="Paralegal Tasks" className="rounded-[2.5rem] md:rounded-[4rem] h-[300px] md:h-[600px] w-full object-cover brightness-75 grayscale hover:grayscale-0 transition-all duration-700" />
                </div>
                <div className={`${visibleSections.does ? 'animate-fade-in-bottom-right' : 'opacity-0'}`}>
                   <h2 className="text-3xl md:text-5xl font-serif font-bold text-white mb-8 md:mb-10 tracking-tight uppercase">
                      What Your Dedicated <br />
                      <span className="italic font-light text-[#A07A41]">Paralegal Handles.</span>
                   </h2>
                   <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-6">
                      {[
                        { t: "DMCA & IP Notices", i: Send, ani: "animate-fade-in-left" },
                        { t: "Legal Doc Packs", i: FileText, ani: "animate-fade-in-right" },
                        { t: "Evidence Organization", i: ClipboardList, ani: "animate-fade-in-up" },
                        { t: "Trademark Responses", i: LinkIcon, ani: "animate-fade-in-down" },
                        { t: "Research Frameworks", i: Search, ani: "animate-fade-in-top-right" },
                        { t: "Workflow Support", i: Briefcase, ani: "animate-fade-in-bottom-left" }
                      ].map((v, idx) => {
                        const Icon = v.i;
                        return (
                          <div key={idx} className={`flex flex-col p-6 md:p-8 bg-[#1B2D33] rounded-2xl md:rounded-3xl group hover:bg-[#A07A41] transition-all duration-500 ${visibleSections.does ? v.ani : 'opacity-0'}`} style={{ animationDelay: `${idx * 100}ms` }}>
                             <Icon className="h-5 w-5 md:h-6 md:w-6 text-[#A07A41] group-hover:text-black mb-4 md:mb-6 transition-colors" />
                             <span className="text-white group-hover:text-black font-bold text-xs md:text-sm tracking-widest uppercase transition-colors">{v.t}</span>
                          </div>
                        );
                      })}
                   </div>
                </div>
             </div>
           </div>
        </section>

        {/* 5. HOW THE SERVICE WORKS */}
        <section ref={sectionRefs.how} data-section="how" className="py-16 md:py-24 bg-[#1B2D33]">
           <div className="px-4 sm:px-6 lg:px-8 max-w-[90rem] mx-auto text-center">
              <div className={`mb-12 md:mb-20 ${visibleSections.how ? 'animate-fade-in-down' : 'opacity-0'}`}>
                 <h2 className="text-3xl md:text-6xl font-serif font-bold text-white mb-6 uppercase tracking-tight">Structured <span className="italic font-light text-[#A07A41]">Integration Workflow.</span></h2>
                 <p className="text-gray-500 max-w-xl mx-auto font-light text-sm italic px-4">Seamlessly adding legal capacity to your organization.</p>
              </div>
              
              <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 text-left">
                 {[
                   { t: "Requirement Assessment", d: "We understand your legal workload and support needs.", ani: "animate-fade-in-left" },
                   { t: "Resource Allocation", d: "A dedicated paralegal is assigned to your business.", ani: "animate-fade-in-top-left" },
                   { t: "Workflow Integration", d: "They integrate into your tools, systems, or channels.", ani: "animate-fade-in-up" },
                   { t: "Ongoing Support", d: "Daily or weekly legal support tasks are handled as needed.", ani: "animate-fade-in-top-right" },
                   { t: "Continuous Reporting", d: "You receive updates on completed and ongoing work.", ani: "animate-fade-in-right" }
                 ].map((step, idx) => (
                   <div key={idx} className={`p-8 md:p-10 bg-[#2A454E]/20 border border-white/5 rounded-3xl relative overflow-hidden flex flex-col hover:border-[#A07A41] transition-all duration-500 ${visibleSections.how ? step.ani : 'opacity-0'}`} style={{ animationDelay: `${idx * 150}ms` }}>
                      <div className="text-[#A07A41] font-black text-2xl font-serif italic mb-6">0{idx+1}</div>
                      <h4 className="text-white font-serif font-bold text-xl mb-4 leading-tight">{step.t}</h4>
                      <p className="text-gray-400 text-sm font-light leading-relaxed italic">{step.d}</p>
                   </div>
                 ))}
              </div>
           </div>
        </section>

        {/* 6. BENEFITS OF A DEDICATED PARALEGAL */}
        <section ref={sectionRefs.benefits} data-section="benefits" className="py-16 md:py-24 bg-[#2A454E] overflow-hidden border-y border-white/5">
          <div className="px-4 sm:px-6 lg:px-8 max-w-[90rem] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 items-center">
             <div className={`${visibleSections.benefits ? 'animate-fade-in-bottom-left' : 'opacity-0'}`}>
                <div className="relative">
                   <img src="/saa3.jpg" alt="Benefits" className="rounded-[2.5rem] md:rounded-[4rem] h-[300px] md:h-[500px] w-full object-cover grayscale opacity-50" />
                   <div className="absolute inset-0 flex flex-col justify-center items-center p-8 md:p-12 text-center">
                      <Target className="h-10 w-10 md:h-12 md:w-12 text-[#A07A41] mb-6 md:mb-8 animate-pulse" />
                      <p className="text-white text-base md:text-lg font-light italic leading-loose px-4 max-w-sm">"This is not just 'assistance'—it’s operational leverage for your legal department."</p>
                   </div>
                </div>
             </div>
             <div className={`${visibleSections.benefits ? 'animate-fade-in-top-right' : 'opacity-0'}`}>
                <h2 className="text-3xl md:text-5xl font-serif font-bold text-white mb-8 md:mb-10 tracking-tight uppercase leading-tight">
                   Why Businesses Use <br />
                   <span className="italic font-light text-[#A07A41]">Remote Paralegals.</span>
                </h2>
                <div className="space-y-6 md:space-y-8">
                   {[
                     { t: "Reduces Internal Workload", d: "Free up your senior legal staff for high-value strategic work.", ani: "animate-fade-in-right" },
                     { t: "Faster Documentation Handling", d: "Accelerated preparation of filings, notices, and packs.", ani: "animate-fade-in-left" },
                     { t: "Cost-Effective Scale", d: "Premium legal support at a fraction of in-house hiring costs.", ani: "animate-fade-in-right" },
                     { t: "Better Organization", d: "Structured file management and compliance tracking.", ani: "animate-fade-in-left" }
                   ].map((item, idx) => (
                     <div key={idx} className={`flex gap-6 md:gap-8 group border-b border-white/5 pb-6 md:pb-8 last:border-0 ${visibleSections.benefits ? item.ani : 'opacity-0'}`} style={{ animationDelay: `${idx * 200}ms` }}>
                        <div className="h-8 w-8 md:h-10 md:w-10 shrink-0 text-[#A07A41]/10 font-serif text-3xl md:text-4xl font-black group-hover:text-[#A07A41] transition-all duration-500 italic leading-none">{idx+1}</div>
                        <div>
                           <h4 className="text-white font-bold text-base md:text-lg mb-1 group-hover:text-[#A07A41] transition-colors">{item.t}</h4>
                           <p className="text-gray-400 text-xs md:text-sm font-light leading-relaxed">{item.d}</p>
                        </div>
                     </div>
                   ))}
                </div>
             </div>
          </div>
        </section>

        {/* 7. WHY CHOOSE US */}
        <section ref={sectionRefs.why} data-section="why" className="py-24 bg-[#1B2D33]">
           <div className="px-4 sm:px-6 lg:px-8 max-w-[90rem] mx-auto">
              <div className={`text-center mb-20 ${visibleSections.why ? 'animate-fade-in-down' : 'opacity-0'}`}>
                 <h2 className="text-3xl md:text-5xl font-serif font-bold text-white mb-6 uppercase tracking-tight leading-tight">Why Choose Our <br /><span className="italic font-light text-[#A07A41]">Paralegal Services?</span></h2>
                 <p className="text-gray-500 max-w-xl mx-auto font-light text-sm italic px-4">Experience-led execution that generic VAs cannot provide.</p>
              </div>
              
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                {[
                  { t: "Dedicated Resource", d: "Not shared hourly freelancers—a consistent resource assigned to you.", ani: "animate-fade-in-top-left" },
                  { t: "Legal Workflow IP", d: "Specialized experience in IP, DMCA, and legal documentation.", ani: "animate-fade-in-bottom-left" },
                  { t: "Structured Reporting", d: "Clear task management and progress tracking built-in.", ani: "animate-fade-in-top-right" },
                  { t: "UK-Aligned", d: "Deep understanding of the UK legal framework and standards.", ani: "animate-fade-in-bottom-right" }
                ].map((item, idx) => (
                  <div key={idx} className={`p-10 bg-[#2A454E]/40 border border-white/5 rounded-3xl group hover:border-[#A07A41] transition-all duration-700 ${visibleSections.why ? item.ani : 'opacity-0'}`} style={{ animationDelay: `${idx * 150}ms` }}>
                     <ShieldCheck className="h-10 w-10 text-[#A07A41] mb-10 group-hover:scale-110 transition-transform" />
                     <h4 className="text-white font-serif font-bold text-xl mb-4 group-hover:text-[#A07A41] transition-colors leading-tight">{item.t}</h4>
                     <p className="text-gray-500 font-sans font-light text-sm italic group-hover:text-white/80 transition-colors leading-relaxed">{item.d}</p>
                  </div>
                ))}
              </div>
           </div>
        </section>

        {/* 8. LEGAL & COMPLIANCE NOTE */}
        <section ref={sectionRefs.legal} data-section="legal" className="py-16 md:py-24 bg-[#2A454E] border-y border-white/5">
           <div className="px-4 sm:px-6 lg:px-8 max-w-[90rem] mx-auto text-center">
              <div className={`mb-12 md:mb-20 ${visibleSections.legal ? 'animate-fade-in-down' : 'opacity-0'}`}>
                 <h2 className="text-3xl md:text-5xl font-serif font-bold text-white mb-6 uppercase tracking-tight leading-tight">Professional Support <span className="text-[#A07A41] italic">& Standards.</span></h2>
              </div>
              
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
                 <div className={`bg-[#1B2D33] p-8 md:p-12 rounded-[2rem] md:rounded-[3.5rem] text-left border border-white/5 ${visibleSections.legal ? 'animate-fade-in-left' : 'opacity-0'}`}>
                    <span className="text-[#A07A41] font-black text-[10px] uppercase tracking-[0.4em] mb-8 md:mb-10 block">Compliance Protocol</span>
                    <div className="space-y-5 md:space-y-6">
                       {[
                         "Assist qualified legal workflows",
                         "Maintain absolute confidentiality",
                         "Follow structured legal documentation practices",
                         "Avoid unauthorized legal advice beyond scope"
                       ].map((v, i) => (
                         <div key={i} className="flex items-center gap-4 md:gap-6 group">
                            <CheckCircle className="h-5 w-5 md:h-6 md:w-6 text-[#A07A41]/10 group-hover:text-[#A07A41] transition-colors" />
                            <span className="text-gray-300 font-light text-base md:text text-lg italic group-hover:text-white transition-colors">{v}</span>
                         </div>
                       ))}
                    </div>
                 </div>
                 <div className={`space-y-8 md:space-y-10 text-left px-4 md:px-0 ${visibleSections.legal ? 'animate-fade-in-right' : 'opacity-0'}`}>
                    <p className="text-gray-400 font-sans font-light text-base md:text-lg leading-relaxed italic border-l-2 border-[#A07A41] pl-6 md:pl-8">
                       Our dedicated remote paralegals also assist with <strong>trademark objection response UK</strong>, <strong>UKIPO objection reply</strong>, and complex <strong>intellectual property dispute UK</strong> workflows, ensuring accurate <strong>legal response trademark UK</strong> preparation. We support <strong>trademark refusal response UK</strong> and <strong>trademark application support UK</strong> requirements.
                    </p>
                    <div className="flex items-center gap-10">
                       <HardDrive className="h-10 w-10 md:h-12 md:w-12 text-white/5" />
                       <div className="h-[1px] flex-grow bg-white/5"></div>
                    </div>
                 </div>
              </div>
           </div>
        </section>

        {/* 9. FAQ SECTION */}
        <section ref={sectionRefs.faq} data-section="faq" className="py-24 bg-[#1B2D33]">
           <div className="px-4 sm:px-6 lg:px-8 max-w-[55rem] mx-auto text-center">
              <div className="mb-20">
                 <h2 className={`text-4xl md:text-6xl font-serif font-bold text-white mb-6 leading-tight tracking-tight uppercase ${visibleSections.faq ? 'animate-fade-in-down' : 'opacity-0'}`}>
                    Common <span className="italic font-light text-[#A07A41]">Queries.</span>
                 </h2>
              </div>
              <div className="space-y-4 text-left">
                {[
                  { q: "Is a remote paralegal a lawyer?", a: "No, they support legal work but do not act as solicitors. They handle documentation, research, and administrative legal tasks under your supervision.", ani: "animate-fade-in-left" },
                  { q: "Can they handle DMCA or IP tasks?", a: "Yes, they specialize in the preparation and execution support of DMCA notices, IP infringement reports, and brand protection workflows.", ani: "animate-fade-in-right" },
                  { q: "Is this full-time or part-time?", a: "It depends on the selected package. We offer flexible engagement levels from part-time support to full-time dedicated resources.", ani: "animate-fade-in-left" },
                  { q: "Do they work exclusively for my business?", a: "Yes, in our dedicated plans, the assigned paralegal works specifically on your legal operations and becomes an extension of your team.", ani: "animate-fade-in-right" }
                ].map((faq, idx) => (
                   <div key={idx} className={`border border-white/5 rounded-3xl bg-[#2A454E]/40 backdrop-blur-md overflow-hidden hover:border-[#A07A41]/30 transition-all duration-500 ${visibleSections.faq ? faq.ani : 'opacity-0'}`} style={{ animationDelay: `${idx * 100}ms` }}>
                    <button onClick={() => setActiveFaq(activeFaq === idx ? null : idx)} className="w-full p-10 flex items-center justify-between group">
                      <span className={`text-left text-xl md:text-2xl font-serif font-bold transition-all duration-500 ${activeFaq === idx ? 'text-[#A07A41]' : 'text-gray-200 group-hover:text-white'}`}>{faq.q}</span>
                      <ChevronDown className={`h-6 w-6 text-[#A07A41] transition-transform duration-500 ${activeFaq === idx ? 'rotate-180 text-white' : ''}`} />
                    </button>
                    <div className={`transition-all duration-700 ease-in-out px-10 ${activeFaq === idx ? 'max-h-[500px] pb-10 opacity-100' : 'max-h-0 opacity-0 overflow-hidden'}`}>
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
             <img src="/lawhero.jpg" alt="Final CTA Paralegal" className="w-full h-full object-cover opacity-10" />
          </div>
          <div className="relative z-10 px-4 sm:px-6 lg:px-8 max-w-[85rem] mx-auto">
            <div className={`transition-all duration-[1.5s] ${visibleSections.cta ? 'animate-fade-in-up' : 'opacity-0'}`}>
              <h2 className="text-4xl md:text-7xl font-serif font-bold text-white mb-10 leading-[1.05] tracking-tight uppercase">
                Hire Your Dedicated <br />
                <span className="italic font-light text-[#A07A41]">Remote Paralegal.</span>
              </h2>
              <p className="text-gray-300 mb-16 max-w-2xl mx-auto font-light text-base md:text-lg leading-relaxed italic border-l-2 border-[#A07A41] pl-8">
                Stop wasting time on repetitive legal tasks. Get structured, ongoing legal support integrated into your workflow. Hire excellence, scale capacity.
              </p>
              
              <div className="flex flex-col sm:flex-row justify-center items-center gap-10">
                <button className="group relative flex items-center justify-center gap-3 px-12 py-6 bg-[#1B2D33] border border-white/10 text-white font-bold tracking-widest uppercase text-xs md:text-sm rounded transition-all duration-300 hover:bg-[#A07A41] shadow-[0_0_20px_rgba(0,0,0,0.1)] overflow-hidden">
                   <span className="relative z-10">Hire Now</span>
                   <ArrowRight className="h-6 w-6 relative z-10 transform group-hover:translate-x-1 transition-transform duration-300" />
                </button>
                <div className="flex flex-col items-center sm:items-start group cursor-pointer">
                   <p className="text-[#A07A41] font-black text-2xl italic mb-1 group-hover:text-white transition-colors">Book a Consultation</p>
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

export default DedicatedRemoteParalegalPage;
