import PortifolioContainer from '@/components/portifolio/PortifolioContainer'
import { createFileRoute } from '@tanstack/react-router'
import Title from '@/components/Title'

export const Route = createFileRoute('/')({
  component: App,
})

function App() {
  return (
    <div>
      <Title />
      <PortifolioContainer />
    </div>
  )
}
