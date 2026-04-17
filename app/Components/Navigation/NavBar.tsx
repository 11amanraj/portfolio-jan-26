import React from 'react'

const NavBar = () => {
  return (
    <nav className='flex justify-between py-8 responsive-padding'>
        <img src='/icons/website_logo.svg' alt='website-logo' className='w-8'/>
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

export default NavBar