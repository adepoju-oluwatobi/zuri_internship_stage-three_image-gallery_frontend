import React, { useEffect, useState } from 'react';

const LoadingSpinner = () => {
  const [currentColor, setCurrentColor] = useState('bg-red-500');
  const colors = ['bg-red-500', 'bg-blue-500', 'bg-green-500', 'bg-yellow-500'];
  let colorIndex = 0;

  useEffect(() => {
    // Function to change the color every 500 milliseconds
    const changeColor = () => {
      setCurrentColor(colors[colorIndex]);
      colorIndex = (colorIndex + 1) % colors.length;
    };

    // Set up an interval to change the color
    const colorInterval = setInterval(changeColor, 500);

    // Clean up the interval when the component unmounts
    return () => clearInterval(colorInterval);
  }, []);

  return (
    <div className="flex flex-col justify-center items-center h-screen">
      <div className={`animate-spin rounded-full border-t-4 border-b-4 border-gray-900 h-16 w-16 ${currentColor}`}></div>
      <p className='font-bold text-lg'>Loading Images...</p>
    </div>
  );
};

export default LoadingSpinner;
