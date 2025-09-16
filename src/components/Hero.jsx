import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="relative h-[60vh] flex items-center justify-center bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 text-white">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-center"
      >
        <h1 className="text-5xl font-extrabold drop-shadow-lg">My Blogging site</h1>
        <p className="mt-4 text-lg opacity-90">Thoughts, tutorials & ideas on new tech trends.</p>
      </motion.div>
    </section>
  );
}
