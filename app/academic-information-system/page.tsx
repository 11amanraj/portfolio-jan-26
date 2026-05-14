import type { ReactNode } from "react"
import Link from "next/link"
import CalendarMonth from "@mui/icons-material/CalendarMonth"
import DashboardCustomize from "@mui/icons-material/DashboardCustomize"
import FolderOpen from "@mui/icons-material/FolderOpen"
import Forum from "@mui/icons-material/Forum"
import LibraryBooks from "@mui/icons-material/LibraryBooks"
import SyncAlt from "@mui/icons-material/SyncAlt"

const heroBanner =
    "/case-studies/academic-information-system/banner.jpg"
const problemImage =
    "/case-studies/academic-information-system/problem.jpg"
const nextProjectImage =
    "/project-thumbnails/elderly-ux.jpg"
const projectAccentClass = "text-[#00C5C5]"

const meta = [
    { label: "Interface Scope", value: ["Mobile"] },
    {
        label: "Key Features",
        value: ["Student Records", "Course Management", "Resource Access", "Institutional Communication"],
    },
    {
        label: "Tools & Techniques Used",
        value: ["Figma", "User Surveys", "Interviews", "Wireframing"],
    },
    { label: "Project Type", value: ["Academic Concept Project"] },
]

const painPoints = [
    {
        title: "Fragmented information access",
        body: "76% of participants reported switching between multiple platforms for grades, schedules, notices, and resources—creating confusion and inefficiency.",
    },
    {
        title: "Shared expense friction",
        body: "68% of participants found routine academic tasks such as accessing records, tracking coursework, or managing submissions more complicated than necessary.",
    },
    {
        title: "Poor spending context",
        body: "71% of participants reported missing important updates, deadlines, or academic information due to scattered communication channels.",
    },
]

const solutionFeatures = [
    {
        icon: <FolderOpen sx={{ fontSize: 20 }} />,
        label: "Student records are centralized into one accessible academic profile",
    },
    {
        icon: <CalendarMonth sx={{ fontSize: 20 }} />,
        label: "Course schedules, assignments, and curriculum progress are organized through structured management",
    },
    {
        icon: <LibraryBooks sx={{ fontSize: 20 }} />,
        label: "Learning resources, notices, and institutional updates are unified for easier access",
    },
    {
        icon: <Forum sx={{ fontSize: 20 }} />,
        label: "Faculty, administration, and student communication are connected through one streamlined platform",
    },
    {
        icon: <SyncAlt sx={{ fontSize: 20 }} />,
        label: "Academic workflows reduce repetitive administrative friction through clearer processes",
    },
    {
        icon: <DashboardCustomize sx={{ fontSize: 20 }} />,
        label: "Essential educational tools and information are integrated into one cohesive system",
    },
]

