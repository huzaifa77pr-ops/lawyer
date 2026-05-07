import React, { useEffect, useRef, useState } from 'react';
import { 
  Users, 
  ShieldCheck, 
  Briefcase, 
  Scale, 
  Search, 
  FileText, 
  CheckCircle, 
  Award, 
  Clock, 
  Globe,
  ArrowRight,
  Database,
  Lock,
  MessageSquare,
  User
} from 'lucide-react';
import { Link } from 'react-router-dom';

const TeamPage = () => {
  const scrollRef = useRef([]);

  useEffect(() => {
    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const animation = entry.target.dataset.animation || 'animate-fade-in-up';
          entry.target.classList.add(animation);
          entry.target.style.opacity = '1';
          observer.unobserve(entry.target);
        }
      });
    }, observerOptions);

    scrollRef.current.forEach((el) => {
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  const teamMembers = [
    {
      name: "Abdul Rehman",
      role: "Founder",
      expertise: "Paralegal Expert",
      description: "As the principal founder, Abdul leads our strategic legal support operations with over two decades of experience in the UK legal sector.",
      image: "/hd2.jpg"
    },
    {
      name: "Ibtisam Khan",
      role: "Senior Paralegal Expert",
      expertise: "UK Statutory Law & Compliance",
      description: "Ibtisam specializes in complex statutory research and regulatory compliance, ensuring all documentation meets elite UK standards.",
      image: "/hd1.jpg"
    },
    {
      name: "Umer Wazir",
      role: "Senior Paralegal Expert",
      expertise: "Litigation Support & Case Preparation",
      description: "Umer manages our litigation support department, focusing on meticulous case file organization and trial bundle preparation.",
      image: "/hd4.jpg"
    },
    {
      name: "Wajeeha Amin",
      role: "Paralegal Assistant",
      expertise: "Corporate & Finance Litigation",
      description: "Wajeeha provides dedicated support for corporate clients, handling intricate finance litigation documentation and research.",
      image: "/hd3.jpg"
    }
  ];

  const specializations = [
    {
      title: "Intellectual Property",
      icon: <Database className="w-8 h-8" />,
      items: ["Trademark Searches", "Copyright Filings", "Infringement Reports"]
    },
    {
      title: "Property Documentation",
      icon: <FileText className="w-8 h-8" />,
      items: ["Lease Drafting", "Title Searches", "Compliance Checks"]
    },
    {
      title: "Compliance",
      icon: <ShieldCheck className="w-8 h-8" />,
      items: ["Regulatory Audits", "GDPR Strategy", "Professional Standards"]
    },
    {
      title: "Client Communication",
      icon: <MessageSquare className="w-8 h-8" />,
      items: ["Case Intake", "Stakeholder Management", "Reporting"]
    }
  ];

  const workflow = [
    {
      step: "01",
      title: "Task Assignment",
      desc: "Detailed briefing where legal requirements and deadlines are established through our secure portal."
    },
    {
      step: "02",
      title: "Research & Execution",
      desc: "Our specialized paralegals conduct rigorous research using Westlaw, LexisNexis, and UKIPO databases."
    },
    {
      step: "03",
      title: "Quality Review",
      desc: "All documentation undergoes a multi-tier review process to ensure OSCOLA compliance and accuracy."
    },
    {
      step: "04",
      title: "Final Delivery",
      desc: "Secure delivery of finalized documents, formatted to your specific institutional or law firm standards."
    }
  ];

  const addToRefs = (el) => {
    if (el && !scrollRef.current.includes(el)) {
      scrollRef.current.push(el);
    }
  };

  return (
    <div className="bg-[#2A454E] text-white overflow-x-hidden pt-20 font-sans">
      
      {/* 1. Hero Section */}
      <section className="relative min-h-[80vh] flex items-center justify-center overflow-hidden border-b border-white/10">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-r from-[#2A454E]/95 via-[#2A454E]/60 to-transparent z-10" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#2A454E]/60 via-transparent to-transparent z-10" />
          <img 
            src="/t1.jpg" 
            alt="Professional Legal Team" 
            className="w-full h-full object-cover opacity-80 scale-105 animate-[kenburns_20s_ease-out_forwards]"
          />
        </div>
        
        <div className="container mx-auto px-6 relative z-20 text-center lg:text-left">
          <div ref={addToRefs} data-animation="animate-fade-in-up" className="opacity-0 max-w-4xl">
            <div className="flex items-center gap-4 mb-6 justify-center lg:justify-start">
              <div className="h-[2px] w-12 bg-[#A07A41]"></div>
              <span className="text-[#A07A41] uppercase tracking-[0.2em] text-sm md:text-xs font-bold">
                Professional Excellence Since 1995
              </span>
            </div>
            <h1 className="text-4xl sm:text-5xl md:text-7xl font-serif font-bold text-white leading-tight mb-8">
              A Structured Approach <br /> to <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#C29D64] via-[#A07A41] to-[#785A2D]">UK Legal Support.</span>
            </h1>
            <p className="text-base md:text-lg text-gray-300 mb-10 max-w-2xl font-light leading-relaxed">
              Our team consists of specialized paralegals and legal support professionals dedicated to operational efficiency, professional excellence, and firm scalability across the UK.
            </p>
          </div>
        </div>
      </section>

      {/* 2. Core Team Members Section */}
      <section className="py-24 lg:py-32 bg-[#2A454E]">
        <div className="container mx-auto px-6">
          <div ref={addToRefs} data-animation="animate-fade-in-left" className="flex flex-col items-center text-center mb-16 md:mb-24 opacity-0">
            <div className="flex items-center gap-3 mb-6">
              <div className="h-[1px] w-12 bg-[#A07A41]"></div>
              <span className="text-[#A07A41] uppercase tracking-widest text-sm font-semibold">Leadership</span>
              <div className="h-[1px] w-12 bg-[#A07A41]"></div>
            </div>
            <h2 className="text-3xl md:text-5xl lg:text-6xl font-serif font-bold text-white leading-tight mb-6">
              The Professionals <br className="hidden sm:block" />
              Behind <span className="italic font-light text-[#A07A41]">The Victories.</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {teamMembers.map((member, idx) => (
              <div 
                key={idx} 
                ref={addToRefs}
                data-animation="animate-fade-in-up"
                className="group bg-[#1B2D33] border border-white/10 rounded-sm p-0 overflow-hidden hover:border-[#A07A41]/40 transition-all duration-700 hover:-translate-y-2 opacity-0 shadow-2xl"
              >
                <div className="relative w-full aspect-[3/4] overflow-hidden bg-[#2A454E]">
                  <div className="absolute inset-0 bg-gradient-to-t from-[#1B2D33] via-[#1B2D33]/40 to-transparent opacity-80 z-10 transition-opacity duration-500 group-hover:opacity-40"></div>
                  <img 
                    src={member.image} 
                    alt={member.name} 
                    className="w-full h-full object-cover object-top grayscale group-hover:grayscale-0 transform group-hover:scale-110 transition-all duration-1000 ease-out"
                  />
                </div>
                <div className="p-8 text-center">
                  <h3 className="text-2xl font-serif text-white mb-2 group-hover:text-[#A07A41] transition-colors">{member.name}</h3>
                  <p className="text-[#A07A41] font-sans font-bold text-[10px] tracking-[0.2em] uppercase mb-4">{member.role}</p>
                  <div className="h-[2px] w-6 bg-white/20 mx-auto group-hover:bg-[#A07A41] group-hover:w-16 transition-all duration-500 mb-4"></div>
                  <p className="text-gray-400 text-xs font-sans italic font-light mb-4">Expertise: {member.expertise}</p>
                  <p className="text-gray-300 text-sm leading-relaxed line-clamp-3 group-hover:line-clamp-none transition-all duration-500">{member.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. Specialization Breakdown */}
      <section className="py-24 lg:py-32 border-t border-white/10 bg-[#2A454E]">
        <div className="container mx-auto px-6">
          <div ref={addToRefs} data-animation="animate-fade-in-right" className="text-center mb-16 md:mb-24 opacity-0">
            <h2 className="text-3xl md:text-5xl font-serif font-bold text-white mb-4">Core Specializations</h2>
            <p className="text-[#A07A41] uppercase tracking-[0.2em] text-xs font-bold">Structured expertise across the legal spectrum</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
            {specializations.map((spec, idx) => (
              <div 
                key={idx} 
                ref={addToRefs}
                data-animation="animate-fade-in-up"
                className="bg-[#1B2D33] p-10 border border-white/10 rounded-sm hover:bg-[#2A454E]/40 transition-all duration-500 opacity-0 group"
              >
                <div className="text-[#A07A41] mb-8 group-hover:scale-110 transition-transform duration-500">{spec.icon}</div>
                <h3 className="text-xl font-serif font-bold text-white mb-6 border-b border-white/10 pb-4 group-hover:text-[#A07A41] transition-colors">{spec.title}</h3>
                <ul className="space-y-4">
                  {spec.items.map((item, i) => (
                    <li key={i} className="flex items-center gap-3 text-sm text-gray-400 group-hover:text-gray-300 transition-colors">
                      <div className="w-1.5 h-1.5 bg-[#A07A41] rounded-full"></div>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. How the Team Works */}
      <section className="py-24 lg:py-32 bg-[#2A454E] border-t border-white/10">
        <div className="container mx-auto px-6">
          <div className="flex flex-col lg:flex-row gap-20 items-center">
            <div className="lg:w-1/2" ref={addToRefs} data-animation="animate-fade-in-left">
              <div className="flex items-center gap-3 mb-6">
                <div className="h-[1px] w-12 bg-[#A07A41]"></div>
                <span className="text-[#A07A41] uppercase tracking-widest text-sm font-semibold">Our Process</span>
              </div>
              <h2 className="text-4xl md:text-6xl font-serif font-bold text-white mb-8 leading-tight">Systematic <br /> <span className="italic font-light text-[#A07A41]">Execution.</span></h2>
              <p className="text-gray-300 mb-10 text-lg font-light leading-relaxed">
                Consistency is the hallmark of professional legal support. We avoid individualistic silos in favor of robust, repeatable systems that ensure every deliverable meets UK legal standards.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="p-8 bg-[#1B2D33] rounded-sm border border-white/10 hover:border-[#A07A41]/40 transition-all">
                  <Award className="text-[#A07A41] mb-4 w-10 h-10" />
                  <h4 className="text-white font-serif font-bold text-lg mb-2">SRA Compliant</h4>
                  <p className="text-gray-400 text-xs leading-relaxed">Adhering to the highest professional standards.</p>
                </div>
                <div className="p-8 bg-[#1B2D33] rounded-sm border border-white/10 hover:border-[#A07A41]/40 transition-all">
                  <Database className="text-[#A07A41] mb-4 w-10 h-10" />
                  <h4 className="text-white font-serif font-bold text-lg mb-2">Secure Portals</h4>
                  <p className="text-gray-400 text-xs leading-relaxed">Military-grade encryption for all data handling.</p>
                </div>
              </div>
            </div>
            
            <div className="lg:w-1/2 space-y-6">
              {workflow.map((item, idx) => (
                <div 
                  key={idx} 
                  ref={addToRefs}
                  data-animation="animate-fade-in-right"
                  className="flex gap-8 p-8 bg-[#1B2D33] border border-white/10 hover:border-[#A07A41]/20 transition-all duration-500 group opacity-0"
                >
                  <div className="text-4xl font-serif text-[#A07A41]/20 group-hover:text-[#A07A41] transition-colors duration-500">{item.step}</div>
                  <div>
                    <h3 className="text-xl font-serif font-bold text-white mb-3 group-hover:text-[#A07A41] transition-colors">{item.title}</h3>
                    <p className="text-gray-400 text-sm leading-relaxed group-hover:text-gray-300">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 5. Why Our Team is Different */}
      <section className="py-24 lg:py-32 bg-[#2A454E] border-t border-white/10">
        <div className="container mx-auto px-6">
          <div className="bg-[#1B2D33] p-12 md:p-24 border border-white/10 relative overflow-hidden group">
            <div className="absolute bottom-0 right-0 w-full h-1 bg-[#A07A41]/20 group-hover:bg-[#A07A41] transition-all duration-1000"></div>
            
            <div className="grid lg:grid-cols-2 gap-20 items-center">
              <div ref={addToRefs} data-animation="animate-fade-in-left" className="opacity-0">
                <h2 className="text-4xl md:text-5xl font-serif font-bold text-white mb-10 leading-tight">Beyond <br />Virtual Assistance.</h2>
                <div className="space-y-10">
                  <div className="flex gap-6">
                    <div className="w-12 h-12 bg-[#2A454E] border border-white/10 flex items-center justify-center flex-shrink-0 group-hover:bg-[#A07A41] transition-colors duration-500">
                      <Scale className="text-[#A07A41] w-6 h-6 group-hover:text-black" />
                    </div>
                    <div>
                      <h4 className="text-lg font-serif font-bold text-white mb-2">Legal Domain Expertise</h4>
                      <p className="text-gray-400 text-sm leading-relaxed">Unlike general VAs, our team members are trained paralegals with a deep understanding of the UK legal landscape.</p>
                    </div>
                  </div>
                  <div className="flex gap-6">
                    <div className="w-12 h-12 bg-[#2A454E] border border-white/10 flex items-center justify-center flex-shrink-0 group-hover:bg-[#A07A41] transition-colors duration-500">
                      <Clock className="text-[#A07A41] w-6 h-6 group-hover:text-black" />
                    </div>
                    <div>
                      <h4 className="text-lg font-serif font-bold text-white mb-2">Operational Scalability</h4>
                      <p className="text-gray-400 text-sm leading-relaxed">We provide the horsepower to scale your legal operations without the overhead of full-time internal hires.</p>
                    </div>
                  </div>
                </div>
              </div>
              
              <div ref={addToRefs} data-animation="animate-fade-in-right" className="opacity-0 bg-[#2A454E] p-12 border border-white/10 relative shadow-inner">
                <div className="absolute top-6 left-6 text-6xl text-[#A07A41]/10 font-serif">"</div>
                <blockquote className="text-2xl font-serif italic text-white/80 leading-relaxed mb-10 relative z-10">
                  Our value lies in our ability to integrate seamlessly into high-stakes legal workflows, delivering technical accuracy that generalist services simply cannot match.
                </blockquote>
                <div className="flex items-center gap-5">
                  <div className="w-14 h-14 bg-[#1B2D33] border border-[#A07A41] rounded-full flex items-center justify-center font-bold text-[#A07A41] text-xl shadow-lg">AR</div>
                  <div>
                    <p className="font-bold text-lg text-white">Abdul Rehman</p>
                    <p className="text-xs text-[#A07A41] uppercase tracking-[0.3em] font-bold">Principal Founder</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 6. Confidentiality & Professional Standards */}
      <section className="py-24 lg:py-32 bg-[#2A454E] border-t border-white/10">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-3 gap-16">
            <div ref={addToRefs} data-animation="animate-fade-in-up" className="opacity-0 group">
              <div className="w-16 h-16 bg-[#1B2D33] border border-white/10 flex items-center justify-center mb-8 group-hover:bg-[#A07A41] transition-all duration-500">
                <Lock className="w-8 h-8 text-[#A07A41] group-hover:text-black" />
              </div>
              <h3 className="text-2xl font-serif font-bold text-white mb-4 group-hover:text-[#A07A41] transition-colors">Secure Handling</h3>
              <p className="text-gray-400 text-sm leading-relaxed group-hover:text-gray-300 transition-colors">
                All client data is processed through UK-compliant secure servers. We maintain strict non-disclosure protocols across all departments.
              </p>
            </div>
            <div ref={addToRefs} data-animation="animate-fade-in-up" className="opacity-0 group">
              <div className="w-16 h-16 bg-[#1B2D33] border border-white/10 flex items-center justify-center mb-8 group-hover:bg-[#A07A41] transition-all duration-500">
                <ShieldCheck className="w-8 h-8 text-[#A07A41] group-hover:text-black" />
              </div>
              <h3 className="text-2xl font-serif font-bold text-white mb-4 group-hover:text-[#A07A41] transition-colors">Non-Advisory Role</h3>
              <p className="text-gray-400 text-sm leading-relaxed group-hover:text-gray-300 transition-colors">
                We operate as a support function. We do not provide legal advice, ensuring no conflict with your firm's professional obligations.
              </p>
            </div>
            <div ref={addToRefs} data-animation="animate-fade-in-up" className="opacity-0 group">
              <div className="w-16 h-16 bg-[#1B2D33] border border-white/10 flex items-center justify-center mb-8 group-hover:bg-[#A07A41] transition-all duration-500">
                <Globe className="w-8 h-8 text-[#A07A41] group-hover:text-black" />
              </div>
              <h3 className="text-2xl font-serif font-bold text-white mb-4 group-hover:text-[#A07A41] transition-colors">UK Standards</h3>
              <p className="text-gray-400 text-sm leading-relaxed group-hover:text-gray-300 transition-colors">
                Every document produced is formatted according to UK standard practices, including OSCOLA citations and White Book rules.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 7. Call to Action Section */}
      <section className="py-32 lg:py-48 bg-[#2A454E] relative overflow-hidden border-t border-white/10">
        <div className="absolute inset-0 bg-[#1B2D33]/10 pointer-events-none"></div>
        <div className="container mx-auto px-6 text-center relative z-10">
          <div ref={addToRefs} data-animation="animate-fade-in-up" className="max-w-4xl mx-auto opacity-0">
            <h2 className="text-4xl md:text-7xl font-serif font-bold text-white mb-10 leading-tight">Ready to <span className="italic font-light text-[#A07A41]">Scale</span> Your Legal Delivery?</h2>
            <p className="text-gray-300 mb-14 text-xl font-light leading-relaxed">
              Experience the difference of a structured, professional legal support team. Book a consultation today to discuss your specific requirements.
            </p>
            <div className="flex flex-col sm:flex-row gap-8 justify-center">
              <Link 
                to="/contact" 
                className="group relative flex items-center justify-center gap-3 px-12 py-5 bg-[#1B2D33] border border-white/10 text-white font-bold tracking-widest uppercase text-sm rounded transition-all duration-300 hover:bg-[#A07A41] shadow-[0_0_20px_rgba(0,0,0,0.1)]"
              >
                Book Free Consultation <ArrowRight className="h-4 w-4 relative z-10 transform group-hover:translate-x-1 transition-transform duration-300" />
              </Link>
              <Link 
                to="/services/other/paralegal/monthly-support" 
                className="px-12 py-5 bg-transparent border border-[#A07A41] text-[#A07A41] hover:bg-[#A07A41] hover:text-black font-bold tracking-widest uppercase text-sm rounded transition-all duration-300"
              >
                Support Packages
              </Link>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
};

export default TeamPage;
