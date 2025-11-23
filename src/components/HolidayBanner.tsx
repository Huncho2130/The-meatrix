'use client'
import { getCurrentPromotion } from '../utils/promotions';
import { useEffect, useState } from 'react'

export default function HolidayBanner() {
  const [promotion, setPromotion] = useState<any>(null)
  const [isVisible, setIsVisible] = useState(true)
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    // Check mobile device
    const checkMobile = () => setIsMobile(window.innerWidth < 768)
    checkMobile()
    window.addEventListener('resize', checkMobile)

    // Get current promotion
    const currentPromo = getCurrentPromotion()
    setPromotion(currentPromo)
    
    // Check if user has dismissed this promotion
    if (currentPromo) {
      const lastDismissed = localStorage.getItem(`banner_dismissed_${currentPromo.id}`)
      const today = new Date().toDateString()
      
      if (lastDismissed === today) {
        setIsVisible(false)
      }
    }

    return () => window.removeEventListener('resize', checkMobile)
  }, [])

  const handleClose = () => {
    setIsVisible(false)
    if (promotion) {
      localStorage.setItem(`banner_dismissed_${promotion.id}`, new Date().toDateString())
    }
  }

  const handleShopClick = () => {
    window.location.href = '/products'
  }

  if (!promotion || !isVisible) return null

  return (
    <div style={{
      background: 'linear-gradient(135deg, #800020 0%, #600018 100%)',
      color: 'white',
      padding: isMobile ? '10px 15px' : '12px 20px',
      textAlign: 'center',
      position: 'relative',
      zIndex: 49,
      boxShadow: '0 2px 10px rgba(0,0,0,0.2)',
      animation: 'slideDown 0.5s ease-out'
    }}>
      <style jsx>{`
        @keyframes slideDown {
          from {
            transform: translateY(-100%);
            opacity: 0;
          }
          to {
            transform: translateY(0);
            opacity: 1;
          }
        }
        
        @keyframes pulse {
          0%, 100% {
            transform: scale(1);
          }
          50% {
            transform: scale(1.05);
          }
        }
        
        .pulse {
          animation: pulse 2s infinite;
        }
      `}</style>

      <div style={{
        maxWidth: '1200px',
        margin: '0 auto',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        flexWrap: 'wrap',
        gap: '10px'
      }}>
        {/* Promotion Message */}
        <div style={{
          display: 'flex',
          alignItems: 'center',
          gap: '10px',
          flex: 1,
          justifyContent: isMobile ? 'center' : 'flex-start',
          flexWrap: 'wrap'
        }}>
          <div style={{
            background: 'rgba(255,255,255,0.2)',
            borderRadius: '50%',
            width: '30px',
            height: '30px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            fontSize: '16px',
            animation: 'pulse 2s infinite'
          }} className="pulse">
            {promotion.name.includes('Christmas') ? '🎄' : 
             promotion.name.includes('Eid') ? '🌙' :
             promotion.name.includes('Valentine') ? '❤️' :
             promotion.name.includes('Easter') ? '🐣' :
             promotion.name.includes('Black Friday') ? '⚫' : '🎉'}
          </div>
          
          <div style={{
            display: 'flex',
            alignItems: 'center',
            gap: '15px',
            flexWrap: isMobile ? 'wrap' : 'nowrap',
            justifyContent: 'center'
          }}>
            <span style={{ 
              fontWeight: '700', 
              fontSize: isMobile ? '14px' : '15px',
              textShadow: '0 1px 2px rgba(0,0,0,0.3)'
            }}>
              {promotion.name}
            </span>
            
            <span style={{ 
              fontWeight: '600', 
              fontSize: isMobile ? '13px' : '14px',
              opacity: '0.95'
            }}>
              {promotion.description}
            </span>
            
            {promotion.discount > 0 && (
              <div style={{
                display: 'flex',
                alignItems: 'center',
                gap: '8px',
                background: 'rgba(212, 175, 55, 0.9)',
                padding: '6px 12px',
                borderRadius: '20px',
                border: '2px solid rgba(255,255,255,0.3)'
              }}>
                <span style={{
                  fontWeight: '700',
                  fontSize: isMobile ? '12px' : '13px',
                  color: '#36454F'
                }}>
                  USE CODE:
                </span>
                <code style={{
                  background: '#36454F',
                  color: '#D4AF37',
                  padding: '4px 8px',
                  borderRadius: '6px',
                  fontWeight: 'bold',
                  fontSize: isMobile ? '12px' : '13px',
                  fontFamily: 'monospace',
                  letterSpacing: '1px'
                }}>
                  {promotion.couponCode}
                </code>
              </div>
            )}

            {promotion.discount > 0 ? (
              <div style={{
                background: 'linear-gradient(135deg, #D4AF37 0%, #B8941F 100%)',
                color: '#36454F',
                padding: '6px 12px',
                borderRadius: '15px',
                fontWeight: '800',
                fontSize: isMobile ? '12px' : '13px',
                boxShadow: '0 2px 8px rgba(212, 175, 55, 0.4)'
              }}>
                {promotion.discount}% OFF
              </div>
            ) : (
              <div style={{
                background: 'linear-gradient(135deg, #10B981 0%, #059669 100%)',
                color: 'white',
                padding: '6px 12px',
                borderRadius: '15px',
                fontWeight: '800',
                fontSize: isMobile ? '12px' : '13px',
                boxShadow: '0 2px 8px rgba(16, 185, 129, 0.4)'
              }}>
                FREE DELIVERY
              </div>
            )}
          </div>
        </div>

        {/* Action Buttons */}
        <div style={{
          display: 'flex',
          alignItems: 'center',
          gap: '10px',
          flexShrink: 0
        }}>
          <button
            onClick={handleShopClick}
            style={{
              background: 'linear-gradient(135deg, #D4AF37 0%, #B8941F 100%)',
              color: '#36454F',
              border: 'none',
              padding: isMobile ? '6px 12px' : '8px 16px',
              borderRadius: '8px',
              fontSize: isMobile ? '12px' : '13px',
              fontWeight: '700',
              cursor: 'pointer',
              transition: 'all 0.3s ease',
              whiteSpace: 'nowrap',
              boxShadow: '0 2px 8px rgba(212, 175, 55, 0.3)'
            }}
            onMouseOver={(e) => {
              e.currentTarget.style.transform = 'translateY(-2px)';
              e.currentTarget.style.boxShadow = '0 4px 12px rgba(212, 175, 55, 0.5)';
            }}
            onMouseOut={(e) => {
              e.currentTarget.style.transform = 'translateY(0)';
              e.currentTarget.style.boxShadow = '0 2px 8px rgba(212, 175, 55, 0.3)';
            }}
          >
            🛒 Shop Now
          </button>

          <button
            onClick={handleClose}
            style={{
              background: 'rgba(255,255,255,0.2)',
              border: 'none',
              color: 'white',
              borderRadius: '50%',
              width: '28px',
              height: '28px',
              cursor: 'pointer',
              fontSize: '14px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              transition: 'all 0.2s ease',
              flexShrink: 0
            }}
            onMouseOver={(e) => {
              e.currentTarget.style.background = 'rgba(255,255,255,0.3)';
              e.currentTarget.style.transform = 'scale(1.1)';
            }}
            onMouseOut={(e) => {
              e.currentTarget.style.background = 'rgba(255,255,255,0.2)';
              e.currentTarget.style.transform = 'scale(1)';
            }}
            title="Close banner"
          >
            ✕
          </button>
        </div>
      </div>

      {/* Progress Bar */}
      <div style={{
        position: 'absolute',
        bottom: 0,
        left: 0,
        height: '3px',
        background: 'linear-gradient(90deg, #D4AF37, #B8941F)',
        width: '100%',
        transform: 'scaleX(1)',
        transformOrigin: 'left',
        animation: 'progress 10s linear'
      }}>
        <style jsx>{`
          @keyframes progress {
            from {
              transform: scaleX(1);
            }
            to {
              transform: scaleX(0);
            }
          }
        `}</style>
      </div>
    </div>
  )
    }
