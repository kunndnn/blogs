import { motion } from "framer-motion";

export default function Home() {

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="p-6 max-w-4xl mx-auto"
    >
      {/* Hero section */}
      <motion.h1
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.2 }}
        className="text-3xl font-bold text-text-main"
      >
        Welcome to My Blogs site
      </motion.h1>
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.4 }}
        className="mt-2 text-text-muted text-lg"
      >
        A place where I share my thoughts and knowledge with you.
      </motion.p>

      {/* About section */}
      <motion.section
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.6 }}
        className="mt-12 p-8 glass rounded-3xl"
      >
        <h2 className="text-2xl font-bold text-text-main">About This Blog</h2>
        <p className="mt-4 text-text-muted leading-relaxed">
          I write about web development, programming, and new technologies.
          Whether you're just starting out or an experienced dev, you'll find
          tips, tutorials, and deep dives here.
        </p>
      </motion.section>
    </motion.div>
  );
}
