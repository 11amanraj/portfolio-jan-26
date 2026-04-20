'use client'

import { usePathname } from 'next/navigation'
import ArrowBack from '@mui/icons-material/ArrowBack'

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
    <nav className='fixed top-0 left-0 z-50 flex justify-between py-8 responsive-padding'>
      <a href='/' className='cursor-pointer bg-white/70 border border-black rounded-full p-2'>
        <ArrowBack sx={{ color: 'black', fontSize: 48 }} />
      </a>
    </nav>
  )
}

export default NavBar
