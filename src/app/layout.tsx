import type { Metadata } from 'next';
import { Inter as FontSans } from 'next/font/google';
import './globals.css';
import { cn } from '@/lib/utils';
import { ThemeProvider } from '@/components/providers/theme-provider';
import { ModeToggle } from '@/components/mode-toggle';
import { FlashlightCursor } from '@/components/flashlight-cursor';

export const fontSans = FontSans({
  subsets: ['latin'],
  variable: '--font-sans',
});

export const metadata: Metadata = {
  title: 'Lukas Schwab - Software Developer',
  description: 'This is my developer portfolio',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning={true}>
      <body className={cn('min-h-screen font-sans antialiased', fontSans.variable)}>
        <ThemeProvider attribute="class" themes={['light', 'dark']} defaultTheme="dark">
          {children}
          <ModeToggle />
          <FlashlightCursor />
        </ThemeProvider>
      </body>
    </html>
  );
}
