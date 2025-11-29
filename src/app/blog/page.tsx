import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Meat Blog Nairobi | Cooking Tips & Recipes | The Meatrix Supplies',
  description:
    "Learn about meat cuts, cooking techniques, and recipes from Nairobi's premier butcher shop.",
  keywords:
    'Nairobi meat blog, beef cuts Nairobi, fresh chicken Nairobi, goat meat Kenya, broiler vs kienyeji, meat tips Nairobi',
}

const blogPosts = [
  {
    slug: 'how-to-tell-if-meat-is-fresh-nairobi-2025',
    title: 'How to Tell If Meat Is Fresh — Nairobi Butchery Guide 2025',
    description:
      'Simple, practical checklist to tell if your beef, chicken or goat meat is fresh in Nairobi markets and butcheries.',
    date: '2025-11-29',
    readTime: '6 min read',
    image: '/blog/meat-fresh-hero.jpg',
  },
  {
    slug: 'broiler-vs-kienyeji-which-chicken-should-you-buy',
    title: 'Broiler vs Kienyeji: Which Chicken Should You Buy in Nairobi?',
    description:
      'Compare broiler and kienyeji chickens: flavor, nutrition, price and best uses for Nairobi kitchens.',
    date: '2025-11-29',
    readTime: '6 min read',
    image: '/blog/broiler-kienyeji-hero.jpg',
  },
  {
    slug: 'best-cuts-beef-nyama-choma-nairobi',
    title: 'Best Cuts of Beef for Nyama Choma in Nairobi',
    description:
      'Discover which beef cuts make the perfect nyama choma and where to find them in Nairobi.',
    date: '2024-01-15',
    readTime: '5 min read',
    image: '/blog/nyama-choma.jpg',
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

// JSON-LD structured data for SEO
function generateBlogStructuredData(posts: typeof blogPosts) {
  return {
    "@context": "https://schema.org",
    "@type": "Blog",
    "name": "Nairobi Meat Blog | The Meatrix Supplies",
    "url": "https://www.themeatrix.co.ke/blog",
    "description": "Cooking tips, recipes & meat guides from The Meatrix",
    "blogPost": posts.map(post => ({
      "@type": "BlogPosting",
      "headline": post.title,
      "image": [`https://www.themeatrix.co.ke${post.image}`],
      "url": `https://www.themeatrix.co.ke/blog/${post.slug}`,
      "datePublished": post.date,
      "author": {
        "@type": "Organization",
        "name": "THE MEATRIX SUPPLIES."
      },
      "publisher": {
        "@type": "Organization",
        "name": "THE MEATRIX SUPPLIES.",
        "logo": {
          "@type": "ImageObject",
          "url": "https://www.themeatrix.co.ke/logo.png"
        }
      },
      "description": post.description
    }))
  }
}

export default function BlogPage() {
  return (
    <>
      {/* JSON-LD for SEO */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(generateBlogStructuredData(blogPosts)),
        }}
      />

      <div style={{ maxWidth: '800px', margin: '0 auto', padding: '20px' }}>
        {/* HEADER */}
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
                transition: 'transform 0.25s ease, box-shadow 0.25s ease',
                backgroundColor: 'white',
              }}
              className="blog-card"
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

              {/* Text */}
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

        {/* HOVER EFFECT STYLE */}
        <style>
          {`
            .blog-card:hover {
              transform: translateY(-4px);
              box-shadow: 0 6px 18px rgba(0,0,0,0.12);
            }
          `}
        </style>
      </div>
    </>
  )
}
