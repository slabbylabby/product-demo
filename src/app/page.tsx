"use client";
import { useState } from 'react'; 
import Navbar from "./components/Navbar";
import Image from "next/image";
import Link from "next/link";
import ProductTable from "./components/ProductTable"; 

export default function ProductPage() {
  const [isTableVisible, setIsTableVisible] = useState(true); 

  const toggleTableVisibility = () => {
    setIsTableVisible((prev) => !prev); 
  };

  return (
    <>
      <Navbar /> 

      <div className="min-h-screen w-full py-12 bg-gray-50 sm:px-8 lg:px-14 overflow-hidden">
        <div className="bg-white border border-gray-300 rounded-lg shadow-lg p-4">
          
          <div className="flex flex-col sm:flex-row justify-between items-center mb-4">
            <h1 className="text-4xl font-bold text-gray-900 mb-4 sm:mb-0">Cooling Product</h1>
            <Link href="/product-grid">
              <button className="bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold shadow-md hover:bg-blue-700 transition duration-200">
                View All Products
              </button>
            </Link>
          </div>

          {/* Main Content */}
          <div className="flex flex-col sm:flex-row gap-8 sm:gap-6 items-center sm:items-start">
            
            {/* Product Image */}
            <div className="flex justify-center w-full sm:w-[350px]"> 
              <div className="relative w-full">
                <div className="border-4 border-blue-500 p-2 rounded-lg flex justify-center">
                  <div className="border-2 border-gray-300 rounded-lg flex items-center justify-center p-2">
                    <Image
                      src="/product-image.png" 
                      alt="Product Image"
                      width={250} 
                      height={250} 
                      className="object-cover"
                    />
                  </div>
                </div>

                {/* Description Card */}
                <div className="flex flex-col mt-2 border rounded-lg shadow-lg mb-2 w-full h-[60px] sm:h-[80px]"> 
                  <div className="flex h-full items-center px-2">
                    <p className="flex-1 text-gray-700 text-xs">
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
            </div>

            {/* Product Info and Table */}
            <div id="dataTable" 
              className={`flex flex-col justify-start w-full sm:w-[65%] space-y-4 transition-opacity duration-300 ${isTableVisible ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}
            >
              <ProductTable />
            </div>

            {/* Quick Links */}
            <div className="w-full sm:w-[15%] p-4 border rounded-lg shadow-lg bg-gray-100 text-center">
              <h2 className="font-semibold text-lg text-blue-700 border-b-2 border-blue-500 pb-1">Quick Links</h2>
              <ul className="space-y-3 mt-3">
                <li><a href="#" className="flex justify-center sm:justify-start items-center text-gray-800 hover:text-blue-600 transition duration-200">📜 <span className="ml-2">Purchase Info.</span></a></li>
                <li><a href="#" className="flex justify-center sm:justify-start items-center text-gray-800 hover:text-blue-600 transition duration-200">🏪 <span className="ml-2">Vendors</span></a></li>
                <li><a href="#" className="flex justify-center sm:justify-start items-center text-gray-800 hover:text-blue-600 transition duration-200">📦 <span className="ml-2">Unit Info.</span></a></li>
                <li><a href="#" className="flex justify-center sm:justify-start items-center text-gray-800 hover:text-blue-600 transition duration-200">🛠️ <span className="ml-2">Warranty Info.</span></a></li>
                <li><a href="#" className="flex justify-center sm:justify-start items-center text-gray-800 hover:text-blue-600 transition duration-200">⭐ <span className="ml-2">Customer Reviews</span></a></li>
              </ul>
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
