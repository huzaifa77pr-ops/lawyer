import React, { useEffect, useState, useRef } from 'react';
import { 
  ArrowRight, Search, Scale, CheckCircle, Shield, 
  ChevronDown, Gavel, Briefcase, FileSignature, TrendingUp, 
  Clock, AlertCircle, ShieldCheck, Zap, Send, 
  MapPin, Landmark, Users, HelpCircle,
  FileSearch, Database, BookOpen, Info, Inbox,
  LandmarkIcon, FileText, ClipboardList, Calendar, 
  BarChart, History, Activity
} from 'lucide-react';

const CaseManagementDeadlineTrackingPage = () => {
  const [activeFaq, setActiveFaq] = useState(null);
  
  const [visibleSections, setVisibleSections] = useState({
    hero: true,
    why: true, // Visible immediately
    services: false,
    process: false,
    who: false,
    benefits: false,
    whyUs: false,
    form: true, // Visible for form
    faq: true, // Visible for FAQ
    cta: true  // Visible for CTA
  });

  const sectionRefs = {
    hero: useRef(null),
    why: useRef(null),
    services: useRef(null),
    process: useRef(null),
    who: useRef(null),
    benefits: useRef(null),
    whyUs: useRef(null),
    form: useRef(null),
    faq: useRef(null),
    cta: useRef(null)
  };

  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = "Case Management & Deadline Tracking | H&S Co.";

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const section = entry.target.getAttribute('data-section');
          if (section) {
            setVisibleSections(prev => ({ ...prev, [section]: true }));
          }
        }
      });
    }, { 
      threshold: 0.01,
      rootMargin: "0px 0px -50px 0px" 
    });

    Object.values(sectionRefs).forEach(ref => {
      if (ref.current) observer.observe(ref.current);
    });

    return () => observer.disconnect();
  }, []);

  const coreServices = [
    {
      title: "Deadline Tracking",
      desc: "Precise monitoring of court filings, response windows, and critical dates.",
      points: ["Court deadlines", "Filing dates", "Response timelines", "Hearing schedules"],
      icon: Calendar,
      anim: "animate-fade-in-top-left"
    },
    {
      title: "Case File Management",
      desc: "Comprehensive organisation of physical and digital legal records.",
      points: ["Document organisation", "Secure storage", "Record retrieval", "Structure auditing"],
      icon: FilesIcon,
      anim: "animate-fade-in-top-right"
    },
    {
      title: "Workflow Management",
      desc: "Structured tracking of every step in the legal process.",
      points: ["Step-by-step tracking", "Task assignment", "Progress monitoring", "Update reports"],
      icon: Activity,
      anim: "animate-fade-in-bottom-left"
    },
    {
      title: "Communication Tracking",
      desc: "Logging and management of all case-related correspondence.",
      points: ["Client updates", "Correspondence records", "Status reporting", "Logging history"],
      icon: History,
      anim: "animate-fade-in-bottom-right"
    }
  ];

  return (
    <div className="min-h-screen bg-[#2A454E] flex flex-col overflow-x-hidden text-white font-sans">
      <main className="flex-grow">
        
        {/* 1. HERO SECTION */}
        <section ref={sectionRefs.hero} data-section="hero" className="relative min-h-[90vh] flex items-center pt-32 pb-20 bg-[#2A454E]">
          <div className="absolute inset-0 z-0">
             <img src="/hd1.jpg" alt="Case Management Hero" className="w-full h-full object-cover opacity-40" />
             <div className="absolute inset-0 bg-gradient-to-r from-[#2A454E]/90 via-[#2A454E]/40 to-transparent"></div>
          </div>
          <div className="relative z-10 px-4 sm:px-6 lg:px-8 max-w-[90rem] mx-auto w-full">
            <div className={`max-w-3xl transition-all duration-1000 ${visibleSections.hero ? 'opacity-100' : 'opacity-0'}`}>
              <div className="flex items-center gap-4 mb-6">
                <div className="h-[2px] w-12 bg-[#A07A41]"></div>
                <span className="text-[#A07A41] uppercase tracking-[0.2em] text-xs font-bold font-sans">Control + Reliability</span>
              </div>
              
              <h1 className="text-4xl sm:text-5xl md:text-6xl font-serif font-bold text-white leading-[1.1] mb-6 tracking-tight animate-fade-in-right">
                Case Management & <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#C29D64] via-[#A07A41] to-[#785A2D]">Deadline Tracking Services.</span>
              </h1>
              
              <p className="text-base md:text-lg text-gray-300 font-sans font-light leading-relaxed max-w-2xl mb-10 animate-fade-in-up animation-delay-300">
                Structured case management and precise deadline tracking to ensure your legal matters stay on track across the UK jurisdictions.
              </p>

              <div className="flex flex-col sm:flex-row gap-5 animate-fade-in-left animation-delay-500">
                <button className="px-8 py-4 bg-[#1B2D33] border border-white/10 text-white font-bold tracking-widest uppercase text-xs rounded transition-all hover:bg-[#A07A41] shadow-2xl flex items-center gap-3">
                  <span>Request Management Support</span>
                  <ArrowRight className="h-4 w-4" />
                </button>
                <button className="px-8 py-4 border border-white/20 text-white font-bold uppercase tracking-widest text-xs rounded transition-all hover:bg-white/5">
                  Speak to a Legal Coordinator
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* 2. WHY CASE MANAGEMENT MATTERS */}
        <section ref={sectionRefs.why} data-section="why" className="py-24 bg-[#2A454E] overflow-hidden border-t border-white/5">
          <div className="px-4 sm:px-6 lg:px-8 max-w-[90rem] mx-auto grid lg:grid-cols-2 gap-16 items-center">
             <div className={`${visibleSections.why ? 'animate-fade-in-left' : 'opacity-100'}`}>
                <h2 className="text-3xl md:text-5xl font-serif font-bold text-white mb-8">
                  Why Proper Case <br />
                  <span className="italic font-light text-[#A07A41]">Management Is Critical.</span>
                </h2>
                <p className="text-gray-300 text-lg mb-8 font-light leading-relaxed">Legal cases involve strict timelines and multiple complex steps. Missing a single deadline can have devastating consequences.</p>
                <div className="space-y-4">
                  {[
                    "Immediate case dismissal",
                    "Significant financial penalties",
                    "Irreversible loss of legal rights",
                    "Unnecessary delays in proceedings",
                    "Severe weakening of case position"
                  ].map((item, i) => (
                    <div key={i} className="flex items-center gap-4 p-4 bg-[#1B2D33]/40 border border-white/5 rounded">
                       <div className="w-1.5 h-1.5 rounded-full bg-[#A07A41]"></div>
                       <span className="text-gray-200 font-light">{item}</span>
                    </div>
                  ))}
                </div>
             </div>
             <div className={`${visibleSections.why ? 'animate-fade-in-right' : 'opacity-100'}`}>
                <img src="/no.jpg" alt="Organised work" className="rounded-2xl shadow-biggest w-full object-cover h-[500px]" />
             </div>
          </div>
        </section>

        {/* 3. CORE SERVICES */}
        <section ref={sectionRefs.services} data-section="services" className="py-24 bg-[#1B2D33] border-y border-white/5">
          <div className="px-4 sm:px-6 lg:px-8 max-w-[90rem] mx-auto">
             <div className={`text-center mb-16 ${visibleSections.services ? 'animate-fade-in-down' : 'opacity-0'}`}>
                <h2 className="text-3xl md:text-5xl font-serif font-bold text-white mb-4">
                   Our Case <span className="italic font-light text-[#A07A41]">Management Services.</span>
                </h2>
             </div>
             <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
               {coreServices.map((service, i) => (
                 <div key={i} className={`p-10 bg-[#2A454E]/30 border border-white/5 rounded-xl hover:border-[#A07A41]/30 transition-all ${visibleSections.services ? service.anim : 'opacity-0'}`} style={{ animationDelay: `${i * 150}ms` }}>
                    <service.icon className="h-12 w-12 text-[#A07A41] mb-8" />
                    <h3 className="text-xl font-serif font-bold text-white mb-4">{service.title}</h3>
                    <p className="text-gray-400 text-sm leading-relaxed mb-8 font-light">{service.desc}</p>
                    <ul className="space-y-3 pt-6 border-t border-white/5">
                      {service.points.map((p, idx) => (
                        <li key={idx} className="flex items-center gap-3 text-xs text-gray-400 font-bold uppercase tracking-widest">
                          <CheckCircle className="h-3 w-3 text-[#A07A41]" />
                          {p}
                        </li>
                      ))}
                    </ul>
                 </div>
               ))}
             </div>
          </div>
        </section>

        {/* 4. HOW OUR SYSTEM WORKS */}
        <section ref={sectionRefs.process} data-section="process" className="py-24 bg-[#2A454E] overflow-hidden">
          <div className="px-4 sm:px-6 lg:px-8 max-w-[90rem] mx-auto grid lg:grid-cols-2 gap-20 items-center">
             <div className={`${visibleSections.process ? 'animate-fade-in-left' : 'opacity-0'}`}>
                <h2 className="text-3xl md:text-5xl font-serif font-bold text-white mb-10 leading-tight">
                   How We Manage Your <br />
                   <span className="italic font-light text-[#A07A41]">Case Efficiently.</span>
                </h2>
                <div className="relative group rounded-3xl overflow-hidden shadow-biggest">
                   <img src="/set4.jpg" alt="Systematic workflow" className="w-full h-full object-cover" />
                   <div className="absolute inset-0 bg-[#A07A41]/10 group-hover:bg-transparent transition-all"></div>
                </div>
             </div>
             <div className="space-y-8">
                {[
                  { s: "Step 01", t: "Case Setup", d: "We organise your case details and integrate key deadlines into our tracking environment." },
                  { s: "Step 02", t: "Timeline Creation", d: "We create a structured, interactive timeline highlighting all required legal actions." },
                  { s: "Step 03", t: "Active Monitoring", d: "We track every deadline in real-time and provide early reminders for timely completion." },
                  { s: "Step 04", t: "Reporting & Updates", d: "You receive high-level progress reports and instant alerts on critical upcoming actions." }
                ].map((step, i) => (
                  <div key={i} className={`p-8 bg-[#1B2D33] border-l-4 border-[#1B2D33] hover:border-[#A07A41] rounded-r-2xl transition-all group ${visibleSections.process ? (i % 2 === 0 ? 'animate-fade-in-right' : 'animate-fade-in-left') : 'opacity-0'}`} style={{ animationDelay: `${i * 150}ms` }}>
                     <span className="text-[#A07A41] text-xs font-bold uppercase tracking-widest block mb-1">{step.s}</span>
                     <h4 className="text-xl font-serif font-bold text-white mb-2">{step.t}</h4>
                     <p className="text-gray-400 text-sm font-light leading-relaxed">{step.d}</p>
                  </div>
                ))}
             </div>
          </div>
        </section>

        {/* 5. WHO THIS SERVICE IS FOR */}
        <section ref={sectionRefs.who} data-section="who" className="py-24 bg-[#1B2D33]">
           <div className="px-4 sm:px-6 lg:px-8 max-w-[90rem] mx-auto">
              <div className={`flex flex-col md:flex-row items-center justify-between gap-12 mb-20 ${visibleSections.who ? 'animate-fade-in-up' : 'opacity-0'}`}>
                 <h2 className="text-3xl md:text-5xl font-serif font-bold text-white">
                    Who <span className="italic font-light text-[#A07A41]">Benefits?</span>
                 </h2>
                 <p className="text-gray-400 max-w-lg font-light">If your case involves deadlines and complex documentation, professional management is essential for success.</p>
              </div>
              <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
                 {["Individuals in litigation", "Expanding law firms", "Dispute-handling businesses", "Complex multi-case clients"].map((item, i) => (
                    <div key={i} className={`p-8 bg-[#2A454E] border border-white/5 rounded-2xl flex flex-col items-center text-center group hover:bg-[#A07A41] transition-all duration-500 ${visibleSections.who ? 'animate-fade-in-bottom-left' : 'opacity-0'}`} style={{ animationDelay: `${i * 100}ms` }}>
                       <div className="w-14 h-14 rounded-full bg-[#1B2D33] flex items-center justify-center mb-6 group-hover:bg-black transition-colors">
                          <Users className="h-6 w-6 text-[#A07A41]" />
                       </div>
                       <span className="text-white group-hover:text-black font-serif font-bold text-lg">{item}</span>
                    </div>
                 ))}
              </div>
           </div>
        </section>

        {/* 6. KEY BENEFITS */}
        <section ref={sectionRefs.benefits} data-section="benefits" className="py-24 bg-[#2A454E] overflow-hidden">
          <div className="px-4 sm:px-6 lg:px-8 max-w-[90rem] mx-auto">
             <div className={`bg-[#1B2D33] p-12 lg:p-24 rounded-[3rem] border border-white/5 grid lg:grid-cols-3 gap-12 items-center ${visibleSections.benefits ? 'animate-fade-in-up' : 'opacity-0'}`}>
                <div className="lg:col-span-1">
                   <h2 className="text-3xl md:text-5xl font-serif font-bold text-white mb-6">Expert <br /><span className="text-[#A07A41] italic">Advantages.</span></h2>
                   <p className="text-gray-400 font-light mb-8">We turn complex legal cases into structured, manageable, and highly efficient processes.</p>
                   <button className="px-8 py-4 bg-[#A07A41] text-black font-bold uppercase text-xs rounded transition-all hover:bg-white">View Success Stats</button>
                </div>
                <div className="lg:col-span-2 grid sm:grid-cols-2 gap-8">
                   {[
                     { t: "No missed deadlines", i: Clock },
                     { t: "Superior organisation", i: Briefcase },
                     { t: "Reduced legal risk", i: Shield },
                     { t: "Full process visibility", i: BarChart }
                   ].map((item, i) => (
                      <div key={i} className="flex gap-6 p-8 bg-[#2A454E]/40 border border-white/5 rounded-2xl group hover:border-[#A07A41]/50 transition-all">
                         <item.i className="h-8 w-8 text-[#A07A41] shrink-0" />
                         <div>
                            <h4 className="text-white font-serif font-bold text-lg mb-2">{item.t}</h4>
                            <p className="text-gray-500 text-xs font-light">Ensuring complete compliance and peace of mind.</p>
                         </div>
                      </div>
                   ))}
                </div>
             </div>
          </div>
        </section>

        {/* 7. WHY STANDS OUT */}
        <section ref={sectionRefs.whyUs} data-section="whyUs" className="py-24 bg-[#2A454E]">
          <div className="px-4 sm:px-6 lg:px-8 max-w-[90rem] mx-auto grid lg:grid-cols-2 gap-16 items-center">
             <div className={`${visibleSections.whyUs ? 'animate-fade-in-left' : 'opacity-0'}`}>
                <h2 className="text-3xl md:text-5xl font-serif font-bold text-white mb-10 leading-tight">
                   What Makes Our <br />
                   <span className="italic font-light text-[#A07A41]">Management Reliable.</span>
                </h2>
                <div className="grid grid-cols-2 gap-4">
                   {[
                     { t: "Structured Tracking", i: Activity },
                     { t: "Accurate Deadlines", i: Calendar },
                     { t: "Secure Data Handling", i: LockIcon },
                     { t: "Consistent Updates", i: Send }
                   ].map((item, i) => (
                      <div key={i} className="p-10 bg-[#1B2D33] border border-white/5 rounded-2xl hover:border-[#A07A41]/40 transition-all">
                         <item.i className="h-10 w-10 text-[#A07A41] mb-6" />
                         <span className="text-white font-serif font-bold text-lg block">{item.t}</span>
                      </div>
                   ))}
                </div>
             </div>
             <div className={`${visibleSections.whyUs ? 'animate-fade-in-right' : 'opacity-0'}`}>
                <div className="aspect-square rounded-[3rem] overflow-hidden border border-white/5 relative">
                   <img src="/t1.jpg" alt="Reliability" className="w-full h-full object-cover grayscale opacity-60" />
                   <div className="absolute inset-0 flex items-center justify-center p-12">
                      <div className="bg-[#1B2D33]/80 backdrop-blur-xl p-10 border border-[#A07A41]/30 rounded-[2rem] text-center">
                         <ShieldCheck className="h-16 w-16 text-[#A07A41] mx-auto mb-6" />
                         <p className="text-white font-serif italic text-xl">"We provide control and clarity at every single stage of your case."</p>
                      </div>
                   </div>
                </div>
             </div>
          </div>
        </section>

        {/* 8. REQUEST FORM */}
        <section ref={sectionRefs.form} data-section="form" className="py-24 bg-[#1B2D33]">
          <div className="px-4 sm:px-6 lg:px-8 max-w-[45rem] mx-auto">
             <div className={`bg-[#2A454E] p-12 rounded-3xl border border-white/5 ${visibleSections.form ? 'animate-fade-in-up' : 'opacity-100'}`}>
                <h2 className="text-2xl md:text-4xl font-serif font-bold text-white mb-4 text-center">
                  Get <span className="text-[#A07A41]">Support.</span>
                </h2>
                <p className="text-gray-400 text-center mb-10 font-light">Provide your case details for a tailored management proposal.</p>
                <form className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                     <input type="text" placeholder="Full name" className="w-full bg-[#1B2D33] border border-white/10 rounded-xl p-5 text-white outline-none focus:border-[#A07A41]" />
                     <input type="text" placeholder="Contact Details" className="w-full bg-[#1B2D33] border border-white/10 rounded-xl p-5 text-white outline-none focus:border-[#A07A41]" />
                  </div>
                  <div className="grid md:grid-cols-2 gap-6">
                     <input type="text" placeholder="Case Type" className="w-full bg-[#1B2D33] border border-white/10 rounded-xl p-5 text-white outline-none focus:border-[#A07A41]" />
                     <input type="text" placeholder="Key Deadlines (if known)" className="w-full bg-[#1B2D33] border border-white/10 rounded-xl p-5 text-white outline-none focus:border-[#A07A41]" />
                  </div>
                  <textarea rows="4" placeholder="Briefly describe your case requirements..." className="w-full bg-[#1B2D33] border border-white/10 rounded-2xl p-6 text-white outline-none focus:border-[#A07A41] resize-none"></textarea>
                  <div className="relative">
                    <input type="file" className="hidden" id="case-upload" />
                    <label htmlFor="case-upload" className="flex items-center justify-between w-full bg-[#1B2D33] border border-white/10 rounded-xl p-5 text-gray-400 cursor-pointer hover:border-[#A07A41]">
                        <span>Upload Documents</span>
                        <Inbox className="h-5 w-5 text-[#A07A41]" />
                    </label>
                  </div>
                  <button className="w-full py-5 bg-[#A07A41] text-black font-bold uppercase tracking-widest text-sm rounded transition-all hover:bg-white flex items-center justify-center gap-4 group">
                    <span>Submit Your Case</span>
                    <Send className="h-4 w-4 transform group-hover:translate-x-1" />
                  </button>
                  <p className="text-center text-[10px] text-gray-500 uppercase tracking-widest font-bold">All information is handled securely and confidentially.</p>
                </form>
             </div>
          </div>
        </section>

        {/* 9. FAQ SECTION */}
        <section ref={sectionRefs.faq} data-section="faq" className="py-24 bg-[#2A454E]">
           <div className="px-4 sm:px-6 lg:px-8 max-w-[50rem] mx-auto text-center">
              <h2 className={`text-3xl md:text-5xl font-serif font-bold text-white mb-16 ${visibleSections.faq ? 'animate-fade-in-up' : 'opacity-100'}`}>FAQs.</h2>
              <div className="space-y-4 text-left">
                {[
                  { q: "What is legal case management?", a: "It involves the systematic organising, tracking, and proactive managing of every aspect of a legal matter." },
                  { q: "Why is deadline tracking critical?", a: "Strict court timelines mean missing even one date can lead to case dismissal or major penalties." },
                  { q: "Can you support multiple cases?", a: "Yes, our systems are designed to handle both individual high-priority cases and complex multi-case portfolios." },
                  { q: "How often will I receive updates?", a: "We provide regular periodic reports and instant alerts whenever a key milestone is approached or achieved." },
                  { q: "Is my case data secure?", a: "Absolutely. We employ high-grade encryption and strict internal confidentiality protocols for all case data." }
                ].map((faq, i) => (
                  <div key={i} className={`border border-white/5 rounded bg-[#1B2D33]/40 overflow-hidden ${visibleSections.faq ? 'animate-fade-in-up' : 'opacity-100'}`} style={{ animationDelay: `${i * 100}ms` }}>
                    <button onClick={() => setActiveFaq(activeFaq === i ? null : i)} className="w-full p-8 flex items-center justify-between group">
                      <span className={`text-lg font-serif font-bold transition-colors ${activeFaq === i ? 'text-[#A07A41]' : 'text-gray-200'}`}>{faq.q}</span>
                      <ChevronDown className={`h-5 w-5 text-[#A07A41] transition-transform ${activeFaq === i ? 'rotate-180' : ''}`} />
                    </button>
                    <div className={`transition-all duration-300 px-8 ${activeFaq === i ? 'max-h-64 pb-12 opacity-100' : 'max-h-0 opacity-0 overflow-hidden'}`}>
                      <p className="text-gray-400 border-t border-white/5 pt-8 leading-relaxed">{faq.a}</p>
                    </div>
                  </div>
                ))}
              </div>
           </div>
        </section>

        {/* 10. FINAL CTA */}
        <section ref={sectionRefs.cta} data-section="cta" className="relative py-24 lg:py-48 bg-[#16272D] text-center overflow-hidden">
          <div className="absolute inset-0 z-0">
             <img src="/3hero.jpg" alt="Final CTA" className="w-full h-full object-cover opacity-15 scale-110" />
          </div>
          <div className="relative z-10 px-4 sm:px-6 lg:px-8 max-w-[90rem] mx-auto">
            <div className={`transition-all duration-1000 ${visibleSections.cta ? 'animate-fade-in-up' : 'opacity-100'}`}>
              <h2 className="text-3xl md:text-6xl font-serif font-bold text-white mb-10 tracking-tight leading-none">
                Keep Your Case on Track <br />
                <span className="italic font-light text-[#A07A41]">Without The Stress.</span>
              </h2>
              <p className="text-gray-300 text-lg md:text-xl font-light mb-16 max-w-2xl mx-auto">Let professionals manage your case deadlines and workflow while you focus on the legal strategy.</p>
              <button className="px-10 py-5 bg-[#A07A41] text-black font-black tracking-[0.2em] uppercase text-xs md:text-sm rounded transition-all hover:bg-white shadow-2xl flex items-center justify-center gap-4 mx-auto group">
                 <span>Request Case Management Support Today</span>
                 <ArrowRight className="h-5 w-5 group-hover:translate-x-3 transition-transform" />
              </button>
            </div>
          </div>
        </section>

      </main>
    </div>
  );
};

// Internal Help Icons
const LockIcon = (props) => (
  <svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-lock"><rect width="18" height="11" x="3" y="11" rx="2" ry="2"/><path d="M7 11V7a5 5 0 0 1 10 0v4"/></svg>
);
const FilesIcon = (props) => (
  <svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-files"><path d="M15.5 2H8.6c-.4 0-.8.2-1.1.5-.3.3-.5.7-.5 1.1v12.8c0 .4.2.8.5 1.1.3.3.7.5 1.1.5h9.8c.4 0 .8-.2 1.1-.5.3-.3.5-.7.5-1.1V6.5L15.5 2z"/><path d="M3 7.6v12.8c0 .4.2.8.5 1.1.3.3.7.5 1.1.5h9.8"/><path d="M15 2v5h5"/></svg>
);

export default CaseManagementDeadlineTrackingPage;
