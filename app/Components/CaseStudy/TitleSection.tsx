import React from 'react'

const TitleSection = () => {
    return (
        <section className='pt-12 flex flex-col gap-22'>
            <h2 className='text-4xl'>Case Study Title</h2>
            <div className='flex justify-between flex-col gap-2 lg:flex-row'>
                <div className='flex flex-col'>
                    <div className='flex gap-2'>
                        <div className='bg-blue-500 w-4 h-4'></div>
                        <div>Timeline</div>
                    </div>
                    <div>September 2024-December 2024</div>
                </div>

                <div className='flex flex-col'>
                    <div className='flex gap-2'>
                        <div className='bg-blue-500 w-4 h-4'></div>
                        <div>Timeline</div>
                    </div>
                    <div>September 2024-December 2024</div>
                </div>

                <div className='flex flex-col'>
                    <div className='flex gap-2'>
                        <div className='bg-blue-500 w-4 h-4'></div>
                        <div>Timeline</div>
                    </div>
                    <div>September 2024-December 2024</div>
                </div>
            </div>
        </section>
    )
}

export default TitleSection