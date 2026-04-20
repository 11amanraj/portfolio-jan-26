import EachUIProject from './EachUIProject'

const slides = [
    {
        slideNumber: '01',
        projectType: 'Mobile App',
        projectName: 'Mise',
        image: '/ui-showcase/mise.png',
        description: 'A smart meal prep companion that plans your week around batch cooking sessions — matched to your diet, goals, budget and schedule.',
        typographyLabel: 'Inter — 400/500/600/700',
        colors: {
            bg: '#0D0D0D',
            textPrimary: '#FFFFFF',
            textMuted: '#666666',
            textLabel: '#555555',
            showcaseText: '#3a3a3a',
            dots: ['#D85A30', '#111111', '#1A1A1A', '#F0EDE8', '#555555'],
        },
    },
    {
        slideNumber: '02',
        projectType: 'Mobile App',
        projectName: 'Halo',
        image: '/ui-showcase/halo.png',
        description: 'A remote health monitoring app helping families stay connected with elderly loved ones — delivering calm, timely health updates when it matters most.',
        typographyLabel: 'Inter — 400/600/700',
        colors: {
            bg: '#FFFFFF',
            textPrimary: '#000000',
            textMuted: '#888888',
            textLabel: '#999999',
            showcaseText: '#cccccc',
            dots: ['#1B6EF3', '#F4F6FA', '#0D1B2A', '#7A8A9B', '#534AB7'],
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