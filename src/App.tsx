import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import SectionPage from "./pages/SectionPage";
import ServicesSection from "@/components/ServicesSection";
import DynoSection from "@/components/DynoSection";
import RacingSection from "@/components/RacingSection";
import GallerySection from "@/components/GallerySection";
import TestimonialsSection from "@/components/TestimonialsSection";
import ContactSection from "@/components/ContactSection";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/services" element={<SectionPage title="Services"><ServicesSection /></SectionPage>} />
          <Route path="/dyno-lab" element={<SectionPage title="Dyno Lab"><DynoSection /></SectionPage>} />
          <Route path="/racing" element={<SectionPage title="Racing"><RacingSection /></SectionPage>} />
          <Route path="/gallery" element={<SectionPage title="Gallery"><GallerySection /></SectionPage>} />
          <Route path="/reviews" element={<SectionPage title="Reviews"><TestimonialsSection /></SectionPage>} />
          <Route path="/contact" element={<SectionPage title="Contact"><ContactSection /></SectionPage>} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
