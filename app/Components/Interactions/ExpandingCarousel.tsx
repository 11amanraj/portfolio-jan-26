'use client'

import { useRef } from "react"
import { motion, animate } from "framer-motion"

const EachCard = ({ title, onClick }: { title: string, onClick: (el: HTMLDivElement) => void }) => {
    return (
        <div onClick={(e) => onClick(e.currentTarget)} className='bg-black text-white min-w-50 p-4 rounded-md h-40 cursor-pointer'>{title}</div>
    )
}

const ExpandingCarousel = () => {
    const cards = [
        { title: "Card #1" },
        { title: "Card #2" },
        { title: "Card #3" },
        { title: "Card #4" },
    ]

    const containerRef = useRef<HTMLDivElement>(null);

    const selectHandler = (el: HTMLDivElement) => {
        if (!containerRef.current) return

        const container = containerRef.current

        const cardOffsetLeft = el.offsetLeft
        const currentScroll = container.scrollLeft

        // Get computed padding-left of container
        const styles = window.getComputedStyle(container)
        const paddingLeft = parseFloat(styles.paddingLeft)

        const targetScroll = cardOffsetLeft - paddingLeft

        animate(currentScroll, targetScroll, {
            duration: 0.6,
            ease: "easeInOut",
            onUpdate: (latest) => {
                container.scrollLeft = latest
            },
        })
    }

    return (
        <div className="bg-blue-200 w-screen h-screen text-black p-4 flex items-center">
            <div ref={containerRef} className="bg-white w-full overflow-x-auto rounded-md p-4">
                <div className="flex gap-2 w-max">
                    {cards.map((card, i) => (
                        <EachCard onClick={selectHandler} key={i} title={card.title} />
                    ))}
                    {cards.map((card, i) => (
                        <EachCard onClick={selectHandler} key={`duplicate-${i}`} title={card.title} />
                    ))}
                </div>
            </div>
        </div>
    )
}

export default ExpandingCarousel