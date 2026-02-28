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

      {/* <div className="flex gap-8 m-8">
        <motion.div
          initial={{
            top: 80,
            left: 32,
            width: 200,
            height: 160,
            borderRadius: "16px",
          }}
          animate={{
            top: 0,
            left: 0,
            width: 1920,
            height: "67vh",
            borderRadius: "0px"
          }}
          transition={{
            duration: 1.2,
            ease: "easeInOut",
            repeat: Infinity,
            repeatType: "reverse",
          }}
          className="absolute w-50 h-40 cursor-pointer bg-red-400"
        ></motion.div>
        <div className="w-50 h-40 cursor-pointer rounded-2xl bg-blue-400"></div>
        <div className="w-50 h-40 cursor-pointer rounded-2xl bg-green-400"></div>
      </div> */}

      <div className="flex gap-8 m-8">
        <Link href="case-study-3">
          <motion.div
            layoutId="Third"
            className="w-50 h-40 cursor-pointer rounded-2xl bg-indigo-500"
          ></motion.div>
        </Link>
        <div className="w-50 h-40 cursor-pointer rounded-2xl bg-blue-400"></div>
        <div className="w-50 h-40 cursor-pointer rounded-2xl bg-green-400"></div>
      </div>

      {/* <div className="flex gap-16">
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
      </div> */}
    </div>
  );
}
