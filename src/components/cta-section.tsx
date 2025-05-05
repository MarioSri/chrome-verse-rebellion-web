
import React from "react";
import { ChromeButton } from "./ui/chrome-button";
import { Rocket } from "lucide-react";

const CTASection = () => {
  return (
    <section className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-noise"></div>
      <div className="absolute top-0 right-0 w-96 h-96 bg-neon-blue opacity-30 rounded-full blur-[100px] animate-float"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-neon-pink opacity-30 rounded-full blur-[100px] animate-float-slow"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-5xl font-display mb-6 leading-tight">
            Ready to Experience the Next Level of <span className="text-gradient-gold">Digital Reality?</span>
          </h2>
          <p className="text-white/70 text-lg mb-8 max-w-2xl mx-auto">
            Join thousands of pioneers already exploring, creating, and connecting in the Aesthetics Rebellion Metaverse.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <ChromeButton variant="gold" size="lg" className="flex items-center gap-2">
              <Rocket size={20} />
              <span>Launch App</span>
            </ChromeButton>
            <ChromeButton variant="chrome" size="lg">
              View Demo
            </ChromeButton>
          </div>
        </div>
      </div>
    </section>
  );
};

export { CTASection };
