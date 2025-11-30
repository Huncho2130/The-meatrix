import type { Metadata } from 'next';
import './globals.css';
import { Analytics } from '@vercel/analytics/react';
import HolidayBanner from '@/components/HolidayBanner'; // ADD THIS IMPORT

export async function generateMetadata(): Promise<Metadata> {
  const baseTitle = "THE MEATRIX SUPPLIES. - Premium Meats & Seafood | Nairobi's Finest Butcher";
  const baseDescription = "Nairobi's premier butcher shop offering premium beef, goat, mutton, chicken, and seafood. Free CBD delivery. Holiday specials available.";

  return {
    // FIX: Use title object for better Google display
    title: {
      default: "THE MEATRIX SUPPLIES. - Premium Meats & Seafood",
      template: "%s | THE MEATRIX SUPPLIES."
    },
    description: baseDescription,
    keywords: [
      'premium meats Nairobi',
      'butcher shop Kenya',
      'fresh seafood Nairobi',
      'beef cuts Nairobi',
      'goat meat Kenya',
      'chicken breast Nairobi',
      'seafood delivery CBD',
      'City Market butcher',
      'quality meats Kenya',
    ].join(', '),
    authors: [{ name: 'THE MEATRIX SUPPLIES.' }],
    creator: 'THE MEATRIX SUPPLIES.',
    publisher: 'THE MEATRIX SUPPLIES.',
    formatDetection: {
      email: false,
      address: false,
      telephone: false,
    },
    metadataBase: new URL('https://themeatrix.co.ke'),
    alternates: {
      canonical: '/',
    },
    // ADD: Icons for better branding
    icons: {
  icon: [
    { url: '/favicon.ico', sizes: '48x48' },
    { url: '/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
    { url: '/favicon-16x16.png', sizes: '16x16', type: 'image/png' }
  ],
  apple: [
    { url: '/apple-touch-icon.png', sizes: '180x180', type: 'image/png' }
  ],
  other: [
    { rel: 'manifest', url: '/manifest.json' },
    { rel: 'icon', url: '/android-chrome-192x192.png', sizes: '192x192', type: 'image/png' },
    { rel: 'icon', url: '/android-chrome-512x512.png', sizes: '512x512', type: 'image/png' }
  ]
},

    openGraph: {
      type: 'website',
      locale: 'en_KE',
      url: 'https://themeatrix.co.ke',
      siteName: 'THE MEATRIX SUPPLIES.',
      title: "THE MEATRIX SUPPLIES. - Premium Meats & Seafood",
      description: baseDescription,
      images: [
        {
          url: '/log.png',
          width: 1200,
          height: 630,
          alt: 'THE MEATRIX SUPPLIES. - Premium Meats & Seafood',
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: "THE MEATRIX SUPPLIES. - Premium Meats & Seafood",
      description: baseDescription,
      creator: '@themeatrixco',
      images: ['/log.png'],
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        'max-video-preview': -1,
        'max-image-preview': 'large',
        'max-snippet': -1,
      },
    },
  };
}

function generateStructuredData() {
  const structuredData = {
    '@context': 'https://schema.org',
    '@type': 'ButcherShop',
    name: 'THE MEATRIX SUPPLIES.',
    logo: "https://www.themeatrix.co.ke/logo.png",
    image: "https://www.themeatrix.co.ke/og-image.jpg",
    description: "Nairobi's premier butcher shop offering premium meats and seafood",
    url: 'https://themeatrix.co.ke',
    telephone: '+254-789-609951',
    email: 'info@themeatrix.co.ke',
    address: {
      '@type': 'PostalAddress',
      streetAddress: 'City Market, Ground Floor Stall 63',
      addressLocality: 'Nairobi',
      addressRegion: 'Nairobi',
      postalCode: '00100',
      addressCountry: 'KE'
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: -1.2841,
      longitude: 36.8155
    },
    openingHours: [
      'Mo-Sa 07:00-20:00',
      'Su 09:00-18:00'
    ],
    priceRange: '$$',
    servesCuisine: 'Kenyan',
    sameAs: [
      'https://instagram.com/themeatrixco',
      'https://twitter.com/themeatrixco'
    ],
    hasOfferCatalog: {
      '@type': 'OfferCatalog',
      name: 'Meat Products',
      itemListElement: [
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Product',
            name: 'Beef Cuts'
          }
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Product',
            name: 'Chicken Products'
          }
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Product',
            name: 'Seafood'
          }
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Product',
            name: 'Goat & Mutton'
          }
        }
      ]
    }
  };

  return structuredData;
}

// ADD: Organization structured data specifically for branding
function generateOrganizationStructuredData() {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "THE MEATRIX SUPPLIES.",
    "url": "https://www.themeatrix.co.ke",
    "logo": "https://www.themeatrix.co.ke/logo.png",
    "description": "Nairobi's premier butcher shop offering premium meats and seafood",
    "sameAs": [
      "https://instagram.com/themeatrixco",
      "https://twitter.com/themeatrixco"
    ]
  };
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const structuredData = generateStructuredData();
  const organizationStructuredData = generateOrganizationStructuredData();

  return (
    <html lang="en-KE">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#8B0000" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="default" />
        <meta name="apple-mobile-web-app-title" content="THE MEATRIX" />
        
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        
        {/* ADD: Web App Manifest for better mobile branding */}
        <link rel="manifest" href="/manifest.json" />
        
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        
        {/* Business structured data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
        
        {/* ADD: Organization structured data for Google branding */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationStructuredData) }}
        />

        <link rel="dns-prefetch" href="//images.unsplash.com" />
        <link rel="dns-prefetch" href="//maps.googleapis.com" />
      </head>
      <body style={{ 
        margin: 0, 
        padding: 0, 
        fontFamily: 'system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
        WebkitFontSmoothing: 'antialiased',
        MozOsxFontSmoothing: 'grayscale',
        lineHeight: '1.6',
        color: '#36454F',
        backgroundColor: 'white'
      }}>
        {children}
        <Analytics />
        
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.addEventListener('load', function() {
                if ('connection' in navigator) {
                  console.log('User network type:', navigator.connection.effectiveType);
                }
              });

              window.addEventListener('error', function(e) {
                console.error('Page error:', e.error);
              });
            `
          }}
        />
      </body>
    </html>
  )
}
