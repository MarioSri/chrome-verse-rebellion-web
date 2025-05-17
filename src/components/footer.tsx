
import React from "react";
import { Link } from "react-router-dom";
import { useTranslation } from "@/contexts/TranslationContext";
import { Linkedin, Instagram } from "lucide-react";

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
                {/* Discord logo */}
                <svg width="20" height="20" viewBox="0 0 71 55" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                  <path d="M60.1045 4.8978C55.5792 2.8214 50.7265 1.2916 45.6527 0.41542C45.5603 0.39851 45.468 0.440769 45.4204 0.525289C44.7963 1.6353 44.105 3.0834 43.6209 4.2216C38.1637 3.4046 32.7345 3.4046 27.3892 4.2216C26.905 3.0581 26.1886 1.6353 25.5617 0.525289C25.5141 0.443589 25.4218 0.40133 25.3294 0.41542C20.2584 1.2888 15.4057 2.8186 10.8776 4.8978C10.8384 4.9147 10.8048 4.9429 10.7825 4.9795C1.57795 18.7309 -0.943561 32.1443 0.293408 45.3914C0.299005 45.4562 0.335386 45.5182 0.385761 45.5576C6.45866 50.0174 12.3413 52.7249 18.1147 54.5195C18.2071 54.5477 18.305 54.5139 18.3638 54.4378C19.7295 52.5728 20.9469 50.6063 21.9907 48.5383C22.0523 48.4172 21.9935 48.2735 21.8676 48.2256C19.9366 47.4931 18.0979 46.6 16.3292 45.5858C16.1893 45.5041 16.1781 45.304 16.3068 45.2082C16.679 44.9293 17.0513 44.6391 17.4067 44.3461C17.471 44.2926 17.5606 44.2813 17.6362 44.3151C29.2558 49.6202 41.8354 49.6202 53.3179 44.3151C53.3935 44.2785 53.4831 44.2898 53.5502 44.3433C53.9057 44.6363 54.2779 44.9293 54.6529 45.2082C54.7816 45.304 54.7732 45.5041 54.6333 45.5858C52.8646 46.6197 51.0259 47.4931 49.0921 48.2228C48.9662 48.2707 48.9102 48.4172 48.9718 48.5383C50.038 50.6034 51.2554 52.5699 52.5959 54.435C52.6519 54.5139 52.7526 54.5477 52.845 54.5195C58.6464 52.7249 64.529 50.0174 70.6019 45.5576C70.6551 45.5182 70.6887 45.459 70.6943 45.3942C72.1747 30.0791 68.2147 16.7757 60.1968 4.9823C60.1772 4.9429 60.1437 4.9147 60.1045 4.8978ZM23.7259 37.3253C20.2276 37.3253 17.3451 34.1136 17.3451 30.1693C17.3451 26.225 20.1717 23.0133 23.7259 23.0133C27.308 23.0133 30.1626 26.2532 30.1066 30.1693C30.1066 34.1136 27.28 37.3253 23.7259 37.3253ZM47.3178 37.3253C43.8196 37.3253 40.9371 34.1136 40.9371 30.1693C40.9371 26.225 43.7636 23.0133 47.3178 23.0133C50.9 23.0133 53.7545 26.2532 53.6986 30.1693C53.6986 34.1136 50.9 37.3253 47.3178 37.3253Z"/>
                </svg>
              </a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-white/60 hover:text-white/90 transition-colors">
                <Instagram size={20} />
              </a>
              <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" className="text-white/60 hover:text-white/90 transition-colors">
                {/* YouTube logo in black */}
                <svg width="20" height="14" viewBox="0 0 20 14" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                  <path d="M19.543 2.498C19.355 1.898 18.872 1.415 18.273 1.227C16.694 0.781 10 0.781 10 0.781C10 0.781 3.306 0.781 1.727 1.227C1.128 1.415 0.645 1.898 0.457 2.498C0.11 4.886 -0.22 8.76 0.457 11.023C0.645 11.623 1.128 12.106 1.727 12.294C3.306 12.74 10 12.74 10 12.74C10 12.74 16.694 12.74 18.273 12.294C18.872 12.106 19.355 11.623 19.543 11.023C19.89 8.719 20.011 4.851 19.543 2.498Z"/>
                  <path d="M8.008 9.018L13.984 6.753L8.008 4.483V9.018Z" fill="currentColor"/>
                </svg>
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-white/60 hover:text-white/90 transition-colors">
                {/* X (Twitter) logo */}
                <svg width="20" height="20" viewBox="0 0 1200 1227" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                  <path d="M714.163 519.284L1160.89 0H1055.03L667.137 450.887L357.328 0H0L468.492 681.821L0 1226.37H105.866L515.491 750.218L842.672 1226.37H1200L714.137 519.284H714.163ZM569.165 687.828L521.697 619.934L144.011 79.6944H306.615L611.412 515.685L658.88 583.579L1055.08 1150.3H892.476L569.165 687.854V687.828Z"/>
                </svg>
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
