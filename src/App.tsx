import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import OfficeBuildings from "./pages/OfficeBuildings";
import Coworking from "./pages/Coworking";
import CreativeParks from "./pages/CreativeParks";
import Standalone from "./pages/Standalone";
import News from "./pages/News";
import Offices from "./pages/Offices";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/offices" element={<Offices />} />
          <Route path="/office-buildings" element={<OfficeBuildings />} />
          <Route path="/creative-parks" element={<CreativeParks />} />
          <Route path="/coworking" element={<Coworking />} />
          <Route path="/standalone" element={<Standalone />} />
          <Route path="/news" element={<News />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
