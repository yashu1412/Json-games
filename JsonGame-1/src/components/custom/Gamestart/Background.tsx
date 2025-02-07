import React from 'react';

interface BackgroundProps {
  imageUrl: string;
}

const Background: React.FC<BackgroundProps> = ({ imageUrl }) => (
  <div 
    className="absolute inset-0 bg-cover bg-center z-[-1]" 
    style={{ backgroundImage: `url('${imageUrl}')` }}
  />
);

export default Background;