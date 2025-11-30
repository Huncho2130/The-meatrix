import type { Metadata } from 'next'
import './globals.css'
import { Analytics } from '@vercel/analytics/react'

export async function generateMetadata(): Promise<Metadata> {
  const baseTitle = "THE MEATRIX SUPPLIES. - Premium Meats & Seafood | Nairobi's Finest Butcher"
  const baseDescription = "Nairobi's premier butcher shop offering premium beef, goat, mutton, chicken, and seafood. Free CBD delivery. Holiday specials available."

  return {
    title: {
      default: "THE MEATRIX SUPPLIES. - Premium Meats & Seafood",
      template: "%s | THE MEATRIX SUPPLIES."
    },
    description: baseDescription,
    metadataBase: new URL('https://themeatrix.co.ke'),
    alternates: { canonical: '/' },
  }
}

function generateStructuredData() { /* keep your structured data */ }
function generateOrganizationStructuredData() { /* keep your structured data */ }

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const structuredData = generateStructuredData()
  const organizationStructuredData = generateOrganizationStructuredData()

  return (
    <html lang="en-KE">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#8B0000" />
        <link rel="icon" href="/favicon.ico" />

        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }} />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationStructuredData) }} />
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

        {/* Render PromotionPopup as a client component */}
        <PromotionPopup />

        <Analytics />
      </body>
    </html>
  )
}
