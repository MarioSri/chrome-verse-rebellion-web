
import * as React from "react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";

interface ChromeButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "chrome" | "gold" | "glass" | "silver" | "dark";
  size?: "default" | "sm" | "lg" | "icon" | "pill";
  asChild?: boolean;
  glow?: boolean;
}

const ChromeButton = React.forwardRef<HTMLButtonElement, ChromeButtonProps>(
  ({ className, variant = "chrome", size = "default", asChild = false, glow = false, ...props }, ref) => {
    const variantClasses = {
      chrome: "bg-gradient-to-b from-[#E8E8E8] to-[#B8B8B8] border border-white/20 text-gray-800 shadow-[0_4px_10px_rgba(0,0,0,0.1)]",
      gold: "bg-gradient-to-b from-[#FEE9A0] to-[#D4AF37] border border-[#FEF3C7]/30 text-gray-800 shadow-[0_4px_10px_rgba(212,175,55,0.2)]",
      glass: "bg-white/10 backdrop-blur-md border border-white/20 text-white shadow-lg",
      silver: "bg-gradient-to-b from-[#EEEEEE] to-[#A9A9A9] border border-white/20 text-gray-800 shadow-[0_4px_10px_rgba(0,0,0,0.1)]",
      dark: "bg-gradient-to-b from-gray-800 to-gray-900 border border-white/10 text-white shadow-[0_4px_10px_rgba(0,0,0,0.2)]"
    };
    
    const sizeClasses = {
      default: "h-10 px-6 py-2 text-sm",
      sm: "h-8 px-4 py-1.5 text-xs",
      lg: "h-12 px-8 py-3 text-base",
      icon: "h-10 w-10 p-2",
      pill: "h-12 px-10 py-3 text-base rounded-full"
    };
    
    return (
      <div className={cn("relative", glow && "after:content-[''] after:absolute after:-z-10 after:inset-0 after:blur-md after:opacity-50", 
        variant === "gold" ? "after:bg-yellow-300" : "after:bg-white/20")}>
        <Button
          className={cn(
            "relative transition-all duration-300 font-medium",
            "hover:scale-[1.02] hover:brightness-105",
            variantClasses[variant],
            sizeClasses[size],
            "rounded-full flex items-center justify-center gap-2",
            className
          )}
          ref={ref}
          {...props}
        />
      </div>
    );
  }
);
ChromeButton.displayName = "ChromeButton";

export { ChromeButton };
