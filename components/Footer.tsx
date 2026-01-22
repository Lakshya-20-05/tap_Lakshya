
import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-black text-white pt-32 pb-16">
      <div className="max-w-7xl mx-auto px-6">
        <div className="mb-32 reveal">
          <h2 className="text-4xl md:text-6xl font-serif leading-tight mb-8">
            Empowering Students.<br />
            Elevating Institutions.<br />
            Connecting Growth.
          </h2>
          <div className="flex space-x-12 mt-12">
            <a href="#" className="text-xs tracking-widest uppercase font-bold border-b border-white/20 pb-1 hover:border-white transition-all">Linktree</a>
            <a href="#" className="text-xs tracking-widest uppercase font-bold border-b border-white/20 pb-1 hover:border-white transition-all">LinkedIn</a>
            <a href="#" className="text-xs tracking-widest uppercase font-bold border-b border-white/20 pb-1 hover:border-white transition-all">Email</a>
          </div>
        </div>
        
        <div className="pt-16 border-t border-white/10 flex flex-col md:flex-row justify-between items-center text-white/30 text-[10px] tracking-widest uppercase font-medium">
          <div className="mb-8 md:mb-0">
            © 2025 Ascend Institutional Recruitment. All Rights Reserved.
          </div>
          <div className="flex space-x-8">
            <a href="#" className="hover:text-white transition-colors">Privacy</a>
            <a href="#" className="hover:text-white transition-colors">Terms</a>
            <a href="#" className="hover:text-white transition-colors">Security</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
