'use client'

import { usePathname } from 'next/navigation'
import ArrowBack from '@mui/icons-material/ArrowBack'
import Link from "next/link"

const NavBar = () => {
  const pathname = usePathname()

  if (pathname === '/') {
    return (
      <nav className='flex justify-between py-8 responsive-padding'>
        <img src='/icons/website_logo.svg' alt='website-logo' className='w-8' />
        <a
          href='/aman_resume.pdf'
          download
          className='text-primary font-heading'
        >
          Resume
        </a>
      </nav>
    )
  }

  return (
    <Link
      href="/"
      className="fixed left-4 top-4 z-20 inline-flex h-[51px] items-center gap-2 border border-[#2e2e2e] bg-[#080808]/45 px-5 text-[18px] text-[#dbdbdb] backdrop-blur-md transition-colors hover:border-[#68acef] hover:text-white sm:left-12 sm:top-32"
    >
      <ArrowBack sx={{ fontSize: 20 }} />
      Back
    </Link>

    // <nav className='fixed top-0 left-0 z-50 flex justify-between py-8 responsive-padding'>
    //   <a href='/' className='cursor-pointer bg-white/70 border border-black rounded-full p-2'>
    //     <ArrowBack sx={{ color: 'black', fontSize: 48 }} />
    //   </a>
    // </nav>
  )
}

export default NavBar
