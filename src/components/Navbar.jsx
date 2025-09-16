import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="bg-white shadow-md px-6 py-4 flex justify-between items-center">
      <div className="text-2xl font-bold text-gray-800">Tech Blogs</div>
      <div className="space-x-6">
        <Link to="/" className="text-gray-700 hover:text-blue-600 font-medium">
          Home
        </Link>
        <Link
          to="/blog"
          className="text-gray-700 hover:text-blue-600 font-medium"
        >
          Blogs
        </Link>
      </div>
    </nav>
  );
}
