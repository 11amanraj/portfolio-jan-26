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

const NavBar = () => {
  const pathname = usePathname()

  if (pathname === '/') {
    return null
  }

  return (
    <Link
      href="/"
      className="fixed left-4 top-4 z-50 inline-flex h-[51px] items-center gap-2 border border-[#2e2e2e] bg-[#080808]/45 px-5 text-[18px] text-[#dbdbdb] backdrop-blur-md transition-colors hover:border-[#68acef] hover:text-white sm:left-12 sm:top-32"
    >
      <ArrowBackIcon />
      Back
    </Link>
  )
}

export default NavBar
