// components/QuickLinks.js

const QuickLinks = () => {
  return (
    <div className="w-full sm:w-[100%] p-4 border rounded-lg shadow-lg bg-gray-50 text-center">
      <h2 className="font-semibold text-lg text-blue-700 border-b-2 border-blue-500 pb-1">Quick Links</h2>
      <ul className="space-y-3 mt-3">
        <li><a href="#" className="flex justify-center sm:justify-start items-center text-gray-800 hover:text-blue-600 transition duration-200">📜 <span className="ml-2">Purchase Info.</span></a></li>
        <li><a href="#" className="flex justify-center sm:justify-start items-center text-gray-800 hover:text-blue-600 transition duration-200">🏪 <span className="ml-2">Vendors</span></a></li>
        <li><a href="#" className="flex justify-center sm:justify-start items-center text-gray-800 hover:text-blue-600 transition duration-200">📦 <span className="ml-2">Unit Info.</span></a></li>
        <li><a href="#" className="flex justify-center sm:justify-start items-center text-gray-800 hover:text-blue-600 transition duration-200">🛠️ <span className="ml-2">Warranty Info.</span></a></li>
        <li><a href="#" className="flex justify-center sm:justify-start items-center text-gray-800 hover:text-blue-600 transition duration-200">⭐ <span className="ml-2">Customer Reviews</span></a></li>
      </ul>
    </div>
  );
};

export default QuickLinks;
