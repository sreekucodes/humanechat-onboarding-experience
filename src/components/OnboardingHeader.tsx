
import React, { useState } from 'react';
import { cn } from '@/lib/utils';
import ImageUploader from './ImageUploader';

interface OnboardingHeaderProps {
  className?: string;
}

const OnboardingHeader: React.FC<OnboardingHeaderProps> = ({ className }) => {
  const [logoImage, setLogoImage] = useState<string | undefined>(undefined);
  
  return (
    <header className={cn("w-full py-3 px-6 bg-app-light border-b border-gray-200 flex items-center", className)}>
      <div className="flex items-center space-x-3 animate-fade-in">
        {logoImage ? (
          <ImageUploader 
            className="w-6 h-6 min-w-6 min-h-6"
            aspectRatio="square"
            defaultImage={logoImage}
            altText="Humane logo"
            onImageChange={setLogoImage}
          />
        ) : (
          <div className="flex items-center space-x-3">
            <ImageUploader 
              className="w-6 h-6 min-w-6 min-h-6"
              aspectRatio="square"
              defaultImage={undefined}
              altText="Humane logo"
              onImageChange={setLogoImage}
            />
          </div>
        )}
        <h1 className="text-app-text font-medium text-lg">Humane</h1>
      </div>
    </header>
  );
};

export default OnboardingHeader;
