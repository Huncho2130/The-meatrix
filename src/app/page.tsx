"use client";

import { CartProvider } from '@/context/cartContext';
import { useState, useEffect } from 'react';

function HomePage() {
  const [isMobile, setIsMobile] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

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
        {/* Header - Clean & Minimal */}
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
            {/* Logo & Brand */}
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
                  color: '#D4AF37', 
                  textDecoration: 'none', 
                  fontSize: '14px', 
                  fontWeight: '600',
                  whiteSpace: 'nowrap',
                  transition: 'color 0.2s ease'
                }}>HOME</a>
                <a href="/products" style={{ 
                  color: 'white', 
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
                        color: '#D4AF37', 
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
                        color: 'white', 
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
                        fontWeight: '600'
                      }}
                      onClick={() => setIsMenuOpen(false)}
                    >
                      CONTACT
                    </a>
                  </div>
                )}
              </div>
            )}
          </div>
        </header>

        {/* Hero Section - Spacious & Clean */}
        <section style={{ 
          position: 'fixed', 
          color: 'white', 
          padding: isMobile ? '80px 20px' : '140px 20px', 
          textAlign: 'center', 
          //minHeight: isMobile ? '70vh' : '85vh', 
          minHeight: '100vh',
          display: 'flex', 
          alignItems: 'center', 
          justifyContent: 'center',
          overflow: 'hidden',
           zIndex: 10
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
            background: 'linear-gradient(135deg, rgba(128, 0, 32, 0.35) 0%, rgba(54, 69, 79, 0.35) 100%)', 
            zIndex: 2 
          }} />
          <div style={{ 
            position: 'relative', 
            zIndex: 3, 
            maxWidth: isMobile ? '90vw' : '800px', 
            margin: '0 auto',
            padding: isMobile ? '0' : '0 20px'
          }}>
            <h1 style={{ 
              fontSize: isMobile ? '2.5rem' : '4rem', 
              fontWeight: 'bold', 
              marginBottom: isMobile ? '25px' : '30px', 
              lineHeight: '1.1', 
              textShadow: '2px 2px 8px rgba(0,0,0,0.4)',
              letterSpacing: isMobile ? '0.5px' : '1px'
            }}>
              CRAFTED CUTS<br />
              <span style={{ color: '#D4AF37', display: 'block', marginTop: '10px' }}>
                UNCOMPROMISED QUALITY
              </span>
            </h1>
            <p style={{ 
              fontSize: isMobile ? '1.2rem' : '1.5rem', 
              margin: `0 auto ${isMobile ? '40px' : '60px'}`, 
              lineHeight: '1.4', 
              maxWidth: isMobile ? '90vw' : '600px', 
              textShadow: '1px 1px 3px rgba(0,0,0,0.4)',
              opacity: '0.95'
            }}>
              Nairobi's modern meat house — where quality meets flavor. 
            </p>
            
            {/* Hero Buttons */}
            <div style={{ 
              display: 'flex', 
              gap: isMobile ? '20px' : '25px', 
              justifyContent: 'center', 
              flexWrap: 'wrap',
              flexDirection: isMobile ? 'column' : 'row'
            }}>
              <a 
                href="/products" 
                style={{
                  background: 'linear-gradient(135deg, #D4AF37 0%, #B8941F 100%)',
                  color: '#36454F',
                  padding: isMobile ? '16px 28px' : '18px 36px',
                  borderRadius: '12px',
                  textDecoration: 'none',
                  fontWeight: 'bold',
                  fontSize: isMobile ? '15px' : '17px',
                  boxShadow: '0 6px 20px rgba(212, 175, 55, 0.4)',
                  transition: 'all 0.3s ease',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  gap: '10px',
                  minWidth: isMobile ? '220px' : '240px'
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
                  padding: isMobile ? '16px 28px' : '18px 36px',
                  borderRadius: '12px',
                  textDecoration: 'none',
                  fontWeight: 'bold',
                  fontSize: isMobile ? '15px' : '17px',
                  border: '2px solid rgba(212, 175, 55, 0.6)',
                  backdropFilter: 'blur(10px)',
                  transition: 'all 0.3s ease',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  gap: '10px',
                  minWidth: isMobile ? '220px' : '240px'
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
    </CartProvider>
  );
}

export default HomePage;
