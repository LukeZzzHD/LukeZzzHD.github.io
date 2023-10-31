'use client';

import { useTheme } from 'next-themes';
import React, { useState, useEffect } from 'react';

export function FlashlightCursor() {
  const lightBulbSizePixel = 600;
  const [lightBulbCoords, setLightBulbCoords] = useState({ x: 0, y: 0 });
  const { theme } = useTheme();
  const isDarkMode = theme === 'dark';

  useEffect(() => {
    const updateCoordsMouseMove = (e: MouseEvent) => {
      setLightBulbCoords({ x: e.screenX, y: e.screenY });
    };

    window.addEventListener('mousemove', updateCoordsMouseMove);

    return () => {
      window.removeEventListener('mousemove', updateCoordsMouseMove);
    };
  }, []);

  const lightBulbStyle = {
    zIndex: 100,
    background: isDarkMode
      ? `radial-gradient(${lightBulbSizePixel}px at ${lightBulbCoords.x}px ${lightBulbCoords.y}px, rgba(29, 78, 216, 0.2), transparent 80%)`
      : '',
  };

  return (
    <div
      style={lightBulbStyle}
      className="pointer-events-none inset-0 z-10 transition duration-300 fixed"
    ></div>
  );
}