const principles = [
    {
        title: "Centralized academic management, redefined",
        images: [
            {
                src: "/case-studies/academic-information-system/solution-3.jpg",
                alt: "Moniq screen showing UPI-powered expense tracking insights",
            },
            {
                src: "/case-studies/academic-information-system/solution-4.jpg",
                alt: "Moniq screen showing organized payment history and expense details",
            },
        ],
        paragraphs: [
            <>
                Traditional academic systems often rely on fragmented portals, disconnected records, and repetitive administrative processes that require students to navigate multiple platforms for schedules, resources, and communication. Instead of creating another isolated tool, this system was built around one core objective: unifying academic life.
            </>,
            <>
                By integrating{" "}<Strong>student records, course management, schedules, and institutional updates</Strong> into one structured ecosystem, academic navigation becomes more seamless, reducing complexity while improving accessibility and operational clarity.
            </>,
        ],
        quote: "Built on the need for connected education, this system transforms scattered academic processes into meaningful institutional efficiency—without unnecessary complexity.",
    },
    {
        title: "Streamlined communication and collaborative accessibility",
        images: [
            {
                src: "/case-studies/academic-information-system/solution-5.jpg",
                alt: "Moniq screen showing social bill splitting with friends",
            },
            {
                src: "/case-studies/academic-information-system/solution-6.jpg",
                alt: "Moniq screen showing shared expense organization and repayments",
            },
        ],
        paragraphs: [
            <>
                Academic experiences often become inefficient when communication between students, faculty, and administration is scattered across disconnected channels. Important updates, deadlines, notices, and support systems can easily become fragmented.
            </>,
            <>
                To address this, communication tools were designed to function within the broader academic ecosystem, allowing <Strong>institutional announcements, academic coordination, and resource visibility</Strong> to remain connected, accessible, and easier to manage.
            </>,
        ],
        quote: "Designed beyond basic information systems, this platform transforms academic communication into structured, accessible educational coordination.",
    },
    {
        title: "Smart academic tracking with informed decision-making",
        images: [
            {
                src: "/case-studies/academic-information-system/solution-7.jpg",
                alt: "Moniq screen showing smart budgeting and spending categories",
            },
            {
                src: "/case-studies/academic-information-system/solution-8.jpg",
                alt: "Moniq screen showing behavioral spending insights and budget awareness",
            },
        ],
        paragraphs: [
            <>
                Traditional academic platforms often focus on static records, but effective educational management requires more than access—it requires visibility into progress, responsibilities, and performance patterns.
            </>,
            <>
                By combining <Strong>academic records, coursework tracking, schedule management, and resource accessibility,</Strong> the system supports informed academic decision-making while helping users better understand their educational journey.
            </>,
        ],
        quote: "Where academic tracking meets informed decision-making, turning data into insights and insights into smarter educational outcomes.",
    },
]

