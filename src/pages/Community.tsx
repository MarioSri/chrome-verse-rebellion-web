
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
import { Monitor, Tablet, Smartphone, Headset } from "lucide-react";

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
      description: "Submit your digital art for our curated exhibition."
    },
    {
      title: "Builder Contest",
      date: "June 15, 2025",
      description: "Design a new landmark for the central plaza."
    },
    {
      title: "Community Meetup",
      date: "June 22, 2025",
      description: "Join us for a virtual gathering and Q&A with the dev team."
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
  
  return (
    <div className="min-h-screen bg-dark text-white">
      <NavigationBar />
      <main className="pt-24 pb-16">
        <section className="py-16 bg-gradient-to-b from-dark-lighter to-dark relative overflow-hidden">
          <div className="container mx-auto px-4 text-center relative z-10">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">Join the Rebellion Community</h1>
            <p className="text-xl text-white/80 max-w-3xl mx-auto mb-12">
              Connect with creators, explorers, and builders in our growing metaverse community.
              Share, learn, and build together in the next digital frontier.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <ChromeButton variant="gold" size="lg">
                Join Discord
              </ChromeButton>
              <ChromeButton variant="chrome" size="lg">
                Connect Wallet
              </ChromeButton>
              <ChromeButton variant="glass" size="lg">
                Start Creating
              </ChromeButton>
            </div>
          </div>
          <div className="absolute -bottom-24 left-0 w-full h-48 bg-noise opacity-10"></div>
        </section>
        
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              <div>
                <h2 className="text-3xl font-bold mb-6">Forum Highlights</h2>
                <ChromeCard variant="chrome" className="p-6">
                  <div className="space-y-4">
                    <div className="border-b border-white/10 pb-4">
                      <h3 className="font-bold mb-1">New Planet Creation Guide</h3>
                      <p className="text-sm text-white/60 mb-2">Posted by ModeratorX • 2 days ago</p>
                      <div className="flex justify-between">
                        <span className="text-sm">Comments: 24</span>
                        <a href="#" className="text-sm text-blue-400 hover:underline">Read →</a>
                      </div>
                    </div>
                    <div className="border-b border-white/10 pb-4">
                      <h3 className="font-bold mb-1">Weekly Creator Showcase</h3>
                      <p className="text-sm text-white/60 mb-2">Posted by AR_Team • 3 days ago</p>
                      <div className="flex justify-between">
                        <span className="text-sm">Comments: 18</span>
                        <a href="#" className="text-sm text-blue-400 hover:underline">Read →</a>
                      </div>
                    </div>
                    <div>
                      <h3 className="font-bold mb-1">ART Token Governance Proposal</h3>
                      <p className="text-sm text-white/60 mb-2">Posted by TokenHolder_42 • 4 days ago</p>
                      <div className="flex justify-between">
                        <span className="text-sm">Comments: 56</span>
                        <a href="#" className="text-sm text-blue-400 hover:underline">Read →</a>
                      </div>
                    </div>
                  </div>
                  <div className="mt-6">
                    <a href="#" className="text-blue-400 hover:underline">Visit Forum →</a>
                  </div>
                </ChromeCard>
              </div>
              
              <div>
                <h2 className="text-3xl font-bold mb-6">Creator Spotlight</h2>
                <div className="space-y-4">
                  {spotlightCreators.map((creator, index) => (
                    <ChromeCard 
                      key={index} 
                      variant={index === 0 ? "chrome" : "glass"} 
                      className="p-4 flex items-center space-x-4"
                    >
                      <div className="w-14 h-14 rounded-full overflow-hidden bg-white/10">
                        <img src={creator.avatar} alt={creator.name} className="w-full h-full object-cover" />
                      </div>
                      <div className="flex-1">
                        <h3 className="font-bold">{creator.name}</h3>
                        <p className="text-sm text-white/80 font-semibold">{creator.project}</p>
                        <p className="text-sm text-white/60">{creator.description}</p>
                      </div>
                    </ChromeCard>
                  ))}
                  <div className="text-center mt-6">
                    <a href="#" className="text-blue-400 hover:underline">View All Creators →</a>
                  </div>
                </div>
              </div>
              
              <div>
                <h2 className="text-3xl font-bold mb-6">Events & Contests</h2>
                <ChromeCard variant="chrome" className="p-6">
                  <div className="space-y-6">
                    {upcomingEvents.map((event, index) => (
                      <div key={index} className={index < upcomingEvents.length - 1 ? "pb-4 border-b border-white/10" : ""}>
                        <div className="bg-white/10 text-xs font-semibold px-2 py-1 rounded-full inline-block mb-2">
                          {event.date}
                        </div>
                        <h3 className="font-bold mb-1">{event.title}</h3>
                        <p className="text-sm text-white/60 mb-2">{event.description}</p>
                        <a href="#" className="text-sm text-blue-400 hover:underline">Learn more</a>
                      </div>
                    ))}
                  </div>
                </ChromeCard>
                <ChromeCard variant="glass" className="p-6 mt-6">
                  <h3 className="font-bold mb-4">Top Contributors</h3>
                  <div className="space-y-3">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-2">
                        <div className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center text-sm font-bold">
                          1
                        </div>
                        <span>DigitalArtist99</span>
                      </div>
                      <span className="text-gold">1,240 pts</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-2">
                        <div className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center text-sm font-bold">
                          2
                        </div>
                        <span>MetaBuilder42</span>
                      </div>
                      <span className="text-gold">980 pts</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-2">
                        <div className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center text-sm font-bold">
                          3
                        </div>
                        <span>VoxelQueen</span>
                      </div>
                      <span className="text-gold">870 pts</span>
                    </div>
                  </div>
                </ChromeCard>
              </div>
            </div>
          </div>
        </section>
        
        {/* Devices Supported Section */}
        <section className="py-16 bg-dark-lighter">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold mb-8 text-center">Devices Supported</h2>
            <p className="text-center text-white/70 max-w-2xl mx-auto mb-12">
              Experience the Aesthetics Rebellion metaverse across all your devices with our responsive design and immersive VR support.
            </p>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
              {supportedDevices.map((device, index) => (
                <ChromeCard 
                  key={index} 
                  variant={device.name === "VR Headsets" ? "chrome" : "glass"} 
                  className="p-6 text-center hover:scale-105 transition-transform duration-300"
                >
                  <div className="flex flex-col items-center">
                    {device.icon}
                    <h3 className="text-xl font-bold mb-2">{device.name}</h3>
                    <p className="text-white/70 text-sm">{device.description}</p>
                  </div>
                  
                  {device.name === "VR Headsets" && (
                    <div className="mt-4 pt-4 border-t border-white/10">
                      <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-gold text-dark">
                        WebXR Compatible
                      </span>
                    </div>
                  )}
                </ChromeCard>
              ))}
            </div>
            
            <div className="mt-12 text-center">
              <ChromeButton variant="gold" size="lg">
                Try VR Experience
              </ChromeButton>
              <p className="text-white/60 text-sm mt-4">
                Requires a WebXR-compatible browser and VR headset
              </p>
            </div>
          </div>
        </section>
        
        <section className="py-16 bg-dark">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold mb-8 text-center">Community Guidelines</h2>
            <div className="max-w-3xl mx-auto">
              <ChromeCard variant="chrome" className="p-6">
                <Accordion type="single" collapsible className="w-full">
                  {communityGuidelines.map((guideline, index) => (
                    <AccordionItem key={index} value={`item-${index}`}>
                      <AccordionTrigger className="text-left font-bold">
                        {guideline.title}
                      </AccordionTrigger>
                      <AccordionContent className="text-white/70">
                        {guideline.content}
                      </AccordionContent>
                    </AccordionItem>
                  ))}
                </Accordion>
              </ChromeCard>
              
              <div className="mt-12 text-center">
                <h3 className="text-2xl font-bold mb-4">Ready to join the community?</h3>
                <div className="flex flex-wrap justify-center gap-4 mt-6">
                  <ChromeButton variant="gold">
                    Join Discord
                  </ChromeButton>
                  <ChromeButton variant="chrome">
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

export default Community;
