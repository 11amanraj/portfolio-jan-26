import React from 'react'

const Footer = () => {
  return (
    <footer className='bg-[#131313] responsive-padding flex flex-col lg:flex-row justify-between items-start lg:items-end pt-6 lg:pt-15 pb-4 font-heading'>
      <div className='w-full flex flex-col gap-4'>
        <h5 className='text-[48px] lg:text-[72px] font-text'><span>Get in </span><span className='italic font-bold'>touch</span></h5>
        <ul className='lg:hidden flex justify-between'>
          <li>
            <a href="mailto:25amrj@gmail.com">
              <img src='/icons/mail.svg' alt='email' className='w-10 sm:w-12' />
            </a>
          </li>
          <li>
            <a
              href='https://www.linkedin.com/in/aman-r-8a2724107/'
              target='_blank'
              rel="noopener noreferrer"
            >
              <img src='/icons/linkedin.png' alt='linkedin' className='w-10 sm:w-12' />
            </a>
          </li>
          <li>
            <a
              href='https://www.behance.net/amanraj228'
              target='_blank'
              rel="noopener noreferrer"
            >
              <img src='/icons/behance.png' alt='behance' className='w-10 sm:w-12' />
            </a>
          </li>
          <li>
            <a
              href='https://github.com/11amanraj'
              target='_blank'
              rel="noopener noreferrer"
            >
              <img src='/icons/github.png' alt='github' className='w-10 sm:w-12' />
            </a>
          </li>
        </ul>
        <div className='flex flex-col lg:flex-row gap-5 text-base'>
          <p>Copyright © Aman Raj</p>
          <div className='hidden lg:block'>|</div>
          <p className='flex gap-1 items-center'>
            <span>Made with</span>
            <img src='/icons/heart.svg' alt='heart' />
            <span>and</span>
            {/* Icon by Freepik - https://www.flaticon.com/free-icons/dumpling title - dumpling icons */}
            <img src='/icons/momo.png' alt='momo' className='w-6 h-6' title='Momo :)' />
          </p>
        </div>
      </div>
      <div className='hidden lg:flex flex-col lg:flex-row text-xs lg:text-base gap-2 lg:gap-5'>
        <a href="mailto:25amrj@gmail.com">25amrj@gmail.com</a>
        <div>|</div>
        <a
          href='https://www.linkedin.com/in/aman-r-8a2724107/'
          target='_blank'
          rel="noopener noreferrer"
        >LinkedIn</a>
        <div>|</div>
        <a
          href='https://www.behance.net/amanraj228'
          target='_blank'
          rel="noopener noreferrer"
        >Behance</a>
        <div>|</div>
        <a
          href='https://github.com/11amanraj'
          target='_blank'
          rel="noopener noreferrer"
        >Github</a>
      </div>
    </footer>
  )
}

export default Footer