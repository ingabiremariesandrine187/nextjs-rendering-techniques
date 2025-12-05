'use client';
import { useState } from 'react';
import { BlogPost } from '../types';
import Link from 'next/link';
import { Calendar, ArrowRight } from 'lucide-react';

interface BlogClientProps {
  initialPosts: BlogPost[];
}

export default function BlogClient({ initialPosts }: BlogClientProps) {
  const [filteredPosts, setFilteredPosts] = useState<BlogPost[]>(initialPosts);

  const handleCategoryChange = (category: string) => {
    if (category === 'all') {
      setFilteredPosts(initialPosts);
    } else {
      setFilteredPosts(initialPosts.filter(post => 
        post.category.toLowerCase() === category.toLowerCase()
      ));
    }
  };

  const handleSearchResults = (results: BlogPost[]) => {
    setFilteredPosts(results);
  };

  return (
    <div className="grid md:grid-cols-2 gap-8">
      {filteredPosts.map((post) => (
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
      {filteredPosts.length === 0 && (
        <div className="col-span-2 text-center py-12">
          <p className="text-gray-500 dark:text-gray-400 text-lg">No posts found matching your search.</p>
        </div>
      )}
    </div>
  );
}