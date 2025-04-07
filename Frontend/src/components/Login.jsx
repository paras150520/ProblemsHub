import React from "react";

function Login() {
  return (
    <>
      <div className="bg-gradient-to-tr from-indigo-500 via-purple-500 to-pink-500 min-h-screen flex items-center justify-center p-4">
        <div className="bg-white shadow-xl rounded-2xl max-w-md w-full p-8 space-y-6">
          <h2 className="text-3xl font-bold text-center text-gray-800">
            Welcome Back 👋
          </h2>
          <p className="text-center text-gray-500 text-sm">
            Please login to your account
          </p>

          <form className="space-y-4">
            <div>
              <label className="block text-gray-700 font-medium mb-1">
                Email
              </label>
              <input
                type="email"
                placeholder="you@example.com"
                className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                required
              />
            </div>
            <div>
              <label className="block text-gray-700 font-medium mb-1">
                Password
              </label>
              <input
                type="password"
                placeholder="••••••••"
                className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                required
              />
            </div>
            <div className="flex items-center justify-between text-sm">
              <label className="flex items-center space-x-2">
                <input
                  type="checkbox"
                  className="form-checkbox rounded text-indigo-600"
                />
                <span className="text-gray-600">Remember me</span>
              </label>
              <a href="#" className="text-indigo-600 hover:underline">
                Forgot password?
              </a>
            </div>
            <button
              type="submit"
              className="w-full bg-indigo-600 text-white py-2 rounded-lg font-semibold hover:bg-indigo-700 transition duration-200"
            >
              Login
            </button>
          </form>

          <p className="text-center text-gray-500 text-sm">
            Don't have an account?{" "}
            <a href="/Signup" className="text-indigo-600 hover:underline">
              Sign up
            </a>
          </p>
        </div>
      </div>
    </>
  );
}

export default Login;
