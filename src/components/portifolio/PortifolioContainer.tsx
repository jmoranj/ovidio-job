import ProjectCard from "./ProjectCard";
import SliderContainerProjectCard from "./SliderContainerProjectCard";
import { motion } from "framer-motion";

export default function PortifolioContainer() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}   
      animate={{ opacity: 1, y: 0 }}    
      transition={{ duration: 3.0, ease: "easeOut" }}
      className="flex flex-col w-full my-40 text-white/30 font-bold text-3xl gap-10"
    >
      <motion.section id="colaborative">
        <h2 className="transition-all duration-300 text-white">
          Portifolio Colaborativos
        </h2>

        <SliderContainerProjectCard>
          <ProjectCard projectType="colaborative" />
        </SliderContainerProjectCard>
      </motion.section>

      <motion.section id="jmoranj">
        <h2 className="transition-all duration-300 text-white">
          Portifólio jmoranj
        </h2>

        <SliderContainerProjectCard>
          <ProjectCard projectType="jmoranj" />
        </SliderContainerProjectCard>
      </motion.section>

      <motion.section id="eduard0vieira">
        <h2 className="transition-all duration-300 text-white">
          Portifólio eduard0vieira
        </h2>

        <SliderContainerProjectCard>
          <ProjectCard projectType="eduard0vieira" />
        </SliderContainerProjectCard>
      </motion.section>
    </motion.div>
  );
}
