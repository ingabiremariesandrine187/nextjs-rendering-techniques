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
    </div>






)

}