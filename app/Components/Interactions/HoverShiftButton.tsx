'use client'

import { motion } from "framer-motion";

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
                transition={{ duration: 0.35 }}
            >
                <motion.div
                    className='bg-red-600 px-3 py-1 text-black'
                    variants={plusLeft}
                    transition={{ duration: 0.35 }}
                >
                    +
                </motion.div>
            </motion.div>

            <div className='bg-red-600 px-3 py-1 text-black whitespace-nowrap'>
                SEE OUR PRICING
            </div>

            <motion.div
                variants={containerRight}
                className="overflow-hidden flex items-center justify-center"
                transition={{ duration: 0.25 }}
            >
                <motion.div
                    className='bg-red-600 px-3 py-1 text-black'
                    variants={plusRight}
                    transition={{ duration: 0.25 }}
                >
                    +
                </motion.div>
            </motion.div>
        </motion.button>
    );
};

export default HoverShiftButton;