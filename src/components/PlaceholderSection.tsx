
import React from "react";
import { ChromeCard } from "./ui/chrome-card";

interface PlaceholderSectionProps {
  title: string;
  description?: string;
  className?: string;
}

const PlaceholderSection = ({
  title,
  description = "This section is under development and will be implemented soon.",
  className = "",
}: PlaceholderSectionProps) => {
  return (
    <div className={`py-12 ${className}`}>
      <div className="container mx-auto px-4">
        <ChromeCard variant="glass" className="p-8 text-center">
          <h2 className="text-3xl font-bold mb-4">{title}</h2>
          <p className="text-white/70">{description}</p>
          <div className="mt-8 flex items-center justify-center">
            <div className="w-16 h-16 border-4 border-t-blue-500 border-r-transparent border-b-transparent border-l-transparent rounded-full animate-spin"></div>
          </div>
        </ChromeCard>
      </div>
    </div>
  );
};

export { PlaceholderSection };
