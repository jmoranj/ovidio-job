import { motion } from "framer-motion";

export default function Title() {

  return (
    <motion.div
      initial={{ opacity: 0, y: 0 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 3.5, ease: "easeOut" }}
      className="flex flex-col gap-10"
    >
      <motion.h1
        initial={{ x: 80 }}
        animate={{ x: 0 }}
        transition={{ duration: 2, ease: "easeOut" }}
        className="flex font-bold text-9xl bg-clip-text text-transparent bg-gradient-to-r from-cyan-50 to-cyan-500">
        Olá, <br /> Bem vindo
      </motion.h1>

      <p className='text-white flex flex-col text md:text-5xl text-4xl gap-2'>
        <motion.span
          initial={{ x: 80 }}
          animate={{ x: 0 }}
          transition={{ duration: 2, ease: "easeOut" }}>Projeto desenvolvido por</motion.span>

        <motion.span
          initial={{ opacity: 0, y: 60 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 2, ease: "easeOut" }}>@jmoranj e @eduard0vieira, estudantes da UNISO.</motion.span>
      </p>
    </motion.div>
  )
}
