import { motion } from "motion/react";

export default function BlurShadow() {
  return (
    <motion.div
      animate={{
        y: [0, -400, 0],
        x: [0, -500, 0],
        scale: [1, 2, 1],
        opacity: [0.3, 0.6, 0.3]
      }}

      transition={{
        duration: 20,
        repeat: Infinity,
        ease: "easeInOut"
      }}
      className="fixed bottom-0 right-0 w-[400px] h-[400px] 
                bg-cyan-400 blur-[200px] rounded-full pointer-events-none"
    />
  )
}