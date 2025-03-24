
import { lazy } from "react";
import { RouteObject } from "react-router-dom";

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
const Sitemap = lazy(() => import("@/pages/Sitemap"));
const Glossary = lazy(() => import("@/pages/Glossary"));

// State landing pages
const GeorgiaInsurance = lazy(() => import("@/pages/landing/GeorgiaInsurance"));
const TennesseeAutoInsurance = lazy(() => import("@/pages/landing/TennesseeAutoInsurance"));
const MississippiHomeInsurance = lazy(() => import("@/pages/landing/MississippiHomeInsurance"));

// New surety bond landing pages
const SuretyBonds = lazy(() => import("@/pages/landing/SuretyBonds"));
const TitleBonds = lazy(() => import("@/pages/landing/TitleBonds"));

// New Safeway Insurance landing page
const SafewayInsurance = lazy(() => import("@/pages/landing/SafewayInsurance"));

// Route configuration
export const routes: RouteObject[] = [
  {
    path: "/",
    element: <Index />
  },
  {
    path: "/about",
    element: <About />
  },
  {
    path: "/service",
    element: <Service />
  },
  {
    path: "/products",
    element: <Products />
  },
  {
    path: "/products/auto",
    element: <Auto />
  },
  {
    path: "/products/home",
    element: <Home />
  },
  {
    path: "/products/commercial",
    element: <Commercial />
  },
  {
    path: "/products/bonds",
    element: <Bonds />
  },
  {
    path: "/quote",
    element: <Quote />
  },
  {
    path: "/contact",
    element: <Contact />
  },
  {
    path: "/blog",
    element: <Blog />
  },
  {
    path: "/privacy",
    element: <Privacy />
  },
  {
    path: "/agent-login",
    element: <AgentLogin />
  },
  {
    path: "/sitemap",
    element: <Sitemap />
  },
  {
    path: "/glossary",
    element: <Glossary />
  },
  {
    path: "/admin/*",
    element: <Admin />
  },
  {
    path: "/georgia-insurance",
    element: <GeorgiaInsurance />
  },
  {
    path: "/tennessee-auto-insurance",
    element: <TennesseeAutoInsurance />
  },
  {
    path: "/mississippi-home-insurance",
    element: <MississippiHomeInsurance />
  },
  {
    path: "/surety-bonds",
    element: <SuretyBonds />
  },
  {
    path: "/landing/title-bonds",
    element: <TitleBonds />
  },
  {
    path: "/safeway-insurance",
    element: <SafewayInsurance />
  },
  {
    path: "*",
    element: <NotFound />
  }
];
