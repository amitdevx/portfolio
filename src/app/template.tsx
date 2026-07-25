"use client"

import { motion } from "motion/react"
import { ReactNode } from "react"

export default function Template({ children }: { children: ReactNode }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 15 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -15 }}
      transition={{ type: "spring", stiffness: 300, damping: 30 }}
      className="min-h-screen"
    >
      {children}
    </motion.div>
  )
}
