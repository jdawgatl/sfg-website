
import { BrowserRouter } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryProvider } from "@/components/providers/QueryProvider";
import ScrollToTop from "@/components/utils/ScrollToTop";
import { SEOWrapper } from "@/components/seo/SEOWrapper";
import { AppRoutes } from "@/routes";

// Fix the HelmetProvider type issue by wrapping components
const App = () => (
  <BrowserRouter>
    <HelmetProvider>
      <QueryProvider>
        <TooltipProvider>
          <ScrollToTop />
          <SEOWrapper />
          <main>
            <Toaster />
            <Sonner />
            <AppRoutes />
          </main>
        </TooltipProvider>
      </QueryProvider>
    </HelmetProvider>
  </BrowserRouter>
);

export default App;
