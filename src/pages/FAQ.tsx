
import React from "react";
import { NavigationBar } from "@/components/navigation-bar";
import { Footer } from "@/components/footer";
import { ChromeCard } from "@/components/ui/chrome-card";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const FAQ = () => {
  const faqItems = [
    {
      question: "What is Aesthetics Rebellion Metaverse?",
      answer: "Aesthetics Rebellion is a premium metaverse platform where aesthetics and technology converge to create boundless digital experiences. Our platform allows users to explore virtual worlds, create their own content, and engage with Web3 technologies."
    },
    {
      question: "How do I get started?",
      answer: "You can get started by creating an account and downloading our client from the Launcher page. Alternatively, you can explore our web version for a browser-based experience without downloads."
    },
    {
      question: "What hardware do I need?",
      answer: "Our platform is designed to work across multiple devices. For the best experience, we recommend a modern computer with a dedicated graphics card. VR experiences require compatible VR headsets."
    },
    {
      question: "Is my data safe?",
      answer: "We take data privacy seriously. All user data is encrypted and stored securely. Please refer to our Privacy Policy for more details about how we handle your information."
    },
    {
      question: "How does the token economy work?",
      answer: "Our platform operates on a token-based economy powered by the ART token. These tokens can be used for transactions within the metaverse, including purchasing land, items, and services."
    }
  ];
  
  return (
    <div className="min-h-screen bg-dark text-white">
      <NavigationBar />
      <main className="pt-24 pb-16">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold mb-8">Frequently Asked Questions</h1>
          
          <div className="max-w-3xl mx-auto mb-12">
            <ChromeCard variant="chrome" className="p-6">
              <Accordion type="single" collapsible className="w-full">
                {faqItems.map((item, index) => (
                  <AccordionItem key={index} value={`item-${index}`}>
                    <AccordionTrigger className="text-left font-semibold">
                      {item.question}
                    </AccordionTrigger>
                    <AccordionContent className="text-gray-300">
                      {item.answer}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </ChromeCard>
          </div>
          
          <div className="text-center mt-16">
            <h2 className="text-2xl font-bold mb-4">Still have questions?</h2>
            <p className="mb-6">Our support team is ready to help you with any other questions you might have.</p>
            <Link to="/contact" className="inline-flex items-center justify-center px-6 py-3 bg-gradient-to-b from-chrome-light to-chrome-dark text-dark font-medium rounded-full">
              Contact Support
            </Link>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default FAQ;
