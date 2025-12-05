import { getBlogPosts } from '../lib/utils'
import { BlogPost } from '../types'
import Link from 'next/link';
import { Calendar, ArrowRight } from 'lucide-react';

export default async function Blog() {
  // This will be Statically Generated at build time (SSG)
  const posts: BlogPost[] = await getBlogPosts();

  return (
    <div>
      <div className="text-center mb-8 md:mb-12 px-4">
        <h1 className="text-3xl md:text-4xl font-bold text-gray-800 dark:text-white mb-4">
          Our Blog
        </h1>
        <p className="text-lg md:text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
          Discover insightful articles about technology, lifestyle, education, and more.
        </p>
      </div>

      {/* Blog Posts Grid */}
      <div className="grid sm:grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
        {posts.map((post) => (
          <article key={post.id} className="card group hover:shadow-xl transition-all duration-300">
            <div className="flex justify-between items-start mb-4">
              <span className="inline-block px-3 py-1 bg-primary-100 dark:bg-primary-900 text-primary-800 dark:text-primary-200 text-sm font-medium rounded-full">
                {post.category}
              </span>
              <div className="flex items-center text-gray-500 dark:text-gray-400 text-sm">
                <Calendar className="w-4 h-4 mr-1" />
                <span>Post #{post.id}</span>
              </div>
            </div>
            
            <h2 className="text-xl font-semibold text-gray-800 dark:text-white mb-3 group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors">
              {post.title}
            </h2>
            
            <p className="text-gray-600 dark:text-gray-400 mb-4 line-clamp-3">
              {post.body}
            </p>
            
            <Link 
              href={`/blog/${post.id}`}
              className="inline-flex items-center text-primary-600 dark:text-primary-400 font-medium hover:text-primary-700 dark:hover:text-primary-300 transition-colors"
            >
              Read More
              <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
            </Link>
          </article>
        ))}
      </div>

      {/* Info Banner */}
      <div className="mt-12 p-6 bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800 rounded-lg">
        <h3 className="text-lg font-semibold text-green-800 dark:text-green-200 mb-2">
          Static Site Generation (SSG)
        </h3>
        <p className="text-green-700 dark:text-green-300">
          This blog page is statically generated at build time. The posts are fetched once during 
          build and served as static HTML, providing excellent performance and SEO benefits.
        </p>
      </div>
    </div>
  );
}

// This ensures the page is statically generated
export const revalidate = false;