// import Image from "next/image"

// const PHONE = "/micro-interactions/previews/left-phone.png"
// const MODAL = "/micro-interactions/previews/top-left-modal.png"
// const CART = "/micro-interactions/previews/top-right-cart.png"
// const SCORERS = "/micro-interactions/previews/bottom-scorers.png"

export default function Page() {
    return (
        <div
            className="w-screen h-screen bg-black overflow-hidden relative font-heading flex gap-12 flex-col pr-31 py-12 pl-42"
        >
            <div
                className="text-white font-extralight text-[160px] leading-none select-none pointer-events-none"
            >
                01
            </div>

            <div className="bg-amber-500 flex-1">

            </div>

            {/* Card grid — fills between watermark and bottom gutter */}

            {/* "MICRO INTERACTIONS" vertical label — bottom-right */}

            <div
                className="absolute flex items-center justify-center w-31"
                style={{
                    right: 0,
                    bottom: 48,
                }}
            >
                <span
                    className="text-[#535353] font-bold uppercase text-2xl tracking-[2.64px] whitespace-nowrap"
                    style={{ writingMode: 'vertical-rl' }}
                >
                    Interaction Library
                </span>
            </div>

            {/* <div
                className="absolute flex items-center justify-center font-bold text-2xl text-[#535353]"
                style={{
                    right: 48,
                    bottom: 48,
                    writingMode: 'vertical-rl'
                }}
            >
                Interaction Library
                <span
                    className="text-[#535353] font-bold uppercase text-2xl tracking-[2.64px] whitespace-nowrap"
                    style={{ writingMode: 'vertical-rl' }}
                >
                    Interaction Library
                </span>
            </div> */}
        </div>
    )
}
