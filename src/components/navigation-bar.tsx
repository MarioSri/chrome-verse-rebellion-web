
import * as React from "react";
import { Link } from "react-router-dom";
import { Menu, X, Globe, User, ChevronDown } from "lucide-react";
import { ChromeButton } from "./ui/chrome-button";
import { cn } from "@/lib/utils";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";

const NavigationBar = () => {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  const mainNavItems = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
  ];

  const exploreDropdownItems = [
    { name: "All Worlds", path: "/explore" },
    { name: "Featured Planets", path: "/explore" },
    { name: "New Destinations", path: "/explore" },
  ];

  const createDropdownItems = [
    { name: "Get Started", path: "/create" },
    { name: "Tutorials", path: "/create/tutorials/intro" },
    { name: "Tools", path: "/create/tools/basics" },
  ];

  const secondaryNavItems = [
    { name: "Web3", path: "/web3" },
    { name: "News", path: "/news" },
    { name: "FAQ", path: "/faq" },
    { name: "Contact", path: "/contact" },
    { name: "Community", path: "/community" },
  ];

  return (
    <header className="fixed top-0 left-0 w-full z-50 backdrop-blur-lg bg-dark/80 border-b border-white/10">
      <div className="container mx-auto flex items-center justify-between py-4 px-4 md:px-8">
        <div className="flex items-center">
          <Link to="/" className="text-2xl font-sans font-light tracking-wide text-gradient-gold">
            AestheticsRebellion
          </Link>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center space-x-6">
          {mainNavItems.map((item) => (
            <Link
              key={item.name}
              to={item.path}
              className="text-sm font-sans text-white/80 hover:text-white transition-colors duration-200"
            >
              {item.name}
            </Link>
          ))}

          <NavigationMenu>
            <NavigationMenuList>
              <NavigationMenuItem>
                <NavigationMenuTrigger className="bg-transparent hover:bg-transparent focus:bg-transparent data-[state=open]:bg-transparent text-white/80 hover:text-white">
                  Explore
                </NavigationMenuTrigger>
                <NavigationMenuContent className="bg-dark/95 backdrop-blur-lg border border-white/10 p-2">
                  <ul className="grid w-[200px] gap-1">
                    {exploreDropdownItems.map((item) => (
                      <li key={item.name}>
                        <NavigationMenuLink asChild>
                          <Link
                            to={item.path}
                            className="block text-sm font-sans text-white/80 hover:text-white hover:bg-white/10 p-2 rounded-md transition-colors"
                          >
                            {item.name}
                          </Link>
                        </NavigationMenuLink>
                      </li>
                    ))}
                  </ul>
                </NavigationMenuContent>
              </NavigationMenuItem>

              <NavigationMenuItem>
                <NavigationMenuTrigger className="bg-transparent hover:bg-transparent focus:bg-transparent data-[state=open]:bg-transparent text-white/80 hover:text-white">
                  Create
                </NavigationMenuTrigger>
                <NavigationMenuContent className="bg-dark/95 backdrop-blur-lg border border-white/10 p-2">
                  <ul className="grid w-[200px] gap-1">
                    {createDropdownItems.map((item) => (
                      <li key={item.name}>
                        <NavigationMenuLink asChild>
                          <Link
                            to={item.path}
                            className="block text-sm font-sans text-white/80 hover:text-white hover:bg-white/10 p-2 rounded-md transition-colors"
                          >
                            {item.name}
                          </Link>
                        </NavigationMenuLink>
                      </li>
                    ))}
                  </ul>
                </NavigationMenuContent>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>

          {secondaryNavItems.map((item) => (
            <Link
              key={item.name}
              to={item.path}
              className="text-sm font-sans text-white/80 hover:text-white transition-colors duration-200"
            >
              {item.name}
            </Link>
          ))}
        </nav>

        <div className="hidden lg:flex items-center space-x-4">
          <ChromeButton variant="gold" size="sm" className="flex items-center gap-2">
            <Globe size={16} />
            <Link to="/launcher" className="font-sans">Enter Metaverse</Link>
          </ChromeButton>
          <ChromeButton variant="chrome" size="sm" className="flex items-center gap-2">
            <User size={16} />
            <span className="font-sans">Sign In</span>
          </ChromeButton>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="lg:hidden text-white"
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
        <nav className="flex flex-col items-center justify-start h-full space-y-6 pt-10 pb-20 overflow-y-auto">
          {mainNavItems.map((item) => (
            <Link
              key={item.name}
              to={item.path}
              className="text-xl font-sans text-white/80 hover:text-white transition-colors duration-200"
              onClick={() => setIsMenuOpen(false)}
            >
              {item.name}
            </Link>
          ))}

          {/* Mobile Explore Dropdown */}
          <div className="w-full flex flex-col items-center">
            <button className="text-xl font-sans text-white/80 hover:text-white transition-colors duration-200 flex items-center">
              Explore
              <ChevronDown size={16} className="ml-1" />
            </button>
            <div className="mt-2 flex flex-col items-center space-y-2">
              {exploreDropdownItems.map((item) => (
                <Link
                  key={item.name}
                  to={item.path}
                  className="text-md font-sans text-white/60 hover:text-white transition-colors duration-200"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
            </div>
          </div>

          {/* Mobile Create Dropdown */}
          <div className="w-full flex flex-col items-center">
            <button className="text-xl font-sans text-white/80 hover:text-white transition-colors duration-200 flex items-center">
              Create
              <ChevronDown size={16} className="ml-1" />
            </button>
            <div className="mt-2 flex flex-col items-center space-y-2">
              {createDropdownItems.map((item) => (
                <Link
                  key={item.name}
                  to={item.path}
                  className="text-md font-sans text-white/60 hover:text-white transition-colors duration-200"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
            </div>
          </div>

          {secondaryNavItems.map((item) => (
            <Link
              key={item.name}
              to={item.path}
              className="text-xl font-sans text-white/80 hover:text-white transition-colors duration-200"
              onClick={() => setIsMenuOpen(false)}
            >
              {item.name}
            </Link>
          ))}
          
          <div className="flex flex-col space-y-4 mt-8">
            <ChromeButton variant="gold" className="flex items-center justify-center gap-2">
              <Globe size={18} />
              <Link to="/launcher" className="font-sans" onClick={() => setIsMenuOpen(false)}>Enter Metaverse</Link>
            </ChromeButton>
            <ChromeButton variant="chrome" className="flex items-center justify-center gap-2">
              <User size={18} />
              <span className="font-sans">Sign In</span>
            </ChromeButton>
          </div>
        </nav>
      </div>
    </header>
  );
};

export { NavigationBar };
