
import React from 'react';
import { cn } from '@/lib/utils';

interface OnboardingHeaderProps {
  className?: string;
}

const OnboardingHeader: React.FC<OnboardingHeaderProps> = ({ className }) => {
  return (
    <header className={cn("w-full py-3 px-6 bg-app-light border-b border-gray-200 flex items-center", className)}>
      <div className="flex items-center space-x-3 animate-fade-in">
        <span className="w-4 h-4 bg-app-blue rounded-full"></span>
        <h1 className="text-app-text font-medium text-lg">HumaneChat</h1>
      </div>
    </header>
  );
};

export default OnboardingHeader;
