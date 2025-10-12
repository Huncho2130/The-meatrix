"use client";

import { CartProvider } from '@/context/cartContext';

function HomePage() {
  return (
    <CartProvider>
      <div style={{ minHeight: '100vh', background: 'white' }}>
        {/* Header */}
        <header style={{
          background: '#36454F',
          color: 'white',
          padding: '15px 20px',
          boxShadow: '0 2px 10px rgba(0,0,0,0.1)',
          position: 'sticky',
          top: 0,
          zIndex: 40
        }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', maxWidth: '1200px', margin: '0 auto' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '15px' }}>
              <div style={{
                width: '60px',
                height: '60px',
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
                  alt="Mzungu Fresh Cuts Logo" 
                  style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                  onError={(e) => {
                    const target = e.currentTarget as HTMLImageElement;
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
                  }}
                />
              </div>
              <div>
                <h1 style={{ fontSize: '1.8rem', fontWeight: 'bold', color: '#D4AF37', margin: 0, lineHeight: '1.2' }}>
                  THE MEATRIX CO.
                </h1>
                <p style={{
                  color: 'white',
                  fontSize: '14px',
                  margin: '2px 0 0 0',
                  fontWeight: '500',
                  opacity: '0.9'
                }}>
                  
                </p>
              </div>
            </div>
            <nav style={{ display: 'flex', gap: '20px' }}>
              <a href="/" style={{ color: '#D4AF37', textDecoration: 'none', fontSize: '14px', fontWeight: '600' }}>HOME</a>
              <a href="/products" style={{ color: 'white', textDecoration: 'none', fontSize: '14px', fontWeight: '600' }}>PRODUCTS</a>
              <a href="/about" style={{ color: 'white', textDecoration: 'none', fontSize: '14px', fontWeight: '600' }}>ABOUT</a>
              <a href="/contact" style={{ color: 'white', textDecoration: 'none', fontSize: '14px', fontWeight: '600' }}>CONTACT</a>
            </nav>
          </div>

          {/* Top Info Bar */}
          <div style={{
            background: '#2f3a42',
            color: '#D4AF37',
            padding: '6px 20px',
            fontSize: '13px',
            fontWeight: '500',
            textAlign: 'center',
          }}>
            <div style={{
              maxWidth: '1200px',
              margin: '0 auto',
              display: 'flex',
              justifyContent: 'space-between',
              flexWrap: 'wrap',
              gap: '5px',
            }}>
              <span>📍 City Market, Nairobi CBD</span>
              <span>📞 +254 707 636105</span>
              <span>⭐ Premium Quality Guaranteed</span>
            </div>
          </div>
        </header>

        {/* Hero Section */}
        <section style={{ 
          position: 'relative', 
          color: 'white', 
          padding: '120px 20px', 
          textAlign: 'center', 
          minHeight: '600px', 
          display: 'flex', 
          alignItems: 'center', 
          justifyContent: 'center',
          overflow: 'hidden'
        }}>
          <div style={{ 
            position: 'absolute', 
            top: 0, 
            left: 0, 
            right: 0, 
            bottom: 0, 
            backgroundImage: 'url("/hero-bg (3).jpg")', 
            backgroundSize: 'cover', 
            backgroundPosition: 'center', 
            backgroundRepeat: 'no-repeat', 
            zIndex: 1 
          }} />
          <div style={{ 
            position: 'absolute', 
            top: 0, 
            left: 0, 
            right: 0, 
            bottom: 0, 
            background: 'linear-gradient(135deg, rgba(128, 0, 32, 0.28) 0%, rgba(54, 69, 79, 0.28) 100%)', 
            zIndex: 2 
          }} />
          <div style={{ 
            position: 'relative', 
            zIndex: 3, 
            maxWidth: '800px', 
            margin: '0 auto' 
          }}>
            <h1 style={{ 
              fontSize: '3.8rem', 
              fontWeight: 'bold', 
              marginBottom: '25px', 
              lineHeight: '1.1', 
              textShadow: '2px 2px 4px rgba(0,0,0,0.3)' 
            }}>
              CRAFTED CUTS<br />
              <span style={{ color: '#D4AF37' }}>UNCOMPROMISED QUALITY</span>
            </h1>
            <p style={{ 
              fontSize: '1.4rem', 
              margin: '0 auto 50px', 
              lineHeight: '1.6', 
              maxWidth: '600px', 
              textShadow: '1px 1px 2px rgba(0,0,0,0.3)' 
            }}>
              Nairobi's modern meat house — where quality meets flavor. 
            </p>
            
            {/* Hero Buttons */}
            <div style={{ 
              display: 'flex', 
              gap: '20px', 
              justifyContent: 'center', 
              flexWrap: 'wrap' 
            }}>
              <a href="/products" style={{
                background: 'linear-gradient(135deg, #D4AF37 0%, #B8941F 100%)',
                color: '#36454F',
                padding: '16px 32px',
                borderRadius: '10px',
                textDecoration: 'none',
                fontWeight: 'bold',
                fontSize: '16px',
                boxShadow: '0 4px 15px rgba(212, 175, 55, 0.3)',
                transition: 'all 0.3s ease',
                display: 'flex',
                alignItems: 'center',
                gap: '10px'
              }}
              onMouseOver={(e) => {
                const target = e.currentTarget as HTMLAnchorElement;
                target.style.transform = 'translateY(-2px)';
                target.style.boxShadow = '0 6px 20px rgba(212, 175, 55, 0.4)';
              }}
              onMouseOut={(e) => {
                const target = e.currentTarget as HTMLAnchorElement;
                target.style.transform = 'translateY(0)';
                target.style.boxShadow = '0 4px 15px rgba(212, 175, 55, 0.3)';
              }}
              >
                🛒 Shop Premium Cuts
              </a>
              
              <a href="/about" style={{
                background: 'rgba(255, 255, 255, 0.15)',
                color: 'white',
                padding: '16px 32px',
                borderRadius: '10px',
                textDecoration: 'none',
                fontWeight: 'bold',
                fontSize: '16px',
                border: '2px solid rgba(212, 175, 55, 0.5)',
                backdropFilter: 'blur(10px)',
                transition: 'all 0.3s ease',
                display: 'flex',
                alignItems: 'center',
                gap: '10px'
              }}
              onMouseOver={(e) => {
                const target = e.currentTarget as HTMLAnchorElement;
                target.style.background = 'rgba(255, 255, 255, 0.25)';
                target.style.transform = 'translateY(-2px)';
              }}
              onMouseOut={(e) => {
                const target = e.currentTarget as HTMLAnchorElement;
                target.style.background = 'rgba(255, 255, 255, 0.15)';
                target.style.transform = 'translateY(0)';
              }}
              >
                📖 View Our Story
              </a>
            </div>
          </div>
        </section>

        {/* Simple Footer */}
        <footer style={{
          background: '#1a202c',
          color: 'white',
          padding: '40px 20px',
          textAlign: 'center'
        }}>
          <div style={{ 
            maxWidth: '1200px', 
            margin: '0 auto' 
          }}>
            <p style={{ margin: 0 }}>&copy; 2025 THE MEATRIX CO. All rights reserved.</p>
            <p style={{ margin: '10px 0 0 0', color: '#D4AF37', fontSize: '14px' }}>
              Premium Meats & Seafood • Nairobi's Finest Butcher
            </p>
          </div>
        </footer>
      </div>
    </CartProvider>
  );
}

export default HomePage;