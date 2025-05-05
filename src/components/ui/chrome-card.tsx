
import * as React from "react";
import { cn } from "@/lib/utils";

interface ChromeCardProps {
  className?: string;
  children: React.ReactNode;
  variant?: "glass" | "chrome";
  glow?: boolean;
  animate?: boolean;
}

const ChromeCard = ({
  className,
  children,
  variant = "chrome",
  glow = false,
  animate = false,
  ...props
}: ChromeCardProps) => {
  const baseClass = variant === "glass" ? "glass-card" : "chrome-card";
  
  return (
    <div
      className={cn(
        baseClass,
        glow && "relative",
        animate && "transform transition-all hover:translate-y-[-5px] duration-300",
        className
      )}
      {...props}
    >
      {children}
      {glow && (
        <div className="absolute inset-0 -z-10 bg-glow-blue rounded-2xl blur-lg opacity-30" />
      )}
    </div>
  );
};

export { ChromeCard };
