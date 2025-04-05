import React from "react";

function Navbar() {
  return (
    <div>
      <>
        <div>
          <nav class="bg-white shadow-md">
            <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div class="flex justify-between h-16">
                <div class="flex items-center space-x-8">
                  <a href="#" class="text-xl font-bold text-blue-600">
                    MyWebsite
                  </a>
                  <div class="hidden md:flex space-x-6">
                    <a href="/" class="text-gray-700 hover:text-blue-600">
                      Home
                    </a>
                    <a href="/Problems" class="text-gray-700 hover:text-blue-600">
                      Problems
                    </a>
                    <a href="#" class="text-gray-700 hover:text-blue-600">
                      Services
                    </a>
                    <a href="#" class="text-gray-700 hover:text-blue-600">
                      Blog
                    </a>
                    <a href="#" class="text-gray-700 hover:text-blue-600">
                      Contact
                    </a>
                  </div>
                </div>
                <div class="flex items-center">
                  <a
                    href="#"
                    class="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition"
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
