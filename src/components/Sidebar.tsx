import React, { useState } from 'react';

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="w-1/6 bg-gray-800 text-white p-4" style={{ display: 'block' }}>
      <button onClick={toggleSidebar} className="text-white focus:outline-none">
        <svg
          className="w-6 h-6"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M4 6h16M4 12h16m-7 6h7"
          ></path>
        </svg>
      </button>
      <ul className="mt-4">
        <li className="mb-2">
          <a href="#" className="text-gray-300 hover:text-white">Minha estante</a>
        </li>
        <li className="mb-2">
          <a href="#" className="text-gray-300 hover:text-white">TBR</a>
        </li>
        <li className="mb-2">
          <a href="#" className="text-gray-300 hover:text-white">Favoritos</a>
        </li>
        <li className="mb-2">
          <a href="#" className="text-gray-300 hover:text-white">Wishlist</a>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
