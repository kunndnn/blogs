import { Link } from "react-router-dom";
import { useState } from "react";
import { FiMenu, FiX } from "react-icons/fi"; // Feather icons

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <nav className="fixed top-0 left-0 w-full bg-white shadow-md px-6 py-4 z-50">
        <div className="flex justify-between items-center">
          <div className="text-2xl font-bold text-gray-800">Tech Blogs</div>

          {/* Desktop Links */}
          <div className="hidden md:flex space-x-6">
            <Link to="/" className="text-gray-700 hover:text-blue-600 font-medium">
              Home
            </Link>
            <Link to="/blog" className="text-gray-700 hover:text-blue-600 font-medium">
              Blogs
            </Link>
          </div>

          {/* Mobile Hamburger */}
          <div className="md:hidden">
            <button onClick={() => setOpen(!open)}>
              {open ? <FiX className="w-6 h-6 text-gray-700" /> : <FiMenu className="w-6 h-6 text-gray-700" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {open && (
          <div className="flex flex-col mt-4 md:hidden space-y-2">
            <Link
              to="/"
              onClick={() => setOpen(false)}
              className="text-gray-700 hover:text-blue-600 font-medium"
            >
              Home
            </Link>
            <Link
              to="/blog"
              onClick={() => setOpen(false)}
              className="text-gray-700 hover:text-blue-600 font-medium"
            >
              Blogs
            </Link>
          </div>
        )}
      </nav>

      {/* Page content wrapper with top padding to avoid overlap */}
      <div className="pt-20">
        {/* Your page content goes here */}
      </div>
    </>
  );
}
