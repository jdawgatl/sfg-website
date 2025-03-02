import { useLocation } from "react-router-dom";
import { Helmet } from "react-helmet-async";

export const SEOWrapper = () => {
  const location = useLocation();
  const baseUrl = "https://sfg-ins.com";
  const currentUrl = `${baseUrl}${location.pathname}`;

  // Define page-specific title, description and keywords
  let pageTitle = "Standard Financial Group";
  let pageDescription = "Family-owned insurance agency in Fayetteville, GA since 1989. Affordable auto, home, commercial & surety bond insurance.";
  let pageKeywords = "Standard Financial Group, insurance Fayetteville GA, cheap car insurance, cheap auto insurance, affordable insurance";
  
  // Add page-specific SEO data
  switch (location.pathname) {
    case '/':
      pageTitle = "Standard Financial Group | Insurance Agency in Fayetteville, GA";
      pageDescription = "Local insurance agency in Fayetteville, GA offering affordable auto, home, commercial insurance & surety bonds since 1989.";
      pageKeywords += ", best insurance agency Fayetteville GA, local insurance agency, cheap insurance quotes";
      break;
    case '/about':
      pageTitle = "About Our Agency | Standard Financial Group | Fayetteville GA";
      pageDescription = "Family-owned insurance agency serving Fayetteville and surrounding areas since 1989. Meet our team of experienced insurance professionals.";
      pageKeywords += ", insurance agency history, insurance agents Fayetteville GA";
      break;
    case '/products':
      pageTitle = "Insurance Products | Standard Financial Group | Fayetteville GA";
      pageDescription = "Comprehensive insurance products including auto, home, commercial and surety bonds. Compare rates from multiple carriers.";
      pageKeywords += ", insurance products Georgia, insurance coverage options";
      break;
    case '/products/auto':
      pageTitle = "Auto Insurance | Cheap Car Insurance | Fayetteville GA";
      pageDescription = "Get affordable car insurance in Fayetteville, GA. Compare rates from multiple carriers for the best cheap auto insurance coverage.";
      pageKeywords += ", cheap car insurance Fayetteville GA, affordable auto insurance Georgia, car insurance quotes";
      break;
    case '/products/home':
      pageTitle = "Home Insurance | Homeowners Insurance | Fayetteville GA";
      pageDescription = "Protect your home with affordable homeowners insurance in Fayetteville, GA. Multiple carriers for the best coverage and rates.";
      pageKeywords += ", homeowners insurance Fayetteville GA, house insurance Georgia";
      break;
    case '/products/commercial':
      pageTitle = "Commercial Insurance | Business Insurance | Fayetteville GA";
      pageDescription = "Commercial insurance solutions for Georgia businesses. General liability, workers comp, property coverage and more.";
      pageKeywords += ", business insurance Georgia, commercial insurance Fayetteville GA, workers comp Georgia";
      break;
    case '/products/bonds':
      pageTitle = "Surety Bonds | Title Bonds | Court Bonds | Fayetteville GA";
      pageDescription = "Fast title bonds, court bonds, probate bonds and contract bonds in Georgia. Easy online bond application and same-day service.";
      pageKeywords += ", title bond Georgia, surety bonds Fayetteville GA, court bonds, probate bonds, contract bonds";
      break;
    case '/quote':
      pageTitle = "Free Insurance Quote | Standard Financial Group | Fayetteville GA";
      pageDescription = "Get a free insurance quote from multiple carriers. Compare rates for auto, home, and commercial insurance in Fayetteville, GA.";
      pageKeywords += ", free insurance quote Fayetteville GA, compare insurance rates Georgia";
      break;
    case '/contact':
      pageTitle = "Contact Us | Standard Financial Group | Fayetteville GA";
      pageDescription = "Contact our insurance agents in Fayetteville, GA. Visit our office, call us, or submit a contact form for assistance with your insurance needs.";
      pageKeywords += ", insurance agent contact, insurance office Fayetteville GA";
      break;
    case '/georgia-insurance':
      pageTitle = "Georgia Insurance Services | Auto, Home & Commercial | Affordable Rates";
      pageDescription = "Comprehensive insurance solutions throughout Georgia. Serving Atlanta, Fayetteville, Peachtree City, Newnan, McDonough and all Georgia counties.";
      pageKeywords += ", Georgia insurance, cheap insurance Georgia, insurance services Atlanta, Peachtree City insurance, Newnan insurance, McDonough insurance";
      break;
    case '/tennessee-auto-insurance':
      pageTitle = "Tennessee Auto Insurance | Cheap Car Insurance TN | Standard Financial Group";
      pageDescription = "Affordable car insurance across Tennessee. Get the best rates on auto coverage in Nashville, Memphis, Knoxville, Chattanooga and all TN counties.";
      pageKeywords += ", Tennessee auto insurance, cheap car insurance Tennessee, Nashville auto insurance, Memphis car insurance";
      break;
    case '/mississippi-home-insurance':
      pageTitle = "Mississippi Home Insurance | Homeowners Insurance MS | Affordable Coverage";
      pageDescription = "Protect your Mississippi home with affordable homeowners insurance. Coverage for Jackson, Gulfport, Biloxi, Hattiesburg and all MS counties.";
      pageKeywords += ", Mississippi home insurance, homeowners insurance Mississippi, Jackson home insurance, Gulfport property insurance";
      break;
    case '/surety-bonds':
      pageTitle = "Surety Bonds | Contractor Bonds | Georgia Surety Bond Company";
      pageDescription = "Fast, affordable surety bonds for contractors, businesses and individuals in Georgia. Same-day service and competitive rates.";
      pageKeywords += ", Georgia surety bonds, contractor bonds Georgia, commercial surety bonds";
      break;
    case '/landing/title-bonds':
      pageTitle = "Georgia Title Bonds | Certificate of Title Bond | Lost Title Bond";
      pageDescription = "Quick and affordable title bonds in Georgia. Certificate of title bonds for vehicles with missing titles. Same-day service available.";
      pageKeywords += ", Georgia title bond, certificate of title bond, lost title bond Georgia, car title bond";
      break;
    default:
      // Keep default values for other pages
  }

  const structuredData = {
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
    "description": pageDescription
  };

  return (
    <Helmet>
      <title>{pageTitle}</title>
      <meta name="description" content={pageDescription} />
      <meta name="keywords" content={pageKeywords} />
      <link rel="canonical" href={currentUrl} />
      <meta name="robots" content="index, follow" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta property="og:title" content={pageTitle} />
      <meta property="og:description" content={pageDescription} />
      <meta property="og:url" content={currentUrl} />
      <meta property="og:type" content="website" />
      <meta property="og:site_name" content="Standard Financial Group" />
      <script type="application/ld+json">
        {JSON.stringify(structuredData)}
      </script>
    </Helmet>
  );
};
