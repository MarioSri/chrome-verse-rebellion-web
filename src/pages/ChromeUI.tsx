
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
    <div className="min-h-screen bg-gradient-to-b from-[#f5f5f3] to-[#ebe8e4] py-16 px-4">
      <div className="container mx-auto">
        <header className="text-center mb-16">
          <h1 className="text-4xl font-light mb-4 tracking-tight">
            How to design <span className="text-gradient-gold">chrome UI components</span>
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
                <ChromeButton className="rounded-full">Design</ChromeButton>
                <p className="mt-4 text-sm text-center text-gray-600">Standard Chrome Button</p>
              </div>
              <div className="flex flex-col items-center">
                <ChromeButton variant="gold" className="rounded-full">Generate</ChromeButton>
                <p className="mt-4 text-sm text-center text-gray-600">Gold Chrome Button</p>
              </div>
              <div className="flex flex-col items-center">
                <ChromeButton variant="glass" className="rounded-full bg-white/50">Discover</ChromeButton>
                <p className="mt-4 text-sm text-center text-gray-600">Glass Button</p>
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
                <Play size={16} />
              </ChromeIconButton>
              <ChromeIconButton className="bg-white shadow-md">
                <Search size={16} />
              </ChromeIconButton>
              <ChromeIconButton variant="dark">
                <Lock size={16} />
              </ChromeIconButton>
            </div>
          </div>

          {/* Tutorial Button */}
          <div className="mb-16">
            <h2 className="text-xl font-light mb-6 tracking-tight">Tutorial Button</h2>
            <div className="flex justify-center">
              <ChromeTutorialButton className="w-44 bg-white/80 backdrop-blur-sm shadow-md" />
            </div>
          </div>

          {/* Card Examples */}
          <div className="mb-16">
            <h2 className="text-xl font-light mb-6 tracking-tight">Chrome Cards</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <ChromeCard className="p-6 bg-white/80 backdrop-blur-sm rounded-2xl shadow-md">
                <h3 className="font-medium mb-2">Play with shapes of the buttons</h3>
                <p className="text-sm text-gray-600">Rules are the same.</p>
              </ChromeCard>
              
              <ChromeCard variant="dark" className="p-6 rounded-2xl shadow-md">
                <h3 className="font-medium text-white mb-2">Create more complex graphic elements</h3>
                <p className="text-sm text-gray-400">Combine shapes and effects.</p>
              </ChromeCard>

              <ChromeCard variant="glass" glow={true} className="p-6 bg-white/50 backdrop-blur-md rounded-2xl shadow-md">
                <h3 className="font-medium text-gray-800 mb-2">Glowing Glass Effect</h3>
                <p className="text-sm text-gray-600">With subtle glow behind.</p>
              </ChromeCard>

              <ChromeCard variant="chrome" shadow="lg" className="p-6 flex items-center rounded-2xl">
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
            <h2 className="text-xl font-light mb-6 tracking-tight">Specialized Widgets</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
              <div className="flex justify-center">
                <ChromeDateWidget day="Wed" date="17" className="h-20 w-20 mx-auto shadow-md" />
              </div>
              
              <ChromeCard variant="glass" rounded="2xl" className="p-4 flex items-center justify-center bg-white/50 backdrop-blur-sm shadow-md">
                <div className="flex flex-col items-center">
                  <Calendar size={20} className="mb-2 text-gray-600" />
                  <p className="text-xs text-gray-600">00:32</p>
                </div>
              </ChromeCard>
              
              <ChromeMediaWidget className="w-full shadow-md" />
            </div>
          </div>
          
          {/* Demo Card */}
          <div className="mb-16">
            <h2 className="text-xl font-light mb-6 tracking-tight">Card With Chrome Button</h2>
            <ChromeCard className="p-8 max-w-md mx-auto bg-white/80 backdrop-blur-md rounded-2xl shadow-md">
              <div className="mb-6 text-center">
                <div className="w-16 h-16 rounded-full bg-gradient-to-b from-gray-200 to-gray-300 mx-auto mb-4 flex items-center justify-center shadow-md">
                  <span className="text-xl font-bold text-gray-600">S</span>
                </div>
                <h3 className="text-lg font-medium mb-1">Shinique©</h3>
                <p className="text-sm text-gray-600 mb-6">Shinique© is an intelligent and engaging AI assistant who adapts her tone and style for the best user experience.</p>
              </div>
              <ChromeButton className="w-full rounded-full">Discover</ChromeButton>
            </ChromeCard>
          </div>
          
          {/* Event Card - Inspired by Image 1 */}
          <div className="mb-16">
            <h2 className="text-xl font-light mb-6 tracking-tight">Event Card</h2>
            <ChromeCard className="p-8 max-w-md mx-auto bg-white/80 backdrop-blur-md rounded-2xl shadow-md">
              <div className="flex flex-col md:flex-row gap-6">
                <div className="md:w-2/5">
                  <div className="text-4xl font-light mb-1">Wed</div>
                  <div className="text-3xl font-light mb-4">17th</div>
                  
                  <div>
                    <div className="text-lg mb-1">18 PM</div>
                    <div className="text-gray-600">Oxford Street</div>
                    <div className="text-gray-600">London</div>
                  </div>
                </div>
                
                <div className="md:w-3/5">
                  <h3 className="text-xl font-medium mb-2">Grand opening</h3>
                  <p className="text-gray-600 mb-6 text-sm">Join us for the grand opening of our new store. Be the first to experience our latest collection.</p>
                  
                  <ChromeButton variant="chrome" className="w-full rounded-full">
                    Join
                  </ChromeButton>
                </div>
              </div>
            </ChromeCard>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChromeUI;
