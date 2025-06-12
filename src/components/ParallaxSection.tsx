import React, { ReactNode } from 'react';

interface ParallaxSectionProps {
  imageUrl: string;
  overlayColor?: string;
  children: ReactNode;
}

const ParallaxSection: React.FC<ParallaxSectionProps> = ({ 
  imageUrl, 
  overlayColor = 'rgba(0, 0, 0, 0.5)', 
  children 
}) => {
  return (
    <div className="relative py-32 overflow-hidden">
      <div 
        className="absolute inset-0 bg-cover bg-center bg-fixed" 
        style={{ backgroundImage: `url(${imageUrl})` }}
      />
      <div 
        className="absolute inset-0" 
        style={{ backgroundColor: overlayColor }}
      />
      <div className="relative z-10">
        {children}
      </div>
    </div>
  );
};

export default ParallaxSection;