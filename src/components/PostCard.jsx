import { motion } from "framer-motion";
import { Link } from "react-router-dom";

export default function PostCard({ post }) {
  return (
    <motion.div
      initial="rest"
      whileHover="hover"
      animate="rest"
      whileTap={{ scale: 0.98 }}
      className="group relative rounded-3xl overflow-hidden bg-background-surface shadow-2xl transition-all duration-300 border border-white/5 hover:border-brand-primary/30"
    >
      <Link to={`/post/${post.id}`} className="block h-full">
        <div className="relative overflow-hidden h-56">
          <motion.img
            variants={{
              rest: { scale: 1 },
              hover: { scale: 1.1 }
            }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            src={post.image}
            alt={post.title}
            className="w-full h-full object-cover"
            loading="lazy"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        </div>
        <div className="p-4 md:p-6">
          <motion.h2
            variants={{
              rest: { y: 0 },
              hover: { y: -2 }
            }}
            className="text-xl font-bold text-text-main group-hover:text-brand-primary transition-colors duration-300 line-clamp-2 leading-tight">
            {post.title}
          </motion.h2>
          <div className="flex items-center mt-3 text-xs font-semibold text-text-muted uppercase tracking-widest">
            <span className="bg-brand-primary/10 text-brand-primary px-2 py-1 rounded-md mr-3">Blog</span>
            {post.date}
          </div>
          <p className="mt-4 text-text-muted line-clamp-2 text-sm leading-relaxed opacity-80 group-hover:opacity-100 transition-opacity">
            {post.content}
          </p>
        </div>
      </Link>
    </motion.div>

  );
}
