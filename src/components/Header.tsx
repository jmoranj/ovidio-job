import ReactIcon from "./icons/ReactIcon";
import { motion } from "framer-motion";

export default function Header() {
  return (
    <motion.header
      initial={{ opacity: 0, y: 10 }}   // estado inicial (fora da tela e transparente)
      animate={{ opacity: 1, y: 10 }}    // estado final (visível e na posição)
      transition={{ duration: 1.0, ease: "easeOut" }} // tempo e suavização
      className="flex items-center h-16 p-5 bg-white/5 backdrop-blur-md border border-white/20 shadow-xl shadow-black/10 my-5 rounded-xl">
      <div className="flex items-center justify-start w-1/3">
        <a href="/">
          <ReactIcon className="animate-pulse" />
        </a>
      </div>

      <nav className="flex justify-center w-1/3">
        <div className="text-white font-bold flex gap-4 hover:text-cyan-500 transition-all duration-300">
          <a href="#colaborative">Portifólios</a>
        </div>
      </nav>

      <div className="flex justify-end w-1/3">
        <div className="text-white flex gap-4">
          <a href="/register">Register</a>
          <a href="/login">Login</a>
        </div>
      </div>
    </motion.header>
  )
}
