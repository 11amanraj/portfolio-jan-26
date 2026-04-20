import React from 'react'

type CardItem = { type: 'video'; src: string; alt: string } | { type: 'image'; src: string; alt: string }

const CARDS: CardItem[] = [
    { type: 'video', src: '/ui-videos/interaction-1/expanding-card.mp4', alt: 'Expanding card interaction' },
    { type: 'image', src: '/ui-showcase/halo.png', alt: 'Halo UI showcase' },
    { type: 'video', src: '/ui-videos/interaction-1/expanding-carousel.mp4', alt: 'Expanding Carousel interaction' },
    { type: 'image', src: '/ui-showcase/mise.png', alt: 'Mise UI showcase' },
    { type: 'video', src: '/ui-videos/interaction-1/hover-button.mp4', alt: 'Hover Button interaction' },
    { type: 'video', src: '/ui-videos/interaction-1/radial-reveal.mp4', alt: 'Radial Reveal interaction' },
]

const CarouselCard = ({ item }: { item: CardItem }) => (
    <div className='w-120 h-80 p-8 bg-white rounded-xl overflow-hidden shrink-0'>
        {item.type === 'video' ? (
            <video
                src={item.src}
                autoPlay
                muted
                loop
                playsInline
                className='w-full h-full object-content'
            />
        ) : (
            <img src={item.src} alt={item.alt} className='w-full h-full object-content' />
        )}
    </div>
)

const UICarousel = () => {
    return (
        <div className='w-full overflow-hidden py-16'>
            <style>{`
                @keyframes carousel-scroll {
                    from { transform: translateX(0); }
                    to { transform: translateX(-50%); }
                }
                .carousel-track {
                    display: flex;
                    flex-direction: row;
                    width: max-content;
                    animation: carousel-scroll 24s linear infinite;
                }
                .carousel-set {
                    display: flex;
                    flex-direction: row;
                    gap: 3rem;
                    padding-right: 1rem;
                }
            `}</style>
            <div className='carousel-track'>
                <div className='carousel-set'>
                    {CARDS.map((item, i) => <CarouselCard key={i} item={item} />)}
                </div>
                <div className='carousel-set'>
                    {CARDS.map((item, i) => <CarouselCard key={i} item={item} />)}
                </div>
            </div>
        </div>
    )
}

export default UICarousel
