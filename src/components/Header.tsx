
'use client'
import { useCart } from '@/context/cartContext'
import { ShoppingCart, Phone, MapPin } from 'lucide-react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

export default function Header() {
  const { itemCount } = useCart()
  const pathname = usePathname()

  return (
    <header className="bg-premium-charcoal text-white sticky top-0 z-50 shadow-2xl">
      {/* Top Bar */}
      <div className="bg-premium-gold text-premium-charcoal py-2">
        <div className="container mx-auto px-4 flex justify-between items-center text-sm">
          <div className="flex items-center space-x-4">
            <div className="flex items-center">
              <Phone size={16} className="mr-1" />
              <span>+254 707 636105</span>
            </div>
            <div className="flex items-center">
              <MapPin size={16} className="mr-1" />
              <span>City Market, Ground Floor Stall 63, Nairobi CBD</span>
            </div>
          </div>
          <div className="text-sm">
            Premium Quality • Fresh Daily • Expert Butchers
          </div>
        </div>
      </div>

      {/* Main Navigation */}
      <nav className="container mx-auto px-4 py-4">
        <div className="flex justify-between items-center">
          <div className="flex items-center space-x-12">
            {/* Updated Brand Name */}
            <Link href="/" className="text-3xl font-serif font-bold text-premium-gold hover:opacity-90 transition-opacity">
              THE MEATRIX SUPPLIES.
            </Link>
            
            {/* Updated Navigation Links */}
            <div className="hidden md:flex space-x-8">
              <Link 
                href="/" 
                className={`hover:text-premium-gold transition-colors font-semibold ${
                  pathname === '/' ? 'text-premium-gold border-b-2 border-premium-gold' : ''
                }`}
              >
                HOME
              </Link>
              <Link 
                href="/locations" 
                className={`hover:text-premium-gold transition-colors font-semibold ${
                  pathname.startsWith('/locations') ? 'text-premium-gold border-b-2 border-premium-gold' : ''
                }`}
              >
                DELIVERY AREAS
              </Link>
              <Link 
                href="/products" 
                className={`hover:text-premium-gold transition-colors font-semibold ${
                  pathname === '/products' ? 'text-premium-gold border-b-2 border-premium-gold' : ''
                }`}
              >
                PRODUCTS
              </Link>
              <Link 
                href="/blog" 
                className={`hover:text-premium-gold transition-colors font-semibold ${
                  pathname.startsWith('/blog') ? 'text-premium-gold border-b-2 border-premium-gold' : ''
                }`}
              >
                MEAT BLOG
              </Link>
              <Link 
                href="/about" 
                className={`hover:text-premium-gold transition-colors font-semibold ${
                  pathname === '/about' ? 'text-premium-gold border-b-2 border-premium-gold' : ''
                }`}
              >
                ABOUT
              </Link>
              <Link 
                href="/contact" 
                className={`hover:text-premium-gold transition-colors font-semibold ${
                  pathname === '/contact' ? 'text-premium-gold border-b-2 border-premium-gold' : ''
                }`}
              >
                CONTACT
              </Link>
            </div>
          </div>
          
          {/* Cart Button */}
          <div className="flex items-center space-x-4">
            <button 
              //onClick={toggleCart}
              className="relative p-2 hover:bg-premium-burgundy rounded-lg transition-colors"
            >
              <ShoppingCart size={24} className="text-premium-gold" />
              {itemCount > 0 && (
                <span className="absolute -top-1 -right-1 bg-premium-burgundy text-white rounded-full w-5 h-5 text-xs flex items-center justify-center">
                  {itemCount}
                </span>
              )}
            </button>
          </div>
        </div>
      </nav>
    </header>
  )
}
