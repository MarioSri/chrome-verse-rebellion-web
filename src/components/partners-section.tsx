
import React from "react";

const PartnersSection = () => {
  // For a real implementation, replace these with actual partner logos
  const partners = [
    "Partner 1", "Partner 2", "Partner 3", "Partner 4", "Partner 5", "Partner 6"
  ];

  return (
    <section className="py-16 bg-dark">
      <div className="container mx-auto px-4">
        <div className="text-center mb-10">
          <h2 className="text-2xl font-display mb-2">Trusted by Industry Leaders</h2>
          <p className="text-white/60 max-w-xl mx-auto">
            We collaborate with leading technology partners to bring you the most innovative metaverse experience.
          </p>
        </div>
        
        <div className="flex flex-wrap justify-center items-center gap-12">
          {partners.map((partner, index) => (
            <div 
              key={index} 
              className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-lg h-16 w-36 flex items-center justify-center px-6"
            >
              <span className="text-white/40 font-display">{partner}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export { PartnersSection };
