import SectionWrapper from './SectionWrapper'

const ContentSection = ({ title, children }: { title: string, children: React.ReactNode }) => {
    return (
        <SectionWrapper>
            <h3 className='text-2xl text-[#6E737D]'>{title.toUpperCase()}</h3>
            <>
                {children}
            </>
        </SectionWrapper>
    )
}

export default ContentSection