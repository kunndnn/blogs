import { motion } from "framer-motion";

export default function LoaderLogo() {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-background-base z-50">
      <div className="flex flex-col items-center gap-6">
        {/* Animated Rings Container */}
        <div className="relative flex items-center justify-center w-24 h-24">
            {/* Outer Ring */}
            <motion.div 
                className="absolute inset-0 rounded-full border-t-4 border-brand-primary shadow-[0_0_20px_rgba(129,140,248,0.6)]"
                animate={{ rotate: 360 }}
                transition={{ duration: 1.5, repeat: Infinity, ease: "linear" }}
            />
            {/* Middle Ring */}
            <motion.div 
                className="absolute inset-3 rounded-full border-r-4 border-brand-secondary shadow-[0_0_20px_rgba(192,132,252,0.6)]"
                animate={{ rotate: -360 }}
                transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
            />
            {/* Center core pulse */}
            <motion.div 
                className="w-4 h-4 rounded-full bg-gradient-to-tr from-brand-primary via-brand-secondary to-brand-accent blur-[2px]"
                animate={{ scale: [1, 1.5, 1], opacity: [0.7, 1, 0.7] }}
                transition={{ duration: 1, repeat: Infinity, ease: "easeInOut" }}
            />
        </div>
      </div>
    </div>
  );
}
