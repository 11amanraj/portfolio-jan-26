'use client'

import React from 'react'
import { motion } from 'motion/react'

const SectionWrapper = ({ children }: { children: React.ReactNode }) => {
    return (
        <>
            <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 1 }}
                className='my-8 h-px w-full bg-[#414651]'
            />
            <motion.section
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 1 }}
                className='flex flex-col gap-4'
            >{children}</motion.section>
        </>
    )
}

export default SectionWrapper