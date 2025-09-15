import { Outlet, createRootRoute } from '@tanstack/react-router'

import Footer from '@/components/Footer'
import Header from '../components/Header'

export const Route = createRootRoute({
  component: () => (
    <div className="min-h-screen flex flex-col">
      <Header />

      <main className="flex-1 flex flex-col">
        <Outlet />
      </main>
      <Footer />
    </div>
  ),
})
