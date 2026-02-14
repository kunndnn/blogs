import { Link } from "react-router-dom";
import { useState } from "react";
import { FiMenu, FiX } from "react-icons/fi";
import { motion, AnimatePresence } from "framer-motion";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ type: "spring", stiffness: 120, damping: 20 }}
        className="fixed top-0 left-0 w-full glass px-6 py-4 z-50"
      >
        <div className="flex justify-between items-center">
          <div className="text-2xl font-bold text-text-main">Tech Blogs</div>

          {/* Desktop Links */}
          <div className="hidden md:flex space-x-6">
            <Link to="/" className="text-text-muted hover:text-brand-primary font-medium">
              Home
            </Link>
            <Link to="/blog" className="text-text-muted hover:text-brand-primary font-medium">
              Blogs
            </Link>
          </div>

          {/* Mobile Hamburger */}
          <div className="md:hidden">
            <button onClick={() => setOpen(!open)}>
              {open ? <FiX className="w-6 h-6 text-text-muted" /> : <FiMenu className="w-6 h-6 text-text-muted" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {open && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              className="flex flex-col mt-4 md:hidden space-y-2 overflow-hidden"
            >
              <Link
                to="/"
                onClick={() => setOpen(false)}
                className="text-text-muted hover:text-brand-primary font-medium p-2 rounded hover:bg-brand-primary/10 transition-colors"
              >
                Home
              </Link>
              <Link
                to="/blog"
                onClick={() => setOpen(false)}
                className="text-text-muted hover:text-brand-primary font-medium p-2 rounded hover:bg-brand-primary/10 transition-colors"
              >
                Blogs
              </Link>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.nav>

      {/* Page content wrapper with top padding to avoid overlap */}
      <div className="pt-20">
        {/* Your page content goes here */}
      </div>
    </>
  );
}
