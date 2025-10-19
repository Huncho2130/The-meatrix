'use client'
import { CartProvider, useCart } from '@/context/cartContext'
import Cart from '@/components/Cart'
import { useEffect, useState } from 'react'
import { getCurrentPromotion, isPromotionActive } from '@/utils/promotions'
import PromotionPopup from '@/components/PromotionPopup'

const products = [
  // Beef
  { id: '1', name: 'Rib Eye Steak', price: 1399, category: 'Beef' },
  { id: '2', name: 'Beef Steak', price: 799, category: 'Beef' },
  { id: '3', name: 'Beef on Bone', price: 680, category: 'Beef' },
  { id: '15', name: 'Beef fillet', price: 1400, category: 'Beef' },
  // Goat & Mutton
  { id: '4', name: 'Goat Meat', price: 750, category: 'Goat & Mutton' },
  
  // Chicken
  { id: '5', name: 'Whole Chicken', price: 650, category: 'Chicken' },
  { id: '6', name: 'Chicken Breast', price: 650, category: 'Chicken' },
  { id: '7', name: 'Chicken Drumstick', price: 650, category: 'Chicken' },
  { id: '8', name: 'Chicken Gizzard', price: 550, category: 'Chicken' },
  
  // Seafood
  { id: '9', name: 'Fish Fillet', price: 999, category: 'Seafood' },
  { id: '10', name: 'Tuna', price: 1349, category: 'Seafood' },
  { id: '11', name: 'Kingfish', price: 1199, category: 'Seafood' },
  { id: '12', name: 'Mackerel', price: 749, category: 'Seafood' },
  { id: '13', name: 'Nile Perch', price: 600, category: 'Seafood' },
  { id: '14', name: 'Salmon Fillet', price: 5500, category: 'Seafood' },
]

