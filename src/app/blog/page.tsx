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
    readTime: '5 min read',
    image: '/blog/beef-nyama.jpg'
  },
  {
    slug: 'how-to-choose-fresh-chicken-in-nairobi-markets',
    title: 'How to Choose Fresh Chicken in Nairobi Markets',
    description: 'Learn the signs of fresh chicken and avoid common mistakes when buying poultry in Nairobi.',
    date: '2024-01-10', 
    readTime: '4 min read',
    image: '/blog/fresh-chicken.jpg'
  },
  {
    slug: 'mutton-vs-goat-meat-difference',
    title: 'Mutton vs Goat Meat: Which is Better for Kenyan Dishes?',
    description: 'Understand the differences between mutton and goat meat for your traditional Kenyan recipes.',
    date: '2024-01-05',
    readTime: '6 min read',
    image: '/blog/mutton-vs-goat.jpg'
  }
]

export default function BlogPage() {
  return (
    <div className="max-w-3xl mx-auto p-6">      
      {/* Header */}
      <header className="text-center mb-12">
        <h1 className="text-4xl font-bold text-gray-900 mb-2">Nairobi Meat Blog</h1>
        <p className="text-gray-600 text-lg">Cooking tips, recipes, and meat guides from The Meatrix supplies</p>
      </header>

      {/* Blog Grid */}
      <div className="grid gap-10">
        {blogPosts.map((post) => (
          <article key={post.slug} className="rounded-2xl overflow-hidden shadow-sm border border-gray-200 hover:shadow-md transition-all bg-white">            
            {/* Image */}
            <Link href={`/blog/${post.slug}`}>
              <div className="h-56 w-full overflow-hidden">
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                />
              </div>
            </Link>

            {/* Content */}
            <div className="p-6">
              <Link href={`/blog/${post.slug}`} className="no-underline">
                <h2 className="text-2xl font-semibold text-red-600 mb-2 hover:text-red-700 transition-colors">{post.title}</h2>
              </Link>

              <p className="text-gray-700 mb-4">{post.description}</p>

              <div className="text-gray-400 text-sm">{post.date} • {post.readTime}</div>
            </div>
          </article>
        ))}
      </div>
    </div>
  )
}
