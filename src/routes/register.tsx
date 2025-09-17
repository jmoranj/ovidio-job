import { createFileRoute } from '@tanstack/react-router'
import RegisterForm from '@/components/form/RegisterForm'
import { motion } from 'framer-motion'
import BlurShadow from '@/components/BlurShadow'

export const Route = createFileRoute('/register')({
  component: RouteComponent,
})

function RouteComponent() {
  return (
    <div className="flex-1 flex items-center justify-center py-8">
      <motion.div
        initial={{ opacity: 0, y: 0 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 5, ease: "easeOut" }} className="w-full max-w-md">
        <RegisterForm />
        <BlurShadow />
      </motion.div>
    </div>
  )
}
