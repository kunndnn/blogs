import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { FaArrowRight, FaGithub } from "react-icons/fa";

export default function Hero() {
  return (
    <section className="relative h-[80vh] flex items-center justify-center overflow-hidden bg-background-base">
      {/* Immersive Background Gradients */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-brand-primary/20 blur-[120px] rounded-full animate-pulse-slow" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-brand-accent/20 blur-[120px] rounded-full animate-pulse-slow" style={{ animationDelay: '2s' }} />
      </div>

      {/* Floating Glass Elements */}
      <motion.div
        animate={{
          y: [0, -20, 0],
          rotate: [0, 5, 0],
        }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-1/4 left-10 w-24 h-24 glass rounded-2xl opacity-20 hidden md:block"
      />
      <motion.div
        animate={{
          y: [0, 20, 0],
          rotate: [0, -8, 0],
        }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        className="absolute bottom-1/4 right-20 w-32 h-32 glass rounded-full opacity-10 hidden md:block"
      />

      {/* Content */}
      <div className="relative z-10 text-center px-4 md:px-6 max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <span className="inline-block px-4 py-1.5 mb-6 text-xs md:text-sm font-semibold tracking-wider text-brand-primary uppercase bg-brand-primary/10 rounded-full border border-brand-primary/20">
            Latest Tech Trends & Tutorials
          </span>
          <h1 className="text-3xl md:text-7xl font-extrabold text-text-main drop-shadow-2xl tracking-tighter leading-tight">
            Elevate Your <span className="text-gradient">Coding Journey</span>
          </h1>
          <p className="mt-8 text-lg md:text-2xl text-text-muted max-w-2xl mx-auto font-medium leading-relaxed">
            Deep dives into modern web development, deployment strategies, and the future of software engineering.
          </p>

          <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link to="/blog">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="btn-primary text-lg px-8 py-4 group"
              >
                Start Reading <FaArrowRight className="group-hover:translate-x-1 transition-transform" />
              </motion.button>
            </Link>
            <a href="https://github.com/kunndnn" target="_blank" rel="noopener noreferrer">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="flex items-center gap-2 px-8 py-4 bg-background-elevated text-text-main border border-border-strong hover:border-brand-primary/30 rounded-2xl font-bold text-lg backdrop-blur-sm transition-all"
              >
                <FaGithub /> Follow on GitHub
              </motion.button>
            </a>
          </div>
        </motion.div>
      </div>

      {/* Decorative Bottom Fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background-base to-transparent" />
    </section>
  );
}
