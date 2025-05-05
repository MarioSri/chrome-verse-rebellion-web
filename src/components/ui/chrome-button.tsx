
import * as React from "react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";

interface ChromeButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "chrome" | "gold";
  size?: "default" | "sm" | "lg";
  asChild?: boolean;
}

const ChromeButton = React.forwardRef<HTMLButtonElement, ChromeButtonProps>(
  ({ className, variant = "chrome", size = "default", asChild = false, ...props }, ref) => {
    const baseClass = variant === "gold" ? "gold-btn" : "chrome-btn";
    
    const sizeClass = {
      default: "px-6 py-2 text-sm",
      sm: "px-4 py-1.5 text-xs",
      lg: "px-8 py-3 text-base"
    };
    
    return (
      <Button
        className={cn(baseClass, sizeClass[size], className)}
        ref={ref}
        {...props}
      />
    );
  }
);
ChromeButton.displayName = "ChromeButton";

export { ChromeButton };
