import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Mutton vs Goat Meat: Which is Better for Kenyan Dishes? | The Meatrix',
  description: 'Understand the differences between mutton and goat meat for traditional Kenyan recipes. Learn which meat suits your dishes best.',
  keywords: 'mutton vs goat meat, Kenyan dishes, meat guide Nairobi, The Meatrix',
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
          Mutton vs Goat Meat: Which is Better for Kenyan Dishes?
        </h1>
        <div style={{ color: '#777', fontSize: '14px' }}>
          January 5, 2024 • 6 min read
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
          src="/blog/mutton-vs-goat.jpg"
          alt="Mutton vs Goat Meat"
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
          <strong>Summary:</strong> Mutton and goat meat are staples in Kenyan cuisine. Understanding their differences in flavor, texture, and cooking methods helps you choose the best meat for your traditional dishes.
        </p>
      </div>

      {/* Body */}
      <h2 style={{ fontSize: '26px', marginBottom: '12px' }}>1. Flavor Profile</h2>
      <p>
        Goat meat has a distinct, slightly gamey flavor, while mutton is milder and fattier. Goat is ideal for slow-cooked stews, while mutton works well for roasted or grilled dishes.
      </p>

      <h2 style={{ fontSize: '26px', marginTop: '35px', marginBottom: '12px' }}>2. Texture and Fat Content</h2>
      <p>
        Mutton is generally more tender with higher fat content, making it richer. Goat meat is leaner and firmer, which may require longer cooking times to achieve tenderness.
      </p>

      <h2 style={{ fontSize: '26px', marginTop: '35px', marginBottom: '12px' }}>3. Best Cooking Methods</h2>
      <p>
        - <strong>Goat meat:</strong> Slow-cooked stews, curries, or nyama choma  
        - <strong>Mutton:</strong> Roasts, grilling, and spicy stews
      </p>

      <h2 style={{ fontSize: '26px', marginTop: '35px', marginBottom: '12px' }}>4. Availability and Price</h2>
      <p>
        Goat meat is widely available in local markets and slightly cheaper than premium cuts of mutton. Mutton may be costlier, but it’s preferred for special occasions.
      </p>

      <h2 style={{ fontSize: '26px', marginTop: '35px', marginBottom: '12px' }}>5. Choosing Quality</h2>
      <p>
        Look for firm meat with a pleasant smell, minimal dark spots, and good fat distribution. Whether mutton or goat, fresh quality meat makes all the difference in your dishes.
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
        <h3 style={{ marginTop: 0, fontSize: '22px' }}>🍖 Ready to Cook?</h3>
        <p style={{ fontSize: '16px' }}>Order premium mutton or goat meat from The Meatrix and enjoy fresh delivery across Nairobi.</p>

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
          Order Mutton & Goat Meat Now
        </a>
      </div>

      {/* Footer */}
      <footer style={{ marginTop: '40px', paddingTop: '20px', borderTop: '1px solid #eee' }}>
        <p><strong>Tags:</strong> mutton, goat meat, Kenyan dishes, Nairobi butcher, The Meatrix</p>
      </footer>
    </article>
  )
}

