import React, { useEffect, useState, useRef } from 'react';
import {
   ArrowRight, FileText, CheckCircle,
   ChevronDown, ShieldCheck, Home,
   Users, Layout, ClipboardCheck,
   AlertCircle, Scale, HelpCircle
} from 'lucide-react';

const TenancyAgreementsPage = () => {
   const [activeFaq, setActiveFaq] = useState(null);

   const [visibleSections, setVisibleSections] = useState({
      hero: true,
      what: false,
      who: false,
      types: false,
      included: false,
      process: false,
      importance: false,
      choose: false,
      legal: false,
      faq: false,
      cta: false
   });

   const sectionRefs = {
      hero: useRef(null),
      what: useRef(null),
      who: useRef(null),
      types: useRef(null),
      included: useRef(null),
      process: useRef(null),
      importance: useRef(null),
      choose: useRef(null),
      legal: useRef(null),
      faq: useRef(null),
      cta: useRef(null)
   };

   useEffect(() => {
      window.scrollTo(0, 0);
      document.title = "Tenancy Agreement Drafting UK | AST & Residential Contracts | H&S Co.";

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

   const faqs = [
      {
         q: "Can I use a standard tenancy agreement template?",
         a: "You can, but it may not fully protect your specific situation or meet current legal requirements. Templates often lack clauses for specific property types or landlord requirements, leaving you vulnerable to disputes."
      },
      {
         q: "Do you draft AST agreements?",
         a: "Yes, Assured Shorthold Tenancy (AST) agreements are the most common type we prepare, ensuring they are fully compliant with current UK housing laws."
      },
      {
         q: "How long does drafting take?",
         a: "Typically 1–3 business days depending on the complexity of the requirements and any custom clauses needed."
      },
      {
         q: "Can you review an existing tenancy agreement?",
         a: "Yes, we offer review and modification services to ensure your existing contracts are up to date with current legislation and provide adequate protection."
      }
   ];

   const typesOfAgreements = [
      "Assured Shorthold Tenancy (AST) agreements",
      "Fixed-term tenancy agreements",
      "Periodic tenancy agreements",
      "Joint tenancy agreements",
      "Custom residential tenancy contracts"
   ];

   const processSteps = [
      { t: "Requirement Assessment", d: "We understand property details and tenancy type." },
      { t: "Clause Structuring", d: "Key legal terms and protections are defined." },
      { t: "Draft Preparation", d: "A tailored tenancy agreement is created." },
      { t: "Review & Adjustments", d: "Changes are made based on your needs." },
      { t: "Final Delivery", d: "A ready-to-use, legally structured agreement is provided." }
   ];

   return (
      <div className="min-h-screen bg-[#2A454E] flex flex-col overflow-x-hidden text-white font-sans">
         <style>
            {`
          @keyframes fade-in-up { from { opacity: 0; transform: translateY(40px); } to { opacity: 1; transform: translateY(0); } }
          @keyframes fade-in-down { from { opacity: 0; transform: translateY(-40px); } to { opacity: 1; transform: translateY(0); } }
          @keyframes fade-in-left { from { opacity: 0; transform: translateX(-40px); } to { opacity: 1; transform: translateX(0); } }
          @keyframes fade-in-right { from { opacity: 0; transform: translateX(40px); } to { opacity: 1; transform: translateX(0); } }
          
          .animate-fade-in-up { animation: fade-in-up 1.2s cubic-bezier(0.22, 1, 0.36, 1) forwards; }
          .animate-fade-in-down { animation: fade-in-down 1.2s cubic-bezier(0.22, 1, 0.36, 1) forwards; }
          .animate-fade-in-left { animation: fade-in-left 1.2s cubic-bezier(0.22, 1, 0.36, 1) forwards; }
          .animate-fade-in-right { animation: fade-in-right 1.2s cubic-bezier(0.22, 1, 0.36, 1) forwards; }
          
          .animation-delay-200 { animation-delay: 0.2s; }
          .animation-delay-400 { animation-delay: 0.4s; }
          .animation-delay-600 { animation-delay: 0.6s; }
        `}
         </style>

         <main className="flex-grow">

            {/* 1. HERO SECTION */}
            <section ref={sectionRefs.hero} data-section="hero" className="relative min-h-[90vh] flex items-center pt-32 pb-24 bg-[#1B2D33]">
               <div className="absolute inset-0 z-0">
                  <img src="/h1.jpg" alt="Tenancy Agreement Drafting UK" className="w-full h-full object-cover opacity-20" />
                  <div className="absolute inset-0 bg-gradient-to-r from-[#1B2D33] via-[#1B2D33]/80 to-transparent"></div>
               </div>
               
               <div className="relative z-10 px-4 sm:px-6 lg:px-8 max-w-[90rem] mx-auto w-full">
                  <div className="max-w-4xl">
                     <div className="flex items-center gap-4 mb-8 animate-fade-in-up">
                        <div className="h-[2px] w-12 bg-[#A07A41]"></div>
                        <span className="text-[#A07A41] uppercase tracking-[0.4em] text-[10px] sm:text-xs font-bold font-sans">Drafting & Compliance</span>
                     </div>

                     <h1 className="text-4xl sm:text-5xl md:text-6xl font-serif font-bold text-white leading-[1.1] mb-8 tracking-tight animate-fade-in-left animation-delay-200">
                        Tenancy Agreement <br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#C29D64] via-[#A07A41] to-[#785A2D]">Drafting Services UK.</span>
                     </h1>

                     <p className="text-base md:text-lg text-gray-300 font-sans font-light leading-relaxed max-w-2xl mb-12 animate-fade-in-up animation-delay-400">
                        Professionally drafted tenancy agreements for UK landlords and tenants, ensuring legal compliance, clear terms, and protection against disputes.
                     </p>

                     <div className="flex flex-col sm:flex-row gap-5 mb-20 animate-fade-in-right animation-delay-600">
                        <button className="group relative flex items-center justify-center gap-3 px-10 py-5 bg-[#1B2D33] border border-white/10 text-white font-bold tracking-widest uppercase text-xs md:text-sm rounded transition-all duration-300 hover:bg-[#A07A41] shadow-[0_0_20px_rgba(0,0,0,0.1)] overflow-hidden">
                           <span className="relative z-10">Request Tenancy Agreement</span>
                           <ArrowRight className="h-4 w-4 relative z-10 transform group-hover:translate-x-2 transition-transform duration-300" />
                        </button>
                        <div className="flex flex-col justify-center border-l-2 border-[#A07A41]/20 pl-6">
                           <p className="text-[#A07A41] text-[10px] font-black uppercase tracking-[0.3em] mb-1">Book Consultation</p>
                           <p className="text-white/40 text-[10px] italic">Expert Drafting Analysis</p>
                        </div>
                     </div>

                     <div className="grid grid-cols-2 lg:grid-cols-3 gap-12 border-t border-white/10 pt-12 animate-fade-in-up animation-delay-600">
                        {[
                           { t: "UK residential focus", s: "Local Legal Team" },
                           { t: "Legally structured agreements", s: "Compliance Guaranteed" },
                           { t: "Landlord & tenant protection", s: "Risk Management" }
                        ].map((item, i) => (
                           <div key={i} className="space-y-1">
                              <span className="text-white font-serif font-bold text-lg block">{item.t}</span>
                              <span className="text-[#A07A41]/50 text-[10px] font-black uppercase tracking-widest leading-none">{item.s}</span>
                           </div>
                        ))}
                     </div>
                  </div>
               </div>
            </section>

            {/* 2. WHAT IS A TENANCY AGREEMENT */}
            <section ref={sectionRefs.what} data-section="what" className="py-24 md:py-32 bg-[#2A454E] overflow-hidden">
               <div className="px-4 sm:px-6 lg:px-8 max-w-[90rem] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
                  <div className={`${visibleSections.what ? 'animate-fade-in-left' : 'opacity-0'}`}>
                     <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-white mb-8 tracking-tight leading-tight uppercase">
                        What is a <br />
                        <span className="italic font-light text-[#A07A41]">Tenancy Agreement?</span>
                     </h2>
                     <div className="space-y-6 text-gray-400 text-base md:text-lg font-sans font-light leading-relaxed border-l-4 border-white/5 pl-8 italic mb-12">
                        <p>A tenancy agreement is a legally binding contract between a landlord and a tenant that sets out the terms under which a residential property is rented.</p>
                        <p>In the UK, most residential lettings are structured as Assured Shorthold Tenancies (ASTs), which define rent, duration, and obligations.</p>
                     </div>
                     <div className="flex items-center gap-6 p-6 bg-[#1B2D33] rounded-2xl border border-white/5 group hover:border-[#A07A41]/30 transition-all shadow-xl">
                        <div className="w-10 h-10 shrink-0 rounded-full bg-[#A07A41] flex items-center justify-center font-black text-black">👉</div>
                        <span className="text-white font-serif text-lg italic">If this is poorly drafted, disputes are almost guaranteed.</span>
                     </div>
                  </div>
                  <div className={`${visibleSections.what ? 'animate-fade-in-right' : 'opacity-0'}`}>
                     <div className="relative group">
                        <img src="/h2.jpg" alt="UK Residential Property" className="rounded-3xl shadow-biggest h-[350px] md:h-[550px] w-full object-cover grayscale transition-all duration-1000 group-hover:grayscale-0" />
                        <div className="absolute -bottom-6 -right-6 bg-[#A07A41] p-8 rounded-2xl hidden md:block border border-black/5 shadow-2xl">
                           <Home className="h-10 w-10 text-black" />
                        </div>
                     </div>
                  </div>
               </div>
            </section>

            {/* 3. WHO NEEDS IT */}
            <section ref={sectionRefs.who} data-section="who" className="py-24 bg-[#1B2D33] border-y border-white/5">
               <div className="px-4 sm:px-6 lg:px-8 max-w-[90rem] mx-auto text-center">
                  <div className={`mb-16 md:mb-24 ${visibleSections.who ? 'animate-fade-in-down' : 'opacity-0'}`}>
                     <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-white mb-6 uppercase tracking-tight leading-tight">
                        Who Needs a <br /><span className="italic font-light text-[#A07A41]">Tenancy Agreement?</span>
                     </h2>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                     {[
                        { t: "Landlords", d: "Renting residential properties securely." },
                        { t: "Tenants", d: "Seeking clear and fair contract terms." },
                        { t: "Letting Agents", d: "Managing professional rental agreements." },
                        { t: "Property Investors", d: "Protecting large rental portfolios." }
                     ].map((item, i) => (
                        <div key={i} className={`p-10 bg-[#2A454E]/20 border border-white/5 rounded-3xl hover:border-[#A07A41] transition-all duration-500 ${visibleSections.who ? 'animate-fade-in-up' : 'opacity-0'}`} style={{ animationDelay: `${i * 150}ms` }}>
                           <Users className="h-8 w-8 text-[#A07A41] mb-8 mx-auto" />
                           <h4 className="text-white font-serif font-bold text-xl md:text-2xl mb-4 leading-tight">{item.t}</h4>
                           <p className="text-gray-500 text-sm font-light leading-relaxed italic">{item.d}</p>
                        </div>
                     ))}
                  </div>
                  <div className="mt-16 animate-fade-in-up animation-delay-600">
                     <p className="text-[#A07A41] font-black text-xl italic">👉 Using outdated or generic agreements creates legal gaps.</p>
                  </div>
               </div>
            </section>

            {/* 4. TYPES WE DRAFT */}
            <section ref={sectionRefs.types} data-section="types" className="py-24 md:py-32 bg-[#2A454E]">
               <div className="px-4 sm:px-6 lg:px-8 max-w-[90rem] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                  <div className={`${visibleSections.types ? 'animate-fade-in-left' : 'opacity-0'}`}>
                     <div className="relative">
                        <img src="/h3.jpg" alt="Legal Drafting" className="rounded-[3rem] h-[450px] w-full object-cover brightness-50" />
                        <div className="absolute inset-0 flex items-center justify-center">
                           <FileText className="h-20 w-20 text-[#A07A41]/40" />
                        </div>
                     </div>
                  </div>
                  <div className={`${visibleSections.types ? 'animate-fade-in-right' : 'opacity-0'}`}>
                     <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-white mb-10 tracking-tight uppercase leading-tight">
                        Types of Tenancy <br />
                        <span className="italic font-light text-[#A07A41]">Agreements We Draft.</span>
                     </h2>
                     <div className="space-y-4">
                        {typesOfAgreements.map((item, i) => (
                           <div key={i} className="flex items-center gap-6 p-6 bg-[#1B2D33] rounded-2xl border border-white/5 group hover:bg-[#A07A41] transition-all duration-500">
                              <Layout className="h-6 w-6 text-[#A07A41] group-hover:text-black transition-colors" />
                              <span className="text-gray-200 group-hover:text-black font-bold text-base md:text-lg transition-colors">{item}</span>
                           </div>
                        ))}
                     </div>
                  </div>
               </div>
            </section>

            {/* 5. WHAT'S INCLUDED */}
            <section ref={sectionRefs.included} data-section="included" className="py-24 md:py-32 bg-[#1B2D33] border-y border-white/5">
               <div className="px-4 sm:px-6 lg:px-8 max-w-[90rem] mx-auto">
                  <div className={`text-center mb-20 ${visibleSections.included ? 'animate-fade-in-down' : 'opacity-0'}`}>
                     <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-white mb-6 uppercase tracking-tight">What’s Included <br /><span className="italic font-light text-[#A07A41]">In Our Agreements.</span></h2>
                  </div>

                  <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                     {[
                        "Rent, deposits, and payment schedules",
                        "Tenant and landlord responsibilities",
                        "Maintenance and repair obligations",
                        "Notice periods and termination clauses",
                        "Use of property and restrictions",
                        "Legal compliance requirements"
                     ].map((item, i) => (
                        <div key={i} className={`p-10 bg-[#2A454E]/40 border border-white/5 rounded-3xl group hover:border-[#A07A41] transition-all duration-700 ${visibleSections.included ? 'animate-fade-in-up' : 'opacity-0'}`} style={{ animationDelay: `${i * 100}ms` }}>
                           <ClipboardCheck className="h-10 w-10 text-[#A07A41] mb-8" />
                           <p className="text-white font-serif font-bold text-lg mb-4 group-hover:text-[#A07A41] transition-colors leading-tight italic">{item}</p>
                        </div>
                     ))}
                  </div>
                  <div className="mt-16 text-center animate-fade-in-up">
                     <p className="text-gray-500 italic text-lg max-w-2xl mx-auto">👉 Most template agreements miss critical clauses—this is where problems start.</p>
                  </div>
               </div>
            </section>

            {/* 6. OUR DRAFTING PROCESS */}
            <section ref={sectionRefs.process} data-section="process" className="py-24 md:py-32 bg-[#2A454E]">
               <div className="px-4 sm:px-6 lg:px-8 max-w-[90rem] mx-auto">
                  <div className={`text-center mb-24 ${visibleSections.process ? 'animate-fade-in-down' : 'opacity-0'}`}>
                     <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-white mb-6 uppercase tracking-tight">Our Drafting <span className="italic font-light text-[#A07A41]">Process.</span></h2>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-5 gap-8">
                     {processSteps.map((step, i) => (
                        <div key={i} className={`flex flex-col items-center text-center group ${visibleSections.process ? 'animate-fade-in-up' : 'opacity-0'}`} style={{ animationDelay: `${i * 200}ms` }}>
                           <div className="w-16 h-16 rounded-full bg-[#1B2D33] flex items-center justify-center font-serif font-black text-2xl text-[#A07A41] mb-8 group-hover:bg-[#A07A41] group-hover:text-black transition-all shadow-xl">0{i + 1}</div>
                           <h4 className="text-white font-serif font-bold text-xl md:text-2xl mb-4 group-hover:text-[#A07A41] transition-colors uppercase tracking-wider">{step.t}</h4>
                           <p className="text-gray-500 text-sm font-light leading-relaxed italic">{step.d}</p>
                        </div>
                     ))}
                  </div>
               </div>
            </section>

            {/* 7. WHY PROFESSIONAL DRAFTING MATTERS */}
            <section ref={sectionRefs.importance} data-section="importance" className="py-24 bg-[#1B2D33] border-y border-white/5 relative overflow-hidden">
               <div className="px-4 sm:px-6 lg:px-8 max-w-[90rem] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                  <div className={`${visibleSections.importance ? 'animate-fade-in-left' : 'opacity-0'}`}>
                     <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-white mb-10 tracking-tight leading-tight uppercase">
                        Why Professional <br />
                        <span className="italic font-light text-[#A07A41]">Drafting is Important.</span>
                     </h2>
                     <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                        <div className="space-y-4">
                           <h5 className="text-red-500 font-black text-xs uppercase tracking-widest mb-6 flex items-center gap-2"><AlertCircle className="h-4 w-4"/> Risks of Poor Drafting</h5>
                           {["Disputes between parties", "Financial losses", "Unenforceable terms", "Eviction complications"].map((v, i) => (
                              <div key={i} className="flex gap-4 text-gray-500 italic">
                                 <div className="h-[1px] w-3 bg-red-900/50 mt-2.5"></div>
                                 <span className="text-sm">{v}</span>
                              </div>
                           ))}
                        </div>
                        <div className="space-y-4">
                           <h5 className="text-[#A07A41] font-black text-xs uppercase tracking-widest mb-6 flex items-center gap-2"><ShieldCheck className="h-4 w-4"/> Benefits of Professionalism</h5>
                           {["Clear expectations", "Legal enforceability", "Reduced dispute risk", "Complete peace of mind"].map((v, i) => (
                              <div key={i} className="flex gap-4 text-gray-300 italic group">
                                 <CheckCircle className="h-4 w-4 text-[#A07A41] shrink-0 mt-0.5" />
                                 <span className="text-sm">{v}</span>
                              </div>
                           ))}
                        </div>
                     </div>
                  </div>
                  <div className={`${visibleSections.importance ? 'animate-fade-in-right' : 'opacity-0'}`}>
                     <img src="/doc2.jpg" alt="Legal Enforceability" className="rounded-[4rem] h-[500px] w-full object-cover grayscale opacity-60" />
                  </div>
               </div>
            </section>

            {/* 8. WHY CHOOSE US */}
            <section ref={sectionRefs.choose} data-section="choose" className="py-24 md:py-32 bg-[#2A454E]">
               <div className="px-4 sm:px-6 lg:px-8 max-w-[90rem] mx-auto">
                  <div className={`text-center mb-24 ${visibleSections.choose ? 'animate-fade-in-down' : 'opacity-0'}`}>
                     <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-white mb-6 uppercase tracking-tight leading-tight">Why Choose Our <br /><span className="italic font-light text-[#A07A41]">Drafting Services?</span></h2>
                  </div>

                  <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                     {[
                        { t: "Tailored Agreements", d: "Customized to your specific property and situation (not templates)." },
                        { t: "UK Tenancy Focus", d: "Deep expertise in Assured Shorthold Tenancies and housing laws." },
                        { t: "Enforceable Clauses", d: "Designed to stand up in legal challenges and disputes." },
                        { t: "Dispute Reduction", d: "Clear terms mean fewer misunderstandings later." }
                     ].map((item, i) => (
                        <div key={i} className={`p-12 bg-[#1B2D33]/40 border border-white/5 rounded-3xl group hover:border-[#A07A41] transition-all duration-700 ${visibleSections.choose ? 'animate-fade-in-up' : 'opacity-0'}`} style={{ animationDelay: `${i * 150}ms` }}>
                           <Scale className="h-10 w-10 text-[#A07A41] mb-10 group-hover:scale-110 transition-transform" />
                           <h4 className="text-white font-serif font-bold text-xl md:text-2xl mb-4 group-hover:text-[#A07A41] transition-colors leading-tight uppercase tracking-tight">{item.t}</h4>
                           <p className="text-gray-500 font-sans font-light text-sm italic group-hover:text-white/80 transition-colors leading-relaxed">{item.d}</p>
                        </div>
                     ))}
                  </div>
                  <div className="mt-20 text-center animate-fade-in-up">
                     <p className="text-white/40 italic text-xl max-w-3xl mx-auto">"Most issues arise because agreements are copied, not properly drafted."</p>
                  </div>
               </div>
            </section>

            {/* 9. LEGAL COMPLIANCE */}
            <section ref={sectionRefs.legal} data-section="legal" className="py-24 md:py-32 bg-[#1B2D33] border-y border-white/5 relative overflow-hidden">
               <div className="px-4 sm:px-6 lg:px-8 max-w-[90rem] mx-auto">
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
                     <div className={`space-y-8 ${visibleSections.legal ? 'animate-fade-in-left' : 'opacity-0'}`}>
                        <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-white mb-6 uppercase tracking-tight leading-tight">Legal Compliance <br /><span className="text-[#A07A41] italic">& Standards.</span></h2>
                        <div className="space-y-6">
                           {[
                              "Align with UK housing practices",
                              "Include required legal provisions",
                              "Avoid unclear or risky clauses",
                              "Support enforceability in disputes"
                           ].map((v, i) => (
                              <div key={i} className="flex items-center gap-6 group">
                                 <ShieldCheck className="h-6 w-6 text-[#A07A41]/30 group-hover:text-[#A07A41] transition-colors" />
                                 <span className="text-gray-400 font-light text-xl italic group-hover:text-white transition-colors">{v}</span>
                              </div>
                           ))}
                        </div>
                     </div>
                     <div className={`p-12 md:p-16 bg-[#2A454E]/30 border border-[#A07A41]/10 rounded-[4rem] shadow-2xl relative ${visibleSections.legal ? 'animate-fade-in-right' : 'opacity-0'}`}>
                        <p className="text-gray-300 font-sans font-light text-lg md:text-xl leading-relaxed italic relative z-10">
                           Our broader legal services also include <strong>trademark objection response UK</strong>, <strong>UKIPO objection reply</strong>, and support for <strong>intellectual property dispute UK</strong> matters requiring structured <strong>legal response trademark UK</strong> documentation.
                        </p>
                     </div>
                  </div>
               </div>
            </section>

            {/* 10. FAQ Section */}
            <section ref={sectionRefs.faq} data-section="faq" className="py-24 md:py-32 bg-[#2A454E]">
               <div className="px-4 sm:px-6 lg:px-8 max-w-[60rem] mx-auto text-center">
                  <div className={`mb-24 ${visibleSections.faq ? 'animate-fade-in-down' : 'opacity-0'}`}>
                     <h2 className="text-3xl md:text-5xl lg:text-6xl font-serif font-bold text-white mb-6 leading-tight tracking-tight uppercase">
                        Frequently Asked <br /><span className="italic font-light text-[#A07A41]">Questions.</span>
                     </h2>
                  </div>
                  <div className="space-y-6 text-left">
                     {faqs.map((faq, i) => (
                        <div key={i} className={`border border-white/5 rounded-[2.5rem] bg-[#1B2D33]/60 backdrop-blur-md overflow-hidden hover:border-[#A07A41]/30 transition-all duration-500 ${visibleSections.faq ? 'animate-fade-in-up' : 'opacity-0'}`} style={{ animationDelay: `${i * 100}ms` }}>
                           <button onClick={() => setActiveFaq(activeFaq === i ? null : i)} className="w-full p-10 flex items-center justify-between group">
                              <span className={`text-left text-xl md:text-2xl font-serif font-bold transition-all duration-500 ${activeFaq === i ? 'text-[#A07A41]' : 'text-gray-200 group-hover:text-white'}`}>{faq.q}</span>
                              <div className={`p-3 rounded-full border border-white/10 transition-all duration-500 ${activeFaq === i ? 'bg-[#A07A41] border-[#A07A41]' : ''}`}>
                                 <ChevronDown className={`h-6 w-6 text-white transition-transform duration-500 ${activeFaq === i ? 'rotate-180' : ''}`} />
                              </div>
                           </button>
                           <div className={`transition-all duration-700 ease-in-out px-10 ${activeFaq === i ? 'max-h-[500px] pb-10 opacity-100' : 'max-h-0 opacity-0 overflow-hidden'}`}>
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
                  <img src="/lawhero.jpg" alt="Drafting Expertise" className="w-full h-full object-cover opacity-10" />
               </div>
               <div className="relative z-10 px-4 sm:px-6 lg:px-8 max-w-[85rem] mx-auto">
                  <div className={`transition-all duration-1000 ${visibleSections.cta ? 'animate-fade-in-up' : 'opacity-0'}`}>
                     <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-white mb-10 leading-[1] tracking-tight uppercase">
                        Get Your Tenancy Agreement <br />
                        <span className="italic font-light text-[#A07A41]">Drafted Professionally.</span>
                     </h2>
                     <p className="text-gray-400 mb-16 max-w-2xl mx-auto font-light text-base md:text-lg font-sans leading-relaxed italic border-l-4 border-[#A07A41]/40 pl-8">
                        Avoid disputes and legal uncertainty with a properly structured tenancy agreement tailored to your needs.
                     </p>

                     <div className="flex flex-col sm:flex-row justify-center items-center gap-10">
                        <button className="group relative flex items-center justify-center gap-4 px-12 py-7 bg-[#A07A41] text-black font-bold tracking-[0.2em] uppercase text-xs md:text-sm rounded transition-all duration-500 hover:bg-white hover:scale-105 shadow-[0_0_50px_rgba(160,122,65,0.3)] overflow-hidden">
                           <span className="relative z-10">Request Agreement</span>
                           <ArrowRight className="h-5 w-5 relative z-10 transform group-hover:translate-x-1 transition-transform duration-300" />
                        </button>
                        <div className="flex flex-col items-center sm:items-start group cursor-pointer">
                           <p className="text-white font-serif italic text-3xl mb-1 group-hover:text-[#A07A41] transition-colors">Book Consultation</p>
                           <div className="h-[2px] w-0 bg-[#A07A41] group-hover:w-full transition-all duration-500"></div>
                        </div>
                     </div>
                  </div>
               </div>
            </section>

         </main>
      </div>
   );
};

export default TenancyAgreementsPage;
