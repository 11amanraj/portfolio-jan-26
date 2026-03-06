'use client'

import Link from "next/link";
import { motion } from "motion/react"

export default function Home() {

  return (
    <div>
      <h1>
        Aman's Portfolio
      </h1>

      <div>
        <Link href="/case-study-1">Case Study 1</Link>
        <Link href="/case-study-2">Case Study 2</Link>
      </div>

      <div className="flex gap-8 m-8">
        <Link href="case-study-3">
          <motion.div
            layoutId="Third"
            className="w-50 h-40 cursor-pointer rounded-2xl bg-indigo-500"
          ></motion.div>
        </Link>

        <Link href="case-study-2">
          <motion.div
            layoutId="Second"
            className="w-50 h-40 cursor-pointer rounded-2xl bg-red-500"
          ></motion.div>
        </Link>

        <Link href="interaction-library">
          <div className="w-50 h-40 cursor-pointer rounded-2xl bg-green-400"></div>
        </Link>
      </div>
    </div>
  );
}
