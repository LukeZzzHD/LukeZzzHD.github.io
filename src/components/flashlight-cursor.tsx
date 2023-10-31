'use client';

import React, { useState, useEffect } from 'react';
import { useTheme } from 'next-themes';

export function FlashlightCursor() {
  const lightBulbSizePixel = 600;
  const [coords, setCoords] = useState({ x: 0, y: 0 });
  const { theme } = useTheme();

  useEffect(() => {
    const updateCoords = (e: MouseEvent) => {
      setCoords({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('mousemove', updateCoords);

    return () => {
      window.removeEventListener('mousemove', updateCoords);
    };
  }, [theme]);

  const lightBulbStyle = {
    background: `radial-gradient(${lightBulbSizePixel}px at ${coords.x}px ${coords.y}px, rgba(29, 78, 216, 0.2), transparent 80%)`,
    // rgba(29, 78, 216, 0.15)
  };

  return (
    theme === 'dark' && (
      <div
        style={lightBulbStyle}
        className="pointer-events-none fixed inset-0 z-30 transition duration-300 lg:absolute"
      ></div>
    )
  );
}
