'use client'

import { AnimatePresence, motion } from "motion/react"
import { useState } from "react"

const CardSwitcher = () => {
    const card_details = [
        { id: 0, description: "Description for Case Study 1" },
        { id: 1, description: "Description for Case Study 2" },
        { id: 2, description: "Description for Case Study 3" },
        { id: 3, description: "Description for Case Study 4" }
    ]

    const [activeCard, setActiveCard] = useState(0)

    const animationValues = {
        initial: { opacity: 0, x: 700 },
        animate: { opacity: 1, x: 0 },
        exit: { opacity: 1, x: -700 },
        transition: { duration: 0.35 }
    }

    return (
        <div className='w-158 h-73 bg-[#EDE4F3] p-8 relative'>
            <AnimatePresence mode="wait">
                <motion.h2
                    key={`number-${activeCard}`}
                    {...animationValues}
                    className="absolute right-8 bottom-6 text-black text-8xl"
                >
                    {activeCard + 1}
                </motion.h2>
                <motion.p
                    key={`text-${activeCard}`}
                    className="text-black text-2xl italic font-extralight"
                    {...animationValues}
                >
                    {card_details[activeCard].description}
                </motion.p>
            </AnimatePresence>
            <div className="flex gap-3 mt-4">
                {card_details.map((card) => (
                    <div
                        key={card.id}
                        className={`${activeCard === card.id ? 'bg-[#8B5CF6]' : 'bg-[#D9D9D9]'} w-4 h-4 cursor-pointer rounded-lg`}
                        onClick={() => setActiveCard(card.id)}
                    />
                ))}
            </div>
        </div>
    )
}

export default CardSwitcher