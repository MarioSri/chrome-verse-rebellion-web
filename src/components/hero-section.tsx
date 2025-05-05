
import React from "react";
import { ChromeButton } from "./ui/chrome-button";
import { Rocket, Globe } from "lucide-react";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex flex-col justify-center overflow-hidden pt-20">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-noise"></div>
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-neon-blue opacity-20 rounded-full blur-[100px] animate-float"></div>
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-neon-pink opacity-20 rounded-full blur-[100px] animate-float-slow"></div>

      <div className="container mx-auto px-4 py-16 md:py-24 relative z-10">
        <div className="flex flex-col lg:flex-row items-center">
          <div className="flex-1 text-center lg:text-left mb-10 lg:mb-0">
            <h1 className="text-4xl md:text-5xl lg:text-7xl font-display font-light mb-6">
              <span className="text-gradient-gold">Aesthetics</span> Rebellion
              <span className="block mt-2">Metaverse</span>
            </h1>
            <p className="text-lg md:text-xl text-white/70 max-w-2xl mx-auto lg:mx-0 mb-8">
              Experience a new dimension where aesthetics meet technology in a boundless digital universe. Explore, create, and connect in ways never before possible.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <ChromeButton variant="gold" size="lg" className="flex items-center justify-center gap-2">
                <Rocket size={20} />
                <span>Enter Metaverse</span>
              </ChromeButton>
              <ChromeButton variant="chrome" size="lg" className="flex items-center justify-center gap-2">
                <Globe size={20} />
                <span>Explore Worlds</span>
              </ChromeButton>
            </div>
            
            <div className="mt-12 flex flex-wrap justify-center lg:justify-start gap-8">
              <div className="text-center">
                <p className="text-3xl font-display font-semibold text-gradient-gold">25K+</p>
                <p className="text-sm text-white/60">Active Users</p>
              </div>
              <div className="text-center">
                <p className="text-3xl font-display font-semibold text-gradient-gold">100+</p>
                <p className="text-sm text-white/60">Virtual Worlds</p>
              </div>
              <div className="text-center">
                <p className="text-3xl font-display font-semibold text-gradient-gold">500K+</p>
                <p className="text-sm text-white/60">NFTs Created</p>
              </div>
            </div>
          </div>
          <div className="flex-1 relative">
            {/* Empty space where the circle was previously */}
          </div>
        </div>
      </div>
    </section>
  );
};

export { HeroSection };
