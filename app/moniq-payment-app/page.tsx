import type { ReactNode } from "react"
import NextProject from "@/app/Components/CaseStudy/NextProject"
import AccountBalanceWallet from "@mui/icons-material/AccountBalanceWallet"
import CompareArrows from "@mui/icons-material/CompareArrows"
import History from "@mui/icons-material/History"
import Insights from "@mui/icons-material/Insights"
import NotificationsOff from "@mui/icons-material/NotificationsOff"
import Star from "@mui/icons-material/Star"

const heroBanner =
    "/case-studies/moniq/banner.jpg"
const problemImage =
    "/case-studies/moniq/problem.jpg"

const meta = [
    { label: "Interface Scope", value: ["Mobile"] },
    {
        label: "Key Features",
        value: ["Expense Insights", "Bill Splitting", "Merchant Analysis", "Budget Analysis"],
    },
    {
        label: "Tools & Techniques Used",
        value: ["Figma", "User Surveys", "Interviews", "Wireframing"],
    },
    { label: "Project Type", value: ["Academic Concept Project"] },
]

const painPoints = [
    {
        title: "Transaction overload",
        body: "72% of users reported losing track of frequent micro-payments, with many relying on bank balance alone to estimate spending.",
    },
    {
        title: "Shared expense friction",
        body: "Users often found group payments awkward to calculate, follow up on, and separate from their own personal spending.",
    },
    {
        title: "Poor spending context",
        body: "Payment histories showed where money moved, but rarely explained why it moved, what category it belonged to, or how it affected budgets.",
    },
]

const solutionFeatures = [
    {
        icon: <Insights sx={{ fontSize: 20 }} />,
        label: "Daily payments are automatically grouped into clear spending categories",
    },
    {
        icon: <NotificationsOff sx={{ fontSize: 20 }} />,
        label: "Monthly budgets are tracked with actionable insights, not just passive statistics",
    },
    {
        icon: <CompareArrows sx={{ fontSize: 20 }} />,
        label: "Shared expenses can be split instantly with friends, groups, or custom participants",
    },
    {
        icon: <Star sx={{ fontSize: 20 }} />,
        label: "Receipts, notes, and transaction context are stored for future clarity",
    },
    {
        icon: <History sx={{ fontSize: 20 }} />,
        label: "Pending repayments are organized and reminders can be sent without awkward follow-ups",
    },
    {
        icon: <AccountBalanceWallet sx={{ fontSize: 20 }} />,
        label: "Cash, digital payments, and personal exclusions are all accounted for in one system",
    },
]

const principles = [
    {
        title: "UPI-powered expense tracking, redefined",
        images: [
            {
                src: "/case-studies/moniq/solution-3.jpg",
                alt: "Moniq screen showing UPI-powered expense tracking insights",
            },
            {
                src: "/case-studies/moniq/solution-4.jpg",
                alt: "Moniq screen showing organized payment history and expense details",
            },
        ],
        paragraphs: [
            <>
                Traditional expense tracking often relies on <Strong>manual entry</Strong>, requiring
                users to <Strong>log, categorize, and reconstruct spending</Strong> after payments are
                made. To reduce this hassle, the system was built around an existing habit users
                already follow daily: <Strong>UPI payments</Strong>.
            </>,
            <>
                Instead of creating a separate tracking process,{" "}
                <Strong>transaction details like amount, merchant, and payment history</Strong> are
                used as the <Strong>foundation for expense organization</Strong>. Expense tracking
                becomes a seamless extension of payment itself, reducing effort while improving
                financial clarity.
            </>,
        ],
        quote: "Built on top of familiar UPI behavior, this system converts payment history into meaningful financial control without added friction.",
    },
    {
        title: "Flexible social splitting and expense organization",
        images: [
            {
                src: "/case-studies/moniq/solution-5.jpg",
                alt: "Moniq screen showing social bill splitting with friends",
            },
            {
                src: "/case-studies/moniq/solution-6.jpg",
                alt: "Moniq screen showing shared expense organization and repayments",
            },
        ],
        paragraphs: [
            <>
                <Strong>Shared expenses often become confusing</Strong> when personal spending,
                repayments, and group coordination are treated the same. Bill splitting was designed
                to function alongside <Strong>Friend Circles</Strong>, allowing transactions to be
                split instantly while keeping coordination flexible.
            </>,
            <>
                People can be <Strong>added or removed for a specific expense</Strong> without
                changing the original group. After splitting, <Strong>only the user&apos;s share</Strong>{" "}
                is included in budget calculations while repayments are treated separately.
            </>,
        ],
        quote: "Designed beyond basic bill splitting, this system transforms shared expenses into structured, trackable financial relationships.",
    },
    {
        title: "Smart budgeting with behavioral awareness",
        images: [
            {
                src: "/case-studies/moniq/solution-7.jpg",
                alt: "Moniq screen showing smart budgeting and spending categories",
            },
            {
                src: "/case-studies/moniq/solution-8.jpg",
                alt: "Moniq screen showing behavioral spending insights and budget awareness",
            },
        ],
        paragraphs: [
            <>
                Traditional finance apps are often <Strong>limited to tracking expenses</Strong>, but
                budgeting becomes more effective when financial behavior is understood alongside it.
                Moniq connects <Strong>monthly goals, category insights, unusual expenses, and
                    transaction trends</Strong>.
            </>,
            <>
                By combining budgeting with behavioral awareness, the patterns behind spending can
                be recognized, allowing financial decisions to be shaped by real habits rather than
                passive numbers alone.
            </>,
        ],
        quote: "Where budgeting meets behavioral insight, turning transactions into patterns and patterns into smarter money decisions.",
    },
]

