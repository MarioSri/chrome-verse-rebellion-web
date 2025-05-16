
import React, { useState } from 'react';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { ChevronLeft, X } from "lucide-react";

type Wallet = {
  name: string;
  icon: string;
  realIcon?: string;
  description: string;
};

const wallets: Wallet[] = [
  {
    name: "Rainbow",
    icon: "🌈",
    realIcon: "/lovable-uploads/b83b5ba5-1395-48af-8f16-eb9925fed41c.png",
    description: "Mobile Wallet and Extension"
  },
  {
    name: "Coinbase Wallet",
    icon: "◻️",
    realIcon: "/lovable-uploads/b83b5ba5-1395-48af-8f16-eb9925fed41c.png",
    description: "Mobile Wallet and Extension"
  },
  {
    name: "MetaMask",
    icon: "🦊",
    realIcon: "/lovable-uploads/b83b5ba5-1395-48af-8f16-eb9925fed41c.png",
    description: "Mobile Wallet and Extension"
  },
  {
    name: "WalletConnect",
    icon: "📲",
    realIcon: "/lovable-uploads/b83b5ba5-1395-48af-8f16-eb9925fed41c.png",
    description: "Mobile Wallet and Extension"
  }
];

type WalletConnectionFlowProps = {
  open: boolean;
  onOpenChange: (open: boolean) => void;
};

export function WalletConnectionFlow({ open, onOpenChange }: WalletConnectionFlowProps) {
  const [showGetWallet, setShowGetWallet] = useState(false);
  const [selectedWallet, setSelectedWallet] = useState<Wallet | null>(null);
  
  const handleSelectWallet = (wallet: Wallet) => {
    setSelectedWallet(wallet);
    setShowGetWallet(true);
  };
  
  const handleBack = () => {
    setShowGetWallet(false);
    setSelectedWallet(null);
  };
  
  const handleClose = () => {
    onOpenChange(false);
    setTimeout(() => {
      setShowGetWallet(false);
      setSelectedWallet(null);
    }, 300);
  };
  
  console.log("WalletConnectionFlow rendering with open:", open);

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-[600px] p-0 gap-0 overflow-hidden bg-white text-black border-0 rounded-xl">
        <div className="flex h-[500px]">
          {/* Left panel - always visible */}
          <div className="w-[40%] border-r border-gray-200 p-6">
            <h2 className="text-2xl font-bold mb-8">Connect a Wallet</h2>
            
            <div>
              <h3 className="text-gray-500 text-sm font-medium mb-4">Popular</h3>
              <div className="space-y-4">
                {wallets.map((wallet) => (
                  <button
                    key={wallet.name}
                    className={`flex items-center w-full gap-3 p-2 hover:bg-gray-100 rounded-md transition-colors ${
                      selectedWallet?.name === wallet.name ? "bg-gray-100" : ""
                    }`}
                    onClick={() => handleSelectWallet(wallet)}
                  >
                    <div className="w-8 h-8 flex items-center justify-center bg-blue-600 rounded-md overflow-hidden">
                      {wallet.name === "Rainbow" && (
                        <img src="/lovable-uploads/b83b5ba5-1395-48af-8f16-eb9925fed41c.png" className="w-8 h-8 object-cover" alt="" />
                      )}
                      {wallet.name === "Coinbase Wallet" && (
                        <div className="bg-blue-500 w-full h-full flex items-center justify-center">
                          <div className="w-4 h-4 bg-white rounded-sm" />
                        </div>
                      )}
                      {wallet.name === "MetaMask" && (
                        <img src="/lovable-uploads/1073cd2e-10f1-455d-9859-c22219efe254.png" className="w-8 h-8 object-cover" alt="" />
                      )}
                      {wallet.name === "WalletConnect" && (
                        <div className="bg-blue-500 w-full h-full flex items-center justify-center">
                          <svg width="16" height="16" viewBox="0 0 24 24" fill="white" xmlns="http://www.w3.org/2000/svg">
                            <path d="M6 9l6 6 6-6" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                          </svg>
                        </div>
                      )}
                    </div>
                    <span className="font-medium">{wallet.name}</span>
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Right panel - conditionally shows content */}
          <div className="w-[60%] relative">
            {/* Close button */}
            <button 
              className="absolute right-4 top-4 p-1 rounded-full hover:bg-gray-100"
              onClick={handleClose}
            >
              <X className="h-5 w-5" />
            </button>
            
            {/* Back button */}
            {showGetWallet && (
              <button
                className="absolute left-4 top-4 p-1 rounded-full hover:bg-gray-100"
                onClick={handleBack}
              >
                <ChevronLeft className="h-5 w-5 text-blue-500" />
              </button>
            )}
            
            {/* Header */}
            <div className="pt-6 px-6 pb-4 border-b border-gray-100">
              <h2 className="text-2xl font-bold">
                {showGetWallet ? "Get a Wallet" : ""}
              </h2>
            </div>
            
            {/* Content */}
            {showGetWallet ? (
              <div className="p-6 space-y-6">
                {/* Wallet list with GET buttons */}
                <div className="space-y-6">
                  {wallets.map((wallet) => (
                    <div key={wallet.name} className="flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <div className="w-12 h-12 flex items-center justify-center bg-blue-600 rounded-md overflow-hidden">
                          {wallet.name === "Rainbow" && (
                            <img src="/lovable-uploads/b83b5ba5-1395-48af-8f16-eb9925fed41c.png" className="w-12 h-12 object-cover" alt="" />
                          )}
                          {wallet.name === "Coinbase Wallet" && (
                            <div className="bg-blue-500 w-full h-full flex items-center justify-center">
                              <div className="w-5 h-5 bg-white rounded-sm" />
                            </div>
                          )}
                          {wallet.name === "MetaMask" && (
                            <img src="/lovable-uploads/1073cd2e-10f1-455d-9859-c22219efe254.png" className="w-12 h-12 object-cover" alt="" />
                          )}
                          {wallet.name === "WalletConnect" && (
                            <div className="bg-blue-500 w-full h-full flex items-center justify-center">
                              <svg width="24" height="24" viewBox="0 0 24 24" fill="white" xmlns="http://www.w3.org/2000/svg">
                                <path d="M6 9l6 6 6-6" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                              </svg>
                            </div>
                          )}
                        </div>
                        <div>
                          <div className="font-medium">{wallet.name}</div>
                          <div className="text-sm text-gray-500">{wallet.description}</div>
                        </div>
                      </div>
                      <Button className="rounded-full px-8 py-1 h-9 bg-blue-500 hover:bg-blue-600">
                        GET
                      </Button>
                    </div>
                  ))}
                </div>
                
                {/* Help text */}
                <div className="mt-12 text-center pt-8 space-y-2">
                  <h3 className="text-lg font-medium">Not what you're looking for?</h3>
                  <p className="text-gray-500">
                    Select a wallet on the left to get started with a different wallet provider.
                  </p>
                </div>
              </div>
            ) : (
              <div className="p-6 flex items-center justify-center h-full">
                <p className="text-gray-500 text-center">
                  Select a wallet from the list to connect or get started.
                </p>
              </div>
            )}
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}