export default function Page() {
    return (
        <main className="min-h-screen overflow-x-hidden bg-[#080808] text-[#f0f0f0]">
            <section className="mx-auto flex w-full max-w-350 flex-col gap-10 px-6 pb-10 pt-32 sm:px-12 lg:flex-row lg:items-end lg:pt-32">
                <div className="flex-1">
                    <p className={`text-[48px] font-medium leading-none tracking-[-1.28px] md:text-[64px] ${projectAccentClass}`}>
                        Academic Information System
                    </p>
                    <h1 className="mt-2 text-[34px] font-medium leading-[1.1] tracking-[-1.28px] text-[#8a8a8a] md:text-[48px]">
                        Simplify Learning. Stay Informed.
                    </h1>
                </div>
                <p className="max-w-162 text-[18px] leading-normal text-[#8a8a8a] md:text-[24px]">
                    An integrated academic platform designed to simplify student life through easy access to courses, records, and campus services.
                </p>
            </section>

            <section className="relative h-108 overflow-hidden bg-[#080808] md:h-231">
                <img
                    src={heroBanner}
                    alt="Moniq payment app shown on a phone beside a notebook and pen"
                    className="absolute inset-x-0 top-0 h-full w-full object-cover"
                />
                <div className="absolute inset-x-0 bottom-0 h-32 bg-linear-to-b from-transparent to-[#080808]" />
            </section>

            <div className="mx-auto flex w-full max-w-350 flex-col gap-24 px-6 py-16 sm:px-12 lg:py-24">
                <section className="grid gap-10 border-t border-[#616161] pt-10 lg:grid-cols-2">
                    <p className="max-w-[506px] text-[24px] leading-[1.18] text-[#f0f0f0] md:text-[32px]">
                        The Academic Information System has been designed as a centralized educational platform that seamlessly integrates{" "}
                        <span className={`font-medium ${projectAccentClass}`}>
                            student records, academic resources, and course management
                        </span>{" "}
                        into one system to encourage accessibility, streamlined administration, and efficient academic experiences.
                    </p>
                    <div className="grid gap-0">
                        {meta.map((item) => (
                            <MetaRow key={item.label} label={item.label} value={item.value} />
                        ))}
                    </div>
                </section>

                <img
                    src={problemImage}
                    alt="Street payment scene with the question: 60 crore payments a day, but where does it all go?"
                    className="h-auto w-full object-cover"
                />

                <SplitSection
                    title="Problem"
                    mutedTitle="Solving the 'Disconnected Academic Experience' Gap"
                    body={
                        <>
                            <p>
                                Many students and institutions manage academic processes through fragmented systems that lack clear accessibility to records, resources, schedules, or communication. While digital platforms exist, they often stop short of creating a truly connected academic ecosystem—leading to inefficiencies, administrative friction, and missed opportunities for better educational experiences.
                            </p>
                            <p className="text-[24px] leading-[1.3] text-[#f0f0f0] md:text-[32px]">
                                Recognising this gap, an opportunity was identified to{" "}
                                <span className={`font-medium ${projectAccentClass}`}>
                                    challenge the complexity and fragmentation of academic management
                                </span>{" "}
                                creating a system that makes navigating education more accessible, connected, and efficient.
                            </p>
                        </>
                    }
                />

                <section className="grid gap-10 border-t border-[#616161] pt-10 lg:grid-cols-2">
                    <h2 className="text-[34px] leading-[1.2] tracking-[-0.96px] md:text-[48px]">
                        Research
                    </h2>
                    <div className="flex flex-col gap-8">
                        <p className="text-[15px] leading-[1.4] tracking-[0.15px] text-[#8a8a8a]">
                            Managing academic life sounds structured until students are asked to navigate multiple disconnected systems for records, resources, schedules, and communication. Fragmented platforms, inconsistent information access, and administrative complexity often make educational experiences unnecessarily difficult to manage.
                            <br />
                            <br />
                            To better understand these challenges, we surveyed and interviewed over{" "}
                            <span className="text-white">
                                60 students, faculties and staff across diverse academic programs
                            </span>{" "}
                            to uncover how users access, manage, and interact with institutional systems in daily life.
                        </p>
                        <div>
                            <p className={`mb-3 text-[16px] leading-[1.3] tracking-[0.32px] ${projectAccentClass}`}>
                                Common Painpoints
                            </p>
                            <div className="grid gap-8 md:grid-cols-3 lg:grid-cols-1">
                                {painPoints.map((item) => (
                                    <PainPoint key={item.title} {...item} />
                                ))}
                            </div>
                        </div>
                    </div>
                </section>

                {/* <section className="h-[360px] bg-[#131313] md:h-[706px]">
                    <img src='/case-studies/academic-information-system/solution-1.jpg' alt="Moniq solution concept showing categorized expenses and bill splitting features" className="h-full w-full object-cover" />
                </section> */}

                <SplitSection
                    title="Solution"
                    mutedTitle="Designed beyond simple management"
                    body={
                        <>
                            <p>
                                This Academic Information System brings academic operations into one connected ecosystem, helping students navigate educational processes with greater clarity while keeping access to records, resources, and communication seamless, structured, and efficient.
                            </p>
                            <div>
                                <p className="border-b border-[#616161] pb-2 text-[14px] text-[#8a8a8a]">
                                    Core system behaviors
                                </p>
                                <div className="flex flex-col">
                                    {solutionFeatures.map((item) => (
                                        <FeatureItem key={item.label} {...item} />
                                    ))}
                                </div>
                            </div>
                        </>
                    }
                />

                <section className="h-[360px] bg-[#131313] md:h-[706px]">
                    <img
                        src="/case-studies/academic-information-system/solution-2.jpg"
                        alt="Moniq solution screens showing the app experience in detail"
                        className="h-full w-full object-cover"
                    />
                </section>

                {principles.map((principle) => (
                    <PrincipleSection key={principle.title} {...principle} />
                ))}

                <section className="flex flex-col gap-6 bg-[#131313] p-5">
                    <h2 className="text-[34px] leading-[1.2] tracking-[-0.96px] text-[#f0f0f0] md:text-[48px]">
                        Next project
                    </h2>
                    <Link
                        href="/elderly-mobile-usage"
                        className="group flex flex-col gap-3"
                        aria-label="View next project: Elderly Mobile Usage"
                    >
                        <div className="relative h-[280px] overflow-hidden bg-white md:h-[500px]">
                            <img
                                src={nextProjectImage}
                                alt="Elderly Mobile Usage project thumbnail"
                                className="h-full w-full object-cover transition duration-500 group-hover:scale-[1.02]"
                            />
                        </div>
                        <div>
                            <p className="text-[15px] leading-[21px] tracking-[0.32px] text-[#f0f0f0]">
                                Elderly Mobile Usage
                            </p>
                            <p className="text-[15px] leading-[21px] tracking-[0.32px] text-[#8a8a8a]">
                                Spend Smart. Live Clear.
                            </p>
                        </div>
                    </Link>
                </section>
            </div>
        </main>
    )
}

