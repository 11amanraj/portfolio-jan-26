"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";

type Item = {
    id: number;
    title: string;
};


const ExpandingCard = () => {
    const [active, setActive] = useState<Item | null>(null);

    const items: Item[] = [
        { id: 1, title: "Mountains" },
        { id: 2, title: "Ocean" },
        { id: 3, title: "Forest" },
    ];

    const EXPAND_DURATION = 0.35;

    return (
        <div className="p-20">

            {/* GRID */}
            <div className="flex gap-6">
                {items.map((item) => (
                    <motion.div
                        key={item.id}
                        layoutId={`card-${item.id}`}
                        onClick={() => setActive(item)}
                        className="w-[220px] p-4 bg-white rounded-xl shadow cursor-pointer"
                        transition={{
                            duration: EXPAND_DURATION,
                            ease: [0.22, 1, 0.36, 1],
                        }}
                    >
                        {/* image */}
                        <div className="w-full h-[120px] bg-indigo-500 rounded-lg" />

                        {/* title */}
                        <h3 className="mt-3 font-semibold">
                            {item.title}
                        </h3>
                    </motion.div>
                ))}
            </div>


            {/* MODAL */}
            <AnimatePresence>
                {active && (
                    <>
                        {/* backdrop */}
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 0.4 }}
                            exit={{ opacity: 0 }}
                            transition={{ duration: 0.2 }}
                            className="fixed inset-0 bg-black z-40"
                            onClick={() => setActive(null)}
                        />

                        {/* modal position wrapper */}
                        <div className="fixed inset-0 flex items-center justify-center z-50 pointer-events-none">

                            {/* expanding card */}
                            <motion.div
                                layoutId={`card-${active.id}`}
                                className="w-[500px] bg-white rounded-2xl shadow-xl overflow-hidden pointer-events-auto"
                                transition={{
                                    duration: EXPAND_DURATION,
                                    ease: [0.22, 1, 0.36, 1],
                                }}
                            >
                                {/* image */}
                                <div className="w-full h-[250px] bg-indigo-500" />

                                {/* existing title */}
                                <div className="p-6">
                                    <h2 className="text-xl font-bold">
                                        {active.title}
                                    </h2>

                                    {/* extra content appears AFTER expansion */}
                                    <motion.div
                                        initial={{ opacity: 0, y: 10 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        exit={{ opacity: 0 }}
                                        transition={{
                                            delay: EXPAND_DURATION,
                                            duration: 0.2,
                                        }}
                                    >
                                        <p className="mt-3 text-gray-600">
                                            This content animates in after the card finishes expanding.
                                        </p>

                                        <button
                                            onClick={() => setActive(null)}
                                            className="mt-4 px-4 py-2 bg-indigo-600 text-white rounded-lg"
                                        >
                                            Close
                                        </button>
                                    </motion.div>

                                </div>

                            </motion.div>

                        </div>
                    </>
                )}
            </AnimatePresence>

        </div>
    );
}

export default ExpandingCard