import Link from "next/link"
import Image from "next/image"

type ProjectKey = "academic-information-system" | "moniq-payment-app"

type NextProjectProps = {
    isMoniq?: boolean
}

const projects: Record<ProjectKey, {
    href: string
    title: string
    description: string
    image: string
}> = {
    "academic-information-system": {
        href: "/academic-information-system",
        title: "Academic Information System",
        description: "Simplify Learning. Stay Informed.",
        image: "/case-studies/academic-information-system/banner.jpg",
    },
    "moniq-payment-app": {
        href: "/moniq-payment-app",
        title: "Moniq Payment App",
        description: "Spend Smart. Live Clear.",
        image: "/case-studies/moniq/banner.jpg",
    },
}

export default function NextProject({ isMoniq }: NextProjectProps) {
    const nextProject =
        isMoniq
            ? projects["academic-information-system"]
            : projects["moniq-payment-app"]

    return (
        <section className="flex flex-col gap-6 bg-[#131313] p-5">
            <h2 className="text-[34px] leading-[1.2] tracking-[-0.96px] text-[#f0f0f0] md:text-[48px]">
                Next project
            </h2>
            <Link
                href={nextProject.href}
                className="group flex flex-col gap-3"
                aria-label={`View next project: ${nextProject.title}`}
            >
                <div className="relative h-[280px] overflow-hidden bg-white md:h-[500px]">
                    <Image
                        src={nextProject.image}
                        alt={`${nextProject.title} project thumbnail`}
                        fill
                        sizes="100vw"
                        className="object-cover transition duration-500 group-hover:scale-[1.02]"
                    />
                </div>
                <div>
                    <p className="text-[15px] leading-[21px] tracking-[0.32px] text-[#f0f0f0]">
                        {nextProject.title}
                    </p>
                    <p className="text-[15px] leading-[21px] tracking-[0.32px] text-[#8a8a8a]">
                        {nextProject.description}
                    </p>
                </div>
            </Link>
        </section>
    )
}
