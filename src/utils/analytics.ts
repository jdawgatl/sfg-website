
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

interface ScrollDepthProps {
  percentage: number;
  path: string;
}

interface TimeOnPageProps {
  seconds: number;
  path: string;
}

interface ButtonClickProps {
  buttonText: string;
  buttonLocation: string;
  path: string;
}

interface OutboundLinkProps {
  url: string;
  path: string;
}

// These functions use the global gtag function which is loaded via script tag in the HTML
// The actual API key/tracking ID should be in the script tag in index.html and not hardcoded here
export const trackPageView = ({ title, path }: PageViewProps) => {
  if (typeof window !== 'undefined' && (window as any).gtag) {
    (window as any).gtag('event', 'page_view', {
      page_title: title,
      page_path: path,
    });
    console.log(`Analytics: Tracked page view - ${title}`);
  }
};

export const trackEvent = ({ action, category, label, value }: EventProps) => {
  if (typeof window !== 'undefined' && (window as any).gtag) {
    (window as any).gtag('event', action, {
      event_category: category,
      event_label: label,
      value: value,
    });
    console.log(`Analytics: Tracked event - ${action} (${category}: ${label})`);
  }
};

export const trackScrollDepth = ({ percentage, path }: ScrollDepthProps) => {
  if (typeof window !== 'undefined' && (window as any).gtag) {
    (window as any).gtag('event', 'scroll_depth', {
      event_category: 'Engagement',
      event_label: `${percentage}% - ${path}`,
      non_interaction: true
    });
    console.log(`Analytics: Tracked scroll depth - ${percentage}% on ${path}`);
  }
};

export const trackTimeOnPage = ({ seconds, path }: TimeOnPageProps) => {
  if (typeof window !== 'undefined' && (window as any).gtag) {
    (window as any).gtag('event', 'time_on_page', {
      event_category: 'Engagement',
      event_label: path,
      value: seconds,
      non_interaction: true
    });
    console.log(`Analytics: Tracked time on page - ${seconds}s on ${path}`);
  }
};

export const trackButtonClick = ({ buttonText, buttonLocation, path }: ButtonClickProps) => {
  if (typeof window !== 'undefined' && (window as any).gtag) {
    (window as any).gtag('event', 'button_click', {
      event_category: 'User Interaction',
      event_label: buttonText,
      button_location: buttonLocation,
      page_path: path
    });
    console.log(`Analytics: Tracked button click - ${buttonText} at ${buttonLocation}`);
  }
};

export const trackOutboundLink = ({ url, path }: OutboundLinkProps) => {
  if (typeof window !== 'undefined' && (window as any).gtag) {
    (window as any).gtag('event', 'outbound_link', {
      event_category: 'Engagement',
      event_label: url,
      page_path: path
    });
    console.log(`Analytics: Tracked outbound link - ${url}`);
  }
};
