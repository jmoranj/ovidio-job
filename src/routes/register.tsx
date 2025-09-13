import { createFileRoute } from '@tanstack/react-router'
import RegisterForm from '@/components/form/RegisterForm'

export const Route = createFileRoute('/register')({
  component: RouteComponent,
})

function RouteComponent() {
  return (
    <div className="flex-1 flex items-center justify-center py-8">
      <div className="w-full max-w-md">
        <RegisterForm />
      </div>
    </div>
  )
}
