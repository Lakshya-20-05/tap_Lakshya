
import React from 'react';

const TheProblem: React.FC = () => {
  const issues = [
    {
      title: "Institutional Stagnation",
      desc: "Legacy institutions often lack the specialized infrastructure and corporate networks required to compete in a modern, hyper-active job market."
    },
    {
      title: "Talent Fragmentation",
      desc: "The professional ecosystem struggles to identify and integrate job-ready individuals from regions outside major metropolitan centers."
    },
    {
      title: "Exposure Deficits",
      desc: "High-potential students remain invisible to the global economy due to a lack of structured, professional mentorship and exposure."
    }
  ];

  return (
    <section className="py-32 md:py-48 bg-black text-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="mb-24 reveal text-center max-w-3xl mx-auto">
          <h2 className="text-xs tracking-widest uppercase font-bold text-white/40 mb-8">The Landscape</h2>
          <h3 className="text-4xl md:text-6xl font-serif italic">The inefficiency of current placement systems is a structural failure.</h3>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-16 reveal">
          {issues.map((issue, i) => (
            <div key={i} className="border-l border-white/10 pl-8 py-4">
              <h4 className="text-sm tracking-widest uppercase font-bold mb-6 text-white/90">{issue.title}</h4>
              <p className="text-white/50 leading-relaxed font-light text-lg">
                {issue.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TheProblem;
