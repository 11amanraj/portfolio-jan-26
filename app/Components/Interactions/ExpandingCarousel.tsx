'use client'

import { motion } from "framer-motion"
import { useState } from "react"

const baseCards = [
    { title: "Card #1" },
    { title: "Card #2" },
    { title: "Card #3" },
    { title: "Card #4" },
]

const ExpandingCarousel = () => {
    const [cards, setCards] = useState(baseCards)

    const handleClick = (index: number) => {
        const updated = [
            ...cards.slice(index),
            ...cards.slice(0, index),
        ]

        setCards(updated)
    }

    return (
        <div className="w-screen min-h-screen bg-blue-200 p-8">
            <motion.div
                layout
                className="bg-white p-8 rounded-xl flex gap-4 items-start"
            >
                {cards.map((card, index) => (
                    <motion.div
                        key={card.title}
                        layout
                        onClick={() => handleClick(index)}
                        transition={{ type: "spring", stiffness: 260, damping: 25 }}
                        className={`bg-black text-white rounded-md flex items-center justify-center cursor-pointer
              ${index === 0
                                ? "w-100 h-100 text-xl"
                                : "w-37.5 h-30 text-sm"
                            }
            `}
                    >
                        {card.title}
                    </motion.div>
                ))}
            </motion.div>
        </div>
    )
}

export default ExpandingCarousel