'use client';
import React from 'react'
import Tags from './Tags'
interface Project {
  id: number
  title: string
  description: string
  tags: string[]
  caseStudyLink: string
  resourceLink: string
  image: string
}
import ActionLink from './ActionLink';

interface ProjectCardsProps {
  project: Project,
  isReverse: boolean,
  designCaseStudy: boolean
}

const ProjectCards: React.FC<ProjectCardsProps> = ({ project, isReverse, designCaseStudy }) => {

  return (
    <li className={`max-w-300 p-8 rounded-4xl bg-white/70 flex flex-col ${isReverse ? 'lg:flex-row-reverse' : 'lg:flex-row'} items-center gap-8 md:gap-16`}>
      <div className="rounded-2xl w-full flex-1 overflow-hidden">
        <img src={project.image} alt={project.title} className='h-full object-cover' />
      </div>
      <div className='flex flex-col flex-1 gap-3 sm:gap-4'>
        <h4 className='font-heading font-bold text-2xl sm:text-3xl xl:text-4xl'>{project.title}</h4>
        <div className='flex gap-3 flex-wrap'>
          {designCaseStudy
            ? <ActionLink title='Read Case Study' isPrimary={true} link={project.caseStudyLink} />
            : <>
              <ActionLink title='View Website' isPrimary={true} link={project.caseStudyLink} />
              <ActionLink title='Github' isPrimary={false} link={project.resourceLink} />
            </>
          }
        </div>
        <ul className='flex gap-3'>
          {project.tags.map(tag => <Tags key={Math.random()} title={tag} />)}
        </ul>
      </div>
    </li>
  )
}

export default ProjectCards
