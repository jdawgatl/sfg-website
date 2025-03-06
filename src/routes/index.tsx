
import { Suspense, useEffect } from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import { routes } from "./routeConfig";
import { trackPageView } from "@/utils/analytics";

// Loading fallback component
const LoadingFallback = () => (
  <div className="min-h-screen flex items-center justify-center">
    <div className="animate-pulse text-gray-600">Loading...</div>
  </div>
);

export const AppRoutes = () => {
  const location = useLocation();
  
  // Track page view on route change - this is a backup in case the AnalyticsProvider fails
  useEffect(() => {
    const path = location.pathname;
    // Exclude admin and agent-login paths
    if (!path.startsWith('/admin') && path !== '/agent-login' && !path.startsWith('/agent-login/')) {
      trackPageView({
        title: document.title,
        path: path
      });
    }
  }, [location.pathname]);

  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        {routes.map((route) => (
          <Route
            key={route.path}
            path={route.path}
            element={
              <Suspense fallback={<LoadingFallback />}>
                {route.element}
              </Suspense>
            }
          />
        ))}
      </Routes>
    </AnimatePresence>
  );
};
