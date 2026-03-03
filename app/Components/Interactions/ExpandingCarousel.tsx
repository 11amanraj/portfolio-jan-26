'use client'

import { motion } from "framer-motion"

const EachCard = ({ title }: { title: string }) => {
    return (
        <div className='bg-black text-white min-w-[200px] p-4 rounded-md h-40 cursor-pointer'>{title}</div>
    )
}

const ExpandingCarousel = () => {
    const cards = [
        { title: "Card #1" },
        { title: "Card #2" },
        { title: "Card #3" },
        { title: "Card #4" },
    ]

    return (
        <div className="bg-blue-200 w-screen h-screen text-black p-4 flex items-center">
            <div className="bg-white w-full overflow-hidden rounded-md p-4">
                <motion.div
                    className="flex gap-2 w-max"
                    animate={{ x: ["0%", "-50%"] }}
                    transition={{
                        ease: "linear",
                        duration: 12,
                        repeat: Infinity,
                    }}
                >
                    {cards.map((card, i) => (
                        <EachCard key={i} title={card.title} />
                    ))}
                    {cards.map((card, i) => (
                        <EachCard key={`duplicate-${i}`} title={card.title} />
                    ))}
                </motion.div>
            </div>
        </div>
    )
}

export default ExpandingCarousel