import React, { useEffect, useState, useRef } from 'react';
import { 
  FileText, ClipboardCheck, AlertCircle, Clock, ShieldCheck, 
  ArrowRight, CheckCircle, Search, Layers, UserCheck, 
  Scale, BookOpen, ChevronDown, Mail, Phone, Users, 
  Briefcase, Handshake, Zap, ShieldAlert, Award
} from 'lucide-react';

const EmploymentLawDocumentationPage = () => {
  const [activeFaq, setActiveFaq] = useState(null);
  const [isVisible, setIsVisible] = useState({});
  const sectionRefs = useRef([]);

  useEffect(() => {
    window.scrollTo(0, 0);

    const observers = sectionRefs.current.map((ref, index) => {
      if (!ref) return null;
      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setIsVisible(prev => ({ ...prev, [index]: true }));
            observer.disconnect();
          }
        },
        { threshold: 0.15 }
      );
      observer.observe(ref);
      return observer;
    });

    return () => observers.forEach(obs => obs && obs.disconnect());
  }, []);

  const addToRefs = (el) => {
    if (el && !sectionRefs.current.includes(el)) {
      sectionRefs.current.push(el);
    }
  };

  return (
    <div className="min-h-screen bg-[#2A454E] flex flex-col overflow-x-hidden text-white font-sans selection:bg-[#A07A41] selection:text-black">
      <main className="flex-grow">
        
        {/* 1. HERO SECTION */}
        <section 
          ref={addToRefs}
          className="relative min-h-screen flex items-center pt-32 pb-16 overflow-hidden bg-[#2A454E]"
        >
          <div className="absolute inset-0 z-0">
            <div className="absolute inset-0 bg-gradient-to-b from-[#2A454E]/20 via-[#2A454E]/80 to-[#2A454E] z-10" />
            <img
              src="/heroo.jpg"
              alt="Employment Law Documentation"
              className="w-full h-full object-cover object-center opacity-30 scale-105 animate-[kenburns_20s_ease-out_forwards]"
            />
          </div>

          <div className="relative z-20 px-4 sm:px-6 lg:px-8 max-w-[90rem] mx-auto w-full">
            <div className="flex flex-col items-center text-center">
              <div className={`max-w-4xl ${isVisible[0] ? 'animate-fade-in-up' : 'opacity-0'}`}>
                <div className="inline-flex items-center gap-4 mb-8 px-6 py-2 bg-white/5 border border-white/10 rounded-full">
                  <div className="h-2 w-2 rounded-full bg-[#A07A41] animate-pulse"></div>
                  <span className="text-[#A07A41] uppercase tracking-[0.3em] text-[10px] md:text-xs font-bold font-sans">
                    UK Employment Compliance Support
                  </span>
                </div>
                
                <h1 className="text-4xl sm:text-5xl md:text-6xl font-serif font-bold text-white leading-[1.1] mb-8 tracking-tighter">
                  Employment Law <br />
                  <span className="italic font-light text-[#A07A41]">Documentation Services UK</span>
                </h1>
                
                <p className="text-gray-300 text-base md:text-lg font-light leading-relaxed mb-12 max-w-2xl mx-auto">

                  Professionally structured employment documents to support compliance, reduce disputes, and ensure clear employer–employee agreements.
                </p>

                <div className="flex flex-col sm:flex-row gap-6 justify-center">
                  <a 
                    href="#contact" 
                    className="group relative flex items-center justify-center gap-4 px-10 py-5 bg-[#1B2D33] border border-white/10 text-white font-bold tracking-[0.2em] uppercase text-xs md:text-sm rounded transition-all duration-300 hover:bg-[#A07A41] shadow-biggest overflow-hidden"
                  >
                    <span className="relative z-10">Request Documentation</span>
                    <ArrowRight className="h-4 w-4 relative z-10 transform group-hover:translate-x-1 transition-transform duration-300" />
                  </a>
                  <a 
                    href="#consultation" 
                    className="group flex items-center justify-center gap-4 px-10 py-5 bg-transparent border border-[#A07A41]/50 text-white font-bold tracking-[0.2em] uppercase text-xs md:text-sm rounded transition-all duration-300 hover:border-[#A07A41] hover:bg-[#A07A41]/10"
                  >
                    Book Consultation
                  </a>
                </div>

                <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-10 max-w-4xl mx-auto border-t border-white/10 pt-12">
                   {[
                     { t: "UK-focused employment support", i: ShieldCheck },
                     { t: "Structured legal documentation", i: FileText },
                     { t: "Compliance-driven approach", i: UserCheck }
                    ].map((signal, i) => {
                      const Icon = signal.i;
                      return (
                        <div key={i} className="flex flex-col items-center gap-3 group">
                          <Icon className="h-8 w-8 text-[#A07A41] group-hover:scale-110 transition-transform" strokeWidth={1.5} />
                          <span className="text-gray-400 text-[10px] uppercase tracking-[0.2em] font-bold">{signal.t}</span>
                        </div>
                      );
                    })}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 2. WHAT IS EMPLOYMENT LAW DOCUMENTATION */}
        <section 
          ref={addToRefs}
          className="relative py-24 lg:py-40 bg-[#2A454E] overflow-hidden"
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-12 gap-16 items-center">
              <div className={`lg:col-span-7 ${isVisible[1] ? 'animate-fade-in-left' : 'opacity-0'}`}>
                <div className="flex items-center gap-3 mb-6">
                  <div className="h-[1px] w-12 bg-[#A07A41]"></div>
                  <span className="text-[#A07A41] uppercase tracking-widest text-sm font-semibold">Strategic Clarity</span>
                </div>
                <h2 className="text-3xl md:text-5xl font-serif font-bold text-white mb-10 leading-tight tracking-tight">
                  What is Employment Law <br />
                  <span className="italic font-light text-[#A07A41]">Documentation?</span>
                </h2>
                <div className="space-y-8 max-w-2xl">
                  <p className="text-gray-300 text-lg font-light leading-relaxed border-l border-[#A07A41] pl-8">

                    Employment law documentation refers to the contracts, policies, and records that define the relationship between employers and employees.
                  </p>
                  
                  <div className="grid sm:grid-cols-3 gap-6">
                    {[
                      { t: "Clear Responsibilities", d: "Expectations defined" },
                      { t: "Legal Compliance", d: "SRA & UK Standards" },
                      { t: "Protection", d: "Dispute safeguard" }
                    ].map((item, i) => (
                      <div key={i} className="p-6 bg-[#1B2D33] border border-white/5 rounded-xl hover:border-[#A07A41]/30 transition-all group">
                        <h4 className="text-white font-serif font-bold text-lg mb-2 group-hover:text-[#A07A41] transition-colors">{item.t}</h4>
                        <p className="text-gray-500 text-xs uppercase tracking-widest">{item.d}</p>
                      </div>
                    ))}
                  </div>

                  <p className="text-gray-400 text-base font-light leading-relaxed italic opacity-80">
                    "Without proper documentation, even small issues can escalate into formal claims."
                  </p>

                </div>
              </div>
              
              <div className={`lg:col-span-5 relative ${isVisible[1] ? 'animate-fade-in-right' : 'opacity-0'}`}>
                <div className="relative group">
                   <div className="absolute -inset-4 border border-[#A07A41]/20 rounded-2xl group-hover:inset-0 transition-all duration-700"></div>
                   <div className="relative rounded-xl overflow-hidden shadow-biggest border border-white/10">
                      <img src="/doc.jpg" alt="Documentation Support" className="w-full h-auto grayscale opacity-80 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-1000" />
                   </div>
                   <div className="absolute -bottom-8 -right-8 p-10 bg-[#1B2D33] border border-white/10 rounded-2xl shadow-biggest hidden sm:block">
                      <Scale className="h-10 w-10 text-[#A07A41]" />
                   </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 3. WHO NEEDS THIS SERVICE */}
        <section 
          ref={addToRefs}
          className="relative py-24 lg:py-32 bg-[#1B2D33] overflow-hidden border-y border-white/5"
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col items-center text-center mb-24">
               <span className="text-[#A07A41] uppercase tracking-[0.4em] text-xs font-bold mb-6">Audience Focus</span>
               <h2 className={`text-3xl md:text-5xl font-serif font-bold text-white mb-8 tracking-tight ${isVisible[2] ? 'animate-fade-in-up' : 'opacity-0'}`}>
                 Who Needs Employment <br />
                 <span className="italic font-light text-[#A07A41]">Documentation Support?</span>
               </h2>
               <div className="h-[2px] w-24 bg-[#A07A41] mb-10"></div>
               <p className="text-gray-400 text-base max-w-2xl font-light italic">

                 👉 If your documentation is unclear, you’re exposed to risk.
               </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                { t: "Small and Medium Businesses", i: Briefcase, d: "Scale with compliance." },
                { t: "Startups Hiring Employees", i: Zap, d: "Build a strong foundation." },
                { t: "Companies Updating HR", i: Handshake, d: "Modernize your policies." },
                { t: "Agencies Managing Contractors", i: Users, d: "Clear IR35 & service terms." },
                { t: "Businesses with Disputes", i: ShieldAlert, d: "Strengthen your legal position." }
              ].map((item, i) => (
                <div 
                  key={i}
                  className={`group p-10 bg-[#2A454E] border border-white/5 rounded-3xl hover:border-[#A07A41]/50 transition-all duration-500 hover:-translate-y-2 shadow-biggest flex flex-col items-start ${isVisible[2] ? 'animate-fade-in-up' : 'opacity-0'}`}
                  style={{ animationDelay: `${i * 100}ms` }}
                >
                  <div className="h-14 w-14 bg-[#1B2D33] rounded-2xl flex items-center justify-center text-[#A07A41] mb-8 group-hover:bg-[#A07A41] group-hover:text-black transition-all shadow-xl">
                    <item.i className="h-7 w-7" />
                  </div>
                  <h3 className="text-white font-serif text-xl font-bold mb-4 group-hover:text-[#A07A41] transition-colors">
                    {item.t}
                  </h3>

                  <p className="text-gray-400 text-sm font-light uppercase tracking-widest">{item.d}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 4. TYPES OF DOCUMENTS WE PREPARE */}
        <section 
          ref={addToRefs}
          className="relative py-24 lg:py-40 bg-[#2A454E] overflow-hidden"
        >
          <div className="max-w-[90rem] mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-24 items-center">
              <div className={`order-2 lg:order-1 ${isVisible[3] ? 'animate-fade-in-left' : 'opacity-0'}`}>
                <div className="grid sm:grid-cols-2 gap-4">
                  {[
                    "Employment contracts",
                    "Offer letters",
                    "Staff handbooks",
                    "Workplace policies",
                    "Confidentiality agreements",
                    "Disciplinary docs",
                    "Grievance procedures",
                    "Termination documents"
                  ].map((doc, i) => (
                    <div key={i} className="flex items-center gap-4 p-5 bg-[#1B2D33] border border-white/5 rounded-lg group hover:bg-[#A07A41] transition-all duration-500">
                      <div className="h-2 w-2 rounded-full bg-[#A07A41] group-hover:bg-black transition-colors"></div>
                      <span className="text-white font-serif text-sm font-medium group-hover:text-black transition-colors">{doc}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className={`order-1 lg:order-2 ${isVisible[3] ? 'animate-fade-in-right' : 'opacity-0'}`}>
                <span className="text-[#A07A41] uppercase tracking-[0.4em] text-xs font-bold mb-6 block">Document Scope</span>
                <h2 className="text-3xl md:text-5xl font-serif font-bold text-white mb-10 leading-tight tracking-tighter">
                  Types of Employment <br />
                  <span className="italic font-light text-[#A07A41]">Documents We Prepare.</span>
                </h2>
                <p className="text-gray-300 text-base md:text-lg font-light leading-relaxed mb-8">

                  We assist with everything from initial offer letters to complex termination and notice documentation.
                </p>
                <div className="p-8 bg-[#1B2D33] border-l-4 border-[#A07A41] rounded-r-xl relative overflow-hidden group">
                  <div className="absolute top-0 right-0 p-10 opacity-[0.05] group-hover:opacity-[0.1] transition-opacity">
                    <AlertCircle size={80} />
                  </div>
                  <p className="text-white italic text-base relative z-10 font-serif">
                    "👉 This is where most businesses rely on bad templates—and pay for it later."
                  </p>

                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 5. WHAT WE INCLUDE IN OUR DOCUMENTS */}
        <section 
          ref={addToRefs}
          className="relative py-24 lg:py-32 bg-[#1B2D33] overflow-hidden"
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-24">
               <h2 className={`text-3xl md:text-5xl lg:text-6xl font-serif font-bold text-white mb-10 tracking-tight ${isVisible[4] ? 'animate-fade-in-up' : 'opacity-0'}`}>
                 What’s Included in <br />
                 <span className="italic font-light text-[#A07A41]">Our Documentation.</span>
               </h2>
               <p className="text-gray-400 text-base font-light italic">

                 👉 Missing even one of these creates problems.
               </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                { t: "Roles & Duties", i: UserCheck, d: "Clearly defined responsibilities." },
                { t: "Salary & Benefits", i: Scale, d: "Payment terms and leave policies." },
                { t: "Working Hours", i: Clock, d: "Clear expectations on time." },
                { t: "Data Protection", i: ShieldCheck, d: "Confidentiality & GDPR focus." },
                { t: "Termination Terms", i: FileText, d: "Notice periods and conditions." },
                { t: "Dispute Procedures", i: AlertCircle, d: "Disciplinary and grievance paths." }
              ].map((item, i) => (
                <div 
                  key={i} 
                  className={`group p-12 bg-[#2A454E] border border-white/5 rounded-3xl hover:bg-[#A07A41] transition-all duration-700 shadow-biggest relative overflow-hidden ${isVisible[4] ? 'animate-fade-in-up' : 'opacity-0'}`}
                  style={{ animationDelay: `${i * 100}ms` }}
                >
                  <item.i className="h-12 w-12 text-[#A07A41] mb-8 group-hover:text-black transition-colors" strokeWidth={1} />
                  <h4 className="text-white font-serif text-xl font-bold mb-4 group-hover:text-black transition-colors">{item.t}</h4>
                  <p className="text-gray-400 text-xs font-light leading-relaxed group-hover:text-black/80 transition-colors">{item.d}</p>

                  <div className="absolute bottom-0 right-0 p-10 text-white/5 group-hover:text-black/10 transition-colors pointer-events-none">
                    <item.i className="h-32 w-32" strokeWidth={1} />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 6. OUR DOCUMENTATION PROCESS */}
        <section 
          ref={addToRefs}
          className="relative py-24 lg:py-48 bg-[#2A454E] overflow-hidden border-y border-white/5"
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-24 items-center mb-24">
               <div className={`${isVisible[5] ? 'animate-fade-in-left' : 'opacity-0'}`}>
                  <span className="text-[#A07A41] uppercase tracking-[0.5em] text-xs font-bold mb-6 block">Workflow</span>
                  <h2 className="text-3xl md:text-5xl font-serif font-bold text-white tracking-tighter leading-none mb-8">
                    Our Documentation <br />
                    <span className="italic font-light text-[#A07A41]">Process.</span>
                  </h2>
                  <p className="text-gray-400 text-base md:text-lg font-light leading-relaxed border-l border-[#A07A41] pl-8">

                    A structured approach to creating ready-to-use employment contracts and policies.
                  </p>
               </div>
               <div className={`relative ${isVisible[5] ? 'animate-fade-in-right' : 'opacity-0'}`}>
                  <div className="p-16 bg-[#1B2D33] rounded-3xl border border-white/10 shadow-biggest relative group overflow-hidden">
                     <div className="absolute inset-0 bg-gradient-to-br from-[#A07A41]/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
                     <Award size={120} className="text-[#A07A41] opacity-20 mb-8" />
                     <h3 className="text-white font-serif text-3xl font-bold italic relative z-10">Elite Execution.</h3>
                  </div>
               </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-8">
              {[
                { n: "01", t: "Requirement Assessment", d: "We understand your business structure and workforce." },
                { n: "02", t: "Documentation Planning", d: "We identify required contracts and policies." },
                { n: "03", t: "Draft Preparation", d: "Documents are created based on your needs." },
                { n: "04", t: "Review & Adjustments", d: "Changes are made to match your operations." },
                { n: "05", t: "Final Delivery", d: "Ready-to-use structured documents are provided." }
              ].map((step, i) => (
                <div 
                  key={i} 
                  className={`group relative flex flex-col items-center text-center ${isVisible[5] ? 'animate-fade-in-up' : 'opacity-0'}`}
                  style={{ animationDelay: `${i * 150}ms` }}
                >
                  <div className="h-16 w-16 rounded-full bg-[#1B2D33] border border-[#A07A41]/30 flex items-center justify-center text-[#A07A41] font-serif font-black text-xl mb-6 group-hover:bg-[#A07A41] group-hover:text-black transition-all group-hover:scale-110 shadow-xl">
                    {step.n}
                  </div>
                  <h3 className="text-white font-serif text-lg font-bold mb-4 px-4">{step.t}</h3>
                  <p className="text-gray-500 text-xs leading-relaxed font-light">{step.d}</p>
                  {i < 4 && <div className="absolute top-8 left-[calc(50%+32px)] w-[calc(100%-64px)] h-[1px] bg-[#A07A41]/20 hidden lg:block"></div>}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 7. WHY PROPER DOCUMENTATION MATTERS */}
        <section 
          ref={addToRefs}
          className="relative py-24 lg:py-40 bg-[#1B2D33] overflow-hidden"
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-20 items-center">
              <div className={`${isVisible[6] ? 'animate-fade-in-left' : 'opacity-0'}`}>
                <div className="relative rounded-2xl overflow-hidden shadow-biggest border border-white/10 group">
                   <img src="/leg.jpg" alt="Documentation Importance" className="w-full h-auto grayscale opacity-70 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-1000" />
                   <div className="absolute inset-0 bg-gradient-to-r from-[#1B2D33] to-transparent"></div>
                   <div className="absolute bottom-10 left-10 z-20">
                      <span className="text-[#A07A41] font-serif text-5xl font-black italic opacity-20 group-hover:opacity-50 transition-opacity">RISK CONTROL.</span>
                   </div>
                </div>
              </div>

              <div className={`${isVisible[6] ? 'animate-fade-in-right' : 'opacity-0'}`}>
                <h2 className="text-3xl md:text-5xl font-serif font-bold text-white mb-10 tracking-tight">
                  Why Employment <br />
                  <span className="italic font-light text-[#A07A41]">Documentation is Critical.</span>
                </h2>

                
                <div className="grid sm:grid-cols-2 gap-10">
                  <div className="space-y-6">
                    <span className="text-red-500/80 uppercase tracking-widest text-[10px] font-bold border-b border-red-500/20 pb-2 block">The Risks</span>
                    <ul className="space-y-4">
                      {["Employee disputes", "Legal claims", "Unclear duties", "Financial damage"].map((r, i) => (
                        <li key={i} className="flex items-center gap-3 text-gray-400 font-light text-sm italic">
                          <X className="h-3 w-3 text-red-500" /> {r}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="space-y-6">
                    <span className="text-[#A07A41] uppercase tracking-widest text-[10px] font-bold border-b border-[#A07A41]/20 pb-2 block">The Benefits</span>
                    <ul className="space-y-4">
                      {["Clear expectations", "Legal clarity", "Dispute strength", "Process control"].map((b, i) => (
                        <li key={i} className="flex items-center gap-3 text-gray-300 font-light text-sm italic">
                          <CheckCircle className="h-3 w-3 text-[#A07A41]" /> {b}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="mt-12 p-8 bg-[#2A454E] rounded-xl border border-white/5 relative group">
                  <div className="absolute top-0 right-0 p-6 opacity-[0.05]">
                    <Search size={40} />
                  </div>
                  <p className="text-white italic text-base font-serif">
                    "👉 This is not admin work—it’s risk control."
                  </p>

                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 8. WHY CHOOSE US */}
        <section 
          ref={addToRefs}
          className="relative py-24 lg:py-48 bg-[#2A454E] overflow-hidden border-t border-white/10"
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-24 items-center">
              <div className={`${isVisible[7] ? 'animate-fade-in-left' : 'opacity-0'}`}>
                 <h2 className="text-3xl md:text-6xl font-serif font-bold text-white mb-10 tracking-tighter leading-none italic animate-pulse-slow">
                   Why <br />
                   <span className="text-[#A07A41]">Choose Us?</span>
                 </h2>
                 <p className="text-gray-400 text-base md:text-lg font-light leading-relaxed mb-12 max-w-lg italic border-l border-[#A07A41]/30 pl-8">

                   Most businesses copy templates. That’s exactly why disputes happen. We provide tailored, UK-context documentation that actually protects you.
                 </p>
              </div>

              <div className={`grid gap-6 ${isVisible[7] ? 'animate-fade-in-right' : 'opacity-0'}`}>
                {[
                  "Structured and clear legal documents",
                  "Focus on compliance and risk reduction",
                  "Tailored to business operations",
                  "UK employment context understanding"
                ].map((item, i) => (
                  <div key={i} className="flex items-center justify-between p-8 bg-[#1B2D33] border border-white/5 rounded-2xl group hover:border-[#A07A41]/40 transition-all duration-500 shadow-biggest">
                    <span className="text-white font-serif text-lg font-bold group-hover:text-[#A07A41] transition-colors">{item}</span>

                    <div className="h-10 w-10 bg-[#2A454E] rounded-full flex items-center justify-center text-[#A07A41] group-hover:bg-[#A07A41] group-hover:text-black transition-all">
                      <ArrowRight size={18} />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* 9. LEGAL & COMPLIANCE NOTE */}
        <section 
          ref={addToRefs}
          className="relative py-24 lg:py-40 bg-[#1B2D33] overflow-hidden"
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className={`p-16 md:p-32 bg-[#2A454E] border border-[#A07A41]/20 rounded-[4rem] relative overflow-hidden shadow-biggest text-center group ${isVisible[8] ? 'animate-fade-in-up' : 'opacity-0'}`}>
               <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,#A07A4108,transparent)]"></div>
               <ShieldCheck size={64} className="text-[#A07A41] mx-auto mb-10 opacity-60 group-hover:scale-125 transition-transform" strokeWidth={1} />
               <h2 className="text-2xl md:text-4xl font-serif font-bold mb-12 italic tracking-tight underline underline-offset-[16px] decoration-[#A07A41]/10">Compliance & Professional Standards</h2>

               
               <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 relative z-10">
                 {[
                   "Structured legal practices",
                   "Risk-free clauses",
                   "Employment process focus",
                   "Record-keeping support"
                 ].map((note, i) => (
                   <div key={i} className="flex flex-col items-center gap-4">
                      <div className="h-[1px] w-12 bg-[#A07A41]/40"></div>
                      <p className="text-gray-300 font-serif text-lg italic">{note}</p>
                   </div>
                 ))}
               </div>
            </div>
          </div>
        </section>

        {/* 10. FAQ SECTION */}
        <section 
          ref={addToRefs}
          className="relative py-24 lg:py-48 bg-[#2A454E] overflow-hidden border-y border-white/5"
        >
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-24">
               <span className="text-[#A07A41] uppercase tracking-[0.5em] text-xs font-bold mb-6 block">Insight</span>
               <h2 className={`text-3xl md:text-5xl lg:text-6xl font-serif font-bold text-white mb-8 tracking-tighter ${isVisible[9] ? 'animate-fade-in-up' : 'opacity-0'}`}>
                 Frequently Asked <br />
                 <span className="italic font-light text-[#A07A41]">Questions.</span>
               </h2>

            </div>

            <div className="space-y-4">
              {[
                { q: "Can I use free employment contract templates?", a: "Yes—but they often miss critical protections or don’t fit your business structure, leaving you exposed to legal risks." },
                { q: "Do you cover both employees and contractors?", a: "Yes, our documentation can be specifically structured for both employee contracts and contractor agreements (IR35 compliant)." },
                { q: "How long does it take?", a: "Typically 1–3 business days depending on the complexity and volume of the documentation required." },
                { q: "Can you update existing documents?", a: "Yes, we offer review and modification services to ensure your existing documents are up-to-date with current UK law." }
              ].map((faq, i) => (
                <div 
                  key={i}
                  className={`border border-white/10 rounded-2xl bg-[#1B2D33] overflow-hidden transition-all duration-500 hover:border-[#A07A41]/30 shadow-xl ${isVisible[9] ? 'animate-fade-in-up' : 'opacity-0'}`}
                  style={{ animationDelay: `${i * 100}ms` }}
                >
                  <button 
                    onClick={() => setActiveFaq(activeFaq === i ? null : i)}
                    className="w-full p-8 md:p-10 flex items-center justify-between group outline-none"
                  >
                    <span className={`text-left text-lg md:text-xl font-serif font-bold transition-colors ${activeFaq === i ? 'text-[#A07A41]' : 'text-gray-200'}`}>{faq.q}</span>

                    <div className={`shrink-0 p-3 rounded-xl border border-white/5 transition-all duration-500 ${activeFaq === i ? 'bg-[#A07A41] rotate-180 border-[#A07A41]' : 'group-hover:border-[#A07A41]'}`}>
                       <ChevronDown className={`h-5 w-5 transition-colors ${activeFaq === i ? 'text-black' : 'text-[#A07A41]'}`} />
                    </div>
                  </button>
                  <div className={`transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] px-8 md:px-10 ${activeFaq === i ? 'max-h-[500px] pb-10 opacity-100' : 'max-h-0 opacity-0 overflow-hidden'}`}>
                    <p className="text-gray-400 text-sm md:text-base font-light font-sans leading-relaxed border-l-2 border-[#A07A41]/20 pl-8 italic">
                      {faq.a}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 11. FINAL CTA SECTION */}
        <section 
          ref={addToRefs}
          className="relative py-24 lg:py-60 bg-[#1B2D33] overflow-hidden"
          id="contact"
        >
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
             <div className={`p-16 md:p-28 bg-[#2A454E] border border-white/10 rounded-[5rem] relative overflow-hidden shadow-biggest text-center group ${isVisible[10] ? 'animate-fade-in-up' : 'opacity-0'}`}>
                <div className="absolute -top-1/2 -left-1/2 w-full h-full bg-[#A07A41]/5 rounded-full blur-[160px] pointer-events-none"></div>
                
                <h2 className="text-3xl md:text-6xl lg:text-7xl font-serif font-bold text-white mb-12 tracking-tighter leading-none italic uppercase">
                  Get Your Documents <br />
                  <span className="italic font-light text-[#A07A41]">Structured Properly.</span>
                </h2>
                
                <p className="text-gray-300 text-base md:text-lg font-light leading-relaxed mb-16 max-w-3xl mx-auto">

                  Avoid disputes and confusion by ensuring your employment documentation is clear, complete, and properly structured according to UK legal standards.
                </p>

                <div className="flex flex-col md:flex-row items-center justify-center gap-12 mb-20">
                   <div className="flex flex-col items-center gap-4 group cursor-pointer">
                      <Mail size={32} className="text-[#A07A41] group-hover:scale-110 transition-transform" />
                      <span className="text-white font-serif font-bold text-xl md:text-2xl italic group-hover:text-[#A07A41] transition-colors">legal@hsco.co</span>
                   </div>
                   <div className="flex flex-col items-center gap-4 group cursor-pointer">
                      <Phone size={32} className="text-[#A07A41] group-hover:scale-110 transition-transform" />
                      <span className="text-white font-serif font-bold text-xl md:text-2xl italic group-hover:text-[#A07A41] transition-colors">+44 20 745 9210</span>
                   </div>

                </div>

                <div className="flex flex-wrap justify-center gap-6">
                  <div 
                    role="button" 
                    className="group relative inline-flex items-center justify-center gap-4 px-12 py-6 bg-[#1B2D33] border border-white/10 text-white font-bold tracking-[0.3em] uppercase text-xs md:text-sm rounded transition-all duration-300 hover:bg-[#A07A41] cursor-pointer shadow-biggest overflow-hidden hover:scale-105"
                  >
                    <span className="relative z-10">Request Documents</span>
                    <ArrowRight size={20} className="relative z-10 transform group-hover:translate-x-1 transition-transform duration-300" />
                  </div>
                  <div 
                    role="button" 
                    className="group relative inline-flex items-center justify-center gap-4 px-12 py-6 bg-transparent border border-[#A07A41]/50 text-white font-bold tracking-[0.3em] uppercase text-xs md:text-sm rounded transition-all duration-300 hover:bg-[#A07A41]/10 cursor-pointer shadow-biggest overflow-hidden hover:scale-105"
                  >
                    <span className="relative z-10">Book Consultation</span>
                  </div>
                </div>
             </div>
          </div>
        </section>

      </main>

      {/* SEO FOOTER LINKS */}
      <footer className="bg-[#1B2D33] py-16 border-t border-white/5 opacity-40">
        <div className="max-w-7xl mx-auto px-4">
           <div className="flex flex-wrap justify-center gap-x-12 gap-y-6 mb-8 text-[11px] text-gray-500 uppercase tracking-widest font-bold">
              <span>employment law documentation UK</span>
              <span>employment contract drafting UK</span>
              <span>HR legal documents UK</span>
              <span>workplace policy drafting UK</span>
              <span>employee agreement UK</span>
              <span>employment compliance documents UK</span>
           </div>
           <div className="flex flex-wrap justify-center gap-x-10 gap-y-4 text-[9px] text-gray-600 italic">
              <span>trademark objection response UK</span>
              <span>UKIPO objection reply</span>
              <span>trademark refusal response UK</span>
              <span>intellectual property dispute UK</span>
              <span>trademark application support UK</span>
              <span>legal response trademark UK</span>
           </div>
        </div>
      </footer>
    </div>
  );
};

export default EmploymentLawDocumentationPage;

const X = ({ className, size = 12 }) => (
  <svg 
    width={size} 
    height={size} 
    viewBox="0 0 24 24" 
    fill="none" 
    stroke="currentColor" 
    strokeWidth="3" 
    strokeLinecap="round" 
    strokeLinejoin="round" 
    className={className}
  >
    <line x1="18" y1="6" x2="6" y2="18"></line>
    <line x1="6" y1="6" x2="18" y2="18"></line>
  </svg>
);
