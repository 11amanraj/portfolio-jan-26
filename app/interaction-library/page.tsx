import ExpandingCard from "../Components/Interactions/ExpandingCard";
import ExpandingCarousel from "../Components/Interactions/ExpandingCarousel";
import HoverShiftButton from "../Components/Interactions/HoverShiftButton";
import RadialRevealCard from "../Components/Interactions/RadialRevealCard";

export default function Page() {
    return (
        <>
            <div className="h-screen w-screen flex flex-col 2xl:flex-row">
                <div className="w-26 shrink-10 hidden 2xl:block"></div>

                <div className="flex-1 shrink 2xl:min-w-368 relative font-heading flex gap-12 flex-col pt-12 pb-0 2xl:pb-12 pl-8 pr-8 2xl:pl-16 2xl:pr-0">
                    <div
                        className="text-white font-extralight text-[48px] sm:text-[160px] leading-none select-none pointer-events-none"
                    >
                        01
                    </div>

                    <div className="flex-1 grid gap-3
                                    grid-cols-2 grid-rows-[5fr_5fr_6fr]
                                    lg:grid-cols-[14fr_11fr_10fr] lg:grid-rows-[6fr_7fr]">

                        <div className="bg-white rounded-sm row-span-2"></div>

                        <div className="bg-white rounded-sm"></div>

                        <div className="bg-white rounded-sm"></div>

                        <div className="bg-white rounded-sm col-span-2"></div>
                    </div>

                </div>

                <div className="w-full 2xl:w-31 relative flex items-center justify-end 2xl:items-end 2xl:justify-center py-2 sm:py-12 min-w-16 h-20 2xl:h-auto pr-8 2xl:pr-0">
                    <span
                        className="text-[#535353] font-bold uppercase text-md sm:text-2xl tracking-[2.64px] whitespace-nowrap label-writing-mode"
                    >
                        Interaction Library
                    </span>
                </div>
            </div>

            <div className="bg-white flex flex-col gap-90 p-16 w-screen">
                <ExpandingCard />
                <ExpandingCarousel />
                <RadialRevealCard />
                <HoverShiftButton />
            </div>
        </>
    )
}