import ProjectCards from './ProjectCards'
interface Project {
  id: number
  title: string
  description: string
  tags: string[]
  caseStudyLink: string
  resourceLink: string
  image: string
}

const ProjectsList = () => {
  const design_projects: Project[] = [
    {
      id: 0,
      title: 'Academic Info System for IIT Roorkee',
      description: 'Identified communication gaps in IIT Roorkee\'s academic ecosystem and designed a centralized platform using user interviews and the Double Diamond approach.',
      tags: ['UX Research', 'UI Design'],
      caseStudyLink: 'https://www.behance.net/gallery/221113241/Academic-Information-System',
      resourceLink: 'www.google.com',
      image: '/project-thumbnails/ais-portal.jpg'
    },
    {
      id: 1,
      title: 'GPay Redesign: Smarter Splits, Clearer Expenses',
      description: 'An experience-focused redesign that simplifies how users split costs and monitor spending within the Google Pay ecosystem.',
      tags: ['UI Design', 'UX Research'],
      caseStudyLink: 'https://www.behance.net/gallery/211761657/GPay-Redesign',
      resourceLink: 'www.google.com',
      image: '/project-thumbnails/gpay-redesign.jpg'
    },
    {
      id: 2,
      title: 'Researching Mobile Accessibility for the Elderly',
      description: 'Through user interviews and observational research, we uncovered barriers faced by older adults in mobile usage — culminating in a comprehensive set of accessibility guidelines.',
      tags: ['UX Research'],
      caseStudyLink: 'https://www.behance.net/gallery/213415765/A-UX-case-study-on-senior-friendly-mobile-interactions',
      resourceLink: 'www.google.com',
      image: '/project-thumbnails/elderly-ux.jpg'
    }
  ]

  const dev_projects: Project[] = [
    {
      id: 3,
      title: 'A Designer–Developer\'s Portfolio, Built with Code',
      description: 'Designed and developed my own portfolio using Next.js, TailwindCSS, and TypeScript — blending aesthetics with performance and thoughtful UX.',
      tags: ['Frontend', 'React'],
      caseStudyLink: 'https://www.amanraj.in/',
      resourceLink: 'https://github.com/11amanraj/portfolio-april-2025',
      image: '/project-thumbnails/portfolio.jpg'
    },
    {
      id: 4,
      title: 'Minimal To-Do App',
      description: 'A clean, responsive to-do app built with Next.js and Tailwind CSS, designed for fast, organized task management across devices.',
      tags: ['Frontend', 'React'],
      caseStudyLink: 'https://to-do-latest.vercel.app/',
      resourceLink: 'https://github.com/11amanraj/to-do-latest',
      image: '/project-thumbnails/to-do.png'
    }
  ]

  return (
    <div className="snap-start text-background flex flex-col w-full gap-8 py-6 sm:py-16 responsive-padding bg-primary">
      <h3 className='text-[64px] sm:text-[96px] font-heading font-bold'>Projects</h3>
      <ul className='flex flex-col gap-8 sm:gap-8 items-center'>
        {design_projects
          .map(project =>
            <ProjectCards key={project.id} isReverse={(project.id) % 2 !== 0} project={project} designCaseStudy={true} />
          )}
        {dev_projects
          .map(project =>
            <ProjectCards key={project.id} isReverse={(project.id) % 2 !== 0} project={project} designCaseStudy={false} />
          )}
      </ul>
    </div>
  )
}

export default ProjectsList
