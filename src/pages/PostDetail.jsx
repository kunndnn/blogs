import { useParams } from "react-router-dom";
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

  return (
    <>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="max-w-4xl mx-auto"
      >
      <div className="p-6">
          <motion.h1
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-4xl font-extrabold mb-4 text-text-main tracking-tight"
          >
            {post.title}
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="text-text-muted mb-8 font-medium uppercase tracking-widest text-sm"
          >
            {post.date}
          </motion.p>
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.6 }}
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
              className="fixed bottom-8 right-8 bg-brand-primary text-white p-4 rounded-full shadow-premium transition-colors hover:bg-brand-secondary z-50 cursor-pointer"
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
