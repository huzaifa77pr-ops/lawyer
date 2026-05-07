import React, { useEffect, useState, useRef } from 'react';
import { 
  FileText, ClipboardCheck, AlertCircle, Clock, ShieldCheck, 
  ArrowRight, CheckCircle, Search, Layers, UserCheck, 
  Scale, BookOpen, ChevronDown, Mail, Phone, Users, 
  Briefcase, Handshake, Zap, ShieldAlert, Award,
  Landmark, Receipt, PieChart, FileSpreadsheet, Wallet, Layout
} from 'lucide-react';


const BankruptcyDocumentationPage = () => {
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
            <div className="absolute inset-0 bg-[#2A454E]/80 z-10" />
            <img
              src="/heroo.jpg"
              alt="Bankruptcy Documentation"
              className="w-full h-full object-cover object-center opacity-30 scale-105 animate-[kenburns_20s_ease-out_forwards]"
            />
          </div>

          <div className="relative z-20 px-4 sm:px-6 lg:px-8 max-w-[90rem] mx-auto w-full">
            <div className={`max-w-4xl ${isVisible[0] ? 'animate-fade-in-up' : 'opacity-0'}`}>
              <div className="inline-flex items-center gap-3 mb-8 px-5 py-2 bg-white/5 border border-white/10 rounded-full">
                <div className="h-1 w-8 bg-[#A07A41]"></div>
                <span className="text-[#A07A41] uppercase tracking-[0.4em] text-[10px] font-bold">
                  Insolvency Workflow Support
                </span>
              </div>
              
              <h1 className="text-4xl sm:text-5xl md:text-6xl font-serif font-bold text-white leading-[1.1] mb-8 tracking-tighter">
                Bankruptcy <br />
                <span className="italic font-light text-[#A07A41]">Documentation Support UK</span>
              </h1>
              
              <p className="text-gray-300 text-base md:text-lg font-light leading-relaxed mb-12 max-w-2xl">
                Structured documentation support for bankruptcy and insolvency matters, helping individuals and businesses organize financial records, prepare required documents, and manage case paperwork effectively.
              </p>

              <div className="flex flex-col sm:flex-row gap-5 mb-20">
                <a 
                  href="#contact" 
                  className="group relative flex items-center justify-center gap-4 px-10 py-5 bg-[#1B2D33] border border-white/10 text-white font-bold tracking-[0.2em] uppercase text-xs md:text-sm rounded transition-all duration-300 hover:bg-[#A07A41] shadow-biggest overflow-hidden"
                >
                  <span className="relative z-10">Request Documentation Support</span>
                  <ArrowRight className="h-4 w-4 transform group-hover:translate-x-1 transition-transform duration-300" />
                </a>
                <a 
                  href="#consultation" 
                  className="group flex items-center justify-center gap-4 px-10 py-5 bg-transparent border border-[#A07A41]/50 text-white font-bold tracking-[0.2em] uppercase text-xs md:text-sm rounded transition-all duration-300 hover:border-[#A07A41] hover:bg-[#A07A41]/10"
                >
                  Book Consultation
                </a>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl border-t border-white/10 pt-12">
                 {[
                   { t: "UK-focused support", i: ShieldCheck },
                   { t: "Confidential financial handling", i: Wallet },
                   { t: "Structured case preparation", i: Layout }
                 ].map((signal, i) => {
                   const Icon = signal.i;
                   return (
                     <div key={i} className="flex flex-col gap-3 group">
                       <Icon className="h-6 w-6 text-[#A07A41] group-hover:scale-110 transition-transform" strokeWidth={1.5} />
                       <span className="text-gray-400 text-[10px] uppercase tracking-[0.2em] font-bold">{signal.t}</span>
                     </div>
                   );
                 })}
              </div>
            </div>
          </div>
        </section>

        {/* 2. WHAT IS BANKRUPTCY DOCUMENTATION SUPPORT */}
        <section 
          ref={addToRefs}
          className="relative py-24 lg:py-40 bg-[#2A454E] overflow-hidden"
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-20 items-center">
              <div className={`${isVisible[1] ? 'animate-fade-in-left' : 'opacity-0'}`}>
                <div className="flex items-center gap-3 mb-6">
                  <div className="h-[1px] w-12 bg-[#A07A41]"></div>
                  <span className="text-[#A07A41] uppercase tracking-widest text-xs font-semibold">Service Definition</span>
                </div>
                <h2 className="text-3xl md:text-5xl font-serif font-bold text-white mb-10 leading-tight">
                  What is Bankruptcy <br />
                  <span className="italic font-light text-[#A07A41]">Documentation Support?</span>
                </h2>
                <div className="space-y-8 max-w-xl text-gray-300">
                  <p className="text-lg font-light leading-relaxed border-l-2 border-[#A07A41] pl-8">
                    Bankruptcy documentation support involves organizing and preparing the financial and legal documents required for bankruptcy or insolvency processes.
                  </p>
                  
                  <div className="grid sm:grid-cols-2 gap-6 pt-6">
                    {[
                      { t: "Financial Records", i: Receipt },
                      { t: "Debt & Creditors", i: AlertCircle },
                      { t: "Income & Spend", i: PieChart },
                      { t: "App Support", i: FileText }
                    ].map((item, i) => {
                      const Icon = item.i;
                      return (
                        <div key={i} className="flex items-center gap-4 p-5 bg-[#1B2D33] border border-white/5 rounded-2xl group hover:border-[#A07A41]/30 transition-all">
                          <Icon className="h-5 w-5 text-[#A07A41] shrink-0" />
                          <span className="text-white font-serif font-bold text-sm leading-tight">{item.t}</span>
                        </div>
                      );
                    })}

                  </div>

                  <p className="text-gray-400 text-base font-light italic opacity-80 pt-8 flex items-center gap-4">
                    <AlertCircle className="h-5 w-5 text-[#A07A41]" />
                    "👉 This is structured support for documentation—not financial or legal decision-making."
                  </p>
                </div>
              </div>
              
              <div className={`relative ${isVisible[1] ? 'animate-fade-in-right' : 'opacity-0'}`}>
                <div className="relative group">
                   <div className="absolute -inset-10 bg-[#A07A41]/5 rounded-full blur-[100px] animate-pulse"></div>
                   <div className="relative rounded-[3rem] overflow-hidden border border-white/10 shadow-biggest bg-[#1B2D33] p-12 lg:p-16">
                      <div className="flex items-center gap-6 mb-12">
                         <div className="h-16 w-16 rounded-2xl bg-[#2A454E] flex items-center justify-center text-[#A07A41]">
                            <Landmark size={32} />
                         </div>
                         <h3 className="text-white font-serif text-3xl font-bold">Insolvency Precision.</h3>
                      </div>
                      <div className="space-y-6">
                         {[
                           "Statutory Requirement Check",
                           "Chronological Record Indexing",
                           "Accuracy Verification",
                           "Secure Digital Archiving"
                         ].map((text, i) => (
                           <div key={i} className="flex items-center gap-4 text-gray-400 text-sm font-light">
                              <div className="h-1.5 w-1.5 rounded-full bg-[#A07A41]"></div>
                              <span>{text}</span>
                           </div>
                         ))}
                      </div>
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
            <div className="text-center mb-24">
               <span className="text-[#A07A41] uppercase tracking-[0.4em] text-xs font-bold mb-6">Audience Focus</span>
               <h2 className={`text-3xl md:text-5xl font-serif font-bold text-white mb-8 tracking-tight ${isVisible[2] ? 'animate-fade-in-up' : 'opacity-0'}`}>
                 Who Needs Bankruptcy <br />
                 <span className="italic font-light text-[#A07A41]">Documentation Support?</span>
               </h2>
               <div className="h-[2px] w-24 bg-[#A07A41] mx-auto mb-10"></div>
               <p className="text-gray-400 text-base max-w-2xl mx-auto font-light italic">
                 👉 If your documents are disorganized, the process becomes slower and more stressful.
               </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                { t: "Individual Applicants", i: UserCheck, d: "Clear personal bankruptcy prep." },
                { t: "Businesses & SME's", i: Briefcase, d: "Professional insolvency records." },
                { t: "Legal Professionals", i: Scale, d: "Paralegal support for cases." },
                { t: "Organized Clients", i: FileText, d: "Meticulous record keeping." },
                { t: "Complex Teams", i: Users, d: "Corporate insolvency workflows." }
              ].map((item, i) => (
                <div 
                  key={i}
                  className={`group p-10 bg-[#2A454E] border border-white/5 rounded-3xl hover:bg-[#A07A41] transition-all duration-700 shadow-biggest flex flex-col items-start ${isVisible[2] ? 'animate-fade-in-up' : 'opacity-0'}`}
                  style={{ animationDelay: `${i * 100}ms` }}
                >
                  <div className="h-14 w-14 bg-[#1B2D33] rounded-2xl flex items-center justify-center text-[#A07A41] mb-8 group-hover:bg-black group-hover:text-[#A07A41] transition-all">
                    <item.i className="h-7 w-7" />
                  </div>
                  <h3 className="text-white font-serif text-xl font-bold mb-4 group-hover:text-black transition-colors">
                    {item.t}
                  </h3>
                  <p className="text-gray-400 text-xs font-light leading-relaxed group-hover:text-black/80 transition-colors uppercase tracking-widest">{item.d}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 4. WHAT WE HANDLE */}
        <section 
          ref={addToRefs}
          className="relative py-24 lg:py-40 bg-[#2A454E] overflow-hidden"
        >
          <div className="max-w-[90rem] mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-24 items-center">
              <div className={`order-2 lg:order-1 ${isVisible[3] ? 'animate-fade-in-left' : 'opacity-0'}`}>
                <div className="grid sm:grid-cols-2 gap-4">
                  {[
                    "Financial record organization",
                    "Income & expenditure summaries",
                    "Creditor & debt list structuring",
                    "Document indexing",
                    "File organization",
                    "Supporting doc preparation",
                    "Case file management",
                    "Compliance record-keeping"
                  ].map((doc, i) => (
                    <div key={i} className="flex items-center gap-4 p-5 bg-[#1B2D33] border border-white/5 rounded-2xl group hover:border-[#A07A41]/50 transition-all duration-500 shadow-xl">
                      <div className="h-2 w-2 rounded-full bg-[#A07A41] group-hover:scale-150 transition-transform"></div>
                      <span className="text-white font-serif text-sm font-bold group-hover:text-[#A07A41] transition-colors">{doc}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className={`order-1 lg:order-2 ${isVisible[3] ? 'animate-fade-in-right' : 'opacity-0'}`}>
                <span className="text-[#A07A41] uppercase tracking-[0.4em] text-xs font-bold mb-6 block text-right lg:text-left">Insolvency Scope</span>
                <h2 className="text-3xl md:text-5xl font-serif font-bold text-white mb-10 leading-tight tracking-tighter text-right lg:text-left">
                  What We Handle in <br />
                  <span className="italic font-light text-[#A07A41]">Bankruptcy Documentation.</span>
                </h2>
                <div className="p-8 bg-[#1B2D33] border-r-4 lg:border-r-0 lg:border-l-4 border-[#A07A41] rounded-l-xl lg:rounded-l-none lg:rounded-r-xl relative overflow-hidden group">
                  <div className="absolute top-0 right-0 p-10 opacity-[0.05] group-hover:opacity-[0.1] transition-opacity">
                    <FileSpreadsheet size={80} />
                  </div>
                  <p className="text-white italic text-base relative z-10 font-serif text-right lg:text-left">
                    "👉 Most issues arise from missing or incomplete documentation."
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 5. OUR DOCUMENTATION PROCESS */}
        <section 
          ref={addToRefs}
          className="relative py-24 lg:py-32 bg-[#1B2D33] overflow-hidden"
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col items-center text-center mb-24">
               <span className="text-[#A07A41] uppercase tracking-[0.4em] text-xs font-bold mb-6 block">Execution Workflow</span>
               <h2 className={`text-3xl md:text-5xl font-serif font-bold text-white mb-10 tracking-tight ${isVisible[4] ? 'animate-fade-in-up' : 'opacity-0'}`}>
                 Our Bankruptcy <br />
                 <span className="italic font-light text-[#A07A41]">Documentation Process.</span>
               </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-5 gap-8">
              {[
                { n: "01", t: "Case Overview Review", d: "We assess the documents and information available." },
                { n: "02", t: "Financial Data Organization", d: "Income, debts, and records are structured clearly." },
                { n: "03", t: "Document Preparation", d: "Required documents are compiled and formatted." },
                { n: "04", t: "Review & Accuracy Check", d: "We ensure completeness and consistency." },
                { n: "05", t: "Final Delivery", d: "A structured documentation set is provided." }
              ].map((step, i) => (
                <div 
                  key={i} 
                  className={`group relative flex flex-col items-center text-center ${isVisible[4] ? 'animate-fade-in-up' : 'opacity-0'}`}
                  style={{ animationDelay: `${i * 150}ms` }}
                >
                  <div className="h-16 w-16 rounded-full bg-[#2A454E] border border-white/5 flex items-center justify-center text-[#A07A41] font-serif font-black text-xl mb-8 group-hover:bg-[#A07A41] group-hover:text-black transition-all group-hover:scale-110 shadow-biggest">
                    {step.n}
                  </div>
                  <h4 className="text-white font-serif text-lg font-bold mb-4 px-4">{step.t}</h4>
                  <p className="text-gray-500 text-xs leading-relaxed font-light">{step.d}</p>
                  {i < 4 && <div className="absolute top-8 left-[calc(50%+32px)] w-[calc(100%-64px)] h-[1px] bg-[#A07A41]/20 hidden md:block"></div>}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 6. WHY DOCUMENTATION MATTERS */}
        <section 
          ref={addToRefs}
          className="relative py-24 lg:py-48 bg-[#2A454E] overflow-hidden border-y border-white/5"
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-24 items-center">
              <div className={`${isVisible[5] ? 'animate-fade-in-left' : 'opacity-0'}`}>
                <h2 className="text-3xl md:text-5xl font-serif font-bold text-white mb-10 tracking-tight leading-none">
                  Why Proper <br />
                  <span className="italic font-light text-[#A07A41]">Documentation is Critical.</span>
                </h2>
                
                <p className="text-gray-300 text-base md:text-lg font-light leading-relaxed mb-12 border-l-2 border-[#A07A41] pl-8 italic">
                   "This is about clarity and control in a complex situation."
                </p>

                <div className="grid sm:grid-cols-2 gap-10">
                  <div className="space-y-6">
                    <span className="text-red-500/60 uppercase tracking-widest text-[10px] font-black border-b border-red-500/20 pb-2 block">The Risks</span>
                    <ul className="space-y-4">
                      {["Processing Delays", "Incorrect Information", "Increased Stress", "Proceeding Complications"].map((r, i) => (
                        <li key={i} className="flex items-center gap-3 text-gray-500 font-light text-sm italic">
                          <AlertCircle className="h-3 w-3 text-red-500/50" /> {r}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="space-y-6">
                    <span className="text-[#A07A41] uppercase tracking-widest text-[10px] font-black border-b border-[#A07A41]/20 pb-2 block">The Benefits</span>
                    <ul className="space-y-4">
                      {["Clear Financial Overview", "Faster Processing", "Better Preparation", "Strategic Clarity"].map((b, i) => (
                        <li key={i} className="flex items-center gap-3 text-gray-300 font-light text-sm italic">
                          <CheckCircle className="h-3 w-3 text-[#A07A41]" /> {b}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>

              <div className={`${isVisible[5] ? 'animate-fade-in-right' : 'opacity-0'}`}>
                 <div className="relative rounded-[4rem] overflow-hidden border border-white/10 shadow-biggest group">
                    <img src="/leg.jpg" alt="Documentation Importance" className="w-full h-auto grayscale opacity-50 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-1000" />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#2A454E] via-[#2A454E]/20 to-transparent"></div>
                    <div className="absolute bottom-16 left-16 z-20">
                       <span className="text-[#A07A41] font-serif text-6xl font-black italic opacity-20">CLARITY.</span>
                    </div>
                 </div>
              </div>
            </div>
          </div>
        </section>

        {/* 7. WHY CHOOSE US */}
        <section 
          ref={addToRefs}
          className="relative py-24 lg:py-40 bg-[#1B2D33] overflow-hidden"
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-24 items-center">
               <div className={`${isVisible[6] ? 'animate-fade-in-left' : 'opacity-0'}`}>
                  <h2 className="text-3xl md:text-5xl font-serif font-bold text-white mb-10 tracking-tight italic">
                    Why Choose Our <br />
                    <span className="text-[#A07A41]">Documentation Support?</span>
                  </h2>
                  <p className="text-gray-400 text-base font-light leading-relaxed mb-12 max-w-lg italic border-l border-[#A07A41]/30 pl-8">
                    Most people struggle not with the process—but with the paperwork. We provide the structured approach needed to move forward.
                  </p>
               </div>

               <div className={`grid gap-4 ${isVisible[6] ? 'animate-fade-in-right' : 'opacity-0'}`}>
                 {[
                   "Structured and organized documentation",
                   "Clear financial summaries and records",
                   "Confidential handling of sensitive data",
                   "Support for individuals and businesses",
                   "UK-focused process understanding"
                 ].map((item, i) => (
                   <div key={i} className="flex items-center justify-between p-8 bg-[#2A454E] border border-white/5 rounded-3xl group hover:border-[#A07A41]/40 transition-all duration-500 shadow-biggest">
                      <span className="text-white font-serif text-lg font-bold group-hover:text-[#A07A41] transition-colors">{item}</span>
                      <div className="h-10 w-10 bg-[#1B2D33] rounded-full flex items-center justify-center text-[#A07A41] group-hover:bg-[#A07A41] group-hover:text-black transition-all">
                         <ArrowRight size={18} />
                      </div>
                   </div>
                 ))}
               </div>
            </div>
          </div>
        </section>

        {/* 8. COMPLIANCE & LIMITATIONS */}
        <section 
          ref={addToRefs}
          className="relative py-24 lg:py-40 bg-[#2A454E] overflow-hidden"
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className={`p-16 md:p-32 bg-[#1B2D33] border border-[#A07A41]/20 rounded-[4rem] relative overflow-hidden shadow-biggest text-center group ${isVisible[7] ? 'animate-fade-in-up' : 'opacity-0'}`}>
               <ShieldCheck size={64} className="text-[#A07A41] mx-auto mb-10 opacity-60 group-hover:scale-125 transition-transform" strokeWidth={1} />
               <h2 className="text-2xl md:text-4xl font-serif font-bold text-white mb-12 italic tracking-tight underline underline-offset-[16px] decoration-[#A07A41]/20 uppercase">Professional Standards & Limitations</h2>
               
               <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-12 relative z-10 pt-8">
                 {[
                   { t: "No Financial Advice", d: "Purely documentation support." },
                   { t: "No Representation", d: "Backend paralegal support." },
                   { t: "No Guarantees", d: "Focus on process efficiency." }
                 ].map((note, i) => (
                   <div key={i} className="flex flex-col items-center gap-4">
                      <div className="h-12 w-12 rounded-full border border-[#A07A41]/30 flex items-center justify-center text-[#A07A41]">
                        <ShieldAlert size={20} />
                      </div>
                      <h4 className="text-white font-serif text-xl font-bold italic">{note.t}</h4>
                      <p className="text-gray-500 text-[10px] uppercase tracking-widest font-bold">{note.d}</p>
                   </div>
                 ))}
               </div>
               <p className="mt-20 text-gray-500 text-[10px] italic tracking-[0.3em] uppercase">This keeps your service credible and safe.</p>
            </div>
          </div>
        </section>

        {/* 9. FAQ SECTION */}
        <section 
          ref={addToRefs}
          className="relative py-24 lg:py-48 bg-[#1B2D33] overflow-hidden border-y border-white/5"
        >
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-24">
               <span className="text-[#A07A41] uppercase tracking-[0.5em] text-[10px] font-bold mb-6 block">Common Inquiries</span>
               <h2 className={`text-3xl md:text-5xl font-serif font-bold text-white mb-8 tracking-tighter ${isVisible[8] ? 'animate-fade-in-up' : 'opacity-0'}`}>
                 Frequently Asked <br />
                 <span className="italic font-light text-[#A07A41]">Questions.</span>
               </h2>
            </div>

            <div className="space-y-4">
              {[
                { q: "Do you handle bankruptcy applications?", a: "We assist with documentation preparation and organization only. We do not submit applications or act as your legal representative in proceedings." },
                { q: "Can you organize my financial records?", a: "Yes, we structure and prepare financial documents clearly, making it easier for you and your legal or financial advisors to review." },
                { q: "Is my data confidential?", a: "Absolutely. All financial information is handled securely with strict professional confidentiality standards." },
                { q: "How long does it take?", a: "Typically 1–3 business days depending on the volume and complexity of the financial records involved." }
              ].map((faq, i) => (
                <div 
                  key={i}
                  className={`border border-white/10 rounded-2xl bg-[#2A454E] overflow-hidden transition-all duration-500 hover:border-[#A07A41]/30 shadow-xl ${isVisible[8] ? 'animate-fade-in-up' : 'opacity-0'}`}
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
          className="relative py-24 lg:py-60 bg-[#2A454E] overflow-hidden"
          id="contact"
        >
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
             <div className={`p-16 md:p-28 bg-[#1B2D33] border border-white/10 rounded-[5rem] relative overflow-hidden shadow-biggest text-center group ${isVisible[9] ? 'animate-fade-in-up' : 'opacity-0'}`}>
                <div className="absolute top-0 right-0 p-20 opacity-[0.03] pointer-events-none group-hover:text-[#A07A41] transition-colors"><PieChart size={180} /></div>
                
                <h2 className="text-3xl md:text-5xl lg:text-6xl font-serif font-bold text-white mb-10 tracking-tighter leading-none italic uppercase">
                  Get Your Documentation <br />
                  <span className="italic font-light text-[#A07A41]">Organized Properly.</span>
                </h2>
                
                <p className="text-gray-300 text-base md:text-lg font-light leading-relaxed mb-16 max-w-2xl mx-auto">
                  Clear and structured documentation reduces stress and improves the efficiency of the bankruptcy process. Ensure your records are professional and complete.
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
                    className="group relative inline-flex items-center justify-center gap-4 px-10 py-5 bg-[#2A454E] border border-white/10 text-white font-bold tracking-[0.3em] uppercase text-xs md:text-sm rounded transition-all duration-300 hover:bg-[#A07A41] cursor-pointer shadow-biggest overflow-hidden hover:scale-105"
                  >
                    <span className="relative z-10">Start Documentation Support</span>
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
      <footer className="bg-[#1B2D33] py-16 border-t border-white/5 opacity-40">
        <div className="max-w-7xl mx-auto px-4">
           <div className="flex flex-wrap justify-center gap-x-12 gap-y-6 mb-8 text-[11px] text-gray-500 uppercase tracking-widest font-bold">
              <span>bankruptcy documentation support UK</span>
              <span>insolvency documentation UK</span>
              <span>bankruptcy paperwork assistance UK</span>
              <span>debt documentation support UK</span>
              <span>financial records organization UK</span>
              <span>bankruptcy case preparation UK</span>
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

export default BankruptcyDocumentationPage;
