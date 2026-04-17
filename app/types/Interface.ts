export interface Project {
    id: number,
    title: string,
    description: string,
    tags: string[],
    caseStudyLink: string,
    resourceLink: string,
    image: string
}

export interface sectionDetail {
    key: number,
    id: string,
    title: string,
    bg: string
}

export interface titleSection {
    id: number,
    header?: string,
    text?: string
}