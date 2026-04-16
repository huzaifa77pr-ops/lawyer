import React, { useEffect, useState, useRef } from 'react';
import { 
  ArrowRight, ClipboardCheck, Scale, ShieldCheck, AlertCircle, 
  ChevronDown, Target, CheckCircle2, 
  Clock, Lock, Users, Send, FileSearch, 
  MessageSquare, BookOpen, AlertTriangle
} from 'lucide-react';

const ClientIntakeEvaluationPage = () => {
  const [section1Visible, setSection1Visible] = useState(false);
  const [section2Visible, setSection2Visible] = useState(false);
  const [section3Visible, setSection3Visible] = useState(false);
  const [section4Visible, setSection4Visible] = useState(false);
  const [section5Visible, setSection5Visible] = useState(false);
  const [section6Visible, setSection6Visible] = useState(false);
  const [section7Visible, setSection7Visible] = useState(false);
  const [activeFaq, setActiveFaq] = useState(null);
  
  // Form State
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    location: '',
    caseType: '',
    description: ''
  });

  const section1Ref = useRef(null);
  const section2Ref = useRef(null);
  const section3Ref = useRef(null);
  const section4Ref = useRef(null);
  const section5Ref = useRef(null);
  const section6Ref = useRef(null);
  const section7Ref = useRef(null);

  useEffect(() => {
    window.scrollTo(0, 0);

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            if (entry.target === section1Ref.current) setSection1Visible(true);
            if (entry.target === section2Ref.current) setSection2Visible(true);
            if (entry.target === section3Ref.current) setSection3Visible(true);
            if (entry.target === section4Ref.current) setSection4Visible(true);
            if (entry.target === section5Ref.current) setSection5Visible(true);
            if (entry.target === section6Ref.current) setSection6Visible(true);
            if (entry.target === section7Ref.current) setSection7Visible(true);
          }
        });
      },
      { threshold: 0.1 }
    );

    [section1Ref, section2Ref, section3Ref, section4Ref, section5Ref, section6Ref, section7Ref].forEach(ref => {
      if (ref.current) observer.observe(ref.current);
    });

    return () => observer.disconnect();
  }, []);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Case Evaluation Submitted Successfully. Our team will contact you within 24-48 hours.");
    // Reset form logic would go here
  };

  return (
    <div className="min-h-screen bg-[#1B2D33] flex flex-col overflow-hidden text-white font-sans selection:bg-[#A07A41] selection:text-black">
      <main className="flex-grow">
        
        {/* ——— 1. HERO SECTION ——— */}
        <section 
          ref={section1Ref}
          className="relative min-h-[90vh] flex items-center pt-32 lg:pt-40 pb-24 overflow-hidden border-b border-white/5"
        >
          {/* SEO Hidden Content */}
          <div className="hidden">
             <h1>Get a Free Case Evaluation from Experienced UK Legal Experts</h1>
             <h2>client intake form UK law firm, legal case evaluation UK, free legal consultation UK, solicitor case review online</h2>
             <p>Confidential, fast, and professional legal assessment of your case within 24–48 hours across the UK.</p>
          </div>

          {/* Background Elements */}
          <div className="absolute inset-0 z-0">
            <div className={`absolute inset-0 bg-[#1B2D33] transition-opacity duration-1000 ${section1Visible ? 'opacity-30' : 'opacity-0'}`}>
              <div className="absolute inset-0 bg-cover bg-center animate-[ken-burns_20s_linear_infinite]" style={{ backgroundImage: 'url("https://images.unsplash.com/photo-1450101499163-c8848c66ca85?auto=format&fit=crop&q=80")' }}></div>
            </div>
            <div className="absolute inset-0 bg-gradient-to-r from-[#1B2D33] via-[#1B2D33]/70 to-transparent z-10"></div>
          </div>

          <div className="absolute left-[3%] top-0 bottom-0 w-px bg-[#A07A41]/10 hidden lg:block z-20"></div>

          <div className="relative z-20 px-4 sm:px-6 lg:px-8 max-w-[85rem] mx-auto w-full">
            <div className="grid lg:grid-cols-12 gap-16 items-center">
              <div className={`lg:col-span-8 ${section1Visible ? 'animate-fade-in-left' : 'opacity-0'}`}>
                <div className="inline-flex items-center gap-3 mb-8 px-4 py-1.5 bg-white/5 border border-white/10 rounded-full backdrop-blur-3xl shadow-xl">
                  <ClipboardCheck size={10} className="text-[#A07A41]" />
                  <span className="text-[#A07A41] uppercase tracking-[0.4em] text-[8px] font-black italic">Judicial Intake Protocol</span>
                </div>
                
                <h1 className="text-3xl md:text-5xl lg:text-7xl font-serif font-bold text-white leading-[1.05] mb-8 tracking-tighter">
                  Intake & <br />
                  <span className="italic font-light text-[#A07A41]">Case Evaluation.</span>
                </h1>
                
                <div className="flex gap-8 items-start mb-10 border-l border-[#A07A41]/30 pl-8 max-w-2xl">
                  <div className="max-w-xl">
                    <p className="text-white text-xs md:text-sm font-light leading-relaxed mb-6 italic opacity-90 border-b border-white/10 pb-4">
                      Confidential, fast, and professional legal assessment of your case within 24–48 hours.
                    </p>
                    <p className="text-gray-400 text-[10px] md:text-xs font-light leading-relaxed uppercase tracking-widest font-black italic">
                      "We review your case carefully and guide you on the strongest legal options available under UK law."
                    </p>
                  </div>
                </div>

                <div className="flex flex-wrap gap-6 items-center">
                  <a href="#intake-form" className="px-10 py-5 bg-[#A07A41] text-black font-bold tracking-[0.3em] uppercase text-[10px] rounded hover:bg-white transition-all duration-300 shadow-2xl hover:scale-105 active:scale-95">
                    Start Your Case Evaluation
                  </a>
                  <a href="#cta" className="flex items-center gap-2 text-white/50 text-[10px] font-black uppercase tracking-widest italic hover:text-[#A07A41] transition-colors border-b border-white/10 pb-1 group">
                    Speak to a Legal Advisor
                    <ArrowRight size={12} className="group-hover:translate-x-1 transition-transform" />
                  </a>
                </div>
              </div>

               <div className={`lg:col-span-4 hidden lg:block relative ${section1Visible ? 'animate-fade-in-bottom-right animation-delay-300' : 'opacity-0'}`}>
                 <div className="relative p-2 bg-white/5 border border-white/10 rounded-[3rem] shadow-shadow-big overflow-hidden group">
                    <div className="absolute inset-0 bg-gradient-to-t from-[#1B2D33] to-transparent z-10 opacity-60"></div>
                    <img 
                      src="https://images.unsplash.com/photo-1589829545856-d10d557cf95f?auto=format&fit=crop&q=80" 
                      alt="Legal Evaluation" 
                      className="w-full h-[550px] object-cover rounded-[2.5rem] grayscale group-hover:grayscale-0 transition-all duration-[2000ms] relative z-0 shadow-2xl" 
                    />
                    <div className="absolute bottom-10 left-10 right-10 z-20 text-center bg-black/40 p-6 backdrop-blur-xl border border-white/10 rounded-2xl">
                       <span className="text-[#A07A41] text-[10px] font-black uppercase tracking-[0.3em] italic mb-2 block">Case Strength Matrix</span>
                       <p className="text-white text-[9px] font-sans leading-none opacity-60">Analytical assessment based on current UK statues.</p>
                    </div>
                 </div>
              </div>
            </div>
          </div>
        </section>

        {/* ——— 2. WHY THIS EVALUATION MATTERS ——— */}
        <section ref={section2Ref} className="relative py-24 lg:py-48 bg-white/[0.02] overflow-hidden">
           <div className="px-4 sm:px-6 lg:px-8 max-w-[85rem] mx-auto grid lg:grid-cols-2 gap-24 items-center">
              <div className={`${section2Visible ? 'animate-fade-in-left' : 'opacity-0'}`}>
                 <span className="text-[#A07A41] uppercase tracking-[0.5em] text-[8px] font-black mb-8 block font-serif">Diagnostic Integrity</span>
                 <h2 className="text-2xl md:text-5xl font-serif font-bold text-white tracking-tighter italic uppercase mb-10 leading-none">Why Your Evaluation <br /><span className="italic font-light text-[#A07A41]">Is Critical.</span></h2>
                 <p className="text-gray-300 text-sm md:text-base font-serif italic italic font-light italic leading-loose opacity-80 border-l border-[#A07A41]/30 pl-8 mb-12">
                    Most people don’t know whether their situation is legally actionable. This evaluation helps you understand your position without the guesswork.
                 </p>
                 <div className="p-8 bg-black/40 border border-[#A07A41]/20 rounded-[3rem] backdrop-blur-3xl shadow-big">
                    <div className="flex items-center gap-4 mb-6">
                       <div className="h-8 w-8 bg-[#A07A41]/10 rounded-full flex items-center justify-center text-[#A07A41]"><Scale size={14} /></div>
                       <span className="text-white text-xs font-serif font-black italic uppercase tracking-widest">Procedural Benchmarks</span>
                    </div>
                    <ul className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                       {[ "Valid legal claim status", "Applicable UK Law", "Outcomes and risks", "Estimated timelines", "Compensation paths" ].map((point, i) => (
                          <li key={i} className="flex items-center gap-3 text-gray-500 text-[9px] font-black uppercase tracking-widest group cursor-default hover:text-white transition-colors">
                             <div className="h-4 w-4 rounded bg-[#A07A41]/20 flex items-center justify-center text-[#A07A41] group-hover:bg-[#A07A41] group-hover:text-black transition-colors overflow-hidden italic font-bold text-[8px]">✓</div>
                             {point}
                          </li>
                       ))}
                    </ul>
                 </div>
              </div>

              <div className={`relative ${section2Visible ? 'animate-fade-in-right animation-delay-300' : 'opacity-0'}`}>
                 <div className="p-12 lg:p-20 bg-white/[0.02] border border-white/5 rounded-[5rem] relative overflow-hidden group shadow-shadow-big text-center">
                    <h4 className="text-[#A07A41] text-xs font-serif font-bold mb-10 italic uppercase border-b border-white/10 pb-4">Structured Assessment</h4>
                    <p className="text-gray-400 text-[10px] md:text-xs leading-loose italic opacity-70 mb-12">
                       "We only proceed when there is real legal merit. Our goal is clarity, not false hope."
                    </p>
                    <div className="inline-flex items-center gap-6 px-10 py-5 bg-[#1B2D33] border border-white/10 rounded-full hover:border-[#A07A41] transition-all cursor-pointer shadow-inner">
                       <Users size={16} className="text-[#A07A41]" />
                       <span className="text-white text-[9px] font-black tracking-widest uppercase">Consult with Experts</span>
                    </div>
                 </div>
              </div>
           </div>
        </section>

        {/* ——— 3. HOW IT WORKS (STEPPING PIPELINE) ——— */}
        <section ref={section3Ref} className="relative py-24 lg:py-48 bg-[#1B2D33] overflow-hidden border-y border-white/5">
           <div className="px-4 sm:px-6 lg:px-8 max-w-[85rem] mx-auto">
              <div className="text-center mb-24">
                 <h2 className={`text-2xl md:text-5xl font-serif font-bold text-white tracking-widest italic uppercase leading-none ${section3Visible ? 'animate-fade-in-up' : 'opacity-0'}`}>Evaluation <br /><span className="italic font-light text-[#A07A41]">Pipeline.</span></h2>
              </div>

              <div className="grid md:grid-cols-4 gap-1 relative">
                 <div className="absolute top-[50%] left-0 right-0 h-px bg-white/5 z-0 hidden md:block"></div>
                 {[
                   { t: "Submit Details", d: "Fill out a secure intake form with basic case information.", i: Send },
                   { t: "Legal Review", d: "Our team reviews your case based on current UK law.", i: FileSearch },
                   { t: "Assessment Report", d: "A clear explanation of your position and strength.", i: BookOpen },
                   { t: "Specialised Advice", d: "Book a detailed consultation with a solicitor if needed.", i: MessageSquare }
                 ].map((step, i) => (
                    <div key={i} className={`relative z-10 p-10 bg-white/[0.01] hover:bg-[#A07A41]/5 transition-all duration-700 border border-white/5 rounded-[3rem] group ${section3Visible ? 'animate-fade-in-up' : 'opacity-0'}`} style={{ animationDelay: `${i * 200}ms` }}>
                       <div className="h-16 w-16 bg-black rounded-[2rem] flex items-center justify-center text-[#A07A41] mb-8 border border-white/5 shadow-big group-hover:rotate-12 transition-all">
                          <step.i size={24} />
                       </div>
                       <span className="text-[#A07A41]/30 font-serif font-black italic block mb-2 text-2xl group-hover:text-[#A07A41] transition-colors">0{i+1}</span>
                       <h4 className="text-white font-serif font-bold text-sm md:text-base italic uppercase group-hover:text-[#A07A41] mb-4 transition-colors">{step.t}</h4>
                       <p className="text-gray-500 text-[10px] md:text-xs leading-relaxed uppercase tracking-widest font-black italic group-hover:text-gray-300 transition-colors">{step.d}</p>
                    </div>
                 ))}
              </div>
           </div>
        </section>

        {/* ——— 4. CASE TYPES & 5. TRUST (MAPPING GRID) ——— */}
        <section ref={section4Ref} className="relative py-24 lg:py-48 bg-[#1B2D33] overflow-hidden">
           <div className="px-4 sm:px-6 lg:px-8 max-w-[85rem] mx-auto grid lg:grid-cols-12 gap-24 items-start">
              {/* Case Types */}
              <div className={`lg:col-span-7 ${section4Visible ? 'animate-fade-in-left' : 'opacity-0'}`}>
                 <h2 className="text-[#A07A41] text-[8px] uppercase tracking-[0.6em] font-black mb-10 italic">Evaluation Spectrum</h2>
                 <h3 className="text-2xl md:text-4xl font-serif font-bold text-white tracking-widest italic uppercase mb-16 leading-none">Types of Cases <br /><span className="italic font-light text-[#A07A41]">We Evaluate.</span></h3>
                 <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {[
                      "Family Law (Divorce/Custody)", "Immigration & Visa Cases", "Employment Disputes", "Personal Injury Claims",
                      "Contract Disputes", "Property & Tenancy Issues", "Civil Litigation Matters"
                    ].map((type, i) => (
                       <div key={i} className="p-8 bg-white/[0.02] border border-white/5 rounded-[2.5rem] hover:bg-black transition-all group flex items-center justify-between shadow-big">
                          <span className="text-gray-300 text-[10px] md:text-xs font-sans font-black italic uppercase tracking-widest transition-colors group-hover:text-[#A07A41]">{type}</span>
                          <ArrowRight size={14} className="text-[#A07A41]/10 group-hover:text-[#A07A41] transition-all transform group-hover:translate-x-1" />
                       </div>
                    ))}
                 </div>
                 <p className="mt-12 text-gray-500 text-[9px] uppercase font-black tracking-widest italic border-t border-white/5 pt-8">
                    * If your case is not listed, you can still submit it for review.
                 </p>
              </div>

              {/* Trust Section */}
              <div className={`lg:col-span-5 ${section4Visible ? 'animate-fade-in-right animation-delay-300' : 'opacity-0'}`}>
                 <div className="p-12 lg:p-16 bg-[#1B2D33] border border-[#A07A41]/20 rounded-[4rem] group hover:border-[#A07A41] transition-all duration-700 shadow-shadow-big relative overflow-hidden">
                    <div className="absolute -top-20 -right-20 opacity-[0.05] grayscale group-hover:grayscale-0 transition-all pointer-events-none"><ShieldCheck size={250} className="text-[#A07A41]" /></div>
                    <h3 className="text-white text-[12px] uppercase font-bold tracking-[0.4em] mb-12 italic border-b border-white/10 pb-4">Why Clients Trust Our Review</h3>
                    <div className="space-y-8">
                       {[
                         { t: "Expert UK Legal Professionals", d: "Assessments by qualified specialists." },
                         { t: "Confidential Case Handling", d: "Privacy compliant under UK regulations." },
                         { t: "Clear, Honest Assessment", d: "No false hope, just the facts." },
                         { t: "Fast Response Time", d: "Evaluations within 24–48 hours." },
                         { t: "Secure Data Handling", d: "End-to-end encryption for your files." }
                       ].map((item, i) => (
                          <div key={i} className="group/item flex gap-6">
                             <div className="h-6 w-6 shrink-0 bg-[#A07A41]/10 rounded-full flex items-center justify-center text-[#A07A41] group-hover/item:bg-[#A07A41] group-hover/item:text-black transition-colors"><CheckCircle2 size={12} /></div>
                             <div className="text-left">
                                <h4 className="text-white font-serif font-bold text-[10px] uppercase group-hover/item:text-[#A07A41] transition-colors">{item.t}</h4>
                                <p className="text-gray-500 text-[8px] uppercase font-black tracking-widest italic leading-none">{item.d}</p>
                             </div>
                          </div>
                       ))}
                    </div>
                 </div>
              </div>
           </div>
        </section>

        {/* ——— 6. INTAKE FORM SECTION ——— */}
        <section id="intake-form" ref={section5Ref} className="relative py-24 lg:py-64 bg-[#1B2D33] overflow-hidden border-y border-white/5 shadow-inner">
           <div className="px-4 sm:px-6 lg:px-8 max-w-[85rem] mx-auto text-center mb-24 animat-fade-in-up">
              <span className="text-[#A07A41] uppercase tracking-[0.6em] text-[8px] font-black italic mb-8 block md:opacity-100">Secure Intake Portal</span>
              <h2 className="text-3xl md:text-5xl lg:text-7xl font-serif font-bold text-white tracking-tighter italic uppercase mb-12 underline decoration-[#A07A41]/10 underline-offset-[36px] decoration-8">Submit Your <br /><span className="italic font-light text-[#A07A41] lowercase">Case Evaluation.</span></h2>
              <p className="text-gray-500 text-[10px] md:text-xs font-sans font-light italic leading-loose opacity-70 mb-12 italic">
                legal case evaluation UK form — 100% confidential and protected.
              </p>
           </div>

           <div className="px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
              <div className={`p-10 md:p-20 bg-white/[0.01] border border-white/10 rounded-[5rem] backdrop-blur-3xl shadow-big relative overflow-hidden group ${section5Visible ? 'animate-fade-in-up' : 'opacity-0'}`}>
                 <div className="absolute top-0 right-0 p-20 opacity-[0.02] rotate-12 transition-all group-hover:text-[#A07A41] pointer-events-none"><ClipboardCheck size={200} /></div>
                 
                 <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-8 relative z-10 text-left">
                    <div className="space-y-2">
                       <label className="text-white text-[9px] uppercase font-black tracking-widest italic ml-4">Full Name</label>
                       <input 
                         required
                         type="text" 
                         name="name"
                         value={formData.name}
                         onChange={handleInputChange}
                         placeholder="Your full name"
                         className="w-full bg-[#1B2D33]/40 border border-white/10 rounded-2xl px-6 py-4 text-xs font-light text-white outline-none focus:border-[#A07A41] transition-all placeholder:text-gray-600 shadow-inner" 
                       />
                    </div>
                    <div className="space-y-2">
                       <label className="text-white text-[9px] uppercase font-black tracking-widest italic ml-4">Email Address</label>
                       <input 
                         required
                         type="email" 
                         name="email"
                         value={formData.email}
                         onChange={handleInputChange}
                         placeholder="you@example.com"
                         className="w-full bg-[#1B2D33]/40 border border-white/10 rounded-2xl px-6 py-4 text-xs font-light text-white outline-none focus:border-[#A07A41] transition-all placeholder:text-gray-600 shadow-inner" 
                       />
                    </div>
                    <div className="space-y-2">
                       <label className="text-white text-[9px] uppercase font-black tracking-widest italic ml-4">Phone Number</label>
                       <input 
                         required
                         type="tel" 
                         name="phone"
                         value={formData.phone}
                         onChange={handleInputChange}
                         placeholder="+44 000 000 0000"
                         className="w-full bg-[#1B2D33]/40 border border-white/10 rounded-2xl px-6 py-4 text-xs font-light text-white outline-none focus:border-[#A07A41] transition-all placeholder:text-gray-600 shadow-inner" 
                       />
                    </div>
                    <div className="space-y-2">
                       <label className="text-white text-[9px] uppercase font-black tracking-widest italic ml-4">Location (UK Region)</label>
                       <input 
                         required
                         type="text" 
                         name="location"
                         value={formData.location}
                         onChange={handleInputChange}
                         placeholder="e.g. London, Manchester"
                         className="w-full bg-[#1B2D33]/40 border border-white/10 rounded-2xl px-6 py-4 text-xs font-light text-white outline-none focus:border-[#A07A41] transition-all placeholder:text-gray-600 shadow-inner" 
                       />
                    </div>
                    <div className="md:col-span-2 space-y-2">
                       <label className="text-white text-[9px] uppercase font-black tracking-widest italic ml-4">Case Type</label>
                       <select 
                         required
                         name="caseType"
                         value={formData.caseType}
                         onChange={handleInputChange}
                         className="w-full bg-[#1B2D33]/40 border border-white/10 rounded-2xl px-6 py-4 text-xs font-light text-white outline-none focus:border-[#A07A41] transition-all appearance-none cursor-pointer shadow-inner"
                       >
                          <option value="" className="bg-[#1B2D33]">Select your case category</option>
                          <option value="family" className="bg-[#1B2D33]">Family Law</option>
                          <option value="immigration" className="bg-[#1B2D33]">Immigration</option>
                          <option value="employment" className="bg-[#1B2D33]">Employment Disputes</option>
                          <option value="personal-injury" className="bg-[#1B2D33]">Personal Injury</option>
                          <option value="civil" className="bg-[#1B2D33]">Civil Litigation</option>
                          <option value="other" className="bg-[#1B2D33]">Other</option>
                       </select>
                    </div>
                    <div className="md:col-span-2 space-y-2">
                       <label className="text-white text-[9px] uppercase font-black tracking-widest italic ml-4">Brief Description of Issue</label>
                       <textarea 
                         required
                         name="description"
                         value={formData.description}
                         onChange={handleInputChange}
                         rows={5}
                         placeholder="Please provide a brief summary of your legal situation..."
                         className="w-full bg-[#1B2D33]/40 border border-white/10 rounded-[2rem] px-8 py-6 text-xs font-light text-white outline-none focus:border-[#A07A41] transition-all placeholder:text-gray-600 resize-none shadow-inner"
                       ></textarea>
                    </div>
                    <div className="md:col-span-2 flex flex-col items-center gap-10 mt-10">
                       <button 
                         type="submit"
                         className="w-full md:w-auto px-16 py-6 bg-[#A07A41] text-black font-black tracking-[0.4em] uppercase text-[10px] rounded-full hover:bg-white transition-all duration-300 shadow-big hover:scale-105 active:scale-95 group flex items-center justify-center gap-4"
                       >
                          Submit for Case Evaluation
                          <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                       </button>
                       <div className="flex items-center gap-3 text-white/40 text-[9px] font-black uppercase tracking-widest italic border-t border-white/5 pt-4 w-full justify-center">
                          <Lock size={12} className="text-[#A07A41]" />
                          Your information is 100% confidential and encrypted.
                       </div>
                    </div>
                 </form>
              </div>
           </div>
        </section>

        {/* ——— 7. WHAT HAPPENS AFTER SUBMISSION ——— */}
        <section ref={section6Ref} className="relative py-24 lg:py-48 bg-[#1B2D33] overflow-hidden">
           <div className="px-4 sm:px-6 lg:px-8 max-w-[85rem] mx-auto text-center mb-24 animat-fade-in-up">
              <h2 className="text-2xl md:text-5xl font-serif font-bold text-white tracking-widest italic uppercase mb-12">After <br /><span className="italic font-light text-[#A07A41]">Submission.</span></h2>
           </div>

           <div className="px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto flex flex-col md:flex-row gap-8">
              {[
                { t: "Assigned to Reviewer", d: "Your case is instantly routed to a legal expert.", i: Users },
                { t: "Instant Confirmation", d: "You receive confirmation via email within minutes.", i: Send },
                { t: "Diagnostic Report", d: "Full evaluation completed within 24–48 hours.", i: BookOpen },
                { t: "Strategic Follow-up", d: "A written summary or follow-up call is initiated.", i: MessageSquare }
              ].map((step, i) => (
                 <div key={i} className={`flex-1 p-10 bg-white/[0.02] border border-white/5 rounded-[3rem] hover:bg-black transition-all duration-700 shadow-big group text-center ${section6Visible ? 'animate-fade-in-up' : 'opacity-0'}`} style={{ animationDelay: `${i * 150}ms` }}>
                    <step.i size={20} className="text-[#A07A41] mx-auto mb-6 group-hover:scale-110 transition-transform" />
                    <h4 className="text-white font-serif font-bold text-xs md:text-sm italic uppercase tracking-tighter group-hover:text-[#A07A41] mb-2 leading-tight transition-all">{step.t}</h4>
                    <p className="text-gray-500 text-[8px] md:text-[9px] tracking-widest uppercase italic group-hover:text-white/60 transition-colors leading-tight font-black">{step.d}</p>
                 </div>
              ))}
           </div>
           
           <div className="mt-20 text-center animate-pulse">
              <span className="text-white/20 text-[10px] font-black uppercase tracking-[0.5em] italic">No delays. No confusion. Just diagnostic precision.</span>
           </div>
        </section>

        {/* ——— 8. FAQ SECTION ——— */}
        <section ref={section7Ref} className="relative py-24 lg:py-48 bg-[#1B2D33] overflow-hidden border-y border-white/5 shadow-big">
           <div className="px-4 sm:px-6 lg:px-8 max-w-[50rem] mx-auto">
              <div className="text-center mb-24 animate-fade-in-up">
                 <h2 className="text-3xl md:text-5xl font-serif font-bold text-white tracking-tight italic uppercase font-black underline decoration-[#A07A41]/10 underline-offset-[24px] decoration-8">Frequently <br /><span className="italic font-light text-[#A07A41]">Asked Questions.</span></h2>
              </div>

              <div className="space-y-4">
                 {[
                   { q: "Is the case evaluation free?", a: "Yes, our initial diagnostic evaluation is free for most UK case categories. We aim to provide immediate clarity on your legal position." },
                   { q: "How long does it take?", a: "Standard evaluations are completed within 24–48 hours. Complex commercial or litigation matters may take up to 72 hours for a full diagnostic review." },
                   { q: "Is my information confidential?", a: "Absolutely. All information shared via our intake portal is protected under strict UK data confidentiality and legal privilege protocols." },
                   { q: "Do you guarantee winning cases?", a: "No. We provide an honest, evidence-based legal assessment of your case's strengths and weaknesses. False guarantees are not part of our professional code." },
                   { q: "Can I submit urgent cases?", a: "Yes. Urgent matters such as deportation notices or imminent court deadlines are prioritized by our intake team." }
                 ].map((faq, index) => (
                    <div key={index} className="border border-[#A07A41]/10 px-6 md:px-8 rounded-[3rem] bg-white/[0.03] overflow-hidden transition-all duration-1000 md:opacity-100 shadow-xl shadow-inner scroll-smooth">
                       <button 
                         onClick={() => setActiveFaq(activeFaq === index ? null : index)}
                         className="w-full py-10 md:py-12 flex items-center justify-between group outline-none"
                       >
                         <span className={`text-left text-[11px] md:text-sm font-serif font-bold italic tracking-tighter ${activeFaq === index ? 'text-[#A07A41]' : 'text-gray-300'}`}>{faq.q}</span>
                         <div className={`shrink-0 p-3 rounded-2xl border border-white/5 transition-all duration-500 shadow-inner ${activeFaq === index ? 'bg-[#A07A41] rotate-180 border-[#A07A41]' : 'group-hover:border-[#A07A41]'}`}>
                            <ChevronDown className={`h-4 w-4 transition-colors ${activeFaq === index ? 'text-black' : 'text-[#A07A41]'}`} />
                         </div>
                       </button>
                       <div className={`transition-all duration-700 ease-[cubic-bezier(0.2,1,0.2,1)] px-8 md:px-14 ${activeFaq === index ? 'max-h-[500px] pb-12 opacity-100' : 'max-h-0 opacity-0 overflow-hidden'}`}>
                          <p className="text-gray-500 text-[10px] md:text-xs font-sans font-light italic border-l-2 border-[#A07A41]/20 pl-8 opacity-80 leading-relaxed italic">{faq.a}</p>
                       </div>
                    </div>
                 ))}
              </div>
           </div>
        </section>

        {/* ——— 9. FINAL CTA ——— */}
        <section id="cta" className="relative py-32 lg:py-64 bg-[#1B2D33] overflow-hidden">
           <div className="absolute inset-0 z-0 opacity-[0.2] bg-cover bg-center animate-[ken-burns_20s_linear_infinite]" style={{ backgroundImage: 'url("https://images.unsplash.com/photo-1589829545856-d10d557cf95f?auto=format&fit=crop&q=80")' }}>
              <div className="absolute inset-0 bg-[#1B2D33]/80 backdrop-blur-[2px]"></div>
           </div>
           
           <div className="max-w-[85rem] mx-auto px-4 sm:px-6 lg:px-8 animate-fade-in-up relative z-10 text-center">
              <div className="p-16 md:p-32 bg-white/[0.01] border border-white/10 rounded-[6rem] backdrop-blur-3xl relative overflow-hidden shadow-big group shadow-inner">
                 <div className="absolute top-0 right-0 p-40 opacity-[0.03] scale-[6] rotate-[15deg] transition-all duration-[10s] group-hover:text-[#A07A41] pointer-events-none"><ShieldCheck size={300} /></div>
                 
                 <h2 className="text-3xl md:text-5xl lg:text-7xl font-serif font-bold text-white mb-10 tracking-tighter leading-none italic uppercase decoration-[#A07A41]/10 underline underline-offset-[36px] decoration-8">Diagnostic <br /><span className="italic font-light text-[#A07A41] lowercase drop-shadow-big">Certainty.</span></h2>
                 
                 <p className="text-gray-400 text-[10px] md:text-sm font-sans font-light italic leading-relaxed mb-16 max-w-xl mx-auto opacity-70 italic border-b border-white/5 pb-10">
                    Don’t wait until the problem gets worse. Get your case reviewed today by experienced UK legal professionals.
                 </p>

                 <div role="button" className="group relative inline-flex items-center justify-center gap-4 px-12 py-5 bg-[#A07A41] text-black font-bold tracking-[0.3em] uppercase text-[10px] md:text-[12px] rounded-full transition-all duration-300 hover:bg-white cursor-pointer shadow-big overflow-hidden hover:scale-110 active:scale-95 shadow-inner">
                    <span className="relative z-10 font-black tracking-widest">Start Your Free Case Evaluation</span>
                    <ArrowRight size={16} className="relative z-10 transform group-hover:translate-x-1 transition-transform duration-300" />
                 </div>
                 
                 <div className="mt-12 flex items-center justify-center gap-4 text-red-500/50 text-[8px] font-black uppercase tracking-widest italic animate-pulse">
                    <AlertTriangle size={12} />
                    Serious legal cases are diagnosed with precision.
                 </div>
              </div>
           </div>
        </section>

      </main>
    </div>
  );
};

export default ClientIntakeEvaluationPage;
