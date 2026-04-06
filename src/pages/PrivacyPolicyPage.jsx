import React, { useEffect, useState, useRef } from 'react';
import { 
  ShieldCheck, Eye, Database, Cog, 
  Share2, Lock, UserCheck, History, ExternalLink, 
  Scale, RefreshCw, Mail, CheckCircle, AlertCircle,
  FileText, Globe, Info, Clock, User, ArrowRight, ChevronDown
} from 'lucide-react';


const PrivacyPolicyPage = () => {
  const [activeFaq, setActiveFaq] = useState(null);
  const [visibleSections, setVisibleSections] = useState({});


  const sectionRefs = {
    hero: useRef(null),
    intro: useRef(null),
    collect: useRef(null),
    use: useRef(null),
    cookies: useRef(null),
    sharing: useRef(null),
    security: useRef(null),
    rights: useRef(null),
    retention: useRef(null),
    thirdparty: useRef(null),
    children: useRef(null),
    legalbasis: useRef(null),
    framework: useRef(null),
    changes: useRef(null),
    contact: useRef(null),
    finalnote: useRef(null)
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
      { threshold: 0.05 }
    );

    Object.values(sectionRefs).forEach(ref => {
      if (ref.current) observer.observe(ref.current);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <div className="min-h-screen bg-[#2A454E] flex flex-col overflow-x-hidden text-white font-sans selection:bg-[#A07A41] selection:text-black">
      <main className="flex-grow">
        
        {/* 1. Hero Section - TOP-LEFT DIRECTIONAL FLOW */}
        <section 
          ref={sectionRefs.hero}
          data-section="hero"
          className="relative min-h-[90vh] flex flex-col lg:flex-row items-center justify-center pt-32 pb-16 overflow-hidden bg-[#1B2D33]"
        >
          <div 
             className="absolute inset-0 z-0 opacity-20 bg-cover bg-center bg-scroll md:bg-fixed"
             style={{ backgroundImage: 'url("/po.jpg")' }}
          >

             <div className="absolute inset-0 bg-gradient-to-b from-[#1B2D33] via-transparent to-[#1B2D33]"></div>
          </div>

          <div className="relative z-10 px-4 sm:px-6 lg:px-8 max-w-[90rem] mx-auto w-full text-center lg:text-left flex flex-col lg:flex-row items-center justify-between gap-12">
             <div className={`lg:w-1/2 transition-all duration-1000 ${visibleSections.hero ? 'animate-fade-in-left' : 'opacity-0 translate-x-[-100px] translate-y-[-100px]'}`}>
                <div className="flex items-center justify-center lg:justify-start gap-4 mb-6">
                  <span className="h-[1px] w-6 bg-[#A07A41]"></span>
                  <span className="text-[#A07A41] uppercase tracking-[0.4em] text-[8px] font-black italic">Structural Integrity</span>
                </div>
                
                <h1 className="text-3xl md:text-5xl lg:text-7xl font-serif font-bold text-white leading-[1.1] mb-6 tracking-tighter">
                   Privacy <br />
                   <span className="italic font-light text-[#A07A41]">Architecture.</span>
                </h1>
                
                <p className="text-gray-400 text-xs md:text-sm lg:text-base font-sans font-light leading-relaxed max-w-xl mb-12 border-l-2 border-[#A07A41]/30 pl-6 italic">
                   We are committed to protecting your personal data and ensuring transparency in how your information is collected, used, and stored.
                </p>

                <div className="flex flex-wrap justify-center lg:justify-start gap-4">
                   <div role="button" className="px-8 py-4 bg-[#A07A41] text-black font-black uppercase tracking-[0.2em] text-[9px] rounded-xl shadow-2xl transition-all hover:scale-105 cursor-pointer">View Compliance Protocols</div>
                </div>

             </div>

             <div className={`lg:w-1/3 p-10 md:p-12 bg-[#2A454E]/40 border border-white/10 rounded-[3rem] backdrop-blur-3xl relative overflow-hidden transition-all duration-1000 ${visibleSections.hero ? 'animate-fade-in-right' : 'opacity-0 translate-x-[100px] translate-y-[100px]'}`}>
                <div className="absolute top-0 right-0 p-12 opacity-5 scale-[2]"><ShieldCheck size={200} className="text-[#A07A41]" /></div>
                <div className="relative z-10 space-y-8">
                   <div className="space-y-4">
                      <div className="flex items-center gap-4 group">
                         <div className="h-10 w-10 rounded-full border border-white/5 flex items-center justify-center text-[#A07A41] group-hover:bg-[#A07A41] group-hover:text-black transition-all rotate-45"><Lock size={16} /></div>
                         <span className="text-gray-400 text-[9px] uppercase font-black tracking-widest italic group-hover:text-white transition-colors">GDPR Compliant</span>
                      </div>
                      <div className="flex items-center gap-4 group">
                         <div className="h-10 w-10 rounded-full border border-white/5 flex items-center justify-center text-[#A07A41] group-hover:bg-[#A07A41] group-hover:text-black transition-all -rotate-12"><Scale size={16} /></div>
                         <span className="text-gray-400 text-[9px] uppercase font-black tracking-widest italic group-hover:text-white transition-colors">DPA 2018 Standards</span>
                      </div>
                   </div>
                </div>
             </div>
          </div>
        </section>

        {/* 2. Introduction - BOTTOM-UP DIRECTIONAL FLOW */}
        <section 
          ref={sectionRefs.intro}
          data-section="intro"
          className="relative py-24 bg-[#1B2D33] overflow-hidden"
        >
           <div className={`max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 transition-all duration-1000 ${visibleSections.intro ? 'animate-fade-in-up' : 'opacity-0 translate-y-[150px]'}`}>
              <div className="p-12 md:p-20 bg-white/5 border border-white/10 rounded-[4rem] text-center md:text-left relative shadow-2xl">
                 <div className="absolute top-0 right-0 p-12 opacity-5 rotate-12"><Info size={80} className="text-[#A07A41]" /></div>
                 <h2 className="text-white font-serif font-bold text-xl md:text-3xl mb-8 italic">Policy Definition.</h2>
                 <p className="text-gray-300 text-sm md:text-base lg:text-lg leading-relaxed font-sans font-light mb-8 max-w-4xl italic">
                    This Privacy Policy explains how H&S CO collects, uses, and protects your personal information when you use our website or services.
                 </p>
                 <p className="text-gray-500 text-[10px] uppercase font-black tracking-[0.3em] pl-8 border-l-2 border-[#A07A41]">By using our website, you agree to the terms outlined in this policy.</p>
              </div>
           </div>
        </section>

        {/* 3. Information We Collect - LEFT-RIGHT ASYMMETRIC MAPPING */}
        <section 
          ref={sectionRefs.collect}
          data-section="collect"
          className="relative py-24 lg:py-40 bg-[#2A454E] overflow-hidden border-y border-white/5"
        >
           <div className="px-4 sm:px-6 lg:px-8 max-w-[90rem] mx-auto grid lg:grid-cols-2 gap-20 items-center">
              <div className={`transition-all duration-1000 ${visibleSections.collect ? 'animate-fade-in-left' : 'opacity-0 translate-x-[-150px]'}`}>
                 <span className="text-[#A07A41] uppercase tracking-[0.4em] text-[9px] font-black mb-6 block font-serif italic">Metric Collection</span>
                 <h2 className="text-3xl md:text-5xl font-serif font-bold text-white mb-10 leading-tight">Data <span className="italic font-light text-[#A07A41]">Taxonomy.</span></h2>
                 <p className="text-gray-400 text-xs md:text-sm leading-relaxed mb-12 max-w-md border-l border-white/10 pl-6 italic">We harvest specific strings of data to refine the legal precision of our platform and delivery logic.</p>
              </div>

              <div className="grid md:grid-cols-2 gap-6 relative">
                 {[
                   { icon: User, t: "Personal String", d: ["Name", "Email Address", "Phone Number", "Business Details"], dir: 'translate-y-[-100px]' },
                   { icon: Database, t: "Technical Array", d: ["IP Address", "Browser Identity", "Device Metrics", "Cookie Tracks"], dir: 'translate-y-[100px]' }
                 ].map((box, i) => (
                    <div key={i} className={`p-10 md:p-12 bg-[#1B2D33]/40 border border-[#A07A41]/10 rounded-[3rem] group hover:bg-[#A07A41] transition-all duration-1000 ${visibleSections.collect ? 'animate-fade-in-up' : `opacity-0 ${box.dir}`}`} style={{ animationDelay: `${i * 300}ms` }}>
                       <box.icon className="text-[#A07A41] group-hover:text-black mb-10 transition-transform group-hover:rotate-12" size={24} />
                       <h4 className="text-white font-serif font-bold text-lg mb-8 uppercase italic group-hover:text-black leading-tight tracking-tighter">{box.t}</h4>
                       <ul className="space-y-4">
                          {box.d.map((item, idx) => (
                             <li key={idx} className="text-gray-500 font-sans text-[9px] uppercase tracking-widest font-black flex items-center gap-3 group-hover:text-black/60">
                                <div className="h-1 w-1 bg-[#A07A41] group-hover:bg-black"></div>
                                {item}
                             </li>
                          ))}
                       </ul>
                    </div>
                 ))}
              </div>
           </div>
        </section>

        {/* 4. How We Use & 5. Cookies - TOP-RIGHT DIRECTIONAL FLOW */}
        <section 
          ref={sectionRefs.use}
          data-section="use"
          className="relative py-24 lg:py-40 bg-[#1B2D33] overflow-hidden"
        >
           <div className={`px-4 sm:px-6 lg:px-8 max-w-[90rem] mx-auto grid lg:grid-cols-2 gap-20 items-stretch transition-all duration-1000 ${visibleSections.use ? 'animate-fade-in-up' : 'opacity-0 translate-x-[100px] translate-y-[-100px]'}`}>
              <div className="p-12 md:p-20 bg-white/5 border border-white/5 rounded-[4rem] relative overflow-hidden flex flex-col justify-center order-2 lg:order-1 transition-all duration-1000 transform hover:scale-[1.02]">
                 <div className="absolute bottom-0 right-0 p-12 opacity-5 scale-[2]"><History size={150} className="text-[#A07A41]" /></div>
                 <h3 className="text-2xl md:text-3xl font-serif font-bold text-white mb-10 italic">Core Usage Logic.</h3>
                 <div className="grid gap-6">
                    {[ "Provide legal services", "Respond to inquiries", "Improve website UX", "Process client requests", "Legal Compliance" ].map((u, i) => (
                       <div key={i} className="flex items-center justify-between py-6 border-b border-white/5 group transition-all hover:pl-6">
                          <span className="text-gray-400 font-sans text-xs uppercase tracking-widest font-black italic group-hover:text-[#A07A41]">{u}</span>
                          <ArrowRight className="text-[#A07A41] opacity-20 group-hover:opacity-100 transition-all" size={14} />
                       </div>
                    ))}
                 </div>
                 <div className="mt-12 text-[#A07A41] text-[10px] font-black uppercase tracking-[0.4em] italic text-center p-6 border border-[#A07A41]/10 rounded-full">We Do NOT Sell or Trade Your Data</div>
              </div>

              <div ref={sectionRefs.cookies} data-section="cookies" className={`flex flex-col justify-center order-1 lg:order-2 transition-all duration-1000 ${visibleSections.cookies ? 'animate-fade-in-right' : 'opacity-0 translate-x-[150px]'}`}>
                 <span className="text-[#A07A41] uppercase tracking-[0.4em] text-[9px] font-black mb-8 block font-serif">Tracking Arrays</span>
                 <h2 className="text-3xl md:text-5xl font-serif font-bold text-white mb-10 leading-tight">Cookie <br /><span className="italic font-light text-[#A07A41]">Intelligence.</span></h2>
                 <p className="text-gray-400 text-xs md:text-sm leading-relaxed mb-12 italic border-l-2 border-[#A07A41] pl-8">Our website uses cookies to improve functionality and user experience. They help us understand traffic, improve quality, and remember individual preferences.</p>
                 <div className="p-8 bg-[#2A454E]/40 border border-white/10 rounded-[2rem] text-center italic text-gray-500 font-sans text-[10px] uppercase tracking-widest opacity-60">You can disable cookies in your browser settings at any time.</div>
              </div>
           </div>
        </section>

        {/* 6. Data Sharing & 7. Security - BOTTOM-RIGHT FLOW */}
        <section 
          ref={sectionRefs.sharing}
          data-section="sharing"
          className="relative py-24 lg:py-40 bg-[#2A454E] overflow-hidden border-y border-white/5"
        >
           <div className="px-4 sm:px-6 lg:px-8 max-w-[90rem] mx-auto flex flex-col lg:flex-row gap-20 items-center">
              <div className={`lg:w-1/2 transition-all duration-1000 ${visibleSections.sharing ? 'animate-fade-in-left' : 'opacity-0 translate-x-[-150px] translate-y-[150px]'}`}>
                 <h2 className="text-3xl md:text-5xl font-serif font-bold text-white mb-10 leading-tight italic decoration-[#A07A41] underline underline-offset-[16px]">Controlled Sharing.</h2>
                 <p className="text-gray-400 text-sm italic mb-12">We maintain strict boundaries. Data is shared only for regulatory compliance or with verified service partners. <strong className="text-white">Third-party selling is zero.</strong></p>
                 <div className="grid gap-4">
                    {[ "Legal Authorities", "Trusted Providers", "Fraud Prevention" ].map((tag, i) => (
                       <div key={i} className="flex items-center gap-4 group">
                          <CheckCircle size={14} className="text-[#A07A41]" />
                          <span className="text-gray-500 font-sans text-[10px] uppercase tracking-widest font-black group-hover:text-white transition-all">{tag}</span>
                       </div>
                    ))}
                 </div>
              </div>

              <div ref={sectionRefs.security} data-section="security" className={`lg:w-1/2 p-12 md:p-24 bg-[#1B2D33] rounded-[6rem] relative overflow-hidden flex flex-col justify-center border border-white/10 transition-all duration-1000 ${visibleSections.security ? 'animate-fade-in-right' : 'opacity-0 translate-x-[150px] translate-y-[150px]'}`}>
                 <div className="absolute top-0 right-0 p-12 opacity-5 scale-[3] rotate-12"><Lock size={null} className="text-[#A07A41]" /></div>
                 <h3 className="text-white text-2xl md:text-3xl font-serif font-bold mb-10 italic">Data Vault.</h3>
                 <p className="text-gray-400 text-xs md:text-sm leading-relaxed mb-12 italic border-l border-[#A07A41] pl-8">appropriate technical and organizational measures to protect your data from unauthorized access, loss, or misuse.</p>
                 <div className="flex items-center gap-4 text-gray-600 italic font-sans text-[9px] uppercase tracking-widest opacity-50">Note: No online system is 100% secure.</div>
              </div>
           </div>
        </section>

        {/* 8. Your Data Rights - BOTTOM-LEFT FLOW */}
        <section 
          ref={sectionRefs.rights}
          data-section="rights"
          className="relative py-24 lg:py-40 bg-[#1B2D33] overflow-hidden"
        >
           <div className={`px-4 sm:px-6 lg:px-8 max-w-[90rem] mx-auto text-center mb-24 transition-all duration-1000 ${visibleSections.rights ? 'animate-fade-in-up' : 'opacity-0 translate-x-[-150px] translate-y-[150px]'}`}>
              <span className="text-[#A07A41] uppercase tracking-[0.4em] text-[9px] font-black mb-6 block font-serif">Constitutional Metrics</span>
              <h2 className="text-4xl md:text-6xl font-serif font-bold text-white tracking-tight leading-tight">Your Legal <br /><span className="italic font-light text-[#A07A41]">Mandate.</span></h2>
           </div>

           <div className="px-4 sm:px-6 lg:px-8 max-w-[70rem] mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[ "Access personal data", "Request correction", "Request deletion", "Object to processing", "Data portability" ].map((right, i) => (
                 <div key={i} className={`p-10 bg-[#2A454E]/40 border border-white/5 rounded-[3rem] group hover:bg-[#A07A41] transition-all duration-1000 ${visibleSections.rights ? 'animate-fade-in-up' : 'opacity-0 translate-y-[100px]'}`} style={{ animationDelay: `${i * 150}ms` }}>
                    <h4 className="text-white font-serif font-bold text-base md:text-lg uppercase italic group-hover:text-black mb-4 leading-tight">{right}</h4>
                    <ArrowRight className="text-[#A07A41] group-hover:text-black mt-4 ml-auto" size={16} />
                 </div>
              ))}
           </div>
        </section>

        {/* 9. Data Retention - TOP-RIGHT FLOW */}
        <section 
          ref={sectionRefs.retention}
          data-section="retention"
          className="relative py-24 lg:py-40 bg-[#2A454E] overflow-hidden"
        >
           <div className="px-4 sm:px-6 lg:px-8 max-w-[90rem] mx-auto grid lg:grid-cols-2 gap-20 items-center">
              <div className={`transition-all duration-1000 ${visibleSections.retention ? 'animate-fade-in-left' : 'opacity-0 translate-x-[-150px] translate-y-[-150px]'}`}>
                 <h2 className="text-3xl md:text-5xl font-serif font-bold text-white mb-10 leading-tight">Retention <span className="italic font-light text-[#A07A41]">Lifespan.</span></h2>
                 <p className="text-gray-400 text-xs md:text-sm leading-relaxed mb-12 italic border-l-2 border-[#A07A41] pl-10 max-w-md">We retain your data only as long as necessary to provide services, comply with legal obligations, and resolve disputes. Beyond that, strings are cryptographically cleared.</p>
              </div>

              <div className={`p-12 md:p-20 bg-[#1B2D33] rounded-[5rem] overflow-hidden border border-white/10 transition-all duration-1000 ${visibleSections.retention ? 'animate-fade-in-right' : 'opacity-0 translate-x-[150px] translate-y-[-150px]'}`}>
                 <div className="flex flex-col gap-8">
                    {[ "Service Delivery Period", "Legal Compliance Stage", "Dispute Resolution Window", "Secure Terminal Deletion" ].map((step, i) => (
                       <div key={i} className="flex items-center gap-8">
                          <div className="h-2 w-2 bg-[#A07A41] rotate-45"></div>
                          <span className="text-gray-400 font-sans text-xs uppercase tracking-widest font-black italic">{step}</span>
                       </div>
                    ))}
                 </div>
              </div>
           </div>
        </section>

        {/* 10, 11, 12 - TRIAD GRID - MIXED DIRECTIONAL FLOW */}
        <section className="relative py-24 bg-[#1B2D33] overflow-hidden">
           <div className="px-4 sm:px-6 lg:px-8 max-w-[90rem] mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
              <div ref={sectionRefs.thirdparty} data-section="thirdparty" className={`p-12 border border-white/10 rounded-[3rem] group hover:border-[#A07A41] transition-all duration-1000 ${visibleSections.thirdparty ? 'animate-fade-in-left' : 'opacity-0 translate-x-[-100px]'}`}>
                 <ExternalLink className="text-[#A07A41] mb-8" size={24} />
                 <h4 className="text-white font-serif font-bold text-xl uppercase italic mb-6">Third-Party Links.</h4>
                 <p className="text-gray-500 text-xs italic leading-relaxed">Our website may contain links to external websites. We are not responsible for their privacy practices.</p>
              </div>

              <div ref={sectionRefs.children} data-section="children" className={`p-12 border border-white/10 rounded-[3rem] group hover:border-[#A07A41] transition-all duration-1000 ${visibleSections.children ? 'animate-fade-in-up' : 'opacity-0 translate-y-[100px]'}`}>
                 <User className="text-[#A07A41] mb-8" size={24} />
                 <h4 className="text-white font-serif font-bold text-xl uppercase italic mb-6">Children's Privacy.</h4>
                 <p className="text-gray-500 text-xs italic leading-relaxed">Our services are not intended for individuals under 18. We do not knowingly collect data from minors.</p>
              </div>

              <div ref={sectionRefs.legalbasis} data-section="legalbasis" className={`p-12 border border-white/10 rounded-[3rem] bg-[#2A454E]/40 group hover:border-[#A07A41] transition-all duration-1000 ${visibleSections.legalbasis ? 'animate-fade-in-right' : 'opacity-0 translate-x-[100px]'}`}>
                 <Scale className="text-[#A07A41] mb-8" size={24} />
                 <h4 className="text-white font-serif font-bold text-xl uppercase italic mb-6">Legal Basis.</h4>
                 <div className="flex flex-wrap gap-2 italic">
                    {[ "Consent", "Contract", "Legal", "Interests" ].map((tag, i) => (
                       <span key={i} className="px-3 py-1 bg-white/5 border border-[#A07A41]/10 rounded-full text-[8px] font-black uppercase text-gray-500">{tag}</span>
                    ))}
                 </div>
              </div>
           </div>
        </section>

        {/* 13. Framework - BOTTOM-UP FLOW */}
        <section 
          ref={sectionRefs.framework}
          data-section="framework"
          className="relative py-24 lg:py-40 bg-[#2A454E] overflow-hidden"
        >
           <div className={`px-4 sm:px-6 lg:px-8 max-w-[90rem] mx-auto text-center transition-all duration-1000 ${visibleSections.framework ? 'animate-fade-in-up' : 'opacity-0 translate-y-[200px]'}`}>
              <h2 className="text-3xl md:text-5xl font-serif font-bold text-white mb-20 leading-tight">National Legal <br /><span className="italic font-light text-[#A07A41]">Alignment.</span></h2>
              <div className="flex flex-wrap justify-center gap-12">
                 <div className="p-12 bg-[#1B2D33] rounded-[4rem] text-center border border-white/5 relative group transition-all hover:scale-105">
                    <h3 className="text-white text-2xl font-serif font-bold italic mb-4">UK GDPR.</h3>
                    <span className="text-gray-500 text-[10px] font-black uppercase tracking-widest">Global Standards</span>
                 </div>
                 <div className="p-12 bg-[#1B2D33] rounded-[4rem] text-center border border-white/5 relative group transition-all hover:scale-105">
                    <h3 className="text-white text-2xl font-serif font-bold italic mb-4">DPA 2018.</h3>
                    <span className="text-gray-500 text-[10px] font-black uppercase tracking-widest">National Framework</span>
                 </div>
              </div>
           </div>
        </section>

        {/* FAQ SECTION - ACCORDION FLOW */}
        <section className="relative py-24 bg-[#1B2D33] overflow-hidden">
           <div className="px-4 sm:px-6 lg:px-8 max-w-[90rem] mx-auto">
              <div className="text-center mb-16 md:mb-24">
                 <span className="text-[#A07A41] uppercase tracking-[0.4em] text-[9px] font-black mb-6 block font-serif">Data Inquiries</span>
                 <h2 className="text-3xl md:text-5xl font-serif font-bold text-white tracking-tight italic">Privacy <br /><span className="italic font-light text-[#A07A41]">Assurance FAQs.</span></h2>
              </div>

              <div className="max-w-4xl mx-auto space-y-4">
                 {[
                   { q: "Do you sell my personal data to third parties?", a: "No. We never sell, trade, or rent your personal data string to any third-party commercial interests. Data is only shared with regulated authorities or trusted service partners." },
                   { q: "How long is my information stored in your systems?", a: "We retain data only as long as necessary to provide services or meet legal retention requirements under UK law." },
                   { q: "Can I request the permanent deletion of my data?", a: "Yes. Under GDPR, you have the 'Right to Erasure'. You can request a full cryptographic deletion of your personal records at any time." },
                   { q: "Is your platform fully GDPR and DPA 2018 compliant?", a: "Absolutely. Our data architecture is built strictly upon the frameworks of the UK General Data Protection Regulation and the Data Protection Act 2018." }
                 ].map((faq, i) => (
                    <div key={i} className={`border border-[#A07A41]/10 rounded-[2.5rem] bg-[#2A454E]/30 overflow-hidden transition-all duration-700 ${visibleSections.hero ? 'animate-fade-in-up' : 'opacity-0 translate-y-10'}`} style={{ animationDelay: `${i * 150}ms` }}>
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

        {/* 14, 15, 16 - CONTACT & NOTE - TOP-LEFT & BOTTOM-RIGHT FLOW */}

        <section 
           ref={sectionRefs.contact}
           data-section="contact"
           className="relative py-24 lg:py-40 bg-[#1B2D33] overflow-hidden border-t border-white/5"
        >
           <div className="px-4 sm:px-6 lg:px-8 max-w-[90rem] mx-auto grid lg:grid-cols-2 gap-12">
              <div className={`p-12 md:p-20 bg-[#2A454E] rounded-[5rem] overflow-hidden border border-white/10 transition-all duration-1000 ${visibleSections.contact ? 'animate-fade-in-left' : 'opacity-0 translate-x-[-100px] translate-y-[-100px]'}`}>
                 <h2 className="text-3xl md:text-4xl font-serif font-bold text-white mb-12 italic">Governance Contact.</h2>
                 <div className="space-y-10">
                    <div className="flex items-center gap-8">
                       <Mail size={24} className="text-[#A07A41]" />
                       <div>
                          <p className="text-white font-serif font-bold text-lg md:text-xl italic">legal@hsco.co</p>
                          <span className="text-gray-500 text-[9px] uppercase font-black">Official Privacy Desk</span>
                       </div>
                    </div>
                    <div className="flex items-center gap-8 opacity-40">
                       <Globe size={24} className="text-[#A07A41]" />
                       <span className="text-gray-500 font-sans text-xs uppercase tracking-widest font-black italic">H&S CO Legal Services, UK.</span>
                    </div>
                 </div>
                 <div ref={sectionRefs.changes} data-section="changes" className="mt-20 pt-10 border-t border-white/5 text-[9px] font-black uppercase text-gray-500 italic opacity-40">Policy Updated: April 2024</div>
              </div>

              <div ref={sectionRefs.finalnote} data-section="finalnote" className={`p-12 md:p-20 bg-[#A07A41] text-black rounded-[5rem] flex flex-col justify-center transition-all duration-1000 ${visibleSections.finalnote ? 'animate-fade-in-right' : 'opacity-0 translate-x-[100px] translate-y-[100px]'}`}>
                 <AlertCircle size={40} className="mb-10 text-black/40" />
                 <h3 className="text-2xl md:text-4xl font-serif font-bold mb-8 italic italic tracking-tighter leading-tight font-black uppercase">Your data is handled <br /> with strict confidentiality.</h3>
                 <p className="text-black/70 text-sm md:text-base leading-relaxed italic border-l-4 border-black/20 pl-8 font-serif">Transparency is our supreme standard. We value client trust above all metrics.</p>
              </div>
           </div>
        </section>

      </main>
    </div>
  );
};

export default PrivacyPolicyPage;
