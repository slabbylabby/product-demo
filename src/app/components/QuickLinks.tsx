// components/QuickLinks.js
import { useState } from 'react';

const QuickLinks = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div
      className={`fixed right-0 top-1/4 bg-white border border-gray-300 shadow-lg transition-all duration-300 ${isOpen ? 'w-40' : 'w-12'}`}
      onMouseEnter={() => setIsOpen(true)}
      onMouseLeave={() => setIsOpen(false)}
    >
      <div className={`flex items-center justify-center h-full ${isOpen ? 'flex-col' : 'flex-row'}`}>
        <span className="text-black"> Quick Links</span>
        {isOpen && (
          <>
            <a href="#link1" className="py-2 text-gray-700 hover:text-blue-500">Link 1</a>
            <a href="#link2" className="py-2 text-gray-700 hover:text-blue-500">Link 2</a>
            <a href="#link3" className="py-2 text-gray-700 hover:text-blue-500">Link 3</a>
            <a href="#link4" className="py-2 text-gray-700 hover:text-blue-500">Link 4</a>
          </>
        )}
        <span className={`text-center ${isOpen ? 'hidden' : 'block'}`}>...</span>
      </div>
    </div>
  );
};

export default QuickLinks;
