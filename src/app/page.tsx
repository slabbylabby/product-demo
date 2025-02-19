// pages/product.tsx

import Navbar from "./components/Navbar";
import Image from "next/image";
import Link from "next/link";
import ProductTable from "./components/ProductTable"; // Import the ProductTable component

export default function ProductPage() {

  return (
    <>
      <Navbar /> {/* Include Navbar at the top of the page */}

      <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row gap-8 sm:gap-10 items-start">
          {/* Product Image */}
          <div className="flex-shrink-0 max-w-max">
            <Image
              src="/product-image.png" 
              alt="Product Image"
              width={400}
              height={400}
              className="object-cover rounded-lg"
            />
          </div>

          {/* Product Info */}
          <div className="flex flex-col justify-start w-full sm:w-1/2 space-y-4">
            <h1 className="text-3xl font-bold text-gray-900">Cool Product</h1>

            {/* Product Attributes Table */}
            <ProductTable />

            {/* Button to View More Products */}
            <div className="mt-4">
              <Link href="/product-grid">
                <button className="w-full sm:w-auto bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold shadow-md hover:bg-blue-700 transition duration-200">
                  View All Products
                </button>
              </Link>
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
    </>
  );
}
