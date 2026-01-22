
import React from 'react';

const Hero: React.FC = () => {
  return (
    <section className="relative min-h-screen flex items-center bg-black pt-20 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 w-full relative z-10">
        <div className="max-w-4xl reveal">
          <h1 className="text-6xl md:text-8xl lg:text-9xl font-serif leading-[0.9] tracking-tight mb-8">
  Bridging <br />
  <span className="italic">Untapped</span> Talent <br />
  with Opportunity<span className="text-orange-500">.</span>
</h1>

          <p className="text-lg md:text-xl text-white/60 font-light tracking-wide max-w-2xl mb-12">
            A premium institutional partner focused on transforming the recruitment landscape for emerging hubs.
          </p>
          <div className="flex flex-col sm:flex-row gap-6">
            <button className="group relative px-8 py-4 bg-white text-black text-xs tracking-widest uppercase font-bold overflow-hidden transition-all duration-500">
              <span className="relative z-10">Initiate Partnership</span>
            </button>
            <button className="px-8 py-4 border border-white/10 text-white text-xs tracking-widest uppercase font-bold hover:bg-white/5 transition-all duration-500">
              View Our Model
            </button>
          </div>
        </div>
      </div>
      
      {/* Decorative subtle lines */}
      <div className="absolute top-0 right-0 h-full w-px bg-white/5 left-1/4"></div>
      <div className="absolute top-0 right-0 h-full w-px bg-white/5 left-2/4"></div>
      <div className="absolute top-0 right-0 h-full w-px bg-white/5 left-3/4"></div>
    </section>
  );
};

export default Hero;
