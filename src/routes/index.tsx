import BlurShadow from '@/components/BlurShadow';
import PortifolioContainer from '@/components/portifolio/PortifolioContainer';
import TitleContainer from '@/components/title/TitleContainer';
import { createFileRoute } from '@tanstack/react-router';
import { motion } from "framer-motion";
import { useEffect } from 'react';

export const Route = createFileRoute('/')({
  component: App,
})

function App() {
    useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
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
