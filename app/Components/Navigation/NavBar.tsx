'use client'

import { usePathname } from 'next/navigation'
import Link from "next/link"

function ArrowBackIcon() {
  return (
    <svg
      aria-hidden="true"
      className="size-5 shrink-0"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M19 12H5m0 0 6-6m-6 6 6 6"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

function FileDownloadIcon() {
  return (
    <svg
      aria-hidden="true"
      className="size-4 shrink-0"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M12 3v11m0 0 4-4m-4 4-4-4M5 17v2a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2v-2"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

const NavBar = () => {
  const pathname = usePathname()
  const isHomePage = pathname === '/'

  return (
    <>
      <nav className="absolute inset-x-0 top-0 z-20 h-20 backdrop-blur-[4px]">
        <div className="flex h-full items-center justify-between px-12 pr-10">
          <a href="/" className="text-[22px] font-heading leading-none tracking-[-0.22px] text-[#f0f0f0]">AMAN RAJ</a>
          <a
            href="/aman_resume.pdf"
            download
            className="flex items-center gap-2 border border-[#2e2e2e] bg-[#080808]/45 px-4 py-3 text-[14.9px] leading-6 text-[#dbdbdb] backdrop-blur-[7.5px] transition-colors hover:border-[#68acef] hover:text-white"
          >
            Resume
            <FileDownloadIcon />
          </a>
        </div>
      </nav>

      {!isHomePage && (
        <Link
          href="/"
          className="fixed left-4 top-24 z-50 hidden h-[51px] items-center gap-2 border border-[#2e2e2e] bg-[#080808]/45 px-5 text-[18px] text-[#dbdbdb] backdrop-blur-md transition-colors hover:border-[#68acef] hover:text-white sm:left-12 md:inline-flex"
        >
          <ArrowBackIcon />
          Back
        </Link>
      )}
    </>
  )
}

export default NavBar
