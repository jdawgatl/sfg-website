
import { useLocation } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { defaultSEO, pageSEOConfig, productSEOConfig, landingSEOConfig, getSchemaMarkup } from "@/config/seo";
import { useEffect } from "react";
import { trackPageView } from "@/utils/analytics";

// Export the getSEOConfig function so it can be used by other components
export const getSEOConfig = (path = '') => {
  // If no path is provided, use the current path
  if (!path) {
    const location = typeof window !== 'undefined' ? window.location : { pathname: '/' };
    path = location.pathname;
  }

  // Remove trailing slash if present
  const normalizedPath = path.endsWith('/') ? path.slice(0, -1) : path;
  
  // Main pages
  if (normalizedPath === '') return pageSEOConfig.home;
  if (normalizedPath === '/about') return pageSEOConfig.about;
  if (normalizedPath === '/service') return pageSEOConfig.service;
  if (normalizedPath === '/products') return pageSEOConfig.products;
  if (normalizedPath === '/quote') return pageSEOConfig.quote;
  if (normalizedPath === '/contact') return pageSEOConfig.contact;
  if (normalizedPath === '/blog') return pageSEOConfig.blog;
  if (normalizedPath === '/privacy') return pageSEOConfig.privacy;
  if (normalizedPath === '/agent-login') return pageSEOConfig.agentLogin;
  if (normalizedPath === '/sitemap') return pageSEOConfig.sitemap;
  
  // Product pages
  if (normalizedPath === '/products/auto') return productSEOConfig.auto;
  if (normalizedPath === '/products/home') return productSEOConfig.home;
  if (normalizedPath === '/products/commercial') return productSEOConfig.commercial;
  if (normalizedPath === '/products/bonds') return productSEOConfig.bonds;
  
  // Landing pages
  if (normalizedPath === '/georgia-insurance') return landingSEOConfig.georgiaInsurance;
  if (normalizedPath === '/tennessee-auto-insurance') return landingSEOConfig.tennesseeAutoInsurance;
  if (normalizedPath === '/mississippi-home-insurance') return landingSEOConfig.mississippiHomeInsurance;
  if (normalizedPath === '/surety-bonds') return landingSEOConfig.suretyBonds;
  if (normalizedPath === '/landing/title-bonds') return landingSEOConfig.titleBonds;
  
  // 404 page
  if (normalizedPath === '*') return pageSEOConfig.notFound;
  
  // Default SEO config if no match
  return defaultSEO;
};

export const SEOWrapper = () => {
  const location = useLocation();
  const baseUrl = "https://sfg-ins.com";
  const currentUrl = `${baseUrl}${location.pathname}`;
  const path = location.pathname;

  // Track page view in analytics
  useEffect(() => {
    trackPageView({
      title: getSEOConfig(path).title,
      path: location.pathname
    });
  }, [location.pathname, path]);

  const seoConfig = getSEOConfig(path);
  const { title, description, keywords } = seoConfig;
  const structuredData = getSchemaMarkup(baseUrl, description);
  
  // Additional WebSite schema to help with site name display
  const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "name": "Standard Financial Group",
    "alternateName": "SFG Insurance",
    "url": baseUrl,
    "potentialAction": {
      "@type": "SearchAction",
      "target": `${baseUrl}/search?q={search_term_string}`,
      "query-input": "required name=search_term_string"
    }
  };

  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <link rel="canonical" href={currentUrl} />
      <meta name="robots" content="index, follow" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={currentUrl} />
      <meta property="og:type" content="website" />
      <meta property="og:site_name" content="Standard Financial Group" />
      {/* Prevent duplicate content issues with domain variations */}
      {path === '/' && (
        <>
          <link rel="canonical" href="https://sfg-ins.com/" />
          <meta name="robots" content="index, follow" />
        </>
      )}
      <script type="application/ld+json">
        {JSON.stringify(structuredData)}
      </script>
      <script type="application/ld+json">
        {JSON.stringify(websiteSchema)}
      </script>
    </Helmet>
  );
};