function ProductCard({ product, isMobile, currentPromotion }) {
  const { addToCart } = useCart();

  // Calculate discounted price
  const calculateDiscountedPrice = (originalPrice: number) => {
    if (!currentPromotion) return originalPrice;
    return Math.round(originalPrice * (1 - currentPromotion.discount / 100));
  };

  const discountedPrice = calculateDiscountedPrice(product.price);
  const hasDiscount = currentPromotion && discountedPrice < product.price;

  const handleCardHover = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!isMobile) {
      e.currentTarget.style.transform = "translateY(-8px)";
      e.currentTarget.style.boxShadow = "0 20px 40px rgba(0,0,0,0.15)";
      e.currentTarget.style.borderColor = "rgba(212, 175, 55, 0.3)";
    }
  };

  const handleCardOut = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!isMobile) {
      e.currentTarget.style.transform = "translateY(0)";
      e.currentTarget.style.boxShadow = "0 8px 25px rgba(0,0,0,0.08)";
      e.currentTarget.style.borderColor = "rgba(212, 175, 55, 0.1)";
    }
  };

  const handleButtonHover = (e: React.MouseEvent<HTMLButtonElement>) => {
    if (!isMobile) {
      e.currentTarget.style.background = "linear-gradient(135deg, #D4AF37 0%, #B8941F 100%)";
      e.currentTarget.style.transform = "translateY(-2px)";
      e.currentTarget.style.boxShadow = "0 6px 20px rgba(212, 175, 55, 0.4)";
    }
  };

  const handleButtonOut = (e: React.MouseEvent<HTMLButtonElement>) => {
    if (!isMobile) {
      e.currentTarget.style.background = "linear-gradient(135deg, #800020 0%, #600018 100%)";
      e.currentTarget.style.transform = "translateY(0)";
      e.currentTarget.style.boxShadow = "0 4px 15px rgba(128, 0, 32, 0.3)";
    }
  };

  const handleImageError = (e: React.SyntheticEvent<HTMLImageElement, Event>) => {
    const target = e.currentTarget;
    target.style.display = 'none';
    const parent = target.parentElement as HTMLDivElement;
    if (parent) {
      parent.innerHTML = '🥩';
      parent.style.fontSize = '24px';
      parent.style.color = '#36454F';
      parent.style.display = 'flex';
      parent.style.alignItems = 'center';
      parent.style.justifyContent = 'center';
    }
  };

  return (
    <div
      style={{
        background: "white",
        borderRadius: "16px",
        padding: isMobile ? "20px" : "25px",
        textAlign: "center",
        boxShadow: "0 8px 25px rgba(0,0,0,0.08)",
        border: "1px solid rgba(212, 175, 55, 0.1)",
        transition: "all 0.4s ease",
        cursor: "pointer",
        position: "relative",
        overflow: "hidden",
      }}
      onMouseOver={handleCardHover}
      onMouseOut={handleCardOut}
    >
      {/* Premium badge */}
      <div
        style={{
          position: "absolute",
          top: isMobile ? "12px" : "15px",
          right: isMobile ? "12px" : "15px",
          background: "linear-gradient(135deg, #D4AF37 0%, #B8941F 100%)",
          color: "#36454F",
          padding: "4px 12px",
          borderRadius: "20px",
          fontSize: isMobile ? "10px" : "12px",
          fontWeight: "bold",
          boxShadow: "0 2px 8px rgba(212, 175, 55, 0.3)",
          zIndex: 2
        }}
      >
        PREMIUM
      </div>

      {/* Holiday Promotion Badge */}
      {hasDiscount && (
        <div
          style={{
            position: "absolute",
            top: isMobile ? "12px" : "15px",
            left: isMobile ? "12px" : "15px",
            background: "linear-gradient(135deg, #800020 0%, #600018 100%)",
            color: "white",
            padding: "4px 10px",
            borderRadius: "15px",
            fontSize: isMobile ? "10px" : "11px",
            fontWeight: "bold",
            boxShadow: "0 2px 8px rgba(128, 0, 32, 0.4)",
            zIndex: 2,
            display: 'flex',
            alignItems: 'center',
            gap: '4px'
          }}
        >
          🎉 {currentPromotion.discount}% OFF
        </div>
      )}

      {/* Product Image */}
      <div
        style={{
          height: isMobile ? "180px" : "240px",
          background: `url('/${product.name.toLowerCase().replace(/\s+/g, "-")}.jpg')`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          borderRadius: "12px",
          marginBottom: isMobile ? "15px" : "20px",
          position: 'relative'
        }}
      />

      {/* Product Name + Price */}
      <h3
        style={{
          color: "#36454F",
          fontSize: isMobile ? "1.1rem" : "1.25rem",
          fontWeight: "700",
          marginBottom: "8px",
          lineHeight: "1.3",
          minHeight: isMobile ? "auto" : "48px",
          display: "flex",
          alignItems: "center",
          justifyContent: "center"
        }}
      >
        {product.name}
      </h3>

      {/* Pricing Section */}
      <div style={{ marginBottom: isMobile ? "15px" : "20px" }}>
        {hasDiscount ? (
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '4px' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
              <p
                style={{
                  color: "#D4AF37",
                  fontSize: isMobile ? "1.5rem" : "1.75rem",
                  fontWeight: "bold",
                  margin: 0
                }}
              >
                KSh {discountedPrice.toLocaleString()}
              </p>
              <p
                style={{
                  color: "#94a3b8",
                  fontSize: isMobile ? "1rem" : "1.1rem",
                  fontWeight: "600",
                  textDecoration: "line-through",
                  margin: 0
                }}
              >
                KSh {product.price.toLocaleString()}
              </p>
            </div>
            <div style={{
              background: "linear-gradient(135deg, #D4AF37 0%, #B8941F 100%)",
              color: "#36454F",
              padding: "2px 8px",
              borderRadius: "12px",
              fontSize: isMobile ? "10px" : "11px",
              fontWeight: "bold"
            }}>
              You save KSh {(product.price - discountedPrice).toLocaleString()}!
            </div>
          </div>
        ) : (
          <p
            style={{
              color: "#D4AF37",
              fontSize: isMobile ? "1.5rem" : "1.75rem",
              fontWeight: "bold",
              margin: 0
            }}
          >
            KSh {product.price.toLocaleString()}
          </p>
        )}
      </div>

      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          paddingTop: "15px",
          borderTop: "1px solid rgba(0,0,0,0.1)",
          flexDirection: isMobile ? "column" : "row",
          gap: isMobile ? "12px" : "0"
        }}
      >
        <span
          style={{
            background: "linear-gradient(135deg, #f7fafc 0%, #edf2f7 100%)",
            color: "#4a5568",
            padding: "6px 14px",
            borderRadius: "20px",
            fontSize: isMobile ? "12px" : "13px",
            fontWeight: "600",
            border: "1px solid #e2e8f0",
            whiteSpace: "nowrap"
          }}
        >
          {product.category}
        </span>

        <button
          onClick={() => addToCart({
            ...product,
            price: hasDiscount ? discountedPrice : product.price,
            originalPrice: product.price,
            hasDiscount,
            discountPercent: hasDiscount ? currentPromotion.discount : 0
          })}
          style={{
            background: "linear-gradient(135deg, #800020 0%, #600018 100%)",
            color: "white",
            border: "none",
            padding: isMobile ? "10px 16px" : "12px 20px",
            borderRadius: "10px",
            cursor: "pointer",
            fontWeight: "bold",
            fontSize: isMobile ? "13px" : "14px",
            boxShadow: "0 4px 15px rgba(128, 0, 32, 0.3)",
            transition: "all 0.3s ease",
            display: "flex",
            alignItems: "center",
            gap: "6px",
            width: isMobile ? "100%" : "auto"
          }}
          onMouseOver={handleButtonHover}
          onMouseOut={handleButtonOut}
        >
          🛒 {hasDiscount ? 'Get Discount!' : 'Add to Cart'}
        </button>
      </div>
    </div>
  );
}

