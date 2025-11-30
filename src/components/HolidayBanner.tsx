
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

  const getEmoji = (name: string) => {
    if (name.includes('Christmas')) return '🎄'
    if (name.includes('Eid')) return '🌙'
    if (name.includes('Valentine')) return '❤️'
    if (name.includes('Easter')) return '🐣'
    if (name.includes('Black Friday')) return '⚫'
    return '🎉'
  }

  return (
    <div style={{
      background: 'linear-gradient(135deg, #800020 0%, #600018 100%)',
      color: 'white',
      padding: isMobile ? '10px 15px' : '12px 20px',
      textAlign: 'center',
      position: 'relative',
      zIndex: 49,
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      flexWrap: 'wrap',
      gap: '10px'
    }}>
      <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
        <div style={{
          background: 'rgba(255,255,255,0.2)',
          borderRadius: '50%',
          width: '30px',
          height: '30px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          fontSize: '16px'
        }}>{getEmoji(promotion.name)}</div>
        <span style={{ fontWeight: '700' }}>{promotion.name}: {promotion.description}</span>
      </div>
      <div style={{ display: 'flex', gap: '10px', flexWrap: isMobile ? 'wrap' : 'nowrap' }}>
        <div style={{
          background: 'linear-gradient(135deg, #D4AF37 0%, #B8941F 100%)',
          color: '#36454F',
          padding: '6px 12px',
          borderRadius: '15px',
          fontWeight: '800'
        }}>{promotion.discount}% OFF</div>
        <button onClick={() => window.location.href='/products'} style={{
          background: 'white',
          color: '#800020',
          border: 'none',
          padding: '6px 12px',
          borderRadius: '8px',
          fontWeight: '700',
          cursor: 'pointer'
        }}>🛒 Shop Now</button>
        <button onClick={closeBanner} style={{
          background: 'rgba(255,255,255,0.2)',
          border: 'none',
          color: 'white',
          borderRadius: '50%',
          width: '28px',
          height: '28px',
          cursor: 'pointer'
        }}>✕</button>
      </div>
    </div>
  )
}
