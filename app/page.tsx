import Link from "next/link"
import MiniFooter from "./Components/Footer/MiniFooter"
import Footer from "./Components/Footer/Footer"

const imgProject1 = "/case-studies/moniq/banner.jpg"
const imgProject2 = "/case-studies/academic-information-system/banner.jpg"
const imgProject3 = "/case-studies/elderly-mobile-experience/banner.jpg"
const imgProject4 = "/ui-showcase.jpg"
const imgProject5 = "/ui-videos/thumbnail/interaction-library-thumbnail.jpg"
const videoProject5 = "/ui-videos/thumbnail/interaction-library-video.mp4"

const PROJECTS = [
  { img: imgProject1, title: "Moniq Payment App", desc: "Spend Smart. Live Clear.", wide: true },
  { img: imgProject2, title: "Academic Information System", desc: "Simplify Learning. Stay Informed.", wide: false, href: "/academic-information-system" },
  { img: imgProject3, title: "Elderly Mobile Experience", desc: "Designing a mobile app for elderly users", wide: false, href: "https://www.behance.net/gallery/213415765/A-UX-case-study-on-senior-friendly-mobile-interactions" },
  { img: imgProject4, title: "UI Showcase", desc: "A collection of visual interface explorations", wide: false, href: "/ui-showcase" },
  { img: imgProject5, video: videoProject5, title: "The Interaction Library", desc: "A curated collection of micro-interactions and motion design", wide: false, href: "/interaction-library" },
]

