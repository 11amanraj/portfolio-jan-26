"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";

type Item = {
    id: number;
    title: string;
    brand: string;
    price: string;
    originalPrice: string;
    discount: string;
    badge: string;
};

const items: Item[] = [
    { id: 1, title: "Silk Wrap Midi Dress", brand: "MAISON ÉDITH", price: "₹4,299", originalPrice: "₹6,499", discount: "34% off", badge: "SALE" },
    { id: 2, title: "Linen Blazer Coat", brand: "ATELIER NOV", price: "₹5,199", originalPrice: "₹7,999", discount: "35% off", badge: "NEW" },
    { id: 3, title: "Cashmere Knit Top", brand: "MAISON ÉDITH", price: "₹3,499", originalPrice: "₹4,999", discount: "30% off", badge: "SALE" },
];

const EXPAND_DURATION = 0.35;

const ExpandingCard = () => {
    const [active, setActive] = useState<Item | null>(null);

    return (
        <div className="p-20">

            {/* GRID */}
            <div className="flex gap-6">
                {items.map((item) => (
                    <motion.div
                        key={item.id}
                        layoutId={`card-${item.id}`}
                        onClick={() => setActive(item)}
                        className="w-[280px] bg-white rounded-[16px] shadow-[0px_4px_20px_0px_rgba(0,0,0,0.1)] cursor-pointer overflow-hidden"
                        transition={{
                            duration: EXPAND_DURATION,
                            ease: [0.22, 1, 0.36, 1],
                        }}
                    >
                        {/* Image BG */}
                        <div className="w-full h-[210px] bg-[#f0ede8] relative flex items-center justify-center">
                            <div className="w-[72px] h-[72px] bg-[#d4c9ba] rounded-[8px]" />

                            {/* Sale badge */}
                            <div className="absolute top-[12px] left-[12px] bg-[#1a1a1a] rounded-[12px] px-[10px] h-[24px] flex items-center">
                                <span className="text-white text-[10px] font-bold tracking-wider">{item.badge}</span>
                            </div>

                            {/* Wishlist button */}
                            <div className="absolute top-[12px] right-[12px] w-[36px] h-[36px] bg-white rounded-full shadow-[0px_2px_8px_0px_rgba(0,0,0,0.08)] flex items-center justify-center">
                                <span className="text-[#e8a598] text-[14px]">♥</span>
                            </div>
                        </div>

                        {/* Card Content */}
                        <div className="px-[16px] pt-[12px] pb-[14px] flex flex-col gap-[5px]">
                            <p className="text-[#9a8e84] text-[9px] font-medium tracking-[1.5px] uppercase">{item.brand}</p>
                            <p className="text-[#1a1a1a] text-[15px] font-semibold">{item.title}</p>

                            {/* Stars */}
                            <div className="flex items-center gap-[2px]">
                                <span className="text-[#e8a050] text-[12px]">★</span>
                                <span className="text-[#e8a050] text-[12px]">★</span>
                                <span className="text-[#e8a050] text-[12px]">★</span>
                                <span className="text-[#e8a050] text-[12px]">★</span>
                                <span className="text-[#d0c8c0] text-[12px]">☆</span>
                                <span className="text-[#9a8e84] text-[11px] ml-1">4.2 (128)</span>
                            </div>

                            {/* Price */}
                            <div className="flex items-center gap-[8px]">
                                <span className="text-[#1a1a1a] text-[17px] font-bold">{item.price}</span>
                                <span className="text-[#b0a8a0] text-[12px] line-through">{item.originalPrice}</span>
                                <span className="text-[#2d8a6e] text-[11px] font-medium">{item.discount}</span>
                            </div>

                            {/* Swatches */}
                            <div className="flex items-center gap-[6px]">
                                <div className="w-[16px] h-[16px] rounded-[8px] bg-[#c8b8a8] border-2 border-[#1a1a1a]" />
                                <div className="w-[16px] h-[16px] rounded-[8px] bg-[#1a1a1a]" />
                                <div className="w-[16px] h-[16px] rounded-[8px] bg-[#8b6e6e]" />
                                <div className="w-[16px] h-[16px] rounded-[8px] bg-[#4a6b8a]" />
                                <span className="text-[#9a8e84] text-[11px]">+2</span>
                            </div>
                        </div>
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
                                className="w-[720px] h-[600px] bg-white rounded-[24px] shadow-[0px_16px_60px_0px_rgba(0,0,0,0.18)] overflow-hidden pointer-events-auto flex"
                                transition={{
                                    duration: EXPAND_DURATION,
                                    ease: [0.22, 1, 0.36, 1],
                                }}
                            >
                                {/* Left Panel — beige image area */}
                                <div className="w-[340px] h-full bg-[#f5f1ec] relative flex-shrink-0 overflow-hidden">
                                    {/* Main product image */}
                                    <div className="absolute left-[20px] top-[20px] w-[300px] h-[380px] bg-[#e8e0d4] rounded-[16px] flex items-center justify-center">
                                        <div className="w-[60px] h-[60px] bg-[#cec4b8] rounded-[6px]" />
                                    </div>

                                    {/* Thumbnails */}
                                    <div className="absolute top-[418px] left-[20px] flex gap-[8px]">
                                        <div className="w-[62px] h-[62px] bg-[#e8e0d4] border-2 border-[#1a1a1a] rounded-[10px]" />
                                        <div className="w-[62px] h-[62px] bg-[#d8d0c4] rounded-[10px]" />
                                        <div className="w-[62px] h-[62px] bg-[#c8c0b4] rounded-[10px]" />
                                        <div className="w-[62px] h-[62px] bg-[#b8b0a4] rounded-[10px]" />
                                    </div>

                                    {/* Hover to zoom */}
                                    <p className="absolute top-[493px] left-[20px] text-[#9a8e84] text-[10px]">Hover to zoom</p>

                                    {/* NEW ARRIVAL badge */}
                                    <div className="absolute bottom-[26px] left-[20px] bg-[#1a1a1a] rounded-[13px] px-[10px] h-[26px] flex items-center">
                                        <span className="text-white text-[9px] font-bold tracking-wider">NEW ARRIVAL</span>
                                    </div>

                                    {/* Wishlist button */}
                                    <div className="absolute bottom-[26px] right-[20px] w-[36px] h-[36px] bg-white rounded-full shadow-[0px_2px_8px_0px_rgba(0,0,0,0.06)] flex items-center justify-center">
                                        <span className="text-[#e8a598] text-[14px]">♥</span>
                                    </div>
                                </div>

                                {/* Right Panel — product details */}
                                <div className="flex-1 h-full bg-white relative overflow-hidden">

                                    {/* Content fades in after expand */}
                                    <motion.div
                                        initial={{ opacity: 0, y: 10 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        exit={{ opacity: 0 }}
                                        transition={{
                                            delay: EXPAND_DURATION,
                                            duration: 0.2,
                                        }}
                                        className="h-full overflow-y-auto px-[32px] pt-[32px] pb-[24px] flex flex-col"
                                    >
                                        {/* Close button */}
                                        <button
                                            onClick={() => setActive(null)}
                                            className="absolute top-[16px] right-[16px] w-[32px] h-[32px] bg-[#f5f1ec] rounded-[16px] flex items-center justify-center text-[#1a1a1a] text-[18px] leading-none cursor-pointer"
                                        >
                                            ×
                                        </button>

                                        {/* Brand */}
                                        <p className="text-[#9a8e84] text-[10px] font-medium tracking-[1.5px] uppercase">{active.brand}</p>

                                        {/* Title */}
                                        <p className="text-[#1a1a1a] text-[22px] font-semibold mt-[6px]">{active.title}</p>

                                        {/* Stars */}
                                        <div className="flex items-center gap-[2px] mt-[8px]">
                                            <span className="text-[#e8a050] text-[13px]">★★★★</span>
                                            <span className="text-[#d0c8c0] text-[13px]">☆</span>
                                            <span className="text-[#9a8e84] text-[12px] ml-2">4.2  ·  128 reviews</span>
                                        </div>

                                        {/* Divider */}
                                        <div className="h-px bg-[#f0ede8] mt-[16px] mb-[16px]" />

                                        {/* Price */}
                                        <div className="flex items-center gap-[8px]">
                                            <span className="text-[#1a1a1a] text-[24px] font-bold">{active.price}</span>
                                            <span className="text-[#b0a8a0] text-[14px] line-through">{active.originalPrice}</span>
                                            <div className="bg-[#eaf6f1] rounded-[11px] px-[8px] py-[3px]">
                                                <span className="text-[#2d8a6e] text-[11px] font-medium">{active.discount}</span>
                                            </div>
                                        </div>

                                        {/* Color */}
                                        <p className="text-[#1a1a1a] text-[12px] font-medium mt-[16px] mb-[8px]">Color — Ivory Sand</p>
                                        <div className="flex items-center gap-[8px]">
                                            <div className="w-[28px] h-[28px] rounded-[14px] bg-[#c8b8a8] border-2 border-[#1a1a1a]" />
                                            <div className="w-[28px] h-[28px] rounded-[14px] bg-[#1a1a1a]" />
                                            <div className="w-[28px] h-[28px] rounded-[14px] bg-[#8b6e6e]" />
                                            <div className="w-[28px] h-[28px] rounded-[14px] bg-[#4a6b8a]" />
                                            <div className="w-[28px] h-[28px] rounded-[14px] bg-[#6b8a6e]" />
                                        </div>

                                        {/* Size */}
                                        <p className="text-[#1a1a1a] text-[12px] font-medium mt-[16px] mb-[8px]">Size</p>
                                        <div className="flex items-center gap-[8px]">
                                            {["XS", "S", "M", "L", "XL"].map((size) => (
                                                <div
                                                    key={size}
                                                    className={`w-[44px] h-[36px] rounded-[8px] flex items-center justify-center text-[12px] ${
                                                        size === "S"
                                                            ? "bg-[#1a1a1a] text-white font-semibold"
                                                            : "bg-[#f5f1ec] text-[#1a1a1a] font-medium"
                                                    }`}
                                                >
                                                    {size}
                                                </div>
                                            ))}
                                        </div>

                                        <p className="text-[#9a8e84] text-[11px] mt-[8px]">Size Guide →</p>

                                        {/* About */}
                                        <p className="text-[#1a1a1a] text-[12px] font-semibold mt-[16px] mb-[6px]">About this piece</p>
                                        <p className="text-[#6a6460] text-[12px] leading-[1.6]">
                                            Crafted from 100% mulberry silk. Wrap-style midi length, V-neckline. Hand-finished seams. Dry clean only.
                                        </p>

                                        {/* Delivery */}
                                        <p className="text-[#6a6460] text-[11px] mt-[12px]">🚚  Free delivery · In stock · Ships in 2 days</p>

                                        {/* CTA buttons */}
                                        <button className="mt-[16px] w-full h-[52px] bg-[#1a1a1a] text-white text-[14px] font-semibold rounded-[14px] cursor-pointer">
                                            Add to Cart  —  {active.price}
                                        </button>
                                        <button className="mt-[8px] w-full h-[44px] bg-[#f5f1ec] text-[#1a1a1a] text-[13px] font-medium rounded-[14px] cursor-pointer">
                                            ♥  Save to Wishlist
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
};

export default ExpandingCard;
