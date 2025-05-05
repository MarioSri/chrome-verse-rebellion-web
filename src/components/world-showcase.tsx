
import React from "react";
import { ChromeCard } from "./ui/chrome-card";
import { ChromeButton } from "./ui/chrome-button";

const WorldShowcase = () => {
  const worlds = [
    {
      name: "Neon District",
      description: "A cyberpunk metropolis buzzing with digital life and futuristic architecture.",
      image: "/placeholder.svg",
      status: "Popular"
    },
    {
      name: "Crystal Gardens",
      description: "Ethereal landscapes featuring luminous flora and breathtaking crystalline structures.",
      image: "/placeholder.svg",
      status: "New"
    },
    {
      name: "Quantum Realm",
      description: "An abstract dimension where the laws of physics bend to create mind-bending experiences.",
      image: "/placeholder.svg",
      status: "Featured"
    }
  ];
  
  return (
    <section className="py-20 relative overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-display mb-4">
            Discover Extraordinary <span className="text-gradient-gold">Worlds</span>
          </h2>
          <p className="text-white/70 max-w-2xl mx-auto">
            Explore meticulously crafted virtual environments, each with its unique aesthetic and experience.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {worlds.map((world, index) => (
            <ChromeCard
              key={index}
              className="overflow-hidden"
              animate={true}
              glow={true}
            >
              <div className="h-48 relative">
                <img 
                  src={world.image}
                  alt={world.name}
                  className="w-full h-full object-cover"
                />
                <div className="absolute top-4 right-4 bg-gold/90 text-dark px-3 py-1 rounded-full text-xs font-medium">
                  {world.status}
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-display mb-2">{world.name}</h3>
                <p className="text-white/70 text-sm mb-4">{world.description}</p>
                <ChromeButton variant="chrome" className="w-full">
                  Explore
                </ChromeButton>
              </div>
            </ChromeCard>
          ))}
        </div>
        
        <div className="mt-12 text-center">
          <ChromeButton variant="gold">
            View All Worlds
          </ChromeButton>
        </div>
      </div>
    </section>
  );
};

export { WorldShowcase };
