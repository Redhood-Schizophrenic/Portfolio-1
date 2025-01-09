import ProjectCard from '../components/ProjectCard'

const projects = [
  {
    id: 1,
    title: 'StudyWings',
    description: 'The passport to global education, offering curated programs and support for students seeking transformative academic experiences worldwide.',
    slug: 'studywings'
  },
  {
    id: 2,
    title: 'Blood Buddy',
    description: 'Connecting donors with recipients, the platform simplifies the process of giving the gift of life. Join in saving lives, one donation at a time.',
    slug: 'blood-buddy'
  },
  {
    id: 3,
    title: 'Adventour',
    description: 'Adventour is a tours and travels website which allows users to enjoy their weekends or any other occasions at their preferred destinations.',
    slug: 'adventour'
  },
  {
    id: 4,
    title: 'Fitclub',
    description: 'Fitclub is a gym website with pricing plans, programs, etc.',
    slug: 'fitclub'
  },
  {
    id: 5,
    title: 'Fasco',
    description: 'Fasco is a e-commerce website which allows users to purchase apparels as per their personal preference',
    slug: 'fasco'
  },
  {
    id: 6,
    title: 'ElectroTech',
    description: 'ElectroTech Manufacturing is a company profile website of a manufacturing company',
    slug: 'electrotech'
  },
  {
    id: 7,
    title: 'Watches',
    description: 'A template website for Watches display',
    slug: 'watches'
  },
  {
    id: 8,
    title: 'Eatofy',
    description: 'POS software Website',
    slug: 'eatofy'
  },
  {
    id: 9,
    title: 'Furnitures',
    description: 'A template website for Furnitures display',
    slug: 'furnitures'
  },
  {
    id: 10,
    title: 'Glowing',
    description: 'A template website for Cosmetics display',
    slug: 'glowing'
  },
  {
    id: 11,
    title: 'Finoplex',
    description: 'A Financial Calculator app to evaluate Personal Finances.',
    slug: 'finoplex'
  },
  {
    id: 12,
    title: 'Daily Wear',
    description: 'A template website for Daily Wear / Apparels  display',
    slug: 'daily-wear'
  },
  {
    id: 13,
    title: 'Personal Portfolio 1',
    description: 'My previous Portfolio',
    slug: 'portfolio-1'
  },
  {
    id: 14,
    title: 'Personal Portfolio 2',
    description: 'My more recent Portfolio',
    slug: 'portfolio-2'
  },
]

export default function Projects() {
  return (
    <div className="container mx-auto px-4 py-16">
      <div className="max-w-3xl mx-auto mb-12 text-center">
        <h1 className="text-4xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-primary via-primary/80 to-primary/60 animate-gradient">
          Projects
        </h1>
        <p className="text-muted-foreground text-md">
          Projects I have created for the clients.
          (Most of the websites mentioned are demo websites and not live website as we have signed NDAs for them)
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </div>
  )
}

