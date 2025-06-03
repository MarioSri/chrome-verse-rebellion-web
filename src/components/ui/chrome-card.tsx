import * as React from "react";
import { cn } from "@/lib/utils";

interface ChromeCardProps {
  className?: string;
  children: React.ReactNode;
  variant?: "glass" | "chrome" | "dark";
}

const ChromeCard = ({
  className,
  children,
  variant = "chrome",
  ...props
}: ChromeCardProps) => {
  const variantClasses = {
    glass: "bg-white/10 backdrop-blur-md border border-white/20",
    chrome: "bg-gradient-to-b from-white/90 to-gray-300/80 backdrop-blur-md border border-white/30",
    dark: "bg-gradient-to-b from-gray-800/90 to-gray-900/80 backdrop-blur-md border border-white/10"
  };
  
  return (
    <div
      className={cn(
        variantClasses[variant],
        "rounded-lg shadow-lg",
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
};

export { ChromeCard };