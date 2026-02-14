import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="relative h-[60vh] flex items-center justify-center bg-gradient-to-r from-brand-primary via-brand-secondary to-brand-accent text-white">
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{
          opacity: 1,
          scale: 1,
          y: [0, -10, 0]
        }}
        transition={{
          duration: 0.8,
          y: {
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut"
          }
        }}
        className="text-center"
      >
        <motion.h1
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.8 }}
          className="text-5xl font-extrabold drop-shadow-xl tracking-tight"
        >
          My Blogging site
        </motion.h1>
        <motion.p
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.8 }}
          className="mt-4 text-xl opacity-90 font-medium"
        >
          Thoughts, tutorials & ideas on new tech trends.
        </motion.p>
      </motion.div>
    </section>
  );
}
