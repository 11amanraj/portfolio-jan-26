'use client'

import { useState } from 'react'
import SectionWrapper from './SectionWrapper'

const CollapsibleSection = ({ title, collapsed, expanded }: { title: string, collapsed: React.ReactNode, expanded: React.ReactNode }) => {
    const [isExpanded, setIsExpanded] = useState<boolean>(false)

    return (
        <SectionWrapper>
            <h3 className='text-2xl text-[#6E737D]'>{`${title.toUpperCase()}`}</h3>
            <>
                {collapsed}
                <div className='flex justify-between mt-4'>
                    <p className='text-2xl'>DIVE DEEPER INTO THE RESEARCH PROCESS</p>
                    <button onClick={() => setIsExpanded(prev => !prev)} className='flex gap-2 text-2xl cursor-pointer'>
                        <p>{isExpanded ? "Collapse" : "Expand"}</p>
                        <p>{isExpanded ? "-" : "+"}</p>
                    </button>
                </div>
                {isExpanded && expanded}
            </>
        </SectionWrapper>
    )
}

export default CollapsibleSection