'use client'
import { CartProvider, useCart } from '@/context/cartContext'
import Cart from '@/components/Cart'
import { useEffect, useState } from 'react'

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

function ProductCard({ product, isMobile }) {
  const { addToCart } = useCart();

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
          onClick={() => addToCart(product)}
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
          🛒 Add to Cart
        </button>
      </div>
    </div>
  );
}

function ProductsContent() {
  const { cart, itemCount } = useCart()
  const [isMounted, setIsMounted] = useState(false)
  const [isMobile, setIsMobile] = useState(false)
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isCartOpen, setIsCartOpen] = useState(false)

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener('resize', checkMobile);
    
    setIsMounted(true)

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

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleButtonHover = (e: React.MouseEvent<HTMLAnchorElement>) => {
    const target = e.currentTarget;
    target.style.transform = 'translateY(-2px)';
    target.style.boxShadow = '0 6px 20px rgba(212, 175, 55, 0.4)';
  };

  const handleButtonOut = (e: React.MouseEvent<HTMLAnchorElement>) => {
    const target = e.currentTarget;
    target.style.transform = 'translateY(0)';
    target.style.boxShadow = '0 4px 15px rgba(212, 175, 55, 0.3)';
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
      {/* Header - Matching Home Page Structure */}
      <header style={{
        background: '#36454F',
        color: 'white',
        padding: isMobile ? '15px 20px' : '20px 40px',
        boxShadow: '0 2px 10px rgba(0,0,0,0.1)',
        position: 'sticky',
        top: 0,
        zIndex: 50
      }}>
        <div style={{ 
          display: 'flex', 
          justifyContent: 'space-between', 
          alignItems: 'center', 
          maxWidth: '1200px', 
          margin: '0 auto'
        }}>
          {/* Logo & Brand - Matching Home Page */}
          <div style={{ 
            display: 'flex', 
            alignItems: 'center', 
            gap: '15px',
            flexShrink: 0 
          }}>
            <div style={{
              width: isMobile ? '45px' : '55px',
              height: isMobile ? '45px' : '55px',
              borderRadius: '12px',
              overflow: 'hidden',
              background: '#D4AF37',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              border: '2px solid #D4AF37',
              flexShrink: 0
            }}>
              <img 
                src="/log.png" 
                alt="The Matrix Co. Logo" 
                style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                onError={handleImageError}
              />
            </div>
            <div style={{ textAlign: 'left' }}>
              <h1 style={{ 
                fontSize: isMobile ? '1.3rem' : '1.6rem', 
                fontWeight: 'bold', 
                color: '#D4AF37', 
                margin: 0, 
                lineHeight: '1.1' 
              }}>
                THE MEATRIX CO.
              </h1>
              <p style={{
                color: 'white',
                fontSize: isMobile ? '10px' : '12px',
                margin: '2px 0 0 0',
                fontWeight: '500',
                opacity: '0.9'
              }}>
                Premium Meats & Seafood
              </p>
            </div>
          </div>

          {/* Desktop Navigation */}
          {!isMobile && (
            <nav style={{ 
              display: 'flex', 
              gap: '25px'
            }}>
              <a href="/" style={{ 
                color: 'white', 
                textDecoration: 'none', 
                fontSize: '14px', 
                fontWeight: '600',
                whiteSpace: 'nowrap',
                transition: 'color 0.2s ease'
              }}>HOME</a>
              <a href="/products" style={{ 
                color: '#D4AF37', 
                textDecoration: 'none', 
                fontSize: '14px', 
                fontWeight: '600',
                whiteSpace: 'nowrap',
                transition: 'color 0.2s ease'
              }}>PRODUCTS</a>
              <a href="/about" style={{ 
                color: 'white', 
                textDecoration: 'none', 
                fontSize: '14px', 
                fontWeight: '600',
                whiteSpace: 'nowrap',
                transition: 'color 0.2s ease'
              }}>ABOUT</a>
              <a href="/contact" style={{ 
                color: 'white', 
                textDecoration: 'none', 
                fontSize: '14px', 
                fontWeight: '600',
                whiteSpace: 'nowrap',
                transition: 'color 0.2s ease'
              }}>CONTACT</a>
             
            </nav>
          )}

          {/* Cart Icon & Mobile Menu */}
          <div style={{
            display: 'flex',
            alignItems: 'center',
            gap: isMobile ? '10px' : '25px'
          }}>
            <button
              onClick={() => setIsCartOpen(true)}
              style={{
                background: 'linear-gradient(135deg, #D4AF37 0%, #B8941F 100%)',
                color: '#36454F',
                border: 'none',
                padding: isMobile ? '6px 10px' : '10px 20px',
                borderRadius: '8px',
                cursor: 'pointer',
                fontWeight: 'bold',
                fontSize: isMobile ? '11px' : '14px',
                display: 'flex',
                alignItems: 'center',
                gap: isMobile ? '4px' : '8px',
                transition: 'all 0.3s ease'
              }}
            >
              
              <span style={{ fontSize: isMobile ? '14px' : '16px' }}>🛒</span>
              <span>{itemCount}</span>
            </button>

            {/* Mobile Hamburger Menu */}
            {isMobile && (
              <div style={{ position: 'relative' }}>
                <button
                  onClick={toggleMenu}
                  style={{
                    background: 'transparent',
                    border: 'none',
                    color: 'white',
                    fontSize: '24px',
                    cursor: 'pointer',
                    padding: '8px',
                    borderRadius: '6px',
                    transition: 'background 0.2s ease'
                  }}
                  onMouseOver={(e) => {
                    e.currentTarget.style.background = 'rgba(212, 175, 55, 0.2)';
                  }}
                  onMouseOut={(e) => {
                    e.currentTarget.style.background = 'transparent';
                  }}
                >
                  ☰
                </button>

                {/* Dropdown Menu */}
                {isMenuOpen && (
                  <div style={{
                    position: 'absolute',
                    top: '100%',
                    right: 0,
                    background: '#36454F',
                    border: '1px solid #D4AF37',
                    borderRadius: '8px',
                    padding: '15px 0',
                    minWidth: '150px',
                    boxShadow: '0 4px 20px rgba(0,0,0,0.3)',
                    zIndex: 100
                  }}>
                    <a 
                      href="/" 
                      style={{ 
                        display: 'block', 
                        color: 'white', 
                        textDecoration: 'none', 
                        padding: '12px 20px',
                        fontSize: '14px',
                        fontWeight: '600',
                        borderBottom: '1px solid rgba(212, 175, 55, 0.2)'
                      }}
                      onClick={() => setIsMenuOpen(false)}
                    >
                      HOME
                    </a>
                    <a 
                      href="/products" 
                      style={{ 
                        display: 'block', 
                        color: '#D4AF37', 
                        textDecoration: 'none', 
                        padding: '12px 20px',
                        fontSize: '14px',
                        fontWeight: '600',
                        borderBottom: '1px solid rgba(212, 175, 55, 0.2)'
                      }}
                      onClick={() => setIsMenuOpen(false)}
                    >
                      PRODUCTS
                    </a>
                    <a 
                      href="/about" 
                      style={{ 
                        display: 'block', 
                        color: 'white', 
                        textDecoration: 'none', 
                        padding: '12px 20px',
                        fontSize: '14px',
                        fontWeight: '600',
                        borderBottom: '1px solid rgba(212, 175, 55, 0.2)'
                      }}
                      onClick={() => setIsMenuOpen(false)}
                    >
                      ABOUT
                    </a>
                    <a 
                      href="/contact" 
                      style={{ 
                        display: 'block', 
                        color: 'white', 
                        textDecoration: 'none', 
                        padding: '12px 20px',
                        fontSize: '14px',
                        fontWeight: '600',
                        borderBottom: '1px solid rgba(212, 175, 55, 0.2)'
                      }}
                      onClick={() => setIsMenuOpen(false)}
                    >
                      CONTACT
                    </a>
                    <a 
                      href="/terms" 
                      style={{ 
                        display: 'block', 
                        color: 'white', 
                        textDecoration: 'none', 
                        padding: '12px 20px',
                        fontSize: '14px',
                        fontWeight: '600'
                      }}
                      onClick={() => setIsMenuOpen(false)}
                    >
                      TERMS
                    </a>
                  </div>
                )}
              </div>
            )}
          </div>
        </div>
      </header>

      {/* Cart Sidebar */}
      {isCartOpen && (
        <Cart onClose={() => setIsCartOpen(false)} />
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
            OUR PREMIUM SELECTION
          </h1>
          
          <p style={{ 
            fontSize: isMobile ? '1rem' : '1.2rem',
            color: '#4a5568',
            maxWidth: '600px',
            margin: '0 auto',
            lineHeight: '1.5'
          }}>
            Handpicked cuts of the finest quality, curated for discerning palates
          </p>
          
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
            />
          ))}
        </div>
      </div>

      {/* Footer - Matching Home Page */}
      <footer style={{
        background: '#1a202c',
        color: 'white',
        padding: isMobile ? '30px 20px' : '40px 20px',
        textAlign: 'center'
      }}>
        <div style={{ 
          maxWidth: '1200px', 
          margin: '0 auto' 
        }}>
          <p style={{ 
            margin: 0, 
            fontSize: isMobile ? '14px' : '16px' 
          }}>
            &copy; 2025 THE MEATRIX CO. All rights reserved.
          </p>
          <p style={{ 
            margin: '10px 0 0 0', 
            color: '#D4AF37', 
            fontSize: isMobile ? '12px' : '14px' 
          }}>
            Premium Meats & Seafood • Nairobi's Finest Butcher
          </p>
          <p style={{ 
            margin: '15px 0 0 0', 
            fontSize: isMobile ? '11px' : '13px',
            opacity: '0.8'
          }}>
            <a 
              href="/terms" 
              style={{ 
                color: '#D4AF37', 
                textDecoration: 'none',
                borderBottom: '1px solid #D4AF37'
              }}
            >
              Terms & Conditions
            </a>
          </p>
        </div>
      </footer>

      {/* Close menu when clicking outside */}
      {isMenuOpen && (
        <div 
          style={{
            position: 'fixed',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            zIndex: 40
          }}
          onClick={() => setIsMenuOpen(false)}
        />
      )}
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


