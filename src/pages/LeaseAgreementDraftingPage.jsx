import React, { useEffect, useState, useRef } from 'react';
import {
  ArrowRight, Search, CheckCircle, Zap, Database,
  Shield, FileText, ChevronDown, Award, Briefcase, Target,
  ShieldAlert, ClipboardCheck, Layers, FileSearch,
  Landmark, Bookmark, Lightbulb,
  ShieldCheck, FileCheck, Gavel, Home, Building2,
  Users, Scale, Clock, FileSignature, MapPin, ExternalLink
} from 'lucide-react';

const LeaseAgreementDraftingPage = () => {
  const [activeFaq, setActiveFaq] = useState(null);
  const [visibleSections, setVisibleSections] = useState({
    hero: false,
    about: false,
    offer: false,
    whyChoose: false,
    process: false,
    whoWeServe: false,
    cta: false,
    faq: false
  });

  const sectionRefs = {
    hero: useRef(null),
    about: useRef(null),
    offer: useRef(null),
    whyChoose: useRef(null),
    process: useRef(null),
    whoWeServe: useRef(null),
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

  const offerItems = [
    { title: "Residential Lease Agreements", icon: Home, desc: "Drafting compliant ASTs and specialized residential tenancies for UK landlords." },
    { title: "Commercial Lease Agreements", icon: Building2, desc: "Complex commercial property leases tailored to specific business use-cases." },
    { title: "Assured Shorthold Tenancy (AST)", icon: FileText, desc: "Legally watertight AST documents reflecting current UK property standards." },
    { title: "Renewal & Amendment Drafting", icon: FileSignature, desc: "Professional drafting for lease extensions, renewals, and deed of variations." },
    { title: "Custom Drafting Services", icon: Layers, desc: "Bespoke clauses and high-end drafting tailored for law firms and solicitors." }
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
            <img src="/11.jpg" alt="UK Lease Agreements" className="w-full h-full object-cover object-center transition-transform duration-[20s] group-hover:scale-110" />
            <div className="absolute inset-0 bg-gradient-to-t from-[#2A454E] via-[#2A454E]/70 to-transparent"></div>
          </div>


          <div className="relative z-10 px-4 sm:px-6 lg:px-8 max-w-[90rem] mx-auto w-full">
            <div className="max-w-4xl">
              <div className={`flex items-center gap-4 mb-6 transition-all duration-1000 ${visibleSections.hero ? 'animate-fade-in-right' : 'opacity-0'}`}>
                <div className="h-[1px] w-12 bg-[#A07A41]"></div>
                <span className="text-[#A07A41] uppercase tracking-[0.4em] text-[10px] font-bold">Solicitor Support Services</span>
              </div>

              <h1 className={`text-4xl md:text-5xl lg:text-7xl font-serif font-bold text-white leading-tight mb-8 tracking-tight transition-all duration-1000 ${visibleSections.hero ? 'opacity-100' : 'opacity-0'}`}>
                <span className="block animate-fade-in-top-left text-[#A07A41]">Lease Agreement</span>
                <span className="block italic font-light animate-fade-in-up animation-delay-200">Drafting Services for UK Law Firms</span>
              </h1>

              <p className={`text-gray-300 text-base md:text-xl font-sans font-light leading-relaxed max-w-2xl mb-10 border-l-2 border-[#A07A41]/30 pl-8 transition-all duration-1000 ${visibleSections.hero ? 'animate-fade-in-left animation-delay-400' : 'opacity-0'}`}>
                Professional, accurate, and UK-compliant lease agreements tailored for solicitors and legal practices. Hum UK law firms ke liye high-quality lease agreements draft karte hain — fast turnaround aur legal accuracy ke sath.
              </p>

              <div className={`flex flex-wrap gap-6 transition-all duration-1000 ${visibleSections.hero ? 'animate-fade-in-up animation-delay-600' : 'opacity-0'}`}>

                <a href="#contact" className="group relative inline-flex items-center gap-4 px-10 py-5 border border-[#A07A41]/40 text-white font-bold uppercase tracking-widest text-xs rounded-xl transition-all duration-500 hover:bg-[#A07A41] hover:text-black hover:border-transparent">
                  <span>Book a Consultation</span>
                  <ExternalLink className="h-5 w-5" />
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* 2. About the Service */}
        <section
          ref={sectionRefs.about}
          data-section="about"
          className="relative py-24 lg:py-40 bg-[#2A454E] overflow-hidden"
        >
          <div className="px-4 sm:px-6 lg:px-8 max-w-[90rem] mx-auto z-10 relative">
            <div className={`grid lg:grid-cols-2 gap-20 items-center ${visibleSections.about ? 'animate-fade-in-bottom-right' : 'opacity-0'}`}>

              <div className={`${visibleSections.about ? 'animate-fade-in-top-left' : 'opacity-0'}`}>
                <div className="flex items-center gap-4 mb-8">
                  <div className="h-[1px] w-12 bg-[#A07A41]"></div>
                  <span className="text-[#A07A41] uppercase tracking-[0.4em] text-xs font-bold">Property Law Expertise</span>
                </div>
                <h2 className="text-3xl md:text-5xl font-serif font-bold text-white leading-tight mb-10">
                  Expert Lease Drafting for <br />
                  <span className="italic font-light text-[#A07A41]">UK Legal Professionals.</span>
                </h2>
                <div className="space-y-8">
                  <p className="text-gray-300 text-base md:text-lg font-sans font-light leading-relaxed">
                    Humari team UK property laws ko samajh kar residential aur commercial lease agreements draft karti hai. Yeh service specially UK lawyers aur law firms ke liye design ki gayi hai jo outsourcing ke through apna workload reduce karna chahte hain.
                  </p>

                  <div className="grid sm:grid-cols-2 gap-6">
                    {[
                      { text: "Accurate legal formatting", icon: FileCheck },
                      { text: "UK compliance (Landlord & Tenant laws)", icon: ShieldCheck },
                      { text: "Ready-to-use documents", icon: ClipboardCheck },
                      { text: "Seamless outsourcing", icon: Zap }
                    ].map((item, i) => (
                      <div key={i} className="flex items-center gap-4 p-4 bg-[#1B2D33]/40 rounded-2xl border border-white/5">
                        <item.icon className="h-6 w-6 text-[#A07A41] shrink-0" />
                        <span className="text-sm font-medium text-gray-200">{item.text}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              <div className="relative group">
                <div className="aspect-[4/5] rounded-[3rem] overflow-hidden border border-[#A07A41]/20 relative bg-[#2A454E] flex items-center justify-center">
                  <img src="/12.jpg" alt="Lease Agreement Strategy" className="w-full h-full object-cover object-center transition-all duration-1000 group-hover:scale-105 grayscale group-hover:grayscale-0" />
                  <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-[#1B2D33]/40 to-[#1B2D33]"></div>
                </div>

              </div>

            </div>
          </div>
        </section>

        {/* 3. What We Offer */}
        <section
          ref={sectionRefs.offer}
          data-section="offer"
          className="relative py-24 lg:py-40 bg-[#1B2D33] overflow-hidden border-y border-white/5"
        >
          <div className="px-4 sm:px-6 lg:px-8 max-w-[90rem] mx-auto relative z-10">
            <div className="mb-24 flex flex-col md:flex-row md:items-end justify-between gap-8">
              <div className={`max-w-3xl border-l-[3px] border-[#A07A41] pl-8 ${visibleSections.offer ? 'animate-fade-in-left' : 'opacity-0'}`}>
                <span className="text-[#A07A41] uppercase tracking-[0.4em] text-xs font-bold mb-4 block">Our Offering</span>
                <h2 className="text-3xl md:text-6xl font-serif font-bold text-white tracking-tight">Services Include <br /><span className="italic font-light text-[#A07A41]">Lease Agreement Drafting.</span></h2>
              </div>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {offerItems.map((item, i) => (
                <div
                  key={i}
                  className={`group relative p-10 bg-[#2A454E]/30 border border-white/5 rounded-3xl hover:-translate-y-2 hover:bg-[#2A454E]/60 hover:border-[#A07A41]/30 transition-all duration-500 overflow-hidden ${visibleSections.offer ? 'animate-fade-in-up' : 'opacity-0'}`}
                  style={{ animationDelay: `${i * 150}ms` }}
                >
                  <div className="flex justify-between items-start mb-8">
                    <div className="w-14 h-14 bg-[#1B2D33] rounded-xl flex items-center justify-center group-hover:bg-[#A07A41] transition-colors duration-500 border border-[#A07A41]/10 group-hover:border-transparent">
                      <item.icon className="h-6 w-6 text-[#A07A41] group-hover:text-black transition-colors" />
                    </div>
                  </div>

                  <h3 className="text-2xl font-serif font-bold text-white mb-4 leading-tight group-hover:text-[#A07A41] transition-colors">{item.title}</h3>
                  <p className="text-gray-400 font-sans font-light leading-relaxed mb-6">
                    {item.desc}
                  </p>
                  <div className="h-1 w-10 bg-[#A07A41]/20 group-hover:w-full transition-all duration-500"></div>
                </div>
              ))}

              <div className={`p-10 bg-[#2A454E]/30 border border-white/5 rounded-3xl flex flex-col justify-center items-center text-center group hover:-translate-y-2 hover:bg-[#2A454E]/60 hover:border-[#A07A41]/30 transition-all duration-500 ${visibleSections.offer ? 'animate-fade-in-bottom-right' : 'opacity-0'}`}>
                <div className="w-14 h-14 bg-[#1B2D33] rounded-xl flex items-center justify-center mb-8 border border-[#A07A41]/10">
                   <Search className="h-6 w-6 text-[#A07A41]" />
                </div>
                <h3 className="text-white font-serif font-bold text-2xl mb-4 leading-tight group-hover:text-[#A07A41] transition-colors">Need a Custom Review?</h3>
                <p className="text-gray-400 font-sans font-light text-sm mb-8 leading-relaxed">Review & Editing of Existing Agreements naturally included.</p>
                <button className="px-8 py-4 bg-[#A07A41] text-black font-bold uppercase text-[10px] tracking-widest rounded-xl hover:bg-white transition-all shadow-xl">Start Review</button>
              </div>

            </div>
          </div>
        </section>

        {/* 4. Why Choose Us */}
        <section
          ref={sectionRefs.whyChoose}
          data-section="whyChoose"
          className="relative py-24 lg:py-40 bg-[#2A454E] overflow-hidden"
        >
          <div className="px-4 sm:px-6 lg:px-8 max-w-[90rem] mx-auto">
            <div className="grid lg:grid-cols-2 gap-20 items-center">
              <div className={`${visibleSections.whyChoose ? 'animate-fade-in-left' : 'opacity-0'}`}>
                <span className="text-[#A07A41] uppercase tracking-[0.4em] text-xs font-bold mb-6 block">USP Section</span>
                <h2 className="text-3xl md:text-5xl font-serif font-bold text-white mb-10 leading-tight">Why UK Law Firms <br /><span className="italic font-light text-[#A07A41]">Choose Our Services.</span></h2>
                <div className="space-y-6">
                  {[
                    "UK legal structure ka strong understanding",
                    "Fast turnaround (24–48 hours)",
                    "Confidential & secure process",
                    "Cost-effective outsourcing solution",
                    "Experienced legal drafting team"
                  ].map((item, i) => (
                    <div key={i} className={`flex items-center gap-4 group ${visibleSections.whyChoose ? 'animate-fade-in-left' : 'opacity-0'}`} style={{ animationDelay: `${i * 100}ms` }}>
                      <div className="h-8 w-8 rounded-full bg-[#1B2D33] flex items-center justify-center shrink-0 border border-[#A07A41]/10 group-hover:bg-[#A07A41] transition-all">
                        <CheckCircle size={14} className="text-[#A07A41] group-hover:text-black" />
                      </div>
                      <span className="text-gray-200 font-serif font-bold italic tracking-wide">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
              <div className={`${visibleSections.whyChoose ? 'animate-fade-in-right' : 'opacity-0'}`}>
                <div className="relative p-12 lg:p-20 bg-[#1B2D33] rounded-[3rem] border border-[#A07A41]/20 overflow-hidden shadow-2xl">
                  <div className="absolute top-0 right-0 p-8 opacity-10"><ShieldCheck size={300} className="text-[#A07A41]" /></div>
                  <h4 className="text-3xl font-serif font-bold text-white mb-8 relative z-10 italic">Reliable. Accurate. <span className="text-[#A07A41]">Confidential.</span></h4>
                  <p className="text-gray-400 font-sans font-light leading-relaxed mb-6">
                    Outsourced legal drafting UK specialists focusing on Lease agreement drafting UK requirements. Our residential tenancy agreement UK expertise ensures compliance with current statutes.
                  </p>
                  <img src="/13.jpg" alt="USP Iconography" className="w-full h-48 object-cover rounded-2xl grayscale group-hover:grayscale-0 transition-all duration-700 mt-8" />

                </div>

              </div>
            </div>
          </div>
        </section>

        {/* 5. Our Process */}
        <section
          ref={sectionRefs.process}
          data-section="process"
          className="relative py-24 lg:py-40 bg-[#1B2D33] overflow-hidden border-t border-white/5"
        >
          <div className="px-4 sm:px-6 lg:px-8 max-w-[90rem] mx-auto">
            <div className="text-center mb-24">
              <span className={`text-[#A07A41] uppercase tracking-[0.4em] text-xs font-bold mb-4 block ${visibleSections.process ? 'animate-fade-in-up' : 'opacity-0'}`}>Workflow Strategy</span>
              <h2 className={`text-3xl md:text-5xl font-serif font-bold text-white ${visibleSections.process ? 'animate-fade-in-up' : 'opacity-0'}`}>How Our <span className="italic font-light text-[#A07A41]">Process Works.</span></h2>
            </div>

            <div className="grid md:grid-cols-5 gap-8">
              {[
                { step: "01", title: "Requirement Receive", desc: "Requirement receive karte hain (email ya form se)" },
                { step: "02", title: "Analysis", desc: "Details analyze karte hain" },
                { step: "03", title: "Drafting", desc: "Draft prepare karte hain UK standards ke mutabiq" },
                { step: "04", title: "Review", desc: "Review & revisions (if needed)" },
                { step: "05", title: "Final Delivery", desc: "Final delivery (Word/PDF format)" }
              ].map((item, i) => (
                <div key={i} className={`flex flex-col items-center text-center group ${visibleSections.process ? 'animate-fade-in-up' : 'opacity-0'}`} style={{ animationDelay: `${i * 150}ms` }}>
                  <div className="w-20 h-20 rounded-full bg-[#2A454E] flex items-center justify-center mb-8 relative border border-[#A07A41]/10 group-hover:bg-[#A07A41] transition-all duration-500">
                    <span className="text-[#A07A41] font-bold italic group-hover:text-black">{item.step}</span>
                    {i < 4 && <div className="absolute top-[50%] left-[100%] w-full h-[1px] bg-[#A07A41]/20 hidden lg:block"></div>}
                  </div>
                  <h4 className="text-white font-serif font-bold mb-3 tracking-tight group-hover:text-[#A07A41] transition-colors">{item.title}</h4>
                  <p className="text-gray-400 text-[13px] font-sans font-light leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 6. Who We Serve */}
        <section
          ref={sectionRefs.whoWeServe}
          data-section="whoWeServe"
          className="relative py-24 lg:py-40 bg-[#2A454E] overflow-hidden border-b border-white/5"
        >
          <div className="px-4 sm:px-6 lg:px-8 max-w-[90rem] mx-auto">
            <div className="grid lg:grid-cols-2 gap-20 items-center">
              <div className={`${visibleSections.whoWeServe ? 'animate-fade-in-top-left' : 'opacity-0'} group`}>
                <img src="/14.jpg" alt="Our Client Targets" className="w-full h-[400px] object-cover rounded-[3rem] grayscale group-hover:grayscale-0 transition-all duration-1000 shadow-2xl" />
              </div>


              <div className={`${visibleSections.whoWeServe ? 'animate-fade-in-bottom-right' : 'opacity-0'}`}>
                <span className="text-[#A07A41] uppercase tracking-[0.4em] text-xs font-bold mb-6 block">Our Community</span>
                <h2 className="text-3xl md:text-5xl font-serif font-bold text-white mb-8 tracking-tight">Who We <span className="italic font-light text-[#A07A41]">Serve.</span></h2>
                <p className="text-gray-400 text-lg font-light leading-relaxed mb-12">
                  Hum kaam karte hain specifically for UK solicitors, law firms, and property lawyers needing high-quality commercial lease drafting UK support.
                </p>
                <div className="grid grid-cols-2 gap-4">
                  {["UK Solicitors", "Law Firms", "Property Lawyers", "Legal Consultants"].map((item, i) => (
                    <div key={i} className="flex items-center gap-4 p-5 bg-[#1B2D33] rounded-2xl border border-white/5 hover:border-[#A07A41]/30 transition-all">
                      <Users size={18} className="text-[#A07A41]" />
                      <span className="text-gray-200 font-bold uppercase tracking-[0.1em] text-[11px]">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 8. Call to Action (Bottom) */}
        <section
          ref={sectionRefs.cta}
          data-section="cta"
          className="relative py-24 lg:py-40 bg-[#1B2D33] overflow-hidden"
        >
          <div className="px-4 sm:px-6 lg:px-8 max-w-[90rem] mx-auto text-center relative z-10">
            <div className={`max-w-5xl mx-auto p-16 lg:p-24 bg-[#2A454E]/40 border border-[#A07A41]/20 rounded-[4rem] backdrop-blur-2xl relative overflow-hidden shadow-2xl ${visibleSections.cta ? 'animate-fade-in-up' : 'opacity-0'}`}>
              <div className="absolute -top-10 -left-10 opacity-[0.03]"><Home size={350} className="text-[#A07A41]" /></div>
              <span className="text-[#A07A41] uppercase tracking-[0.4em] text-[10px] font-bold mb-8 block">Final Step</span>
              <h2 className="text-4xl md:text-6xl font-serif font-bold text-white mb-10 leading-tight tracking-tight">Need Reliable Lease <br /><span className="italic font-light text-[#A07A41]">Agreement Drafting?</span></h2>
              <p className="text-gray-400 font-sans text-lg mb-12 max-w-2xl mx-auto leading-relaxed">
                Agar aap UK law firm hain aur reliable outsourcing partner dhund rahe hain, toh hum aap ki madad ke liye ready hain. Fast, accurate, and confidential service guaranteed.
              </p>
              <div className="flex flex-col sm:flex-row justify-center items-center gap-8">
                <a href="#contact" className="group flex items-center gap-4 px-12 py-6 bg-[#A07A41] text-black font-bold uppercase tracking-[0.1em] text-xs rounded-xl shadow-2xl transition-all hover:scale-105 hover:bg-white">
                  <span>Contact Us Today</span>
                  <ArrowRight className="h-4 w-4 group-hover:translate-x-1.5 transition-transform" />
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* 9. FAQ Section */}
        <section
          ref={sectionRefs.faq}
          data-section="faq"
          className="relative py-24 lg:py-40 bg-[#2A454E] overflow-hidden border-t border-white/5"
        >
          <div className="relative z-10 px-4 sm:px-6 lg:px-8 max-w-[50rem] mx-auto">
            <div className={`text-center mb-24 ${visibleSections.faq ? 'animate-fade-in-top-left' : 'opacity-0'}`}>
              <span className="text-[#A07A41] uppercase tracking-[0.4em] text-[10px] font-bold mb-6 block">SEO Boost</span>
              <h2 className="text-3xl md:text-5xl font-serif font-bold text-white tracking-tight">Common <span className="italic font-light text-[#A07A41]">Questions.</span></h2>
            </div>

            <div className="space-y-4">
              {[
                { q: "Do you follow UK law for lease agreements?", a: "Yes, hum UK landlord-tenant laws ke mutabiq drafting karte hain." },
                { q: "Turnaround time kya hai?", a: "Usually 24–48 hours, depending on complexity." },
                { q: "Kya aap custom clauses add karte hain?", a: "Yes, client ki requirement ke mutabiq." }
              ].map((faq, index) => (
                <div
                  key={index}
                  className={`border border-[#A07A41]/10 rounded-2xl bg-[#1B2D33] overflow-hidden ${visibleSections.faq ? (index % 2 === 0 ? 'animate-fade-in-left' : 'animate-fade-in-right') : 'opacity-0'}`}
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
                    <p className="text-gray-400 text-sm md:text-base font-sans font-light leading-relaxed">{faq.a}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

      </main>
    </div>
  );
};

export default LeaseAgreementDraftingPage;
