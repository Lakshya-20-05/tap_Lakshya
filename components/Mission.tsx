
import React from 'react';

const Mission: React.FC = () => {
  return (
    <section id="mission" className="py-32 md:py-48 bg-white text-black">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 md:gap-32 items-start">
          <div className="reveal">
            <h2 className="text-xs tracking-widest uppercase font-bold text-black/40 mb-8">Who We Are</h2>
            <p className="text-3xl md:text-5xl font-serif leading-tight">
              Ascend operates at the intersection of student potential and professional demand.
            </p>
          </div>
          <div className="reveal md:mt-24">
            <p className="text-lg md:text-xl text-black/70 leading-relaxed font-light mb-8">
              We serve as the sophisticated architectural layer for Tier-2 and Tier-3 institutions—functioning as an extended placement board that delivers high-impact recruitment infrastructure to colleges in emerging economic hubs.
            </p>
            <p className="text-lg md:text-xl text-black/70 leading-relaxed font-light">
              By engineering connections between high-potential students and the global corporate ecosystem, we ensure that geography no longer dictates professional trajectory.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Mission;
