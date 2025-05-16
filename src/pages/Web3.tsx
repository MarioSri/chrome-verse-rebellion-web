
import React, { useState } from "react";
import { useLocation, Link } from "react-router-dom";
import { NavigationBar } from "@/components/navigation-bar";
import { Footer } from "@/components/footer";
import { Button } from "@/components/ui/button";
import { WalletConnectionFlow } from "@/components/wallet-connection-flow";

const Web3 = () => {
  const location = useLocation();
  const [showWalletConnect, setShowWalletConnect] = useState(false);
  
  const handleConnectWallet = () => {
    setShowWalletConnect(true);
  };
  
  let content;
  if (location.pathname === '/web3/token') {
    content = (
      <div>
        <h2 className="text-2xl font-bold mb-4">Token Information</h2>
        <p>Detailed token economics and information will be displayed here.</p>
      </div>
    );
  } else if (location.pathname === '/web3/governance') {
    content = (
      <div>
        <h2 className="text-2xl font-bold mb-4">Governance</h2>
        <p>Community governance information and voting will be displayed here.</p>
      </div>
    );
  } else if (location.pathname === '/marketplace') {
    content = (
      <div>
        <h2 className="text-2xl font-bold mb-4">NFT Marketplace</h2>
        <p>Browse and trade virtual land and assets in our marketplace.</p>
      </div>
    );
  } else {
    content = (
      <div>
        <p className="mb-4">This is the Web3 Integration page where we'll display:</p>
        <ul className="list-disc pl-6 mb-8">
          <li>Wallet Connect functionality</li>
          <li>Token charts and statistics</li>
          <li>NFT gallery showcase</li>
          <li>Links to token info, governance, and marketplace sections</li>
        </ul>
        
        <Button 
          onClick={handleConnectWallet}
          className="bg-blue-500 hover:bg-blue-600 text-white px-6 py-2 rounded-md mb-6"
        >
          Connect with Wallet
        </Button>
        
        <div className="flex space-x-4 mt-6">
          <Link to="/web3/token" className="text-blue-400 hover:underline">Token Info</Link>
          <Link to="/web3/governance" className="text-blue-400 hover:underline">Governance</Link>
          <Link to="/marketplace" className="text-blue-400 hover:underline">Marketplace</Link>
        </div>
      </div>
    );
  }
  
  return (
    <div className="min-h-screen bg-dark text-white">
      <NavigationBar />
      <main className="pt-24 pb-16">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold mb-8">Web3 Integration</h1>
          {content}
        </div>
      </main>
      <Footer />
      <WalletConnectionFlow open={showWalletConnect} onOpenChange={setShowWalletConnect} />
    </div>
  );
};

export default Web3;
