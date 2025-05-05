
import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-dark-lighter border-t border-white/10 py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <Link to="/" className="text-2xl font-display font-semibold text-gradient-gold mb-4 inline-block">
              AestheticsRebellion
            </Link>
            <p className="text-white/60 text-sm mb-6 max-w-xs">
              A premium metaverse platform where aesthetics and technology converge to create boundless digital experiences.
            </p>
          </div>
          
          <div>
            <h3 className="font-display text-lg mb-4">Navigation</h3>
            <ul className="space-y-2">
              <li><Link to="/" className="text-white/60 text-sm hover:text-white transition-colors">Home</Link></li>
              <li><Link to="/about" className="text-white/60 text-sm hover:text-white transition-colors">About</Link></li>
              <li><Link to="/explore" className="text-white/60 text-sm hover:text-white transition-colors">Explore Worlds</Link></li>
              <li><Link to="/create" className="text-white/60 text-sm hover:text-white transition-colors">Create</Link></li>
              <li><Link to="/web3" className="text-white/60 text-sm hover:text-white transition-colors">Web3 Integration</Link></li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-display text-lg mb-4">Resources</h3>
            <ul className="space-y-2">
              <li><Link to="/news" className="text-white/60 text-sm hover:text-white transition-colors">News</Link></li>
              <li><Link to="/faq" className="text-white/60 text-sm hover:text-white transition-colors">FAQ</Link></li>
              <li><Link to="/support" className="text-white/60 text-sm hover:text-white transition-colors">Support</Link></li>
              <li><Link to="/contact" className="text-white/60 text-sm hover:text-white transition-colors">Contact</Link></li>
              <li><Link to="/downloads" className="text-white/60 text-sm hover:text-white transition-colors">Downloads</Link></li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-display text-lg mb-4">Subscribe</h3>
            <p className="text-white/60 text-sm mb-4">
              Stay updated on the latest news and releases.
            </p>
            <form className="flex">
              <input 
                type="email" 
                placeholder="Your email" 
                className="chrome-input text-sm flex-1"
              />
              <button 
                type="submit" 
                className="bg-gold ml-2 px-4 rounded-lg text-dark text-sm font-medium"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>
        
        <div className="mt-12 pt-6 border-t border-white/10 flex flex-col md:flex-row justify-between items-center">
          <p className="text-white/40 text-sm mb-4 md:mb-0">
            © 2025 Aesthetics Rebellion Metaverse. All rights reserved.
          </p>
          <div className="flex gap-6">
            <Link to="/privacy" className="text-white/40 text-sm hover:text-white/60">Privacy Policy</Link>
            <Link to="/terms" className="text-white/40 text-sm hover:text-white/60">Terms of Service</Link>
            <Link to="/cookies" className="text-white/40 text-sm hover:text-white/60">Cookie Policy</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export { Footer };
