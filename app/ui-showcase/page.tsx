import EachUIProject from './EachUIProject'

const slides = [
    {
        slideNumber: '01',
        projectType: 'Mobile App',
        projectName: 'Lumio',
        description: 'A mindful journaling app designed for quiet reflection and daily.',
        typographyLabel: 'Inter — 400/500',
        colors: {
            bg: '#0D0D0D',
            textPrimary: '#FFFFFF',
            textMuted: '#666666',
            textLabel: '#555555',
            showcaseText: '#3a3a3a',
            dots: ['#FFFFFF', '#FFFFFF', '#FFFFFF', '#FFFFFF', '#FFFFFF'],
        },
    },
    {
        slideNumber: '02',
        projectType: 'Mobile App',
        projectName: 'Lumio',
        description: 'A mindful journaling app designed for quiet reflection and daily.',
        typographyLabel: 'Inter — 400/500',
        colors: {
            bg: '#FFFFFF',
            textPrimary: '#000000',
            textMuted: '#888888',
            textLabel: '#999999',
            showcaseText: '#cccccc',
            dots: ['#000000', '#000000', '#000000', '#000000', '#000000'],
        },
    },
]

export default function Page() {
    return (
        <div className="h-screen overflow-y-scroll overflow-x-hidden snap-y snap-mandatory">
            {slides.map((slide, i) => (
                <EachUIProject key={i} {...slide} />
            ))}
        </div>
    )
}