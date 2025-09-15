import PortifolioContainer from '@/components/portifolio/PortifolioContainer'
import { createFileRoute } from '@tanstack/react-router'
import Title from '@/components/Title'
import { motion } from "framer-motion";

export const Route = createFileRoute('/')({
  component: App,
})

function App() {
  return (
    <div>
      <Title />
      <motion.div
        initial={{ opacity: 0, y: 0 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 3.5, ease: "easeOut" }}>
        <PortifolioContainer />
      </motion.div>
    </div>
  )
}
