import { Code2, Smartphone, TrendingUp } from 'lucide-react';
import { motion } from 'motion/react';

export function FloatingIcons() {
  const floatingAnimation = {
    y: [0, -20, 0],
    rotate: [0, 5, 0],
  };

  const iconClass = "w-6 h-6 text-[#ff6b35]";
  const containerClass = "absolute p-4 bg-[#1a1a2e]/50 backdrop-blur-sm border border-[#ff6b35]/30 rounded-xl";

  return (
    <>
      {/* Code Icon - Top Right */}
      <motion.div
        className={`${containerClass} top-[15%] right-[15%]`}
        animate={floatingAnimation}
        transition={{
          duration: 3,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      >
        <Code2 className={iconClass} />
      </motion.div>

      {/* Smartphone Icon - Center Left */}
      <motion.div
        className={`${containerClass} top-[45%] left-[12%]`}
        animate={floatingAnimation}
        transition={{
          duration: 3.5,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 0.5,
        }}
      >
        <Smartphone className={iconClass} />
      </motion.div>

      {/* Chart Icon - Right Side */}
      <motion.div
        className={`${containerClass} bottom-[35%] right-[10%]`}
        animate={floatingAnimation}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 1,
        }}
      >
        <TrendingUp className={iconClass} />
      </motion.div>
    </>
  );
}
