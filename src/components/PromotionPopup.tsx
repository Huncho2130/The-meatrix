'use client'
import { usePromotion } from '../utils/usePromotion'

export default function PromotionPopup() {
  const { promotion, popupVisible, closePopup } = usePromotion()

  if (!promotion || !popupVisible) return null

  return (
    <div style={{
      position: 'fixed', top: 0, left: 0, right: 0, bottom: 0,
      background: 'rgba(0,0,0,0.8)', display: 'flex',
      alignItems: 'center', justifyContent: 'center', zIndex: 1000
    }}>
      <div style={{ background: 'white', padding: '30px', borderRadius: '15px', textAlign: 'center' }}>
        <h2>{promotion.name}</h2>
        <p>{promotion.description}</p>
        <p>{promotion.discount}% OFF - Use code: {promotion.couponCode}</p>
        <button onClick={() => window.location.href='/products'}>🛒 Shop Now</button>
        <button onClick={closePopup}>✕</button>
      </div>
    </div>
  )
}
