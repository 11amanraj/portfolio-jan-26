type MiniFooterProps = {
  fixed?: boolean
}

const MiniFooter = ({ fixed = false }: MiniFooterProps) => {
  const positionClass = fixed
    ? "fixed inset-x-0 bottom-0 z-50"
    : "relative z-10"

  return (
    <div className={`${positionClass} mx-6 flex min-h-7 items-center justify-between gap-4 border-t border-[#616161] py-1.5 sm:mx-12 sm:h-7 sm:py-0`}>
      <span className="text-[#8a8a8a] text-[11px] uppercase tracking-[0.15px]">BASED IN INDIA</span>
      <div className="flex gap-4 sm:gap-8">
        <a
          href="mailto:25amrj@gmail.com"
          className="flex items-center text-[#8a8a8a] text-[11px] uppercase tracking-[0.15px] gap-0.5"
        >
          EMAIL
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" className="text-[#8a8a8a]">
            <path d="M7 17L17 7M17 7H7M17 7V17" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </a>

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
    </div>
  )
}

export default MiniFooter
