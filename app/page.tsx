'use client'

import Link from "next/link";
import { motion } from "motion/react"
import { useState } from "react";

export default function Home() {
  const [expanded, setExpanded] = useState(false)
  return (
    <div>
      <h1>
        Aman's Portfolio
      </h1>

      <div>
        <Link href="/case-study-1">Case Study 1</Link>
        <Link href="/case-study-2">Case Study 2</Link>
      </div>

      <div className="flex gap-16">
        <motion.div
          layout
          onClick={() => setExpanded(!expanded)}
          animate={{
            width: expanded ? "100vw" : 150,
            height: expanded ? "50vh" : 150,
          }}
          transition={{ duration: 5 }}
          className="bg-red-500 w-150 h-100 rounded-2xl cursor-pointer"
        >
        </motion.div>
        <div className="bg-blue-500 w-150 h-100 rounded-2xl cursor-pointer"></div>
      </div>
    </div>
  );
}
