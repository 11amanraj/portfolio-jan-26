import SectionDivider from './SectionDivider'

const EachSection = ({ title, children }: { title: string, children: React.ReactNode }) => {
    return (
        <>
            <SectionDivider />
            <section className='flex flex-col gap-4'>
                <h3 className='text-2xl text-[#6E737D]'>{title.toUpperCase()}</h3>
                <>
                    {children}
                </>
            </section>
        </>
    )
}

export default EachSection