
import React from "react";
import { useParams, Link } from "react-router-dom";
import { NavigationBar } from "@/components/navigation-bar";
import { Footer } from "@/components/footer";

const PlanetPage = () => {
  const { planetName } = useParams();
  
  return (
    <div className="min-h-screen bg-dark text-white">
      <NavigationBar />
      <main className="pt-24 pb-16">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold mb-8">Planet: {planetName}</h1>
          <p className="mb-4">This is the Planet detail page where we'll display:</p>
          <ul className="list-disc pl-6 mb-8">
            <li>Chrome 3D viewer with planet visualization</li>
            <li>"Enter VR" link</li>
            <li>"Reserve Land" button linking to /marketplace</li>
            <li>"Back to Universe" link to /explore</li>
            <li>Location cards with coordinates</li>
          </ul>
          <div className="mt-8">
            <Link to="/explore" className="text-blue-400 hover:underline">← Back to Explore</Link>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default PlanetPage;
