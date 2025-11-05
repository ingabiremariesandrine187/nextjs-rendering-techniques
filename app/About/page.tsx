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