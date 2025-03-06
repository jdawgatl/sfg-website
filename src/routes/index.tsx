
import { Suspense } from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import { routes } from "./routeConfig";
import { AnalyticsProvider } from "@/components/providers/AnalyticsProvider";

// Loading fallback component
const LoadingFallback = () => (
  <div className="min-h-screen flex items-center justify-center">
    <div className="animate-pulse text-gray-600">Loading...</div>
  </div>
);

export const AppRoutes = () => {
  const location = useLocation();
  
  return (
    <AnimatePresence mode="wait">
      <AnalyticsProvider>
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
      </AnalyticsProvider>
    </AnimatePresence>
  );
};
