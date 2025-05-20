import React, { useState } from "react";
import { useParams, useLocation, Link } from "react-router-dom";
import { NavigationBar } from "@/components/navigation-bar";
import { Footer } from "@/components/footer";
import { ChromeCard } from "@/components/ui/chrome-card";
import { ChromeButton } from "@/components/ui/chrome-button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Palette, Code, User, Box, Layers, Play, BookOpen, Wrench, ArrowRight, Globe, CheckCircle } from "lucide-react";

const Create = () => {
  const { tutorialId, toolId } = useParams();
  const location = useLocation();
  const [selectedTab, setSelectedTab] = useState("overview");
  
  const tutorials = [
    {
      id: "intro",
      title: "Introduction to Creation",
      description: "Learn the basics of our creation tools in this beginner-friendly guide.",
      duration: "10 mins",
      image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?auto=format&fit=crop&q=80&w=400"
    },
    {
      id: "avatar",
      title: "Creating Your First Avatar",
      description: "Design a unique avatar that represents you in the metaverse.",
      duration: "15 mins",
      image: "https://images.unsplash.com/photo-1649972904349-6e44c42644a7?auto=format&fit=crop&q=80&w=400"
    },
    {
      id: "environment",
      title: "Building Environments",
      description: "Learn how to craft immersive spaces with our environment editor.",
      duration: "25 mins",
      image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80&w=400"
    },
    {
      id: "scripting",
      title: "Basic Scripting",
      description: "Add interactivity to your creations with our visual scripting system.",
      duration: "30 mins",
      image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&q=80&w=400"
    }
  ];

  const tools = [
    {
      id: "basics",
      title: "Creator Toolkit",
      description: "All-in-one toolkit for building in the metaverse.",
      complexity: "Beginner"
    },
    {
      id: "avatar-studio",
      title: "Avatar Studio",
      description: "Specialized tool for designing and animating characters.",
      complexity: "Intermediate"
    },
    {
      id: "terrain-editor",
      title: "Terrain Editor",
      description: "Shape landscapes and natural environments.",
      complexity: "Intermediate"
    },
    {
      id: "scripting-engine",
      title: "Script Engine",
      description: "Add behaviors and interactivity to your worlds.",
      complexity: "Advanced"
    }
  ];

  let content;
  if (location.pathname.includes('/tutorials/')) {
    const tutorial = tutorials.find(t => t.id === tutorialId) || tutorials[0];
    
    content = (
      <div>
        <div className="mb-6">
          <Link to="/create" className="text-blue-400 hover:underline flex items-center">
            <ArrowRight size={16} className="mr-2 rotate-180" /> Back to Create Hub
          </Link>
        </div>
        
        <ChromeCard variant="chrome" className="p-8 mb-8">
          <h2 className="text-2xl font-bold mb-4">Tutorial: {tutorial.title}</h2>
          
          <div className="aspect-video bg-black/40 mb-6 rounded-lg flex items-center justify-center">
            <Play size={48} className="text-white/50" />
          </div>
          
          <div className="flex items-center mb-6 text-sm text-white/60">
            <span className="mr-4 flex items-center">
              <BookOpen size={16} className="mr-1" /> {tutorial.duration}
            </span>
            <span className="flex items-center">
              <User size={16} className="mr-1" /> Beginner Friendly
            </span>
          </div>
          
          <div className="prose prose-invert max-w-none">
            <p>
              Welcome to this tutorial on {tutorial.title}. In this guided lesson, you'll learn 
              {tutorial.description.toLowerCase().substring(tutorial.description.indexOf(' '))}
            </p>
            
            <h3>What You'll Learn</h3>
            <ul>
              <li>Understanding the basic interface</li>
              <li>Creating your first project</li>
              <li>Essential tools and features</li>
              <li>Exporting and sharing your creation</li>
            </ul>
            
            <h3>Prerequisites</h3>
            <p>
              No prior experience is required for this tutorial. Just bring your creativity and 
              willingness to learn!
            </p>
            
            <div className="bg-white/10 p-4 rounded-lg mt-6 flex items-center">
              <div className="mr-4 text-chrome-light">
                <Wrench size={24} />
              </div>
              <div>
                <h4 className="font-bold">Ready to start creating?</h4>
                <p className="text-sm text-white/80">
                  After completing this tutorial, launch our Creator Studio to apply what you've learned.
                </p>
              </div>
              <ChromeButton variant="gold" size="sm" className="ml-auto">
                Open Creator Studio
              </ChromeButton>
            </div>
          </div>
        </ChromeCard>
        
        <h3 className="text-xl font-bold mb-4">More Tutorials</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          {tutorials.filter(t => t.id !== tutorialId).slice(0, 3).map(tutorial => (
            <ChromeCard key={tutorial.id} variant="glass" className="p-4">
              <h4 className="font-bold mb-1">{tutorial.title}</h4>
              <p className="text-sm text-white/70 mb-3 line-clamp-2">{tutorial.description}</p>
              <Link to={`/create/tutorials/${tutorial.id}`} className="text-blue-400 text-sm">
                View Tutorial &rarr;
              </Link>
            </ChromeCard>
          ))}
        </div>
      </div>
    );
  } else if (location.pathname.includes('/tools/')) {
    const tool = tools.find(t => t.id === toolId) || tools[0];
    
    content = (
      <div>
        <div className="mb-6">
          <Link to="/create" className="text-blue-400 hover:underline flex items-center">
            <ArrowRight size={16} className="mr-2 rotate-180" /> Back to Create Hub
          </Link>
        </div>
        
        <ChromeCard variant="chrome" className="p-8">
          <h2 className="text-2xl font-bold mb-4">Tool: {tool.title}</h2>
          
          <div className="flex flex-col md:flex-row gap-8 mb-6">
            <div className="md:w-1/3 bg-white/10 rounded-lg h-64 flex items-center justify-center">
              <span className="text-white/30 text-sm">Tool screenshot</span>
            </div>
            
            <div className="md:w-2/3">
              <div className="mb-4">
                <span className="inline-block bg-white/20 text-sm px-3 py-1 rounded-full mb-4">
                  {tool.complexity} Level
                </span>
                <h3 className="text-xl font-bold mb-2">About this Tool</h3>
                <p>
                  {tool.description} This specialized creation tool is designed to help you build 
                  immersive experiences in the Aesthetics Rebellion metaverse with ease and precision.
                </p>
              </div>
              
              <div className="grid grid-cols-2 gap-4 mb-6">
                <div className="bg-white/10 p-4 rounded-lg">
                  <h4 className="font-bold mb-2">Key Features</h4>
                  <ul className="text-sm space-y-1 text-white/80">
                    <li>• Intuitive drag-and-drop interface</li>
                    <li>• High-fidelity real-time preview</li>
                    <li>• Extensive asset library</li>
                    <li>• One-click publishing</li>
                  </ul>
                </div>
                <div className="bg-white/10 p-4 rounded-lg">
                  <h4 className="font-bold mb-2">System Requirements</h4>
                  <ul className="text-sm space-y-1 text-white/80">
                    <li>• Modern browser (Chrome recommended)</li>
                    <li>• 4GB RAM minimum</li>
                    <li>• Dedicated graphics card</li>
                    <li>• Stable internet connection</li>
                  </ul>
                </div>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <ChromeButton variant="gold" className="flex-1">
                  Launch Tool in Browser
                </ChromeButton>
                <ChromeButton variant="chrome" className="flex-1">
                  Download Desktop Version
                </ChromeButton>
              </div>
            </div>
          </div>
          
          <div className="mt-8">
            <h3 className="text-xl font-bold mb-4">Related Tutorials</h3>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              {tutorials.slice(0, 3).map(tutorial => (
                <ChromeCard key={tutorial.id} variant="glass" className="p-4">
                  <h4 className="font-bold mb-1">{tutorial.title}</h4>
                  <p className="text-sm text-white/70 mb-3 line-clamp-2">{tutorial.description}</p>
                  <Link to={`/create/tutorials/${tutorial.id}`} className="text-blue-400 text-sm">
                    View Tutorial &rarr;
                  </Link>
                </ChromeCard>
              ))}
            </div>
          </div>
        </ChromeCard>
      </div>
    );
  } else {
    content = (
      <div>
        <Tabs defaultValue="overview" value={selectedTab} onValueChange={setSelectedTab}>
          <TabsList className="mb-8">
            <TabsTrigger value="overview" className="px-6">Overview</TabsTrigger>
            <TabsTrigger value="avatars" className="px-6">Avatars</TabsTrigger>
            <TabsTrigger value="worlds" className="px-6">Worlds</TabsTrigger>
            <TabsTrigger value="assets" className="px-6">Assets</TabsTrigger>
          </TabsList>
          
          <TabsContent value="overview">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
              <ChromeCard variant="chrome" className="p-6">
                <div className="flex items-start mb-4">
                  <div className="bg-gradient-to-b from-chrome-light to-chrome-dark p-3 rounded-full mr-4">
                    <BookOpen size={24} className="text-dark" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-1">Start Learning</h3>
                    <p className="text-white/70">
                      New to creation? Our step-by-step tutorials will guide you through the basics.
                    </p>
                  </div>
                </div>
                
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
                  {tutorials.slice(0, 2).map(tutorial => (
                    <div key={tutorial.id} className="bg-white/10 p-3 rounded-lg">
                      <h4 className="font-bold text-sm mb-1">{tutorial.title}</h4>
                      <p className="text-xs text-white/60 mb-2">{tutorial.duration}</p>
                      <Link to={`/create/tutorials/${tutorial.id}`} className="text-blue-400 text-xs flex items-center">
                        Start <ArrowRight size={12} className="ml-1" />
                      </Link>
                    </div>
                  ))}
                </div>
                
                <Link to="/create/tutorials/intro" className="text-chrome-light text-sm hover:underline">
                  View all tutorials &rarr;
                </Link>
              </ChromeCard>
              
              <ChromeCard variant="chrome" className="p-6">
                <div className="flex items-start mb-4">
                  <div className="bg-gradient-to-b from-chrome-light to-chrome-dark p-3 rounded-full mr-4">
                    <Wrench size={24} className="text-dark" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-1">Creation Tools</h3>
                    <p className="text-white/70">
                      Powerful tools for building avatars, worlds, and interactive experiences.
                    </p>
                  </div>
                </div>
                
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
                  {tools.slice(0, 2).map(tool => (
                    <div key={tool.id} className="bg-white/10 p-3 rounded-lg">
                      <h4 className="font-bold text-sm mb-1">{tool.title}</h4>
                      <p className="text-xs text-white/60 mb-2">{tool.complexity}</p>
                      <Link to={`/create/tools/${tool.id}`} className="text-blue-400 text-xs flex items-center">
                        Launch <ArrowRight size={12} className="ml-1" />
                      </Link>
                    </div>
                  ))}
                </div>
                
                <Link to="/create/tools/basics" className="text-chrome-light text-sm hover:underline">
                  View all tools &rarr;
                </Link>
              </ChromeCard>
            </div>
            
            <ChromeCard variant="glass" className="p-8 bg-gradient-to-r from-[#1a1f2c] to-[#2a3042]">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <h2 className="text-3xl font-bold mb-4">Creator Program</h2>
                  <p className="mb-6">
                    Join our exclusive Creator Program to monetize your creations, get early access to new 
                    features, and connect with other talented creators in our community.
                  </p>
                  <ul className="space-y-2 mb-6">
                    <li className="flex items-center">
                      <div className="w-5 h-5 rounded-full bg-chrome-light flex items-center justify-center mr-2">
                        <CheckCircle size={12} className="text-dark" />
                      </div>
                      <span>Sell your creations on the marketplace</span>
                    </li>
                    <li className="flex items-center">
                      <div className="w-5 h-5 rounded-full bg-chrome-light flex items-center justify-center mr-2">
                        <CheckCircle size={12} className="text-dark" />
                      </div>
                      <span>Early access to beta features</span>
                    </li>
                    <li className="flex items-center">
                      <div className="w-5 h-5 rounded-full bg-chrome-light flex items-center justify-center mr-2">
                        <CheckCircle size={12} className="text-dark" />
                      </div>
                      <span>Creator badge and profile verification</span>
                    </li>
                  </ul>
                  <ChromeButton variant="gold">
                    Apply for Creator Program
                  </ChromeButton>
                </div>
                <div className="bg-white/10 rounded-lg h-64 flex items-center justify-center">
                  <span className="text-white/30 text-sm">Creator showcase image</span>
                </div>
              </div>
            </ChromeCard>
          </TabsContent>
          
          <TabsContent value="avatars">
            <h2 className="text-2xl font-bold mb-6">Avatar Creation</h2>
            <p className="text-lg mb-8">
              Design unique digital personas that represent you in the metaverse.
            </p>
            {/* Avatar creation content would go here */}
            <div className="bg-white/10 p-12 rounded-lg text-center">
              <User size={48} className="mx-auto mb-4 text-white/30" />
              <p className="text-white/50">Avatar creation tools content will be displayed here.</p>
            </div>
          </TabsContent>
          
          <TabsContent value="worlds">
            <h2 className="text-2xl font-bold mb-6">World Building</h2>
            <p className="text-lg mb-8">
              Create immersive environments for others to explore.
            </p>
            {/* World building content would go here */}
            <div className="bg-white/10 p-12 rounded-lg text-center">
              <Globe size={48} className="mx-auto mb-4 text-white/30" />
              <p className="text-white/50">World building tools content will be displayed here.</p>
            </div>
          </TabsContent>
          
          <TabsContent value="assets">
            <h2 className="text-2xl font-bold mb-6">Asset Creation</h2>
            <p className="text-lg mb-8">
              Design objects, textures, and interactive elements for your worlds.
            </p>
            {/* Asset creation content would go here */}
            <div className="bg-white/10 p-12 rounded-lg text-center">
              <Box size={48} className="mx-auto mb-4 text-white/30" />
              <p className="text-white/50">Asset creation tools content will be displayed here.</p>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    );
  }
  
  return (
    <div className="min-h-screen bg-dark text-white">
      <NavigationBar />
      <main className="pt-24 pb-16">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold mb-8">Create in the Metaverse</h1>
          {content}
        </div>
      </main>
      <Footer />
    </div>
  );
};

// Remove the custom Check icon and use CheckCircle from lucide-react instead
export default Create;
