import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'How to Tell If Meat Is Fresh — Nairobi Butchery Guide 2025 | The Meatrix',
  description:
    'Simple, practical checklist to tell if your beef, chicken or goat meat is fresh in Nairobi markets and butcheries. Avoid spoilage, buy with confidence.',
  keywords: 'how to tell meat is fresh Nairobi, fresh meat guide Kenya, butcher tips Nairobi, meat freshness checklist',
  openGraph: {
    title: 'How to Tell If Meat Is Fresh — Nairobi Butchery Guide 2025',
    description:
      'Simple, practical checklist to tell if your beef, chicken or goat meat is fresh in Nairobi markets and butcheries.',
    url: 'https://www.themeatrix.co.ke/blog/how-to-tell-if-meat-is-fresh-nairobi-2025',
    images: [{ url: '/og/meat-freshness.jpg', width: 1200, height: 630 }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'How to Tell If Meat Is Fresh — Nairobi Butchery Guide 2025',
    images: ['/og/meat-freshness.jpg'],
  },
  metadataBase: new URL('https://www.themeatrix.co.ke'),
}

function FreshnessChecklist() {
  return (
    <section style={{ marginTop: 18 }}>
      <h3 style={{ marginBottom: 8 }}>Quick checklist (use at the market)</h3>
      <ul style={{ color: '#444', lineHeight: 1.7 }}>
        <li><strong>Look:</strong> Even color (pink for chicken, bright red for beef, pale red for goat). No green, grey or dark patches.</li>
        <li><strong>Smell:</strong> Neutral / lightly meaty smell. If it smells sour, ammonia-like or off — walk away.</li>
        <li><strong>Touch:</strong> Meat should be firm and spring back. Avoid slimy/sticky texture.</li>
        <li><strong>Fat:</strong> Fat should be creamy/white (not yellow or rancid). For beef, thin white marbling is good.</li>
        <li><strong>Bone:</strong> If bone is visible, marrow should be clean and not dark or foul-smelling.</li>
        <li><strong>Packaging & handling:</strong> Clean surfaces, chilled counters, ice kept fresh (not smelly or slushy water).</li>
      </ul>
    </section>
  )
}

export default function Page() {
  const published = 'November 29, 2025'
  const readTime = '6 min read'

  return (
    <article style={{ maxWidth: 800, margin: '0 auto', padding: 20, fontFamily: 'system-ui, sans-serif', color: '#222' }}>
      <header style={{ marginBottom: 20 }}>
        <h1 style={{ fontSize: 32, marginBottom: 6 }}>How to Tell If Meat Is Fresh — Nairobi Butchery Guide 2025</h1>
        <div style={{ color: '#666', fontSize: 14 }}>{published} • {readTime}</div>
      </header>

      <div style={{ width: '100%', height: 320, borderRadius: 12, overflow: 'hidden', marginBottom: 22 }}>
        <img src="/blog/meat-fresh-hero.jpg" alt="Checking fresh meat at Nairobi market" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
      </div>

      <div style={{ backgroundColor: '#f7f7f7', padding: 18, borderRadius: 10, marginBottom: 20, border: '1px solid #eee' }}>
        <p style={{ margin: 0 }}>
          <strong>TL;DR:</strong> Check <em>color, smell, texture, fat and handling</em>. If two of those check out — you’re likely buying fresh meat. Use the market checklist below for quick decisions.
        </p>
      </div>

      <h2 style={{ fontSize: 20 }}>Introduction — Why freshness matters in Nairobi</h2>
      <p>
        Nairobi markets move fast — and so does spoilage. Buying meat that looks fine at first but spoils within hours is expensive and risky. This short, practical guide helps you evaluate beef, chicken and goat reliably so you buy less waste and better meals.
      </p>

      <h2 style={{ fontSize: 20, marginTop: 18 }}>Beef — what to look for</h2>
      <p>
        Beef should be bright red (or slightly darker for matured cuts), with a pleasant meaty smell. A thin fat layer with white marbling is good. Avoid dark brown patches or a sour smell. For nyama choma specifically, a little surface fat improves taste when grilled.
      </p>

      <h2 style={{ fontSize: 20, marginTop: 18 }}>Chicken — how to inspect quickly</h2>
      <p>
        Fresh chicken has pinkish flesh and slightly firm skin. Watch for greyish color, strong odors, or sticky skin — these are spoilage signs. If buying whole, inspect the cavity for dark spots or off-smells.
      </p>

      <h2 style={{ fontSize: 20, marginTop: 18 }}>Goat / Mutton — the local favorite</h2>
      <p>
        Goat meat is lean and slightly darker than chicken. It should feel firm, not dry. The smell is more pronounced than chicken but should not be sour. For mutton (older sheep), expect richer fat — check that fat is clean and not yellowed.
      </p>

      <FreshnessChecklist />

      <h2 style={{ fontSize: 20, marginTop: 18 }}>Handling + storage tips (short-term)</h2>
      <ul style={{ lineHeight: 1.7 }}>
        <li>Buy last on the market run — minimize time in transit.</li>
        <li>If you’re not cooking within 4–6 hours, refrigerate below 4°C or freeze.</li>
        <li>Separate meat from other groceries to avoid cross-contamination.</li>
      </ul>

      <h2 style={{ fontSize: 20, marginTop: 18 }}>When in doubt — ask the butcher</h2>
      <p>
        A confident butcher will tell you the cut, when it was delivered and how it was stored. If the vendor avoids specifics, be cautious.
      </p>

      <div style={{ backgroundColor: '#e9f9ef', padding: 20, borderRadius: 10, border: '1px solid #cfead4', marginTop: 20 }}>
        <h3 style={{ marginTop: 0 }}>Ready to order fresh meat instead?</h3>
        <p style={{ marginBottom: 12 }}>We deliver fresh, inspected meat across Nairobi. <a href="https://www.themeatrix.co.ke/products" style={{ color: '#b91c1c', fontWeight: 600 }}>Order from The Meatrix</a> — same-day delivery available.</p>
      </div>

      <footer style={{ marginTop: 26, borderTop: '1px solid #eee', paddingTop: 12, color: '#666', fontSize: 14 }}>
        <div><strong>Tags:</strong> fresh meat guide, Nairobi markets, butcher tips</div>
      </footer>
    </article>
  )
}
