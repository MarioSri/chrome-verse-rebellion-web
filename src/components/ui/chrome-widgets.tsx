
import * as React from "react";
import { cn } from "@/lib/utils";
import { ChromeCard } from "./chrome-card";
import { ChromeButton } from "./chrome-button";
import { Play, Star, ArrowUpRight, Lock, Calendar } from "lucide-react";

interface ChromeWidgetProps {
  className?: string;
  children?: React.ReactNode;
}

// Round icon button as seen in reference images
const ChromeIconButton = React.forwardRef<
  HTMLButtonElement, 
  React.ButtonHTMLAttributes<HTMLButtonElement> & { 
    variant?: "dark" | "light" | "silver" | "glass";
    glow?: boolean;
  }
>(({ className, children, variant = "light", glow = false, ...props }, ref) => {
  return (
    <button
      className={cn(
        "relative w-10 h-10 rounded-full flex items-center justify-center transition-all",
        variant === "dark" 
          ? "bg-gradient-to-b from-gray-700 to-gray-900 text-white shadow-lg" 
          : variant === "silver"
          ? "bg-gradient-to-b from-[#EEEEEE] to-[#A9A9A9] text-gray-800 shadow-md"
          : variant === "glass"
          ? "bg-white/10 backdrop-blur-md text-white shadow-md"
          : "bg-gradient-to-b from-gray-100 to-gray-300 text-gray-700 shadow-md",
        "border border-white/20",
        "hover:scale-105",
        className
      )}
      ref={ref}
      {...props}
    >
      {children}
      {glow && (
        <div className="absolute inset-0 -z-10 blur-lg opacity-30 rounded-full bg-white/30" />
      )}
    </button>
  );
});
ChromeIconButton.displayName = "ChromeIconButton";

// Date indicator widget as seen in reference images (e.g. "Sun 25")
const ChromeDateWidget = ({ 
  day = "Sun", 
  date = "25",
  className 
}: { 
  day?: string;
  date?: string;
  className?: string;
}) => {
  return (
    <div className={cn(
      "bg-gray-200/90 rounded-lg px-3 py-1 flex flex-col items-center justify-center shadow-sm",
      "backdrop-blur-md bg-gradient-to-b from-[#E8E8E8] to-[#D0D0D0]",
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
        <div className="w-8 h-8 bg-gradient-to-b from-gray-400 to-gray-600 rounded-full flex items-center justify-center">
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M21 18V6M12 22V2M3 18V6" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </div>
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

// Feature card as seen in reference images
const ChromeFeatureCard = ({
  icon,
  title,
  subtitle,
  actionLabel = "Discover",
  className
}: {
  icon?: React.ReactNode;
  title: string;
  subtitle?: string;
  actionLabel?: string;
  className?: string;
}) => {
  return (
    <ChromeCard 
      className={cn("p-4 flex flex-col items-center space-y-3", className)}
      variant="silver"
      rounded="xl"
    >
      {icon || (
        <ChromeIconButton variant="dark" glow>
          <Star size={14} className="text-white" />
        </ChromeIconButton>
      )}
      <div className="text-center">
        <h3 className="font-medium text-gray-800">{title}</h3>
        {subtitle && <p className="text-xs text-gray-500 mt-1">{subtitle}</p>}
      </div>
      <ChromeButton variant="chrome" size="sm" className="w-full mt-3">{actionLabel}</ChromeButton>
    </ChromeCard>
  );
};

// Lock widget as seen in reference image
const ChromeLockWidget = ({
  locked = true,
  label = "Lock car",
  status = "Vehicle secured",
  className
}: {
  locked?: boolean;
  label?: string;
  status?: string;
  className?: string;
}) => {
  return (
    <ChromeCard variant="silver" rounded="xl" className={cn("p-4 flex items-center", className)}>
      <div className="mr-4">
        <Lock size={24} className="text-gray-700" />
      </div>
      <div>
        <h3 className="font-medium mb-1">{label}</h3>
        <p className="text-xs text-gray-600">{status}</p>
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

// Shinique card as shown in reference image
const ChromeShinique = ({
  className
}: {
  className?: string;
}) => {
  return (
    <ChromeCard variant="silver" rounded="xl" className={cn("p-4 flex flex-col items-center", className)}>
      <div className="flex space-x-3 justify-between w-full mb-3">
        <ChromeIconButton variant="dark" glow>
          <div className="text-white text-sm">✦</div>
        </ChromeIconButton>
        <ChromeIconButton>
          <ArrowUpRight size={14} className="text-gray-700" />
        </ChromeIconButton>
      </div>
      <div className="text-center">
        <h3 className="font-medium mb-1">Shinique©</h3>
        <p className="text-xs text-gray-600 mb-3">Shinique© is an intelligent and engaging AI assistant who adapts her tone and style for the best user experience.</p>
      </div>
      <ChromeButton variant="chrome" size="sm">Discover</ChromeButton>
    </ChromeCard>
  );
};

// Header widget as shown in reference image
const ChromeHeader = ({
  className
}: {
  className?: string;
}) => {
  return (
    <div className={cn("flex items-center justify-between bg-white/80 backdrop-blur-md border border-white/20 rounded-full p-1 shadow-sm", className)}>
      <ChromeIconButton variant="dark">
        <span className="font-bold text-xs">✦</span>
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

export { 
  ChromeIconButton, 
  ChromeDateWidget, 
  ChromeMediaWidget, 
  ChromeTutorialButton, 
  ChromeHeader,
  ChromeFeatureCard,
  ChromeLockWidget,
  ChromeShinique
};
