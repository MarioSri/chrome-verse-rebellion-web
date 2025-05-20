
import React from "react";
import { NavigationBar } from "@/components/navigation-bar";
import { Footer } from "@/components/footer";
import { ChromeCard } from "@/components/ui/chrome-card";
import { ChromeButton } from "@/components/ui/chrome-button";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Monitor, Tablet, Smartphone, Headset, Calendar, MapPin, Users, ArrowRight, Plus } from "lucide-react";

const Community = () => {
  const spotlightCreators = [
    {
      name: "Alex Voxel",
      avatar: "https://i.pravatar.cc/150?img=1",
      project: "Neon District",
      description: "An immersive urban environment with interactive storefronts and NPCs."
    },
    {
      name: "Mia Digital",
      avatar: "https://i.pravatar.cc/150?img=5",
      project: "Crystal Gardens",
      description: "A meditative space with procedurally generated crystal formations."
    },
    {
      name: "Zach Builder",
      avatar: "https://i.pravatar.cc/150?img=3",
      project: "Tech Hub",
      description: "A collaborative workspace for metaverse developers with integrated tools."
    }
  ];

  const upcomingEvents = [
    {
      title: "Virtual Art Exhibition",
      date: "June 1-5, 2025",
      description: "Submit your digital art for our curated exhibition.",
      time: "18:00 UTC",
      location: "Gallery Plaza"
    },
    {
      title: "Builder Contest",
      date: "June 15, 2025",
      description: "Design a new landmark for the central plaza.",
      time: "14:00 UTC",
      location: "Central Hub"
    },
    {
      title: "Community Meetup",
      date: "June 22, 2025",
      description: "Join us for a virtual gathering and Q&A with the dev team.",
      time: "19:30 UTC",
      location: "Town Hall"
    }
  ];

  const communityGuidelines = [
    {
      title: "Respect Others",
      content: "Treat all community members with respect and dignity. No harassment, hate speech, or discriminatory behavior."
    },
    {
      title: "Content Guidelines",
      content: "All created content should adhere to our community standards. No explicit, illegal, or harmful content."
    },
    {
      title: "Intellectual Property",
      content: "Respect the intellectual property rights of others. Do not copy or plagiarize others' creations."
    },
    {
      title: "Security and Privacy",
      content: "Do not attempt to hack, exploit, or compromise the security of the platform or other users' data."
    }
  ];
  
  const supportedDevices = [
    {
      name: "Desktop",
      icon: <Monitor className="h-10 w-10 mb-2" />,
      description: "Full experience optimized for large screens with detailed visualizations and controls."
    },
    {
      name: "Tablet",
      icon: <Tablet className="h-10 w-10 mb-2" />,
      description: "Touch-optimized interface with responsive layouts for medium-sized screens."
    },
    {
      name: "Mobile",
      icon: <Smartphone className="h-10 w-10 mb-2" />,
      description: "Streamlined experience for on-the-go access with gesture controls and simplified UI."
    },
    {
      name: "VR Headsets",
      icon: <Headset className="h-10 w-10 mb-2" />,
      description: "Immersive WebXR experience compatible with Chrome and Firefox on supported headsets."
    },
  ];

  const liveRooms = [
    {
      title: "Design Workshop",
      followers: 124,
      host: "MetaDesigner",
      image: "https://images.unsplash.com/photo-1633356122102-3fe601e05bd2?auto=format&fit=crop&q=80&w=400",
      type: "Creative"
    },
    {
      title: "Building Community",
      followers: 87,
      host: "CommunityLead",
      image: "https://images.unsplash.com/photo-1638803040283-7a5ffd48dad5?auto=format&fit=crop&q=80&w=400",
      type: "Discussion"
    }
  ];
  
  return (
    <div className="min-h-screen bg-black text-white">
      <NavigationBar />
      <main className="pt-24 pb-16">
        {/* Hero Section - Now with red, black, white scheme */}
        <section className="py-16 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-red-600 rounded-full opacity-20 blur-3xl"></div>
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-red-600 rounded-full opacity-10 blur-3xl"></div>
          
          <div className="container mx-auto px-4 relative z-10">
            <div className="max-w-5xl mx-auto">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <ChromeCard variant="dark" className="border border-white/10 p-8 backdrop-blur-md">
                  <h1 className="text-4xl md:text-5xl font-light mb-6 tracking-tight">
                    Join the <span className="text-red-500">Rebellion</span> Community
                  </h1>
                  <p className="text-xl text-gray-300 mb-8 leading-relaxed">
                    Connect with creators, explorers, and builders in our growing metaverse community.
                    Share, learn, and build together.
                  </p>
                  <div className="flex flex-wrap gap-4">
                    <ChromeButton variant="gold" size="lg" className="rounded-full">
                      Join Discord
                    </ChromeButton>
                    <ChromeButton variant="glass" size="lg" className="rounded-full bg-white/10 text-white">
                      Connect Wallet
                    </ChromeButton>
                  </div>
                </ChromeCard>
                
                <ChromeCard variant="dark" glow={true} className="p-8 border border-white/10 backdrop-blur-md">
                  <div className="text-5xl font-light text-white mb-3">Wed</div>
                  <div className="text-3xl font-light text-red-500 mb-6">17th</div>
                  
                  <div className="mb-8">
                    <div className="text-xl text-white">18:00 UTC</div>
                    <div className="text-gray-300">Community Town Hall</div>
                    <div className="text-gray-300">Main Plaza</div>
                  </div>
                  
                  <ChromeButton variant="chrome" size="lg" className="rounded-full w-full">
                    Join Event
                  </ChromeButton>
                </ChromeCard>
              </div>
            </div>
          </div>
        </section>
        
        {/* Live Rooms Section - Redesigned with red/black/chrome theme */}
        <section className="py-12 bg-black/80 backdrop-blur-sm relative">
          <div className="absolute inset-y-0 left-1/4 w-px bg-gradient-to-b from-red-500/0 via-red-500/50 to-red-500/0"></div>
          <div className="absolute inset-y-0 right-1/4 w-px bg-gradient-to-b from-red-500/0 via-red-500/50 to-red-500/0"></div>
          
          <div className="container mx-auto px-4">
            <div className="flex justify-between items-center mb-8">
              <h2 className="text-3xl font-light tracking-tight flex items-center">
                <span className="inline-block w-8 h-8 bg-red-500 rounded-full mr-3"></span>
                Live Rooms (2)
              </h2>
              <ChromeButton variant="glass" size="sm" className="rounded-full bg-white/10">
                See All
              </ChromeButton>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {liveRooms.map((room, index) => (
                <div key={index} className="relative overflow-hidden rounded-lg h-64 group">
                  <img 
                    src={room.image} 
                    alt={room.title} 
                    className="w-full h-full object-cover opacity-70 transition-all duration-300 group-hover:opacity-50"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-black/60 to-transparent p-6 flex flex-col justify-end">
                    <div className="bg-red-600 text-white text-xs px-2 py-1 rounded-sm w-fit mb-2">
                      {room.type}
                    </div>
                    <h3 className="text-2xl font-light text-white mb-1">{room.title}</h3>
                    <p className="text-white/80 text-sm mb-3">
                      for {room.type === "Creative" ? "designers" : "community builders"}!
                    </p>
                    <div className="flex justify-between items-center">
                      <span className="text-white/80 text-sm">{room.followers} Followers</span>
                      <ChromeButton variant="chrome" size="sm" className="rounded-sm">
                        Join
                      </ChromeButton>
                    </div>
                  </div>
                  <div className="absolute top-3 right-3 w-2 h-2 bg-red-500 rounded-full animate-pulse"></div>
                </div>
              ))}
              
              <div className="bg-gradient-to-br from-gray-900 to-black rounded-lg border border-white/10 p-6 h-64 flex flex-col justify-center items-center">
                <div className="w-16 h-16 rounded-full bg-gray-800 flex items-center justify-center mb-4 shadow-md border border-white/10">
                  <Plus size={24} className="text-red-500" />
                </div>
                <h3 className="text-xl font-light mb-2 text-center">Create Your Own Room</h3>
                <p className="text-gray-400 text-sm text-center mb-4">
                  Start a discussion or showcase your creations
                </p>
                <ChromeButton variant="chrome" size="sm" className="rounded-full">
                  Create Room
                </ChromeButton>
              </div>
            </div>
          </div>
        </section>
        
        {/* Programs Section - Now with red/black/silver theme */}
        <section className="py-16 relative">
          <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-red-500/0 via-red-500/50 to-red-500/0"></div>
          <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-red-500/0 via-red-500/50 to-red-500/0"></div>
          
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-light mb-2 text-center tracking-tight">Community Programs</h2>
            <div className="w-16 h-1 bg-red-500 mx-auto mb-10"></div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
              {[
                {
                  title: "Junior Creators",
                  age: "8-13 years",
                  description: "For kids aged 8-13 to explore fundamentals and fun.",
                  color: "border-l-4 border-red-500",
                  number: "01"
                },
                {
                  title: "Youth Program", 
                  age: "13-18 years",
                  description: "For teens aged 13-18 to develop techniques and competitive skills.",
                  color: "border-l-4 border-red-500",
                  number: "02"
                },
                {
                  title: "Adult Program",
                  age: "18+",
                  description: "For creators of all levels, from beginner to advanced.",
                  color: "border-l-4 border-red-500",
                  number: "03"
                },
                {
                  title: "Pro Mentorship",
                  age: "By application",
                  description: "Intensive mentoring for serious metaverse creators.",
                  color: "border-l-4 border-red-500", 
                  number: "04"
                }
              ].map((program, index) => (
                <ChromeCard 
                  key={index} 
                  variant="dark"
                  className={`${program.color} overflow-hidden shadow-lg backdrop-blur-sm`}
                >
                  <div className="p-6">
                    <div className="text-4xl font-thin text-gray-700 absolute top-2 right-3">{program.number}</div>
                    <div className="text-sm font-medium mb-2 text-gray-400">{program.age}</div>
                    <h3 className="text-2xl font-light mb-2 text-white">{program.title}</h3>
                    <p className="text-sm mb-6 text-gray-300">{program.description}</p>
                    <ChromeButton 
                      variant="glass" 
                      size="sm" 
                      className="rounded-sm bg-white/5 text-white"
                    >
                      Learn More <ArrowRight size={14} />
                    </ChromeButton>
                  </div>
                </ChromeCard>
              ))}
            </div>
          </div>
        </section>
        
        {/* Events Section - Red/Black theme with silver accents */}
        <section className="py-16 bg-black/90 backdrop-blur-sm">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-light mb-2 text-center tracking-tight flex justify-center items-center">
              <span className="inline-block w-3 h-3 bg-red-500 rounded-full mr-3"></span>
              Upcoming Events
              <span className="inline-block w-3 h-3 bg-red-500 rounded-full ml-3"></span>
            </h2>
            <div className="w-16 h-px bg-red-500 mx-auto mb-10"></div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
              {upcomingEvents.map((event, index) => (
                <ChromeCard key={index} variant="glass" className="border border-white/10 backdrop-blur-md">
                  <div className={`h-1 ${index === 0 ? "bg-red-500" : index === 1 ? "bg-gray-500" : "bg-white/30"}`}></div>
                  <div className="p-6">
                    <div className="flex items-center mb-4">
                      <div className="bg-black/70 backdrop-blur-sm border border-white/10 rounded-sm px-3 py-2 text-center mr-4">
                        <div className="text-xs text-gray-400">{event.date.split(",")[0].split(" ")[0]}</div>
                        <div className="text-xl font-light text-white">{event.date.split(",")[0].split(" ")[1]}</div>
                      </div>
                      <div>
                        <h3 className="font-medium mb-1 text-white">{event.title}</h3>
                        <p className="text-xs text-gray-400">{event.time}</p>
                      </div>
                    </div>
                    <p className="text-sm text-gray-300 mb-4">{event.description}</p>
                    <div className="flex items-center text-xs text-gray-400 mb-4">
                      <MapPin size={12} className="mr-1" />
                      <span>{event.location}</span>
                    </div>
                    <ChromeButton variant="chrome" size="sm" className="w-full rounded-sm">
                      RSVP
                    </ChromeButton>
                  </div>
                </ChromeCard>
              ))}
            </div>
          </div>
        </section>
        
        {/* Creator Spotlight - Clean, chrome style */}
        <section className="py-16 relative">
          <div className="absolute inset-y-0 left-0 w-px bg-gradient-to-b from-red-500/0 via-red-500/50 to-red-500/0"></div>
          <div className="absolute inset-y-0 right-0 w-px bg-gradient-to-b from-red-500/0 via-red-500/50 to-red-500/0"></div>
          
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-light mb-8 text-center tracking-tight">Creator Spotlight</h2>
            
            <ChromeCard variant="dark" glow={true} className="max-w-5xl mx-auto border border-white/10 p-8 backdrop-blur-md">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {spotlightCreators.map((creator, index) => (
                  <div key={index} className="bg-gradient-to-b from-gray-900 to-black rounded-sm border border-white/10 p-4 flex flex-col items-center text-center">
                    <div className="w-20 h-20 rounded-full overflow-hidden mb-4 border-2 border-red-500 shadow-md">
                      <img src={creator.avatar} alt={creator.name} className="w-full h-full object-cover" />
                    </div>
                    <h3 className="font-medium mb-1 text-white">{creator.name}</h3>
                    <p className="text-sm text-red-400 font-medium mb-2">{creator.project}</p>
                    <p className="text-xs text-gray-400 mb-4">{creator.description}</p>
                    <ChromeButton variant="glass" size="sm" className="mt-auto rounded-sm bg-white/5 text-white">
                      Visit Project
                    </ChromeButton>
                  </div>
                ))}
              </div>
              
              <div className="mt-8 text-center">
                <ChromeButton variant="chrome" className="rounded-sm">
                  View All Creators <ArrowRight size={16} />
                </ChromeButton>
              </div>
            </ChromeCard>
          </div>
        </section>
        
        {/* Supported Devices - Red, black, chrome theme */}
        <section className="py-16 bg-gradient-to-br from-black to-gray-900 relative">
          <div className="absolute top-0 right-0 w-48 h-48 bg-red-600/20 rounded-full blur-3xl"></div>
          
          <div className="container mx-auto px-4 relative z-10">
            <h2 className="text-3xl font-light mb-3 text-center tracking-tight">Devices Supported</h2>
            <p className="text-center text-gray-400 max-w-2xl mx-auto mb-12">
              Experience the Aesthetics Rebellion metaverse across all your devices with our responsive design and immersive VR support.
            </p>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
              {supportedDevices.map((device, index) => (
                <ChromeCard
                  key={index}
                  variant="glass"
                  className="bg-black/50 backdrop-blur-md border border-white/10 rounded-sm p-6 hover:border-red-500/50 transition-all duration-300"
                >
                  <div className="bg-gradient-to-br from-gray-800 to-gray-900 w-16 h-16 rounded-sm flex items-center justify-center mb-4 mx-auto border border-white/10">
                    {React.cloneElement(device.icon, { className: 'text-red-500' })}
                  </div>
                  <h3 className="text-xl font-light mb-3 text-center text-white">{device.name}</h3>
                  <p className="text-gray-400 text-sm text-center">{device.description}</p>
                  
                  {device.name === "VR Headsets" && (
                    <div className="mt-4 text-center">
                      <span className="inline-flex items-center px-2.5 py-0.5 rounded-sm text-xs font-medium bg-red-500/20 text-red-400 border border-red-500/30">
                        WebXR Compatible
                      </span>
                    </div>
                  )}
                </ChromeCard>
              ))}
            </div>
          </div>
        </section>
        
        {/* Learning & Tools */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
              <ChromeCard variant="dark" className="p-8 border border-white/10 backdrop-blur-md">
                <div className="flex items-center mb-6">
                  <div className="bg-red-500/20 w-12 h-12 rounded-sm flex items-center justify-center mr-4">
                    <BookIcon className="h-6 w-6 text-red-500" />
                  </div>
                  <div>
                    <h2 className="text-2xl font-light text-white">Start Learning</h2>
                    <p className="text-gray-400 text-sm">New to creation? Our step-by-step tutorials will guide you through the basics.</p>
                  </div>
                </div>
                
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
                  <div className="bg-gradient-to-br from-gray-900 to-black border border-white/5 rounded-sm p-4">
                    <h3 className="font-medium mb-1 text-white">Introduction to Creation</h3>
                    <p className="text-xs text-gray-400 mb-2">10 mins</p>
                    <ChromeButton variant="glass" size="sm" className="rounded-sm bg-white/5 text-white">
                      Start <ArrowRight size={12} />
                    </ChromeButton>
                  </div>
                  <div className="bg-gradient-to-br from-gray-900 to-black border border-white/5 rounded-sm p-4">
                    <h3 className="font-medium mb-1 text-white">Creating Your First Avatar</h3>
                    <p className="text-xs text-gray-400 mb-2">15 mins</p>
                    <ChromeButton variant="glass" size="sm" className="rounded-sm bg-white/5 text-white">
                      Start <ArrowRight size={12} />
                    </ChromeButton>
                  </div>
                </div>
                
                <ChromeButton variant="chrome" size="sm" className="rounded-sm w-full">
                  View all tutorials <ArrowRight size={14} />
                </ChromeButton>
              </ChromeCard>
              
              <ChromeCard variant="dark" className="p-8 border border-white/10 backdrop-blur-md">
                <div className="flex items-center mb-6">
                  <div className="bg-red-500/20 w-12 h-12 rounded-sm flex items-center justify-center mr-4">
                    <ToolIcon className="h-6 w-6 text-red-500" />
                  </div>
                  <div>
                    <h2 className="text-2xl font-light text-white">Creation Tools</h2>
                    <p className="text-gray-400 text-sm">Powerful tools for building avatars, worlds, and interactive experiences.</p>
                  </div>
                </div>
                
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
                  <div className="bg-gradient-to-br from-gray-900 to-black border border-white/5 rounded-sm p-4">
                    <h3 className="font-medium mb-1 text-white">Creator Toolkit</h3>
                    <p className="text-xs text-gray-400 mb-2">Beginner</p>
                    <ChromeButton variant="glass" size="sm" className="rounded-sm bg-white/5 text-white">
                      Launch <ArrowRight size={12} />
                    </ChromeButton>
                  </div>
                  <div className="bg-gradient-to-br from-gray-900 to-black border border-white/5 rounded-sm p-4">
                    <h3 className="font-medium mb-1 text-white">Avatar Studio</h3>
                    <p className="text-xs text-gray-400 mb-2">Intermediate</p>
                    <ChromeButton variant="glass" size="sm" className="rounded-sm bg-white/5 text-white">
                      Launch <ArrowRight size={12} />
                    </ChromeButton>
                  </div>
                </div>
                
                <ChromeButton variant="chrome" size="sm" className="rounded-sm w-full">
                  View all tools <ArrowRight size={14} />
                </ChromeButton>
              </ChromeCard>
            </div>
          </div>
        </section>
        
        {/* Guidelines Section */}
        <section className="py-16 bg-black/90 backdrop-blur-sm">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-light mb-2 text-center tracking-tight">Community Guidelines</h2>
            <div className="w-16 h-px bg-red-500 mx-auto mb-10"></div>
            
            <div className="max-w-3xl mx-auto">
              <ChromeCard variant="dark" className="border border-white/10 rounded-sm p-8 backdrop-blur-md">
                <Accordion type="single" collapsible className="w-full">
                  {communityGuidelines.map((guideline, index) => (
                    <AccordionItem key={index} value={`item-${index}`} className="border-b border-gray-800">
                      <AccordionTrigger className="text-left font-medium py-4 hover:no-underline text-white">
                        {guideline.title}
                      </AccordionTrigger>
                      <AccordionContent className="text-gray-400 pb-4">
                        {guideline.content}
                      </AccordionContent>
                    </AccordionItem>
                  ))}
                </Accordion>
              </ChromeCard>
              
              <div className="mt-12 text-center">
                <h3 className="text-2xl font-light mb-4 text-white">Ready to join the community?</h3>
                <div className="flex flex-wrap justify-center gap-4 mt-6">
                  <ChromeButton variant="gold" className="rounded-sm">
                    Join Discord
                  </ChromeButton>
                  <ChromeButton variant="chrome" className="rounded-sm">
                    Create Account
                  </ChromeButton>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

// Icons needed for the new design
const BookIcon = ({ className }) => (
  <svg 
    xmlns="http://www.w3.org/2000/svg" 
    className={className} 
    viewBox="0 0 24 24" 
    fill="none" 
    stroke="currentColor" 
    strokeWidth="2" 
    strokeLinecap="round" 
    strokeLinejoin="round"
  >
    <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"></path>
    <path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"></path>
  </svg>
);

const ToolIcon = ({ className }) => (
  <svg 
    xmlns="http://www.w3.org/2000/svg" 
    className={className} 
    viewBox="0 0 24 24" 
    fill="none" 
    stroke="currentColor" 
    strokeWidth="2" 
    strokeLinecap="round" 
    strokeLinejoin="round"
  >
    <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"></path>
  </svg>
);

export default Community;
