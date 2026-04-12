'use client'

import { useState } from "react"
import { motion, AnimatePresence } from "motion/react"

const BRAND = "#c47a8a"
const BRAND_IMG = "#d4607a"

const getStyles = (cart: boolean) => ({
    bg:               cart ? BRAND       : "#ffffff",
    border:           cart ? "#ffffff"   : "#0d0d0d",
    imgBg:            cart ? BRAND_IMG   : "#f0ede8",
    diagColor:        cart ? BRAND       : "#e0d8d0",
    dividerColor:     cart ? "#ffffff"   : "#0d0d0d",
    badgeBg:          cart ? "#ffffff"   : "#0d0d0d",
    badgeText:        cart ? BRAND       : "#ffffff",
    badgeLabel:       cart ? "✓ IN CART" : "NEW ARRIVAL",
    captionColor:     cart ? "rgba(255,255,255,0.8)"  : "#9a8e84",
    brandColor:       cart ? "rgba(255,255,255,0.65)" : "#9a8e84",
    titleColor:       cart ? "#ffffff"   : "#0d0d0d",
    starFill:         cart ? "#ffffff"   : "#e8a050",
    starEmpty:        cart ? "rgba(255,255,255,0.5)"  : "#d0c8c0",
    ratingColor:      cart ? "rgba(255,255,255,0.65)" : "#9a8e84",
    priceColor:       cart ? "#ffffff"   : "#0d0d0d",
    strikePriceColor: cart ? "rgba(255,255,255,0.65)" : "#b0a8a0",
    discountColor:    cart ? "rgba(255,255,255,0.85)" : "#2d8a6e",
    labelColor:       cart ? "rgba(255,255,255,0.65)" : "#0d0d0d",
    swatchBorder:     cart ? "#ffffff"   : "#0d0d0d",
    sizeSelBg:        cart ? "#ffffff"   : "#0d0d0d",
    sizeSelText:      cart ? BRAND       : "#ffffff",
    sizeOtherBorder:  cart ? "#ffffff"   : "#0d0d0d",
    sizeOtherText:    cart ? "#ffffff"   : "#0d0d0d",
    ctaBg:            cart ? "#ffffff"   : "#0d0d0d",
    ctaText:          cart ? BRAND       : "#ffffff",
    footerColor:      cart ? "rgba(255,255,255,0.7)"  : "#9a8e84",
})

interface CardContentProps {
    cart: boolean
    qty: number
    onAddToCart?: () => void
    onRemove?: () => void
    onIncrement?: () => void
}

