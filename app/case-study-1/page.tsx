'use client'

import Link from 'next/link'
import { motion } from "motion/react"

const page = () => {
    return (
        <div>
            <motion.div
                initial={{
                    width: 100,
                    height: 50,
                    top: 480,
                    left: 240
                }}
                animate={{
                    width: "100vw",
                    height: "75vh",
                    top: 0,
                    left: 0
                }}
                transition={{ duration: 5 }}
                className='bg-red-500 h-50 w-100 cursor-pointer fixed top-120 left-60'
            >
            </motion.div>
            <h1>
                Case Study 1
            </h1>

            <Link href="/">Home Page</Link>
        </div>
    )
}

export default page