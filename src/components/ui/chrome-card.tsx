
import * as React from "react";
import { cn } from "@/lib/utils";

interface ChromeCardProps {
  className?: string;
  children: React.ReactNode;
  variant?: "glass" | "chrome" | "dark" | "silver" | "gold";
  glow?: boolean;
  animate?: boolean;
  shadow?: "sm" | "md" | "lg";
  rounded?: "default" | "lg" | "xl" | "2xl" | "full";
}

const ChromeCard = ({
  className,
  children,
  variant = "chrome",
  glow = false,
  animate = false,
  shadow = "md",
  rounded = "lg",
  ...props
}: ChromeCardProps) => {
  const variantClasses = {
    glass: "bg-white/10 backdrop-blur-lg border border-white/20",
    chrome: "bg-gradient-to-b from-[#E8E8E8] to-[#C0C0C0] backdrop-blur-md border border-white/30",
    dark: "bg-gradient-to-b from-gray-800/95 to-gray-900/95 backdrop-blur-md border border-white/10",
    silver: "bg-gradient-to-b from-[#EEEEEE] to-[#A9A9A9] backdrop-blur-md border border-white/30",
    gold: "bg-gradient-to-b from-[#FEE9A0] to-[#D4AF37] backdrop-blur-md border-[0.5px] border-[#FEF3C7]/30"
  };
  
  const shadowClasses = {
    sm: "shadow-[0_2px_10px_rgba(0,0,0,0.08)]",
    md: "shadow-[0_4px_20px_-2px_rgba(70,70,70,0.15)]",
    lg: "shadow-[0_8px_30px_-4px_rgba(70,70,70,0.2)]"
  };
  
  const roundedClasses = {
    default: "rounded-md",
    lg: "rounded-lg",
    xl: "rounded-xl",
    "2xl": "rounded-2xl",
    full: "rounded-full"
  };
  
  return (
    <div
      className={cn(
        variantClasses[variant],
        shadowClasses[shadow],
        roundedClasses[rounded],
        glow && "relative",
        animate && "transform transition-all hover:translate-y-[-5px] duration-300",
        className
      )}
      {...props}
    >
      {children}
      {glow && (
        <div className={cn(
          "absolute inset-0 -z-10 blur-lg opacity-30 rounded-2xl",
          variant === "chrome" ? "bg-glow-blue" : 
          variant === "dark" ? "bg-glow-pink" : 
          variant === "gold" ? "bg-yellow-300/50" :
          "bg-glow-blue"
        )} />
      )}
    </div>
  );
};

export { ChromeCard };