const CardContent = ({ cart, qty, onAddToCart, onRemove, onIncrement }: CardContentProps) => {
    const s = getStyles(cart)

    return (
        <div style={{ background: s.bg }}>

            {/* Badge */}
            <div
                className="absolute top-[24px] left-[24px] h-[22px] flex items-center px-[8px]"
                style={{ background: s.badgeBg }}
            >
                <span className="text-[9px] font-bold tracking-[1.2px]" style={{ color: s.badgeText }}>
                    {s.badgeLabel}
                </span>
            </div>

            {/* Product Image */}
            <div
                className="mx-[24px] mt-[60px] h-[160px] relative overflow-hidden"
                style={{ background: s.imgBg }}
            >
                {/* Diagonal lines */}
                <div className="absolute inset-0">
                    <div
                        className="absolute left-[-10%] w-[120%] h-[2px]"
                        style={{ top: "38%", background: s.diagColor, transform: "rotate(15deg)" }}
                    />
                    <div
                        className="absolute left-[-10%] w-[120%] h-[2px]"
                        style={{ top: "60%", background: s.diagColor, transform: "rotate(15deg)" }}
                    />
                </div>
                {/* Caption */}
                <p
                    className="absolute bottom-[12px] left-[8px] text-[9px] font-medium"
                    style={{ color: s.captionColor }}
                >
                    [ SILK WRAP MIDI DRESS ]
                </p>
            </div>

            {/* Divider */}
            <div className="mx-[24px] mt-[14px] h-[3px]" style={{ background: s.dividerColor }} />

            {/* Content */}
            <div className="px-[24px] flex flex-col">

                {/* Brand */}
                <p className="mt-[13px] text-[9px] font-medium tracking-[2px]" style={{ color: s.brandColor }}>
                    MAISON ÉDITH
                </p>

                {/* Title */}
                <div className="mt-[4px] text-[26px] font-bold leading-[30px]" style={{ color: s.titleColor }}>
                    <p>Silk Wrap</p>
                    <p>Midi Dress</p>
                </div>

                {/* Stars */}
                <div className="mt-[8px] flex items-center gap-[2px]">
                    <span className="text-[12px]" style={{ color: s.starFill }}>★★★★</span>
                    <span className="text-[12px]" style={{ color: s.starEmpty }}>☆</span>
                    <span className="ml-[4px] text-[11px]" style={{ color: s.ratingColor }}>4.2  (128)</span>
                </div>

                {/* Price */}
                <div className="mt-[20px] flex items-baseline gap-[8px]">
                    <span className="text-[22px] font-bold" style={{ color: s.priceColor }}>₹4,299</span>
                    <span className="text-[13px] line-through" style={{ color: s.strikePriceColor }}>₹6,499</span>
                </div>
                <p className="mt-[4px] text-[11px] font-semibold" style={{ color: s.discountColor }}>34% off</p>

                {/* Color */}
                <p className="mt-[18px] text-[10px] font-medium" style={{ color: s.labelColor }}>Color — Ivory Sand</p>
                <div className="mt-[8px] flex items-center gap-[7px]">
                    <div className="size-[20px] bg-[#c8b8a8] border-2" style={{ borderColor: s.swatchBorder }} />
                    <div className="size-[20px] bg-[#1a1a1a]" />
                    <div className="size-[20px] bg-[#8b6e6e]" />
                    <div className="size-[20px] bg-[#4a6b8a]" />
                    <div className="size-[20px] bg-[#6b8a6e]" />
                </div>

                {/* Size */}
                <p className="mt-[16px] text-[10px] font-medium" style={{ color: s.labelColor }}>Size — M</p>
                <div className="mt-[8px] flex items-center gap-[8px]">
                    {["XS", "S", "M", "L", "XL"].map((sz) => (
                        <div
                            key={sz}
                            className="w-[36px] h-[28px] flex items-center justify-center border-[1.5px]"
                            style={sz === "M"
                                ? { background: s.sizeSelBg, borderColor: s.sizeSelBg, color: s.sizeSelText }
                                : { background: "black", borderColor: s.sizeOtherBorder, color: s.sizeOtherText }
                            }
                        >
                            <span className={`text-[10px] ${sz === "M" ? "font-bold" : "font-medium"}`}>{sz}</span>
                        </div>
                    ))}
                </div>

                {/* CTA */}
                <div className="mt-[18px]">
                    {!cart ? (
                        <button
                            onClick={onAddToCart}
                            className="w-full h-[48px] flex items-center justify-center cursor-pointer"
                            style={{ background: s.ctaBg }}
                        >
                            <span className="text-[13px] font-bold" style={{ color: s.ctaText }}>Add to Cart</span>
                        </button>
                    ) : (
                        <div
                            className="w-full h-[48px] flex items-center justify-between px-[16px]"
                            style={{ background: s.ctaBg }}
                        >
                            <button
                                onClick={onRemove}
                                className="text-[18px] font-bold cursor-pointer"
                                style={{ color: BRAND }}
                            >
                                −
                            </button>
                            <span className="text-[16px] font-bold" style={{ color: "#0d0d0d" }}>{qty}</span>
                            <button
                                onClick={onIncrement}
                                className="text-[18px] font-bold cursor-pointer"
                                style={{ color: BRAND }}
                            >
                                +
                            </button>
                        </div>
                    )}
                </div>

                {/* Footer */}
                <div className="mt-[12px] mb-[24px] flex flex-col items-center">
                    {!cart ? (
                        <p className="text-[11px] font-medium" style={{ color: s.footerColor }}>♥  Save to Wishlist</p>
                    ) : (
                        <>
                            <p
                                onClick={onRemove}
                                className="text-[11px] font-medium cursor-pointer"
                                style={{ color: s.footerColor }}
                            >
                                × Remove from Cart
                            </p>
                            <div className="h-px w-[106px] mt-[4px]" style={{ background: "rgba(255,255,255,0.7)" }} />
                        </>
                    )}
                </div>

            </div>
        </div>
    )
}

const RadialRevealCard = () => {
    const [inCart, setInCart] = useState(false)
    const [animating, setAnimating] = useState(false)
    const [qty, setQty] = useState(1)

    const nextInCart = !inCart

    const handleAddToCart = () => {
        if (animating) return
        setAnimating(true)
        setTimeout(() => {
            setInCart(true)
            setAnimating(false)
        }, 500)
    }

    const handleRemove = () => {
        if (animating) return
        setAnimating(true)
        setTimeout(() => {
            setInCart(false)
            setQty(1)
            setAnimating(false)
        }, 500)
    }

    const activeBorderColor = animating
        ? (nextInCart ? "#ffffff" : "#0d0d0d")
        : (inCart ? "#ffffff" : "#0d0d0d")

    return (
        <div className="w-screen h-screen bg-red-700 flex items-center justify-center">
            <div
                style={{ borderColor: activeBorderColor }}
                className="relative border-[3px] overflow-hidden w-[300px]"
            >
                <CardContent
                    cart={inCart}
                    qty={qty}
                    onAddToCart={handleAddToCart}
                    onRemove={handleRemove}
                    onIncrement={() => setQty(q => q + 1)}
                />

                <AnimatePresence>
                    {animating && (
                        <motion.div
                            initial={{ clipPath: "circle(0px at 90% 10%)" }}
                            animate={{ clipPath: "circle(600px at 90% 10%)" }}
                            exit={{ opacity: 0 }}
                            transition={{ duration: 0.5, ease: "easeInOut" }}
                            className="absolute inset-0"
                        >
                            <CardContent
                                cart={nextInCart}
                                qty={qty}
                            />
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>
        </div>
    )
}

export default RadialRevealCard
