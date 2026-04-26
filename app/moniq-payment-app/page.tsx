import { ReactNode } from "react"
import NotificationsOff from "@mui/icons-material/NotificationsOff"
import Compare from "@mui/icons-material/Compare"
import Star from "@mui/icons-material/Star"
import History from "@mui/icons-material/History"
import NorthEast from "@mui/icons-material/NorthEast"
import ArrowForward from "@mui/icons-material/ArrowForward"
import NorthEastOutlined from "@mui/icons-material/NorthEastOutlined"

export default function AndroidPrivateSpace() {
    return (
        <div className="bg-[#080808] text-[#f0f0f0] relative overflow-x-hidden">
            {/* Subtle background texture */}
            <div className="absolute inset-x-0 top-136 h-270 overflow-hidden pointer-events-none select-none">
                <div className="w-full h-[118.49%] absolute top-[-9.24%] bg-[#111111]" />
                <div className="absolute inset-0 bg-linear-to-b from-transparent to-[#080808]" />
            </div>

            <div className="relative">
                {/* ── 1. HERO ── */}
                <div className="max-w-350 mx-auto px-6 md:px-12">
                    <div className="flex flex-col lg:flex-row lg:items-end gap-10 pt-20 pb-10 min-h-120 justify-end">
                        <div className="flex-1 flex flex-col gap-4">
                            <div className="inline-flex items-center gap-2 px-3 py-1 bg-white/15 backdrop-blur-sm w-fit">
                                <div className="w-1.25 h-1.25 rounded-full bg-[#3cda64]" />
                                <span className="text-[11.8px] text-[#f0f0f0] uppercase tracking-wider">SHIPPED</span>
                            </div>
                            <h1 className="text-[48px] md:text-[61.6px] leading-none tracking-[-1.28px]">
                                Android<br />Private space
                            </h1>
                        </div>
                        <div className="flex-1">
                            <p className="text-[#8a8a8a] text-[22px] md:text-[30.8px] leading-[1.35]">
                                Protecting millions&apos; sensitive apps and data from prying eyes
                            </p>
                        </div>
                    </div>
                </div>

                {/* ── 2. PROJECT DESCRIPTION ── */}
                <div className="max-w-350 mx-auto px-6 md:px-12 py-12 md:py-16">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 border-t border-[#616161] pt-10">
                        <div className="flex flex-col gap-10">
                            <p className="text-[#f0f0f0] text-[20px] md:text-[27.3px] leading-[1.33]">
                                I led the design of Android Private space – a new privacy protection feature on Android
                                launched at <span className="text-[#3cda64]">Google I/O</span>. Android Private space gives
                                users a separate compartment on their devices for installing apps they wish to keep to themselves.
                            </p>
                            <a href="#" className="inline-flex items-center gap-2 text-[#f0f0f0] text-[14px] uppercase w-fit">
                                <span className="border-b border-[#f0f0f0] pb-0.5">GOOGLE BLOG</span>
                                <NorthEast sx={{ color: "#3cda64", fontSize: 16 }} />
                            </a>
                        </div>
                        <div className="flex flex-col divide-y divide-[#616161]">
                            <MetaRow label="Product" value="Android" />
                            <MetaRow
                                label="Skills"
                                value={["Product design", "Stakeholder management", "Interactive prototyping", "User research & testing"]}
                            />
                            <MetaRow label="My role" value="Design lead" />
                            <MetaRow label="Timeline" value="Q2 2023 - Q2 2024" />
                            <MetaRow label="Team" value="Deepak Mallya, Misa Gareau Rachel Burrows" />
                        </div>
                    </div>
                </div>

                {/* ── 3. QUOTE / PHOTO ── */}
                <div className="w-full overflow-hidden relative h-120 md:h-160">
                    <div className="absolute w-full h-[135.87%] top-[-17.93%] bg-[#1a1a1a]" />
                    <div className="absolute inset-0 flex items-center justify-center px-6">
                        <h2 className="text-white text-[32px] md:text-[64px] text-center leading-none tracking-[-1.28px] max-w-265">
                            Handing someone your phone feel like handing over your whole diary…
                        </h2>
                    </div>
                </div>

                {/* ── 4. PROBLEM ── */}
                <div className="max-w-350 mx-auto px-6 md:px-12 pt-10 pb-32 md:pb-48">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 border-t border-[#616161] pt-10">
                        <div>
                            <h2 className="text-[#f0f0f0] text-[28px] md:text-[48px] leading-[1.2] tracking-[-0.96px]">
                                Problem<br />
                                <span className="text-[#8a8a8a]">Stopping the &apos;Hand-off Anxiety&apos;</span>
                            </h2>
                        </div>
                        <div className="flex flex-col gap-16">
                            <p className="text-[#8a8a8a] text-[15px] leading-[1.4] tracking-[0.15px]">
                                Approximately one out of four users (28%) has unintentionally revealed information they wished
                                to keep private while lending their phones to friends and family. While solutions exist on the
                                market, they often fall short in fully concealing app presence, leaving potential leakage points.
                            </p>
                            <p className="text-[#f0f0f0] text-[18px] md:text-[32px] leading-[1.3]">
                                Recognising this gap, we saw this as a massive opportunity to help users{" "}
                                <span className="text-[#3cda64]">
                                    regain control of what their phone says about them.
                                </span>
                            </p>
                        </div>
                    </div>
                </div>

                {/* ── 5. RESEARCH ── */}
                <div className="max-w-350 mx-auto px-6 md:px-12 pb-32 md:pb-48">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 border-t border-[#616161] pt-10">
                        <div>
                            <h2 className="text-[#f0f0f0] text-[28px] md:text-[48px] leading-[1.2] tracking-[-0.96px]">
                                Research
                            </h2>
                        </div>
                        <div className="flex flex-col gap-8">
                            <p className="text-[#8a8a8a] text-[15px] leading-[1.4] tracking-[0.15px]">
                                Getting individuals to discuss personal matters on their phones proved to be quite challenging.
                                Who would&apos;ve thought, right? In the early stages of the project, we{" "}
                                <span className="text-[#f0f0f0]">interviewed and surveyed over 900 participants</span>{" "}
                                to understand their use-cases and struggles.
                            </p>
                            <div className="flex flex-col gap-2.5">
                                <p className="text-[#3cda64] text-[16px] tracking-[0.32px]">Common painpoints</p>
                                <div className="flex flex-col border-t border-[#616161]">
                                    <PainPoint
                                        label="Not feeling in-control while sharing"
                                        detail="50% of leakages happen through unanticipated app notifications while sharing the phone."
                                    />
                                    <PainPoint
                                        label="Password sharing is common"
                                        detail="Borrower sometimes knows their screen PIN, especially with users' closest friends/family – where consequence of revealing is generally high."
                                    />
                                    <PainPoint
                                        label="Ad-hoc device sharing"
                                        detail="<50% of participants reported that borrowers never ask for their permission to borrow their phones, giving users virtually no time to prepare."
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* ── 6. SOLUTION ── */}
                <div className="max-w-350 mx-auto px-6 md:px-12 pb-16">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 border-t border-[#616161] pt-10">
                        <div>
                            <h2 className="text-[#f0f0f0] text-[28px] md:text-[48px] leading-[1.2] tracking-[-0.96px]">
                                Solution<br />
                                <span className="text-[#8a8a8a]">Not your average app locker</span>
                            </h2>
                        </div>
                        <div className="flex flex-col gap-8">
                            <p className="text-[#8a8a8a] text-[15px] leading-[1.4] tracking-[0.15px]">
                                Android Private Space gives users a separate compartment on their devices for installing apps
                                they wish to keep to themselves so they can feel more in-control and comfortable sharing their
                                phone with others.
                            </p>
                            <div className="flex flex-col">
                                <p className="text-[#8a8a8a] text-[14px] pb-1.5 border-b border-[#616161]">
                                    When private space is locked:
                                </p>
                                <FeatureItem icon={<NotificationsOff sx={{ fontSize: 20 }} />} label="Private notifications are hidden" />
                                <FeatureItem icon={<Compare sx={{ fontSize: 20 }} />} label="Private files and photos are hidden" />
                                <FeatureItem icon={<Star sx={{ fontSize: 20 }} />} label="Private app suggestions are removed" />
                                <FeatureItem
                                    icon={<History sx={{ fontSize: 20 }} />}
                                    label="Separate Google account used to protect download history etc"
                                />
                            </div>
                        </div>
                    </div>
                </div>

                {/* ── 7. PHOTO SHOWCASE ── */}
                <div className="max-w-350 mx-auto px-6 md:px-12 py-8">
                    <div className="bg-[#131313] h-100 md:h-169 overflow-hidden relative">
                        {/* hand image placeholder */}
                        <div className="absolute right-0 bottom-0 h-[80%] md:h-157.75 w-[45%] md:w-156 bg-[#1e1e1e]" />
                        {/* phone mockup */}
                        <div className="absolute top-7.5 md:top-15 left-1/2 -translate-x-1/2 h-67.5 md:h-134.75 w-32.5 md:w-64.25">
                            <div className="absolute inset-0 bg-[#222222]" />
                            <div className="absolute inset-1.25 md:inset-2.5 rounded-2.5 md:rounded-4.75 overflow-hidden">
                                <div className="absolute inset-0 bg-[#2e2e2e]" />
                            </div>
                        </div>
                    </div>
                </div>

                {/* ── 8. HIDING DIGITAL FOOTPRINTS ── */}
                <div className="max-w-350 mx-auto px-6 md:px-12 py-12">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 border-t border-[#616161] pt-10">
                        <div>
                            <h3 className="text-[#f0f0f0] text-[18px] md:text-[22px] leading-[1.4] tracking-[-0.22px]">
                                Hiding digital footprints.
                            </h3>
                        </div>
                        <div className="flex flex-col gap-8">
                            <p className="text-[#8a8a8a] text-[15px] leading-[1.4] tracking-[0.15px]">
                                From the beginning, we insisted on users being able to use and access their private apps
                                seamlessly when they need it, and hide them entirely swiftly. Turns out to thoroughly{" "}
                                <span className="text-[#f0f0f0]">hide the entire footprint</span> of an app from one&apos;s
                                device is quite complex than we anticipated, as it spans across many system surfaces such as settings.
                            </p>
                            <p className="text-[#f0f0f0] text-[18px] md:text-[32px] leading-[1.3]">
                                We paid meticulous attention to the footprint of apps across the whole operating system to
                                minimise leakage from apps in private space – Going beyond just concealing app icons.
                            </p>
                        </div>
                    </div>
                </div>

                {/* ── 9. DEVICE SHOWCASE ── */}
                <div className="max-w-350 mx-auto px-6 md:px-12 py-10">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                        {/* Phone — hidden state */}
                        <div className="bg-[#131313] h-75 md:h-87 overflow-hidden relative">
                            <div className="absolute bottom-0 left-1/2 -translate-x-[30%] w-60 md:w-83.5 h-140 md:h-175">
                                <div className="absolute inset-0 bg-[#222222]" />
                                <div className="absolute inset-2.25 md:inset-3.25 rounded-3.5 md:rounded-4.75 overflow-hidden">
                                    <div className="w-full h-full bg-[#2e2e2e]" />
                                </div>
                            </div>
                        </div>
                        {/* Pixel Fold — unlocked */}
                        <div className="bg-[#131313] h-75 md:h-87 overflow-hidden relative">
                            <div className="absolute inset-0 flex items-center justify-center overflow-hidden">
                                <div className="relative w-120 md:w-166.25 h-120 md:h-162 -top-10">
                                    <div className="absolute inset-0 bg-[#222222]" />
                                    <div className="absolute top-[4%] left-[3%] w-[93%] h-[80%] bg-[#2e2e2e]" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* ── 10. LOCK SECTION ── */}
                <div className="max-w-350 mx-auto px-6 md:px-12 py-12 pb-24">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 border-t border-[#616161] pt-10">
                        <div>
                            <h3 className="text-[#f0f0f0] text-[18px] md:text-[22px] leading-[1.4] tracking-[-0.22px]">
                                Lock Private space inconspicuously.
                            </h3>
                        </div>
                        <div className="flex flex-col gap-10">
                            <p className="text-[#8a8a8a] text-[15px] leading-[1.4] tracking-[0.15px]">
                                In order to not draw suspicion from others, locking private space is natural and discrete.
                                With just a press of the device&apos;s power button, users can quickly lock their private space,
                                reducing the time required for preparation before lending their devices to others.
                            </p>
                            <div className="bg-[#1e1e1e] h-100 md:h-150" />
                        </div>
                    </div>
                </div>

                {/* ── 11. HIDING ON PHONE ── */}
                <div className="max-w-350 mx-auto px-6 md:px-12 pb-24">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 border-t border-[#616161] pt-10">
                        <div>
                            <h3 className="text-[#f0f0f0] text-[18px] md:text-[22px] leading-[1.4] tracking-[-0.22px]">
                                Hiding Private space on your phone.
                            </h3>
                        </div>
                        <div className="flex flex-col gap-10">
                            <p className="text-[#8a8a8a] text-[15px] leading-[1.4] tracking-[0.15px]">
                                &apos;Hang on… Isn&apos;t it kinda obvious to have a &apos;Private&apos; section on your phone?&apos;
                                For those seeking a more heightened level of privacy, they have the option to hide their private
                                spaces automatically when they are not using it.
                            </p>
                            <div className="flex flex-col gap-6">
                                {/* Phone mockup placeholder */}
                                <div className="relative w-32.5 md:w-49 h-67.5 md:h-102.75">
                                    <div className="absolute inset-0 bg-[#222222]" />
                                    <div className="absolute inset-1.25 md:inset-2.5 rounded-2.5 md:rounded-4.75 overflow-hidden bg-[#2e2e2e]" />
                                </div>
                                <p className="text-[#8a8a8a] text-[15px] md:text-[16px] tracking-[0.32px] leading-[1.3] max-w-135">
                                    Private space hides when it locks. Users can access it by searching for it in the search bar
                                </p>
                                {/* Toggle UI */}
                                <div className="flex items-center justify-between pl-6 md:pl-8 pr-4 py-3 md:py-4 rounded-full border border-[#616161] bg-[#131313] max-w-85">
                                    <span className="text-[#f0f0f0] text-[16px] md:text-[22px] tracking-[-0.22px]">
                                        Hide private space
                                    </span>
                                    <div className="bg-[#3cda64] rounded-full w-15 md:w-17.5 h-9 md:h-11 flex items-center justify-end p-1 border border-[#616161] shrink-0">
                                        <div className="bg-[#f0f0f0] rounded-full w-6 h-6 md:w-8 md:h-8" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* ── 12. SECURITY ── */}
                <div className="max-w-350 mx-auto px-6 md:px-12 pb-24">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 border-t border-[#616161] pt-10">
                        <div>
                            <h3 className="text-[#f0f0f0] text-[18px] md:text-[22px] leading-[1.4] tracking-[-0.22px]">
                                An additional layer of security.
                            </h3>
                        </div>
                        <div className="flex flex-col gap-10">
                            <p className="text-[#8a8a8a] text-[15px] leading-[1.4] tracking-[0.15px]">
                                Users have the option to set a different lock from their device lock. This ensures that even if
                                someone borrowing the phone is aware of the device lock, they still won&apos;t be able to
                                access private space.
                            </p>
                            <div className="w-full h-75 md:h-115 bg-[#1e1e1e]" />
                        </div>
                    </div>
                </div>

                {/* ── 13. IMPACT ── */}
                <div className="max-w-350 mx-auto px-6 md:px-12 py-16 pb-24">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 border-t border-[#616161] pt-10">
                        <div>
                            <h2 className="text-[#f0f0f0] text-[28px] md:text-[48px] leading-[1.2] tracking-[-0.96px]">
                                Impact<br />
                                <span className="text-[#8a8a8a]">Trust & safety for millions</span>
                            </h2>
                        </div>
                        <div className="flex flex-col gap-8">
                            <div className="flex flex-col gap-3">
                                <p className="text-[#8a8a8a] text-[15px] leading-[1.4] tracking-[0.15px]">
                                    Not many things are as surreal as seeing work being unveiled at Google I/O 2024. Private space
                                    will also be made available to OEMs to adopt, extending our reach to a wider user base. You can
                                    read about the <span className="text-[#3cda64]">announcement here.</span>
                                </p>
                                <p className="text-[#8a8a8a] text-[15px] leading-[1.4] tracking-[0.15px]">
                                    The feature was also recognised as Android 15&apos;s &apos;
                                    <span className="text-[#3cda64]">Top 5 features&apos; by MKBHD</span>.
                                </p>
                            </div>
                            <div className="w-full h-50 md:h-91.75 bg-[#1e1e1e]" />
                        </div>
                    </div>
                </div>

                {/* ── 14. BOTTOM CARDS ── */}
                <div className="max-w-350 mx-auto px-6 md:px-12 pb-0 flex flex-col md:flex-row gap-2.5">
                    <div className="bg-[#131313] flex-1 p-5 flex flex-col gap-4">
                        <h2 className="text-[#f0f0f0] text-[32px] md:text-[48px] tracking-[-0.96px] leading-[1.2]">
                            Request a case study
                        </h2>
                        <div className="flex flex-col gap-16 flex-1 pt-4">
                            <p className="text-[#8a8a8a] text-[18px] md:text-[22px] tracking-[-0.22px] leading-[1.4]">
                                Want to learn more about this project? Get in touch to request a case study.
                            </p>
                            <a href="mailto:25amrj@gmail.com" className="inline-flex items-center gap-2 text-[#f0f0f0] text-[14px] uppercase w-fit">
                                <span className="border-b border-[#f0f0f0] pb-0.5">GET IN TOUCH</span>
                                <ArrowForward sx={{ color: "#3cda64", fontSize: 16 }} />
                            </a>
                        </div>
                    </div>
                    <div className="bg-[#131313] flex-1 p-2.5 flex flex-col gap-2.5">
                        <div className="pl-2.5 pt-5">
                            <h2 className="text-[#f0f0f0] text-[32px] md:text-[47.1px] tracking-[-0.96px] leading-[1.2]">
                                Next project
                            </h2>
                        </div>
                        <a href="#" className="flex flex-col gap-3 flex-1 p-2.5">
                            <div className="flex-1 relative overflow-hidden min-h-75 md:min-h-125">
                                <div className="absolute inset-0 bg-[#222222]" />
                                <div className="absolute top-3 left-3 inline-flex items-center gap-2 px-3 py-1 bg-white/15 backdrop-blur-sm">
                                    <div className="w-1.25 h-1.25 rounded-full bg-[#3cda64]" />
                                    <span className="text-[11.8px] text-white uppercase">SHIPPED</span>
                                </div>
                            </div>
                            <div>
                                <p className="text-[#f0f0f0] text-[14.6px] tracking-[0.32px]">Platform McKinsey</p>
                                <p className="text-[#8a8a8a] text-[14.5px] tracking-[0.32px]">Streamlining FinalDocs Submission</p>
                            </div>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    )
}

function MetaRow({ label, value }: { label: string; value: string | string[] }) {
    return (
        <div className="flex flex-col gap-0.5 pt-2.5 pb-2.5">
            <span className="text-[#8a8a8a] text-[13.5px] tracking-[0.15px]">{label}</span>
            {Array.isArray(value) ? (
                <div className="flex flex-col">
                    {value.map((line, i) => (
                        <span key={i} className="text-[#f0f0f0] text-[13.5px] tracking-[0.15px] leading-5.25">
                            {line}
                        </span>
                    ))}
                </div>
            ) : (
                <span className="text-[#f0f0f0] text-[13.5px] tracking-[0.15px] leading-5.25">{value}</span>
            )}
        </div>
    )
}

function PainPoint({ label, detail }: { label: string; detail: string }) {
    return (
        <div className="flex flex-col gap-2.5 py-2.5 border-b border-[#616161]">
            <span className="text-[#8a8a8a] text-[15px] tracking-[0.15px]">{label}</span>
            <span className="text-[#f0f0f0] text-[15px] leading-[1.4] tracking-[0.15px]">{detail}</span>
        </div>
    )
}

function FeatureItem({ icon, label }: { icon: ReactNode; label: string }) {
    return (
        <div className="flex items-center gap-2.5 py-2 border-b border-[#616161]">
            <span className="text-[#f0f0f0] shrink-0">{icon}</span>
            <span className="text-[#f0f0f0] text-[15px] tracking-[0.15px]">{label}</span>
        </div>
    )
}