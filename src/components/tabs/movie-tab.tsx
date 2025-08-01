"use client"

import { motion } from "framer-motion"
import { Lock } from "lucide-react"

export default function MovieTab() {
  return (
    <motion.div
      className="relative min-h-screen flex items-center justify-center bg-[var(--background-color)]"
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5 }}
    >
      <div className="text-center">
        <motion.div
          className="text-8xl mb-8"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
        >
          <Lock className="w-32 h-32 mx-auto" style={{ color: "hsl(8, 79%, 72%)" }} />
        </motion.div>

        <motion.h1
          className="text-4xl font-bold mb-4"
          style={{ color: "hsl(8, 79%, 72%)" }}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.6 }}
        >
          COMING SOON
        </motion.h1>

        <motion.p
          className="text-xl"
          style={{ color: "hsl(8, 79%, 72%)" }}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.6 }}
        >
          This content will be available after the show
        </motion.p>
      </div>
    </motion.div>
  )
}
