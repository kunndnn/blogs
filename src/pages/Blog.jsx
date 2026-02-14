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
    <div className="p-8 bg-background-base min-h-screen bg-gray-950">
      <h2 className="text-3xl font-bold mb-6 text-center text-text-main text-white">
        Latest Posts
      </h2>
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.1 }}
        className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6"
      >
        {posts.map((post) => (
          <motion.div key={post.id} variants={itemVariants}>
            <PostCard post={post} />
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
}
