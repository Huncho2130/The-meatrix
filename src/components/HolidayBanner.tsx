'use client'
import { usePromotion } from '../utils/usePromotion'
import { useState, useEffect } from 'react'

export default function HolidayBanner() {
  const { promotion, bannerVisible, closeBanner } = usePromotion()
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    const mediaQuery = window.matchMedia('(max-width: 767px)')
    const handleResize = (e: MediaQueryListEvent) => setIsMobile(e.matches)
    setIsMobile(mediaQuery.matches)
    mediaQuery.addEventListener('change', handleResize)
    return () => mediaQuery.removeEventListener('change', handleResize)
  }, [])

  if (!promotion || !bannerVisible) return null

  return (
    <div style={{
      background: 'linear-gradient(135deg, #800020 0%, #600018 100%)',
      color: 'white',
      padding: isMobile ? '10px 15px' : '12px 20px',
      textAlign: 'center',
      position: 'relative',
      zIndex: 49
    }}>
      <span>{promotion.name}: {promotion.description}</span>
      <button onClick={closeBanner}>✕</button>
      <button onClick={() => window.location.href='/products'}>🛒 Shop Now</button>
    </div>
  )
}
