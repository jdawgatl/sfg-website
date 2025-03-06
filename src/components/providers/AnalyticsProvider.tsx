
import { useEffect, useRef } from 'react';
import { useLocation } from 'react-router-dom';
import { trackPageView, trackScrollDepth, trackTimeOnPage } from '@/utils/analytics';

// Pages we don't want to track
const excludedPaths = [
  '/admin',
  '/agent-login'
];

// Check if the current path should be excluded from tracking
const shouldExcludePath = (path: string): boolean => {
  return excludedPaths.some(excludedPath => 
    path === excludedPath || 
    path.startsWith(`${excludedPath}/`)
  );
};

export const AnalyticsProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const location = useLocation();
  const lastTrackedPath = useRef<string>('');
  const timeOnPageStart = useRef<number>(Date.now());
  const scrollDepthTracked = useRef<Set<number>>(new Set());
  
  // Track page view on route change
  useEffect(() => {
    const currentPath = location.pathname;
    
    // Only track if not an excluded path
    if (!shouldExcludePath(currentPath)) {
      // Track the page view
      trackPageView({
        title: document.title,
        path: currentPath
      });

      // Reset scroll depth tracking for new page
      scrollDepthTracked.current = new Set();
    }
    
    // Save current time for time on page tracking
    timeOnPageStart.current = Date.now();
    lastTrackedPath.current = currentPath;
    
    // Return a cleanup function to track time on page
    return () => {
      if (!shouldExcludePath(lastTrackedPath.current)) {
        const timeSpentSeconds = Math.floor((Date.now() - timeOnPageStart.current) / 1000);
        
        // Only track if the user spent more than 5 seconds on the page
        if (timeSpentSeconds > 5) {
          trackTimeOnPage({
            seconds: timeSpentSeconds,
            path: lastTrackedPath.current
          });
        }
      }
    };
  }, [location.pathname]);
  
  // Track scroll depth
  useEffect(() => {
    if (shouldExcludePath(location.pathname)) return;
    
    const handleScroll = () => {
      const scrolled = window.scrollY;
      const viewportHeight = window.innerHeight;
      const docHeight = document.documentElement.scrollHeight;
      const trackableHeight = docHeight - viewportHeight;
      
      if (trackableHeight > 0) {
        const scrollPercentage = Math.floor((scrolled / trackableHeight) * 100);
        
        // Track at 25%, 50%, 75%, and 100% scroll depths
        const depthsToTrack = [25, 50, 75, 100];
        
        depthsToTrack.forEach(depth => {
          if (scrollPercentage >= depth && !scrollDepthTracked.current.has(depth)) {
            scrollDepthTracked.current.add(depth);
            trackScrollDepth({
              percentage: depth,
              path: location.pathname
            });
          }
        });
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [location.pathname]);
  
  return <>{children}</>;
};
