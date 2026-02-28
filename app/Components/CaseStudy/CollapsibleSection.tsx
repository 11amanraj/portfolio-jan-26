'use client'

import { useState } from 'react'
import SectionWrapper from './SectionWrapper'

const CollapsibleSection = ({ title, collapsed, expanded }: { title: string, collapsed: React.ReactNode, expanded: React.ReactNode }) => {
    const [isExpanded, setIsExpanded] = useState<boolean>(false)

    return (
        <SectionWrapper>
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
        </SectionWrapper>
    )
}

export default CollapsibleSection