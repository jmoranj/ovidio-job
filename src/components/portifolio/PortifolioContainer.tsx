import ProjectCard from "./ProjectCard";

export default function PortifolioContainer() {
  return (
    <div className="w-full my-5 text-white/30 font-bold text-2xl">
      <div>
        <h2 className="hover:text-white transition-all duration-300">Portifolio Colaborativos</h2>
        <ProjectCard />
      </div>
      <div>
        <h2 className="hover:text-white transition-all duration-300">Portifólio jmoranj</h2>
        <ProjectCard />
      </div>
      <div>
        <h2 className="hover:text-white transition-all duration-300">Portifólio eduard0vieira</h2>
        <ProjectCard />
      </div>
    </div>
  )
}