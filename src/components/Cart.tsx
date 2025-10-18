'use client'
import { useCart } from '@/context/cartContext'
import { useState } from 'react'

export default function Cart() {
  const {
    cart,
    removeFromCart,
    updateQuantity,
    clearCart,
    isOpen,
    setIsOpen,
    totalPrice,
    totalKilos,
    itemCount // Make sure this exists in your context
  } = useCart()

  const [isProcessing, setIsProcessing] = useState(false)
  const [showCustomerForm, setShowCustomerForm] = useState(false)
  const [customerDetails, setCustomerDetails] = useState({
    name: '',
    address: '', 
    phone: '',
    instructions: ''
  })

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setCustomerDetails(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const sendWhatsAppOrder = () => {
    if (!customerDetails.name || !customerDetails.address || !customerDetails.phone) {
      alert('Please fill in all required customer details')
      return
    }

    setIsProcessing(true)

    const orderItems = cart.map(item => 
      `• ${item.name} - ${item.quantity}kg - KSh ${(item.price * item.quantity).toLocaleString()}`
    ).join('%0A')

    const message = `*NEW ORDER - THE MEATRIX CO.*%0A%0A*🧾 ORDER SUMMARY*%0A${orderItems}%0A%0A*💰 TOTAL: KSh ${totalPrice.toLocaleString()}*%0A*⚖️ TOTAL WEIGHT: ${totalKilos}kg*%0A%0A*👤 CUSTOMER DETAILS*%0A• Name: ${customerDetails.name}%0A• Address: ${customerDetails.address}%0A• Phone: ${customerDetails.phone}%0A• Special Instructions: ${customerDetails.instructions || 'None'}%0A%0A*📍 Delivery requested via website*`

    window.open(`https://wa.me/254707636105?text=${message}`, '_blank')
    
    setTimeout(() => {
      setIsProcessing(false)
      clearCart()
      setShowCustomerForm(false)
      setCustomerDetails({ name: '', address: '', phone: '', instructions: '' })
    }, 2000)
  }

  const total = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0)
  const totalKg = cart.reduce((sum, item) => sum + item.quantity, 0)

  return (
    <>
      {/* ADD THIS FLOATING CART BUTTON - Always Visible */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        style={{
          position: 'fixed',
          bottom: '20px',
          right: '20px',
          background: 'linear-gradient(135deg, #D4AF37, #B8941F)',
          color: '#36454F',
          border: 'none',
          borderRadius: '50%',
          width: '60px',
          height: '60px',
          cursor: 'pointer',
          boxShadow: '0 4px 20px rgba(0,0,0,0.3)',
          zIndex: 999,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          fontSize: '24px',
          fontWeight: 'bold'
        }}
      >
        🛒
        {itemCount > 0 && (
          <span style={{
            position: 'absolute',
            top: '-5px',
            right: '-5px',
            background: '#800020',
            color: 'white',
            borderRadius: '50%',
            width: '20px',
            height: '20px',
            fontSize: '12px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center'
          }}>
            {itemCount}
          </span>
        )}
      </button>

      {/* YOUR EXISTING CART PANEL - Only shows when isOpen is true */}
      {isOpen && (
        <div style={{
          position: 'fixed',
          bottom: '90px', // Position above the toggle button
          right: '20px',
          width: '400px',
          maxWidth: '90vw',
          background: 'white',
          borderRadius: '16px',
          boxShadow: '0 10px 40px rgba(0,0,0,0.2)',
          zIndex: 1000,
          border: '2px solid #D4AF37'
        }}>
          {/* Cart Header */}
          <div style={{
            background: 'linear-gradient(135deg, #36454F 0%, #2f3a42 100%)',
            color: 'white',
            padding: '20px',
            borderRadius: '14px 14px 0 0',
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center'
          }}>
            <h3 style={{ margin: 0, fontSize: '18px', fontWeight: 'bold' }}>
              🛒 Your Cart ({cart.length} items)
            </h3>
            <button
              onClick={() => setIsOpen(false)}
              style={{
                background: 'none',
                border: 'none',
                color: 'white',
                fontSize: '20px',
                cursor: 'pointer'
              }}
            >
              ✕
            </button>
          </div>

          {/* Cart Items */}
          <div style={{ maxHeight: '400px', overflowY: 'auto', padding: '20px' }}>
            {cart.length === 0 ? (
              <div style={{ textAlign: 'center', color: '#666', padding: '40px 20px' }}>
                <div style={{ fontSize: '48px', marginBottom: '10px' }}>🛒</div>
                <p>Your cart is empty</p>
                <p style={{ fontSize: '14px', marginTop: '5px' }}>Add some premium cuts to get started!</p>
              </div>
            ) : (
              cart.map(item => (
                <div key={item.id} style={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  padding: '15px 0',
                  borderBottom: '1px solid #eee'
                }}>
                  <div style={{ flex: 1 }}>
                    <div style={{ fontWeight: 'bold', color: '#36454F' }}>{item.name}</div>
                    <div style={{ fontSize: '14px', color: '#D4AF37', fontWeight: '600' }}>
                      KSh {item.price.toLocaleString()}/kg
                    </div>
                  </div>
                  
                  {/* Quantity Controls */}
                  <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                    <button
                      onClick={() => updateQuantity(item.id, item.quantity - 0.5)}
                      style={{
                        background: '#800020',
                        color: 'white',
                        border: 'none',
                        width: '30px',
                        height: '30px',
                        borderRadius: '50%',
                        cursor: 'pointer',
                        fontSize: '16px',
                        fontWeight: 'bold'
                      }}
                    >
                      -
                    </button>
                    
                    <span style={{
                      minWidth: '50px',
                      textAlign: 'center',
                      fontWeight: 'bold',
                      color: '#36454F'
                    }}>
                      {item.quantity} kg
                    </span>
                    
                    <button
                      onClick={() => updateQuantity(item.id, item.quantity + 0.5)}
                      style={{
                        background: '#25D366',
                        color: 'white',
                        border: 'none',
                        width: '30px',
                        height: '30px',
                        borderRadius: '50%',
                        cursor: 'pointer',
                        fontSize: '16px',
                        fontWeight: 'bold'
                      }}
                    >
                      +
                    </button>
                  </div>
                  
                  <div style={{ textAlign: 'right', minWidth: '80px' }}>
                    <div style={{ fontWeight: 'bold', color: '#36454F' }}>
                      KSh {(item.price * item.quantity).toLocaleString()}
                    </div>
                    <button
                      onClick={() => removeFromCart(item.id)}
                      style={{
                        background: 'none',
                        border: 'none',
                        color: '#dc2626',
                        cursor: 'pointer',
                        fontSize: '12px',
                        marginTop: '5px'
                      }}
                    >
                      Remove
                    </button>
                  </div>
                </div>
              ))
            )}
          </div>

          {/* Cart Footer */}
          {cart.length > 0 && (
            <div style={{
              padding: '20px',
              background: '#f8f9fa',
              borderRadius: '0 0 14px 14px',
              borderTop: '1px solid #eee'
            }}>
              {/* Customer Details Form */}
              {!showCustomerForm ? (
                <button
                  onClick={() => setShowCustomerForm(true)}
                  style={{
                    width: '100%',
                    background: 'linear-gradient(135deg, #25D366, #128C7E)',
                    color: 'white',
                    padding: '12px',
                    borderRadius: '8px',
                    fontWeight: 'bold',
                    border: 'none',
                    cursor: 'pointer',
                    fontSize: '14px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    gap: '8px',
                    marginBottom: '15px'
                  }}
                >
                  <img 
                    src="https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg" 
                    alt="WhatsApp" 
                    style={{ width: '20px', height: '20px', filter: 'brightness(0) invert(1)' }} 
                  />
                  Add Delivery Details & Checkout
                </button>
              ) : (
                <div style={{ marginBottom: '15px', padding: '15px', background: 'white', borderRadius: '10px', border: '2px solid #e5e7eb' }}>
                  <h4 style={{ marginBottom: '15px', color: '#36454F', fontSize: '16px', fontWeight: 'bold' }}>Delivery Information</h4>
                  
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
                    <input
                      type="text"
                      name="name"
                      placeholder="Full Name *"
                      value={customerDetails.name}
                      onChange={handleInputChange}
                      style={{ padding: '10px', borderRadius: '8px', border: '2px solid #e5e7eb', fontSize: '14px' }}
                      required
                    />
                    
                    <input
                      type="text"
                      name="address"
                      placeholder="Delivery Address *"
                      value={customerDetails.address}
                      onChange={handleInputChange}
                      style={{ padding: '10px', borderRadius: '8px', border: '2px solid #e5e7eb', fontSize: '14px' }}
                      required
                    />
                    
                    <input
                      type="tel"
                      name="phone"
                      placeholder="Phone Number *"
                      value={customerDetails.phone}
                      onChange={handleInputChange}
                      style={{ padding: '10px', borderRadius: '8px', border: '2px solid #e5e7eb', fontSize: '14px' }}
                      required
                    />
                    
                    <textarea
                      name="instructions"
                      placeholder="Special Instructions (optional)"
                      value={customerDetails.instructions}
                      onChange={handleInputChange}
                      rows={2}
                      style={{ padding: '10px', borderRadius: '8px', border: '2px solid #e5e7eb', resize: 'vertical', fontSize: '14px' }}
                    />
                  </div>

                  <div style={{ display: 'flex', gap: '10px', marginTop: '15px' }}>
                    <button
                      onClick={() => setShowCustomerForm(false)}
                      style={{
                        flex: 1,
                        background: '#6c757d',
                        color: 'white',
                        border: 'none',
                        padding: '10px',
                        borderRadius: '8px',
                        cursor: 'pointer',
                        fontSize: '14px'
                      }}
                    >
                      Back
                    </button>
                  </div>
                </div>
              )}

              <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '15px' }}>
                <span style={{ fontWeight: 'bold', color: '#36454F' }}>Total Weight:</span>
                <span style={{ fontWeight: 'bold', color: '#D4AF37' }}>{totalKilos} kg</span>
              </div>

              {/* Total */}
              <div
                style={{
                  background: 'linear-gradient(135deg, #800020, #600018)',
                  color: 'white',
                  padding: '12px',
                  borderRadius: '10px',
                  display: 'flex',
                  justifyContent: 'space-between',
                  marginBottom: '15px',
                  fontWeight: 600,
                }}
              >
                <span>Total ({totalKg.toFixed(1)} kg)</span>
                <span>KSh {total.toLocaleString()}</span>
              </div>

              <div style={{ display: 'flex', gap: '10px' }}>
                <button
                  onClick={clearCart}
                  style={{
                    flex: 1,
                    background: '#6c757d',
                    color: 'white',
                    border: 'none',
                    padding: '12px',
                    borderRadius: '8px',
                    cursor: 'pointer',
                    fontWeight: '600'
                  }}
                >
                  Clear Cart
                </button>
                
                {/* Order button - Only show when customer form is filled */}
                {showCustomerForm && (
                  <button
                    onClick={sendWhatsAppOrder}
                    disabled={isProcessing || !customerDetails.name || !customerDetails.address || !customerDetails.phone}
                    style={{
                      flex: 2,
                      background: isProcessing || !customerDetails.name || !customerDetails.address || !customerDetails.phone
                        ? '#ccc'
                        : 'linear-gradient(135deg, #10b981 0%, #059669 100%)',
                      color: 'white',
                      padding: '12px',
                      borderRadius: '8px',
                      fontWeight: 'bold',
                      border: 'none',
                      cursor: isProcessing || !customerDetails.name || !customerDetails.address || !customerDetails.phone ? 'not-allowed' : 'pointer',
                      fontSize: '14px',
                    }}
                  >
                    {isProcessing ? '⏳ Processing...' : '📩 Complete Order via WhatsApp'}
                  </button>
                )}
              </div>
            </div>
          )}
        </div>
      )}
    </>
  )
}
