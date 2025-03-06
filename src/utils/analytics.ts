
interface PageViewProps {
  title: string;
  path: string;
}

interface EventProps {
  action: string;
  category: string;
  label: string;
  value?: number;
}

interface ScrollTrackingProps {
  path: string;
  scrollPercentage: number;
}

// Check if Google Analytics is available
const isGTagAvailable = () => {
  return typeof window !== 'undefined' && (window as any).gtag;
};

// Track page views
export const trackPageView = ({ title, path }: PageViewProps) => {
  if (isGTagAvailable()) {
    console.log(`Tracking page view: ${title} - ${path}`);
    (window as any).gtag('event', 'page_view', {
      page_title: title,
      page_path: path,
      page_location: window.location.href,
    });
  }
};

// Track custom events
export const trackEvent = ({ action, category, label, value }: EventProps) => {
  if (isGTagAvailable()) {
    console.log(`Tracking event: ${action} - ${category} - ${label}`);
    (window as any).gtag('event', action, {
      event_category: category,
      event_label: label,
      value: value,
    });
  }
};

// Track scroll depth
export const trackScroll = ({ path, scrollPercentage }: ScrollTrackingProps) => {
  if (isGTagAvailable()) {
    (window as any).gtag('event', 'scroll_depth', {
      page_path: path,
      scroll_percentage: scrollPercentage,
    });
  }
};

// Track outbound links
export const trackOutboundLink = (url: string) => {
  if (isGTagAvailable()) {
    (window as any).gtag('event', 'click', {
      event_category: 'outbound',
      event_label: url,
      transport_type: 'beacon',
    });
  }
};

// Track form submissions
export const trackFormSubmission = (formName: string) => {
  if (isGTagAvailable()) {
    (window as any).gtag('event', 'form_submit', {
      event_category: 'forms',
      event_label: formName,
    });
  }
};

// Track button clicks
export const trackButtonClick = (buttonName: string, buttonLocation: string) => {
  if (isGTagAvailable()) {
    (window as any).gtag('event', 'button_click', {
      event_category: 'engagement',
      event_label: buttonName,
      button_location: buttonLocation,
    });
  }
};

// Track time on page when user leaves
export const trackTimeOnPage = (pagePath: string, timeInSeconds: number) => {
  if (isGTagAvailable()) {
    (window as any).gtag('event', 'time_on_page', {
      event_category: 'engagement',
      event_label: pagePath,
      value: timeInSeconds,
    });
  }
};
