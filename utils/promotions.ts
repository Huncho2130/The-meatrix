
/**
 * Check if there's any active promotion
 * @returns {boolean} True if promotion is active
 */
export const isPromotionActive = (): boolean => {
  return getCurrentPromotion() !== null;
};

/**
 * Get upcoming promotions (next 30 days)
 * @returns {Promotion[]} Array of upcoming promotions
 */
export const getUpcomingPromotions = (): Promotion[] => {
  const today = new Date();
  const nextMonth = new Date();
  nextMonth.setDate(today.getDate() + 30);
  
  return kenyanHolidays.filter(promo => 
    promo.isActive && 
    promo.startDate > today.toISOString().split('T')[0] &&
    promo.startDate <= nextMonth.toISOString().split('T')[0]
  );
};

/**
 * Format discount text for display
 * @param {number} discount - Discount percentage
 * @returns {string} Formatted discount text
 */
export const formatDiscount = (discount: number): string => {
  return `${discount}% OFF`;
};

/**
 * Check if a specific promotion is currently active
 * @param {string} promotionId - The promotion ID to check
 * @returns {boolean} True if the specific promotion is active
 */
export const isPromotionActiveById = (promotionId: string): boolean => {
  const promotion = kenyanHolidays.find(promo => promo.id === promotionId);
  if (!promotion) return false;
  
  const today = new Date().toISOString().split('T')[0];
  return promotion.isActive && today >= promotion.startDate && today <= promotion.endDate;
};

