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
                    duration: 5
                }}
                className='relative top-0 left-0 w-screen h-[50vh] bg-indigo-500'
            />
            <p>Is this working?</p>
        </div>
    )
}

export default page