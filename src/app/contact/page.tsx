'use client'
import { CartProvider } from '@/context/cartContext'
import { useEffect } from 'react'

export default function Contact() {
  useEffect(() => {
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
    const target = e.currentTarget;
    target.style.transform = 'translateY(-2px)';
    target.style.boxShadow = '0 6px 20px rgba(37, 211, 102, 0.4)';
  };

  const handleButtonOut = (e: React.MouseEvent<HTMLButtonElement>) => {
    const target = e.currentTarget;
    target.style.transform = 'translateY(0)';
    target.style.boxShadow = '0 4px 15px rgba(37, 211, 102, 0.3)';
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
          padding: '15px 20px',
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
            margin: '0 auto'
          }}>
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
                border: '2px solid #D4AF37'
              }}>
                <img
                  src="/log.png"
                  alt="The Matrix Co. Logo"
                  style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                  onError={handleImageError}
                />
              </div>
              <div>
                <h1 style={{
                  fontSize: '1.8rem',
                  fontWeight: 'bold',
                  color: '#D4AF37',
                  margin: 0
                }}>
                  THE MEATRIX CO.
                </h1>
                <p style={{
                  color: 'white',
                  fontSize: '14px',
                  margin: 0,
                  fontWeight: '500',
                  opacity: '0.9'
                }}>
                  Premium Meats & Seafood
                </p>
              </div>
            </div>

            <nav style={{ display: 'flex', gap: '20px' }}>
              <a href="/" style={{ color: 'white', textDecoration: 'none', fontSize: '14px', fontWeight: '600' }}>HOME</a>
              <a href="/products" style={{ color: 'white', textDecoration: 'none', fontSize: '14px', fontWeight: '600' }}>PRODUCTS</a>
              <a href="/about" style={{ color: 'white', textDecoration: 'none', fontSize: '14px', fontWeight: '600' }}>ABOUT</a>
              <a href="/contact" style={{ color: '#D4AF37', textDecoration: 'none', fontSize: '14px', fontWeight: '600' }}>CONTACT</a>
            </nav>
          </div>

          {/* Top Info Bar - Updated */}
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

        {/* HERO SECTION */}
        <section style={{
          position: 'relative',
          color: 'white',
          padding: '80px 20px',
          textAlign: 'center',
          minHeight: '400px',
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
              fontSize: '3.5rem',
              fontWeight: 'bold',
              marginBottom: '20px'
            }}>
              GET IN TOUCH
            </h1>
            <p style={{ fontSize: '1.3rem', maxWidth: '600px', margin: '0 auto' }}>
              We're here to serve you with the finest cuts and exceptional service.
            </p>
          </div>
        </section>

        {/* CONTACT SECTION */}
        <section style={{ padding: '80px 20px' }}>
          <div style={{ maxWidth: '1200px', margin: '0 auto', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))', gap: '60px' }}>

            {/* LEFT SIDE */}
            <div>
              <h2 style={{ fontSize: '2.2rem', fontWeight: 'bold', color: '#36454F', marginBottom: '30px' }}>
                Contact Information
              </h2>

              {/* LOCATION */}
              <div style={{ display: 'flex', alignItems: 'flex-start', gap: '15px', marginBottom: '25px' }}>
                <div style={{ background: '#D4AF37', padding: '12px', borderRadius: '12px' }}>📍</div>
                <div>
                  <h3 style={{ margin: 0 }}>Visit Our Store</h3>
                  <p>City Market, Nairobi CBD<br />Ground Floor, Stall 63</p>
                </div>
              </div>

              {/* WHATSAPP */}
              <div style={{ display: 'flex', alignItems: 'flex-start', gap: '15px', marginBottom: '25px' }}>
                <div style={{ background: '#25D366', padding: '12px', borderRadius: '12px', color: 'white' }}>💬</div>
                <div>
                  <h3 style={{ margin: 0 }}>Call or WhatsApp</h3>
                  <a href="https://wa.me/254707636105" target="_blank" rel="noopener noreferrer" style={{ color: '#25D366', textDecoration: 'none', fontWeight: '600' }}>
                    +254 707 636105
                  </a>
                </div>
              </div>

              {/* EMAIL */}
              <div style={{ display: 'flex', alignItems: 'flex-start', gap: '15px', marginBottom: '25px' }}>
                <div style={{ background: '#800020', padding: '12px', borderRadius: '12px', color: 'white' }}>✉️</div>
                <div>
                  <h3 style={{ margin: 0 }}>Email Us</h3>
                  <a href="mailto:info@themeatrix.co.ke" style={{ color: '#800020', textDecoration: 'none', fontWeight: '600' }}>
                    info@themeatrix.co.ke
                  </a>
                </div>
              </div>

              {/* SOCIALS */}
              <div style={{ marginTop: '40px' }}>
                <h3 style={{ fontSize: '1.3rem', fontWeight: 'bold', color: '#36454F', marginBottom: '20px' }}>
                  Follow Us
                </h3>
                <div style={{ display: 'flex', gap: '15px', flexWrap: 'wrap' }}>
                  <a href="#" target="_blank" rel="noopener noreferrer" style={{ background: '#1877F2', color: 'white', padding: '12px 16px', borderRadius: '10px', textDecoration: 'none', fontWeight: '600', fontSize: '14px' }}>Facebook</a>
                  <a href="https://instagram.com/themeatrixco" target="_blank" rel="noopener noreferrer" style={{ background: 'linear-gradient(45deg,#E4405F,#833AB4,#405DE6)', color: 'white', padding: '12px 16px', borderRadius: '10px', textDecoration: 'none', fontWeight: '600', fontSize: '14px' }}>Instagram</a>
                  <a href="#" target="_blank" rel="noopener noreferrer" style={{ background: '#000', color: 'white', padding: '12px 16px', borderRadius: '10px', textDecoration: 'none', fontWeight: '600', fontSize: '14px' }}>TikTok</a>
                  <a href="https://twitter.com/themeatrixco" target="_blank" rel="noopener noreferrer" style={{ background: '#000', color: 'white', padding: '12px 16px', borderRadius: '10px', textDecoration: 'none', fontWeight: '600', fontSize: '14px' }}>X</a>
                </div>
              </div>
            </div>

            {/* RIGHT SIDE FORM */}
            <div style={{ background: '#f9fafb', padding: '40px', borderRadius: '20px', boxShadow: '0 10px 30px rgba(0,0,0,0.08)' }}>
              <h2 style={{ fontSize: '2rem', fontWeight: 'bold', color: '#36454F', marginBottom: '30px' }}>
                Send Us a Message
              </h2>
              <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '15px' }}>
                  <input name="first_name" placeholder="First Name *" required style={{ padding: '15px', borderRadius: '10px', border: '2px solid #e5e7eb' }} />
                  <input name="last_name" placeholder="Last Name *" required style={{ padding: '15px', borderRadius: '10px', border: '2px solid #e5e7eb' }} />
                </div>
                <input name="email" type="email" placeholder="Email Address *" required style={{ padding: '15px', borderRadius: '10px', border: '2px solid #e5e7eb' }} />
                <input name="phone" type="tel" placeholder="Phone Number" style={{ padding: '15px', borderRadius: '10px', border: '2px solid #e5e7eb' }} />
                <textarea name="message" placeholder="Your Message *" rows={5} required style={{ padding: '15px', borderRadius: '10px', border: '2px solid #e5e7eb', resize: 'vertical' }} />
                <button 
                  type="submit" 
                  style={{
                    background: 'linear-gradient(135deg,#25D366,#128C7E)',
                    color: 'white',
                    padding: '18px 24px',
                    borderRadius: '10px',
                    border: 'none',
                    fontSize: '16px',
                    fontWeight: 'bold',
                    cursor: 'pointer',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    gap: '12px',
                    transition: 'all 0.3s ease',
                    boxShadow: '0 4px 15px rgba(37, 211, 102, 0.3)'
                  }}
                  onMouseOver={handleButtonHover}
                  onMouseOut={handleButtonOut}
                >
                  <img 
                    src="https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg" 
                    alt="WhatsApp" 
                    style={{ 
                      width: '24px', 
                      height: '24px',
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
  )
}