import ProjectCard from "./ProjectCard";
import SliderContainerProjectCard from "./SliderContainerProjectCard";

export default function PortifolioContainer() {
  return (
    <div className="flex flex-col w-full my-5 text-white/30 font-bold text-3xl gap-20">

      <section id="colaborative">
        <h2 className="w-fit transition-all duration-300 bg-gradient-to-r from-cyan-500 to-pink-500 bg-clip-text animate-bounce">
          Portifolio Colaborativos
        </h2>

        <SliderContainerProjectCard>
          <ProjectCard projectType="colaborative" />
        </SliderContainerProjectCard>
      </section>

      <section id="jmoranj">
        <h2 className=" w-fit transition-all duration-300 bg-gradient-to-r from-pink-500 to-purple-600 bg-clip-text animate-bounce">
          Portifólio jmoranj
        </h2>

        <SliderContainerProjectCard>
          <ProjectCard projectType="jmoranj" />
        </SliderContainerProjectCard>
      </section>

      <section id="eduard0vieira">
        <h2 className="w-fit transition-all duration-300 bg-gradient-to-r from-purple-600 to-blue-700 bg-clip-text animate-bounce">
          Portifólio eduard0vieira
        </h2>

        <SliderContainerProjectCard>
          <ProjectCard projectType="eduard0vieira" />
        </SliderContainerProjectCard>
      </section>
    </div>
  )
}