'use client'
import { useState, useEffect } from 'react'
import { getCurrentPromotion, type Promotion } from './promotions'

export function usePromotion() {
  const [promotion, setPromotion] = useState<Promotion | null>(null)
  const [bannerVisible, setBannerVisible] = useState(false)
  const [popupVisible, setPopupVisible] = useState(false)

  useEffect(() => {
    const promo = getCurrentPromotion()
    if (!promo) return

    setPromotion(promo)

    const today = new Date().toDateString()
    const bannerKey = `banner_dismissed_${promo.id}`
    const popupKey = `popup_seen_${promo.id}`

    const bannerDismissed = localStorage.getItem(bannerKey) === today
    const popupSeen = localStorage.getItem(popupKey) === today

    if (!bannerDismissed) setBannerVisible(true)
    if (!popupSeen) setTimeout(() => setPopupVisible(true), 2000) // 2s delay

  }, [])

  const closeBanner = () => {
    if (!promotion) return
    const today = new Date().toDateString()
    localStorage.setItem(`banner_dismissed_${promotion.id}`, today)
    setBannerVisible(false)
  }

  const closePopup = () => {
    if (!promotion) return
    const today = new Date().toDateString()
    localStorage.setItem(`popup_seen_${promotion.id}`, today)
    setPopupVisible(false)
  }

  return {
    promotion,
    bannerVisible,
    popupVisible,
    closeBanner,
    closePopup
  }
}
