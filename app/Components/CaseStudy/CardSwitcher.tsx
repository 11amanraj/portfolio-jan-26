'use client'

import { AnimatePresence, motion } from "motion/react"
import { useState, useEffect } from "react"
import { CardDetail } from "@/app/types/casestudy"

const CardSwitcher = ({ card_details, title }: { card_details: CardDetail[], title: string }) => {
    const [activeCard, setActiveCard] = useState(0)

    useEffect(() => {
        const timer = setTimeout(() => {
            setActiveCard((prev) => (prev + 1) % card_details.length)
        }, 3000)

        return () => clearTimeout(timer)
    }, [activeCard])

    const animationValues = {
        initial: { opacity: 0, x: 700 },
        animate: { opacity: 1, x: 0 },
        exit: { opacity: 1, x: -700 },
        transition: { duration: 0.35 }
    }

    return (
        <div className='w-full h-full p-8 relative overflow-hidden flex flex-col gap-4'>
            <h3 className="text-[32px] font-heading font-bold text-black">{title.toUpperCase()}</h3>
            <AnimatePresence mode="wait">
                <motion.img
                    key={`number-${activeCard}`}
                    {...animationValues}
                    className="absolute w-50 h-50 right-4 bottom-2" src={card_details[activeCard].img}
                    alt={`Case Study ${activeCard + 1}`}
                />
                <motion.p
                    key={`text-${activeCard}`}
                    className="text-black text-2xl italic font-extralight"
                    {...animationValues}
                >
                    {card_details[activeCard].description}
                </motion.p>
            </AnimatePresence>
            <div className="flex gap-3">
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