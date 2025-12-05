'use client';
import { ReactNode, useEffect, useState } from 'react';
import { BlogCategories } from './BlogCategories';
import { BlogPost } from '../types';

interface BlogLayoutClientProps {
  children: ReactNode;
}

export default function BlogLayoutClient({ children }: BlogLayoutClientProps) {
  const [posts, setPosts] = useState<BlogPost[]>([]);

  useEffect(() => {
    // Fetch posts for search functionality
    const fetchPosts = async () => {
      try {
        const response = await fetch('https://jsonplaceholder.typicode.com/posts');
        const data = await response.json();
        const categories = ['Tech', 'Lifestyle', 'Education', 'Business', 'Health'];
        const postsWithCategories = data.slice(0, 10).map((post: any, index: number) => ({
          ...post,
          category: categories[index % categories.length]
        }));
        setPosts(postsWithCategories);
      } catch (error) {
        console.error('Failed to fetch posts for search:', error);
      }
    };

    fetchPosts();
  }, []);

  return (
    <div className="flex flex-col lg:flex-row gap-8">
      {/* Sidebar - Only visible in blog section */}
      <aside className="lg:w-64 flex-shrink-0">
        <div className="sticky top-24">
          <BlogCategories posts={posts} />
        </div>
      </aside>
      
      {/* Main Content */}
      <main className="flex-1">
        {children}
      </main>
    </div>
  );
}