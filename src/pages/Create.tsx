
import React from "react";
import { useParams, useLocation } from "react-router-dom";
import { NavigationBar } from "@/components/navigation-bar";
import { Footer } from "@/components/footer";

const Create = () => {
  const { tutorialId, toolId } = useParams();
  const location = useLocation();
  
  let content;
  if (location.pathname.includes('/tutorials/')) {
    content = (
      <div>
        <h2 className="text-2xl font-bold mb-4">Tutorial: {tutorialId}</h2>
        <p>Specific tutorial content will be displayed here.</p>
      </div>
    );
  } else if (location.pathname.includes('/tools/')) {
    content = (
      <div>
        <h2 className="text-2xl font-bold mb-4">Tool: {toolId}</h2>
        <p>Specific tool information will be displayed here.</p>
      </div>
    );
  } else {
    content = (
      <div>
        <p className="mb-4">This is the Create page where we'll display:</p>
        <ul className="list-disc pl-6 mb-8">
          <li>Chrome tabs for different creation categories (Avatars, Tools, etc.)</li>
          <li>Tutorial videos linking to /create/tutorials/...</li>
          <li>Tools showcase linking to /create/tools/...</li>
        </ul>
      </div>
    );
  }
  
  return (
    <div className="min-h-screen bg-dark text-white">
      <NavigationBar />
      <main className="pt-24 pb-16">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold mb-8">Create in the Metaverse</h1>
          {content}
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Create;
