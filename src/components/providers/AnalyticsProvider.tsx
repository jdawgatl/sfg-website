
import { useEffect, useState, useRef } from "react";
import { useLocation } from "react-router-dom";
import { 
  trackPageView, 
  trackScroll, 
  trackTimeOnPage 
} from "@/utils/analytics";
import { getSEOConfig } from "@/components/seo/SEOWrapper";

// This component will handle analytics tracking across the entire application
const AnalyticsProvider = () => {
  const location = useLocation();
  const pageTitle = getSEOConfig(location.pathname).title;
  const pageLoadTime = useRef(Date.now());
  const [scrollTracking, setScrollTracking] = useState({
    25: false,
    50: false,
    75: false,
    90: false
  });

  // Track page views on route changes
  useEffect(() => {
    trackPageView({
      title: pageTitle,
      path: location.pathname
    });

    // Reset scroll tracking for new page
    setScrollTracking({
      25: false,
      50: false, 
      75: false,
      90: false
    });

    // Reset page load time for time on page tracking
    pageLoadTime.current = Date.now();

    // Scroll to top when route changes
    window.scrollTo(0, 0);
  }, [location.pathname, pageTitle]);

  // Track scroll depth
  useEffect(() => {
    const handleScroll = () => {
      const windowHeight = window.innerHeight;
      const documentHeight = document.documentElement.scrollHeight;
      const scrollTop = window.scrollY || document.documentElement.scrollTop;
      
      if (documentHeight > windowHeight) {
        const scrollPercent = (scrollTop / (documentHeight - windowHeight)) * 100;
        
        if (scrollPercent > 25 && !scrollTracking[25]) {
          trackScroll({ path: location.pathname, scrollPercentage: 25 });
          setScrollTracking(prev => ({ ...prev, 25: true }));
        }
        
        if (scrollPercent > 50 && !scrollTracking[50]) {
          trackScroll({ path: location.pathname, scrollPercentage: 50 });
          setScrollTracking(prev => ({ ...prev, 50: true }));
        }
        
        if (scrollPercent > 75 && !scrollTracking[75]) {
          trackScroll({ path: location.pathname, scrollPercentage: 75 });
          setScrollTracking(prev => ({ ...prev, 75: true }));
        }
        
        if (scrollPercent > 90 && !scrollTracking[90]) {
          trackScroll({ path: location.pathname, scrollPercentage: 90 });
          setScrollTracking(prev => ({ ...prev, 90: true }));
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [location.pathname, scrollTracking]);

  // Track time on page when user leaves
  useEffect(() => {
    const handleBeforeUnload = () => {
      const timeSpentInSeconds = Math.floor((Date.now() - pageLoadTime.current) / 1000);
      trackTimeOnPage(location.pathname, timeSpentInSeconds);
    };

    window.addEventListener('beforeunload', handleBeforeUnload);
    return () => window.removeEventListener('beforeunload', handleBeforeUnload);
  }, [location.pathname]);

  return null; // This component doesn't render anything
};

export default AnalyticsProvider;
