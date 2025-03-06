
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
  pageTitle: string;
  percentage: number;
}

interface OutboundLinkProps {
  url: string;
  linkText: string;
}

interface FormSubmissionProps {
  formName: string;
  formId?: string;
  successful: boolean;
}

interface ButtonClickProps {
  buttonText: string;
  buttonId?: string;
  location: string;
}

interface TimeOnPageProps {
  pageTitle: string;
  seconds: number;
}

// These functions use the global gtag function which is loaded via script tag in the HTML
// The actual API key/tracking ID should be in the script tag in index.html and not hardcoded here
export const trackPageView = ({ title, path }: PageViewProps) => {
  if (typeof window !== 'undefined' && (window as any).gtag) {
    (window as any).gtag('event', 'page_view', {
      page_title: title,
      page_path: path,
    });
    console.log(`Analytics: Tracked page view - ${title} (${path})`);
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

export const trackScrollDepth = ({ pageTitle, percentage }: ScrollDepthProps) => {
  trackEvent({
    action: 'scroll_depth',
    category: 'User Engagement',
    label: `${pageTitle} - ${percentage}%`,
    value: percentage
  });
};

export const trackOutboundLink = ({ url, linkText }: OutboundLinkProps) => {
  trackEvent({
    action: 'outbound_link_click',
    category: 'Outbound Links',
    label: `${linkText} - ${url}`
  });
};

export const trackFormSubmission = ({ formName, formId, successful }: FormSubmissionProps) => {
  trackEvent({
    action: 'form_submission',
    category: 'Forms',
    label: `${formName}${formId ? ` (${formId})` : ''} - ${successful ? 'Success' : 'Failed'}`
  });
};

export const trackButtonClick = ({ buttonText, buttonId, location }: ButtonClickProps) => {
  trackEvent({
    action: 'button_click',
    category: 'UI Interaction',
    label: `${buttonText}${buttonId ? ` (${buttonId})` : ''} - ${location}`
  });
};

export const trackTimeOnPage = ({ pageTitle, seconds }: TimeOnPageProps) => {
  trackEvent({
    action: 'time_on_page',
    category: 'User Engagement',
    label: pageTitle,
    value: seconds
  });
};
