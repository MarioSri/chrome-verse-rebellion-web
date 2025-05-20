
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
    <div className="min-h-screen bg-gradient-to-b from-[#f5f5f3] to-[#ebe8e4] text-[#222]">
      <NavigationBar />
      <main className="pt-24 pb-16">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row md:items-center justify-between mb-8">
            <h1 className="text-4xl font-light mb-4 md:mb-0 tracking-tight">Explore Virtual Worlds</h1>
            <div className="relative">
              <input
                type="text"
                placeholder="Search worlds..."
                className="w-full md:w-64 py-2 pl-10 pr-4 bg-white border border-gray-200 rounded-full focus:outline-none focus:border-chrome-light shadow-sm"
              />
              <Search size={18} className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
            {/* Sidebar Filters */}
            <div className="lg:col-span-1">
              <ChromeCard variant="glass" className="p-6 sticky top-24 bg-white/80 backdrop-blur-md shadow-md rounded-2xl">
                <h2 className="font-medium text-xl mb-4 flex items-center">
                  <Filter size={18} className="mr-2" /> Filters
                </h2>
                
                <div className="space-y-6">
                  <div>
                    <h3 className="font-medium mb-2 text-gray-600">Categories</h3>
                    <div className="space-y-2">
                      <button 
                        className={`block w-full text-left py-1.5 px-3 rounded-full transition-colors ${activeFilter === "all" ? "bg-gray-200 font-medium" : "hover:bg-gray-100"}`}
                        onClick={() => setActiveFilter("all")}
                      >
                        All Worlds
                      </button>
                      <button 
                        className={`block w-full text-left py-1.5 px-3 rounded-full transition-colors ${activeFilter === "featured" ? "bg-gray-200 font-medium" : "hover:bg-gray-100"}`}
                        onClick={() => setActiveFilter("featured")}
                      >
                        Featured
                      </button>
                      <button 
                        className={`block w-full text-left py-1.5 px-3 rounded-full transition-colors ${activeFilter === "new" ? "bg-gray-200 font-medium" : "hover:bg-gray-100"}`}
                        onClick={() => setActiveFilter("new")}
                      >
                        New Arrivals
                      </button>
                      <button 
                        className={`block w-full text-left py-1.5 px-3 rounded-full transition-colors ${activeFilter === "city" ? "bg-gray-200 font-medium" : "hover:bg-gray-100"}`}
                        onClick={() => setActiveFilter("city")}
                      >
                        Cities
                      </button>
                      <button 
                        className={`block w-full text-left py-1.5 px-3 rounded-full transition-colors ${activeFilter === "nature" ? "bg-gray-200 font-medium" : "hover:bg-gray-100"}`}
                        onClick={() => setActiveFilter("nature")}
                      >
                        Nature
                      </button>
                    </div>
                  </div>
                  
                  <Separator />
                  
                  <div>
                    <h3 className="font-medium mb-4 text-gray-600">User Count</h3>
                    <Slider defaultValue={[500]} max={5000} step={100} />
                    <div className="flex justify-between text-sm mt-2 text-gray-500">
                      <span>0</span>
                      <span>5,000+</span>
                    </div>
                  </div>
                  
                  <Separator />
                  
                  <div className="space-y-2">
                    <div className="flex items-center justify-between">
                      <label className="text-sm font-medium text-gray-600">VR Compatible</label>
                      <Switch />
                    </div>
                    <div className="flex items-center justify-between">
                      <label className="text-sm font-medium text-gray-600">Creator Mode</label>
                      <Switch />
                    </div>
                    <div className="flex items-center justify-between">
                      <label className="text-sm font-medium text-gray-600">Free to Join</label>
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
                  <ChromeCard key={world.id} variant="glass" className="overflow-hidden flex flex-col bg-white/80 backdrop-blur-md shadow-md rounded-2xl border border-gray-100">
                    <div className="h-48 overflow-hidden relative">
                      <img 
                        src={world.image} 
                        alt={world.name} 
                        className="w-full h-full object-cover"
                      />
                      <div className="absolute bottom-2 right-2 flex items-center bg-black/60 px-2 py-1 rounded-full">
                        <Users size={14} className="mr-1 text-white" />
                        <span className="text-xs text-white">{world.users.toLocaleString()}</span>
                      </div>
                      {world.tags.includes("featured") && (
                        <Badge className="absolute top-2 left-2 bg-[#ffd700] text-gray-800 rounded-full px-2 py-0.5 flex items-center">
                          <Sparkles size={12} className="mr-1" /> Featured
                        </Badge>
                      )}
                      {world.tags.includes("new") && (
                        <Badge className="absolute top-2 left-2 bg-[#00b4d8] text-white rounded-full px-2 py-0.5">
                          New
                        </Badge>
                      )}
                    </div>
                    <div className="p-4 flex-1 flex flex-col">
                      <div className="flex justify-between items-start">
                        <h3 className="font-medium text-lg">{world.name}</h3>
                      </div>
                      <p className="text-sm text-gray-500 mb-1">By {world.creator}</p>
                      <p className="text-sm text-gray-600 mb-4 flex-1">{world.description}</p>
                      <Link to={`/explore/${world.name.toLowerCase().replace(/\s+/g, '-')}`}>
                        <ChromeButton variant="chrome" size="sm" className="w-full rounded-full">
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
            <ChromeCard variant="glass" className="p-8 bg-gradient-to-br from-[#f4f4f2] to-[#e7e4dd] rounded-2xl shadow-lg">
              <div className="flex flex-col md:flex-row items-center">
                <div className="md:w-2/3 mb-6 md:mb-0 md:pr-6">
                  <h2 className="text-3xl font-light mb-4 tracking-tight">Create Your Own Virtual World</h2>
                  <p className="mb-6 text-gray-600">
                    Have an idea for a unique virtual experience? Build your own world with our powerful
                    yet intuitive tools. No coding required - just imagination.
                  </p>
                  <ChromeButton variant="gold" size="lg" className="inline-flex items-center rounded-full">
                    <Link to="/create" className="flex items-center">
                      Get Started <ArrowRight size={16} className="ml-2" />
                    </Link>
                  </ChromeButton>
                </div>
                <div className="md:w-1/3">
                  <div className="bg-white/40 rounded-2xl h-48 flex items-center justify-center overflow-hidden shadow-inner">
                    <div className="w-32 h-32 bg-gradient-to-br from-[#c8b6ff] to-[#8338ec] rounded-full relative">
                      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-24 h-24 bg-white/30 backdrop-blur-sm rounded-full"></div>
                      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-16 h-16 bg-white/50 backdrop-blur-md rounded-full"></div>
                    </div>
                  </div>
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
