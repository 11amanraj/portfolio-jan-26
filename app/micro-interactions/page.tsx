import Image from 'next/image'

const page = () => {
    return (
        <div className="w-screen h-screen bg-white relative overflow-hidden p-16">

            {/* Card grid */}
            <div className="flex gap-4 h-full">

                {/* Left — tall phone card */}
                <div className="w-[688px] shrink-0 bg-[#060606] rounded relative overflow-hidden">
                    <Image
                        src="/micro-interactions/previews/left-phone.png"
                        alt="Phone interaction"
                        fill
                        className="object-contain"
                    />
                </div>

                {/* Right column */}
                <div className="flex-1 flex flex-col gap-4">

                    {/* Top row */}
                    <div className="flex gap-4 h-[480px] shrink-0">

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
                        <div className="w-[480px] shrink-0 bg-[#060606] rounded relative overflow-hidden">
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
                className="absolute -bottom-12 left-16 font-bold leading-none select-none pointer-events-none"
                style={{
                    fontFamily: 'var(--font-poppins)',
                    fontSize: '260px',
                    color: '#D5D3D3',
                }}
            >
                01
            </div>

            {/* Vertical label — right edge */}
            <div
                className="absolute bottom-16 right-5 font-heading tracking-widest text-2xl font-bold uppercase"
                style={{ color: '#D5D3D3', writingMode: 'vertical-rl' }}
            >
                MICRO INTERACTIONS
            </div>

        </div>
    )
}

export default page