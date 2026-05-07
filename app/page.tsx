import Link from "next/link"
import FileDownloadOutlined from "@mui/icons-material/FileDownloadOutlined"
import Footer from "./Components/Footer/Footer"

const imgHeroBg = "https://www.figma.com/api/mcp/asset/02af6762-cd56-4a13-8c9b-990ff07ab773"
const imgSvgMark = "https://www.figma.com/api/mcp/asset/f745369e-1242-4e9b-b049-1597fdb4953c"
const imgSvgText = "https://www.figma.com/api/mcp/asset/b8fdc745-f235-4fe7-bcdd-3e4a5ad0986a"
const imgEmailSvg = "https://www.figma.com/api/mcp/asset/acdcb86b-dcc6-475d-a23c-7996775dcd3f"

const imgProject1 = "/case-studies/moniq/banner.jpg"
const imgProject2 = "https://www.figma.com/api/mcp/asset/99530160-48ff-49f5-9ab7-2bcd7ffae3ca"
const imgProject3 = "https://www.figma.com/api/mcp/asset/4b7bd9b1-1345-4302-8ffa-1ab632b27087"
const imgProject4 = "https://www.figma.com/api/mcp/asset/43ebadb8-3ee4-4b64-8021-09dc7c96d1b2"
const imgProject5 = "https://www.figma.com/api/mcp/asset/6a80f422-c70c-425a-b432-d6a1b78c0080"

const imgPhoto1 = "https://www.figma.com/api/mcp/asset/7acc1597-2e1d-4e1b-8d51-50fa0189f39b"
const imgPhoto2 = "https://www.figma.com/api/mcp/asset/decbf172-ea67-4a4f-a8bc-84608f971d5e"
const imgPhoto3 = "https://www.figma.com/api/mcp/asset/d0c76747-be18-40ff-9e88-082294f9dec5"
const imgPhoto4 = "https://www.figma.com/api/mcp/asset/34a61116-049f-4ed1-bf42-1ee86e079502"
const imgPhoto5 = "https://www.figma.com/api/mcp/asset/fd01f5f3-f83c-43e9-933f-1097e64e0c3b"

const PHOTOS = [imgPhoto1, imgPhoto2, imgPhoto3, imgPhoto4, imgPhoto5]

const PROJECTS = [
  { img: imgProject1, title: "Moniq Payment App", desc: "Spend Smart. Live Clear.", wide: true },
  { img: imgProject2, title: "Pixel Satellite SOS", desc: "Building emergency satellite messaging from 0→1 on Android", wide: false },
  { img: imgProject3, title: "Pixel Satellite SOS", desc: "Building emergency satellite messaging from 0→1 on Android", wide: false },
  { img: imgProject4, title: "Pixel Satellite SOS", desc: "Building emergency satellite messaging from 0→1 on Android", wide: false },
  { img: imgProject5, title: "The Interaction Library", desc: "A curated collection of micro-interactions and motion design", wide: false },
]

