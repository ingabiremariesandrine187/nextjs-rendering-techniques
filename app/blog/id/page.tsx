import {getBlogPost,getBlogPosts} from '../../lib/utils';
import {BlogPost} from '../../types';
import {notFound} from  'next/navigation';
import {Calendar,User,Tag} from 'lucide-react';
import Link from 'next/link';

interface BlogDetailProps{
    params:{
        id:string;
    };
}

// Generate static params for all blog posts
export default async function BlogDetail({params}:BlogDetailProps){
    const post:BlogPost =await getBlogPost(params.id);
    if(!post){
        notFound();
    }

    return(
<article className="max-w-4xl mx-auto">
      {/* Back Button */}
      <Link 
        href="/blog"
        className="inline-flex items-center text-primary-600 dark:text-primary-400 hover:text-primary-700 dark:hover:text-primary-300 mb-8 transition-colors"
      >
        ← Back to Blog
      </Link>

      {/* Article Header */}
      <header className="mb-8">
        <div className="flex items-center space-x-4 mb-4">
          <span className="inline-flex items-center px-3 py-1 bg-primary-100 dark:bg-primary-900 text-primary-800 dark:text-primary-200 text-sm font-medium rounded-full">
            <Tag className="w-3 h-3 mr-1" />
            {post.category}
          </span>
          <div className="flex items-center text-gray-500 dark:text-gray-400 text-sm">
            <Calendar className="w-4 h-4 mr-1" />
            <span>Post #{post.id}</span>
          </div>
          <div className="flex items-center text-gray-500 dark:text-gray-400 text-sm">
            <User className="w-4 h-4 mr-1" />
            <span>Author {post.userId}</span>
          </div>
        </div>
        
        <h1 className="text-4xl font-bold text-gray-800 dark:text-white mb-4">
          {post.title}
        </h1>
      </header>

      {/* Article Content */}
      <div className="card">
        <div className="prose prose-lg dark:prose-invert max-w-none">
          <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
            {post.body}
          </p>
          <p className="text-gray-700 dark:text-gray-300 leading-relaxed mt-4">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor 
            incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud 
            exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
          </p>
        </div>
      </div>

      {/* ISR Info Banner */}
      <div className="mt-8 p-6 bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800 rounded-lg">
        <h3 className="text-lg font-semibold text-blue-800 dark:text-blue-200 mb-2">
          Incremental Static Regeneration (ISR)
        </h3>
        <p className="text-blue-700 dark:text-blue-300">
          This page uses Incremental Static Regeneration. It was statically generated at build time 
          but can be regenerated in the background when requested. Perfect for content that updates 
          periodically but do not need real-time data.
        </p>
      </div>
    </article>
  );
}

// Configure ISR - revalidate every hour
export const revalidate = 3600;

    
