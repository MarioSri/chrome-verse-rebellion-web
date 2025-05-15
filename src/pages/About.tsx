
import React from "react";
import { NavigationBar } from "@/components/navigation-bar";
import { Footer } from "@/components/footer";

const About = () => {
  return (
    <div className="min-h-screen bg-dark text-white">
      <NavigationBar />
      <main className="pt-24 pb-16">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold mb-8">About Aesthetics Rebellion</h1>
          <p className="mb-4">This is the About page where we'll display:</p>
          <ul className="list-disc pl-6 mb-8">
            <li>Chrome timeline of company history</li>
            <li>Team member cards with "Read Bio" options</li>
            <li>"Join Our Team" section linking to /careers</li>
            <li>"Our Technology" section linking to /web3</li>
            <li>Partner logos with external links</li>
          </ul>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default About;
