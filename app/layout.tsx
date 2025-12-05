import type {Metadata} from 'next';
import { Inter } from 'next/font/google'; 
import './globals.css'
import {ThemeProvider,ThemeToggle} from './components/ThemeToggle'
import MobileNav from './components/MobileNav';
import Link from 'next/link';
import {Home,User,BookOpen} from 'lucide-react';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'NextJS Assignment - Professional Blog',
  description: 'A professional blog built with Next.js showcasing various rendering techniques',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider>
          <div className="min-h-screen bg-gradient-to-br from-primary-50 to-purple-100 dark:from-gray-900 dark:to-gray-800">
            {/* Header */}
            <header className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-md border-b border-gray-200 dark:border-gray-700 sticky top-0 z-50">
              <div className="container mx-auto px-4 py-4 relative">
                <div className="flex items-center justify-between">
                  {/* Logo */}
                  <Link href="/" className="flex items-center space-x-2">
                    <div className="w-8 h-8 bg-gradient-to-r from-primary-600 to-purple-600 rounded-lg flex items-center justify-center">
                      <BookOpen className="w-4 h-4 text-white" />
                    </div>
                    <span className="text-xl font-bold bg-gradient-to-r from-primary-600 to-purple-600 bg-clip-text text-transparent">
                      NextBlog
                    </span>
                  </Link>

                  {/* Navigation */}
                  <nav className="hidden md:flex items-center space-x-8">
                    <Link 
                      href="/" 
                      className="flex items-center space-x-1 text-gray-600 dark:text-gray-300 hover:text-primary-600 dark:hover:text-primary-400 transition-colors"
                    >
                      <Home className="w-4 h-4" />
                      <span>Home</span>
                    </Link>
                    <Link 
                      href="/about" 
                      className="flex items-center space-x-1 text-gray-600 dark:text-gray-300 hover:text-primary-600 dark:hover:text-primary-400 transition-colors"
                    >
                      <User className="w-4 h-4" />
                      <span>About</span>
                    </Link>
                    <Link 
                      href="/blog" 
                      className="flex items-center space-x-1 text-gray-600 dark:text-gray-300 hover:text-primary-600 dark:hover:text-primary-400 transition-colors"
                    >
                      <BookOpen className="w-4 h-4" />
                      <span>Blog</span>
                    </Link>
                    <ThemeToggle />
                  </nav>

                  {/* Mobile Navigation */}
                  <MobileNav />
                </div>
              </div>
            </header>

            {/* Main Content */}
            <main className="flex-1">
              {children}
            </main>

            {/* Footer */}
            <footer className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-md border-t border-gray-200 dark:border-gray-700 mt-16">
              <div className="container mx-auto px-4 py-8">
                <div className="text-center text-gray-600 dark:text-gray-400">
                  <p>&copy; 2024 NextBlog. Built with Next.js for educational purposes.</p>
                  <p className="mt-2 text-sm">
                    Demonstrating CSR, SSR, SSG, ISR, and Edge Rendering
                  </p>
                </div>
              </div>
            </footer>
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
