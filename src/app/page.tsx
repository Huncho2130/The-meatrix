
    "use client";

import { CartProvider } from '@/context/cartContext';
import { useState, useEffect } from 'react';

function HomePage() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

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

  const handleSecondaryButtonHover = (e: React.MouseEvent<HTMLAnchorElement>) => {
    const target = e.currentTarget;
    target.style.background = 'rgba(255, 255, 255, 0.25)';
    target.style.transform = 'translateY(-2px)';
  };

  const handleSecondaryButtonOut = (e: React.MouseEvent<HTMLAnchorElement>) => {
    const target = e.currentTarget;
    target.style.background = 'rgba(255, 255, 255, 0.15)';
    target.style.transform = 'translateY(0)';
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
    <CartProvider>
      <div style={{ minHeight: '100vh', background: 'white' }}>
        {/* Header */}
        <header style={{
          background: '#36454F',
          color: 'white',
          padding: isMobile ? '12px 15px' : '15px 20px',
          boxShadow: '0 2px 10px rgba(0,0,0,0.1)',
          position: 'sticky',
          top: 0,
          zIndex: 40
        }}>
          <div style={{ 
            display: 'flex', 
            justifyContent: 'space-between', 
            alignItems: 'center', 
            maxWidth: '1200px', 
            margin: '0 auto',
            flexWrap: isMobile ? 'wrap' : 'nowrap',
            gap: isMobile ? '10px' : '0',
            flexDirection: isMobile ? 'column' : 'row'
          }}>
            <div style={{ 
              display: 'flex', 
              alignItems: 'center', 
              gap: isMobile ? '12px' : '15px',
              flexShrink: 0 
            }}>
              <div style={{
                width: isMobile ? '50px' : '60px',
                height: isMobile ? '50px' : '60px',
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
              <div style={{ textAlign: isMobile ? 'center' : 'left' }}>
                <h1 style={{ 
                  fontSize: isMobile ? '1.4rem' : '1.8rem', 
                  fontWeight: 'bold', 
                  color: '#D4AF37', 
                  margin: 0, 
                  lineHeight: '1.2' 
                }}>
                  THE MEATRIX CO.
                </h1>
                <p style={{
                  color: 'white',
                  fontSize: isMobile ? '12px' : '14px',
                  margin: '2px 0 0 0',
                  fontWeight: '500',
                  opacity: '0.9'
                }}>
                  Premium Meats & Seafood
                </p>
              </div>
            </div>
            
            <nav style={{ 
              display: 'flex', 
              gap: isMobile ? '12px' : '20px',
              flexWrap: 'wrap',
              justifyContent: isMobile ? 'center' : 'flex-end'
            }}>
              <a href="/" style={{ 
                color: '#D4AF37', 
                textDecoration: 'none', 
                fontSize: isMobile ? '12px' : '14px', 
                fontWeight: '600',
                whiteSpace: 'nowrap'
              }}>HOME</a>
              <a href="/products" style={{ 
                color: 'white', 
                textDecoration: 'none', 
                fontSize: isMobile ? '12px' : '14px', 
                fontWeight: '600',
                whiteSpace: 'nowrap'
              }}>PRODUCTS</a>
              <a href="/about" style={{ 
                color: 'white', 
                textDecoration: 'none', 
                fontSize: isMobile ? '12px' : '14px', 
                fontWeight: '600',
                whiteSpace: 'nowrap'
              }}>ABOUT</a>
              <a href="/contact" style={{ 
                color: 'white', 
                textDecoration: 'none', 
                fontSize: isMobile ? '12px' : '14px', 
                fontWeight: '600',
                whiteSpace: 'nowrap'
              }}>CONTACT</a>
            </nav>
          </div>

          {/* Top Info Bar */}
          <div style={{
            background: '#2f3a42',
            color: '#D4AF37',
            padding: isMobile ? '8px 15px' : '6px 20px',
            fontSize: isMobile ? '11px' : '13px',
            fontWeight: '500',
            textAlign: 'center',
            marginTop: isMobile ? '8px' : '0'
          }}>
            <div style={{
              maxWidth: '1200px',
              margin: '0 auto',
              display: 'flex',
              justifyContent: 'space-between',
              flexWrap: isMobile ? 'wrap' : 'nowrap',
              gap: isMobile ? '8px' : '5px',
              alignItems: 'center'
            }}>
              <span style={{ whiteSpace: 'nowrap' }}>📍 City Market, Nairobi CBD</span>
              <span style={{ whiteSpace: 'nowrap' }}>📞 +254 707 636105</span>
              <span style={{ whiteSpace: 'nowrap' }}>⭐ Premium Quality</span>
            </div>
          </div>
        </header>

        {/* Hero Section */}
        <section style={{ 
          position: 'relative', 
          color: 'white', 
          padding: isMobile ? '60px 20px' : '120px 20px', 
          textAlign: 'center', 
          minHeight: isMobile ? '400px' : '600px', 
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
            maxWidth: isMobile ? '90vw' : '800px', 
            margin: '0 auto',
            padding: isMobile ? '0 10px' : '0'
          }}>
            <h1 style={{ 
              fontSize: isMobile ? '2.2rem' : '3.8rem', 
              fontWeight: 'bold', 
              marginBottom: isMobile ? '20px' : '25px', 
              lineHeight: '1.2', 
              textShadow: '2px 2px 4px rgba(0,0,0,0.3)' 
            }}>
              CRAFTED CUTS<br />
              <span style={{ color: '#D4AF37' }}>UNCOMPROMISED QUALITY</span>
            </h1>
            <p style={{ 
              fontSize: isMobile ? '1.1rem' : '1.4rem', 
              margin: `0 auto ${isMobile ? '30px' : '50px'}`, 
              lineHeight: '1.5', 
              maxWidth: isMobile ? '90vw' : '600px', 
              textShadow: '1px 1px 2px rgba(0,0,0,0.3)' 
            }}>
              Nairobi's modern meat house — where quality meets flavor. 
            </p>
            
            {/* Hero Buttons */}
            <div style={{ 
              display: 'flex', 
              gap: isMobile ? '15px' : '20px', 
              justifyContent: 'center', 
              flexWrap: 'wrap',
              flexDirection: isMobile ? 'column' : 'row'
            }}>
              <a 
                href="/products" 
                style={{
                  background: 'linear-gradient(135deg, #D4AF37 0%, #B8941F 100%)',
                  color: '#36454F',
                  padding: isMobile ? '14px 24px' : '16px 32px',
                  borderRadius: '10px',
                  textDecoration: 'none',
                  fontWeight: 'bold',
                  fontSize: isMobile ? '14px' : '16px',
                  boxShadow: '0 4px 15px rgba(212, 175, 55, 0.3)',
                  transition: 'all 0.3s ease',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  gap: '8px',
                  minWidth: isMobile ? '200px' : 'auto'
                }}
                onMouseOver={handleButtonHover}
                onMouseOut={handleButtonOut}
              >
                🛒 Shop Premium Cuts
              </a>
              
              <a 
                href="/about" 
                style={{
                  background: 'rgba(255, 255, 255, 0.15)',
                  color: 'white',
                  padding: isMobile ? '14px 24px' : '16px 32px',
                  borderRadius: '10px',
                  textDecoration: 'none',
                  fontWeight: 'bold',
                  fontSize: isMobile ? '14px' : '16px',
                  border: '2px solid rgba(212, 175, 55, 0.5)',
                  backdropFilter: 'blur(10px)',
                  transition: 'all 0.3s ease',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  gap: '8px',
                  minWidth: isMobile ? '200px' : 'auto'
                }}
                onMouseOver={handleSecondaryButtonHover}
                onMouseOut={handleSecondaryButtonOut}
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
          </div>
        </footer>
      </div>
    </CartProvider>
  );
}

export default HomePage; 
