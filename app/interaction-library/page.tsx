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

            <div className="flex-1 flex gap-3">

                <div className="bg-white flex-1 max-w-150 rounded-sm">
                </div>

                <div className="flex-1 flex flex-col gap-3">
                    <div className="flex-1 flex gap-3">
                        <div className="bg-white flex-1 rounded-sm">

                        </div>

                        <div className="bg-white flex-1 rounded-sm">

                        </div>
                    </div>

                    <div className="bg-white flex-1 rounded-sm"></div>
                </div>
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
        </div>
    )
}
