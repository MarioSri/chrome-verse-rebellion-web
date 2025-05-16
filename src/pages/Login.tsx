
import React, { useState } from "react";
import { ChromeButton } from "@/components/ui/chrome-button";
import { WalletConnectionFlow } from "@/components/wallet-connection-flow";
import { Wallet } from "lucide-react";

const Login = () => {
  const [showWalletFlow, setShowWalletFlow] = useState(false);

  return (
    <div className="flex min-h-screen">
      {/* Left half - Image */}
      <div className="relative w-full md:w-1/2 h-screen">
        <div className="absolute inset-0 bg-cover bg-center" 
             style={{ backgroundImage: "url('/lovable-uploads/f6d1b27c-a62a-4428-b627-9a5974786af3.png')" }}>
          <div className="absolute inset-0 bg-black/20 backdrop-blur-sm"></div>
        </div>
        <div className="absolute top-8 left-8 z-10">
          <div className="flex items-center">
            <span className="text-white font-medium text-xl">Gen</span>
            <span className="ml-1 bg-white text-black text-xl px-1 rounded-sm">AI</span>
          </div>
        </div>
      </div>

      {/* Right half - Login form */}
      <div className="w-full md:w-1/2 flex items-center justify-center bg-black p-8">
        <div className="w-full max-w-md space-y-8">
          <div>
            <h1 className="text-3xl font-light text-white mb-6">Unlock the Possibilities</h1>
          </div>

          <div className="space-y-4">
            <button
              className="w-full flex items-center justify-center gap-2 bg-white/5 hover:bg-white/10 border border-white/10 text-white rounded-md px-4 py-3 transition-all"
            >
              <svg viewBox="0 0 24 24" width="18" height="18" xmlns="http://www.w3.org/2000/svg">
                <g transform="matrix(1, 0, 0, 1, 27.009001, -39.238998)">
                  <path fill="#4285F4" d="M -3.264 51.509 C -3.264 50.719 -3.334 49.969 -3.454 49.239 L -14.754 49.239 L -14.754 53.749 L -8.284 53.749 C -8.574 55.229 -9.424 56.479 -10.684 57.329 L -10.684 60.329 L -6.824 60.329 C -4.564 58.239 -3.264 55.159 -3.264 51.509 Z"/>
                  <path fill="#34A853" d="M -14.754 63.239 C -11.514 63.239 -8.804 62.159 -6.824 60.329 L -10.684 57.329 C -11.764 58.049 -13.134 58.489 -14.754 58.489 C -17.884 58.489 -20.534 56.379 -21.484 53.529 L -25.464 53.529 L -25.464 56.619 C -23.494 60.539 -19.444 63.239 -14.754 63.239 Z"/>
                  <path fill="#FBBC05" d="M -21.484 53.529 C -21.734 52.809 -21.864 52.039 -21.864 51.239 C -21.864 50.439 -21.724 49.669 -21.484 48.949 L -21.484 45.859 L -25.464 45.859 C -26.284 47.479 -26.754 49.299 -26.754 51.239 C -26.754 53.179 -26.284 54.999 -25.464 56.619 L -21.484 53.529 Z"/>
                  <path fill="#EA4335" d="M -14.754 43.989 C -12.984 43.989 -11.404 44.599 -10.154 45.789 L -6.734 42.369 C -8.804 40.429 -11.514 39.239 -14.754 39.239 C -19.444 39.239 -23.494 41.939 -25.464 45.859 L -21.484 48.949 C -20.534 46.099 -17.884 43.989 -14.754 43.989 Z"/>
                </g>
              </svg>
              Continue with Google
            </button>
            
            <button
              className="w-full flex items-center justify-center gap-2 bg-white/5 hover:bg-white/10 border border-white/10 text-white rounded-md px-4 py-3 transition-all"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
              </svg>
              Continue with Email
            </button>
            
            <button
              className="w-full flex items-center justify-center gap-2 bg-gradient-to-r from-blue-900 to-blue-600 text-white rounded-full px-4 py-3 transition-all hover:opacity-90"
              onClick={() => setShowWalletFlow(true)}
            >
              <Wallet size={18} />
              Continue with wallet
            </button>
          </div>
          
          <div className="text-xs text-white/50 text-center mt-6">
            By signing in, you agree to Aesthetics Rebellion's Terms of Service,
            <br />Privacy Policy and Wallet Usage Agreement.
          </div>
        </div>
      </div>
      
      <WalletConnectionFlow 
        open={showWalletFlow} 
        onOpenChange={setShowWalletFlow} 
      />
    </div>
  );
};

export default Login;
