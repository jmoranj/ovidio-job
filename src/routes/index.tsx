import PortifolioContainer from '@/components/portifolio/PortifolioContainer'
import { createFileRoute } from '@tanstack/react-router'
import { motion } from "framer-motion";
import TitleContainer from '@/components/title/TitleContainer';
import BlurShadow from '@/components/BlurShadow';

export const Route = createFileRoute('/')({
  component: App,
})

function App() {
  return (
    <div>
      <TitleContainer/>
      <motion.div
        initial={{ opacity: 0, y: 0 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 3.5, ease: "easeOut" }}>
        <PortifolioContainer />
      </motion.div>
      <BlurShadow />
    </div>
  )
}