export default function ExperimentPage() {
  return (
    <div className="bg-[#080808] text-[#f0f0f0] font-sans overflow-x-hidden">

      {/* ── HERO ──────────────────────────────────────────────────── */}
      <section className="relative min-h-screen flex flex-col">

        {/* Navbar */}
        <div className="absolute inset-x-0 top-0 z-20 h-20 backdrop-blur-[4px]">
          <div className="flex items-center justify-between h-full px-12 pr-10">
            <span className="text-[#f0f0f0] text-[22px] tracking-[-0.22px] leading-none">Aman Raj</span>
            <div className="flex items-center gap-2.5">
              <div className="size-12 flex items-center justify-center mix-blend-difference">
                <img src={imgEmailSvg} alt="" className="size-5 object-contain" />
              </div>
              <div className="size-12 flex items-center justify-center rounded-[10px]">
                <div className="relative size-8">
                  <div className="absolute top-[7px] left-1 w-6 h-0.5 bg-[#f0f0f0] rounded-[10px]" />
                  <div className="absolute top-[15px] left-1 w-6 h-0.5 bg-[#f0f0f0] rounded-[10px]" />
                  <div className="absolute bottom-[7px] left-1 w-6 h-0.5 bg-[#f0f0f0] rounded-[10px]" />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Resume pill */}
        <div className="absolute right-40 top-5 z-30">
          <a
            href="/aman_resume.pdf"
            download
            className="flex items-center gap-2 px-4 py-3 border border-[#2e2e2e] backdrop-blur-[7.5px] text-[#f0f0f0] text-[14.9px] leading-6"
          >
            Resume
            <FileDownloadOutlined sx={{ fontSize: 16, color: '#f0f0f0' }} />
          </a>
        </div>

        {/* Hero graphic with mix-blend-difference */}
        <div className="flex-1 relative flex flex-col items-center justify-end pt-20 pb-10 min-h-[calc(100vh-28px)]">
          <div className="absolute inset-0 mix-blend-difference pointer-events-none overflow-hidden flex items-stretch">
            <img src={imgHeroBg} alt="" className="w-full object-cover object-center" />
          </div>

          {/* SVG logo marks — centered in the hero */}
          <div
            className="absolute pointer-events-none"
            style={{ top: '34%', left: '50%', transform: 'translateX(-50%)', width: 423, height: 213 }}
          >
            <div className="absolute left-0 top-1 size-[211px]">
              <img src={imgSvgMark} alt="" className="w-full h-full object-contain" />
            </div>
            <div className="absolute left-[104px] top-1 w-[319px] h-[211px]">
              <img src={imgSvgText} alt="" className="w-full h-full object-contain" />
            </div>
          </div>

          {/* Bio text */}
          <div className="relative z-10 text-center text-[#f0f0f0] text-[13.4px] leading-[21px] mb-10">
            <p>Hey – I'm Aman. UX designer & developer currently building the</p>
            <p>future of digital products. Previously at McKinsey.</p>
          </div>
        </div>

        {/* Location bar */}
        <div className="relative z-10 mx-12 h-7 flex items-center justify-between border-t border-[#616161]">
          <span className="text-[#8a8a8a] text-[11px] uppercase tracking-[0.15px]">BASED IN INDIA</span>
          <a
            href="https://www.linkedin.com/in/aman-r-8a2724107/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center text-[#8a8a8a] text-[11px] uppercase tracking-[0.15px] gap-0.5"
          >
            LINKEDIN
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" className="text-[#8a8a8a]">
              <path d="M7 17L17 7M17 7H7M17 7V17" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </a>
        </div>
      </section>

      {/* ── SELECTED WORKS ────────────────────────────────────────── */}
      <section className="bg-[#080808] flex flex-col items-center pt-[100px] pb-[150px] px-10">
        <div className="w-full max-w-[1400px] flex flex-col gap-[41px]">

          {/* Section header */}
          <h2 className="text-[#f0f0f0] text-[48px] tracking-[-0.96px] leading-[1.2]">Selected works</h2>

          {/* Row 1: full-width */}
          <div className="flex flex-col gap-3">
            <Link href="/moniq-payment-app" className="w-full h-119.5 overflow-hidden bg-white block">
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
          <div className="grid grid-cols-2 gap-[41px]">
            {PROJECTS.slice(1, 3).map(({ img, title, desc }) => (
              <div key={title + img} className="flex flex-col gap-3">
                <div className="w-full h-[478px] overflow-hidden bg-white">
                  <img src={img} alt={title} className="w-full h-full object-cover" />
                </div>
                <div>
                  <p className="text-[#f0f0f0] text-[17.6px] leading-relaxed">{title}</p>
                  <p className="text-[#8c8b8b] text-[16.2px] leading-relaxed">{desc}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Row 3: two columns */}
          <div className="grid grid-cols-2 gap-[41px]">
            {PROJECTS.slice(3, 5).map(({ img, title, desc }) => (
              <div key={title} className="flex flex-col gap-3">
                <div className="w-full h-[478px] overflow-hidden bg-white">
                  <img src={img} alt={title} className="w-full h-full object-cover" />
                </div>
                <div>
                  <p className="text-[#f0f0f0] text-[17.6px] leading-relaxed">{title}</p>
                  <p className="text-[#8c8b8b] text-[16.2px] leading-relaxed">{desc}</p>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* ── PHOTO STRIP ───────────────────────────────────────────── */}
      <section className="h-[561px] overflow-hidden flex items-center">
        <style>{`
          @keyframes photo-scroll {
            from { transform: translateX(0); }
            to { transform: translateX(-50%); }
          }
          .photo-track {
            display: flex;
            flex-direction: row;
            width: max-content;
            animation: photo-scroll 30s linear infinite;
          }
          .photo-set {
            display: flex;
            flex-direction: row;
            gap: 19px;
            padding-right: 19px;
          }
        `}</style>
        <div className="photo-track">
          <div className="photo-set">
            {PHOTOS.map((src, i) => (
              <div key={i} className="w-[370px] h-[493px] shrink-0 overflow-hidden">
                <img src={src} alt="" className="w-full h-full object-cover" />
              </div>
            ))}
          </div>
          <div className="photo-set">
            {PHOTOS.map((src, i) => (
              <div key={i} className="w-[370px] h-[493px] shrink-0 overflow-hidden">
                <img src={src} alt="" className="w-full h-full object-cover" />
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