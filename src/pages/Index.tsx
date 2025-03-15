
import React, { useEffect, useState } from 'react';
import OnboardingHeader from '@/components/OnboardingHeader';
import OnboardingContent from '@/components/OnboardingContent';

const Index = () => {
  // Add a loading state to enhance the perceived performance
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate loading for a smoother transition
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 400);

    return () => clearTimeout(timer);
  }, []);

  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-app-light">
        <div className="w-6 h-6 border-2 border-app-blue border-t-transparent rounded-full animate-spin"></div>
      </div>
    );
  }

  return (
    <div className="min-h-screen flex flex-col bg-app-light">
      <OnboardingHeader />
      <div className="flex-1 overflow-auto">
        <OnboardingContent />
      </div>
    </div>
  );
};

export default Index;
