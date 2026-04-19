export default function Page() {
    return (
        <div className="bg-green-500 h-screen w-screen flex">
            <div className="bg-pink-500 w-26 shrink-10"></div>

            <div className="flex-1 shrink min-w-368 bg-black relative font-heading flex gap-12 flex-col py-12 pl-16">
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

            </div>

            <div className="bg-blue-400 w-31 relative flex items-end justify-center py-12 min-w-16">
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