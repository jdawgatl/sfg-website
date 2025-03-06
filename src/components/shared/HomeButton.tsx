
import React from 'react';
import { Link } from 'react-router-dom';
import { Home } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { trackButtonClick } from '@/utils/analytics';

interface HomeButtonProps {
  className?: string;
  variant?: 'default' | 'subtle' | 'text';
}

const HomeButton = ({ 
  className = '', 
  variant = 'default' 
}: HomeButtonProps) => {
  const handleClick = () => {
    trackButtonClick({
      buttonText: 'Return to Homepage',
      buttonLocation: 'global-home-button',
      path: window.location.pathname
    });
  };

  const getButtonStyles = () => {
    switch (variant) {
      case 'subtle':
        return `bg-white/10 hover:bg-white/20 text-white border border-white/20 backdrop-blur-sm ${className}`;
      case 'text':
        return `bg-transparent hover:bg-white/5 text-white/90 hover:text-white ${className}`;
      default:
        return `bg-primary/80 hover:bg-primary backdrop-blur-sm text-white ${className}`;
    }
  };

  return (
    <Button 
      asChild 
      className={`${getButtonStyles()} transition-all duration-300 gap-2 rounded-full px-4 py-2 shadow-md`}
      onClick={handleClick}
    >
      <Link to="/" aria-label="Return to Homepage">
        <Home className="h-4 w-4" />
        <span className="text-sm">Home</span>
      </Link>
    </Button>
  );
};

export default HomeButton;
