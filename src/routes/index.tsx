import PortifolioContainer from '@/components/portifolio/PortifolioContainer'
import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/')({
  component: App,
})

function App() {
  return (
    <PortifolioContainer />
  )
}
