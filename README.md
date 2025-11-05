 <!-- Next.js Assignment - Professional Blog -->

A professional blog application built with Next.js 14, demonstrating various rendering techniques and modern web development practices.

 <!-- Features -->

- **Multiple Rendering Techniques**: CSR, SSR, SSG, and ISR
- **Responsive Design**: Professional violet and white color scheme
- **Dark/Light Mode**: With local storage persistence
- **Client-Side Search**: Real-time blog post filtering
- **Category Filtering**: Organize posts by categories
- **Modern UI**: Built with Tailwind CSS and Lucide icons

<!--   Rendering Techniques Used -->

1. Client-Side Rendering (CSR)
- **Location**: Home page - Live time component
- **Component**: `ClientDateTime.tsx`
- **Purpose**: Dynamic content that updates every second

### 2. Server-Side Rendering (SSR)
- **Location**: About page
- **File**: `app/about/page.tsx`
- **Purpose**: Fetch author data on each request for up-to-date information

### 3. Static Site Generation (SSG)
- **Location**: Blog listing page
- **File**: `app/blog/page.tsx`
- **Purpose**: Pre-render all blog posts at build time for optimal performance

### 4. Incremental Static Regeneration (ISR)
- **Location**: Blog detail pages
- **File**: `app/blog/[id]/page.tsx`
- **Purpose**: Static generation with background revalidation (every hour)

