
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
        <div className="flex flex-col items-center">
          <div className="text-center mb-10">
            <h1 className="text-4xl md:text-5xl lg:text-7xl font-sans font-extralight mb-6 tracking-wider leading-tight">
              <span className="text-gradient-gold">Aesthetics</span> Rebellion
              <span className="block mt-2">Metaverse</span>
            </h1>
            <p className="text-lg md:text-xl text-white/70 max-w-2xl mx-auto mb-8 font-sans">
              Experience a new dimension where aesthetics meet technology in a boundless digital universe. Explore, create, and connect in ways never before possible.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <ChromeButton variant="gold" size="lg" className="flex items-center justify-center gap-2">
                <Rocket size={20} />
                <span className="font-sans">Enter Rebellion</span>
              </ChromeButton>
              <ChromeButton variant="chrome" size="lg" className="flex items-center justify-center gap-2">
                <Globe size={20} />
                <span className="font-sans">Explore Worlds</span>
              </ChromeButton>
            </div>
            
            <div className="mt-12 flex flex-wrap justify-center gap-8">
              <div className="text-center">
                <p className="text-3xl font-sans font-light text-gradient-gold">25K+</p>
                <p className="text-sm text-white/60 font-sans">Active Users</p>
              </div>
              <div className="text-center">
                <p className="text-3xl font-sans font-light text-gradient-gold">100+</p>
                <p className="text-sm text-white/60 font-sans">Virtual Worlds</p>
              </div>
              <div className="text-center">
                <p className="text-3xl font-sans font-light text-gradient-gold">500K+</p>
                <p className="text-sm text-white/60 font-sans">NFTs Created</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export { HeroSection };
