
import React from "react";
import { useParams, Link } from "react-router-dom";
import { NavigationBar } from "@/components/navigation-bar";
import { Footer } from "@/components/footer";
import { ChromeCard } from "@/components/ui/chrome-card";

const Article = () => {
  const { slug } = useParams();
  
  // This would be replaced with actual data fetching
  const articleContent = {
    title: `Article: ${slug}`,
    date: "May 10, 2025",
    author: "Alex Chen",
    content: "This is a placeholder for the article content. In a real implementation, this would fetch the specific article content based on the slug parameter."
  };
  
  return (
    <div className="min-h-screen bg-dark text-white">
      <NavigationBar />
      <main className="pt-24 pb-16">
        <div className="container mx-auto px-4 max-w-4xl">
          <ChromeCard variant="chrome" className="p-8">
            <Link to="/news" className="text-blue-400 hover:underline mb-4 inline-block">
              ← Back to News
            </Link>
            <h1 className="text-3xl font-bold mb-4">{articleContent.title}</h1>
            <div className="flex items-center text-gray-400 mb-6">
              <span>{articleContent.date}</span>
              <span className="mx-2">•</span>
              <span>By {articleContent.author}</span>
            </div>
            <div className="prose prose-invert max-w-none">
              <p>{articleContent.content}</p>
            </div>
          </ChromeCard>
          
          <div className="mt-8">
            <h2 className="text-2xl font-bold mb-4">Related Articles</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <ChromeCard variant="glass" className="p-4">
                <h3 className="font-bold mb-1">Another Interesting Article</h3>
                <p className="text-sm text-gray-400">April 25, 2025</p>
                <Link to="/news/another-article" className="text-blue-400 text-sm hover:underline mt-2 inline-block">
                  Read more →
                </Link>
              </ChromeCard>
              <ChromeCard variant="glass" className="p-4">
                <h3 className="font-bold mb-1">More Metaverse News</h3>
                <p className="text-sm text-gray-400">April 22, 2025</p>
                <Link to="/news/more-news" className="text-blue-400 text-sm hover:underline mt-2 inline-block">
                  Read more →
                </Link>
              </ChromeCard>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Article;
