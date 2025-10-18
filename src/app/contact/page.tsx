'use client'
import { CartProvider } from '@/context/cartContext'
import { useEffect, useState } from 'react'

export default function Contact() {
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener('resize', checkMobile);

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

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const formData = new FormData(e.currentTarget)
    const data = Object.fromEntries(formData)

    const message = `*NEW CUSTOMER MESSAGE*%0A%0A*👤 Name:* ${data.first_name} ${data.last_name}%0A*📧 Email:* ${data.email}%0A*📞 Phone:* ${data.phone || 'Not provided'}%0A*💬 Message:*%0A${data.message}%0A%0A*📍 Sent via The Matrix Co. Website*`
    window.open(`https://wa.me/254707636105?text=${message}`, '_blank')
    e.currentTarget.reset()
    alert('✅ Message ready! Opening WhatsApp to send...')
  }

  // Event handlers with proper TypeScript types
  const handleButtonHover = (e: React.MouseEvent<HTMLButtonElement>) => {
    if (!isMobile) {
      const target = e.currentTarget;
      target.style.transform = 'translateY(-2px)';
      target.style.boxShadow = '0 6px 20px rgba(37, 211, 102, 0.4)';
    }
  };

  const handleButtonOut = (e: React.MouseEvent<HTMLButtonElement>) => {
    if (!isMobile) {
      const target = e.currentTarget;
      target.style.transform = 'translateY(0)';
      target.style.boxShadow = '0 4px 15px rgba(37, 211, 102, 0.3)';
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
    <CartProvider>
      <div style={{ minHeight: '100vh', background: 'white' }}>
        {/* HEADER */}
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
            <div style={{ display: 'flex', alignItems: 'center', gap: isMobile ? '10px' : '15px' }}>
              <div style={{
                width: isMobile ? '50px' : '60px',
                height: isMobile ? '50px' : '60px',
                borderRadius: '12px',
                overflow: 'hidden',
                background: '#D4AF37',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                border: '2px solid #D4AF37'
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
                  margin: 0
                }}>
                  THE MEATRIX CO.
                </h1>
                <p style={{
                  color: 'white',
                  fontSize: isMobile ? '12px' : '14px',
                  margin: 0,
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
                color: 'white', 
                textDecoration: 'none', 
                fontSize: isMobile ? '12px' : '14px', 
                fontWeight: '600',
                whiteSpace: 'nowrap'
              }}>ABOUT</a>
              <a href="/contact" style={{ 
                color: '#D4AF37', 
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

        {/* HERO SECTION */}
        <section style={{
          position: 'relative',
          color: 'white',
          padding: isMobile ? '50px 20px' : '80px 20px',
          textAlign: 'center',
          minHeight: isMobile ? '300px' : '400px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          overflow: 'hidden'
        }}>
          <div style={{
            position: 'absolute',
            top: 0, left: 0, right: 0, bottom: 0,
            backgroundImage: 'url("https://images.unsplash.com/photo-1558036117-15e82a2c9a9a?auto=format&fit=crop&w=2070&q=80")',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            zIndex: 1
          }} />
          <div style={{
            position: 'absolute',
            top: 0, left: 0, right: 0, bottom: 0,
            background: 'linear-gradient(135deg, rgba(128,0,32,0.70) 0%, rgba(54,69,79,0.70) 100%)',
            zIndex: 2
          }} />
          <div style={{ position: 'relative', zIndex: 3 }}>
            <h1 style={{
              fontSize: isMobile ? '2.2rem' : '3.5rem',
              fontWeight: 'bold',
              marginBottom: isMobile ? '15px' : '20px'
            }}>
              GET IN TOUCH
            </h1>
            <p style={{ 
              fontSize: isMobile ? '1.1rem' : '1.3rem', 
              maxWidth: isMobile ? '90vw' : '600px', 
              margin: '0 auto' 
            }}>
              We're here to serve you with the finest cuts and exceptional service.
            </p>
          </div>
        </section>

        {/* CONTACT SECTION */}
        <section style={{ padding: isMobile ? '40px 15px' : '80px 20px' }}>
          <div style={{ 
            maxWidth: '1200px', 
            margin: '0 auto', 
            display: 'grid', 
            gridTemplateColumns: isMobile ? '1fr' : 'repeat(auto-fit, minmax(350px, 1fr))', 
            gap: isMobile ? '40px' : '60px' 
          }}>

            {/* LEFT SIDE */}
            <div>
              <h2 style={{ 
                fontSize: isMobile ? '1.8rem' : '2.2rem', 
                fontWeight: 'bold', 
                color: '#36454F', 
                marginBottom: isMobile ? '20px' : '30px',
                textAlign: isMobile ? 'center' : 'left'
              }}>
                Contact Information
              </h2>

              {/* LOCATION */}
              <div style={{ 
                display: 'flex', 
                alignItems: 'flex-start', 
                gap: '15px', 
                marginBottom: '25px',
                flexDirection: isMobile ? 'column' : 'row',
                textAlign: isMobile ? 'center' : 'left'
              }}>
                <div style={{ 
                  background: '#D4AF37', 
                  padding: isMobile ? '10px' : '12px', 
                  borderRadius: '12px',
                  alignSelf: isMobile ? 'center' : 'flex-start'
                }}>📍</div>
                <div>
                  <h3 style={{ margin: 0 }}>Visit Our Store</h3>
                  <p>City Market, Nairobi CBD<br />Ground Floor, Stall 63</p>
                </div>
              </div>

              {/* WHATSAPP */}
              <div style={{ 
                display: 'flex', 
                alignItems: 'flex-start', 
                gap: '15px', 
                marginBottom: '25px',
                flexDirection: isMobile ? 'column' : 'row',
                textAlign: isMobile ? 'center' : 'left'
              }}>
                <div style={{ 
                  background: '#25D366', 
                  padding: isMobile ? '10px' : '12px', 
                  borderRadius: '12px', 
                  color: 'white',
                  alignSelf: isMobile ? 'center' : 'flex-start'
                }}>💬</div>
                <div>
                  <h3 style={{ margin: 0 }}>Call or WhatsApp</h3>
                  <a href="https://wa.me/254707636105" target="_blank" rel="noopener noreferrer" style={{ color: '#25D366', textDecoration: 'none', fontWeight: '600' }}>
                    +254 707 636105
                  </a>
                </div>
              </div>

              {/* EMAIL */}
              <div style={{ 
                display: 'flex', 
                alignItems: 'flex-start', 
                gap: '15px', 
                marginBottom: '25px',
                flexDirection: isMobile ? 'column' : 'row',
                textAlign: isMobile ? 'center' : 'left'
              }}>
                <div style={{ 
                  background: '#800020', 
                  padding: isMobile ? '10px' : '12px', 
                  borderRadius: '12px', 
                  color: 'white',
                  alignSelf: isMobile ? 'center' : 'flex-start'
                }}>✉️</div>
                <div>
                  <h3 style={{ margin: 0 }}>Email Us</h3>
                  <a href="mailto:info@themeatrix.co.ke" style={{ color: '#800020', textDecoration: 'none', fontWeight: '600' }}>
                    info@themeatrix.co.ke
                  </a>
                </div>
              </div>

              {/* SOCIALS */}
              <div style={{ marginTop: '40px', textAlign: isMobile ? 'center' : 'left' }}>
                <h3 style={{ 
                  fontSize: isMobile ? '1.2rem' : '1.3rem', 
                  fontWeight: 'bold', 
                  color: '#36454F', 
                  marginBottom: '20px' 
                }}>
                  Follow Us
                </h3>
                <div style={{ 
                  display: 'flex', 
                  gap: '15px', 
                  flexWrap: 'wrap',
                  justifyContent: isMobile ? 'center' : 'flex-start'
                }}>
                  <a href="#" target="_blank" rel="noopener noreferrer" style={{ 
                    background: '#1877F2', 
                    color: 'white', 
                    padding: isMobile ? '10px 14px' : '12px 16px', 
                    borderRadius: '10px', 
                    textDecoration: 'none', 
                    fontWeight: '600', 
                    fontSize: isMobile ? '12px' : '14px',
                    whiteSpace: 'nowrap'
                  }}>Facebook</a>
                  <a href="https://instagram.com/themeatrixco" target="_blank" rel="noopener noreferrer" style={{ 
                    background: 'linear-gradient(45deg,#E4405F,#833AB4,#405DE6)', 
                    color: 'white', 
                    padding: isMobile ? '10px 14px' : '12px 16px', 
                    borderRadius: '10px', 
                    textDecoration: 'none', 
                    fontWeight: '600', 
                    fontSize: isMobile ? '12px' : '14px',
                    whiteSpace: 'nowrap'
                  }}>Instagram</a>
                  <a href="#" target="_blank" rel="noopener noreferrer" style={{ 
                    background: '#000', 
                    color: 'white', 
                    padding: isMobile ? '10px 14px' : '12px 16px', 
                    borderRadius: '10px', 
                    textDecoration: 'none', 
                    fontWeight: '600', 
                    fontSize: isMobile ? '12px' : '14px',
                    whiteSpace: 'nowrap'
                  }}>TikTok</a>
                  <a href="https://twitter.com/themeatrixco" target="_blank" rel="noopener noreferrer" style={{ 
                    background: '#000', 
                    color: 'white', 
                    padding: isMobile ? '10px 14px' : '12px 16px', 
                    borderRadius: '10px', 
                    textDecoration: 'none', 
                    fontWeight: '600', 
                    fontSize: isMobile ? '12px' : '14px',
                    whiteSpace: 'nowrap'
                  }}>X</a>
                </div>
              </div>
            </div>

            {/* RIGHT SIDE FORM */}
            <div style={{ 
              background: '#f9fafb', 
              padding: isMobile ? '25px' : '40px', 
              borderRadius: '20px', 
              boxShadow: '0 10px 30px rgba(0,0,0,0.08)' 
            }}>
              <h2 style={{ 
                fontSize: isMobile ? '1.6rem' : '2rem', 
                fontWeight: 'bold', 
                color: '#36454F', 
                marginBottom: isMobile ? '20px' : '30px',
                textAlign: isMobile ? 'center' : 'left'
              }}>
                Send Us a Message
              </h2>
              <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '15px' }}>
                <div style={{ 
                  display: 'grid', 
                  gridTemplateColumns: isMobile ? '1fr' : '1fr 1fr', 
                  gap: '15px' 
                }}>
                  <input 
                    name="first_name" 
                    placeholder="First Name *" 
                    required 
                    style={{ 
                      padding: isMobile ? '12px' : '15px', 
                      borderRadius: '10px', 
                      border: '2px solid #e5e7eb',
                      fontSize: isMobile ? '14px' : '16px'
                    }} 
                  />
                  <input 
                    name="last_name" 
                    placeholder="Last Name *" 
                    required 
                    style={{ 
                      padding: isMobile ? '12px' : '15px', 
                      borderRadius: '10px', 
                      border: '2px solid #e5e7eb',
                      fontSize: isMobile ? '14px' : '16px'
                    }} 
                  />
                </div>
                <input 
                  name="email" 
                  type="email" 
                  placeholder="Email Address *" 
                  required 
                  style={{ 
                    padding: isMobile ? '12px' : '15px', 
                    borderRadius: '10px', 
                    border: '2px solid #e5e7eb',
                    fontSize: isMobile ? '14px' : '16px'
                  }} 
                />
                <input 
                  name="phone" 
                  type="tel" 
                  placeholder="Phone Number" 
                  style={{ 
                    padding: isMobile ? '12px' : '15px', 
                    borderRadius: '10px', 
                    border: '2px solid #e5e7eb',
                    fontSize: isMobile ? '14px' : '16px'
                  }} 
                />
                <textarea 
                  name="message" 
                  placeholder="Your Message *" 
                  rows={5} 
                  required 
                  style={{ 
                    padding: isMobile ? '12px' : '15px', 
                    borderRadius: '10px', 
                    border: '2px solid #e5e7eb', 
                    resize: 'vertical',
                    fontSize: isMobile ? '14px' : '16px'
                  }} 
                />
                <button 
                  type="submit" 
                  style={{
                    background: 'linear-gradient(135deg,#25D366,#128C7E)',
                    color: 'white',
                    padding: isMobile ? '16px 20px' : '18px 24px',
                    borderRadius: '10px',
                    border: 'none',
                    fontSize: isMobile ? '14px' : '16px',
                    fontWeight: 'bold',
                    cursor: 'pointer',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    gap: '12px',
                    transition: 'all 0.3s ease',
                    boxShadow: '0 4px 15px rgba(37, 211, 102, 0.3)',
                    width: isMobile ? '100%' : 'auto'
                  }}
                  onMouseOver={handleButtonHover}
                  onMouseOut={handleButtonOut}
                >
                  <img 
                    src="https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg" 
                    alt="WhatsApp" 
                    style={{ 
                      width: isMobile ? '20px' : '24px', 
                      height: isMobile ? '20px' : '24px',
                      filter: 'brightness(0) invert(1)'
                    }} 
                  />
                  Send via WhatsApp
                </button>
              </form>
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
  )
}
