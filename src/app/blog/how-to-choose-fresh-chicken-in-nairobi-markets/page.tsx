

import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'How to Choose Fresh Chicken in Nairobi Markets | The Meatrix',
  description: 'Learn the tips and tricks to pick the freshest chicken in Nairobi. From color and smell to texture, ensure you get the best quality for your meals.',
  keywords: 'fresh chicken Nairobi, chicken buying tips, Nairobi markets, The Meatrix chicken',
}

export default function BlogPost() {
  return (
    <article
      style={{
        maxWidth: '800px',
        margin: '0 auto',
        padding: '20px',
        lineHeight: '1.7',
        fontFamily: 'system-ui, sans-serif'
      }}
    >
      {/* Header */}
      <header style={{ marginBottom: '40px' }}>
        <h1 style={{ fontSize: '34px', marginBottom: '10px' }}>
          How to Choose Fresh Chicken in Nairobi Markets
        </h1>
        <div style={{ color: '#777', fontSize: '14px' }}>
          November 29, 2025 • 5 min read
        </div>
      </header>

      {/* Hero Image */}
      <div
        style={{
          width: '100%',
          height: '350px',
          borderRadius: '16px',
          overflow: 'hidden',
          marginBottom: '35px',
          boxShadow: '0 4px 12px rgba(0,0,0,0.1)'
        }}
      >
        <img
          src="/blog/fresh-chicken.jpg"
          alt="Fresh Chicken in Nairobi Market"
          style={{ width: '100%', height: '100%', objectFit: 'cover' }}
        />
      </div>

      {/* Summary */}
      <div
        style={{
          backgroundColor: '#f3f4f6',
          padding: '22px',
          borderRadius: '12px',
          marginBottom: '35px',
          border: '1px solid #e5e7eb'
        }}
      >
        <p style={{ margin: 0, fontSize: '16px' }}>
          <strong>Summary:</strong> Selecting fresh chicken in Nairobi markets is simple if you know what to look for. Pay attention to color, smell, texture, and packaging to ensure quality and safety for your meals.
        </p>
      </div>

      {/* Body */}
      <h2 style={{ fontSize: '26px', marginBottom: '12px' }}>1. Look at the Color</h2>
      <p>
        Fresh chicken should have a pinkish hue — not grey, green, or overly pale. Avoid meat with dark spots or discoloration, which indicate age or spoilage.
      </p>

      <h2 style={{ fontSize: '26px', marginTop: '35px', marginBottom: '12px' }}>2. Check the Smell</h2>
      <p>
        Fresh chicken has a neutral, slightly meaty smell. Any sour, ammonia, or strong odor is a red flag for spoilage.
      </p>

      <h2 style={{ fontSize: '26px', marginTop: '35px', marginBottom: '12px' }}>3. Feel the Texture</h2>
      <p>
        The meat should be firm and springy to touch. Slimy or sticky texture means the chicken is no longer fresh.
      </p>

      <h2 style={{ fontSize: '26px', marginTop: '35px', marginBottom: '12px' }}>4. Examine the Packaging</h2>
      <p>
        If buying pre-packed chicken, check the expiry date and ensure the packaging is intact. Leaks or tears are a sign of poor handling.
      </p>

      <h2 style={{ fontSize: '26px', marginTop: '35px', marginBottom: '12px' }}>5. Buy from Trusted Sources</h2>
      <p>
        Nairobi has many markets and shops, but always choose reputable vendors. At The Meatrix, we guarantee fresh, high-quality chicken delivered to your doorstep.
      </p>

      {/* Order Block */}
      <div
        style={{
          backgroundColor: '#e6f4ea',
          padding: '28px',
          borderRadius: '14px',
          margin: '45px 0',
          border: '1px solid #c8e6c9',
          textAlign: 'center'
        }}
      >
        <h3 style={{ marginTop: 0, fontSize: '22px' }}>🍗 Ready to Cook Fresh Chicken?</h3>
        <p style={{ fontSize: '16px' }}>Order your fresh chicken from The Meatrix and enjoy premium quality delivered across Nairobi.</p>

       <a
  href="https://www.themeatrix.co.ke/products"
  style={{
    display: 'inline-block',
    backgroundColor: '#e53e3e',
    color: 'white',
    padding: '14px 28px',
    borderRadius: '8px',
    textDecoration: 'none',
    marginTop: '12px',
    fontWeight: 600,
    transition: 'background-color 0.2s ease-in-out'
  }}
>
  Order Fresh Chicken Now
</a>

      </div>

      {/* Footer */}
      <footer style={{ marginTop: '40px', paddingTop: '20px', borderTop: '1px solid #eee' }}>
        <p><strong>Tags:</strong> fresh chicken, Nairobi markets, chicken buying tips, The Meatrix</p>
      </footer>
    </article>
  )
}

