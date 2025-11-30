
'use client'

import { useState, useEffect } from 'react'

export function usePromotion() {
  const [promotion, setPromotion] = useState<any>(null)
  const [popupVisible, setPopupVisible] = useState(false)
  const [bannerVisible, setBannerVisible] = useState(true)

  useEffect(() => {
    // Mock current promotion
    const currentPromo = {
      id: 1,
      name: 'Holiday Special',
      description: 'Get 20% off premium meats!',
      discount: 20,
      couponCode: 'HOLIDAY20',
      endDate: '2025-12-31'
    }

    setPromotion(currentPromo)

    const today = new Date().toDateString()

    // Popup logic
    const lastSeen = localStorage.getItem(`promo_seen_${currentPromo.id}`)
    if (!lastSeen || lastSeen !== today) {
      setTimeout(() => setPopupVisible(true), 2000) // 2s delay
    }

    // Banner logic
    const lastDismissed = localStorage.getItem(`banner_dismissed_${currentPromo.id}`)
    if (lastDismissed === today) {
      setBannerVisible(false)
    }
  }, [])

  const closePopup = () => {
    setPopupVisible(false)
    if (promotion) {
      localStorage.setItem(`promo_seen_${promotion.id}`, new Date().toDateString())
    }
  }

  const closeBanner = () => {
    setBannerVisible(false)
    if (promotion) {
      localStorage.setItem(`banner_dismissed_${promotion.id}`, new Date().toDateString())
    }
  }

  return { promotion, popupVisible, bannerVisible, closePopup, closeBanner }
}
