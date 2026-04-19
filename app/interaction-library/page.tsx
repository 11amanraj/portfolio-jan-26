export default function Page() {
    return (
        <div className="bg-green-500 h-screen w-screen flex flex-col 2xl:flex-row">
            <div className="w-26 shrink-10 hidden 2xl:block"></div>

            <div className="flex-1 shrink 2xl:min-w-368 bg-black relative font-heading flex gap-12 flex-col py-12 pl-8 pr-8 2xl:pl-16 2xl:pr-0">
                <div
                    className="text-white font-extralight text-[160px] leading-none select-none pointer-events-none"
                >
                    01
                </div>

                <div className="flex-1 grid gap-3"
                    style={{ gridTemplateColumns: '14fr 11fr 10fr', gridTemplateRows: '6fr 7fr' }}>

                    <div className="bg-white rounded-sm row-span-2"></div>

                    <div className="bg-white rounded-sm"></div>

                    <div className="bg-white rounded-sm"></div>

                    <div className="bg-white rounded-sm col-span-2"></div>
                </div>

            </div>

            <div className="bg-blue-400 w-full 2xl:w-31 relative flex items-center justify-end 2xl:items-end 2xl:justify-center py-12 min-w-16 h-20 2xl:h-auto pr-8 2xl:pr-0">
                <span
                    className="text-[#535353] font-bold uppercase text-2xl tracking-[2.64px] whitespace-nowrap label-writing-mode"
                >
                    Interaction Library
                </span>
            </div>
        </div>
    )
}