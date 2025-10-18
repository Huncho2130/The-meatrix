import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'The Meatrix | Premium Meats & Seafood',
  description: 'Nairobi\'s premier butcher shop offering premium beef, goat, mutton, chicken, and seafood.',
  viewport: 'width=device-width, initial-scale=1', // ADD THIS
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        {/* ADD THESE META TAGS FOR MOBILE RESPONSIVENESS */}
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#36454F" />
      </head>
      <body style={{ 
        margin: 0, 
        padding: 0, 
        fontFamily: 'system-ui, -apple-system, sans-serif',
        WebkitFontSmoothing: 'antialiased',
        MozOsxFontSmoothing: 'grayscale'
      }}>
        {children}
      </body>
    </html>
  )
}
