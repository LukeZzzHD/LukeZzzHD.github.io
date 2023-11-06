'use client';

import { ThemeProvider } from 'next-themes';
import React from 'react';
import { ParallaxProvider } from 'react-scroll-parallax';

export function Main({ children }: { children: React.ReactNode }) {
  return (
    <>
      <ThemeProvider attribute="class" defaultTheme="light">
        <ParallaxProvider scrollAxis="vertical">{children}</ParallaxProvider>
      </ThemeProvider>
    </>
  );
}
