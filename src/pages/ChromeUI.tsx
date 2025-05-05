
import React from "react";
import { ChromeButton } from "@/components/ui/chrome-button";
import { ChromeCard } from "@/components/ui/chrome-card";
import { 
  ChromeIconButton, 
  ChromeDateWidget, 
  ChromeMediaWidget, 
  ChromeTutorialButton,
  ChromeHeader
} from "@/components/ui/chrome-widgets";
import { Play, ArrowUpRight, Plus, Lock, Search, Calendar } from "lucide-react";

const ChromeUI = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-100 to-gray-200 py-16 px-4">
      <div className="container mx-auto">
        <header className="text-center mb-16">
          <h1 className="text-4xl font-display font-light mb-4">
            How to design <span className="text-gradient-gold">chrome buttons</span>
          </h1>
          <p className="text-gray-600">Chromify UI©</p>
        </header>

        <div className="max-w-3xl mx-auto">
          {/* Header Widget Demo */}
          <div className="mb-16">
            <h2 className="text-xl font-display mb-6">Chrome Header Widget</h2>
            <ChromeHeader className="w-full max-w-md mx-auto" />
          </div>
          
          {/* Button Styles */}
          <div className="mb-16">
            <h2 className="text-xl font-display mb-6">Chrome Button Styles</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="flex flex-col items-center">
                <ChromeButton>Design</ChromeButton>
                <p className="mt-4 text-sm text-center text-gray-600">Standard Chrome Button</p>
              </div>
              <div className="flex flex-col items-center">
                <ChromeButton variant="gold">Generate</ChromeButton>
                <p className="mt-4 text-sm text-center text-gray-600">Gold Chrome Button</p>
              </div>
              <div className="flex flex-col items-center">
                <ChromeButton variant="glass">Discover</ChromeButton>
                <p className="mt-4 text-sm text-center text-gray-600">Glass Button</p>
              </div>
            </div>
          </div>

          {/* Icon Buttons */}
          <div className="mb-16">
            <h2 className="text-xl font-display mb-6">Chrome Icon Buttons</h2>
            <div className="flex flex-wrap justify-center gap-6">
              <ChromeIconButton>
                <Plus size={16} />
              </ChromeIconButton>
              <ChromeIconButton variant="dark">
                <Play size={16} />
              </ChromeIconButton>
              <ChromeIconButton>
                <Search size={16} />
              </ChromeIconButton>
              <ChromeIconButton variant="dark">
                <Lock size={16} />
              </ChromeIconButton>
            </div>
          </div>

          {/* Tutorial Button */}
          <div className="mb-16">
            <h2 className="text-xl font-display mb-6">Tutorial Button</h2>
            <div className="flex justify-center">
              <ChromeTutorialButton className="w-44" />
            </div>
          </div>

          {/* Card Examples */}
          <div className="mb-16">
            <h2 className="text-xl font-display mb-6">Chrome Cards</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <ChromeCard className="p-6">
                <h3 className="font-medium mb-2">Play with shapes of the buttons</h3>
                <p className="text-sm text-gray-600">Rules are the same.</p>
              </ChromeCard>
              
              <ChromeCard variant="dark" className="p-6">
                <h3 className="font-medium text-white mb-2">Create more complex graphic elements</h3>
                <p className="text-sm text-gray-400">Combine shapes and effects.</p>
              </ChromeCard>

              <ChromeCard variant="glass" glow={true} className="p-6">
                <h3 className="font-medium text-white mb-2">Glowing Glass Effect</h3>
                <p className="text-sm text-white/70">With subtle glow behind.</p>
              </ChromeCard>

              <ChromeCard variant="chrome" shadow="lg" className="p-6 flex items-center">
                <div className="mr-4">
                  <Lock size={24} className="text-gray-700" />
                </div>
                <div>
                  <h3 className="font-medium mb-1">Lock car</h3>
                  <p className="text-xs text-gray-600">Vehicle secured.</p>
                </div>
              </ChromeCard>
            </div>
          </div>

          {/* Widget Examples */}
          <div className="mb-16">
            <h2 className="text-xl font-display mb-6">Specialized Widgets</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
              <ChromeDateWidget day="Sun" date="25" className="h-16 w-20 mx-auto" />
              
              <ChromeCard variant="glass" rounded="2xl" className="p-4 flex items-center justify-center">
                <div className="flex flex-col items-center">
                  <Calendar size={20} className="mb-2 text-white" />
                  <p className="text-xs text-white">00:32</p>
                </div>
              </ChromeCard>
              
              <ChromeMediaWidget className="w-full" />
            </div>
          </div>
          
          {/* Demo Card */}
          <div className="mb-16">
            <h2 className="text-xl font-display mb-6">Card With Chrome Button</h2>
            <ChromeCard className="p-8 max-w-md mx-auto">
              <div className="mb-6 text-center">
                <div className="w-16 h-16 rounded-full bg-gradient-to-b from-gray-300 to-gray-500 mx-auto mb-4 flex items-center justify-center">
                  <span className="text-xl font-bold text-white">S</span>
                </div>
                <h3 className="text-lg font-medium mb-1">Shinique©</h3>
                <p className="text-sm text-gray-600 mb-6">Shinique© is an intelligent and engaging AI assistant who adapts her tone and style for the best user experience.</p>
              </div>
              <ChromeButton className="w-full">Discover</ChromeButton>
            </ChromeCard>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChromeUI;
