import { posts } from "../data/posts";
import PostCard from "../components/PostCard";
import { motion } from "framer-motion";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
};

const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      type: "spring",
      stiffness: 100
    }
  }
};

export default function Blog() {
  return (
    <div className="p-8 bg-background-base min-h-screen">
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-center mb-12"
      >
        <span className="inline-block px-4 py-1.5 mb-4 text-xs font-bold text-brand-primary uppercase tracking-[0.2em] bg-brand-primary/10 rounded-full border border-brand-primary/20">
          Explore
        </span>
        <h2 className="text-4xl md:text-5xl font-black text-text-main tracking-tighter">
          Latest Posts
        </h2>
        <p className="mt-4 text-lg text-text-muted max-w-xl mx-auto">
          Dive into tutorials, guides, and insights from the world of web development.
        </p>
      </motion.div>
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.1 }}
        className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6"
      >
        {posts?.map((post) => (
          <motion.div key={post?.id} variants={itemVariants}>
            <PostCard post={post} />
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
}
