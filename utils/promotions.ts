// utils/promotions.ts

export interface Promotion {
  id: string;
  name: string;
  description: string;
  discount: number;
  startDate: string;
  endDate: string;
  isActive: boolean;
  bannerImage?: string;
  couponCode: string;
}

export const kenyanHolidays: Promotion[] = [
  {
    id: 'christmas-2025',
    name: 'Christmas Special 🎄',
    description: 'Spread holiday cheer with 10% off all premium cuts! Perfect for your Christmas celebrations.',
    discount: 10,
    startDate: '2025-12-20',
    endDate: '2025-12-26',
    isActive: true,
    couponCode: 'XMAS2025'
  },
  {
    id: 'new-year-2026',
    name: 'New Year Celebration 🎊',
    description: 'Start the year right with 10% discount on all orders! Fresh start with premium meats.',
    discount: 10,
    startDate: '2025-12-30',
    endDate: '2026-01-05',
    isActive: true,
    couponCode: 'NEWYEAR2026'
  },
  {
    id: 'eid-al-fitr-2026',
    name: 'Eid al-Fitr Special 🌙',
    description: 'Celebrate Eid with 10% off on premium meats! Perfect for your festive meals.',
    discount: 10,
    startDate: '2026-03-30',
    endDate: '2026-04-02',
    isActive: true,
    couponCode: 'EID2026'
  },
  {
    id: 'eid-al-adha-2026',
    name: 'Eid al-Adha Special 🐑',
    description: 'Special discounts for Eid al-Adha celebrations! Quality meats for your feast.',
    discount: 10,
    startDate: '2026-06-06',
    endDate: '2026-06-09',
    isActive: true,
    couponCode: 'EIDADHA2026'
  },
  {
    id: 'mashujaa-day-2025',
    name: 'Mashujaa Day Special 🇰🇪',
    description: 'Honor Kenyan heroes with 10% off all products! Celebrate with quality.',
    discount: 10,
    startDate: '2025-10-20',
    endDate: '2025-10-20',
    isActive: true,
    couponCode: 'SHUJAA2025'
  },
  {
    id: 'jamhuri-day-2025',
    name: 'Jamhuri Day Special 🎉',
    description: 'Celebrate independence with special discounts! Proudly Kenyan.',
    discount: 10,
    startDate: '2025-12-12',
    endDate: '2025-12-12',
    isActive: true,
    couponCode: 'JAMHURI2025'
  },
  {
    id: 'madaraka-day-2025',
    name: 'Madaraka Day Special 🏆',
    description: 'Commemorate self-governance with 10% off! Quality for celebrations.',
    discount: 10,
    startDate: '2025-06-01',
    endDate: '2025-06-01',
    isActive: true,
    couponCode: 'MADARAKA2025'
  },
  {
    id: 'labour-day-2025',
    name: 'Labour Day Special 💪',
    description: 'Special offer for all hardworking Kenyans! You deserve the best.',
    discount: 10,
    startDate: '2025-05-01',
    endDate: '2025-05-01',
    isActive: true,
    couponCode: 'LABOUR2025'
  },
  {
    id: 'valentines-2026',
    name: 'Valentine\'s Day Special ❤️',
    description: 'Romantic dinner? Get 10% off premium cuts for your special night!',
    discount: 10,
    startDate: '2026-02-12',
    endDate: '2026-02-14',
    isActive: true,
    couponCode: 'LOVE2026'
  },
  {
    id: 'easter-2026',
    name: 'Easter Special 🐣',
    description: 'Celebrate Easter with 10% off all products! Perfect for family gatherings.',
    discount: 10,
    startDate: '2026-04-18',
    endDate: '2026-04-21',
    isActive: true,
    couponCode: 'EASTER2026'
  }
];

/**
 * Get the current active promotion based on today's date
 * @returns {Promotion | null} Active promotion or null if none
 */
export const getCurrentPromotion = (): Promotion | null => {
  const today = new Date().toISOString().split('T')[0]; // Get today's date in YYYY-MM-DD format
  
  return kenyanHolidays.find(promo => 
    promo.isActive && 
    today >= promo.startDate && 
    today <= promo.endDate
  ) || null;
};

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
