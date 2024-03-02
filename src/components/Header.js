import React, { useState } from 'react';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className="bg-gray-800 text-white py-4 px-8 sticky top-0 z-10">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-lg font-bold">Your Logo</h1>
        <nav className="md:block hidden">
          <ul className="flex space-x-4">
            <li><a href="#">Home</a></li>
            <li><a href="#">Products</a></li>
            <li><a href="#">About</a></li>
            <li><a href="#">Contact</a></li>
          </ul>
        </nav>
        <button className="md:hidden block text-white focus:outline-none" onClick={toggleMenu} aria-label="Toggle Menu">
          {isOpen ? (
            <svg className="w-8 h-8 transition-transform transform rotate-90" viewBox="0 0 24 24" fill="none" stroke="white">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
            </svg>
          ) : (
            <svg className="w-8 h-8 transition-transform transform rotate-0" viewBox="0 0 24 24" fill="none" stroke="white">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
            </svg>
          )}
        </button>
      </div>
      <nav className={`md:hidden transition-all duration-500 ease-in-out overflow-hidden ${isOpen ? 'max-h-screen' : 'max-h-0'}`}>
        <ul className="flex flex-col space-y-4">
          <li><a href="#">Home</a></li>
          <li><a href="#">Products</a></li>
          <li><a href="#">About</a></li>
          <li><a href="#">Contact</a></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