export default function Page() {
  return (
    <div className="bg-[#080808] text-[#f0f0f0] font-sans overflow-x-hidden">

      {/* ── HERO ──────────────────────────────────────────────────── */}
      <section className="relative min-h-screen flex flex-col">

        {/* Hero graphic with mix-blend-difference */}
        <div className="flex-1 relative flex flex-col items-center justify-end pt-20 pb-10 min-h-[calc(100vh-28px)]">
          <div className="absolute left-1/2 top-1/2 z-10 w-full max-w-[1000px] -translate-x-1/2 -translate-y-1/2 px-6 text-center font-heading text-[clamp(3rem,12vw,6rem)] leading-[1.08] sm:px-10 lg:leading-[1.12]">
            I craft products through design and code.
          </div>

          {/* Bio text */}
          <div className="relative z-10 mx-6 mb-10 max-w-110 text-center text-[13.4px] leading-[21px] text-[#f0f0f0]">
            <p>Hey – I’m Aman. Designer & developer creating the next generation of digital experiences with design, strategy, and code.</p>
          </div>
        </div>

        <MiniFooter />
      </section>

      {/* ── SELECTED WORKS ────────────────────────────────────────── */}
      <section className="bg-[#080808] flex flex-col items-center px-6 pt-20 pb-24 sm:px-10 lg:pt-[100px] lg:pb-[150px]">
        <div className="w-full max-w-[1400px] flex flex-col gap-[41px]">

          {/* Section header */}
          <h2 className="text-[#f0f0f0] text-[40px] tracking-[-0.8px] leading-[1.2] sm:text-[48px] sm:tracking-[-0.96px]">Selected works</h2>

          {/* Row 1: full-width */}
          <div className="flex flex-col gap-3">
            <Link href="/moniq-payment-app" className="block h-[320px] w-full overflow-hidden bg-white sm:h-[420px] lg:h-119.5">
              <img
                src={PROJECTS[0].img}
                alt={PROJECTS[0].title}
                className="w-full h-[170%] object-cover object-center -translate-y-[21%]"
              />
            </Link>
            <div>
              <p className="text-[#f0f0f0] text-[17.6px] leading-relaxed">{PROJECTS[0].title}</p>
              <p className="text-[#8c8b8b] text-[16.2px] leading-relaxed">{PROJECTS[0].desc}</p>
            </div>
          </div>

          {/* Row 2: two columns */}
          <div className="flex flex-col gap-[41px] lg:flex-row">
            {PROJECTS.slice(1, 3).map(({ img, title, desc, href }) => (
              <div key={title + img} className="flex flex-1 flex-col gap-3">
                {href ? (
                  <Link href={href} className="block h-[320px] w-full overflow-hidden bg-white sm:h-[420px] lg:h-[478px]">
                    <img src={img} alt={title} className="w-full h-full object-cover" />
                  </Link>
                ) : (
                  <div className="h-[320px] w-full overflow-hidden bg-white sm:h-[420px] lg:h-[478px]">
                    <img src={img} alt={title} className="w-full h-full object-cover" />
                  </div>
                )}
                <div>
                  <p className="text-[#f0f0f0] text-[17.6px] leading-relaxed">{title}</p>
                  <p className="text-[#8c8b8b] text-[16.2px] leading-relaxed">{desc}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Row 3: two columns */}
          <div className="flex flex-col gap-[41px] lg:flex-row">
            {PROJECTS.slice(3, 5).map(({ img, video, title, desc, href }) => (
              <div key={title} className="flex flex-1 flex-col gap-3">
                {href ? (
                  <Link href={href} className={`${video ? "flex items-center justify-center bg-[#070736]" : "block bg-white"} h-[320px] w-full overflow-hidden sm:h-[420px] lg:h-[478px]`}>
                    {video ? (
                      <video
                        src={video}
                        poster={img}
                        autoPlay
                        muted
                        loop
                        playsInline
                        className="w-full h-auto"
                      >
                        <img src={img} alt={title} className="w-full h-auto" />
                      </video>
                    ) : (
                      <img src={img} alt={title} className="w-full h-full object-cover" />
                    )}
                  </Link>
                ) : (
                  <div className={`${video ? "flex items-center justify-center bg-[#070736]" : "bg-white"} h-[320px] w-full overflow-hidden sm:h-[420px] lg:h-[478px]`}>
                    {video ? (
                      <video
                        src={video}
                        poster={img}
                        autoPlay
                        muted
                        loop
                        playsInline
                        className="w-full h-auto"
                      >
                        <img src={img} alt={title} className="w-full h-auto" />
                      </video>
                    ) : (
                      <img src={img} alt={title} className="w-full h-full object-cover" />
                    )}
                  </div>
                )}
                <div>
                  <p className="text-[#f0f0f0] text-[17.6px] leading-relaxed">{title}</p>
                  <p className="text-[#8c8b8b] text-[16.2px] leading-relaxed">{desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />

      {/* ── CONTACT / FOOTER ──────────────────────────────────────── */}
      {/* <footer className="bg-[#131313] flex flex-col items-center overflow-hidden">
        <div className="w-full max-w-[1400px] px-10 pt-[60px] flex gap-10 items-start">

          <div className="w-10 flex items-start pt-2 shrink-0">
            <img src={imgEmailSvg} alt="email" className="w-10 h-5 object-contain" />
          </div>

          <div className="flex-1 flex flex-col">
            <div className="flex flex-col mb-8">
              <p className="text-[#f0f0f0] text-[48px] tracking-[-0.96px] leading-[1.2]">Let's talk</p>
              <a
                href="mailto:25amrj@gmail.com"
                className="flex items-center gap-2 text-[#f0f0f0] text-[48px] tracking-[-0.96px] leading-[1.2] hover:opacity-80 transition-opacity"
              >
                Drop me a line
                <svg width="48" height="48" viewBox="0 0 24 24" fill="none" className="text-[#3cda64] shrink-0">
                  <path d="M7 17L17 7M17 7H7M17 7V17" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </a>
            </div>

            <div className="flex gap-4 mb-[60px]">
              <div className="flex flex-col gap-1.5 flex-1">
                {["About", "Works", "Coaching"].map((link) => (
                  <a key={link} href="#" className="text-[#f0f0f0] text-[13.7px] leading-[21px] hover:opacity-70 transition-opacity">{link}</a>
                ))}
              </div>
              <div className="flex flex-col gap-1.5 flex-1">
                <a href="https://www.linkedin.com/in/aman-r-8a2724107/" target="_blank" rel="noopener noreferrer" className="text-[#f0f0f0] text-[13.2px] leading-[21px] hover:opacity-70 transition-opacity">LinkedIn</a>
                <a href="/aman_resume.pdf" download className="text-[#f0f0f0] text-[14.1px] leading-[21px] hover:opacity-70 transition-opacity">See full CV</a>
              </div>
            </div>
          </div>
        </div>

        <div className="w-full max-w-[1400px] px-10 py-3 flex items-center justify-between border-t border-[#616161]">
          <span className="text-[#8a8a8a] text-[13.2px] leading-[21px]">Made with plenty of coffee</span>
          <span className="text-[#8a8a8a] text-[13.6px] leading-[21px]">© 2026 Aman Raj</span>
        </div>
      </footer> */}
    </div>
  )
}
