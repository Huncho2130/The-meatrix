'use client'
import { useState, useEffect } from 'react'
import { getCurrentPromotion, type Promotion } from '../utils/promotions'

interface PromotionPopupProps {
  isMobile: boolean
  onClose?: () => void
}

export default function PromotionPopup({ isMobile, onClose }: PromotionPopupProps) {
  const [promotion, setPromotion] = useState<Promotion | null>(null)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const currentPromo = getCurrentPromotion()
    if (!currentPromo) return console.log('No promotion right now.')

    setPromotion(currentPromo)

    const lastSeen = localStorage.getItem(`promo_seen_${currentPromo.id}`)
    const today = new Date().toDateString()

    if (lastSeen !== today) {
      // Show popup after 2 seconds
      const timer = setTimeout(() => setIsVisible(true), 2000)
      return () => clearTimeout(timer)
    }
  }, [])

  const handleClose = () => {
    setIsVisible(false)
    if (promotion) {
      localStorage.setItem(`promo_seen_${promotion.id}`, new Date().toDateString())
    }
    onClose?.()
  }

  if (!promotion || !isVisible) return null

  return (
    <div style={{
      position: 'fixed',
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      background: 'rgba(0,0,0,0.7)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      zIndex: 9999,
      padding: '20px',
    }}>
      <div style={{
        background: 'linear-gradient(135deg, #D4AF37 0%, #B8941F 100%)',
        padding: isMobile ? '25px' : '40px',
        borderRadius: '20px',
        maxWidth: isMobile ? '90vw' : '500px',
        width: '100%',
        textAlign: 'center',
        position: 'relative',
        boxShadow: '0 25px 50px rgba(0,0,0,0.5)',
        animation: 'slideUp 0.5s ease'
      }}>
        {/* Close button */}
        <button
          onClick={handleClose}
          style={{
            position: 'absolute',
            top: '15px',
            right: '15px',
            background: 'rgba(255,255,255,0.3)',
            border: 'none',
            borderRadius: '50%',
            width: '35px',
            height: '35px',
            fontSize: '18px',
            cursor: 'pointer',
            color: '#36454F',
            fontWeight: 'bold'
          }}
        >
          ✕
        </button>

        {/* Promo content */}
        <div style={{ background: 'white', padding: isMobile ? '25px' : '30px', borderRadius: '15px', marginBottom: '20px' }}>
          <div style={{ fontSize: isMobile ? '3rem' : '4rem', marginBottom: '15px' }}>🎉</div>
          <h2 style={{ fontSize: isMobile ? '1.5rem' : '2rem', fontWeight: 'bold', marginBottom: '10px', color: '#36454F' }}>
            {promotion.name}
          </h2>
          <p style={{ fontSize: isMobile ? '1rem' : '1.1rem', marginBottom: '20px', color: '#4a5568', lineHeight: '1.5' }}>
            {promotion.description}
          </p>
          <div style={{
            background: 'linear-gradient(135deg, #800020 0%, #600018 100%)',
            color: 'white',
            padding: '15px 25px',
            borderRadius: '50px',
            fontSize: isMobile ? '1.5rem' : '2rem',
            fontWeight: 'bold',
            display: 'inline-block',
            marginBottom: '20px'
          }}>
            {promotion.discount}% OFF
          </div>
          <div style={{ background: '#f8f9fa', padding: '15px', borderRadius: '10px', marginBottom: '20px' }}>
            <p style={{ fontSize: '14px', color: '#36454F', margin: '0 0 8px 0', fontWeight: '600' }}>Use Code:</p>
            <div style={{ background: 'white', padding: '12px', borderRadius: '8px', border: '2px dashed #D4AF37', fontSize: '1.2rem', fontWeight: 'bold', color: '#800020' }}>
              {promotion.couponCode}
            </div>
          </div>
          <p style={{ fontSize: '14px', color: '#6b7280', fontStyle: 'italic' }}>
            * Offer valid until {new Date(promotion.endDate).toLocaleDateString('en-KE', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' })}
          </p>
        </div>

        {/* Shop Now button */}
        <button
          onClick={handleClose}
          style={{
            background: '#36454F',
            color: 'white',
            border: 'none',
            padding: '15px 30px',
            borderRadius: '10px',
            fontSize: '16px',
            fontWeight: 'bold',
            cursor: 'pointer',
            width: '100%',
            transition: 'all 0.3s ease'
          }}
          onMouseOver={(e) => { e.currentTarget.style.background = '#2a363f'; e.currentTarget.style.transform = 'translateY(-2px)'; }}
          onMouseOut={(e) => { e.currentTarget.style.background = '#36454F'; e.currentTarget.style.transform = 'translateY(0)'; }}
        >
          🛒 Shop Now & Save!
        </button>
      </div>

      <style jsx>{`
        @keyframes slideUp {
          from { transform: translateY(50px); opacity: 0; }
          to { transform: translateY(0); opacity: 1; }
        }
      `}</style>
    </div>
  )
}
