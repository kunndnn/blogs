import { motion } from "framer-motion";
import { Link } from "react-router-dom";

export default function PostCard({ post }) {
  return (
    <motion.div
      whileHover={{ scale: 1.03 }}
      whileTap={{ scale: 0.97 }}
      className="rounded-2xl overflow-hidden shadow-lg bg-white dark:bg-gray-800 transition-all text-white"
    >
      <Link to={`/post/${post.id}`}>
        <img
          src={`https://picsum.photos/600/300?random=${post.id}`}
          alt={post.title}
          className="w-full h-48 object-cover"
          loading="lazy"
        />
        <div className="p-4">
          <h2 className="text-xl font-semibold">{post.title}</h2>
          <p className="text-sm text-gray-500">{post.date}</p>
          <p className="mt-2 text-gray-700 dark:text-gray-300 line-clamp-3">
            {post.content}
          </p>
        </div>
      </Link>
    </motion.div>
  );
}
