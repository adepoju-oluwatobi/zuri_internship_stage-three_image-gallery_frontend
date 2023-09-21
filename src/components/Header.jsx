import React, { useState } from 'react';

const Header = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(true);

  // Function to toggle login/logout status
//   const toggleLogin = () => {
//     setIsLoggedIn(!isLoggedIn);
//   };

  return (
    <header className="bg-indigo-600 p-4">
      <div className="container mx-auto flex items-center justify-between">
        <a href='/' className="text-white text-2xl font-semibold">Image Gallery</a>
        <nav className="space-x-4">
            <a href="/" className="text-white hover:text-gray-200">
              Sign Out
            </a>
        </nav>
      </div>
    </header>
  );
}

export default Header;
