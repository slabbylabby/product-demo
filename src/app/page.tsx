// pages/product.tsx

"use client"
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
        <div className="bg-white border border-gray-300 rounded-lg shadow-lg p-6">
          <div className="flex justify-between items-center mb-4">
            {/* Product Name */}
            <h1 className="text-4xl font-bold text-gray-900 flex-shrink-0">Cooling Product</h1>

            {/* Button to View More Products */}
            <div className="ml-5 mr-5">
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
              <div className="flex-shrink-0 px-2 max-w-max relative">
                {/* Outer border */}
                <div className="border-4 border-blue-500 p-2 rounded-lg flex justify-center">
                  {/* Inner border wrapping the container */}
                  <div className="border-2 border-gray-300 rounded-lg flex items-center justify-center p-2">
                    <div className="flex justify-center">
                      <Image
                        src="/product-image.png" // Correct path relative to 'public'
                        alt="Product Image"
                        width={400}
                        height={400}
                        className="object-cover"
                      />
                    </div>
                  </div>
                </div>

                {/* Description Card */}
                <div className="flex flex-col mt-2 border rounded-lg shadow-lg mb-2" style={{ height: '100px', width: '100%' }}>
                  <div className="flex h-full">
                    <p className="flex-1 text-gray-700 h-full p-2">
                      This is a brief description of the product. It explains its features and benefits.
                    </p>
                    <div className="flex flex-col items-center justify-center ml-1 mr-1" style={{ width: '35%' }}>
                      <button 
                        className="bg-blue-500 text-white px-4 py-2 rounded"
                        onClick={toggleTableVisibility} // Toggle table visibility
                      >
                        {isTableVisible ? "Hide Information" : "Show Information"}
                      </button>
                    </div>
                  </div>
                </div>

              </div>

              {/* Product Info and Table */}
              <div id="dataTable" 
              className={`flex flex-col justify-start w-full sm:w-1/2 space-y-4 transition-opacity duration-300 ${isTableVisible ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}
              >
                {/* Product Attributes Table */}
                <ProductTable />
              </div>
            </div>
          </div>
          {/* Quick Links */}
          <div className="mt-4 p-4 border rounded-lg shadow-md bg-white">
            <h2 className="font-semibold text-lg">Quick Links</h2>
            <ul className="space-y-2 mt-2">
              <li><a href="#" className="text-blue-600 hover:underline">Link 1</a></li>
              <li><a href="#" className="text-blue-600 hover:underline">Link 2</a></li>
              <li><a href="#" className="text-blue-600 hover:underline">Link 3</a></li>
            </ul>
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


