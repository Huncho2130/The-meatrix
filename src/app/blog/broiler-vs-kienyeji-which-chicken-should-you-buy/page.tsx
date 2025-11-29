import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Broiler vs Kienyeji: Which Chicken Should You Buy in Nairobi? | The Meatrix',
  description:
    'Compare broiler and kienyeji chickens: flavor, nutrition, price and best uses for Nairobi kitchens. Practical buying and cooking advice.',
  keywords: 'broiler vs kienyeji, kienyeji chicken Nairobi, broiler chicken Kenya, which chicken to buy Nairobi',
  openGraph: {
    title: 'Broiler vs Kienyeji: Which Chicken Should You Buy in Nairobi?',
    description: 'Compare broiler and kienyeji: flavor, price, and how to cook each for the best result.',
    url: 'https://www.themeatrix.co.ke/blog/broiler-vs-kienyeji-which-chicken-should-you-buy',
    images: [{ url: '/og/broiler-vs-kienyeji.jpg', width: 1200, height: 630 }],
  },
  twitter: {
    card: 'summary_large_image',
    images: ['/og/broiler-vs-kienyeji.jpg'],
  },
  metadataBase: new URL('https://www.themeatrix.co.ke'),
}

export default function Page() {
  const published = 'November 29, 2025'
  const readTime = '6 min read'

  return (
    <article style={{ maxWidth: 800, margin: '0 auto', padding: 20, color: '#222', fontFamily: 'system-ui, sans-serif' }}>
      <header style={{ marginBottom: 20 }}>
        <h1 style={{ fontSize: 32 }}>Broiler vs Kienyeji: Which Chicken Should You Buy in Nairobi?</h1>
        <div style={{ color: '#666', fontSize: 14 }}>{published} • {readTime}</div>
      </header>

      <div style={{ width: '100%', height: 320, borderRadius: 12, overflow: 'hidden', marginBottom: 22 }}>
        <img src="/blog/broiler-kienyeji-hero.jpg" alt="Broiler vs Kienyeji chicken Nairobi" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
      </div>

      <div style={{ backgroundColor: '#f6f7fb', padding: 16, borderRadius: 10, border: '1px solid #eef2ff', marginBottom: 18 }}>
        <p style={{ margin: 0 }}><strong>Short answer:</strong> For quick, affordable meals go broiler; for richer flavor and traditional nyama choma, choose kienyeji. Below is a practical breakdown so you buy what fits your menu and budget.</p>
      </div>

      <h2 style={{ fontSize: 20 }}>What is a broiler?</h2>
      <p>Broilers are commercially raised for fast growth and tender meat. They are usually cheaper, have milder flavor, and cook quickly — perfect for weeknight meals.</p>

      <h2 style={{ fontSize: 20, marginTop: 16 }}>What is kienyeji (free-range)?</h2>
      <p>Kienyeji are local, slow-grown birds with firmer texture and a deeper, gamier flavor. They’re preferred for nyama choma and recipes where texture and flavor matter.</p>

      <h2 style={{ fontSize: 20, marginTop: 16 }}>Side-by-side comparison</h2>
      <table style={{ width: '100%', borderCollapse: 'collapse', marginTop: 10 }}>
        <tbody>
          <tr>
            <td style={{ padding: '8px 6px', width: '40%', fontWeight: 700 }}>Flavor</td>
            <td style={{ padding: '8px 6px' }}>Broiler: mild. Kienyeji: rich, gamey.</td>
          </tr>
          <tr style={{ background: '#fafafa' }}>
            <td style={{ padding: '8px 6px', fontWeight: 700 }}>Texture</td>
            <td style={{ padding: '8px 6px' }}>Broiler: soft. Kienyeji: firm, chewier.</td>
          </tr>
          <tr>
            <td style={{ padding: '8px 6px', fontWeight: 700 }}>Price</td>
            <td style={{ padding: '8px 6px' }}>Broiler: lower. Kienyeji: higher (depends on season and supply).</td>
          </tr>
          <tr style={{ background: '#fafafa' }}>
            <td style={{ padding: '8px 6px', fontWeight: 700 }}>Best for</td>
            <td style={{ padding: '8px 6px' }}>Broiler: quick frying, stews. Kienyeji: nyama choma, slow-cooked stews.</td>
          </tr>
        </tbody>
      </table>

      <h2 style={{ fontSize: 20, marginTop: 16 }}>Buying tips for Nairobi markets</h2>
      <ul style={{ lineHeight: 1.7 }}>
        <li>Ask when the bird was slaughtered — freshest wins.</li>
        <li>For broiler: check plumpness and pale pink skin (not yellow or grey).</li>
        <li>For kienyeji: expect firmer muscle and a stronger aroma — that's normal.</li>
        <li>Negotiate for combo deals (wings + thighs) to reduce cost per plate.</li>
      </ul>

      <h2 style={{ fontSize: 20, marginTop: 16 }}>Simple cook guide</h2>
      <p>
        - Broiler: quick sear or stew — 20–30 minutes depending on cut.  
        - Kienyeji: slow roast or nyama choma — longer cooking for tenderness but superior flavor.
      </p>

      <div style={{ backgroundColor: '#fff7ed', padding: 18, borderRadius: 10, border: '1px solid #ffe8c2', marginTop: 18 }}>
        <h3 style={{ marginTop: 0 }}>Buy smart — match your meal</h3>
        <p style={{ marginBottom: 8 }}>If you're feeding a family on weekday nights, broiler is budget-friendly and fast. For celebrations or nyama choma, buy kienyeji and cook low-and-slow for maximum flavor.</p>
        <p style={{ margin: 0 }}><a href="https://www.themeatrix.co.ke/products" style={{ color: '#b91c1c', fontWeight: 700 }}>Order premium broiler & kienyeji from The Meatrix</a></p>
      </div>

      <footer style={{ marginTop: 24, borderTop: '1px solid #eee', paddingTop: 12, color: '#666', fontSize: 14 }}>
        <div><strong>Tags:</strong> broiler, kienyeji, chicken Nairobi, buying tips</div>
      </footer>
    </article>
  )
}
