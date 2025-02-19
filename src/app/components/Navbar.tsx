// components/Navbar.tsx
"use client";

import { useState } from "react";
import Link from "next/link";

const Navbar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Toggle the hamburger menu
  const toggleMenu = () => {
    setIsMenuOpen((prev) => !prev);
  };

  return (
    <header className="bg-blue-500 text-white">
      <nav className="max-w-autox mx-auto px-4 py-4 sm:px-6 lg:px-8">
        <div className="relative flex items-center justify-between">
          {/* Logo */}
          <div className="text-2xl font-bold justify-content-start">
            <Link href="/">Carrier</Link>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-8">
            <Link href="/" className="text-lg hover:text-gray-400">
              Home
            </Link>
            <Link href="/about" className="text-lg hover:text-gray-400">
              About
            </Link>
            <Link href="/shop" className="text-lg hover:text-gray-400">
              Shop
            </Link>
            <Link href="/contact" className="text-lg hover:text-gray-400">
              Contact
            </Link>
          </div>

          {/* Hamburger Icon for Mobile */}
          <div className="md:hidden flex items-center">
            <button
              className="text-white hover:text-gray-400"
              onClick={toggleMenu}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                className="h-6 w-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <div
          className={`${
            isMenuOpen ? "block" : "hidden"
          } md:hidden absolute left-0 w-full bg-blue-500 text-white mt-4 p-4 space-y-4`}
        >
          <Link href="/" className="text-lg hover:text-gray-400">
            Home
          </Link>
          <Link href="/about" className="text-lg hover:text-gray-400">
            About
          </Link>
          <Link href="/shop" className="text-lg hover:text-gray-400">
            Shop
          </Link>
          <Link href="/contact" className="text-lg hover:text-gray-400">
            Contact
          </Link>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
