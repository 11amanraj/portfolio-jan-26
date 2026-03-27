'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'

const colors = {
    dark: {
        background: '#1D170B',
        text: '#F8F4EE',
        secondaryText: '#FFFFFF'
    },
    light: {
        background: '#EFEBE3',
        text: '#1D170B',
        secondaryText: '#FFFFFF'
    },
    cardBg: '#F8F4EE'
}

function SingleCard({ active, title, content }: { active: boolean, title: string, content: string }) {
    return (
        <motion.div
            className='flex gap-2 w-100'
            animate={{ scale: active ? 1 : 0.9, opacity: active ? 1 : 0.6 }}
        >
            <motion.div
                className='p-12 rounded-md flex flex-col gap-12 w-full'
                style={{
                    backgroundColor: active ? colors.dark.background : colors.light.background,
                }}
            >
                <h4
                    className='text-2xl font-bold'
                    style={{
                        color: active ? colors.dark.text : colors.light.text
                    }}
                >
                    {title}
                </h4>

                <p
                    style={{
                        color: active ? colors.dark.secondaryText : colors.light.secondaryText
                    }}
                >
                    {content}
                </p>
            </motion.div>

            <motion.div className='flex-auto rounded-md overflow-clip'>
                <div className="bg-red-500 w-full h-full"></div>
            </motion.div>
        </motion.div>
    )
}

const InteractiveCardScroll = () => {
    const [activeCard, setActiveCard] = useState(0)

    const cards = [
        { title: 'Card 1', content: 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit' },
        { title: 'Card 2', content: 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit' },
        { title: 'Card 3', content: 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit' },
        // { title: 'Card 4', content: 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit' }
    ]

    return (
        <div
            className='w-240 flex flex-col gap-12 justify-center content-center px-16 py-16 rounded-lg'
            style={{ backgroundColor: colors.cardBg }}
        >
            <div className='flex justify-between'>
                <h3
                    className='text-4xl font-bold tracking-[-0.04em]'
                    style={{ color: colors.light.text }}
                >
                    TOTAL CONTROL
                </h3>

                <div className='flex gap-2'>
                    <button
                        onClick={() => setActiveCard(prev => Math.max(prev - 1, 0))}
                        className="bg-black cursor-pointer px-4 rounded-md"
                    >
                        Back
                    </button>

                    <button
                        onClick={() => setActiveCard(prev => Math.min(prev + 1, cards.length - 1))}
                        className="bg-black cursor-pointer px-4 rounded-md"
                    >
                        Next
                    </button>
                </div>
            </div>

            <div className="overflow-hidden w-auto py-10">
                <motion.div
                    className="flex gap-6"
                    animate={{
                        x: `calc(50% - 200px - ${activeCard * 424}px)`
                    }}
                    transition={{ type: 'spring', stiffness: 120 }}
                >
                    {cards.map((card, index) => (
                        <SingleCard
                            key={index}
                            title={card.title}
                            content={card.content}
                            active={index === activeCard}
                        />
                    ))}
                </motion.div>
            </div>
        </div>
    )
}

export default InteractiveCardScroll

// export default InteractiveCardScroll

// 'use client'

// import { useState } from 'react'
// import { motion } from 'framer-motion'

// const colors = {
//     dark: {
//         background: '#1D170B',
//         text: '#F8F4EE',
//         secondaryText: '#FFFFFF'
//     },
//     light: {
//         background: '#EFEBE3',
//         text: '#1D170B',
//         secondaryText: '#FFFFFF'
//     },
//     cardBg: '#F8F4EE'
// }

// function SingleCard({ activeCard, title, content }: { activeCard: number, title: string, content: string }) {
//     return (
//         <motion.div className='flex gap-2 w-full'>
//             <motion.div className='w-100 p-12 rounded-md flex flex-col gap-12' style={{
//                 backgroundColor: activeCard === 0 ? colors.dark.background : colors.light.background,
//             }}>
//                 <h4
//                     className='text-2xl font-bold'
//                     style={{
//                         color: activeCard === 0 ? colors.dark.text : colors.light.text
//                     }}>{title}</h4>
//                 <p style={{
//                     color: activeCard === 0 ? colors.dark.secondaryText : colors.light.secondaryText
//                 }}>{content}</p>
//             </motion.div>
//             <motion.div className='flex-auto rounded-md overflow-clip'>
//                 <div className="bg-red-500 w-full h-full"></div>
//                 {/* <img src="" alt="" /> */}
//             </motion.div>
//         </motion.div>
//     )
// }

// const InteractiveCardScroll = () => {
//     const [activeCard, setActiveCard] = useState(0)

//     return (
//         <div
//             className='w-240 flex flex-col gap-12 justify-center content-center px-16 py-16 rounded-lg'
//             style={{
//                 backgroundColor: colors.cardBg
//             }}>
//             <div className='flex justify-between'>
//                 <h3
//                     className='text-4xl font-bold tracking-[-0.04em]'
//                     style={{
//                         color: colors.light.text
//                     }}>TOTAL CONTROL</h3>
//                 <div className='flex gap-2'>
//                     <button className="bg-black cursor-pointer px-4 rounded-md">Back</button>
//                     <button className="bg-black cursor-pointer px-4 rounded-md">Next</button>
//                 </div>
//             </div>

//             <SingleCard activeCard={activeCard} title='Lorem Ipsum Mit Dotir' content='Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit,' />
//         </div>
//     )
// }

// export default InteractiveCardScroll