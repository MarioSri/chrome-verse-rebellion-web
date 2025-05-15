
import React, { useState } from "react";
import { NavigationBar } from "@/components/navigation-bar";
import { Footer } from "@/components/footer";
import { ChromeCard } from "@/components/ui/chrome-card";
import { ChromeButton } from "@/components/ui/chrome-button";
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/ui/tabs";

const Launcher = () => {
  const [selectedPlatform, setSelectedPlatform] = useState("windows");
  
  return (
    <div className="min-h-screen bg-dark text-white">
      <NavigationBar />
      <main className="pt-24 pb-16">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold mb-4 text-center">Aesthetics Rebellion Launcher</h1>
          <p className="text-center text-gray-300 mb-12 max-w-2xl mx-auto">
            Choose your platform to download and enter the Aesthetics Rebellion Metaverse
          </p>
          
          <div className="max-w-4xl mx-auto">
            <ChromeCard variant="chrome" className="p-6">
              <Tabs defaultValue="windows" className="w-full">
                <TabsList className="grid grid-cols-4 mb-6">
                  <TabsTrigger value="windows" onClick={() => setSelectedPlatform("windows")}>
                    Windows
                  </TabsTrigger>
                  <TabsTrigger value="mac" onClick={() => setSelectedPlatform("mac")}>
                    macOS
                  </TabsTrigger>
                  <TabsTrigger value="vr" onClick={() => setSelectedPlatform("vr")}>
                    VR
                  </TabsTrigger>
                  <TabsTrigger value="web" onClick={() => setSelectedPlatform("web")}>
                    Web
                  </TabsTrigger>
                </TabsList>
                
                <TabsContent value="windows" className="space-y-6">
                  <h2 className="text-2xl font-bold">Windows PC</h2>
                  <p className="text-gray-300">
                    Download the Aesthetics Rebellion client for Windows for the full experience.
                    Minimum requirements: Windows 10, 8GB RAM, DirectX 11 compatible GPU.
                  </p>
                  <div className="flex flex-col sm:flex-row gap-4">
                    <ChromeButton variant="gold" className="flex-1">
                      Download for Windows (64-bit)
                    </ChromeButton>
                    <ChromeButton variant="chrome" className="flex-1">
                      System Requirements
                    </ChromeButton>
                  </div>
                </TabsContent>
                
                <TabsContent value="mac" className="space-y-6">
                  <h2 className="text-2xl font-bold">macOS</h2>
                  <p className="text-gray-300">
                    Download the Aesthetics Rebellion client for macOS for the full experience.
                    Minimum requirements: macOS 10.15 or newer, 8GB RAM, Metal compatible GPU.
                  </p>
                  <div className="flex flex-col sm:flex-row gap-4">
                    <ChromeButton variant="gold" className="flex-1">
                      Download for macOS
                    </ChromeButton>
                    <ChromeButton variant="chrome" className="flex-1">
                      System Requirements
                    </ChromeButton>
                  </div>
                </TabsContent>
                
                <TabsContent value="vr" className="space-y-6">
                  <h2 className="text-2xl font-bold">Virtual Reality</h2>
                  <p className="text-gray-300">
                    Experience the Aesthetics Rebellion metaverse in full immersion with VR support.
                    Compatible with major VR headsets including Oculus, Vive, and Valve Index.
                  </p>
                  <div className="flex flex-col sm:flex-row gap-4">
                    <ChromeButton variant="gold" className="flex-1">
                      Download VR Client
                    </ChromeButton>
                    <ChromeButton variant="chrome" className="flex-1">
                      VR Compatibility
                    </ChromeButton>
                  </div>
                </TabsContent>
                
                <TabsContent value="web" className="space-y-6">
                  <h2 className="text-2xl font-bold">Web Version (Beta)</h2>
                  <p className="text-gray-300">
                    Enter the Aesthetics Rebellion metaverse directly from your browser.
                    Experience may be limited compared to the desktop client.
                  </p>
                  <ChromeButton variant="gold" className="w-full">
                    Launch Web Version
                  </ChromeButton>
                  <div className="mt-4 p-4 bg-white/10 rounded-lg text-sm">
                    <p className="font-semibold mb-2">Compatibility:</p>
                    <ul className="list-disc pl-5 space-y-1">
                      <li>Chrome 90+ (Recommended)</li>
                      <li>Firefox 88+</li>
                      <li>Edge 90+</li>
                      <li>WebXR compatible browser for VR mode</li>
                    </ul>
                  </div>
                </TabsContent>
              </Tabs>
            </ChromeCard>
            
            <div className="mt-12 text-center">
              <h2 className="text-2xl font-bold mb-4">Join the Community</h2>
              <p className="mb-6">
                Connect with other users, creators, and developers in our thriving community.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <ChromeButton>
                  <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path d="M20.317 4.3698a19.7913 19.7913 0 00-4.8851-1.5152.0741.0741 0 00-.0785.0371c-.211.3753-.4447.8648-.608 1.2495-1.8447-.2762-3.68-.2762-5.4868 0-.1634-.3933-.4058-.8742-.6177-1.2495a.077.077 0 00-.0785-.037 19.7363 19.7363 0 00-4.8852 1.515.0699.0699 0 00-.0321.0277C.5334 9.0458-.319 13.5799.0992 18.0578a.0824.0824 0 00.0312.0561c2.0528 1.5076 4.0413 2.4228 5.9929 3.0294a.0777.0777 0 00.0842-.0276c.4616-.6304.8731-1.2952 1.226-1.9942a.076.076 0 00-.0416-.1057c-.6528-.2476-1.2743-.5495-1.8722-.8923a.077.077 0 01-.0076-.1277c.1258-.0943.2517-.1923.3718-.2914a.0743.0743 0 01.0776-.0105c3.9278 1.7933 8.18 1.7933 12.0614 0a.0739.0739 0 01.0785.0095c.1202.099.246.1981.3728.2924a.077.077 0 01-.0066.1276 12.2986 12.2986 0 01-1.873.8914.0766.0766 0 00-.0407.1067c.3604.698.7719 1.3628 1.225 1.9932a.076.076 0 00.0842.0286c1.961-.6067 3.9495-1.5219 6.0023-3.0294a.077.077 0 00.0313-.0552c.5004-5.177-.8382-9.6739-3.5485-13.6604a.061.061 0 00-.0312-.0286zM8.02 15.3312c-1.1825 0-2.1569-1.0857-2.1569-2.419 0-1.3332.9555-2.4189 2.157-2.4189 1.2108 0 2.1757 1.0952 2.1568 2.419 0 1.3332-.9555 2.4189-2.1569 2.4189zm7.9748 0c-1.1825 0-2.1569-1.0857-2.1569-2.419 0-1.3332.9554-2.4189 2.1569-2.4189 1.2108 0 2.1757 1.0952 2.1568 2.419 0 1.3332-.946 2.4189-2.1568 2.4189Z" />
                  </svg>
                  Discord
                </ChromeButton>
                <ChromeButton>
                  <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                  </svg>
                  Twitter
                </ChromeButton>
                <ChromeButton>
                  <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
                  </svg>
                  GitHub
                </ChromeButton>
                <ChromeButton>
                  <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path fillRule="evenodd" d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z" clipRule="evenodd" />
                  </svg>
                  Instagram
                </ChromeButton>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Launcher;
