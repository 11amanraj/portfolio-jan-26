export default function Page() {
    return (
        <div className="h-screen w-screen flex flex-col 2xl:flex-row overflow-hidden">

            {/* Left Spacer */}
            <div className="w-26 shrink-0 hidden 2xl:block"></div>

            {/* Main Content */}
            <div className="flex-1 min-h-0 2xl:min-w-368 relative font-heading flex flex-col gap-12 pt-12 pb-0 2xl:pb-12 pl-8 pr-8 2xl:pl-16 2xl:pr-0">

                {/* Heading */}
                <div className="text-white font-extralight text-[48px] sm:text-[160px] leading-none select-none pointer-events-none">
                    01
                </div>

                {/* Grid */}
                <div className="flex-1 min-h-0 grid gap-3
                                grid-cols-2 grid-rows-[5fr_5fr_6fr]
                                lg:grid-cols-[14fr_11fr_10fr] lg:grid-rows-[6fr_7fr]">

                    {/* Card 1 */}
                    <div className="bg-white rounded-sm row-span-2 overflow-hidden min-h-0 flex p-4">
                        <video
                            src="/ui-videos/interaction-1/radial-reveal.mp4"
                            autoPlay
                            loop
                            muted
                            playsInline
                            className="w-full h-full object-contain"
                        />
                    </div>

                    {/* Card 2 */}
                    <div className="bg-white rounded-sm overflow-hidden min-h-0 flex">
                        <video
                            src="/ui-videos/interaction-1/expanding-card.mp4"
                            autoPlay
                            loop
                            muted
                            playsInline
                            className="w-full h-full object-contain"
                        />
                    </div>

                    {/* Card 3 */}
                    <div className="bg-white rounded-sm overflow-hidden min-h-0 flex">
                        <video
                            src="/ui-videos/interaction-1/hover-button.mp4"
                            autoPlay
                            loop
                            muted
                            playsInline
                            className="w-full h-full object-contain"
                        />
                    </div>

                    {/* Card 4 */}
                    <div className="bg-[#080E18] rounded-sm col-span-2 overflow-hidden min-h-0 flex">
                        <video
                            src="/ui-videos/interaction-1/expanding-carousel.mp4"
                            autoPlay
                            loop
                            muted
                            playsInline
                            className="w-full h-full object-contain"
                        />
                    </div>

                </div>
            </div>

            {/* Right Vertical Label */}
            <div className="w-full 2xl:w-31 min-w-16 h-20 2xl:h-auto flex items-center justify-end 2xl:items-end 2xl:justify-center py-2 sm:py-12 pr-8 2xl:pr-0 shrink-0">

                <span
                    className="text-[#535353] font-bold uppercase text-md sm:text-2xl tracking-[2.64px] whitespace-nowrap"
                    style={{ writingMode: "vertical-rl" }}
                >
                    Interaction Library
                </span>

            </div>
        </div>
    );
}