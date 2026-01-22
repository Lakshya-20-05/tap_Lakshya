
import React from 'react';

const Navbar: React.FC = () => {
  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-black/80 backdrop-blur-md border-b border-white/5">
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        <div className="text-xl font-serif tracking-widest uppercase font-bold text-white">
          Ascend
        </div>
        <div className="hidden md:flex space-x-12 text-xs tracking-widest uppercase font-medium text-white/60">
          <a href="#mission" className="hover:text-white transition-colors duration-300">Mission</a>
          <a href="#approach" className="hover:text-white transition-colors duration-300">Approach</a>
          <a href="#services" className="hover:text-white transition-colors duration-300">What We Do</a>
          <a href="#philosophy" className="hover:text-white transition-colors duration-300">Philosophy</a>
        </div>
        <div>
          <button className="px-6 py-2 border border-white/20 text-[10px] tracking-widest uppercase hover:bg-white hover:text-black transition-all duration-500">
            Consult With Us
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
