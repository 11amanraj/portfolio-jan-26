'use client'

import Link from "next/link";
import { motion } from "motion/react"
import CardSwitcher from "./Components/CaseStudy/CardSwitcher";
import { CardDetail } from "./types/casestudy";

export default function Home() {
  const card_details: CardDetail[] = [
    { id: 0, description: "Description for Case Study 1", img: "/case-study-1/images/research-summary-1.png" },
    { id: 1, description: "Description for Case Study 2", img: "/case-study-1/images/research-summary-1.png" },
    { id: 2, description: "Description for Case Study 3", img: "/case-study-1/images/research-summary-1.png" },
    { id: 3, description: "Description for Case Study 4", img: "/case-study-1/images/research-summary-1.png" }
  ]

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

      <CardSwitcher title="User Responses (highlights)" card_details={card_details} />
    </div>
  );
}
