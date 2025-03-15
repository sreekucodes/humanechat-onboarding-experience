
import React, { useState } from 'react';
import { ChevronRight } from 'lucide-react';
import ActionButton from './ActionButton';
import ImageUploader from './ImageUploader';

const OnboardingContent = () => {
  const [mainImage, setMainImage] = useState<string>('/lovable-uploads/17c78ebc-431d-42f4-a7c8-563f0f7baed9.png');
  
  return (
    <div className="max-w-3xl mx-auto w-full py-12 px-6 animate-fade-in-up opacity-0" style={{ animationDelay: '0.2s' }}>
      <h1 className="text-3xl font-semibold text-center text-app-text mb-10">
        One Last Step to Start Using Humane
      </h1>
      
      <div className="glass-panel rounded-lg p-8 shadow-md">
        <p className="text-app-text mb-8 text-lg">
          Go to your Shopify settings page and click "Save" in the top right corner to finish setting up Humane.
        </p>
        
        <div className="relative max-w-xl mx-auto">
          {/* Main uploadable image with circular highlight */}
          <div className="relative mb-8">
            <ImageUploader 
              defaultImage={mainImage}
              altText="Settings screenshot"
              onImageChange={setMainImage}
            />
            
            {/* Blue circle highlight and arrow */}
            <div className="absolute right-1/4 top-1/2 transform -translate-y-1/4">
              <div className="w-20 h-20 rounded-full border-2 border-app-blue animate-pulse-subtle"></div>
              <ChevronRight className="absolute -right-10 top-1/2 transform -translate-y-1/2 text-app-blue w-8 h-8 animate-arrow" />
            </div>
          </div>
          
          {/* Action button */}
          <div className="flex justify-center mt-8">
            <ActionButton 
              label="Go to Settings & Save" 
              href="https://admin.shopify.com/settings" 
              className="px-6 py-3 text-base"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default OnboardingContent;
