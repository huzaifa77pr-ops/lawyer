import React, { useEffect, useState, useRef } from 'react';
import { 
  Calculator, Receipt, Library, FileText, ArrowRight, 
  CheckCircle, Coins, ShieldCheck, Search, Layout, 
  Layers, Clock, ChevronDown, Mail, Phone, Users, 
  Briefcase, Wallet, Landmark, PieChart, FileSearch,
  BookOpen, Scale, AlertCircle, FileSpreadsheet, UserCheck
} from 'lucide-react';


const TaxLawAssistancePage = () => {
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
            <div className="absolute inset-0 bg-gradient-to-b from-[#2A454E]/90 via-[#2A454E]/70 to-[#2A454E] z-10" />
            <img
              src="/case4.jpg"
              alt="Tax Law Support"
              className="w-full h-full object-cover object-center opacity-40 scale-105 animate-[kenburns_20s_ease-out_forwards]"
            />
          </div>

          <div className="relative z-20 px-4 sm:px-6 lg:px-8 max-w-[90rem] mx-auto w-full">
            <div className={`max-w-4xl ${isVisible[0] ? 'animate-fade-in-left' : 'opacity-0'}`}>
              <div className="inline-flex items-center gap-3 mb-8 px-5 py-2 bg-[#A07A41]/10 border border-[#A07A41]/20 rounded-full">
                <Calculator className="h-4 w-4 text-[#A07A41]" />
                <span className="text-[#A07A41] uppercase tracking-[0.3em] text-[10px] font-bold">
                  Document Organization Support
                </span>
              </div>
              
              <h1 className="text-4xl sm:text-5xl md:text-6xl font-serif font-bold text-white leading-[1.1] mb-8 tracking-tighter">
                Tax Law Assistance <br />
                <span className="italic font-light text-[#A07A41]">(Basic Support) UK</span>
              </h1>
              
              <p className="text-gray-300 text-base md:text-lg font-light leading-relaxed mb-12 max-w-2xl">
                Structured support for organizing tax-related documents, preparing records, and assisting with basic documentation processes for individuals and businesses.
              </p>

              <div className="flex flex-col sm:flex-row gap-6 mb-20">
                <a 
                  href="#contact" 
                  className="group relative flex items-center justify-center gap-4 px-10 py-5 bg-[#1B2D33] border border-white/10 text-white font-bold tracking-[0.2em] uppercase text-xs md:text-sm rounded transition-all duration-300 hover:bg-[#A07A41] shadow-biggest"
                >
                  <span className="relative z-10">Request Support</span>
                  <ArrowRight className="h-4 w-4 transform group-hover:translate-x-1 transition-transform duration-300" />
                </a>
                <a 
                  href="#consultation" 
                  className="group flex items-center justify-center gap-4 px-10 py-5 bg-transparent border border-[#A07A41]/50 text-white font-bold tracking-[0.2em] uppercase text-xs md:text-sm rounded transition-all duration-300 hover:border-[#A07A41] hover:bg-[#A07A41]/10"
                >
                  Book Consultation
                </a>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-12 border-t border-white/10 pt-12">
                 {[
                   { t: "UK-focused documentation", Icon: ShieldCheck },
                   { t: "Clear & structured workflows", Icon: Layout },
                   { t: "Confidential handling", Icon: Wallet }
                 ].map((signal, i) => {
                   const Icon = signal.Icon;
                   return (
                     <div key={i} className="flex items-center gap-4 group">
                       <Icon className="h-6 w-6 text-[#A07A41] group-hover:rotate-12 transition-transform" strokeWidth={1.5} />
                       <span className="text-gray-400 text-[10px] uppercase tracking-[0.2em] font-bold leading-tight">{signal.t}</span>
                     </div>
                   );
                 })}
              </div>
            </div>
          </div>
        </section>

        {/* 2. WHAT IS BASIC TAX LAW ASSISTANCE */}
        <section 
          ref={addToRefs}
          className="relative py-24 lg:py-40 bg-[#1B2D33] overflow-hidden border-y border-white/5"
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-12 gap-20 items-center">
              <div className={`lg:col-span-7 ${isVisible[1] ? 'animate-fade-in-left' : 'opacity-0'}`}>
                <div className="flex items-center gap-3 mb-6">
                  <div className="h-[1px] w-12 bg-[#A07A41]"></div>
                  <span className="text-[#A07A41] uppercase tracking-widest text-xs font-semibold">Service Overview</span>
                </div>
                <h2 className="text-3xl md:text-5xl font-serif font-bold text-white mb-10 leading-tight tracking-tight">
                  What is Basic <br />
                  <span className="italic font-light text-[#A07A41]">Tax Law Assistance?</span>
                </h2>
                <div className="space-y-8">
                  <p className="text-gray-300 text-lg font-light leading-relaxed border-l-2 border-[#A07A41] pl-8">
                    Basic tax law assistance involves supporting individuals and businesses with the organization and preparation of tax-related documents and records.
                  </p>
                  
                  <div className="grid sm:grid-cols-3 gap-6 pt-6">
                    {[
                      { t: "Record Structuring", Icon: Library },
                      { t: "Support Prep", Icon: FileText },
                      { t: "Info Organization", Icon: Layers }
                    ].map((item, i) => {
                      const Icon = item.Icon;
                      return (
                        <div key={i} className="flex flex-col items-center text-center gap-4 p-8 bg-[#2A454E] border border-white/5 rounded-3xl group hover:border-[#A07A41]/30 transition-all">
                          <Icon className="h-8 w-8 text-[#A07A41] mb-2" />
                          <h4 className="text-white font-serif font-bold text-sm leading-tight">{item.t}</h4>
                        </div>
                      );
                    })}
                  </div>

                  <p className="text-gray-400 text-base font-light italic opacity-80 pt-8 flex items-center gap-4">
                    <AlertCircle className="h-5 w-5 text-[#A07A41]" />
                    "👉 This service focuses on documentation and preparation—not tax advisory or filing."
                  </p>
                </div>
              </div>
              
              <div className={`lg:col-span-5 relative ${isVisible[1] ? 'animate-fade-in-right' : 'opacity-0'}`}>
                <div className="relative p-12 bg-[#2A454E] rounded-[3rem] border border-white/10 shadow-biggest group">
                   <div className="absolute -bottom-10 -right-10 opacity-[0.05] group-hover:scale-125 transition-transform">
                      <Coins size={300} />
                   </div>
                   <div className="relative z-10">
                      <Receipt className="h-12 w-12 text-[#A07A41] mb-10" strokeWidth={1} />
                      <h3 className="text-white font-serif text-3xl font-bold italic mb-6 leading-tight">Financial <br />Clarity.</h3>
                      <div className="h-1 w-16 bg-[#A07A41] mb-8"></div>
                      <p className="text-gray-400 text-sm leading-relaxed font-light">
                        We transform raw financial data into structured, professional documentation ready for review by your accountants or legal teams.
                      </p>
                   </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 3. WHO NEEDS THIS SERVICE */}
        <section 
          ref={addToRefs}
          className="relative py-24 lg:py-32 bg-[#2A454E] overflow-hidden"
        >
          <div className="max-w-[90rem] mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col items-center text-center mb-24">
               <span className="text-[#A07A41] uppercase tracking-[0.4em] text-xs font-bold mb-6">Service Scope</span>
               <h2 className={`text-3xl md:text-5xl font-serif font-bold text-white mb-8 tracking-tight ${isVisible[2] ? 'animate-fade-in-up' : 'opacity-0'}`}>
                 Who Needs Tax <br />
                 <span className="italic font-light text-[#A07A41]">Documentation Support?</span>
               </h2>
               <div className="h-[1px] w-24 bg-[#A07A41] mx-auto mb-10"></div>
               <p className="text-gray-400 text-base max-w-2xl font-light italic">
                 👉 If your records are messy, your tax process becomes harder.
               </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
              {[
                { t: "Individual Applicants", Icon: UserCheck, d: "Preparing tax records." },
                { t: "Small Businesses", Icon: Briefcase, d: "Organizing financial data." },
                { t: "Freelancers", Icon: Wallet, d: "Managing income/expenses." },
                { t: "Structured Teams", Icon: Layers, d: "Documentation workflows." },
                { t: "Legal/Fin Teams", Icon: Landmark, d: "Backend support." }
              ].map((item, i) => {
                const Icon = item.Icon;
                return (
                  <div 
                    key={i}
                    className={`group p-8 bg-[#1B2D33] border border-white/5 rounded-[2.5rem] hover:bg-[#A07A41] transition-all duration-700 shadow-2xl flex flex-col items-center text-center ${isVisible[2] ? 'animate-fade-in-up' : 'opacity-0'}`}
                    style={{ animationDelay: `${i * 100}ms` }}
                  >
                    <div className="h-16 w-16 bg-[#2A454E] rounded-full flex items-center justify-center text-[#A07A41] mb-8 group-hover:bg-black group-hover:text-[#A07A41] transition-all">
                      <Icon className="h-7 w-7" />
                    </div>
                    <h3 className="text-white font-serif text-lg font-bold mb-4 group-hover:text-black transition-colors leading-tight px-2">
                      {item.t}
                    </h3>
                    <p className="text-gray-500 text-[10px] uppercase tracking-widest font-bold group-hover:text-black/70 transition-colors">{item.d}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* 4. WHAT WE HANDLE */}
        <section 
          ref={addToRefs}
          className="relative py-24 lg:py-40 bg-[#1B2D33] overflow-hidden border-y border-white/5"
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-24 items-center">
              <div className={`${isVisible[3] ? 'animate-fade-in-left' : 'opacity-0'}`}>
                <span className="text-[#A07A41] uppercase tracking-[0.4em] text-xs font-bold mb-6 block">Capabilities</span>
                <h2 className="text-3xl md:text-5xl font-serif font-bold text-white mb-10 leading-tight tracking-tighter">
                  What We Handle in <br />
                  <span className="italic font-light text-[#A07A41]">Tax Documentation.</span>
                </h2>
                <div className="p-8 bg-[#2A454E] border-l-4 border-[#A07A41] rounded-r-2xl shadow-biggest mb-10">
                  <p className="text-white italic text-base font-serif">
                    "This is about clarity and structure, not calculations or advice."
                  </p>
                </div>
                <div className="grid gap-4">
                  {[
                    { t: "Income & expense record organization", Icon: FileSpreadsheet },
                    { t: "Financial document structuring", Icon: Layers },
                    { t: "Supporting documentation preparation", Icon: FileText },
                    { t: "Receipt & invoice categorization", Icon: Receipt },
                    { t: "Creating summaries for review", Icon: PieChart },
                    { t: "Document indexing & management", Icon: Layout }
                  ].map((handle, i) => {
                    const Icon = handle.Icon;
                    return (
                      <div key={i} className="flex items-center gap-6 p-6 bg-[#2A454E] border border-white/5 rounded-2xl group hover:border-[#A07A41]/50 transition-all duration-500">
                        <Icon className="h-6 w-6 text-[#A07A41] group-hover:scale-110 transition-transform" />
                        <span className="text-white font-serif text-base font-bold group-hover:text-[#A07A41] transition-colors">{handle.t}</span>
                      </div>
                    );
                  })}
                </div>
              </div>

              <div className={`relative ${isVisible[3] ? 'animate-fade-in-right' : 'opacity-0'}`}>
                 <div className="relative rounded-[4rem] overflow-hidden border border-white/10 shadow-biggest group">
                    <img src="/coo1.jpg" alt="Organized Records" className="w-full h-auto grayscale opacity-40 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-1000 scale-110 group-hover:scale-100" />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#1B2D33] via-transparent to-transparent"></div>
                    <div className="absolute bottom-16 left-16 z-20">
                       <Calculator className="h-16 w-16 text-[#A07A41] mb-6 opacity-60 group-hover:opacity-100 transition-opacity" />
                       <span className="text-white font-serif text-6xl font-black italic opacity-10">RECORDS.</span>
                    </div>
                 </div>
              </div>
            </div>
          </div>
        </section>

        {/* 5. OUR SUPPORT PROCESS */}
        <section 
          ref={addToRefs}
          className="relative py-24 lg:py-32 bg-[#2A454E] overflow-hidden"
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-24">
               <h2 className={`text-3xl md:text-5xl font-serif font-bold text-white mb-10 tracking-tight ${isVisible[4] ? 'animate-fade-in-up' : 'opacity-0'}`}>
                 Our Tax <br />
                 <span className="italic font-light text-[#A07A41]">Documentation Process.</span>
               </h2>
               <div className="h-[1px] w-24 bg-[#A07A41] mx-auto"></div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-5 gap-12 relative">
              <div className="absolute top-[28px] left-[10%] right-[10%] h-[1px] bg-white/5 hidden md:block"></div>
              {[
                { n: "01", t: "Requirement Review", d: "We assess the type of records needed." },
                { n: "02", t: "Data Organization", d: "Financial records are structured clearly." },
                { n: "03", t: "Document Preparation", d: "Supporting docs are categorized." },
                { n: "04", t: "Review & Accuracy", d: "We ensure completeness." },
                { n: "05", t: "Final Delivery", d: "Organized documentation set provided." }
              ].map((step, i) => (
                <div 
                  key={i} 
                  className={`group flex flex-col items-center text-center relative z-10 ${isVisible[4] ? 'animate-fade-in-up' : 'opacity-0'}`}
                  style={{ animationDelay: `${i * 150}ms` }}
                >
                  <div className="h-14 w-14 rounded-full bg-[#1B2D33] border border-[#A07A41]/30 flex items-center justify-center text-[#A07A41] font-serif font-black text-xl mb-10 group-hover:bg-[#A07A41] group-hover:text-black transition-all duration-500 shadow-xl">
                    {step.n}
                  </div>
                  <h4 className="text-white font-serif text-lg font-bold mb-4 group-hover:text-[#A07A41] transition-colors">{step.t}</h4>
                  <p className="text-gray-500 text-xs leading-relaxed font-light">{step.d}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 6. WHY THIS SERVICE MATTERS */}
        <section 
          ref={addToRefs}
          className="relative py-24 lg:py-48 bg-[#1B2D33] overflow-hidden border-y border-white/5"
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-24 items-center">
              <div className={`${isVisible[5] ? 'animate-fade-in-left' : 'opacity-0'}`}>
                <h2 className="text-3xl md:text-5xl font-serif font-bold text-white mb-10 tracking-tight leading-none">
                  Why Proper Tax <br />
                  <span className="italic font-light text-[#A07A41]">Documentation Matters.</span>
                </h2>
                
                <p className="text-gray-300 text-base md:text-lg font-light leading-relaxed mb-12 italic border-l border-[#A07A41] pl-8">
                   "Most problems come from poor record-keeping—not the tax system itself."
                </p>

                <div className="grid sm:grid-cols-2 gap-10">
                   <div className="space-y-6 p-8 bg-[#2A454E] rounded-3xl border border-red-500/10">
                      <span className="text-red-500/60 uppercase tracking-widest text-[10px] font-black">Disorganization Risks</span>
                      <ul className="space-y-4">
                        {["Filing Delays", "Incorrect Info", "Increased Stress", "Advisor Issues"].map((item, i) => (
                          <li key={i} className="flex items-center gap-3 text-gray-500 text-sm font-light italic">
                             <AlertCircle size={14} className="opacity-50" /> {item}
                          </li>
                        ))}
                      </ul>
                   </div>
                   <div className="space-y-6 p-8 bg-[#2A454E] rounded-3xl border border-[#A07A41]/10">
                      <span className="text-[#A07A41] uppercase tracking-widest text-[10px] font-black">Structure Benefits</span>
                      <ul className="space-y-4">
                        {["Clear Overview", "Efficient Processing", "Better Coordination", "Strategic Control"].map((item, i) => (
                          <li key={i} className="flex items-center gap-3 text-gray-300 text-sm font-light italic">
                             <CheckCircle size={14} className="text-[#A07A41]" /> {item}
                          </li>
                        ))}
                      </ul>
                   </div>
                </div>
              </div>

              <div className={`${isVisible[5] ? 'animate-fade-in-right' : 'opacity-0'}`}>
                 <div className="relative group p-1 bg-gradient-to-br from-[#A07A41]/30 to-transparent rounded-[4rem]">
                    <div className="bg-[#2A454E] rounded-[3.9rem] p-12 lg:p-20 overflow-hidden relative">
                       <Landmark className="absolute -top-10 -right-10 size-40 text-white/5 group-hover:text-[#A07A41]/10 transition-colors" />
                       <Coins className="h-12 w-12 text-[#A07A41] mb-10" />
                       <h3 className="text-white font-serif text-3xl font-bold mb-8">UK IPO Standards.</h3>
                       <p className="text-gray-400 text-sm leading-relaxed font-light italic">
                         "Professionalism starts with organized documentation. We bridge the gap between messy records and professional results."
                       </p>
                    </div>
                 </div>
              </div>
            </div>
          </div>
        </section>

        {/* 7. WHY CHOOSE US */}
        <section 
          ref={addToRefs}
          className="relative py-24 lg:py-40 bg-[#2A454E] overflow-hidden"
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center mb-24">
             <h2 className={`text-3xl md:text-5xl font-serif font-bold text-white mb-10 italic ${isVisible[6] ? 'animate-fade-in-up' : 'opacity-0'}`}>
               Why Choose Our <br />
               <span className="text-[#A07A41]">Tax Support Services?</span>
             </h2>
             <p className="text-gray-400 text-base font-light italic max-w-2xl mx-auto">
               Most people don’t need advice—they need organization first.
             </p>
          </div>

          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                "Structured and organized workflows",
                "Clear financial documentation",
                "Confidential handling of sensitive data",
                "Support for individuals and businesses",
                "UK-focused documentation understanding"
              ].map((item, i) => (
                <div key={i} className={`flex items-center justify-between p-8 bg-[#1B2D33] border border-white/5 rounded-3xl group hover:bg-[#A07A41] transition-all duration-700 shadow-xl ${isVisible[6] ? 'animate-fade-in-up' : 'opacity-0'}`} style={{ animationDelay: `${i * 100}ms` }}>
                   <span className="text-white font-serif text-lg font-bold group-hover:text-black transition-colors">{item}</span>
                   <div className="h-10 w-10 bg-[#2A454E] rounded-full flex items-center justify-center text-[#A07A41] group-hover:bg-black group-hover:text-[#A07A41] transition-all">
                      <ArrowRight size={18} />
                   </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 8. COMPLIANCE & LIMITATIONS */}
        <section 
          ref={addToRefs}
          className="relative py-24 lg:py-40 bg-[#1B2D33] overflow-hidden"
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className={`p-16 md:p-32 bg-[#2A454E] border border-[#A07A41]/20 rounded-[4rem] relative overflow-hidden shadow-biggest text-center group ${isVisible[7] ? 'animate-fade-in-up' : 'opacity-0'}`}>
               <ShieldCheck size={64} className="text-[#A07A41] mx-auto mb-10 opacity-60 group-hover:scale-125 transition-transform" strokeWidth={1} />
               <h2 className="text-2xl md:text-4xl font-serif font-bold text-white mb-12 italic tracking-tight underline underline-offset-[16px] decoration-[#A07A41]/20 uppercase">Professional Standards & Limitations</h2>
               
               <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-12 pt-8">
                 {[
                   { t: "No Tax Advice", d: "Documentation support only." },
                   { t: "No Tax Filing", d: "We prepare, you submit." },
                   { t: "No Advisory", d: "Backend organization role." }
                 ].map((note, i) => (
                   <div key={i} className="flex flex-col items-center gap-4">
                      <div className="h-1 w-10 bg-[#A07A41]/30"></div>
                      <h4 className="text-white font-serif text-xl font-bold italic">{note.t}</h4>
                      <p className="text-gray-500 text-[10px] uppercase tracking-widest font-bold">{note.d}</p>
                   </div>
                 ))}
               </div>
               <p className="mt-20 text-gray-500 text-[10px] italic tracking-[0.3em] uppercase">For regulated advice, qualified professionals should be consulted.</p>
            </div>
          </div>
        </section>

        {/* 9. FAQ SECTION */}
        <section 
          ref={addToRefs}
          className="relative py-24 lg:py-48 bg-[#2A454E] overflow-hidden border-y border-white/5"
        >
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-24">
               <h2 className={`text-3xl md:text-5xl font-serif font-bold text-white mb-8 tracking-tighter ${isVisible[8] ? 'animate-fade-in-up' : 'opacity-0'}`}>
                 Frequently Asked <br />
                 <span className="italic font-light text-[#A07A41]">Questions.</span>
               </h2>
            </div>

            <div className="space-y-4">
              {[
                { q: "Do you file tax returns?", a: "No, we assist with document preparation and organization only. We do not provide tax filing or submission services." },
                { q: "Can you organize my financial records?", a: "Yes, we structure and prepare documentation clearly so it is ready for your accountant or tax professional to review." },
                { q: "Is my financial data secure?", a: "Absolutely. All financial and personal information is handled with the highest level of security and professional confidentiality." },
                { q: "How long does it take?", a: "Typically 1–3 business days depending on the volume and complexity of the records involved." }
              ].map((faq, i) => (
                <div 
                  key={i}
                  className={`border border-white/10 rounded-2xl bg-[#1B2D33] overflow-hidden transition-all duration-500 hover:border-[#A07A41]/30 shadow-xl ${isVisible[8] ? 'animate-fade-in-up' : 'opacity-0'}`}
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
                    <p className="text-gray-400 text-sm font-light font-sans leading-relaxed border-l-2 border-[#A07A41]/20 pl-8 italic">
                      {faq.a}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 10. FINAL CTA SECTION */}
        <section 
          ref={addToRefs}
          className="relative py-24 lg:py-60 bg-[#1B2D33] overflow-hidden"
          id="contact"
        >
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
             <div className={`p-16 md:p-28 bg-[#2A454E] border border-white/10 rounded-[5rem] relative overflow-hidden shadow-biggest text-center group ${isVisible[9] ? 'animate-fade-in-up' : 'opacity-0'}`}>
                <div className="absolute top-0 right-0 p-20 opacity-[0.03] pointer-events-none group-hover:text-[#A07A41] transition-colors"><Calculator size={200} /></div>
                
                <h2 className="text-3xl md:text-5xl lg:text-6xl font-serif font-bold text-white mb-10 tracking-tighter leading-none italic uppercase">
                  Get Your Tax <br />
                  <span className="italic font-light text-[#A07A41]">Documentation Organized.</span>
                </h2>
                
                <p className="text-gray-300 text-base md:text-lg font-light leading-relaxed mb-16 max-w-2xl mx-auto">
                  Properly structured financial records make the entire tax process smoother and more efficient. Ensure your preparation is professional and complete.
                </p>

                <div className="flex flex-col md:flex-row items-center justify-center gap-12 mb-20">
                   <div className="flex items-center gap-4 group cursor-pointer">
                      <Mail size={24} className="text-[#A07A41] group-hover:scale-110 transition-transform" />
                      <span className="text-white font-serif font-bold text-xl md:text-2xl italic group-hover:text-[#A07A41] transition-colors">legal@hsco.co</span>
                   </div>
                   <div className="flex items-center gap-4 group cursor-pointer">
                      <Phone size={24} className="text-[#A07A41] group-hover:scale-110 transition-transform" />
                      <span className="text-white font-serif font-bold text-xl md:text-2xl italic group-hover:text-[#A07A41] transition-colors">+44 20 745 9210</span>
                   </div>
                </div>

                <div className="flex flex-wrap justify-center gap-6">
                  <div 
                    role="button" 
                    className="group relative inline-flex items-center justify-center gap-4 px-10 py-5 bg-[#1B2D33] border border-white/10 text-white font-bold tracking-[0.3em] uppercase text-xs md:text-sm rounded transition-all duration-300 hover:bg-[#A07A41] cursor-pointer shadow-biggest overflow-hidden hover:scale-105"
                  >
                    <span className="relative z-10">Start Now</span>
                    <ArrowRight size={18} className="relative z-10 transform group-hover:translate-x-1 transition-transform duration-300" />
                  </div>
                  <div 
                    role="button" 
                    className="group relative inline-flex items-center justify-center gap-4 px-10 py-5 bg-transparent border border-[#A07A41]/50 text-white font-bold tracking-[0.3em] uppercase text-xs md:text-sm rounded transition-all duration-300 hover:bg-[#A07A41]/10 cursor-pointer shadow-biggest overflow-hidden hover:scale-105"
                  >
                    <span className="relative z-10">Book Consultation</span>
                  </div>
                </div>
             </div>
          </div>
        </section>

      </main>

      {/* SEO FOOTER LINKS */}
      <footer className="bg-[#2A454E] py-16 border-t border-white/5 opacity-40">
        <div className="max-w-7xl mx-auto px-4">
           <div className="flex flex-wrap justify-center gap-x-12 gap-y-6 mb-8 text-[11px] text-gray-500 uppercase tracking-widest font-bold">
              <span>tax documentation support UK</span>
              <span>tax paperwork assistance UK</span>
              <span>basic tax support UK</span>
              <span>financial records organization UK</span>
              <span>self assessment support documents UK</span>
              <span>tax preparation documents UK</span>
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

export default TaxLawAssistancePage;
