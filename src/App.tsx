
import { BrowserRouter } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryProvider } from "@/components/providers/QueryProvider";
import { AnalyticsProvider } from "@/components/providers/AnalyticsProvider";
import { ThemeProvider } from "@/components/providers/ThemeProvider";
import ScrollToTop from "@/components/utils/ScrollToTop";
import { SEOWrapper } from "@/components/seo/SEOWrapper";
import { AppRoutes } from "@/routes";
import { ThemeToggle } from "@/components/theme/ThemeToggle";

// Fix the HelmetProvider type issue by wrapping components
const App = () => (
  <BrowserRouter>
    <HelmetProvider>
      <ThemeProvider defaultTheme="dark">
        <QueryProvider>
          <TooltipProvider>
            <ScrollToTop />
            <SEOWrapper />
            <AnalyticsProvider>
              <main>
                <Toaster />
                <Sonner />
                <AppRoutes />
                <ThemeToggle />
              </main>
            </AnalyticsProvider>
          </TooltipProvider>
        </QueryProvider>
      </ThemeProvider>
    </HelmetProvider>
  </BrowserRouter>
);

export default App;
