import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Layout } from "@/components/Layout";
import Dashboard from "./pages/Dashboard";
import VoiceStories from "./pages/VoiceStories";
import Wisdom from "./pages/Wisdom";
import Market from "./pages/Market";
import Memes from "./pages/Memes";
import Recipes from "./pages/Recipes";
import Landmarks from "./pages/Landmarks";
import Analytics from "./pages/Analytics";
import SettingsPage from "./pages/Settings";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Layout>
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/voice-stories" element={<VoiceStories />} />
            <Route path="/wisdom" element={<Wisdom />} />
            <Route path="/market" element={<Market />} />
            <Route path="/memes" element={<Memes />} />
            <Route path="/recipes" element={<Recipes />} />
            <Route path="/landmarks" element={<Landmarks />} />
            <Route path="/analytics" element={<Analytics />} />
            <Route path="/settings" element={<SettingsPage />} />
            {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Layout>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
