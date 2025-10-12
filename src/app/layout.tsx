import type { Metadata } from 'next';
import './globals.css';
//import SessionProviderWrapper from '@/components/SessionProviderWrapper';

export const metadata: Metadata = {
  title: 'The Meatrix | Premium Meats & Seafood',
  description: 'Nairobi\'s premier butcher shop offering premium beef, goat, mutton, chicken, and seafood.',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body style={{ margin: 0, padding: 0, fontFamily: 'sans-serif' }}>
        {/* Wrap children in client SessionProvider */}
      
          {children}
      
      </body>
    </html>
  )
}
