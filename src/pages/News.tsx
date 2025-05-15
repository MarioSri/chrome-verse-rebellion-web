
import React from "react";
import { Link } from "react-router-dom";
import { NavigationBar } from "@/components/navigation-bar";
import { Footer } from "@/components/footer";
import { ChromeCard } from "@/components/ui/chrome-card";

const News = () => {
  // Sample news data
  const newsArticles = [
    {
      id: 1,
      slug: "metaverse-expansion",
      title: "Aesthetics Rebellion Announces Major Metaverse Expansion",
      excerpt: "New planets and experiences coming to the platform in 2025...",
      date: "May 10, 2025"
    },
    {
      id: 2,
      slug: "token-launch",
      title: "ART Token Launch Exceeds Expectations",
      excerpt: "The community-governed token saw widespread adoption in its first week...",
      date: "May 5, 2025"
    },
    {
      id: 3,
      slug: "creator-tools",
      title: "New Creator Tools Bring Advanced AI Capabilities",
      excerpt: "Design and build with our new suite of AI-enhanced creation tools...",
      date: "April 28, 2025"
    }
  ];
  
  return (
    <div className="min-h-screen bg-dark text-white">
      <NavigationBar />
      <main className="pt-24 pb-16">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold mb-8">Latest News</h1>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            {newsArticles.map(article => (
              <ChromeCard key={article.id} variant="chrome" className="p-6">
                <h2 className="text-xl font-bold mb-2">
                  <Link to={`/news/${article.slug}`} className="hover:text-blue-400 transition-colors">
                    {article.title}
                  </Link>
                </h2>
                <p className="text-sm text-gray-400 mb-4">{article.date}</p>
                <p className="mb-4">{article.excerpt}</p>
                <Link to={`/news/${article.slug}`} className="text-blue-400 hover:underline text-sm">
                  Read more →
                </Link>
              </ChromeCard>
            ))}
          </div>
          
          <div className="flex justify-center mt-8">
            <div className="bg-white/10 px-4 py-2 rounded-lg inline-flex items-center space-x-3">
              <button className="w-8 h-8 flex items-center justify-center rounded-full bg-white/20">
                1
              </button>
              <button className="w-8 h-8 flex items-center justify-center rounded-full hover:bg-white/10">
                2
              </button>
              <button className="w-8 h-8 flex items-center justify-center rounded-full hover:bg-white/10">
                3
              </button>
              <span className="mx-2">...</span>
              <button className="w-8 h-8 flex items-center justify-center rounded-full hover:bg-white/10">
                Next
              </button>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default News;
