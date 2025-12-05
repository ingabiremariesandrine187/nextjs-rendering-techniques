# Next.js Rendering Techniques - Professional Blog

🚀 **Live Demo**: [https://nextjs-rendering-techniques-ltsv.vercel.app/](https://nextjs-rendering-techniques-ltsv.vercel.app/)

A professional blog application built with Next.js 14, demonstrating various rendering techniques and modern web development practices.

## 📋 Table of Contents
- [Features](#features)
- [Rendering Techniques](#rendering-techniques)
- [Tech Stack](#tech-stack)
- [Project Structure](#project-structure)
- [Installation](#installation)
- [Usage](#usage)
- [Deployment](#deployment)

## ✨ Features

- 🎨 **Multiple Rendering Techniques**: CSR, SSR, SSG, and ISR
- 📱 **Fully Responsive Design**: Mobile-first approach with breakpoints
- 🌙 **Dark/Light Mode**: Theme toggle with localStorage persistence
- 🔍 **Client-Side Search**: Real-time blog post filtering
- 🏷️ **Category Filtering**: Organize posts by Tech, Lifestyle, Education, etc.
- 🎯 **Modern UI**: Built with Tailwind CSS and Lucide icons
- 📱 **Mobile Navigation**: Hamburger menu for mobile devices
- ⚡ **Performance Optimized**: Static generation and ISR for fast loading

## 🔧 Rendering Techniques Used

### 1. Client-Side Rendering (CSR)
- **Location**: Home page - Live time component
- **Component**: `app/components/ClientDateTime.tsx`
- **Purpose**: Dynamic content that updates every second
- **Implementation**: Uses `useState` and `useEffect` for real-time updates

### 2. Server-Side Rendering (SSR)
- **Location**: About page
- **File**: `app/about/page.tsx`
- **Purpose**: Fetch author data on each request for up-to-date information
- **API**: JSONPlaceholder API for author information

### 3. Static Site Generation (SSG)
- **Location**: Blog listing page
- **File**: `app/blog/page.tsx`
- **Purpose**: Pre-render all blog posts at build time for optimal performance
- **Configuration**: `export const revalidate = false`

### 4. Incremental Static Regeneration (ISR)
- **Location**: Blog detail pages
- **File**: `app/blog/[id]/page.tsx`
- **Purpose**: Static generation with background revalidation
- **Revalidation**: Every hour (`export const revalidate = 3600`)

## 🛠️ Tech Stack

- **Framework**: Next.js 14 (App Router)
- **Styling**: Tailwind CSS
- **Icons**: Lucide React
- **Language**: TypeScript
- **Deployment**: Vercel
- **API**: JSONPlaceholder (for demo data)

## 📁 Project Structure

```
app/
├── components/
│   ├── BlogCategories.tsx    # Sidebar categories
│   ├── BlogClient.tsx        # Client-side blog filtering
│   ├── BlogLayoutClient.tsx  # Blog layout wrapper
│   ├── BlogSearch.tsx        # Search functionality
│   ├── ClientDateTime.tsx    # CSR time component
│   ├── MobileNav.tsx         # Mobile navigation
│   └── ThemeToggle.tsx       # Dark/light mode toggle
├── blog/
│   ├── [id]/
│   │   └── page.tsx          # ISR blog details
│   ├── layout.tsx            # Blog layout
│   └── page.tsx              # SSG blog listing
├── about/
│   └── page.tsx              # SSR about page
├── lib/
│   └── utils.ts              # API utilities
├── types/
│   └── index.ts              # TypeScript types
├── globals.css               # Global styles
├── layout.tsx                # Root layout
└── page.tsx                  # Home page (CSR demo)
```

## 🚀 Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/ingabiremariesandrine187/nextjs-rendering-techniques.git
   cd nextjs-rendering-techniques
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Run the development server**
   ```bash
   npm run dev
   ```

4. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

## 📖 Usage

### Development Commands

```bash
# Start development server
npm run dev

# Build for production
npm run build

# Start production server
npm start

# Type checking
npm run type-check
```

### Key Features to Explore

1. **Home Page**: See CSR in action with the live clock
2. **About Page**: Experience SSR with fresh author data
3. **Blog Page**: Browse statically generated posts (SSG)
4. **Blog Details**: Click any post to see ISR in action
5. **Search**: Use the sidebar search to filter posts
6. **Theme Toggle**: Switch between dark and light modes
7. **Mobile**: Test responsive design on different screen sizes

## 🌐 Deployment

**Live Site**: [https://nextjs-rendering-techniques-ltsv.vercel.app/](https://nextjs-rendering-techniques-ltsv.vercel.app/)

### Deploy Your Own

1. **Fork this repository**
2. **Connect to Vercel**
   - Go to [vercel.com](https://vercel.com)
   - Import your forked repository
   - Deploy with default settings

3. **Environment Variables** (if needed)
   ```env
   # Add any environment variables here
   ```

## 📱 Responsive Breakpoints

- **Mobile**: < 640px (Single column, hamburger menu)
- **Tablet**: 640px - 1024px (Two columns)
- **Desktop**: > 1024px (Full layout with sidebar)

## 🎨 Theme System

- **Light Mode**: Clean white background with blue accents
- **Dark Mode**: Dark gray background with blue accents
- **Persistence**: Theme choice saved in localStorage
- **System Detection**: Respects OS preference on first visit

## 📊 Performance Features

- ✅ Static generation for blog posts
- ✅ ISR for dynamic content with caching
- ✅ Optimized images and fonts
- ✅ Minimal JavaScript bundles
- ✅ Fast page transitions

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## 📄 License

This project is for educational purposes as part of a Next.js assignment.

---

**Built with ❤️ using Next.js 14 and modern web technologies**

