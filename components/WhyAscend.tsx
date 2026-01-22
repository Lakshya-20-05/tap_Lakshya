
import React from 'react';

const WhyAscend: React.FC = () => {
  const pillars = [
    { title: "Merit-Based", subtitle: "Integrity over everything." },
    { title: "Transparent", subtitle: "Clear data, real outcomes." },
    { title: "Outcome-Driven", subtitle: "Measured by success stories." },
    { title: "Ecosystem-Thinking", subtitle: "Building for the future." }
  ];

  return (
    <section className="py-32 md:py-48 bg-black text-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-24 items-center">
          <div className="reveal">
            <h2 className="text-xs tracking-widest uppercase font-bold text-white/40 mb-8">The Response</h2>
            <h3 className="text-5xl md:text-7xl font-serif mb-12">The Answer to the Recruitment Question.</h3>
            <p className="text-xl text-white/60 font-light leading-relaxed mb-12">
              Ascend is built on the philosophy that quality talent exists everywhere, but infrastructure does not. We provide the ecosystem that makes talent discoverable.
            </p>
            <button className="px-10 py-5 bg-white text-black text-xs tracking-widest uppercase font-bold">
              Explore Our Results
            </button>
          </div>
          
          <div className="grid grid-cols-1 gap-12 reveal">
            {pillars.map((pillar, i) => (
              <div key={i} className="group cursor-default">
                <h4 className="text-3xl md:text-4xl font-serif italic mb-2 group-hover:pl-4 transition-all duration-500">{pillar.title}</h4>
                <p className="text-white/40 tracking-widest uppercase text-xs font-medium">{pillar.subtitle}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyAscend;
