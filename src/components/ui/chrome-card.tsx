
import * as React from "react";
import { cn } from "@/lib/utils";

interface ChromeCardProps {
  className?: string;
  children: React.ReactNode;
  variant?: "glass" | "chrome" | "dark";
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
    chrome: "bg-gradient-to-b from-white/90 to-gray-300/80 backdrop-blur-md border border-white/30",
    dark: "bg-gradient-to-b from-gray-800/90 to-gray-900/80 backdrop-blur-md border border-white/10"
  };
  
  const shadowClasses = {
    sm: "shadow",
    md: "shadow-md",
    lg: "shadow-lg"
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
          "bg-glow-blue"
        )} />
      )}
    </div>
  );
};

export { ChromeCard };
