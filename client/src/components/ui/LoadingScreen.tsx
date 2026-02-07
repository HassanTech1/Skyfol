import { motion } from "framer-motion";
import logo from "@assets/skyfol-logo_1770237604954.png";

export default function LoadingScreen() {
  return (
    <motion.div
      initial={{ opacity: 1 }}
      animate={{ opacity: 0 }}
      transition={{ delay: 1.5, duration: 0.5, ease: "easeInOut" }}
      onAnimationComplete={() => document.body.style.overflow = "auto"}
      className="fixed inset-0 z-[100] bg-background flex flex-col items-center justify-center"
    >
      <motion.div
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="relative"
      >
        <img src={logo} alt="Loading..." className="h-24 md:h-32 mb-8" />
        
        <div className="w-full h-1 bg-white/10 rounded-full overflow-hidden">
          <motion.div
            initial={{ x: "-100%" }}
            animate={{ x: "100%" }}
            transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
            className="w-1/2 h-full bg-primary"
          />
        </div>
      </motion.div>
    </motion.div>
  );
}
