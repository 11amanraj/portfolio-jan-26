'use client'

import React from 'react'
import { motion } from 'motion/react'
import { useSearchParams } from "next/navigation";

const page = () => {
    const params = useSearchParams()
    const id = params.get("id")

    return (
        <div className='relative min-h-screen'>
            <motion.div
                layoutId='Third'
                transition={{
                    duration: 0.5
                }}
                className='relative top-0 left-0 w-screen h-[50vh] bg-indigo-500'
            />
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5, duration: 0.5 }}
            >
                <p>Is this working?</p>
            </motion.div>
        </div>
    )
}

export default page