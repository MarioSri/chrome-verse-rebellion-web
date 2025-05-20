
import React from "react";
import { ChromeButton } from "@/components/ui/chrome-button";
import { ChromeCard } from "@/components/ui/chrome-card";
import { 
  ChromeIconButton, 
  ChromeDateWidget, 
  ChromeMediaWidget, 
  ChromeTutorialButton,
  ChromeHeader,
  ChromeFeatureCard,
  ChromeLockWidget,
  ChromeShinique
} from "@/components/ui/chrome-widgets";
import { Play, ArrowUpRight, Plus, Lock, Search, Calendar, Star } from "lucide-react";

const ChromeUI = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-100 to-gray-200 py-16 px-4">
      <div className="container mx-auto">
        <header className="text-center mb-16">
          <h1 className="text-4xl font-light mb-4 tracking-tight">
            <span className="text-gradient-gold">Chrome UI Elements</span>
          </h1>
          <p className="text-gray-600">Chromify UI©</p>
        </header>

        <div className="max-w-3xl mx-auto">
          {/* Header Widget Demo */}
          <div className="mb-16">
            <h2 className="text-xl font-light mb-6 tracking-tight">Chrome Header Widget</h2>
            <ChromeHeader className="w-full max-w-md mx-auto bg-white/80 backdrop-blur-md shadow-md" />
          </div>
          
          {/* Button Styles */}
          <div className="mb-16">
            <h2 className="text-xl font-light mb-6 tracking-tight">Chrome Button Styles</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="flex flex-col items-center">
                <ChromeButton className="rounded-full">Generate</ChromeButton>
                <p className="mt-4 text-sm text-center text-gray-600">Standard Chrome Button</p>
              </div>
              <div className="flex flex-col items-center">
                <ChromeButton variant="gold" className="rounded-full" glow>Generate</ChromeButton>
                <p className="mt-4 text-sm text-center text-gray-600">Gold Chrome Button</p>
              </div>
              <div className="flex flex-col items-center">
                <ChromeButton variant="dark" className="rounded-full">Generate</ChromeButton>
                <p className="mt-4 text-sm text-center text-gray-600">Dark Button</p>
              </div>
            </div>
          </div>

          {/* Icon Buttons */}
          <div className="mb-16">
            <h2 className="text-xl font-light mb-6 tracking-tight">Chrome Icon Buttons</h2>
            <div className="flex flex-wrap justify-center gap-6">
              <ChromeIconButton className="bg-white shadow-md">
                <Plus size={16} />
              </ChromeIconButton>
              <ChromeIconButton variant="dark">
                <Star size={16} />
              </ChromeIconButton>
              <ChromeIconButton variant="silver">
                <Search size={16} />
              </ChromeIconButton>
              <ChromeIconButton variant="dark" glow>
                <ArrowUpRight size={16} />
              </ChromeIconButton>
            </div>
          </div>

          {/* Date Widget */}
          <div className="mb-16">
            <h2 className="text-xl font-light mb-6 tracking-tight">Date Widget</h2>
            <div className="flex justify-center">
              <ChromeDateWidget day="Sun" date="25" className="w-20 h-20" />
            </div>
          </div>

          {/* Card Examples */}
          <div className="mb-16">
            <h2 className="text-xl font-light mb-6 tracking-tight">Chrome Cards</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <ChromeCard className="p-6 bg-white/80 backdrop-blur-sm rounded-2xl shadow-md">
                <h3 className="font-medium mb-2">Generate</h3>
                <p className="text-sm text-gray-600">Create chrome buttons in different color palettes.</p>
              </ChromeCard>
              
              <ChromeCard variant="dark" className="p-6 rounded-2xl shadow-md">
                <h3 className="font-medium text-white mb-2">Create more complex graphic elements</h3>
                <p className="text-sm text-gray-400">Combine shapes and effects.</p>
              </ChromeCard>

              <ChromeCard variant="glass" glow className="p-6 bg-white/50 backdrop-blur-md rounded-2xl shadow-md">
                <h3 className="font-medium text-gray-800 mb-2">Glowing Glass Effect</h3>
                <p className="text-sm text-gray-600">With subtle glow behind.</p>
              </ChromeCard>

              <ChromeLockWidget className="rounded-2xl" />
            </div>
          </div>

          {/* Media Widget */}
          <div className="mb-16">
            <h2 className="text-xl font-light mb-6 tracking-tight">Media Widget</h2>
            <div className="max-w-xs mx-auto">
              <ChromeMediaWidget className="w-full shadow-md" />
            </div>
          </div>

          {/* Shinique Card */}
          <div className="mb-16">
            <h2 className="text-xl font-light mb-6 tracking-tight">Shinique Card</h2>
            <div className="max-w-xs mx-auto">
              <ChromeShinique className="w-full" />
            </div>
          </div>
          
          {/* Feature Card Grid */}
          <div className="mb-16">
            <h2 className="text-xl font-light mb-6 tracking-tight">Feature Cards</h2>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
              <ChromeFeatureCard 
                icon={<ChromeIconButton variant="dark"><Calendar size={14} /></ChromeIconButton>}
                title="Calendar"
                subtitle="00:32"
              />
              
              <ChromeFeatureCard 
                icon={<ChromeIconButton variant="dark"><Lock size={14} /></ChromeIconButton>}
                title="Lock Car"
                subtitle="Vehicle secured"
                actionLabel="Lock"
              />
              
              <ChromeFeatureCard 
                title="Daft Punk"
                subtitle="Giorgio by Moroder"
                actionLabel="Play"
              />
            </div>
          </div>
          
          {/* Sun 25 Widget */}
          <div className="mb-16">
            <h2 className="text-xl font-light mb-6 tracking-tight">Weather Widget</h2>
            <div className="max-w-md mx-auto">
              <ChromeCard variant="glass" className="p-4 bg-dark-lighter/80 backdrop-blur-lg rounded-xl">
                <div className="flex items-center justify-between">
                  <ChromeIconButton variant="dark">
                    <span className="font-bold text-xs text-white">✦</span>
                  </ChromeIconButton>
                  <ChromeDateWidget day="Sun" date="25" />
                  <ChromeIconButton>
                    <ArrowUpRight size={14} className="text-gray-700" />
                  </ChromeIconButton>
                </div>
              </ChromeCard>
            </div>
          </div>
          
          {/* Lock/Unlock Widget */}
          <div className="mb-16">
            <h2 className="text-xl font-light mb-6 tracking-tight">Locked/Unlocked Widget</h2>
            <div className="max-w-md mx-auto">
              <ChromeCard variant="glass" className="p-3 bg-white/80 backdrop-blur-lg rounded-full">
                <div className="flex items-center justify-between">
                  <ChromeIconButton>
                    <Lock size={14} className="text-gray-400" />
                  </ChromeIconButton>
                  <div className="flex items-center space-x-2 px-3">
                    <ChromeIconButton variant="dark">
                      <Lock size={14} className="text-white" />
                    </ChromeIconButton>
                    <span className="text-gray-700">Locked</span>
                  </div>
                </div>
              </ChromeCard>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChromeUI;
