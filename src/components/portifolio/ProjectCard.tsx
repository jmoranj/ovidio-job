import { useMemo } from "react"
import projectsCard from "../assets/json/ProjectsCard.json"
import GitHubIcon from "../icons/GitHubIcon"

type Project = {
  name: string
  image: string
  link: string
  type: string
}

interface ProjectType {
  projectType: "colaborative" | "jmoranj" | "eduard0vieira"
}

export default function ProjectCard({ projectType }: ProjectType) {


  const projects = useMemo(() => {
    return projectsCard as Project[]
  }, [])

  return (

    <div className="flex gap-5">
      {projects.map((project) => project.type === projectType ? (
        <div key={project.name} className="flex flex-col flex-shrink-1 gap-2">

          <a href={project.link} target="_blank" className="overflow-hidden rounded-lg bg-white/5 border border-gray-700 shadow-xl shadow-black/10 backdrop-blur-md">
            {/* <img src={project.image} alt={project.name} className="w-full h-auto hover:scale-105 transition-all duration-300" /> */}
            <GitHubIcon size={200} className="text-black" />
          </a>

          <h3 className="text-white transition-all duration-300 text-lg font-medium">
            {project.name}
          </h3>
        </div>
      ) : null)}
    </div>
  )
}