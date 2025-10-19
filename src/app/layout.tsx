import type { Metadata } from 'next';
import './globals.css';

// Import the promotion utilities
import { getCurrentPromotion } from '@/utils/promotions';

// Generate dynamic metadata based on current promotions
export async function generateMetadata(): Promise<Metadata> {
  const currentPromo = getCurrentPromotion();
  
  const baseTitle = "THE MEATRIX CO. - Premium Meats & Seafood | Nairobi's Finest Butcher";
  const baseDescription = "Nairobi's premier butcher shop offering premium beef, goat, mutton, chicken, and seafood. Free CBD delivery. Holiday specials available.";
  
  const title = currentPromo 
    ? `${currentPromo.name} - ${currentPromo.discount}% OFF | THE MEATRIX CO.`
    : baseTitle;
    
  const description = currentPromo
    ? `${currentPromo.description} Get ${currentPromo.discount}% off with code ${currentPromo.couponCode}. ${baseDescription}`
    : baseDescription;

  return {
    title,
    description,
    keywords: [
      'premium meats Nairobi',
      'butcher shop Kenya',
      'fresh seafood Nairobi',
      'holiday discounts',
      'Christmas special',
      'Eid offers',
      'Mashujaa day sale',
      'beef cuts Nairobi',
      'goat meat Kenya',
      'chicken breast Nairobi',
      'seafood delivery CBD',
      'City Market butcher',
      'quality meats Kenya',
      currentPromo?.name || '',
      currentPromo?.couponCode || ''
    ].filter(Boolean).join(', '),
    authors: [{ name: 'THE MEATRIX CO.' }],
    creator: 'THE MEATRIX CO.',
    publisher: 'THE MEATRIX CO.',
    formatDetection: {
      email: false,
      address: false,
      telephone: false,
    },
    metadataBase: new URL('https://themeatrix.co.ke'),
    alternates: {
      canonical: '/',
    },
    openGraph: {
      type: 'website',
      locale: 'en_KE',
      url: 'https://themeatrix.co.ke',
      siteName: 'THE MEATRIX CO.',
      title,
      description,
      images: [
        {
          url: '/og-image.jpg',
          width: 1200,
          height: 630,
          alt: 'THE MEATRIX CO. - Premium Meats & Seafood',
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      creator: '@themeatrixco',
      images: ['/og-image.jpg'],
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
    verification: {
      // Add your Google Search Console verification here
      // google: 'your-google-verification-code',
    },
  };
}

// Generate structured data for SEO
function generateStructuredData() {
  const currentPromo = getCurrentPromotion();
  
  const structuredData = {
    '@context': 'https://schema.org',
    '@type': 'ButcherShop',
    name: 'THE MEATRIX CO.',
    description: "Nairobi's premier butcher shop offering premium meats and seafood",
    url: 'https://themeatrix.co.ke',
    telephone: '+254-707-636105',
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
    },
    ...(currentPromo && {
      makesOffer: {
        '@type': 'Offer',
        name: currentPromo.name,
        description: currentPromo.description,
        price: '0',
        priceCurrency: 'KES',
        priceValidUntil: currentPromo.endDate,
        availability: 'https://schema.org/InStock',
        validFrom: currentPromo.startDate,
        validThrough: currentPromo.endDate,
        category: currentPromo.couponCode
      }
    })
  };

  return structuredData;
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const structuredData = generateStructuredData();
  const currentPromo = getCurrentPromotion();

  return (
    <html lang="en-KE">
      <head>
        {/* Essential Meta Tags */}
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#36454F" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="default" />
        
        {/* Favicon and Icons */}
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        
        {/* Preload Critical Resources */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        
        {/* Structured Data for SEO */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
        
        {/* Additional Promotion Meta Tags */}
        {currentPromo && (
          <>
            <meta name="promotion:title" content={currentPromo.name} />
            <meta name="promotion:discount" content={currentPromo.discount.toString()} />
            <meta name="promotion:code" content={currentPromo.couponCode} />
            <meta name="promotion:valid_until" content={currentPromo.endDate} />
          </>
        )}

        {/* Performance Optimizations */}
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
        {/* Holiday Banner Slot - This will be used by the HolidayBanner component */}
        <div id="holiday-banner"></div>
        
        {/* Promotion Popup Slot - This will be used by the PromotionPopup component */}
        <div id="promotion-popup"></div>
        
        {children}
        
        {/* Performance Monitoring Script */}
        <script
          dangerouslySetInnerHTML={{
            __html: `
              // Simple performance monitoring
              window.addEventListener('load', function() {
                if ('connection' in navigator) {
                  console.log('User network type:', navigator.connection.effectiveType);
                }
                
                // Track promotion views
                const promotion = ${JSON.stringify(currentPromo)};
                if (promotion) {
                  console.log('Active promotion:', promotion.name);
                }
              });
            `
          }}
        />
      </body>
    </html>
  )
}
