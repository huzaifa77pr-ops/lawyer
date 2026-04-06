import React, { useEffect, useRef, useState } from 'react';
import { Send, Phone, Mail, MessageSquare, ArrowRight } from 'lucide-react';

const AboutCTA = () => {
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
            { threshold: 0.1 }
        );

        if (sectionRef.current) observer.observe(sectionRef.current);
        return () => observer.disconnect();
    }, []);

    return (
        <section ref={sectionRef} className="py-24 md:py-40 bg-[#1B2D33] relative overflow-hidden border-t border-white/5">
            
            {/* Background Decorative Elements */}
            <div className="absolute top-0 right-0 w-1/2 h-full bg-[#A07A41]/5 blur-[120px] -z-10 translate-x-1/2"></div>
            <div className="absolute bottom-0 left-0 w-1/3 h-full bg-[#2A454E]/20 blur-[100px] -z-10 -translate-x-1/3"></div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-24">
                    
                    {/* Left Content - Slides from absolute Left */}
                    <div className={`w-full lg:w-3/5 transition-all duration-[1500ms] ease-out ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-[100vw]'}`}>
                        <div className="flex items-center gap-4 mb-8">
                            <span className="w-12 h-[1px] bg-[#A07A41]"></span>
                            <h3 className="text-[#A07A41] uppercase tracking-[0.4em] text-xs font-bold font-sans">Start Your Case Today</h3>
                        </div>
                        
                        <h2 className="text-4xl md:text-6xl lg:text-7xl font-serif font-bold text-white leading-[1.1] mb-10">
                            Ready to Secure <br />
                            <span className="italic font-light text-[#A07A41]">Legal Excellence?</span>
                        </h2>
                        
                        <p className="text-gray-400 text-lg md:text-xl font-sans font-light leading-relaxed max-w-2xl mb-12">
                            Our team of elite paralegals is standing by to assist with your most complex legal requirements. From meticulous research to precision drafting, we ensure your firm operates at its highest potential.
                        </p>

                        <div className="flex flex-wrap gap-6 md:gap-10">
                            {/* Contact Box 1 */}
                            <div className="flex items-center gap-4 group cursor-pointer">
                                <div className="w-14 h-14 rounded-sm bg-[#2A454E] flex items-center justify-center transition-all duration-300 group-hover:bg-[#A07A41]">
                                    <Phone className="h-6 w-6 text-white" strokeWidth={1.5} />
                                </div>
                                <div className="text-left">
                                    <p className="text-gray-500 text-[10px] uppercase tracking-widest font-bold mb-1">Direct Call</p>
                                    <p className="text-white font-serif text-xl">+44 (0) 20 7946 0000</p>
                                </div>
                            </div>

                            {/* Contact Box 2 */}
                            <div className="flex items-center gap-4 group cursor-pointer">
                                <div className="w-14 h-14 rounded-sm bg-[#2A454E] flex items-center justify-center transition-all duration-300 group-hover:bg-[#A07A41]">
                                    <Mail className="h-6 w-6 text-white" strokeWidth={1.5} />
                                </div>
                                <div className="text-left">
                                    <p className="text-gray-500 text-[10px] uppercase tracking-widest font-bold mb-1">Quick Email</p>
                                    <p className="text-white font-serif text-xl">contact@hsco.uk</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Right Form Box - Slides from absolute Right */}
                    <div className={`w-full lg:w-2/5 transition-all duration-[1500ms] ease-out ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-[100vw]'}`}>
                        <div className="relative p-8 md:p-12 bg-[#2A454E]/20 border border-white/10 backdrop-blur-sm rounded-sm shadow-2xl">
                            <h4 className="text-2xl font-serif font-bold text-white mb-8 border-b border-white/5 pb-6 flex items-center gap-3">
                                <MessageSquare className="text-[#A07A41]" /> Send a Message
                            </h4>
                            
                            <form className="space-y-6">
                                <div className="space-y-2">
                                    <input 
                                        type="text" 
                                        placeholder="Your Full Name" 
                                        className="w-full bg-[#1B2D33] border border-white/5 focus:border-[#A07A41]/50 outline-none px-5 py-4 text-white font-sans text-sm transition-all focus:bg-transparent"
                                    />
                                </div>
                                <div className="space-y-2">
                                    <input 
                                        type="email" 
                                        placeholder="Business Email" 
                                        className="w-full bg-[#1B2D33] border border-white/5 focus:border-[#A07A41]/50 outline-none px-5 py-4 text-white font-sans text-sm transition-all focus:bg-transparent"
                                    />
                                </div>
                                <div className="space-y-2">
                                    <textarea 
                                        rows="4" 
                                        placeholder="How can we help you?" 
                                        className="w-full bg-[#1B2D33] border border-white/5 focus:border-[#A07A41]/50 outline-none px-5 py-4 text-white font-sans text-sm transition-all focus:bg-transparent resize-none"
                                    ></textarea>
                                </div>
                                <button className="w-full py-5 bg-[#A07A41] text-[#1B2D33] font-sans font-bold uppercase tracking-[0.2em] text-sm flex items-center justify-center gap-3 hover:bg-white transition-all duration-500 group">
                                    Send Request <ArrowRight className="h-4 w-4 transform group-hover:translate-x-2 transition-transform" />
                                </button>
                            </form>
                        </div>
                    </div>

                </div>
            </div>
            
            {/* Extreme Bottom Decorative Text (Adjusted Size for Better Fit) */}
            <div className={`absolute bottom-0 left-0 w-full text-center overflow-hidden pointer-events-none transition-all duration-[2000ms] delay-500 ${isVisible ? 'opacity-5 translate-y-0' : 'opacity-0 translate-y-32'}`}>
                <span className="text-[12vw] md:text-[8vw] font-serif font-bold text-white whitespace-nowrap leading-none uppercase tracking-tighter">H&S Company UK</span>
            </div>
        </section>
    );
};

export default AboutCTA;
