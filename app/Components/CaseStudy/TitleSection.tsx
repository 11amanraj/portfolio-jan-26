'use client'

import { motion } from "motion/react"

const TitleSection = () => {
    return (
        <motion.section
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.5 }}
            className='pt-12 flex flex-col gap-4'
        >
            <h2 className='text-4xl'>Case Study Title</h2>
            <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident.
            </p>
            <div className='flex justify-between flex-col gap-4 lg:flex-row'>
                <div className='flex flex-col'>
                    <div className='flex gap-2'>
                        <div className='bg-blue-500 w-4 h-4'></div>
                        <div>Timeline</div>
                    </div>
                    <div>September 2024-December 2024</div>
                </div>

                <div className='flex flex-col'>
                    <div className='flex gap-2'>
                        <div className='bg-blue-500 w-4 h-4'></div>
                        <div>Timeline</div>
                    </div>
                    <div>September 2024-December 2024</div>
                </div>

                <div className='flex flex-col'>
                    <div className='flex gap-2'>
                        <div className='bg-blue-500 w-4 h-4'></div>
                        <div>Timeline</div>
                    </div>
                    <div>September 2024-December 2024</div>
                </div>
            </div>
        </motion.section>
    )
}

export default TitleSection