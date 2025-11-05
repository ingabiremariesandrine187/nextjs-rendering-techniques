'use Client';
import {useState} from 'react';
import {Search} from 'lucide-react';
import {BlogPost} from '../types';

interface BlogSearchProps {
    posts:BlogPost[];
    onSearchResults:(results:BlogPost[]) => void 
}
export default function BlogSearch({posts,onSearchResults}:BlogSearchProps){
 const [query, setQuery] = useState('');

  const handleSearch = (searchQuery: string) => {
    setQuery(searchQuery);
    if (!searchQuery.trim()) {
      onSearchResults(posts);
      return;

}
const filtered = posts.filter(post =>
      post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      post.body.toLowerCase().includes(searchQuery.toLowerCase()) ||
      post.category.toLowerCase().includes(searchQuery.toLowerCase())
    );
onSearchResults(filtered);
  };


  return(
<div className='relative'>
<Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
    <input
        type="text"
        placeholder="Search posts..."
        value={query}
        onChange={(e) => handleSearch(e.target.value)}
        className="w-full pl-10 pr-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-primary-500 focus:border-transparent"
      />
</div>
  );
}