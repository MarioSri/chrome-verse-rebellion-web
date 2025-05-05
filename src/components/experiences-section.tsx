
import React from "react";
import { ChromeCard } from "./ui/chrome-card";
import { ChromeButton } from "./ui/chrome-button";
import { Calendar, MapPin, Users, ArrowRight } from "lucide-react";

const ExperiencesSection = () => {
  return (
    <section className="py-20 relative overflow-hidden bg-dark-lighter">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center mb-10">
          <div>
            <h2 className="text-3xl md:text-4xl font-display mb-2">
              Join Virtual Events That Break <span className="text-gradient-gold">Boundaries</span>
            </h2>
            <p className="text-white/70">
              From concerts and exhibitions to workshops and meetups, experience entertainment and education like never before.
            </p>
          </div>
          <ChromeButton variant="chrome" className="hidden md:flex items-center gap-2">
            <span>View All Events</span>
            <ArrowRight size={16} />
          </ChromeButton>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <ChromeCard className="col-span-1 lg:col-span-2 relative overflow-hidden min-h-[400px]">
            <div className="absolute inset-0">
              <img 
                src="/placeholder.svg" 
                alt="Virtual Music Festival" 
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-dark to-transparent"></div>
            </div>
            <div className="relative p-6 h-full flex flex-col justify-end">
              <div className="bg-neon-blue/20 text-white px-3 py-1 rounded-full w-fit text-sm mb-4">
                Featured Event
              </div>
              <h3 className="text-2xl md:text-3xl font-display mb-2">Virtual Music Festival</h3>
              <p className="text-white/70 mb-4 max-w-md">
                Experience mind-blowing performances from top artists in our immersive concert venue.
              </p>
              <div className="flex flex-wrap gap-4 mb-6">
                <div className="flex items-center gap-2 text-white/60 text-sm">
                  <Calendar size={14} />
                  <span>Jun 18, 2025, 8:00 PM UTC</span>
                </div>
                <div className="flex items-center gap-2 text-white/60 text-sm">
                  <MapPin size={14} />
                  <span>Neon District</span>
                </div>
                <div className="flex items-center gap-2 text-white/60 text-sm">
                  <Users size={14} />
                  <span>2,800 attending</span>
                </div>
              </div>
              <div className="flex gap-4">
                <ChromeButton variant="gold">RSVP Now</ChromeButton>
                <ChromeButton variant="chrome">Add to Calendar</ChromeButton>
              </div>
            </div>
          </ChromeCard>

          <div className="col-span-1 flex flex-col gap-6">
            <ChromeCard className="p-6 flex flex-col h-48">
              <div className="mb-2">
                <h3 className="text-xl font-display">Digital Art Exhibition</h3>
                <p className="text-white/70 text-sm mb-2">
                  Explore groundbreaking digital art from creators around the world.
                </p>
              </div>
              <div className="mt-auto flex justify-between items-end">
                <div className="flex items-center gap-2 text-white/60 text-xs">
                  <Calendar size={12} />
                  <span>Jun 22, 2025</span>
                </div>
                <ChromeButton variant="chrome" size="sm">Learn More</ChromeButton>
              </div>
            </ChromeCard>

            <ChromeCard className="p-6 flex flex-col h-48">
              <div className="mb-2">
                <h3 className="text-xl font-display">Creator Workshop</h3>
                <p className="text-white/70 text-sm mb-2">
                  Learn advanced building techniques from industry experts.
                </p>
              </div>
              <div className="mt-auto flex justify-between items-end">
                <div className="flex items-center gap-2 text-white/60 text-xs">
                  <Calendar size={12} />
                  <span>Jun 25, 2025</span>
                </div>
                <ChromeButton variant="chrome" size="sm">Learn More</ChromeButton>
              </div>
            </ChromeCard>

            <ChromeCard className="p-6 flex flex-col h-48">
              <div className="mb-2">
                <h3 className="text-xl font-display">More Events Coming Soon</h3>
                <p className="text-white/70 text-sm mb-2">
                  Stay tuned for more exciting virtual experiences and opportunities.
                </p>
              </div>
              <div className="mt-auto flex justify-end">
                <ChromeButton variant="chrome" size="sm">Get Notified</ChromeButton>
              </div>
            </ChromeCard>
          </div>
        </div>
      </div>
    </section>
  );
};

export { ExperiencesSection };
