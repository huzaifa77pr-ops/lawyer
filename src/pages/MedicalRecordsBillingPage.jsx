import React, { useEffect, useState, useRef } from 'react';
import { 
  ArrowRight, Search, CheckCircle, Shield, FileText, ChevronDown, 
  Activity, Database, Layout, Lock, FileSearch, Scale, Clock, 
  Briefcase, Landmark, Users, ClipboardCheck, TrendingUp, 
  AlertCircle, ShieldCheck, HeartPulse, Stethoscope, FileClock,
  ShieldAlert, Zap, HeartPulse as HeartPulseIcon
} from 'lucide-react';

const MedicalRecordsBillingPage = () => {
  const [activeFaq, setActiveFaq] = useState(null);
  const [visibleSections, setVisibleSections] = useState({
    hero: false,
    why: false,
    services: false,
    howItWorks: false,
    whoNeeds: false,
    benefits: false,
    security: false,
    faq: false,
    cta: false
  });

  const sectionRefs = {
    hero: useRef(null),
    why: useRef(null),
    services: useRef(null),
    howItWorks: useRef(null),
    whoNeeds: useRef(null),
    benefits: useRef(null),
    security: useRef(null),
    faq: useRef(null),
    cta: useRef(null)
  };

  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = "Medical Records & Billing Management UK | H&S Co.";

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

  const coreServicesLabels = [
    {
      title: "Medical Billing Management",
      desc: "Comprehensive insurance claim processing, invoice generation, and correction to reduce error cycles.",
      list: ["Insurance claim processing", "Invoice generation & correction", "Payment tracking", "Error reduction"],
      icon: Activity,
      anim: "animate-fade-in-top-left"
    },
    {
      title: "Medical Records Management",
      desc: "Structured digital organization of patient records with secure storage, retrieval, and accuracy verification.",
      list: ["Digital record organization", "Secure storage & retrieval", "Data accuracy verification", "Record maintenance"],
      icon: Database,
      anim: "animate-fade-in-up"
    },
    {
      title: "Compliance & Data Security",
      desc: "GDPR-compliant handling with secure access controls and audit-ready systems for sensitive healthcare data.",
      list: ["GDPR-compliant handling", "Secure access control", "Data protection", "Audit-ready systems"],
      icon: ShieldCheck,
      anim: "animate-fade-in-top-right"
    },
    {
      title: "Reporting & Analytics",
      desc: "In-depth billing performance reports and revenue tracking to identify and resolve rejection patterns.",
      list: ["Performance reports", "Revenue tracking", "Error analysis", "Claim rejection analysis"],
      icon: TrendingUp,
      anim: "animate-fade-in-bottom-left"
    }
  ];

  const processSteps = [
    { step: "Step 1", title: "Onboarding", desc: "We understand your clinic/hospital workflow and specific data requirements." },
    { step: "Step 2", title: "Data Integration", desc: "We integrate with your existing system or set up secure record management." },
    { step: "Step 3", title: "Processing & Management", desc: "We handle billing, claims, and records daily with pinpoint accuracy." },
    { step: "Step 4", title: "Reporting & Support", desc: "Receive regular performance reports and continuous system support." }
  ];

  const whoNeedsList = [
    { name: "Private clinics", icon: HeartPulse },
    { name: "Hospitals", icon: Landmark },
    { name: "Dental practices", icon: Stethoscope },
    { name: "Diagnostic labs", icon: Activity },
    { name: "Physiotherapy centers", icon: Users },
    { name: "Insurance billing pods", icon: Briefcase }
  ];

  const benefitsList = [
    { t: "Reduced billing errors", d: "Minimize financial leakage and maximize claim accuracy.", i: AlertCircle },
    { t: "Faster insurance claims", d: "Accelerate revenue cycles with refined documentation.", i: Clock },
    { t: "Improved cash flow", d: "Get paid faster with error-free billing procedures.", i: TrendingUp },
    { t: "Full GDPR compliance", d: "Strict adherence to UK healthcare data protection laws.", i: ShieldCheck },
    { t: "Secure digital handling", d: "Advanced encryption and access control for records.", i: Lock },
    { t: "Less admin workload", d: "Free up your clinical staff for patient-focused care.", i: Briefcase }
  ];

  const securityStds = [
    { title: "GDPR Compliance", desc: "Full adherence to the General Data Protection Regulation (UK).", icon: ShieldCheck },
    { title: "Encrypted Storage", desc: "Military-grade encryption for all patient data and billing records.", icon: Lock },
    { title: "Access Controls", desc: "Role-based access systems to prevent unauthorized data viewing.", icon: Users },
    { title: "Audit Logs", desc: "Detailed tracking and monitoring of all record interaction.", icon: FileSearch },
    { title: "Confidentiality", desc: "Strict NDAs and sensitive handling protocols for all data.", icon: Shield },
    { title: "UK Standards", desc: "Compliance with NHS and private insurance data policies.", icon: Landmark }
  ];

  return (
    <div className="min-h-screen bg-[#2A454E] flex flex-col overflow-x-hidden text-white font-sans">
      <main className="flex-grow">
        
        {/* 1. HERO SECTION */}
        <section 
          ref={sectionRefs.hero}
          data-section="hero"
          className="relative min-h-[90vh] flex items-center pt-32 pb-24 overflow-hidden bg-[#1B2D33]"
        >
          {/* Background Layers */}
          <div className="absolute inset-0 z-0">
             <img src="/medicalhero.jpg" alt="Medical Background" className="w-full h-full object-cover opacity-20 scale-105" />
             <div className="absolute inset-0 bg-gradient-to-r from-[#1B2D33] via-[#1B2D33]/80 to-transparent"></div>
             <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#2A454E]/20 to-[#2A454E]"></div>
          </div>

          <div className="relative z-10 px-4 sm:px-6 lg:px-8 max-w-[90rem] mx-auto w-full">
            <div className="grid lg:grid-cols-12 gap-16 items-center">
              <div className="lg:col-span-8">
                <div className={`flex items-center gap-6 mb-10 transition-all duration-1000 ${visibleSections.hero ? 'animate-fade-in-right' : 'opacity-0'}`}>
                  <div className="h-[2px] w-12 bg-[#A07A41]"></div>
                  <span className="text-[#A07A41] uppercase tracking-[0.2em] text-xs font-bold font-sans">Healthcare Data Solutions</span>
                </div>
                
                <h1 className={`text-4xl sm:text-5xl md:text-6xl font-serif font-bold text-white leading-[1.1] mb-6 tracking-tight transition-all duration-1000 ${visibleSections.hero ? 'opacity-100' : 'opacity-0'}`}>
                  <span className="block animate-fade-in-top-left">Secure Medical Records</span>
                  <span className="block italic font-light text-[#A07A41] animate-fade-in-up animation-delay-200">& Billing Management</span>
                </h1>
                
                <p className={`text-base md:text-lg text-gray-300 font-sans font-light leading-relaxed max-w-2xl mb-10 transition-all duration-1000 ${visibleSections.hero ? 'animate-fade-in-left animation-delay-400' : 'opacity-0'}`}>
                   Accurate, compliant, and confidential healthcare data handling for clinics, hospitals, and private practices across the UK.
                </p>

                <div className={`flex flex-col sm:flex-row gap-8 transition-all duration-1000 ${visibleSections.hero ? 'animate-fade-in-up animation-delay-600' : 'opacity-0'}`}>
                   <div className="group flex items-center gap-5 p-4 bg-[#A07A41]/10 border border-[#A07A41]/30 rounded-2xl backdrop-blur-sm">
                      <div className="p-3 bg-[#A07A41] rounded-xl text-black">
                        <ShieldCheck className="h-6 w-6" />
                      </div>
                      <div>
                        <p className="text-[#A07A41] font-black uppercase tracking-widest text-[9px] mb-1">Full Compliance</p>
                        <p className="text-white font-serif italic text-base whitespace-nowrap">UK Healthcare Data Standards.</p>
                      </div>
                   </div>
                   
                   <div className="flex items-center gap-6">
                      <button className="px-8 py-4 bg-[#1B2D33] border border-white/10 text-white font-bold tracking-widest uppercase text-xs md:text-sm rounded transition-all duration-300 hover:bg-[#A07A41] shadow-xl md:w-fit group flex items-center gap-4">
                        <span>Request Service Access</span>
                        <ArrowRight className="h-4 w-4 transform group-hover:translate-x-2 transition-transform" />
                      </button>
                      <button className="text-white font-bold uppercase tracking-[0.2em] text-[10px] border-b border-[#A07A41] pb-1 hover:text-[#A07A41] transition-colors">
                        Talk to a Specialist
                      </button>
                   </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 2. WHY THIS SERVICE EXISTS */}
        <section 
          ref={sectionRefs.why}
          data-section="why"
          className="relative py-24 lg:py-40 bg-[#2A454E] overflow-hidden"
        >
          <div className="px-4 sm:px-6 lg:px-8 max-w-[90rem] mx-auto relative z-10">
            <div className="grid lg:grid-cols-2 gap-20 items-center">
              <div className={`${visibleSections.why ? 'animate-fade-in-left' : 'opacity-0'}`}>
                <div className="flex items-center gap-4 mb-8">
                  <div className="h-[1px] w-12 bg-[#A07A41]"></div>
                  <span className="text-[#A07A41] uppercase tracking-[0.4em] text-xs font-bold">The Challenge</span>
                </div>
                <h2 className="text-3xl md:text-5xl font-serif font-bold text-white leading-tight mb-8">
                  Why Medical Records & <br />
                  <span className="italic font-light text-[#A07A41]">Billing Management Matters</span>
                </h2>
                <div className="space-y-8 mb-10">
                  <p className="text-gray-300 text-base md:text-lg font-sans font-light leading-relaxed">
                    Healthcare providers lose significant time and revenue due to systemic administrative challenges. Disorganized records and billing errors compromise patient care and profitability.
                  </p>
                  
                  <div className="space-y-4">
                    {[
                      "Billing errors and claim rejections",
                      "Disorganized patient records",
                      "NHS/private insurance documentation issues",
                      "Compliance risks (GDPR / UK data laws)",
                      "Manual administrative workload"
                    ].map((item, i) => (
                      <div key={i} className="flex items-center gap-4 p-4 bg-[#1B2D33] border border-white/5 rounded-xl hover:translate-x-3 transition-transform duration-300">
                        <div className="w-1.5 h-1.5 rounded-full bg-[#A07A41]"></div>
                        <span className="text-gray-300 font-medium text-sm">{item}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="p-8 bg-[#2A454E]/50 backdrop-blur-xl border-l-4 border-[#A07A41] rounded-r-2xl relative overflow-hidden group">
                  <div className="relative z-10 flex items-start gap-4">
                     <Zap className="h-6 w-6 text-[#A07A41] shrink-0 mt-1" />
                     <p className="text-lg font-serif italic text-white leading-tight">
                       Our Solution: <span className="text-[#A07A41] font-bold underline decoration-[#A07A41]/30 underline-offset-8">Structured digital management systems.</span>
                     </p>
                  </div>
                </div>
              </div>

              <div className={`relative ${visibleSections.why ? 'animate-fade-in-bottom-right' : 'opacity-0'}`}>
                <div className="aspect-[4/5] rounded-[3rem] overflow-hidden border border-[#A07A41]/20 relative bg-[#2A454E] flex items-center justify-center">
                   <img src="/me1.jpg" alt="Organized medical data" className="w-full h-full object-cover grayscale opacity-60 hover:grayscale-0 hover:opacity-100 transition-all duration-1000" />
                   <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-[#1B2D33]/40 to-[#1B2D33]"></div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 3. CORE SERVICES SECTION */}
        <section 
          ref={sectionRefs.services}
          data-section="services"
          className="relative py-24 lg:py-40 bg-[#1B2D33] overflow-hidden border-y border-white/5"
        >
          <div className="px-4 sm:px-6 lg:px-8 max-w-[90rem] mx-auto">
            <div className={`mb-24 transition-all duration-1000 ${visibleSections.services ? 'animate-fade-in-up' : 'opacity-0'}`}>
               <div className="max-w-3xl border-l-[3px] border-[#A07A41] pl-8">
                  <span className="text-[#A07A41] uppercase tracking-[0.4em] text-xs font-bold mb-4 block">Main SEO Boost</span>
                  <h2 className="text-3xl md:text-6xl font-serif font-bold text-white tracking-tight">Primary <span className="italic font-light text-[#A07A41]">Management Solutions.</span></h2>
               </div>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {coreServicesLabels.map((service, i) => (
                <div 
                  key={i} 
                  className={`group relative p-10 bg-[#2A454E]/30 border border-white/5 rounded-3xl hover:-translate-y-2 hover:bg-[#2A454E]/60 hover:border-[#A07A41]/30 transition-all duration-500 overflow-hidden ${visibleSections.services ? service.anim : 'opacity-0'}`}
                  style={{ animationDelay: `${i * 150}ms` }}
                >
                  <div className="absolute -bottom-10 -right-20 opacity-[0.03] group-hover:opacity-[0.1] transition-all duration-700 group-hover:scale-125">
                    <service.icon size={200} className="text-[#A07A41]" />
                  </div>
                  
                  <div className="relative z-10 flex flex-col h-full">
                    <div className="flex justify-between items-start mb-8">
                      <div className="w-14 h-14 bg-[#1B2D33] rounded-xl flex items-center justify-center group-hover:bg-[#A07A41] transition-colors duration-500 border border-[#A07A41]/10 group-hover:border-transparent">
                        <service.icon className="h-6 w-6 text-[#A07A41] group-hover:text-black transition-colors" />
                      </div>
                      <span className="text-white/20 font-serif italic text-3xl font-bold group-hover:text-[#A07A41]/30 transition-colors">0{i+1}</span>
                    </div>
                    
                    <h3 className="text-2xl font-serif font-bold text-white mb-4 leading-tight group-hover:text-[#A07A41] transition-colors">{service.title}</h3>
                    <p className="text-gray-400 font-sans font-light leading-relaxed mb-8 flex-grow">
                      {service.desc}
                    </p>
                    <ul className="space-y-3 w-full border-t border-white/5 pt-6">
                      {service.list.map((item, idx) => (
                        <li key={idx} className="flex items-center gap-3 text-[11px] text-gray-400 font-medium group-hover:text-gray-200 transition-colors">
                          <CheckCircle size={10} className="text-[#A07A41]" />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 4. HOW IT WORKS */}
        <section 
          ref={sectionRefs.howItWorks}
          data-section="howItWorks"
          className="relative py-24 lg:py-40 bg-[#2A454E] border-y border-white/5 overflow-hidden"
        >
          <div className="px-4 sm:px-6 lg:px-8 max-w-[90rem] mx-auto">
            <div className="grid lg:grid-cols-2 gap-20 items-center">
              <div className={`${visibleSections.howItWorks ? 'animate-fade-in-top-left' : 'opacity-0'}`}>
                <div className="mb-16">
                  <span className="text-[#A07A41] uppercase tracking-[0.4em] text-xs font-bold mb-4 block">Process Flow</span>
                  <h2 className="text-3xl md:text-5xl font-serif font-bold text-white mb-6">How Our <span className="italic font-light text-[#A07A41]">System Works.</span></h2>
                </div>
                
                <div className="space-y-6 relative border-l border-white/10 ml-4 py-4">
                  {processSteps.map((step, i) => (
                    <div key={i} className={`relative pl-10 ${visibleSections.howItWorks ? 'animate-fade-in-left' : 'opacity-0'}`} style={{ animationDelay: `${i * 150}ms` }}>
                      <div className="absolute -left-2 top-1 w-4 h-4 bg-[#2A454E] border-2 border-[#A07A41] rounded-full shadow-[0_0_15px_rgba(160,122,65,0.4)]"></div>
                      <span className="block text-[#A07A41] font-bold text-[10px] uppercase tracking-widest mb-1">{step.step}</span>
                      <h4 className="text-xl font-serif font-bold text-gray-200 tracking-tight">{step.title}</h4>
                      <p className="text-gray-400 font-light text-sm max-w-sm mt-2">{step.desc}</p>
                    </div>
                  ))}
                </div>
              </div>

              <div className={`${visibleSections.howItWorks ? 'animate-fade-in-bottom-right' : 'opacity-0'}`}>
                <div className="aspect-video w-full rounded-[2rem] bg-[#1B2D33] border border-white/10 flex items-center justify-center relative overflow-hidden shadow-2xl group">
                   <img src="/h1.jpg" alt="Medical System Workflow" className="w-full h-full object-cover object-center transition-all duration-1000 group-hover:scale-105 grayscale group-hover:grayscale-0" />
                   <div className="absolute inset-0 bg-gradient-to-r from-transparent via-[#2A454E]/40 to-[#2A454E] opacity-40 pointer-events-none"></div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 5. WHO THIS IS FOR */}
        <section 
          ref={sectionRefs.whoNeeds}
          data-section="whoNeeds"
          className="py-24 lg:py-40 bg-[#2A454E] overflow-hidden"
        >
          <div className="px-4 sm:px-6 lg:px-8 max-w-[90rem] mx-auto text-center">
            <div className={`mb-16 ${visibleSections.whoNeeds ? 'animate-fade-in-up' : 'opacity-0'}`}>
              <span className="text-[#A07A41] uppercase tracking-[0.4em] text-xs font-bold mb-6 block">SEO Targeting</span>
              <h2 className="text-3xl md:text-5xl font-serif font-bold text-white mb-8">Who Uses <span className="italic font-light text-[#A07A41]">This Service?</span></h2>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
              {whoNeedsList.map((item, i) => {
                const Icon = item.icon;
                return (
                  <div 
                    key={i} 
                    className={`p-8 bg-[#1B2D33] border border-white/10 rounded-3xl flex flex-col items-center gap-6 hover:bg-[#A07A41]/10 hover:border-[#A07A41]/30 transition-all duration-300 group ${visibleSections.whoNeeds ? 'animate-fade-in-up' : 'opacity-0'}`} 
                    style={{ animationDelay: `${i * 100}ms` }}
                  >
                    <div className="w-16 h-16 rounded-2xl bg-[#2A454E] flex items-center justify-center group-hover:bg-[#A07A41] transition-all duration-500 shadow-lg group-hover:shadow-[#A07A41]/20">
                      <Icon className="h-8 w-8 text-[#A07A41] group-hover:text-black transition-colors" />
                    </div>
                    <span className="text-white font-serif font-bold text-sm tracking-wide">{item.name}</span>
                  </div>
                );
              })}
            </div>
            
            <div className={`mt-20 p-8 bg-[#1B2D33] border border-[#A07A41]/20 rounded-2xl inline-flex items-center gap-4 ${visibleSections.whoNeeds ? 'animate-fade-in-up animation-delay-500' : 'opacity-0'}`}>
              <ArrowRight className="text-[#A07A41] h-6 w-6" />
              <p className="text-[#A07A41] font-serif italic text-xl">
                 If you manage patient data or billing, this service applies to you.
              </p>
            </div>
          </div>
        </section>

        {/* 6. BENEFITS SECTION */}
        <section 
          ref={sectionRefs.benefits}
          data-section="benefits"
          className="relative py-24 lg:py-32 bg-[#1B2D33] overflow-hidden border-t border-white/5"
        >
          <div className="px-4 sm:px-6 lg:px-8 max-w-[90rem] mx-auto">
             <div className="bg-[#2A454E]/40 border border-[#A07A41]/20 rounded-[3rem] p-10 lg:p-20 relative overflow-hidden shadow-2xl">
                <div className={`text-center mb-16 relative z-10 ${visibleSections.benefits ? 'animate-fade-in-up' : 'opacity-0'}`}>
                   <span className="text-[#A07A41] uppercase tracking-[0.4em] text-xs font-bold mb-4 block">Conversion Driver</span>
                   <h2 className="text-3xl md:text-5xl font-serif font-bold text-white leading-tight">Key <span className="italic font-light text-[#A07A41]">Benefits.</span></h2>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 relative z-10">
                   {benefitsList.map((item, i) => {
                      const Icon = item.i;
                      return (
                        <div 
                          key={i} 
                          className={`p-8 bg-[#2A454E] rounded-3xl border border-white/5 hover:border-[#A07A41]/50 transition-all duration-300 ${visibleSections.benefits ? 'animate-fade-in-up' : 'opacity-0'}`}
                          style={{ animationDelay: `${i * 150}ms` }}
                        >
                           <Icon className="text-[#A07A41] h-8 w-8 mb-6" />
                           <h4 className="text-xl font-serif font-bold text-white mb-4 tracking-tight leading-snug">{item.t}</h4>
                           <p className="text-gray-400 font-sans font-light text-sm leading-relaxed">{item.d}</p>
                        </div>
                      );
                   })}
                </div>
                
                <div className="mt-16 text-center pt-12 border-t border-white/5 relative z-10">
                   <p className="text-[#A07A41] font-serif italic text-2xl tracking-wide">
                      Focus is simple: you save time and reduce financial leakage.
                   </p>
                </div>
             </div>
          </div>
        </section>

        {/* 7. SECURITY & COMPLIANCE */}
        <section 
          ref={sectionRefs.security}
          data-section="security"
          className="relative py-24 lg:py-40 bg-[#2A454E] overflow-hidden border-b border-white/5"
        >
          <div className="px-4 sm:px-6 lg:px-8 max-w-[90rem] mx-auto text-center mb-24">
             <div className={`${visibleSections.security ? 'animate-fade-in-up' : 'opacity-0'}`}>
                <span className="text-[#A07A41] uppercase tracking-[0.4em] text-xs font-bold mb-6 block">Critical Trust Section</span>
                <h2 className="text-3xl md:text-5xl font-serif font-bold text-white tracking-tight leading-tight">
                  Data Security <br /><span className="italic font-light text-[#A07A41]">& Compliance Standards.</span>
                </h2>
             </div>
          </div>

          <div className="px-4 sm:px-6 lg:px-8 max-w-[70rem] mx-auto grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-20">
             {securityStds.map((item, i) => {
               const Icon = item.icon;
               return (
                 <div 
                   key={i} 
                   className={`p-10 bg-[#1B2D33] border border-white/5 rounded-3xl flex flex-col items-center text-center group hover:bg-[#A07A41]/10 hover:border-[#A07A41]/30 transition-all duration-500 ${visibleSections.security ? 'animate-fade-in-up' : 'opacity-0'}`}
                   style={{ animationDelay: `${i * 100}ms` }}
                 >
                   <div className="w-14 h-14 rounded-2xl bg-[#2A454E] flex items-center justify-center mb-6 group-hover:bg-[#A07A41] transition-all duration-500">
                     <Icon className="h-6 w-6 text-[#A07A41] group-hover:text-black transition-colors" />
                   </div>
                   <h4 className="text-white font-serif font-bold text-lg mb-3 tracking-wide">{item.title}</h4>
                   <p className="text-gray-400 text-xs font-light leading-relaxed">{item.desc}</p>
                 </div>
               );
             })}
          </div>

          <div className={`px-4 max-w-4xl mx-auto ${visibleSections.security ? 'animate-fade-in-bottom-right' : 'opacity-0'}`}>
            <div className="p-10 bg-red-500/5 border border-red-500/20 rounded-3xl flex flex-col md:flex-row items-center gap-8 shadow-2xl backdrop-blur-sm">
              <div className="p-5 bg-red-500/10 rounded-full shrink-0">
                <ShieldAlert className="h-10 w-10 text-red-500 animate-pulse" />
              </div>
              <p className="text-gray-200 font-serif italic text-xl md:text-2xl text-center md:text-left leading-tight">
                We treat healthcare data as <span className="text-red-400 font-bold">highly sensitive</span> and never compromise on security standards.
              </p>
            </div>
          </div>
        </section>

        {/* 8. FAQ SECTION */}
        <section 
          ref={sectionRefs.faq}
          data-section="faq"
          className="relative py-24 lg:py-40 bg-[#2A454E] overflow-hidden"
        >
          <div className="relative z-10 px-4 sm:px-6 lg:px-8 max-w-[50rem] mx-auto">
            <div className={`text-center mb-24 ${visibleSections.faq ? 'animate-fade-in-top-left' : 'opacity-0'}`}>
              <span className="text-[#A07A41] uppercase tracking-[0.3em] text-[10px] font-bold mb-6 block">SEO Boost</span>
              <h2 className="text-3xl md:text-5xl font-serif font-bold text-white tracking-tight">Frequently Asked <span className="italic font-light text-[#A07A41]">Questions.</span></h2>
            </div>

            <div className="space-y-4">
              {[
                { q: "Do you handle NHS data?", a: "We support healthcare systems that comply with UK regulations and data policies, ensuring safe handling of NHS-related administrative tasks." },
                { q: "Is patient data secure?", a: "Yes, we use encrypted and access-controlled systems that meet the rigorous standards of UK healthcare data protection." },
                { q: "Can you integrate with existing software?", a: "Yes, we can work with most medical billing and EHR (Electronic Health Record) systems currently used in the UK." },
                { q: "Do you handle small clinics?", a: "Yes, our services are fully scalable, catering to small private practices as well as larger hospitals." },
                { q: "How fast can we start?", a: "Onboarding usually begins within a few days after an initial system and workflow assessment." }
              ].map((faq, index) => (
                <div 
                  key={index} 
                  className={`border border-[#A07A41]/10 rounded-2xl bg-[#1B2D33] overflow-hidden transition-all duration-300 hover:border-[#A07A41]/30 ${visibleSections.faq ? (index % 2 === 0 ? 'animate-fade-in-left' : 'animate-fade-in-right') : 'opacity-0'}`}
                  style={{ animationDelay: `${index * 150}ms` }}
                >
                  <button 
                    onClick={() => setActiveFaq(activeFaq === index ? null : index)}
                    className="w-full p-8 flex items-center justify-between group text-left"
                  >
                    <span className={`text-lg font-serif transition-colors ${activeFaq === index ? 'text-[#A07A41]' : 'text-gray-200'}`}>{faq.q}</span>
                    <div className={`p-2 rounded-full border border-white/10 group-hover:border-[#A07A41] transition-all duration-300 ${activeFaq === index ? 'bg-[#A07A41] rotate-180' : ''}`}>
                      <ChevronDown className={`h-4 w-4 ${activeFaq === index ? 'text-black' : 'text-[#A07A41]'}`} />
                    </div>
                  </button>
                  <div className={`transition-all duration-500 ease-in-out px-8 ${activeFaq === index ? 'max-h-96 pb-8 opacity-100' : 'max-h-0 opacity-0 overflow-hidden'}`}>
                    <p className="text-gray-400 text-sm md:text-base font-sans font-light leading-relaxed border-t border-white/5 pt-6">{faq.a}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 9. FINAL CTA */}
        <section 
          ref={sectionRefs.cta}
          data-section="cta"
          className="relative py-24 lg:py-40 bg-[#1B2D33] overflow-hidden border-t border-white/5"
        >
          <div className="absolute inset-x-0 bottom-0 top-1/2 bg-gradient-to-t from-[#16272D]/40 to-transparent"></div>
          <div className="relative z-10 px-4 sm:px-6 lg:px-8 max-w-[90rem] mx-auto text-center">
            <div className={`max-w-5xl mx-auto p-16 lg:p-24 bg-[#2A454E]/60 border border-[#A07A41]/10 rounded-[3rem] backdrop-blur-2xl relative overflow-hidden shadow-2xl ${visibleSections.cta ? 'animate-fade-in-up' : 'opacity-0'}`}>
              <div className="absolute -top-10 -left-10 opacity-[0.03]"><HeartPulseIcon size={300} className="text-[#A07A41]" /></div>
              
              <span className="text-[#A07A41] uppercase tracking-[0.5em] text-[10px] font-bold mb-10 block">Strong Close</span>
              <h2 className="text-3xl md:text-6xl font-serif font-bold text-white mb-10 leading-tight">
                Improve Your Medical Billing <br />
                <span className="italic font-light text-[#A07A41]">Accuracy Today.</span>
              </h2>
              <p className="text-gray-300 text-lg font-light mb-12 max-w-2xl mx-auto">
                Stop losing revenue due to billing errors and poor record management. Get the secure medical data support your practice deserves.
              </p>
              
              <div className="flex flex-col sm:flex-row justify-center items-center gap-8 mt-12">
                <button className="group relative flex items-center justify-center gap-4 px-12 py-6 bg-[#A07A41] text-black font-bold uppercase tracking-widest text-xs rounded-xl shadow-2xl transition-all duration-500 hover:scale-105 hover:bg-white mx-auto">
                   <span>Request Secure Consultation</span>
                   <ArrowRight className="h-4 w-4 group-hover:translate-x-1.5 transition-transform" />
                </button>
              </div>
            </div>
          </div>
        </section>

      </main>
    </div>
  );
};

export default MedicalRecordsBillingPage;
