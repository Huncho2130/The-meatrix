

     
                'use client'
import { CartProvider } from '@/context/cartContext'
import { useEffect, useState } from 'react'

export default function About() {
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener('resize', checkMobile);

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

  const handleButtonHover = (e: React.MouseEvent<HTMLAnchorElement>) => {
    if (!isMobile) {
      e.currentTarget.style.transform = 'translateY(-3px)';
      e.currentTarget.style.boxShadow = '0 12px 30px rgba(212, 175, 55, 0.6)';
    }
  };

  const handleButtonOut = (e: React.MouseEvent<HTMLAnchorElement>) => {
    if (!isMobile) {
      e.currentTarget.style.transform = 'translateY(0)';
      e.currentTarget.style.boxShadow = '0 8px 25px rgba(212, 175, 55, 0.4)';
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
            <h1 style={{ 
              fontSize: isMobile ? '1.4rem' : '1.8rem', 
              fontWeight: 'bold',
              color: '#D4AF37',
              margin: 0
            }}>
              THE MEATRIX CO.
            </h1>
            <nav style={{ 
              display: 'flex', 
              gap: isMobile ? '12px' : '20px',
              flexWrap: 'wrap',
              justifyContent: isMobile ? 'center' : 'flex-end'
            }}>
              <a href="/" style={{ 
                color: 'white', 
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
                color: '#D4AF37', 
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
          background: `linear-gradient(135deg, 
            rgba(128, 0, 32, 0.85) 0%, 
            rgba(54, 69, 79, 0.85) 100%),
            url('https://images.unsplash.com/photo-1603366615917-1fa6dad5c4fa?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          color: 'white',
          padding: isMobile ? '60px 20px' : '100px 20px',
          textAlign: 'center'
        }}>
          <div style={{ maxWidth: '800px', margin: '0 auto' }}>
            <h1 style={{ 
              fontSize: isMobile ? '2.2rem' : '3.5rem', 
              fontWeight: 'bold',
              marginBottom: isMobile ? '15px' : '20px',
              lineHeight: '1.2'
            }}>
              CRAFTING CULINARY<br />
              <span style={{ color: '#D4AF37' }}>EXCELLENCE</span>
            </h1>
            <p style={{ 
              fontSize: isMobile ? '1.1rem' : '1.3rem',
              margin: `0 auto ${isMobile ? '30px' : '40px'}`,
              lineHeight: '1.6',
              maxWidth: isMobile ? '90vw' : '600px'
            }}>
              For the past five years, we've been Nairobi's trusted source for premium meats, 
              where every cut tells a story of quality and passion.
            </p>
          </div>
        </section>

        {/* Story Section */}
        <section style={{ padding: isMobile ? '50px 15px' : '80px 20px' }}>
          <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
            <div style={{ 
              display: 'grid', 
              gridTemplateColumns: isMobile ? '1fr' : 'repeat(auto-fit, minmax(300px, 1fr))', 
              gap: isMobile ? '40px' : '60px',
              alignItems: 'center'
            }}>
              <div style={{ order: isMobile ? 2 : 1 }}>
                <h2 style={{ 
                  fontSize: isMobile ? '2rem' : '2.5rem',
                  fontWeight: 'bold',
                  color: '#36454F',
                  marginBottom: isMobile ? '15px' : '20px',
                  textAlign: isMobile ? 'center' : 'left'
                }}>
                  Our Journey
                </h2>
                <p style={{ 
                  fontSize: isMobile ? '1rem' : '1.1rem',
                  color: '#4a5568',
                  lineHeight: '1.7',
                  marginBottom: isMobile ? '25px' : '30px',
                  textAlign: isMobile ? 'center' : 'left'
                }}>
                  Starting from a small stall in City Market, we've grown into Nairobi's premier butcher 
                  by staying true to one principle: uncompromising quality. Our expert butchers bring 
                  generations of knowledge to every cut.
                </p>
                <div style={{ 
                  background: 'linear-gradient(135deg, #D4AF37 0%, #B8941F 100%)',
                  color: '#36454F',
                  padding: isMobile ? '12px 20px' : '15px 25px',
                  borderRadius: '10px',
                  display: 'inline-block',
                  fontWeight: 'bold',
                  fontSize: isMobile ? '1rem' : '1.1rem',
                  margin: isMobile ? '0 auto' : '0',
                  textAlign: 'center',
                  width: isMobile ? '100%' : 'auto'
                }}>
                  🥩 Serving Nairobi Since 2020
                </div>
              </div>
              
              <div style={{
                background: `linear-gradient(135deg, 
                  rgba(128, 0, 32, 0.1) 0%, 
                  rgba(54, 69, 79, 0.1) 100%),
                  url('/about-bg.jpg')`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                height: isMobile ? '300px' : '400px',
                borderRadius: '20px',
                boxShadow: '0 20px 40px rgba(0,0,0,0.1)',
                order: isMobile ? 1 : 2
              }} />
            </div>
          </div>
        </section>

        {/* Values Section */}
        <section style={{ 
          background: 'linear-gradient(135deg, #f8fafc 0%, #f1f5f9 100%)',
          padding: isMobile ? '50px 15px' : '80px 20px'
        }}>
          <div style={{ maxWidth: '1200px', margin: '0 auto', textAlign: 'center' }}>
            <h2 style={{ 
              fontSize: isMobile ? '2rem' : '2.5rem',
              fontWeight: 'bold',
              color: '#36454F',
              marginBottom: isMobile ? '40px' : '60px'
            }}>
              Why Choose THE MEATRIX CO.?
            </h2>
            
            <div style={{ 
              display: 'grid', 
              gridTemplateColumns: isMobile ? '1fr' : 'repeat(auto-fit, minmax(250px, 1fr))',
              gap: isMobile ? '25px' : '40px'
            }}>
              <div style={{
                background: 'white',
                padding: isMobile ? '30px 20px' : '40px 30px',
                borderRadius: '16px',
                boxShadow: '0 10px 30px rgba(0,0,0,0.08)',
                textAlign: 'center'
              }}>
                <div style={{
                  background: 'linear-gradient(135deg, #D4AF37 0%, #B8941F 100%)',
                  width: isMobile ? '60px' : '70px',
                  height: isMobile ? '60px' : '70px',
                  borderRadius: '50%',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  margin: '0 auto 15px',
                  fontSize: isMobile ? '24px' : '28px'
                }}>
                  🥩
                </div>
                <h3 style={{ 
                  fontSize: isMobile ? '1.2rem' : '1.3rem',
                  fontWeight: 'bold',
                  color: '#36454F',
                  marginBottom: '12px'
                }}>
                  Premium Selection
                </h3>
                <p style={{ 
                  color: '#4a5568',
                  lineHeight: '1.6',
                  fontSize: isMobile ? '14px' : '16px'
                }}>
                  Hand-selected cuts from trusted local sources, ensuring superior quality and flavor.
                </p>
              </div>

              <div style={{
                background: 'white',
                padding: isMobile ? '30px 20px' : '40px 30px',
                borderRadius: '16px',
                boxShadow: '0 10px 30px rgba(0,0,0,0.08)',
                textAlign: 'center'
              }}>
                <div style={{
                  background: 'linear-gradient(135deg, #800020 0%, #600018 100%)',
                  width: isMobile ? '60px' : '70px',
                  height: isMobile ? '60px' : '70px',
                  borderRadius: '50%',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  margin: '0 auto 15px',
                  fontSize: isMobile ? '24px' : '28px',
                  color: 'white'
                }}>
                  👨‍🍳
                </div>
                <h3 style={{ 
                  fontSize: isMobile ? '1.2rem' : '1.3rem',
                  fontWeight: 'bold',
                  color: '#36454F',
                  marginBottom: '12px'
                }}>
                  Expert Butchers
                </h3>
                <p style={{ 
                  color: '#4a5568',
                  lineHeight: '1.6',
                  fontSize: isMobile ? '14px' : '16px'
                }}>
                  Master craftsmen with decades of experience in perfecting every cut to your preference.
                </p>
              </div>

              <div style={{
                background: 'white',
                padding: isMobile ? '30px 20px' : '40px 30px',
                borderRadius: '16px',
                boxShadow: '0 10px 30px rgba(0,0,0,0.08)',
                textAlign: 'center'
              }}>
                <div style={{
                  background: 'linear-gradient(135deg, #36454F 0%, #2a363f 100%)',
                  width: isMobile ? '60px' : '70px',
                  height: isMobile ? '60px' : '70px',
                  borderRadius: '50%',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  margin: '0 auto 15px',
                  fontSize: isMobile ? '24px' : '28px',
                  color: 'white'
                }}>
                  🚚
                </div>
                <h3 style={{ 
                  fontSize: isMobile ? '1.2rem' : '1.3rem',
                  fontWeight: 'bold',
                  color: '#36454F',
                  marginBottom: '12px'
                }}>
                  CBD Delivery
                </h3>
                <p style={{ 
                  color: '#4a5568',
                  lineHeight: '1.6',
                  fontSize: isMobile ? '14px' : '16px'
                }}>
                  Free delivery to your doorstep within Nairobi CBD. Quality guaranteed, always.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section style={{
          background: 'linear-gradient(135deg, #36454F 0%, #2a363f 100%)',
          color: 'white',
          padding: isMobile ? '50px 20px' : '80px 20px',
          textAlign: 'center'
        }}>
          <div style={{ maxWidth: '600px', margin: '0 auto' }}>
            <h2 style={{ 
              fontSize: isMobile ? '2rem' : '2.5rem',
              fontWeight: 'bold',
              marginBottom: isMobile ? '15px' : '20px'
            }}>
              Ready to Taste the Difference?
            </h2>
            <p style={{ 
              fontSize: isMobile ? '1.1rem' : '1.2rem',
              marginBottom: isMobile ? '30px' : '40px',
              opacity: '0.9'
            }}>
              Experience why Nairobi's finest restaurants and homes trust us for their premium meat needs.
            </p>
            <a 
              href="/products"
              style={{
                background: 'linear-gradient(135deg, #D4AF37 0%, #B8941F 100%)',
                color: '#36454F',
                padding: isMobile ? '16px 30px' : '18px 40px',
                borderRadius: '10px',
                textDecoration: 'none',
                fontWeight: 'bold',
                fontSize: isMobile ? '1rem' : '1.1rem',
                display: 'inline-block',
                boxShadow: '0 8px 25px rgba(212, 175, 55, 0.4)',
                transition: 'all 0.3s ease',
                width: isMobile ? '100%' : 'auto'
              }}
              onMouseOver={handleButtonHover}
              onMouseOut={handleButtonOut}
            >
              🛒 SHOP OUR PREMIUM SELECTION
            </a>
          </div>
        </section>

        {/* Footer */}
        <footer style={{
          background: '#1a202c',
          color: 'white',
          padding: isMobile ? '30px 20px' : '40px 20px',
          textAlign: 'center'
        }}>
          <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
            <p style={{ 
              margin: 0, 
              fontSize: isMobile ? '14px' : '16px' 
            }}>
              &copy; 2025 THE MEATRIX CO. All rights reserved.
            </p>
            <p style={{ 
              margin: '10px 0 0 0', 
              color: '#D4AF37', 
              fontSize: isMobile ? '12px' : '14px',
              fontWeight: '500'
            }}>
              Premium Meats & Seafood • Nairobi's Trusted Butcher Since 2020
            </p>
          </div>
        </footer>
      </div>
    </CartProvider>
  )
}
