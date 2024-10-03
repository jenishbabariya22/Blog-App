import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-blue-900 text-white py-4 mt-auto">
      <div className="max-w-6xl mx-auto text-center">
        <p>&copy; {new Date().getFullYear()} My Blog. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
