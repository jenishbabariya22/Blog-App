import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header className="bg-gradient-to-r from-blue-500 to-blue-700 text-white py-4 shadow-md">
      <div className="max-w-6xl mx-auto flex justify-between items-center px-4">
        <h1 className="text-3xl font-bold">
          <Link to="/" className="hover:text-gray-200 transition-colors duration-200">
            My Blog
          </Link>
        </h1>
        <nav className="space-x-6">
          <Link to="/" className="hover:text-gray-200 transition-colors duration-200">
            Home
          </Link>
          <Link to="/create" className="bg-white text-blue-600 px-4 py-2 rounded-full hover:bg-gray-200 transition-colors duration-200 shadow-lg">
            Create Post
          </Link>
        </nav>
      </div>
    </header>
  );
};

export default Header;
