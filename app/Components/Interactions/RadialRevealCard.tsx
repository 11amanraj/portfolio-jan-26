'use client'

import { useState } from "react"
import { motion, AnimatePresence } from "motion/react"

const RadialRevealCard = () => {
    const [dark, setDark] = useState(false)
    const [animating, setAnimating] = useState(false)

    const nextDark = !dark

    const handleClick = () => {
        setAnimating(true)

        setTimeout(() => {
            setDark(prev => !prev)
            setAnimating(false)
        }, 500)
    }

    return (
        <div className="w-screen h-screen bg-red-700 flex items-center justify-center">
            <div style={{
                background: dark ? "#000" : "#fff",
                borderColor: animating
                    ? (nextDark ? "#fff" : "#000")
                    : (dark ? "#fff" : "#000"),
                color: dark ? "#fff" : "#000"
            }}
                className="relative border-4 overflow-hidden rounded-3xl max-w-100 p-10 flex flex-col gap-8"
            >
                <h2 className="text-3xl font-black  ">Lorem Ipsum</h2>
                <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.</p>
                <button style={{
                    background: dark ? "#000" : "#fff",
                    borderColor: dark ? "#fff" : "#000",
                    color: dark ? "#fff" : "#000"
                }}
                    onClick={handleClick}
                    className="border-2 cursor-pointer py-4 rounded-lg"
                >Click Me</button>

                <AnimatePresence>
                    {animating && (
                        <motion.div
                            initial={{ clipPath: "circle(0px at 90% 10%)" }}
                            animate={{ clipPath: "circle(600px at 90% 10%)" }}
                            exit={{ opacity: 0 }}
                            transition={{ duration: 0.5, ease: "easeInOut" }}
                            className="absolute inset-0"
                        >
                            <div
                                style={{
                                    background: nextDark ? "#000" : "#fff",
                                    color: nextDark ? "#fff" : "#000"
                                }}
                                className="w-full h-full p-10 flex flex-col gap-8"
                            >
                                <h2 className="text-3xl font-black">Lorem Ipsum</h2>
                                <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.</p>
                                <button
                                    style={{
                                        background: nextDark ? "#000" : "#fff",
                                        borderColor: nextDark ? "#fff" : "#000",
                                        color: nextDark ? "#fff" : "#000"
                                    }}
                                    className="border-2 py-4 rounded-lg"
                                >
                                    Click Me
                                </button>

                            </div>
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>
        </div>
    )
}

export default RadialRevealCard