
import React from 'react';

const Philosophy: React.FC = () => {
  return (
    <section id="philosophy" className="relative h-[80vh] flex items-center justify-center bg-white text-black overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 text-center z-10 reveal">
        <blockquote className="text-5xl md:text-8xl lg:text-9xl font-serif italic tracking-tighter leading-none mb-12">
          "Talent is universal. Opportunity is not."
        </blockquote>
        <div className="w-24 h-px bg-black/20 mx-auto mb-12"></div>
        <p className="text-xs tracking-[0.4em] uppercase font-bold text-black/60">The Ascend Philosophy</p>
      </div>
      
      {/* Subtle background text */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none opacity-[0.02]">
        <span className="text-[30vw] font-serif font-bold italic select-none">Universal</span>
      </div>
    </section>
  );
};

export default Philosophy;
