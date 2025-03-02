
import { pageSEOConfig } from './pages';
import { productSEOConfig } from './products';
import { landingSEOConfig } from './landing';

// Default SEO configuration
export const defaultSEO = {
  title: "Standard Financial Group | Insurance Agency in Fayetteville, GA",
  description: "Family-owned insurance agency in Fayetteville, GA since 1989. Affordable auto, home, commercial & surety bond insurance.",
  keywords: "Standard Financial Group, insurance Fayetteville GA, cheap car insurance, cheap auto insurance, affordable insurance"
};

// Function to get the schema markup
export const getSchemaMarkup = (baseUrl: string, description: string) => {
  return {
    "@context": "https://schema.org",
    "@type": "InsuranceAgency",
    "name": "Standard Financial Group",
    "alternateName": "SFG Insurance",
    "image": `${baseUrl}/images/logo.png`,
    "url": baseUrl,
    "telephone": "(770) 997-7999",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "490 Bradley Dr Ste A",
      "addressLocality": "Fayetteville",
      "addressRegion": "GA",
      "postalCode": "30214",
      "addressCountry": "US"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": "33.4469444",
      "longitude": "-84.4548893"
    },
    "openingHoursSpecification": {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday"
      ],
      "opens": "09:00",
      "closes": "16:00"
    },
    "priceRange": "$$",
    "sameAs": [
      "https://www.facebook.com/standardfinancialgroup",
      "https://www.linkedin.com/company/standard-financial-group"
    ],
    "areaServed": [
      {
        "@type": "State",
        "name": "Georgia"
      },
      {
        "@type": "State",
        "name": "Tennessee"
      },
      {
        "@type": "State",
        "name": "Mississippi"
      }
    ],
    "description": description
  };
};

// Export all configurations 
export { pageSEOConfig, productSEOConfig, landingSEOConfig };
