import { Link } from "react-router-dom";
import { useState } from "react";
import { FiMenu, FiX } from "react-icons/fi";
import { motion, AnimatePresence } from "framer-motion";
import Button from "./Button";
import ThemeToggle from "./ThemeToggle";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ type: "spring", stiffness: 120, damping: 20 }}
        className="fixed top-0 left-0 w-full glass px-4 md:px-6 py-4 z-50"
      >
        <div className="flex justify-between items-center">
          <Link to="/" className="text-2xl font-black tracking-tighter text-text-main">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-primary to-brand-secondary">Tech</span>Blogs
          </Link>

          {/* Desktop Links */}
          <div className="hidden md:flex items-center space-x-6">
            <Link to="/" className="text-text-muted hover:text-text-main font-semibold transition-colors">
              Home
            </Link>
            <Link to="/blog" className="text-text-muted hover:text-text-main font-semibold transition-colors">
              Blogs
            </Link>
            <ThemeToggle />
          </div>

          {/* Mobile Hamburger */}
          <div className="md:hidden flex items-center gap-3">
            <ThemeToggle />
            <Button onClick={() => setOpen(!open)} className="p-2 bg-background-elevated rounded-xl border border-border-soft text-text-main">
              {open ? <FiX className="w-6 h-6" /> : <FiMenu className="w-6 h-6" />}
            </Button>
          </div>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {open && (
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              className="flex flex-col mt-4 md:hidden space-y-2 p-4 glass rounded-2xl border border-border-soft shadow-2xl"
            >
              <Link
                to="/"
                onClick={() => setOpen(false)}
                className="text-text-muted hover:text-text-main font-bold p-3 rounded-xl hover:bg-background-elevated transition-all text-center"
              >
                Home
              </Link>
              <Link
                to="/blog"
                onClick={() => setOpen(false)}
                className="text-text-muted hover:text-text-main font-bold p-3 rounded-xl hover:bg-background-elevated transition-all text-center"
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
