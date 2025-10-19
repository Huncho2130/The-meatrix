"use client";

import { useState, useEffect } from 'react';

export default function TermsPage() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  return (
    <div style={{ minHeight: '100vh', background: '#f7fafc' }}>
      {/* Header */}
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
          <div style={{ display: 'flex', alignItems: 'center', gap: '15px' }}>
            <div style={{
              width: isMobile ? '40px' : '50px',
              height: isMobile ? '40px' : '50px',
              borderRadius: '10px',
              background: '#D4AF37',
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
              color: '#D4AF37', 
              margin: 0 
            }}>
              THE MEATRIX CO.
            </h1>
          </div>
          <a 
            href="/"
            style={{
              color: 'white',
              textDecoration: 'none',
              fontSize: '14px',
              fontWeight: '600',
              padding: '8px 16px',
              border: '1px solid #D4AF37',
              borderRadius: '6px',
              transition: 'all 0.3s ease'
            }}
            onMouseOver={(e) => {
              e.currentTarget.style.background = '#D4AF37';
              e.currentTarget.style.color = '#36454F';
            }}
            onMouseOut={(e) => {
              e.currentTarget.style.background = 'transparent';
              e.currentTarget.style.color = 'white';
            }}
          >
            ← Back to Home
          </a>
        </div>
      </header>

      {/* Terms Content */}
      <div style={{ 
        padding: isMobile ? '40px 20px' : '60px 40px', 
        maxWidth: '800px', 
        margin: '0 auto',
        background: 'white',
        marginTop: '20px',
        borderRadius: '10px',
        boxShadow: '0 4px 15px rgba(0,0,0,0.1)'
      }}>
        <h1 style={{ 
          color: '#36454F', 
          fontSize: isMobile ? '2rem' : '2.5rem',
          marginBottom: '10px',
          textAlign: 'center'
        }}>
          Terms & Conditions
        </h1>
        
        <p style={{ 
          color: '#4a5568', 
          textAlign: 'center',
          marginBottom: '40px',
          fontSize: isMobile ? '14px' : '16px'
        }}>
          Last updated: {new Date().toLocaleDateString()}
        </p>

        <div style={{ lineHeight: '1.8', color: '#36454F' }}>
          {/* Business Protection Sections */}
          <section style={{ marginBottom: '30px' }}>
            <h2 style={{ color: '#800020', fontSize: '1.5rem', marginBottom: '15px' }}>
              1. Ordering & Payment
            </h2>
            <p><strong>All orders are final</strong> once payment is confirmed. We do not accept cancellations for fresh meat products due to their perishable nature.</p>
            <p>Payment must be completed in full before order processing. We accept mobile money, bank transfers, and cash on delivery (Nairobi CBD only).</p>
          </section>

          <section style={{ marginBottom: '30px' }}>
            <h2 style={{ color: '#800020', fontSize: '1.5rem', marginBottom: '15px' }}>
              2. Delivery & Quality
            </h2>
            <p><strong>Free delivery within Nairobi CBD</strong> for orders above KSh 2,000. Outside CBD areas may incur additional delivery charges.</p>
            <p>We guarantee the quality of our products at the time of delivery. Customers must inspect products upon delivery and report any issues immediately.</p>
            <p>We are not liable for quality issues arising from improper storage after delivery.</p>
          </section>

          <section style={{ marginBottom: '30px' }}>
            <h2 style={{ color: '#800020', fontSize: '1.5rem', marginBottom: '15px' }}>
              3. Returns & Refunds
            </h2>
            <p><strong>No returns accepted</strong> for fresh meat, poultry, and seafood products due to health and safety regulations.</p>
            <p>Refunds are only considered in cases of proven quality issues at delivery or wrong items delivered. Refund requests must be made within 2 hours of delivery.</p>
          </section>

          <section style={{ marginBottom: '30px' }}>
            <h2 style={{ color: '#800020', fontSize: '1.5rem', marginBottom: '15px' }}>
              4. Product Descriptions
            </h2>
            <p>We strive to provide accurate product descriptions and images. Actual products may vary slightly in appearance.</p>
            <p>All weights are approximate. We reserve the right to substitute products with items of equal or greater value if out of stock.</p>
          </section>

          <section style={{ marginBottom: '30px' }}>
            <h2 style={{ color: '#800020', fontSize: '1.5rem', marginBottom: '15px' }}>
              5. Liability
            </h2>
            <p>THE MEATRIX CO. is not liable for:</p>
            <ul style={{ paddingLeft: '20px', margin: '10px 0' }}>
              <li>Allergic reactions or health issues</li>
              <li>Improper storage or handling by customer</li>
              <li>Delivery delays due to traffic or weather conditions</li>
              <li>Force majeure events</li>
            </ul>
          </section>

          <section style={{ marginBottom: '30px' }}>
            <h2 style={{ color: '#800020', fontSize: '1.5rem', marginBottom: '15px' }}>
              6. Privacy
            </h2>
            <p>We respect your privacy. Customer information is used solely for order processing and delivery. We do not share your data with third parties.</p>
          </section>

          <section style={{ marginBottom: '30px' }}>
            <h2 style={{ color: '#800020', fontSize: '1.5rem', marginBottom: '15px' }}>
              7. Contact & Complaints
            </h2>
            <p>For any concerns, contact us:</p>
            <ul style={{ paddingLeft: '20px', margin: '10px 0' }}>
              <li>Phone: +254-707-636105</li>
              <li>Email: info@themeatrix.co.ke</li>
              <li>Location: City Market, Ground Floor Stall 63, Nairobi</li>
            </ul>
          </section>

          <section>
            <p style={{ 
              fontSize: '14px', 
              color: '#4a5568', 
              fontStyle: 'italic',
              borderTop: '1px solid #e2e8f0',
              paddingTop: '20px'
            }}>
              By placing an order with THE MEATRIX CO., you acknowledge and agree to these Terms & Conditions.
            </p>
          </section>
        </div>
      </div>

      {/* Footer */}
      <footer style={{
        background: '#1a202c',
        color: 'white',
        padding: isMobile ? '30px 20px' : '40px 20px',
        textAlign: 'center',
        marginTop: '60px'
      }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <p style={{ margin: 0, fontSize: isMobile ? '14px' : '16px' }}>
            &copy; 2025 THE MEATRIX CO. All rights reserved.
          </p>
          <p style={{ margin: '10px 0 0 0', color: '#D4AF37', fontSize: isMobile ? '12px' : '14px' }}>
            Premium Meats & Seafood • Nairobi's Finest Butcher
          </p>
        </div>
      </footer>
    </div>
  );
}
