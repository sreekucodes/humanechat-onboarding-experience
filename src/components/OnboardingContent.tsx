
import React from 'react';
import { ChevronRight } from 'lucide-react';
import ActionButton from './ActionButton';

const OnboardingContent = () => {
  return (
    <div className="max-w-3xl mx-auto w-full py-12 px-6 animate-fade-in-up opacity-0" style={{ animationDelay: '0.2s' }}>
      <h1 className="text-3xl font-semibold text-center text-app-text mb-10">
        One Last Step to Start Using HumaneChat
      </h1>
      
      <div className="glass-panel rounded-lg p-8 shadow-md">
        <p className="text-app-text mb-8 text-lg">
          Go to your Shopify settings page and click "Save" in the top right corner to finish setting up HumaneChat.
        </p>
        
        <div className="relative max-w-xl mx-auto">
          {/* Instruction image with circular highlight */}
          <div className="relative mb-8">
            <div className="aspect-video bg-app-gray rounded-md overflow-hidden">
              <img 
                src="/lovable-uploads/0c41bdc1-0fe3-45e2-baa2-a543e351f6d4.png" 
                alt="Settings screenshot" 
                className="w-full object-cover transition-opacity duration-300"
                onLoad={(e) => e.currentTarget.classList.add('opacity-100')}
                style={{ opacity: 0 }}
              />
            </div>
            
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
