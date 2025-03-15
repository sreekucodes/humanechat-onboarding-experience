
import React from 'react';
import { ExternalLink } from 'lucide-react';
import { cn } from '@/lib/utils';

interface ActionButtonProps {
  label: string;
  onClick?: () => void;
  href?: string;
  className?: string;
  showExternalIcon?: boolean;
}

const ActionButton: React.FC<ActionButtonProps> = ({
  label,
  onClick,
  href,
  className,
  showExternalIcon = true
}) => {
  const buttonClasses = cn(
    "relative overflow-hidden bg-app-blue text-white py-2 px-4 rounded-md",
    "font-medium flex items-center gap-2 group",
    "transform transition-all duration-300",
    "hover:bg-blue-600 hover:shadow-md active:scale-[0.98]",
    className
  );

  // Determine if we should render a button or an anchor
  if (href) {
    return (
      <a 
        href={href}
        className={buttonClasses}
        target="_blank"
        rel="noopener noreferrer"
      >
        {label}
        {showExternalIcon && (
          <ExternalLink 
            size={16} 
            className="transition-transform duration-300 group-hover:translate-x-0.5" 
          />
        )}
        <span className="absolute inset-0 w-full h-full bg-white/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
      </a>
    );
  }

  return (
    <button
      onClick={onClick}
      className={buttonClasses}
    >
      {label}
      {showExternalIcon && (
        <ExternalLink 
          size={16} 
          className="transition-transform duration-300 group-hover:translate-x-0.5" 
        />
      )}
      <span className="absolute inset-0 w-full h-full bg-white/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
    </button>
  );
};

export default ActionButton;