export default function Page() {
    return (
        <main className="min-h-screen overflow-x-hidden bg-[#080808] text-[#f0f0f0]">
            <section className="mx-auto flex w-full max-w-350 flex-col gap-10 px-6 pb-10 pt-32 sm:px-12 lg:flex-row lg:items-end lg:pt-32">
                <div className="flex-1">
                    <p className="text-[48px] font-medium leading-none tracking-[-1.28px] text-[#68acef] md:text-[64px]">
                        Moniq
                    </p>
                    <h1 className="mt-2 text-[34px] font-medium leading-[1.1] tracking-[-1.28px] text-[#8a8a8a] md:text-[48px]">
                        Spend Smart. Live Clear.
                    </h1>
                </div>
                <p className="max-w-162 text-[18px] leading-normal text-[#8a8a8a] md:text-[24px]">
                    Helping users track spending, split expenses, and build better financial habits
                    through everyday UPI payments.
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
                        Moniq has been designed as a concept payment experience that{" "}
                        <span className="font-medium text-[#68acef]">
                            seamlessly integrates expense tracking, smart insights, and bill splitting
                            into UPI apps
                        </span>{" "}
                        to encourage better spending management, financial awareness, and stronger
                        everyday financial habits.
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
                    mutedTitle="Solving the 'Mindless Spending' Gap"
                    body={
                        <>
                            <p>
                                Many users make frequent UPI payments every day but lack clear
                                visibility into where their money goes, how small expenses accumulate,
                                or how shared costs impact their finances. While payment apps simplify
                                transactions, they often stop short of enabling deeper spending
                                awareness, budgeting discipline, and proactive financial decision-making.
                            </p>
                            <p className="text-[24px] leading-[1.3] text-[#f0f0f0] md:text-[32px]">
                                Recognising this gap, an opportunity was identified to{" "}
                                <span className="font-medium text-[#68acef]">
                                    challenge the extra effort required to stay financially aware
                                </span>{" "}
                                in a digital-first payment ecosystem.
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
                            Tracking how people spend money sounds simple until you ask them to
                            explain it. Frequent digital payments, fragmented transaction histories,
                            and informal social splits make financial behavior surprisingly difficult
                            to monitor.
                            <br />
                            <br />
                            To better understand these patterns, we{" "}
                            <span className="text-white">
                                surveyed and interviewed over 42 participants across students and
                                young professionals
                            </span>{" "}
                            to uncover how users manage, track, and split expenses in daily life.
                        </p>
                        <div>
                            <p className="mb-3 text-[16px] leading-[1.3] tracking-[0.32px] text-[#68acef]">
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

                <section className="h-[360px] bg-[#131313] md:h-[706px]">
                    <img src='/case-studies/moniq/solution-1.jpg' alt="Moniq solution concept showing categorized expenses and bill splitting features" className="h-full w-full object-cover" />
                </section>

                <SplitSection
                    title="Solution"
                    mutedTitle="Designed beyond simple tracking"
                    body={
                        <>
                            <p>
                                Moniq brings expense tracking into the payment flow itself, helping
                                users understand daily spending while keeping transactions familiar,
                                quick, and socially useful.
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
                        src="/case-studies/moniq/solution-2.jpg"
                        alt="Moniq solution screens showing the app experience in detail"
                        className="h-full w-full object-cover"
                    />
                </section>

                {principles.map((principle) => (
                    <PrincipleSection key={principle.title} {...principle} />
                ))}

                <NextProject isMoniq />
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
