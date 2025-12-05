'use client';
import { useState }  from 'react';
import BlogSearch from '../components/BlogSearch';
import {BlogPost} from '../types'

const categories = [
    {id: 1, name: 'All', slug: 'all'},
    {id: 2, name: 'Tech', slug: 'tech'},
    {id: 3, name: 'Lifestyle', slug: 'lifestyle'},
    {id: 4, name: 'Education', slug: 'education'},
    {id: 5, name: 'Business', slug: 'business'},
    {id: 6, name: 'Health', slug: 'health'},
];

interface BlogCategoriesProps {
     posts?: BlogPost[];
  onCategoryChange?: (category: string) => void;
  onSearchResults?: (results: BlogPost[]) => void;
}

export function BlogCategories({ 
  posts = [], 
  onCategoryChange, 
  onSearchResults 
}: BlogCategoriesProps) {
  const [activeCategory, setActiveCategory] = useState('all');

  const handleCategoryClick = (categorySlug: string) => {
    setActiveCategory(categorySlug);
    onCategoryChange?.(categorySlug);
  };

  const handleSearchResults = (results: BlogPost[]) => {
    onSearchResults?.(results);
  };
  return(
     <div className="space-y-6">
      {/* Search */}
      <div className="card">
        <h3 className="font-semibold text-gray-800 dark:text-white mb-4">Search Posts</h3>
        <BlogSearch posts={posts} onSearchResults={handleSearchResults} />
      </div>

      {/* Categories */}
      <div className="card">
        <h3 className="font-semibold text-gray-800 dark:text-white mb-4">Categories</h3>
        <div className="space-y-2">
          {categories.map(category => (
            <button
              key={category.id}
              onClick={() => handleCategoryClick(category.slug)}
              className={`w-full text-left px-3 py-2 rounded-lg transition-colors ${
                activeCategory === category.slug
                  ? 'bg-primary-100 dark:bg-primary-900 text-primary-800 dark:text-primary-200'
                  : 'text-gray-600 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700'
              }`}
            >
              {category.name}
            </button>
          ))}
        </div>
      </div>

      {/* Info Card */}
      <div className="card bg-gradient-to-r from-primary-500 to-purple-500 text-white">
        <h3 className="font-semibold mb-2">Static Site Generation</h3>
        <p className="text-sm opacity-90">
          This blog page uses Static Site Generation (SSG) for optimal performance and SEO.
        </p>
      </div>
    </div>
  );
}
  