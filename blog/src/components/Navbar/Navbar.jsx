

import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const Navbar = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [showMobileMenu, setShowMobileMenu] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem('authToken');
    setIsLoggedIn(!!token);
  }, []);

  const handleLogout = () => {
    localStorage.removeItem('authToken');
    setIsLoggedIn(false);
    alert('You have been logged out.');
    navigate('/login');
  };

  return (
    <nav className="bg-gray-200 shadow shadow-gray-300 w-full px-4 md:px-8">
      <div className="container mx-auto flex items-center justify-between py-4">
        {/* Logo */}
        <div className="text-indigo-500 flex-shrink-0">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-10 w-10"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z"
            />
          </svg>
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center space-x-6 text-gray-500">
          <a href="/" className="hover:text-indigo-500 font-semibold">Home</a>
          <a href="#" className="hover:text-indigo-500 font-semibold">Feed</a>

          <div className="relative group">
            <button className="hover:text-indigo-500 font-semibold">Categories</button>
            <ul className="absolute hidden group-hover:block bg-white text-gray-800 shadow-lg rounded-md mt-2 w-40 z-10">
              <li className="px-4 py-2 hover:bg-indigo-100">
                <a href="/trend">Trending News</a>
              </li>
              <li className="px-4 py-2 hover:bg-indigo-100">
                <a href="/it">IT Company</a>
              </li>
              <li className="px-4 py-2 hover:bg-indigo-100">
                <a href="/spot">Sports</a>
              </li>
              <li className="px-4 py-2 hover:bg-indigo-100">
                <a href="/share">Share Market</a>
              </li>
            </ul>
          </div>
        </div>

        {/* Auth Button - Desktop */}
        <div className="hidden md:flex">
          {isLoggedIn ? (
            <button
              onClick={handleLogout}
              className="px-4 py-2 bg-red-500 hover:bg-red-600 text-white rounded-xl flex items-center gap-2"
            >
              <span>Logout</span>
            </button>
          ) : (
            <a
              href="/login"
              className="px-4 py-2 bg-indigo-500 hover:bg-indigo-600 text-white rounded-xl flex items-center gap-2"
            >
              <span>Login</span>
            </a>
          )}
        </div>

        {/* Mobile Menu Toggle */}
        <div className="md:hidden">
          <button
            className="text-gray-500 hover:text-indigo-500 focus:outline-none"
            onClick={() => setShowMobileMenu(!showMobileMenu)}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16m-7 6h7"
              />
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {showMobileMenu && (
        <div className="md:hidden flex flex-col space-y-2 px-4 pb-4 text-gray-700">
          <a href="/" className="hover:text-indigo-500">Home</a>
          <a href="#" className="hover:text-indigo-500">Feed</a>

          {/* Mobile Categories Dropdown */}
          <div className="flex flex-col space-y-1">
            <span className="font-semibold">Categories</span>
            <a href="/trend" className="pl-2 hover:text-indigo-500">Trending News</a>
            <a href="/it" className="pl-2 hover:text-indigo-500">IT Company</a>
            <a href="/spot" className="pl-2 hover:text-indigo-500">Sports</a>
            <a href="/share" className="pl-2 hover:text-indigo-500">Share Market</a>
          </div>

          {/* Auth - Mobile */}
          {isLoggedIn ? (
            <button
              onClick={handleLogout}
              className="mt-2 px-4 py-2 bg-red-500 hover:bg-red-600 text-white rounded-xl"
            >
              Logout
            </button>
          ) : (
            <a
              href="/login"
              className="mt-2 px-4 py-2 bg-indigo-500 hover:bg-indigo-600 text-white rounded-xl text-center"
            >
              Login
            </a>
          )}
        </div>
      )}
    </nav>
  );
};

export default Navbar;
