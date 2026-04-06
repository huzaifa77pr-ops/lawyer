import React, { useEffect, useState, useRef } from 'react';
import { 
  ArrowRight, Search, CheckCircle, Zap, Database, 
  Shield, FileText, ChevronDown, Award, Briefcase, Target, 
  ShieldAlert, ClipboardCheck, Layers, FileSearch, 
  Cookie, Lock, Settings, Users, Activity, Layout, 
  Globe, ShieldCheck, Clock, Mail, Bell, ExternalLink
} from 'lucide-react';

const CookiePolicyPage = () => {
  const [visibleSections, setVisibleSections] = useState({
    hero: false,
    intro: false,
    whatAre: false,
    howWeUse: false,
    types: false,
    thirdParty: false,
    legalBasis: false,
    managing: false,
    privacy: false,
    updates: false,
    contact: false
  });

  const sectionRefs = {
    hero: useRef(null),
    intro: useRef(null),
    whatAre: useRef(null),
    howWeUse: useRef(null),
    types: useRef(null),
    thirdParty: useRef(null),
    legalBasis: useRef(null),
    managing: useRef(null),
    privacy: useRef(null),
    updates: useRef(null),
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

  const cookieTypes = [
    { title: "Essential Cookies", icon: Lock, desc: "Necessary for the website to function properly, including page navigation and secure access areas." },
    { title: "Performance & Analytics", icon: Activity, desc: "Used to track page visits and measure traffic, helping us improve content and performance." },
    { title: "Functionality Cookies", icon: Settings, desc: "Allow the website to remember your preferences, such as language settings and user preferences." },
    { title: "Security Cookies", icon: Shield, desc: "Enhance website security and prevent malicious activity or unauthorized access." }
  ];

  return (
    <div className="min-h-screen bg-[#2A454E] flex flex-col overflow-x-hidden text-white font-sans">
      <main className="flex-grow">
        
        {/* 1. Hero Section */}
        <section 
          ref={sectionRefs.hero}
          data-section="hero"
          className="relative min-h-[70vh] flex items-center pt-32 pb-24 overflow-hidden bg-[#1B2D33]"
        >
          <div className="absolute inset-0 z-0 opacity-20 group">
             <img src="/coo.jpg" alt="Cookie Policy" className="w-full h-full object-cover transition-transform duration-[20s] group-hover:scale-110" />
             <div className="absolute inset-0 bg-gradient-to-t from-[#2A454E] via-[#2A454E]/70 to-transparent"></div>
          </div>


          <div className="relative z-10 px-4 sm:px-6 lg:px-8 max-w-[90rem] mx-auto w-full text-center">
            <div className="max-w-4xl mx-auto">
              <div className={`flex items-center justify-center gap-4 mb-6 transition-all duration-1000 ${visibleSections.hero ? 'animate-fade-in-up' : 'opacity-0'}`}>
                <div className="h-[1px] w-12 bg-[#A07A41]"></div>
                <span className="text-[#A07A41] uppercase tracking-[0.4em] text-[10px] font-bold">Policy & Compliance</span>
              </div>
              
              <h1 className={`text-4xl md:text-5xl lg:text-7xl font-serif font-bold text-white leading-tight mb-8 tracking-tight transition-all duration-1000 ${visibleSections.hero ? 'opacity-100' : 'opacity-0'}`}>
                <span className="block animate-fade-in-top-left">Cookie</span>
                <span className="block italic font-light text-[#A07A41] animate-fade-in-up animation-delay-200">Policy.</span>
              </h1>
              
              <p className={`text-gray-300 text-base md:text-xl font-sans font-light leading-relaxed max-w-2xl mx-auto mb-12 transition-all duration-1000 ${visibleSections.hero ? 'animate-fade-in-up animation-delay-400' : 'opacity-0'}`}>
                Explaining how H&S CO uses cookies and similar technologies to enhance your experience and provide secure, efficient legal support.
              </p>
            </div>
          </div>
        </section>

        {/* 2. Introduction */}
        <section 
          ref={sectionRefs.intro}
          data-section="intro"
          className="relative py-24 bg-[#2A454E] overflow-hidden border-b border-white/5 text-center"
        >
           <div className="px-4 sm:px-6 lg:px-8 max-w-[50rem] mx-auto">
              <div className={`${visibleSections.intro ? 'animate-fade-in-up' : 'opacity-0'}`}>
                 <h2 className="text-3xl md:text-5xl font-serif font-bold text-white mb-8">Introduction for <span className="italic font-light text-[#A07A41]">H&S CO.</span></h2>
                 <p className="text-gray-300 text-lg font-sans font-light leading-relaxed mb-8 border-t border-white/5 pt-8">
                    This Cookie Policy explains how H&S CO (“we”, “our”, or “us”) uses cookies and similar technologies on our website. By using our website, you agree to the use of cookies in accordance with this policy.
                 </p>
              </div>
           </div>
        </section>

        {/* 3. What Are Cookies */}
        <section 
          ref={sectionRefs.whatAre}
          data-section="whatAre"
          className="relative py-24 lg:py-40 bg-[#1B2D33] overflow-hidden border-y border-white/5"
        >
          <div className="px-4 sm:px-6 lg:px-8 max-w-[90rem] mx-auto grid lg:grid-cols-2 gap-20 items-center">
             <div className={`${visibleSections.whatAre ? 'animate-fade-in-left' : 'opacity-0'}`}>
                <span className="text-[#A07A41] uppercase tracking-[0.4em] text-xs font-bold mb-6 block font-serif">Terminology</span>
                <h2 className="text-3xl md:text-5xl font-serif font-bold text-white mb-8 leading-tight">What Exactly <br /><span className="italic font-light text-[#A07A41]">Are Cookies?</span></h2>
                <div className="space-y-6">
                   <p className="text-gray-300 text-lg leading-relaxed font-light">
                      Cookies are small text files stored on your device when you visit a website. They help websites function properly, improve user experience, and provide information to site owners.
                   </p>
                   <div className="grid sm:grid-cols-2 gap-6 pt-6">
                      <div className="p-8 bg-[#2A454E]/30 border border-[#A07A41]/20 rounded-3xl group transition-all hover:bg-[#A07A41]/10">
                         <h4 className="text-white font-serif font-bold text-xl mb-3">Session Cookies</h4>
                         <p className="text-gray-400 text-sm font-light leading-relaxed italic">Deleted automatically after you close your browser.</p>
                      </div>
                      <div className="p-8 bg-[#2A454E]/30 border border-[#A07A41]/20 rounded-3xl group transition-all hover:bg-[#A07A41]/10">
                         <h4 className="text-white font-serif font-bold text-xl mb-3">Persistent Cookies</h4>
                         <p className="text-gray-400 text-sm font-light leading-relaxed italic">Stored for a defined period on your local device.</p>
                      </div>
                   </div>
                </div>
             </div>
             <div className={`${visibleSections.whatAre ? 'animate-fade-in-right' : 'opacity-0'}`}>
                <div className="relative p-8 border border-[#A07A41]/20 rounded-[4rem]">
                   <div className="aspect-[4/3] rounded-[3.5rem] overflow-hidden grayscale hover:grayscale-0 transition-all duration-1000 group relative">
                      <img src="/coo1.jpg" alt="Cookies Technology" className="w-full h-full object-cover transition-transform duration-[10s] group-hover:scale-110" />
                      <div className="absolute inset-0 bg-gradient-to-tr from-[#1B2D33] via-transparent to-transparent"></div>
                   </div>
                </div>

             </div>
          </div>
        </section>

        {/* 4. How We Use Cookies */}
        <section 
          ref={sectionRefs.howWeUse}
          data-section="howWeUse"
          className="relative py-24 lg:py-40 bg-[#2A454E] overflow-hidden"
        >
          <div className="px-4 sm:px-6 lg:px-8 max-w-[90rem] mx-auto text-center mb-24">
             <span className={`text-[#A07A41] uppercase tracking-[0.4em] text-[10px] font-bold mb-6 block ${visibleSections.howWeUse ? 'animate-fade-in-up' : 'opacity-0'}`}>Operational Purpose</span>
             <h2 className={`text-4xl md:text-6xl font-serif font-bold text-white tracking-tight ${visibleSections.howWeUse ? 'animate-fade-in-up' : 'opacity-0'}`}>How We <span className="italic font-light text-[#A07A41]">Use Cookies.</span></h2>
          </div>

          <div className="px-4 sm:px-6 lg:px-8 max-w-[80rem] mx-auto grid md:grid-cols-2 lg:grid-cols-4 gap-4">
             {[
               { title: "Functionality", icon: Layout, text: "Ensuring proper website functionality and navigation." },
               { title: "Optimization", icon: Zap, text: "Improving website performance and usability." },
               { title: "Analysis", icon: Activity, text: "Analyzing user behavior and site traffic patterns." },
               { title: "Security", icon: ShieldAlert, text: "Enhancing security and preventing malicious fraud." }
             ].map((item, i) => (
               <div key={i} className={`p-10 bg-[#1B2D33] border border-white/5 rounded-3xl group hover:border-[#A07A41]/30 transition-all ${visibleSections.howWeUse ? 'animate-fade-in-up' : 'opacity-0'}`} style={{ animationDelay: `${i * 150}ms` }}>
                  <item.icon className="h-8 w-8 text-[#A07A41] mb-8 transition-transform group-hover:scale-110" />
                  <h4 className="text-white font-serif font-bold text-xl mb-4">{item.title}</h4>
                  <p className="text-gray-400 text-sm font-light leading-relaxed">{item.text}</p>
               </div>
             ))}
          </div>

          <div className="px-4 sm:px-6 lg:px-8 max-w-[50rem] mx-auto mt-20">
             <div className="p-8 bg-[#1B2D33]/60 border border-[#A07A41]/30 rounded-[2rem] flex flex-col sm:flex-row items-center gap-8 backdrop-blur-xl relative overflow-hidden group">
                <div className="w-16 h-16 rounded-2xl bg-[#A07A41] flex items-center justify-center shrink-0">
                   <ShieldCheck className="text-black h-8 w-8" />
                </div>
                <p className="text-gray-200 font-serif font-bold italic text-lg leading-relaxed">
                   We do not use cookies to store sensitive personal information or highly confidential client data.
                </p>
             </div>
          </div>
        </section>

        {/* 5. Types of Cookies */}
        <section 
          ref={sectionRefs.types}
          data-section="types"
          className="relative py-24 lg:py-40 bg-[#1B2D33] overflow-hidden border-y border-white/5"
        >
          <div className="px-4 sm:px-6 lg:px-8 max-w-[90rem] mx-auto text-center mb-24">
             <span className={`text-[#A07A41] uppercase tracking-[0.4em] text-xs font-bold mb-6 block ${visibleSections.types ? 'animate-fade-in-up' : 'opacity-0'}`}>Cookie Inventory</span>
             <h2 className={`text-3xl md:text-5xl font-serif font-bold text-white tracking-tight ${visibleSections.types ? 'animate-fade-in-up' : 'opacity-0'}`}>Types of <span className="italic font-light text-[#A07A41]">Cookies We Use.</span></h2>
          </div>

          <div className="px-4 sm:px-6 lg:px-8 max-w-[90rem] mx-auto grid md:grid-cols-2 gap-8">
             {cookieTypes.map((cookie, i) => (
               <div key={i} className={`p-12 bg-[#2A454E]/30 border border-white/10 rounded-[3rem] hover:bg-[#2A454E]/50 group transition-all duration-500 flex flex-col sm:flex-row gap-10 items-center sm:items-start text-center sm:text-left ${visibleSections.types ? (i%2===0 ? 'animate-fade-in-left' : 'animate-fade-in-right') : 'opacity-0'}`} style={{ animationDelay: `${i * 100}ms` }}>
                  <div className="w-16 h-16 bg-[#1B2D33] rounded-2xl flex items-center justify-center shrink-0 border border-[#A07A41]/10 group-hover:bg-[#A07A41] transition-all duration-500">
                     <cookie.icon className="h-7 w-7 text-[#A07A41] group-hover:text-black transition-colors" />
                  </div>
                  <div>
                     <h3 className="text-white font-serif font-bold text-2xl mb-4 group-hover:text-[#A07A41] transition-colors">{cookie.title}</h3>
                     <p className="text-gray-400 font-sans font-light leading-relaxed">{cookie.desc}</p>
                  </div>
               </div>
             ))}
          </div>
        </section>

        {/* 6. Third-Party Cookies */}
        <section 
          ref={sectionRefs.thirdParty}
          data-section="thirdParty"
          className="relative py-24 lg:py-40 bg-[#2A454E] overflow-hidden"
        >
          <div className="px-4 sm:px-6 lg:px-8 max-w-[90rem] mx-auto grid lg:grid-cols-2 gap-24 items-center">
             <div className={`${visibleSections.thirdParty ? 'animate-fade-in-left' : 'opacity-0'}`}>
                <div className="aspect-square rounded-[4rem] overflow-hidden border border-[#A07A41]/20 group relative shadow-2xl">
                   <img src="/coo2.jpg" alt="Third Party Tech" className="w-full h-full object-cover transition-all duration-[20s] group-hover:scale-110 grayscale group-hover:grayscale-0" />
                   <div className="absolute inset-0 bg-[#A07A41]/10 mix-blend-overlay"></div>
                </div>

             </div>
             <div className={`${visibleSections.thirdParty ? 'animate-fade-in-right' : 'opacity-0'}`}>
                <span className="text-[#A07A41] uppercase tracking-[0.4em] text-xs font-bold mb-6 block font-serif">External Services</span>
                <h2 className="text-3xl md:text-5xl font-serif font-bold text-white mb-10 leading-tight tracking-tight">Third-Party <br /><span className="italic font-light text-[#A07A41]">Cookie Integration.</span></h2>
                <div className="space-y-8">
                   <p className="text-gray-300 text-lg leading-relaxed font-light italic border-l-2 border-[#A07A41]/40 pl-8">
                      We may use third-party services that place cookies on your device for analytics or functionality purposes, such as website analytics and performance monitoring.
                   </p>
                   <p className="text-gray-400 font-sans font-light leading-relaxed">
                      Please note that we do not control these cookies directly. We recommend checking individual third-party privacy policies for detailed information on their data handling practices.
                   </p>
                </div>
             </div>
          </div>
        </section>

        {/* 7. Legal Basis & Managing */}
        <section 
          ref={sectionRefs.legalBasis}
          data-section="legalBasis"
          className="relative py-24 lg:py-40 bg-[#1B2D33] overflow-hidden border-y border-white/5"
        >
          <div className="px-4 sm:px-6 lg:px-8 max-w-[90rem] mx-auto grid lg:grid-cols-2 gap-12">
             {/* 6. Legal Basis */}
             <div className={`p-12 bg-[#2A454E]/30 rounded-[3rem] border border-white/10 ${visibleSections.legalBasis ? 'animate-fade-in-left' : 'opacity-0'}`}>
                <span className="text-[#A07A41] uppercase tracking-[0.4em] text-[10px] font-bold mb-6 block">Regulatory Framework</span>
                <h3 className="text-3xl font-serif font-bold text-white mb-8">Legal Basis <br /><span className="italic font-light text-[#A07A41]">For Use.</span></h3>
                <div className="space-y-6">
                   <div className="flex items-center gap-4 group">
                      <CheckCircle size={16} className="text-[#A07A41]" />
                      <span className="text-gray-300 font-bold uppercase tracking-widest text-[10px]">UK GDPR Accordance</span>
                   </div>
                   <div className="flex items-center gap-4 group">
                      <CheckCircle size={16} className="text-[#A07A41]" />
                      <span className="text-gray-300 font-bold uppercase tracking-widest text-[10px]">Data Protection Act 2018</span>
                   </div>
                   <p className="text-gray-400 text-sm font-light mt-6 leading-relaxed border-t border-white/5 pt-6 italic">
                      Where required, we obtain your explicit consent before placing non-essential cookies.
                   </p>
                </div>
             </div>

             {/* 7. Managing Preferences */}
             <div className={`p-12 bg-[#2A454E]/30 rounded-[3rem] border border-[#A07A41]/10 ${visibleSections.legalBasis ? 'animate-fade-in-right' : 'opacity-0'}`}>
                <span className="text-[#A07A41] uppercase tracking-[0.4em] text-[10px] font-bold mb-6 block">User Control</span>
                <h3 className="text-3xl font-serif font-bold text-white mb-8">Managing Your <br /><span className="italic font-light text-[#A07A41]">Preferences.</span></h3>
                <p className="text-gray-400 text-sm font-light mb-8 italic">
                   You can manage cookies by adjusting browser settings to block or delete them. Disabling cookies may affect website functionality.
                </p>
                <div className="flex flex-wrap gap-4">
                   {[ "Block Cookies", "Delete History", "Privacy Settings" ].map((btn, i) => (
                     <div key={i} className="px-6 py-3 border border-white/10 rounded-full text-[9px] uppercase tracking-widest font-bold text-gray-300 group hover:border-[#A07A41] hover:text-[#A07A41] transition-all cursor-crosshair">
                        {btn}
                     </div>
                   ))}
                </div>
             </div>
          </div>
        </section>

        {/* 8. Data Protection & Privacy */}
        <section 
          ref={sectionRefs.privacy}
          data-section="privacy"
          className="relative py-28 bg-[#2A454E] overflow-hidden border-b border-white/5"
        >
          <div className="px-4 sm:px-6 lg:px-8 max-w-[90rem] mx-auto text-center">
             <div className={`${visibleSections.privacy ? 'animate-fade-in-up' : 'opacity-0'}`}>
                <Shield size={48} className="text-[#A07A41] mx-auto mb-10 opacity-30" />
                <h3 className="text-gray-300 text-lg md:text-2xl font-serif font-light leading-relaxed max-w-4xl mx-auto border-t border-white/5 pt-12 italic">
                   For more information on how we handle your personal data, please refer to our full <span className="text-[#A07A41] font-bold underline decoration-[#A07A41]/30 underline-offset-8 cursor-pointer hover:text-white transition-colors">Privacy Policy.</span>
                </h3>
             </div>
          </div>
        </section>

        {/* 9. Updates to Policy */}
        <section 
          ref={sectionRefs.updates}
          data-section="updates"
          className="relative py-24 lg:py-40 bg-[#1B2D33] overflow-hidden"
        >
          <div className="px-4 sm:px-6 lg:px-8 max-w-[90rem] mx-auto grid lg:grid-cols-2 gap-24 items-center">
             <div className={`${visibleSections.updates ? 'animate-fade-in-left' : 'opacity-0'}`}>
                <Bell size={40} className="text-[#A07A41] mb-8" />
                <h2 className="text-3xl md:text-5xl font-serif font-bold text-white mb-8 tracking-tight">Updates to <br /><span className="italic font-light text-[#A07A41]">This Policy.</span></h2>
                <p className="text-gray-400 text-lg font-sans font-light leading-relaxed border-l-2 border-[#A07A41]/30 pl-8 mb-10">
                   We may update this Cookie Policy from time to time to reflect changes in legal requirements or our practices. We recommend reviewing this page periodically.
                </p>
                <div className="inline-flex items-center gap-4 p-4 bg-[#2A454E]/30 border border-white/5 rounded-2xl group hover:border-[#A07A41]/30 transition-all cursor-default">
                   <Clock className="h-5 w-5 text-[#A07A41]" />
                   <span className="text-gray-300 font-bold uppercase tracking-widest text-[9px]">Last Update: April 2024</span>
                </div>
             </div>
             <div className={`${visibleSections.updates ? 'animate-fade-in-right' : 'opacity-0'}`}>
                <div className="aspect-video rounded-[3rem] overflow-hidden group relative border border-white/5">
                   <img src="/coo3.jpg" alt="Policy Updates" className="w-full h-full object-cover grayscale transition-all duration-[10s] group-hover:scale-105" />
                   <div className="absolute inset-0 bg-gradient-to-t from-[#1B2D33] via-transparent to-transparent opacity-60"></div>
                </div>

             </div>
          </div>
        </section>

        {/* 10. Contact Us */}
        <section 
          ref={sectionRefs.contact}
          data-section="contact"
          className="relative py-24 lg:py-40 bg-[#2A454E] overflow-hidden"
        >
          <div className="relative z-10 px-4 sm:px-6 lg:px-8 max-w-[90rem] mx-auto text-center">
            <div className={`max-w-4xl mx-auto p-16 lg:p-24 bg-[#1B2D33]/60 border border-[#A07A41]/10 rounded-[4rem] backdrop-blur-2xl relative overflow-hidden shadow-2xl ${visibleSections.contact ? 'animate-fade-in-up' : 'opacity-0'}`}>
              <span className="text-[#A07A41] uppercase tracking-[0.4em] text-[10px] font-bold mb-8 block">Policy Inquiries</span>
              <h2 className="text-4xl md:text-6xl font-serif font-bold text-white mb-10 leading-tight tracking-tight">Have Any <span className="italic font-light text-[#A07A41]">Questions?</span></h2>
              
              <div className="max-w-md mx-auto space-y-8 mb-16">
                 <div className="flex items-center justify-center gap-6 p-6 bg-[#2A454E]/40 border border-white/5 rounded-3xl group hover:border-[#A07A41]/30 transition-all">
                    <Mail className="h-6 w-6 text-[#A07A41]" />
                    <span className="text-white font-serif font-bold italic text-lg tracking-wide hover:text-[#A07A41] cursor-pointer">support@hsco.uk</span>
                 </div>
                 <div className="flex items-center justify-center gap-6 p-6 bg-[#2A454E]/40 border border-white/5 rounded-3xl group hover:border-[#A07A41]/30 transition-all">
                    <Globe size={24} className="text-[#A07A41]" />
                    <span className="text-white font-serif font-bold italic text-lg tracking-wide">www.hsco.uk</span>
                 </div>
              </div>

              <div className="flex flex-col sm:flex-row justify-center items-center gap-8">
                <a href="#contact" className="group relative flex items-center justify-center gap-3 px-10 py-5 bg-[#A07A41] text-black font-bold uppercase tracking-widest text-[11px] rounded-xl transition-all duration-500 hover:scale-105 hover:bg-white shadow-2xl w-full sm:w-auto">
                  <span>Contact Our Team</span>
                  <ArrowRight className="h-4 w-4 group-hover:translate-x-1.5 transition-transform" />
                </a>
              </div>
            </div>
          </div>
        </section>

      </main>
    </div>
  );
};

export default CookiePolicyPage;
