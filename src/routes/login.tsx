
import FormComponent from '@/components/form/FormComponent'
import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/login')({
  component: Login,
})

function Login() {
  return (
    <div className="flex-1 flex items-center justify-center py-8">
      <div className="w-full max-w-md">
        <FormComponent />
      </div>
    </div>
  )
}
