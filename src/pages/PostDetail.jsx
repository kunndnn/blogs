import { useNavigate, useParams } from "react-router-dom";
import { posts } from "../data/posts";
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function PostDetail() {
  const { id } = useParams();
  const post = posts.find((p) => p.id === id);

  if (!post) return <h2 className="p-6">Post not found!</h2>;

  const BlogComponent = post.component; // get the component
  const [visible, setVisible] = useState(false);

  // Show button after scrolling 300px
  useEffect(() => {
    const toggleVisibility = () => {
      setVisible(window.scrollY > 300);
    };
    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };
  const navigator = useNavigate();
  return (
    <>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="max-w-4xl mx-auto"
      >
        <motion.button
          whileHover={{ scale: 1.05, y: -2 }}
          whileTap={{ scale: 0.95 }}
          transition={{ type: "spring", stiffness: 400, damping: 10 }}
          className="cursor-pointer bg-brand-primary text-white px-3 py-1.5 text-sm rounded-xl mt-4 ml-4 md:ml-6"
          onClick={() => navigator(-1)}
        >
          ← Back
        </motion.button>
        <div className="px-4 md:px-6 py-6">
          <motion.h1
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            className="text-3xl md:text-6xl font-black text-white leading-tight tracking-tighter"
          >
            {post.title}
          </motion.h1>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="flex items-center gap-4 mt-6"
          >
            <span className="px-3 py-1 bg-brand-primary/10 text-brand-primary text-xs font-bold rounded-full border border-brand-primary/20">
              Tech Article
            </span>
            <span className="text-sm font-semibold text-text-muted">{post.date}</span>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="mt-12 prose prose-invert prose-brand max-w-none"
          >
            <BlogComponent />
          </motion.div>
        </div>
        <AnimatePresence>
          {visible && (
            <motion.button
              initial={{ scale: 0, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0, opacity: 0 }}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={scrollToTop}
              className="fixed bottom-12 right-10 text-brand-primary py-3 px-4 rounded-full shadow-premium transition-colors z-50 cursor-pointer bg-brand-primary/10 hover:bg-brand-secondary/45 hover:text-white"
              aria-label="Back to top"
            >
              ↑
            </motion.button>
          )}
        </AnimatePresence>
      </motion.div>
    </>
  );
}