function ProductsContent() {
  const { cart, itemCount } = useCart()
  const [isMounted, setIsMounted] = useState(false)
  const [isMobile, setIsMobile] = useState(false)
  const [showPromotion, setShowPromotion] = useState(false)
  const [currentPromotion, setCurrentPromotion] = useState(null)
  const [isCartOpen, setIsCartOpen] = useState(false)

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener('resize', checkMobile);
    
    setIsMounted(true)
    
    // Get current promotion
    const promotion = getCurrentPromotion();
    setCurrentPromotion(promotion);
    
    // Show promotion popup if active (after a delay)
    if (promotion) {
      const hasSeenPopup = localStorage.getItem(`popup_seen_${promotion.id}`);
      const today = new Date().toDateString();
      
      if (!hasSeenPopup || hasSeenPopup !== today) {
        setTimeout(() => setShowPromotion(true), 3000);
      }
    }

    // Preload other pages when user hovers over nav links
    const navLinks = document.querySelectorAll('nav a')
    
    navLinks.forEach(link => {
      link.addEventListener('mouseenter', () => {
        const href = link.getAttribute('href')
        if (href && href !== window.location.pathname) {
          const linkElement = document.createElement('link')
          linkElement.rel = 'prefetch'
          linkElement.href = href
          document.head.appendChild(linkElement)
        }
      }, { once: true })
    })

    return () => window.removeEventListener('resize', checkMobile);
  }, [])

  if (!isMounted) {
    return (
      <div style={{ 
        display: 'flex', 
        justifyContent: 'center', 
        alignItems: 'center', 
        height: '100vh',
        background: '#f7fafc'
      }}>
        <div style={{ 
          textAlign: 'center',
          color: '#36454F'
        }}>
          <div style={{ 
            fontSize: '3rem',
            marginBottom: '20px'
          }}>
            🥩
          </div>
          <p style={{ 
            fontSize: '1.2rem',
            fontWeight: '600'
          }}>
            Loading premium meats...
          </p>
        </div>
      </div>
    )
  }

  return (
    <div style={{ minHeight: '100vh', background: '#f7fafc' }}>
      {/* Header */}
      <header style={{
        background: 'linear-gradient(135deg, #36454F 0%, #2a363f 100%)',
        color: 'white',
        padding: isMobile ? '15px' : '20px 40px',
        boxShadow: '0 4px 20px rgba(0,0,0,0.1)',
        position: 'sticky',
        top: 0,
        zIndex: 1000
      }}>
        <div style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          maxWidth: '1200px',
          margin: '0 auto'
        }}>
          {/* Logo */}
          <div style={{
            display: 'flex',
            alignItems: 'center',
            gap: '10px'
          }}>
            <div style={{
              width: isMobile ? '32px' : '40px',
              height: isMobile ? '32px' : '40px',
              background: 'linear-gradient(135deg, #D4AF37 0%, #B8941F 100%)',
              borderRadius: '8px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontWeight: 'bold',
              fontSize: isMobile ? '16px' : '18px',
              color: '#36454F'
            }}>
              M
            </div>
            <h1 style={{
              fontSize: isMobile ? '1.2rem' : '1.5rem',
              fontWeight: 'bold',
              margin: 0,
              background: 'linear-gradient(135deg, #D4AF37 0%, #B8941F 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent'
            }}>
              THE MEATRIX CO.
            </h1>
          </div>

          {/* Navigation */}
          <nav style={{
            display: isMobile ? 'none' : 'flex',
            gap: '30px',
            alignItems: 'center'
          }}>
            <a href="/" style={{
              color: 'white',
              textDecoration: 'none',
              fontWeight: '600',
              transition: 'color 0.3s ease'
            }}>Home</a>
            <a href="/products" style={{
              color: '#D4AF37',
              textDecoration: 'none',
              fontWeight: '700',
              borderBottom: '2px solid #D4AF37',
              paddingBottom: '5px'
            }}>Products</a>
            <a href="/about" style={{
              color: 'white',
              textDecoration: 'none',
              fontWeight: '600',
              transition: 'color 0.3s ease'
            }}>About</a>
            <a href="/contact" style={{
              color: 'white',
              textDecoration: 'none',
              fontWeight: '600',
              transition: 'color 0.3s ease'
            }}>Contact</a>
          </nav>

          {/* Cart Icon */}
          <div style={{
            display: 'flex',
            alignItems: 'center',
            gap: isMobile ? '15px' : '25px'
          }}>
            <button
              onClick={() => setIsCartOpen(true)}
              style={{
                background: 'linear-gradient(135deg, #D4AF37 0%, #B8941F 100%)',
                color: '#36454F',
                border: 'none',
                padding: isMobile ? '8px 12px' : '10px 20px',
                borderRadius: '8px',
                cursor: 'pointer',
                fontWeight: 'bold',
                fontSize: isMobile ? '12px' : '14px',
                display: 'flex',
                alignItems: 'center',
                gap: '8px',
                transition: 'all 0.3s ease'
              }}
            >
              <span>🛒</span>
              <span>{itemCount}</span>
            </button>

            {/* Mobile Menu Button */}
            {isMobile && (
              <button
                style={{
                  background: 'none',
                  border: 'none',
                  color: 'white',
                  fontSize: '1.5rem',
                  cursor: 'pointer'
                }}
              >
                ☰
              </button>
            )}
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMobile && (
          <nav style={{
            display: 'flex',
            justifyContent: 'space-around',
            marginTop: '15px',
            paddingTop: '15px',
            borderTop: '1px solid rgba(255,255,255,0.2)'
          }}>
            <a href="/" style={{
              color: 'white',
              textDecoration: 'none',
              fontWeight: '600',
              fontSize: '14px'
            }}>Home</a>
            <a href="/products" style={{
              color: '#D4AF37',
              textDecoration: 'none',
              fontWeight: '700',
              fontSize: '14px'
            }}>Products</a>
            <a href="/about" style={{
              color: 'white',
              textDecoration: 'none',
              fontWeight: '600',
              fontSize: '14px'
            }}>About</a>
            <a href="/contact" style={{
              color: 'white',
              textDecoration: 'none',
              fontWeight: '600',
              fontSize: '14px'
            }}>Contact</a>
          </nav>
        )}
      </header>

      {/* Cart Sidebar */}
      {isCartOpen && (
        <Cart onClose={() => setIsCartOpen(false)} />
      )}

      {/* Promotion Popup */}
      {showPromotion && currentPromotion && (
        <PromotionPopup 
          isMobile={isMobile}
          onClose={() => {
            setShowPromotion(false);
            localStorage.setItem(`popup_seen_${currentPromotion.id}`, new Date().toDateString());
          }}
        />
      )}

      {/* Main Content */}
      <div style={{ 
        padding: isMobile ? '25px 15px' : '40px 20px', 
        maxWidth: '1200px', 
        margin: '0 auto' 
      }}>
        <div style={{ textAlign: 'center', marginBottom: isMobile ? '30px' : '50px' }}>
          <h1 style={{ 
            fontSize: isMobile ? '2rem' : '3rem', 
            color: '#36454F',
            marginBottom: isMobile ? '12px' : '15px',
            fontWeight: 'bold',
            lineHeight: '1.2'
          }}>
            {currentPromotion ? (
              <>
                {currentPromotion.name} 🎉
                <br />
                <span style={{ 
                  fontSize: isMobile ? '1.2rem' : '1.5rem',
                  color: '#800020',
                  display: 'block',
                  marginTop: '10px'
                }}>
                  {currentPromotion.discount}% OFF ALL PRODUCTS!
                </span>
              </>
            ) : (
              'OUR PREMIUM SELECTION'
            )}
          </h1>
          
          <p style={{ 
            fontSize: isMobile ? '1rem' : '1.2rem',
            color: '#4a5568',
            maxWidth: '600px',
            margin: '0 auto',
            lineHeight: '1.5'
          }}>
            {currentPromotion 
              ? `${currentPromotion.description} Use code ${currentPromotion.couponCode} at checkout.`
              : 'Handpicked cuts of the finest quality, curated for discerning palates'
            }
          </p>
          
          {currentPromotion && (
            <div style={{
              background: 'linear-gradient(135deg, #D4AF37 0%, #B8941F 100%)',
              color: '#36454F',
              padding: isMobile ? '10px 20px' : '12px 25px',
              borderRadius: '25px',
              marginTop: isMobile ? '15px' : '20px',
              display: 'inline-block',
              fontWeight: '700',
              fontSize: isMobile ? '14px' : '16px',
              boxShadow: '0 4px 15px rgba(212, 175, 55, 0.3)'
            }}>
              🎊 LIMITED TIME OFFER - Valid until {new Date(currentPromotion.endDate).toLocaleDateString('en-KE', { 
                weekday: 'long', 
                year: 'numeric', 
                month: 'long', 
                day: 'numeric' 
              })}
            </div>
          )}
          
          {cart.length > 0 && (
            <div style={{
              background: '#D4AF37',
              color: '#36454F',
              padding: isMobile ? '8px 16px' : '10px 20px',
              borderRadius: '5px',
              marginTop: isMobile ? '15px' : '20px',
              display: 'inline-block',
              fontWeight: '600',
              fontSize: isMobile ? '12px' : '14px'
            }}>
              🛒 {cart.length} item(s) in cart
              {currentPromotion && ` - Save ${currentPromotion.discount}%!`}
            </div>
          )}
        </div>

        {/* Products Grid */}
        <div style={{ 
          display: 'grid', 
          gridTemplateColumns: isMobile ? '1fr' : 'repeat(auto-fit, minmax(300px, 1fr))',
          gap: isMobile ? '20px' : '30px',
          padding: isMobile ? '0 5px' : '0'
        }}>
          {products.map(product => (
            <ProductCard 
              key={product.id} 
              product={product} 
              isMobile={isMobile}
              currentPromotion={currentPromotion}
            />
          ))}
        </div>

        {/* Promotion Call-to-Action */}
        {currentPromotion && (
          <div style={{
            background: 'linear-gradient(135deg, #36454F 0%, #2a363f 100%)',
            color: 'white',
            padding: isMobile ? '30px 20px' : '40px',
            borderRadius: '20px',
            textAlign: 'center',
            marginTop: isMobile ? '40px' : '60px',
            boxShadow: '0 10px 30px rgba(0,0,0,0.2)'
          }}>
            <h2 style={{
              fontSize: isMobile ? '1.5rem' : '2rem',
              fontWeight: 'bold',
              marginBottom: '15px'
            }}>
              Don't Miss This Special Offer! 🎁
            </h2>
            <p style={{
              fontSize: isMobile ? '1rem' : '1.1rem',
              marginBottom: '25px',
              opacity: '0.9',
              maxWidth: '600px',
              margin: '0 auto 25px auto'
            }}>
              {currentPromotion.description} This offer ends soon, so shop now and save {currentPromotion.discount}% on all our premium products.
            </p>
            <div style={{
              background: 'rgba(255,255,255,0.1)',
              padding: '20px',
              borderRadius: '12px',
              marginBottom: '20px',
              display: 'inline-block'
            }}>
              <p style={{ margin: '0 0 10px 0', fontWeight: '600' }}>Use Promo Code:</p>
              <code style={{
                background: '#D4AF37',
                color: '#36454F',
                padding: '12px 24px',
                borderRadius: '8px',
                fontWeight: 'bold',
                fontSize: '1.2rem',
                fontFamily: 'monospace',
                letterSpacing: '2px'
              }}>
                {currentPromotion.couponCode}
              </code>
            </div>
          </div>
        )}
      </div>

      {/* Footer */}
      <footer style={{
        background: 'linear-gradient(135deg, #36454F 0%, #2a363f 100%)',
        color: 'white',
        padding: isMobile ? '30px 15px' : '50px 40px',
        marginTop: '60px'
      }}>
        <div style={{
          maxWidth: '1200px',
          margin: '0 auto',
          display: 'grid',
          gridTemplateColumns: isMobile ? '1fr' : 'repeat(auto-fit, minmax(250px, 1fr))',
          gap: isMobile ? '30px' : '50px'
        }}>
          {/* Company Info */}
          <div>
            <h3 style={{
              color: '#D4AF37',
              marginBottom: '20px',
              fontSize: '1.5rem',
              fontWeight: 'bold'
            }}>
              THE MEATRIX CO.
            </h3>
            <p style={{
              lineHeight: '1.6',
              opacity: '0.9',
              marginBottom: '20px'
            }}>
              Nairobi's premier butcher shop offering premium quality meats and seafood. 
              Experience the difference that quality makes.
            </p>
            <div style={{
              display: 'flex',
              gap: '15px'
            }}>
              <a href="#" style={{
                color: 'white',
                fontSize: '1.5rem',
                textDecoration: 'none'
              }}>📘</a>
              <a href="#" style={{
                color: 'white',
                fontSize: '1.5rem',
                textDecoration: 'none'
              }}>📷</a>
              <a href="#" style={{
                color: 'white',
                fontSize: '1.5rem',
                textDecoration: 'none'
              }}>🐦</a>
            </div>
          </div>

          {/* Contact Info */}
          <div>
            <h4 style={{
              color: '#D4AF37',
              marginBottom: '20px',
              fontSize: '1.2rem',
              fontWeight: '600'
            }}>
              Contact Info
            </h4>
            <div style={{
              display: 'flex',
              flexDirection: 'column',
              gap: '12px'
            }}>
              <div style={{
                display: 'flex',
                alignItems: 'center',
                gap: '10px'
              }}>
                <span>📍</span>
                <span>City Market, Ground Floor Stall 63, Nairobi</span>
              </div>
              <div style={{
                display: 'flex',
                alignItems: 'center',
                gap: '10px'
              }}>
                <span>📞</span>
                <span>+254-707-636105</span>
              </div>
              <div style={{
                display: 'flex',
                alignItems: 'center',
                gap: '10px'
              }}>
                <span>✉️</span>
                <span>info@themeatrix.co.ke</span>
              </div>
              <div style={{
                display: 'flex',
                alignItems: 'center',
                gap: '10px'
              }}>
                <span>🕒</span>
                <span>Mon-Sat: 7AM-8PM, Sun: 9AM-6PM</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 style={{
              color: '#D4AF37',
              marginBottom: '20px',
              fontSize: '1.2rem',
              fontWeight: '600'
            }}>
              Quick Links
            </h4>
            <div style={{
              display: 'flex',
              flexDirection: 'column',
              gap: '12px'
            }}>
              <a href="/" style={{
                color: 'white',
                textDecoration: 'none',
                transition: 'color 0.3s ease'
              }}>Home</a>
              <a href="/products" style={{
                color: '#D4AF37',
                textDecoration: 'none',
                fontWeight: '600'
              }}>Products</a>
              <a href="/about" style={{
                color: 'white',
                textDecoration: 'none',
                transition: 'color 0.3s ease'
              }}>About Us</a>
              <a href="/contact" style={{
                color: 'white',
                textDecoration: 'none',
                transition: 'color 0.3s ease'
              }}>Contact</a>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div style={{
          borderTop: '1px solid rgba(255,255,255,0.2)',
          marginTop: isMobile ? '30px' : '50px',
          paddingTop: '20px',
          textAlign: 'center',
          opacity: '0.8',
          fontSize: '14px'
        }}>
          <p>&copy; 2024 THE MEATRIX CO. All rights reserved. Premium meats, unparalleled quality.</p>
        </div>
      </footer>
    </div>
  )
}

export default function ProductsPage() {
  return (
    <CartProvider>
      <ProductsContent />
    </CartProvider>
  )
}

