
import React from "react";
import { NavigationBar } from "@/components/navigation-bar";
import { HeroSection } from "@/components/hero-section";
import { FeaturesSection } from "@/components/features-section";
import { WorldShowcase } from "@/components/world-showcase";
import { ExperiencesSection } from "@/components/experiences-section";
import { CTASection } from "@/components/cta-section";
import { Footer } from "@/components/footer";
import { Link } from "react-router-dom";
import { ChromeCard } from "@/components/ui/chrome-card";

const FeaturedPlanets = () => {
  const planets = [
    {
      id: "neo-tokyo",
      name: "Neo Tokyo",
      description: "A cyberpunk metropolis with neon-lit streets and futuristic architecture.",
      image: "https://placehold.co/600x400/252525/FFFFFF/png?text=Neo+Tokyo",
    },
    {
      id: "eden-prime",
      name: "Eden Prime",
      description: "Lush natural landscapes with bioluminescent flora and peaceful communities.",
      image: "https://placehold.co/600x400/252525/FFFFFF/png?text=Eden+Prime",
    },
    {
      id: "quantum-forge",
      name: "Quantum Forge",
      description: "Industrial world with massive factories and advanced manufacturing facilities.",
      image: "https://placehold.co/600x400/252525/FFFFFF/png?text=Quantum+Forge",
    },
  ];

  return (
    <section className="py-20 bg-dark-lighter relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-full bg-noise opacity-5"></div>
      <div className="container mx-auto px-4 relative z-10">
        <div className="mb-12 text-center">
          <h2 className="text-4xl font-bold mb-4">Featured Planets</h2>
          <p className="text-white/70 max-w-2xl mx-auto">
            Discover unique worlds created by our community and development team. 
            Each planet offers different experiences and opportunities.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {planets.map((planet) => (
            <ChromeCard 
              key={planet.id} 
              variant="chrome" 
              className="overflow-hidden" 
              glow={true} 
              animate={true}
            >
              <img 
                src={planet.image} 
                alt={planet.name} 
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">{planet.name}</h3>
                <p className="text-gray-700 mb-4">{planet.description}</p>
                <Link 
                  to={`/explore/${planet.id}`}
                  className="inline-flex items-center justify-center px-4 py-2 bg-gradient-to-b from-gold-light to-gold-dark text-dark font-medium text-sm rounded-full"
                >
                  Visit Planet
                </Link>
              </div>
            </ChromeCard>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <Link
            to="/explore"
            className="inline-flex items-center justify-center px-6 py-3 bg-white/10 backdrop-blur-md border border-white/20 text-white font-medium rounded-full hover:bg-white/20 transition-colors"
          >
            Explore All Worlds
          </Link>
        </div>
      </div>
    </section>
  );
};

const NewsCards = () => {
  const newsItems = [
    {
      id: "platform-update",
      title: "Platform Update: New Creation Tools",
      excerpt: "Announcing our latest suite of creation tools with AI-assisted design features.",
      date: "May 12, 2025",
      image: "https://placehold.co/600x400/252525/FFFFFF/png?text=Platform+Update",
    },
    {
      id: "virtual-conference",
      title: "Virtual Conference Announced",
      excerpt: "Join us for our annual virtual conference featuring keynotes from industry leaders.",
      date: "May 8, 2025",
      image: "https://placehold.co/600x400/252525/FFFFFF/png?text=Virtual+Conference",
    },
  ];

  return (
    <section className="py-20 bg-dark relative">
      <div className="container mx-auto px-4">
        <div className="mb-12">
          <h2 className="text-4xl font-bold mb-4">Latest News</h2>
          <p className="text-white/70">
            Stay updated with the latest developments and announcements from Aesthetics Rebellion.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {newsItems.map((item) => (
            <ChromeCard key={item.id} variant="glass" className="overflow-hidden flex flex-col">
              <img 
                src={item.image} 
                alt={item.title} 
                className="w-full h-48 object-cover"
              />
              <div className="p-6 flex flex-col flex-1">
                <p className="text-sm text-white/60 mb-2">{item.date}</p>
                <h3 className="text-xl font-bold mb-3">{item.title}</h3>
                <p className="text-white/70 mb-6 flex-grow">{item.excerpt}</p>
                <Link 
                  to={`/news/${item.id}`}
                  className="text-blue-400 hover:underline"
                >
                  Read More →
                </Link>
              </div>
            </ChromeCard>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <Link
            to="/news"
            className="inline-flex items-center justify-center px-6 py-3 bg-white/10 backdrop-blur-md border border-white/20 text-white font-medium rounded-full hover:bg-white/20 transition-colors"
          >
            Browse All News
          </Link>
        </div>
      </div>
    </section>
  );
};

const Index = () => {
  return (
    <div className="min-h-screen bg-dark text-white">
      <NavigationBar />
      <main>
        <HeroSection />
        <FeaturesSection />
        <WorldShowcase />
        <FeaturedPlanets />
        <ExperiencesSection />
        <NewsCards />
        <CTASection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
