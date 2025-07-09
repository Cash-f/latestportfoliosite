// src/components/GridBackground.js
'use client';

import React from 'react';

const GridBackground = ({ 
  size = 50, 
  color = 'rgba(255, 255, 255, 0.1)', 
  thickness = 1, 
  fade = true,
  className 
}) => {
  
  const gridStyle = {
    '--grid-size': `${size}px`,
    '--grid-color': color,
    '--grid-thickness': `${thickness}px`,
  };

  
  const combinedClassName = `grid-background z-0 ${fade ? 'grid-background-fade' : ''} ${className || ''}`;

  return <div className={combinedClassName} style={gridStyle}></div>;
};

export default GridBackground;