
import React from 'react';

const Approach: React.FC = () => {
  return (
    <section id="approach" className="py-32 md:py-48 bg-brand-gray text-black">
      <div className="max-w-7xl mx-auto px-6">
        <div className="mb-24 reveal">
          <h2 className="text-xs tracking-widest uppercase font-bold text-black/40 mb-8">Our Strategy</h2>
          <h3 className="text-4xl md:text-6xl font-serif">Dual-Impact Positioning</h3>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-0">
          <div className="reveal bg-white p-12 lg:p-24 border border-black/5 hover:shadow-2xl transition-shadow duration-700">
            <span className="text-5xl font-serif italic block mb-12">01</span>
            <h4 className="text-2xl font-bold mb-8 tracking-tight uppercase">Institutional Advancement</h4>
            <p className="text-xl text-black/60 font-light leading-relaxed mb-12">
              We empower colleges with the corporate relations and recruitment machinery of a Tier-1 institution. We build the brand, the board, and the bridges.
            </p>
            <ul className="space-y-4 text-sm font-medium tracking-wide uppercase">
              <li>• Placement Board Outsourcing</li>
              <li>• Corporate Relation Management</li>
              <li>• Institutional Branding</li>
            </ul>
          </div>
          
          <div className="reveal bg-black text-white p-12 lg:p-24 hover:shadow-2xl transition-shadow duration-700 lg:scale-105 relative z-10">
            <span className="text-5xl font-serif italic block mb-12 text-white/30">02</span>
            <h4 className="text-2xl font-bold mb-8 tracking-tight uppercase">Talent Engineering</h4>
            <p className="text-xl text-white/60 font-light leading-relaxed mb-12">
              We refine untapped student potential into job-ready assets for startups and Fortune 500 firms alike. Our students don't just apply—they fit.
            </p>
            <ul className="space-y-4 text-sm font-medium tracking-wide uppercase">
              <li>• Skill Alignment Pipelines</li>
              <li>• Interview Training Ecosystems</li>
              <li>• High-Value Professional Readiness</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Approach;
