
import * as React from "react";
import { Link } from "react-router-dom";
import { Menu, X, Globe, User } from "lucide-react";
import { ChromeButton } from "./ui/chrome-button";
import { cn } from "@/lib/utils";

const NavigationBar = () => {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  const navItems = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Explore", path: "/explore" },
    { name: "Create", path: "/create" },
    { name: "Web3", path: "/web3" },
    { name: "News", path: "/news" },
  ];

  return (
    <header className="fixed top-0 left-0 w-full z-50 backdrop-blur-lg bg-dark/80 border-b border-white/10">
      <div className="container mx-auto flex items-center justify-between py-4 px-4 md:px-8">
        <div className="flex items-center">
          <Link to="/" className="text-2xl font-serif font-light tracking-wide text-gradient-gold">
            AestheticsRebellion
          </Link>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-6">
          {navItems.map((item) => (
            <Link
              key={item.name}
              to={item.path}
              className="text-sm font-serif text-white/80 hover:text-white transition-colors duration-200"
            >
              {item.name}
            </Link>
          ))}
        </nav>

        <div className="hidden md:flex items-center space-x-4">
          <ChromeButton variant="chrome" size="sm" className="flex items-center gap-2">
            <Globe size={16} />
            <span className="font-serif">Connect</span>
          </ChromeButton>
          <ChromeButton variant="gold" size="sm" className="flex items-center gap-2">
            <User size={16} />
            <span className="font-serif">Enter App</span>
          </ChromeButton>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-white"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={cn(
          "fixed inset-0 bg-dark/95 backdrop-blur-lg z-40 transition-all duration-300 ease-in-out",
          isMenuOpen ? "opacity-100 top-16" : "opacity-0 top-[-100%] pointer-events-none"
        )}
      >
        <nav className="flex flex-col items-center justify-center h-full space-y-6 pb-20">
          {navItems.map((item) => (
            <Link
              key={item.name}
              to={item.path}
              className="text-xl font-serif text-white/80 hover:text-white transition-colors duration-200"
              onClick={() => setIsMenuOpen(false)}
            >
              {item.name}
            </Link>
          ))}
          <div className="flex flex-col space-y-4 mt-8">
            <ChromeButton variant="chrome" className="flex items-center justify-center gap-2">
              <Globe size={18} />
              <span className="font-serif">Connect</span>
            </ChromeButton>
            <ChromeButton variant="gold" className="flex items-center justify-center gap-2">
              <User size={18} />
              <span className="font-serif">Enter App</span>
            </ChromeButton>
          </div>
        </nav>
      </div>
    </header>
  );
};

export { NavigationBar };
