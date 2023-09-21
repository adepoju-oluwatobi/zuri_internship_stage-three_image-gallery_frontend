// Header.js
import React, { useState } from 'react';

const Header = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false); // Initialize with false for logged out state

  // Function to toggle login/logout status
  const toggleLogin = () => {
    setIsLoggedIn(!isLoggedIn);
  };

  return (
    <header className="bg-indigo-600 p-4">
      <div className="container mx-auto flex items-center justify-between">
        <a href='/' className="text-white text-2xl font-semibold">Image Gallery</a>
        <nav className="space-x-4">
          {/* Display "Sign In" or "Sign Out" based on isLoggedIn state */}
          {isLoggedIn ? (
            <button
              className="text-white hover:text-gray-200"
              onClick={toggleLogin}
            >
              Sign Out
            </button>
          ) : (
            <a href="/" className="text-white hover:text-gray-200">
              Sign In
            </a>
          )}
        </nav>
      </div>
    </header>
  );
}

export default Header;
