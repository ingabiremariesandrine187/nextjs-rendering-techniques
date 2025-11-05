import ClientDateTime from './components/clientDateTime';
import { ArrowRight, Code, Zap, Globe } from 'lucide-react';
import Link from 'next/link';

export default function Home() {
return(
   <div className="container mx-auto px-4 py-8">
      {/* Hero Section */}
      <section className="text-center py-16">
        <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-primary-600 to-purple-600 bg-clip-text text-transparent">
          Welcome to NextBlog
        </h1>
        <p className="text-xl text-gray-600 dark:text-gray-400 mb-8 max-w-2xl mx-auto">
          A professional blog built with Next.js 14, showcasing modern web development 
          techniques and rendering strategies.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Link href="/blog" className="btn-primary flex items-center space-x-2">
            <span>Explore Blog</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
          <Link href="/about" className="btn-secondary">
            Learn About Us
          </Link>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-12">
        <h2 className="text-3xl font-bold text-center mb-12 text-gray-800 dark:text-white">
          Rendering Techniques Demonstrated
        </h2>
        
        <div className="grid md:grid-cols-3 gap-8">
          <div className="card text-center">
            <div className="w-12 h-12 bg-primary-100 dark:bg-primary-900 rounded-lg flex items-center justify-center mx-auto mb-4">
              <Zap className="w-6 h-6 text-primary-600 dark:text-primary-400" />
            </div>
            <h3 className="text-xl font-semibold mb-2">CSR</h3>
            <p className="text-gray-600 dark:text-gray-400">
              Client-Side Rendering for dynamic, interactive components like live time updates.
            </p>
          </div>

          <div className="card text-center">
            <div className="w-12 h-12 bg-primary-100 dark:bg-primary-900 rounded-lg flex items-center justify-center mx-auto mb-4">
              <Globe className="w-6 h-6 text-primary-600 dark:text-primary-400" />
            </div>
            <h3 className="text-xl font-semibold mb-2">SSR & SSG</h3>
            <p className="text-gray-600 dark:text-gray-400">
              Server-Side Rendering and Static Generation for optimal performance and SEO.
            </p>
          </div>

          <div className="card text-center">
            <div className="w-12 h-12 bg-primary-100 dark:bg-primary-900 rounded-lg flex items-center justify-center mx-auto mb-4">
              <Code className="w-6 h-6 text-primary-600 dark:text-primary-400" />
            </div>
            <h3 className="text-xl font-semibold mb-2">ISR</h3>
            <p className="text-gray-600 dark:text-gray-400">
              Incremental Static Regeneration for frequently updated content with static performance.
            </p>
          </div>
        </div>
      </section>

      {/* CSR Demo Section */}
      <section className="py-12">
        <h2 className="text-3xl font-bold text-center mb-8 text-gray-800 dark:text-white">
          Client-Side Rendering Demo
        </h2>
        <div className="max-w-md mx-auto">
          <ClientDateTime />
        </div>
      </section>
    </div>
  );
}
