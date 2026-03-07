'use client'

import React from 'react'
import { motion } from 'motion/react'

const BentoLayout = ({ bento_content }: { bento_content: React.ReactNode[] }) => {
    const container = {
        hidden: {},
        show: {
            transition: {
                staggerChildren: 0.3,
                delayChildren: 0.4
            }
        }
    }

    const item = {
        hidden: { opacity: 0, y: 20 },
        show: { opacity: 1, y: 0, transition: { duration: 0.4 } }
    }

    return (
        <motion.div
            variants={container}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-100px" }}
            className='w-full flex flex-col gap-4'
        >
            <div className='h-182 w-full flex gap-4'>
                <div className='flex-1 flex flex-col gap-4'>
                    <motion.div variants={item} className='bg-[#EDE4F3] rounded-lg px-8 py-8 flex-1 flex flex-col gap-4 text-black'>
                        {bento_content[0]}
                    </motion.div>

                    <motion.div variants={item} className='bg-[#E1F0F2] rounded-lg px-8 py-8 flex-1 flex flex-col gap-4 text-black'>
                        {bento_content[1]}
                    </motion.div>
                </div>
                <div className='flex-1 flex flex-col gap-4'>
                    <motion.div variants={item} className='bg-[#E1F0F2] rounded-lg px-8 py-8 flex-1 flex flex-col gap-4 text-black'>
                        {bento_content[2]}
                    </motion.div>
                    <motion.div variants={item} className='bg-[#EDE4F3] rounded-lg flex-1'>
                        {bento_content[3]}
                    </motion.div>
                </div>
            </div>
            <div className='flex gap-4'>
                <motion.div variants={item} className='bg-[#E1F0F2] p-8 text-black rounded-lg'>
                    {bento_content[4]}
                </motion.div>
                <motion.div variants={item} className='bg-[#EDE4F3] rounded-lg w-340'>
                    Working
                </motion.div>
            </div>
        </motion.div>
    )
}

export default BentoLayout