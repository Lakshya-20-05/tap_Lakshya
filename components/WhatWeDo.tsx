
import React from 'react';

const WhatWeDo: React.FC = () => {
  const services = [
    {
      label: "Institutional Relations",
      title: "Placement Outsourcing & Corporate Relations",
      desc: "End-to-end management of the recruitment lifecycle, acting as the primary liaison between your institution and global firms."
    },
    {
      label: "Student Preparation",
      title: "CV Architecture & Interview Strategy",
      desc: "Moving beyond basic templates to build narrative-driven CVs and interview skills that stand up to consulting-grade scrutiny."
    },
    {
      label: "Market Alignment",
      title: "Skill Optimization & Partner Integration",
      desc: "Curating student skillsets directly aligned with the specific technical and cultural requirements of our partner firms."
    },
    {
      label: "Strategic Outcomes",
      title: "Role-Fit Placement Excellence",
      desc: "We prioritize precision over volume. Our goal is not mass placement, but the right role for the right individual."
    }
  ];

  return (
    <section id="services" className="py-32 md:py-48 bg-white text-black">
      <div className="max-w-7xl mx-auto px-6">
        <div className="mb-24 reveal text-center">
          <h2 className="text-xs tracking-widest uppercase font-bold text-black/40 mb-8">Our Services</h2>
          <h3 className="text-4xl md:text-5xl font-serif italic">Operational Excellence in Recruitment.</h3>
        </div>
        
        <div className="space-y-0">
          {services.map((service, i) => (
            <div key={i} className="group border-t border-black/10 py-16 reveal hover:bg-brand-gray transition-colors duration-500 px-8">
              <div className="grid grid-cols-1 md:grid-cols-12 items-baseline">
                <div className="md:col-span-3 text-xs tracking-widest uppercase font-bold text-black/40 mb-4 md:mb-0">
                  {service.label}
                </div>
                <div className="md:col-span-5">
                  <h4 className="text-2xl md:text-3xl font-serif mb-4">{service.title}</h4>
                </div>
                <div className="md:col-span-4 text-lg text-black/60 font-light">
                  {service.desc}
                </div>
              </div>
            </div>
          ))}
          <div className="border-t border-black/10"></div>
        </div>
      </div>
    </section>
  );
};

export default WhatWeDo;
