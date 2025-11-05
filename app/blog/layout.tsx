import { ReactNode } from 'react';
import {BlogCategories} from '../components/BlogCategories'

export default function BlogLayout({

    children}: {children: ReactNode}) {
        return(
  <div className="container mx-auto px-4 py-8">
      <div className="flex flex-col lg:flex-row gap-8">
        {/* Sidebar - Only visible in blog section */}
        <aside className="lg:w-64 flex-shrink-0">
          <div className="sticky top-24">
            <BlogCategories />
          </div>
        </aside>
        
        {/* Main Content */}
        <main className="flex-1">
          {children}
        </main>
      </div>
    </div>
        )
    }
