'use client'

import { useState } from 'react'
import SectionDivider from './SectionDivider'

const CollapsibleSection = ({ title, collapsed, expanded }: { title: string, collapsed: React.ReactNode, expanded: React.ReactNode }) => {
    const [isExpanded, setIsExpanded] = useState<boolean>(false)

    return (
        <>
            <SectionDivider />
            <section className='flex flex-col gap-4'>
                <div className='flex justify-between'>
                    <h3 className='text-2xl text-[#6E737D]'>{isExpanded ? `${title.toUpperCase()}` : `${title.toUpperCase()} - SUMMARY`}</h3>
                    <button onClick={() => setIsExpanded(prev => !prev)} className='flex gap-2 text-2xl cursor-pointer'>
                        <p>{isExpanded ? "Collapse" : "Expand"}</p>
                        <p>{isExpanded ? "-" : "+"}</p>
                    </button>
                </div>
                <>
                    {isExpanded ? expanded : collapsed}
                </>
            </section>
        </>
    )
}

export default CollapsibleSection