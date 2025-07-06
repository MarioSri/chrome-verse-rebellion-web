
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import About from "./pages/About";
import Explore from "./pages/Explore";
import PlanetPage from "./pages/PlanetPage";
import Create from "./pages/Create";
import Web3 from "./pages/Web3";
import News from "./pages/News";
import Article from "./pages/Article";
import FAQ from "./pages/FAQ";
import Contact from "./pages/Contact";
import Launcher from "./pages/Launcher";
import Community from "./pages/Community";
import Marketing from "./pages/Marketing";
import NotFound from "./pages/NotFound";
import ChromeUI from "./pages/ChromeUI";
import Login from "./pages/Login";
import { LocaleDemo } from "./pages/LocaleDemo";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/about" element={<About />} />
          <Route path="/explore" element={<Explore />} />
          <Route path="/explore/:planetName" element={<PlanetPage />} />
          <Route path="/create" element={<Create />} />
          <Route path="/create/tutorials/:tutorialId" element={<Create />} />
          <Route path="/create/tools/:toolId" element={<Create />} />
          <Route path="/web3" element={<Web3 />} />
          <Route path="/web3/token" element={<Web3 />} />
          <Route path="/web3/governance" element={<Web3 />} />
          <Route path="/marketplace" element={<Web3 />} />
          <Route path="/news" element={<News />} />
          <Route path="/news/:slug" element={<Article />} />
          <Route path="/faq" element={<FAQ />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/launcher" element={<Launcher />} />
          <Route path="/community" element={<Community />} />
          <Route path="/marketing" element={<Marketing />} />
          <Route path="/chrome-ui" element={<ChromeUI />} />
          <Route path="/login" element={<Login />} />
          <Route path="/locale-demo" element={<LocaleDemo />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
