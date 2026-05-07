import React, { useEffect, useState, useRef } from 'react';
import { 
  ArrowRight, Search, CheckCircle, 
  ChevronDown, AlertCircle, ShieldCheck, Send, 
  Target, Eye, Link as LinkIcon, HardDrive, 
  Users, Briefcase, FileText, ClipboardList, 
  MessageSquare, Mail, Bell, Shield, Phone, X
} from 'lucide-react';

const ClientCommunicationHandlingPage = () => {
  const [activeFaq, setActiveFaq] = useState(null);
  
  const [visibleSections, setVisibleSections] = useState({
    hero: true,
    what: true,
    who: true,
    handle: true,
    how: true,
    whyCritical: true,
    benefits: true,
    whyChoose: true,
    legal: true,
    faq: true,
    cta: true
  });

  const sectionRefs = {
    hero: useRef(null),
    what: useRef(null),
    who: useRef(null),
    handle: useRef(null),
    how: useRef(null),
    whyCritical: useRef(null),
    benefits: useRef(null),
    whyChoose: useRef(null),
    legal: useRef(null),
    faq: useRef(null),
    cta: useRef(null)
  };

  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = "Client Communication Handling Services UK | H&S Co.";

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
             <img src="/saa3.jpg" alt="Client Communication hero" className="w-full h-full object-cover opacity-20" />
             <div className="absolute inset-0 bg-gradient-to-r from-[#1B2D33] via-[#1B2D33]/70 to-transparent"></div>
          </div>
          <div className="relative z-10 px-4 sm:px-6 lg:px-8 max-w-[90rem] mx-auto w-full">
            <div className="max-w-4xl">
              <div className="flex items-center gap-4 mb-8 animate-fade-in-top-left">
                <div className="h-[2px] w-12 bg-[#A07A41]"></div>
                <span className="text-[#A07A41] uppercase tracking-[0.4em] text-[10px] sm:text-xs font-bold font-sans">Precision Client Relations</span>
              </div>
              
              <h1 className="text-4xl sm:text-5xl md:text-6xl font-serif font-bold text-white leading-[1.1] mb-8 tracking-tight animate-fade-in-left animation-delay-200">
                Client Communication <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#C29D64] via-[#A07A41] to-[#785A2D]">Handling Services UK.</span>
              </h1>
              
              <p className="text-base md:text-lg text-gray-300 font-sans font-light leading-relaxed max-w-2xl mb-12 animate-fade-in-bottom-left animation-delay-400">
                Professional client communication management for law firms and businesses to ensure timely responses, structured messaging, and consistent legal communication workflows.
              </p>

              <div className="flex flex-col sm:flex-row gap-5 mb-20 animate-fade-in-right animation-delay-600">
                <button className="group relative flex items-center justify-center gap-3 px-10 py-5 bg-[#1B2D33] border border-white/10 text-white font-bold tracking-widest uppercase text-xs md:text-sm rounded transition-all duration-300 hover:bg-[#A07A41] shadow-[0_0_20px_rgba(0,0,0,0.1)] overflow-hidden">
                  <span className="relative z-10">Streamline Communication</span>
                  <ArrowRight className="h-4 w-4 relative z-10 transform group-hover:translate-x-2 transition-transform duration-300" />
                </button>
                <div className="flex flex-col justify-center">
                   <p className="text-[#A07A41] text-[10px] font-black uppercase tracking-[0.3em] mb-1">Book Consultation</p>
                   <p className="text-white/40 text-[10px] italic">Workflow Analysis Call</p>
                </div>
              </div>

              <div className="grid grid-cols-2 lg:grid-cols-3 gap-12 border-t border-white/10 pt-12 animate-fade-in-up animation-delay-600">
                 {[
                   { t: "UK-based support workflows", s: "Local Compliance" },
                   { t: "Confidential handling", s: "Absolute Privacy" },
                   { t: "Structured response systems", s: "Proven Logic" }
                 ].map((item, idx) => (
                   <div key={idx} className="space-y-1">
                      <span className="text-white font-serif font-bold text-base md:text-lg block">{item.t}</span>
                      <span className="text-[#A07A41]/50 text-[10px] font-black uppercase tracking-widest leading-none">{item.s}</span>
                   </div>
                 ))}
              </div>
            </div>
          </div>
        </section>

        {/* 2. WHAT IS COMMUNICATION HANDLING */}
        <section ref={sectionRefs.what} data-section="what" className="py-16 md:py-24 bg-[#2A454E] overflow-hidden">
           <div className="px-4 sm:px-6 lg:px-8 max-w-[90rem] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
              <div className={`${visibleSections.what ? 'animate-fade-in-left' : 'opacity-0'}`}>
                 <h2 className="text-3xl md:text-5xl font-serif font-bold text-white mb-8 tracking-tight leading-tight uppercase">
                   What is Client <br />
                   <span className="italic font-light text-[#A07A41]">Communication Handling?</span>
                 </h2>
                 <div className="space-y-6 text-gray-300 font-light text-base md:text-lg leading-relaxed border-l-4 border-white/5 pl-6 md:pl-8 italic mb-10 md:mb-12">
                   <p>Client communication handling refers to the structured management of all incoming and outgoing client interactions, ensuring timely responses, consistency in messaging, and professional handling of legal or business queries.</p>
                   <p>It is not just replying to emails—it is managing communication flow across multiple cases, clients, and legal matters.</p>
                 </div>
                 <div className="flex items-center gap-6">
                    <div className="p-4 bg-[#1B2D33] rounded-2xl border border-[#A07A41]/20">
                       <MessageSquare className="h-8 w-8 text-[#A07A41]" />
                    </div>
                    <p className="text-gray-400 text-sm italic font-light">"Translating complex legal updates into clear, professional client messaging."</p>
                 </div>
              </div>
              <div className={`${visibleSections.what ? 'animate-fade-in-right' : 'opacity-0'}`}>
                 <div className="relative group">
                    <img src="/aa.jpg" alt="Communication strategy" className="rounded-3xl shadow-biggest h-[300px] md:h-[500px] w-full object-cover grayscale transition-all duration-1000 group-hover:grayscale-0" />
                    <div className="absolute -bottom-6 -left-6 bg-[#A07A41] p-8 rounded-3xl hidden md:block animate-fade-in-bottom-left animation-delay-400">
                       <Bell className="h-10 w-10 text-black animate-bounce" />
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
                   Who Needs <span className="italic font-light text-[#A07A41]">Communication Handling?</span>
                </h2>
                <p className="text-gray-500 max-w-xl mx-auto font-light text-sm italic px-4"> 👉 If client communication is slowing down your operations, this solves it.</p>
             </div>
             
             <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
                {[
                  { t: "Law Firms", d: "Handling multiple active cases with high update requirements.", ani: "animate-fade-in-top-left" },
                  { t: "High-Volume Agencies", d: "Managing a large base of clients across various service lines.", ani: "animate-fade-in-up" },
                  { t: "IP Service Providers", d: "Coordinating complex trademark and copyright status updates.", ani: "animate-fade-in-down" },
                  { t: "Busy Consultants", d: "Managing frequent legal inquiries without losing focus on execution.", ani: "animate-fade-in-right" },
                  { t: "Growth Teams", d: "Struggling with response delays that lead to client dissatisfaction.", ani: "animate-fade-in-bottom-right" }
                ].map((item, idx) => (
                  <div key={idx} className={`p-8 md:p-10 bg-[#2A454E]/20 border border-white/5 rounded-3xl hover:border-[#A07A41] transition-all duration-500 ${visibleSections.who ? item.ani : 'opacity-0'}`} style={{ animationDelay: `${idx * 150}ms` }}>
                     <div className="text-[#A07A41] font-black text-[10px] uppercase tracking-[0.4em] mb-8 block font-serif italic">Operational Vertical</div>
                     <h4 className="text-white font-serif font-bold text-xl mb-4 leading-tight">{item.t}</h4>
                     <p className="text-gray-400 text-sm font-light leading-relaxed italic">{item.d}</p>
                  </div>
                ))}
             </div>
          </div>
        </section>

        {/* 4. WHAT WE HANDLE */}
        <section ref={sectionRefs.handle} data-section="handle" className="py-16 md:py-24 bg-[#2A454E] overflow-hidden">
           <div className="px-4 sm:px-6 lg:px-8 max-w-[90rem] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
              <div className={`${visibleSections.handle ? 'animate-fade-in-top-left' : 'opacity-0'}`}>
                 <img src="/doc.jpg" alt="Handling comms" className="rounded-[2.5rem] md:rounded-[4rem] h-[300px] md:h-[600px] w-full object-cover brightness-75 grayscale hover:grayscale-0 transition-all duration-700 shadow-2xl" />
              </div>
              <div className={`${visibleSections.handle ? 'animate-fade-in-bottom-right' : 'opacity-0'}`}>
                 <h2 className="text-3xl md:text-5xl font-serif font-bold text-white mb-8 md:mb-10 tracking-tight uppercase">
                    What We Handle in <br />
                    <span className="italic font-light text-[#A07A41]">Client Communication.</span>
                 </h2>
                 <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-6">
                    {[
                      { t: "Email Handling", i: Mail, ani: "animate-fade-in-left" },
                      { t: "Case Update Comms", i: ClipboardList, ani: "animate-fade-in-right" },
                      { t: "Inquiry Prioritization", i: Target, ani: "animate-fade-in-up" },
                      { t: "Professional Replies", i: FileText, ani: "animate-fade-in-down" },
                      { t: "Internal Coordination", i: Users, ani: "animate-fade-in-top-right" },
                      { t: "Communication Logs", i: HardDrive, ani: "animate-fade-in-bottom-left" }
                    ].map((v, idx) => {
                      const Icon = v.i;
                      return (
                        <div key={idx} className={`flex flex-col p-6 md:p-8 bg-[#1B2D33] rounded-2xl md:rounded-3xl group hover:bg-[#A07A41] transition-all duration-500 ${visibleSections.handle ? v.ani : 'opacity-0'}`} style={{ animationDelay: `${idx * 100}ms` }}>
                           <Icon className="h-5 w-5 md:h-6 md:w-6 text-[#A07A41] group-hover:text-black mb-4 md:mb-6 transition-colors" />
                           <span className="text-white group-hover:text-black font-bold text-xs md:text-sm tracking-widest uppercase transition-colors">{v.t}</span>
                        </div>
                      );
                    })}
                 </div>
              </div>
           </div>
        </section>

        {/* 5. PROCESS WORKS */}
        <section ref={sectionRefs.how} data-section="how" className="py-16 md:py-24 bg-[#1B2D33]">
           <div className="px-4 sm:px-6 lg:px-8 max-w-[90rem] mx-auto text-center">
              <div className={`mb-12 md:mb-20 ${visibleSections.how ? 'animate-fade-in-down' : 'opacity-0'}`}>
                 <h2 className="text-3xl md:text-6xl font-serif font-bold text-white mb-6 uppercase tracking-tight">Structured <span className="italic font-light text-[#A07A41]">Response Workflow.</span></h2>
                 <p className="text-gray-500 max-w-xl mx-auto font-light text-sm italic px-4">From initial triage to confirmed delivery.</p>
              </div>
              
              <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 text-left">
                 {[
                   { t: "Communication Setup", d: "We integrate into your email or communication system securely.", ani: "animate-fade-in-left" },
                   { t: "Triage & Categorization", d: "Messages are sorted by urgency and strategic legal importance.", ani: "animate-fade-in-top-left" },
                   { t: "Response Drafting", d: "Structured and consistent replies are prepared for review.", ani: "animate-fade-in-up" },
                   { t: "Approval & Sending", d: "Responses are sent based on agreed-upon workflow rules.", ani: "animate-fade-in-top-right" },
                   { t: "Tracking & Reporting", d: "All communication is logged, tracked, and monitored daily.", ani: "animate-fade-in-right" }
                 ].map((step, idx) => (
                   <div key={idx} className={`p-8 md:p-10 bg-[#2A454E]/20 border border-white/5 rounded-3xl relative overflow-hidden flex flex-col hover:border-[#A07A41] transition-all duration-500 ${visibleSections.how ? step.ani : 'opacity-0'}`} style={{ animationDelay: `${idx * 150}ms` }}>
                      <div className="absolute top-0 right-0 p-8 text-[#A07A41]/10 text-4xl font-black italic">0{idx+1}</div>
                      <h4 className="text-white font-serif font-bold text-xl mb-4 leading-tight pr-8">{step.t}</h4>
                      <p className="text-gray-400 text-sm font-light leading-relaxed italic">{step.d}</p>
                   </div>
                 ))}
              </div>
           </div>
        </section>

        {/* 6. WHY CRITICAL */}
        <section ref={sectionRefs.whyCritical} data-section="whyCritical" className="py-16 md:py-24 bg-[#2A454E] overflow-hidden border-y border-white/5">
           <div className="px-4 sm:px-6 lg:px-8 max-w-[90rem] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 items-center">
              <div className={`${visibleSections.whyCritical ? 'animate-fade-in-left' : 'opacity-0'}`}>
                 <h2 className="text-3xl md:text-5xl font-serif font-bold text-white mb-8 md:mb-10 tracking-tight uppercase leading-tight">
                    Why Structured <br />
                    <span className="italic font-light text-[#A07A41]">Communication is Critical.</span>
                 </h2>
                 <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                    <div className="p-8 bg-black/20 rounded-3xl border border-red-500/10">
                       <h4 className="text-red-400 font-bold mb-4 uppercase tracking-widest text-xs">The Risk</h4>
                       <ul className="space-y-3 text-gray-500 text-sm font-light italic">
                          <li className="flex gap-3"><X className="h-4 w-4 text-red-500/30" /> Missed expectations</li>
                          <li className="flex gap-3"><X className="h-4 w-4 text-red-500/30" /> Delayed legal responses</li>
                          <li className="flex gap-3"><X className="h-4 w-4 text-red-500/30" /> Reputation damage</li>
                       </ul>
                    </div>
                    <div className="p-8 bg-black/20 rounded-3xl border border-green-500/10">
                       <h4 className="text-[#A07A41] font-bold mb-4 uppercase tracking-widest text-xs">The Solution</h4>
                       <ul className="space-y-3 text-gray-300 text-sm font-light italic">
                          <li className="flex gap-3"><CheckCircle className="h-4 w-4 text-[#A07A41]" /> Faster response times</li>
                          <li className="flex gap-3"><CheckCircle className="h-4 w-4 text-[#A07A41]" /> Consistent messaging</li>
                          <li className="flex gap-3"><CheckCircle className="h-4 w-4 text-[#A07A41]" /> Reduced overload</li>
                       </ul>
                    </div>
                 </div>
              </div>
              <div className={`${visibleSections.whyCritical ? 'animate-fade-in-right' : 'opacity-0'}`}>
                 <div className="relative group">
                    <img src="/para.jpg" alt="Communication flow" className="rounded-3xl h-[400px] md:h-[550px] w-full object-cover grayscale opacity-60" />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#2A454E] via-transparent to-transparent"></div>
                    <div className="absolute bottom-10 left-10 right-10 p-8 border border-white/5 bg-[#1B2D33]/90 backdrop-blur-md rounded-2xl">
                       <p className="text-white text-lg font-serif italic mb-2">"Structured communication ensures your clients never feel forgotten."</p>
                       <p className="text-[#A07A41] text-[10px] font-black uppercase tracking-[0.3em]">Communication Infrastructure</p>
                    </div>
                 </div>
              </div>
           </div>
        </section>

        {/* 7. KEY BENEFITS */}
        <section ref={sectionRefs.benefits} data-section="benefits" className="py-24 bg-[#1B2D33]">
           <div className="px-4 sm:px-6 lg:px-8 max-w-[90rem] mx-auto text-center">
              <div className={`mb-12 md:mb-20 ${visibleSections.benefits ? 'animate-fade-in-down' : 'opacity-0'}`}>
                 <h2 className="text-3xl md:text-5xl font-serif font-bold text-white mb-6 uppercase tracking-tight">Key Benefits of <br /><span className="italic font-light text-[#A07A41]">Handled Communication.</span></h2>
              </div>
              
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {[
                  { t: "Faster Client Response", d: "Drastically reduced wait times for client inquiries.", ani: "animate-fade-in-left" },
                  { t: "Reduced Workload", d: "Legal teams focus on law, while we focus on the flow.", ani: "animate-fade-in-up" },
                  { t: "Consistent Messaging", d: "Brand voice reflected in every piece of communication.", ani: "animate-fade-in-right" },
                  { t: "Improved Satisfaction", d: "Higher client retention through active engagement.", ani: "animate-fade-in-left" },
                  { t: "Better Tracking", d: "Complete audit trails for all case discussions.", ani: "animate-fade-in-bottom-right" },
                  { t: "Strategic Relief", d: "Removing the bottleneck of the 'messy inbox'.", ani: "animate-fade-in-right" }
                ].map((item, idx) => (
                  <div key={idx} className={`p-10 bg-[#2A454E]/20 border border-white/5 rounded-3xl group hover:border-[#A07A41] transition-all duration-700 ${visibleSections.benefits ? item.ani : 'opacity-0'}`} style={{ animationDelay: `${idx * 150}ms` }}>
                     <CheckCircle className="h-10 w-10 text-[#A07A41] mb-10 group-hover:scale-110 transition-transform" />
                     <h4 className="text-white font-serif font-bold text-xl mb-4 leading-tight">{item.t}</h4>
                     <p className="text-gray-500 font-sans font-light text-sm italic group-hover:text-white/80 transition-colors leading-relaxed">{item.d}</p>
                  </div>
                ))}
              </div>
           </div>
        </section>

        {/* 8. WHY CHOOSE US */}
        <section ref={sectionRefs.whyChoose} data-section="whyChoose" className="py-16 md:py-24 bg-[#2A454E] overflow-hidden border-y border-white/5">
           <div className="px-4 sm:px-6 lg:px-8 max-w-[90rem] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 items-center">
              <div className={`${visibleSections.whyChoose ? 'animate-fade-in-bottom-left' : 'opacity-0'}`}>
                 <img src="/saa2.jpg" alt="Why Choose Us" className="rounded-[2.5rem] md:rounded-[4rem] h-[400px] md:h-[600px] w-full object-cover grayscale brightness-75" />
              </div>
              <div className={`${visibleSections.whyChoose ? 'animate-fade-in-top-right' : 'opacity-0'}`}>
                 <h2 className="text-3xl md:text-5xl font-serif font-bold text-white mb-8 md:mb-10 tracking-tight uppercase leading-tight">
                    Why Choose Our <br />
                    <span className="italic font-light text-[#A07A41]">Communication Handling?</span>
                 </h2>
                 <div className="space-y-8">
                    {[
                      { t: "Legal Workflow Awareness", d: "Our handlers understand legal context and standard terminology." },
                      { t: "Structured Frameworks", d: "Proven response structures that maintain professional distance." },
                      { t: "Confidential Processing", d: "High-level security and strict handling of client data." },
                      { t: "Designed for Law Firms", d: "Built specifically for firms and IP-focused businesses." }
                    ].map((item, idx) => (
                      <div key={idx} className={`flex gap-6 md:gap-8 group border-b border-white/5 pb-6 last:border-0 ${visibleSections.whyChoose ? 'animate-fade-in-right' : ''}`} style={{ animationDelay: `${idx * 200}ms` }}>
                         <div className="h-10 w-10 shrink-0 bg-[#A07A41] rounded-xl flex items-center justify-center text-black font-black font-serif italic group-hover:bg-white transition-all">0{idx+1}</div>
                         <div>
                            <h4 className="text-white font-serif font-bold text-lg mb-1 group-hover:text-[#A07A41] transition-colors">{item.t}</h4>
                            <p className="text-gray-400 text-sm font-light leading-relaxed italic">{item.d}</p>
                         </div>
                      </div>
                    ))}
                 </div>
                 <p className="mt-12 p-8 border border-white/5 bg-[#1B2D33] rounded-3xl text-gray-500 italic text-sm">"Most services fail because they treat legal communication like generic customer support. It is not the same thing."</p>
              </div>
           </div>
        </section>

        {/* 9. CONFIDENTIALITY & QUALITY */}
        <section ref={sectionRefs.legal} data-section="legal" className="py-16 md:py-24 bg-[#1B2D33]">
           <div className="px-4 sm:px-6 lg:px-8 max-w-[90rem] mx-auto text-center">
              <div className={`mb-12 md:mb-20 ${visibleSections.legal ? 'animate-fade-in-down' : 'opacity-0'}`}>
                 <h2 className="text-3xl md:text-5xl font-serif font-bold text-white mb-6 uppercase tracking-tight leading-tight">Confidentiality <span className="text-[#A07A41] italic">& Standards.</span></h2>
              </div>
              
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
                 <div className={`bg-[#2A454E]/20 p-8 md:p-12 rounded-[2rem] md:rounded-[3.5rem] text-left border border-white/5 ${visibleSections.legal ? 'animate-fade-in-left' : 'opacity-0'}`}>
                    <span className="text-[#A07A41] font-black text-[10px] uppercase tracking-[0.4em] mb-8 md:mb-10 block font-serif">Security Protocol</span>
                    <div className="space-y-6">
                       {[
                         "Secure handling of client data",
                         "Controlled communication workflows",
                         "Approved response structures only",
                         "No unauthorized legal advice given",
                         "Strict confidentiality protocols"
                       ].map((v, i) => (
                         <div key={i} className="flex items-center gap-4 md:gap-6 group">
                            <ShieldCheck className="h-5 w-5 md:h-6 md:w-6 text-[#A07A41]/20 group-hover:text-[#A07A41] transition-colors" />
                            <span className="text-gray-300 font-light text-base md:text text-lg italic group-hover:text-white transition-colors">{v}</span>
                         </div>
                       ))}
                    </div>
                 </div>
                 <div className={`space-y-8 md:space-y-10 text-left px-4 md:px-0 ${visibleSections.legal ? 'animate-fade-in-right' : 'opacity-0'}`}>
                    <p className="text-gray-400 font-sans font-light text-base md:text-lg leading-relaxed italic border-l-2 border-[#A07A41] pl-6 md:pl-8">
                       Our communication handling system also supports <strong>trademark objection response UK</strong>, <strong>UKIPO objection reply</strong>, and structured updates for <strong>intellectual property dispute UK</strong> cases requiring accurate <strong>legal response trademark UK</strong> coordination. We handle routine <strong>trademark refusal response UK</strong> and <strong>trademark application support UK</strong> queries as well.
                    </p>
                    <div className="flex items-center gap-10">
                       <Shield className="h-10 w-10 md:h-12 md:w-12 text-white/5" />
                       <div className="h-[1px] flex-grow bg-white/5"></div>
                    </div>
                 </div>
              </div>
           </div>
        </section>

        {/* 10. FAQ SECTION */}
        <section ref={sectionRefs.faq} data-section="faq" className="py-24 bg-[#2A454E]">
           <div className="px-4 sm:px-6 lg:px-8 max-w-[55rem] mx-auto text-center">
              <div className="mb-20">
                 <h2 className={`text-4xl md:text-6xl font-serif font-bold text-white mb-6 leading-tight tracking-tight uppercase ${visibleSections.faq ? 'animate-fade-in-down' : 'opacity-0'}`}>
                    Communication <span className="italic font-light text-[#A07A41]">Archive.</span>
                 </h2>
              </div>
              <div className="space-y-4 text-left">
                {[
                  { q: "Do you respond directly to clients?", a: "Yes, based on strictly agreed communication rules, tone-of-voice guidelines, and approved templates." },
                  { q: "Can you handle legal case updates?", a: "Yes, we specialize in translating case developments into structured, professional updates for your clients." },
                  { q: "Is this only for law firms?", a: "No, many agencies and specialized legal service providers use our systems to manage high correspondence volumes." },
                  { q: "Can communication style be customized?", a: "ABSOLUTELY. All responses follow your specific firm tone, brand voice, and professional guidelines." }
                ].map((faq, idx) => (
                   <div key={idx} className={`border border-white/5 rounded-3xl bg-[#1B2D33]/40 backdrop-blur-md overflow-hidden hover:border-[#A07A41]/30 transition-all duration-500 ${visibleSections.faq ? 'animate-fade-in-up' : 'opacity-0'}`} style={{ animationDelay: `${idx * 100}ms` }}>
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

        {/* 11. FINAL CTA */}
        <section ref={sectionRefs.cta} data-section="cta" className="relative py-40 bg-[#1B2D33] text-center overflow-hidden">
          <div className="absolute inset-0 z-0">
             <img src="/aa.jpg" alt="Final CTA Handling" className="w-full h-full object-cover opacity-10" />
          </div>
          <div className="relative z-10 px-4 sm:px-6 lg:px-8 max-w-[85rem] mx-auto">
            <div className={`transition-all duration-1000 ${visibleSections.cta ? 'animate-fade-in-up' : 'opacity-0'}`}>
              <h2 className="text-4xl md:text-7xl font-serif font-bold text-white mb-10 leading-[1.05] tracking-tight uppercase">
                Take Control of Your <br />
                <span className="italic font-light text-[#A07A41]">Client Communication.</span>
              </h2>
              <p className="text-gray-300 mb-16 max-w-2xl mx-auto font-light text-base md:text-lg leading-relaxed italic border-l-2 border-[#A07A41] pl-8">
                Stop losing time and clients due to slow or inconsistent communication. Build a structured, professional communication system today.
              </p>
              
              <div className="flex flex-col sm:flex-row justify-center items-center gap-10">
                <button className="group relative flex items-center justify-center gap-3 px-12 py-6 bg-[#1B2D33] border border-white/10 text-white font-bold tracking-widest uppercase text-xs md:text-sm rounded transition-all duration-300 hover:bg-[#A07A41] shadow-[0_0_20px_rgba(0,0,0,0.1)] overflow-hidden">
                   <span className="relative z-10 font-black">Improve Communication Flow</span>
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

export default ClientCommunicationHandlingPage;
