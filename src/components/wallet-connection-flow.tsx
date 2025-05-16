
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
    icon: "🌈",
    description: "Mobile Wallet and Extension"
  },
  {
    name: "Coinbase Wallet",
    icon: "◻️",
    description: "Mobile Wallet and Extension"
  },
  {
    name: "MetaMask",
    icon: "🦊",
    description: "Mobile Wallet and Extension"
  },
  {
    name: "WalletConnect",
    icon: "📲",
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
      <DialogContent className="sm:max-w-md border border-white/10 bg-black/90 text-white">
        <DialogHeader className="flex flex-row items-center justify-between">
          <DialogTitle className="text-xl font-normal">
            {showGetWallet ? "Get a Wallet" : "Connect a Wallet"}
          </DialogTitle>
          {showGetWallet && (
            <Button
              variant="ghost"
              size="icon"
              className="rounded-full text-white/70 hover:text-white mr-auto"
              onClick={handleBack}
            >
              <ChevronLeft className="h-4 w-4" />
            </Button>
          )}
          <Button
            variant="ghost"
            size="icon"
            className="rounded-full text-white/70 hover:text-white"
            onClick={handleClose}
          >
            <X className="h-4 w-4" />
          </Button>
        </DialogHeader>
        
        {!showGetWallet ? (
          <div className="space-y-4 py-4">
            <h3 className="text-sm text-white/60 font-medium mb-2">Popular</h3>
            <div className="space-y-3">
              {wallets.map((wallet) => (
                <div
                  key={wallet.name}
                  className="flex items-center gap-3 cursor-pointer hover:bg-white/5 p-2 rounded-lg transition-colors"
                  onClick={() => handleSelectWallet(wallet)}
                >
                  <div className="flex items-center justify-center text-2xl bg-blue-600 w-10 h-10 rounded-md">
                    {wallet.icon}
                  </div>
                  <span className="font-medium">{wallet.name}</span>
                </div>
              ))}
            </div>
          </div>
        ) : (
          <div className="space-y-6 py-4">
            {wallets.map((wallet) => (
              <div key={wallet.name} className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="flex items-center justify-center text-2xl bg-blue-600 w-12 h-12 rounded-md">
                    {wallet.icon}
                  </div>
                  <div>
                    <div className="font-medium">{wallet.name}</div>
                    <div className="text-sm text-white/60">{wallet.description}</div>
                  </div>
                </div>
                <Button
                  className="bg-blue-500 hover:bg-blue-600 text-white rounded-full px-6"
                >
                  GET
                </Button>
              </div>
            ))}
            
            <div className="text-center pt-8 space-y-2">
              <h3 className="text-lg font-medium">Not what you're looking for?</h3>
              <p className="text-white/60">
                Select a wallet on the left to get started with a different wallet provider.
              </p>
            </div>
          </div>
        )}
      </DialogContent>
    </Dialog>
  );
}