function MetaRow({ label, value }: { label: string; value: string[] }) {
    return (
        <div className="border-t border-[#616161] py-2.5 first:border-t-0">
            <p className="text-[14px] leading-[21px] tracking-[0.15px] text-[#8a8a8a]">{label}</p>
            <div className="mt-0.5 flex flex-col">
                {value.map((line) => (
                    <span
                        key={line}
                        className="text-[14px] leading-[21px] tracking-[0.15px] text-[#f0f0f0]"
                    >
                        {line}
                    </span>
                ))}
            </div>
        </div>
    )
}

function SplitSection({
    title,
    mutedTitle,
    body,
}: {
    title: string
    mutedTitle: string
    body: ReactNode
}) {
    return (
        <section className="grid gap-10 border-t border-[#616161] pt-10 lg:grid-cols-2">
            <h2 className="text-[34px] leading-[1.2] tracking-[-0.96px] text-[#f0f0f0] md:text-[48px]">
                {title}
                <br />
                <span className="text-[#8a8a8a]">{mutedTitle}</span>
            </h2>
            <div className="flex flex-col gap-14 text-[16px] leading-[21px] tracking-[0.15px] text-[#8a8a8a]">
                {body}
            </div>
        </section>
    )
}

function PainPoint({ title, body }: { title: string; body: string }) {
    return (
        <article className="border-t border-[#616161] py-2.5">
            <h3 className="text-[15px] leading-[21px] tracking-[0.15px] text-[#8a8a8a]">{title}</h3>
            <p className="mt-2.5 text-[15px] leading-[21px] tracking-[0.15px] text-[#f0f0f0]">
                {body}
            </p>
        </article>
    )
}

function FeatureItem({ icon, label }: { icon: ReactNode; label: string }) {
    return (
        <div className="flex items-center gap-2.5 border-b border-[#616161] py-2 text-[#f0f0f0]">
            <span className="shrink-0">{icon}</span>
            <span className="text-[15px] leading-[21px] tracking-[0.15px]">{label}</span>
        </div>
    )
}

function PrincipleSection({
    title,
    images,
    paragraphs,
    quote,
}: {
    title: string
    images: { src: string; alt: string }[]
    paragraphs: ReactNode[]
    quote: string
}) {
    return (
        <section className="flex flex-col gap-10">
            <div className="grid gap-10 border-t border-[#616161] pt-10 lg:grid-cols-2">
                <h2 className="max-w-[282px] text-[22px] leading-[1.4] tracking-[-0.22px] text-[#f0f0f0]">
                    {title}
                </h2>
                <div className="flex flex-col gap-8">
                    {paragraphs.map((paragraph, index) => (
                        <p
                            key={index}
                            className="text-[15px] leading-[21px] tracking-[0.15px] text-[#8a8a8a]"
                        >
                            {paragraph}
                        </p>
                    ))}
                    <p className="text-[24px] leading-[1.3] text-[#f0f0f0] md:text-[32px]">
                        {quote}
                    </p>
                </div>
            </div>
            <div className="grid gap-4 md:grid-cols-2">
                {images.map((image) => (
                    <div key={image.src} className="h-[260px] overflow-hidden bg-[#131313] md:h-[348px]">
                        <img src={image.src} alt={image.alt} className="h-full w-full object-cover" />
                    </div>
                ))}
            </div>
        </section>
    )
}

function Strong({ children }: { children: ReactNode }) {
    return <span className="text-white">{children}</span>
}
