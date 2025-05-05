
import React from "react";
import { ChromeCard } from "./ui/chrome-card";
import { Globe, Layers, Users, ShoppingCart } from "lucide-react";

const FeaturesSection = () => {
  const features = [
    {
      title: "Explore Worlds",
      description: "Discover limitless virtual environments created by our artists and community.",
      icon: <Globe className="w-8 h-8 text-gold" />,
    },
    {
      title: "Build & Create",
      description: "Use powerful tools to design your own spaces, assets, and experiences.",
      icon: <Layers className="w-8 h-8 text-gold" />,
    },
    {
      title: "Connect & Socialize",
      description: "Meet friends and build communities in immersive social environments.",
      icon: <Users className="w-8 h-8 text-gold" />,
    },
    {
      title: "Trade & Collect",
      description: "Buy, sell, and trade digital assets as NFTs using our integrated marketplace.",
      icon: <ShoppingCart className="w-8 h-8 text-gold" />,
    },
  ];

  return (
    <section className="py-20 relative overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-display mb-4">
            Experience the <span className="text-gradient-gold">Future</span>
          </h2>
          <p className="text-white/70 max-w-2xl mx-auto">
            Aesthetics Rebellion Metaverse combines cutting-edge technology with unparalleled design to create a digital universe that pushes the boundaries of what's possible.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <ChromeCard
              key={index}
              className="p-6 h-full"
              glow={true}
              animate={true}
            >
              <div className="flex flex-col h-full">
                <div className="mb-4 p-3 rounded-full bg-white/5 w-fit">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-display mb-2">{feature.title}</h3>
                <p className="text-white/70 text-sm">{feature.description}</p>
              </div>
            </ChromeCard>
          ))}
        </div>
      </div>
    </section>
  );
};

export { FeaturesSection };
