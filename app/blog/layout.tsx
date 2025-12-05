import { ReactNode } from 'react';
import BlogLayoutClient from '../components/BlogLayoutClient';

export default function BlogLayout({ children }: { children: ReactNode }) {
  return (
    <div className="container mx-auto px-4 py-8">
      <BlogLayoutClient>{children}</BlogLayoutClient>
    </div>
  );
}
