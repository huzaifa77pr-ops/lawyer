import React, { useEffect, useRef, useState } from 'react';
import { Send, Phone, Mail, MapPin, Clock, ShieldCheck } from 'lucide-react';

const ConsultationCTA = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} id="consultation" className="relative bg-[#2A454E] py-24 lg:py-32 overflow-hidden border-t border-white/10">

      {/* Premium Background Effects */}
      <div className="absolute top-0 left-0 w-full h-full opacity-20 pointer-events-none">
        <div className="absolute top-[-10%] right-[-10%] w-[600px] h-[600px] bg-[#A07A41]/10 rounded-full blur-[120px]"></div>
        <div className="absolute bottom-[-10%] left-[-10%] w-[600px] h-[600px] bg-[#A07A41]/10 rounded-full blur-[120px]"></div>
      </div>

      <div className="max-w-[90rem] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">

          {/* Left Side: Impactful Text & Trust Indicators */}
          <div className={`space-y-8 ${isVisible ? 'animate-fade-in-left' : 'opacity-0'}`}>
            <div className="flex items-center gap-3">
              <div className="h-[1px] w-12 bg-[#A07A41]"></div>
              <span className="text-[#A07A41] uppercase tracking-[0.3em] text-xs font-bold">Priority Support</span>
            </div>

            <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif font-bold text-white leading-[1.2]">
              Book Your Priority <br />
              <span className="italic font-light text-[#A07A41]">Consultation.</span>
            </h2>

            <p className="text-gray-400 text-lg font-sans font-light leading-relaxed max-w-xl">
              Partner with H&S Co. to scale your firm's output. Our senior paralegals are ready to integrate with your practice and deliver elite-level legal support across the UK. Professional, confidential, and ROI-driven.
            </p>

            {/* Quick Contact Info Grid */}
            <div className="grid sm:grid-cols-2 gap-6 pt-8">
              <div className="flex items-center gap-4 group cursor-pointer">
                <div className="w-12 h-12 rounded-full border border-[#A07A41]/30 flex items-center justify-center bg-[#A07A41]/5 group-hover:bg-[#A07A41] group-hover:text-black transition-all duration-500">
                  <Phone className="h-5 w-5 text-[#A07A41] group-hover:text-black" />
                </div>
                <div>
                  <p className="text-gray-500 text-[10px] uppercase tracking-widest font-bold">Direct Line</p>
                  <p className="text-white font-serif text-lg">+44 (0) 20 7946 0000</p>
                </div>
              </div>

              <div className="flex items-center gap-4 group cursor-pointer">
                <div className="w-12 h-12 rounded-full border border-[#A07A41]/30 flex items-center justify-center bg-[#A07A41]/5 group-hover:bg-[#A07A41] group-hover:text-black transition-all duration-500">
                  <Mail className="h-5 w-5 text-[#A07A41] group-hover:text-black" />
                </div>
                <div>
                  <p className="text-gray-500 text-[10px] uppercase tracking-widest font-bold">Email Us</p>
                  <p className="text-white font-serif text-lg">support@hsco.uk</p>
                </div>
              </div>
            </div>

            <div className="pt-10 flex items-center gap-4 text-gray-500">
              <ShieldCheck className="h-10 w-10 text-[#A07A41]/40" />
              <p className="text-sm font-sans italic">
                “Confidentiality is our priority. All work is conducted under strict NDAs and SRA-compliant protocols.”
              </p>
            </div>
          </div>

          {/* Right Side: High-End Minimalist Form */}
          <div className={`${isVisible ? 'animate-fade-in-right animation-delay-300' : 'opacity-0'}`}>
            <div className="relative group">
              {/* Form Container with Glassmorphism / Dark Look */}
              <div className="absolute -inset-1 bg-gradient-to-r from-[#A07A41]/20 to-[#A07A41]/5 rounded-sm blur opacity-25 group-hover:opacity-100 transition duration-1000 group-hover:duration-200"></div>

              <div className="relative bg-[#1B2D33] border border-white/10 p-8 sm:p-12 shadow-2xl shadow-black rounded-sm">
                <form className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label className="text-gray-500 text-[10px] uppercase tracking-[2px] font-bold">Full Name</label>
                      <input
                        type="text"
                        placeholder="Jonathan Sterling"
                        className="w-full bg-[#2A454E] border border-white/10 focus:border-[#A07A41] text-white px-4 py-3 outline-none transition-all duration-300 placeholder:text-gray-500 font-sans"
                      />
                    </div>
                    <div className="space-y-2">
                      <label className="text-gray-500 text-[10px] uppercase tracking-[2px] font-bold">Firm Name</label>
                      <input
                        type="text"
                        placeholder="Sterling & Associates"
                        className="w-full bg-[#2A454E] border border-white/10 focus:border-[#A07A41] text-white px-4 py-3 outline-none transition-all duration-300 placeholder:text-gray-500 font-sans"
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label className="text-gray-500 text-[10px] uppercase tracking-[2px] font-bold">Work Email</label>
                    <input
                      type="email"
                      placeholder="j.sterling@firm.co.uk"
                      className="w-full bg-[#2A454E] border border-white/10 focus:border-[#A07A41] text-white px-4 py-3 outline-none transition-all duration-300 placeholder:text-gray-500 font-sans"
                    />
                  </div>

                  <div className="space-y-2">
                    <label className="text-gray-500 text-[10px] uppercase tracking-[2px] font-bold">Required Service</label>
                    <select className="w-full bg-[#2A454E] border border-white/10 focus:border-[#A07A41] text-gray-400 px-4 py-3 outline-none transition-all duration-300 font-sans appearance-none">
                      <option>Select Service Type...</option>
                      <option>Complex Legal Research</option>
                      <option>Precision Drafting (CPR)</option>
                      <option>Case File Organization</option>
                      <option>Contract Review & Audit</option>
                    </select>
                  </div>

                  <div className="space-y-2">
                    <label className="text-gray-500 text-[10px] uppercase tracking-[2px] font-bold">Brief Task Description</label>
                    <textarea
                      rows="4"
                      placeholder="e.g., Skeleton argument for High Court appeal..."
                      className="w-full bg-[#2A454E] border border-white/10 focus:border-[#A07A41] text-white px-4 py-4 outline-none transition-all duration-300 placeholder:text-gray-500 font-sans resize-none"
                    ></textarea>
                  </div>

                  <button className="group relative w-full overflow-hidden bg-[#1B2D33] border border-white/10 py-5 px-8 transition-all duration-500 hover:bg-[#A07A41] shadow-[0_0_30px_rgba(0,0,0,0.1)] flex items-center justify-center gap-3">
                    <span className="relative z-10 text-white group-hover:text-[#1B2D33] font-bold uppercase tracking-[0.2em] text-sm transition-colors duration-300">Submit Booking Request</span>
                    <Send className="w-4 h-4 text-white group-hover:text-[#1B2D33] group-hover:translate-x-1 group-hover:-translate-y-1 transition-all duration-300" />
                  </button>

                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ConsultationCTA;
