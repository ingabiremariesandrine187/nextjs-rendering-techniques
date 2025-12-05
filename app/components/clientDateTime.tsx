'use client';
import {useState,useEffect}  from 'react';
export default function ClientDateTime() {
const [currentTime,setCurrentTime] = useState(new Date());
useEffect(() => {
    const timer = setInterval(() => {
        setCurrentTime(new Date());
    },1000);
    return () => clearInterval(timer);

}, []);
return (
    <div className="card text-center">
      <h3 className="text-lg font-semibold text-gray-700 dark:text-gray-300 mb-2">
        Client-Side Rendered Time
      </h3>
      <p className="text-2xl font-mono text-primary-600 dark:text-primary-400">
        {currentTime.toLocaleTimeString()}
      </p>
      <p className="text-sm text-gray-500 dark:text-gray-400 mt-2">
        Updates every second
      </p>
      <div className="mt-4 p-3 bg-blue-50 dark:bg-blue-900/20 rounded-lg border border-blue-200 dark:border-blue-800">
        <p className="text-xs text-blue-700 dark:text-blue-300">
          This component uses Client-Side Rendering (CSR) to update the time every second.
        </p>
      </div>
    </div>
  );

}