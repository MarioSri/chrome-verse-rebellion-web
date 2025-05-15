
import React from "react";
import { NavigationBar } from "@/components/navigation-bar";
import { Footer } from "@/components/footer";
import { useTranslation } from "@/contexts/TranslationContext";

const About = () => {
  const { t } = useTranslation();
  
  return (
    <div className="min-h-screen bg-dark text-white">
      <NavigationBar />
      <main className="pt-24 pb-16">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold mb-8">{t.about.title}</h1>
          <p className="mb-4">{t.about.description}</p>
          <ul className="list-disc pl-6 mb-8">
            {t.about.items.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default About;
