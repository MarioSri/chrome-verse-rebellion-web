
import * as React from "react";
import { cn } from "@/lib/utils";
import { ChromeCard } from "./chrome-card";
import { ChromeButton } from "./chrome-button";
import { Play, Star, ArrowUpRight } from "lucide-react";

interface ChromeWidgetProps {
  className?: string;
  children?: React.ReactNode;
}

// Round icon button as seen in reference images
const ChromeIconButton = React.forwardRef<
  HTMLButtonElement, 
  React.ButtonHTMLAttributes<HTMLButtonElement> & { variant?: "dark" | "light" }
>(({ className, children, variant = "light", ...props }, ref) => {
  return (
    <button
      className={cn(
        "relative w-10 h-10 rounded-full flex items-center justify-center transition-all",
        variant === "dark" 
          ? "bg-gradient-to-b from-gray-700 to-gray-900 text-white shadow-lg" 
          : "bg-gradient-to-b from-gray-100 to-gray-300 text-gray-700 shadow-md",
        "border border-white/20",
        "hover:scale-105",
        className
      )}
      ref={ref}
      {...props}
    >
      {children}
    </button>
  );
});
ChromeIconButton.displayName = "ChromeIconButton";

// Date indicator widget as seen in reference images (e.g. "Mon 10")
const ChromeDateWidget = ({ 
  day = "Mon", 
  date = "10",
  className 
}: { 
  day?: string;
  date?: string;
  className?: string;
}) => {
  return (
    <div className={cn(
      "bg-gray-200/90 rounded-lg px-3 py-1 flex flex-col items-center justify-center",
      className
    )}>
      <span className="text-xs font-medium text-gray-600">{day}</span>
      <span className="text-lg font-bold text-gray-800">{date}</span>
    </div>
  );
};

// Media player widget as seen in reference images
const ChromeMediaWidget = ({ 
  title = "Daft Punk", 
  subtitle = "Giorgio by Moroder",
  time = "1:22",
  duration = "3:12",
  className 
}: { 
  title?: string;
  subtitle?: string;
  time?: string;
  duration?: string;
  className?: string;
}) => {
  return (
    <ChromeCard 
      variant="dark" 
      rounded="2xl" 
      className={cn("p-4 flex flex-col items-center", className)}
    >
      <div className="w-12 h-12 bg-gradient-to-b from-gray-600 to-gray-800 rounded-full mb-3 flex items-center justify-center">
        <div className="w-6 h-6 bg-gradient-to-b from-gray-400 to-gray-600 rounded-full"></div>
      </div>
      <div className="flex flex-col items-center text-center">
        <p className="font-medium text-white text-sm">{title}</p>
        <p className="text-gray-400 text-xs mb-1">{subtitle}</p>
        <div className="w-full h-px bg-white/20 my-1.5"></div>
        <p className="text-gray-400 text-[10px]">{time} - {duration}</p>
      </div>
    </ChromeCard>
  );
};

// Tutorial button as seen in reference images
const ChromeTutorialButton = ({
  className
}: {
  className?: string;
}) => {
  return (
    <div className={cn("relative flex items-center bg-white/10 backdrop-blur-md border border-white/20 rounded-full h-10 overflow-hidden", className)}>
      <div className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center ml-1">
        <div className="w-5 h-5 rounded-sm bg-white/20"></div>
      </div>
      <div className="w-8 h-8 rounded-full bg-gray-600 flex items-center justify-center mx-1">
        <Play size={14} className="text-white ml-0.5" />
      </div>
      <span className="pr-4 text-gray-700 font-medium">Tutorial</span>
    </div>
  );
};

// Header widget as shown in reference image
const ChromeHeader = ({
  className
}: {
  className?: string;
}) => {
  return (
    <div className={cn("flex items-center justify-between bg-white/10 backdrop-blur-md border border-white/20 rounded-full p-1", className)}>
      <ChromeIconButton variant="dark">
        <span className="font-bold text-xs">℗</span>
      </ChromeIconButton>
      <ChromeDateWidget />
      <div className="flex items-center justify-center">
        <Star size={16} className="text-gray-900" />
      </div>
      <ChromeIconButton>
        <ArrowUpRight size={14} className="text-gray-700" />
      </ChromeIconButton>
    </div>
  );
};

export { ChromeIconButton, ChromeDateWidget, ChromeMediaWidget, ChromeTutorialButton, ChromeHeader };
