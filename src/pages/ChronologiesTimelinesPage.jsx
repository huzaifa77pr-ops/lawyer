import React, { useEffect, useState, useRef } from 'react';
import { 
  ArrowRight, Clock, Calendar, ListChecks, FileText, 
  ShieldCheck, AlertCircle, ChevronDown, Zap, Scale, 
  Layers, CheckCircle2, Search, Target
} from 'lucide-react';

const ChronologiesTimelinesPage = () => {
  const [section1Visible, setSection1Visible] = useState(false);
  const [section2Visible, setSection2Visible] = useState(false);
  const [section3Visible, setSection3Visible] = useState(false);
  const [section4Visible, setSection4Visible] = useState(false);
  const [section5Visible, setSection5Visible] = useState(false);
  const [section6Visible, setSection6Visible] = useState(false);
  const [activeFaq, setActiveFaq] = useState(null);

  const section1Ref = useRef(null);
  const section2Ref = useRef(null);
  const section3Ref = useRef(null);
  const section4Ref = useRef(null);
  const section5Ref = useRef(null);
  const section6Ref = useRef(null);

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
          }
        });
      },
      { threshold: 0.1 }
    );

    [section1Ref, section2Ref, section3Ref, section4Ref, section5Ref, section6Ref].forEach(ref => {
      if (ref.current) observer.observe(ref.current);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <div className="min-h-screen bg-[#1B2D33] flex flex-col overflow-hidden text-white font-sans selection:bg-[#A07A41] selection:text-black">
      <main className="flex-grow">
        
        {/* 1. HERO SECTION */}
        <section 
          ref={section1Ref}
          className="relative min-h-[90vh] flex items-center pt-32 lg:pt-40 pb-24 overflow-hidden shadow-inner"
        >
          {/* SEO Hidden Content */}
          <div className="hidden">
            <h1>Chronologies & Timelines for Legal and Immigration Cases UK</h1>
            <h2>case chronology UK, legal timeline preparation UK, immigration case timeline UK</h2>
            <p>Clear, structured timelines that present your case in a logical and easy-to-understand format.</p>
          </div>

          {/* Background Elements */}
          <div className="absolute inset-0 z-0">
            <div className={`absolute inset-0 bg-[#1B2D33] transition-opacity duration-1000 ${section1Visible ? 'opacity-40' : 'opacity-0'}`}>
              <div className="absolute inset-0 bg-cover bg-center opacity-20 animate-[ken-burns_20s_linear_infinite]" style={{ backgroundImage: 'url("https://images.unsplash.com/photo-1450101499163-c8848c66ca85?auto=format&fit=crop&q=80")' }}></div>
            </div>
            <div className="absolute inset-0 bg-gradient-to-b from-[#1B2D33] via-transparent to-[#1B2D33] z-10"></div>
          </div>

          <div className="absolute right-[8%] top-0 bottom-0 w-px bg-[#A07A41]/20 hidden lg:block z-20 shadow-[0_0_20px_rgba(160,122,65,0.2)]"></div>

          <div className="relative z-20 px-4 sm:px-6 lg:px-8 max-w-[85rem] mx-auto w-full">
            <div className="grid lg:grid-cols-2 gap-20 items-center">
              <div className={`${section1Visible ? 'animate-fade-in-left' : 'opacity-0'}`}>
                <div className="inline-flex items-center gap-3 mb-8 px-4 py-1.5 bg-white/5 border border-white/10 rounded-full backdrop-blur-3xl">
                  <Clock size={10} className="text-[#A07A41]" />
                  <span className="text-[#A07A41] uppercase tracking-[0.4em] text-[8px] font-black italic">Precision Timing Suite</span>
                </div>
                
                <h1 className="text-3xl md:text-5xl lg:text-7xl font-serif font-bold text-white leading-[1.05] mb-8 tracking-tighter">
                  Chronologies & <br />
                  <span className="italic font-light text-[#A07A41]">Timelines.</span>
                </h1>
                
                <p className="text-gray-400 text-xs md:text-sm font-sans font-light leading-relaxed mb-6 border-l border-[#A07A41]/30 pl-8 max-w-xl">
                  Clear, structured timelines that present your case in a logical and easy-to-understand format.
                </p>
                <p className="text-gray-500 text-[10px] md:text-xs font-light leading-relaxed mb-10 max-w-lg opacity-80">
                  We help organize key events, documents, and dates into a coherent chronology, ensuring your case is presented clearly and professionally.
                </p>

                <div className="flex flex-wrap gap-6 items-center">
                  <a href="#cta" className="px-10 py-5 bg-[#1B2D33] border border-white/10 text-white font-bold tracking-[0.3em] uppercase text-[10px] rounded hover:bg-[#A07A41] transition-all duration-300 shadow-2xl hover:scale-105 active:scale-95 shadow-inner">
                    Create My Timeline
                  </a>
                </div>
              </div>

              <div className={`relative ${section1Visible ? 'animate-fade-in-bottom-right animation-delay-300' : 'opacity-0'}`}>
                <div className="relative p-2 bg-white/5 border border-white/10 rounded-[3rem] shadow-shadow-big overflow-hidden group">
                  <img src="https://images.unsplash.com/photo-1506784365847-bbad939e9335?auto=format&fit=crop&q=80" alt="Timeline Preparation" className="w-full h-[500px] object-cover rounded-[2.5rem] grayscale group-hover:grayscale-0 transition-all duration-[2.5s] group-hover:scale-110" />
                  <div className="absolute inset-0 bg-[#1B2D33]/40 group-hover:bg-transparent transition-all duration-1000"></div>
                  
                  {/* Floating Date Element */}
                  <div className="absolute top-10 right-10 p-6 bg-black/60 backdrop-blur-3xl border border-[#A07A41]/20 rounded-2xl animate-pulse">
                    <Calendar size={24} className="text-[#A07A41]" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 2. WHY CHRONOLOGIES MATTER (THE PROBLEM) */}
        <section ref={section2Ref} className="relative py-24 bg-white/[0.02] border-y border-white/5 overflow-hidden">
          <div className="relative z-10 px-4 sm:px-6 lg:px-8 max-w-[85rem] mx-auto">
            <div className="flex flex-col lg:flex-row items-center gap-16">
              <div className={`lg:w-1/2 ${section2Visible ? 'animate-fade-in-left' : 'opacity-0'}`}>
                <h2 className="text-[#A07A41] text-[8px] md:text-[9px] uppercase tracking-[0.5em] font-black mb-6 italic">Strategic importance</h2>
                <h3 className="text-2xl md:text-5xl font-serif font-bold text-white tracking-tighter italic uppercase mb-8">Why Chronologies <br /><span className="italic font-light text-[#A07A41]">Are Important?</span></h3>
                <p className="text-gray-400 text-sm md:text-base font-serif italic font-light leading-loose opacity-80 border-l-2 border-[#A07A41]/30 pl-8">
                  In legal and immigration matters, decision-makers review large volumes of information. Without a clear timeline, key details can be overlooked or misunderstood.
                </p>
                <div className="mt-10 p-8 bg-[#1B2D33] border border-white/5 rounded-[2rem] shadow-big group hover:border-[#A07A41]/30 transition-all duration-700">
                  <Zap size={24} className="text-[#A07A41] mb-4" />
                  <p className="text-white font-serif italic text-lg leading-relaxed group-hover:translate-x-2 transition-transform">
                    “If your story isn’t clear, your case isn’t convincing.”
                  </p>
                </div>
              </div>
              <div className={`lg:w-1/2 ${section2Visible ? 'animate-fade-in-right animation-delay-300' : 'opacity-0'}`}>
                 <div className="aspect-video rounded-[3rem] overflow-hidden border border-white/10 relative group">
                    <img src="https://images.unsplash.com/photo-1450101499163-c8848c66ca85?auto=format&fit=crop&q=80" alt="Reviewing Evidence" className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-[2s]" />
                    <div className="absolute inset-0 bg-[#1B2D33]/60 group-hover:opacity-0 transition-opacity"></div>
                 </div>
              </div>
            </div>
          </div>
        </section>

        {/* 3. WHAT IS A CASE CHRONOLOGY? & 4. WHEN YOU NEED IT */}
        <section ref={section3Ref} className="relative py-24 lg:py-40 bg-[#1B2D33] overflow-hidden">
           <div className="px-4 sm:px-6 lg:px-8 max-w-[85rem] mx-auto text-center mb-24">
              <span className={`text-[#A07A41] uppercase tracking-[0.6em] text-[8px] font-black mb-8 block font-serif ${section3Visible ? 'animate-fade-in-down' : 'opacity-0'}`}>Definition & Utility</span>
              <h2 className={`text-3xl md:text-6xl font-serif font-bold text-white tracking-tight italic uppercase ${section3Visible ? 'animate-fade-in-up' : 'opacity-0'}`}>Structure <br /><span className="italic font-light text-[#A07A41]">Of A Timeline.</span></h2>
           </div>

           <div className="px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12">
              {/* Box 3 */}
              <div className={`p-12 bg-white/[0.02] border border-white/5 rounded-[3.5rem] hover:bg-white/[0.04] transition-all duration-700 ${section3Visible ? 'animate-fade-in-left' : 'opacity-0'}`}>
                <div className="h-10 w-10 bg-[#A07A41]/10 rounded-full flex items-center justify-center text-[#A07A41] mb-8 shadow-inner"><Layers size={20} /></div>
                <h4 className="text-[#A07A41] font-serif font-bold text-lg italic uppercase mb-6">What is a Case Chronology?</h4>
                <p className="text-gray-400 text-[10px] md:text-xs font-sans font-light italic leading-[2] border-l border-[#A07A41]/30 pl-6">
                  A case chronology is a structured timeline that lists key events, dates, and actions related to your case. It helps present your situation in a logical order, making it easier to understand.
                </p>
              </div>

              {/* Box 4 */}
              <div className={`p-12 bg-white/[0.02] border border-white/5 rounded-[3.5rem] hover:bg-white/[0.04] transition-all duration-700 ${section3Visible ? 'animate-fade-in-right animation-delay-200' : 'opacity-0'}`}>
                <div className="h-10 w-10 bg-[#A07A41]/10 rounded-full flex items-center justify-center text-[#A07A41] mb-8 shadow-inner"><Search size={20} /></div>
                <h4 className="text-[#A07A41] font-serif font-bold text-lg italic uppercase mb-6">When Are Chronologies Used?</h4>
                <ul className="space-y-4">
                  {[ 
                    "Immigration and visa applications", 
                    "Appeal cases", 
                    "Complex legal matters", 
                    "Cases with multiple documents and events",
                    "Situations requiring clear explanation"
                  ].map((item, i) => (
                    <li key={i} className="flex items-center gap-3 text-gray-500 text-[9px] md:text-[11px] uppercase tracking-widest font-black italic">
                      <div className="w-1.5 h-1.5 rounded-full bg-[#A07A41]/40"></div>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
           </div>
        </section>

        {/* 5. WHAT WE INCLUDE (VISUAL TIMELINE STYLE) */}
        <section ref={section4Ref} className="relative py-24 lg:py-48 bg-[#1B2D33] overflow-hidden border-y border-white/5 bg-white/[0.01]">
           <div className="absolute top-0 bottom-0 left-1/2 w-px bg-gradient-to-b from-transparent via-[#A07A41]/20 to-transparent hidden lg:block"></div>
           
           <div className="px-4 sm:px-6 lg:px-8 max-w-[85rem] mx-auto text-center mb-32">
              <h2 className={`text-2xl md:text-5xl font-serif font-bold text-white tracking-widest italic uppercase mb-6 ${section4Visible ? 'animate-fade-in-up' : 'opacity-0'}`}>What's <span className="italic font-light text-[#A07A41]">Included.</span></h2>
              <p className={`text-gray-500 text-[10px] uppercase font-black tracking-[0.4em] opacity-60 ${section4Visible ? 'animate-fade-in-up animation-delay-200' : 'opacity-0'}`}>Core Value Protocol</p>
           </div>

           <div className="px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto space-y-12 relative z-10">
              {[
                { t: "Key Dates & Events", d: "Precise chronological mapping of every significant moment in your case.", i: Calendar, side: 'left' },
                { t: "Linked Documentation", d: "Relevant documents linked to each event for immediate verification.", i: FileText, side: 'right' },
                { t: "Descriptive Narrative", d: "Clear descriptions of actions taken and their legal significance.", i: Zap, side: 'left' },
                { t: "Logical Sequence", d: "A flowing history of your case that builds a convincing argument.", i: Scale, side: 'right' },
                { t: "Structured Formatting", d: "Easy-to-follow layout designed for quick review by decision-makers.", i: ListChecks, side: 'left' }
              ].map((item, i) => (
                 <div key={i} className={`flex flex-col lg:flex-row items-center gap-8 lg:gap-0 ${section4Visible ? (item.side === 'left' ? 'animate-fade-in-left' : 'animate-fade-in-right') : 'opacity-0'}`} style={{ animationDelay: `${i * 150}ms` }}>
                    <div className={`lg:w-1/2 flex justify-center ${item.side === 'right' ? 'lg:order-2' : ''}`}>
                       <div className="p-8 bg-white/[0.02] border border-white/5 rounded-[2.5rem] hover:bg-[#A07A41] transition-all duration-700 shadow-big group text-center max-w-sm relative overflow-hidden">
                          <item.i size={20} className="text-[#A07A41] group-hover:text-black mx-auto mb-6 transition-transform group-hover:rotate-[360deg] duration-1000" />
                          <h4 className="text-white font-serif font-bold text-xs md:text-sm italic uppercase tracking-tighter group-hover:text-black mb-3">{item.t}</h4>
                          <p className="text-gray-500 text-[10px] font-sans font-light italic leading-loose group-hover:text-black/70 italic opacity-70 transition-colors">{item.d}</p>
                       </div>
                    </div>
                    {/* Circle on the line */}
                    <div className="hidden lg:flex absolute left-1/2 -translate-x-1/2 w-4 h-4 bg-[#1B2D33] border-2 border-[#A07A41] rounded-full z-20 shadow-[0_0_10px_rgba(160,122,65,0.5)]"></div>
                    <div className="lg:w-1/2"></div>
                 </div>
              ))}
           </div>
        </section>

        {/* 6. OUR SERVICES & 7. BENEFITS */}
        <section ref={section5Ref} className="relative py-24 lg:py-40 bg-[#1B2D33] overflow-hidden">
           <div className="px-4 sm:px-6 lg:px-8 max-w-[85rem] mx-auto grid lg:grid-cols-2 gap-20">
              {/* Section 6 */}
              <div className={`${section5Visible ? 'animate-fade-in-left' : 'opacity-0'}`}>
                <h2 className="text-white text-2xl md:text-4xl font-serif font-bold tracking-tighter leading-tight mb-12 italic uppercase border-b border-[#A07A41]/20 pb-6">
                   Preparation <span className="text-[#A07A41]">Services.</span>
                </h2>
                <div className="space-y-6">
                  {[
                    "Review of your documents and case details",
                    "Identification of key events and dates",
                    "Structuring your timeline clearly",
                    "Ensuring consistency across documents",
                    "Preparing timelines for submission or review"
                  ].map((service, i) => (
                    <div key={i} className="flex items-center gap-6 p-6 bg-white/[0.03] border border-white/5 rounded-[2rem] hover:bg-black transition-all duration-500 shadow-big group">
                      <div className="h-6 w-6 shrink-0 bg-[#A07A41]/10 rounded-full flex items-center justify-center text-[#A07A41] group-hover:bg-[#A07A41] group-hover:text-black transition-colors"><CheckCircle2 size={12} /></div>
                      <span className="text-gray-400 text-[10px] md:text-xs font-sans font-light italic opacity-80 group-hover:text-white transition-colors uppercase tracking-widest">{service}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Section 7 */}
              <div className={`${section5Visible ? 'animate-fade-in-right animation-delay-300' : 'opacity-0'}`}>
                <h2 className="text-white text-2xl md:text-4xl font-serif font-bold tracking-tighter leading-tight mb-12 italic uppercase border-b border-[#A07A41]/20 pb-6">
                   Key <span className="text-[#A07A41]">Benefits.</span>
                </h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                   {[
                     { t: "Improved Clarity", d: "Making your case instantly understandable.", i: Zap },
                     { t: "Easier Review", d: "Decision-makers navigate your evidence with ease.", i: Search },
                     { t: "Reduced Errors", d: "Minimizing timeline confusion and factual gaps.", i: AlertCircle },
                     { t: "Stronger Advocacy", d: "A professional, organized case presentation.", i: Targeted } // Targeted is not imported, let's use Target
                   ].map((item, i) => (
                     <div key={i} className="p-8 bg-white/[0.01] border border-white/10 rounded-[2.5rem] text-center hover:bg-[#A07A41] transition-all duration-700 shadow-big group">
                       {(item.i === Targeted ? <Target size={20} className="text-[#A07A41] group-hover:text-black mx-auto mb-4" /> : <item.i size={20} className="text-[#A07A41] group-hover:text-black mx-auto mb-4" />)}
                       <h4 className="text-white font-serif font-bold text-xs uppercase group-hover:text-black mb-2 italic tracking-tighter">{item.t}</h4>
                       <p className="text-gray-600 text-[8px] md:text-[9px] uppercase font-black tracking-widest group-hover:text-black/60 italic leading-tight">{item.d}</p>
                     </div>
                   ))}
                </div>
              </div>
           </div>
        </section>

        {/* 8. OUR PROCESS */}
        <section ref={section6Ref} className="relative py-24 lg:py-48 bg-white/[0.02] border-y border-white/5 overflow-hidden shadow-inner">
           <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center animate-fade-in-up">
              <span className="text-[#A07A41] uppercase tracking-[0.8em] text-[9px] font-black mb-8 block font-serif italic">Operational Excellence</span>
              <h2 className="text-2xl md:text-5xl font-serif font-bold text-white tracking-tighter italic uppercase mb-20 underline decoration-[#A07A41]/10 underline-offset-[24px] decoration-8">Our <br /><span className="italic font-light text-[#A07A41]">Process.</span></h2>
              
              <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                 {[ "Review Documents", "Identify Events", "Structure Timeline", "Clear Delivery" ].map((step, i) => (
                    <div key={i} className="relative group p-10 bg-white/[0.03] border border-white/5 rounded-[3rem] text-center transition-all duration-700 hover:scale-105 shadow-2xl">
                       <div className="text-4xl md:text-6xl font-serif font-black text-[#A07A41]/10 italic mb-6 group-hover:text-[#A07A41]/40 transition-colors uppercase italic">0{i+1}</div>
                       <h4 className="text-white font-serif font-bold text-[10px] md:text-xs italic uppercase tracking-tighter">{step}</h4>
                       {/* Connecting arrow for steps */}
                       {i < 3 && <div className="hidden md:block absolute top-1/2 -right-4 translate-x-1/2 -translate-y-1/2 text-[#A07A41]/30"><ArrowRight size={20} /></div>}
                    </div>
                 ))}
              </div>
           </div>
        </section>

        {/* 9. DISCLAIMER */}
        <section className="relative py-16 lg:py-32 bg-[#1B2D33] overflow-hidden border-b border-white/5">
           <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="p-8 md:p-14 bg-[#2A454E]/20 border border-[#A07A41]/20 rounded-[3rem] text-center backdrop-blur-3xl shadow-big group hover:border-[#A07A41] transition-all duration-700">
                 <ShieldCheck size={30} className="text-[#A07A41] mx-auto mb-6 opacity-40 transition-transform group-hover:rotate-12" />
                 <h2 className="text-[#A07A41] text-xs font-serif font-bold mb-4 italic uppercase tracking-[0.3em] font-black">Legal Disclaimer.</h2>
                 <p className="text-gray-400 text-[10px] md:text-xs leading-relaxed italic font-light opacity-70 italic underline decoration-white/5 decoration-dotted underline-offset-4">
                    Our chronology and timeline services are for document organization and presentation purposes only and do not constitute legal advice.
                 </p>
              </div>
           </div>
        </section>

        {/* 10. FAQ SECTION */}
        <section className="relative py-24 lg:py-48 bg-[#1B2D33] overflow-hidden border-b border-white/10 shadow-big">
           <div className="px-4 sm:px-6 lg:px-8 max-w-[50rem] mx-auto">
              <div className="text-center mb-24 animate-fade-in-up">
                 <h2 className="text-3xl md:text-5xl font-serif font-bold text-white tracking-tight italic uppercase font-black underline decoration-[#A07A41]/10 underline-offset-[24px] decoration-8">Common <br /><span className="italic font-light text-[#A07A41]">Queries.</span></h2>
              </div>

              <div className="space-y-4">
                 {[
                   { q: "What is the purpose of a case timeline?", a: "It helps present your case clearly in chronological order, allowing decision-makers to follow the sequence of events without confusion." },
                   { q: "Can a timeline improve my application?", a: "Yes, it significantly improves the clarity and logical flow of your application, making it easier for officials to understand your history." },
                   { q: "Do you provide legal advice with this service?", a: "No, this service focuses purely on document structuring and organizational presentation." }
                 ].map((faq, index) => (
                    <div key={index} className="border border-[#A07A41]/10 px-6 md:px-8 rounded-[3rem] bg-white/[0.03] overflow-hidden transition-all duration-700 shadow-xl">
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

        {/* 11. CALL TO ACTION */}
        <section id="cta" className="relative py-32 lg:py-64 bg-[#1B2D33] overflow-hidden">
           <div className="absolute inset-0 z-0 opacity-[0.2] bg-cover bg-center animate-[ken-burns_20s_linear_infinite]" style={{ backgroundImage: 'url("https://images.unsplash.com/photo-1544027993-37dbfe43562a?auto=format&fit=crop&q=80")' }}>
              <div className="absolute inset-0 bg-[#1B2D33]/80 backdrop-blur-[2px]"></div>
           </div>
           
           <div className="max-w-[85rem] mx-auto px-4 sm:px-6 lg:px-8 animate-fade-in-up relative z-10 text-center">
              <div className="p-16 md:p-32 bg-white/[0.01] border border-white/10 rounded-[6rem] backdrop-blur-3xl relative overflow-hidden shadow-big group shadow-inner">
                 <div className="absolute top-0 left-0 p-40 opacity-[0.03] scale-[6] -rotate-[15deg] transition-all duration-[10s] group-hover:text-[#A07A41] pointer-events-none"><Clock size={300} /></div>
                 
                 <h2 className="text-3xl md:text-5xl lg:text-7xl font-serif font-bold text-white mb-10 tracking-tighter leading-none italic uppercase decoration-[#A07A41]/10 underline underline-offset-[36px] decoration-8">Create A <br /><span className="italic font-light text-[#A07A41] lowercase drop-shadow-big">Clear Timeline.</span></h2>
                 
                 <p className="text-gray-400 text-[10px] md:text-sm font-sans font-light italic leading-relaxed mb-16 max-w-xl mx-auto opacity-70 italic border-b border-white/5 pb-10">
                    Present your case with clarity and structure. Contact us today for professional chronology and timeline preparation.
                 </p>

                 <div role="button" className="group relative inline-flex items-center justify-center gap-4 px-12 py-5 bg-[#1B2D33] border border-white/10 text-white font-bold tracking-[0.3em] uppercase text-[10px] md:text-[12px] rounded transition-all duration-300 hover:bg-[#A07A41] cursor-pointer shadow-big overflow-hidden hover:scale-110 active:scale-95 shadow-inner">
                    <span className="relative z-10 font-black tracking-widest">Create My Timeline</span>
                    <ArrowRight size={16} className="relative z-10 transform group-hover:translate-x-1 transition-transform duration-300" />
                 </div>
              </div>
           </div>
        </section>

      </main>
    </div>
  );
};

// Variable fallback for Targeted if needed (already handled by Target)
const Targeted = Target;

export default ChronologiesTimelinesPage;
