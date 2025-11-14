import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";
import type { Author, BlogPost } from "../types";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

// Mock API functions
export async function getAuthor(): Promise<Author> {
  // Simulate API delay
  await new Promise(resolve => setTimeout(resolve, 1000));
  
  const response = await fetch('https://jsonplaceholder.typicode.com/users/1');
  if (!response.ok) {
    throw new Error('Failed to fetch author');
  }
  return response.json();
}

export async function getBlogPosts(): Promise<BlogPost[]> {
  // Simulate API delay
  await new Promise(resolve => setTimeout(resolve, 1500));
  
  const response = await fetch('https://jsonplaceholder.typicode.com/posts');
  if (!response.ok) {
    throw new Error('Failed to fetch blog posts');
  }
  
  const posts = await response.json();
  // Add categories to posts
  const categories = ['Tech', 'Lifestyle', 'Education', 'Business', 'Health'];
  return posts.slice(0, 10).map((post: any, index: number) => ({
    ...post,
    category: categories[index % categories.length]
  }));
}

export async function getBlogPost(id: string): Promise<BlogPost> {
  // Simulate API delay
  await new Promise(resolve => setTimeout(resolve, 1000));
  
  const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`);
  if (!response.ok) {
    throw new Error('Failed to fetch blog post');
  }
  
  const post = await response.json();
  const categories = ['Tech', 'Lifestyle', 'Education', 'Business', 'Health'];
  
  return {
    ...post,
    category: categories[parseInt(id) % categories.length]
  };
}