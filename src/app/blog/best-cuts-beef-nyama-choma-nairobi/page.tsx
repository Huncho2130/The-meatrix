import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Best Cuts of Beef for Nyama Choma in Nairobi | The Meatrix',
  description: 'Discover the perfect beef cuts for nyama choma in Nairobi. Learn about rump, sirloin, and short ribs from your local butcher.',
  keywords: 'nyama choma beef cuts nairobi, best meat for nyama choma, nairobi butcher tips',
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
          Best Cuts of Beef for Nyama Choma in Nairobi
        </h1>

        <div style={{ color: '#777', fontSize: '14px' }}>
          January 15, 2024 • 5 min read
        </div>
      </header>

      {/* Hero Image */}
      <div
        style={{
          width: '100%',
          height: '350px',
          borderRadius: '12px',
          overflow: 'hidden',
          marginBottom: '35px'
        }}
      >
        <img
          src="/blog/nyama-choma.jpg"
          alt="Nyama Choma Beef Cuts"
          style={{ width: '100%', height: '100%', objectFit: 'cover' }}
        />
      </div>

      {/* Summary */}
      <div
        style={{
          backgroundColor: '#f3f4f6',
          padding: '20px',
          borderRadius: '10px',
          marginBottom: '35px',
          border: '1px solid #e5e7eb'
        }}
      >
        <p style={{ margin: 0 }}>
          <strong>Summary:</strong> For the perfect nyama choma in Nairobi, choose rump steak, sirloin, or short ribs. These cuts offer the ideal balance of flavor, tenderness, and that authentic Kenyan nyama choma experience.
        </p>
      </div>

      {/* Body */}
      <h2 style={{ fontSize: '26px', marginBottom: '10px' }}>
        Why Cut Selection Matters for Nyama Choma
      </h2>
      <p>
        Choosing the right beef cut is crucial for tender, flavorful nyama choma.
        The wrong cut can result in tough, chewy meat that ruins your gathering.
      </p>

      <h2 style={{ fontSize: '26px', marginTop: '35px' }}>
        Top 3 Beef Cuts for Nyama Choma in Nairobi
      </h2>

      <h3 style={{ marginTop: '25px' }}>1. Rump Steak (Picanha)</h3>
      <p>
        Rump steak is the king of nyama choma cuts. Its fat cap renders down during grilling, basting the meat naturally and creating incredible flavor.
      </p>
      <ul>
        <li><strong>Best for:</strong> Traditional nyama choma experience</li>
        <li><strong>Flavor:</strong> Rich, beefy with perfect fat balance</li>
        <li><strong>Price in Nairobi:</strong> KES 1,800–2,200 per kg</li>
      </ul>

      <h3 style={{ marginTop: '25px' }}>2. Sirloin (Strip Loin)</h3>
      <p>
        Sirloin offers great tenderness with less fat. Perfect for those who prefer leaner nyama choma without sacrificing flavor.
      </p>
      <ul>
        <li><strong>Best for:</strong> Health-conscious meat lovers</li>
        <li><strong>Flavor:</strong> Clean, beefy taste</li>
        <li><strong>Price in Nairobi:</strong> KES 2,000–2,400 per kg</li>
      </ul>

      <h3 style={{ marginTop: '25px' }}>3. Short Ribs</h3>
      <p>
        For incredibly flavorful and tender nyama choma, short ribs are unbeatable. The bone adds depth to the flavor during grilling.
      </p>
      <ul>
        <li><strong>Best for:</strong> Maximum flavor experience</li>
        <li><strong>Flavor:</strong> Rich, marrow-enhanced taste</li>
        <li><strong>Price in Nairobi:</strong> KES 1,600–2,000 per kg</li>
      </ul>

      <h2 style={{ fontSize: '26px', marginTop: '35px' }}>
        Where to Find These Cuts in Nairobi
      </h2>
      <p>
        At The Meatrix, we specialize in providing these premium cuts for your nyama choma needs. We deliver across Nairobi with same-day service to ensure freshness.
      </p>

      {/* Order Block */}
      <div
        style={{
          backgroundColor: '#e6f4ea',
          padding: '25px',
          borderRadius: '10px',
          margin: '40px 0',
          border: '1px solid #c8e6c9'
        }}
      >
        <h3 style={{ marginTop: 0 }}>🔥 Ready for Your Next Nyama Choma?</h3>
        <p>Order the perfect beef cuts from The Meatrix and enjoy same-day delivery across Nairobi.</p>

        <a
          href="https://www.themeatrix.co.ke/products"
          style={{
            display: 'inline-block',
            backgroundColor: '#e53e3e',
            color: 'white',
            padding: '12px 26px',
            borderRadius: '6px',
            textDecoration: 'none',
            marginTop: '10px',
            fontWeight: 600
          }}
        >
          Order Nyama Choma Cuts Now
        </a>
      </div>

      {/* Footer */}
      <footer style={{ marginTop: '40px', paddingTop: '20px', borderTop: '1px solid #eee' }}>
        <p><strong>Tags:</strong> nyama choma, beef cuts Nairobi, Nairobi butcher, meat delivery Nairobi</p>
      </footer>
    </article>
  )
}
