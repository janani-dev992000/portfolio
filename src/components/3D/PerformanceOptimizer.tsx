'use client';

import { useEffect, useState } from 'react';

interface PerformanceOptimizerProps {
  children: React.ReactNode;
}

export default function PerformanceOptimizer({ children }: PerformanceOptimizerProps) {
  const [isLowPerformance, setIsLowPerformance] = useState(false);

  useEffect(() => {
    // Check for low-end devices or slow connections
    const checkPerformance = () => {
      const connection = (navigator as any).connection;
      const memory = (performance as any).memory;
      
      // Check connection speed
      const isSlowConnection = connection && 
        (connection.effectiveType === 'slow-2g' || 
         connection.effectiveType === '2g' ||
         connection.downlink < 1);

      // Check available memory
      const isLowMemory = memory && memory.jsHeapSizeLimit < 100000000; // 100MB

      // Check for mobile devices (often have less GPU power)
      const isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);

      setIsLowPerformance(isSlowConnection || isLowMemory || isMobile);
    };

    checkPerformance();
  }, []);

  if (isLowPerformance) {
    // Render simplified version without 3D effects
    return (
      <div className="w-full h-full bg-gradient-to-br from-gray-100 to-gray-200 flex items-center justify-center">
        <div className="text-center text-gray-600">
          <p>Optimized view for better performance</p>
        </div>
      </div>
    );
  }

  return <>{children}</>;
}
