"use client";
import { useState } from 'react'; // Import useState for toggling
import Navbar from "./components/Navbar";
import Image from "next/image";
import Link from "next/link";
import ProductTable from "./components/ProductTable"; // Import the ProductTable component

export default function ProductPage() {
  const [isTableVisible, setIsTableVisible] = useState(true); // State to manage visibility

  const toggleTableVisibility = () => {
    setIsTableVisible((prev) => !prev); // Toggle visibility
  };

  return (
    <>
      <Navbar /> {/* Include Navbar at the top of the page */}

      <div className="min-h-screen py-12 px-12 bg-gray-50 sm:px-8 lg:px-14">
        {/* Outer Container with Background and Borders */}
        <div className="bg-white border border-gray-300 rounded-lg shadow-lg p-4">
          <div className="flex justify-between items-center mb-4">
            {/* Product Name */}
            <h1 className="text-4xl font-bold text-gray-900 flex-shrink-0">Cooling Product</h1>

            {/* Button to View More Products */}
            <div className="ml-5">
              <Link href="/product-grid">
                <button className="w-full sm:w-auto bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold shadow-md hover:bg-blue-700 transition duration-200">
                  View All Products
                </button>
              </Link>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-8 sm:gap-10 items-start">
            {/* Combined Product Image and Info Container */}
            <div className="flex flex-col sm:flex-row w-full">
              {/* Product Image */}
              <div className="flex-shrink-0 px-2 w-[400px] sm:w-[450px] relative">
                {/* Outer border */}
                <div className="border-4 border-blue-500 p-2 rounded-lg flex justify-center">
                  {/* Inner border wrapping the container */}
                  <div className="border-2 border-gray-300 rounded-lg flex items-center justify-center p-2">
                    <div className="flex justify-center">
                      <Image
                        src="/product-image.png" 
                        alt="Product Image"
                        width={300} // Adjusted to fit container
                        height={300}
                        className="object-cover"
                      />
                    </div>
                  </div>
                </div>

                {/* Description Card */}
                <div className="flex flex-col mt-2 border rounded-lg shadow-lg mb-2 w-full h-[80px]">
                  <div className="flex h-full items-center px-2">
                    <p className="flex-1 text-gray-700 text-xs overflow-hidden">
                      This is a brief description of the product. It explains its features and benefits.
                    </p>
                    <div className="flex flex-col items-center justify-center ml-1 mr-1 w-[30%]">
                      <button 
                        className="bg-blue-500 text-white px-2 py-1 text-xs rounded"
                        onClick={toggleTableVisibility} 
                      >
                        {isTableVisible ? "Hide" : "Show"} Table
                      </button>
                    </div>
                  </div>
                </div>

              </div>

              {/* Product Info and Table */}
              <div id="dataTable" 
              className={`flex flex-col justify-start w-full sm:w-[65%] space-y-4 transition-opacity duration-300 ${isTableVisible ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}
              >
                {/* Product Attributes Table */}
                <ProductTable />
              </div>

              {/* Quick Links */}
              <div className="w-full sm:w-1/4 p-4 mx-1 border rounded-lg shadow-lg bg-gray-100">
                <h2 className="font-semibold text-lg text-blue-700 border-b-2 border-blue-500 pb-1">Quick Links</h2>
                <ul className="space-y-3 mt-3">
                  <li>
                    <a href="#" className="flex items-center text-gray-800 hover:text-blue-600 transition duration-200">
                      📜 <span className="ml-2">Purchase Info.</span>
                    </a>
                  </li>
                  <li>
                    <a href="#" className="flex items-center text-gray-800 hover:text-blue-600 transition duration-200">
                      🏪 <span className="ml-2">Vendors</span>
                    </a>
                  </li>
                  <li>
                    <a href="#" className="flex items-center text-gray-800 hover:text-blue-600 transition duration-200">
                      📦 <span className="ml-2">Unit Info.</span>
                    </a>
                  </li>
                  <li>
                    <a href="#" className="flex items-center text-gray-800 hover:text-blue-600 transition duration-200">
                      🛠️ <span className="ml-2">Warranty Info.</span>
                    </a>
                  </li>
                  <li>
                    <a href="#" className="flex items-center text-gray-800 hover:text-blue-600 transition duration-200">
                      ⭐ <span className="ml-2">Customer Reviews</span>
                    </a>
                  </li>
                </ul>
              </div>

            </div>
          </div>

          {/* Footer Links */}
          <footer className="mt-12 text-center">
            <a
              className="text-blue-600 hover:underline"
              href="https://nextjs.org/docs"
              target="_blank"
              rel="noopener noreferrer"
            >
              Read our docs
            </a>
          </footer>
        </div>
      </div>
    </>
  );
}
