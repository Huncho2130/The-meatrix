import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Meat Blog Nairobi | Cooking Tips & Recipes | The Meatrix supplies',
  description:
    "Learn about meat cuts, cooking techniques, and recipes from Nairobi's premier butcher shop.",
}

const blogPosts = [
  {
    slug: 'best-cuts-beef-nyama-choma-nairobi',
    title: 'Best Cuts of Beef for Nyama Choma in Nairobi',
    description:
      'Discover which beef cuts make the perfect nyama choma and where to find them in Nairobi.',
    date: '2024-01-15',
    readTime: '5 min read',
    image: '/blog/beef-nyama.jpg',
  },
  {
    slug: 'how-to-choose-fresh-chicken-in-nairobi-markets',
    title: 'How to Choose Fresh Chicken in Nairobi Markets',
    description:
      'Learn the signs of fresh chicken and avoid common mistakes when buying poultry in Nairobi.',
    date: '2024-01-10',
    readTime: '4 min read',
    image: '/blog/fresh-chicken.jpg',
  },
  {
    slug: 'mutton-vs-goat-meat-difference',
    title: 'Mutton vs Goat Meat: Which is Better for Kenyan Dishes?',
    description:
      'Understand the differences between mutton and goat meat for your traditional Kenyan recipes.',
    date: '2024-01-05',
    readTime: '6 min read',
    image: '/blog/mutton-vs-goat.jpg',
  },
]

export default function BlogPage() {
  return (
    <div style={{ maxWidth: '800px', margin: '0 auto', padding: '20px' }}>
      {/* PAGE HEADER */}
      <div style={{ textAlign: 'center', marginBottom: '50px' }}>
        <h1 style={{ fontSize: '34px', marginBottom: '10px' }}>Nairobi Meat Blog</h1>
        <p style={{ color: '#555', fontSize: '16px' }}>
          Cooking tips, recipes & meat guides from The Meatrix
        </p>
      </div>

      {/* BLOG LIST */}
      <div style={{ display: 'flex', flexDirection: 'column', gap: '35px' }}>
        {blogPosts.map((post) => (
          <Link
            key={post.slug}
            href={`/blog/${post.slug}`}
            style={{
              textDecoration: 'none',
              color: 'inherit',
              display: 'flex',
              gap: '18px',
              border: '1px solid #eee',
              borderRadius: '14px',
              padding: '16px',
              boxShadow: '0 3px 10px rgba(0,0,0,0.07)',
              transition: 'transform 0.2s ease, box-shadow 0.2s ease',
            }}
            onMouseOver={(e) => {
              e.currentTarget.style.transform = 'translateY(-4px)'
              e.currentTarget.style.boxShadow = '0 6px 18px rgba(0,0,0,0.12)'
            }}
            onMouseOut={(e) => {
              e.currentTarget.style.transform = 'translateY(0)'
              e.currentTarget.style.boxShadow = '0 3px 10px rgba(0,0,0,0.07)'
            }}
          >
            {/* Thumbnail */}
            <img
              src={post.image}
              alt={post.title}
              style={{
                width: '130px',
                height: '90px',
                objectFit: 'cover',
                borderRadius: '10px',
                flexShrink: 0,
              }}
            />

            {/* Text Content */}
            <div>
              <h2 style={{ fontSize: '20px', marginBottom: '6px', color: '#d33' }}>
                {post.title}
              </h2>
              <p style={{ color: '#666', fontSize: '14px', marginBottom: '6px' }}>
                {post.description}
              </p>
              <div style={{ color: '#999', fontSize: '13px' }}>
                {post.date} • {post.readTime}
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  )
}
