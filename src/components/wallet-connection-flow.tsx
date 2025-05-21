import React, { useState } from 'react';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { ChevronLeft, X } from "lucide-react";

type Wallet = {
  name: string;
  icon: string;
  description: string;
};

const wallets: Wallet[] = [
  {
    name: "Rainbow",
    icon: "rainbow",
    description: "Mobile Wallet and Extension"
  },
  {
    name: "Coinbase Wallet",
    icon: "coinbase",
    description: "Mobile Wallet and Extension"
  },
  {
    name: "MetaMask",
    icon: "metamask",
    description: "Mobile Wallet and Extension"
  },
  {
    name: "WalletConnect",
    icon: "walletconnect",
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

  const renderWalletIcon = (walletName: string, size: "small" | "large" = "small") => {
    const iconClass = size === "large" ? "w-12 h-12" : "w-8 h-8";
    
    switch(walletName) {
      case "Rainbow":
        return <img src="/lovable-uploads/224a12cf-fcf1-4cd6-9f4f-7ea93049aeb3.png" className={`${iconClass} object-contain`} alt="Rainbow wallet" />;
      case "Coinbase Wallet":
        return <img src="/lovable-uploads/698fff45-8635-4d3e-8ee5-0c85d6d9234c.png" className={`${iconClass} object-contain`} alt="Coinbase wallet" />;
      case "MetaMask":
        return <img src="/lovable-uploads/d219ded4-962b-4d0d-b922-14d3f13a81ea.png" className={`${iconClass} object-contain`} alt="MetaMask wallet" />;
      case "WalletConnect":
        return <img src="/lovable-uploads/0622038a-f4da-400f-9c1b-1301b940996b.png" className={`${iconClass} object-contain`} alt="WalletConnect" />;
      default:
        return null;
    }
  };
  
  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-[600px] p-0 gap-0 overflow-hidden bg-white text-black border-0 rounded-xl">
        <DialogHeader>
          <DialogTitle>Connect a Wallet</DialogTitle>
        </DialogHeader>
        <div className="flex h-[500px]">
          {/* Left panel - always visible */}
          <div className="w-[40%] border-r border-gray-200">
            <div className="p-6">
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
                        {renderWalletIcon(wallet.name)}
                      </div>
                      <span className="font-medium">{wallet.name}</span>
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Right panel - conditionally shows content */}
          <div className="w-[60%] relative">
            {/* Close button - only shown on the right side */}
            <button 
              className="absolute right-4 top-4 p-1 rounded-full hover:bg-gray-100"
              onClick={handleClose}
            >
              <X className="h-5 w-5" />
            </button>
            
            {/* Header */}
            <div className="pt-6 px-6 pb-4 border-b border-gray-100 flex items-center">
              {/* Back button - only shown when in "Get Wallet" view */}
              {showGetWallet && (
                <button
                  className="mr-2 p-1 rounded-full hover:bg-gray-100 text-blue-500"
                  onClick={handleBack}
                >
                  <ChevronLeft className="h-5 w-5" />
                </button>
              )}
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
                          {renderWalletIcon(wallet.name, "large")}
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