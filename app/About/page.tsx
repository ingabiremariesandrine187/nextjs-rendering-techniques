import { getAuthor } from '../lib/utils';
import { Author } from '../types';
import { Mail,Globe,Building } from 'lucide-react';

export default async function About (){
     // This will be Server-Side Rendered (SSR)
     const author: Author = await getAuthor();
     return(


<div className="container mx-auto px-4 py-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold text-center mb-8 text-gray-800 dark:text-white">
          About Us
        </h1>
        
        <div className="card">
          <div className="text-center mb-8">
            <div className="w-24 h-24 bg-gradient-to-r from-primary-600 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-2xl font-bold text-white">
                {author.name.split(' ').map(n => n[0]).join('')}
              </span>
            </div>
            <h2 className="text-2xl font-semibold text-gray-800 dark:text-white">
              {author.name}
            </h2>
            <p className="text-gray-600 dark:text-gray-400">
              Senior Software Developer
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6 mb-8">
            <div className="flex items-center space-x-3 p-4 bg-gray-50 dark:bg-gray-700 rounded-lg">
              <Mail className="w-5 h-5 text-primary-600 dark:text-primary-400" />
              <div>
                <p className="text-sm text-gray-500 dark:text-gray-400">Email</p>
                <p className="text-gray-800 dark:text-white">{author.email}</p>
              </div>
            </div>

            <div className="flex items-center space-x-3 p-4 bg-gray-50 dark:bg-gray-700 rounded-lg">
              <Globe className="w-5 h-5 text-primary-600 dark:text-primary-400" />
              <div>
                <p className="text-sm text-gray-500 dark:text-gray-400">Website</p>
                <p className="text-gray-800 dark:text-white">{author.website}</p>
              </div>
            </div>

            <div className="flex items-center space-x-3 p-4 bg-gray-50 dark:bg-gray-700 rounded-lg">
              <Building className="w-5 h-5 text-primary-600 dark:text-primary-400" />
              <div>
                <p className="text-sm text-gray-500 dark:text-gray-400">Company</p>
                <p className="text-gray-800 dark:text-white">{author.company.name}</p>
              </div>
            </div>
          </div>

          {/* Project Info */}
          <div className="bg-gradient-to-r from-blue-50 to-indigo-50 dark:from-blue-900/20 dark:to-indigo-900/20 rounded-lg p-6 border border-blue-200 dark:border-blue-800 mb-6">
            <h3 className="text-lg font-semibold text-blue-800 dark:text-blue-200 mb-3">
              Next.js Rendering Techniques Project
            </h3>
            <p className="text-blue-700 dark:text-blue-300 text-sm mb-4">
              This project demonstrates all major Next.js rendering techniques including CSR, SSR, SSG, and ISR.
            </p>
            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <span className="text-sm font-medium text-blue-800 dark:text-blue-200">GitHub Repository:</span>
                <a 
                  href="https://github.com/ingabiremariesandrine187/nextjs-rendering-techniques" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-blue-600 dark:text-blue-400 hover:underline text-sm"
                >
                  View Source Code
                </a>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-sm font-medium text-blue-800 dark:text-blue-200">Live Demo:</span>
                <a 
                  href="https://nextjs-rendering-techniques-chi.vercel.app" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-blue-600 dark:text-blue-400 hover:underline text-sm"
                >
                  Visit Live Site
                </a>
              </div>
            </div>
          </div>

          {/* Rendering Techniques */}
          <div className="grid md:grid-cols-2 gap-4 mb-6">
            <div className="p-4 bg-green-50 dark:bg-green-900/20 rounded-lg border border-green-200 dark:border-green-800">
              <h4 className="font-semibold text-green-800 dark:text-green-200 mb-2">SSG - Blog Page</h4>
              <p className="text-green-700 dark:text-green-300 text-sm">Static Site Generation for optimal performance</p>
            </div>
            <div className="p-4 bg-purple-50 dark:bg-purple-900/20 rounded-lg border border-purple-200 dark:border-purple-800">
              <h4 className="font-semibold text-purple-800 dark:text-purple-200 mb-2">ISR - Blog Details</h4>
              <p className="text-purple-700 dark:text-purple-300 text-sm">Incremental Static Regeneration with 1h revalidation</p>
            </div>
            <div className="p-4 bg-orange-50 dark:bg-orange-900/20 rounded-lg border border-orange-200 dark:border-orange-800">
              <h4 className="font-semibold text-orange-800 dark:text-orange-200 mb-2">CSR - Home Page</h4>
              <p className="text-orange-700 dark:text-orange-300 text-sm">Client-Side Rendering with real-time clock</p>
            </div>
            <div className="p-4 bg-primary-50 dark:bg-primary-900/20 rounded-lg border border-primary-200 dark:border-primary-800">
              <h4 className="font-semibold text-primary-800 dark:text-primary-200 mb-2">SSR - About Page</h4>
              <p className="text-primary-700 dark:text-primary-300 text-sm">Server-Side Rendering for fresh data on each request</p>
            </div>
          </div>

          <div className="bg-primary-50 dark:bg-primary-900/20 rounded-lg p-6 border border-primary-200 dark:border-primary-800">
            <h3 className="text-lg font-semibold text-primary-800 dark:text-primary-200 mb-2">
              Server-Side Rendering (SSR)
            </h3>
            <p className="text-primary-700 dark:text-primary-300 text-sm">
              This page uses Server-Side Rendering. The author data is fetched on each request, 
              ensuring the most up-to-date information. Perfect for dynamic content that changes frequently.
            </p>
          </div>
        </div>
      </div>
    </div>


     );
}