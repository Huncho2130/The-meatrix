'use client';

import './globals.css';
import { useEffect, useState } from 'react';
import { Analytics } from '@vercel/analytics/react';
import HolidayBanner from '@/components/HolidayBanner';
import PromotionPopup from '@/components/PromotionPopup';

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const [hasWindow, setHasWindow] = useState(false);

  useEffect(() => {
    setHasWindow(true);
  }, []);

  return (
    <html lang="en-KE">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#8B0000" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="manifest" href="/manifest.json" />
      </head>
      <body style={{
        margin: 0,
        padding: 0,
        fontFamily: 'system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
        lineHeight: 1.6,
        color: '#36454F',
        backgroundColor: 'white'
      }}>
        <HolidayBanner />

        {children}

        {hasWindow && <PromotionPopup />}

        <Analytics />
      </body>
    </html>
  );
}
