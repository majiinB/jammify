"use client";
import React, { useState } from 'react';
import Link from 'next/link'

const Navbar = () => {

  const [isClick, setisClick] = useState(false);
  const toggleNavbar = () => {
    setisClick(!isClick);
  }
  return (
    <>
      <nav className="bg-black">
        <div className="max-w-7x1 mx auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center">
              <div className="flex-shrink-0">
                <a href="/" className="text-white">
                  Logo
                </a>
              </div>
            </div>
            <div className="hidden md:block">
              <div className="ml-4 flex items-center space-x-4">
                <Link href='/'>
                  <div className=" text-orange-400 hover:bg-orange-400 hover:text-black rounded-lg p-2">
                    Home
                  </div>
                </Link>
              </div>
            </div>
            <div className="hidden md:block">
              <div className="ml-4 flex items-center space-x-4">
                <a href="/" className="text-orange-400 hover:bg-orange-400 hover:text-black rounded-lg p-2">
                  Browse
                </a>
              </div>
            </div>
            <div className="hidden md:block">
              <div className="ml-4 flex items-center space-x-4">
                <a href="/" className="text-orange-400 hover:bg-orange-400 hover:text-black rounded-lg p-2">
                  Charts
                </a>
              </div>
            </div>
            <div className="hidden md:block">
              <div className="ml-4 flex items-center space-x-4">
                <Link href='/loginPage'>
                  <div className=" text-orange-400 hover:bg-orange-400 hover:text-black rounded-lg p-2">
                    Login
                  </div>
                </Link>
              </div>
            </div>
            <div className="md:hidden flex items-center">
              <button className="inline-flex items-center justify-center p-2 rounded-md text-orange-400 
              hover:ring-2 hover:ring-orange-400 focus:outline-none focus:ring-2 focus:ring-orange-400:focus-visible:ring-0" onClick={toggleNavbar}
              >
                {isClick ? (
                  <svg
                    className="h-6 w-6"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                ) : (
                  <svg
                    className="h-6 w-6"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M4 6h16M4 12h16m-7 6h7"
                    />
                  </svg>
                )}
              </button>
            </div>
          </div>
        </div>
        {isClick && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
              <a href="/" className="text-orange-400 block hover:bg-orange-400 hover:text-black rounded-lg p-2">
                Home
              </a>
              <a href="/" className="text-orange-400 block hover:bg-orange-400 hover:text-black rounded-lg p-2">
                Browse
              </a>
              <a href="/" className="text-orange-400 block hover:bg-orange-400 hover:text-black rounded-lg p-2">
                Charts
              </a>
              <a href="/" className=" text-orange-400 hover:bg-orange-400 hover:text-black rounded-lg p-2">
                Login
              </a>
            </div>
          </div>
        )}
      </nav>
    </>
  );
}
export default Navbar;