import { motion } from "framer-motion";
import characterImage from "@/assets/3d_stylized_character_of_a_software_engineer_1763815808967.png";

export default function Character3D() {
  return (
    <div className="w-full h-full flex items-center justify-center">
      <motion.div
        initial={{ opacity: 0, y: 30, scale: 0.95 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="relative w-full max-w-md aspect-square"
      >
        <div className="absolute inset-0 bg-gradient-to-tr from-primary/30 to-secondary/30 rounded-[2.5rem] blur-3xl" />

        <div className="relative z-10 w-full h-full rounded-[2.5rem] bg-background/60 backdrop-blur-xl border border-white/10 shadow-[0_0_80px_rgba(15,23,42,0.9)] flex items-center justify-center p-6">
          <motion.img
            src={characterImage}
            alt="3D Developer Character"
            className="w-full h-full object-contain drop-shadow-[0_25px_50px_rgba(0,0,0,0.5)]"
            animate={{
              y: [0, -12, 0],
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
        </div>
      </motion.div>
    </div>
  );
}
