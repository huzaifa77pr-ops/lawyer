import React, { useEffect, useState, useRef } from 'react';
import { 
  ArrowRight, Search, CheckCircle, Zap, Database, 
  Shield, FileText, ChevronDown, Award, Briefcase, Target, 
  ShieldAlert, ClipboardCheck, Layers, FileSearch, 
  ShoppingBag, Smartphone, Globe, Lock, Settings, Users, 
  Scale, ShieldCheck, Clock, ExternalLink, FileSignature
} from 'lucide-react';


const TermsConditionsDraftingPage = () => {
  const [activeFaq, setActiveFaq] = useState(null);
  const [visibleSections, setVisibleSections] = useState({
    hero: false,
    intro: false,
    scope: false,
    features: false,
    process: false,
    who: false,
    areas: false,
    quality: false,
    cta: false,
    faq: false
  });

  const sectionRefs = {
    hero: useRef(null),
    intro: useRef(null),
    scope: useRef(null),
    features: useRef(null),
    process: useRef(null),
    who: useRef(null),
    areas: useRef(null),
    quality: useRef(null),
    cta: useRef(null),
    faq: useRef(null)
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

  const scopeItems = [
    { title: "Website Terms & Conditions", icon: Globe, desc: "Standard and customized T&Cs for general websites and informational platforms." },
    { title: "App Terms of Use", icon: Smartphone, desc: "Mobile-optimized user agreements focusing on subscription and usage rights." },
    { title: "E-commerce T&Cs", icon: ShoppingBag, desc: "Transactional terms covering returns, shipping, and consumer rights." },
    { title: "SaaS Platform Terms", icon: Database, desc: "Complex multi-user platform agreements for software delivery models." },
    { title: "User Agreements", icon: Users, desc: "Broad user-centric agreements for communities and social networks." },
    { title: "Review & Redrafting", icon: FileSearch, desc: "Professional auditing and updating of existing stale Terms & Conditions." }
  ];

  const valuePoints = [
    { title: "UK-Compliant Drafting", icon: Shield },
    { title: "Enforceable Language", icon: Scale },
    { title: "Business Customisation", icon: Target },
    { title: "Liability Coverage", icon: ShieldAlert },
    { title: "GDPR Alignment", icon: Lock },
    { title: "Fast Turnaround", icon: Clock }
  ];

  const faqItems = [
    { q: "Do you draft Terms & Conditions in line with UK law?", a: "Yes, all our Terms & Conditions are drafted strictly in accordance with applicable UK legal standards and consumer protection regulations." },
    { q: "Can you tailor Terms to different business models?", a: "Absolutely. Each set of Terms is uniquely customized to reflect the specific operational flow, billing model, and risk profile of the business." },
    { q: "Do you include GDPR-related provisions?", a: "Yes, where the business handles personal data, we integrate a core focus on data protection and privacy alignment into the drafting process." },
    { q: "What is the typical turnaround time?", a: "Standard Terms & Conditions are typically delivered within 24 to 48 hours, depending on the complexity of the platform." }
  ];

  return (
    <div className="min-h-screen bg-[#2A454E] flex flex-col overflow-x-hidden text-white font-sans">
      <main className="flex-grow">
        
        {/* 1. Hero Section */}
        <section 
          ref={sectionRefs.hero}
          data-section="hero"
          className="relative min-h-[100vh] flex items-center pt-32 pb-24 overflow-hidden bg-[#1B2D33]"
        >
          <div className="absolute inset-0 z-0 opacity-40 group">
             <img src="/thero.jpg" alt="Terms & Conditions" className="w-full h-full object-cover transition-transform duration-[20s] group-hover:scale-110" />
             <div className="absolute inset-0 bg-gradient-to-t from-[#2A454E] via-[#2A454E]/70 to-transparent"></div>
          </div>


          <div className="relative z-10 px-4 sm:px-6 lg:px-8 max-w-[90rem] mx-auto w-full">
            <div className="max-w-4xl mx-auto lg:mx-0 text-center lg:text-left">
              <div className={`flex items-center justify-center lg:justify-start gap-4 mb-6 transition-all duration-1000 ${visibleSections.hero ? 'animate-fade-in-right' : 'opacity-0'}`}>
                <div className="h-[1px] w-12 bg-[#A07A41]"></div>
                <span className="text-[#A07A41] uppercase tracking-[0.4em] text-[10px] font-bold">Structural Legal Support</span>
              </div>
              
              <h1 className={`text-4xl md:text-5xl lg:text-7xl font-serif font-bold text-white leading-tight mb-8 tracking-tight transition-all duration-1000 ${visibleSections.hero ? 'opacity-100' : 'opacity-0'}`}>
                <span className="block animate-fade-in-top-left">Terms & Conditions</span>
                <span className="block italic font-light text-[#A07A41] animate-fade-in-up animation-delay-200">Drafting Services.</span>
              </h1>
              
              <p className={`text-gray-300 text-base md:text-xl font-sans font-light leading-relaxed max-w-2xl mb-12 border-l-2 border-[#A07A41]/30 pl-8 transition-all duration-1000 ${visibleSections.hero ? 'animate-fade-in-left animation-delay-400' : 'opacity-0'}`}>
                Clear, compliant, and business-focused legal documentation. We provide specialized drafting support for UK law firms seeking enforceable and robust Terms & Conditions.
              </p>

              <div className={`flex flex-wrap justify-center lg:justify-start gap-6 transition-all duration-1000 ${visibleSections.hero ? 'animate-fade-in-up animation-delay-600' : 'opacity-0'}`}>
                <a href="#contact" className="group relative inline-flex items-center justify-center gap-3 px-8 py-4 bg-[#A07A41] text-black font-bold uppercase tracking-widest text-[11px] rounded-xl transition-all duration-500 hover:bg-white hover:scale-105 shadow-2xl w-full sm:w-auto">
                  <span>Request a Quote</span>
                  <ArrowRight className="h-4 w-4 group-hover:translate-x-2 transition-transform" />
                </a>
                <a href="#contact" className="group relative inline-flex items-center justify-center gap-3 px-8 py-4 border border-white/20 text-white font-bold uppercase tracking-widest text-[11px] rounded-xl transition-all duration-500 hover:border-[#A07A41] hover:text-[#A07A41] w-full sm:w-auto">
                  <span>Contact Us</span>
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* 2. Introduction / Overview */}
        <section 
          ref={sectionRefs.intro}
          data-section="intro"
          className="relative py-24 lg:py-40 bg-[#2A454E] overflow-hidden"
        >
          <div className="px-4 sm:px-6 lg:px-8 max-w-[90rem] mx-auto z-10 relative">
            <div className={`grid lg:grid-cols-2 gap-20 items-center ${visibleSections.intro ? 'animate-fade-in-bottom-right' : 'opacity-0'}`}>
              
              <div className="relative group p-4 border border-[#A07A41]/20 rounded-[4rem]">
                <div className="aspect-[4/5] rounded-[3.5rem] overflow-hidden bg-[#2A454E] relative">
                   <img src="/t1.jpg" alt="Formal Legal Analysis" className="w-full h-full object-cover transition-all duration-1000 group-hover:scale-105 grayscale group-hover:grayscale-0" />
                   <div className="absolute inset-0 bg-gradient-to-tr from-[#1B2D33] via-transparent to-transparent"></div>
                </div>
              </div>


              <div className={`${visibleSections.intro ? 'animate-fade-in-top-left' : 'opacity-0'}`}>
                <div className="flex items-center gap-4 mb-8">
                  <div className="h-[1px] w-12 bg-[#A07A41]"></div>
                  <span className="text-[#A07A41] uppercase tracking-[0.4em] text-xs font-bold">Authoritative Documentation</span>
                </div>
                <h2 className="text-3xl md:text-5xl font-serif font-bold text-white leading-tight mb-8">
                  The Foundation of <br />
                  <span className="italic font-light text-[#A07A41]">Business Enforceability.</span>
                </h2>
                <div className="space-y-6">
                  <p className="text-gray-300 text-lg font-sans font-light leading-relaxed">
                    Terms & Conditions are more than just a formality; they are the contractual framework that protects a business from risk and litigation. We act as a professional drafting support provider for UK solicitors and law firms, ensuring every document is clear, enforceable, and compliant.
                  </p>
                  <p className="text-gray-300 text-lg font-sans font-light leading-relaxed">
                    By focusing on the specific risks associated with each business model—whether e-commerce, SaaS, or professional services—we deliver robust protection that stands up to legal scrutiny.
                  </p>
                  <div className="flex items-center gap-10 pt-8">
                     <div className="text-center group">
                        <Award className="h-10 w-10 text-[#A07A41] mx-auto mb-3 group-hover:scale-110 transition-transform" />
                        <p className="text-[10px] uppercase tracking-widest text-gray-400 font-bold">Risk Audited</p>
                     </div>
                     <div className="h-12 w-[1px] bg-white/10"></div>
                     <div className="text-center group">
                        <ShieldCheck className="h-10 w-10 text-[#A07A41] mx-auto mb-3 group-hover:scale-110 transition-transform" />
                        <p className="text-[10px] uppercase tracking-widest text-gray-400 font-bold">Enforceable</p>
                     </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 3. Scope of Services */}
        <section 
          ref={sectionRefs.scope}
          data-section="scope"
          className="relative py-24 lg:py-40 bg-[#1B2D33] overflow-hidden border-y border-white/5"
        >
          <div className="px-4 sm:px-6 lg:px-8 max-w-[90rem] mx-auto text-center mb-24">
             <span className={`text-[#A07A41] uppercase tracking-[0.4em] text-[10px] font-bold mb-6 block ${visibleSections.scope ? 'animate-fade-in-up' : 'opacity-0'}`}>Service Modules</span>
             <h2 className={`text-4xl md:text-6xl font-serif font-bold text-white tracking-tight ${visibleSections.scope ? 'animate-fade-in-up' : 'opacity-0'}`}>Scope of <span className="italic font-light text-[#A07A41]">Services.</span></h2>
          </div>

          <div className="px-4 sm:px-6 lg:px-8 max-w-[90rem] mx-auto grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {scopeItems.map((item, i) => (
              <div 
                key={i} 
                className={`group p-12 bg-[#2A454E]/30 border border-white/5 rounded-[2.5rem] hover:bg-[#2A454E]/60 hover:border-[#A07A41]/30 transition-all duration-500 overflow-hidden relative ${visibleSections.scope ? (i%2===0 ? 'animate-fade-in-top-left' : 'animate-fade-in-bottom-right') : 'opacity-0'}`}
                style={{ animationDelay: `${i * 100}ms` }}
              >
                 <div className="relative z-10 text-center">
                    <item.icon className="h-10 w-10 text-[#A07A41] mx-auto mb-8 transition-all duration-500 group-hover:scale-110" />
                    <h3 className="text-2xl font-serif font-bold text-white mb-6 tracking-tight group-hover:text-[#A07A41] transition-colors">{item.title}</h3>
                    <p className="text-gray-400 font-sans font-light leading-relaxed text-sm">{item.desc}</p>
                 </div>
                 <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-[#A07A41]/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
              </div>
            ))}
          </div>
        </section>

        {/* 4. Key Features / Value Proposition */}
        <section 
          ref={sectionRefs.features}
          data-section="features"
          className="relative py-24 lg:py-40 bg-[#2A454E] overflow-hidden"
        >
          <div className="px-4 sm:px-6 lg:px-8 max-w-[90rem] mx-auto">
             <div className="grid lg:grid-cols-2 gap-20 items-center">
                <div className={`${visibleSections.features ? 'animate-fade-in-left' : 'opacity-0'}`}>
                   <span className="text-[#A07A41] uppercase tracking-[0.4em] text-xs font-bold mb-6 block font-serif">Value Proposition</span>
                   <h2 className="text-3xl md:text-5xl font-serif font-bold text-white mb-12">Precise Control Over <br /><span className="italic font-light text-[#A07A41]">Contractual Risk.</span></h2>
                   <div className="grid sm:grid-cols-2 gap-x-12 gap-y-10">
                      {valuePoints.map((point, i) => (
                        <div key={i} className="flex items-center gap-4 group">
                           <CheckCircle size={18} className="text-[#A07A41] group-hover:scale-125 transition-transform" />
                           <span className="text-gray-200 font-serif font-bold text-sm tracking-wide">{point.title}</span>
                        </div>
                      ))}
                   </div>
                </div>
                <div className={`${visibleSections.features ? 'animate-fade-in-right' : 'opacity-0'}`}>
                   <div className="relative p-12 lg:p-20 bg-[#1B2D33] rounded-[4rem] border border-[#A07A41]/10 overflow-hidden shadow-2xl backdrop-blur-xl group hover:border-[#A07A41]/30 transition-all">
                      <div className="absolute top-0 right-0 p-10 opacity-5 group-hover:opacity-10 transition-opacity"><Scale size={300} className="text-[#A07A41]" /></div>
                      <h4 className="text-3xl font-serif font-bold text-white mb-8 relative z-10 italic">Strategic. Compliant. <br /><span className="text-[#A07A41]">Bulletproof.</span></h4>
                      <p className="text-gray-400 font-sans font-light leading-relaxed mb-10 relative z-10">
                         We eliminate the clutter of generic legal templates, drafting Terms that reflect the commercial reality of your clients&apos; businesses.
                      </p>
                      <div className="h-1 lg:w-40 bg-[#A07A41] rounded-full group-hover:w-full transition-all duration-1000"></div>
                   </div>
                </div>
             </div>
          </div>
        </section>

        {/* 5. Our Process */}
        <section 
          ref={sectionRefs.process}
          data-section="process"
          className="relative py-24 lg:py-40 bg-[#1B2D33] overflow-hidden border-y border-white/5"
        >
          <div className="px-4 sm:px-6 lg:px-8 max-w-[90rem] mx-auto text-center mb-24">
             <span className={`text-[#A07A41] uppercase tracking-[0.5em] text-[10px] font-bold mb-6 block ${visibleSections.process ? 'animate-fade-in-up' : 'opacity-0'}`}>Workflow Strategy</span>
             <h2 className={`text-3xl md:text-5xl font-serif font-bold text-white tracking-tight ${visibleSections.process ? 'animate-fade-in-up' : 'opacity-0'}`}>Our Professional <span className="italic font-light text-[#A07A41]">Process.</span></h2>
          </div>

          <div className="px-4 sm:px-6 lg:px-8 max-w-[90rem] mx-auto grid md:grid-cols-5 gap-6">
             {[
               { step: "01", title: "Business Intake", icon: ClipboardCheck },
               { step: "02", title: "Model Review", icon: Target },
               { step: "03", title: "T&C Drafting", icon: FileSignature },
               { step: "04", title: "Quality Audit", icon: ShieldCheck },
               { step: "05", title: "Final Delivery", icon: CheckCircle }
             ].map((item, i) => (
               <div key={i} className={`flex flex-col items-center text-center p-10 bg-[#2A454E]/20 border border-white/5 rounded-[2.5rem] transition-all duration-500 hover:bg-[#2A454E]/40 group ${visibleSections.process ? 'animate-fade-in-up' : 'opacity-0'}`} style={{ animationDelay: `${i * 150}ms` }}>
                  <div className="w-12 h-12 bg-[#1B2D33] rounded-xl flex items-center justify-center mb-10 border border-[#A07A41]/10 group-hover:bg-[#A07A41] transition-all">
                     <item.icon className="h-5 w-5 text-[#A07A41] group-hover:text-black transition-colors" />
                  </div>
                  <span className="text-[#A07A41] font-bold italic text-xs mb-4 tracking-[0.2em]">{item.step}</span>
                  <h4 className="text-white font-serif font-bold text-sm tracking-tight leading-snug">{item.title}</h4>
               </div>
             ))}
          </div>
        </section>

        {/* 6. Who We Work With */}
        <section 
          ref={sectionRefs.who}
          data-section="who"
          className="relative py-24 lg:py-40 bg-[#2A454E] overflow-hidden"
        >
          <div className="px-4 sm:px-6 lg:px-8 max-w-[90rem] mx-auto">
             <div className="grid lg:grid-cols-2 gap-24 items-center">
                <div className={`${visibleSections.who ? 'animate-fade-in-top-left' : 'opacity-0'}`}>
                   <img src="/t2.jpg" alt="Partnership Context" className="w-full aspect-square object-cover rounded-[4rem] grayscale hover:grayscale-0 transition-all duration-1000 shadow-2xl" />
                </div>

                <div className={`${visibleSections.who ? 'animate-fade-in-bottom-right' : 'opacity-0'}`}>
                   <span className="text-[#A07A41] uppercase tracking-[0.4em] text-xs font-bold mb-8 block font-serif">Collaboration Network</span>
                   <h2 className="text-3xl md:text-5xl font-serif font-bold text-white mb-10 tracking-tight leading-tight">Who We <span className="italic font-light text-[#A07A41]">Work With.</span></h2>
                   <div className="grid sm:grid-cols-2 gap-4">
                      {[ "UK Law Firms", "Solicitors", "E-commerce Businesses", "SaaS Platforms", "Legal Consultants" ].map((item, i) => (
                        <div key={i} className="flex items-center gap-4 p-6 bg-[#1B2D33] border border-white/5 rounded-2xl group transition-all hover:bg-[#A07A41] hover:-translate-y-1">
                           <Users size={18} className="text-[#A07A41] group-hover:text-black" />
                           <span className="text-gray-300 font-bold uppercase tracking-widest text-[10px] group-hover:text-black">{item}</span>
                        </div>
                      ))}
                   </div>
                </div>
             </div>
          </div>
        </section>

        {/* 7. Key Areas Covered */}
        <section 
          ref={sectionRefs.areas}
          data-section="areas"
          className="relative py-24 lg:py-40 bg-[#1B2D33] overflow-hidden border-y border-white/5"
        >
          <div className="max-w-[80rem] mx-auto px-4 sm:px-6 lg:px-8 flex flex-col lg:flex-row gap-12 items-center mb-24 text-center lg:text-left">
             <div className={`w-full lg:w-1/2 ${visibleSections.areas ? 'animate-fade-in-left' : 'opacity-0'}`}>
                <span className="text-[#A07A41] uppercase tracking-[0.4em] text-[10px] font-bold mb-6 block">Legal Roadmap</span>
                <h2 className="text-4xl md:text-6xl font-serif font-bold text-white tracking-tight">Key Areas <span className="italic font-light text-[#A07A41]">Covered.</span></h2>
             </div>
             <div className={`w-full lg:w-1/2 ${visibleSections.areas ? 'animate-fade-in-right' : 'opacity-0'}`}>
                <div className="aspect-video rounded-[2.5rem] overflow-hidden border border-white/10 group relative">
                   <img src="/t3.jpg" alt="Legal Depth" className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-1000" />
                   <div className="absolute inset-0 bg-gradient-to-t from-[#1B2D33]/60 via-transparent to-transparent"></div>
                </div>
             </div>
          </div>


          <div className="max-w-[80rem] mx-auto px-4 sm:px-6 lg:px-8 grid md:grid-cols-2 lg:grid-cols-3 gap-6">
             {[
               "User obligations and acceptable use policies",
               "Robust limitation of liability & disclaimer clauses",
               "Comprehensive intellectual property rights protection",
               "Detailed payment terms, billing, and refunds",
               "Termination, suspension, and account exit rights",
               "Governing law, jurisdiction, and dispute resolution",
               "GDPR and data privacy integration points"
             ].map((text, i) => (
               <div key={i} className={`p-8 bg-[#2A454E]/30 border border-white/5 rounded-3xl hover:border-[#A07A41]/30 transition-all group ${visibleSections.areas ? 'animate-fade-in-up' : 'opacity-0'}`} style={{ animationDelay: `${i * 100}ms` }}>
                  <div className="h-2 w-12 bg-[#A07A41]/20 group-hover:bg-[#A07A41] transition-all mb-6"></div>
                  <p className="text-gray-300 font-serif font-bold italic text-sm md:text-base leading-relaxed tracking-wide group-hover:text-white transition-colors">{text}</p>
               </div>
             ))}
          </div>
        </section>

        {/* 8. Quality & Compliance Statement */}
        <section 
          ref={sectionRefs.quality}
          data-section="quality"
          className="relative py-20 bg-[#2A454E] border-b border-white/5"
        >
          <div className="max-w-[60rem] mx-auto px-4 sm:px-6 lg:px-8 text-center">
             <div className={`${visibleSections.quality ? 'animate-fade-in-up' : 'opacity-0'}`}>
                <ShieldAlert className="h-16 w-16 text-[#A07A41] mx-auto mb-10 animate-pulse" />
                <h3 className="text-gray-300 text-lg md:text-2xl font-serif font-light leading-relaxed italic border-t border-white/5 pt-12">
                   &quot;All Terms & Conditions are drafted with a strong focus on legal accuracy, clarity, and alignment with UK regulations. We ensure documents are commercially practical while providing robust legal protection.&quot;
                </h3>
             </div>
          </div>
        </section>

        {/* 10. FAQ Section */}
        <section 
          ref={sectionRefs.faq}
          data-section="faq"
          className="relative py-24 lg:py-40 bg-[#1B2D33] overflow-hidden"
        >
          <div className="relative z-10 px-4 sm:px-6 lg:px-8 max-w-[50rem] mx-auto">
            <div className={`text-center mb-24 ${visibleSections.faq ? 'animate-fade-in-top-left' : 'opacity-0'}`}>
              <span className="text-[#A07A41] uppercase tracking-[0.3em] text-[10px] font-bold mb-6 block">Structural Assurance</span>
              <h2 className="text-3xl md:text-5xl font-serif font-bold text-white tracking-tight">Common <span className="italic font-light text-[#A07A41]">Questions.</span></h2>
            </div>

            <div className="space-y-4">
              {faqItems.map((faq, index) => (
                <div 
                  key={index} 
                  className={`border border-[#A07A41]/10 rounded-2xl bg-[#2A454E]/30 overflow-hidden ${visibleSections.faq ? (index%2===0 ? 'animate-fade-in-left' : 'animate-fade-in-right') : 'opacity-0'}`} 
                  style={{ animationDelay: `${index * 150}ms` }}
                >
                  <button 
                    onClick={() => setActiveFaq(activeFaq === index ? null : index)}
                    className="w-full p-8 flex items-center justify-between group"
                  >
                    <span className={`text-left text-lg font-serif transition-colors ${activeFaq === index ? 'text-[#A07A41]' : 'text-gray-200'}`}>{faq.q}</span>
                    <div className={`shrink-0 p-2 rounded-full border border-white/10 group-hover:border-[#A07A41] transition-all duration-300 ${activeFaq === index ? 'bg-[#A07A41] border-[#A07A41] rotate-180' : ''}`}>
                      <ChevronDown className={`h-4 w-4 transition-colors ${activeFaq === index ? 'text-black' : 'text-[#A07A41]'}`} />
                    </div>
                  </button>
                  <div className={`transition-all duration-500 ease-in-out px-8 ${activeFaq === index ? 'max-h-96 pb-8 opacity-100' : 'max-h-0 opacity-0 overflow-hidden'}`}>
                    <p className="text-gray-400 text-sm md:text-base font-sans font-light leading-relaxed border-l border-[#A07A41]/30 pl-6 italic">{faq.a}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 9. Full Call to Action (CTA) */}
        <section 
          ref={sectionRefs.cta}
          data-section="cta"
          className="relative py-24 lg:py-40 bg-[#2A454E] overflow-hidden"
        >
          <div className="absolute top-0 right-0 w-1/2 h-full bg-[#A07A41]/5 blur-[150px] rounded-full"></div>
          <div className="relative z-10 px-4 sm:px-6 lg:px-8 max-w-[90rem] mx-auto text-center">
            <div className={`max-w-4xl mx-auto p-16 lg:p-24 bg-[#1B2D33]/60 border border-[#A07A41]/10 rounded-[4rem] backdrop-blur-2xl relative overflow-hidden shadow-2xl ${visibleSections.cta ? 'animate-fade-in-up' : 'opacity-0'}`}>
              <span className="text-[#A07A41] uppercase tracking-[0.4em] text-[10px] font-bold mb-8 block">Execution Ready</span>
              <h2 className="text-4xl md:text-6xl font-serif font-bold text-white mb-10 leading-tight tracking-tight">Need Professionally Drafted <br /><span className="italic font-light text-[#A07A41]">Terms & Conditions?</span></h2>
              <p className="text-gray-400 font-sans text-lg mb-12 max-w-2xl mx-auto leading-relaxed border-t border-white/5 pt-10">
                Partner with H&S Co. Today for commercially practical, legally robust Terms & Conditions tailored for your clients.
              </p>
              <div className="flex flex-col sm:flex-row justify-center items-center gap-8">
                <a href="#contact" className="group relative flex items-center justify-center gap-3 px-10 py-5 bg-[#A07A41] text-black font-bold uppercase tracking-widest text-[11px] rounded-xl transition-all duration-500 hover:scale-105 hover:bg-white shadow-2xl w-full sm:w-auto">
                  <span>Request a Quote</span>
                  <ArrowRight className="h-4 w-4 group-hover:translate-x-1.5 transition-transform" />
                </a>
                <a href="#contact" className="group relative flex items-center justify-center gap-3 px-10 py-5 border border-white/20 text-white font-bold uppercase tracking-widest text-[11px] rounded-xl transition-all duration-500 hover:border-[#A07A41] hover:text-[#A07A41] w-full sm:w-auto">
                  <span>Get in Touch</span>
                </a>
              </div>
            </div>
          </div>
        </section>

      </main>
    </div>
  );
};

export default TermsConditionsDraftingPage;
