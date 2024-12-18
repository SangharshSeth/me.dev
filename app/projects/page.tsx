import Link from 'next/link'

interface Project {
  title: string
  description: string
  projectUrl: string
  githubUrl: string
}

const projects: Project[] = [
  {
    title: "CodeKombat",
    description: "An interactive coding platform for learning and practicing programming skills.",
    projectUrl: "https://codekombat.pages.dev/",
    githubUrl: "https://github.com/yourusername/codekombat"
  },
  {
    title: "Distributed Key value store in golang",
    description: "High-performance key value store with distributed architecture to deploy to multiple nodes",
    projectUrl: "https://github.com/SangharshSeth/cached",
    githubUrl: "https://github.com/SangharshSeth/cached"
  }
]

export default function Projects() {
  return (
    <div className="projects-page">
      <h1>Projects</h1>
      <p className="intro">
        A curated list of my key projects in backend engineering and system design.
      </p>
      
      <ul className="project-list">
        {projects.map((project, index) => (
          <li key={index} className="project-item">
            <Link href={project.projectUrl} className="project-title" target="_blank" rel="noopener noreferrer">
              {project.title}
            </Link>
            <span className="project-description">{project.description}</span>
          </li>
        ))}
      </ul>
    </div>
  )
}

