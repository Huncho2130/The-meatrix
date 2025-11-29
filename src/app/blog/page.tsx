import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Meat Blog Nairobi | Cooking Tips & Recipes | The Meatrix supplies',
  description: 'Learn about meat cuts, cooking techniques, and recipes from Nairobi\'s premier butcher shop. Beef, chicken, mutton tips for Kenyan kitchens.',
}

const blogPosts = [
  {
    slug: 'best-cuts-beef-nyama-choma-nairobi',
    title: 'Best Cuts of Beef for Nyama Choma in Nairobi',
    description: 'Discover which beef cuts make the perfect nyama choma and where to find them in Nairobi.',
    date: '2024-01-15',
    readTime: '5 min read'
  },
  {
    slug: 'how-to-choose-fresh-chicken-in-nairobi-markets',
    title: 'How to Choose Fresh Chicken in Nairobi Markets',
    description: 'Learn the signs of fresh chicken and avoid common mistakes when buying poultry in Nairobi.',
    date: '2024-01-10', 
    readTime: '4 min read'
  },
  {
    slug: 'mutton-vs-goat-meat-difference',
    title: 'Mutton vs Goat Meat: Which is Better for Kenyan Dishes?',
    description: 'Understand the differences between mutton and goat meat for your traditional Kenyan recipes.',
    date: '2024-01-05',
    readTime: '6 min read'
  }
]

export default function BlogPage() {
  return (
    <div style={{ maxWidth: '800px', margin: '0 auto', padding: '20px' }}>
      <h1>Nairobi Meat Blog</h1>
      <p>Cooking tips, recipes, and meat guides from The Meatrix supplies</p>
      
      <div style={{ marginTop: '40px' }}>
        {blogPosts.map((post) => (
          <article key={post.slug} style={{ marginBottom: '40px' }}>
            <Link 
              href={`/blog/${post.slug}`}
              style={{ textDecoration: 'none', color: 'inherit' }}
            >
              <h2 style={{ color: '#e53e3e', marginBottom: '10px' }}>{post.title}</h2>
            </Link>
            <p style={{ color: '#666', marginBottom: '10px' }}>{post.description}</p>
            <div style={{ color: '#999', fontSize: '14px' }}>
              {post.date} • {post.readTime}
            </div>
          </article>
        ))}
      </div>
    </div>
  )
}
