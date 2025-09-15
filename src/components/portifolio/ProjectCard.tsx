import { useMemo } from "react"
import projectsCard from "../assets/json/ProjectsCard.json"

type Project = {
  name: string
  image: string
  link: string
  type: string
}

interface ProjectType {
  projectType: "colaborative" | "jmoranj" | "eduard0vieira"
}

export default function ProjectCard( { projectType }: ProjectType ) {


  const projects = useMemo(() => {
    return projectsCard as Project[]  
  }, [])

  return (

    <div className="flex gap-5">
      {projects.map((project) => project.type === projectType ? (
        <div key={project.name} className="flex flex-col flex-shrink-0 gap-2">
          <img src={project.image} alt={project.name} className="w-50 h-50 rounded-lg" />
          <a href={project.link} target="_blank" rel="noopener noreferrer" className="text-white hover:text-cyan-500 transition-all duration-300 text-lg font-medium">
            {project.name}
            
          </a>
        </div>
      ) : null)}
    </div>
  )
}