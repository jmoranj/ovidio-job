import ProjectCard from "./ProjectCard";
import SliderContainerProjectCard from "./SliderContainerProjectCard";

export default function PortifolioContainer() {
  return (
    <div className="flex flex-col w-full my-40 text-white/30 font-bold text-3xl gap-10">

      <section id="colaborative">
        <h2 className="transition-all duration-300 text-white">
          Portifolio Colaborativos
        </h2> 

        <SliderContainerProjectCard>
          <ProjectCard projectType="colaborative" />
        </SliderContainerProjectCard>
      </section>

      <section id="jmoranj">
        <h2 className="transition-all duration-300 text-white">
          Portifólio jmoranj
        </h2>

        <SliderContainerProjectCard>
          <ProjectCard projectType="jmoranj" />
        </SliderContainerProjectCard>
      </section>

      <section id="eduard0vieira">
        <h2 className="transition-all duration-300 text-white">
          Portifólio eduard0vieira
        </h2>

        <SliderContainerProjectCard>
          <ProjectCard projectType="eduard0vieira" />
        </SliderContainerProjectCard>
      </section>
    </div>
  )
}