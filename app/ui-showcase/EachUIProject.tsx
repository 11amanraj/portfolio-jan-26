import Image from 'next/image'

type EachUIProjectProps = {
    slideNumber: string
    projectType: string
    projectName: string
    description: string
    typographyLabel: string
    colors: {
        bg: string
        textPrimary: string
        textMuted: string
        textLabel: string
        showcaseText: string
        dots: string[]
    }
}

export default function EachUIProject({
    slideNumber,
    projectType,
    projectName,
    description,
    typographyLabel,
    colors,
}: EachUIProjectProps) {
    return (
        <>
            {/* ── Mobile layout (< 1024px) ── */}
            <div
                className="lg:hidden w-screen h-screen flex flex-col relative snap-start overflow-hidden shrink-0"
                style={{ backgroundColor: colors.bg }}
            >
                {/* Top text */}
                <div className="px-7 pt-12 flex flex-col gap-2">
                    <span
                        className="text-base font-medium uppercase tracking-widest font-heading"
                        style={{ color: colors.textLabel }}
                    >
                        {projectType}
                    </span>
                    <h1
                        className="text-[40px] font-semibold leading-none font-heading"
                        style={{ color: colors.textPrimary }}
                    >
                        {projectName}
                    </h1>
                    <p
                        className="text-base font-medium font-heading"
                        style={{ color: colors.textMuted }}
                    >
                        {description}
                    </p>
                </div>

                {/* Mockup image */}
                <div className="flex-1 relative my-6">
                    <Image
                        src="/ui-showcase/screen.png"
                        alt={`${projectName} app screens`}
                        fill
                        className="object-contain"
                    />
                </div>

                {/* Color system + Typography */}
                <div className="px-7 pb-16 flex flex-col gap-6">
                    <div className="flex flex-col gap-2">
                        <span
                            className="text-xs font-bold uppercase tracking-widest font-heading"
                            style={{ color: colors.textLabel }}
                        >
                            Color System
                        </span>
                        <div className="flex gap-2">
                            {colors.dots.map((dot: string, j: number) => (
                                <div key={j} className="w-6 h-6 rounded-full" style={{ backgroundColor: dot }} />
                            ))}
                        </div>
                    </div>
                    <div className="flex flex-col gap-2">
                        <span
                            className="text-xs font-bold uppercase tracking-widest font-heading"
                            style={{ color: colors.textLabel }}
                        >
                            Typography
                        </span>
                        <div className="flex items-baseline gap-2">
                            <span
                                className="text-[24px] font-normal leading-none"
                                style={{ fontFamily: 'var(--font-poppins)', color: colors.textPrimary }}
                            >
                                Aa
                            </span>
                            <span className="text-xs" style={{ color: colors.textMuted }}>
                                {typographyLabel}
                            </span>
                        </div>
                    </div>
                </div>

                {/* UI SHOWCASE — vertical right edge text */}
                <div
                    className="absolute bottom-8 right-3 font-heading tracking-widest text-xs font-bold uppercase"
                    style={{ color: colors.showcaseText, writingMode: 'vertical-rl' }}
                >
                    UI SHOWCASE
                </div>

                {/* Slide number watermark */}
                <div
                    className="absolute -bottom-4 -left-3 font-bold leading-none select-none pointer-events-none"
                    style={{
                        fontFamily: 'var(--font-poppins)',
                        fontSize: '160px',
                        color: colors.textPrimary,
                        opacity: 0.06,
                    }}
                >
                    {slideNumber}
                </div>
            </div>

            {/* ── Desktop layout (≥ 1024px) ── */}
            <div
                className="hidden lg:flex w-screen h-screen snap-start overflow-hidden shrink-0 relative"
                style={{ backgroundColor: colors.bg }}
            >
                {/* Left Panel */}
                <div
                    className="w-145 h-full flex flex-col pt-32 relative shrink-0"
                    style={{ paddingLeft: 'clamp(40px, calc((100vw - 1536px) * 0.234375 + 40px), 130px)' }}
                >
                    <div className="flex flex-col gap-30">
                        <div className="flex flex-col gap-4">
                            <span
                                className="text-[32px] font-medium uppercase font-heading"
                                style={{ color: colors.textLabel }}
                            >
                                {projectType}
                            </span>
                            <h1
                                className="text-[80px] font-semibold leading-none font-heading"
                                style={{ color: colors.textPrimary }}
                            >
                                {projectName}
                            </h1>
                            <p
                                className="text-[32px] max-w-114 font-heading font-medium"
                                style={{ color: colors.textMuted }}
                            >
                                {description}
                            </p>
                        </div>

                        <div className="flex flex-col gap-12">
                            <div className="flex flex-col gap-1">
                                <span
                                    className="text-2xl font-heading font-bold uppercase tracking-widest"
                                    style={{ color: colors.textLabel }}
                                >
                                    Color System
                                </span>
                                <div className="flex gap-3 mt-4">
                                    {colors.dots.map((dot: string, j: number) => (
                                        <div key={j} className="w-10 h-10 rounded-full" style={{ backgroundColor: dot }} />
                                    ))}
                                </div>
                            </div>

                            <div className="flex flex-col gap-1">
                                <span
                                    className="text-2xl font-heading font-bold uppercase tracking-widest"
                                    style={{ color: colors.textLabel }}
                                >
                                    Typography
                                </span>
                                <div className="flex items-baseline gap-4 mt-3">
                                    <span
                                        className="text-[52px] font-normal leading-none"
                                        style={{ fontFamily: 'var(--font-poppins)', color: colors.textPrimary }}
                                    >
                                        Aa
                                    </span>
                                    <span className="text-[15px]" style={{ color: colors.textMuted }}>
                                        {typographyLabel}
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
                            color: colors.textPrimary,
                            opacity: 0.06,
                        }}
                    >
                        {slideNumber}
                    </div>
                </div>

                {/* Right Panel — mockup image */}
                <div className="flex-1 h-full flex items-center justify-center p-32 2xl:p-16">
                    <div className="relative w-full h-full">
                        <Image
                            src="/ui-showcase/screen.png"
                            alt={`${projectName} app screens`}
                            fill
                            className="object-contain"
                        />
                    </div>
                </div>

                {/* UI SHOWCASE — vertical right edge text */}
                <div
                    className="absolute bottom-30 right-5 font-heading tracking-widest text-2xl font-bold uppercase"
                    style={{ color: colors.showcaseText, writingMode: 'vertical-rl' }}
                >
                    UI SHOWCASE
                </div>
            </div>
        </>
    )
}