
import React from "react";
import { NavigationBar } from "@/components/navigation-bar";
import { Footer } from "@/components/footer";
import { useTranslation } from "@/contexts/TranslationContext";
import { ChromeCard } from "@/components/ui/chrome-card";
import { ChromeButton } from "@/components/ui/chrome-button";
import { Link } from "react-router-dom";

const About = () => {
  const { t } = useTranslation();
  
  const teamMembers = [
    {
      name: "Alex Chen",
      role: "Founder & CEO",
      bio: "Alex founded Aesthetics Rebellion with a vision to merge art and technology. With over 15 years of experience in digital experiences, he leads the company's strategic direction.",
      image: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?auto=format&fit=crop&q=80&w=200&h=200"
    },
    {
      name: "Sophia Rodriguez",
      role: "Creative Director",
      bio: "Sophia brings her background in fine arts and digital design to shape the aesthetic vision of our metaverse experiences.",
      image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=200&h=200"
    },
    {
      name: "Marcus Johnson",
      role: "Lead Web3 Developer",
      bio: "Marcus specializes in blockchain technology and has been instrumental in building our decentralized infrastructure.",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=200&h=200"
    },
    {
      name: "Lia Park",
      role: "Head of Experience Design",
      bio: "Lia focuses on creating immersive user experiences that push the boundaries of digital interaction.",
      image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&q=80&w=200&h=200"
    }
  ];

  const milestones = [
    { year: "2021", title: "Company Founded", description: "Aesthetics Rebellion was established with a mission to redefine digital spaces." },
    { year: "2022", title: "First Virtual World", description: "Launch of our first immersive environment, gaining 50,000 users in the first month." },
    { year: "2023", title: "Web3 Integration", description: "Introduction of blockchain technology and our native token to enable true digital ownership." },
    { year: "2024", title: "Creator Platform", description: "Released tools for creators to build and monetize their own virtual experiences." },
    { year: "2025", title: "Global Expansion", description: "Reached 1 million active users across 150 countries." }
  ];

  const partners = [
    "Technological Innovations Corp",
    "Virtual Reality Pioneers",
    "Digital Art Collective",
    "Blockchain Ventures",
    "Future Media Institute"
  ];

  return (
    <div className="min-h-screen bg-dark text-white">
      <NavigationBar />
      <main className="pt-24 pb-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold mb-8 text-gradient-gold">{t.about.title}</h1>
            
            <section className="mb-16">
              <div className="prose prose-invert max-w-none">
                <p className="text-lg leading-relaxed mb-6">
                  Aesthetics Rebellion is a pioneering metaverse platform where art, technology, and community converge to create 
                  unprecedented digital experiences. Founded in 2021, we've been on a mission to challenge the status quo of 
                  virtual worlds by prioritizing aesthetic beauty alongside technical innovation.
                </p>
                <p className="text-lg leading-relaxed mb-6">
                  Our team of artists, developers, and visionaries work together to build spaces where creativity flourishes 
                  and boundaries blur between the physical and digital. We believe in a future where virtual experiences are not 
                  just functional but profoundly moving and transformative.
                </p>
              </div>
            </section>
            
            <section className="mb-16">
              <h2 className="text-3xl font-bold mb-8 border-b border-white/20 pb-2">Our Journey</h2>
              <div className="space-y-8">
                {milestones.map((milestone, index) => (
                  <ChromeCard key={index} variant="glass" className="p-6 relative overflow-hidden">
                    <div className="absolute top-0 left-0 h-full w-1 bg-gradient-to-b from-chrome-light to-chrome-dark"></div>
                    <div className="ml-6">
                      <div className="text-chrome-light font-mono text-sm mb-1">{milestone.year}</div>
                      <h3 className="text-xl font-bold mb-2">{milestone.title}</h3>
                      <p className="text-white/80">{milestone.description}</p>
                    </div>
                  </ChromeCard>
                ))}
              </div>
            </section>
            
            <section className="mb-16">
              <h2 className="text-3xl font-bold mb-8 border-b border-white/20 pb-2">Our Team</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {teamMembers.map((member, index) => (
                  <ChromeCard key={index} variant="chrome" className="p-6 flex flex-col">
                    <div className="flex items-center mb-4">
                      <div className="w-16 h-16 rounded-full overflow-hidden mr-4">
                        <img src={member.image} alt={member.name} className="w-full h-full object-cover" />
                      </div>
                      <div>
                        <h3 className="font-bold text-xl">{member.name}</h3>
                        <p className="text-chrome-light">{member.role}</p>
                      </div>
                    </div>
                    <p className="text-white/80 mb-4">{member.bio}</p>
                    <ChromeButton variant="glass" size="sm" className="mt-auto self-start">
                      Read Full Bio
                    </ChromeButton>
                  </ChromeCard>
                ))}
              </div>
              
              <div className="mt-8 text-center">
                <ChromeButton variant="gold" className="inline-block">
                  <Link to="/careers">Join Our Team</Link>
                </ChromeButton>
              </div>
            </section>
            
            <section className="mb-16">
              <h2 className="text-3xl font-bold mb-8 border-b border-white/20 pb-2">Our Technology</h2>
              <ChromeCard variant="glass" className="p-8">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div className="space-y-4">
                    <h3 className="text-xl font-bold">Built for the Future</h3>
                    <p className="text-white/80">
                      Our platform utilizes cutting-edge technologies including WebGL rendering, 
                      decentralized identity systems, and proprietary compression algorithms to deliver 
                      stunning visuals with minimal hardware requirements.
                    </p>
                    <ChromeButton variant="chrome" size="sm" className="mt-4">
                      <Link to="/web3">Learn About Our Web3 Infrastructure</Link>
                    </ChromeButton>
                  </div>
                  <div className="bg-white/5 rounded-lg h-48 md:h-full flex items-center justify-center">
                    <span className="text-white/30 text-sm">Technology visualization placeholder</span>
                  </div>
                </div>
              </ChromeCard>
            </section>
            
            <section>
              <h2 className="text-3xl font-bold mb-8 border-b border-white/20 pb-2">Our Partners</h2>
              <div className="grid grid-cols-2 md:grid-cols-5 gap-6 text-center">
                {partners.map((partner, index) => (
                  <div key={index} className="p-4 bg-white/5 rounded-lg flex items-center justify-center h-24">
                    <span className="font-medium text-white/70">{partner}</span>
                  </div>
                ))}
              </div>
            </section>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default About;
