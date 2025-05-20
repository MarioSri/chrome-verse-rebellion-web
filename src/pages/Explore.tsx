import React, { useState } from "react";
import { NavigationBar } from "@/components/navigation-bar";
import { Footer } from "@/components/footer";
import { ChromeCard } from "@/components/ui/chrome-card";
import { ChromeButton } from "@/components/ui/chrome-button";
import { Link } from "react-router-dom";
import { Search, Filter, Globe, Users, Sparkles, ArrowRight } from "lucide-react";
import { Separator } from "@/components/ui/separator";
import { Slider } from "@/components/ui/slider";
import { Switch } from "@/components/ui/switch";
import { Badge } from "@/components/ui/badge";

const Explore = () => {
  const [activeFilter, setActiveFilter] = useState("all");

  const worlds = [
    {
      id: 1,
      name: "Neo Tokyo",
      creator: "CyberArtist",
      description: "A cyberpunk-inspired metropolis with neon lights and digital rain.",
      image: "https://images.unsplash.com/photo-1563089145-599997674d42?auto=format&fit=crop&q=80&w=400",
      users: 3452,
      tags: ["cyberpunk", "city", "featured"]
    },
    {
      id: 2,
      name: "Ethereal Gardens",
      creator: "DreamWeaver",
      description: "Floating islands of lush gardens connected by bridges of light.",
      image: "https://images.unsplash.com/photo-1518156677180-95a2893f3499?auto=format&fit=crop&q=80&w=400",
      users: 1876,
      tags: ["nature", "fantasy", "featured"]
    },
    {
      id: 3,
      name: "Desert Oasis",
      creator: "SandSculptor",
      description: "A vibrant oasis in the middle of an endless desert with ancient ruins.",
      image: "https://images.unsplash.com/photo-1682685797741-f0213d24418c?auto=format&fit=crop&q=80&w=400",
      users: 945,
      tags: ["desert", "ruins"]
    },
    {
      id: 4,
      name: "Aquatic Depths",
      creator: "OceanDreamer",
      description: "An underwater civilization with bioluminescent architecture.",
      image: "https://images.unsplash.com/photo-1682687220742-aba19a5644c9?auto=format&fit=crop&q=80&w=400",
      users: 2143,
      tags: ["underwater", "bioluminescent", "new"]
    },
    {
      id: 5,
      name: "Crystal Peaks",
      creator: "FrostForger",
      description: "A mountain range of giant crystals that refract and reflect light in mesmerizing patterns.",
      image: "https://images.unsplash.com/photo-1518049362265-d5b2a6f911bd?auto=format&fit=crop&q=80&w=400",
      users: 1267,
      tags: ["mountain", "crystal", "new"]
    },
    {
      id: 6,
      name: "Clockwork City",
      creator: "GearMaster",
      description: "A steampunk city powered by massive gears and steam engines.",
      image: "https://images.unsplash.com/photo-1517414747395-c3ef9bbb5fa3?auto=format&fit=crop&q=80&w=400",
      users: 1589,
      tags: ["steampunk", "mechanical", "city"]
    }
  ];

  const filteredWorlds = activeFilter === "all" 
    ? worlds 
    : worlds.filter(world => world.tags.includes(activeFilter));

  return (
    <div className="min-h-screen bg-dark text-white">
      <NavigationBar />
      <main className="pt-24 pb-16">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row md:items-center justify-between mb-8">
            <h1 className="text-4xl font-bold mb-4 md:mb-0">Explore Virtual Worlds</h1>
            <div className="relative">
              <input
                type="text"
                placeholder="Search worlds..."
                className="w-full md:w-64 py-2 pl-10 pr-4 bg-white/10 border border-white/20 rounded-full focus:outline-none focus:border-chrome-light"
              />
              <Search size={18} className="absolute left-3 top-1/2 transform -translate-y-1/2 text-white/50" />
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
            {/* Sidebar Filters */}
            <div className="lg:col-span-1">
              <ChromeCard variant="glass" className="p-6 sticky top-24">
                <h2 className="font-bold text-xl mb-4 flex items-center">
                  <Filter size={18} className="mr-2" /> Filters
                </h2>
                
                <div className="space-y-6">
                  <div>
                    <h3 className="font-medium mb-2">Categories</h3>
                    <div className="space-y-2">
                      <button 
                        className={`block w-full text-left py-1.5 px-3 rounded ${activeFilter === "all" ? "bg-white/20" : "hover:bg-white/10"}`}
                        onClick={() => setActiveFilter("all")}
                      >
                        All Worlds
                      </button>
                      <button 
                        className={`block w-full text-left py-1.5 px-3 rounded ${activeFilter === "featured" ? "bg-white/20" : "hover:bg-white/10"}`}
                        onClick={() => setActiveFilter("featured")}
                      >
                        Featured
                      </button>
                      <button 
                        className={`block w-full text-left py-1.5 px-3 rounded ${activeFilter === "new" ? "bg-white/20" : "hover:bg-white/10"}`}
                        onClick={() => setActiveFilter("new")}
                      >
                        New Arrivals
                      </button>
                      <button 
                        className={`block w-full text-left py-1.5 px-3 rounded ${activeFilter === "city" ? "bg-white/20" : "hover:bg-white/10"}`}
                        onClick={() => setActiveFilter("city")}
                      >
                        Cities
                      </button>
                      <button 
                        className={`block w-full text-left py-1.5 px-3 rounded ${activeFilter === "nature" ? "bg-white/20" : "hover:bg-white/10"}`}
                        onClick={() => setActiveFilter("nature")}
                      >
                        Nature
                      </button>
                    </div>
                  </div>
                  
                  <Separator />
                  
                  <div>
                    <h3 className="font-medium mb-4">User Count</h3>
                    <Slider defaultValue={[500]} max={5000} step={100} />
                    <div className="flex justify-between text-sm mt-2">
                      <span>0</span>
                      <span>5,000+</span>
                    </div>
                  </div>
                  
                  <Separator />
                  
                  <div className="space-y-2">
                    <div className="flex items-center justify-between">
                      <label className="text-sm font-medium">VR Compatible</label>
                      <Switch />
                    </div>
                    <div className="flex items-center justify-between">
                      <label className="text-sm font-medium">Creator Mode</label>
                      <Switch />
                    </div>
                    <div className="flex items-center justify-between">
                      <label className="text-sm font-medium">Free to Join</label>
                      <Switch defaultChecked />
                    </div>
                  </div>
                </div>
              </ChromeCard>
            </div>
            
            {/* Main Content - World Grid */}
            <div className="lg:col-span-3">
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredWorlds.map((world) => (
                  <ChromeCard key={world.id} variant="chrome" className="overflow-hidden flex flex-col">
                    <div className="h-48 overflow-hidden relative">
                      <img 
                        src={world.image} 
                        alt={world.name} 
                        className="w-full h-full object-cover"
                      />
                      <div className="absolute bottom-2 right-2 flex items-center bg-black/60 px-2 py-1 rounded-full">
                        <Users size={14} className="mr-1" />
                        <span className="text-xs">{world.users.toLocaleString()}</span>
                      </div>
                      {world.tags.includes("featured") && (
                        <Badge className="absolute top-2 left-2 bg-chrome-light text-dark">
                          <Sparkles size={12} className="mr-1" /> Featured
                        </Badge>
                      )}
                      {world.tags.includes("new") && (
                        <Badge className="absolute top-2 left-2 bg-blue-500 text-white">
                          New
                        </Badge>
                      )}
                    </div>
                    <div className="p-4 flex-1 flex flex-col">
                      <div className="flex justify-between items-start">
                        <h3 className="font-bold text-lg">{world.name}</h3>
                      </div>
                      <p className="text-sm text-white/60 mb-1">By {world.creator}</p>
                      <p className="text-sm text-white/80 mb-4 flex-1">{world.description}</p>
                      <Link to={`/explore/${world.name.toLowerCase().replace(/\s+/g, '-')}`}>
                        <ChromeButton variant="glass" size="sm" className="w-full">
                          <span className="flex items-center justify-center">
                            <Globe size={16} className="mr-2" />
                            Visit Planet
                          </span>
                        </ChromeButton>
                      </Link>
                    </div>
                  </ChromeCard>
                ))}
              </div>
            </div>
          </div>
          
          {/* Create Your Own Section */}
          <div className="mt-16">
            <ChromeCard variant="chrome" className="p-8 bg-gradient-to-r from-chrome-dark to-chrome-light text-dark">
              <div className="flex flex-col md:flex-row items-center">
                <div className="md:w-2/3 mb-6 md:mb-0 md:pr-6">
                  <h2 className="text-3xl font-bold mb-4">Create Your Own Virtual World</h2>
                  <p className="mb-6">
                    Have an idea for a unique virtual experience? Build your own world with our powerful
                    yet intuitive tools. No coding required - just imagination.
                  </p>
                  <ChromeButton variant="chrome" className="inline-flex items-center">
                    <Link to="/create" className="flex items-center">
                      Get Started <ArrowRight size={16} className="ml-2" />
                    </Link>
                  </ChromeButton>
                </div>
                <div className="md:w-1/3 bg-white/20 rounded-xl h-48 flex items-center justify-center">
                  <span className="text-dark/50 text-sm">Creator tools illustration</span>
                </div>
              </div>
            </ChromeCard>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Explore;
