
import React from "react";
import { Link } from "react-router-dom";
import { useTranslation } from "@/contexts/TranslationContext";
import { Linkedin, Instagram, Youtube, X } from "lucide-react";

const Footer = () => {
  const { t } = useTranslation();
  
  return (
    <footer className="bg-dark-lighter border-t border-white/10 py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <Link to="/" className="text-2xl font-display font-semibold text-gradient-gold mb-4 inline-block">
              AestheticsRebellion
            </Link>
            <p className="text-white/60 text-sm mb-6 max-w-xs">
              {t.common.footer.description}
            </p>
            
            {/* Social Media Links */}
            <div className="flex space-x-4 mt-4">
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-white/60 hover:text-white/90 transition-colors">
                <Linkedin size={20} />
              </a>
              <a href="https://discord.com" target="_blank" rel="noopener noreferrer" className="text-white/60 hover:text-white/90 transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M9 7.5V9a3 3 0 0 1-6 0V7.5" />
                  <path d="M6 20v-5" />
                  <path d="M21 7.5V9a3 3 0 0 1-6 0V7.5" />
                  <path d="M18 20v-5" />
                  <path d="M3 17h18" />
                </svg>
              </a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-white/60 hover:text-white/90 transition-colors">
                <Instagram size={20} />
              </a>
              <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" className="text-white/60 hover:text-white/90 transition-colors">
                <Youtube size={20} />
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-white/60 hover:text-white/90 transition-colors">
                <X size={20} />
              </a>
              <a href="https://twitch.tv" target="_blank" rel="noopener noreferrer" className="text-white/60 hover:text-white/90 transition-colors">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-white/60 hover:text-white/90 transition-colors">
                  <path d="M4.5 2H19.5V14.5L14.5 19.5H10.5L7.5 22.5H4.5V19.5H1.5V6L4.5 2Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M10.5 5H12V11H10.5V5Z" stroke="currentColor" strokeWidth="2"/>
                  <path d="M15.5 5H17V11H15.5V5Z" stroke="currentColor" strokeWidth="2"/>
                </svg>
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="font-display text-lg mb-4">{t.common.footer.navigation}</h3>
            <ul className="space-y-2">
              <li><Link to="/" className="text-white/60 text-sm hover:text-white transition-colors">{t.navigation.home}</Link></li>
              <li><Link to="/about" className="text-white/60 text-sm hover:text-white transition-colors">{t.navigation.about}</Link></li>
              <li><Link to="/explore" className="text-white/60 text-sm hover:text-white transition-colors">{t.navigation.explore} Worlds</Link></li>
              <li><Link to="/create" className="text-white/60 text-sm hover:text-white transition-colors">{t.navigation.create}</Link></li>
              <li><Link to="/web3" className="text-white/60 text-sm hover:text-white transition-colors">Web3 Integration</Link></li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-display text-lg mb-4">{t.common.footer.resources}</h3>
            <ul className="space-y-2">
              <li><Link to="/news" className="text-white/60 text-sm hover:text-white transition-colors">{t.navigation.news}</Link></li>
              <li><Link to="/faq" className="text-white/60 text-sm hover:text-white transition-colors">{t.navigation.faq}</Link></li>
              <li><Link to="/support" className="text-white/60 text-sm hover:text-white transition-colors">Support</Link></li>
              <li><Link to="/contact" className="text-white/60 text-sm hover:text-white transition-colors">{t.navigation.contact}</Link></li>
              <li><Link to="/downloads" className="text-white/60 text-sm hover:text-white transition-colors">Downloads</Link></li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-display text-lg mb-4">{t.common.footer.subscribe}</h3>
            <p className="text-white/60 text-sm mb-4">
              {t.common.footer.stayUpdated}
            </p>
            <form className="flex">
              <input 
                type="email" 
                placeholder={t.common.footer.yourEmail} 
                className="chrome-input text-sm flex-1"
              />
              <button 
                type="submit" 
                className="bg-gold ml-2 px-4 rounded-lg text-dark text-sm font-medium"
              >
                {t.common.footer.subscribeButton}
              </button>
            </form>
          </div>
        </div>
        
        <div className="mt-12 pt-6 border-t border-white/10 flex flex-col md:flex-row justify-between items-center">
          <p className="text-white/40 text-sm mb-4 md:mb-0">
            {t.common.footer.copyright}
          </p>
          <div className="flex gap-6">
            <Link to="/privacy" className="text-white/40 text-sm hover:text-white/60">{t.common.footer.privacyPolicy}</Link>
            <Link to="/terms" className="text-white/40 text-sm hover:text-white/60">{t.common.footer.termsOfService}</Link>
            <Link to="/cookies" className="text-white/40 text-sm hover:text-white/60">{t.common.footer.cookiePolicy}</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export { Footer };
