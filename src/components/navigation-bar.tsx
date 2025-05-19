import * as React from "react";
import { Link } from "react-router-dom";
import { Menu, X, Globe, User, ChevronDown } from "lucide-react";
import { ChromeButton } from "./ui/chrome-button";
import { cn } from "@/lib/utils";
import { useTranslation } from "@/contexts/TranslationContext";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  Dialog,
  DialogContent,
  DialogTrigger,
} from "@/components/ui/dialog";
import { LanguageSelector } from "./language-selector";
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/components/ui/hover-card";
import { WalletConnectionFlow } from "./wallet-connection-flow";

const NavigationBar = () => {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  const [showWalletConnect, setShowWalletConnect] = React.useState(false);
  const { t } = useTranslation();

  const mainNavItems = [
    { name: t.navigation.home, path: "/" },
    { name: t.navigation.about, path: "/about" },
  ];

  const exploreItems = [
    { name: "All Worlds", path: "/explore" },
    { name: "Featured Planets", path: "/explore" },
    { name: "New Destinations", path: "/explore" },
  ];

  const createItems = [
    { name: "Get Started", path: "/create" },
    { name: "Tutorials", path: "/create/tutorials/intro" },
    { name: "Tools", path: "/create/tools/basics" },
  ];

  const secondaryNavItems = [
    { name: t.navigation.web3, path: "/web3" },
    { name: t.navigation.news, path: "/news" },
    { name: t.navigation.contact, path: "/contact" },
    { name: t.navigation.community, path: "/community" },
  ];

  const handleSignInClick = (e: React.MouseEvent) => {
    e.preventDefault();
    setShowWalletConnect(true);
    if (isMenuOpen) setIsMenuOpen(false);
  };

  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-dark/80 backdrop-blur-lg border-b border-white/5">
      <div className="container mx-auto">
        <nav className="flex items-center justify-between py-4 px-4 md:px-6">
          {/* Logo */}
          <Link to="/" className="text-2xl font-sans font-light tracking-wide text-gradient-gold z-10">
            AestheticsRebellion
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            {/* Primary Navigation */}
            <div className="flex items-center space-x-6">
              {mainNavItems.map((item) => (
                <Link
                  key={item.name}
                  to={item.path}
                  className="text-sm text-white/80 hover:text-white transition-colors duration-200 py-2"
                >
                  {item.name}
                </Link>
              ))}

              {/* Explore Dropdown */}
              <HoverCard openDelay={0} closeDelay={100}>
                <HoverCardTrigger asChild>
                  <Link 
                    to="/explore" 
                    className="flex items-center text-sm text-white/80 hover:text-white transition-colors duration-200 py-2"
                  >
                    {t.navigation.explore} <ChevronDown size={14} className="ml-1" />
                  </Link>
                </HoverCardTrigger>
                <HoverCardContent className="w-64 bg-dark/95 backdrop-blur-xl border border-white/10 p-2 animate-fade-in">
                  <div className="flex flex-col space-y-1">
                    {exploreItems.map((item) => (
                      <Link
                        key={item.name}
                        to={item.path}
                        className="text-sm text-white/80 hover:text-white hover:bg-white/5 p-2 rounded-md transition-colors"
                      >
                        {item.name}
                      </Link>
                    ))}
                  </div>
                </HoverCardContent>
              </HoverCard>

              {/* Create Dropdown */}
              <HoverCard openDelay={0} closeDelay={100}>
                <HoverCardTrigger asChild>
                  <Link 
                    to="/create" 
                    className="flex items-center text-sm text-white/80 hover:text-white transition-colors duration-200 py-2"
                  >
                    {t.navigation.create} <ChevronDown size={14} className="ml-1" />
                  </Link>
                </HoverCardTrigger>
                <HoverCardContent className="w-64 bg-dark/95 backdrop-blur-xl border border-white/10 p-2 animate-fade-in">
                  <div className="flex flex-col space-y-1">
                    {createItems.map((item) => (
                      <Link
                        key={item.name}
                        to={item.path}
                        className="text-sm text-white/80 hover:text-white hover:bg-white/5 p-2 rounded-md transition-colors"
                      >
                        {item.name}
                      </Link>
                    ))}
                  </div>
                </HoverCardContent>
              </HoverCard>

              {/* Secondary Navigation */}
              {secondaryNavItems.map((item) => (
                <Link
                  key={item.name}
                  to={item.path}
                  className="text-sm text-white/80 hover:text-white transition-colors duration-200 py-2"
                >
                  {item.name}
                </Link>
              ))}
            </div>
          </div>

          {/* Right Side Actions */}
          <div className="flex items-center space-x-4">
            {/* Language Selector */}
            <Dialog>
              <DialogTrigger asChild>
                <button className="p-2 rounded-full hover:bg-white/5 transition-colors">
                  <Globe size={20} className="text-white/80 hover:text-white" />
                </button>
              </DialogTrigger>
              <DialogContent className="bg-white/95 backdrop-blur-lg border border-white/20 p-6 max-w-3xl max-h-[80vh] overflow-y-auto">
                <LanguageSelector />
              </DialogContent>
            </Dialog>

            {/* Enter Metaverse Button - Desktop */}
            <div className="hidden lg:block">
              <ChromeButton variant="gold" size="sm" className="flex items-center gap-2">
                <Globe size={16} />
                <Link to="/launcher" className="font-sans">{t.navigation.enterMetaverse}</Link>
              </ChromeButton>
            </div>

            {/* Sign In Button - Desktop */}
            <div className="hidden lg:block">
              <ChromeButton variant="chrome" size="sm" className="flex items-center gap-2">
                <User size={16} />
                <a href="#" onClick={handleSignInClick} className="font-sans">{t.navigation.signIn}</a>
              </ChromeButton>
            </div>

            {/* Mobile Menu Toggle */}
            <button
              className="lg:hidden text-white"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </nav>
      </div>

      {/* Mobile Navigation Overlay */}
      <div 
        className={cn(
          "fixed inset-0 bg-dark/95 backdrop-blur-lg z-40 lg:hidden transition-all duration-300 ease-in-out",
          isMenuOpen 
            ? "opacity-100 pointer-events-auto" 
            : "opacity-0 pointer-events-none"
        )}
      >
        <div className="container mx-auto pt-20 pb-12 px-6 h-full overflow-y-auto">
          <nav className="flex flex-col space-y-6">
            {/* Primary Navigation - Mobile */}
            {mainNavItems.map((item) => (
              <Link
                key={item.name}
                to={item.path}
                className="text-xl font-light text-white/90 hover:text-white transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                {item.name}
              </Link>
            ))}
            
            {/* Explore Dropdown - Mobile */}
            <DropdownMenu>
              <DropdownMenuTrigger className="flex items-center text-xl font-light text-white/90 hover:text-white transition-colors">
                {t.navigation.explore} <ChevronDown size={18} className="ml-1" />
              </DropdownMenuTrigger>
              <DropdownMenuContent className="bg-dark/95 backdrop-blur-xl border border-white/10 p-2 mt-2 w-full">
                {exploreItems.map((item) => (
                  <DropdownMenuItem key={item.name} asChild>
                    <Link
                      to={item.path}
                      className="text-lg text-white/80 hover:text-white hover:bg-white/5 p-2 rounded-md transition-colors"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      {item.name}
                    </Link>
                  </DropdownMenuItem>
                ))}
              </DropdownMenuContent>
            </DropdownMenu>

            {/* Create Dropdown - Mobile */}
            <DropdownMenu>
              <DropdownMenuTrigger className="flex items-center text-xl font-light text-white/90 hover:text-white transition-colors">
                {t.navigation.create} <ChevronDown size={18} className="ml-1" />
              </DropdownMenuTrigger>
              <DropdownMenuContent className="bg-dark/95 backdrop-blur-xl border border-white/10 p-2 mt-2 w-full">
                {createItems.map((item) => (
                  <DropdownMenuItem key={item.name} asChild>
                    <Link
                      to={item.path}
                      className="text-lg text-white/80 hover:text-white hover:bg-white/5 p-2 rounded-md transition-colors"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      {item.name}
                    </Link>
                  </DropdownMenuItem>
                ))}
              </DropdownMenuContent>
            </DropdownMenu>

            {/* Secondary Navigation - Mobile */}
            {secondaryNavItems.map((item) => (
              <Link
                key={item.name}
                to={item.path}
                className="text-xl font-light text-white/90 hover:text-white transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                {item.name}
              </Link>
            ))}

            {/* Mobile Actions */}
            <div className="flex flex-col space-y-4 mt-6">
              <ChromeButton variant="gold" className="flex items-center justify-center gap-2">
                <Globe size={18} />
                <Link to="/launcher" className="font-sans" onClick={() => setIsMenuOpen(false)}>
                  {t.navigation.enterMetaverse}
                </Link>
              </ChromeButton>
              
              <ChromeButton variant="chrome" className="flex items-center justify-center gap-2">
                <User size={18} />
                <a href="#" className="font-sans" onClick={handleSignInClick}>
                  {t.navigation.signIn}
                </a>
              </ChromeButton>
            </div>
          </nav>
        </div>
      </div>

      {/* Wallet Connection Dialog */}
      <WalletConnectionFlow open={showWalletConnect} onOpenChange={setShowWalletConnect} />
    </header>
  );
};

export { NavigationBar };
