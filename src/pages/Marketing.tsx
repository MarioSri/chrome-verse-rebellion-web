import React from "react";
import { NavigationBar } from "@/components/navigation-bar";
import { Footer } from "@/components/footer";
import { ChromeCard } from "@/components/ui/chrome-card";
import { ChromeButton } from "@/components/ui/chrome-button";
import { Card, CardContent, CardFooter, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Map, Grid, Users, Zap, TrendingUp } from "lucide-react";

const Marketing = () => {
  // Billboard rental data
  const adSlots = [
    {
      id: "neo-tokyo-central",
      location: "Neo Tokyo - Central District",
      size: "Large (1200x600)",
      views: "15.2K daily views",
      image: "https://placehold.co/600x300/252525/FFFFFF/png?text=Neo+Tokyo+Billboard"
    },
    {
      id: "eden-prime-plaza",
      location: "Eden Prime - Main Plaza",
      size: "Medium (800x400)",
      views: "8.7K daily views",
      image: "https://placehold.co/600x300/252525/FFFFFF/png?text=Eden+Prime+Billboard"
    },
    {
      id: "quantum-forge-factory",
      location: "Quantum Forge - Factory District",
      size: "Extra Large (1800x900)",
      views: "12.4K daily views",
      image: "https://placehold.co/600x300/252525/FFFFFF/png?text=Quantum+Forge+Billboard"
    },
    {
      id: "neon-alley",
      location: "Neo Tokyo - Neon Alley",
      size: "Small (400x200)",
      views: "5.8K daily views",
      image: "https://placehold.co/600x300/252525/FFFFFF/png?text=Neon+Alley+Billboard"
    }
  ];

  // Branded Experiences data
  const brandedExperiences = [
    {
      id: "vr-runway",
      title: "VR Runway Show",
      description: "Immersive fashion experiences with virtual models and interactive product showcases",
      image: "https://placehold.co/600x400/252525/FFFFFF/png?text=VR+Runway+Show"
    },
    {
      id: "obstacle-course",
      title: "Token-Sponsored Obstacle Course",
      description: "Branded challenges and games with token rewards and leaderboards",
      image: "https://placehold.co/600x400/252525/FFFFFF/png?text=Obstacle+Course"
    },
    {
      id: "nft-drop",
      title: "NFT Product Drop Room",
      description: "Exclusive retail space for limited edition product launches and NFT collections",
      image: "https://placehold.co/600x400/252525/FFFFFF/png?text=NFT+Product+Drop"
    }
  ];

  // Dynamic Ads features
  const adFeatures = [
    {
      title: "Dynamic Ad Targeting",
      description: "Serve different ad content based on user preferences and behavior",
      icon: <Zap className="h-8 w-8 text-gold" />
    },
    {
      title: "NFT Ad Tracking",
      description: "Track engagement with blockchain-verified analytics for transparent reporting",
      icon: <TrendingUp className="h-8 w-8 text-gold" />
    },
    {
      title: "Landowner Revenue Share",
      description: "Virtual property owners earn a percentage of ad revenue displayed in their space",
      icon: <Users className="h-8 w-8 text-gold" />
    }
  ];

  // Sponsored Events data
  const sponsoredEvents = [
    {
      id: "music-concert",
      brand: "MusicStream",
      location: "Neo Tokyo - Amphitheater",
      description: "Virtual concert featuring interactive elements and exclusive merchandise",
      tiers: ["Gold: Backstage Access", "Silver: Front Row", "Standard: General Admission"],
      image: "https://placehold.co/600x400/252525/FFFFFF/png?text=Virtual+Concert"
    },
    {
      id: "product-launch",
      brand: "TechGiant",
      location: "Quantum Forge - Innovation Center",
      description: "Interactive product reveal with hands-on demos and developer Q&A",
      tiers: ["Gold: Early Access", "Silver: Q&A Priority", "Standard: Attendance"],
      image: "https://placehold.co/600x400/252525/FFFFFF/png?text=Product+Launch"
    }
  ];

  // Wearables categories and items
  const wearablesCategories = ["All", "Headwear", "Clothing", "Accessories"];
  const trendingWearables = [
    {
      id: "neon-jacket",
      name: "Neon Cyber Jacket",
      creator: "DigitalFashion",
      category: "Clothing",
      price: "0.05 ETH",
      image: "https://placehold.co/300x300/252525/FFFFFF/png?text=Neon+Jacket"
    },
    {
      id: "holographic-glasses",
      name: "Holographic Glasses",
      creator: "RetroFuture",
      category: "Accessories",
      price: "0.03 ETH",
      image: "https://placehold.co/300x300/252525/FFFFFF/png?text=Holo+Glasses"
    },
    {
      id: "chrome-helmet",
      name: "Chrome Helmet",
      creator: "MetaDesigner",
      category: "Headwear",
      price: "0.08 ETH",
      image: "https://placehold.co/300x300/252525/FFFFFF/png?text=Chrome+Helmet"
    },
    {
      id: "digital-wings",
      name: "Digital Wings",
      creator: "SkyCreator",
      category: "Accessories",
      price: "0.12 ETH",
      image: "https://placehold.co/300x300/252525/FFFFFF/png?text=Digital+Wings"
    }
  ];

  return (
    <div className="min-h-screen bg-dark text-white">
      <NavigationBar />
      
      <main className="pt-24 pb-16">
        {/* Billboard Rentals Section */}
        <section className="py-20 relative overflow-hidden bg-dark-lighter">
          <div className="absolute inset-0 bg-noise opacity-5"></div>
          <div className="container mx-auto px-4 relative z-10">
            <div className="text-center mb-12">
              <h2 className="text-4xl md:text-5xl font-bold mb-4">Promote Your Brand in the Metaverse</h2>
              <p className="text-xl text-white/70 max-w-3xl mx-auto">
                Rent high-traffic ad spaces across virtual districts and reach engaged audiences in the metaverse.
              </p>
            </div>
            
            <div className="mb-12">
              <ChromeCard variant="glass" className="p-6 mb-8">
                <div className="w-full h-[300px] bg-dark-light relative flex items-center justify-center">
                  <div className="absolute inset-0 bg-grid-pattern opacity-20"></div>
                  <Map className="w-16 h-16 text-white/30" />
                  <div className="absolute top-4 left-4 bg-dark-lighter px-3 py-1 rounded-md text-sm">
                    Billboard Map - Interactive Version Coming Soon
                  </div>
                  
                  {/* Billboard Placement Indicators */}
                  <div className="absolute w-4 h-4 bg-gold rounded-full top-1/4 left-1/3 animate-pulse"></div>
                  <div className="absolute w-4 h-4 bg-gold rounded-full top-1/3 right-1/4 animate-pulse"></div>
                  <div className="absolute w-4 h-4 bg-gold rounded-full bottom-1/3 left-1/4 animate-pulse"></div>
                  <div className="absolute w-4 h-4 bg-gold rounded-full bottom-1/4 right-1/3 animate-pulse"></div>
                </div>
              </ChromeCard>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {adSlots.map((slot) => (
                  <ChromeCard 
                    key={slot.id} 
                    variant="chrome"
                    glow={true}
                    animate={true}
                    className="overflow-hidden"
                  >
                    <div className="h-40 overflow-hidden">
                      <img 
                        src={slot.image} 
                        alt={slot.location} 
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="p-4">
                      <h3 className="text-lg font-bold mb-2 text-dark">{slot.location}</h3>
                      <div className="flex items-center justify-between mb-2">
                        <span className="text-sm text-dark/70">Size: {slot.size}</span>
                      </div>
                      <div className="flex items-center gap-1 mb-4">
                        <Users className="h-4 w-4 text-dark/70" />
                        <span className="text-sm text-dark/70">{slot.views}</span>
                      </div>
                      <ChromeButton variant="gold" size="sm" className="w-full">
                        Reserve This Space
                      </ChromeButton>
                    </div>
                  </ChromeCard>
                ))}
              </div>
            </div>
            
            <div className="text-center">
              <ChromeButton variant="gold" size="lg">
                Book Billboard Space
              </ChromeButton>
            </div>
          </div>
        </section>
        
        {/* Branded Experiences Section */}
        <section className="py-20 bg-dark relative overflow-hidden">
          <div className="absolute top-0 right-0 w-96 h-96 bg-neon-blue opacity-20 rounded-full blur-[100px] animate-float"></div>
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-neon-pink opacity-20 rounded-full blur-[100px] animate-float-slow"></div>
          
          <div className="container mx-auto px-4 relative z-10">
            <div className="text-center mb-12">
              <h2 className="text-4xl md:text-5xl font-bold mb-4">Build a Custom World for Your Brand</h2>
              <p className="text-xl text-white/70 max-w-3xl mx-auto">
                Launch immersive brand hubs, events, and product showcases in the Aesthetics Rebellion metaverse.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
              {brandedExperiences.map((exp) => (
                <ChromeCard 
                  key={exp.id}
                  variant="glass" 
                  glow={true}
                  className="overflow-hidden"
                >
                  <div className="h-48 overflow-hidden">
                    <img 
                      src={exp.image} 
                      alt={exp.title} 
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-bold mb-2">{exp.title}</h3>
                    <p className="text-white/70 mb-6">{exp.description}</p>
                    <ChromeButton variant="chrome" size="sm">
                      Explore Example
                    </ChromeButton>
                  </div>
                </ChromeCard>
              ))}
            </div>
            
            <div className="text-center">
              <ChromeButton variant="gold" size="lg">
                Partner with Us
              </ChromeButton>
            </div>
          </div>
        </section>
        
        {/* Dynamic Ads Section */}
        <section className="py-20 bg-dark-lighter relative overflow-hidden">
          <div className="absolute inset-0 bg-noise opacity-5"></div>
          
          <div className="container mx-auto px-4 relative z-10">
            <div className="text-center mb-12">
              <h2 className="text-4xl md:text-5xl font-bold mb-4">Targeted Ads that Adapt in Real-Time</h2>
              <p className="text-xl text-white/70 max-w-3xl mx-auto">
                AI-powered advertisements tailored to user behavior and preferences for maximum engagement.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto mb-12">
              {adFeatures.map((feature, index) => (
                <ChromeCard 
                  key={index} 
                  variant="chrome" 
                  className="p-6 text-center"
                  glow={true}
                  animate={true}
                >
                  <div className="flex flex-col items-center">
                    <div className="mb-4 rounded-full bg-white/10 p-4">
                      {feature.icon}
                    </div>
                    <h3 className="text-xl font-bold mb-2 text-dark">{feature.title}</h3>
                    <p className="text-dark/70">{feature.description}</p>
                  </div>
                </ChromeCard>
              ))}
            </div>
            
            <div className="text-center">
              <ChromeButton variant="gold" size="lg">
                Learn More About Smart Ads
              </ChromeButton>
            </div>
          </div>
        </section>
        
        {/* Sponsored Events Section */}
        <section className="py-20 bg-dark relative overflow-hidden">
          <div className="container mx-auto px-4 relative z-10">
            <div className="text-center mb-12">
              <h2 className="text-4xl md:text-5xl font-bold mb-4">Host Your Next Event in Aesthetics Rebellion</h2>
              <p className="text-xl text-white/70 max-w-3xl mx-auto">
                Workshops, concerts, or tournaments—branded with your identity and accessible to our growing user base.
              </p>
            </div>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
              {sponsoredEvents.map((event) => (
                <ChromeCard 
                  key={event.id} 
                  variant="glass" 
                  className="overflow-hidden flex flex-col md:flex-row"
                >
                  <div className="md:w-2/5">
                    <img 
                      src={event.image} 
                      alt={event.brand}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="p-6 md:w-3/5">
                    <div className="mb-4 px-2 py-1 bg-white/10 rounded text-sm inline-block">
                      Sponsored by: {event.brand}
                    </div>
                    <h3 className="text-xl font-bold mb-2">{event.location}</h3>
                    <p className="text-white/70 mb-4">{event.description}</p>
                    
                    <h4 className="font-bold text-sm mb-2">VIP Tiers:</h4>
                    <ul className="mb-4">
                      {event.tiers.map((tier, i) => (
                        <li 
                          key={i} 
                          className={`mb-1 text-sm ${
                            i === 0 ? "text-gold" : i === 1 ? "text-white/80" : "text-white/60"
                          }`}
                        >
                          {tier}
                        </li>
                      ))}
                    </ul>
                    <ChromeButton variant="chrome" size="sm">
                      View Details
                    </ChromeButton>
                  </div>
                </ChromeCard>
              ))}
            </div>
            
            <div className="text-center">
              <ChromeButton variant="gold" size="lg">
                Book an Event Slot
              </ChromeButton>
            </div>
          </div>
        </section>
        
        {/* Wearables Section */}
        <section className="py-20 bg-dark-lighter">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-4xl md:text-5xl font-bold mb-4">Design & Sell Wearables</h2>
              <p className="text-xl text-white/70 max-w-3xl mx-auto">
                Upload custom outfits, accessories, and skins as NFTs that users can purchase for their avatars.
              </p>
            </div>
            
            <Tabs defaultValue="All" className="mb-12">
              <div className="flex justify-center mb-8">
                <TabsList className="bg-white/10">
                  {wearablesCategories.map(category => (
                    <TabsTrigger 
                      key={category} 
                      value={category}
                      className="data-[state=active]:bg-gold data-[state=active]:text-dark"
                    >
                      {category}
                    </TabsTrigger>
                  ))}
                </TabsList>
              </div>
              
              <TabsContent value="All">
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
                  {trendingWearables.map(item => (
                    <ChromeCard 
                      key={item.id} 
                      variant="chrome"
                      glow={true}
                      animate={true}
                      className="overflow-hidden"
                    >
                      <div className="h-48 bg-dark-light overflow-hidden">
                        <img 
                          src={item.image}
                          alt={item.name}
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <div className="p-4 text-dark">
                        <h3 className="font-bold text-lg mb-1">{item.name}</h3>
                        <p className="text-sm text-dark/70 mb-2">By {item.creator}</p>
                        <div className="flex justify-between items-center">
                          <span className="font-medium">{item.price}</span>
                          <span className="bg-white/20 px-2 py-1 rounded text-xs">{item.category}</span>
                        </div>
                      </div>
                    </ChromeCard>
                  ))}
                </div>
              </TabsContent>
              
              {wearablesCategories.slice(1).map(category => (
                <TabsContent key={category} value={category}>
                  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
                    {trendingWearables
                      .filter(item => item.category === category)
                      .map(item => (
                        <ChromeCard 
                          key={item.id} 
                          variant="chrome"
                          glow={true}
                          animate={true}
                          className="overflow-hidden"
                        >
                          <div className="h-48 bg-dark-light overflow-hidden">
                            <img 
                              src={item.image}
                              alt={item.name}
                              className="w-full h-full object-cover"
                            />
                          </div>
                          <div className="p-4 text-dark">
                            <h3 className="font-bold text-lg mb-1">{item.name}</h3>
                            <p className="text-sm text-dark/70 mb-2">By {item.creator}</p>
                            <div className="flex justify-between items-center">
                              <span className="font-medium">{item.price}</span>
                              <span className="bg-white/20 px-2 py-1 rounded text-xs">{item.category}</span>
                            </div>
                          </div>
                        </ChromeCard>
                      ))}
                  </div>
                </TabsContent>
              ))}
            </Tabs>
            
            <div className="flex flex-wrap justify-center gap-4">
              <ChromeButton variant="gold" size="lg">
                Upload New Wearable
              </ChromeButton>
              <ChromeButton variant="chrome" size="lg">
                Browse Marketplace
              </ChromeButton>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default Marketing;
