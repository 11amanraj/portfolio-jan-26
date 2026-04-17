import Image from "next/image"

const page = () => {
    return (
        <div
            className="w-screen h-screen relative overflow-hidden p-16"
            style={{
                backgroundColor: '#111111',
                backgroundImage: `
                    radial-gradient(ellipse 60% 50% at 72% -10%, rgba(240, 126, 32, 0.08) 0%, transparent 70%),
                    radial-gradient(ellipse 40% 35% at 88% 92%,  rgba(240, 126, 32, 0.06) 0%, transparent 65%),
                    radial-gradient(ellipse 28% 28% at 46% 30%,  rgba(255, 159, 74, 0.07) 0%, transparent 60%)
                `,
            }}
        >

            {/* Card grid */}
            <div className="flex gap-3 h-full">

                {/* Left — tall phone card */}
                <div className="w-[516px] shrink-0 bg-[#060606] rounded relative overflow-hidden">
                    <Image
                        src="/micro-interactions/previews/left-phone.png"
                        alt="Phone interaction"
                        fill
                        className="object-contain"
                    />
                </div>

                {/* Right column */}
                <div className="flex-1 flex flex-col gap-3">

                    {/* Top row */}
                    <div className="flex gap-3 h-[360px] shrink-0">

                        {/* Top-left — modal */}
                        <div className="flex-1 bg-[#060606] rounded relative overflow-hidden">
                            <Image
                                src="/micro-interactions/previews/top-left-modal.png"
                                alt="Modal interaction"
                                fill
                                className="object-contain"
                            />
                        </div>

                        {/* Top-right — add to cart */}
                        <div className="w-[360px] shrink-0 bg-[#060606] rounded relative overflow-hidden">
                            <Image
                                src="/micro-interactions/previews/top-right-cart.png"
                                alt="Add to cart interaction"
                                fill
                                className="object-contain"
                            />
                        </div>

                    </div>

                    {/* Bottom — scorers */}
                    <div className="flex-1 bg-[#0c1120] rounded relative overflow-hidden">
                        <Image
                            src="/micro-interactions/previews/bottom-scorers.png"
                            alt="Top scorers interaction"
                            fill
                            className="object-contain"
                        />
                    </div>

                </div>
            </div>

            {/* Page number watermark */}
            <div
                className="absolute -bottom-12 left-16 opacity-50 font-bold leading-none select-none pointer-events-none"
                style={{
                    fontFamily: 'var(--font-poppins)',
                    fontSize: '260px',
                    color: '#666666',
                    WebkitTextStroke: '1px #666666',
                }}
            >
                01
            </div>

            {/* Vertical label — right edge */}
            <div
                className="absolute bottom-16 right-5 font-heading tracking-widest text-2xl font-bold uppercase"
                style={{ color: '#666666', writingMode: 'vertical-rl' }}
            >
                INTERACTION LIBRARY
            </div>

        </div>
    )
}

export default page