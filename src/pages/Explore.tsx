
import React from "react";
import { NavigationBar } from "@/components/navigation-bar";
import { Footer } from "@/components/footer";

const Explore = () => {
  return (
    <div className="min-h-screen bg-dark text-white">
      <NavigationBar />
      <main className="pt-24 pb-16">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold mb-8">Explore Virtual Worlds</h1>
          <p className="mb-4">This is the Explore page where we'll display:</p>
          <ul className="list-disc pl-6 mb-8">
            <li>Interactive map of the metaverse</li>
            <li>Sidebar with filters</li>
            <li>"Visit Planet" buttons linking to /explore/[planet-name]</li>
            <li>"Create Your Own" section linking to /create</li>
          </ul>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Explore;
