
'use client'
import { useCart } from '@/context/cartContext'
import { MessageCircle, X, ShoppingBag, Trash2 } from 'lucide-react'
import { useState, useEffect } from 'react'

export default function Cart() {
  const { cart, updateQuantity, removeFromCart } = useCart()
  const [isOpen, setIsOpen] = useState(false)
  const [isProcessing, setIsProcessing] = useState(false)
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768)
    checkMobile()
    window.addEventListener('resize', checkMobile)
    return () => window.removeEventListener('resize', checkMobile)
  }, [])

  const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0)
  const totalKg = cart.reduce((sum, item) => sum + item.quantity, 0)

  const sendWhatsAppOrder = () => {
    if (cart.length === 0) return
    setIsProcessing(true)
    const orderNumber = `PC${Date.now().toString().slice(-6)}`
    const message = `
*PRIME CUTS KENYA ORDER*
Order #: ${orderNumber}

${cart.map(i => `• ${i.name} ${i.quantity}kg - KSh ${(i.price * i.quantity).toLocaleString()}`).join('\n')}
Total: ${totalKg.toFixed(1)}kg — KSh ${total.toLocaleString()}
`.trim()
    const businessPhone = '254707636105'
    window.open(`https://wa.me/${businessPhone}?text=${encodeURIComponent(message)}`, '_blank')
    setTimeout(() => setIsProcessing(false), 1500)
  }

  if (cart.length === 0) return null

  return (
    <>
      {/* Floating button */}
      {!isOpen && (
        <button
          onClick={() => setIsOpen(true)}
          style={{
            position: 'fixed',
            bottom: '20px',
            right: '20px',
            background: '#800020',
            color: 'white',
            padding: '14px 20px',
            borderRadius: '50px',
            boxShadow: '0 6px 20px rgba(128,0,32,0.4)',
            border: 'none',
            fontWeight: '600',
            cursor: 'pointer',
            zIndex: 9999,
          }}
        >
          🛒 View Cart ({cart.length})
        </button>
      )}

      {isOpen && (
        <div
          style={{
            position: 'fixed',
            bottom: '20px',
            right: '20px',
            zIndex: 9999,
            background: 'rgba(255,255,255,0.98)',
            backdropFilter: 'blur(20px)',
            borderRadius: '20px',
            boxShadow: '0 25px 50px rgba(0,0,0,0.3)',
            padding: '20px',
            width: isMobile ? 'calc(100% - 40px)' : '350px',
            maxHeight: '70vh',
            overflowY: 'auto',
            border: '2px solid rgba(128,0,32,0.1)',
            animation: 'slideUp 0.3s ease-in-out',
          }}
        >
          {/* Header */}
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              marginBottom: '15px',
              borderBottom: '2px solid rgba(128,0,32,0.2)',
              paddingBottom: '10px',
            }}
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
              <ShoppingBag color="#800020" size={20} />
              <h2 style={{ margin: 0, fontWeight: 700, fontSize: '1rem', color: '#800020' }}>
                Your Cart ({cart.length})
              </h2>
            </div>
            <button
              onClick={() => setIsOpen(false)}
              style={{
                background: 'rgba(128,0,32,0.1)',
                border: 'none',
                borderRadius: '6px',
                color: '#800020',
                padding: '4px',
                cursor: 'pointer',
              }}
            >
              <X size={16} />
            </button>
          </div>

          {/* Cart Items */}
          {cart.map(item => (
            <div
              key={item.id}
              style={{
                background: 'rgba(255,255,255,0.9)',
                border: '1.5px solid rgba(128,0,32,0.15)',
                borderRadius: '12px',
                padding: '10px',
                marginBottom: '10px',
                display: 'flex',
                flexDirection: 'column',
              }}
            >
              <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                <strong style={{ color: '#2b2b2b' }}>{item.name}</strong>
                <button
                  onClick={() => removeFromCart(item.id)}
                  style={{
                    background: 'transparent',
                    border: 'none',
                    color: '#a00',
                    cursor: 'pointer',
                  }}
                  title="Remove item"
                >
                  <Trash2 size={16} />
                </button>
              </div>

              <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginTop: '8px' }}>
                <button
                  onClick={() => updateQuantity(item.id, item.quantity - 0.5)}
                  style={{
                    width: '28px',
                    height: '28px',
                    borderRadius: '50%',
                    border: '2px solid #800020',
                    background: 'white',
                    color: '#800020',
                    fontSize: '18px',
                    fontWeight: 'bold',
                    cursor: 'pointer',
                  }}
                >
                  –
                </button>
                <span style={{ minWidth: '60px', textAlign: 'center', color: '#800020', fontWeight: 600 }}>
                  {item.quantity.toFixed(1)} kg
                </span>
                <button
                  onClick={() => updateQuantity(item.id, item.quantity + 0.5)}
                  style={{
                    width: '28px',
                    height: '28px',
                    borderRadius: '50%',
                    border: '2px solid #800020',
                    background: '#800020',
                    color: 'white',
                    fontSize: '18px',
                    fontWeight: 'bold',
                    cursor: 'pointer',
                  }}
                >
                  +
                </button>
              </div>

              <p style={{ marginTop: '8px', color: '#800020', fontWeight: 600, fontSize: '13px' }}>
                KSh {(item.price * item.quantity).toLocaleString()}
              </p>
            </div>
          ))}

          {/* Total */}
          <div
            style={{
              background: 'linear-gradient(135deg, #800020, #600018)',
              color: 'white',
              padding: '12px',
              borderRadius: '10px',
              display: 'flex',
              justifyContent: 'space-between',
              marginTop: '10px',
              fontWeight: 600,
            }}
          >
            <span>Total ({totalKg.toFixed(1)} kg)</span>
            <span>KSh {total.toLocaleString()}</span>
          </div>

          {/* Order button */}
          <button
            onClick={sendWhatsAppOrder}
            disabled={isProcessing}
            style={{
              width: '100%',
              marginTop: '15px',
              background: isProcessing
                ? '#ccc'
                : 'linear-gradient(135deg, #10b981 0%, #059669 100%)',
              color: 'white',
              padding: '12px',
              borderRadius: '8px',
              fontWeight: 'bold',
              border: 'none',
              cursor: isProcessing ? 'not-allowed' : 'pointer',
              fontSize: '14px',
            }}
          >
            {isProcessing ? '⏳ Processing...' : '📩 Complete Order'}
          </button>
        </div>
      )}
    </>
  )
}
