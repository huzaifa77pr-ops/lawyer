import React from 'react';
import { ChevronRight, Scale, Award, Users } from 'lucide-react';

const AboutHero = () => {
    return (
        <section id="about-hero" className="relative py-24 md:py-32 flex items-center justify-center overflow-hidden bg-[#2A454E] border-b border-[#A07A41]/10">
            {/* Background Texture/Image */}
            {/* Background Texture/Overlay */}
            <div className="absolute inset-0 z-0">
                <div className="absolute inset-0 bg-gradient-to-b from-[#1B2D33] to-[#2A454E] z-10" />
                
                {/* Subtle Geometric Overlay */}
                <div className="absolute inset-0 opacity-5 pointer-events-none" 
                     style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)', backgroundSize: '32px 32px' }} 
                />
            </div>

            <div className="relative z-20 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center pt-20">
                {/* Breadcrumbs */}
                <nav className="flex items-center justify-center gap-2 mb-8 animate-fade-in">
                    <a href="/" className="text-gray-400 hover:text-[#A07A41] text-xs uppercase tracking-[0.2em] transition-colors">Home</a>
                    <ChevronRight className="h-3 w-3 text-[#A07A41]" />
                    <span className="text-white text-xs uppercase tracking-[0.2em] font-bold">About Our Firm</span>
                </nav>

                {/* Title Section */}
                <div className="max-w-4xl mx-auto">
                    <div className="flex items-center justify-center gap-4 mb-4 animate-fade-in-up">
                        <div className="h-[1px] w-8 bg-[#A07A41]"></div>
                        <span className="text-[#A07A41] uppercase tracking-[0.3em] text-xs font-bold font-sans">ESTABLISHED 1995</span>
                        <div className="h-[1px] w-8 bg-[#A07A41]"></div>
                    </div>
                    
                    <h1 className="text-3xl md:text-5xl lg:text-6xl font-serif font-bold text-white leading-relaxed md:leading-tight mb-6 tracking-tight overflow-hidden">
                        <span className="block animate-fade-in-left animation-delay-200">
                            Defining The <span className="italic font-light text-[#A07A41]">Standard</span>
                        </span>
                        <span className="block animate-fade-in-right animation-delay-400">
                            Of Legal Excellence.
                        </span>
                    </h1>

                    <p className="text-gray-300 text-sm md:text-base font-sans font-light leading-relaxed max-w-xl mx-auto mb-8 animate-fade-in-up animation-delay-400">
                        H&S Co. was founded on the principles of integrity, precision, and relentless pursuit of justice. Today, we are one of the UK's leading paralegal providers.
                    </p>
                </div>

                {/* Quick Stats Grid */}
                <div className="grid grid-cols-2 md:grid-cols-3 gap-8 md:gap-16 pt-12 border-t border-white/10 animate-fade-in-up animation-delay-600 max-w-4xl mx-auto">
                    <div className="flex flex-col items-center">
                        <Scale className="h-6 w-6 text-[#A07A41] mb-3" strokeWidth={1} />
                        <span className="text-2xl md:text-3xl font-serif font-bold text-white">2,500+</span>
                        <span className="text-gray-500 text-[10px] uppercase tracking-widest mt-1">Cases Won</span>
                    </div>
                    <div className="flex flex-col items-center border-x border-white/5 px-4 md:px-12">
                        <Award className="h-6 w-6 text-[#A07A41] mb-3" strokeWidth={1} />
                        <span className="text-2xl md:text-3xl font-serif font-bold text-white">15+</span>
                        <span className="text-gray-500 text-[10px] uppercase tracking-widest mt-1">Legal Awards</span>
                    </div>
                    <div className="hidden md:flex flex-col items-center">
                        <Users className="h-6 w-6 text-[#A07A41] mb-3" strokeWidth={1} />
                        <span className="text-2xl md:text-3xl font-serif font-bold text-white">100%</span>
                        <span className="text-gray-500 text-[10px] uppercase tracking-widest mt-1">Client Focus</span>
                    </div>
                </div>
            </div>

            {/* Bottom Scroll Indicator */}
            <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce opacity-40">
                <div className="w-[1px] h-12 bg-gradient-to-b from-[#A07A41] to-transparent"></div>
            </div>
        </section>
    );
};

export default AboutHero;
