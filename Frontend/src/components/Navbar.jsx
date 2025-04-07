import React from "react";

function Navbar() {
  return (
    <div>
      <>
        <div>
          <nav className="bg-white shadow-md">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="flex justify-between h-16">
                <div className="flex items-center space-x-8">
                  <a href="#" className="text-xl font-bold text-blue-600">
                    MyWebsite
                  </a>
                  <div className="hidden md:flex space-x-6">
                    <a href="/" className="text-gray-700 hover:text-blue-600">
                      Home
                    </a>
                    <a href="/Problems" className="text-gray-700 hover:text-blue-600">
                      Problems
                    </a>
                    <a href="#" className="text-gray-700 hover:text-blue-600">
                      Submit-Problem
                    </a>
                    <a href="#" className="text-gray-700 hover:text-blue-600">
                      Blog
                    </a>
                    <a href="#" className="text-gray-700 hover:text-blue-600">
                      Contact
                    </a>
                  </div>
                </div>
                <div className="flex items-center">
                  <a
                    href="/Login"
                    className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition"
                  >
                    Login
                  </a>
                </div>
              </div>
            </div>
          </nav>
        </div>
      </>
    </div>
  );
}

export default Navbar;
