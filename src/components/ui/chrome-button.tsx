
import * as React from "react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";

interface ChromeButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "chrome" | "gold" | "glass";
  size?: "default" | "sm" | "lg" | "icon" | "pill";
  asChild?: boolean;
}

const ChromeButton = React.forwardRef<HTMLButtonElement, ChromeButtonProps>(
  ({ className, variant = "chrome", size = "default", asChild = false, ...props }, ref) => {
    const variantClasses = {
      chrome: "bg-gradient-to-b from-chrome-light to-chrome-dark border border-white/20 text-dark shadow-chrome hover:shadow-chrome-hover",
      gold: "bg-gradient-to-b from-gold-light to-gold-dark border border-gold/20 text-dark shadow-gold hover:shadow-gold-hover",
      glass: "bg-white/10 backdrop-blur-md border border-white/20 text-white shadow-lg"
    };
    
    const sizeClasses = {
      default: "h-10 px-6 py-2 text-sm",
      sm: "h-8 px-4 py-1.5 text-xs",
      lg: "h-12 px-8 py-3 text-base",
      icon: "h-10 w-10 p-2",
      pill: "h-12 px-10 py-3 text-base rounded-full"
    };
    
    return (
      <Button
        className={cn(
          "relative transition-all duration-300 font-medium",
          "after:absolute after:inset-0 after:rounded-full after:opacity-0 after:transition-opacity",
          "hover:scale-[1.02] hover:after:opacity-100",
          variantClasses[variant],
          sizeClasses[size],
          "rounded-full flex items-center justify-center gap-2",
          className
        )}
        ref={ref}
        {...props}
      />
    );
  }
);
ChromeButton.displayName = "ChromeButton";

export { ChromeButton };
