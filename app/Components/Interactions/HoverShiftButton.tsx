'use client'

import { motion, Variants } from "framer-motion";

const PLUS_WIDTH = 36;

const containerLeft = {
    rest: {
        width: 0,
    },
    hover: {
        width: PLUS_WIDTH,
    }
};

const containerRight = {
    rest: {
        width: PLUS_WIDTH,
    },
    hover: {
        width: 0,
    }
};

const plusLeft = {
    rest: {
        scale: 0,
        rotate: -90,
        opacity: 0,
    },
    hover: {
        scale: 1,
        rotate: 0,
        opacity: 1,
    }
};

const plusRight = {
    rest: {
        scale: 1,
        rotate: 0,
        opacity: 1,
    },
    hover: {
        scale: 0,
        rotate: -90,
        opacity: 0,
    }
};

const text = "SEE OUR PRICING";

const container = {
    rest: {},
    hover: {}
};

const letter: Variants = {
    rest: {
        color: "#000000",
    },
    hover: (i: number) => ({
        color: ["#000000", "#ffffff", "#000000"],
        transition: {
            duration: 0.2,
            times: [0, 0.5, 1],
            delay: i * 0.015,
            ease: "easeInOut"
        }
    })
};

const HoverShiftButton = () => {
    return (
        <motion.button
            className='cursor-pointer flex items-center gap-2'
            initial="rest"
            animate="rest"
            whileHover="hover"
        >
            <motion.div
                variants={containerLeft}
                className="overflow-hidden flex items-center justify-center"
                transition={{ duration: 0.35, delay: 0.25 }}
            >
                <motion.div
                    className='bg-red-600 text-black flex-1 text-2xl'
                    variants={plusLeft}
                    transition={{ duration: 0.35, delay: 0.25 }}
                >
                    +
                </motion.div>
            </motion.div>

            <motion.div
                variants={container}
                className="bg-red-600 px-3 py-1 flex whitespace-nowrap"
            >
                {text.split("").map((char, i) => (
                    <motion.span
                        key={i}
                        variants={letter}
                        custom={i}
                        className="inline-block font-semibold"
                    >
                        {char === " " ? "\u00A0" : char}
                    </motion.span>
                ))}
            </motion.div>

            <motion.div
                variants={containerRight}
                className="overflow-hidden flex items-center justify-center"
                transition={{ duration: 0.25, delay: 0.25 }}
            >
                <motion.div
                    className='bg-red-600 text-black flex-1 text-2xl'
                    variants={plusRight}
                    transition={{ duration: 0.25, delay: 0.25 }}
                >
                    +
                </motion.div>
            </motion.div>
        </motion.button>
    );
};

export default HoverShiftButton;