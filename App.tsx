
import React, { useEffect, useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Mission from './components/Mission';
import TheProblem from './components/TheProblem';
import Approach from './components/Approach';
import WhatWeDo from './components/WhatWeDo';
import WhyAscend from './components/WhyAscend';
import Philosophy from './components/Philosophy';
import Footer from './components/Footer';

const App: React.FC = () => {
  useEffect(() => {
    const observerOptions = {
      threshold: 0.12,
      rootMargin: '0px 0px -8% 0px',
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('active');
          observer.unobserve(entry.target);
        }
      });
    }, observerOptions);

    const revealElements = document.querySelectorAll('.reveal, .stagger, .draw');
    revealElements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <div className="flex min-h-screen w-full flex-col font-sans">
      <Navbar />
      <main>
        <Hero />
        <Mission />
        <TheProblem />
        <Approach />
        <WhatWeDo />
        <WhyAscend />
        <Philosophy />
      </main>
      <Footer />
    </div>
  );
};

export default App;
