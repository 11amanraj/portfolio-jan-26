import React from 'react'

const ActionLink: React.FC<{title: string, link: string, isPrimary: boolean}> = ({title, link, isPrimary}) => {
  if (isPrimary) {
      return (
      <a
          href={link}
          target="_blank"
          rel="noopener noreferrer"
          className='group bg-background border border-background flex gap-3 px-5 py-3 rounded-full'
      >
          <p className='font-text font-bold text-base sm:text-xl xl:text-2xl text-primary'>{title}</p>
          <div className='w-6 h-6 sm:w-7 sm:h-7 xl:w-9 xl:h-9 bg-primary rounded-full group-hover:rotate-45 transition-transform duration-300'>
            <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 -960 960 960"
                className='text-background w-full'
            >
                <path d="m256-240-56-56 384-384H240v-80h480v480h-80v-344L256-240Z"/>
            </svg>
          </div>
      </a>
    )
  } else {
    return (
        <a
            href={link}
            target="_blank"
            rel="noopener noreferrer"
            className='group border border-background flex gap-3 px-5 py-3 rounded-full'
        >
            <p className='font-text font-bold text-base sm:text-xl xl:text-2xl text-background'>{title}</p>
            <div className='w-6 h-6 sm:w-7 sm:h-7 xl:w-9 xl:h-9 bg-background rounded-full group-hover:rotate-45 transition-transform duration-300'>
                <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 -960 960 960"
                className='w-full text-background'
                fill='#0A84FF'
            >
                <path d="m256-240-56-56 384-384H240v-80h480v480h-80v-344L256-240Z"/>
            </svg>
            </div>
        </a>
      )
  }
}

export default ActionLink