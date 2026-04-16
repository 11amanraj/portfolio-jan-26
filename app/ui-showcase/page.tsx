import Image from 'next/image'

const slides = [
    {
        slideNumber: '01',
        projectType: 'Mobile App',
        projectName: 'Lumio',
        description: 'A mindful journaling app designed for quiet reflection and daily.',
        typographyLabel: 'Inter — 400/500',
        colors: {
            bg: '#0D0D0D',
            textPrimary: '#FFFFFF',
            textMuted: '#666666',
            textLabel: '#555555',
            showcaseText: '#3a3a3a',
            dots: ['#FFFFFF', '#FFFFFF', '#FFFFFF', '#FFFFFF', '#FFFFFF'],
        },
    },
    {
        slideNumber: '02',
        projectType: 'Mobile App',
        projectName: 'Lumio',
        description: 'A mindful journaling app designed for quiet reflection and daily.',
        typographyLabel: 'Inter — 400/500',
        colors: {
            bg: '#FFFFFF',
            textPrimary: '#000000',
            textMuted: '#888888',
            textLabel: '#999999',
            showcaseText: '#cccccc',
            dots: ['#000000', '#000000', '#000000', '#000000', '#000000'],
        },
    },
]

export default function Page() {
    return (
        <div className="h-screen overflow-y-scroll overflow-x-auto snap-y snap-mandatory">
            {slides.map((slide, i) => (
                <div
                    key={i}
                    className="w-screen h-screen flex relative snap-start overflow-hidden shrink-0"
                    style={{ backgroundColor: slide.colors.bg }}
                >
                    {/* Left Panel */}
                    <div className="w-145 h-full flex flex-col pt-32 pl-32 relative shrink-0">
                        <div className='flex flex-col gap-30'>
                            <div className='flex flex-col gap-4'>
                                {/* Project type */}
                                <span
                                    className="text-[32px] font-medium uppercase font-heading"
                                    style={{ color: slide.colors.textLabel }}
                                >
                                    {slide.projectType}
                                </span>

                                {/* Project name */}
                                <h1
                                    className="text-[80px] font-semibold leading-none font-heading"
                                    style={{ color: slide.colors.textPrimary }}
                                >
                                    {slide.projectName}
                                </h1>

                                {/* Description */}
                                <p
                                    className="text-[32px] max-w-114 font-heading font-medium"
                                    style={{ color: slide.colors.textMuted }}
                                >
                                    {slide.description}
                                </p>
                            </div>

                            <div className='flex flex-col gap-12'>
                                {/* Color System */}
                                <div className='flex flex-col gap-1'>
                                    <span
                                        className="text-2xl font-heading font-bold uppercase tracking-widest"
                                        style={{ color: slide.colors.textLabel }}
                                    >
                                        Color System
                                    </span>
                                    <div className="flex gap-3 mt-4">
                                        {slide.colors.dots.map((dot, j) => (
                                            <div
                                                key={j}
                                                className="w-10 h-10 rounded-full"
                                                style={{ backgroundColor: dot }}
                                            />
                                        ))}
                                    </div>
                                </div>

                                {/* Typography */}
                                <div className='flex flex-col gap-1'>
                                    <span
                                        className="text-2xl font-heading font-bold uppercase tracking-widest"
                                        style={{ color: slide.colors.textLabel }}
                                    >
                                        Typography
                                    </span>
                                    <div className="flex items-baseline gap-4 mt-3">
                                        <span
                                            className="text-[52px] font-normal leading-none"
                                            style={{ fontFamily: 'var(--font-poppins)', color: slide.colors.textPrimary }}
                                        >
                                            Aa
                                        </span>
                                        <span
                                            className="text-[15px]"
                                            style={{ color: slide.colors.textMuted }}
                                        >
                                            {slide.typographyLabel}
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Slide number watermark */}
                        <div
                            className="absolute -bottom-12 left-16 font-bold leading-none select-none pointer-events-none"
                            style={{
                                fontFamily: 'var(--font-poppins)',
                                fontSize: '260px',
                                color: slide.colors.textPrimary,
                                opacity: 0.06,
                                lineHeight: 1,
                            }}
                        >
                            {slide.slideNumber}
                        </div>
                    </div>

                    {/* Right Panel — mockup image */}
                    <div className="outline-1 flex-1 h-full relative p-32">
                        <Image
                            src="/ui-showcase/screen.png"
                            alt={`${slide.projectName} app screens`}
                            fill
                            className="object-contain"
                        />
                    </div>

                    {/* UI SHOWCASE — vertical right edge text */}
                    <div
                        className="absolute right-10 top-1/2 text-[11px] font-medium tracking-[0.4em] uppercase select-none"
                        style={{
                            color: slide.colors.showcaseText,
                            writingMode: 'vertical-rl',
                            transform: 'translateY(-50%) rotate(180deg)',
                        }}
                    >
                        UI SHOWCASE
                    </div>
                </div>
            ))}
        </div>
    )
}