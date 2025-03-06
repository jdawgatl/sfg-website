
import { useEffect, useRef } from 'react';
import { useLocation } from 'react-router-dom';
import { trackPageView, trackScrollDepth, trackTimeOnPage } from '@/utils/analytics';
import { SEOWrapper, getSEOConfig } from '@/components/seo/SEOWrapper';

interface AnalyticsProviderProps {
  children: React.ReactNode;
}

export const AnalyticsProvider = ({ children }: AnalyticsProviderProps) => {
  const location = useLocation();
  const timeOnPageRef = useRef<number>(Date.now());
  const scrollDepthsTracked = useRef<Set<number>>(new Set());
  
  // Track page views on route change
  useEffect(() => {
    // Reset scroll depths tracked for new page
    scrollDepthsTracked.current = new Set();
    
    // Record time spent on previous page
    const timeSpent = Math.floor((Date.now() - timeOnPageRef.current) / 1000);
    if (timeSpent > 1) {
      // Only track if user spent more than 1 second on page (to avoid tracking initial load)
      trackTimeOnPage({
        pageTitle: document.title,
        seconds: timeSpent
      });
    }
    
    // Reset timer for new page
    timeOnPageRef.current = Date.now();
    
    // Get SEO config for current page to use the correct title
    const seoConfig = getSEOConfig();
    
    trackPageView({
      title: seoConfig.title,
      path: location.pathname
    });
  }, [location.pathname]);

  // Track scroll depth
  useEffect(() => {
    const handleScroll = () => {
      if (!document.documentElement) return;
      
      const winHeight = window.innerHeight;
      const docHeight = document.documentElement.scrollHeight;
      const scrollTop = window.scrollY || document.documentElement.scrollTop;
      
      if (docHeight <= winHeight) return; // Don't track scroll on pages that don't scroll
      
      const scrollPercent = Math.floor((scrollTop / (docHeight - winHeight)) * 100);
      
      // Track at 25%, 50%, 75%, and 100% scroll depths
      const scrollDepths = [25, 50, 75, 100];
      for (const depth of scrollDepths) {
        if (scrollPercent >= depth && !scrollDepthsTracked.current.has(depth)) {
          scrollDepthsTracked.current.add(depth);
          trackScrollDepth({
            pageTitle: document.title,
            percentage: depth
          });
        }
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  
  // Track time on page when user leaves the site
  useEffect(() => {
    const handleBeforeUnload = () => {
      const timeSpent = Math.floor((Date.now() - timeOnPageRef.current) / 1000);
      if (timeSpent > 1) {
        trackTimeOnPage({
          pageTitle: document.title,
          seconds: timeSpent
        });
      }
    };
    
    window.addEventListener('beforeunload', handleBeforeUnload);
    return () => {
      window.removeEventListener('beforeunload', handleBeforeUnload);
    };
  }, []);

  return (
    <>
      <SEOWrapper />
      {children}
    </>
  );
};
