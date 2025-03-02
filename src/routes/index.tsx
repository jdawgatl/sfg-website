
import { Suspense, lazy } from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";

// Lazy load all routes for better initial load performance
const Index = lazy(() => import("@/pages/Index"));
const About = lazy(() => import("@/pages/About"));
const Service = lazy(() => import("@/pages/Service"));
const Products = lazy(() => import("@/pages/Products"));
const Auto = lazy(() => import("@/pages/products/Auto"));
const Commercial = lazy(() => import("@/pages/products/Commercial"));
const Bonds = lazy(() => import("@/pages/products/Bonds"));
const Home = lazy(() => import("@/pages/products/Home"));
const Quote = lazy(() => import("@/pages/Quote"));
const Contact = lazy(() => import("@/pages/Contact"));
const Blog = lazy(() => import("@/pages/Blog"));
const Privacy = lazy(() => import("@/pages/Privacy"));
const Admin = lazy(() => import("@/pages/Admin"));
const NotFound = lazy(() => import("@/pages/NotFound"));
const AgentLogin = lazy(() => import("@/pages/AgentLogin"));

// State landing pages
const GeorgiaInsurance = lazy(() => import("@/pages/landing/GeorgiaInsurance"));
const TennesseeAutoInsurance = lazy(() => import("@/pages/landing/TennesseeAutoInsurance"));
const MississippiHomeInsurance = lazy(() => import("@/pages/landing/MississippiHomeInsurance"));

// New surety bond landing pages
const SuretyBonds = lazy(() => import("@/pages/landing/SuretyBonds"));
const TitleBonds = lazy(() => import("@/pages/landing/TitleBonds"));

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
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={
          <Suspense fallback={<LoadingFallback />}>
            <Index />
          </Suspense>
        } />
        <Route path="/about" element={
          <Suspense fallback={<LoadingFallback />}>
            <About />
          </Suspense>
        } />
        <Route path="/service" element={
          <Suspense fallback={<LoadingFallback />}>
            <Service />
          </Suspense>
        } />
        <Route path="/products" element={
          <Suspense fallback={<LoadingFallback />}>
            <Products />
          </Suspense>
        } />
        <Route path="/products/auto" element={
          <Suspense fallback={<LoadingFallback />}>
            <Auto />
          </Suspense>
        } />
        <Route path="/products/home" element={
          <Suspense fallback={<LoadingFallback />}>
            <Home />
          </Suspense>
        } />
        <Route path="/products/commercial" element={
          <Suspense fallback={<LoadingFallback />}>
            <Commercial />
          </Suspense>
        } />
        <Route path="/products/bonds" element={
          <Suspense fallback={<LoadingFallback />}>
            <Bonds />
          </Suspense>
        } />
        <Route path="/quote" element={
          <Suspense fallback={<LoadingFallback />}>
            <Quote />
          </Suspense>
        } />
        <Route path="/contact" element={
          <Suspense fallback={<LoadingFallback />}>
            <Contact />
          </Suspense>
        } />
        <Route path="/blog" element={
          <Suspense fallback={<LoadingFallback />}>
            <Blog />
          </Suspense>
        } />
        <Route path="/privacy" element={
          <Suspense fallback={<LoadingFallback />}>
            <Privacy />
          </Suspense>
        } />
        <Route path="/agent-login" element={
          <Suspense fallback={<LoadingFallback />}>
            <AgentLogin />
          </Suspense>
        } />
        <Route path="/admin/*" element={
          <Suspense fallback={<LoadingFallback />}>
            <Admin />
          </Suspense>
        } />
        <Route path="/georgia-insurance" element={
          <Suspense fallback={<LoadingFallback />}>
            <GeorgiaInsurance />
          </Suspense>
        } />
        <Route path="/tennessee-auto-insurance" element={
          <Suspense fallback={<LoadingFallback />}>
            <TennesseeAutoInsurance />
          </Suspense>
        } />
        <Route path="/mississippi-home-insurance" element={
          <Suspense fallback={<LoadingFallback />}>
            <MississippiHomeInsurance />
          </Suspense>
        } />
        {/* Surety bond routes */}
        <Route path="/surety-bonds" element={
          <Suspense fallback={<LoadingFallback />}>
            <SuretyBonds />
          </Suspense>
        } />
        <Route path="/landing/title-bonds" element={
          <Suspense fallback={<LoadingFallback />}>
            <TitleBonds />
          </Suspense>
        } />
        <Route path="*" element={
          <Suspense fallback={<LoadingFallback />}>
            <NotFound />
          </Suspense>
        } />
      </Routes>
    </AnimatePresence>
  );
};
